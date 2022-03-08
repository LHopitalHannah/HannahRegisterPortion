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


import com.revature.p2.models.Offender;
import com.revature.p2.services.OffenderService;

@RestController
@CrossOrigin
@RequestMapping("/offender")
public class OffenderController {
	
	@Autowired
	private OffenderService offenderService;
	
	@PostMapping("/add")
	public String add(@RequestBody Offender offender) {
		offenderService.addOffender(offender);
		return "New offender is added";
	}
	
	@GetMapping("/getAllOffender")
	public List<Offender> getAll(){
		return offenderService.getAllOffenders();
	}
	
	@PutMapping("/put")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void updateOffenderInfo(@RequestBody Offender updateOffenderRequest, HttpServletRequest req) {

		offenderService.updateOffender(updateOffenderRequest);
	}
	
	@PatchMapping("/update")
	@ResponseStatus(HttpStatus.OK)
	public void updateOffender(@RequestBody Offender updateOffenderRequest, HttpServletRequest req) {
		offenderService.updateOffender(updateOffenderRequest);
	}
	
	@DeleteMapping("/delete/id")
	@ResponseStatus(HttpStatus.OK)
	public void deleteOffenderById(int id) {
		offenderService.deleteOffenderById(id);
	}

}
