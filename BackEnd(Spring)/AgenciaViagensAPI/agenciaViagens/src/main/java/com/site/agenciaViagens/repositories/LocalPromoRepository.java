package com.site.agenciaViagens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agenciaViagens.entities.LocalPromo;

@Repository
public interface LocalPromoRepository extends JpaRepository<LocalPromo, Long>  {

}
