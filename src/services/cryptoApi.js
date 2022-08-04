import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders =  {
         'X-RapidAPI-Key': 'coinranking8acab7b586373421399b34c0dd2db9c43baa7f1777fbc492',
         'X-RapidAPI-Host': 'https://api.coinranking.com/v2'
      }


const baseUrl = 'https://api.coinranking.com/v2';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: () => createRequest('/coins')
      })  
    })
});

export const {
    useGetCryptosQuery,   
} = cryptoApi;

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'c43ff45931msh5ba91a775bb1e1bp1c2223jsna09920b55f84',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

