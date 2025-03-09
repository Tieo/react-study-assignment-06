import CharacterType from '../types/CharacterType';
import { Link } from 'react-router-dom';
import '../style/character.css';

type CharacterProps = CharacterType;

const Character = ({
  name,
  description,
  modified,
  thumbnail,
  // resourceURI,
  comics,
  series,
  stories,
  events,
  urls,
}: CharacterProps) => {
  return (
    <div className="character-detail-container">
      <p className="back-to-home-button">
        <Link to="/" className="back-to-home-button-text">
          MARVEL
        </Link>
      </p>
      <div className="character-header">
        {/* 이미지 */}
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          className="character-image"
        />
      </div>

      {/* 이름 */}
      <h2 className="character-name">{name}</h2>

      {/* 설명 */}
      <div className="character-description">
        {description ? description : 'No description available.'}
      </div>

      {/* 수정일 */}
      <div className="character-modified">
        <strong>Last Modified:</strong> {modified}
      </div>
      {/* Comics */}
      <div className="character-comics">
        <h3>Comics ({comics.available})</h3>
        <ul>
          {comics.items.map((comic, index) => (
            <li key={index}>
              <a
                href={comic.resourceURI}
                target="_blank"
                rel="noopener noreferrer"
              >
                {comic.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Series */}
      <div className="character-series">
        <h3>Series ({series.available})</h3>
        <ul>
          {series.items.map((serie, index) => (
            <li key={index}>
              <a
                href={serie.resourceURI}
                target="_blank"
                rel="noopener noreferrer"
              >
                {serie.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Stories */}
      <div className="character-stories">
        <h3>Stories ({stories.available})</h3>
        <ul>
          {stories.items.map((story, index) => (
            <li key={index}>
              <a
                href={story.resourceURI}
                target="_blank"
                rel="noopener noreferrer"
              >
                {story.name} ({story.type})
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Events */}
      <div className="character-events">
        <h3>Events ({events.available})</h3>
        <ul>
          {events.items.map((event, index) => (
            <li key={index}>
              <a
                href={event.resourceURI}
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* URLs */}
      <div className="character-links">
        {urls.map((url, index) => (
          <p key={index}>
            <a href={url.url} target="_blank" rel="noopener noreferrer">
              {url.type}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Character;
