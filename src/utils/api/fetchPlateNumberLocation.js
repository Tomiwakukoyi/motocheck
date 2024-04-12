import axios from "axios";

export const fetchPlateNumberLocation = async (plateNumber) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://car-verification-nigeria.p.rapidapi.com/platenumberloc.php",
      params: {
        platecodeloc: plateNumber,
      },
      headers: {
        "X-RapidAPI-Key": "1a2e4c92b6msheeec672880a29c4p18457fjsnfebbc9647ca8",
        "X-RapidAPI-Host": "car-verification-nigeria.p.rapidapi.com",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching data. Please try again later.");
  }
};
