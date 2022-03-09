package com.revature.p2.models;

import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="offenses")
@JsonIdentityInfo( // This helps with he serialization to stop recursion with hibernate joins
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "id")
public class Offense {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="offense_id", unique=true)
	private int id;

	@Column(name="offense_date", unique=false, nullable=false)
	private String offenseDate;

	@Column(name="offense_description", unique=false, nullable=false)
	private String offenseDescription;
	
//	@JsonBackReference
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "offender_id")
	public Offender offender;
	
	public Offender getOffender() {
		return offender;
	}

	public void setOffender(Offender offender) {
		this.offender = offender;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getOffenseDate() {
		return offenseDate;
	}

	public void setOffenseDate(String offenseDate) {
		this.offenseDate = offenseDate;
	}

	public String getOffenseDescription() {
		return offenseDescription;
	}

	public void setOffenseDescription(String offenseDescription) {
		this.offenseDescription = offenseDescription;
	}
	
	

	public Offense() {
		super();
	}

	public Offense(int id, String offenseDate, String offenseDescription) {
		super();
		this.id = id;
		this.offenseDate = offenseDate;
		this.offenseDescription = offenseDescription;
	}

	public Offense(String offenseDate, String offenseDescription) {
		super();
		this.offenseDate = offenseDate;
		this.offenseDescription = offenseDescription;
	}

	@Override
	public String toString() {
		return "Offense [id=" + id + ", offenseDate=" + offenseDate + ", offenseDescription=" + offenseDescription
				+ "]";
	}
	
	

}