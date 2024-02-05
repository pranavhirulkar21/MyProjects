package com.saloon.daos;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saloon.entities.Date;

public interface DateDao extends JpaRepository<Date, Integer>{

	Optional<Date> findByDate(LocalDate date);
	
}
