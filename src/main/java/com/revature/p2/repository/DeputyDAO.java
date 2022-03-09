package com.revature.p2.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.revature.p2.models.Deputy;

public interface DeputyDAO extends CrudRepository<Deputy, Integer> {
	
	@Query("from Deputy o where o.id = :id order by orderBy")
	Deputy findDeputyById(int id);

}
