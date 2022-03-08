package com.site.agenciaViagens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agenciaViagens.entities.PedidoPromo;

@Repository
public interface PedidoRepository extends JpaRepository<PedidoPromo, Long>  {

}
