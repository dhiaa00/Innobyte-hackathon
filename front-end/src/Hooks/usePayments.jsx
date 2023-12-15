import React from 'react'
import APIClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient("/payments/");

const usePayments = (query) => {
  return useQuery({
    queryKey: ["payments"],
    queryFn: () =>
      apiClient.getAll({
        params: query,
      }),
  });
}

export const postPayment = async (payment) => {
    return await apiClient.post(payment);
  };

export default usePayments