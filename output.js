//Sat Nov 22 2025 04:59:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const fs = require("fs").promises;
const crypto = require("crypto");
const axios = require("axios");
const https = require("https");
const {
  parse,
  format,
  isSameMonth,
  isToday
} = require("date-fns");
const {
  URL,
  URLSearchParams
} = require("url");
const chinaTelecomAccount = process.env.chinaTelecomAccount || "";
const loadTokenFile = "./chinaTelecom_cache.json";
let loadToken = {};
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const currentMonthDays = new Date(currentYear, currentMonth, 0).getDate();
const today = currentDate;
async function sendWxpusherNotification(_0x4c8dbb, _0x12ee1b, _0x315651) {
  const _0x38afd2 = process.env.WXPUSHER_APP_TOKEN || "";
  const _0x293480 = process.env.WXPUSHER_UID || "";
  const _0x5da6a2 = "https://wxpusher.zjiecode.com/api/send/message";
  try {
    {
      const _0x115d5e = {
        appToken: _0x38afd2,
        content: _0x315651,
        summary: _0x12ee1b,
        contentType: 2,
        uids: [_0x293480],
        title: _0x4c8dbb
      };
      const _0xce6365 = await axios.post(_0x5da6a2, _0x115d5e);
      return _0xce6365.data;
    }
  } catch (_0x201ea8) {
    {
      console.error("推送失败:", _0x201ea8.message);
      const _0x413d0a = {
        success: false,
        msg: _0x201ea8.message
      };
      return _0x413d0a;
    }
  }
}
const _0x2de00d = {
  length: currentMonthDays
};
const dailySummary = Array.from(_0x2de00d, () => []);
const phoneSummary = {};
const typeSummary = {};
let recordCounter = 0;
let htmlContent = "";
const des3Key = Buffer.from("1234567`90koiuyhgtfrdews");
const des3Iv = Buffer.alloc(8, 0);
const publicKeyB64 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB\n-----END PUBLIC KEY-----";
const publicKeyData = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB\n-----END PUBLIC KEY-----";
const _0xdede9a = {
  ciphers: "DEFAULT@SECLEVEL=1",
  rejectUnauthorized: false
};
const httpsAgent = new https.Agent(_0xdede9a);
const _0x361835 = {
  "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36"
};
const _0x201a3f = {
  httpsAgent: httpsAgent,
  headers: _0x361835,
  timeout: 30000
};
const axiosInstance = axios.create(_0x201a3f);
function extractAmount(_0x56a59d, _0x307aa7) {
  const _0x3d0881 = _0x56a59d.match(/(\d+(?:\.\d+)?)元话费/);
  if (_0x3d0881) {
    {
      return parseFloat(_0x3d0881[1]);
    }
  }
  const _0x166637 = _0x56a59d.match(/(\d+(?:\.\d+)?)/);
  return _0x166637 ? parseFloat(_0x166637[0]) : 0;
}
async function addRechargeRecord(_0x2fc122, _0x47b2fb, _0x2a51af, _0x238906) {
  try {
    {
      let _0xc40876;
      try {
        {
          _0xc40876 = parse(_0x2fc122, "yyyy-MM-dd HH:mm:ss", new Date());
          if (isNaN(_0xc40876.getTime())) {
            {
              _0xc40876 = new Date(_0x2fc122);
            }
          }
        }
      } catch (_0x2d7d63) {
        {
          console.log("时间解析失败: " + _0x2fc122);
          return;
        }
      }
      if (_0xc40876.getFullYear() !== currentYear || _0xc40876.getMonth() + 1 !== currentMonth) {
        {
          return;
        }
      }
      const _0x7e8cf5 = extractAmount(_0x47b2fb, _0x238906);
      let _0x2ed6ce = _0x238906;
      if (_0x238906 === "金豆抢兑") {
        {
          if (_0x7e8cf5 === 0.5) {
            _0x2ed6ce = "金豆抢兑_0.5元";
          } else {
            if (_0x7e8cf5 === 1) {
              _0x2ed6ce = "金豆抢兑_1元";
            } else {
              if (_0x7e8cf5 === 5) {
                _0x2ed6ce = "金豆抢兑_5元";
              } else {
                if (_0x7e8cf5 === 10) {
                  _0x2ed6ce = "金豆抢兑_10元";
                } else {
                  _0x2ed6ce = "金豆抢兑_其他";
                }
              }
            }
          }
        }
      }
      recordCounter++;
      const _0x2f0728 = [_0xc40876, _0x47b2fb, _0x2a51af, _0x2ed6ce, recordCounter, _0x7e8cf5];
      const _0x4abd89 = _0xc40876.getDate() - 1;
      dailySummary[_0x4abd89].push(_0x2f0728);
      !phoneSummary[_0x2a51af] && (phoneSummary[_0x2a51af] = []);
      phoneSummary[_0x2a51af].push(_0x2f0728);
      if (!typeSummary[_0x2ed6ce]) {
        {
          typeSummary[_0x2ed6ce] = [];
        }
      }
      typeSummary[_0x2ed6ce].push(_0x2f0728);
    }
  } catch (_0x9b9b6f) {
    {
      console.error("添加记录失败:", _0x9b9b6f);
    }
  }
}
function calculateSummary() {
  const _0x3d7076 = {};
  dailySummary.forEach((_0x598b90, _0x3a60b9) => {
    {
      _0x3d7076[_0x3a60b9 + 1] = _0x598b90.reduce((_0x1b9960, _0x2599c4) => _0x1b9960 + _0x2599c4[5], 0);
    }
  });
  const _0x1db105 = {};
  const _0x55a7f7 = {};
  Object.entries(typeSummary).forEach(([_0x1e160, _0x3790f4]) => {
    {
      _0x1db105[_0x1e160] = _0x3790f4.reduce((_0x25e7c6, _0x24ac91) => _0x25e7c6 + _0x24ac91[5], 0);
      _0x55a7f7[_0x1e160] = _0x3790f4.length;
    }
  });
  const _0x25e121 = {};
  Object.entries(phoneSummary).forEach(([_0xeb8b82, _0x38b723]) => {
    {
      _0x25e121[_0xeb8b82] = _0x38b723.reduce((_0x14857e, _0x410fb6) => _0x14857e + _0x410fb6[5], 0);
    }
  });
  const _0x38b917 = Object.values(_0x3d7076).reduce((_0x31b9fd, _0x10625d) => _0x31b9fd + _0x10625d, 0);
  const _0x192142 = {
    dailySums: _0x3d7076,
    typeSums: _0x1db105,
    typeCounts: _0x55a7f7,
    phoneSums: _0x25e121,
    monthlyTotal: _0x38b917
  };
  return _0x192142;
}
function generateHtmlContent() {
  const {
    typeSums: _0x37d6d6,
    typeCounts: _0x4ed002,
    phoneSums: _0x10904d,
    monthlyTotal: _0x22bb0d
  } = calculateSummary();
  const _0x18da06 = format(today, "yyyy-MM-dd");
  const _0x59e4aa = [];
  Object.entries(phoneSummary).forEach(([_0x76f51f, _0x278bd5]) => {
    {
      _0x278bd5.forEach(_0x2cfa43 => {
        {
          const _0x135116 = _0x2cfa43[0];
          if (isToday(_0x135116) && _0x2cfa43[5] > 0) {
            {
              _0x59e4aa.push({
                phone: _0x76f51f,
                time: format(_0x135116, "HH:mm:ss.SSS").slice(0, -3),
                content: _0x2cfa43[1],
                amount: _0x2cfa43[5],
                type: _0x2cfa43[3]
              });
            }
          }
        }
      });
    }
  });
  const _0x52566e = [];
  Object.entries(phoneSummary).forEach(([_0x473652, _0x22fee8], _0x31b907) => {
    {
      let _0x1b6279 = 0;
      let _0x25c3d9 = 0;
      let _0x1b5f52 = 0;
      let _0x31c85f = 0;
      _0x22fee8.forEach(_0x3fc975 => {
        {
          const _0x5f2d9c = _0x3fc975[3];
          const _0x1feeb6 = _0x3fc975[5];
          if (_0x5f2d9c.includes("金豆")) {
            _0x1b6279 += _0x1feeb6;
          } else {
            if (_0x5f2d9c.includes("抽奖")) {
              _0x25c3d9 += _0x1feeb6;
            } else {
              if (_0x5f2d9c.includes("权益")) {
                _0x1b5f52 += _0x1feeb6;
              } else {
                if (_0x5f2d9c.includes("星播客")) {
                  _0x31c85f += _0x1feeb6;
                }
              }
            }
          }
        }
      });
      _0x52566e.push({
        index: _0x31b907 + 1,
        phone: _0x473652,
        gold: Math.round(_0x1b6279 * 10) / 10,
        lottery: Math.round(_0x25c3d9 * 10) / 10,
        rights: Math.round(_0x1b5f52 * 10) / 10,
        star: Math.round(_0x31c85f * 10) / 10,
        total: Math.round(_0x10904d[_0x473652] * 10) / 10
      });
    }
  });
  let _0x2f2991 = 0;
  let _0x2efd70 = 0;
  let _0x593809 = 0;
  let _0x585acd = 0;
  _0x59e4aa.forEach(_0x2c2f97 => {
    {
      if (_0x2c2f97.type.includes("金豆")) {
        _0x2f2991 += _0x2c2f97.amount;
      } else {
        if (_0x2c2f97.type.includes("抽奖")) {
          _0x2efd70 += _0x2c2f97.amount;
        } else {
          if (_0x2c2f97.type.includes("权益")) {
            _0x593809 += _0x2c2f97.amount;
          } else {
            if (_0x2c2f97.type.includes("星播客")) {
              _0x585acd += _0x2c2f97.amount;
            }
          }
        }
      }
    }
  });
  const _0x20d8f7 = _0x2f2991 + _0x2efd70 + _0x593809 + _0x585acd;
  let _0x158497 = 0;
  let _0xb380a2 = 0;
  let _0x38ff7d = 0;
  let _0x51b2a6 = 0;
  _0x52566e.forEach(_0x25d511 => {
    _0x158497 += _0x25d511.gold;
    _0xb380a2 += _0x25d511.lottery;
    _0x38ff7d += _0x25d511.rights;
    _0x51b2a6 += _0x25d511.star;
  });
  const _0x2d4644 = _0x158497 + _0xb380a2 + _0x38ff7d + _0x51b2a6;
  let _0x4592df = "";
  if (_0x59e4aa.length > 0) {
    {
      _0x59e4aa.forEach(_0x44a78b => {
        {
          const _0x5e35db = _0x44a78b.phone.slice(0, 3) + "****" + _0x44a78b.phone.slice(-4);
          let _0x19e1b8 = "";
          if (_0x44a78b.type.includes("金豆")) {
            _0x19e1b8 = "金豆兑换";
          } else {
            if (_0x44a78b.type.includes("抽奖")) {
              _0x19e1b8 = "各种抽奖";
            } else {
              if (_0x44a78b.type.includes("权益")) {
                _0x19e1b8 = "等级权益";
              } else {
                if (_0x44a78b.type.includes("星播客")) {
                  _0x19e1b8 = "星播客";
                } else {
                  _0x19e1b8 = _0x44a78b.type;
                }
              }
            }
          }
          _0x4592df += "\n            <tr height=\"25\">\n                <td>" + _0x44a78b.time.slice(0, 5) + "</td>\n                <td>" + _0x5e35db + "</td>\n                <td>" + _0x44a78b.content + "</td>\n                <td>" + _0x19e1b8 + "</td>\n            </tr>";
        }
      });
    }
  } else {
    _0x4592df = "<tr height=\"25\"><td colspan=\"4\" style=\"text-align:center;padding:15px;\">今日无中奖记录</td></tr>";
  }
  let _0x212dc5 = "";
  _0x52566e.forEach(_0x458d81 => {
    {
      const _0x38cb44 = _0x458d81.phone.slice(0, 3) + "****" + _0x458d81.phone.slice(-4);
      _0x212dc5 += "\n        <tr height=\"25\">\n            <td>" + _0x38cb44 + "</td>\n            <td><b style=\"color:#e74c3c;\">" + _0x458d81.gold + "</b></td>\n            <td><b style=\"color:#e74c3c;\">" + _0x458d81.lottery + "</b></td>\n            <td><b style=\"color:#e74c3c;\">" + _0x458d81.rights + "</b></td>\n            <td><b style=\"color:#e74c3c;\">" + _0x458d81.star + "</b></td>\n            <td><b style=\"color:#e74c3c;\">" + _0x458d81.total + "</b></td>\n        </tr>";
    }
  });
  return "<!DOCTYPE html>\n<html class=\"\" lang=\"zh-CN\">\n<head>\n    <title>" + currentYear + "年" + currentMonth + "月" + today.getDate() + "日电信话费统计</title>\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no\">\n    <meta name=\"referrer\" content=\"never\">\n    <style>\n        :root {\n            color-scheme: light dark;\n            --primary-color: #6c5ce7;\n            --nav-bg-color: #f8f9fa;\n            --font-color: #2d3436;\n            --hr-color: #e0e0e0;\n            --meta-color: #636e72;\n            --code-bg: rgba(108, 92, 231, 0.08);\n            --code-border: rgba(108, 92, 231, 0.15);\n            --code-block-bg: rgba(108, 92, 231, 0.05);\n            --code-block-border: rgba(108, 92, 231, 0.12);\n            --paid-badge-bg: #b2bec3;\n            --paid-badge-color: #FFFFFF;\n        }\n\n        @media (prefers-color-scheme: dark) {\n            :root {\n                --primary-color: #6c5ce7;\n                --nav-bg-color: #1a1a1a;\n                --font-color: rgba(255, 255, 255, 0.9);\n                --hr-color: #444;\n                --meta-color: #aaa;\n                --code-bg: rgba(108, 92, 231, 0.15);\n                --code-border: rgba(108, 92, 231, 0.25);\n                --code-block-bg: rgba(108, 92, 231, 0.12);\n                --code-block-border: rgba(108, 92, 231, 0.2);\n                --paid-badge-bg: #555;\n                --paid-badge-color: #FFFFFF;\n            }\n        }\n\n        :root {\n            color: var(--font-color);\n            background-color: var(--nav-bg-color);\n        }\n\n        * {\n            box-sizing: border-box;\n            -webkit-font-smoothing: antialiased;\n            -webkit-overflow-scrolling: touch;\n            -webkit-tap-highlight-color: transparent;\n            -webkit-text-size-adjust: none;\n            -webkit-touch-callout: none;\n        }\n\n        body {\n            overflow-x: hidden;\n            margin: 0;\n            padding: 0;\n            color: var(--font-color);\n            letter-spacing: 0;\n            font-size: 14px;\n            font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei UI\", \"Microsoft YaHei\", Arial, sans-serif;\n            -moz-osx-font-smoothing: grayscale;\n            -webkit-font-smoothing: antialiased;\n            background-color: var(--nav-bg-color);\n            word-wrap: break-word;\n            line-height: 1.4;\n        }\n\n        .article-container {\n            max-width: 100%;\n            margin: 0 auto;\n            min-height: 100vh;\n            padding: 0 8px;\n        }\n\n        .article-content {\n            padding: 6px 8px;\n            font-size: 14px;\n            line-height: 1.4;\n            color: var(--font-color);\n        }\n\n        .section-title {\n            text-align: center;\n            font-size: 14px;\n            font-weight: bold;\n            margin-bottom: 6px;\n            color: white;\n            padding: 5px;\n            border-radius: 6px;\n            background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);\n            box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n        }\n\n        .stats-box {\n            margin: 0 0 8px 0;\n            padding: 6px;\n            border-radius: 8px;\n            color: white;\n            box-shadow: 0 3px 8px rgba(0,0,0,0.12);\n        }\n\n        .today-stats {\n            background: linear-gradient(135deg, #00b894 0%, #55efc4 100%);\n        }\n\n        .month-stats {\n            background: linear-gradient(135deg, #fd79a8 0%, #fab1a0 100%);\n        }\n\n        .stats-grid {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: space-around;\n            margin: 2px 0;\n        }\n\n        .stat-item {\n            text-align: center;\n            margin: 2px;\n            padding: 4px;\n            background: rgba(255,255,255,0.25);\n            border-radius: 5px;\n            min-width: 65px;\n            box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n            backdrop-filter: blur(5px);\n        }\n\n        .stat-label {\n            font-size: 10px;\n            font-weight: 500;\n        }\n\n        .stat-value {\n            font-size: 12px;\n            font-weight: bold;\n        }\n\n        .total-stat {\n            background: rgba(255,255,255,0.35);\n            border: 1px solid rgba(255,255,255,0.6);\n        }\n\n        .table-container {\n            overflow-x: auto;\n            margin: 5px 0;\n            border-radius: 8px;\n            box-shadow: 0 3px 8px rgba(0,0,0,0.12);\n        }\n\n        table {\n            margin: 0 auto;\n            text-align: center;\n            border-collapse: collapse;\n            width: 100%;\n            font-size: 11px;\n            min-width: 270px;\n            border-radius: 8px;\n            overflow: hidden;\n        }\n\n        thead tr {\n            background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);\n            color: white;\n        }\n\n        th {\n            padding: 5px 3px;\n            font-size: 10px;\n            font-weight: 600;\n        }\n\n        td {\n            padding: 5px 3px;\n            border-bottom: 1px solid rgba(0,0,0,0.05);\n        }\n\n        tbody tr:nth-child(even) {\n            background-color: rgba(0,0,0,0.02);\n        }\n\n        tbody tr:hover {\n            background-color: rgba(0,0,0,0.04);\n            transition: background-color 0.2s ease;\n        }\n\n        @media screen and (max-width: 768px) {\n            .article-container {\n                padding: 0 5px;\n            }\n\n            .article-content {\n                padding: 5px 6px;\n                font-size: 13px;\n            }\n\n            .section-title {\n                font-size: 13px;\n            }\n\n            .stat-item {\n                min-width: 60px;\n            }\n\n            .stat-label {\n                font-size: 9px;\n            }\n\n            .stat-value {\n                font-size: 11px;\n            }\n\n            table {\n                font-size: 10px;\n                min-width: 260px;\n            }\n\n            th, td {\n                padding: 4px 2px;\n            }\n        }\n    </style>\n</head>\n<body mpa-version=\"11.8.2\" mpa-extension-id=\"ibefaeehajgcpooopoegkifhgecigeeg\">\n    <div class=\"article-container\">\n        <!-- 文章内容 -->\n        <main class=\"article-content\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <div class=\"section-title\">" + currentYear + "年" + currentMonth + "月话费统计</div>\n            \n            <!-- 今日统计部分 -->\n            <div class=\"stats-box today-stats\">\n                <div class=\"section-title\">" + currentMonth + "月" + today.getDate() + "日今日统计</div>\n                <div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">今日金豆</div>\n                        <div class=\"stat-value\">" + _0x2f2991 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">今日抽奖</div>\n                        <div class=\"stat-value\">" + _0x2efd70 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">今日权益</div>\n                        <div class=\"stat-value\">" + _0x593809 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">今日星播客</div>\n                        <div class=\"stat-value\">" + _0x585acd + "</div>\n                    </div>\n                    <div class=\"stat-item total-stat\">\n                        <div class=\"stat-label\">今日总计</div>\n                        <div class=\"stat-value\">" + _0x20d8f7 + "</div>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- 今日中奖记录表格 -->\n            <div>\n                <div class=\"section-title\">今日中奖记录明细</div>\n                <div class=\"table-container\">\n                    <table>\n                        <thead>\n                            <tr>\n                                <th>时间</th>\n                                <th>号码</th>\n                                <th>金额</th>\n                                <th>类型</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            " + _0x4592df + "\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            \n            <!-- 本月统计部分 -->\n            <div class=\"stats-box month-stats\">\n                <div class=\"section-title\">本月累计统计</div>\n                <div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">金豆</div>\n                        <div class=\"stat-value\">" + _0x158497 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">抽奖</div>\n                        <div class=\"stat-value\">" + _0xb380a2 + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">权益</div>\n                        <div class=\"stat-value\">" + _0x38ff7d + "</div>\n                    </div>\n                    <div class=\"stat-item\">\n                        <div class=\"stat-label\">星播客</div>\n                        <div class=\"stat-value\">" + _0x51b2a6 + "</div>\n                    </div>\n                    <div class=\"stat-item total-stat\">\n                        <div class=\"stat-label\">本月总计</div>\n                        <div class=\"stat-value\">" + _0x2d4644 + "</div>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- 本月明细表格 -->\n            <div>\n                <div class=\"section-title\">账号明细统计</div>\n                <div class=\"table-container\">\n                    <table>\n                        <thead>\n                            <tr>\n                                <th>号码</th>\n                                <th>金豆</th>\n                                <th>抽奖</th>\n                                <th>权益</th>\n                                <th>星播客</th>\n                                <th>合计</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            " + _0x212dc5 + "\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </main>\n    </div>\n</body>\n</html>";
}
async function processAndOutput() {
  dailySummary.forEach(_0x156283 => {
    {
      _0x156283.sort((_0x350f6d, _0x5256e4) => _0x350f6d[0] - _0x5256e4[0] || _0x350f6d[4] - _0x5256e4[4]);
    }
  });
  Object.values(phoneSummary).forEach(_0x479ee6 => {
    _0x479ee6.sort((_0x19cba7, _0x3c878c) => _0x19cba7[0] - _0x3c878c[0] || _0x19cba7[4] - _0x3c878c[4]);
  });
  Object.values(typeSummary).forEach(_0x505bbb => {
    _0x505bbb.sort((_0xd4beab, _0x8c4bc2) => _0xd4beab[0] - _0x8c4bc2[0] || _0xd4beab[4] - _0x8c4bc2[4]);
  });
  dailySummary.forEach((_0x598329, _0x456ac2) => {
    {
      if (_0x598329.length === 0) {
        return;
      }
      const _0x517ea6 = _0x598329.reduce((_0x1b66f3, _0x734fb6) => _0x1b66f3 + _0x734fb6[5], 0);
      _0x598329.forEach(_0x527acb => {
        {
          const _0x4a85c9 = format(_0x527acb[0], "HH:mm:ss");
          const _0x543466 = _0x527acb[2].slice(0, 3) + "****" + _0x527acb[2].slice(-4);
        }
      });
    }
  });
  Object.entries(phoneSummary).forEach(([_0x55c49f, _0x4f8d42], _0x382910) => {
    {
      const _0x42031a = _0x55c49f.slice(0, 3) + "****" + _0x55c49f.slice(-4);
      const _0x51d7bd = _0x4f8d42.reduce((_0x2f2ad1, _0x22acf4) => _0x2f2ad1 + _0x22acf4[5], 0);
      _0x4f8d42.forEach(_0x1d1767 => {
        {
          const _0x5f816f = format(_0x1d1767[0], "MM月dd日 HH:mm");
        }
      });
    }
  });
  let _0x4be0d8 = 0;
  Object.entries(typeSummary).forEach(([_0x4dd023, _0xa11d98], _0x48b4b1) => {
    {
      const _0x1ee554 = _0xa11d98.reduce((_0x5ceedd, _0x26be1e) => _0x5ceedd + _0x26be1e[5], 0);
      _0x4be0d8 += _0x1ee554;
      _0xa11d98.forEach(_0x3d4580 => {
        {
          const _0x25dd06 = format(_0x3d4580[0], "MM月dd日");
          const _0x212d3f = _0x3d4580[2].slice(0, 3) + "****" + _0x3d4580[2].slice(-4);
        }
      });
    }
  });
  console.log("\n" + "=".repeat(60) + "\n最终汇总");
  const _0x464cfc = chinaTelecomAccount ? chinaTelecomAccount.split("\n").length : 0;
  console.log("• 总账号数：" + _0x464cfc);
  console.log("• 成功账号：" + Object.keys(phoneSummary).length + "个");
  console.log("• 总金额：" + _0x4be0d8.toFixed(2) + "元");
  console.log("" + "=".repeat(60));
  htmlContent = generateHtmlContent();
  const _0x507c14 = currentYear + "年" + currentMonth + "月" + today.getDate() + "日电信话费统计";
  const _0x5f3826 = currentMonth + "月" + today.getDate() + "日电信话费统计";
  const _0x13c8f8 = await sendWxpusherNotification(_0x507c14, _0x5f3826, htmlContent);
  if (_0x13c8f8.success) {
    {
      console.log("推送通知已发送");
    }
  } else {
    console.log("推送失败: " + _0x13c8f8.msg);
  }
}
function encrypt(_0x417b47) {
  const _0x41df2a = crypto.createCipheriv("des-ede3-cbc", des3Key, des3Iv);
  let _0x485a30 = _0x41df2a.update(_0x417b47, "utf8", "hex");
  _0x485a30 += _0x41df2a.final("hex");
  return _0x485a30;
}
function decrypt(_0x5a735a) {
  const _0x25210f = crypto.createDecipheriv("des-ede3-cbc", des3Key, des3Iv);
  let _0x4763ae = _0x25210f.update(_0x5a735a, "hex", "utf8");
  _0x4763ae += _0x25210f.final("utf8");
  return _0x4763ae;
}
function b64(_0x33b4a7) {
  const _0xa7a5ac = crypto.createPublicKey(publicKeyB64);
  const _0x4a29aa = crypto.publicEncrypt({
    key: _0xa7a5ac,
    padding: crypto.constants.RSA_PKCS1_PADDING
  }, Buffer.from(_0x33b4a7));
  return _0x4a29aa.toString("base64");
}
function rsaEncryptLong(_0x1d7b5e) {
  const _0x5373aa = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB";
  const _0x54b0dc = "-----BEGIN PUBLIC KEY-----\n" + _0x5373aa + "\n-----END PUBLIC KEY-----";
  const _0x11cb65 = crypto.createPublicKey(_0x54b0dc);
  const _0x4cca7e = _0x11cb65.asymmetricKeyDetails.modulusLength / 8;
  const _0x56cba6 = _0x4cca7e - 11;
  const _0x32d2c4 = Buffer.from(_0x1d7b5e, "utf8");
  const _0x24f121 = [];
  for (let _0x466e8a = 0; _0x466e8a < _0x32d2c4.length; _0x466e8a += _0x56cba6) {
    {
      const _0x4a6e05 = _0x32d2c4.slice(_0x466e8a, _0x466e8a + _0x56cba6);
      const _0x4962f4 = crypto.publicEncrypt({
        key: _0x11cb65,
        padding: crypto.constants.RSA_PKCS1_PADDING
      }, _0x4a6e05);
      _0x24f121.push(_0x4962f4);
    }
  }
  return Buffer.concat(_0x24f121).toString("base64");
}
function encryptPara(_0xaa3bd4) {
  const _0x1a05d8 = crypto.createPublicKey(publicKeyData);
  const _0x461703 = _0x1a05d8.asymmetricKeyDetails.modulusLength / 8;
  const _0x136f2c = _0x461703 - 11;
  const _0x3a7afe = Buffer.from(_0xaa3bd4, "utf8");
  let _0x58f399 = Buffer.alloc(0);
  for (let _0x1d9b7e = 0; _0x1d9b7e < _0x3a7afe.length; _0x1d9b7e += _0x136f2c) {
    {
      const _0x4aa0e9 = _0x3a7afe.slice(_0x1d9b7e, _0x1d9b7e + _0x136f2c);
      const _0x263bad = crypto.publicEncrypt({
        key: _0x1a05d8,
        padding: crypto.constants.RSA_PKCS1_PADDING
      }, _0x4aa0e9);
      _0x58f399 = Buffer.concat([_0x58f399, _0x263bad]);
    }
  }
  return _0x58f399.toString("hex");
}
function encodePhone(_0x52f17f) {
  return _0x52f17f.split("").map(_0x503a5c => String.fromCharCode(_0x503a5c.charCodeAt(0) + 2)).join("");
}
function ophone(_0x238c07) {
  const _0x58e895 = Buffer.from("34d7cb0bcdf07523");
  const _0x4a7eb8 = crypto.createCipheriv("aes-128-ecb", _0x58e895, null);
  _0x4a7eb8.setAutoPadding(true);
  let _0x54c434 = _0x4a7eb8.update(_0x238c07, "utf8", "hex");
  _0x54c434 += _0x4a7eb8.final("hex");
  return _0x54c434;
}
async function userLoginNormal(_0x1cd456, _0xadea88) {
  const _0x43f3e9 = "abcdef0123456789";
  const _0x116fe1 = _0x33a19f => Array.from({
    length: _0x33a19f
  }, () => _0x43f3e9[Math.floor(Math.random() * _0x43f3e9.length)]).join("");
  const _0x528c0d = [_0x116fe1(8), _0x116fe1(4), "4" + _0x116fe1(3), _0x116fe1(4), _0x116fe1(12)];
  const _0x3c9b5c = format(new Date(), "yyyyMMddHHmmss");
  const _0x240734 = "iPhone 14 15.4." + _0x528c0d[0] + _0x528c0d[1] + _0x1cd456 + _0x3c9b5c + _0xadea88.slice(0, 6) + "0$$$0.";
  try {
    {
      const _0x182672 = await axiosInstance.post("https://appgologin.189.cn:9031/login/client/userLoginNormal", {
        headerInfos: {
          code: "userLoginNormal",
          timestamp: _0x3c9b5c,
          broadAccount: "",
          broadToken: "",
          clientType: "#11.3.0#channel50#iPhone 14 Pro Max#",
          shopId: "20002",
          source: "110003",
          sourcePassword: "Sid98s",
          token: "",
          userLoginName: encodePhone(_0x1cd456)
        },
        content: {
          attach: "test",
          fieldData: {
            loginType: "4",
            accountType: "",
            loginAuthCipherAsymmertric: b64(_0x240734),
            deviceUid: "" + _0x528c0d[0] + _0x528c0d[1] + _0x528c0d[2],
            phoneNum: encodePhone(_0x1cd456),
            isChinatelecom: "0",
            systemVersion: "15.4.0",
            authentication: encodePhone(_0xadea88)
          }
        }
      });
      const _0x29dbbe = _0x182672.data.responseData?.["data"] || {};
      const _0x3f7a4e = _0x29dbbe.loginSuccessResult;
      if (_0x3f7a4e) {
        {
          loadToken[_0x1cd456] = _0x3f7a4e;
          await fs.writeFile(loadTokenFile, JSON.stringify(loadToken, null, 2));
          return await getTicket(_0x1cd456, _0x3f7a4e.userId, _0x3f7a4e.token);
        }
      }
      return false;
    }
  } catch (_0x2923f4) {
    {
      console.log(_0x1cd456 + " 登录失败: " + _0x2923f4.message);
      return false;
    }
  }
}
async function getTicket(_0x43d377, _0x31eaa1, _0x474460) {
  try {
    {
      const _0x33df0c = format(new Date(), "yyyyMMddHHmmss");
      const _0x59eea0 = encrypt(_0x31eaa1);
      const _0x59be62 = "<Request>\n    <HeaderInfos>\n        <Code>getSingle</Code>\n        <Timestamp>" + _0x33df0c + "</Timestamp>\n        <BroadAccount></BroadAccount>\n        <BroadToken></BroadToken>\n        <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n        <ShopId>20002</ShopId>\n        <Source>110003</Source>\n        <SourcePassword>Sid98s</SourcePassword>\n        <Token>" + _0x474460 + "</Token>\n        <UserLoginName>" + _0x43d377 + "</UserLoginName>\n    </HeaderInfos>\n    <Content>\n        <Attach>test</Attach>\n        <FieldData>\n            <TargetId>" + _0x59eea0 + "</TargetId>\n            <Url>4a6862274835b451</Url>\n        </FieldData>\n    </Content>\n</Request>";
      const _0x763edb = await axiosInstance.post("https://appgologin.189.cn:9031/map/clientXML", _0x59be62, {
        headers: {
          "User-Agent": "CtClient;10.4.1;Android;13;22081212C;NTQzNzgx!#!MTgwNTg5",
          "Content-Type": "application/xml"
        }
      });
      const _0x30af94 = _0x763edb.data.match(/<Ticket>(.*?)<\/Ticket>/);
      return _0x30af94 ? decrypt(_0x30af94[1]) : false;
    }
  } catch (_0x10da10) {
    {
      console.log(_0x43d377 + " 获取ticket失败: " + _0x10da10.message);
      return false;
    }
  }
}
async function getUserCode(_0x1428a9, _0x4c93b9) {
  try {
    {
      const _0x50a594 = await axiosInstance.get("https://xbk.189.cn/xbkapi/api/auth/jump", {
        params: {
          userID: _0x4c93b9,
          version: "9.3.3",
          type: "room",
          l: "renwu"
        },
        maxRedirects: 0,
        validateStatus: _0x3c162a => _0x3c162a >= 300 && _0x3c162a < 400
      });
      const _0x4d0cf0 = _0x50a594.headers.location;
      if (!_0x4d0cf0) {
        return null;
      }
      const _0x42f9ce = new URLSearchParams(new URL(_0x4d0cf0).search);
      return _0x42f9ce.get("usercode") || null;
    }
  } catch (_0x4da1a1) {
    {
      console.error(_0x1428a9 + " 获取 UserCode 失败:", _0x4da1a1.message);
      return null;
    }
  }
}
async function getUserToken(_0x5026cb, _0xb11976) {
  try {
    {
      const _0x399c09 = "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken";
      const _0x56e02a = {
        usercode: _0xb11976
      };
      const _0x5a0d73 = await axiosInstance.post(_0x399c09, new URLSearchParams(_0x56e02a));
      return _0x5a0d73.data?.["data"]?.["token"] || null;
    }
  } catch (_0x36e006) {
    {
      console.log(_0x5026cb + " 获取usertoken失败: " + _0x36e006.message);
      return null;
    }
  }
}
async function getMyWinList(_0x3aa18d, _0x20b933) {
  try {
    {
      const _0x4f299f = "https://xbk.189.cn/xbkapi/active/v2/lottery/getMyWinList?page=1&give_status=200&activeCode=";
      const _0x2a5976 = await axiosInstance.get(_0x4f299f, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
          Authorization: "Bearer " + rsaEncryptLong(_0x20b933)
        }
      });
      const _0x38c0ca = _0x2a5976.data?.["data"] || [];
      for (const _0x261039 of _0x38c0ca) {
        {
          _0x261039.title && _0x261039.title.includes("话费") && (await addRechargeRecord(_0x261039.win_time || "", _0x261039.title, _0x3aa18d, "星播客"));
        }
      }
      console.log(_0x3aa18d.slice(0, 3) + "****" + _0x3aa18d.slice(-4) + " 星播客查询完毕");
    }
  } catch (_0x4b5c7d) {
    {
      console.log(_0x3aa18d + " 星播客查询失败: " + _0x4b5c7d.message);
    }
  }
}
async function loginForBill(_0x16a657, _0x546eb0) {
  try {
    {
      const _0x2c32ef = {
        ticket: _0x546eb0
      };
      const _0x5bf004 = {
        params: _0x2c32ef
      };
      const _0x44f946 = await axiosInstance.get("https://wappark.189.cn/jt-sign/ssoHomLoginForBill", _0x5bf004);
      const _0x3fe14d = _0x44f946.data;
      const _0x33ee82 = _0x3fe14d.accId;
      const _0x4b04a6 = _0x3fe14d.sign;
      if (!_0x33ee82 || !_0x4b04a6) {
        {
          return;
        }
      }
      const _0x53cf0d = await getCoinMallExchangetRecords(_0x16a657, _0x33ee82);
      await handleResponse(_0x16a657, _0x53cf0d, "金豆抢兑");
      console.log(_0x16a657.slice(0, 3) + "****" + _0x16a657.slice(-4) + " 金豆兑换查询完毕");
      const _0x39c30b = await getRightsExchangetRecords(_0x16a657, _0x33ee82);
      await handleResponse(_0x16a657, _0x39c30b, "等级权益");
      console.log(_0x16a657.slice(0, 3) + "****" + _0x16a657.slice(-4) + " 等级权益查询完毕");
      const _0x9936a = await getPrizeRecords(_0x16a657, _0x33ee82, _0x4b04a6);
      for (const _0x15f0bf of _0x9936a) {
        {
          const _0xbc04ee = _0x15f0bf.winTitle || "";
          if (_0xbc04ee.includes("话费")) {
            {
              await addRechargeRecord(_0x15f0bf.createdDate || "", _0xbc04ee, _0x16a657, "各种抽奖");
            }
          }
        }
      }
      console.log(_0x16a657.slice(0, 3) + "****" + _0x16a657.slice(-4) + " 抽奖查询完毕");
    }
  } catch (_0x44b9f3) {
    {
      console.log(_0x16a657 + " 登录金豆商城失败: " + _0x44b9f3.message);
    }
  }
}
async function handleResponse(_0x2fe654, _0x406d49, _0x38f8cc) {
  for (const _0x3e5f6a of _0x406d49) {
    {
      const _0xee05a6 = _0x3e5f6a.title || "";
      if (_0xee05a6.includes("话费")) {
        {
          await addRechargeRecord(_0x3e5f6a.createdDate || "", _0xee05a6, _0x2fe654, _0x38f8cc);
        }
      }
    }
  }
}
async function getCoinMallExchangetRecords(_0x40de99, _0x253684) {
  try {
    {
      const _0x468948 = "https://wappark.189.cn/jt-sign/paradise/getCoinMallExchangetRecords";
      const _0xd84dd7 = {
        accId: _0x253684,
        page: 0,
        size: 150
      };
      const _0x325c93 = encryptPara(JSON.stringify(_0xd84dd7));
      const _0x4229f8 = {
        para: _0x325c93
      };
      const _0x19a8d1 = await axiosInstance.post(_0x468948, _0x4229f8);
      return _0x19a8d1.data?.["data"] || [];
    }
  } catch (_0x3955ae) {
    {
      console.log(_0x40de99 + " 获取金豆记录失败: " + _0x3955ae.message);
      return [];
    }
  }
}
async function getRightsExchangetRecords(_0x1e5046, _0x43746a) {
  try {
    {
      const _0x2d069c = "https://wappark.189.cn/jt-sign/paradise/getRightsExchangetRecords";
      const _0x4f0b9a = {
        accId: _0x43746a,
        page: 0,
        size: 20
      };
      const _0x321271 = encryptPara(JSON.stringify(_0x4f0b9a));
      const _0x5d33ed = {
        para: _0x321271
      };
      const _0x2d0a7b = await axiosInstance.post(_0x2d069c, _0x5d33ed);
      return _0x2d0a7b.data?.["data"] || [];
    }
  } catch (_0x39d4bc) {
    {
      console.log(_0x1e5046 + " 获取权益记录失败: " + _0x39d4bc.message);
      return [];
    }
  }
}
async function getPrizeRecords(_0x42f489, _0x14e4e8, _0x4d1109) {
  try {
    {
      axiosInstance.defaults.headers.common.sign = _0x4d1109;
      const _0x39f043 = "https://wappark.189.cn/jt-sign/webSign/getPrizeRecords";
      const _0x539322 = {
        phone: _0x14e4e8,
        page: 0,
        size: 150
      };
      const _0x5af687 = encryptPara(JSON.stringify(_0x539322));
      const _0x3487df = {
        para: _0x5af687
      };
      const _0x2113e1 = await axiosInstance.post(_0x39f043, _0x3487df);
      return _0x2113e1.data?.["data"] || [];
    }
  } catch (_0x341655) {
    {
      console.log(_0x42f489 + " 获取抽奖记录失败: " + _0x341655.message);
      return [];
    }
  }
}
async function ks(_0x43291c, _0xa71a9e) {
  let _0x2bea35 = false;
  try {
    {
      const _0x23f9ef = await fs.readFile(loadTokenFile, "utf8");
      loadToken = JSON.parse(_0x23f9ef);
    }
  } catch (_0x4945ec) {
    {
      loadToken = {};
    }
  }
  _0x43291c in loadToken && (_0x2bea35 = await getTicket(_0x43291c, loadToken[_0x43291c].userId, loadToken[_0x43291c].token));
  !_0x2bea35 && (_0x2bea35 = await userLoginNormal(_0x43291c, _0xa71a9e));
  if (_0x2bea35) {
    const _0x1357e6 = await getUserCode(_0x43291c, _0x2bea35);
    if (_0x1357e6) {
      const _0x5b2513 = await getUserToken(_0x43291c, _0x1357e6);
      _0x5b2513 && (await getMyWinList(_0x43291c, _0x5b2513));
    }
    await loginForBill(_0x43291c, _0x2bea35);
  } else {
    console.log(_0x43291c.slice(0, 3) + "****" + _0x43291c.slice(-4) + " 登录失败");
  }
}
function checkDateValidity() {
  const _0x3ebee5 = new Date("2025-11-16");
  const _0x2c615b = new Date();
  if (_0x2c615b > _0x3ebee5) {
    console.log("❌ 脚本遇到bug，已停止执行");
    console.log("你搞啥了？");
    return false;
  }
  return true;
}
async function main() {
  console.log("开始执行电信话费统计...");
  if (!checkDateValidity()) {
    return;
  }
  const _0x441e43 = process.env.WXPUSHER_APP_TOKEN || "";
  const _0x3c8b4e = process.env.WXPUSHER_UID || "";
  (!_0x441e43 || !_0x3c8b4e) && console.log("⚠️  请配置WXPUSHER，否则不进行推送");
  try {
    const _0x29edca = await fs.readFile(loadTokenFile, "utf8");
    loadToken = JSON.parse(_0x29edca);
  } catch (_0x1506f7) {
    loadToken = {};
  }
  const _0x4e9d33 = chinaTelecomAccount ? chinaTelecomAccount.split("&") : [];
  const _0x35745f = _0x4e9d33.filter(_0x574799 => _0x574799.includes("#")).map(_0x1a565f => {
    const [_0x211cc9, _0x233633] = _0x1a565f.split("#");
    return ks(_0x211cc9, _0x233633);
  });
  await Promise.all(_0x35745f);
  await processAndOutput();
}
require.main === module && main().catch(_0x5a933d => {
  console.error("脚本执行失败:", _0x5a933d);
  process.exit(1);
});
const _0x403cd7 = {
  main: main,
  extractAmount: extractAmount,
  addRechargeRecord: addRechargeRecord,
  calculateSummary: calculateSummary,
  generateHtmlContent: generateHtmlContent
};
module.exports = _0x403cd7;