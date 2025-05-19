// We can create a global features.json to handle this
// and handle this logic by vite.config

const aparatFeatures = {
  music: true,
  sport: false,
};

import "@shared/user";

if (aparatFeatures.music) import("./music");
if (aparatFeatures.sport) import("./sport");
