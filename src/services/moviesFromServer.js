const movies = [
  {
    id: 1,
    title: 'Spiderman',
    genre: 'Action',
    rate: 5,
    stock: 10,
    isLike: false,
  },
  { id: 2, title: 'Betman', genre: 'Action', rate: 6, stock: 9, isLike: false },
  { id: 3, title: 'Titanic', genre: 'Drama', rate: 8, stock: 4, isLike: false },
  { id: 4, title: 'Shrek', genre: 'Comedy', rate: 9, stock: 2, isLike: false },
];

export const getMovies = () => {
  return movies;
};
