export const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "mongodb+srv://dbuser:<password>@atlascluster.zsi19t0.mongodb.net/?retryWrites=true&w=majority";

export const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

export const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || "localhost";
