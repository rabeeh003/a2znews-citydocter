import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Post, User, News } from './api.types'

export const fetchNews = createAsyncThunk(
    'api/fetchNews',
    async () => {
        const [usersRes, postsRes] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts'),
        ])

        const users: User[] = await usersRes.json()
        const posts: Post[] = await postsRes.json()

        const userMap = new Map(users.map(u => [u.id, u.name]))

        const news: News[] = posts.map(post => ({
            id: post.id,
            title: post.title,
            body: post.body,
            reporterName: userMap.get(post.userId) || 'Unknown',
        }))

        return { news, users }
    }
)
