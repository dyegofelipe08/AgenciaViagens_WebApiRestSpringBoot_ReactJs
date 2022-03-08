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

import com.site.agenciaViagens.entities.ItemPedido;
import com.site.agenciaViagens.repositories.ItemPedidoRepository;

@RestController
@RequestMapping(value = "/itensPedido")
public class ItemPedidoController {
	
	@Autowired
	private ItemPedidoRepository itemPedidoRepository;
	
	// GET ALL
	
	@GetMapping
	public ResponseEntity<List<ItemPedido>> findAll(){
		 
		List<ItemPedido> itemPedido = itemPedidoRepository.findAll();
		
		return ResponseEntity.ok().body(itemPedido);
	}
	
	//GET BY ID
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<ItemPedido> findById(@PathVariable Long id){
		ItemPedido itemPedido = itemPedidoRepository.findById(id).get();
		return ResponseEntity.ok().body(itemPedido);
	}
	
	//CREATE
	
	@PostMapping
	public ItemPedido create (@RequestBody ItemPedido itemPedido) {
		return itemPedidoRepository.save(itemPedido);
		
	}
	
	//UPDATE 
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<ItemPedido> update (@PathVariable Long id, @RequestBody ItemPedido itensPedidoDetails){
		
		ItemPedido  itemPedidoUpdate = itemPedidoRepository.findById(id).get();
		
		itemPedidoUpdate.setPedido(itensPedidoDetails.getPedido());
		itemPedidoUpdate.setLocal(itensPedidoDetails.getLocal());
		
		itemPedidoRepository.save(itemPedidoUpdate);
		
		
		return ResponseEntity.ok().body(itemPedidoUpdate);
		
	}
	
	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable Long id){
		
		ItemPedido  itemPedido = itemPedidoRepository.findById(id).get();
		
		itemPedidoRepository.delete(itemPedido);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	
	
	

}
