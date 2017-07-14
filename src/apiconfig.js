// api配置
const ipApiConfig = {
  baseURL: 'http://testapi.2cyj.com/', // 内网
  // baseURL: 'https://api-qidafortest.yunxuetang.cn/v1/', // 外网
  // 此函数只用于PUT, POST, PATCH方法请求
  // 按数组顺序执行函数,返回值作为下一个函数的输入值
  // 最后一个函数必须返回值的类型是:[string, ArrayBuffer, Stream]
  transformRequest: [function (data) {
    // 请求之前对参数再一次封装
    return window.JSON.stringify(data)
  }],

  // 处理接口返回数据在then/catch之前执行动作
  // 参数 data[string]类型
  transformResponse: [],

  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

// 输出ipApiConfig
export {ipApiConfig}
