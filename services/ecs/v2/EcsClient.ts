import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddServerGroupMemberRequest } from './model/AddServerGroupMemberRequest';
import { AddServerGroupMemberRequestBody } from './model/AddServerGroupMemberRequestBody';
import { AddServerGroupMemberResponse } from './model/AddServerGroupMemberResponse';
import { AttachServerVolumeOption } from './model/AttachServerVolumeOption';
import { AttachServerVolumeRequest } from './model/AttachServerVolumeRequest';
import { AttachServerVolumeRequestBody } from './model/AttachServerVolumeRequestBody';
import { AttachServerVolumeResponse } from './model/AttachServerVolumeResponse';
import { BatchAddServerNicOption } from './model/BatchAddServerNicOption';
import { BatchAddServerNicsRequest } from './model/BatchAddServerNicsRequest';
import { BatchAddServerNicsRequestBody } from './model/BatchAddServerNicsRequestBody';
import { BatchAddServerNicsResponse } from './model/BatchAddServerNicsResponse';
import { BatchCreateServerTagsRequest } from './model/BatchCreateServerTagsRequest';
import { BatchCreateServerTagsRequestBody } from './model/BatchCreateServerTagsRequestBody';
import { BatchCreateServerTagsResponse } from './model/BatchCreateServerTagsResponse';
import { BatchDeleteServerNicOption } from './model/BatchDeleteServerNicOption';
import { BatchDeleteServerNicsRequest } from './model/BatchDeleteServerNicsRequest';
import { BatchDeleteServerNicsRequestBody } from './model/BatchDeleteServerNicsRequestBody';
import { BatchDeleteServerNicsResponse } from './model/BatchDeleteServerNicsResponse';
import { BatchDeleteServerTagsRequest } from './model/BatchDeleteServerTagsRequest';
import { BatchDeleteServerTagsRequestBody } from './model/BatchDeleteServerTagsRequestBody';
import { BatchDeleteServerTagsResponse } from './model/BatchDeleteServerTagsResponse';
import { BatchRebootServersRequest } from './model/BatchRebootServersRequest';
import { BatchRebootServersRequestBody } from './model/BatchRebootServersRequestBody';
import { BatchRebootServersResponse } from './model/BatchRebootServersResponse';
import { BatchRebootSeversOption } from './model/BatchRebootSeversOption';
import { BatchStartServersOption } from './model/BatchStartServersOption';
import { BatchStartServersRequest } from './model/BatchStartServersRequest';
import { BatchStartServersRequestBody } from './model/BatchStartServersRequestBody';
import { BatchStartServersResponse } from './model/BatchStartServersResponse';
import { BatchStopServersOption } from './model/BatchStopServersOption';
import { BatchStopServersRequest } from './model/BatchStopServersRequest';
import { BatchStopServersRequestBody } from './model/BatchStopServersRequestBody';
import { BatchStopServersResponse } from './model/BatchStopServersResponse';
import { BlockDeviceAttachableQuantity } from './model/BlockDeviceAttachableQuantity';
import { ChangeServerOsWithCloudInitOption } from './model/ChangeServerOsWithCloudInitOption';
import { ChangeServerOsWithCloudInitRequest } from './model/ChangeServerOsWithCloudInitRequest';
import { ChangeServerOsWithCloudInitRequestBody } from './model/ChangeServerOsWithCloudInitRequestBody';
import { ChangeServerOsWithCloudInitResponse } from './model/ChangeServerOsWithCloudInitResponse';
import { ChangeSeversOsMetadata } from './model/ChangeSeversOsMetadata';
import { CreatePostPaidServersRequest } from './model/CreatePostPaidServersRequest';
import { CreatePostPaidServersRequestBody } from './model/CreatePostPaidServersRequestBody';
import { CreatePostPaidServersResponse } from './model/CreatePostPaidServersResponse';
import { CreateServerGroupOption } from './model/CreateServerGroupOption';
import { CreateServerGroupRequest } from './model/CreateServerGroupRequest';
import { CreateServerGroupRequestBody } from './model/CreateServerGroupRequestBody';
import { CreateServerGroupResponse } from './model/CreateServerGroupResponse';
import { CreateServerGroupResult } from './model/CreateServerGroupResult';
import { CreateServersRequest } from './model/CreateServersRequest';
import { CreateServersRequestBody } from './model/CreateServersRequestBody';
import { CreateServersResponse } from './model/CreateServersResponse';
import { DeleteServerGroupMemberRequest } from './model/DeleteServerGroupMemberRequest';
import { DeleteServerGroupMemberRequestBody } from './model/DeleteServerGroupMemberRequestBody';
import { DeleteServerGroupMemberResponse } from './model/DeleteServerGroupMemberResponse';
import { DeleteServerGroupRequest } from './model/DeleteServerGroupRequest';
import { DeleteServerGroupResponse } from './model/DeleteServerGroupResponse';
import { DeleteServerMetadataRequest } from './model/DeleteServerMetadataRequest';
import { DeleteServerMetadataResponse } from './model/DeleteServerMetadataResponse';
import { DeleteServersRequest } from './model/DeleteServersRequest';
import { DeleteServersRequestBody } from './model/DeleteServersRequestBody';
import { DeleteServersResponse } from './model/DeleteServersResponse';
import { DetachServerVolumeRequest } from './model/DetachServerVolumeRequest';
import { DetachServerVolumeResponse } from './model/DetachServerVolumeResponse';
import { Flavor } from './model/Flavor';
import { FlavorExtraSpec } from './model/FlavorExtraSpec';
import { FlavorLink } from './model/FlavorLink';
import { GetServerRemoteConsoleOption } from './model/GetServerRemoteConsoleOption';
import { InterfaceAttachment } from './model/InterfaceAttachment';
import { Ipv6Bandwidth } from './model/Ipv6Bandwidth';
import { JobEntities } from './model/JobEntities';
import { Link } from './model/Link';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListResizeFlavorsRequest } from './model/ListResizeFlavorsRequest';
import { ListResizeFlavorsResponse } from './model/ListResizeFlavorsResponse';
import { ListResizeFlavorsResult } from './model/ListResizeFlavorsResult';
import { ListServerBlockDevicesRequest } from './model/ListServerBlockDevicesRequest';
import { ListServerBlockDevicesResponse } from './model/ListServerBlockDevicesResponse';
import { ListServerGroupsPageInfoResult } from './model/ListServerGroupsPageInfoResult';
import { ListServerGroupsRequest } from './model/ListServerGroupsRequest';
import { ListServerGroupsResponse } from './model/ListServerGroupsResponse';
import { ListServerGroupsResult } from './model/ListServerGroupsResult';
import { ListServerInterfacesRequest } from './model/ListServerInterfacesRequest';
import { ListServerInterfacesResponse } from './model/ListServerInterfacesResponse';
import { ListServersDetailsRequest } from './model/ListServersDetailsRequest';
import { ListServersDetailsResponse } from './model/ListServersDetailsResponse';
import { NovaAddSecurityGroupOption } from './model/NovaAddSecurityGroupOption';
import { NovaAssociateSecurityGroupRequest } from './model/NovaAssociateSecurityGroupRequest';
import { NovaAssociateSecurityGroupRequestBody } from './model/NovaAssociateSecurityGroupRequestBody';
import { NovaAssociateSecurityGroupResponse } from './model/NovaAssociateSecurityGroupResponse';
import { NovaAvailabilityZone } from './model/NovaAvailabilityZone';
import { NovaAvailabilityZoneState } from './model/NovaAvailabilityZoneState';
import { NovaCreateKeypairOption } from './model/NovaCreateKeypairOption';
import { NovaCreateKeypairRequest } from './model/NovaCreateKeypairRequest';
import { NovaCreateKeypairRequestBody } from './model/NovaCreateKeypairRequestBody';
import { NovaCreateKeypairResponse } from './model/NovaCreateKeypairResponse';
import { NovaCreateServersOption } from './model/NovaCreateServersOption';
import { NovaCreateServersRequest } from './model/NovaCreateServersRequest';
import { NovaCreateServersRequestBody } from './model/NovaCreateServersRequestBody';
import { NovaCreateServersResponse } from './model/NovaCreateServersResponse';
import { NovaCreateServersResult } from './model/NovaCreateServersResult';
import { NovaCreateServersSchedulerHint } from './model/NovaCreateServersSchedulerHint';
import { NovaDeleteKeypairRequest } from './model/NovaDeleteKeypairRequest';
import { NovaDeleteKeypairResponse } from './model/NovaDeleteKeypairResponse';
import { NovaDeleteServerRequest } from './model/NovaDeleteServerRequest';
import { NovaDeleteServerResponse } from './model/NovaDeleteServerResponse';
import { NovaDisassociateSecurityGroupRequest } from './model/NovaDisassociateSecurityGroupRequest';
import { NovaDisassociateSecurityGroupRequestBody } from './model/NovaDisassociateSecurityGroupRequestBody';
import { NovaDisassociateSecurityGroupResponse } from './model/NovaDisassociateSecurityGroupResponse';
import { NovaKeypair } from './model/NovaKeypair';
import { NovaKeypairDetail } from './model/NovaKeypairDetail';
import { NovaLink } from './model/NovaLink';
import { NovaListAvailabilityZonesRequest } from './model/NovaListAvailabilityZonesRequest';
import { NovaListAvailabilityZonesResponse } from './model/NovaListAvailabilityZonesResponse';
import { NovaListKeypairsRequest } from './model/NovaListKeypairsRequest';
import { NovaListKeypairsResponse } from './model/NovaListKeypairsResponse';
import { NovaListKeypairsResult } from './model/NovaListKeypairsResult';
import { NovaListServerSecurityGroupsRequest } from './model/NovaListServerSecurityGroupsRequest';
import { NovaListServerSecurityGroupsResponse } from './model/NovaListServerSecurityGroupsResponse';
import { NovaListServersDetailsRequest } from './model/NovaListServersDetailsRequest';
import { NovaListServersDetailsResponse } from './model/NovaListServersDetailsResponse';
import { NovaNetwork } from './model/NovaNetwork';
import { NovaRemoveSecurityGroupOption } from './model/NovaRemoveSecurityGroupOption';
import { NovaSecurityGroup } from './model/NovaSecurityGroup';
import { NovaSecurityGroupCommonGroup } from './model/NovaSecurityGroupCommonGroup';
import { NovaSecurityGroupCommonIpRange } from './model/NovaSecurityGroupCommonIpRange';
import { NovaSecurityGroupCommonRule } from './model/NovaSecurityGroupCommonRule';
import { NovaServer } from './model/NovaServer';
import { NovaServerBlockDeviceMapping } from './model/NovaServerBlockDeviceMapping';
import { NovaServerFault } from './model/NovaServerFault';
import { NovaServerFlavor } from './model/NovaServerFlavor';
import { NovaServerImage } from './model/NovaServerImage';
import { NovaServerNetwork } from './model/NovaServerNetwork';
import { NovaServerSecurityGroup } from './model/NovaServerSecurityGroup';
import { NovaServerVolume } from './model/NovaServerVolume';
import { NovaShowKeypairRequest } from './model/NovaShowKeypairRequest';
import { NovaShowKeypairResponse } from './model/NovaShowKeypairResponse';
import { NovaShowServerRequest } from './model/NovaShowServerRequest';
import { NovaShowServerResponse } from './model/NovaShowServerResponse';
import { NovaSimpleKeypair } from './model/NovaSimpleKeypair';
import { PageLink } from './model/PageLink';
import { PostPaidServer } from './model/PostPaidServer';
import { PostPaidServerDataVolume } from './model/PostPaidServerDataVolume';
import { PostPaidServerDataVolumeExtendParam } from './model/PostPaidServerDataVolumeExtendParam';
import { PostPaidServerDataVolumeMetadata } from './model/PostPaidServerDataVolumeMetadata';
import { PostPaidServerEip } from './model/PostPaidServerEip';
import { PostPaidServerEipBandwidth } from './model/PostPaidServerEipBandwidth';
import { PostPaidServerEipExtendParam } from './model/PostPaidServerEipExtendParam';
import { PostPaidServerExtendParam } from './model/PostPaidServerExtendParam';
import { PostPaidServerIpv6Bandwidth } from './model/PostPaidServerIpv6Bandwidth';
import { PostPaidServerNic } from './model/PostPaidServerNic';
import { PostPaidServerPublicip } from './model/PostPaidServerPublicip';
import { PostPaidServerRootVolume } from './model/PostPaidServerRootVolume';
import { PostPaidServerRootVolumeExtendParam } from './model/PostPaidServerRootVolumeExtendParam';
import { PostPaidServerSchedulerHints } from './model/PostPaidServerSchedulerHints';
import { PostPaidServerSecurityGroup } from './model/PostPaidServerSecurityGroup';
import { PostPaidServerTag } from './model/PostPaidServerTag';
import { PrePaidServer } from './model/PrePaidServer';
import { PrePaidServerDataVolume } from './model/PrePaidServerDataVolume';
import { PrePaidServerDataVolumeExtendParam } from './model/PrePaidServerDataVolumeExtendParam';
import { PrePaidServerDataVolumeMetadata } from './model/PrePaidServerDataVolumeMetadata';
import { PrePaidServerEip } from './model/PrePaidServerEip';
import { PrePaidServerEipBandwidth } from './model/PrePaidServerEipBandwidth';
import { PrePaidServerEipExtendParam } from './model/PrePaidServerEipExtendParam';
import { PrePaidServerExtendParam } from './model/PrePaidServerExtendParam';
import { PrePaidServerIpv6Bandwidth } from './model/PrePaidServerIpv6Bandwidth';
import { PrePaidServerNic } from './model/PrePaidServerNic';
import { PrePaidServerPublicip } from './model/PrePaidServerPublicip';
import { PrePaidServerRootVolume } from './model/PrePaidServerRootVolume';
import { PrePaidServerRootVolumeExtendParam } from './model/PrePaidServerRootVolumeExtendParam';
import { PrePaidServerSchedulerHints } from './model/PrePaidServerSchedulerHints';
import { PrePaidServerSecurityGroup } from './model/PrePaidServerSecurityGroup';
import { PrePaidServerTag } from './model/PrePaidServerTag';
import { ProjectFlavorLimit } from './model/ProjectFlavorLimit';
import { ReinstallServerWithCloudInitOption } from './model/ReinstallServerWithCloudInitOption';
import { ReinstallServerWithCloudInitRequest } from './model/ReinstallServerWithCloudInitRequest';
import { ReinstallServerWithCloudInitRequestBody } from './model/ReinstallServerWithCloudInitRequestBody';
import { ReinstallServerWithCloudInitResponse } from './model/ReinstallServerWithCloudInitResponse';
import { ReinstallSeverMetadata } from './model/ReinstallSeverMetadata';
import { ResetServerPasswordOption } from './model/ResetServerPasswordOption';
import { ResetServerPasswordRequest } from './model/ResetServerPasswordRequest';
import { ResetServerPasswordRequestBody } from './model/ResetServerPasswordRequestBody';
import { ResetServerPasswordResponse } from './model/ResetServerPasswordResponse';
import { ResizePostPaidServerOption } from './model/ResizePostPaidServerOption';
import { ResizePostPaidServerRequest } from './model/ResizePostPaidServerRequest';
import { ResizePostPaidServerRequestBody } from './model/ResizePostPaidServerRequestBody';
import { ResizePostPaidServerResponse } from './model/ResizePostPaidServerResponse';
import { ResizePrePaidServerOption } from './model/ResizePrePaidServerOption';
import { ResizeServerExtendParam } from './model/ResizeServerExtendParam';
import { ResizeServerRequest } from './model/ResizeServerRequest';
import { ResizeServerRequestBody } from './model/ResizeServerRequestBody';
import { ResizeServerResponse } from './model/ResizeServerResponse';
import { ServerAddress } from './model/ServerAddress';
import { ServerAttachableQuantity } from './model/ServerAttachableQuantity';
import { ServerBlockDevice } from './model/ServerBlockDevice';
import { ServerDetail } from './model/ServerDetail';
import { ServerExtendVolumeAttachment } from './model/ServerExtendVolumeAttachment';
import { ServerFault } from './model/ServerFault';
import { ServerFlavor } from './model/ServerFlavor';
import { ServerGroupMember } from './model/ServerGroupMember';
import { ServerId } from './model/ServerId';
import { ServerImage } from './model/ServerImage';
import { ServerInterfaceFixedIp } from './model/ServerInterfaceFixedIp';
import { ServerLimits } from './model/ServerLimits';
import { ServerNicSecurityGroup } from './model/ServerNicSecurityGroup';
import { ServerRemoteConsole } from './model/ServerRemoteConsole';
import { ServerSchedulerHints } from './model/ServerSchedulerHints';
import { ServerSecurityGroup } from './model/ServerSecurityGroup';
import { ServerSystemTag } from './model/ServerSystemTag';
import { ServerTag } from './model/ServerTag';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowResetPasswordFlagRequest } from './model/ShowResetPasswordFlagRequest';
import { ShowResetPasswordFlagResponse } from './model/ShowResetPasswordFlagResponse';
import { ShowServerGroupRequest } from './model/ShowServerGroupRequest';
import { ShowServerGroupResponse } from './model/ShowServerGroupResponse';
import { ShowServerGroupResult } from './model/ShowServerGroupResult';
import { ShowServerLimitsRequest } from './model/ShowServerLimitsRequest';
import { ShowServerLimitsResponse } from './model/ShowServerLimitsResponse';
import { ShowServerRemoteConsoleRequest } from './model/ShowServerRemoteConsoleRequest';
import { ShowServerRemoteConsoleRequestBody } from './model/ShowServerRemoteConsoleRequestBody';
import { ShowServerRemoteConsoleResponse } from './model/ShowServerRemoteConsoleResponse';
import { ShowServerRequest } from './model/ShowServerRequest';
import { ShowServerResponse } from './model/ShowServerResponse';
import { ShowServerTagsRequest } from './model/ShowServerTagsRequest';
import { ShowServerTagsResponse } from './model/ShowServerTagsResponse';
import { SimpleFlavor } from './model/SimpleFlavor';
import { SubJob } from './model/SubJob';
import { SubJobEntities } from './model/SubJobEntities';
import { UpdateServerAddress } from './model/UpdateServerAddress';
import { UpdateServerAutoTerminateTimeRequest } from './model/UpdateServerAutoTerminateTimeRequest';
import { UpdateServerAutoTerminateTimeRequestBody } from './model/UpdateServerAutoTerminateTimeRequestBody';
import { UpdateServerAutoTerminateTimeResponse } from './model/UpdateServerAutoTerminateTimeResponse';
import { UpdateServerMetadataRequest } from './model/UpdateServerMetadataRequest';
import { UpdateServerMetadataRequestBody } from './model/UpdateServerMetadataRequestBody';
import { UpdateServerMetadataResponse } from './model/UpdateServerMetadataResponse';
import { UpdateServerOption } from './model/UpdateServerOption';
import { UpdateServerRequest } from './model/UpdateServerRequest';
import { UpdateServerRequestBody } from './model/UpdateServerRequestBody';
import { UpdateServerResponse } from './model/UpdateServerResponse';
import { UpdateServerResult } from './model/UpdateServerResult';

export class EcsClient {
    public static newBuilder(): ClientBuilder<EcsClient> {
        return new ClientBuilder<EcsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }

    /**
     * 将云服务器加入云服务器组。添加成功后，如果该云服务器组是反亲和性策略的，则该云服务器与云服务器组中的其他成员尽量分散地创建在不同主机上。如果该云服务器时故障域类型的，则该云服务器会拥有故障域属性。
     * @summary 云服务器组添加成员
     * @param {string} serverGroupId 云服务器组ID。
     * @param {AddServerGroupMemberRequestBody} addServerGroupMemberRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addServerGroupMember(addServerGroupMemberRequest?: AddServerGroupMemberRequest): Promise<void> {
        const options = ParamCreater().addServerGroupMember(addServerGroupMemberRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 把磁盘挂载到弹性云服务器上。
     * @summary 弹性云服务器挂载磁盘
     * @param {string} serverId 云服务器ID。
     * @param {AttachServerVolumeRequestBody} attachServerVolumeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachServerVolume(attachServerVolumeRequest?: AttachServerVolumeRequest): Promise<AttachServerVolumeResponse> {
        const options = ParamCreater().attachServerVolume(attachServerVolumeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 给云服务器添加一张或多张网卡。
     * @summary 批量添加云服务器网卡
     * @param {string} serverId 云服务器ID。
     * @param {BatchAddServerNicsRequestBody} batchAddServerNicsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddServerNics(batchAddServerNicsRequest?: BatchAddServerNicsRequest): Promise<BatchAddServerNicsResponse> {
        const options = ParamCreater().batchAddServerNics(batchAddServerNicsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * - 为指定云服务器批量添加标签。  - 标签管理服务TMS使用该接口批量管理云服务器的标签。
     * @summary 批量添加云服务器标签
     * @param {string} serverId 云服务器ID。
     * @param {BatchCreateServerTagsRequestBody} batchCreateServerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateServerTags(batchCreateServerTagsRequest?: BatchCreateServerTagsRequest): Promise<void> {
        const options = ParamCreater().batchCreateServerTags(batchCreateServerTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 卸载并删除云服务器中的一张或多张网卡。
     * @summary 批量删除云服务器网卡
     * @param {string} serverId 云服务器ID。
     * @param {BatchDeleteServerNicsRequestBody} batchDeleteServerNicsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteServerNics(batchDeleteServerNicsRequest?: BatchDeleteServerNicsRequest): Promise<BatchDeleteServerNicsResponse> {
        const options = ParamCreater().batchDeleteServerNics(batchDeleteServerNicsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * - 为指定云服务器批量删除标签。  - 标签管理服务TMS使用该接口批量管理云服务器的标签。
     * @summary 批量删除云服务器标签
     * @param {string} serverId 云服务器ID。
     * @param {BatchDeleteServerTagsRequestBody} batchDeleteServerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteServerTags(batchDeleteServerTagsRequest?: BatchDeleteServerTagsRequest): Promise<void> {
        const options = ParamCreater().batchDeleteServerTags(batchDeleteServerTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据给定的云服务器ID列表，批量重启云服务器，一次最多可以重启1000台。
     * @summary 批量重启云服务器
     * @param {BatchRebootServersRequestBody} batchRebootServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRebootServers(batchRebootServersRequest?: BatchRebootServersRequest): Promise<BatchRebootServersResponse> {
        const options = ParamCreater().batchRebootServers(batchRebootServersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据给定的云服务器ID列表，批量启动云服务器，一次最多可以启动1000台。
     * @summary 批量启动云服务器
     * @param {BatchStartServersRequestBody} batchStartServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStartServers(batchStartServersRequest?: BatchStartServersRequest): Promise<BatchStartServersResponse> {
        const options = ParamCreater().batchStartServers(batchStartServersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据给定的云服务器ID列表，批量关闭云服务器，一次最多可以关闭1000台。
     * @summary 批量关闭云服务器
     * @param {BatchStopServersRequestBody} batchStopServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStopServers(batchStopServersRequest?: BatchStopServersRequest): Promise<BatchStopServersResponse> {
        const options = ParamCreater().batchStopServers(batchStopServersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 切换弹性云服务器操作系统。支持弹性云服务器数据盘不变的情况下，使用新镜像重装系统盘。  调用该接口后，系统将卸载系统盘，然后使用新镜像重新创建系统盘，并挂载至弹性云服务器，实现切换操作系统功能。
     * @summary 切换弹性云服务器操作系统(安装Cloud init)
     * @param {string} serverId 云服务器ID。
     * @param {ChangeServerOsWithCloudInitRequestBody} changeServerOsWithCloudInitRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeServerOsWithCloudInit(changeServerOsWithCloudInitRequest?: ChangeServerOsWithCloudInitRequest): Promise<ChangeServerOsWithCloudInitResponse> {
        const options = ParamCreater().changeServerOsWithCloudInit(changeServerOsWithCloudInitRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建一台或多台[按需付费](https://support.huaweicloud.com/productdesc-ecs/ecs_01_0065.html)方式的云服务器。  弹性云服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式。  - 密钥对 密钥对指使用密钥对作为弹性云服务器的鉴权方式。 接口调用方法：使用key_name字段，指定弹性云服务器登录时使用的密钥文件。  - 密码 密码指使用设置初始密码方式作为弹性云服务器的鉴权方式，此时，您可以通过用户名密码方式登录弹性云服务器，Linux操作系统时为root用户的初始密码，Windows操作系统时为Administrator用户的初始密码。  接口调用方法：使用adminPass字段，指定管理员帐号的初始登录密码。对于镜像已安装Cloud-init的Linux云服务器，如果需要使用密文密码，可以使用user_data字段进行密码注入。  > 对于安装Cloud-init镜像的Linux云服务器云主机，若指定user_data字段，则adminPass字段无效。
     * @summary 创建云服务器(按需)
     * @param {CreatePostPaidServersRequestBody} createPostPaidServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPaidServers(createPostPaidServersRequest?: CreatePostPaidServersRequest): Promise<CreatePostPaidServersResponse> {
        const options = ParamCreater().createPostPaidServers(createPostPaidServersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建弹性云服务器组。  与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
     * @summary 创建云服务器组
     * @param {CreateServerGroupRequestBody} createServerGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createServerGroup(createServerGroupRequest?: CreateServerGroupRequest): Promise<CreateServerGroupResponse> {
        const options = ParamCreater().createServerGroup(createServerGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建一台或多台云服务器。  指该接口兼容《弹性云服务器接口参考》创建云服务器v1的功能，同时合入新功能，支持创建[包年/包月](https://support.huaweicloud.com/productdesc-ecs/ecs_01_0065.html)的弹性云服务器。  弹性云服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式。  - 密钥对  指使用密钥对作为弹性云服务器的鉴权方式。  接口调用方法：使用key_name字段，指定弹性云服务器登录时使用的密钥文件。  - 密码  指使用设置初始密码方式作为弹性云服务器的鉴权方式，此时，您可以通过用户名密码方式登录弹性云服务器，Linux操作系统时为root用户的初始密码，Windows操作系统时为Administrator用户的初始密码。  接口调用方法：使用adminPass字段，指定管理员帐号的初始登录密码。对于镜像已安装Cloud-init的Linux云服务器，如果需要使用密文密码，可以使用user_data字段进行密码注入。  > 对于安装Cloud-init镜像的Linux云服务器云主机，若指定user_data字段，则adminPass字段无效。  购买操作示例： - [使用API购买ECS过程中常见问题及处理方法](https://support.huaweicloud.com/api-ecs/ecs_04_0007.html) - [获取Token并检验Token的有效期 ](https://support.huaweicloud.com/api-ecs/ecs_04_0008.html)
     * @summary 创建云服务器
     * @param {CreateServersRequestBody} createServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createServers(createServersRequest?: CreateServersRequest): Promise<CreateServersResponse> {
        const options = ParamCreater().createServers(createServersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除云服务器组。  与原生的删除云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
     * @summary 删除云服务器组
     * @param {string} serverGroupId 弹性云服务器组UUID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerGroup(deleteServerGroupRequest?: DeleteServerGroupRequest): Promise<void> {
        const options = ParamCreater().deleteServerGroup(deleteServerGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 将弹性云服务器移出云服务器组。移出后，该云服务器与云服务器组中的成员不再遵从反亲和策略。
     * @summary 云服务器组删除成员
     * @param {string} serverGroupId 云服务器组ID。
     * @param {DeleteServerGroupMemberRequestBody} deleteServerGroupMemberRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerGroupMember(deleteServerGroupMemberRequest?: DeleteServerGroupMemberRequest): Promise<void> {
        const options = ParamCreater().deleteServerGroupMember(deleteServerGroupMemberRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除云服务器指定元数据。
     * @summary 删除云服务器指定元数据
     * @param {string} key 待删除的云服务器metadata键值
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerMetadata(deleteServerMetadataRequest?: DeleteServerMetadataRequest): Promise<void> {
        const options = ParamCreater().deleteServerMetadata(deleteServerMetadataRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据指定的云服务器ID列表，删除云服务器。  系统支持删除单台云服务器和批量删除多台云服务器操作，批量删除云服务器时，一次最多可以删除1000台。
     * @summary 删除云服务器
     * @param {DeleteServersRequestBody} deleteServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServers(deleteServersRequest?: DeleteServersRequest): Promise<DeleteServersResponse> {
        const options = ParamCreater().deleteServers(deleteServersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 从弹性云服务器中卸载磁盘。
     * @summary 弹性云服务器卸载磁盘
     * @param {string} serverId 云服务器ID。
     * @param {string} volumeId 磁盘ID。
     * @param {'0' | '1'} [deleteFlag] 是否强制卸载数据盘。  - 是，值为“1”。  - 否，值为“0”。  默认值为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachServerVolume(detachServerVolumeRequest?: DetachServerVolumeRequest): Promise<DetachServerVolumeResponse> {
        const options = ParamCreater().detachServerVolume(detachServerVolumeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询云服务器规格详情信息和规格扩展信息列表。
     * @summary 查询规格详情和规格扩展信息列表
     * @param {string} [availabilityZone] 可用区，需要指定可用区（AZ）的名称或者ID或者code。  可通过接口 [查询可用区列表接口](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;ECS&amp;api&#x3D;NovaListAvailabilityZones) 获取，也可参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavors(listFlavorsRequest?: ListFlavorsRequest): Promise<ListFlavorsResponse> {
        const options = ParamCreater().listFlavors(listFlavorsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 变更规格时，部分规格的云服务器之间不能互相变更。您可以通过本接口，通过指定弹性云服务器规格，查询该规格可以变更的规格列表。
     * @summary 查询云服务器规格变更支持列表
     * @param {string} [instanceUuid] 进行规格切换的云服务器ID，UUID格式。
     * @param {number} [limit] 单页面可显示的flavor条数最大值，默认是1000。
     * @param {string} [marker] 以单页最后一条flavor的ID作为分页标记。
     * @param {'asc' | 'desc'} [sortDir] 升序/降序排序，默认值为：asc。  取值范围：  - asc：表示升序。 - desc：表示降序
     * @param {'flavorid' | 'sort_key' | 'name' | 'memory_mb' | 'vcpus' | 'root_gb'} [sortKey] 排序字段。  key的取值范围：  - flavorid：表示规格ID。 - sort_key的默认值为“flavorid”。 - name：表示规格名称。 - memory_mb：表示内存大小。 - vcpus：表示CPU大小。 - root_gb：表示系统盘大小。
     * @param {string} [sourceFlavorId] 进行规格切换的云服务器源规格ID。
     * @param {string} [sourceFlavorName] 进行规格切换的云服务器源规格名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResizeFlavors(listResizeFlavorsRequest?: ListResizeFlavorsRequest): Promise<ListResizeFlavorsResponse> {
        const options = ParamCreater().listResizeFlavors(listResizeFlavorsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询弹性云服务器挂载的磁盘信息。
     * @summary 查询弹性云服务器磁盘信息
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerBlockDevices(listServerBlockDevicesRequest?: ListServerBlockDevicesRequest): Promise<ListServerBlockDevicesResponse> {
        const options = ParamCreater().listServerBlockDevices(listServerBlockDevicesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询弹性云服务器组。  与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
     * @summary 查询云服务器组列表
     * @param {number} [limit] 查询返回server group数量限制。
     * @param {string} [marker] 从marker指定的server group的下一条数据开始查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerGroups(listServerGroupsRequest?: ListServerGroupsRequest): Promise<ListServerGroupsResponse> {
        const options = ParamCreater().listServerGroups(listServerGroupsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询云服务器网卡信息。
     * @summary 查询云服务器网卡信息
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerInterfaces(listServerInterfacesRequest?: ListServerInterfacesRequest): Promise<ListServerInterfacesResponse> {
        const options = ParamCreater().listServerInterfaces(listServerInterfacesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据用户请求条件从数据库筛选、查询所有的弹性云服务器，并关联相关表获取到弹性云服务器的详细信息。  该接口支持查询弹性云服务器计费方式，以及是否被冻结。
     * @summary 查询云服务器详情列表
     * @param {string} [enterpriseProjectId] 查询绑定某个企业项目的弹性云服务器。  若需要查询当前用户所有企业项目绑定的弹性云服务，请传参all_granted_eps。
     * @param {string} [flavor] 云服务器规格ID,已上线的规格请参见《弹性云服务器用户指南》的“实例和应用场景”章节。
     * @param {string} [ip] IPv4地址过滤结果，匹配规则为模糊匹配。
     * @param {number} [limit] 查询返回云服务器当前页面的大小。每页最多返回1000台云服务器的信息。
     * @param {string} [name] 云服务器名称，匹配规则为模糊匹配。
     * @param {string} [notTags] 查询tag字段中不包含该值的云服务器。
     * @param {number} [offset] 页码。 当前页面数，默认为1。  取值大于等于0，取值为0时返回第1页。
     * @param {string} [reservationId] 批量创建弹性云服务器时，指定返回的ID，用于查询本次批量创建的弹性云服务器。
     * @param {string} [status] 云服务器状态。  取值范围：  ACTIVE， BUILD，DELETED，ERROR，HARD_REBOOT，MIGRATING，REBOOT，RESIZE，REVERT_RESIZE，SHELVED，SHELVED_OFFLOADED，SHUTOFF，UNKNOWN，VERIFY_RESIZE  只有管理员可以使用“deleted”状态过滤查询已经删除的弹性云服务器。  弹性云服务器状态说明请参考[云服务器状态](https://support.huaweicloud.com/api-ecs/ecs_08_0002.html)
     * @param {string} [tags] 查询tag字段中包含该值的云服务器。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServersDetails(listServersDetailsRequest?: ListServersDetailsRequest): Promise<ListServersDetailsResponse> {
        const options = ParamCreater().listServersDetails(listServersDetailsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 为弹性云服务器添加一个安全组。  添加多个安全组时，建议最多为弹性云服务器添加5个安全组。
     * @summary 添加安全组
     * @param {string} serverId 弹性云服务器ID。
     * @param {NovaAssociateSecurityGroupRequestBody} novaAssociateSecurityGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaAssociateSecurityGroup(novaAssociateSecurityGroupRequest?: NovaAssociateSecurityGroupRequest): Promise<void> {
        const options = ParamCreater().novaAssociateSecurityGroup(novaAssociateSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建SSH密钥，或把公钥导入系统，生成密钥对。  创建SSH密钥成功后，请把响应数据中的私钥内容保存到本地文件，用户使用该私钥登录云服务器云主机。为保证云服务器云主机器安全，私钥数据只能读取一次，请妥善保管。
     * @summary 创建和导入SSH密钥
     * @param {NovaCreateKeypairRequestBody} novaCreateKeypairRequestBody This is a auto create Body Object
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaCreateKeypair(novaCreateKeypairRequest?: NovaCreateKeypairRequest): Promise<NovaCreateKeypairResponse> {
        const options = ParamCreater().novaCreateKeypair(novaCreateKeypairRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建一台弹性云服务器。  弹性云服务器创建完成后，如需开启自动恢复功能，可以调用配置云服务器自动恢复的接口，具体使用请参见管理云服务器自动恢复动作。  该接口在云服务器创建失败后不支持自动回滚。若需要自动回滚能力，可以调用POST /v1/{project_id}/cloudservers接口，具体使用请参见创建云服务器（按需）。
     * @summary 创建云服务器
     * @param {NovaCreateServersRequestBody} novaCreateServersRequestBody This is a auto create Body Object
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaCreateServers(novaCreateServersRequest?: NovaCreateServersRequest): Promise<NovaCreateServersResponse> {
        const options = ParamCreater().novaCreateServers(novaCreateServersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据SSH密钥的名称，删除指定SSH密钥。
     * @summary 删除SSH密钥
     * @param {string} keypairName 密钥名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaDeleteKeypair(novaDeleteKeypairRequest?: NovaDeleteKeypairRequest): Promise<void> {
        const options = ParamCreater().novaDeleteKeypair(novaDeleteKeypairRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除一台云服务器。
     * @summary 删除云服务器
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaDeleteServer(novaDeleteServerRequest?: NovaDeleteServerRequest): Promise<void> {
        const options = ParamCreater().novaDeleteServer(novaDeleteServerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 移除弹性云服务器中的安全组。
     * @summary 移除安全组
     * @param {string} serverId 云服务器ID。
     * @param {NovaDisassociateSecurityGroupRequestBody} novaDisassociateSecurityGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaDisassociateSecurityGroup(novaDisassociateSecurityGroupRequest?: NovaDisassociateSecurityGroupRequest): Promise<void> {
        const options = ParamCreater().novaDisassociateSecurityGroup(novaDisassociateSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询可用域列表。
     * @summary 查询可用区列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListAvailabilityZones(): Promise<NovaListAvailabilityZonesResponse> {
        const options = ParamCreater().novaListAvailabilityZones();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询SSH密钥信息列表。
     * @summary 查询SSH密钥列表
     * @param {number} [limit] 查询返回秘钥数量限制。  在微版本2.35后支持
     * @param {string} [marker] 从marker指定的keypair的名称的下一条数据开始查询。  在微版本2.35后支持。
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListKeypairs(novaListKeypairsRequest?: NovaListKeypairsRequest): Promise<NovaListKeypairsResponse> {
        const options = ParamCreater().novaListKeypairs(novaListKeypairsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询指定弹性云服务器的安全组。
     * @summary 查询指定云服务器安全组列表
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListServerSecurityGroups(novaListServerSecurityGroupsRequest?: NovaListServerSecurityGroupsRequest): Promise<NovaListServerSecurityGroupsResponse> {
        const options = ParamCreater().novaListServerSecurityGroups(novaListServerSecurityGroupsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询云服务器详情信息列表。
     * @summary 查询云服务器详情列表
     * @param {string} [changesSince] 云服务器上次更新状态的时间戳信息。时间戳为UTC格式。
     * @param {string} [flavor] 云服务器规格ID。
     * @param {string} [image] 镜像ID  在使用image作为条件过滤时，不能同时支持其他过滤条件和分页条件。如果同时指定image及其他条件，则以image条件为准；当条件不含image时，接口功能不受限制。
     * @param {string} [ip] IPv4地址过滤结果，匹配规则为模糊匹配。
     * @param {number} [limit] 查询返回云服务器数量限制。
     * @param {string} [marker] 从marker指定的云服务器ID的下一条数据开始查询。
     * @param {string} [name] 云服务器名称。
     * @param {string} [notTags] 查询tag字段中不包含该值的云服务器，值为标签的Key。  &gt; 说明： &gt;  &gt; 系统近期对标签功能进行了升级。如果之前添加的Tag为“Key.Value”的形式，则查询的时候需要使用“Key”来查询。 &gt;  &gt; 例如：之前添加的tag为“a.b”,则升级后，查询时需使用“not-tags&#x3D;a”。
     * @param {string} [reservationId] 批量创建弹性云服务器时，指定返回的ID，用于查询本次批量创建的弹性云服务器。
     * @param {'created_at' | 'availability_zone' | 'display_name' | 'host' | 'instance_type_id' | 'key_name' | 'project_id' | 'user_id' | 'updated_at' | 'uuid' | 'vm_state'} [sortKey] 查询结果按弹性云服务器属性排序，默认排序顺序为created_at逆序。
     * @param {'ACTIVE' | 'BUILD' | 'DELETED' | 'ERROR' | 'HARD_REBOOT' | 'MIGRATING' | 'REBOOT' | 'RESIZE' | 'REVERT_RESIZE' | 'SHELVED' | 'SHELVED_OFFLOADED' | 'SHUTOFF' | 'UNKNOWN' | 'VERIFY_RESIZE'} [status] 云服务器状态。  取值范围： ACTIVE， BUILD，DELETED，ERROR，HARD_REBOOT，MIGRATING，REBOOT，RESIZE，REVERT_RESIZE，SHELVED，SHELVED_OFFLOADED，SHUTOFF，UNKNOWN，VERIFY_RESIZE  直到2.37微版本，非上面范围的status字段将返回空列表，2.38之后的微版本，将返回400错误。  云服务器状态说明请参考[云服务器状态](https://support.huaweicloud.com/api-ecs/ecs_08_0002.html)。
     * @param {string} [tags] 查询tag字段中包含该值的云服务器。
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListServersDetails(novaListServersDetailsRequest?: NovaListServersDetailsRequest): Promise<NovaListServersDetailsResponse> {
        const options = ParamCreater().novaListServersDetails(novaListServersDetailsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据SSH密钥名称查询指定SSH密钥。
     * @summary 查询SSH密钥详情
     * @param {string} keypairName 密钥名称信息。
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaShowKeypair(novaShowKeypairRequest?: NovaShowKeypairRequest): Promise<NovaShowKeypairResponse> {
        const options = ParamCreater().novaShowKeypair(novaShowKeypairRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据云服务器ID，查询云服务器的详细信息。
     * @summary 查询云服务器详情
     * @param {string} serverId 云服务器ID。
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaShowServer(novaShowServerRequest?: NovaShowServerRequest): Promise<NovaShowServerResponse> {
        const options = ParamCreater().novaShowServer(novaShowServerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 重装弹性云服务器的操作系统。支持弹性云服务器数据盘不变的情况下，使用原镜像重装系统盘。  调用该接口后，系统将卸载系统盘，然后使用原镜像重新创建系统盘，并挂载至弹性云服务器，实现重装操作系统功能。
     * @summary 重装弹性云服务器操作系统(安装Cloud-init)
     * @param {string} serverId 云服务器ID。
     * @param {ReinstallServerWithCloudInitRequestBody} reinstallServerWithCloudInitRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public reinstallServerWithCloudInit(reinstallServerWithCloudInitRequest?: ReinstallServerWithCloudInitRequest): Promise<ReinstallServerWithCloudInitResponse> {
        const options = ParamCreater().reinstallServerWithCloudInit(reinstallServerWithCloudInitRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 重置弹性云服务器管理帐号（root用户或Administrator用户）的密码。
     * @summary 一键重置弹性云服务器密码(企业项目)
     * @param {string} serverId 云服务器ID。
     * @param {ResetServerPasswordRequestBody} resetServerPasswordRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetServerPassword(resetServerPasswordRequest?: ResetServerPasswordRequest): Promise<void> {
        const options = ParamCreater().resetServerPassword(resetServerPasswordRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 当您创建的弹性云服务器规格无法满足业务需要时，可以变更云服务器规格，升级vCPU、内存。具体接口的使用，请参见本节内容。  变更规格时，部分规格的云服务器之间不能互相变更。  您可以通过接口“/v1/{project_id}/cloudservers/resize_flavors?{instance_uuid,source_flavor_id,source_flavor_name}”查询支持列表。
     * @summary 变更云服务器规格(按需)
     * @param {string} serverId 云服务器ID。
     * @param {ResizePostPaidServerRequestBody} resizePostPaidServerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizePostPaidServer(resizePostPaidServerRequest?: ResizePostPaidServerRequest): Promise<ResizePostPaidServerResponse> {
        const options = ParamCreater().resizePostPaidServer(resizePostPaidServerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 变更云服务器规格。  v1.1版本：指该接口兼容v1接口的功能，同时合入新功能，支持变更包年/包月弹性云服务器的规格。  注意事项：  - 该接口可以使用合作伙伴自身的AK/SK或者token调用，也可以用合作伙伴子客户的AK/SK或者token来调用。 - 如果使用AK/SK认证方式，示例代码中region请参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)中“弹性云服务 ECS”下“区域”的内容，，serviceName（英文服务名称缩写）请指定为ECS。 - Endpoint请参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)中“弹性云服务 ECS”下“终端节点（Endpoint）”的内容。
     * @summary 变更云服务器规格
     * @param {string} serverId 云服务器ID。
     * @param {ResizeServerRequestBody} resizeServerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeServer(resizeServerRequest?: ResizeServerRequest): Promise<ResizeServerResponse> {
        const options = ParamCreater().resizeServer(resizeServerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询弹性云服务器是否支持一键重置密码。
     * @summary 查询是否支持一键重置密码
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResetPasswordFlag(showResetPasswordFlagRequest?: ShowResetPasswordFlagRequest): Promise<ShowResetPasswordFlagResponse> {
        const options = ParamCreater().showResetPasswordFlag(showResetPasswordFlagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询弹性云服务器的详细信息。  该接口支持查询弹性云服务器的计费方式，以及是否被冻结。
     * @summary 查询云服务器详情
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServer(showServerRequest?: ShowServerRequest): Promise<ShowServerResponse> {
        const options = ParamCreater().showServer(showServerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询弹性云服务器组详情。  与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
     * @summary 查询云服务器组详情
     * @param {string} serverGroupId 弹性云服务器组UUID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerGroup(showServerGroupRequest?: ShowServerGroupRequest): Promise<ShowServerGroupResponse> {
        const options = ParamCreater().showServerGroup(showServerGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询租户配额信息。
     * @summary 查询租户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerLimits(): Promise<ShowServerLimitsResponse> {
        const options = ParamCreater().showServerLimits();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取弹性云服务器VNC远程登录地址。
     * @summary 获取VNC远程登录地址
     * @param {string} serverId 云服务器ID。
     * @param {ShowServerRemoteConsoleRequestBody} showServerRemoteConsoleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerRemoteConsole(showServerRemoteConsoleRequest?: ShowServerRemoteConsoleRequest): Promise<ShowServerRemoteConsoleResponse> {
        const options = ParamCreater().showServerRemoteConsole(showServerRemoteConsoleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * - 查询指定云服务器的标签信息。  - 标签管理服务TMS使用该接口查询指定云服务器的全部标签数据。
     * @summary 查询云服务器标签
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerTags(showServerTagsRequest?: ShowServerTagsRequest): Promise<ShowServerTagsResponse> {
        const options = ParamCreater().showServerTags(showServerTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 修改云服务器信息，目前支持修改云服务器名称及描述和hostname。
     * @summary 修改云服务器
     * @param {string} serverId 云服务器ID。
     * @param {UpdateServerRequestBody} updateServerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServer(updateServerRequest?: UpdateServerRequest): Promise<UpdateServerResponse> {
        const options = ParamCreater().updateServer(updateServerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 修改按需服务器，设置定时销毁时间。如果设置的销毁时间为空，表示取消销毁时间。  该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ecs:cloudServers:put。
     * @summary 修改云服务器销毁时间
     * @param {string} serverId 云服务器ID。
     * @param {UpdateServerAutoTerminateTimeRequestBody} updateServerAutoTerminateTimeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerAutoTerminateTime(updateServerAutoTerminateTimeRequest?: UpdateServerAutoTerminateTimeRequest): Promise<void> {
        const options = ParamCreater().updateServerAutoTerminateTime(updateServerAutoTerminateTimeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新云服务器元数据。  - 如果元数据中没有待更新字段，则自动添加该字段。  - 如果元数据中已存在待更新字段，则直接更新字段值。  - 如果元数据中的字段不再请求参数中，则保持不变
     * @summary 更新云服务器元数据
     * @param {string} serverId 云服务器ID。
     * @param {UpdateServerMetadataRequestBody} updateServerMetadataRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerMetadata(updateServerMetadataRequest?: UpdateServerMetadataRequest): Promise<UpdateServerMetadataResponse> {
        const options = ParamCreater().updateServerMetadata(updateServerMetadataRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询Job的执行状态。  对于创建云服务器、删除云服务器、云服务器批量操作和网卡操作等异步API，命令下发后，会返回job_id，通过job_id可以查询任务的执行状态。
     * @summary 查询任务的执行状态
     * @param {string} jobId 异步请求的任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse> {
        const options = ParamCreater().showJob(showJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 将云服务器加入云服务器组。添加成功后，如果该云服务器组是反亲和性策略的，则该云服务器与云服务器组中的其他成员尽量分散地创建在不同主机上。如果该云服务器时故障域类型的，则该云服务器会拥有故障域属性。
         */
        addServerGroupMember(addServerGroupMemberRequest?: AddServerGroupMemberRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/os-server-groups/{server_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverGroupId;

            if (addServerGroupMemberRequest !== null && addServerGroupMemberRequest !== undefined) {
                if (addServerGroupMemberRequest instanceof AddServerGroupMemberRequest) {
                    serverGroupId = addServerGroupMemberRequest.serverGroupId;
                    body = addServerGroupMemberRequest.body
                } else {
                    serverGroupId = addServerGroupMemberRequest['server_group_id'];
                    body = addServerGroupMemberRequest['body'];
                }
            }
        
            if (serverGroupId === null || serverGroupId === undefined) {
                throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling addServerGroupMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 把磁盘挂载到弹性云服务器上。
         */
        attachServerVolume(attachServerVolumeRequest?: AttachServerVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/attachvolume",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (attachServerVolumeRequest !== null && attachServerVolumeRequest !== undefined) {
                if (attachServerVolumeRequest instanceof AttachServerVolumeRequest) {
                    serverId = attachServerVolumeRequest.serverId;
                    body = attachServerVolumeRequest.body
                } else {
                    serverId = attachServerVolumeRequest['server_id'];
                    body = attachServerVolumeRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling attachServerVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给云服务器添加一张或多张网卡。
         */
        batchAddServerNics(batchAddServerNicsRequest?: BatchAddServerNicsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/nics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (batchAddServerNicsRequest !== null && batchAddServerNicsRequest !== undefined) {
                if (batchAddServerNicsRequest instanceof BatchAddServerNicsRequest) {
                    serverId = batchAddServerNicsRequest.serverId;
                    body = batchAddServerNicsRequest.body
                } else {
                    serverId = batchAddServerNicsRequest['server_id'];
                    body = batchAddServerNicsRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchAddServerNics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定云服务器批量添加标签。  - 标签管理服务TMS使用该接口批量管理云服务器的标签。
         */
        batchCreateServerTags(batchCreateServerTagsRequest?: BatchCreateServerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (batchCreateServerTagsRequest !== null && batchCreateServerTagsRequest !== undefined) {
                if (batchCreateServerTagsRequest instanceof BatchCreateServerTagsRequest) {
                    serverId = batchCreateServerTagsRequest.serverId;
                    body = batchCreateServerTagsRequest.body
                } else {
                    serverId = batchCreateServerTagsRequest['server_id'];
                    body = batchCreateServerTagsRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchCreateServerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 卸载并删除云服务器中的一张或多张网卡。
         */
        batchDeleteServerNics(batchDeleteServerNicsRequest?: BatchDeleteServerNicsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/nics/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (batchDeleteServerNicsRequest !== null && batchDeleteServerNicsRequest !== undefined) {
                if (batchDeleteServerNicsRequest instanceof BatchDeleteServerNicsRequest) {
                    serverId = batchDeleteServerNicsRequest.serverId;
                    body = batchDeleteServerNicsRequest.body
                } else {
                    serverId = batchDeleteServerNicsRequest['server_id'];
                    body = batchDeleteServerNicsRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchDeleteServerNics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定云服务器批量删除标签。  - 标签管理服务TMS使用该接口批量管理云服务器的标签。
         */
        batchDeleteServerTags(batchDeleteServerTagsRequest?: BatchDeleteServerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (batchDeleteServerTagsRequest !== null && batchDeleteServerTagsRequest !== undefined) {
                if (batchDeleteServerTagsRequest instanceof BatchDeleteServerTagsRequest) {
                    serverId = batchDeleteServerTagsRequest.serverId;
                    body = batchDeleteServerTagsRequest.body
                } else {
                    serverId = batchDeleteServerTagsRequest['server_id'];
                    body = batchDeleteServerTagsRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchDeleteServerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据给定的云服务器ID列表，批量重启云服务器，一次最多可以重启1000台。
         */
        batchRebootServers(batchRebootServersRequest?: BatchRebootServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchRebootServersRequest !== null && batchRebootServersRequest !== undefined) {
                if (batchRebootServersRequest instanceof BatchRebootServersRequest) {
                    body = batchRebootServersRequest.body
                } else {
                    body = batchRebootServersRequest['body'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据给定的云服务器ID列表，批量启动云服务器，一次最多可以启动1000台。
         */
        batchStartServers(batchStartServersRequest?: BatchStartServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchStartServersRequest !== null && batchStartServersRequest !== undefined) {
                if (batchStartServersRequest instanceof BatchStartServersRequest) {
                    body = batchStartServersRequest.body
                } else {
                    body = batchStartServersRequest['body'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据给定的云服务器ID列表，批量关闭云服务器，一次最多可以关闭1000台。
         */
        batchStopServers(batchStopServersRequest?: BatchStopServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchStopServersRequest !== null && batchStopServersRequest !== undefined) {
                if (batchStopServersRequest instanceof BatchStopServersRequest) {
                    body = batchStopServersRequest.body
                } else {
                    body = batchStopServersRequest['body'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换弹性云服务器操作系统。支持弹性云服务器数据盘不变的情况下，使用新镜像重装系统盘。  调用该接口后，系统将卸载系统盘，然后使用新镜像重新创建系统盘，并挂载至弹性云服务器，实现切换操作系统功能。
         */
        changeServerOsWithCloudInit(changeServerOsWithCloudInitRequest?: ChangeServerOsWithCloudInitRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudservers/{server_id}/changeos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (changeServerOsWithCloudInitRequest !== null && changeServerOsWithCloudInitRequest !== undefined) {
                if (changeServerOsWithCloudInitRequest instanceof ChangeServerOsWithCloudInitRequest) {
                    serverId = changeServerOsWithCloudInitRequest.serverId;
                    body = changeServerOsWithCloudInitRequest.body
                } else {
                    serverId = changeServerOsWithCloudInitRequest['server_id'];
                    body = changeServerOsWithCloudInitRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeServerOsWithCloudInit.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一台或多台[按需付费](https://support.huaweicloud.com/productdesc-ecs/ecs_01_0065.html)方式的云服务器。  弹性云服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式。  - 密钥对 密钥对指使用密钥对作为弹性云服务器的鉴权方式。 接口调用方法：使用key_name字段，指定弹性云服务器登录时使用的密钥文件。  - 密码 密码指使用设置初始密码方式作为弹性云服务器的鉴权方式，此时，您可以通过用户名密码方式登录弹性云服务器，Linux操作系统时为root用户的初始密码，Windows操作系统时为Administrator用户的初始密码。  接口调用方法：使用adminPass字段，指定管理员帐号的初始登录密码。对于镜像已安装Cloud-init的Linux云服务器，如果需要使用密文密码，可以使用user_data字段进行密码注入。  &gt; 对于安装Cloud-init镜像的Linux云服务器云主机，若指定user_data字段，则adminPass字段无效。
         */
        createPostPaidServers(createPostPaidServersRequest?: CreatePostPaidServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPostPaidServersRequest !== null && createPostPaidServersRequest !== undefined) {
                if (createPostPaidServersRequest instanceof CreatePostPaidServersRequest) {
                    body = createPostPaidServersRequest.body
                } else {
                    body = createPostPaidServersRequest['body'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建弹性云服务器组。  与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
         */
        createServerGroup(createServerGroupRequest?: CreateServerGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/os-server-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createServerGroupRequest !== null && createServerGroupRequest !== undefined) {
                if (createServerGroupRequest instanceof CreateServerGroupRequest) {
                    body = createServerGroupRequest.body
                } else {
                    body = createServerGroupRequest['body'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一台或多台云服务器。  指该接口兼容《弹性云服务器接口参考》创建云服务器v1的功能，同时合入新功能，支持创建[包年/包月](https://support.huaweicloud.com/productdesc-ecs/ecs_01_0065.html)的弹性云服务器。  弹性云服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式。  - 密钥对  指使用密钥对作为弹性云服务器的鉴权方式。  接口调用方法：使用key_name字段，指定弹性云服务器登录时使用的密钥文件。  - 密码  指使用设置初始密码方式作为弹性云服务器的鉴权方式，此时，您可以通过用户名密码方式登录弹性云服务器，Linux操作系统时为root用户的初始密码，Windows操作系统时为Administrator用户的初始密码。  接口调用方法：使用adminPass字段，指定管理员帐号的初始登录密码。对于镜像已安装Cloud-init的Linux云服务器，如果需要使用密文密码，可以使用user_data字段进行密码注入。  &gt; 对于安装Cloud-init镜像的Linux云服务器云主机，若指定user_data字段，则adminPass字段无效。  购买操作示例： - [使用API购买ECS过程中常见问题及处理方法](https://support.huaweicloud.com/api-ecs/ecs_04_0007.html) - [获取Token并检验Token的有效期 ](https://support.huaweicloud.com/api-ecs/ecs_04_0008.html)
         */
        createServers(createServersRequest?: CreateServersRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/cloudservers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createServersRequest !== null && createServersRequest !== undefined) {
                if (createServersRequest instanceof CreateServersRequest) {
                    body = createServersRequest.body
                } else {
                    body = createServersRequest['body'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除云服务器组。  与原生的删除云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
         */
        deleteServerGroup(deleteServerGroupRequest?: DeleteServerGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloudservers/os-server-groups/{server_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverGroupId;

            if (deleteServerGroupRequest !== null && deleteServerGroupRequest !== undefined) {
                if (deleteServerGroupRequest instanceof DeleteServerGroupRequest) {
                    serverGroupId = deleteServerGroupRequest.serverGroupId;
                } else {
                    serverGroupId = deleteServerGroupRequest['server_group_id'];
                }
            }
        
            if (serverGroupId === null || serverGroupId === undefined) {
                throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling deleteServerGroup.');
            }

            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将弹性云服务器移出云服务器组。移出后，该云服务器与云服务器组中的成员不再遵从反亲和策略。
         */
        deleteServerGroupMember(deleteServerGroupMemberRequest?: DeleteServerGroupMemberRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/os-server-groups/{server_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverGroupId;

            if (deleteServerGroupMemberRequest !== null && deleteServerGroupMemberRequest !== undefined) {
                if (deleteServerGroupMemberRequest instanceof DeleteServerGroupMemberRequest) {
                    serverGroupId = deleteServerGroupMemberRequest.serverGroupId;
                    body = deleteServerGroupMemberRequest.body
                } else {
                    serverGroupId = deleteServerGroupMemberRequest['server_group_id'];
                    body = deleteServerGroupMemberRequest['body'];
                }
            }
        
            if (serverGroupId === null || serverGroupId === undefined) {
                throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling deleteServerGroupMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除云服务器指定元数据。
         */
        deleteServerMetadata(deleteServerMetadataRequest?: DeleteServerMetadataRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloudservers/{server_id}/metadata/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let key;
            let serverId;

            if (deleteServerMetadataRequest !== null && deleteServerMetadataRequest !== undefined) {
                if (deleteServerMetadataRequest instanceof DeleteServerMetadataRequest) {
                    key = deleteServerMetadataRequest.key;
                    serverId = deleteServerMetadataRequest.serverId;
                } else {
                    key = deleteServerMetadataRequest['key'];
                    serverId = deleteServerMetadataRequest['server_id'];
                }
            }
        
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling deleteServerMetadata.');
            }
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling deleteServerMetadata.');
            }

            options.pathParams = { 'key': key,'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定的云服务器ID列表，删除云服务器。  系统支持删除单台云服务器和批量删除多台云服务器操作，批量删除云服务器时，一次最多可以删除1000台。
         */
        deleteServers(deleteServersRequest?: DeleteServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (deleteServersRequest !== null && deleteServersRequest !== undefined) {
                if (deleteServersRequest instanceof DeleteServersRequest) {
                    body = deleteServersRequest.body
                } else {
                    body = deleteServersRequest['body'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从弹性云服务器中卸载磁盘。
         */
        detachServerVolume(detachServerVolumeRequest?: DetachServerVolumeRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloudservers/{server_id}/detachvolume/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let serverId;
            let volumeId;
            let deleteFlag;

            if (detachServerVolumeRequest !== null && detachServerVolumeRequest !== undefined) {
                if (detachServerVolumeRequest instanceof DetachServerVolumeRequest) {
                    serverId = detachServerVolumeRequest.serverId;
                    volumeId = detachServerVolumeRequest.volumeId;
                    deleteFlag = detachServerVolumeRequest.deleteFlag;
                } else {
                    serverId = detachServerVolumeRequest['server_id'];
                    volumeId = detachServerVolumeRequest['volume_id'];
                    deleteFlag = detachServerVolumeRequest['delete_flag'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling detachServerVolume.');
            }
            if (volumeId === null || volumeId === undefined) {
                throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling detachServerVolume.');
            }
            if (deleteFlag !== null && deleteFlag !== undefined) {
                localVarQueryParameter['delete_flag'] = deleteFlag;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'server_id': serverId,'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器规格详情信息和规格扩展信息列表。
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let availabilityZone;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    availabilityZone = listFlavorsRequest.availabilityZone;
                } else {
                    availabilityZone = listFlavorsRequest['availability_zone'];
                }
            }
        
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更规格时，部分规格的云服务器之间不能互相变更。您可以通过本接口，通过指定弹性云服务器规格，查询该规格可以变更的规格列表。
         */
        listResizeFlavors(listResizeFlavorsRequest?: ListResizeFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/resize_flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let instanceUuid;
            let limit;
            let marker;
            let sortDir;
            let sortKey;
            let sourceFlavorId;
            let sourceFlavorName;

            if (listResizeFlavorsRequest !== null && listResizeFlavorsRequest !== undefined) {
                if (listResizeFlavorsRequest instanceof ListResizeFlavorsRequest) {
                    instanceUuid = listResizeFlavorsRequest.instanceUuid;
                    limit = listResizeFlavorsRequest.limit;
                    marker = listResizeFlavorsRequest.marker;
                    sortDir = listResizeFlavorsRequest.sortDir;
                    sortKey = listResizeFlavorsRequest.sortKey;
                    sourceFlavorId = listResizeFlavorsRequest.sourceFlavorId;
                    sourceFlavorName = listResizeFlavorsRequest.sourceFlavorName;
                } else {
                    instanceUuid = listResizeFlavorsRequest['instance_uuid'];
                    limit = listResizeFlavorsRequest['limit'];
                    marker = listResizeFlavorsRequest['marker'];
                    sortDir = listResizeFlavorsRequest['sort_dir'];
                    sortKey = listResizeFlavorsRequest['sort_key'];
                    sourceFlavorId = listResizeFlavorsRequest['source_flavor_id'];
                    sourceFlavorName = listResizeFlavorsRequest['source_flavor_name'];
                }
            }
        
            if (instanceUuid !== null && instanceUuid !== undefined) {
                localVarQueryParameter['instance_uuid'] = instanceUuid;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sourceFlavorId !== null && sourceFlavorId !== undefined) {
                localVarQueryParameter['source_flavor_id'] = sourceFlavorId;
            }
            if (sourceFlavorName !== null && sourceFlavorName !== undefined) {
                localVarQueryParameter['source_flavor_name'] = sourceFlavorName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器挂载的磁盘信息。
         */
        listServerBlockDevices(listServerBlockDevicesRequest?: ListServerBlockDevicesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/block_device",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverId;

            if (listServerBlockDevicesRequest !== null && listServerBlockDevicesRequest !== undefined) {
                if (listServerBlockDevicesRequest instanceof ListServerBlockDevicesRequest) {
                    serverId = listServerBlockDevicesRequest.serverId;
                } else {
                    serverId = listServerBlockDevicesRequest['server_id'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling listServerBlockDevices.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器组。  与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
         */
        listServerGroups(listServerGroupsRequest?: ListServerGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/os-server-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;

            if (listServerGroupsRequest !== null && listServerGroupsRequest !== undefined) {
                if (listServerGroupsRequest instanceof ListServerGroupsRequest) {
                    limit = listServerGroupsRequest.limit;
                    marker = listServerGroupsRequest.marker;
                } else {
                    limit = listServerGroupsRequest['limit'];
                    marker = listServerGroupsRequest['marker'];
                }
            }
        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器网卡信息。
         */
        listServerInterfaces(listServerInterfacesRequest?: ListServerInterfacesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-interface",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverId;

            if (listServerInterfacesRequest !== null && listServerInterfacesRequest !== undefined) {
                if (listServerInterfacesRequest instanceof ListServerInterfacesRequest) {
                    serverId = listServerInterfacesRequest.serverId;
                } else {
                    serverId = listServerInterfacesRequest['server_id'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling listServerInterfaces.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户请求条件从数据库筛选、查询所有的弹性云服务器，并关联相关表获取到弹性云服务器的详细信息。  该接口支持查询弹性云服务器计费方式，以及是否被冻结。
         */
        listServersDetails(listServersDetailsRequest?: ListServersDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let enterpriseProjectId;
            let flavor;
            let ip;
            let limit;
            let name;
            let notTags;
            let offset;
            let reservationId;
            let status;
            let tags;

            if (listServersDetailsRequest !== null && listServersDetailsRequest !== undefined) {
                if (listServersDetailsRequest instanceof ListServersDetailsRequest) {
                    enterpriseProjectId = listServersDetailsRequest.enterpriseProjectId;
                    flavor = listServersDetailsRequest.flavor;
                    ip = listServersDetailsRequest.ip;
                    limit = listServersDetailsRequest.limit;
                    name = listServersDetailsRequest.name;
                    notTags = listServersDetailsRequest.notTags;
                    offset = listServersDetailsRequest.offset;
                    reservationId = listServersDetailsRequest.reservationId;
                    status = listServersDetailsRequest.status;
                    tags = listServersDetailsRequest.tags;
                } else {
                    enterpriseProjectId = listServersDetailsRequest['enterprise_project_id'];
                    flavor = listServersDetailsRequest['flavor'];
                    ip = listServersDetailsRequest['ip'];
                    limit = listServersDetailsRequest['limit'];
                    name = listServersDetailsRequest['name'];
                    notTags = listServersDetailsRequest['not-tags'];
                    offset = listServersDetailsRequest['offset'];
                    reservationId = listServersDetailsRequest['reservation_id'];
                    status = listServersDetailsRequest['status'];
                    tags = listServersDetailsRequest['tags'];
                }
            }
        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (notTags !== null && notTags !== undefined) {
                localVarQueryParameter['not-tags'] = notTags;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (reservationId !== null && reservationId !== undefined) {
                localVarQueryParameter['reservation_id'] = reservationId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为弹性云服务器添加一个安全组。  添加多个安全组时，建议最多为弹性云服务器添加5个安全组。
         */
        novaAssociateSecurityGroup(novaAssociateSecurityGroupRequest?: NovaAssociateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/servers/{server_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (novaAssociateSecurityGroupRequest !== null && novaAssociateSecurityGroupRequest !== undefined) {
                if (novaAssociateSecurityGroupRequest instanceof NovaAssociateSecurityGroupRequest) {
                    serverId = novaAssociateSecurityGroupRequest.serverId;
                    body = novaAssociateSecurityGroupRequest.body
                } else {
                    serverId = novaAssociateSecurityGroupRequest['server_id'];
                    body = novaAssociateSecurityGroupRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaAssociateSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建SSH密钥，或把公钥导入系统，生成密钥对。  创建SSH密钥成功后，请把响应数据中的私钥内容保存到本地文件，用户使用该私钥登录云服务器云主机。为保证云服务器云主机器安全，私钥数据只能读取一次，请妥善保管。
         */
        novaCreateKeypair(novaCreateKeypairRequest?: NovaCreateKeypairRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/os-keypairs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let openStackAPIVersion;

            if (novaCreateKeypairRequest !== null && novaCreateKeypairRequest !== undefined) {
                if (novaCreateKeypairRequest instanceof NovaCreateKeypairRequest) {
                    body = novaCreateKeypairRequest.body
                    openStackAPIVersion = novaCreateKeypairRequest.openStackAPIVersion;
                } else {
                    body = novaCreateKeypairRequest['body'];
                    openStackAPIVersion = novaCreateKeypairRequest['OpenStack-API-Version'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一台弹性云服务器。  弹性云服务器创建完成后，如需开启自动恢复功能，可以调用配置云服务器自动恢复的接口，具体使用请参见管理云服务器自动恢复动作。  该接口在云服务器创建失败后不支持自动回滚。若需要自动回滚能力，可以调用POST /v1/{project_id}/cloudservers接口，具体使用请参见创建云服务器（按需）。
         */
        novaCreateServers(novaCreateServersRequest?: NovaCreateServersRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/servers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let openStackAPIVersion;

            if (novaCreateServersRequest !== null && novaCreateServersRequest !== undefined) {
                if (novaCreateServersRequest instanceof NovaCreateServersRequest) {
                    body = novaCreateServersRequest.body
                    openStackAPIVersion = novaCreateServersRequest.openStackAPIVersion;
                } else {
                    body = novaCreateServersRequest['body'];
                    openStackAPIVersion = novaCreateServersRequest['OpenStack-API-Version'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据SSH密钥的名称，删除指定SSH密钥。
         */
        novaDeleteKeypair(novaDeleteKeypairRequest?: NovaDeleteKeypairRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/{project_id}/os-keypairs/{keypair_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let keypairName;

            if (novaDeleteKeypairRequest !== null && novaDeleteKeypairRequest !== undefined) {
                if (novaDeleteKeypairRequest instanceof NovaDeleteKeypairRequest) {
                    keypairName = novaDeleteKeypairRequest.keypairName;
                } else {
                    keypairName = novaDeleteKeypairRequest['keypair_name'];
                }
            }
        
            if (keypairName === null || keypairName === undefined) {
                throw new RequiredError('keypairName','Required parameter keypairName was null or undefined when calling novaDeleteKeypair.');
            }

            options.pathParams = { 'keypair_name': keypairName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一台云服务器。
         */
        novaDeleteServer(novaDeleteServerRequest?: NovaDeleteServerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/{project_id}/servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverId;

            if (novaDeleteServerRequest !== null && novaDeleteServerRequest !== undefined) {
                if (novaDeleteServerRequest instanceof NovaDeleteServerRequest) {
                    serverId = novaDeleteServerRequest.serverId;
                } else {
                    serverId = novaDeleteServerRequest['server_id'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaDeleteServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除弹性云服务器中的安全组。
         */
        novaDisassociateSecurityGroup(novaDisassociateSecurityGroupRequest?: NovaDisassociateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/servers/{server_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (novaDisassociateSecurityGroupRequest !== null && novaDisassociateSecurityGroupRequest !== undefined) {
                if (novaDisassociateSecurityGroupRequest instanceof NovaDisassociateSecurityGroupRequest) {
                    serverId = novaDisassociateSecurityGroupRequest.serverId;
                    body = novaDisassociateSecurityGroupRequest.body
                } else {
                    serverId = novaDisassociateSecurityGroupRequest['server_id'];
                    body = novaDisassociateSecurityGroupRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaDisassociateSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可用域列表。
         */
        novaListAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/os-availability-zone",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SSH密钥信息列表。
         */
        novaListKeypairs(novaListKeypairsRequest?: NovaListKeypairsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/os-keypairs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let openStackAPIVersion;

            if (novaListKeypairsRequest !== null && novaListKeypairsRequest !== undefined) {
                if (novaListKeypairsRequest instanceof NovaListKeypairsRequest) {
                    limit = novaListKeypairsRequest.limit;
                    marker = novaListKeypairsRequest.marker;
                    openStackAPIVersion = novaListKeypairsRequest.openStackAPIVersion;
                } else {
                    limit = novaListKeypairsRequest['limit'];
                    marker = novaListKeypairsRequest['marker'];
                    openStackAPIVersion = novaListKeypairsRequest['OpenStack-API-Version'];
                }
            }
        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定弹性云服务器的安全组。
         */
        novaListServerSecurityGroups(novaListServerSecurityGroupsRequest?: NovaListServerSecurityGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/servers/{server_id}/os-security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverId;

            if (novaListServerSecurityGroupsRequest !== null && novaListServerSecurityGroupsRequest !== undefined) {
                if (novaListServerSecurityGroupsRequest instanceof NovaListServerSecurityGroupsRequest) {
                    serverId = novaListServerSecurityGroupsRequest.serverId;
                } else {
                    serverId = novaListServerSecurityGroupsRequest['server_id'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaListServerSecurityGroups.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器详情信息列表。
         */
        novaListServersDetails(novaListServersDetailsRequest?: NovaListServersDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/servers/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let changesSince;
            let flavor;
            let image;
            let ip;
            let limit;
            let marker;
            let name;
            let notTags;
            let reservationId;
            let sortKey;
            let status;
            let tags;
            let openStackAPIVersion;

            if (novaListServersDetailsRequest !== null && novaListServersDetailsRequest !== undefined) {
                if (novaListServersDetailsRequest instanceof NovaListServersDetailsRequest) {
                    changesSince = novaListServersDetailsRequest.changesSince;
                    flavor = novaListServersDetailsRequest.flavor;
                    image = novaListServersDetailsRequest.image;
                    ip = novaListServersDetailsRequest.ip;
                    limit = novaListServersDetailsRequest.limit;
                    marker = novaListServersDetailsRequest.marker;
                    name = novaListServersDetailsRequest.name;
                    notTags = novaListServersDetailsRequest.notTags;
                    reservationId = novaListServersDetailsRequest.reservationId;
                    sortKey = novaListServersDetailsRequest.sortKey;
                    status = novaListServersDetailsRequest.status;
                    tags = novaListServersDetailsRequest.tags;
                    openStackAPIVersion = novaListServersDetailsRequest.openStackAPIVersion;
                } else {
                    changesSince = novaListServersDetailsRequest['changes-since'];
                    flavor = novaListServersDetailsRequest['flavor'];
                    image = novaListServersDetailsRequest['image'];
                    ip = novaListServersDetailsRequest['ip'];
                    limit = novaListServersDetailsRequest['limit'];
                    marker = novaListServersDetailsRequest['marker'];
                    name = novaListServersDetailsRequest['name'];
                    notTags = novaListServersDetailsRequest['not-tags'];
                    reservationId = novaListServersDetailsRequest['reservation_id'];
                    sortKey = novaListServersDetailsRequest['sort_key'];
                    status = novaListServersDetailsRequest['status'];
                    tags = novaListServersDetailsRequest['tags'];
                    openStackAPIVersion = novaListServersDetailsRequest['OpenStack-API-Version'];
                }
            }
        
            if (changesSince !== null && changesSince !== undefined) {
                localVarQueryParameter['changes-since'] = changesSince;
            }
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (image !== null && image !== undefined) {
                localVarQueryParameter['image'] = image;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (notTags !== null && notTags !== undefined) {
                localVarQueryParameter['not-tags'] = notTags;
            }
            if (reservationId !== null && reservationId !== undefined) {
                localVarQueryParameter['reservation_id'] = reservationId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据SSH密钥名称查询指定SSH密钥。
         */
        novaShowKeypair(novaShowKeypairRequest?: NovaShowKeypairRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/os-keypairs/{keypair_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let keypairName;
            let openStackAPIVersion;

            if (novaShowKeypairRequest !== null && novaShowKeypairRequest !== undefined) {
                if (novaShowKeypairRequest instanceof NovaShowKeypairRequest) {
                    keypairName = novaShowKeypairRequest.keypairName;
                    openStackAPIVersion = novaShowKeypairRequest.openStackAPIVersion;
                } else {
                    keypairName = novaShowKeypairRequest['keypair_name'];
                    openStackAPIVersion = novaShowKeypairRequest['OpenStack-API-Version'];
                }
            }
        
            if (keypairName === null || keypairName === undefined) {
                throw new RequiredError('keypairName','Required parameter keypairName was null or undefined when calling novaShowKeypair.');
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }

            options.pathParams = { 'keypair_name': keypairName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据云服务器ID，查询云服务器的详细信息。
         */
        novaShowServer(novaShowServerRequest?: NovaShowServerRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverId;
            let openStackAPIVersion;

            if (novaShowServerRequest !== null && novaShowServerRequest !== undefined) {
                if (novaShowServerRequest instanceof NovaShowServerRequest) {
                    serverId = novaShowServerRequest.serverId;
                    openStackAPIVersion = novaShowServerRequest.openStackAPIVersion;
                } else {
                    serverId = novaShowServerRequest['server_id'];
                    openStackAPIVersion = novaShowServerRequest['OpenStack-API-Version'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaShowServer.');
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重装弹性云服务器的操作系统。支持弹性云服务器数据盘不变的情况下，使用原镜像重装系统盘。  调用该接口后，系统将卸载系统盘，然后使用原镜像重新创建系统盘，并挂载至弹性云服务器，实现重装操作系统功能。
         */
        reinstallServerWithCloudInit(reinstallServerWithCloudInitRequest?: ReinstallServerWithCloudInitRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudservers/{server_id}/reinstallos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (reinstallServerWithCloudInitRequest !== null && reinstallServerWithCloudInitRequest !== undefined) {
                if (reinstallServerWithCloudInitRequest instanceof ReinstallServerWithCloudInitRequest) {
                    serverId = reinstallServerWithCloudInitRequest.serverId;
                    body = reinstallServerWithCloudInitRequest.body
                } else {
                    serverId = reinstallServerWithCloudInitRequest['server_id'];
                    body = reinstallServerWithCloudInitRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling reinstallServerWithCloudInit.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置弹性云服务器管理帐号（root用户或Administrator用户）的密码。
         */
        resetServerPassword(resetServerPasswordRequest?: ResetServerPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-reset-password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (resetServerPasswordRequest !== null && resetServerPasswordRequest !== undefined) {
                if (resetServerPasswordRequest instanceof ResetServerPasswordRequest) {
                    serverId = resetServerPasswordRequest.serverId;
                    body = resetServerPasswordRequest.body
                } else {
                    serverId = resetServerPasswordRequest['server_id'];
                    body = resetServerPasswordRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling resetServerPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您创建的弹性云服务器规格无法满足业务需要时，可以变更云服务器规格，升级vCPU、内存。具体接口的使用，请参见本节内容。  变更规格时，部分规格的云服务器之间不能互相变更。  您可以通过接口“/v1/{project_id}/cloudservers/resize_flavors?{instance_uuid,source_flavor_id,source_flavor_name}”查询支持列表。
         */
        resizePostPaidServer(resizePostPaidServerRequest?: ResizePostPaidServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/resize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (resizePostPaidServerRequest !== null && resizePostPaidServerRequest !== undefined) {
                if (resizePostPaidServerRequest instanceof ResizePostPaidServerRequest) {
                    serverId = resizePostPaidServerRequest.serverId;
                    body = resizePostPaidServerRequest.body
                } else {
                    serverId = resizePostPaidServerRequest['server_id'];
                    body = resizePostPaidServerRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling resizePostPaidServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更云服务器规格。  v1.1版本：指该接口兼容v1接口的功能，同时合入新功能，支持变更包年/包月弹性云服务器的规格。  注意事项：  - 该接口可以使用合作伙伴自身的AK/SK或者token调用，也可以用合作伙伴子客户的AK/SK或者token来调用。 - 如果使用AK/SK认证方式，示例代码中region请参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)中“弹性云服务 ECS”下“区域”的内容，，serviceName（英文服务名称缩写）请指定为ECS。 - Endpoint请参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)中“弹性云服务 ECS”下“终端节点（Endpoint）”的内容。
         */
        resizeServer(resizeServerRequest?: ResizeServerRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/cloudservers/{server_id}/resize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (resizeServerRequest !== null && resizeServerRequest !== undefined) {
                if (resizeServerRequest instanceof ResizeServerRequest) {
                    serverId = resizeServerRequest.serverId;
                    body = resizeServerRequest.body
                } else {
                    serverId = resizeServerRequest['server_id'];
                    body = resizeServerRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling resizeServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器是否支持一键重置密码。
         */
        showResetPasswordFlag(showResetPasswordFlagRequest?: ShowResetPasswordFlagRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-resetpwd-flag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverId;

            if (showResetPasswordFlagRequest !== null && showResetPasswordFlagRequest !== undefined) {
                if (showResetPasswordFlagRequest instanceof ShowResetPasswordFlagRequest) {
                    serverId = showResetPasswordFlagRequest.serverId;
                } else {
                    serverId = showResetPasswordFlagRequest['server_id'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showResetPasswordFlag.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器的详细信息。  该接口支持查询弹性云服务器的计费方式，以及是否被冻结。
         */
        showServer(showServerRequest?: ShowServerRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverId;

            if (showServerRequest !== null && showServerRequest !== undefined) {
                if (showServerRequest instanceof ShowServerRequest) {
                    serverId = showServerRequest.serverId;
                } else {
                    serverId = showServerRequest['server_id'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器组详情。  与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
         */
        showServerGroup(showServerGroupRequest?: ShowServerGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/os-server-groups/{server_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverGroupId;

            if (showServerGroupRequest !== null && showServerGroupRequest !== undefined) {
                if (showServerGroupRequest instanceof ShowServerGroupRequest) {
                    serverGroupId = showServerGroupRequest.serverGroupId;
                } else {
                    serverGroupId = showServerGroupRequest['server_group_id'];
                }
            }
        
            if (serverGroupId === null || serverGroupId === undefined) {
                throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling showServerGroup.');
            }

            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户配额信息。
         */
        showServerLimits() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/limits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取弹性云服务器VNC远程登录地址。
         */
        showServerRemoteConsole(showServerRemoteConsoleRequest?: ShowServerRemoteConsoleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/remote_console",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (showServerRemoteConsoleRequest !== null && showServerRemoteConsoleRequest !== undefined) {
                if (showServerRemoteConsoleRequest instanceof ShowServerRemoteConsoleRequest) {
                    serverId = showServerRemoteConsoleRequest.serverId;
                    body = showServerRemoteConsoleRequest.body
                } else {
                    serverId = showServerRemoteConsoleRequest['server_id'];
                    body = showServerRemoteConsoleRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerRemoteConsole.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询指定云服务器的标签信息。  - 标签管理服务TMS使用该接口查询指定云服务器的全部标签数据。
         */
        showServerTags(showServerTagsRequest?: ShowServerTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let serverId;

            if (showServerTagsRequest !== null && showServerTagsRequest !== undefined) {
                if (showServerTagsRequest instanceof ShowServerTagsRequest) {
                    serverId = showServerTagsRequest.serverId;
                } else {
                    serverId = showServerTagsRequest['server_id'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerTags.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改云服务器信息，目前支持修改云服务器名称及描述和hostname。
         */
        updateServer(updateServerRequest?: UpdateServerRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/{server_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (updateServerRequest !== null && updateServerRequest !== undefined) {
                if (updateServerRequest instanceof UpdateServerRequest) {
                    serverId = updateServerRequest.serverId;
                    body = updateServerRequest.body
                } else {
                    serverId = updateServerRequest['server_id'];
                    body = updateServerRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改按需服务器，设置定时销毁时间。如果设置的销毁时间为空，表示取消销毁时间。  该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ecs:cloudServers:put。
         */
        updateServerAutoTerminateTime(updateServerAutoTerminateTimeRequest?: UpdateServerAutoTerminateTimeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/actions/update-auto-terminate-time",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (updateServerAutoTerminateTimeRequest !== null && updateServerAutoTerminateTimeRequest !== undefined) {
                if (updateServerAutoTerminateTimeRequest instanceof UpdateServerAutoTerminateTimeRequest) {
                    serverId = updateServerAutoTerminateTimeRequest.serverId;
                    body = updateServerAutoTerminateTimeRequest.body
                } else {
                    serverId = updateServerAutoTerminateTimeRequest['server_id'];
                    body = updateServerAutoTerminateTimeRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServerAutoTerminateTime.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云服务器元数据。  - 如果元数据中没有待更新字段，则自动添加该字段。  - 如果元数据中已存在待更新字段，则直接更新字段值。  - 如果元数据中的字段不再请求参数中，则保持不变
         */
        updateServerMetadata(updateServerMetadataRequest?: UpdateServerMetadataRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/metadata",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let serverId;

            if (updateServerMetadataRequest !== null && updateServerMetadataRequest !== undefined) {
                if (updateServerMetadataRequest instanceof UpdateServerMetadataRequest) {
                    serverId = updateServerMetadataRequest.serverId;
                    body = updateServerMetadataRequest.body
                } else {
                    serverId = updateServerMetadataRequest['server_id'];
                    body = updateServerMetadataRequest['body'];
                }
            }
        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServerMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job的执行状态。  对于创建云服务器、删除云服务器、云服务器批量操作和网卡操作等异步API，命令下发后，会返回job_id，通过job_id可以查询任务的执行状态。
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let jobId;

            if (showJobRequest !== null && showJobRequest !== undefined) {
                if (showJobRequest instanceof ShowJobRequest) {
                    jobId = showJobRequest.jobId;
                } else {
                    jobId = showJobRequest['job_id'];
                }
            }
        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): EcsClient {
    return new EcsClient(client);
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