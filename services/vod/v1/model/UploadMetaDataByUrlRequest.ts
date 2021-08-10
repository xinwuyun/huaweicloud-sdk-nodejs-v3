import { UploadMetaDataByUrlReq } from './UploadMetaDataByUrlReq';


export class UploadMetaDataByUrlRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: UploadMetaDataByUrlReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UploadMetaDataByUrlRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UploadMetaDataByUrlRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UploadMetaDataByUrlReq): UploadMetaDataByUrlRequest {
        this['body'] = body;
        return this;
    }
}