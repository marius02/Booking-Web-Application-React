const rental = (state = {}, action) => {
  if (action.type == "FETCH_RENTAL_BY_ID") {
    return action.rental;
  } else {
    return state;
  }
};

export default rental;
