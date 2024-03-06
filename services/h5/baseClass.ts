class Activity {
  /** 活动标识 */
  actCode = ""

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 创建人Id */
  creatorId = undefined

  /** 部门标识 */
  deptNum = ""

  /** 活动结束时间 */
  endTime = ""

  /** 活动图片-横版 */
  horizontalImage = ""

  /** id */
  id = undefined

  /** 是否启用 */
  isEnabled = false

  /** 活动链接 */
  link = ""

  /** 锁定码 */
  lockCode = ""

  /** 锁定状态 */
  lockStatus = false

  /** 腾讯地图Key */
  mapKey = ""

  /** 商户配置 */
  matchSettings = new MerchantSetting()

  /** 活动备注 */
  remark = ""

  /** 数据统计url；前端不传 */
  shareHref = ""

  /** 活动开始时间 */
  startTime = ""

  /** 状态；1开启, 2关闭，3活动未开始, 4活动进行中,5活动结束 */
  status = 1

  /** 置顶 */
  sticky = false

  /** 活动名称 */
  title = ""

  /** 活动类型;后台创建字典 */
  type = ""

  /** h5地址 */
  url = ""

  /** 是否使用微信登录 */
  useWechatLogin = false

  /** 活动图片-竖版 */
  verticalImage = ""

  /** 数据统计 */
  websiteId = ""

  /** 是否获取微信头像昵称信息 */
  wxprofile = false
}

class AnswerConfig {
  /** 活动ID */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** id */
  id = undefined

  /** 随机题目总数 */
  limit = undefined

  /** 每题时间；单位秒 */
  time = undefined
}

class AnswerRankRes {
  /** 活动ID */
  actId = undefined

  /** 用户提交的数据json */
  content = undefined

  /** id */
  id = undefined

  /** 积分数, 不需要提交 */
  integral = undefined

  /** 操作人 */
  operator = ""

  /** 排名 */
  rank = undefined

  /** 答题分数 */
  score = undefined

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  targetKey = ""

  /** 时间 */
  time = undefined
}

class AnswerRecord {
  /** 活动ID */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 答案 */
  answer = ""

  /** id */
  id = undefined

  /** 是否正确 */
  isRight = false

  /** 用户id */
  playerId = undefined

  /** 试题id */
  questionId = undefined

  /** 目标键 */
  targetKey = ""

  /** 答题时间；单位秒 */
  time = undefined
}

class AnswerSaveBody {
  /** 答案 */
  answer = ""

  /** 题目id */
  questionId = undefined

  /** 目标键 */
  targetKey = ""

  /** 答题消耗时间;单位秒 */
  time = undefined
}

class AnswerSaveRes {
  /** 是否正确 */
  isRight = false

  /** 用户 */
  player = new Submit()

  /** 记录id */
  recordId = undefined

  /** 得分 */
  score = undefined
}

class CustomData {
  /** 活动id；静默处理页面不显示 */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 自定义标识；不传 */
  customCode = ""

  /** 描述 */
  desc = ""

  /** id */
  id = undefined

  /** json数据；单独更改 */
  jsonData = undefined

  /** 标题 */
  title = ""
}

class Field {
  /** 活动ID */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 字典数据 */
  dictionary = []

  /** 是否禁用 */
  disabled = false

  /** 字段标识 */
  fieldCode = ""

  /** 表单ID */
  formId = undefined

  /** icon */
  icon = ""

  /** id */
  id = undefined

  /** 是否是默认列表显示 */
  isDefault = false

  /** 是否必选 */
  isRequired = false

  /** 字段是否参与搜索 */
  isSearch = false

  /** 是否显示 */
  isShow = false

  /** 字段名称 */
  name = ""

  /** placeholder */
  placeholder = ""

  /** 列表显示优先级, 高的在前, 低的在后 */
  priority = undefined

  /** 正则 */
  regular = ""

  /** 备注 */
  remark = ""

  /** 顺序 */
  sort = undefined

  /** 字段类型 1字符串 2数字 3时间 4下拉框 */
  type = 1
}

class Form {
  /** 活动ID */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 是否为基础表单 */
  basics = false

  /** 报名截止时间 */
  deadline = ""

  /** 表单字段 */
  fields = []

  /** 表单标识 */
  formCode = ""

  /** 创建表单是否验证验证码 */
  formVCode = false

  /** id */
  id = undefined

  /** 是否开启 */
  isEnabled = false

  /** 短信签名 */
  signName = ""

  /** 短信内容 */
  smsContent = ""

  /** 表单名称 */
  title = ""
}

class FormFieldsRes {
  /** 目标key, 用于保存字段表中的唯一枢纽 */
  fieldData = []

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  form = new Form()
}

class HxBody {
  /** 备注 */
  comment = ""

  /** 扫码结果 */
  hxContent = ""

  /** 环节id；可穿uid或id */
  linkId = undefined
}

class Link {
  /** 活动id */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 结束时间 */
  endTime = ""

  /** id */
  id = undefined

  /** 介绍 */
  introduction = ""

  /** 开始时间 */
  startTime = ""

  /** 状态；3开启4关闭 */
  status = 1

  /** 标题 */
  title = ""

  /** uid二维码核销使用 */
  uid = ""
}

class LotteryPlay {
  /** 目标key, 用于保存字段表中的唯一枢纽 */
  targetKey = ""
}

class LotteryRes {
  /** 是否抽中奖品 */
  isLottery = false

  /** 中奖信息 */
  prizeInfo = new PrizeInfo()
}

class MapBody {
  /** 维度 */
  lat = undefined

  /** 经度 */
  lng = undefined
}

class MapManagement {
  /** 活动id */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 地点标识 */
  code = ""

  /** id */
  id = undefined

  /** 点位介绍 */
  introduce = ""

  /** 自定义json数据 */
  jsonData = undefined

  /** 维度 */
  lat = undefined

  /** 经度 */
  lng = undefined

  /** 范围单位Km */
  range = undefined

  /** 点位名称 */
  title = ""
}

class MerchantSetting {
  /** 活动名称 */
  actName = ""

  /** apikey */
  apiKey = ""

  /** 私钥key */
  key = ""

  /** 商户id */
  matchId = ""

  /** 证书pem */
  pem = ""

  /** 备注 */
  remark = ""

  /** 发放者名称 */
  sendName = ""

  /** 祝福语 */
  wishing = ""
}

class OpenidLogin {
  /** openid */
  openid = ""
}

class OptionData {
  /** 选项值 */
  key = ""

  /** 选项名称 */
  name = ""
}

class OptionsType {
  /** 选项内容 */
  label = ""

  /** 选项内容图片 */
  labelImg = ""

  /** 选项值 */
  value = ""
}

class PrizeInfo {
  /** 图片地址 */
  image = ""

  /** mini图片地址 */
  mini = ""

  /** 奖品名称 */
  name = ""

  /** 奖品id */
  prizeId = undefined

  /** 中奖记录id */
  recordId = undefined

  /** 奖品类型 */
  type = undefined
}

class PrizeRecordAdress {
  /** 邮寄-联系地址 */
  address = ""

  /** 邮寄-联系人 */
  cName = ""

  /** 中奖记录id */
  id = undefined

  /** 邮寄-联系电话 */
  phone = ""
}

class Question {
  /** 活动ID */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 答案 */
  answer = ""

  /** id */
  id = undefined

  /** 选项 */
  options = []

  /** 分数 */
  score = undefined

  /** 题目 */
  title = ""

  /** 题目图片 */
  titleImg = ""

  /** 1单选题；2多选题 */
  type = ""
}

class RankListQuery {
  /** 是否过滤0票;1过滤0不过滤 */
  filterZero = undefined

  /** limit */
  limit = undefined

  /** page */
  page = undefined

  /** 搜索条件集合 */
  searchArr = []

  /** 唯一值 */
  targetKey = ""
}

class RankListRes {
  /** 活动ID */
  actId = undefined

  /** 用户提交的数据json */
  content = undefined

  /** id */
  id = undefined

  /** 操作人 */
  operator = ""

  /** 排名 */
  rank = undefined

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  targetKey = ""

  /** 投票数 */
  vote = undefined
}

class SendFormSmsCode {
  /** 表单code */
  formCode = ""

  /** 手机号 */
  phone = ""
}

class SendSmsBody {
  /** 活动code */
  actCode = ""

  /** 表单code，发放指定的短信验证码,需创建一个登录表单 */
  formCode = ""

  /** 手机号 */
  phone = ""
}

class SmsLoginBody {
  /** 活动code */
  actCode = ""

  /** 验证码 */
  code = ""

  /** 表单code，发放指定的短信验证码,需创建一个登录表单 */
  formCode = ""

  /** 手机号 */
  phone = ""
}

class Submit {
  /** 活动ID */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 答题记录 */
  answerRecord = []

  /** 用户提交的数据json */
  content = undefined

  /** 抽奖扣除积分 */
  deduct = undefined

  /** id */
  id = undefined

  /** 积分数, 不需要提交 */
  integral = undefined

  /** 操作人 */
  operator = ""

  /** 可操作人集合 */
  principals = []

  /** 答题分数 */
  score = undefined

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  targetKey = ""

  /** uid */
  uid = ""

  /** 投票数 */
  vote = undefined
}

class SubmitContent {
  /** 用户提交的数据json，根据表单数据来 */
  content = new SubmitContentMust()

  /** 表单code */
  formCode = ""

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  operator = ""

  /** 手机表单key */
  phoneKey = ""

  /** 验证码； */
  smsCode = ""

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  targetKey = ""
}

class SubmitContentMust {}

class SubmitSearch {
  /** 搜索字段名称 */
  name = ""

  /** 用户搜索数据 */
  search = ""
}

class TraceQuery {
  /** 活动id */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 事件名 */
  event = ""

  /** 事件数据 */
  eventData = undefined

  /** 页面 */
  page = ""

  /** session;用户区分用户唯一标识；不传用sessionId 客户端需持久化保存 */
  session = ""

  /** 类型;1普通，2事件 */
  type = undefined
}

class Verification {
  /** 活动id */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 备注 */
  comment = ""

  /** 组织权限标识 */
  deptNum = ""

  /** 关联键 */
  foreignKey = ""

  /** id */
  id = undefined

  /** 签到环节 */
  link = new Link()

  /** 环节id */
  linkId = undefined

  /** 用户关联数据 */
  player = new Submit()

  /** 用户id */
  playerId = undefined

  /** 工作人员id */
  userId = undefined
}

class VoteBody {
  /** 要投票的用户标识,多用于逗号隔开 */
  targetKey = ""
}

class VoteInfoRes {
  /** 总票数 */
  totalVote = undefined

  /** 已投票票数 */
  useVote = undefined

  /** unit单位内对用户所投票数 */
  vote = undefined
}

class VotePersonInfoRes {
  /** 上一名用户 */
  lastPlayer = new Submit()

  /** 当前用户 */
  player = new Submit()

  /** 排名 */
  rank = undefined

  /** 当前投票数 */
  vote = undefined
}

class VotingRecord {
  /** 活动id */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** id */
  id = undefined

  /** 投票ip地址 */
  ip = ""

  /** 用户信息 */
  player = new Submit()

  /** 用户id */
  playerId = undefined

  /** sessionId 投票者sessionId */
  sessionId = ""

  /** 平台唯一值 */
  targetKey = ""
}

class WeChatShare {
  /** 活动id */
  actId = undefined

  /** 账号ID;前端不传 */
  agentId = undefined

  /** id */
  id = undefined

  /** 是否为默认 */
  isDefault = false

  /** 分享图片 */
  shareImg = ""

  /** 分享副标题 */
  subTitle = ""

  /** 分享标题 */
  title = ""
}

class WechatJssdkSignature {
  /** 活动code */
  actCode = ""

  /** 地址 */
  href = ""
}

export const h5 = {
  Activity,
  AnswerConfig,
  AnswerRankRes,
  AnswerRecord,
  AnswerSaveBody,
  AnswerSaveRes,
  CustomData,
  Field,
  Form,
  FormFieldsRes,
  HxBody,
  Link,
  LotteryPlay,
  LotteryRes,
  MapBody,
  MapManagement,
  MerchantSetting,
  OpenidLogin,
  OptionData,
  OptionsType,
  PrizeInfo,
  PrizeRecordAdress,
  Question,
  RankListQuery,
  RankListRes,
  SendFormSmsCode,
  SendSmsBody,
  SmsLoginBody,
  Submit,
  SubmitContent,
  SubmitContentMust,
  SubmitSearch,
  TraceQuery,
  Verification,
  VoteBody,
  VoteInfoRes,
  VotePersonInfoRes,
  VotingRecord,
  WeChatShare,
  WechatJssdkSignature,
}
