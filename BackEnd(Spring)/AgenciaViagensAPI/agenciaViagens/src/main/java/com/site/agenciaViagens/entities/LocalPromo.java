package com.site.agenciaViagens.entities;


import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LocalPromo implements Serializable {


	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idLocalPromo;
	
	private String descricaoPromo;
	private String urlImagemPromo;
	private double preco;
	private double precoComDesconto;
	private double taxaDesconto;
		
	public LocalPromo() {
		super();
	}
	public Long getIdLocalPromo() {
		return idLocalPromo;
	}
	public void setIdLocalPromo(Long idLocalPromo) {
		this.idLocalPromo = idLocalPromo;
	}
	public String getDescricaoPromo() {
		return descricaoPromo;
	}
	public void setDescricaoPromo(String descricaoPromo) {
		this.descricaoPromo = descricaoPromo;
	}
	public String getUrlImagemPromo() {
		return urlImagemPromo;
	}
	public void setUrlImagemPromo(String urlImagemPromo) {
		this.urlImagemPromo = urlImagemPromo;
	}
	public double getPreco() {
		return preco;
	}
	public void setPreco(double preco) {
		this.preco = preco;
		
	}
	//Calculo do preço promocional a partir do preço e da taxa de desconto (%).
	
	public double getPrecoComDesconto() {
		precoComDesconto = getPreco() - (getPreco() * getTaxaDesconto());
		return (Math.round(precoComDesconto*100.0)/100.0);
	}
	
	public void setPrecoComDesconto(double precoComDesconto) {
		this.precoComDesconto = precoComDesconto;
	}
	public double getTaxaDesconto() {
		return taxaDesconto;
	}
	public void setTaxaDesconto(double taxaDesconto) {
		this.taxaDesconto = taxaDesconto;
	}
	@Override
	public int hashCode() {
		return Objects.hash(idLocalPromo);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		LocalPromo other = (LocalPromo) obj;
		return Objects.equals(idLocalPromo, other.idLocalPromo);
	}
	
	
	
	

}
