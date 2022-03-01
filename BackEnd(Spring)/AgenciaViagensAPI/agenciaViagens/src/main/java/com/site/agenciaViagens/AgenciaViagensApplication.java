package com.site.agenciaViagens;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.agenciaViagens.entities.Cliente;
import com.site.agenciaViagens.repositories.ClienteRepository;

@SpringBootApplication
public class AgenciaViagensApplication implements CommandLineRunner {
	
	@Autowired
	private ClienteRepository clienteRepository;

	public static void main(String[] args) {
		SpringApplication.run(AgenciaViagensApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
		Cliente c1 = new Cliente(null, "Dyego Felipe", "12346884-86","81999999","dyego@teste.com");
		Cliente c2= new Cliente(null, "Prisciele Andrade", "3135463121-86","819199999","pri@teste.com");
		
		clienteRepository.save(c1);
		clienteRepository.save(c2);
	}

}
