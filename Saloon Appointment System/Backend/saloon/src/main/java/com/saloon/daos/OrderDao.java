package com.saloon.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.saloon.entities.Orders;

public interface OrderDao extends JpaRepository<Orders, Integer>{

	
	
}
