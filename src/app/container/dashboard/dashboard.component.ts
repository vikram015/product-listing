import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/model/category.model";
import { Product } from "src/app/model/product.model";
import { CategoryService } from "src/app/services/category.service";
import { ProductService } from "src/app/services/product.service";
import {map} from 'rxjs/operators'
import { environment } from "src/environments/environment";
import { toImageUrl } from "src/app/util/util";
import { Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { Observable } from "rxjs";
import { Cart } from "src/app/model/cart.model";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    $cart!: Observable<Cart>
    basePath = environment.api_product
    products!: Product[]
    categories!: Category[]
    constructor(private router:Router,
        private cartService:CartService,
        private productService: ProductService,
        private categoryService: CategoryService
    ) { }
    ngOnInit() {
        this.productService.getProducts()
            .pipe(map(products => products.map(p => {
                return {...p,images: p.images.map(img => toImageUrl(p.id!,img))}
            })))
            .subscribe(res => 
                this.products = res);
        this.categoryService.getCategories()
            .subscribe(res => this.categories = res);
        this.$cart = this.cartService.$cart
    }
    productClick(product:Product){
        this.router.navigate([`product/${product.id}`])
    }
    addToCart({product,quantity}:{product:Product,quantity:number}){
        this.cartService.addToCart(product,quantity)
    }
    removeFromCart(product:Product){
        this.cartService.removeFromCart(product)
    }
}