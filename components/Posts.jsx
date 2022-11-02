import React from 'react'
import Post from './Post'

export default function Posts() {
  const posts = [
      {
          id: "1",
          username: "Mouaad",
          userImg: "https://avatars.githubusercontent.com/u/78082985?s=400&u=bca0e4d2c7282218a9f41d808fd85d7f1a5eb8e4&v=4",
          img: "https://images.unsplash.com/photo-1667290942606-7dffac5622b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          caption: "A Time Travaler Kid."
      },
      {
        id: "2",
        username: "Alex",
        userImg: "https://avatars.githubusercontent.com/u/78082985?s=400&u=bca0e4d2c7282218a9f41d808fd85d7f1a5eb8e4&v=4",
        img: "https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80",
        caption: "Through The Forest."
    },
    {
        id: "3",
        username: "James",
        userImg: "https://avatars.githubusercontent.com/u/78082985?s=400&u=bca0e4d2c7282218a9f41d808fd85d7f1a5eb8e4&v=4",
        img: "https://images.unsplash.com/photo-1641584087157-cd712948ce6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
        caption: "A Beautiful Winter Day."
    }
]
    return (
    <div>
        {posts.map(post => (
            <Post
                key={post.id}
                id={post.id}
                img={post.img}
                username={post.username}
                userImg = {post.userImg}
                caption = {post.caption}

            />
        ))}
    </div>
  )
}
