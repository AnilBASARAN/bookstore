import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseURL } from '../../../utils/baseURL';


const baseQuery = fetchBaseQuery({
     baseUrl: `${getBaseURL()}/api/books}`,
     credentials: "include",
     prepareHeaders: (Headers) => {
        const token = localStorage.getItem("token");
        if(token){
            Headers.set("Authorization", `Bearer ${token}`);
        }
        return Headers;
     }
})

const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: baseQuery
})