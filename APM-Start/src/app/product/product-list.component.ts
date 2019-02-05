import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
  selector : 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit{
    constructor(private productService:ProductService){
      // this automatically injects the object of ProductService into the ProductListComponent
    }
    productPageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number =2;
    showImage: boolean = false;
    listFilter:string='cart';
    products: IProduct[] ;
      toggleImage():void {
        this.showImage = !this.showImage;
      }
      ngOnInit(): void {
        // We are using ngOnInit() method to initialize the products[] array
        // before the component is created
        //productService.getProducts() method returns the products we need
        // So we can remove the hardcoding above
        console.log("on init");

        this.products = this.productService.getProducts();
      }
      // this method is called when ever an output form child component is sent to parent component
      // In this method we are just changing the productPageTitle property by appending the message 
      // that came from the child component.
      onRatingClicked(message: string): void{
        this.productPageTitle = 'Product List :'+ message;
      }
}