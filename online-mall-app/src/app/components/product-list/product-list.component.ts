import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../commonClasses/product";
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-product-list',
  //templateUrl: './product-list.component.html', //
 // templateUrl: './product-list-table.component.html',
  templateUrl: './product-list-grid.component.html', // folosim template-ul in defafoarea celoerlalte
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 products: Product[] = [];
 currentCategoryId: any = 0;
 searchMode: boolean;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }  // injection

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {  // similar to @PostConstruct
   this.listProducts();
  });
  }


  listProducts(){
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has("id"); // route = use the activated route,
    // snapshot= state of route at this given momement, paramMap= Map of all the route parameters
    if(hasCategoryId){
      // get the "id"  param string convert to a number iusing the "+" symbol
      this.currentCategoryId = this.route.snapshot.paramMap.get('id');
      this.currentCategoryId = parseInt(this.currentCategoryId)  // de urmarit ce se intampla aici
    }
    else { this.currentCategoryId = 1;
    }

   this.productService.getProductList(this.currentCategoryId).subscribe(
     productsArray => {
       this.products = productsArray;
     }
   )
  }


/**
listProducts() {

  this.searchMode = this.route.snapshot.paramMap.has('keyword');
  if (this.searchMode) {
    this.handleSearchProducts()
  }  else {
    this.handleListProduct();
  }
}

  handleSearchProducts(){
  const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
  // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe( data => {this.products = data;})


  }



  handleListProduct(){
      // check if "id" parameter is available
      const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

      if (hasCategoryId) {
        // get the "id" param string. convert string to a number using the "+" symbol
        this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      }
      else {
        // not category id available ... default to category id 1
        this.currentCategoryId = 1;
      }

      //
      // Check if we have a different category than previous
      // Note: Angular will reuse a component if it is currently being viewed
      //

      // if we have a different category id than previous
      // then set thePageNumber back to 1
      if (this.previousCategoryId != this.currentCategoryId) {
        this.thePageNumber = 1;
      }

      this.previousCategoryId = this.currentCategoryId;

      console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

      // now get the products for the given category id
      this.productService.getProductListPaginate(this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId)
        .subscribe(this.processResult());
    }
 **/
  }






