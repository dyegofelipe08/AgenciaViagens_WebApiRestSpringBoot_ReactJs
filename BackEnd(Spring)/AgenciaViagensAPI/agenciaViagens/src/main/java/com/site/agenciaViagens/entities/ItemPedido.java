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
public class ItemPedido implements Serializable{


	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idItemPedidoPromo;
	
	@ManyToOne
	@JoinColumn(name = "pedidoId")
	private Pedido pedido;
	
	
	@OneToOne
	@JoinColumn(name = "localId")
	private Local local;

	public ItemPedido() {
		super();
	}

	public ItemPedido(Long idItemPedidoPromo) {
		super();
		this.idItemPedidoPromo = idItemPedidoPromo;
	}

	public Long getIdItemPedidoPromo() {
		return idItemPedidoPromo;
	}

	public void setIdItemPedidoPromo(Long idItemPedidoPromo) {
		this.idItemPedidoPromo = idItemPedidoPromo;
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}
	
	

	public Local getLocal() {
		return local;
	}

	public void setLocal(Local local) {
		this.local = local;
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
		ItemPedido other = (ItemPedido) obj;
		return Objects.equals(idItemPedidoPromo, other.idItemPedidoPromo);
	}
	
	
	
	

}
