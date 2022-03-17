import React from "react";
import ButtonCadastro from "../../components/ButtonCadastro";



export default function Home() {
    return (
        <div >
            <header className="m-0 p-0">
                <div id="carouselExampleControls" className="carousel slide mt-0 pt-0" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 img-fluid" src="https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/south-america/brazil/recife/recife-banner-mobile-1024x553.jpg" alt="recife.jpg" height="500" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src="https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg" alt="rio_de_janeiro.jpg" height="500" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src="https://guardemais.com.br/wp-content/uploads/2021/06/joao-pessoa-paraiba.jpg" alt="joao_pessoa.jpg" height="500" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src="https://www.cognatis.com.br/qds2/wp-content/uploads/2021/01/Sao-Paulo-467-banner-1.jpg" alt="sao_paulo.jpg" height="500" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src="https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-curitiba-capa2019-02.jpg" alt="curitiba" height="500" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Próximo</span>
                    </a>
                </div>
            </header>
            <div className="container text-center jumbotron bg-info" >
                <h1 className="display-6">Bem-vindo ao nosso site! </h1>
                <h1 className="lead">Aqui você encontra passagens aéreas para as principais cidades do Brasil. Os melhores destinos e os melhores preços!</h1>
            </div>
            <ButtonCadastro/>

        
        </div>



    )
}