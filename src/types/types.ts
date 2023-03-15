interface User {
  id: number;
  name: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Event {
  id: number;
  title: string;
  description: string;
  participants: Array<User>;
  coordinates: Coordinates;
  type: string;
  image: string;
}

interface MapBoxEvent {
  type: "Feature";
  properties: {
    id: number;
    title: string;
    description: string;
  };
  geometry: {
    coordinates: [number, number];
    type: "Point";
  };
}

export type { User, Event, Coordinates, MapBoxEvent };
