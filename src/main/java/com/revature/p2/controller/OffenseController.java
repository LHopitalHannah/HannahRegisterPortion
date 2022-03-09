package com.revature.p2.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.revature.p2.models.Offense;
import com.revature.p2.services.OffenderService;
import com.revature.p2.models.Offender;
import com.revature.p2.services.OffenseService;

@RestController
@CrossOrigin
@RequestMapping("/offense")
public class OffenseController {
	
	@Autowired
	private OffenseService offenseService;
	

	@Autowired
	private OffenderService offenderService;
	
	@PostMapping("/add")
	public String add(@RequestBody Offense offense) {
//		offenseService.addOffense(offense);
//		return "New offense is added";
		
//		Offender offender = oneRepository(offense.getOffenderId()); //Get the parent Object
		Offender offender = offenderService.getOffenderById(offense.getOffender().getId());
		Offense newOffense  = new Offense(); //Create a new Many object
		newOffense.setOffenseDescription(offense.getOffenseDescription());
		newOffense.setOffenseDate(offense.getOffenseDate());
		newOffense.setOffender(offender); // Set the parent relationship
		offenseService.addOffense(newOffense);
		return "New offense is added";
//		return new ResponseEntity(manyRepository.save(many), HttpStatus.CREATED);
	    
	}	
	
//	@PostMapping("/add/offenderid")
//	public String add(@RequestBody Offense offense) {
//		offenseService.addOffense(offense);
////		offenderService.addOffense(offense);
//		return "New offense is added";
//	}
	
	@GetMapping("/getAllOffense")
	public List<Offense> getAll(){
		return offenseService.getAllOffenses();
	}
	
//	@PutMapping("/put")
//	@ResponseStatus(HttpStatus.NO_CONTENT)
//	public void updateOffenseInfo(@RequestBody Offense updateOffenseRequest, HttpServletRequest req) {
//
//		offenseService.updateOffense(updateOffenseRequest);
//	}
	
//	@PatchMapping("/update")
//	@ResponseStatus(HttpStatus.OK)
//	public void updateOffense(@RequestBody Offense updateOffenseRequest, HttpServletRequest req) {
//		offenseService.updateOffense(updateOffenseRequest);
//	}
	
	@DeleteMapping("/delete/id")
	@ResponseStatus(HttpStatus.OK)
	public void deleteOffenseById(int id) {
		offenseService.deleteOffenseById(id);
	}

}
