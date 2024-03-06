type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace h5 {
    export class Activity {
      /** 活动标识 */
      actCode: string

      /** 账号ID;前端不传 */
      agentId?: number

      /** 创建人Id */
      creatorId: number

      /** 部门标识 */
      deptNum: string

      /** 活动结束时间 */
      endTime: string

      /** 活动图片-横版 */
      horizontalImage: string

      /** id */
      id: number

      /** 是否启用 */
      isEnabled: boolean

      /** 活动链接 */
      link: string

      /** 锁定码 */
      lockCode: string

      /** 锁定状态 */
      lockStatus: boolean

      /** 腾讯地图Key */
      mapKey: string

      /** 商户配置 */
      matchSettings: defs.h5.MerchantSetting

      /** 活动备注 */
      remark: string

      /** 数据统计url；前端不传 */
      shareHref: string

      /** 活动开始时间 */
      startTime: string

      /** 状态；1开启, 2关闭，3活动未开始, 4活动进行中,5活动结束 */
      status: 1 | 2 | 3 | 4 | 5

      /** 置顶 */
      sticky: boolean

      /** 活动名称 */
      title: string

      /** 活动类型;后台创建字典 */
      type: string

      /** h5地址 */
      url: string

      /** 是否使用微信登录 */
      useWechatLogin: boolean

      /** 活动图片-竖版 */
      verticalImage: string

      /** 数据统计 */
      websiteId: string

      /** 是否获取微信头像昵称信息 */
      wxprofile: boolean
    }

    export class AnswerConfig {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 随机题目总数 */
      limit: number

      /** 每题时间；单位秒 */
      time: number
    }

    export class AnswerRankRes {
      /** 活动ID */
      actId: number

      /** 用户提交的数据json */
      content: Record<string, any>

      /** id */
      id: number

      /** 积分数, 不需要提交 */
      integral?: number

      /** 操作人 */
      operator?: string

      /** 排名 */
      rank: number

      /** 答题分数 */
      score?: number

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey?: string

      /** 时间 */
      time: number
    }

    export class AnswerRecord {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 答案 */
      answer: string

      /** id */
      id: number

      /** 是否正确 */
      isRight: boolean

      /** 用户id */
      playerId: number

      /** 试题id */
      questionId: number

      /** 目标键 */
      targetKey: string

      /** 答题时间；单位秒 */
      time: number
    }

    export class AnswerSaveBody {
      /** 答案 */
      answer: string

      /** 题目id */
      questionId: number

      /** 目标键 */
      targetKey: string

      /** 答题消耗时间;单位秒 */
      time: number
    }

    export class AnswerSaveRes {
      /** 是否正确 */
      isRight: boolean

      /** 用户 */
      player: defs.h5.Submit

      /** 记录id */
      recordId: number

      /** 得分 */
      score: number
    }

    export class CustomData {
      /** 活动id；静默处理页面不显示 */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 自定义标识；不传 */
      customCode: string

      /** 描述 */
      desc: string

      /** id */
      id: number

      /** json数据；单独更改 */
      jsonData: Record<string, any>

      /** 标题 */
      title: string
    }

    export class Field {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 字典数据 */
      dictionary: Array<defs.h5.OptionData>

      /** 是否禁用 */
      disabled: boolean

      /** 字段标识 */
      fieldCode: string

      /** 表单ID */
      formId: number

      /** icon */
      icon: string

      /** id */
      id: number

      /** 是否是默认列表显示 */
      isDefault: boolean

      /** 是否必选 */
      isRequired: boolean

      /** 字段是否参与搜索 */
      isSearch: boolean

      /** 是否显示 */
      isShow: boolean

      /** 字段名称 */
      name: string

      /** placeholder */
      placeholder: string

      /** 列表显示优先级, 高的在前, 低的在后 */
      priority: number

      /** 正则 */
      regular: string

      /** 备注 */
      remark: string

      /** 顺序 */
      sort: number

      /** 字段类型 1字符串 2数字 3时间 4下拉框 */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    }

    export class Form {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 是否为基础表单 */
      basics: boolean

      /** 报名截止时间 */
      deadline: string

      /** 表单字段 */
      fields: Array<string>

      /** 表单标识 */
      formCode: string

      /** 创建表单是否验证验证码 */
      formVCode: boolean

      /** id */
      id: number

      /** 是否开启 */
      isEnabled: boolean

      /** 短信签名 */
      signName: string

      /** 短信内容 */
      smsContent: string

      /** 表单名称 */
      title: string
    }

    export class FormFieldsRes {
      /** 目标key, 用于保存字段表中的唯一枢纽 */
      fieldData: Array<defs.h5.Field>

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      form: defs.h5.Form
    }

    export class HxBody {
      /** 备注 */
      comment: string

      /** 扫码结果 */
      hxContent: string

      /** 环节id；可穿uid或id */
      linkId: number
    }

    export class Link {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 结束时间 */
      endTime: string

      /** id */
      id: number

      /** 介绍 */
      introduction: string

      /** 开始时间 */
      startTime: string

      /** 状态；3开启4关闭 */
      status: 1 | 2 | 3 | 4

      /** 标题 */
      title: string

      /** uid二维码核销使用 */
      uid: string
    }

    export class LotteryPlay {
      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey: string
    }

    export class LotteryRes {
      /** 是否抽中奖品 */
      isLottery: boolean

      /** 中奖信息 */
      prizeInfo: defs.h5.PrizeInfo
    }

    export class MapBody {
      /** 维度 */
      lat: number

      /** 经度 */
      lng: number
    }

    export class MapManagement {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 地点标识 */
      code: string

      /** id */
      id: number

      /** 点位介绍 */
      introduce: string

      /** 自定义json数据 */
      jsonData: Record<string, any>

      /** 维度 */
      lat: number

      /** 经度 */
      lng: number

      /** 范围单位Km */
      range: number

      /** 点位名称 */
      title: string
    }

    export class MerchantSetting {
      /** 活动名称 */
      actName: string

      /** apikey */
      apiKey: string

      /** 私钥key */
      key: string

      /** 商户id */
      matchId: string

      /** 证书pem */
      pem: string

      /** 备注 */
      remark: string

      /** 发放者名称 */
      sendName: string

      /** 祝福语 */
      wishing: string
    }

    export class OpenidLogin {
      /** openid */
      openid: string
    }

    export class OptionData {
      /** 选项值 */
      key: string

      /** 选项名称 */
      name: string
    }

    export class OptionsType {
      /** 选项内容 */
      label: string

      /** 选项内容图片 */
      labelImg: string

      /** 选项值 */
      value: string
    }

    export class PrizeInfo {
      /** 图片地址 */
      image: string

      /** mini图片地址 */
      mini: string

      /** 奖品名称 */
      name: string

      /** 奖品id */
      prizeId: number

      /** 中奖记录id */
      recordId: number

      /** 奖品类型 */
      type: number
    }

    export class PrizeRecordAdress {
      /** 邮寄-联系地址 */
      address: string

      /** 邮寄-联系人 */
      cName: string

      /** 中奖记录id */
      id: number

      /** 邮寄-联系电话 */
      phone: string
    }

    export class Question {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 答案 */
      answer: string

      /** id */
      id: number

      /** 选项 */
      options: Array<defs.h5.OptionsType>

      /** 分数 */
      score: number

      /** 题目 */
      title: string

      /** 题目图片 */
      titleImg: string

      /** 1单选题；2多选题 */
      type: string
    }

    export class RankListQuery {
      /** 是否过滤0票;1过滤0不过滤 */
      filterZero?: number

      /** limit */
      limit?: number

      /** page */
      page?: number

      /** 搜索条件集合 */
      searchArr?: Array<defs.h5.SubmitSearch>

      /** 唯一值 */
      targetKey?: string
    }

    export class RankListRes {
      /** 活动ID */
      actId: number

      /** 用户提交的数据json */
      content: Record<string, any>

      /** id */
      id: number

      /** 操作人 */
      operator?: string

      /** 排名 */
      rank: number

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey?: string

      /** 投票数 */
      vote?: number
    }

    export class SendFormSmsCode {
      /** 表单code */
      formCode?: string

      /** 手机号 */
      phone: string
    }

    export class SendSmsBody {
      /** 活动code */
      actCode: string

      /** 表单code，发放指定的短信验证码,需创建一个登录表单 */
      formCode: string

      /** 手机号 */
      phone: string
    }

    export class SmsLoginBody {
      /** 活动code */
      actCode: string

      /** 验证码 */
      code: string

      /** 表单code，发放指定的短信验证码,需创建一个登录表单 */
      formCode: string

      /** 手机号 */
      phone: string
    }

    export class Submit {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 答题记录 */
      answerRecord?: Array<defs.h5.AnswerRecord>

      /** 用户提交的数据json */
      content: Record<string, any>

      /** 抽奖扣除积分 */
      deduct?: number

      /** id */
      id: number

      /** 积分数, 不需要提交 */
      integral?: number

      /** 操作人 */
      operator?: string

      /** 可操作人集合 */
      principals?: Array<defs.h5.Submit>

      /** 答题分数 */
      score?: number

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey?: string

      /** uid */
      uid?: string

      /** 投票数 */
      vote?: number
    }

    export class SubmitContent {
      /** 用户提交的数据json，根据表单数据来 */
      content: defs.h5.SubmitContentMust

      /** 表单code */
      formCode: string

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      operator?: string

      /** 手机表单key */
      phoneKey?: string

      /** 验证码； */
      smsCode?: string

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey: string
    }

    export class SubmitContentMust {}

    export class SubmitSearch {
      /** 搜索字段名称 */
      name: string

      /** 用户搜索数据 */
      search: string
    }

    export class TraceQuery {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 事件名 */
      event?: string

      /** 事件数据 */
      eventData?: Record<string, any>

      /** 页面 */
      page?: string

      /** session;用户区分用户唯一标识；不传用sessionId 客户端需持久化保存 */
      session?: string

      /** 类型;1普通，2事件 */
      type?: number
    }

    export class Verification {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 备注 */
      comment: string

      /** 组织权限标识 */
      deptNum: string

      /** 关联键 */
      foreignKey: string

      /** id */
      id: number

      /** 签到环节 */
      link: defs.h5.Link

      /** 环节id */
      linkId: number

      /** 用户关联数据 */
      player: defs.h5.Submit

      /** 用户id */
      playerId: number

      /** 工作人员id */
      userId: number
    }

    export class VoteBody {
      /** 要投票的用户标识,多用于逗号隔开 */
      targetKey: string
    }

    export class VoteInfoRes {
      /** 总票数 */
      totalVote: number

      /** 已投票票数 */
      useVote: number

      /** unit单位内对用户所投票数 */
      vote: number
    }

    export class VotePersonInfoRes {
      /** 上一名用户 */
      lastPlayer: defs.h5.Submit

      /** 当前用户 */
      player: defs.h5.Submit

      /** 排名 */
      rank: number

      /** 当前投票数 */
      vote: number
    }

    export class VotingRecord {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 投票ip地址 */
      ip: string

      /** 用户信息 */
      player: defs.h5.Submit

      /** 用户id */
      playerId: number

      /** sessionId 投票者sessionId */
      sessionId: string

      /** 平台唯一值 */
      targetKey: string
    }

    export class WeChatShare {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 是否为默认 */
      isDefault: boolean

      /** 分享图片 */
      shareImg: string

      /** 分享副标题 */
      subTitle: string

      /** 分享标题 */
      title: string
    }

    export class WechatJssdkSignature {
      /** 活动code */
      actCode: string

      /** 地址 */
      href: string
    }
  }
}

declare namespace API {
  export namespace h5 {
    /**
     * 地图管理
     */
    export namespace 地图管理 {
      /**
       * 根据code获取点位;header中需要具有actId
       * /api/h5/v1/map/position/{code}
       */
      export namespace MapController_positionByCode {
        export class Params {
          /** code */
          code: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 输入坐标返回与点位之间距离，单位km;header中需要具有actId
       * /api/h5/v1/map/range/{code}
       */
      export namespace MapController_rangeByCode {
        export class Params {
          /** code */
          code: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.MapBody): Promise<any>
      }

      /**
       * 输入坐标返回是否在点位范围内;header中需要具有actId
       * /api/h5/v1/map/withinTheRange/{code}
       */
      export namespace MapController_withinTheRangeByCode {
        export class Params {
          /** code */
          code: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.MapBody): Promise<any>
      }
    }

    /**
     * 投票
     */
    export namespace 投票 {
      /**
       * 投票
       * /api/h5/v1/vote
       */
      export namespace VoteController_vote {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.VoteBody): Promise<any>
      }

      /**
       * 获取截止时间
       * /api/h5/v1/vote/dealine
       */
      export namespace VoteController_dealine {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 个人排名情况
       * /api/h5/v1/vote/info
       */
      export namespace VoteController_votePersonInfo {
        export class Params {
          /** targetKey */
          targetKey: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 投票记录
       * /api/h5/v1/vote/list
       */
      export namespace VoteController_index {
        export class Params {
          /** page */
          page?: number
          /** limit */
          limit?: number
          /** 唯一键 */
          targetKey?: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 排行榜
       * /api/h5/v1/vote/rank
       */
      export namespace VoteController_rankList {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.RankListQuery): Promise<any>
      }

      /**
       * 投票信息
       * /api/h5/v1/vote/voteInfo
       */
      export namespace VoteController_voteInfo {
        export class Params {
          /** targetKey */
          targetKey: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }
    }

    /**
     * 数据分析
     */
    export namespace 数据分析 {
      /**
       * 基础数据
       * /api/h5/v1/analyze/basicData
       */
      export namespace AnalyzeController_basicData {
        export class Params {
          /** 活动id */
          actId: number
          /** 开始时间戳 */
          startTime?: number
          /** 结束时间戳 */
          endTime?: number
          /** 页面 */
          page?: string
          /** 事件 */
          event?: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 各时间段数据
       * /api/h5/v1/analyze/basicData/byTime
       */
      export namespace AnalyzeController_basicDataByTime {
        export class Params {
          /** 活动id */
          actId: number
          /** 开始时间戳 */
          startTime?: number
          /** 结束时间戳 */
          endTime?: number
          /** 单位；hour、day、month */
          unit?: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 获取活动页面、事件
       * /api/h5/v1/analyze/range
       */
      export namespace AnalyzeController_range {
        export class Params {
          /** 活动id */
          actId: number
          /** 类型；page 页面，event 事件 */
          type: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 追踪
       * /api/h5/v1/analyze/trace
       */
      export namespace AnalyzeController_trace {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.TraceQuery): Promise<any>
      }
    }

    /**
     * 核销
     */
    export namespace 核销 {
      /**
       * 二维码核销
       * /api/h5/v1/verification/qrcode
       */
      export namespace VerificationController_qrcode {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.HxBody): Promise<any>
      }

      /**
       * 用户签到记录
       * /api/h5/v1/verification/signInRecord
       */
      export namespace VerificationController_isSignin {
        export class Params {
          /** 目标键 */
          targetKey: string
          /** 环节id */
          linkId?: number
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }
    }

    /**
     * 答题
     */
    export namespace 答题 {
      /**
        * 批量提交
data数组需要转为json
        * /api/h5/v1/answer/batchsave
        */
      export namespace AnswerController_batchsave {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: Array<defs.h5.AnswerSaveBody>): Promise<any>
      }

      /**
       * 获取答题配置
       * /api/h5/v1/answer/config
       */
      export namespace AnswerController_config {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 获取随机题目
       * /api/h5/v1/answer/questions
       */
      export namespace AnswerController_getQuestions {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 排行榜
       * /api/h5/v1/answer/rank
       */
      export namespace AnswerController_rank {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.RankListQuery): Promise<any>
      }

      /**
       * 答题记录
       * /api/h5/v1/answer/record
       */
      export namespace AnswerController_record {
        export class Params {
          /** targetKey */
          targetKey: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 答题
       * /api/h5/v1/answer/save
       */
      export namespace AnswerController_save {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.AnswerSaveBody): Promise<any>
      }
    }

    /**
     * 表单
     */
    export namespace 表单 {
      /**
       * 获取提交表单数据
       * /api/h5/v1/form
       */
      export namespace FormController_getFormData {
        export class Params {
          /** 目标key, 用于保存字段表中的唯一枢纽 */
          targetKey: string
          /** 不传显示全部 */
          formCode?: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 获取表单数据
       * /api/h5/v1/form/getForm
       */
      export namespace FormController_getForm {
        export class Params {
          /** 表单标识 */
          formCode: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 获取委托人接口；常用于分享、会务代替邀请等场景
       * /api/h5/v1/form/principal
       */
      export namespace FormController_principal {
        export class Params {
          /** 目标key, 用于保存字段表中的唯一枢纽 */
          targetKey: string
          /** 不传显示全部 */
          formCode?: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 提交表单数据
       * /api/h5/v1/form/save
       */
      export namespace FormController_save {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.SubmitContent): Promise<any>
      }

      /**
       * 发送表单验证短信
       * /api/h5/v1/form/sendSms
       */
      export namespace FormController_sendSms {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.SendFormSmsCode): Promise<any>
      }
    }

    /**
     * 通用
     */
    export namespace 通用 {
      /**
       * 获取活动详情
       * /api/h5/v1/act/{code}
       */
      export namespace H5Controller_getAct {
        export class Params {
          /** code */
          code: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 根据时间段标识查询是否启用;header中须具有actId
       * /api/h5/v1/by/{code}
       */
      export namespace H5Controller_isEnableByCode {
        export class Params {
          /** code */
          code: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
        * 获取版本缓存标识
h5页面缓存版本标识到本地，每次进入页面时比较是否相同，不相同刷新页面缓存新的标识到本地
        * /api/h5/v1/cacheID
        */
      export namespace H5Controller_cacheID {
        export class Params {
          /** actCode */
          actCode: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 自定义页面数据
       * /api/h5/v1/customData
       */
      export namespace H5Controller_customData {
        export class Params {
          /** code */
          code: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 获取字典根据code
       * /api/h5/v1/dict/{code}
       */
      export namespace H5Controller_index {
        export class Params {
          /** code */
          code: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 微信分享获取
       * /api/h5/v1/getWeChatShare
       */
      export namespace H5Controller_getWeChatShare {
        export class Params {
          /** actCode */
          actCode: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 获取活动详情
       * /api/h5/v1/lottery/act/{code}
       */
      export namespace LotteryController_getAct {
        export class Params {
          /** code */
          code: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 渠道增加积分
       * /api/h5/v1/lottery/channel/lotteryPoints
       */
      export namespace LotteryController_channelAddLotteryPoints {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.LotteryPlay): Promise<any>
      }

      /**
       * 获取奖品全部信息
       * /api/h5/v1/lottery/getPrizeList
       */
      export namespace LotteryController_getPrizeList {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 抽奖记录
       * /api/h5/v1/lottery/lotteryLog
       */
      export namespace LotteryController_lotteryLog {
        export class Params {
          /** page */
          page?: number
          /** limit */
          limit?: number
          /** 目标key, 用于保存字段表中的唯一枢纽，传查询自己不传查询活动 */
          targetKey?: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 实物奖品中奖记录登记
       * /api/h5/v1/lottery/lotteryLog/adress
       */
      export namespace LotteryController_lotteryLogAdress {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.PrizeRecordAdress): Promise<any>
      }

      /**
       * 抽奖
       * /api/h5/v1/lottery/lotteryPlay
       */
      export namespace LotteryController_lotteryPlay {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.LotteryPlay): Promise<any>
      }

      /**
       * 获取活动点位
       * /api/h5/v1/map/all
       */
      export namespace H5Controller_mapAll {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * openid登录
       * /api/h5/v1/openidLogin
       */
      export namespace H5Controller_openidLogin {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.OpenidLogin): Promise<any>
      }

      /**
       * 发送验证码;需要创建一个登录表单，只适合于targetKey为手机号的情况
       * /api/h5/v1/sendSms
       */
      export namespace H5Controller_sendSms {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.SendSmsBody): Promise<any>
      }

      /**
       * 验证码登录；需要创建一个登录表单，只适合于targetKey为手机号的情况
       * /api/h5/v1/smsLogin
       */
      export namespace H5Controller_smsLogin {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.SmsLoginBody): Promise<any>
      }

      /**
       * 获取用户信息
       * /api/h5/v1/userinfo
       */
      export namespace H5Controller_userinfo {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 获取用户信息根据targetKey
       * /api/h5/v1/userinfo/targetKey
       */
      export namespace H5Controller_userinfoByTargetKey {
        export class Params {
          /** targetKey */
          targetKey: string
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

      /**
       * 获取微信签名
       * /api/h5/v1/weChat
       */
      export namespace H5Controller_getJssdkSignature {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.h5.WechatJssdkSignature): Promise<any>
      }

      /**
        * 自定义数据统计文档
文档地址：https://umami.is/docs/getting-started
        * ApiH5V1Document
        */
      export namespace H5Controller_cust {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }
    }
  }
}
