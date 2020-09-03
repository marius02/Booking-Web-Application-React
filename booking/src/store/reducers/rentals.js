const rentals = (state = [], action) => {
  if (action.type == "FETCH_RENTALS") {
    return action.rentals;
  } else if (action.type == "CREATE_RENTAL") {
    return [...state, action.rentals];
  } else {
    return state;
  }
};

export default rentals;
