// import PubSub from 'pubsub.js'

export const localCache = (
    _ => {

        // 本地存储默认配置，默认不过期，过期时间为10min
        const defaultConfig = {
            isExpired: false,
            delay: 600000
        };

        // 安全地检测数据类型
        const checkType = (data) => Object.prototype.toString.call(data).slice(8, -1);

        // 获取当前得到时间戳
        const currentStamp = Date.now();

        // 获取数据
        const get = (key) => {
            // 检测是否过期
                return JSON.parse(localStorage.getItem(key));
        };

        // 放置数据
        const set = (key, data, config) => {

            // 合并配置
            config = Object.assign(defaultConfig, config);

            // 检测数据类型
            if (checkType(data) === 'Object' || 'Array' || 'Function' || 'RegExp') {
                data = JSON.stringify(data);
            }

            // 检测是否过期
            if (config.isExpired) {
                defaultConfig.isExpired = true;
                localStorage.setItem('currentStamp', currentStamp);
                localStorage.setItem(key, data);
            } else {
                localStorage.setItem(key, data);
            }
        };

        return {
            set: set,
            get: get
        }
    }
)();