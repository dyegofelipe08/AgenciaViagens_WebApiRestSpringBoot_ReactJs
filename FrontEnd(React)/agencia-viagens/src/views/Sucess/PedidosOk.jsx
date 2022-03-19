import React from "react";
import ButtonHome from "../../components/ButtonHome";
import ImageSucess from "../../components/ImageSuccess";

export default function PedidosOk(){
    return(

<div className="container text-center py-5">
    <h1>
        Pedido efetuado com sucesso!
    </h1>
    <h1>Obrigado!</h1>
    <ImageSucess/>
    <ButtonHome/>
</div>


    )
}


    