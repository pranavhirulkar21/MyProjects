package com.saloon.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.saloon.entities.Products;

public interface ProductDao extends JpaRepository<Products, String>{


	@Query(value = "select * from products p where p.product_Gender= :gender",nativeQuery = true)
		List<Products> getBygender(String gender);


	//	
		
		//List<Products> findByIdStartsWith(String string);
		@Query(value ="SELECT * FROM Products p WHERE p.product_Id LIKE %:string%",nativeQuery = true)
		List<Products> findByIdStartsWith(String string);

		Products save(Optional<Products> p);

		//List<Products> findByproduct_IdStartsWith(String s);

		//List<Products> findByproduct_IdStartsWith(String str);
		
		//List<Products> findByproduct_IdStartingWith(String prefix);
}
