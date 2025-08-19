export declare class S3Service {
    private readonly s3;
    private readonly bucket;
    constructor();
    uploadFile(file: any): Promise<string>;
    uploadFileBuffer(buffer: Buffer, options: {
        filename: string;
        mimetype: string;
    }): Promise<string>;
    private uploadBuffer;
}
