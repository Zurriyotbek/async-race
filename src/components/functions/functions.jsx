import Axios from "../../axios";

export function getRandomHexColor() {
  let hex = "#";
  const possible = "ABCDEF0123456789";

  for (let i = 0; i < 6; i++) {
    hex += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return hex;
}

// Function to get cars data for "garage" page
export const getCarsData = async (endpoint, query) => {
  try {
    const response = await Axios.get(endpoint + query);
    return response;
  } catch (error) {
    console.error(error);
  }
};

//////////////////////////////////////////////////////////////
//////// Create update car's info
export const editCarInfo = async (id, data) => {
  try {
    await Axios.put(`garage/${id}`, data).then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};
