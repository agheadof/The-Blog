interface Section {
  type: 'p' | 'img' | 'h1'
  content: string
  imageUrl?: string
}
export interface Post {
  id: string
  title: string
  coverImage: string
  author: string
  date: string
  tags: string[]
  sections: Section[]
}

export interface PostCard {
  id: string
  title: string
  coverImage: string
  author: string
  date: string
  tags: string[]
  brief: string
}
