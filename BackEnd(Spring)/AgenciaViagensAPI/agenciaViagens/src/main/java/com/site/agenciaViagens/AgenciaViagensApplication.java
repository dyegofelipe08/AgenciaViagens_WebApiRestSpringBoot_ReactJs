package com.site.agenciaViagens;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.agenciaViagens.entities.Cliente;
import com.site.agenciaViagens.entities.ItemPedido;
import com.site.agenciaViagens.entities.Local;
import com.site.agenciaViagens.entities.LocalPromo;
import com.site.agenciaViagens.entities.Pedido;
import com.site.agenciaViagens.entities.Suporte;
import com.site.agenciaViagens.repositories.ClienteRepository;
import com.site.agenciaViagens.repositories.ItemPedidoRepository;
import com.site.agenciaViagens.repositories.LocalPromoRepository;
import com.site.agenciaViagens.repositories.LocalRepository;
import com.site.agenciaViagens.repositories.PedidoRepository;
import com.site.agenciaViagens.repositories.SuporteRepository;

@SpringBootApplication
public class AgenciaViagensApplication implements CommandLineRunner {
	
	/*@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private LocalRepository localRepository;
	
	@Autowired
	private LocalPromoRepository localPromoRepository;
	
	@Autowired
	private ItemPedidoRepository itemPedidoRepository;
	
	@Autowired
	private SuporteRepository suporteRepository;*/
	

	public static void main(String[] args) {
		SpringApplication.run(AgenciaViagensApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
		/*Cliente c1 = new Cliente(null, "Dyego Felipe", "12346884-86","81999999","dyego@teste.com");
		Cliente c2= new Cliente(null, "Prisciele Andrade", "3135463121-86","819199999","pri@teste.com");
		
		Pedido p1 = new Pedido (null, null, 0.0, c1);
		Pedido p2 = new Pedido (null, null, 0.0, c2);
		
		Local l1 = new Local (null, "descricao local 1","https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/south-america/brazil/recife/recife-banner-mobile-1024x553.jpg", 533.93);
		Local l2 = new Local (null, "descricao local 2","https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg", 777.9);
		Local l3 = new Local (null, "descricao local 3","https://www.cognatis.com.br/qds2/wp-content/uploads/2021/01/Sao-Paulo-467-banner-1.jpg", 777.9);
		Local l4 = new Local (null, "descricao local 4","https://w8e8i3u2.stackpathcdn.com/wp-content/uploads/2021/02/Genipabu-natal-brasil.jpg", 533.93);
		
		LocalPromo lp1 = new LocalPromo (null, "Descricao promo 1","https://www.temporadalivre.com/blog-media/posts/cover/10024/size_800_o-que-ver-e-fazer-em-joao-pessoa-pb-2-b00a6b04.jpeg",878.97, 0.0,0.10);
		LocalPromo lp2 = new LocalPromo (null, "Descricao promo 2","https://www.sescpr.com.br/wp-content/uploads/2019/04/porto-alegre-sede-copa3.jpg",783.95, 0.0,0.10);
		LocalPromo lp3 = new LocalPromo (null, "Descricao promo 3","https://ipepalmas.com.br/wp-content/uploads/2021/07/palmas05.jpg",783.95, 0.0,0.10);
		LocalPromo lp4 = new LocalPromo (null, "Descricao promo 4","https://todepassagem.clickbus.com.br/wp-content/uploads/2020/09/Praias-de-Florian%C3%B3polis.jpg",783.95, 0.0,0.10);
		

		ItemPedido itp1 = new ItemPedido(null,p1,l1, lp1);
		ItemPedido itp2 = new ItemPedido(null,p2,l2, lp2);
		ItemPedido itp3 = new ItemPedido(null,p1,l2, lp2);
		
		
		Suporte s1 = new Suporte(null, "mensagem 1",null, c1);
		Suporte s2 = new Suporte(null, "mensagem 2",null, c2);
		
		
		
		
		c1.getPedidos().addAll(Arrays.asList(p1));
		c2.getPedidos().addAll(Arrays.asList(p2));
		c1.getSuportes().addAll(Arrays.asList(s1));
		c2.getSuportes().addAll(Arrays.asList(s2));
		
		p1.getItensPedido().addAll(Arrays.asList(itp1));
		p1.getItensPedido().addAll(Arrays.asList(itp3));
		
		p2.getItensPedido().addAll(Arrays.asList(itp2));
		
		
		
		clienteRepository.save(c1);
		clienteRepository.save(c2);
		
		pedidoRepository.save(p1);
		pedidoRepository.save(p2);
		
		localRepository.save(l1);
		localRepository.save(l2);
		localRepository.save(l3);
		localRepository.save(l4);
		
		localPromoRepository.save(lp1);
		localPromoRepository.save(lp2);
		localPromoRepository.save(lp3);
		localPromoRepository.save(lp4);
		
		itemPedidoRepository.save(itp1);
		itemPedidoRepository.save(itp2);
		itemPedidoRepository.save(itp3);
		
		
		suporteRepository.save(s1);
		suporteRepository.save(s2);*/
		
		
		
		
		
		
		
		
		
		
		
		
	}

}
