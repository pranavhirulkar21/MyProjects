package com.saloon.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saloon.entities.Manager;

public interface ManagerDao extends JpaRepository<Manager, Integer>{

//	Manager findByEmail(String email);
	
}
