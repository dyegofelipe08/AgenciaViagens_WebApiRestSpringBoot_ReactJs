import React from 'react'
import ButtonAcessarListas from './ButtonAcessarListas';

export default function CardsAdm(props) {

    return (
        <div className='container pt-2'>
            <div className="card text-white bg-info mb-3" style={{maxWidth: '20rem'}}>
                <div className="card-header text-center lead">{props.acao} {props.categoria}</div>
                <div className="card-body">
                    <ButtonAcessarListas link={'/'+ props.categoria} />
                </div>
            </div>
        </div>
    );

}