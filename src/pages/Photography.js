import HomeButton from '../components/HomeButton';
import photos from '../data/photos';

function Photography() {
    return (
      <section className="photography-container">
      <HomeButton />
      <div className="gallery-container">
        {photos.map(photo => {
          return (
              <img
                className={photo.orientation === "landscape" ? "landscape" : "portrait"}
                key={photo.id}
                alt={photo.altText}
                src={photo.src}
              />
          )})
        }
      </div>
      </section>
    );
  }
  
  export default Photography;