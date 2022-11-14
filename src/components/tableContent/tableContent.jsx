import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './tableConten.css';

export const TableContent = ({ moviesArr, handleLike, handleDelete }) => {
  return (
    <table className='table tableData'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Title</th>
          <th scope='col'>Genre</th>
          <th scope='col'>Rate</th>
          <th scope='col'>Stock</th>
          <th scope='col'>Like</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {moviesArr &&
          moviesArr.map((movie) => {
            return (
              <tr>
                <th scope='row'>{movie.id}</th>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.rate}</td>
                <td>{movie.stock}</td>
                <td>
                  {movie.isLike ? (
                    <div
                      onClick={() => {
                        handleLike(movie.id, false);
                      }}
                    >
                      <FavoriteIcon></FavoriteIcon>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        handleLike(movie.id, true);
                      }}
                    >
                      <FavoriteBorderIcon></FavoriteBorderIcon>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(movie.id);
                    }}
                    type='button'
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
