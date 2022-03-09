package com.revature.p2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.p2.models.Deputy;
import com.revature.p2.models.Offender;
import com.revature.p2.repository.DeputyDAO;
import com.revature.p2.repository.OffenderDAO;

@Service
public class OffenderService {
	
	@Autowired
	private OffenderDAO offenderDAO;
	
	public Offender addOffender(Offender offender) {
		return offenderDAO.save(offender);
	}
	
	public List<Offender> getAllOffenders(){
		return (List<Offender>)offenderDAO.findAll();
	}
	
	public Offender getOffenderById(int id){
		return offenderDAO.findOffenderById(id);
	}
	
	@Transactional
	public void updateOffender(Offender updateOffenderRequest) {
		
		Offender existingOffender = offenderDAO.findOffenderById(updateOffenderRequest.getId());
		//Check if the offender id exists

		
		existingOffender.setSrc(updateOffenderRequest.getSrc());
		existingOffender.setWeight(updateOffenderRequest.getWeight());
		existingOffender.setAlias(updateOffenderRequest.getAlias());
		existingOffender.setDob(updateOffenderRequest.getDob());
		existingOffender.setHeight(updateOffenderRequest.getHeight());
		existingOffender.setEyes(updateOffenderRequest.getEyes());
		existingOffender.setHair(updateOffenderRequest.getHair());
		existingOffender.setFullname(updateOffenderRequest.getFullname());
		existingOffender.setSex(updateOffenderRequest.getSex());
		
		offenderDAO.save(existingOffender);	
	}
	
	@Transactional
	public void deleteOffenderById(int id) {
		// Check if the offender exists
		if(offenderDAO.existsById(id))
			offenderDAO.deleteById(id);
	}
}