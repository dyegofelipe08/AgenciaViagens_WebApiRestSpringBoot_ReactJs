package com.site.agenciaViagens.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.agenciaViagens.entities.LocalPromo;
import com.site.agenciaViagens.repositories.LocalPromoRepository;

@RestController
@RequestMapping(value = "/locaisPromo")
public class LocalPromoController {
	
	@Autowired 
	private LocalPromoRepository localPromoRepository;
	
	// GET ALL
	
	@GetMapping
	public ResponseEntity<List<LocalPromo>> findAll(){
		 
		List<LocalPromo> locaisPromo = localPromoRepository.findAll();
		
		return ResponseEntity.ok().body(locaisPromo);
	}
	
	//GET BY ID
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<LocalPromo> findById(@PathVariable Long id){
		LocalPromo localPromo = localPromoRepository.findById(id).get();
		return ResponseEntity.ok().body(localPromo);
	}
	
	//CREATE
	
	@PostMapping
	public LocalPromo create (@RequestBody LocalPromo localPromo) {
		return localPromoRepository.save(localPromo);
		
	}
	
	//UPDATE 
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<LocalPromo> update (@PathVariable Long id, @RequestBody LocalPromo localPromoDetails){
		
		LocalPromo  localPromoUpdate = localPromoRepository.findById(id).get();
		
		localPromoUpdate.setDescricaoPromo(localPromoDetails.getDescricaoPromo());
		localPromoUpdate.setPreco(localPromoDetails.getPreco());
		localPromoDetails.setTaxaDesconto(localPromoDetails.getTaxaDesconto());
		localPromoDetails.setPrecoComDesconto(localPromoDetails.getPrecoComDesconto());
		localPromoDetails.setUrlImagemPromo(localPromoDetails.getUrlImagemPromo());
		
		localPromoRepository.save(localPromoUpdate);
		
		return ResponseEntity.ok().body(localPromoUpdate);
		
	}
	
	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable Long id){
		
		LocalPromo  localPromo = localPromoRepository.findById(id).get();
		
		localPromoRepository.delete(localPromo);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	
	
	

}
