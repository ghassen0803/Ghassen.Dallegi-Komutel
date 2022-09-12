package com.example.demo.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import javax.persistence.Entity;

@Entity
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Nom;
	private String Address;
	private String Ville;
	private String Pays;
	private int Telephone;
	private Date debut_contrat;

	public Contact() {
		super();
	}

	public Contact(String nom, String adress, String ville, String pays, int telephone, Date debut_de_contrat) {
		super();
		this.Nom = nom;
		this.Address = adress;
		this.Ville = ville;
		this.Pays = pays;
		this.Telephone = telephone;
		this.debut_contrat = debut_de_contrat;
	}

	public Long getId() {
		return id;
	}

	public String getNom() {
		return Nom;
	}

	public void setNom(String nom) {
		this.Nom = nom;
	}

	public String getAdress() {
		return Address;
	}

	public void setAdress(String adress) {
		this.Address = adress;
	}

	public String getVille() {
		return Ville;
	}

	public void setVille(String ville) {
		this.Ville = ville;
	}

	public String getPays() {
		return Pays;
	}

	public void setPays(String pays) {
		this.Pays = pays;
	}

	public int getTelephone() {
		return Telephone;
	}

	public void setTelephone(int telephone) {
		this.Telephone = telephone;
	}

	public Date getDebut_de_contrat() {
		return debut_contrat;
	}

	public void setDebut_de_contrat(Date debut_de_contrat) {
		this.debut_contrat = debut_de_contrat;
	}

	@Override
	public String toString() {
		return "Contact [id=" + id + ", Nom=" + Nom + ", adress=" + Address + ", ville=" + Ville + ", pays=" + Pays
				+ ", telephone=" + Telephone + ", debut_de_contrat=" + debut_contrat + "]";
	}

}