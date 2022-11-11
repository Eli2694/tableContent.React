import React, { useState } from 'react';
import compare from '../../helpers/funcHelp';
import { getMovies } from '../../services/moviesFromServer';
import { TableContent } from '../tableContent/tableContent';

let moviesFromServer = getMovies();

export const ParentTable = () => {
  let [movies, setMovies] = useState(moviesFromServer).sort((a, b) =>
    compare(a, b)
  );

  const handleIsLike = (id, isLike) => {
    let editedMovieId = movies.find((m) => m.id === id);
    if (editedMovieId) {
      editedMovieId.isLike = isLike;
    }

    let tableDataNotEdited = movies.filter((m) => m.id !== id);
    let newTableData = [...tableDataNotEdited, editedMovieId].sort((a, b) =>
      compare(a, b)
    );
    setMovies(newTableData);
  };

  const handleDeleteById = (id) => {
    let m = movies.find((m) => m.id === id);
    console.log(m);
    let listOFmoviesWithoutTheDeleted = movies
      .filter((m) => m.id !== id)
      .sort((a, b) => compare(a, b));
    console.log(listOFmoviesWithoutTheDeleted);
    setMovies(listOFmoviesWithoutTheDeleted);
  };

  return (
    <div>
      <TableContent
        moviesArr={movies}
        handleLike={handleIsLike}
        handleDelete={handleDeleteById}
      ></TableContent>
    </div>
  );
};
