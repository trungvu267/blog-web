import crypto from "crypto";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3 from "./config/s3.js";

export const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");
export const getImageUrl = async (imageName) => {
  const getObjectParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: imageName,
  };
  const command = new GetObjectCommand(getObjectParams);
  const imageUrl = await getSignedUrl(s3, command, { expiresIn: "1y" });
  return imageUrl;
};
