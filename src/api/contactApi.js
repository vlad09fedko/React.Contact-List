import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL as baseUrl } from '../constants/constants';

export const contactApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contacts',
      providesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    createContact: build.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    updateContact: build.mutation({
      query: body => ({
        url: `contacts/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
