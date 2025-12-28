import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Post, User, News } from './api.types'

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getNews: builder.query<News[], void>({
            async queryFn(_arg, _queryApi, _extraOptions, baseQuery) {
                const [postsResult, usersResult] = await Promise.all([
                    baseQuery('/posts'),
                    baseQuery('/users'),
                ])

                if (postsResult.error) return { error: postsResult.error as any }
                if (usersResult.error) return { error: usersResult.error as any }

                const posts = postsResult.data as Post[]
                const users = usersResult.data as User[]

                const usersById = new Map(users.map(u => [u.id, u]))

                const news: News[] = posts.map(post => {
                    const reporter = usersById.get(post.userId)
                    return {
                        id: post.id,
                        title: post.title,
                        body: post.body,
                        reporterId: post.userId,
                        reporterName: reporter?.name || 'Unknown',
                        reporter: reporter
                    }
                })

                return { data: news }
            },
        }),
        getNewsById: builder.query<News, number>({
            async queryFn(id, _queryApi, _extraOptions, baseQuery) {
                const [postResult, usersResult] = await Promise.all([
                    baseQuery(`/posts/${id}`),
                    baseQuery('/users'),
                ])

                if (postResult.error) return { error: postResult.error as any }
                if (usersResult.error) return { error: usersResult.error as any }

                const post = postResult.data as Post
                const users = usersResult.data as User[]

                const usersById = new Map(users.map(u => [u.id, u]))
                const reporter = usersById.get(post.userId)

                const newsItem: News = {
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    reporterId: post.userId,
                    reporterName: reporter?.name || 'Unknown',
                    reporter: reporter
                }

                return { data: newsItem }
            },
        }),
        getCommentsByNewsId: builder.query<any[], number>({
            query: (id) => `/posts/${id}/comments`,
        }),
    }),
})

export const { useGetNewsQuery, useGetNewsByIdQuery, useGetCommentsByNewsIdQuery } = newsApi
