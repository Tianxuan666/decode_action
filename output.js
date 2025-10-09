//Thu Oct 09 2025 10:39:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const request = require("request"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
process.noDeprecation = true;
function generateRandomInteractionMessage() {
  const _0x5f0e95 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x5f0e95[Math.floor(Math.random() * _0x5f0e95.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function getTasksToExecute() {
  const _0x3e7a81 = process.env.Task;
  if (!_0x3e7a81) return console.log("未设置Task环境变量，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  const _0x57af1f = _0x3e7a81.split(",").map(_0x477168 => _0x477168.trim().toLowerCase()).filter(Boolean),
    _0x355c57 = ["food", "box", "look"],
    _0x45eba2 = _0x57af1f.filter(_0x591678 => _0x355c57.includes(_0x591678));
  if (_0x45eba2.length === 0) return console.log("Task环境变量中没有有效任务，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  console.log("从Task环境变量中解析到要执行的任务: " + _0x45eba2.join(", "));
  return _0x45eba2;
}
function parseAccountConfig(_0x4ca13f) {
  const _0x44626d = String(_0x4ca13f || "").trim().split("#");
  if (_0x44626d.length < 2) return null;
  const _0x3cba63 = _0x44626d[0],
    _0x1d6403 = _0x44626d.slice(1, _0x44626d.length - (_0x44626d.length >= 3 ? 1 : 0)).join("#");
  let _0x10d08f = null;
  if (_0x44626d.length >= 3) {
    const _0x5c2f83 = _0x44626d[_0x44626d.length - 1].trim();
    if (_0x5c2f83.includes("|")) {
      {
        console.log("开始解析代理格式: " + _0x5c2f83);
        const _0x5301b7 = _0x5c2f83.split("|");
        if (_0x5301b7.length >= 2) {
          {
            const [_0x56461d, _0x4f4c5e, _0x24aa3b, _0x2bdffd] = _0x5301b7;
            _0x10d08f = "socks5://" + _0x24aa3b + ":" + _0x2bdffd + "@" + _0x56461d + ":" + _0x4f4c5e;
          }
        }
      }
    } else {
      _0x10d08f = /^socks5:\/\/.+/i.test(_0x5c2f83) ? _0x5c2f83 : null;
    }
    !_0x10d08f && console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x5c2f83);
  }
  return {
    "salt": _0x1d6403,
    "cookie": _0x3cba63,
    "proxyUrl": _0x10d08f
  };
}
function loadAccountsFromEnv() {
  const _0x26bb9b = [],
    _0x4338d5 = new Set();
  let _0x3b96ab = 0;
  const _0x1dc096 = parseInt(process.env.MAX_KSCK_INDEX || "666", 10) || 666;
  console.log("开始检查 ksck1 到 ksck" + _0x1dc096 + " 环境变量...");
  for (let _0x15819d = 1; _0x15819d <= _0x1dc096; _0x15819d++) {
    {
      const _0x59a3f9 = "ksck" + _0x15819d,
        _0x14f2c1 = process.env[_0x59a3f9];
      if (_0x14f2c1) {
        const _0x41becb = _0x14f2c1.trim();
        if (!_0x4338d5.has(_0x41becb)) {
          {
            const _0x32782a = parseAccountConfig(_0x41becb);
            _0x32782a ? (_0x32782a.index = ++_0x3b96ab, _0x32782a.source = _0x59a3f9, _0x26bb9b.push(_0x32782a), _0x4338d5.add(_0x41becb)) : console.log("⚠️ " + _0x59a3f9 + " 格式错误，忽略: " + _0x41becb);
          }
        } else console.log("⚠️ " + _0x59a3f9 + " 配置重复，忽略: " + _0x41becb);
      }
    }
  }
  const ksckValue = process.env.ksck;
  if (ksckValue) {
    {
      console.log("检测到 ksck 环境变量，解析中...");
      const _0x3dc657 = ksckValue.split("&").map(_0x2eeeda => _0x2eeeda.trim()).filter(Boolean);
      console.log("从 ksck 环境变量中解析到 " + _0x3dc657.length + " 个配置");
      for (const _0x2061da of _0x3dc657) {
        {
          if (!_0x4338d5.has(_0x2061da)) {
            {
              const _0x46d81d = parseAccountConfig(_0x2061da);
              if (_0x46d81d) {
                {
                  _0x46d81d.index = ++_0x3b96ab;
                  _0x46d81d.source = "ksck";
                  _0x26bb9b.push(_0x46d81d);
                  _0x4338d5.add(_0x2061da);
                  console.log("从 ksck 加载配置: " + _0x2061da);
                }
              } else {
                console.log("⚠️ ksck 配置格式错误，忽略: " + _0x2061da);
              }
            }
          } else {
            console.log("⚠️ ksck 配置重复，忽略: " + _0x2061da);
          }
        }
      }
    }
  }
  if (_0x26bb9b.length === 0) {
    console.log("❌ 未找到任何有效的账号配置（检查 ksck 或 ksck1 到 ksck" + _0x1dc096 + "）");
  } else {
    console.log("✅ 共加载 " + _0x26bb9b.length + " 个有效账号配置");
  }
  return _0x26bb9b;
}
const accountConfigs = loadAccountsFromEnv(),
  accountCount = accountConfigs.length,
  tasksToExecute = getTasksToExecute(),
  coinLimitDefault = parseInt(process.env.COIN_LIMIT || "500000", 10) || 500000,
  maxRoundsDefault = parseInt(process.env.ROUNDS || "35", 10) || 35,
  lowRewardThresholdDefault = parseInt(process.env.LOW_REWARD_THRESHOLD || "10", 10) || 10,
  lowRewardLimitDefault = parseInt(process.env.LOW_REWARD_LIMIT || "3", 10) || 3;
console.log("================================================================================");
console.log("                                  ⭐ 快手至尊金币至尊PLUS版 ⭐                                ");
console.log("                            🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        ");
console.log("                            🏆 tg频道 · https://t.me/+4ccNiabMEJkxZDVl 🏆                        ");
console.log("                           🏆 赞助购买https://new.lqfaka.com/shop/IMSZZ90F🏆                       ");
console.log("                           🏆 代理购买5r一月http://www.tianxingip.com/proxy/index/index/code/6350550/p/2457.html🏆                       ");
console.log("================🎉 系统初始化完成，快手至尊金币版启动成功！🎉");
console.log("💎 检测到环境变量配置：" + accountCount + "个账号");
console.log("🎯 将执行以下任务：" + tasksToExecute.join(", "));
console.log("[备注：金币阈值配置为 " + coinLimitDefault + " 金币（COIN_LIMIT=" + (process.env.COIN_LIMIT || "默认") + ")，轮数配置为 " + maxRoundsDefault + " 轮（ROUNDS=" + (process.env.ROUNDS || "默认") + ")，低奖励阈值 " + lowRewardThresholdDefault + " 金币（LOW_REWARD_THRESHOLD=" + (process.env.LOW_REWARD_THRESHOLD || "默认") + ")，低奖励上限 " + lowRewardLimitDefault + " 次（LOW_REWARD_LIMIT=" + (process.env.LOW_REWARD_LIMIT || "默认") + ")]");
accountCount > (process.env.MAX_CONCURRENCY || 999) && (console.log("错误: 检测到 " + accountCount + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || 999) + "个"), process.exit(1));
const baseRemoteUrl = "http://111.170.33.15:11678",
  proxyApiUrl = baseRemoteUrl + "/sign_modified.php",
  queueStatusApiUrl = baseRemoteUrl + "/queue_status";
function generateKuaishouDid() {
  try {
    const _0x2cc2e9 = _0x200eef => {
        const _0x2cd013 = "0123456789abcdef";
        let _0x3186cf = "";
        for (let _0x6bfb2b = 0; _0x6bfb2b < _0x200eef; _0x6bfb2b++) {
          _0x3186cf += _0x2cd013.charAt(Math.floor(Math.random() * _0x2cd013.length));
        }
        return _0x3186cf;
      },
      _0x264ab7 = _0x2cc2e9(16),
      _0x3a7971 = "ANDROID_" + _0x264ab7;
    return _0x3a7971;
  } catch (_0x1695cc) {
    console.log("生成did失败: " + _0x1695cc.message);
    const _0x5e92b6 = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x5e92b6.substring(0, 16);
  }
}
async function sendRequest(_0x1b1d34, _0x15b798 = null, _0x1acf4a = "Unknown Request") {
  const _0x486c0a = {
    ..._0x1b1d34
  };
  if (_0x15b798) try {
    _0x486c0a.agent = new SocksProxyAgent(_0x15b798);
    isDevMode && console.log("[调试] " + _0x1acf4a + " 使用代理: " + _0x15b798);
  } catch (_0x469a17) {
    console.log("[错误] " + _0x1acf4a + " 代理URL无效(" + _0x469a17.message + ")，尝试直连模式");
    isDevMode && console.log("[调试] 代理无效，自动切换到直连模式");
  } else {
    {
      if (isDevMode) {
        console.log("[调试] 未配置代理，使用直连模式");
      }
    }
  }
  if (isDevMode) {
    const _0x326d79 = _0x486c0a.method || "GET";
    console.log("[调试] " + _0x1acf4a + " -> " + _0x326d79 + " " + _0x486c0a.url);
  }
  return new Promise(_0x53a07e => {
    request(_0x486c0a, (_0x220b74, _0x362bc2, _0x36baae) => {
      if (_0x220b74) return _0x220b74.name === "AggregateError" && Array.isArray(_0x220b74.errors) ? console.log("[调试] " + _0x1acf4a + " 请求错误: AggregateError\n" + _0x220b74.errors.map((_0x50774d, _0x5bcaa5) => "  [" + _0x5bcaa5 + "] " + (_0x50774d?.["message"] || _0x50774d)).join("\n")) : console.log("[调试] " + _0x1acf4a + " 请求错误: " + (_0x220b74.message || String(_0x220b74))), _0x53a07e(null);
      if (!_0x362bc2 || _0x362bc2.statusCode !== 200) {
        const _0x3289c8 = _0x362bc2 ? _0x362bc2.statusCode : "无响应";
        console.log("[调试] " + _0x1acf4a + " HTTP状态码异常: " + _0x3289c8);
        return _0x53a07e(null);
      }
      try {
        _0x53a07e(JSON.parse(_0x36baae));
      } catch {
        _0x53a07e(_0x36baae);
      }
    });
  });
}
async function testProxyConnectivity(_0x26bb48, _0x4c2dd2 = "代理连通性检测") {
  if (!_0x26bb48) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x1444fd = await sendRequest({
    "method": "GET",
    "url": "https://ipinfo.io/json",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0x26bb48, _0x4c2dd2 + " → ipinfo.io");
  if (!_0x1444fd) return {
    "ok": false,
    "msg": "❌ 无法通过代理访问 ipinfo.io",
    "ip": ""
  };
  const _0x221d75 = _0x1444fd.ip || _0x1444fd.ip_address || "";
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x221d75 || "未知"),
    "ip": _0x221d75 || "未知"
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x43c751, _0x517678, _0x536bbc = "?") {
  const _0x5cce58 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    _0x100836 = await sendRequest({
      "method": "GET",
      "url": _0x5cce58,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x43c751,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x517678, "账号[" + _0x536bbc + "] 获取基本信息");
  if (_0x100836 && _0x100836.result === 1 && _0x100836.data) return {
    "nickname": _0x100836.data.userData?.["nickname"] || null,
    "totalCoin": _0x100836.data.totalCoin ?? null,
    "allCash": _0x100836.data.allCash ?? null
  };
  return null;
}
function centerAlign(_0x396a8c, _0x3a52db) {
  _0x396a8c = String(_0x396a8c);
  if (_0x396a8c.length >= _0x3a52db) {
    return _0x396a8c.substring(0, _0x3a52db);
  }
  const _0x48a783 = _0x3a52db - _0x396a8c.length,
    _0x4b3ba9 = Math.floor(_0x48a783 / 2),
    _0x432b46 = _0x48a783 - _0x4b3ba9;
  return " ".repeat(_0x4b3ba9) + _0x396a8c + " ".repeat(_0x432b46);
}
class KuaishouAdTask {
  constructor({
    index: _0x206986,
    salt: _0x59df0c,
    cookie: _0x1cf3f7,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"]
  }) {
    this.index = _0x206986;
    this.salt = _0x59df0c;
    this.cookie = _0x1cf3f7;
    this.nickname = nickname || "账号" + _0x206986;
    this.proxyUrl = proxyUrl;
    this.coinLimit = parseInt(process.env.COIN_LIMIT || "500000", 10) || 500000;
    this.lowRewardThreshold = parseInt(process.env.LOW_REWARD_THRESHOLD || "10", 10) || 10;
    this.lowRewardLimit = parseInt(process.env.LOW_REWARD_LIMIT || "3", 10) || 3;
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
    this.tasksToExecute.forEach(_0x22efd9 => {
      this.taskConfigs[_0x22efd9] && (this.taskStats[_0x22efd9] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x5913e5 => {
      this.taskConfigs[_0x5913e5] && (this.taskLimitReached[_0x5913e5] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      {
        const _0x1d87cc = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
        if (_0x1d87cc && _0x1d87cc.totalCoin) {
          {
            const _0x3f905a = parseInt(_0x1d87cc.totalCoin);
            if (_0x3f905a >= this.coinLimit) return console.log("⚠️ 账号[" + this.nickname + "] 金币已达 " + _0x3f905a + "，超过 " + this.coinLimit + " 阈值，将停止任务 [备注：超过金币阈值（COIN_LIMIT=" + (process.env.COIN_LIMIT || "默认500000") + ")]"), this.coinExceeded = true, this.stopAllTasks = true, true;
          }
        }
        return false;
      }
    } catch (_0x2a2e90) {
      console.log("账号[" + this.nickname + "] 金币检查异常: " + _0x2a2e90.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0x57c7a9 = this.cookie.match(/egid=([^;]+)/),
          _0x2717b9 = this.cookie.match(/did=([^;]+)/),
          _0x5f44d6 = this.cookie.match(/userId=([^;]+)/),
          _0xb9e3ff = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x37bfea = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x57c7a9 ? _0x57c7a9[1] : "";
        this.did = _0x2717b9 ? _0x2717b9[1] : "";
        this.userId = _0x5f44d6 ? _0x5f44d6[1] : "";
        this.kuaishouApiSt = _0xb9e3ff ? _0xb9e3ff[1] : "";
        this.appver = _0x37bfea ? _0x37bfea[1] : "13.7.20.10468";
        (!this.egid || !this.did) && console.log("账号[" + this.nickname + "] cookie格式可能无 egid 或 did，但继续尝试...");
      }
    } catch (_0x146a68) {
      console.log("账号[" + this.nickname + "] 解析cookie失败: " + _0x146a68.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "] 任务执行统计:");
    for (const [_0x272836, _0x2ff5ac] of Object.entries(this.taskStats)) {
      const _0x3499ba = this.taskConfigs[_0x272836].name;
      console.log("  " + _0x3499ba + ": 成功" + _0x2ff5ac.success + "次, 失败" + _0x2ff5ac.failed + "次, 总奖励" + _0x2ff5ac.totalReward + "金币");
    }
  }
  async ["retryOperation"](_0x3f98ea, _0x510a9d, _0x4390b0 = 3, _0x5a00ea = 2000) {
    let _0x1228d9 = 0,
      _0x317eb3 = null;
    while (_0x1228d9 < _0x4390b0) {
      try {
        const _0x4f849c = await _0x3f98ea();
        if (_0x4f849c) {
          return _0x4f849c;
        }
        _0x317eb3 = new Error(_0x510a9d + " 返回空结果");
      } catch (_0x34630c) {
        _0x317eb3 = _0x34630c;
        console.log("账号[" + this.nickname + "] " + _0x510a9d + " 异常: " + _0x34630c.message);
      }
      _0x1228d9++;
      _0x1228d9 < _0x4390b0 && (console.log("账号[" + this.nickname + "] " + _0x510a9d + " 失败，重试 " + _0x1228d9 + "/" + _0x4390b0), await new Promise(_0x757710 => setTimeout(_0x757710, _0x5a00ea)));
    }
    if (isDevMode && _0x317eb3) {
      console.log("[调试] " + _0x510a9d + " 最终失败: " + _0x317eb3.message);
    }
    return null;
  }
  async ["getAdInfo"](_0x4fea2c) {
    try {
      {
        const _0x478c45 = "/rest/e/reward/mixed/ad",
          _0x5a5ec3 = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "2ac2a76d",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x55c7b9 = {
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
          _0x4e6b24 = {
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
              "subPageId": _0x4fea2c.subPageId,
              "action": 0,
              "browseType": 3,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x403755 = Buffer.from(JSON.stringify(_0x4e6b24)).toString("base64"),
          _0x2580bf = await this.generateSignature2(_0x478c45, querystring.stringify({
            ..._0x55c7b9,
            ..._0x5a5ec3
          }), this.salt, _0x403755);
        if (!_0x2580bf) return console.log("❌ 账号[" + this.nickname + "] 生成签名失败，无法获取" + _0x4fea2c.name), null;
        const _0x2a51d5 = {
          ..._0x55c7b9,
          "sig": _0x2580bf.sig,
          "__NS_sig3": _0x2580bf.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0x2580bf.__NStokensig
        };
        _0x5a5ec3.encData = _0x2580bf.encData;
        _0x5a5ec3.sign = _0x2580bf.sign;
        const _0x34636d = "https://api.e.kuaishou.com" + _0x478c45 + "?" + querystring.stringify(_0x2a51d5),
          _0x3d8187 = await sendRequest({
            "method": "POST",
            "url": _0x34636d,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
            },
            "form": _0x5a5ec3,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "] 获取广告");
        if (!_0x3d8187) return null;
        if (_0x3d8187.errorMsg === "OK" && _0x3d8187.feeds && _0x3d8187.feeds[0] && _0x3d8187.feeds[0].ad) {
          const _0x4e8300 = _0x3d8187.feeds[0].caption || _0x3d8187.feeds[0].ad?.["caption"] || "";
          _0x4e8300 && console.log("✅ 账号[" + this.nickname + "] 成功获取到广告信息：" + _0x4e8300);
          const _0x411570 = _0x3d8187.feeds[0].exp_tag || "",
            _0x3542f9 = _0x411570.split("/")[1]?.["split"]("_")?.[0] || "";
          return {
            "cid": _0x3d8187.feeds[0].ad.creativeId,
            "llsid": _0x3542f9
          };
        }
        if (isDevMode) {
          console.log("[调试] getAdInfo 原始响应:", JSON.stringify(_0x3d8187));
        }
        return null;
      }
    } catch (_0x56bd5a) {
      console.log("❌ 账号[" + this.nickname + "] 获取广告异常: " + _0x56bd5a.message);
      return null;
    }
  }
  async ["generateSignature"](_0x337fbe, _0x1fa4bd, _0x34c483, _0x29ad9e) {
    try {
      {
        const _0x58b241 = JSON.stringify({
            "businessId": _0x29ad9e.businessId,
            "endTime": this.endTime,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": [{
              "creativeId": _0x337fbe,
              "extInfo": "",
              "llsid": _0x1fa4bd,
              "requestSceneType": _0x29ad9e.requestSceneType,
              "taskType": _0x29ad9e.taskType,
              "watchExpId": "",
              "watchStage": 0
            }],
            "pageId": 11101,
            "posId": _0x29ad9e.posId,
            "reportType": 0,
            "sessionId": "",
            "startTime": this.startTime,
            "subPageId": _0x29ad9e.subPageId
          }),
          _0x450169 = "bizStr=" + encodeURIComponent(_0x58b241) + "&cs=false&client_key=2ac2a76d",
          _0x3b8a96 = this.queryParams + "&" + _0x450169,
          _0x36ca89 = await this.requestSignService({
            "urlpath": this.taskReportPath,
            "urldata": _0x3b8a96,
            "api_client_salt": this.salt
          }, "账号[" + this.nickname + "] 生成报告签名");
        if (!_0x36ca89 || !_0x36ca89.data) {
          return null;
        }
        return {
          "sig": _0x36ca89.data.sig,
          "sig3": _0x36ca89.data.__NS_sig3,
          "sigtoken": _0x36ca89.data.__NStokensig,
          "post": _0x450169
        };
      }
    } catch (_0x458fc7) {
      console.log("❌ 账号[" + this.nickname + "] 生成签名异常: " + _0x458fc7.message);
      return null;
    }
  }
  async ["generateSignature2"](_0x485142, _0x351fdb, _0xc7e882, _0x1ea3a2) {
    const _0x58b859 = await this.requestSignService({
      "urlpath": _0x485142,
      "urldata": _0x351fdb,
      "api_client_salt": _0xc7e882,
      "req_str": _0x1ea3a2
    }, "账号[" + this.nickname + "] 生成广告签名");
    if (!_0x58b859) return null;
    return _0x58b859.data || _0x58b859;
  }
  async ["submitReport"](_0x276461, _0x3985df, _0x39cee8, _0xba709f, _0x4945ee, _0xb4cd35) {
    try {
      const _0x9ed0cc = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x276461 + "&__NS_sig3=" + _0x3985df + "&__NS_xfalcon=&__NStokensig=" + _0x39cee8),
        _0x586af4 = await sendRequest({
          "method": "POST",
          "url": _0x9ed0cc,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": this.cookie,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0xba709f,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "] 提交任务");
      if (!_0x586af4) {
        return {
          "success": false,
          "reward": 0
        };
      }
      if (_0x586af4.result === 1) {
        const _0x2bb6ee = _0x586af4.data?.["neoAmount"] || 0;
        console.log("💰 账号[" + this.nickname + "] " + _0xb4cd35.name + _0x2bb6ee + "金币奖励！");
        if (_0x2bb6ee <= this.lowRewardThreshold) {
          this.lowRewardStreak++;
          console.log("⚠️ 账号[" + this.nickname + "] [备注：奖励低于 LOW_REWARD_THRESHOLD=" + this.lowRewardThreshold + "] 金币低于阈值, 模拟下载应用提升权重^^^^^^");
          this.did = generateKuaishouDid();
          this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务 [备注：连续低奖励达到上限 LOW_REWARD_LIMIT=" + this.lowRewardLimit + "]"), this.stopAllTasks = true);
        } else this.lowRewardStreak = 0;
        return {
          "success": true,
          "reward": _0x2bb6ee
        };
      }
      if ([20107, 20108, 1003, 415].includes(_0x586af4.result)) return console.log("⚠️ 账号[" + this.nickname + "] " + _0xb4cd35.name + " 已达上限"), this.taskLimitReached[_0x4945ee] = true, {
        "success": false,
        "reward": 0
      };
      console.log("❌ 账号[" + this.nickname + "] " + _0xb4cd35.name + " 奖励失败，result=" + _0x586af4.result + " msg=" + (_0x586af4.data || ""));
      isDevMode && console.log("[调试] submitReport 原始响应:", JSON.stringify(_0x586af4));
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x5751b3) {
      console.log("❌ 账号[" + this.nickname + "] 提交任务异常: " + _0x5751b3.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["requestSignService"](_0x2b6f76, _0x3c8c06) {
    const _0x37565f = (process.env.km || "").trim();
    if (!_0x37565f) {
      return null;
    }
    const _0x45336e = await sendRequest({
      "method": "POST",
      "url": proxyApiUrl + "?card_key=" + encodeURIComponent(_0x37565f),
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": _0x37565f
      },
      "body": JSON.stringify(_0x2b6f76),
      "timeout": 15000
    }, null, _0x3c8c06 + "（签名服务）");
    if (!_0x45336e) return null;
    if (_0x45336e.success && _0x45336e.status === "queued" && _0x45336e.queue_id) {
      {
        const _0x259655 = await this.pollQueueStatus(_0x45336e.queue_id);
        if (_0x259655 && _0x259655.success && (_0x259655.status === "completed" || _0x259655.status === "processed")) return _0x259655;
        console.log("账号[" + this.nickname + "] 签名失败: " + (_0x259655?.["error"] || _0x259655?.["status"] || "未知"));
        return null;
      }
    }
    if (_0x45336e.success && (!_0x45336e.status || _0x45336e.status === "processed" || _0x45336e.status === "completed")) {
      return _0x45336e;
    }
    console.log("账号[" + this.nickname + "] 签名失败: " + (_0x45336e.error || _0x45336e.message || _0x45336e.status || "未知"));
    return null;
  }
  async ["pollQueueStatus"](_0x5a1475, _0x337ba4 = 30000, _0x38746a = 2000) {
    const _0x5c853a = Date.now();
    while (Date.now() - _0x5c853a < _0x337ba4) {
      const _0x3dcf66 = await sendRequest({
        "method": "GET",
        "url": queueStatusApiUrl + "?queue_id=" + encodeURIComponent(_0x5a1475),
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 10000
      }, null, "账号[" + this.nickname + "] 签名排队");
      if (_0x3dcf66?.["success"]) {
        if (_0x3dcf66.status === "completed" || _0x3dcf66.status === "processed") return _0x3dcf66;
        if (_0x3dcf66.status === "failed") {
          return _0x3dcf66;
        }
      }
      await new Promise(_0x1a758f => setTimeout(_0x1a758f, _0x38746a));
    }
    return {
      "success": false,
      "status": "failed",
      "error": "queue_timeout"
    };
  }
  async ["executeTask"](_0x2602d6) {
    const _0x9a9b7 = this.taskConfigs[_0x2602d6];
    if (!_0x9a9b7) return console.log("❌ 账号[" + this.nickname + "] 未知任务: " + _0x2602d6), false;
    if (this.taskLimitReached[_0x2602d6]) {
      return false;
    }
    try {
      const _0x23f6c8 = await this.retryOperation(() => this.getAdInfo(_0x9a9b7), "获取" + _0x9a9b7.name + "信息", 3);
      if (!_0x23f6c8) return this.taskStats[_0x2602d6].failed++, false;
      const _0x3c7fde = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "] ==>" + _0x9a9b7.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x3c7fde / 1000) + " 秒");
      await new Promise(_0x209483 => setTimeout(_0x209483, _0x3c7fde));
      const _0x2e45a5 = await this.retryOperation(() => this.generateSignature(_0x23f6c8.cid, _0x23f6c8.llsid, _0x2602d6, _0x9a9b7), "生成" + _0x9a9b7.name + "签名", 3);
      if (!_0x2e45a5) return this.taskStats[_0x2602d6].failed++, false;
      const _0x1ed48f = await this.retryOperation(() => this.submitReport(_0x2e45a5.sig, _0x2e45a5.sig3, _0x2e45a5.sigtoken, _0x2e45a5.post, _0x2602d6, _0x9a9b7), "提交" + _0x9a9b7.name + "报告", 3);
      if (_0x1ed48f?.["success"]) return this.taskStats[_0x2602d6].success++, this.taskStats[_0x2602d6].totalReward += _0x1ed48f.reward || 0, true;
      this.taskStats[_0x2602d6].failed++;
      return false;
    } catch (_0x170536) {
      console.log("❌ 账号[" + this.nickname + "] 任务异常(" + _0x2602d6 + "): " + _0x170536.message);
      this.taskStats[_0x2602d6].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x12b60a = {};
    for (const _0x175de8 of this.tasksToExecute) {
      {
        if (this.stopAllTasks) break;
        if (!this.taskConfigs[_0x175de8]) {
          console.log("⚠️ 账号[" + this.nickname + "] 跳过未知任务: " + _0x175de8);
          continue;
        }
        console.log("🚀 账号[" + this.nickname + "] 开始任务：" + this.taskConfigs[_0x175de8].name);
        _0x12b60a[_0x175de8] = await this.executeTask(_0x175de8);
        if (this.stopAllTasks) {
          break;
        }
        if (_0x175de8 !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
          const _0x3a4156 = Math.floor(Math.random() * 8000) + 7000;
          console.log("⏱ 账号[" + this.nickname + "] 下一个任务，随机等待 " + Math.round(_0x3a4156 / 1000) + " 秒");
          await new Promise(_0x228b1f => setTimeout(_0x228b1f, _0x3a4156));
        }
      }
    }
    return _0x12b60a;
  }
}
async function concurrentExecute(_0x34ee5b, _0x59c6dd, _0x1417d5) {
  const _0x423f63 = new Array(_0x34ee5b.length);
  let _0x40dc7a = 0;
  async function _0x278ac6() {
    while (true) {
      const _0x36d86c = _0x40dc7a++;
      if (_0x36d86c >= _0x34ee5b.length) {
        return;
      }
      const _0x2c1620 = _0x34ee5b[_0x36d86c];
      try {
        _0x423f63[_0x36d86c] = await _0x1417d5(_0x2c1620, _0x36d86c);
      } catch (_0x13fcde) {
        console.log("并发执行异常（index=" + (_0x36d86c + 1) + "）：" + _0x13fcde.message);
        _0x423f63[_0x36d86c] = null;
      }
    }
  }
  const _0x5e9a55 = Array.from({
    "length": Math.min(_0x59c6dd, _0x34ee5b.length)
  }, _0x278ac6);
  await Promise.all(_0x5e9a55);
  return _0x423f63;
}
async function processAccount(_0x2a5af2, _0x51f805 = maxRoundsDefault) {
  console.log("账号[" + _0x2a5af2.index + "]" + (_0x2a5af2.remark ? "（" + _0x2a5af2.remark + "）" : "") + " [备注：本账号将执行最多 " + _0x51f805 + " 轮任务]");
  if (_0x2a5af2.proxyUrl) {
    {
      console.log("账号[" + _0x2a5af2.index + "]" + (_0x2a5af2.remark ? "（" + _0x2a5af2.remark + "）" : "") + " 🔌 测试代理连接中...");
      const _0x3d8fa1 = await testProxyConnectivity(_0x2a5af2.proxyUrl, "账号[" + _0x2a5af2.index + "]");
      console.log("  - " + (_0x3d8fa1.ok ? "✅ 代理验证通过，IP: " + _0x3d8fa1.ip : "❌ 代理验证失败") + ": " + _0x3d8fa1.msg);
      _0x3d8fa1.ok && _0x3d8fa1.ip && _0x3d8fa1.ip !== "localhost" && (usedProxies.has(_0x3d8fa1.ip) && (console.log("\n⚠️ 存在相同代理IP（" + _0x3d8fa1.ip + "），请立即检查！"), process.exit(1)), usedProxies.add(_0x3d8fa1.ip));
    }
  } else console.log("账号[" + _0x2a5af2.index + "] 未配置代理，走直连");
  console.log("账号[" + _0x2a5af2.index + "]" + (_0x2a5af2.remark ? "（" + _0x2a5af2.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x3edb9e = await getAccountBasicInfo(_0x2a5af2.cookie, _0x2a5af2.proxyUrl, _0x2a5af2.index),
    _0x346244 = _0x3edb9e?.["nickname"] || "账号" + _0x2a5af2.index;
  if (_0x3edb9e) {
    {
      const _0x352245 = _0x3edb9e.totalCoin != null ? _0x3edb9e.totalCoin : "未知",
        _0x37e223 = _0x3edb9e.allCash != null ? _0x3edb9e.allCash : "未知";
      console.log("账号[" + _0x346244 + "] ✅ 登录成功，💰 当前金币: " + _0x352245 + "，💸 当前余额: " + _0x37e223);
    }
  } else console.log("账号[" + _0x346244 + "] ❌ 基本信息获取失败，继续执行");
  const _0x42da60 = new KuaishouAdTask({
    ..._0x2a5af2,
    "nickname": _0x346244,
    "tasksToExecute": tasksToExecute
  });
  await _0x42da60.checkCoinLimit();
  if (_0x42da60.coinExceeded) {
    {
      console.log("账号[" + _0x42da60.nickname + "] 初始金币已超过阈值，不执行任务");
      const _0x1022d4 = await getAccountBasicInfo(_0x2a5af2.cookie, _0x2a5af2.proxyUrl, _0x2a5af2.index),
        _0x50425b = _0x3edb9e?.["totalCoin"] || 0,
        _0x58aa01 = _0x1022d4?.["totalCoin"] || 0,
        _0x37de26 = _0x58aa01 - _0x50425b,
        _0x19994f = _0x3edb9e?.["allCash"] || 0,
        _0x168ab1 = _0x1022d4?.["allCash"] || 0,
        _0x4c8b2a = _0x168ab1 - _0x19994f;
      return {
        "index": _0x2a5af2.index,
        "nickname": _0x346244,
        "initialCoin": _0x50425b,
        "finalCoin": _0x58aa01,
        "coinChange": _0x37de26,
        "initialCash": _0x19994f,
        "finalCash": _0x168ab1,
        "cashChange": _0x4c8b2a,
        "stats": _0x42da60.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  for (let _0x4da959 = 0; _0x4da959 < _0x51f805; _0x4da959++) {
    const _0x4b8678 = Math.floor(Math.random() * 8000) + 8000;
    console.log("账号[" + _0x42da60.nickname + "] ⌛ 第" + (_0x4da959 + 1) + "轮，先随机等待 " + Math.round(_0x4b8678 / 1000) + " 秒");
    await new Promise(_0x3075ac => setTimeout(_0x3075ac, _0x4b8678));
    console.log("账号[" + _0x42da60.nickname + "] 🚀 开始第" + (_0x4da959 + 1) + "轮任务");
    const _0x1cc223 = await _0x42da60.executeAllTasksByPriority();
    if (Object.values(_0x1cc223).some(Boolean)) {
      console.log("账号[" + _0x42da60.nickname + "] ✅ 第" + (_0x4da959 + 1) + "轮执行完成");
    } else console.log("账号[" + _0x42da60.nickname + "] ⚠️ 第" + (_0x4da959 + 1) + "轮没有成功任务");
    if (_0x42da60.stopAllTasks) {
      console.log("账号[" + _0x42da60.nickname + "] 🏁 达到停止条件，终止后续轮次");
      break;
    }
    if (_0x4da959 < _0x51f805 - 1) {
      {
        const _0x39887c = Math.floor(Math.random() * 10000) + 10000;
        console.log("账号[" + _0x42da60.nickname + "] ⌛ 等待 " + Math.round(_0x39887c / 1000) + " 秒进入下一轮");
        await new Promise(_0x269480 => setTimeout(_0x269480, _0x39887c));
      }
    }
  }
  const _0x298e2f = await getAccountBasicInfo(_0x2a5af2.cookie, _0x2a5af2.proxyUrl, _0x2a5af2.index),
    _0xe8f65f = _0x3edb9e?.["totalCoin"] || 0,
    _0x449284 = _0x298e2f?.["totalCoin"] || 0,
    _0x3cb4f6 = _0x449284 - _0xe8f65f,
    _0xa5da79 = _0x3edb9e?.["allCash"] || 0,
    _0x59fac7 = _0x298e2f?.["allCash"] || 0,
    _0x5492b4 = _0x59fac7 - _0xa5da79;
  _0x42da60.printTaskStats();
  return {
    "index": _0x2a5af2.index,
    "nickname": _0x346244,
    "initialCoin": _0xe8f65f,
    "finalCoin": _0x449284,
    "coinChange": _0x3cb4f6,
    "initialCash": _0xa5da79,
    "finalCash": _0x59fac7,
    "cashChange": _0x5492b4,
    "stats": _0x42da60.getTaskStats(),
    "coinLimitExceeded": _0x42da60.coinExceeded
  };
}
function printAccountsSummary(_0x123830) {
  if (!_0x123830.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x190b75 = _0x123830.reduce((_0x17cf48, _0x441783) => {
      return _0x17cf48 + (parseInt(_0x441783.initialCoin) || 0);
    }, 0),
    _0x563810 = _0x123830.reduce((_0xb8c1d0, _0x2ce156) => {
      return _0xb8c1d0 + (parseInt(_0x2ce156.finalCoin) || 0);
    }, 0),
    _0x382c7e = _0x563810 - _0x190b75,
    _0x37dcb0 = _0x123830.reduce((_0x3a1e4b, _0x483688) => {
      return _0x3a1e4b + (parseFloat(_0x483688.initialCash) || 0);
    }, 0),
    _0x22a096 = _0x123830.reduce((_0xaf51d1, _0x3c6d0d) => {
      return _0xaf51d1 + (parseFloat(_0x3c6d0d.finalCash) || 0);
    }, 0),
    _0x40d9b9 = _0x22a096 - _0x37dcb0;
  let _0x1ba95 = 0,
    _0xa762a6 = 0,
    _0x4de46d = 0;
  _0x123830.forEach(_0x473549 => {
    _0x473549.stats && Object.values(_0x473549.stats).forEach(_0x11ba8d => {
      _0x1ba95 += _0x11ba8d.success + _0x11ba8d.failed;
      _0xa762a6 += _0x11ba8d.success;
      _0x4de46d += _0x11ba8d.totalReward;
    });
  });
  const _0x27ba74 = _0x1ba95 > 0 ? (_0xa762a6 / _0x1ba95 * 100).toFixed(1) : "0.0",
    _0x3126d6 = _0x123830.filter(_0x36a499 => _0x36a499.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x123830.length).padEnd(22) + ("超过金币阈值账号: " + _0x3126d6).padEnd(22) + ("总任务数: " + _0x1ba95).padEnd(22) + ("任务成功率: " + _0x27ba74 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x382c7e).padEnd(26) + ("总金币奖励: " + _0x4de46d).padEnd(26) + ("总余额变化: " + _0x40d9b9.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x3a7a79 = ["序号", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x4657ce = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0x3f9c08 = "|";
  _0x3a7a79.forEach((_0xabda6f, _0x50df3c) => {
    _0x3f9c08 += centerAlign(_0xabda6f, _0x4657ce[_0x50df3c]) + "|";
  });
  console.log(_0x3f9c08);
  let _0xe6eb72 = "|";
  _0x4657ce.forEach(_0x3e86f3 => {
    _0xe6eb72 += "-".repeat(_0x3e86f3) + "|";
  });
  console.log(_0xe6eb72);
  _0x123830.forEach(_0x592e52 => {
    {
      let _0x1746ee = "|";
      _0x1746ee += centerAlign(_0x592e52.index, _0x4657ce[0]) + "|";
      const _0x45c9c1 = (_0x592e52.nickname || "-") + (_0x592e52.coinLimitExceeded ? " ⚠️" : "");
      _0x1746ee += centerAlign(_0x45c9c1.substring(0, _0x4657ce[1] - 2), _0x4657ce[1]) + "|";
      _0x1746ee += centerAlign(_0x592e52.initialCoin, _0x4657ce[2]) + "|";
      _0x1746ee += centerAlign(_0x592e52.finalCoin, _0x4657ce[3]) + "|";
      const _0x458376 = _0x592e52.coinChange >= 0 ? "+" + _0x592e52.coinChange : _0x592e52.coinChange;
      _0x1746ee += centerAlign(_0x458376, _0x4657ce[4]) + "|";
      _0x1746ee += centerAlign(_0x592e52.initialCash, _0x4657ce[5]) + "|";
      _0x1746ee += centerAlign(_0x592e52.finalCash, _0x4657ce[6]) + "|";
      const _0x250cd1 = _0x592e52.cashChange >= 0 ? "+" + _0x592e52.cashChange.toFixed(2) : _0x592e52.cashChange.toFixed(2);
      _0x1746ee += centerAlign(_0x250cd1, _0x4657ce[7]) + "|";
      console.log(_0x1746ee);
    }
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0x3d2059 = loadAccountsFromEnv();
  console.log("共找到 " + _0x3d2059.length + " 个有效账号");
  !_0x3d2059.length && process.exit(1);
  const _0x294747 = parseInt(process.env.MAX_CONCURRENCY || process.env.CONCURRENCY || "888", 10) || 888,
    _0x169ba3 = parseInt(process.env.ROUNDS || "35", 10) || 35;
  console.log("\n防黑并发：" + _0x294747 + "    防黑轮数：" + _0x169ba3 + "\n");
  const _0x58b11e = [];
  await concurrentExecute(_0x3d2059, _0x294747, async _0x5a8669 => {
    {
      console.log("\n—— 🚀 开始账号[" + _0x5a8669.index + "]" + (_0x5a8669.remark ? "（" + _0x5a8669.remark + "）" : "") + " ——");
      try {
        const _0x5531ad = await processAccount(_0x5a8669, _0x169ba3);
        _0x58b11e.push({
          "index": _0x5a8669.index,
          "remark": _0x5a8669.remark || "无备注",
          "nickname": _0x5531ad?.["nickname"] || this.nickname,
          "initialCoin": _0x5531ad?.["initialCoin"] || 0,
          "finalCoin": _0x5531ad?.["finalCoin"] || 0,
          "coinChange": _0x5531ad?.["coinChange"] || 0,
          "initialCash": _0x5531ad?.["initialCash"] || 0,
          "finalCash": _0x5531ad?.["finalCash"] || 0,
          "cashChange": _0x5531ad?.["cashChange"] || 0,
          "stats": _0x5531ad?.["stats"] || {},
          "coinLimitExceeded": _0x5531ad?.["coinLimitExceeded"] || false
        });
      } catch (_0x5eba95) {
        console.log("账号[" + _0x5a8669.index + "] ❌ 执行异常：" + _0x5eba95.message);
        _0x58b11e.push({
          "index": _0x5a8669.index,
          "remark": _0x5a8669.remark || "无备注",
          "nickname": this.nickname,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": _0x5eba95.message
        });
      }
    }
  });
  _0x58b11e.sort((_0x5d254d, _0x4144fd) => _0x5d254d.index - _0x4144fd.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  printAccountsSummary(_0x58b11e);
})();