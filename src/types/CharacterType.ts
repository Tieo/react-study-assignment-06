export default interface CharacterType {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  // resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: Array<{ resourceURI: string; name: string }>;
  };
  series: {
    available: number;
    collectionURI: string;
    items: Array<{ resourceURI: string; name: string }>;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: Array<{ resourceURI: string; name: string; type: string }>;
  };
  events: {
    available: number;
    collectionURI: string;
    items: Array<{ resourceURI: string; name: string }>;
  };
  urls: Array<{ type: string; url: string }>;
}
