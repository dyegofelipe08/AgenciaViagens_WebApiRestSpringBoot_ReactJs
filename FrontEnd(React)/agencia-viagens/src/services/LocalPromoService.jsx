import axios from "axios";

const   LOCAL_PROMO_API_URL = "http://localhost:8080/locaisPromo";

class LocalPromoService {
  getAllLocaisPromo() {
    return axios.get(LOCAL_PROMO_API_URL);
  }

  createLocalPromo(localPromo) {
    return axios.post(LOCAL_PROMO_API_URL, localPromo);
  }

  getLocalPromoById(localPromoId) {
    return axios.get(LOCAL_PROMO_API_URL + "/" + localPromoId);
  }

  updateLocalPromo(localPromoId, localPromo) {
    return axios.put(LOCAL_PROMO_API_URL + "/" + localPromoId, localPromo);
  }

  deleteLocalPromo(localPromoId) {
    return axios.delete(LOCAL_PROMO_API_URL + "/" + localPromoId);
  }
}

export default new LocalPromoService();