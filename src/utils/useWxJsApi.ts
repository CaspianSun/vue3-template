/**
 * @description 微信JSApi
 * @example const wxJsApi = new WxJsApi();
 * @tips 请查看配置文件中的微信公众号配置
 * @tips 请将后端传递的appId, timestamp, nonceStr, signature 挂载到 window 对象 或者 传递到构造函数中
 */

declare global {
  interface Window {
    openid?: string
    wxAppId?: string
    wxTimestamp?: string
    wxNonceStr?: string
    wxSignature?: string
  }
}

export class WxJsApi {
  private debug: boolean = false
  private jsApiList: wx.JsApi[] = ["updateAppMessageShareData", "updateTimelineShareData"]
  private appId: string
  private timestamp: string
  private nonceStr: string
  private signature: string
  readonly wx = window.wx

  constructor(config?: {
    debug?: boolean
    jsApiList?: wx.JsApi[]
    appId?: string
    timestamp?: string
    nonceStr?: string
    signature?: string
    init?: boolean
  }) {
    config?.debug && (this.debug = true)
    config?.jsApiList && this.jsApiList.concat(config.jsApiList)
    this.appId = window.wxAppId || config?.appId || ""
    this.timestamp = window.wxTimestamp || config?.timestamp || ""
    this.nonceStr = window.wxNonceStr || config?.nonceStr || ""
    this.signature = window.wxSignature || config?.signature || ""
    config?.init && this.init()
  }
  public init() {
    return new Promise((resolve, reject) => {
      wx.config({
        debug: this.debug,
        appId: this.appId,
        timestamp: this.timestamp,
        nonceStr: this.nonceStr,
        signature: this.signature,
        jsApiList: this.jsApiList,
      })
      wx.ready(() => {
        wx.checkJsApi({
          jsApiList: this.jsApiList,
          success: (res: any) => {
            resolve(res)
          },
          fail: (err: any) => {
            reject(err)
          },
        })
      })
    })
  }

  public setWxShareData(data?: {
    updateAppMessageShareData?: wx.AppMessageShareData
    updateTimelineShareData?: wx.TimelineShareData
  }): void {
    data?.updateAppMessageShareData && wx.updateAppMessageShareData(data.updateAppMessageShareData)
    data?.updateTimelineShareData && wx.updateTimelineShareData(data.updateTimelineShareData)
  }
}

export default WxJsApi
