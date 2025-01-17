import { HcClient } from "../../core/HcClient";
import { ClientBuilder } from "../../core/ClientBuilder";
import { SdkResponse } from "../../core/SdkResponse";
import { ClientRequest } from "http"

import { CreateFunctionRequest } from "./model/CreateFunctionRequest";
import { CreateFunctionResponse } from "./model/CreateFunctionResponse";
import { GetFunctionListRequest } from "./model/GetFunctionListRequest";
import { GetFunctionListResponse } from "./model/GetFunctionListResponse";
import { UpdateFunctionRequest } from "./model/UpdateFunctionRequest";
import { UpdateFunctionResponse } from "./model/UpdateFunctionResponse";
import { DeleteFunctionRequest } from "./model/DeleteFunctionRequest";
import { UpdateFunctionConfigRequestBody } from "./model/UpdateFunctionConfigRequestBody";
import { UpdateFunctionConfigRequest } from "./model/UpdateFunctionConfigRequest";
import { UpdateFunctionConfigResponse } from "./model/UpdateFunctionConfigResponse";
var axios = require('axios');

export class FunctionGraphClient {
    public ak?: string;
    public sk?: string;
    public project_id?: string;
    public endpoint?: string;
    public constructor(ak?:string, sk?: string, project_id?: string, endpoint?: string) {
        this['ak'] = ak;
        this['sk'] = sk;
        this['project_id'] = project_id;
        this['endpoint'] = endpoint;
    }
     
    public withAk(ak: string): FunctionGraphClient {
        this['ak'] = ak;
        return this;
    }

    public withSk(sk: string): FunctionGraphClient {
        this['sk'] = sk;
        return this;
    }

    public withProjectId(project_id: string): FunctionGraphClient {
        this['project_id'] = project_id;
        return this;
    }

    public withEndpoint(endpoint: string): FunctionGraphClient {
        this['endpoint'] = endpoint;
        return this;
    }

    public getPath() {
        return __dirname;
    }

    /**
     * 创建函数
     * @summary 创建函数
     * @param {CreateFunctionRequestBody}  
     * @throws {RequiredError}
     */
    public async createFunction(createFunctionRequest: CreateFunctionRequest): Promise<any> {
        const options = ParamCreater().createFunction(createFunctionRequest, this);
        return axios(options)
            .then((res:any)=>{
                return res;
            })
            .catch((err:any) => {
                return err;
            })
    }
    /**
     * 更新函数代码
     * @param updateFuncionRequest 
     * @returns 
     */
    // public updateFunction(updateFuncionRequest: UpdateFunctionRequest): Promise<UpdateFunctionResponse>{
    //     const options = ParamCreater().updateFunction(updateFuncionRequest);
    //     options['responseHeader'] = ['']
    //     return this.hcClient.sendRequest(options);
    // }


    // public updateFunctionConfig(updateFunctionConfigRequest: UpdateFunctionConfigRequest): Promise<UpdateFunctionConfigResponse>{
    //     const options = ParamCreater().updateFunctionConfig(updateFunctionConfigRequest);    
    //     options['responseHeader'] = ['']
    //     return this.hcClient.sendRequest(options);
    // }

    /**
     * 删除函数
     * @param deleteFunctionRequest 
     */
    public deleteFunction(deleteFunctionRequest: DeleteFunctionRequest): Promise<any>{
        const options = ParamCreater().deleteFunction(deleteFunctionRequest, this);
        return axios(options)
            .then((res:any)=>{
                return res;
            })
            .catch((err:any) => {
                return err;
            })
    }
    /**
     * 获取函数列表
     * @summary 获取函数列表
     * @param {GetFunctionListRequest} 
     * @param {RequiredError}
     */
    // public getFunctionList(getFunctionListRequest: GetFunctionListRequest): Promise<GetFunctionListResponse> {
    //     const options = ParamCreater().getFunctionList(getFunctionListRequest);
    //     options['responseHeader'] = [''];
    //     return this.hcClient.sendRequest(options);
    // }
}

export const ParamCreater = function () {

    return {
        /**
         * 此接口用于创建函数
         */
        createFunction(createFunctionRequest: CreateFunctionRequest, client: FunctionGraphClient) {
            let options = {
                method: "POST",
                url: `${client.endpoint}/v2/${client.project_id}/fgs/functions`,
                headers: {},
                data: ""
            }
            const localVarHeaderParameter = {} as any;
            let body: any;

            if (createFunctionRequest !== null && createFunctionRequest !== undefined) {
                if (createFunctionRequest instanceof CreateFunctionRequest) {
                    body = createFunctionRequest.body;
                } else {
                    body = createFunctionRequest['body'];
                }
            }

            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            body = Object.assign({}, body)
            localVarHeaderParameter['Content-Type'] = 'application/json;';
            let signer = require('./signer');
            let https = require('https');
            let sig = new signer.Signer();
            sig.Key = client.ak;
            sig.Secret = client.sk;
            let r = new signer.HttpRequest(options.method, options.url);
            r.headers =  {"Content-Type": "application/json"};
            r.body = JSON.stringify(body);
            let opt = sig.Sign(r);
            
            options.data = r.body;
            options.headers = opt.headers;
            return options;
        },

        /**
         * 更新函数
         */
        updateFunction(updateFunctionRequest?: UpdateFunctionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/code",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            }
            const localVarHeaderParameter = {} as any;
            const localVarPathParameter = {} as any;
            let body: any;
            let func_urn: any;

            if (updateFunctionRequest !== null && updateFunctionRequest !== undefined) {
                if (updateFunctionRequest instanceof UpdateFunctionRequest) {
                    body = updateFunctionRequest.body;
                    func_urn = updateFunctionRequest.func_urn;
                } else {
                    body = updateFunctionRequest['body'];
                    func_urn = updateFunctionRequest['func_urn'];
                }
            }

            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn')
            }

            localVarPathParameter['function_urn'] = func_urn;
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            // options.data = {}
            options.headers = localVarHeaderParameter;
            options.pathParams = { 'function_urn': func_urn}
            return options;
        },

        updateFunctionConfig(updateFunctionConfigRequest?: UpdateFunctionConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            }
            const localVarHeaderParameter = {} as any;
            var body: any;
            let func_urn: any;
            if (updateFunctionConfigRequest !== null && updateFunctionConfigRequest !== undefined) {
                if (updateFunctionConfigRequest instanceof UpdateFunctionConfigRequest) {
                    body = updateFunctionConfigRequest.body;
                    func_urn = updateFunctionConfigRequest.func_urn;
                } else {
                    body = updateFunctionConfigRequest['body'];
                    func_urn = updateFunctionConfigRequest['func_urn'];
                }
            }

            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': func_urn}
            options.headers = localVarHeaderParameter;
            return options;
        },

        /**
         * 此接口用于获取函数列表
         */
        getFunctionList(getFunctionListRequest?: GetFunctionListRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarQueryParameter = {} as any;
            let pkg;
            if(getFunctionListRequest !== null && getFunctionListRequest !== undefined) {
                if (getFunctionListRequest instanceof GetFunctionListRequest) {
                    pkg = getFunctionListRequest.package;
                }else{
                    pkg = getFunctionListRequest['package'];
                }
            }
            if (pkg !== null && pkg !== undefined) {
                localVarQueryParameter['package'] = pkg;
            }
            options.queryParams = localVarQueryParameter;
            return options;
        },

        /**
         * 此接口用于删除函数
         * @param deleteFunctionRequest 
         * @returns 
         */
        deleteFunction(deleteFunctionRequest: DeleteFunctionRequest, client:FunctionGraphClient) {
            let options = {
                method: "DELETE",
                url: `${client.endpoint}/v2/${client.project_id}/fgs/functions/{function_urn}`,
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            let func_urn: any;
            if (deleteFunctionRequest !== null && deleteFunctionRequest !== undefined) {
                if (deleteFunctionRequest instanceof DeleteFunctionRequest) {
                    func_urn = deleteFunctionRequest.func_urn;
                } else {
                    func_urn = deleteFunctionRequest['func_urn'];
                }
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn')
            }
            options.url = options.url.replace('{function_urn}', func_urn);

            let signer = require('./signer');
            let https = require('https');
            let sig = new signer.Signer();
            sig.Key = client.ak;
            sig.Secret = client.sk;
            let r = new signer.HttpRequest(options.method, options.url);
            r.headers =  {"Content-Type": "application/json"};
            r.body = ''
            let opt = sig.Sign(r);
            
            options.data = r.body;
            options.headers = opt.headers;
            return options;
        }
    }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
 export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}