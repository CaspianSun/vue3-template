export default async function (url: string): Promise<string> {
  return fetch(url).then(async (res) => {
    const data = await res.json()
    const reg = /"allOf":\[\{"\$ref":"(.*?)"}\]/g
    const str = JSON.stringify(data)
    const result_1 = str.replace(reg, '"$ref": "$1"')
    return result_1
  })
}
