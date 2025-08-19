import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class S3Service {
  private readonly s3: AWS.S3;
  private readonly bucket: string;

  constructor() {
    AWS.config.update({
      region: process.env.AWS_REGION || 'ap-south-1',
    });

    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_S3_ACCESS_KEY,
      secretAccessKey: process.env.AWS_S3_KEY_SECRET,
      region: process.env.AWS_REGION || 'ap-south-1',
    });

    this.bucket = process.env.AWS_S3_BUCKET!;
  }

  /**
   * Upload a Multer file directly (raw)
   */
  async uploadFile(file: any) {
    const key = `${uuidv4()}-${Date.now()}-${file.originalname}`;
    return this.uploadBuffer(file.buffer, key, file.mimetype);
  }

  /**
   * Upload a buffer (e.g., from sharp)
   */
  async uploadFileBuffer(
    buffer: Buffer,
    options: { filename: string; mimetype: string },
  ){
    return this.uploadBuffer(buffer, options.filename, options.mimetype);
  }

  /**
   * Internal helper to upload any buffer
   */
  private async uploadBuffer(
    buffer: Buffer,
    key: string,
    contentType: string,
  ): Promise<string> {
    const params: AWS.S3.PutObjectRequest = {
      Bucket: this.bucket,
      Key: key,
      Body: buffer,
      ACL: 'public-read',
      ContentType: contentType,
    };

    try {
      const result = await this.s3.upload(params).promise();
      return result.Location;
    } catch (error) {
      console.error('S3 Upload Error:', error);
      throw new InternalServerErrorException('Failed to upload file to S3');
    }
  }
}
