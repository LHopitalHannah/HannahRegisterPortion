package com.revature.p2.models;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="deputies")
@JsonIdentityInfo( // This helps with he serialization to stop recursion with hibernate joins
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "id")
public class Deputy {
	@Id
	@Column(name="deputy_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	

//	@ManyToMany(fetch = FetchType.EAGER, cascade = {
//	        CascadeType.PERSIST,
//	        CascadeType.MERGE
//	    })
//    @JoinTable(
//        name = "deputy_offender",
//        joinColumns = { @JoinColumn(name = "deputy_id") },
//        inverseJoinColumns = { @JoinColumn(name = "offender_id") })
//	
//	
	
	
	@Column(name="username", unique=true, nullable=false)
	private String username;
	
	@Column(name="email", unique=true, nullable=false)
	private String email;
	
	@Column(name="password", unique=false, nullable=false)
	private String password;
	
	
	
	
	public Deputy() {}

	
	
	
	public Deputy(int id, String username, String email, String password) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
	}
	
	




	@Override
	public int hashCode() {
		return Objects.hash(email, id, password, username);
	}




	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Deputy other = (Deputy) obj;
		return Objects.equals(email, other.email) && id == other.id && Objects.equals(password, other.password)
				&& Objects.equals(username, other.username);
	}




	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	

}




