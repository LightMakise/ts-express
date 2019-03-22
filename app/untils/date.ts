/***
 * @author zhang
 * @date 2019/2/20
 * @Description: 时间类扩展
 */
export default class _Date {
  constructor() {

  }
  /***
   * 获取当前日期
   * @param {string} fmt 格式  例如  yyyy-mm-dd HH:ii:ss
   * @return {String}
   */
  now(fmt: string): String {
    let date = new Date()
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, date.getFullYear().toString());
    }
    if (/(m+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString());
    }
    if (/(d+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, date.getDate().toString());
    }
    if (/(H+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, date.getHours().toString());
    }
    if (/(i+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString());
    }
    if (/(s+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, date.getSeconds().toString());
    }
    return fmt
  }

  /***
   * 获取今天星期数
   * @param {number} type 1:数字  2:汉字
   * @return {String}
   */
  getWeek(type?: number): String {
    let date = new Date()
    let capitalMap: any = {
      '1': '一',
      '2': '二',
      '3': '三',
      '4': '四',
      '5': '五',
      '6': '六',
      '7': '日',
    }
    if (type == 1) {
      return date.getDay().toString()
    } else {
      return capitalMap[date.getDay().toString()]
    }
  }

  /***
   * 获取某时距离当前时间的差
   * @param {number} timestamp 时间戳
   * @return {String} x天x时x分x秒
   */
  toNowByTimestamp(timestamp: number): String {
    let nowTimestamp = (new Date()).getTime()
    if (timestamp < nowTimestamp) {
      return ''
    }
    let unit = {
      day: 24 * 60 * 60,
      hours: 1 * 60 * 60,
      min: 1 * 60
    }
    let beTime = (timestamp - nowTimestamp) / 1000
    let day = parseInt(beTime / unit.day + "")
    beTime -= day * unit.day
    let hours = parseInt((beTime) / unit.hours + "")
    beTime -= hours * unit.hours
    let min = parseInt(beTime / unit.min + "")
    let sec = parseInt(beTime - min * unit.min + "")
    return day + "天" + hours + "时" + min + "分" + sec + "秒"
  }
}
