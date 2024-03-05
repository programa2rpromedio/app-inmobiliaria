import { createContext } from "react";

interface StepContextType {
  Provider: React.Provider<any>;
  Consumer: React.Consumer<any>;
}

export const StepContext: StepContextType = createContext<any>(null)

export function stepReducer(state: number, action: { type: any; }) {
  switch (action.type) {
    case 'next': {
      if (state >= 5) return state
      return state + 1
    }
    case 'prev': {
      if (state <= 0) return state
      return state - 1
    }


    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
