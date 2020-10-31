declare module "@receipe/redux-store" {
  interface Meal {
    id: number;
    name: string;
    category: string;
  }

  interface Detail {
    name: string;
    instruction: string;
    thumbnail: string;
  }

  interface ReceipeState {
    list: Array<Meal>;
    current?: Detail;
    error?: any;
  }

  interface RootStore {
    receipe: ReceipeState;
    count: { count: number };
  }
}
