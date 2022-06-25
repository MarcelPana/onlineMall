package com.example.onlineMall.dao;


import com.example.onlineMall.entity.Product;
import com.example.onlineMall.entity.ProductCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "product", path = "product")
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Eroare 404    http://localhost:8080/api/products/search/findByCategoryId?id=2  -  solved
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable); // SELECT * FROM product where category_id=?
   // http://localhost:8080/api/products/search/findByNameContaining?name
    Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);


}
