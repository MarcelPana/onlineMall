import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../commonClasses/product";
import {ProductCategory} from "../commonClasses/product-category";





@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'; // with  " ?size=100 "    resize the number of pag are diplayed
  private categoryUrl = 'http://localhost:8080/api/product-category';
  constructor(private httpClient: HttpClient) {
  }



  getProductList(theCategoryId: number): Observable<Product[]> {
      // build URL based on category Id
      const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`// urlul ce cauta dupa id
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductsCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productsCategory)
    );
  }
}




  interface GetResponseProducts {   // unwraps the json from Spring data rest _embedded entry
    _embedded: {
      products: Product[];
    }
  }

interface GetResponseProductsCategory {   // unwraps the json from Spring data rest _embedded entry
  _embedded: {
    productsCategory: ProductCategory[];
  }
}


