export const sessionCache = (
    _ => {

        // 安全地检测数据类型
        const checkType = (data) => Object.prototype.toString.call(data).slice(8, -1);

        const get = (key) => {
            return JSON.parse(sessionStorage.getItem(key));
        };

        const set = (key,data) => {
            if (checkType(data) === 'Object' || 'Array' || 'Function' || 'RegExp') {
                data = JSON.stringify(data);
            }
            sessionStorage.setItem(key,data);
        };


        return {
            set: set,
            get: get
        }
    })();