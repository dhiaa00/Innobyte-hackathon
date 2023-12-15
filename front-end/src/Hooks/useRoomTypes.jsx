import React from "react";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/roomtypes/");

const useRoomTypes = (query) => {
  return useQuery({
    queryKey: ["roomtypes"],
    queryFn: () =>
      apiClient.getAll({
        params: query,
      }),
  });
};

export const postRoomType = async (RoomType) => {
  return await apiClient.post(RoomType);
};

export default useRoomTypes;
