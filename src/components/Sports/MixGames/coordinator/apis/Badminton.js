import axios from "axios";
import { useQuery } from "react-query";
// base urls
const url = () => {
  return axios.create({
    baseURL: "http://localhost:3001/api/v1/badminton",
  });
};

const getMatches =()=>{
    return url().get("/ongoing")
}

export const useGetAllTracks = (requiredData) => {
    const dispatch = useDispatch();
  
    return useQuery(
      ["getAllTracks"],
      () => getMatches(),
      {
        onSuccess: (data) => {
          if (data?.status === 200) {
            console.log("all tracks...", data?.data?.data);
            data?.data?.data?.results?.map((track) => dispatch(setTracks(track)));
          }
        },
        onError: (error) => {
          console.log("error messages :::", error?.response?.data?.message);
        },
      }
    );
  };