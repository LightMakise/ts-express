export default class URL {
  urlSerialization(url: string, params: any) {
    if (url === "" || url === undefined || url === null) {
      return " "
    }
    if (params === null || typeof params !== "object") {
      return " "
    }
    let res = url + "?";
    let paramsArr = [];
    for (let key in params) {
      paramsArr.push(key + "=" + params[key])
    }
    res += paramsArr.join("&");
    return res
  }
}