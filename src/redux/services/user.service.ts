import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://bakend-user-login.onrender.com`,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const { accessToken } = state.userSlice;
      if (accessToken) {
        headers.set('Authorization', accessToken);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body
      })
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      })
    }),
    getUsers: builder.query({
      query: () => ({
        url: '/',
        method: 'GET'
      })
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET'
      })
    })
  })
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetUsersQuery,
  useGetUserQuery
} = userApi;

export default userApi;
