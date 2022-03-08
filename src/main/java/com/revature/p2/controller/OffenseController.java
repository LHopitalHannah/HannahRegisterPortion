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

import com.revature.p2.models.Offense;
import com.revature.p2.services.OffenseService;


	@RestController
	@CrossOrigin
	@RequestMapping("/offense")
	public class OffenseController {
		
		@Autowired
		private OffenseService offenseService;
		
		@PostMapping("/add")
		public String add(@RequestBody Offense offense) {
			offenseService.addOffense(offense);
			return "New offender is added";
		}
		
		@GetMapping("/getAllOffenses")
		public List<Offense> getAll(){
			return offenseService.getAllOffenses();
		}
		
		@PutMapping("/updateOffender")
		@ResponseStatus(HttpStatus.NO_CONTENT)
		public void updateOffenseInfo(@RequestBody Offense updateOffenseRequest, HttpServletRequest req) {

			offenseService.updateOffense(updateOffenseRequest);
		}
		
		@DeleteMapping("/delete/id")
		@ResponseStatus(HttpStatus.OK)
		public void deleteOffenseById(int id) {
			offenseService.deleteOffenseById(id);
		}

	}
