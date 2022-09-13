package com.example.demo.controller;


import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Contact;
import com.example.demo.dao.ContactRepository;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping("/api/contact")
public class ContactController {
	
	@Autowired
	ContactRepository contactRepository;

	@GetMapping("/contact/all")
	public List<Contact> getAllAnnonces() {
		return contactRepository.findAll();
	}
	
	@PostMapping("/contact/add")
	public ResponseEntity<Contact> createTutorial(@RequestBody Contact contact) {
		try {
			Contact _contact = contactRepository.save(new Contact(contact.getNom(), contact.getAdress(),
					contact.getVille(),contact.getPays(), contact.getTelephone(), contact.getDebut_de_contrat()));
			return new ResponseEntity<>(_contact, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/contact/{id}")
	public ResponseEntity<Contact> getTutorialById(@PathVariable("id") long id) {
		Optional<Contact> contactData = contactRepository.findById(id);

		if (contactData.isPresent()) {
			return new ResponseEntity<>(contactData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
@PutMapping("/contact/{id}")
	public ResponseEntity<Contact> updateTutorial(@PathVariable("id") long id, @RequestBody Contact contact) {
		Optional<Contact> contactData = contactRepository.findById(id);

		if (contactData.isPresent()) {
			Contact _contact = contactData.get();
			_contact.setNom(contact.getNom());
			_contact.setAdress(contact.getAdress());
			_contact.setVille(contact.getVille());
			_contact.setPays(contact.getPays());
			_contact.setTelephone(contact.getTelephone());
			_contact.setDebut_contrat(contact.getDebut_contrat());
			return new ResponseEntity<>(contactRepository.save(_contact), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/contact/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		try {
			contactRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

}
