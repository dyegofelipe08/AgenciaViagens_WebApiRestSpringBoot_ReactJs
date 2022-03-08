package com.site.agenciaViagens.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class ItemPedidoPromo implements Serializable{


	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idItemPedidoPromo;
	
	@ManyToOne
	@JoinColumn(name = "pedidoPromoId")
	private Pedido pedidoPromo;
	
	
	@OneToOne
	@JoinColumn(name = "localPromoId")
	private LocalPromo localPromo;


	public ItemPedidoPromo() {
		super();
	}


	public ItemPedidoPromo(Long idItemPedidoPromo, Pedido pedidoPromo, LocalPromo localPromo) {
		super();
		this.idItemPedidoPromo = idItemPedidoPromo;
		this.pedidoPromo = pedidoPromo;
		this.localPromo = localPromo;
	}


	public Long getIdItemPedidoPromo() {
		return idItemPedidoPromo;
	}


	public void setIdItemPedidoPromo(Long idItemPedidoPromo) {
		this.idItemPedidoPromo = idItemPedidoPromo;
	}


	public Pedido getPedidoPromo() {
		return pedidoPromo;
	}


	public void setPedidoPromo(Pedido pedidoPromo) {
		this.pedidoPromo = pedidoPromo;
	}


	public LocalPromo getLocalPromo() {
		return localPromo;
	}


	public void setLocalPromo(LocalPromo localPromo) {
		this.localPromo = localPromo;
	}


	@Override
	public int hashCode() {
		return Objects.hash(idItemPedidoPromo);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ItemPedidoPromo other = (ItemPedidoPromo) obj;
		return Objects.equals(idItemPedidoPromo, other.idItemPedidoPromo);
	}
	
	
	
	
	

}
