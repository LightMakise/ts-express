/**
 * log4js配置文件
 */
const config = {
    appenders: {
        debug: { type: 'file', filename: 'logs/debug.log' },
        info: { 
            type: 'dateFile',
            filename: 'logs/server',
            pattern: 'yyyy-MM-dd.log',
            maxLogSize: 10 * 1000 * 1000,
            numBackups: 3,
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: { appenders: ["debug"], level: 'info' },
        "信息": { appenders: ["info"], level: 'info' }
    }
}
export default config