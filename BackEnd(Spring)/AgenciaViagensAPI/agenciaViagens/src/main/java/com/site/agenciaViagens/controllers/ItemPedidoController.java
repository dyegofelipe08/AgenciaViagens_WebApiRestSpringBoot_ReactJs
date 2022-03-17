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

import com.site.agenciaViagens.entities.ItemPedido;
import com.site.agenciaViagens.entities.Local;
import com.site.agenciaViagens.entities.LocalPromo;
import com.site.agenciaViagens.entities.Pedido;
import com.site.agenciaViagens.repositories.ItemPedidoRepository;
import com.site.agenciaViagens.repositories.LocalPromoRepository;
import com.site.agenciaViagens.repositories.LocalRepository;
import com.site.agenciaViagens.repositories.PedidoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/itensPedido")
public class ItemPedidoController {
	
	@Autowired
	private ItemPedidoRepository itemPedidoRepository;
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private LocalRepository localRepository;
	
	@Autowired
	private LocalPromoRepository localPromoRepository;
	
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
		Pedido pedido = pedidoRepository.findById(itensPedidoDetails.getPedido().getIdPedido()).get();
		Local local = localRepository.findById(itensPedidoDetails.getLocal().getIdLocal()).get();
		LocalPromo localPromo = localPromoRepository.findById(itensPedidoDetails.getLocalPromo().getIdLocalPromo()).get();
		
		itemPedidoUpdate.setPedido(pedido);
		itemPedidoUpdate.setLocal(local);
		itemPedidoUpdate.setLocalPromo(localPromo);
		
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
