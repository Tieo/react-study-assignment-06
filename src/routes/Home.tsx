import { useEffect, useState } from 'react';
import '../style/style.css';
import Marvel from '../components/Marvel.tsx';
import MarvelType from '../types/MarvelType.ts';

function Home() {
  const [loading, setLoading] = useState(true);
  const [marvels, setMarvels] = useState<MarvelType[]>([]);

  const getMarvels = async () => {
    const responseMarvels = await fetch(
      'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023'
    );
    const jsonMarvel = await responseMarvels.json();
    // console.log(jsonMarvel.data.results);
    setMarvels(jsonMarvel.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMarvels();
    document.body.classList.add('dark-mode'); // body에 클래스 추가/제거
  }, []);

  return (
    <div>
      {loading ? (
        <h1 style={{ padding: '20px' }}>Marvel Characters are Comming! 🚀</h1>
      ) : (
        <div className="marvel-container">
          <h1 style={{ padding: '20px' }}>Marvel Characters are Here! 😎</h1>
          {marvels.map((marvel) => (
            <Marvel
              key={marvel.id}
              id={marvel.id}
              name={marvel.name}
              comics={marvel.comics}
              events={marvel.events}
              resourceURI={marvel.resourceURI}
              series={marvel.series}
              stories={marvel.stories}
              thumbnailPath={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`}
              thumbnail={{
                path: '',
                extension: '',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
