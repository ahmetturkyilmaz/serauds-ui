const baseUrl = 'http://localhost:9090/info';
import {get} from "./network";

const urls = {
  seraInfo: baseUrl + '/',
};
const SeraNetwork = {
  getInfo: async (infoId) => {
    return get(urls.seraInfo + infoId).then(response => {
      console.log("res", response)
      return response
    });

  },
}
export default SeraNetwork;
