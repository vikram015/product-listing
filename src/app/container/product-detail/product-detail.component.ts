import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductListComponent } from "src/app/component/product-list/product-list.component";
import { Product } from "src/app/model/product.model";
import { ProductService } from "src/app/services/product.service";
import { toImageUrl } from "src/app/util/util";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    product!:Product
    constructor(private activatedRoute:ActivatedRoute,
        private productService:ProductService){}
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(parms => {
            const productId = parms.get("productId")
            productId && this.productService.getProductDetail(productId)
                .subscribe(product => this.product = {...product,images: product.images.map(img => toImageUrl(productId,img))})
        })
    }

}