export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface User {
    id: number
    name: string
}

export interface DetailedNews {
    id: number
    title: string
    body: string
    userId: number
    image?: string
}
