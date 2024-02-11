import axios from "axios";
 const NEXT_PUBLIC_BASE_URL = process.env.BASE_URL
export async function useFetch(url:string) {
    try {
      const res = await axios.get( NEXT_PUBLIC_BASE_URL+ url , {
        headers: {
          Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error,);
    }
  }
  