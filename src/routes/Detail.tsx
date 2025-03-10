import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterType from '../types/CharacterType.ts';
import Character from '../components/Character.tsx';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [characterData, setCharacterData] = useState<CharacterType[]>([]);

  const id = useParams().id;

  const getCharacter = async () => {
    const responseCharacter = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    );
    const jsonCharacter = await responseCharacter.json();
    // console.log(jsonCharacter.data.results);
    setCharacterData(jsonCharacter.data.results[0]);
    setLoading(false);
  };

  useEffect(() => {
    getCharacter();
    document.body.classList.add('dark-mode'); // body에 클래스 추가/제거
  }, []);

  return (
    <div className="character-detail">
      {loading ? (
        <h1 style={{ padding: '20px' }}>Your Characters are Comming! 🚀</h1>
      ) : (
        <Character id={0} name={''} description={''} modified={''} thumbnail={{
            path: '',
            extension: ''
          }} comics={{
            available: 0,
            collectionURI: '',
            items: []
          }} series={{
            available: 0,
            collectionURI: '',
            items: []
          }} stories={{
            available: 0,
            collectionURI: '',
            items: []
          }} events={{
            available: 0,
            collectionURI: '',
            items: []
          }} urls={[]} {...characterData} />
      )}
    </div>
  );
}

export default Detail;
