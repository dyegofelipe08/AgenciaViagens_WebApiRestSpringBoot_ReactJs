package com.site.agenciaViagens.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Suporte implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSuporte;
	
	private String mensagem;
	
	private Date dataEnvio;
	
	@ManyToOne
	@JoinColumn(name = "idCliente")
	private Cliente cliente;

	public Suporte() {
		super();
	}

	public Suporte(Long idSuporte, String mensagem, Date dataEnvio, Cliente cliente) {
		super();
		this.idSuporte = idSuporte;
		this.mensagem = mensagem;
		this.dataEnvio = dataEnvio;
		this.cliente = cliente;
	}

	public Long getIdSuporte() {
		return idSuporte;
	}

	public void setIdSuporte(Long idSuporte) {
		this.idSuporte = idSuporte;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	

	public Date getDataEnvio() {
		return dataEnvio =  new Date();
	}

	public void setDataEnvio(Date dataEnvio) {
		this.dataEnvio = dataEnvio;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idSuporte);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Suporte other = (Suporte) obj;
		return Objects.equals(idSuporte, other.idSuporte);
	}
	
	
	
	

}
