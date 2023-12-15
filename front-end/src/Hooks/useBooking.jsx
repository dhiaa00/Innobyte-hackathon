import React from "react";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/bookings/");

const useBookings = (query) => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      apiClient.getAll({
        params: query,
      }),
  });
};

export const postBooking = async (Booking) => {
    return await apiClient.post(Booking);
  };

export default useBookings;
