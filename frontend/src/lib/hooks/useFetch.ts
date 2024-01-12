import axios from "axios";
const BASE_URL = process.env.BASE_URL
export async function useFetch(url:string) {
    try {
      const res = await axios.get( BASE_URL + url , {
        headers: {
          Authorization: "bearer " + process.env.API_TOKEN,
        },
      });
      return res.data;
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  