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

import com.site.agenciaViagens.entities.ItemPedidoPromo;
import com.site.agenciaViagens.entities.LocalPromo;
import com.site.agenciaViagens.entities.Pedido;
import com.site.agenciaViagens.repositories.ItemPedidoPromoRepository;
import com.site.agenciaViagens.repositories.LocalPromoRepository;
import com.site.agenciaViagens.repositories.PedidoRepository;

@RestController
@RequestMapping(value = "/itensPedidoPromo")
public class ItemPedidoPromoController {
	
	@Autowired
	private ItemPedidoPromoRepository itemPedidoPromoRepository;
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private LocalPromoRepository localPromoRepository;
	
	// GET ALL
	
	@GetMapping
	public ResponseEntity<List<ItemPedidoPromo>> findAll(){
		 
		List<ItemPedidoPromo> itemPedidoPromo = itemPedidoPromoRepository.findAll();
		
		return ResponseEntity.ok().body(itemPedidoPromo);
	}
	
	//GET BY ID
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<ItemPedidoPromo> findById(@PathVariable Long id){
		ItemPedidoPromo itemPedidoPromo = itemPedidoPromoRepository.findById(id).get();
		return ResponseEntity.ok().body(itemPedidoPromo);
	}
	
	//CREATE
	
	@PostMapping
	public ItemPedidoPromo create (@RequestBody ItemPedidoPromo itemPedidoPromo) {
		return itemPedidoPromoRepository.save(itemPedidoPromo);
		
	}
	
	//UPDATE 
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<ItemPedidoPromo> update (@PathVariable Long id, @RequestBody ItemPedidoPromo itensPedidoPromoDetails){
		
		ItemPedidoPromo  itemPedidoPromoUpdate = itemPedidoPromoRepository.findById(id).get();
		Pedido pedido = pedidoRepository.findById(itensPedidoPromoDetails.getPedidoPromo().getIdPedido()).get();
		LocalPromo localPromo = localPromoRepository.findById(itensPedidoPromoDetails.getLocalPromo().getIdLocalPromo()).get();
		
		itemPedidoPromoUpdate.setPedidoPromo(pedido);
		itemPedidoPromoUpdate.setLocalPromo(localPromo);
		
		itemPedidoPromoRepository.save(itemPedidoPromoUpdate);
		
		return ResponseEntity.ok().body(itemPedidoPromoUpdate);
		
	}
	
	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable Long id){
		
		ItemPedidoPromo  itemPedidoPromo = itemPedidoPromoRepository.findById(id).get();
		
		itemPedidoPromoRepository.delete(itemPedidoPromo);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	
	
	

}
