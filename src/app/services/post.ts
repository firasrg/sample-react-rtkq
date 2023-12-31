import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Post {
  id: number
  name: string
  fetched_at: string
}

export const postApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  reducerPath: 'postApi',
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPost: build.query<Post, number>({
      query: (id) => `posts/${id}`,
      providesTags: (_result, _err, id) => [{ type: 'Posts', id }],
    }),
    addSomething: build.mutation<Post, {success: boolean}>({
      query: (post ) => ({
        url: 'blabla',
        body: post
      })
    })
  }),
})

export const { useGetPostQuery, useAddSomethingMutation } = postApi
