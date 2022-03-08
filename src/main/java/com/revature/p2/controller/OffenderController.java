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
import com.revature.p2.models.Offender;
import com.revature.p2.services.DeputyService;
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
	
	

}
