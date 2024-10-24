//Thu Oct 24 2024 14:42:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("顺义创城兑换"),
  axios = require("axios");
let request = require("request");
const fs = require("fs"),
  cheerio = require("cheerio"),
  {
    timeStamp,
    time
  } = require("console");
request = request.defaults({
  jar: true
});
const {
    log
  } = console,
  debug = 0;
let SYCC = ($.isNode() ? process.env.SYCC : $.getdata("SYCC")) || "",
  SYCCArr = [],
  index,
  data = "",
  msg = "";
const concurrency = 10,
  delayBetweenBatches = 5000;
async function runAccount(_0x173ec8, _0x389629) {
  const _0xd502ca = _0x173ec8.split(/&|#/),
    _0x386c9b = _0xd502ca[0],
    _0x308da9 = _0xd502ca[1];
  console.log("开始执行账号" + (_0x389629 + 1) + "：" + _0x173ec8);
  starttime = new Date().getTime();
  endtime = starttime + 90000;
  log("开始时间戳:" + starttime, "结束时间戳" + endtime);
  await $.wait(45000);
  await task(_0x386c9b, _0x308da9);
  await new Promise(_0x547e78 => setTimeout(_0x547e78, 1000));
  console.log("账号" + (_0x389629 + 1) + " 执行完成");
}
async function runMultipleAccounts() {
  console.log("共找到 " + SYCCArr.length + " 个账号");
  const _0x4f0e85 = Math.ceil(SYCCArr.length / concurrency);
  for (let _0x53c597 = 0; _0x53c597 < _0x4f0e85; _0x53c597++) {
    const _0x1a6a53 = SYCCArr.slice(_0x53c597 * concurrency, (_0x53c597 + 1) * concurrency);
    await Promise.all(_0x1a6a53.map((_0x333318, _0x12f9fe) => runAccount(_0x333318, _0x53c597 * concurrency + _0x12f9fe)));
    _0x53c597 < _0x4f0e85 - 1 && (console.log("延迟 " + delayBetweenBatches + " 毫秒后再执行下一批账号"), await new Promise(_0x13969a => setTimeout(_0x13969a, delayBetweenBatches)));
  }
  console.log("所有账号执行完成");
}
(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    if (!(await Envs())) {
      return;
    } else {
      log("\n\n=============================================脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + "=============================================\n");
      log("\n=================== 共找到 " + SYCCArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + SYCCArr);
      await runMultipleAccounts();
    }
    await SendMsg(msg);
  }
})().catch(_0x58555c => log(_0x58555c)).finally(() => $.done());
async function task(_0x311941, _0xb7c01e) {
  hd = {
    Host: "",
    cookie: "" + _0x311941,
    "User-Agent": ua[index + 1]
  };
  body = {};
  while (new Date().getTime() < endtime) {
    sign(_0x311941, _0xb7c01e, "1562334019131645953");
    sign(_0x311941, _0xb7c01e, "1788826595521810434");
    await stop();
  }
}
async function sign(_0x4b63f8, _0x55a93a, _0x1d84d9) {
  return new Promise(_0x2b2be8 => {
    var _0x5a45ec = {
      method: "POST",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/award/exchangeAward",
      headers: {
        Host: "admin.shunyi.wenming.city",
        "X-Applet-Token": "" + _0x4b63f8,
        "Content-Type": "application/json",
        "User-Agent": ua[index + 1],
        xweb_xhr: 1
      },
      data: {
        awardIds: ["" + _0x1d84d9],
        phone: "" + _0x55a93a
      },
      timeout: 10000
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5a45ec)));
    axios.request(_0x5a45ec).then(async function (_0x20fea4) {
      try {
        data = _0x20fea4.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x20fea4.data)));
        if (data.code == 500) {
          log(data.message + "\n");
          addNotifyStr("\n" + data.message + "\n", true);
          if (data.message == "一天只能兑换一次") {
            return;
          }
        } else {
          log(data.message);
        }
      } catch (_0x28997f) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x1efc6d) {
      console.error(_0x1efc6d);
    }).then(_0x23d21d => {
      _0x2b2be8();
    });
  });
}
function randomNum(_0x5bc4be, _0x50c5c0) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x5bc4be + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (_0x50c5c0 - _0x5bc4be + 1) + _0x5bc4be, 10);
      break;
    default:
      return 0;
      break;
  }
}
function poem(_0x341961 = 3000) {
  return new Promise(_0x579e1c => {
    let _0x519b0f = {
      url: "https://v1.jinrishici.com/all.json"
    };
    $.get(_0x519b0f, async (_0x1c3425, _0x385934, _0x2cd746) => {
      try {
        _0x2cd746 = JSON.parse(_0x2cd746);
        log(_0x2cd746.content + " \xA0\n————《" + _0x2cd746.origin + "》" + _0x2cd746.author);
      } catch (_0x10b389) {
        log(_0x10b389, _0x385934);
      } finally {
        _0x579e1c();
      }
    }, _0x341961);
  });
}
async function report() {
  const _0x13b9d6 = {
    method: "GET",
    url: "https://github.com/Poppypy/ql",
    headers: {},
    data: {},
    timeout: 5000
  };
  try {
    const _0xe4d7ab = await axios(_0x13b9d6),
      _0x2cba8c = _0xe4d7ab.data,
      _0x28865c = cheerio.load(_0x2cba8c),
      _0x4f1d75 = _0x28865c("p").eq(10).text(),
      _0x43583 = _0x28865c("p").eq(11).text();
    log(_0x4f1d75, _0x43583);
    fs.writeFileSync("response.html", _0x2cba8c);
  } catch (_0x2100fe) {}
}
async function stop() {
  delay = randomNum(100, 300);
  log("随机延迟" + delay + "毫秒");
  await $.wait(delay);
}
let ua = ["Mozilla/5.0 (Linux; Android 8.0.0; LLD-AL10 Build/HONORLLD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5061 MMWEBSDK/20221206 MMWEBID/1655 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64Content-Type: application/json", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6309021a) XWEB/6763 Flue", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.36(0x18002429) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (Linux; Android 9; Pixel XL Build/PPR1.180610.009) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.9 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-CN; Redmi 7A Build/PKQ1.181007.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/8727 MicroMessenger/7.0.9.1560(0x2700093B) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 9; HTC U11 Build/PPR2.181005.003) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.5 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; SLA-L22 Build/HUAWEISLA-L22) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8.4220 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/4G Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-cn; MI 8 Lite Build/PKQ1.181021.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/7360 MicroMessenger/7.0.8.1540(0x270008E1) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; MRX_Leo_User Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI"];
async function Envs() {
  if (SYCC) {
    if (SYCC.indexOf("@") != -1) {
      SYCC.split("@").forEach(_0x425ca3 => {
        SYCCArr.push(_0x425ca3);
      });
    } else {
      SYCC.indexOf("\n") != -1 ? SYCC.split("\n").forEach(_0x1ffe39 => {
        SYCCArr.push(_0x1ffe39);
      }) : SYCCArr.push(SYCC);
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 SYCC");
    return;
  }
  return true;
}
function addNotifyStr(_0x195f8c, _0x235571 = true) {
  _0x235571 && log(_0x195f8c + "\n");
  msg += _0x195f8c + "\n";
}
async function SendMsg(_0x2c4ca6) {
  if (!_0x2c4ca6) {
    return;
  }
  if ($.isNode()) {
    var _0x4d110c = require("./sendNotify");
    await _0x4d110c.sendNotify($.name, _0x2c4ca6);
  } else {
    $.msg(_0x2c4ca6);
  }
}
function randomString(_0x40d206) {
  for (var _0x2daadd = _0x40d206 > 0 && void 0 !== _0x40d206 ? _0x40d206 : 21, _0x101014 = ""; _0x101014.length < _0x2daadd;) {
    _0x101014 += Math.random().toString(36).slice(2);
  }
  return _0x101014.slice(0, _0x2daadd);
}
function Env(_0x29b840, _0x51b6c8) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x57e6e8 {
    constructor(_0x2559d2) {
      this.env = _0x2559d2;
    }
    send(_0x2ea1b9, _0x507d24 = "GET") {
      _0x2ea1b9 = "string" == typeof _0x2ea1b9 ? {
        url: _0x2ea1b9
      } : _0x2ea1b9;
      let _0x17bfbc = this.get;
      "POST" === _0x507d24 && (_0x17bfbc = this.post);
      return new Promise((_0x3cf4ea, _0x5adc52) => {
        _0x17bfbc.call(this, _0x2ea1b9, (_0x5c2b76, _0x154a10, _0x211a2e) => {
          _0x5c2b76 ? _0x5adc52(_0x5c2b76) : _0x3cf4ea(_0x154a10);
        });
      });
    }
    get(_0x391dc2) {
      return this.send.call(this.env, _0x391dc2);
    }
    post(_0x2483b3) {
      return this.send.call(this.env, _0x2483b3, "POST");
    }
  }
  return new class {
    constructor(_0x50eebb, _0x52ddce) {
      this.name = _0x50eebb;
      this.http = new _0x57e6e8(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x52ddce);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x586980, _0x35a519 = null) {
      try {
        return JSON.parse(_0x586980);
      } catch {
        return _0x35a519;
      }
    }
    toStr(_0x511693, _0x32c8db = null) {
      try {
        return JSON.stringify(_0x511693);
      } catch {
        return _0x32c8db;
      }
    }
    getjson(_0x98e8fb, _0x362caf) {
      let _0x50d25a = _0x362caf;
      const _0x37e2e4 = this.getdata(_0x98e8fb);
      if (_0x37e2e4) {
        try {
          _0x50d25a = JSON.parse(this.getdata(_0x98e8fb));
        } catch {}
      }
      return _0x50d25a;
    }
    setjson(_0xe8d5e1, _0x3b7740) {
      try {
        return this.setdata(JSON.stringify(_0xe8d5e1), _0x3b7740);
      } catch {
        return !1;
      }
    }
    getScript(_0x5a72b1) {
      return new Promise(_0x217f7a => {
        this.get({
          url: _0x5a72b1
        }, (_0x571c29, _0x13f5a2, _0x559c01) => _0x217f7a(_0x559c01));
      });
    }
    runScript(_0x137906, _0x221974) {
      return new Promise(_0x42f16a => {
        let _0x129bef = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x129bef = _0x129bef ? _0x129bef.replace(/\n/g, "").trim() : _0x129bef;
        let _0x1fcf45 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x1fcf45 = _0x1fcf45 ? 1 * _0x1fcf45 : 20;
        _0x1fcf45 = _0x221974 && _0x221974.timeout ? _0x221974.timeout : _0x1fcf45;
        const [_0x4d8700, _0x5dcdb3] = _0x129bef.split("@"),
          _0x8dfb63 = {
            url: "http://" + _0x5dcdb3 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x137906,
              mock_type: "cron",
              timeout: _0x1fcf45
            },
            headers: {
              "X-Key": _0x4d8700,
              Accept: "*/*"
            }
          };
        this.post(_0x8dfb63, (_0x44d0dd, _0x574eb2, _0x68773e) => _0x42f16a(_0x68773e));
      }).catch(_0x587a10 => this.logErr(_0x587a10));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4e6a8e = this.path.resolve(this.dataFile),
          _0x571d62 = this.path.resolve(process.cwd(), this.dataFile),
          _0x33ea80 = this.fs.existsSync(_0x4e6a8e),
          _0x11079a = !_0x33ea80 && this.fs.existsSync(_0x571d62);
        if (!_0x33ea80 && !_0x11079a) {
          return {};
        }
        {
          const _0xee2a3a = _0x33ea80 ? _0x4e6a8e : _0x571d62;
          try {
            return JSON.parse(this.fs.readFileSync(_0xee2a3a));
          } catch (_0xdf2db0) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x8b9d94 = this.path.resolve(this.dataFile),
          _0x3e9541 = this.path.resolve(process.cwd(), this.dataFile),
          _0x45d90b = this.fs.existsSync(_0x8b9d94),
          _0x2670ab = !_0x45d90b && this.fs.existsSync(_0x3e9541),
          _0x5b92c5 = JSON.stringify(this.data);
        _0x45d90b ? this.fs.writeFileSync(_0x8b9d94, _0x5b92c5) : _0x2670ab ? this.fs.writeFileSync(_0x3e9541, _0x5b92c5) : this.fs.writeFileSync(_0x8b9d94, _0x5b92c5);
      }
    }
    lodash_get(_0x4d7bcf, _0x533e4c, _0xaac35e) {
      const _0x15fcdd = _0x533e4c.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x285551 = _0x4d7bcf;
      for (const _0x20a78c of _0x15fcdd) if (_0x285551 = Object(_0x285551)[_0x20a78c], void 0 === _0x285551) {
        return _0xaac35e;
      }
      return _0x285551;
    }
    lodash_set(_0x599aa1, _0x211e97, _0xe2308c) {
      return Object(_0x599aa1) !== _0x599aa1 ? _0x599aa1 : (Array.isArray(_0x211e97) || (_0x211e97 = _0x211e97.toString().match(/[^.[\]]+/g) || []), _0x211e97.slice(0, -1).reduce((_0x317411, _0x36cb8b, _0x5e7bdf) => Object(_0x317411[_0x36cb8b]) === _0x317411[_0x36cb8b] ? _0x317411[_0x36cb8b] : _0x317411[_0x36cb8b] = Math.abs(_0x211e97[_0x5e7bdf + 1]) >> 0 == +_0x211e97[_0x5e7bdf + 1] ? [] : {}, _0x599aa1)[_0x211e97[_0x211e97.length - 1]] = _0xe2308c, _0x599aa1);
    }
    getdata(_0x346497) {
      let _0x256c57 = this.getval(_0x346497);
      if (/^@/.test(_0x346497)) {
        const [, _0x1cf6ca, _0x1dd63e] = /^@(.*?)\.(.*?)$/.exec(_0x346497),
          _0x49a4f5 = _0x1cf6ca ? this.getval(_0x1cf6ca) : "";
        if (_0x49a4f5) {
          try {
            const _0x5627f6 = JSON.parse(_0x49a4f5);
            _0x256c57 = _0x5627f6 ? this.lodash_get(_0x5627f6, _0x1dd63e, "") : _0x256c57;
          } catch (_0x423b7a) {
            _0x256c57 = "";
          }
        }
      }
      return _0x256c57;
    }
    setdata(_0x4f816e, _0x3a902d) {
      let _0x9a9399 = !1;
      if (/^@/.test(_0x3a902d)) {
        const [, _0x4787e4, _0xb6f1f8] = /^@(.*?)\.(.*?)$/.exec(_0x3a902d),
          _0x29ea22 = this.getval(_0x4787e4),
          _0xc83e2 = _0x4787e4 ? "null" === _0x29ea22 ? null : _0x29ea22 || "{}" : "{}";
        try {
          const _0x3296aa = JSON.parse(_0xc83e2);
          this.lodash_set(_0x3296aa, _0xb6f1f8, _0x4f816e);
          _0x9a9399 = this.setval(JSON.stringify(_0x3296aa), _0x4787e4);
        } catch (_0x446990) {
          const _0x10adb6 = {};
          this.lodash_set(_0x10adb6, _0xb6f1f8, _0x4f816e);
          _0x9a9399 = this.setval(JSON.stringify(_0x10adb6), _0x4787e4);
        }
      } else {
        _0x9a9399 = this.setval(_0x4f816e, _0x3a902d);
      }
      return _0x9a9399;
    }
    getval(_0x5ca0d1) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x5ca0d1) : this.isQuanX() ? $prefs.valueForKey(_0x5ca0d1) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5ca0d1]) : this.data && this.data[_0x5ca0d1] || null;
    }
    setval(_0x20a48b, _0x55c8fe) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x20a48b, _0x55c8fe) : this.isQuanX() ? $prefs.setValueForKey(_0x20a48b, _0x55c8fe) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x55c8fe] = _0x20a48b, this.writedata(), !0) : this.data && this.data[_0x55c8fe] || null;
    }
    initGotEnv(_0x245efa) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x245efa && (_0x245efa.headers = _0x245efa.headers ? _0x245efa.headers : {}, void 0 === _0x245efa.headers.Cookie && void 0 === _0x245efa.cookieJar && (_0x245efa.cookieJar = this.ckjar));
    }
    get(_0x275320, _0x3f058d = () => {}) {
      _0x275320.headers && (delete _0x275320.headers["Content-Type"], delete _0x275320.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x275320.headers = _0x275320.headers || {}, Object.assign(_0x275320.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x275320, (_0x290499, _0x452743, _0x185c7d) => {
        !_0x290499 && _0x452743 && (_0x452743.body = _0x185c7d, _0x452743.statusCode = _0x452743.status);
        _0x3f058d(_0x290499, _0x452743, _0x185c7d);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x275320.opts = _0x275320.opts || {}, Object.assign(_0x275320.opts, {
        hints: !1
      })), $task.fetch(_0x275320).then(_0x38295a => {
        const {
          statusCode: _0x438199,
          statusCode: _0x4281fe,
          headers: _0xf1185c,
          body: _0x4b53f6
        } = _0x38295a;
        _0x3f058d(null, {
          status: _0x438199,
          statusCode: _0x4281fe,
          headers: _0xf1185c,
          body: _0x4b53f6
        }, _0x4b53f6);
      }, _0x55c8ef => _0x3f058d(_0x55c8ef))) : this.isNode() && (this.initGotEnv(_0x275320), this.got(_0x275320).on("redirect", (_0x3f7bac, _0x4585ca) => {
        try {
          if (_0x3f7bac.headers["set-cookie"]) {
            const _0x207277 = _0x3f7bac.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x207277 && this.ckjar.setCookieSync(_0x207277, null);
            _0x4585ca.cookieJar = this.ckjar;
          }
        } catch (_0x40800b) {
          this.logErr(_0x40800b);
        }
      }).then(_0x423edb => {
        const {
          statusCode: _0x505c1b,
          statusCode: _0x696156,
          headers: _0x4cf4be,
          body: _0x8de933
        } = _0x423edb;
        _0x3f058d(null, {
          status: _0x505c1b,
          statusCode: _0x696156,
          headers: _0x4cf4be,
          body: _0x8de933
        }, _0x8de933);
      }, _0xfc690d => {
        const {
          message: _0x569cb8,
          response: _0x3283c8
        } = _0xfc690d;
        _0x3f058d(_0x569cb8, _0x3283c8, _0x3283c8 && _0x3283c8.body);
      }));
    }
    post(_0x4b05d6, _0x14fdb0 = () => {}) {
      if (_0x4b05d6.body && _0x4b05d6.headers && !_0x4b05d6.headers["Content-Type"] && (_0x4b05d6.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x4b05d6.headers && delete _0x4b05d6.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x4b05d6.headers = _0x4b05d6.headers || {}, Object.assign(_0x4b05d6.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x4b05d6, (_0x7f99aa, _0x1dc03c, _0x2d039a) => {
          !_0x7f99aa && _0x1dc03c && (_0x1dc03c.body = _0x2d039a, _0x1dc03c.statusCode = _0x1dc03c.status);
          _0x14fdb0(_0x7f99aa, _0x1dc03c, _0x2d039a);
        });
      } else {
        if (this.isQuanX()) {
          _0x4b05d6.method = "POST";
          this.isNeedRewrite && (_0x4b05d6.opts = _0x4b05d6.opts || {}, Object.assign(_0x4b05d6.opts, {
            hints: !1
          }));
          $task.fetch(_0x4b05d6).then(_0x4f73ab => {
            const {
              statusCode: _0x4cb5e4,
              statusCode: _0x220fe0,
              headers: _0x3e4592,
              body: _0x5e398f
            } = _0x4f73ab;
            _0x14fdb0(null, {
              status: _0x4cb5e4,
              statusCode: _0x220fe0,
              headers: _0x3e4592,
              body: _0x5e398f
            }, _0x5e398f);
          }, _0x1090df => _0x14fdb0(_0x1090df));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4b05d6);
            const {
              url: _0x593c5d,
              ..._0x37eac3
            } = _0x4b05d6;
            this.got.post(_0x593c5d, _0x37eac3).then(_0x17a4c4 => {
              const {
                statusCode: _0x5cbefb,
                statusCode: _0x552e53,
                headers: _0x460637,
                body: _0x18fa0c
              } = _0x17a4c4;
              _0x14fdb0(null, {
                status: _0x5cbefb,
                statusCode: _0x552e53,
                headers: _0x460637,
                body: _0x18fa0c
              }, _0x18fa0c);
            }, _0x25b53d => {
              const {
                message: _0x14372d,
                response: _0x2153ea
              } = _0x25b53d;
              _0x14fdb0(_0x14372d, _0x2153ea, _0x2153ea && _0x2153ea.body);
            });
          }
        }
      }
    }
    time(_0x29574e, _0x1a9454 = null) {
      const _0x416c34 = _0x1a9454 ? new Date(_0x1a9454) : new Date();
      let _0x122ad4 = {
        "M+": _0x416c34.getMonth() + 1,
        "d+": _0x416c34.getDate(),
        "H+": _0x416c34.getHours(),
        "m+": _0x416c34.getMinutes(),
        "s+": _0x416c34.getSeconds(),
        "q+": Math.floor((_0x416c34.getMonth() + 3) / 3),
        S: _0x416c34.getMilliseconds()
      };
      /(y+)/.test(_0x29574e) && (_0x29574e = _0x29574e.replace(RegExp.$1, (_0x416c34.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x496c52 in _0x122ad4) new RegExp("(" + _0x496c52 + ")").test(_0x29574e) && (_0x29574e = _0x29574e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x122ad4[_0x496c52] : ("00" + _0x122ad4[_0x496c52]).substr(("" + _0x122ad4[_0x496c52]).length)));
      return _0x29574e;
    }
    msg(_0x541755 = _0x29b840, _0x30194a = "", _0x104b70 = "", _0x561c15) {
      const _0xb010f1 = _0x232d48 => {
        if (!_0x232d48) {
          return _0x232d48;
        }
        if ("string" == typeof _0x232d48) {
          return this.isLoon() ? _0x232d48 : this.isQuanX() ? {
            "open-url": _0x232d48
          } : this.isSurge() ? {
            url: _0x232d48
          } : void 0;
        }
        if ("object" == typeof _0x232d48) {
          if (this.isLoon()) {
            let _0x176f97 = _0x232d48.openUrl || _0x232d48.url || _0x232d48["open-url"],
              _0x1d80ff = _0x232d48.mediaUrl || _0x232d48["media-url"];
            return {
              openUrl: _0x176f97,
              mediaUrl: _0x1d80ff
            };
          }
          if (this.isQuanX()) {
            let _0x3aae38 = _0x232d48["open-url"] || _0x232d48.url || _0x232d48.openUrl,
              _0x5e96ca = _0x232d48["media-url"] || _0x232d48.mediaUrl;
            return {
              "open-url": _0x3aae38,
              "media-url": _0x5e96ca
            };
          }
          if (this.isSurge()) {
            let _0xbd70fa = _0x232d48.url || _0x232d48.openUrl || _0x232d48["open-url"];
            return {
              url: _0xbd70fa
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x541755, _0x30194a, _0x104b70, _0xb010f1(_0x561c15)) : this.isQuanX() && $notify(_0x541755, _0x30194a, _0x104b70, _0xb010f1(_0x561c15))), !this.isMuteLog) {
        let _0x131d67 = ["", "==============📣系统通知📣=============="];
        _0x131d67.push(_0x541755);
        _0x30194a && _0x131d67.push(_0x30194a);
        _0x104b70 && _0x131d67.push(_0x104b70);
        console.log(_0x131d67.join("\n"));
        this.logs = this.logs.concat(_0x131d67);
      }
    }
    log(..._0x573308) {
      _0x573308.length > 0 && (this.logs = [...this.logs, ..._0x573308]);
      console.log(_0x573308.join(this.logSeparator));
    }
    logErr(_0x10c144, _0x13e880) {
      const _0x1fe07b = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x1fe07b ? this.log("", "❗️" + this.name + ", 错误!", _0x10c144.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x10c144);
    }
    wait(_0xec430) {
      return new Promise(_0x33ac6d => setTimeout(_0x33ac6d, _0xec430));
    }
    done(_0x5a816b = {}) {
      const _0x16f6b1 = new Date().getTime(),
        _0x372ce9 = (_0x16f6b1 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x372ce9 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x5a816b);
    }
  }(_0x29b840, _0x51b6c8);
}