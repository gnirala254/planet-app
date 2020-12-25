const initialState = {
  favourite: [],
};

export const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAVORITE":
      return {
        favourite: [...state.favourite, action.payload],
      };

    case "REMOVE":
      const array = state.favourite.filter((obj) => {
        return obj.id !== action.payload;
      });
      return {
        favourite: array,
      };

    default:
      return state;
  }
};
