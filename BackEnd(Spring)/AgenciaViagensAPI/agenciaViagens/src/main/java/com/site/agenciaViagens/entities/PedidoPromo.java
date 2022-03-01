package com.site.agenciaViagens.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class PedidoPromo implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPedidoPromo;
	
	private Date dataPedidoPromo;
	private double totalPedidoPromo;
	

}
