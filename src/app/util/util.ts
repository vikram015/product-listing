import { environment } from "src/environments/environment"

const basePath = environment.api_product
export const toImageUrl = (productId:string, imageId:string) => `${basePath}/api/product/${productId}/image/${imageId}`