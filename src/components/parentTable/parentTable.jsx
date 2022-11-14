import React, { useState } from 'react';
import compare from '../../helpers/funcHelp';
import { getMovies } from '../../services/moviesFromServer';
import { ListGroup } from '../listGroup/listGroup';
import { TableContent } from '../tableContent/tableContent';
import './parentTable.css';

let moviesFromServer = getMovies();

export const ParentTable = () => {
  let [movies, setMovies] = useState(moviesFromServer).sort((a, b) =>
    compare(a, b)
  );

  let [filterValue,setFilterValue] = useState("All");

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

  const moviesDataFilter = (genre) =>{
    setFilterValue(genre);
    let allMovies = getMovies();
    if(genre === "Action" || genre === "Drama" || genre === "Comedy")
    {
       let mFilterArr = allMovies.filter((m) => m.genre === genre).sort((a, b) => compare(a, b));
        setMovies(mFilterArr);
        
    }
    else{
      setMovies(allMovies);
    }
  }



  return (
    <div className='tableContainer'>
      <ListGroup  moviesFilter={moviesDataFilter} filterValue={filterValue} ></ListGroup>
      <TableContent
        moviesArr={movies}
        handleLike={handleIsLike}
        handleDelete={handleDeleteById}
      ></TableContent>
    </div>
  );
};
