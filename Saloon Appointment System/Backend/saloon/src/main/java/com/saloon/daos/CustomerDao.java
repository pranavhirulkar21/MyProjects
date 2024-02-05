package com.saloon.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saloon.entities.Customers;

public interface CustomerDao extends JpaRepository<Customers, Integer> {

	Optional<Customers> findByEmailAndPassword(String email, String password);

	Customers save(Optional<Customers> c);

}
