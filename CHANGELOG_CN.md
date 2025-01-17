# 3.0.12-beta 2021-08-10

### HuaweiCloud SDK EIP
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListBandwidths`、`ShowPublicip`的响应参数名称调整：`publicip_border_group` -> `public_border_group`

### HuaweiCloud SDK EVS
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListVolumes`新增请求参数`server_id`

### HuaweiCloud SDK IAM
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateDeployment`移除响应参数`order_id`

### HuaweiCloud SDK IMS
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 修改接口`UpdateImage`的请求参数`value`为必填参数

### HuaweiCloud SDK VPC
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`NeutronListSubnets`新增请求参数`enable_dhcp`
  - 接口`NeutronListSecurityGroups`新增响应参数`security_groups_links`

# 3.0.11-beta 2021-7-30
               
### HuaweiCloud SDK IMS

- _新增特性_
    - 无
- _解决问题_
    - [Issue 40](https://github.com/huaweicloud/huaweicloud-sdk-java-v3/issues/40): 修复响应参数`__lazyloading`类型定义错误的问题
- _特性变更_
    - 无

# 3.0.10-beta 2021-07-09

### HuaweiCloud SDK Core
- _新增特性_
  - 无
- _解决问题_
  - 修复 Response 返回层级错误
- _特性变更_
  - 优化异常信息

  
### HuaweiCloud SDK CCE

- _新增特性_
  - 支持接口`RemoveNode`、`MigrateNode`
- _解决问题_
  - 无
- _特性变更_
  - 接口`DeleteCluster`新增请求参数`tobedeleted`

### HuaweiCloud SDK EIP

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateSharedBandwidth`、`ListBandwidths`新增响应参数`publicip_border_group`

### HuaweiCloud SDK IMS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`GlanceCreateImageMetadata`新增响应参数`__root_origin`、`checksum`、`size`
  - 接口`GlanceAddImageMember`移除请求参数`deleted`、`deleted_at`,新增以下请求参数：
    - `__lazyloading`
    - `__os_feature_list`
    - `__root_origin`
    - `__sequence_num`
    - `__support_agent_list`
    - `__system__cmkid`
    - `active_at`
    - `hw_vif_multiqueue_enabled`
    - `max_ram`
    - `__image_location`
    - `__is_config_init`
    - `__account_code`

### HuaweiCloud SDK IoTDA

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListRules`新增响应参数`edge_node_ids`、`last_update_time`

# 3.0.9-beta 2021-06-29

### HuaweiCloud SDK Core
- _新增特性_
  - 支持 multipart/form-data
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK ECS

- _新增特性_
    - 无
- _解决问题_
    - 解决了使用接口`NovaShowKeypair`获取秘钥，结果解析异常的问题
- _特性变更_
    - 无

### HuaweiCloud SDK CCE

- _新增特性_
    - 无
- _解决问题_
    - [Issue 20](https://github.com/huaweicloud/huaweicloud-sdk-go-v3/issues/20): 修复`extendParam`类型定义错误的问题
    - [Issue 22](https://github.com/huaweicloud/huaweicloud-sdk-go-v3/issues/22): 修正接口`ListAddonInstances`的响应参数`status`可选值
- _特性变更_
    - 接口`DeleteCluster`新增请求参数`tobedeleted`
    - 接口`CreateNodePool`、`ShowNodePool`、`UpdateNodePool`、`DeleteNodePool`新增请求参数`storage`

### HuaweiCloud SDK IoTDA

- _新增特性_
  - 新增支持接口:
      - `ListComplexQueryDevice`
      - `UploadBatchTaskFile`
  - 下线订阅管理相关接口：
        - `ListSubscriptions`
        - `CreateSubscription`
        - `UpdateSubscription`
        - `ShowSubscription`
        - `DeleteSubscription`
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK IAM

- _新增特性_
    - 无
- _解决问题_
    - 无
- _特性变更_
    - 接口 `CreateUsers` 新增请求体参数和响应体参数 _access_mode_
    - 接口 `DeleteBindingDevice` 将请求体参数 _authentication_code_ 设置为必填参数
    - 查询账号配额接口`ShowDomainQuota`的请求参数`type`增加可选值：
        - `assigment_group_mp`
        - `assigment_agency_mp`
        - `assigment_group_ep`
        - `assigment_user_ep`
    - 接口`KeystoneListPermissions`新增请求参数`permission_type`、`display_name`、`catalog`、`type`

# 3.0.8-beta 2021-04-15

### HuaweiCloud SDK Core

- _新增特性_
  - 无
- _解决问题_
  - 日志优化
  - 升级axios版本,解决安全问题
- _特性变更_
  - 无

### HuaweiCloud SDK ECS

- _新增特性_
  - 支持ECS弹性云服务器服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK CCE

- _新增特性_
  - 支持CCE云容器引擎服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK EVS

- _新增特性_
  - 支持EVS云硬盘服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK VPC

- _新增特性_
  - 支持VPC虚拟私有云服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK EIP

- _新增特性_
  - 支持EIP弹性公网IP服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

# 3.0.7-beta 2021-03-15

### HuaweiCloud SDK Core

- _新增特性_
    - 无
- _解决问题_
    - 修复代码请求路径缺失的问题
- _特性变更_
    - 无

### HuaweiCloud SDK IAM

- _新增特性_
    - 新增支持接口：
        - 查询身份提供商详情 `KeystoneShowIdentityProvider`
        - 注册身份提供商 `KeystoneCreateIdentityProvider`
        - 更新身份提供商 `KeystoneUpdateIdentityProvider`
        - 删除身份提供商 `KeystoneDeleteIdentityProvider`
        - 获取联邦认证token(OpenId Connect Id token方式) `CreateTokenWithIdToken`
- _解决问题_
    - 无
- _特性变更_
    - 下线接口：获取联邦认证unscoped token `CreateUnscopeTokenByIdpInitiated`

### HuaweiCloud SDK IoTDA

- _新增特性_
    - 支持设备接入服务
- _解决问题_
    - 无
- _特性变更_
    - 无

# 3.0.6-beta 2021-02-27

### HuaweiCloud SDK Core

- _新增特性_
    - 无
- _解决问题_
    - 无
- _特性变更_
    - 优化 README 文档描述及 CHANGELOG 日志格式

### HuaweiCloud SDK IAM

- _新增特性_
    - 无
- _解决问题_
    - 修复 `KeystoneUserResult` 类中属性名的错误定义问题：`pwd_stength` → `pwd_strength`
- _特性变更_
    - 无

# 3.0.5-beta 2021-01-30

### HuaweiCloud SDK IAM

- _新增特性_
    - 支持统一身份认证服务
- _解决问题_
    - 无
- _特性变更_
    - 无

# 3.0.4-beta 2020-12-07

# 3.0.3-beta 2020-10-31

### HuaweiCloud SDK DevStar

- _新增特性_
    - 增加README.MD文件
- _解决问题_
    - 无
- _特性变更_
    - 无

# 3.0.2-beta 2020-10-20

### HuaweiCloud SDK DevStar

- _新增特性_
    - 增加模块主入口文件
- _解决问题_
    - 无
- _特性变更_
    - 无

# 3.0.1-beta 2020-10-16

### 首次发布

- _已支持服务_
    - 模板引擎（DevStar）
