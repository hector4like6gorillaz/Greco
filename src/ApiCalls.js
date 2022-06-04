import axios from "axios";

//Utilizando la api principal
const URL = `https://pokeapi.co/api/v2/`;

//Obtener una lectura de una api publica que no requiera login utilizando la base URL del .env
export async function envAPI(endpoint) {
  try {
    const response = await axios({
      url: `${URL}${endpoint}`,
      method: `GET`,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

/*
const response = async (page: string) => envAPI(page);
useEffect(() => {
        async function loadapi() {
            const resp = await response("all");
            const data = resp?.data;
            HandleApiData(data);
        }
        loadapi();
        return function cleanup() {
            loadapi();
        }
    }, []);
*/
