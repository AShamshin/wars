const dutyFree = (normPrice, discount, hol) =>
  Math.floor(hol / ((normPrice / 100) * discount));
