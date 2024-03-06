import { getCacheIDApi, getDealerApi, getLotteryLogApi, getSubmitApi } from "@/api"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useDataStore = defineStore("data-store", () => {
  const cacheId = ref(localStorage.getItem("cacheId"))
  const actId = import.meta.env.VITE_ACT_ID
  const actCode = import.meta.env.VITE_ACT_CODE

  const init = async () => {
    const { result, code } = await getCacheIDApi({
      actCode,
    })
    if (code === 0) {
      if (!cacheId.value) {
        cacheId.value = result
        localStorage.setItem("cacheId", result)
      } else {
        if (cacheId.value !== result) {
          localStorage.setItem("cacheId", result)
          window?.location?.reload()
        }
      }
    }
  }

  const userInfo = ref<Record<string, any>>()
  const initUserInfo = async () => {
    const { result } = await getSubmitApi({
      targetKey: window.openid || "",
    })
    userInfo.value = result
  }

  const lotteryLog = ref<defs.h5.PrizeInfo[]>()
  const initLotteryLog = async () => {
    const { result } = await getLotteryLogApi({
      targetKey: window.openid || "",
    })
    lotteryLog.value = result.rows
  }

  return {
    actId,
    actCode,
    init,
    userInfo,
    initUserInfo,
    lotteryLog,
  }
})
