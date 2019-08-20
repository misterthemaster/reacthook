import { useReducer } from "react";
import _ from "lodash";
import createUseContext from "constate";

// Define the initial state of our app
const initialState = {
  contacts: [],
  gameId: null
};

// Define a pure function reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POINT":
      let user = [...state.contacts]; // important to create a copy, otherwise you'll modify state outside of setState call
      let index = state.contacts.findIndex(emp => emp.id === action.payload);
      user[index].nbPoints = user[index].nbPoints+1;
      return {
        contacts: user
      };
    case "REMOVE_POINT":
        let userRemove = [...state.contacts]; // important to create a copy, otherwise you'll modify state outside of setState call
        let indexRemove = state.contacts.findIndex(emp => emp.id === action.payload);
        userRemove[indexRemove].nbPoints = userRemove[indexRemove].nbPoints-1;
      return {
        contacts: userRemove
      };

    case "ADD_PLAYER":
      return {
        contacts: [...state.contacts, action.payload]
      };
      case "LOAD_GAME":
      return {
        contacts: action.payload, gameId: state.gameId
      };
      case "START_GAME":
        //debugger;
      return {
        contacts: [...state.contacts], gameId: action.payload
      };
    default:
      throw new Error();
  }
};

// Define your custom hook that contains your state, dispatcher and actions
const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { contacts, loading, gameId } = state;
  const removePoint = id => {
    dispatch({
      type: "REMOVE_POINT",
      payload: id
    });
  };
  const addPoint = id => {
    dispatch({
      type: "ADD_POINT",
      payload: id
    });
  };
  const addPlayer = name => {
    dispatch({
      type: "ADD_PLAYER",
      payload: { id: _.uniqueId(10), name, nbPoints:0, image: "dummy.png" }
    });
  };
  const LoadTheGame = contacts => {
    dispatch({
      type: "LOAD_GAME",
      payload: contacts
    });
  };
  const startGame = id => {
    dispatch({
      type: "START_GAME",
      payload: id
    });
  };
  return { gameId, contacts, loading, addPoint, removePoint, addPlayer,LoadTheGame, startGame };
};

// Share your custom hook
export const useCounterContext = createUseContext(useCounter);