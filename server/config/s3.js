import { S3Client } from "@aws-sdk/client-s3";
import config from "./config.js";
const s3 = new S3Client({
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
  },
  region: config.aws.region,
});

export default s3;
