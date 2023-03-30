import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const BASE_URL_CART = 'https://api.instantwebtools.net';
const BASE_URL_JSON = 'https://jsonplaceholder.typicode.com';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL_JSON}),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/comments',
    }),

    // getUserById: builder.query({
    //   query: payload => `/posts/${payload}`,
    // }),
    // getPhotos: builder.query({
    //   query: () => '/photos',
    // }),
    addNewProduct: builder.mutation({
      query: payload => {
        return {
          url: '/v1/airlines',
          method: 'POST',
          body: payload,
        };
      },
    }),
  }),
});
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetPhotosQuery,
  useAddNewProductMutation,
} = apiSlice;
export default apiSlice;
console.log('apiSlice==>', apiSlice);
