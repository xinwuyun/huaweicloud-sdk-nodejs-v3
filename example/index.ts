import { BasicCredentials } from "../core/auth/BasicCredentials";
import { GlobalCredentials } from "../core/auth/GlobalCredentials";

import { FunctionGraphClient } from '../services/functionGraph/FunctionGraphClient'
import { CreateFunctionRequest } from '../services/functionGraph/model/CreateFunctionRequest'
import { CreateFunctionRequestBody } from '../services/functionGraph/model/CreateFunctionRequestBody'
import { startZip } from './utils'
import { GetFunctionListRequest } from '../services/functionGraph/model/GetFunctionListRequest';
import { GetFunctionListResponse } from '../services/functionGraph/model/GetFunctionListResponse'
import { UpdateFunctionRequest } from '../services/functionGraph/model/UpdateFunctionRequest'
import { UpdateFunctionRequestBody } from '../services/functionGraph/model/UpdateFunctionRequestBody'
import { DeleteFunctionRequest } from '../services/functionGraph/model/DeleteFunctionRequest'
import express = require('express')
import { UpdateFunctionConfigRequestBody } from "../services/functionGraph/model/UpdateFunctionConfigRequestBody";
import { UpdateFunctionConfigRequest } from "../services/functionGraph/model/UpdateFunctionConfigRequest";

const ak = '6T9ZUN0WWK4SDIAWJVOJ';
const sk = 'JeIqadapRve0GAndO29VvuIpE7XdNh59iUKTktkx';
const domainId = '0bbeba4f1080f3560fe8c011e1ec4960';
const projectId = '0bcc05efb100f2a92f53c011f262dfa0';
// const projectId = '0bbeba4f2500f3562febc0119135baf7'

const app: express.Application = express()
app.get('/createFunction', async function(req: any, res: { send: (arg0: string) => void;}){
    const app: express.Application = express();
    const client = new FunctionGraphClient()
        .withAk(ak)
        .withSk(sk)
        .withProjectId(projectId)
        .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
    const body = new CreateFunctionRequestBody({
        func_name: "function_ttttest_node",
        handler: "index.handler",
        memory_size: 128,
        timeout: 30,
        runtime: "Node.js12.13",
        pkg: "default",
        code_type: "zip"
    })
    .withFunctionCode(await startZip("./src"))
    let data = "";
    let result = await client.createFunction(new CreateFunctionRequest()
        .withBody(body));
    result
    res.send(result);
})


app.get('/test', function(req: any, res: { send: (arg0: string) => void;}){
    class Point {
        private x: number;
        private y: number;
    
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    
        getX(): number {
            return this.x;
        }
        getY(): number {
            return this.y;
        }
    }
    
    let p1 = new Point(4, 5);
    let p2 = Object.assign({}, p1);
    res.send(JSON.stringify(p2));
})


// app.get('/updateFunctionConfig', async function(req: any, res: { send: (arg0: string) => void;}){
//     const app: express.Application = express();
//     const client = FunctionGraphClient.newBuilder()
//         .withCredential(new BasicCredentials()
//             .withAk(ak)
//             .withSk(sk)
//             .withProjectId(projectId)
//         )
//         .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
//         .build();
//     const body = new UpdateFunctionConfigRequestBody({
//         func_name: "function_test_node",
//         handler: "index.handler",
//         memory_size: 128,
//         timeout: 30,
//         runtime: "Node.js12.13",
//     })
//     const result = client.updateFunctionConfig(new UpdateFunctionConfigRequest()
//         .withFunctionUrn("urn:fss:cn-north-4:0bcc05efb100f2a92f53c011f262dfa0:function:default:function_test_node:latest")
//         .withBody(body))
//     result.then(result => {
//         res.send("JSON.stringify(result)::" + JSON.stringify(result))
//     }).catch(ex => {
//         res.send("exception:" + JSON.stringify(ex))
//     });
// })
// app.get('/getFunctionList', async function(req: any, res: { send: (arg0: string) => void;}){    
//     const app: express.Application = express();
//     const client = new FunctionGraphClient()
//         .withAk(ak)
//         .withSk(sk)
//         .withProjectId(projectId)
//         .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
//     const result = client.getFunctionList(new GetFunctionListRequest()
//         .withPackage('default'))
//     result.then(result => {
//         res.send("JSON.stringify(result)::" + JSON.stringify(result))
//     }).catch(ex => {
//         res.send("exception:" + JSON.stringify(ex))
//     });
// })

// app.get('/updateFunction', async function(req: any, res: { send: (arg0: string) => void;}){
//     const app: express.Application = express();
//     const client = FunctionGraphClient.newBuilder()
//         .withCredential(new BasicCredentials()
//             .withAk(ak)
//             .withSk(sk)
//             .withProjectId(projectId)
//         )
//         .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
//         .build();
//     const body = new UpdateFunctionRequestBody()
//         .withCodeType("zip")
//         .withFunctionCode(await startZip("./src"))

//     const result = client.updateFunction(new UpdateFunctionRequest()
//         .withFunctionUrn("urn:fss:cn-north-4:0bcc05efb100f2a92f53c011f262dfa0:function:default:function_test_node:latest")
//         .withBody(body))
//     result.then(result => {
//         res.send("JSON.stringify(result)::" + JSON.stringify(result))
//     }).catch(ex => {
//         res.send("exception:" + JSON.stringify(ex))
//     });
// })

app.get('/deleteFunction', async function(req: any, res: { send: (arg0: string) => void;}){
    const app: express.Application = express();
    const client = new FunctionGraphClient()
        .withAk(ak)
        .withSk(sk)
        .withProjectId(projectId)
        .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
    const func_urn = "urn:fss:cn-north-4:0bcc05efb100f2a92f53c011f262dfa0:function:default:function_tttest_node"
    const result = await client.deleteFunction(new DeleteFunctionRequest()
        .withFunctionUrn(func_urn))
    res.send(result);
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
}) 
