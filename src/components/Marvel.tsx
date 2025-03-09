// Marvel.tsx

import MarvelType from '../types/MarvelType.ts';
import { Link } from 'react-router-dom';

type MarvelProps = MarvelType & {
  thumbnailPath: string;
};

const Marvel = ({
  id,
  name,
  comics,
  events,
  resourceURI,
  series,
  stories,
  thumbnailPath,
}: MarvelProps) => {
  return (
    <div className="marvel-card">
      <img src={thumbnailPath} alt={name} />
      <div className="marvel-name">{name}</div>

      {/* 마우스 호버 시 추가 정보 표시 */}
      <div className="marvel-info">
        <p>📖 Comics: {comics.available}</p>
        <p>🎉 Events: {events.available}</p>
        <p>📺 Series: {series.available}</p>
        <p>📖 Stories: {stories.available}</p>
        <p>
          🔗 <Link to={`/character/${id}`}>More Info</Link>
        </p>
      </div>
    </div>
  );
};

export default Marvel;
