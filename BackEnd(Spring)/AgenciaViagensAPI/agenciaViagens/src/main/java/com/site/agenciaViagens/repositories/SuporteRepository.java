package com.site.agenciaViagens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agenciaViagens.entities.Suporte;

@Repository
public interface SuporteRepository extends JpaRepository<Suporte, Long>  {

}
