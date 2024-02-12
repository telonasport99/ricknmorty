import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {getCharacter} from "./types.ts";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api',
    }),
    endpoints: builder => {
        return {
            getCharacters: builder.query<getCharacter, {page:number,name:string}>({
                query:args => ({
                    url:"character",
                    params:{...args}
                }),
            }),
        }
    },
})

export const { useGetCharactersQuery } = baseApi