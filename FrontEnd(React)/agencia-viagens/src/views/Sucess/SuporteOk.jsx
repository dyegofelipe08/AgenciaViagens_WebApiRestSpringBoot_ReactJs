import React from "react";
import ButtonHome from "../../components/ButtonHome";
import ImageSucess from "../../components/ImageSuccess";


export default function SuporteOk(){
    return(

<div className="container text-center py-5">
    <h1>
        Mensagem enviada com sucesso.
    </h1>

    <h1>Em breve, nossa equipe retornará o contato. Obrigado!</h1>
    <ImageSucess/>
    <ButtonHome/>
</div>


    )
}