// Actions
const ADD = "COUNT/ADD" as const;
const RESET = "COUNT/RESET" as const;

// ActionCreators
export const countAdd = () => ({
  type: ADD,
});

export const countReset = () => ({
  type: RESET,
});

// InitialState
const initialState = {
  count: 0,
};

type CountActions = ReturnType<typeof countAdd | typeof countReset>;

// Reducer
export default function reducer(state = initialState, action: CountActions) {
  switch (action.type) {
    case ADD: {
      return {
        count: state.count + 1,
      };
    }

    case RESET: {
      return initialState;
    }

    default:
      return initialState;
  }
}
