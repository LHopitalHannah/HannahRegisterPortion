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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="offenders")
@JsonIdentityInfo( // This helps with he serialization to stop recursion with hibernate joins
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "id")
public class Offender {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="offender_id", unique=true)
	private int id;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "deputy_id")
	private Deputy deputy;
	
	// image
	@Column(name="src", unique=false, nullable=false)
	private String src;
	
	@Column(name="fullname", unique=false, nullable=false)
	private String fullname;
	
	@Column(name="alias", unique=false, nullable=false)
	private String alias;
	
	
	@Column(name="dob")
	private String dob;
	
	@Column(name="sex")
	private String sex;
	
	@Column(name="height", unique=false, nullable=false)
	private String height;
	
	@Column(name="weight", unique=false, nullable=false)
	private String weight;
	
	@Column(name="eyes", unique=false, nullable=false)
	private String eyes;
	
	@Column(name="hair", unique=false, nullable=false)
	private String hair;
	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="order_by", unique=false, nullable=false)
	private int orderBy;
	
//	@JsonManagedReference
	@OneToMany(mappedBy="offender", fetch=FetchType.EAGER)
	private List<Offense> offenses;
	
	
	
	
	public List<Offense> getOffenses() {
		return offenses;
	}

	public void setOffenses(List<Offense> offenses) {
		this.offenses = offenses;
	}

	public Offender() {}

	public Offender(int id, String src, String fullname, String alias, String dob, String sex, String height,
			String weight, String eyes, String hair, int orderBy) {
		super();
		this.id = id;
		this.src = src;
		this.fullname = fullname;
		this.alias = alias;
		this.dob = dob;
		this.sex = sex;
		this.height = height;
		this.weight = weight;
		this.eyes = eyes;
		this.hair = hair;
		this.orderBy = orderBy;

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getAlias() {
		return alias;
	}

	public void setAlias(String alias) {
		this.alias = alias;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getEyes() {
		return eyes;
	}

	public void setEyes(String eyes) {
		this.eyes = eyes;
	}

	public String getHair() {
		return hair;
	}

	public void setHair(String hair) {
		this.hair = hair;
	}

	public int getOrderBy() {
		return orderBy;
	}

	public void setOrderBy(int orderBy) {
		this.orderBy = orderBy;
	}

	@Override
	public String toString() {
		return "Offender [id=" + id + ", src=" + src + ", fullname=" + fullname + ", alias=" + alias + ", dob=" + dob
				+ ", sex=" + sex + ", height=" + height + ", weight=" + weight + ", eyes=" + eyes + ", hair=" + hair
				+ ", orderBy=" + orderBy + ", offenses=" + offenses + "]";
	}






	
//	@Column(name="totalVotes")
//	private int totalVotes;
	
	

	
	
	
	
	

}


