import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { StarComponent } from './shared/star.component';
@NgModule({
  // declarations are our own Components
  //that we created for our project.
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent
  ],
  // These are third party components
  // These are Angular Modules or third party modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
