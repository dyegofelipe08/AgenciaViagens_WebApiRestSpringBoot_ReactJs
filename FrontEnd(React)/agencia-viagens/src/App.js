import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Adm from './views/Adm';
import Home from './views/Home';
import Clientes from './views/Clientes';
import ClientesCreate from './views/Clientes/Create';
import CadastroUsuario from './views/Clientes/CadastroUsuario';
import ItensPedido from './views/ItensPedidos';
import ItensPedidoCreate from './views/ItensPedidos/Create';
import ItensUsuario from './views/ItensPedidos/ItensUsuario';
import Locais from './views/Locais';
import LocaisCreate from './views/Locais/Create';
import Destinos from './views/Locais/Destinos';
import Pedidos from './views/Pedidos';
import PedidosCreate from './views/Pedidos/Create';
import PedidoUsuario from './views/Pedidos/PedidoUsuario';
import Promocoes from './views/Promocoes';
import PromocoesCreate from './views/Promocoes/Create';
import DestinosPromo from './views/Promocoes/DestinosPromo';
import Suporte from './views/Suporte/';
import SuporteCreate from './views/Suporte/Create';
import SuporteUsuario from './views/Suporte/SuporteUsuario';
import SuporteOk from './views/Sucess/SuporteOk';
import CadastroOk from './views/Sucess/CadastroOk';
import PedidoOk from './views/Sucess/PedidoFinalOk';
import ClienteUpdateOk from './views/Sucess/ClienteUpdateOk';
import PedidoFinalOk from './views/Sucess/PedidoFinalOk';

import './styles.css';



function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <div className='container containerPrincipal px-0 mb-5 pb-5 pt-0' >
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Adm' element={<Adm />} />
      <Route path='/Clientes' element={<Clientes/>} />
      <Route path='/Clientes-Create' element={<ClientesCreate/>} />
      <Route path='/Clientes-Update/:id' element={<ClientesCreate/>} />
      <Route path='/CadastroUsuario' element={<CadastroUsuario/>} />
      <Route path='/ItensPedido' element={<ItensPedido/>} />
      <Route path='/ItensUsuario' element={<ItensUsuario/>} />
      <Route path='/ItensPedido-Create' element={<ItensPedidoCreate/>} />
      <Route path='/ItensPedido-Update/:id' element={<ItensPedidoCreate/>} />
      <Route path='/Locais' element={<Locais />} />
      <Route path='/Locais-Create' element={<LocaisCreate />} />
      <Route path='/Locais-Update/:id' element={<LocaisCreate />} />
      <Route path='/Destinos' element={<Destinos/>} />
      <Route path='/Pedidos' element={<Pedidos />} />
      <Route path='/PedidoUsuario' element={<PedidoUsuario />} />
      <Route path='/Pedidos-Create' element={<PedidosCreate />} />
      <Route path='/Pedidos-Update/:id' element={<PedidosCreate />} />
      <Route path='/Promocoes' element={<Promocoes />} />
      <Route path='/Promocoes-Create' element={<PromocoesCreate />} />
      <Route path='/Promocoes-Update/:id' element={<PromocoesCreate />} />
      <Route path='/DestinosPromo' element={<DestinosPromo />} />
      <Route path='/SuporteUsuario' element={<SuporteUsuario/>} />
      <Route path='/Suporte' element={<Suporte/>} />
      <Route path='/SuporteOk' element={<SuporteOk/>} />
      <Route path='/Suporte-Create' element={<SuporteCreate/>} />
      <Route path='/Suporte-Update/:id' element={<SuporteCreate/>} />
      <Route path='/CadastroOk' element={<CadastroOk/>} />
      <Route path='/PedidoOk' element={<PedidoOk/>} />
      <Route path='/PedidoFinalOk' element={<PedidoFinalOk/>} />
      <Route path='/ClienteUpdateOk' element={<ClienteUpdateOk/>} />

      </Routes>
      </div>
      <Footer className='footer'/>
      
    </BrowserRouter>


  );
}

export default App;
