import { Review } from './Review';
import { Thumbnail } from './Thumbnail';


export class UploadMetaDataByUrl {
    private 'video_type': UploadMetaDataByUrlVideoTypeEnum | undefined;
    public title: string;
    public url: string;
    public description?: string;
    private 'category_id'?: number | undefined;
    public tags?: string;
    private 'auto_publish'?: number | undefined;
    private 'template_group_name'?: string | undefined;
    private 'auto_encrypt'?: number | undefined;
    private 'auto_preheat'?: number | undefined;
    public thumbnail?: Thumbnail;
    public review?: Review;
    private 'workflow_name'?: string | undefined;
    public constructor(videoType?: any, title?: any, url?: any) { 
        this['video_type'] = videoType;
        this['title'] = title;
        this['url'] = url;
    }
    public withVideoType(videoType: UploadMetaDataByUrlVideoTypeEnum): UploadMetaDataByUrl {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: UploadMetaDataByUrlVideoTypeEnum | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType() {
        return this['video_type'];
    }
    public withTitle(title: string): UploadMetaDataByUrl {
        this['title'] = title;
        return this;
    }
    public withUrl(url: string): UploadMetaDataByUrl {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): UploadMetaDataByUrl {
        this['description'] = description;
        return this;
    }
    public withCategoryId(categoryId: number): UploadMetaDataByUrl {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId() {
        return this['category_id'];
    }
    public withTags(tags: string): UploadMetaDataByUrl {
        this['tags'] = tags;
        return this;
    }
    public withAutoPublish(autoPublish: number): UploadMetaDataByUrl {
        this['auto_publish'] = autoPublish;
        return this;
    }
    public set autoPublish(autoPublish: number | undefined) {
        this['auto_publish'] = autoPublish;
    }
    public get autoPublish() {
        return this['auto_publish'];
    }
    public withTemplateGroupName(templateGroupName: string): UploadMetaDataByUrl {
        this['template_group_name'] = templateGroupName;
        return this;
    }
    public set templateGroupName(templateGroupName: string | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName() {
        return this['template_group_name'];
    }
    public withAutoEncrypt(autoEncrypt: number): UploadMetaDataByUrl {
        this['auto_encrypt'] = autoEncrypt;
        return this;
    }
    public set autoEncrypt(autoEncrypt: number | undefined) {
        this['auto_encrypt'] = autoEncrypt;
    }
    public get autoEncrypt() {
        return this['auto_encrypt'];
    }
    public withAutoPreheat(autoPreheat: number): UploadMetaDataByUrl {
        this['auto_preheat'] = autoPreheat;
        return this;
    }
    public set autoPreheat(autoPreheat: number | undefined) {
        this['auto_preheat'] = autoPreheat;
    }
    public get autoPreheat() {
        return this['auto_preheat'];
    }
    public withThumbnail(thumbnail: Thumbnail): UploadMetaDataByUrl {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withReview(review: Review): UploadMetaDataByUrl {
        this['review'] = review;
        return this;
    }
    public withWorkflowName(workflowName: string): UploadMetaDataByUrl {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName() {
        return this['workflow_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UploadMetaDataByUrlVideoTypeEnum {
    MP4 = 'MP4',
    TS = 'TS',
    MOV = 'MOV',
    MXF = 'MXF',
    MPG = 'MPG',
    FLV = 'FLV',
    WMV = 'WMV',
    AVI = 'AVI',
    M4V = 'M4V',
    F4V = 'F4V',
    MPEG = 'MPEG',
    E_3GP = '3GP',
    ASF = 'ASF',
    MKV = 'MKV',
    MP3 = 'MP3',
    OGG = 'OGG',
    WAV = 'WAV',
    WMA = 'WMA',
    APE = 'APE',
    FLAC = 'FLAC',
    AAC = 'AAC',
    AC3 = 'AC3',
    MMF = 'MMF',
    AMR = 'AMR',
    M4A = 'M4A',
    M4R = 'M4R',
    WV = 'WV',
    MP2 = 'MP2'
}
