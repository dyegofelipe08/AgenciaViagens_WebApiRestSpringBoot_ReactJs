package com.site.agenciaViagens.entities;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

}
