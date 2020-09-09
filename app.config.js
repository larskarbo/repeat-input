import 'dotenv/config';

export default {
  name: "repeat-input",
  version: "1.0.0",
  extra: {
    FAUNADB_KEY: process.env.FAUNADB_KEY,
  },
  slug: "repeat-input",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  web: {
    favicon: "./assets/favicon.png",
  },
};
