// We can create a global features.json to handle this
// and handle this logic by config

const filimoFeatures = {
  cinema: true,
  movie: false,
};

import "@shared/user";

if (filimoFeatures.cinema) import("./cinema");
if (filimoFeatures.movie) import("./movie");
