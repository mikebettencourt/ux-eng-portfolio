import { useState } from 'react';
import photosToRender from '../data/photos';

function Photography() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="photography-container">
      <section className="photography-container-header">
        <h1>Photography</h1>
        <p>
          A collection of film photos captured on my Leica M6.
        </p>
      </section>
      <section className="action-container">
        <h5>Filter</h5>
        <button
          className={filter === 'all' ? 'filter-button active' : 'filter-button'}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'color' ? 'filter-button active' : 'filter-button'}
          onClick={() => setFilter('color')}
        >
          Color
        </button>
        <button
          className={filter === 'bw' ? 'filter-button active' : 'filter-button'}
          onClick={() => setFilter('bw')}
        >
          Black & White
        </button>
      </section>
      <div className="gallery-container">
        {photosToRender.filter(photo => photo.color.includes(filter)).map(photo => {
          return (
            <img
              className={photo.orientation === "landscape" ? "landscape" : "portrait"}
              key={photo.id}
              alt={photo.altText}
              src={photo.src}
            />
        )})}
      </div>
    </section>
  );
}
  
export default Photography;