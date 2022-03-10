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

import com.site.agenciaViagens.entities.Cliente;
import com.site.agenciaViagens.entities.Suporte;
import com.site.agenciaViagens.repositories.ClienteRepository;
import com.site.agenciaViagens.repositories.SuporteRepository;

@RestController
@RequestMapping(value = "/suportes")
public class SuporteController { 
	
	@Autowired
	private SuporteRepository suporteRepository;
	@Autowired
	private ClienteRepository clienteRepository;
	
	// GET ALL
	
	@GetMapping
	public ResponseEntity<List<Suporte>> findAll(){
		 
		List<Suporte> suportes = suporteRepository.findAll();
		
		return ResponseEntity.ok().body(suportes);
	}
	
	//GET BY ID
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Suporte> findById(@PathVariable Long id){
		Suporte suporte = suporteRepository.findById(id).get();
		return ResponseEntity.ok().body(suporte);
	}
	
	//CREATE
	
	@PostMapping
	public Suporte create (@RequestBody Suporte suporte) {
		return suporteRepository.save(suporte);
		
	}
	
	//UPDATE 
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Suporte> update (@PathVariable Long id, @RequestBody Suporte suporteDetails){
		
		Suporte  suporteUpdate = suporteRepository.findById(id).get();
		Cliente cliente = clienteRepository.findById(suporteDetails.getCliente().getIdCliente()).get();
		
		suporteUpdate.setMensagem(suporteDetails.getMensagem());
		suporteUpdate.setCliente(cliente);
		
		suporteRepository.save(suporteUpdate);
		return ResponseEntity.ok().body(suporteUpdate);
		
	}
	
	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable Long id){
		
		Suporte  suporte = suporteRepository.findById(id).get();
		
		suporteRepository.delete(suporte);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	
	
	

}
