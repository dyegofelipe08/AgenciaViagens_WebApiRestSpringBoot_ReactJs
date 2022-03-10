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
import com.site.agenciaViagens.entities.Pedido;
import com.site.agenciaViagens.repositories.ClienteRepository;
import com.site.agenciaViagens.repositories.PedidoRepository;

@RestController
@RequestMapping(value = "/pedidos")
public class PedidoController {
	
	@Autowired
	private PedidoRepository pedidoRepository;
	@Autowired
	private ClienteRepository clienteRepository;
	
	// GET ALL
	
	@GetMapping
	public ResponseEntity<List<Pedido>> findAll(){
		 
		List<Pedido> pedidos = pedidoRepository.findAll();
		
		return ResponseEntity.ok().body(pedidos);
	}
	
	//GET BY ID
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Pedido> findById(@PathVariable Long id){
		Pedido pedido = pedidoRepository.findById(id).get();
		return ResponseEntity.ok().body(pedido);
	}
	
	//CREATE
	
	@PostMapping
	public Pedido create (@RequestBody Pedido pedido) {
		return pedidoRepository.save(pedido);
		
	}
	
	//UPDATE 
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Pedido> update (@PathVariable Long id, @RequestBody Pedido pedidoDetails){
		
		Pedido  pedidoUpdate = pedidoRepository.findById(id).get();
		Cliente cliente = clienteRepository.findById(pedidoDetails.getCliente().getIdCliente()).get();
		
		pedidoUpdate.setDataPedido(pedidoDetails.getDataPedido());
		pedidoUpdate.setTotalPedido(pedidoDetails.getTotalPedido());
		pedidoUpdate.setCliente(cliente);
		
		pedidoRepository.save(pedidoUpdate);
		return ResponseEntity.ok().body(pedidoUpdate);
		
	}
	
	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable Long id){
		
		Pedido  pedido = pedidoRepository.findById(id).get();
		
		pedidoRepository.delete(pedido);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	
	
	

}
