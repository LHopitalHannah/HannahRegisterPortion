package com.revature.p2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.p2.models.Offense;
import com.revature.p2.repository.OffenseDAO;

@Service
public class OffenseService {
	
	@Autowired
	private OffenseDAO offenseDAO;
	
	public Offense addOffense(Offense offense) {
		return offenseDAO.save(offense);
	}
	
	public List<Offense> getAllOffenses(){
		return (List<Offense>)offenseDAO.findAll();
	}
	
	@Transactional
	public void updateOffense(Offense updateOffenseRequest) {
		
		Offense existingOffense = offenseDAO.findOffenseById(updateOffenseRequest.getId());
		//Check if the offender id exists

		
		//existingOffense.setSrc(updateOffenseRequest.getSrc());
		
		
		offenseDAO.save(existingOffense);	
	}
	
	@Transactional
	public void deleteOffenseById(int id) {
		// Check if the offender exists
		if(offenseDAO.existsById(id))
			offenseDAO.deleteById(id);
	}
}