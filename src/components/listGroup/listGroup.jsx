import React from 'react';
import './listGroup.css';

export const ListGroup = ({moviesFilter,filterValue}) => {
  

  const ActiveGenre = (movieGenre) =>{ 
 if(movieGenre === "All")
 {
  if(filterValue === undefined || filterValue === "All" )
  {
    return 'list-group-item active'
  }
  else{
    return 'list-group-item'
  }
 }
 else if(movieGenre === 'Action')
 {
  if(filterValue === 'Action')
  {
    return 'list-group-item active'
  }
  else{
    return 'list-group-item'
  }
 }
 else if(movieGenre === 'Drama')
 {
  if(filterValue === 'Drama')
  {
    return 'list-group-item active'
  }
  else{
    return 'list-group-item'
  }
 }
 else if(movieGenre === 'Comedy')
 {
  if(filterValue === 'Comedy')
  {
    return 'list-group-item active'
  }
  else{
    return 'list-group-item'
  }
 }
}

  return (
    <div className='listPlacement'>
      <ul className='list-group '>

        <li className={ActiveGenre('All')} aria-current='true'>
          <button className='list-btn' onClick={() => {moviesFilter()}}>
          All
          </button>
        </li>
         <li className={ActiveGenre('Action')} aria-current='true'>
          <button className='list-btn' onClick={() => {moviesFilter('Action')}}>
          Action
          </button>
        </li>
         <li className={ActiveGenre('Drama')} aria-current='true'>
          <button className='list-btn' onClick={() => {moviesFilter('Drama')}}>
          Drama
          </button>
        </li>
         <li className={ActiveGenre('Comedy')} aria-current='true'>
          <button className='list-btn' onClick={() => {moviesFilter('Comedy')}}>
          Comedy
          </button>
        </li>
      </ul>
    </div>
  );
};
