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

import com.site.agenciaViagens.entities.Local;
import com.site.agenciaViagens.repositories.LocalRepository;

@RestController
@RequestMapping(value = "/locais")
public class LocalController {
	
	@Autowired
	private LocalRepository localRepository;
	
	// GET ALL
	
	@GetMapping
	public ResponseEntity<List<Local>> findAll(){
		 
		List<Local> locais = localRepository.findAll();
		
		return ResponseEntity.ok().body(locais);
	}
	
	//GET BY ID
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Local> findById(@PathVariable Long id){
		Local local = localRepository.findById(id).get();
		return ResponseEntity.ok().body(local);
	}
	
	//CREATE
	
	@PostMapping
	public Local create (@RequestBody Local local) {
		return localRepository.save(local);
		
	}
	
	//UPDATE 
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Local> update (@PathVariable Long id, @RequestBody Local localDetails){
		
		Local  localUpdate = localRepository.findById(id).get();
		
		localUpdate.setDescricao(localDetails.getDescricao());
		localUpdate.setPreco(localDetails.getPreco());
		localUpdate.setUrlImagem(localDetails.getUrlImagem());
		
		localRepository.save(localUpdate);
		
		return ResponseEntity.ok().body(localUpdate);
		
	}
	
	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable Long id){
		
		Local  local = localRepository.findById(id).get();
		
		localRepository.delete(local);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	
	
	

}
