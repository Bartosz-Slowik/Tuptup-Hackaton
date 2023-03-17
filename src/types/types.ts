interface User {
  id: number;
  name: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  participants: Array<User>;
  coordinates: Array<number>;
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
    coordinates: Array<number>;
    type: "Point";
  };
}

export type { User, Event, MapBoxEvent };
