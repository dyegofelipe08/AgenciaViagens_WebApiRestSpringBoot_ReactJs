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
	private Long idItemPedido;
	
	@ManyToOne
	@JoinColumn(name = "pedidoId")
	private Pedido pedido;
	
	
	@OneToOne
	@JoinColumn(name = "localId")
	private Local local;
	
	
	@OneToOne
	@JoinColumn(name = "localPromoId")
	private LocalPromo localPromo;

	public ItemPedido() {
		super();
	}
	

	public ItemPedido(Long idItemPedido, Pedido pedido, Local local, LocalPromo localPromo) {
		super();
		this.idItemPedido = idItemPedido;
		this.pedido = pedido;
		this.local = local;
		this.localPromo = localPromo;
	}
	
	public ItemPedido(Long idItemPedido, Pedido pedido, Local local) {
		super();
		this.idItemPedido = idItemPedido;
		this.pedido = pedido;
		this.local = local;
	}
	
	public ItemPedido(Long idItemPedido, Pedido pedido, LocalPromo localPromo) {
		super();
		this.idItemPedido = idItemPedido;
		this.pedido = pedido;
		this.localPromo = localPromo;
	}


	public Long getIdItemPedido() {
		return idItemPedido;
	}

	public void setIdItemPedido(Long idItemPedido) {
		this.idItemPedido = idItemPedido;
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

	public LocalPromo getLocalPromo() {
		return localPromo;
	}
	
	
	public void setLocalPromo(LocalPromo localPromo) {
		this.localPromo = localPromo;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(idItemPedido);
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
		return Objects.equals(idItemPedido, other.idItemPedido);
	}
	
	
	
	

}
