package com.site.agenciaViagens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agenciaViagens.entities.ItemPedidoPromo;

@Repository
public interface ItemPedidoPromoRepository extends JpaRepository<ItemPedidoPromo, Long>  {

}
