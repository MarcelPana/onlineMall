import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import {CommonModule} from "@angular/common";
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from './product-category-menu/product-category-menu.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  // the order of the routes is very important, they must be form the most specific to the most general

{path:'search/:keyword', component: ProductListComponent},
{path:'category/:id', component: ProductListComponent},
{path:'category', component: ProductListComponent},
{path:'products', component: ProductListComponent},
{path:'', redirectTo: '/products', pathMatch: 'full'}, // match all queries that don't match any route and must be at the end of the array
{path:'**', redirectTo: '/products', pathMatch: 'full'}, // match all queries that don't match any route  and must be at the end of the array

];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,

  ],
  imports: [
    RouterModule.forRoot(routes), // added after creating routes
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,



  ],
  providers: [
    ProductService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
