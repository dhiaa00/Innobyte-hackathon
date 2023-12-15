import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.jsx";

const apiClient = new APIClient("/rooms/");

const useRooms = (query) => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: () =>
      apiClient.getAll({
        params: query,
      }),
  });
};

export const postRoom = async (room) => {
    return await apiClient.post(room);
  };

export default useRooms;
