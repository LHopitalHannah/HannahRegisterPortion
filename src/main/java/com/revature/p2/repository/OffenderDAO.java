package com.revature.p2.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.revature.p2.models.Offender;

public interface OffenderDAO extends CrudRepository<Offender, Integer>{

	@Query("from Offender o where o.id = :id order by orderBy")
	Offender findOffenderById(int id);
	
}
