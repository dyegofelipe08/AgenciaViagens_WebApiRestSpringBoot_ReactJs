package com.site.agenciaViagens.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.agenciaViagens.entities.Cliente;
import com.site.agenciaViagens.repositories.ClienteRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	// GET ALL
	
	@GetMapping
	public ResponseEntity<List<Cliente>> findAll(){
		 
		List<Cliente> clientes = clienteRepository.findAll();
		
		return ResponseEntity.ok().body(clientes);
	}
	
	//GET BY ID
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Cliente> findById(@PathVariable Long id){
		Cliente cliente = clienteRepository.findById(id).get();
		return ResponseEntity.ok().body(cliente);
	}
	
	//CREATE
	
	@PostMapping
	public Cliente create (@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
		
	}
	
	//UPDATE 
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Cliente> update (@PathVariable Long id, @RequestBody Cliente clienteDetails){
		
		Cliente  clienteUpdate = clienteRepository.findById(id).get();
		
		clienteUpdate.setNome(clienteDetails.getNome());
		clienteUpdate.setCpf(clienteDetails.getCpf());
		clienteUpdate.setTelefone(clienteDetails.getTelefone());
		clienteUpdate.setEmail(clienteDetails.getEmail());
		
		clienteRepository.save(clienteUpdate);
		
		
		return ResponseEntity.ok().body(clienteUpdate);
		
	}
	
	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable Long id){
		
		Cliente  cliente = clienteRepository.findById(id).get();
		
		clienteRepository.delete(cliente);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	
	
	

}
