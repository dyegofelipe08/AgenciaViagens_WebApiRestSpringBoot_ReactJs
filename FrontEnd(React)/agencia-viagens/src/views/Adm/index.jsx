import React from 'react'
import CardsAdm from '../../components/CardsAdm';

export default function Adm() {
    return (
        
        <div >
            <CardsAdm categoria='CLIENTES' />
            <CardsAdm categoria='PEDIDOS' />
            <CardsAdm categoria='LOCAIS' />
            <CardsAdm categoria='PROMOCOES' />
            <CardsAdm categoria='PEDIDOS' />


        </div>
    );

}