import axios from "axios";

const   LOCAL_API_URL = "https://agenciaviagens-backend.herokuapp.com/locais";

class LocalService {
  getAllLocais() {
    return axios.get(LOCAL_API_URL);
  }

  createLocal(local) {
    return axios.post(LOCAL_API_URL, local);
  }

  getLocalById(localId) {
    return axios.get(LOCAL_API_URL + "/" + localId);
  }

  updateLocal(localId, local) {
    return axios.put(LOCAL_API_URL + "/" + localId, local);
  }

  deleteLocal(localId) {
    return axios.delete(LOCAL_API_URL + "/" + localId);
  }
}

export default new LocalService();