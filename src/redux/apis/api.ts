import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// API endpoint for fetching data
export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.hiring.masterkey.tech/api/v1/`
  }),

  endpoints: (builder) => ({    
     // <Type of data the call will return, Type of parameter being passed to the query function>
    getCarDetails: builder.query<any, void>({
      query: () => "products",
    }),
  }),
});

export const { useGetCarDetailsQuery } = productApi;