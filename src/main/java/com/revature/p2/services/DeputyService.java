package com.revature.p2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.p2.models.Deputy;
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
	

}
