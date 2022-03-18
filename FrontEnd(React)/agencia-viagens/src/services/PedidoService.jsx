import axios from "axios";

const   PEDIDO_API_URL = "https://agenciaviagens-backend.herokuapp.com/pedidos";

class PedidoService {
  getAllPedidos() {
    return axios.get(PEDIDO_API_URL);
  }

  createPedido(pedido) {
    return axios.post(PEDIDO_API_URL, pedido);
  }

  getPedidoById(pedidoId) {
    return axios.get(PEDIDO_API_URL + "/" + pedidoId);
  }

  updatePedido(pedidoId, pedido) {
    return axios.put(PEDIDO_API_URL + "/" + pedidoId, pedido);
  }

  deletePedido(pedidoId) {
    return axios.delete(PEDIDO_API_URL + "/" + pedidoId);
  }
}

export default new PedidoService();