import dotenv from "dotenv";
dotenv.config();
export default {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    timeLife: process.env.JWT_TIME_LIFE,
  },
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucketName: process.env.AWS_BUCKET_NAME,
    region: process.env.AWS_BUCKET_REGION,
  },
  port: process.env.PORT,
  client: {
    url: process.env.CLIENT_URL,
  },
};
