package com.revature.p2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	

}