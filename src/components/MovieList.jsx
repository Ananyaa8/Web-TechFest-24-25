import React from 'react'

export default function MovieList() {
    const movies = [
        {
          id: 1,
          name: "Inception",
          rating: 8.8,
          image: "/images/Inception.png",
        },
        {
          id: 2,
          name: "The Dark Knight",
          rating: 9.0,
          image: "/images/Dark.png",
        },
        {
          id: 3,
          name: "Interstellar",
          rating: 8.6,
          image: "/images/Interstellar.png",
        },
        {
          id: 4,
          name: "Titanic",
          rating: 7.8,
          image: "/images/titanic.png",
        },
      ];
  return (
    <div>MovieList</div>
  )
}
