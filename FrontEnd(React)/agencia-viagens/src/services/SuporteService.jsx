import axios from "axios";

const   SUPORTE_API_URL = "https://agenciaviagens-backend.herokuapp.com/suportes";

class SuporteService {
  getAllSuportes() {
    return axios.get(SUPORTE_API_URL);
  }

  createSuporte(suporte) {
    return axios.post(SUPORTE_API_URL, suporte);
  }

  getSuporteById(suporteId) {
    return axios.get(SUPORTE_API_URL + "/" + suporteId);
  }

  updateSuporte(suporteId, suporte) {
    return axios.put(SUPORTE_API_URL + "/" + suporteId, suporte);
  }

  deleteSuporte(suporteId) {
    return axios.delete(SUPORTE_API_URL + "/" + suporteId);
  }
}

export default new SuporteService();