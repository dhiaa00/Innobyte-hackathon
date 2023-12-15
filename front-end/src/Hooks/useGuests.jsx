import React from 'react'
import APIClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient("/guests/");

const useGuests = (query) => {
  return useQuery({
    queryKey: ["guests"],
    queryFn: () =>
      apiClient.getAll({
        params: query,
      }),
  });
}

export const postGuest = async (Guest) => {
    return await apiClient.post(Guest);
  };


export default useGuests