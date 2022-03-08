package com.site.agenciaViagens.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Pedido implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPedido;
	
	@Temporal(TemporalType.DATE)
	private Date dataPedido;
	
	private double totalPedido;
	
	@ManyToOne
	@JoinColumn(name = "idCliente")
	private Cliente cliente;

	@JsonIgnore
	@OneToMany(mappedBy = "pedido")
	private  List<ItemPedido> itensPedido = new ArrayList<ItemPedido>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "pedidoPromo")
	private  List<ItemPedidoPromo> itensPedidoPromo = new ArrayList<ItemPedidoPromo>();
	

	public Pedido() {
		super();
	}


	public Pedido(Long idPedido, Date dataPedido, double totalPedido, Cliente cliente) {
		super();
		this.idPedido = idPedido;
		this.dataPedido = dataPedido;
		this.totalPedido = totalPedido;
		this.cliente = cliente;
	}


	public Long getIdPedido() {
		return idPedido;
	}


	public void setIdPedido(Long idPedido) {
		this.idPedido = idPedido;
	}


	public Date getDataPedido() {
		return dataPedido;
	}


	public void setDataPedido(Date dataPedido) {
		this.dataPedido = dataPedido;
	}


	public double getTotalPedido() {
		return totalPedido;
	}


	public void setTotalPedido(double totalPedido) {
		this.totalPedido = totalPedido;
	}


	public Cliente getCliente() {
		return cliente;
	}


	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	


	public List<ItemPedido> getItensPedido() {
		return itensPedido;
	}


	public List<ItemPedidoPromo> getItensPedidoPromo() {
		return itensPedidoPromo;
	}


	@Override
	public int hashCode() {
		return Objects.hash(idPedido);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pedido other = (Pedido) obj;
		return Objects.equals(idPedido, other.idPedido);
	}
	
	
	

}
