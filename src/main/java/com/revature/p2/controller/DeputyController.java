package com.revature.p2.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.revature.p2.models.Deputy;
import com.revature.p2.services.DeputyService;

@RestController
@CrossOrigin
@RequestMapping("/deputy")
public class DeputyController {
	
	@Autowired
	private DeputyService deputyService;
	
	@PostMapping("/add")
	public String add(@RequestBody Deputy deputy) {
		deputyService.addDeputy(deputy);
		return "New deputy is added";
	}
	
	@GetMapping("/getAllDeputies")
	public List<Deputy> getAll(){
		return deputyService.getAllDeputies();
	}
	
	@PutMapping("/update")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void updateOffenderInfo(@RequestBody Deputy updateDeputyRequest, HttpServletRequest req) {

		deputyService.updateDeputy(updateDeputyRequest);
	}
	
	@DeleteMapping("/delete/id")
	@ResponseStatus(HttpStatus.OK)
	public void deleteDeputyById(int id) {
		deputyService.deleteDeputyById(id);
	}
	

}
