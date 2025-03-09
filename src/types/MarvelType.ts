export default interface MarvelType {
  id: number;
  name: string;
  comics: { available: number; collectionURI: string };
  events: { available: number; collectionURI: string };
  resourceURI: string;
  series: { available: number; collectionURI: string };
  stories: { available: number; collectionURI: string };
  thumbnail: { path: string; extension: string }; // thumbnail 객체 정의
  // urls: { type: string; url: string }[];
}
