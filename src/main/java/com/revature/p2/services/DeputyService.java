package com.revature.p2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.p2.models.Deputy;
import com.revature.p2.models.Offender;
import com.revature.p2.repository.DeputyDAO;

@Service
public class DeputyService {
	
	@Autowired
	private DeputyDAO deputyDAO;
	
	public Deputy addDeputy(Deputy deputy) {
		return deputyDAO.save(deputy);
	}
	
	public List<Deputy> getAllDeputies(){
		return (List<Deputy>)deputyDAO.findAll();
	}
	
	@Transactional
	public void updateDeputy(Deputy updateDeputyRequest) {
		
		Deputy existingDeputy = deputyDAO.findDeputyById(updateDeputyRequest.getId());
		//Check if the offender id exists

		
		existingDeputy.setUsername(updateDeputyRequest.getUsername());
		existingDeputy.setEmail(updateDeputyRequest.getEmail());
		existingDeputy.setPassword(updateDeputyRequest.getPassword());

		
		deputyDAO.save(existingDeputy);	
	}
	
	@Transactional
	public void deleteDeputyById(int id) {
		// Check if the offender exists
		if(deputyDAO.existsById(id))
			deputyDAO.deleteById(id);
	}

}
