import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
@Component({
  selector : 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    productPageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number =2;
    showImage: boolean = false;
    listFilter:string='cart';
    products: IProduct[] =  [  // We use any[] in TS if we don't know what  data type to use
            {
              "productId": 1,
              "productName": "Leaf Rake",
              "productCode": "GDN-0011",
              "releaseDate": "March 19, 2016",
              "description": "Leaf rake with 48-inch wooden handle.",
              "price": 19.95,
              "starRating": 3.2,
              "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
              "productId": 2,
              "productName": "Garden Cart",
              "productCode": "GDN-0023",
              "releaseDate": "March 18, 2016",
              "description": "15 gallon capacity rolling garden cart",
              "price": 32.99,
              "starRating": 4.2,
              "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }
                    ];

      toggleImage():void {
        this.showImage = !this.showImage;
      }
      ngOnInit(): void {
        throw new Error("Method not implemented.");
      console.log("I am onInit method");
      }
      // this method is called when ever an output form child component is sent to parent component
      // In this method we are just changing the productPageTitle property by appending the message 
      // that came from the child component.
      onRatingClicked(message: string): void{
        this.productPageTitle = 'Product List :'+ message;
      }
}