// src/app/api/images/route.ts
import { NextResponse } from 'next/server';
import { S3Client } from '@aws-sdk/client-s3';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

type ResponseData = {
  url: string;
};

export async function GET(): Promise<ResponseData> {
  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
    region: process.env.AWS_REGION,
  });

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: 'LovesGasStation.png',
    });

    const url = await getSignedUrl(s3, command);

    return new NextResponse(url);
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    return new Response('Error fetching image from S3');
  }
}
