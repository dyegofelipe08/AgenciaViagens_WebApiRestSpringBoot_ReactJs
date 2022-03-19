import React from "react";
import ButtonHome from "../../components/ButtonHome";
import ButtonPedidoUsuario from "../../components/ButtonPedidoUsuario";
import ImageSucess from "../../components/ImageSuccess";

export default function CadastroOk(){
    return(

<div className="container text-center py-5">
    <h1>
        Cadastro realizado com sucesso!
    </h1>
    <ImageSucess/>

    <h1>Deseja realizar um pedido agora?</h1>
    <div className="p-3"><ButtonPedidoUsuario/></div>
    
    <ButtonHome/>
</div>


    )
}