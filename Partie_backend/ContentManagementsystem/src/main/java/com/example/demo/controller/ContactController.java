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

	

}
