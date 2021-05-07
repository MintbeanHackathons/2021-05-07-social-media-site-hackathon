import React from "react";
import { useReducer, createContext } from "react";

// see https://reactjs.org/docs/hooks-reference.html#usereducer

const initialState: State = {
  user: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload };
    case "unsetUser":
      return { ...state, user: null };
  }
}

export type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const StateContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => alert("Initial"),
});

export default function StateProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("STATE", state);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
}
