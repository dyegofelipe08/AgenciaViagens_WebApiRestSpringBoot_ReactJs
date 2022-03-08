package com.site.agenciaViagens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agenciaViagens.entities.Local;

@Repository
public interface LocalRepository extends JpaRepository<Local, Long>  {

}
