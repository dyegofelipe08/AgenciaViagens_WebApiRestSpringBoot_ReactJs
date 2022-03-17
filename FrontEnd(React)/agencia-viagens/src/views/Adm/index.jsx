import React from 'react'
import CardsAdm from '../../components/CardsAdm';

export default function Adm() {
    return (
        
        <div className='row p-4 ml-5' >
            <div className='col-sm'>
            <CardsAdm acao='LISTAR' categoria='CLIENTES' />
            <CardsAdm acao='LISTAR'  categoria='PEDIDOS' />
            <CardsAdm acao='LISTAR'  categoria='LOCAIS' />
            </div>
            <div className='col'>
            <CardsAdm acao='LISTAR'  categoria='PROMOCOES' />
            <CardsAdm acao='LISTAR'  categoria='PEDIDOS' />
            <CardsAdm acao='LISTAR' categoria='ITENSPEDIDO' />
            </div>
        </div>
    );

}