import { useState } from 'react';
import { TableContent } from './components/tableContent/tableContent';
import { getMovies } from './services/moviesFromServer';
import compare from './helpers/funcHelp';

let moviesFromServer = getMovies();

function App() {
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
    <div className='App'>
      <TableContent
        moviesArr={movies}
        handleLike={handleIsLike}
        handleDelete={handleDeleteById}
      />
    </div>
  );
}

export default App;
