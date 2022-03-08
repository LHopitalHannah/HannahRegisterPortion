package com.revature.p2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	

}
