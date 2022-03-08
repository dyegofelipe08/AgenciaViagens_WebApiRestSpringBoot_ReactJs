package com.site.agenciaViagens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agenciaViagens.entities.Pedido;

@Repository
public interface PedidoPromoRepository extends JpaRepository<Pedido, Long>  {

}
