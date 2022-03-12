package com.site.agenciaViagens.entities;

import java.io.Serializable;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
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
	private List<ItemPedido> itensPedido = new ArrayList<ItemPedido>();

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

		// DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

		// String datarecebida = dateFormat.format(date);

		// Date dataFormatada = dateFormat.parse(datarecebida);
		// dateFormat.format(date);

		return dataPedido = new Date();
	}

	public void setDataPedido(Date dataPedido) {

//		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
//		
//		String datarecebida = dateFormat.format(dataPedido);
//		
//		Date dataPedidoDate = dateFormat.parse(datarecebida);

		this.dataPedido = dataPedido;
	}

	// lógica para adicionar valores dos itens promocionais e não promocionais ao
	// valor total do pedido.

	public double getTotalPedido() {

		Iterator<ItemPedido> it = itensPedido.iterator();
		Iterator<ItemPedido> itPromo = itensPedido.iterator();
		double valor = 0.0;
		double valorPromo = 0.0;

		while (it.hasNext()) {
			ItemPedido iaux = (ItemPedido) it.next();
			valor += iaux.getLocal().getPreco();
		}
		while (itPromo.hasNext()) {
			ItemPedido iauxPromo = (ItemPedido) itPromo.next();

			valorPromo += iauxPromo.getLocalPromo().getPrecoComDesconto();
		}

		return (Math.round((totalPedido += (valor + valorPromo)) * 100.0) / 100.0);

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
