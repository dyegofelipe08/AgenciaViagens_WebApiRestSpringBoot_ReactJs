package com.site.agenciaViagens.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Local implements Serializable {


	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idLocal;
	
	private String descricao;
	private String urlImagem;
	private double preco;
	
	
	
	public Local() {
		super();
	}



	public Local(Long idLocal, String descricao, String urlImagem, double preco) {
		super();
		this.idLocal = idLocal;
		this.descricao = descricao;
		this.urlImagem = urlImagem;
		this.preco = preco;
	}



	public Long getIdLocal() {
		return idLocal;
	}



	public void setIdLocal(Long idLocal) {
		this.idLocal = idLocal;
	}



	public String getDescricao() {
		return descricao;
	}



	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}



	public String getUrlImagem() {
		return urlImagem;
	}



	public void setUrlImagem(String urlImagem) {
		this.urlImagem = urlImagem;
	}



	public double getPreco() {
		return preco;
	}



	public void setPreco(double preco) {
		this.preco = preco;
	}



	@Override
	public int hashCode() {
		return Objects.hash(idLocal);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Local other = (Local) obj;
		return Objects.equals(idLocal, other.idLocal);
	}
	
	
	
	
	
	
	
	

}
