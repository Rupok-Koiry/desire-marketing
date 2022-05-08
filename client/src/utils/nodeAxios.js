import axios from "axios";

const sendNetworkRequest = async (api_uri, method = "GET", body = null) => {
  const JWT = localStorage.getItem("JWT");
  try {
    const response = await axios({
      method,
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
      url: `http://localhost:8000/api${api_uri}`,
      data: body,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response.data.message;
  }
};
export default sendNetworkRequest;
