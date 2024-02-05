package com.saloon.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.saloon.entities.Review;

public interface ReviewDao extends JpaRepository<Review, Integer>{
	
//	@Query(value ="SELECT * FROM Products p WHERE p.product_Id LIKE %:string%",nativeQuery = true)
//		List<Review> findBybranchId(int id);
	
		
}

