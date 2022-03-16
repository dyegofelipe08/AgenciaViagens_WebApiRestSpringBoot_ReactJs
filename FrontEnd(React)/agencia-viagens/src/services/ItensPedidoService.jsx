import axios from "axios";

const   ITENS_API_URL = "https://";

class ItensPedidoService {
  getAllItens() {
    return axios.get(ITENS_API_URL);
  }

  createItem(item) {
    return axios.post(ITENS_API_URL, item);
  }

  getItemById(itemId) {
    return axios.get(ITENS_API_URL + "/" + itemId);
  }

  updateItem(itemId, item) {
    return axios.put(ITENS_API_URL + "/" + itemId, item);
  }

  deleteItem(itemId) {
    return axios.delete(ITENS_API_URL + "/" + itemId);
  }
}

export default new ItensPedidoService();