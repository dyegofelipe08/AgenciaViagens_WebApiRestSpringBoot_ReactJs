package com.site.agenciaViagens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agenciaViagens.entities.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>  {

}
