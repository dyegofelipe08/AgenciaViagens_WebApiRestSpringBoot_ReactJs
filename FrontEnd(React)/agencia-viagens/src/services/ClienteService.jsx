import axios from "axios";

const   CLIENTE_API_URL = "https://agenciaviagens-backend.herokuapp.com/clientes";

class ClienteService {
  getAllClientes() {
    return axios.get(CLIENTE_API_URL);
  }

  createCliente(cliente) {
    return axios.post(CLIENTE_API_URL, cliente);
  }

  getClienteById(clienteId) {
    return axios.get(CLIENTE_API_URL + "/" + clienteId);
  }

  updateCliente(clienteId, cliente) {
    return axios.put(CLIENTE_API_URL + "/" + clienteId, cliente);
  }

  deleteCliente(clienteId) {
    return axios.delete(CLIENTE_API_URL + "/" + clienteId);
  }
}

export default new ClienteService();