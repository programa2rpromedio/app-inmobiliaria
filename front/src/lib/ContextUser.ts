import { createContext } from "react";

interface UserContextType {
  Provider: React.Provider<any>;
  Consumer: React.Consumer<any>;
}

export interface State {
  address: string;
  city: string;
  email: string;
  favourites: [];
  firstName: string;
  lastName: string;
  phone: string;
  profilePicture: { url: string } | {};
  role: string;
  _id: string;
  token: string
}

export const UserContext: UserContextType = createContext<any>(null)

export function userReducer(state: State | null, action: { type: any; payload: State }) {
  switch (action.type) {
    case 'login': {
      return ({ ...action.payload, token: action.payload.token })
    }
    case 'logout': {
      return state
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
