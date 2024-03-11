import { service } from "@/utils/request"

export const getCacheIDApi = (params: { actCode: string }) => {
  return service.get<string>({
    url: "/api/h5/v1/cacheID",
    params,
  })
}

export const lotteryPointsApi = (data: { targetKey: string }) => {
  return service.post({
    url: "/api/h5/v1/lottery/channel/lotteryPoints",
    headers: {
      code: "QwGpr_",
    },
    data,
  })
}

export const lotteryPlayApi = (data: { targetKey: string }) => {
  return service.post<defs.h5.LotteryRes>({
    url: "/api/h5/v1/lottery/lotteryPlay",
    data,
  })
}

export const getLotteryLogApi = (params: { targetKey: string }) => {
  return service.get<BaseResponseWithArray<defs.h5.PrizeInfo>>({
    url: "/api/h5/v1/lottery/lotteryLog",
    params,
  })
}

export const getSubmitApi = (params: { targetKey: string }) => {
  return service.get<defs.h5.Submit>({
    url: "/api/h5/v1/form",
    params,
  })
}

export const saveSubmitApi = (data: Partial<defs.h5.SubmitContent>) => {
  return service.post({
    url: "/api/h5/v1/form/save",
    data,
  })
}

export const getDealerApi = () => {
  return service.get({
    url: "/api/h5/v1/customData",
    params: {
      code: "qhb3",
    },
  })
}
