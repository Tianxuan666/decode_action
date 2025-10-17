//Fri Oct 17 2025 12:49:16 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const request = require("request"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
process.noDeprecation = true;
function log(_0x5c3a69, _0x571557, _0x506a1f = false) {
  const _0x3c5747 = new Date().toLocaleTimeString("zh-CN", {
      "hour12": false
    }),
    _0x908e04 = "[" + _0x3c5747 + "]",
    _0x107a65 = {
      "info": "📝",
      "success": "✅",
      "warning": "⚠️",
      "error": "❌",
      "debug": "🔍"
    }[_0x5c3a69] || "";
  if (_0x506a1f && !isDevMode) return;
  const _0x1ef7cc = _0x908e04 + " " + _0x107a65 + " " + _0x571557;
  console.log(_0x1ef7cc);
}
const logInfo = _0x23a06e => log("info", _0x23a06e),
  logSuccess = _0x46cb27 => log("success", _0x46cb27),
  logWarning = _0x42711e => log("warning", _0x42711e),
  logError = _0x356c6c => log("error", _0x356c6c),
  logDebug = _0xeb86d8 => log("debug", _0xeb86d8, true);
function generateRandomInteractionMessage() {
  const _0x281637 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x281637[Math.floor(Math.random() * _0x281637.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function getTasksToExecute() {
  const _0x272392 = process.env.Task;
  if (!_0x272392) return logInfo("未设置Task，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  const _0x1a7d5c = _0x272392.split(",").map(_0x463a57 => _0x463a57.trim().toLowerCase()).filter(Boolean),
    _0x9fd2ca = ["food", "box", "look"],
    _0x20395c = _0x1a7d5c.filter(_0x3ed9be => _0x9fd2ca.includes(_0x3ed9be));
  if (_0x20395c.length === 0) return logWarning("Task中无有效任务，将执行所有 (food, box, look)"), ["food", "box", "look"];
  logInfo("执行任务: " + _0x20395c.join(", "));
  return _0x20395c;
}
function getAccountConfigsFromEnv() {
  const _0x30388d = process.env.ksck;
  if (!_0x30388d) return logError("未找到 ksck 环境变量"), [];
  const _0x597b86 = _0x30388d.split("&").map(_0x4f5775 => _0x4f5775.trim()).filter(Boolean);
  logInfo("解析到 " + _0x597b86.length + " 个账号配置");
  return _0x597b86;
}
const accountConfigs = getAccountConfigsFromEnv(),
  accountCount = accountConfigs.length,
  tasksToExecute = getTasksToExecute();
console.log("╔══════════════════════════════════════════════════════════════════════════════════════════════╗");
console.log("║                                    🌟 快手极速超级SVIP版 🌟                               ║");
console.log("║                          📱 简单易用 · 稳定运行 · 轻松收益 📱                             ║");
console.log("╚══════════════════════════════════════════════════════════════════════════════════════════════╝");
logSuccess("启动成功，快手金币任务开始");
logInfo("📊 账号数量: " + accountCount + " | 任务: " + tasksToExecute.join(", "));
accountCount > (process.env.MAX_CONCURRENCY || 999) && (logError("账号过多: " + accountCount + " 超过限制 " + (process.env.MAX_CONCURRENCY || 999)), process.exit(1));
const baseRemoteUrl = "http://117.72.209.186:1314",
  proxyApiUrl = baseRemoteUrl + "/sign_modified.php",
  queueStatusApiUrl = baseRemoteUrl + "/queue_status";
async function queryCardRemaining(_0x173463) {
  const _0x2c26a4 = baseRemoteUrl + "/query.php?card_key=" + encodeURIComponent(_0x173463),
    _0x34520a = await sendRequest({
      "method": "GET",
      "url": _0x2c26a4,
      "headers": {
        "User-Agent": "Mozilla/5.0"
      },
      "timeout": 10000
    }, null, "查询卡密剩余次数");
  if (!_0x34520a) return logError("查询卡密失败：无响应"), {
    "code": -1,
    "val": 0,
    "msg": "查询失败"
  };
  const {
      code: _0x3d04e1,
      data: _0x31961b,
      msg: _0x3f9afd
    } = _0x34520a,
    _0x474a54 = _0x31961b ? _0x31961b.val || 0 : 0;
  return {
    "code": _0x3d04e1,
    "val": _0x474a54,
    "msg": _0x3f9afd
  };
}
function generateKuaishouDid() {
  try {
    const _0x1eef21 = _0x5c29ea => {
        const _0x2eda75 = "0123456789abcdef";
        let _0x19a428 = "";
        for (let _0x342e64 = 0; _0x342e64 < _0x5c29ea; _0x342e64++) {
          _0x19a428 += _0x2eda75.charAt(Math.floor(Math.random() * _0x2eda75.length));
        }
        return _0x19a428;
      },
      _0x38dac6 = _0x1eef21(16),
      _0x1c74fc = "ANDROID_" + _0x38dac6;
    return _0x1c74fc;
  } catch (_0x196fa8) {
    logDebug("生成设备ID失败: " + _0x196fa8.message);
    const _0x2e06e1 = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x2e06e1.substring(0, 16);
  }
}
async function sendRequest(_0x272ef9, _0x3fdf08 = null, _0x191075 = "Unknown Request") {
  const _0x3c5654 = {
    ..._0x272ef9
  };
  if (_0x3fdf08) try {
    _0x3c5654.agent = new SocksProxyAgent(_0x3fdf08);
    isDevMode && logDebug(_0x191075 + " 使用代理: " + _0x3fdf08);
  } catch (_0xe0b66e) {
    logWarning(_0x191075 + " 代理失败 (" + _0xe0b66e.message + ")，切换直连");
    if (isDevMode) {
      logDebug("切换到直连");
    }
  } else isDevMode && logDebug("使用直连");
  if (isDevMode) {
    const _0xa6f3f4 = _0x3c5654.method || "GET";
    logDebug(_0x191075 + " → " + _0xa6f3f4 + " " + _0x3c5654.url);
  }
  return new Promise(_0x112ed4 => {
    request(_0x3c5654, (_0x17dca5, _0x40d90b, _0x426f5b) => {
      if (_0x17dca5) {
        {
          if (_0x17dca5.name === "AggregateError" && Array.isArray(_0x17dca5.errors)) {
            logDebug(_0x191075 + " 请求错误: AggregateError\n" + _0x17dca5.errors.map((_0x2ca1fd, _0x271fef) => "  [" + _0x271fef + "] " + (_0x2ca1fd?.["message"] || _0x2ca1fd)).join("\n"));
          } else {
            logDebug(_0x191075 + " 请求失败: " + (_0x17dca5.message || String(_0x17dca5)));
          }
          return _0x112ed4(null);
        }
      }
      if (!_0x40d90b || _0x40d90b.statusCode !== 200) {
        const _0x3de1b4 = _0x40d90b ? _0x40d90b.statusCode : "无响应";
        logDebug(_0x191075 + " 状态异常: " + _0x3de1b4);
        return _0x112ed4(null);
      }
      try {
        _0x112ed4(JSON.parse(_0x426f5b));
      } catch {
        _0x112ed4(_0x426f5b);
      }
    });
  });
}
async function testProxyConnectivity(_0x5a9fde, _0x12c53a = "代理连通性检测") {
  if (!_0x5a9fde) {
    return {
      "ok": true,
      "msg": "直连正常",
      "ip": "本地"
    };
  }
  const _0x55272a = await sendRequest({
    "method": "GET",
    "url": "https://ipinfo.io/json",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0x5a9fde, _0x12c53a + " → ipinfo.io");
  if (!_0x55272a) return {
    "ok": false,
    "msg": "代理无法访问",
    "ip": ""
  };
  const _0x182929 = _0x55272a.ip || _0x55272a.ip_address || "";
  return {
    "ok": true,
    "msg": "代理正常，IP: " + (_0x182929 || "未知"),
    "ip": _0x182929 || "未知"
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x5d50ee, _0xa35290, _0x5e5e79 = "?") {
  const _0x4bdfa1 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    _0x42473c = await sendRequest({
      "method": "GET",
      "url": _0x4bdfa1,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x5d50ee,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0xa35290, "账号[" + _0x5e5e79 + "] 获取基本信息");
  if (_0x42473c && _0x42473c.result === 1 && _0x42473c.data) return {
    "nickname": _0x42473c.data.userData?.["nickname"] || null,
    "totalCoin": _0x42473c.data.totalCoin ?? null,
    "allCash": _0x42473c.data.allCash ?? null
  };
  return null;
}
function centerAlign(_0x1ad74f, _0x5a3be1) {
  _0x1ad74f = String(_0x1ad74f);
  if (_0x1ad74f.length >= _0x5a3be1) return _0x1ad74f.substring(0, _0x5a3be1);
  const _0x574c26 = _0x5a3be1 - _0x1ad74f.length,
    _0xfcf492 = Math.floor(_0x574c26 / 2),
    _0x249b39 = _0x574c26 - _0xfcf492;
  return " ".repeat(_0xfcf492) + _0x1ad74f + " ".repeat(_0x249b39);
}
class KuaishouAdTask {
  constructor({
    index: _0x130a16,
    salt: _0x192bc9,
    cookie: _0x1cffd5,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"]
  }) {
    this.index = _0x130a16;
    this.salt = _0x192bc9;
    this.cookie = _0x1cffd5;
    this.nickname = nickname || "账号" + _0x130a16;
    this.proxyUrl = proxyUrl;
    this.coinLimit = parseInt(process.env.COIN_LIMIT || "500000", 10) || 500000;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x369460 => {
      {
        if (this.taskConfigs[_0x369460]) {
          this.taskStats[_0x369460] = {
            "success": 0,
            "failed": 0,
            "totalReward": 0
          };
        }
      }
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = parseInt(process.env.LOW_REWARD_THRESHOLD || "10", 10);
    this.lowRewardLimit = 3;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x2218da => {
      this.taskConfigs[_0x2218da] && (this.taskLimitReached[_0x2218da] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x69b998 = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
      if (_0x69b998 && _0x69b998.totalCoin) {
        const _0x2e3f42 = parseInt(_0x69b998.totalCoin);
        if (_0x2e3f42 >= this.coinLimit) return logWarning("账号[" + this.nickname + "] 金币 " + _0x2e3f42 + " 已达上限 " + this.coinLimit + "，停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
      }
      return false;
    } catch (_0x4d88f9) {
      logError("账号[" + this.nickname + "] 金币检查失败: " + _0x4d88f9.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      const _0x1dd4f6 = this.cookie.match(/egid=([^;]+)/),
        _0x1460a8 = this.cookie.match(/did=([^;]+)/),
        _0x472812 = this.cookie.match(/userId=([^;]+)/),
        _0x8e105f = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
        _0x52926f = this.cookie.match(/appver=([^;]+)/);
      this.egid = _0x1dd4f6 ? _0x1dd4f6[1] : "";
      this.did = _0x1460a8 ? _0x1460a8[1] : "";
      this.userId = _0x472812 ? _0x472812[1] : "";
      this.kuaishouApiSt = _0x8e105f ? _0x8e105f[1] : "";
      this.appver = _0x52926f ? _0x52926f[1] : "13.7.20.10468";
      if (!this.egid || !this.did) {
        logWarning("账号[" + this.nickname + "] Cookie 信息不完整，继续运行");
      }
    } catch (_0x23623c) {
      logError("账号[" + this.nickname + "] Cookie 解析失败: " + _0x23623c.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    logInfo("\n账号[" + this.nickname + "] 任务总结:");
    for (const [_0x168468, _0x490310] of Object.entries(this.taskStats)) {
      const _0x2a8b03 = this.taskConfigs[_0x168468].name;
      logInfo("  • " + _0x2a8b03 + ": 成功 " + _0x490310.success + " 次，失败 " + _0x490310.failed + " 次，总金币 " + _0x490310.totalReward);
    }
  }
  async ["retryOperation"](_0x43ce1a, _0x46cdb1, _0x55fd84 = 3, _0x16b738 = 2000) {
    let _0x2f0c40 = 0,
      _0x2bf04a = null;
    while (_0x2f0c40 < _0x55fd84) {
      {
        try {
          const _0x5e898d = await _0x43ce1a();
          if (_0x5e898d) return _0x5e898d;
          _0x2bf04a = new Error(_0x46cdb1 + " 无结果");
        } catch (_0x41a7ac) {
          _0x2bf04a = _0x41a7ac;
          logError("账号[" + this.nickname + "] " + _0x46cdb1 + " 失败: " + _0x41a7ac.message);
        }
        _0x2f0c40++;
        _0x2f0c40 < _0x55fd84 && (logWarning("账号[" + this.nickname + "] " + _0x46cdb1 + " 重试 " + _0x2f0c40 + "/" + _0x55fd84), await new Promise(_0x57536f => setTimeout(_0x57536f, _0x16b738)));
      }
    }
    if (isDevMode && _0x2bf04a) {
      logDebug(_0x46cdb1 + " 最终失败: " + _0x2bf04a.message);
    }
    return null;
  }
  async ["getAdInfo"](_0x3be577) {
    try {
      const _0xced9cd = "/rest/e/reward/mixed/ad",
        _0x99fb2e = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x1d8554 = {
          "earphoneMode": "1",
          "mod": "Xiaomi(23116PN5BC)",
          "appver": this.appver,
          "isp": "CUCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": "WIFI",
          "kcv": "1599",
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": "11.6",
          "android_os": "0",
          "boardPlatform": "pineapple",
          "kpn": "NEBULA",
          "androidApiLevel": "35",
          "country_code": "cn",
          "sys": "ANDROID_15",
          "sw": "1080",
          "sh": "2400",
          "abi": "arm64",
          "userRecoBit": "0"
        },
        _0x232cbf = {
          "appInfo": {
            "appId": "kuaishou_nebula",
            "name": "快手极速版",
            "packageName": "com.kuaishou.nebula",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": "15",
            "deviceId": this.did,
            "screenSize": {
              "width": 1080,
              "height": 2249
            },
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": 11101,
            "subPageId": _0x3be577.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": "{}",
            "mediaExtData": "{}"
          }]
        },
        _0x64e969 = Buffer.from(JSON.stringify(_0x232cbf)).toString("base64"),
        _0x1fe67a = await this.generateSignature2(_0xced9cd, querystring.stringify({
          ..._0x1d8554,
          ..._0x99fb2e
        }), this.salt, _0x64e969);
      if (!_0x1fe67a) return logError("账号[" + this.nickname + "] 获取 " + _0x3be577.name + " 广告失败"), null;
      const _0x50e1b0 = {
        ..._0x1d8554,
        "sig": _0x1fe67a.sig,
        "__NS_sig3": _0x1fe67a.__NS_sig3,
        "__NS_xfalcon": "",
        "__NStokensig": _0x1fe67a.__NStokensig
      };
      _0x99fb2e.encData = _0x1fe67a.encData;
      _0x99fb2e.sign = _0x1fe67a.sign;
      const _0x15b366 = "https://api.e.kuaishou.com" + _0xced9cd + "?" + querystring.stringify(_0x50e1b0),
        _0x1efbc3 = await sendRequest({
          "method": "POST",
          "url": _0x15b366,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "form": _0x99fb2e,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "] 获取广告");
      if (!_0x1efbc3) return null;
      if (_0x1efbc3.errorMsg === "OK" && _0x1efbc3.feeds && _0x1efbc3.feeds[0] && _0x1efbc3.feeds[0].ad) {
        const _0x43b0c6 = _0x1efbc3.feeds[0].caption || _0x1efbc3.feeds[0].ad?.["caption"] || "";
        _0x43b0c6 && logSuccess("账号[" + this.nickname + "] 广告加载成功: " + _0x43b0c6);
        const _0x14a412 = _0x1efbc3.feeds[0].exp_tag || "",
          _0x5631b5 = _0x14a412.split("/")[1]?.["split"]("_")?.[0] || "";
        return {
          "cid": _0x1efbc3.feeds[0].ad.creativeId,
          "llsid": _0x5631b5
        };
      }
      isDevMode && logDebug("getAdInfo 响应: " + JSON.stringify(_0x1efbc3));
      return null;
    } catch (_0x2f4d1b) {
      logError("账号[" + this.nickname + "] 获取广告失败: " + _0x2f4d1b.message);
      return null;
    }
  }
  async ["generateSignature"](_0x1db413, _0x3d103c, _0xd8874f, _0x4d795f) {
    try {
      const _0x152e72 = JSON.stringify({
          "businessId": _0x4d795f.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x1db413,
            "extInfo": "",
            "llsid": _0x3d103c,
            "requestSceneType": _0x4d795f.requestSceneType,
            "taskType": _0x4d795f.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": 11101,
          "posId": _0x4d795f.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x4d795f.subPageId
        }),
        _0x55a85f = "bizStr=" + encodeURIComponent(_0x152e72) + "&cs=false&client_key=2ac2a76d",
        _0x52a6e3 = this.queryParams + "&" + _0x55a85f,
        _0x92f9c9 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "urldata": _0x52a6e3,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "] 生成报告签名");
      if (!_0x92f9c9 || !_0x92f9c9.data) return null;
      return {
        "sig": _0x92f9c9.data.sig,
        "sig3": _0x92f9c9.data.__NS_sig3,
        "sigtoken": _0x92f9c9.data.__NStokensig,
        "post": _0x55a85f
      };
    } catch (_0xecc87d) {
      logError("账号[" + this.nickname + "] 生成签名失败: " + _0xecc87d.message);
      return null;
    }
  }
  async ["generateSignature2"](_0x419bc7, _0x5be3c4, _0x63d963, _0x1f8afe) {
    const _0xaf3b14 = await this.requestSignService({
      "urlpath": _0x419bc7,
      "urldata": _0x5be3c4,
      "api_client_salt": _0x63d963,
      "req_str": _0x1f8afe
    }, "账号[" + this.nickname + "] 生成广告签名");
    if (!_0xaf3b14) return null;
    return _0xaf3b14.data || _0xaf3b14;
  }
  async ["submitReport"](_0x5684dd, _0x1805d6, _0xd736cf, _0x2ad829, _0x4998ce, _0x513e7d) {
    try {
      const _0x5bbdc7 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x5684dd + "&__NS_sig3=" + _0x1805d6 + "&__NS_xfalcon=&__NStokensig=" + _0xd736cf),
        _0x26c035 = await sendRequest({
          "method": "POST",
          "url": _0x5bbdc7,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": this.cookie,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x2ad829,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "] 提交任务");
      if (!_0x26c035) return {
        "success": false,
        "reward": 0
      };
      if (_0x26c035.result === 1) {
        {
          const _0x23d2cd = _0x26c035.data?.["neoAmount"] || 0;
          logSuccess("账号[" + this.nickname + "] " + _0x513e7d.name + " 获得 " + _0x23d2cd + " 金币");
          if (_0x23d2cd < 1000) {
            this.did = generateKuaishouDid();
            logWarning("金币较低，切换设备ID");
          }
          return {
            "success": true,
            "reward": _0x23d2cd
          };
        }
      }
      if ([20107, 20108, 1003, 415].includes(_0x26c035.result)) {
        logWarning("账号[" + this.nickname + "] " + _0x513e7d.name + " 已完成上限");
        this.taskLimitReached[_0x4998ce] = true;
        return {
          "success": false,
          "reward": 0
        };
      }
      logError("账号[" + this.nickname + "] " + _0x513e7d.name + " 失败 (结果: " + _0x26c035.result + ") " + (_0x26c035.data || ""));
      if (isDevMode) {
        logDebug("submitReport 响应: " + JSON.stringify(_0x26c035));
      }
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x136c5e) {
      logError("账号[" + this.nickname + "] 提交任务失败: " + _0x136c5e.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["requestSignService"](_0x53f6e3, _0x48fd12) {
    const _0x27d340 = (process.env.km || "").trim();
    if (!_0x27d340) return null;
    const _0x13f51e = await sendRequest({
      "method": "POST",
      "url": proxyApiUrl + "?card_key=" + encodeURIComponent(_0x27d340),
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": _0x27d340
      },
      "body": JSON.stringify(_0x53f6e3),
      "timeout": 15000
    }, null, _0x48fd12 + "（签名服务）");
    if (!_0x13f51e) return null;
    if (_0x13f51e.sig && (_0x13f51e.encData || _0x13f51e.__NS_sig3)) return isDevMode && logDebug("检测到直接签名响应，已兼容处理"), {
      "success": true,
      "data": _0x13f51e
    };
    if (_0x13f51e.success && _0x13f51e.status === "queued" && _0x13f51e.queue_id) {
      const _0x4299ca = await this.pollQueueStatus(_0x13f51e.queue_id);
      if (_0x4299ca && _0x4299ca.success && (_0x4299ca.status === "completed" || _0x4299ca.status === "processed")) {
        if (_0x4299ca.sig && (_0x4299ca.encData || _0x4299ca.__NS_sig3)) return {
          "success": true,
          "data": _0x4299ca
        };
        return _0x4299ca;
      }
      logError("账号[" + this.nickname + "] 签名等待失败: " + (_0x4299ca?.["error"] || _0x4299ca?.["status"] || "未知"));
      return null;
    }
    if (_0x13f51e.success && (!_0x13f51e.status || _0x13f51e.status === "processed" || _0x13f51e.status === "completed")) {
      if (_0x13f51e.sig && (_0x13f51e.encData || _0x13f51e.__NS_sig3)) {
        return {
          "success": true,
          "data": _0x13f51e
        };
      }
      return _0x13f51e;
    }
    logError("账号[" + this.nickname + "] 签名失败: " + (_0x13f51e.error || _0x13f51e.message || _0x13f51e.status || "未知"));
    return null;
  }
  async ["pollQueueStatus"](_0x181881, _0x182c28 = 30000, _0x210978 = 2000) {
    const _0x1ca352 = Date.now();
    while (Date.now() - _0x1ca352 < _0x182c28) {
      const _0x39701d = await sendRequest({
        "method": "GET",
        "url": queueStatusApiUrl + "?queue_id=" + encodeURIComponent(_0x181881),
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 10000
      }, null, "账号[" + this.nickname + "] 签名等待");
      if (_0x39701d?.["success"]) {
        if (_0x39701d.status === "completed" || _0x39701d.status === "processed") {
          {
            if (_0x39701d.sig && (_0x39701d.encData || _0x39701d.__NS_sig3)) return {
              "success": true,
              "status": _0x39701d.status,
              "data": _0x39701d
            };
            return _0x39701d;
          }
        }
        if (_0x39701d.status === "failed") {
          return _0x39701d;
        }
      }
      await new Promise(_0x4bc1f5 => setTimeout(_0x4bc1f5, _0x210978));
    }
    return {
      "success": false,
      "status": "failed",
      "error": "等待超时"
    };
  }
  async ["executeTask"](_0xb652fb) {
    const _0x391ee6 = this.taskConfigs[_0xb652fb];
    if (!_0x391ee6) return logError("账号[" + this.nickname + "] 未知任务: " + _0xb652fb), false;
    if (this.taskLimitReached[_0xb652fb]) return false;
    try {
      const _0xa3b42b = await this.retryOperation(() => this.getAdInfo(_0x391ee6), "获取 " + _0x391ee6.name, 3);
      if (!_0xa3b42b) {
        this.taskStats[_0xb652fb].failed++;
        return false;
      }
      const _0x5db479 = Math.floor(Math.random() * 10000) + 30000;
      logInfo("账号[" + this.nickname + "] " + _0x391ee6.name + ": " + generateRandomInteractionMessage() + " (" + Math.round(_0x5db479 / 1000) + " 秒)");
      await new Promise(_0x44848c => setTimeout(_0x44848c, _0x5db479));
      const _0x41fdca = await this.retryOperation(() => this.generateSignature(_0xa3b42b.cid, _0xa3b42b.llsid, _0xb652fb, _0x391ee6), "生成 " + _0x391ee6.name + " 签名", 3);
      if (!_0x41fdca) return this.taskStats[_0xb652fb].failed++, false;
      const _0x5ec11d = await this.retryOperation(() => this.submitReport(_0x41fdca.sig, _0x41fdca.sig3, _0x41fdca.sigtoken, _0x41fdca.post, _0xb652fb, _0x391ee6), "提交 " + _0x391ee6.name, 3);
      if (_0x5ec11d?.["success"]) return this.taskStats[_0xb652fb].success++, this.taskStats[_0xb652fb].totalReward += _0x5ec11d.reward || 0, (_0x5ec11d.reward || 0) <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.lowRewardStreak >= this.lowRewardLimit && (logWarning("账号[" + this.nickname + "] 连续 " + this.lowRewardLimit + " 次低金币 (≤" + this.lowRewardThreshold + ")，停止任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0, true;
      this.taskStats[_0xb652fb].failed++;
      return false;
    } catch (_0x5503ef) {
      logError("账号[" + this.nickname + "] 任务失败(" + _0xb652fb + "): " + _0x5503ef.message);
      this.taskStats[_0xb652fb].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x239ff1 = {};
    for (const _0x16768b of this.tasksToExecute) {
      if (this.stopAllTasks) break;
      if (!this.taskConfigs[_0x16768b]) {
        logWarning("账号[" + this.nickname + "] 跳过无效任务: " + _0x16768b);
        continue;
      }
      logInfo("账号[" + this.nickname + "] 开始: " + this.taskConfigs[_0x16768b].name);
      _0x239ff1[_0x16768b] = await this.executeTask(_0x16768b);
      if (this.stopAllTasks) break;
      if (_0x16768b !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
        {
          const _0x5871b6 = Math.floor(Math.random() * 8000) + 7000;
          logInfo("账号[" + this.nickname + "] 等待下一个任务 (" + Math.round(_0x5871b6 / 1000) + " 秒)");
          await new Promise(_0x14b306 => setTimeout(_0x14b306, _0x5871b6));
        }
      }
    }
    return _0x239ff1;
  }
}
function parseAccountConfig(_0x363c4f) {
  const _0x496a90 = String(_0x363c4f || "").trim().split("#");
  if (_0x496a90.length < 2) return null;
  const _0x53e468 = _0x496a90[0],
    _0x62f8e9 = _0x496a90.slice(1, _0x496a90.length - (_0x496a90.length >= 3 ? 1 : 0)).join("#");
  let _0x4d7180 = null;
  if (_0x496a90.length >= 3) {
    const _0x1c8ce9 = _0x496a90[_0x496a90.length - 1].trim();
    logDebug(_0x1c8ce9);
    if (_0x1c8ce9.includes("|")) {
      logDebug("解析代理格式: " + _0x1c8ce9);
      const _0x46d1b6 = _0x1c8ce9.split("|");
      if (_0x46d1b6.length >= 2) {
        const [_0x278fbb, _0x14c833, _0x5b87f6, _0xd6ec54] = _0x46d1b6;
        _0x4d7180 = "socks5://" + _0x5b87f6 + ":" + _0xd6ec54 + "@" + _0x278fbb + ":" + _0x14c833;
      }
    } else {
      _0x4d7180 = /^socks5:\/\/.+/i.test(_0x1c8ce9) ? _0x1c8ce9 : null;
    }
    !_0x4d7180 && logWarning("代理格式无效，忽略: " + _0x1c8ce9);
  }
  return {
    "salt": _0x62f8e9,
    "cookie": _0x53e468,
    "proxyUrl": _0x4d7180
  };
}
function loadAccountsFromEnv() {
  const _0x1cdea6 = process.env.ksck;
  if (!_0x1cdea6) return logError("未找到 ksck 环境变量"), [];
  const _0x2241e9 = _0x1cdea6.split("&").map(_0x1df4cd => _0x1df4cd.trim()).filter(Boolean);
  logInfo("解析到 " + _0x2241e9.length + " 个账号");
  const _0x3c25b6 = [];
  for (const _0x2e8f90 of _0x2241e9) {
    const _0x332b44 = parseAccountConfig(_0x2e8f90);
    if (_0x332b44) {
      _0x3c25b6.push(_0x332b44);
    } else logError("账号配置错误: " + _0x2e8f90);
  }
  _0x3c25b6.forEach((_0x14bd54, _0x1cb35b) => {
    _0x14bd54.index = _0x1cb35b + 1;
  });
  return _0x3c25b6;
}
async function concurrentExecute(_0x353e15, _0xdf53c5, _0x1978b0) {
  const _0x2570ad = new Array(_0x353e15.length);
  let _0x335c9d = 0;
  async function _0x125521() {
    while (true) {
      const _0x5cc145 = _0x335c9d++;
      if (_0x5cc145 >= _0x353e15.length) {
        return;
      }
      const _0x218e17 = _0x353e15[_0x5cc145];
      try {
        _0x2570ad[_0x5cc145] = await _0x1978b0(_0x218e17, _0x5cc145);
      } catch (_0x3fc7be) {
        logError("账号 " + (_0x5cc145 + 1) + " 执行失败: " + _0x3fc7be.message);
        _0x2570ad[_0x5cc145] = null;
      }
    }
  }
  const _0x579b79 = Array.from({
    "length": Math.min(_0xdf53c5, _0x353e15.length)
  }, _0x125521);
  await Promise.all(_0x579b79);
  return _0x2570ad;
}
async function processAccount(_0x3acaad, _0x57dadf = 10) {
  if (_0x3acaad.proxyUrl) {
    logInfo("账号[" + _0x3acaad.index + "]" + (_0x3acaad.remark ? " (" + _0x3acaad.remark + ")" : "") + " 测试代理...");
    const _0x488650 = await testProxyConnectivity(_0x3acaad.proxyUrl, "账号[" + _0x3acaad.index + "]");
    logInfo("  " + _0x488650.msg + " (IP: " + _0x488650.ip + ")");
    if (_0x488650.ok && _0x488650.ip && _0x488650.ip !== "本地") {
      usedProxies.has(_0x488650.ip) && (logError("\n代理IP重复 (" + _0x488650.ip + ")，请检查"), process.exit(1));
      usedProxies.add(_0x488650.ip);
    }
  } else logInfo("账号[" + _0x3acaad.index + "] 使用直连");
  logInfo("账号[" + _0x3acaad.index + "]" + (_0x3acaad.remark ? " (" + _0x3acaad.remark + ")" : "") + " 获取信息...");
  let _0x10bc18 = await getAccountBasicInfo(_0x3acaad.cookie, _0x3acaad.proxyUrl, _0x3acaad.index),
    _0x56001a = _0x10bc18?.["nickname"] || "账号" + _0x3acaad.index;
  if (_0x10bc18) {
    const _0x439c77 = _0x10bc18.totalCoin != null ? _0x10bc18.totalCoin : "未知",
      _0x3a359f = _0x10bc18.allCash != null ? _0x10bc18.allCash : "未知";
    logSuccess("账号[" + _0x56001a + "] 登录成功 | 金币: " + _0x439c77 + " | 余额: " + _0x3a359f);
  } else logWarning("账号[" + _0x56001a + "] 信息获取失败，继续运行");
  const _0x529622 = new KuaishouAdTask({
    ..._0x3acaad,
    "nickname": _0x56001a,
    "tasksToExecute": tasksToExecute
  });
  await _0x529622.checkCoinLimit();
  if (_0x529622.coinExceeded) {
    {
      logWarning("账号[" + _0x529622.nickname + "] 金币已满，不运行任务");
      const _0x254fd3 = await getAccountBasicInfo(_0x3acaad.cookie, _0x3acaad.proxyUrl, _0x3acaad.index),
        _0x1eb1fe = _0x10bc18?.["totalCoin"] || 0,
        _0x37e851 = _0x254fd3?.["totalCoin"] || 0,
        _0x4425df = _0x37e851 - _0x1eb1fe,
        _0x1c9222 = _0x10bc18?.["allCash"] || 0,
        _0x5bd763 = _0x254fd3?.["allCash"] || 0,
        _0xcf4b35 = _0x5bd763 - _0x1c9222;
      return {
        "index": _0x3acaad.index,
        "nickname": _0x56001a,
        "initialCoin": _0x1eb1fe,
        "finalCoin": _0x37e851,
        "coinChange": _0x4425df,
        "initialCash": _0x1c9222,
        "finalCash": _0x5bd763,
        "cashChange": _0xcf4b35,
        "stats": _0x529622.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  for (let _0x2cc321 = 0; _0x2cc321 < _0x57dadf; _0x2cc321++) {
    const _0x4b4c99 = Math.floor(Math.random() * 8000) + 8000;
    logInfo("账号[" + _0x529622.nickname + "] 第 " + (_0x2cc321 + 1) + " 轮等待 (" + Math.round(_0x4b4c99 / 1000) + " 秒)");
    await new Promise(_0x59faca => setTimeout(_0x59faca, _0x4b4c99));
    logInfo("账号[" + _0x529622.nickname + "] 第 " + (_0x2cc321 + 1) + " 轮开始");
    const _0x1033a5 = await _0x529622.executeAllTasksByPriority();
    Object.values(_0x1033a5).some(Boolean) ? logSuccess("账号[" + _0x529622.nickname + "] 第 " + (_0x2cc321 + 1) + " 轮完成") : logWarning("账号[" + _0x529622.nickname + "] 第 " + (_0x2cc321 + 1) + " 轮无成功任务");
    if (_0x529622.stopAllTasks) {
      {
        logWarning("账号[" + _0x529622.nickname + "] 停止后续轮次");
        break;
      }
    }
    if (_0x2cc321 < _0x57dadf - 1) {
      const _0x27abd5 = Math.floor(Math.random() * 10000) + 10000;
      logInfo("账号[" + _0x529622.nickname + "] 等待下一轮 (" + Math.round(_0x27abd5 / 1000) + " 秒)");
      await new Promise(_0x4f77da => setTimeout(_0x4f77da, _0x27abd5));
    }
  }
  const _0x16fbf5 = await getAccountBasicInfo(_0x3acaad.cookie, _0x3acaad.proxyUrl, _0x3acaad.index),
    _0x3878fc = _0x10bc18?.["totalCoin"] || 0,
    _0x37bfeb = _0x16fbf5?.["totalCoin"] || 0,
    _0x298c99 = _0x37bfeb - _0x3878fc,
    _0x3f737a = _0x10bc18?.["allCash"] || 0,
    _0xb7dd5c = _0x16fbf5?.["allCash"] || 0,
    _0x289a96 = _0xb7dd5c - _0x3f737a;
  _0x529622.printTaskStats();
  return {
    "index": _0x3acaad.index,
    "nickname": _0x56001a,
    "initialCoin": _0x3878fc,
    "finalCoin": _0x37bfeb,
    "coinChange": _0x298c99,
    "initialCash": _0x3f737a,
    "finalCash": _0xb7dd5c,
    "cashChange": _0x289a96,
    "stats": _0x529622.getTaskStats(),
    "coinLimitExceeded": _0x529622.coinExceeded
  };
}
function printAccountsSummary(_0x83fa6e) {
  if (!_0x83fa6e.length) {
    logWarning("无账号数据");
    return;
  }
  const _0x309526 = _0x83fa6e.reduce((_0x462917, _0x212bbf) => {
      return _0x462917 + (parseInt(_0x212bbf.initialCoin) || 0);
    }, 0),
    _0x569e8c = _0x83fa6e.reduce((_0x1ab9ea, _0x259288) => {
      return _0x1ab9ea + (parseInt(_0x259288.finalCoin) || 0);
    }, 0),
    _0x47abea = _0x569e8c - _0x309526,
    _0x44d249 = _0x83fa6e.reduce((_0x43c0cb, _0x16ed16) => {
      return _0x43c0cb + (parseFloat(_0x16ed16.initialCash) || 0);
    }, 0),
    _0x3ea7ff = _0x83fa6e.reduce((_0x173738, _0x3115c1) => {
      return _0x173738 + (parseFloat(_0x3115c1.finalCash) || 0);
    }, 0),
    _0x2f4db1 = _0x3ea7ff - _0x44d249;
  let _0xad4916 = 0,
    _0x2e97d3 = 0,
    _0x3dfdb9 = 0;
  _0x83fa6e.forEach(_0x1249ee => {
    _0x1249ee.stats && Object.values(_0x1249ee.stats).forEach(_0x3c7cc2 => {
      _0xad4916 += _0x3c7cc2.success + _0x3c7cc2.failed;
      _0x2e97d3 += _0x3c7cc2.success;
      _0x3dfdb9 += _0x3c7cc2.totalReward;
    });
  });
  const _0x95982f = _0xad4916 > 0 ? (_0x2e97d3 / _0xad4916 * 100).toFixed(1) : "0.0",
    _0x1744bc = _0x83fa6e.filter(_0xe1dc9d => _0xe1dc9d.coinLimitExceeded).length;
  console.log("\n╔══════════════════════════════════════════════════════════════════════════════════════╗");
  console.log("║                                   📊 任务结果汇总 📊                                   ║");
  console.log("╠══════════════════════════════════════════════════════════════════════════════════════╣");
  logInfo("║ 账号数: " + _0x83fa6e.length + " | 超限账号: " + _0x1744bc + " | 总任务: " + _0xad4916 + " | 成功率: " + _0x95982f + "% ║");
  logInfo("║ 金币变化: " + _0x47abea + " | 总奖励: " + _0x3dfdb9 + " | 余额变化: " + _0x2f4db1.toFixed(2) + " ║");
  console.log("╠══════════════════════════════════════════════════════════════════════════════════════╣");
  const _0x3b3ee2 = ["序号", "昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x52e75d = [6, 14, 12, 12, 12, 12, 12, 12];
  let _0x4bb84b = "║";
  _0x3b3ee2.forEach((_0x138392, _0x59d21f) => {
    _0x4bb84b += " " + centerAlign(_0x138392, _0x52e75d[_0x59d21f] - 2) + " ║";
  });
  logInfo(_0x4bb84b);
  let _0x35d44a = "╠";
  _0x52e75d.forEach(_0x1a1f67 => {
    _0x35d44a += "═".repeat(_0x1a1f67) + "╣";
  });
  logInfo(_0x35d44a);
  _0x83fa6e.forEach(_0x3522ff => {
    let _0x24045a = "║";
    _0x24045a += " " + centerAlign(_0x3522ff.index.toString(), _0x52e75d[0] - 2) + " ║";
    const _0x217f30 = (_0x3522ff.nickname || "-") + (_0x3522ff.coinLimitExceeded ? " ⚠️" : "");
    _0x24045a += " " + centerAlign(_0x217f30.substring(0, _0x52e75d[1] - 2), _0x52e75d[1] - 2) + " ║";
    _0x24045a += " " + centerAlign(_0x3522ff.initialCoin.toString(), _0x52e75d[2] - 2) + " ║";
    _0x24045a += " " + centerAlign(_0x3522ff.finalCoin.toString(), _0x52e75d[3] - 2) + " ║";
    const _0x481d8e = _0x3522ff.coinChange >= 0 ? "+" + _0x3522ff.coinChange : _0x3522ff.coinChange;
    _0x24045a += " " + centerAlign(_0x481d8e.toString(), _0x52e75d[4] - 2) + " ║";
    _0x24045a += " " + centerAlign(_0x3522ff.initialCash.toString(), _0x52e75d[5] - 2) + " ║";
    _0x24045a += " " + centerAlign(_0x3522ff.finalCash.toString(), _0x52e75d[6] - 2) + " ║";
    const _0x3eec42 = _0x3522ff.cashChange >= 0 ? "+" + _0x3522ff.cashChange.toFixed(2) : _0x3522ff.cashChange.toFixed(2);
    _0x24045a += " " + centerAlign(_0x3eec42, _0x52e75d[7] - 2) + " ║";
    logInfo(_0x24045a);
  });
  console.log("╚══════════════════════════════════════════════════════════════════════════════════════╝");
  logSuccess("任务全部完成");
}
(async () => {
  const _0x5b8c7b = (process.env.km || "").trim();
  !_0x5b8c7b && (logError("未找到 km 环境变量（卡密），无法启动"), process.exit(1));
  logInfo("🔑 查询卡密剩余次数...");
  const _0x572cff = await queryCardRemaining(_0x5b8c7b);
  _0x572cff.code !== 0 && (logError("卡密查询失败: " + _0x572cff.msg + "，停止脚本"), process.exit(1));
  logSuccess("🔑 卡密剩余次数: " + _0x572cff.val);
  _0x572cff.val <= 0 && (logError("卡密次数已用完，停止脚本"), process.exit(1));
  const _0x23a252 = loadAccountsFromEnv();
  logInfo("找到 " + _0x23a252.length + " 个账号");
  !_0x23a252.length && process.exit(1);
  const _0x4a59df = parseInt(process.env.MAX_CONCURRENCY || process.env.CONCURRENCY || "888", 10) || 888,
    _0x10e1a4 = parseInt(process.env.ROUNDS || "35", 10) || 35;
  logInfo("\n并发数: " + _0x4a59df + " | 轮次数: " + _0x10e1a4);
  const _0x47626a = [];
  await concurrentExecute(_0x23a252, _0x4a59df, async _0x1c3c01 => {
    logInfo("\n─── 📱 开始账号[" + _0x1c3c01.index + "]" + (_0x1c3c01.remark ? " (" + _0x1c3c01.remark + ")" : "") + " ───");
    try {
      const _0x2d3516 = await processAccount(_0x1c3c01, _0x10e1a4);
      _0x47626a.push({
        "index": _0x1c3c01.index,
        "remark": _0x1c3c01.remark || "无备注",
        "nickname": _0x2d3516?.["nickname"] || "账号" + _0x1c3c01.index,
        "initialCoin": _0x2d3516?.["initialCoin"] || 0,
        "finalCoin": _0x2d3516?.["finalCoin"] || 0,
        "coinChange": _0x2d3516?.["coinChange"] || 0,
        "initialCash": _0x2d3516?.["initialCash"] || 0,
        "finalCash": _0x2d3516?.["finalCash"] || 0,
        "cashChange": _0x2d3516?.["cashChange"] || 0,
        "stats": _0x2d3516?.["stats"] || {},
        "coinLimitExceeded": _0x2d3516?.["coinLimitExceeded"] || false
      });
    } catch (_0x4ee379) {
      logError("账号[" + _0x1c3c01.index + "] 运行失败: " + _0x4ee379.message);
      _0x47626a.push({
        "index": _0x1c3c01.index,
        "remark": _0x1c3c01.remark || "无备注",
        "nickname": "账号" + _0x1c3c01.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x4ee379.message
      });
    }
  });
  _0x47626a.sort((_0x3f317a, _0x5323e7) => _0x3f317a.index - _0x5323e7.index);
  const _0x52a391 = await queryCardRemaining(_0x5b8c7b);
  if (_0x52a391.code !== 0) {
    logError("最终卡密查询失败: " + _0x52a391.msg);
  } else {
    logSuccess("🔑 卡密剩余次数: " + _0x52a391.val);
    if (_0x52a391.val <= 0) {
      logError("卡密次数已用完");
    }
  }
  logSuccess("所有账号完成");
  logInfo("\n──────────────────────────────────────── 结果汇总 ────────────────────────────────");
  printAccountsSummary(_0x47626a);
})();