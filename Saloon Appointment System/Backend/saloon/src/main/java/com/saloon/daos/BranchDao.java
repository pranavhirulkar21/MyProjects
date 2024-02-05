package com.saloon.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saloon.entities.Branch;

public interface BranchDao extends JpaRepository<Branch, Integer>{

}
