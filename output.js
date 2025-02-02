//Sun Feb 02 2025 14:12:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("PICC爱心农场"),
  axios = require("axios");
let request = require("request");
request = request.defaults({
  "jar": true
});
const {
    log
  } = console,
  Notify = 1,
  debug = 0;
let axncwx = ($.isNode() ? process.env.axncwx : $.getdata("axncwx")) || "",
  axncwxArr = [],
  data = "",
  msg = "",
  wzid = "",
  ntid = "",
  seed = "",
  num = "",
  level = "",
  le = "";
var hours = new Date().getMonth(),
  timestamp = Math.round(new Date().getTime()).toString();
!(async () => {
  if (typeof $request !== "undefined") await GetRewrite();else {
    if (!(await Envs())) return;else {
      {
        log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " \n=============================================\n");
        log("\n============ 微信小程序：柠檬玩机 ============");
        log("\n=================== 共找到 " + axncwxArr.length + " 个账号 ===================");
        debug && log("【debug】 这是你的全部账号数组:\n " + axncwxArr);
        for (let _0x56fc4 = 0; _0x56fc4 < axncwxArr.length; _0x56fc4++) {
          {
            let _0xf7d9a = _0x56fc4 + 1;
            addNotifyStr("\n==== 开始【第 " + _0xf7d9a + " 个账号】====\n", true);
            axncwx = axncwxArr[_0x56fc4];
            await checkin();
            await setUserLog();
            await $.wait(3000);
            await getQuestion();
            await browseYouyangy();
            await $.wait(3000);
            await dogfood();
            le = level + 1;
            await getUserSeed();
            if (ntid.length == 0) {
              await buyGoods();
              await $.wait(3000);
              await getUserWarehouse();
              if (seed.length > 0) for (let _0x224102 = 1; _0x224102 <= le; _0x224102++) {
                seeid = seed[0].seedId;
                await userCrops1(seeid, _0x224102);
                await $.wait(3000);
                await wateringCrops(_0x224102);
              }
            } else {
              await harvestFruitAll();
              await $.wait(3000);
              await shovelFruit();
              await $.wait(3000);
              await userSell();
              await $.wait(3000);
              await getUserSeed();
              await $.wait(3000);
              if (ntid.length == 0) {
                await buyGoods();
                await $.wait(3000);
                await getUserWarehouse();
                await $.wait(3000);
                if (seed.length > 0) for (let _0x493048 = 1; _0x493048 <= le; _0x493048++) {
                  seeid = seed[0].seedId;
                  await userCrops1(seeid, _0x493048);
                  await $.wait(3000);
                  await wateringCrops(_0x493048);
                }
              }
              await $.wait(3000);
              await getUserSeed();
              for (let _0x3af995 = 1; _0x3af995 <= le; _0x3af995++) {
                planttime = formatDate(ntid[_0x3af995][0].plantTime);
                collectime = formatDate(ntid[_0x3af995][0].collectTime);
                log("\n===== 开始查看第" + ntid[_0x3af995][0].landId + "块地 =========");
                log(ntid[_0x3af995][0].vname + "播种时间" + planttime);
                log(ntid[_0x3af995][0].vname + "成熟时间" + collectime);
              }
            }
          }
        }
      }
    }
  }
})().catch(_0x420702 => log(_0x420702)).finally(() => $.done());
async function checkin() {
  return new Promise(_0x54c975 => {
    {
      var _0x11d385 = {
        "method": "POST",
        "url": "https://nongchang.maxrocky.com/index.php?s=index/index/getUserInfo",
        "headers": {
          "Host": "nongchang.maxrocky.com",
          "Connection": "keep-alive",
          "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
        },
        "data": {
          "skey": axncwx
        }
      };
      debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x11d385)));
      axios.request(_0x11d385).then(async function (_0x46653d) {
        try {
          {
            data = _0x46653d.data;
            if (debug) {
              log("\n\n【debug】===============这是 返回data==============");
              log(JSON.stringify(_0x46653d.data));
            }
            level = data.data.level;
            data.errCode == 0 ? log(data.data.nickName + "公益值" + data.data.balance + "---当前等级" + level) : log(data);
          }
        } catch (_0xdec0f2) {
          log("异常：" + data + "，原因：" + data.message);
        }
      }).catch(function (_0x590140) {
        console.error(_0x590140);
      }).then(_0x3b6bb8 => {
        _0x54c975();
      });
    }
  });
}
async function getUserSeed() {
  return new Promise(_0x5097ed => {
    var _0x2bc8cb = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/getUserSeed",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "skey": axncwx
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x2bc8cb)));
    axios.request(_0x2bc8cb).then(async function (_0x3a20db) {
      try {
        {
          data = _0x3a20db.data;
          if (debug) {
            log("\n\n【debug】===============这是 返回data==============");
            log(JSON.stringify(_0x3a20db.data));
          }
          ntid = data.data;
        }
      } catch (_0x9b5605) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x24e145) {
      console.error(_0x24e145);
    }).then(_0x4bdd7f => {
      _0x5097ed();
    });
  });
}
async function setUserLog() {
  return new Promise(_0x16b076 => {
    {
      var _0x342dad = {
        "method": "POST",
        "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
        "headers": {
          "Host": "nongchang.maxrocky.com",
          "Connection": "keep-alive",
          "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
        },
        "data": {
          "type": "sign",
          "skey": axncwx
        }
      };
      debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x342dad)));
      axios.request(_0x342dad).then(async function (_0x4f07d7) {
        try {
          data = _0x4f07d7.data;
          debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4f07d7.data)));
          data.errCode == 0 ? log("签到" + data.errMsg) : log(data.errMsg);
        } catch (_0x376425) {
          log("异常：" + data + "，原因：" + data.message);
        }
      }).catch(function (_0x2c6538) {
        console.error(_0x2c6538);
      }).then(_0x4927de => {
        _0x16b076();
      });
    }
  });
}
async function setUserLog1() {
  return new Promise(_0x119fc1 => {
    var _0x5b2100 = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "skey": axncwx,
        "type": "read_strategy"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5b2100)));
    axios.request(_0x5b2100).then(async function (_0x2e7eea) {
      try {
        data = _0x2e7eea.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x2e7eea.data)));
        data.errCode == 0 ? log("阅读" + data.errMsg) : log(data.errMsg);
      } catch (_0x1767ed) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x31957d) {
      console.error(_0x31957d);
    }).then(_0x9a6c0d => {
      _0x119fc1();
    });
  });
}
async function getNewsList() {
  return new Promise(_0x4352e9 => {
    var _0x36b923 = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/getNewsList",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "page": 1,
        "pageSize": 20,
        "skey": axncwx
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x36b923)));
    axios.request(_0x36b923).then(async function (_0x5eed80) {
      try {
        data = _0x5eed80.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x5eed80.data)));
        wzid = data.data;
      } catch (_0x31a1aa) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x13f1ad) {
      console.error(_0x13f1ad);
    }).then(_0xe72409 => {
      _0x4352e9();
    });
  });
}
async function setUserLogk(_0x5a86d5) {
  return new Promise(_0x3d5768 => {
    var _0xa64f83 = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "skey": axncwx,
        "type": "infmation",
        "type_id": _0x5a86d5
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xa64f83)));
    axios.request(_0xa64f83).then(async function (_0x45b297) {
      try {
        data = _0x45b297.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x45b297.data)));
        data.errCode == 0 ? log("看文章" + data.errMsg) : log(data.errMsg);
      } catch (_0x58de3d) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x5439f7) {
      console.error(_0x5439f7);
    }).then(_0x1db452 => {
      _0x3d5768();
    });
  });
}
async function browseYouyangy() {
  return new Promise(_0x3d5ace => {
    {
      var _0x5929b0 = {
        "method": "POST",
        "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
        "headers": {
          "Host": "nongchang.maxrocky.com",
          "Connection": "keep-alive",
          "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
        },
        "data": {
          "skey": axncwx,
          "type": "BrowseYouyang"
        }
      };
      debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5929b0)));
      axios.request(_0x5929b0).then(async function (_0x343bb6) {
        try {
          data = _0x343bb6.data;
          debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x343bb6.data)));
          data.errCode == 0 ? log("浏览友氧" + data.errMsg) : log(data.errMsg);
        } catch (_0x22a7b2) {
          log("异常：" + data + "，原因：" + data.message);
        }
      }).catch(function (_0x5a4c03) {
        console.error(_0x5a4c03);
      }).then(_0x5e21c3 => {
        _0x3d5ace();
      });
    }
  });
}
async function lovePets() {
  return new Promise(_0x586971 => {
    {
      var _0x300a25 = {
        "method": "POST",
        "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
        "headers": {
          "Host": "nongchang.maxrocky.com",
          "Connection": "keep-alive",
          "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
        },
        "data": {
          "skey": axncwx,
          "type": "LovePets"
        }
      };
      debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x300a25)));
      axios.request(_0x300a25).then(async function (_0x5d3bc7) {
        try {
          {
            data = _0x5d3bc7.data;
            debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x5d3bc7.data)));
            if (data.errCode == 0) log("农场保卫战" + data.errMsg);else {
              log(data.errMsg);
            }
          }
        } catch (_0x542ee5) {
          log("异常：" + data + "，原因：" + data.message);
        }
      }).catch(function (_0x328519) {
        console.error(_0x328519);
      }).then(_0x452deb => {
        _0x586971();
      });
    }
  });
}
async function dogfood() {
  return new Promise(_0xb96805 => {
    var _0x15a6e9 = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "skey": axncwx,
        "type": "dogfood"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x15a6e9)));
    axios.request(_0x15a6e9).then(async function (_0x42f574) {
      try {
        data = _0x42f574.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x42f574.data)));
        data.errCode == 0 ? log("购买狗粮" + data.errMsg) : log(data.errMsg);
      } catch (_0xd514a8) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x1249c6) {
      console.error(_0x1249c6);
    }).then(_0x2eea43 => {
      _0xb96805();
    });
  });
}
async function CourtesyPets() {
  return new Promise(_0x25d825 => {
    {
      var _0x5c8b43 = {
        "method": "POST",
        "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
        "headers": {
          "Host": "nongchang.maxrocky.com",
          "Connection": "keep-alive",
          "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
        },
        "data": {
          "skey": axncwx,
          "type": "CourtesyPets"
        }
      };
      debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5c8b43)));
      axios.request(_0x5c8b43).then(async function (_0x3d86a1) {
        try {
          data = _0x3d86a1.data;
          debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3d86a1.data)));
          if (data.errCode == 0) {
            log("喂养宠物" + data.errMsg);
          } else log(data.errMsg);
        } catch (_0x47defd) {
          log("异常：" + data + "，原因：" + data.message);
        }
      }).catch(function (_0x51f6cd) {
        console.error(_0x51f6cd);
      }).then(_0xaf331d => {
        _0x25d825();
      });
    }
  });
}
async function buyGoods() {
  return new Promise(_0x240c78 => {
    {
      var _0x5c77bd = {
        "method": "POST",
        "url": "https://nongchang.maxrocky.com/index.php?s=index/index/buyGoods",
        "headers": {
          "Host": "nongchang.maxrocky.com",
          "Connection": "keep-alive",
          "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
        },
        "data": {
          "skey": axncwx,
          "type": "seeds",
          "buyId": 12,
          "num": 2
        }
      };
      debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5c77bd)));
      axios.request(_0x5c77bd).then(async function (_0x41455d) {
        try {
          data = _0x41455d.data;
          debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x41455d.data)));
          data.errCode == 0 ? log("种子" + data.errMsg) : log(data.errMsg);
        } catch (_0x9dfbb1) {
          log("异常：" + data + "，原因：" + data.message);
        }
      }).catch(function (_0x52579b) {
        console.error(_0x52579b);
      }).then(_0x849d14 => {
        _0x240c78();
      });
    }
  });
}
async function getUserWarehouse() {
  return new Promise(_0xf9dc85 => {
    var _0x22e703 = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/getUserWarehouse",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "skey": axncwx,
        "type": "seeds",
        "parentType": "sow"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x22e703)));
    axios.request(_0x22e703).then(async function (_0x51bf75) {
      try {
        data = _0x51bf75.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x51bf75.data)));
        seed = data.data;
        num = seed[0].num;
      } catch (_0x3317bb) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x45f811) {
      console.error(_0x45f811);
    }).then(_0x2333d2 => {
      _0xf9dc85();
    });
  });
}
async function userCrops1(_0x30ac02, _0x467aa8) {
  return new Promise(_0x270de1 => {
    var _0xa5d580 = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/userCrops",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "skey": axncwx,
        "seedId": _0x30ac02,
        "lid": _0x467aa8
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xa5d580)));
    axios.request(_0xa5d580).then(async function (_0x559dbd) {
      try {
        data = _0x559dbd.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x559dbd.data)));
        if (data.errCode == 0) {
          log("" + data.errMsg);
        } else log(data.errMsg);
      } catch (_0x57ca8d) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x36294c) {
      console.error(_0x36294c);
    }).then(_0x18ca03 => {
      _0x270de1();
    });
  });
}
async function wateringCrops(_0x529f6d) {
  return new Promise(_0x4cbdba => {
    var _0x21a4a5 = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "type": "wateringCrops",
        "skey": axncwx,
        "lid": "" + _0x529f6d
      }
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url ===============");
      log(JSON.stringify(_0x21a4a5));
    }
    axios.request(_0x21a4a5).then(async function (_0x367595) {
      try {
        data = _0x367595.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x367595.data)));
        log(_0x529f6d);
        data.errCode == 0 ? log("浇水" + data.errMsg + "，" + data.type_name) : log(data.errMsg);
      } catch (_0xfacaa1) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x58ab3e) {
      console.error(_0x58ab3e);
    }).then(_0x4ffc9c => {
      _0x4cbdba();
    });
  });
}
async function userCrops(_0x53809d) {
  return new Promise(_0x2c5788 => {
    {
      var _0x4a7237 = {
        "method": "POST",
        "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
        "headers": {
          "Host": "nongchang.maxrocky.com",
          "Connection": "keep-alive",
          "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
        },
        "data": {
          "type": "fertilizeCrops",
          "skey": axncwx,
          "lid": "1"
        }
      };
      if (debug) {
        log("\n【debug】=============== 这是  请求 url ===============");
        log(JSON.stringify(_0x4a7237));
      }
      axios.request(_0x4a7237).then(async function (_0x5985f5) {
        try {
          data = _0x5985f5.data;
          debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x5985f5.data)));
          data.errCode == 0 ? log("施肥" + data.errMsg + "，" + data.type_name) : log(data.errMsg);
        } catch (_0x5bc92e) {
          log("异常：" + data + "，原因：" + data.message);
        }
      }).catch(function (_0x31b74d) {
        console.error(_0x31b74d);
      }).then(_0x7d7068 => {
        _0x2c5788();
      });
    }
  });
}
async function harvestFruitAll() {
  return new Promise(_0x11638c => {
    var _0x3278cf = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "type": "harvestFruitAll",
        "skey": axncwx,
        "order_id": 1
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x3278cf)));
    axios.request(_0x3278cf).then(async function (_0x445111) {
      try {
        data = _0x445111.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x445111.data)));
        data.errCode == 0 ? log("收取" + data.errMsg + "，" + data.type_name) : log(data.errMsg);
      } catch (_0x3fa4ce) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x526f09) {
      console.error(_0x526f09);
    }).then(_0x5298c3 => {
      _0x11638c();
    });
  });
}
async function shovelFruit() {
  return new Promise(_0x30fd44 => {
    {
      var _0x3234e2 = {
        "method": "POST",
        "url": "https://nongchang.maxrocky.com/index.php?s=index/index/shovelFruit",
        "headers": {
          "Host": "nongchang.maxrocky.com",
          "Connection": "keep-alive",
          "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
        },
        "data": {
          "skey": axncwx
        }
      };
      debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x3234e2)));
      axios.request(_0x3234e2).then(async function (_0x57a7ad) {
        try {
          data = _0x57a7ad.data;
          debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x57a7ad.data)));
          data.errCode == 0 ? log("" + data.errMsg) : log(data);
        } catch (_0x1602b8) {
          log("异常：" + data + "，原因：" + data.message);
        }
      }).catch(function (_0x3c403d) {
        console.error(_0x3c403d);
      }).then(_0x263242 => {
        _0x30fd44();
      });
    }
  });
}
async function userSell() {
  return new Promise(_0x29a9e2 => {
    var _0x136ac6 = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/userSell",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "sellType": "fruit",
        "type": "all",
        "skey": axncwx
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x136ac6)));
    axios.request(_0x136ac6).then(async function (_0x23dff9) {
      try {
        {
          data = _0x23dff9.data;
          debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x23dff9.data)));
          if (data.errCode == 0) log("果实" + data.errMsg);else {
            log(data);
          }
        }
      } catch (_0x3c4845) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x5f5747) {
      console.error(_0x5f5747);
    }).then(_0x485174 => {
      _0x29a9e2();
    });
  });
}
async function getQuestion() {
  return new Promise(_0x5d4396 => {
    var _0x3efc8a = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/getQuestion",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {}
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x3efc8a)));
    axios.request(_0x3efc8a).then(async function (_0x1a169e) {
      try {
        data = _0x1a169e.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1a169e.data)));
        id = data.data.id;
        await questionBank(id);
      } catch (_0x9a9188) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x45bbd6) {
      console.error(_0x45bbd6);
    }).then(_0x4b8f50 => {
      _0x5d4396();
    });
  });
}
async function questionBank(_0x4b37d8) {
  return new Promise(_0x3f7501 => {
    var _0x5aca4a = {
      "method": "POST",
      "url": "https://nongchang.maxrocky.com/index.php?s=index/index/setUserLog",
      "headers": {
        "Host": "nongchang.maxrocky.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx05f44f40535eada7/90/page-frame.html",
        "xweb_xhr": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938"
      },
      "data": {
        "type": "questionBank",
        "skey": axncwx,
        "type_id": _0x4b37d8,
        "userAnswer": "C"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5aca4a)));
    axios.request(_0x5aca4a).then(async function (_0x32330c) {
      try {
        data = _0x32330c.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x32330c.data)));
        data.errCode == 0 ? log(data.type_name + "--获得公益值" + data.getBalance) : log(data);
      } catch (_0x3efc9b) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x4b70d) {
      console.error(_0x4b70d);
    }).then(_0x10816d => {
      _0x3f7501();
    });
  });
}
async function Envs() {
  if (axncwx) {
    {
      if (axncwx.indexOf("@") != -1) axncwx.split("@").forEach(_0x5ed18d => {
        axncwxArr.push(_0x5ed18d);
      });else axncwx.indexOf("\n") != -1 ? axncwx.split("\n").forEach(_0x578c95 => {
        axncwxArr.push(_0x578c95);
      }) : axncwxArr.push(axncwx);
    }
  } else {
    {
      log("\n 【" + $.name + "】：未填写变量 axncwx");
      return;
    }
  }
  return true;
}
function addNotifyStr(_0x49c1d4, _0x9bf8f5 = true) {
  _0x9bf8f5 && log(_0x49c1d4 + "\n");
  msg += _0x49c1d4 + "\n";
}
function formatDate(_0x1f8e24) {
  var _0x1f8e24 = new Date(_0x1f8e24 * 1000);
  var _0x4c59a7 = _0x1f8e24.getFullYear() + "-";
  var _0x3ca11e = (_0x1f8e24.getMonth() + 1 < 10 ? "0" + (_0x1f8e24.getMonth() + 1) : _0x1f8e24.getMonth() + 1) + "-";
  var _0x17c370 = _0x1f8e24.getDate() < 10 ? "0" + _0x1f8e24.getDate() : _0x1f8e24.getDate();
  var _0x572b2d = (_0x1f8e24.getHours() < 10 ? "0" + _0x1f8e24.getHours() : _0x1f8e24.getHours()) + ":";
  var _0x2f8219 = (_0x1f8e24.getMinutes() < 10 ? "0" + _0x1f8e24.getMinutes() : _0x1f8e24.getMinutes()) + ":";
  var _0xa213fb = _0x1f8e24.getSeconds() < 10 ? "0" + _0x1f8e24.getSeconds() : _0x1f8e24.getSeconds();
  return _0x4c59a7 + _0x3ca11e + _0x17c370 + " " + _0x572b2d + _0x2f8219 + _0xa213fb;
}
async function SendMsg(_0x350bd1) {
  if (!_0x350bd1) return;
  if (Notify > 0) {
    {
      if ($.isNode()) {
        {
          var _0x7d86c = require("./sendNotify");
          await _0x7d86c.sendNotify($.name, _0x350bd1);
        }
      } else $.msg(_0x350bd1);
    }
  } else log(_0x350bd1);
}
var MD5 = function (_0x4977e2) {
  function _0xab75a1(_0x2c8b48, _0x5e11e7) {
    return _0x2c8b48 << _0x5e11e7 | _0x2c8b48 >>> 32 - _0x5e11e7;
  }
  function _0x11c64c(_0x27bf99, _0xe58d00) {
    {
      var _0x5aa0ef, _0x5db7ce, _0x18cab7, _0x4b9cf3, _0x3cbe31;
      _0x18cab7 = _0x27bf99 & 2147483648;
      _0x4b9cf3 = _0xe58d00 & 2147483648;
      _0x5aa0ef = _0x27bf99 & 1073741824;
      _0x5db7ce = _0xe58d00 & 1073741824;
      _0x3cbe31 = (_0x27bf99 & 1073741823) + (_0xe58d00 & 1073741823);
      if (_0x5aa0ef & _0x5db7ce) return _0x3cbe31 ^ 2147483648 ^ _0x18cab7 ^ _0x4b9cf3;
      if (_0x5aa0ef | _0x5db7ce) {
        {
          if (_0x3cbe31 & 1073741824) return _0x3cbe31 ^ 3221225472 ^ _0x18cab7 ^ _0x4b9cf3;else {
            return _0x3cbe31 ^ 1073741824 ^ _0x18cab7 ^ _0x4b9cf3;
          }
        }
      } else return _0x3cbe31 ^ _0x18cab7 ^ _0x4b9cf3;
    }
  }
  function _0x34199b(_0x41cd24, _0x7a714d, _0x23ac8a) {
    return _0x41cd24 & _0x7a714d | ~_0x41cd24 & _0x23ac8a;
  }
  function _0x16d3f1(_0x27982b, _0x15e759, _0x594acb) {
    return _0x27982b & _0x594acb | _0x15e759 & ~_0x594acb;
  }
  function _0x18e40a(_0x219db1, _0x169759, _0x404434) {
    return _0x219db1 ^ _0x169759 ^ _0x404434;
  }
  function _0x228f2b(_0x2e3216, _0xb88d29, _0x4f1cd0) {
    return _0xb88d29 ^ (_0x2e3216 | ~_0x4f1cd0);
  }
  function _0x50738e(_0x4eebb1, _0x471603, _0x17a6f2, _0x5b2679, _0x54de40, _0x5223f7, _0x35d13b) {
    _0x4eebb1 = _0x11c64c(_0x4eebb1, _0x11c64c(_0x11c64c(_0x34199b(_0x471603, _0x17a6f2, _0x5b2679), _0x54de40), _0x35d13b));
    return _0x11c64c(_0xab75a1(_0x4eebb1, _0x5223f7), _0x471603);
  }
  function _0x276e49(_0x2de28e, _0x1310ab, _0x30ac42, _0x15cc32, _0x2bb3c2, _0x4b42fa, _0x5d9f3c) {
    _0x2de28e = _0x11c64c(_0x2de28e, _0x11c64c(_0x11c64c(_0x16d3f1(_0x1310ab, _0x30ac42, _0x15cc32), _0x2bb3c2), _0x5d9f3c));
    return _0x11c64c(_0xab75a1(_0x2de28e, _0x4b42fa), _0x1310ab);
  }
  function _0x371538(_0x27af9c, _0x4c5117, _0x505676, _0x14e7d9, _0x9166d6, _0x5471ad, _0x46aecc) {
    _0x27af9c = _0x11c64c(_0x27af9c, _0x11c64c(_0x11c64c(_0x18e40a(_0x4c5117, _0x505676, _0x14e7d9), _0x9166d6), _0x46aecc));
    return _0x11c64c(_0xab75a1(_0x27af9c, _0x5471ad), _0x4c5117);
  }
  function _0x4d0f54(_0x5b0c64, _0x239f2f, _0x1c5679, _0x318ddb, _0x6bafca, _0x53e167, _0x137c34) {
    _0x5b0c64 = _0x11c64c(_0x5b0c64, _0x11c64c(_0x11c64c(_0x228f2b(_0x239f2f, _0x1c5679, _0x318ddb), _0x6bafca), _0x137c34));
    return _0x11c64c(_0xab75a1(_0x5b0c64, _0x53e167), _0x239f2f);
  }
  function _0x353c1b(_0x124138) {
    var _0x323649;
    var _0x1e1016 = _0x124138.length;
    var _0x3af22a = _0x1e1016 + 8;
    var _0x46623d = (_0x3af22a - _0x3af22a % 64) / 64;
    var _0x8ec22b = (_0x46623d + 1) * 16;
    var _0x2dae56 = Array(_0x8ec22b - 1);
    var _0x181dbf = 0;
    var _0x2b3c13 = 0;
    while (_0x2b3c13 < _0x1e1016) {
      _0x323649 = (_0x2b3c13 - _0x2b3c13 % 4) / 4;
      _0x181dbf = _0x2b3c13 % 4 * 8;
      _0x2dae56[_0x323649] = _0x2dae56[_0x323649] | _0x124138.charCodeAt(_0x2b3c13) << _0x181dbf;
      _0x2b3c13++;
    }
    _0x323649 = (_0x2b3c13 - _0x2b3c13 % 4) / 4;
    _0x181dbf = _0x2b3c13 % 4 * 8;
    _0x2dae56[_0x323649] = _0x2dae56[_0x323649] | 128 << _0x181dbf;
    _0x2dae56[_0x8ec22b - 2] = _0x1e1016 << 3;
    _0x2dae56[_0x8ec22b - 1] = _0x1e1016 >>> 29;
    return _0x2dae56;
  }
  function _0x5ac29e(_0x56b661) {
    var _0x5bbce7 = "",
      _0x57efa6 = "",
      _0x21fc43,
      _0x31b50d;
    for (_0x31b50d = 0; _0x31b50d <= 3; _0x31b50d++) {
      _0x21fc43 = _0x56b661 >>> _0x31b50d * 8 & 255;
      _0x57efa6 = "0" + _0x21fc43.toString(16);
      _0x5bbce7 = _0x5bbce7 + _0x57efa6.substr(_0x57efa6.length - 2, 2);
    }
    return _0x5bbce7;
  }
  function _0x512dc7(_0x25edf1) {
    {
      _0x25edf1 = _0x25edf1.replace(/\r\n/g, "\n");
      var _0x1c7cd7 = "";
      for (var _0x174f2f = 0; _0x174f2f < _0x25edf1.length; _0x174f2f++) {
        var _0x234cac = _0x25edf1.charCodeAt(_0x174f2f);
        if (_0x234cac < 128) _0x1c7cd7 += String.fromCharCode(_0x234cac);else _0x234cac > 127 && _0x234cac < 2048 ? (_0x1c7cd7 += String.fromCharCode(_0x234cac >> 6 | 192), _0x1c7cd7 += String.fromCharCode(_0x234cac & 63 | 128)) : (_0x1c7cd7 += String.fromCharCode(_0x234cac >> 12 | 224), _0x1c7cd7 += String.fromCharCode(_0x234cac >> 6 & 63 | 128), _0x1c7cd7 += String.fromCharCode(_0x234cac & 63 | 128));
      }
      return _0x1c7cd7;
    }
  }
  var _0x16e0a2 = Array(),
    _0x393ce3,
    _0x3db912,
    _0x3246a1,
    _0x3ec3c7,
    _0xad2b01,
    _0xd45a08,
    _0x1aa0d4,
    _0x26c0f5,
    _0x2819a6,
    _0x561ac1 = 7,
    _0xc9f511 = 12,
    _0x2296eb = 17,
    _0x508bac = 22,
    _0x152faf = 5,
    _0x55327b = 9,
    _0x1f5aef = 14,
    _0x107abf = 20,
    _0x3972c4 = 4,
    _0x30cf28 = 11,
    _0x314991 = 16,
    _0x45d06f = 23,
    _0x52cd0d = 6,
    _0x61d4de = 10,
    _0x42781b = 15,
    _0x2b224b = 21;
  _0x4977e2 = _0x512dc7(_0x4977e2);
  _0x16e0a2 = _0x353c1b(_0x4977e2);
  _0xd45a08 = 1732584193;
  _0x1aa0d4 = 4023233417;
  _0x26c0f5 = 2562383102;
  _0x2819a6 = 271733878;
  for (_0x393ce3 = 0; _0x393ce3 < _0x16e0a2.length; _0x393ce3 += 16) {
    _0x3db912 = _0xd45a08;
    _0x3246a1 = _0x1aa0d4;
    _0x3ec3c7 = _0x26c0f5;
    _0xad2b01 = _0x2819a6;
    _0xd45a08 = _0x50738e(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 0], _0x561ac1, 3614090360);
    _0x2819a6 = _0x50738e(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 1], _0xc9f511, 3905402710);
    _0x26c0f5 = _0x50738e(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 2], _0x2296eb, 606105819);
    _0x1aa0d4 = _0x50738e(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 3], _0x508bac, 3250441966);
    _0xd45a08 = _0x50738e(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 4], _0x561ac1, 4118548399);
    _0x2819a6 = _0x50738e(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 5], _0xc9f511, 1200080426);
    _0x26c0f5 = _0x50738e(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 6], _0x2296eb, 2821735955);
    _0x1aa0d4 = _0x50738e(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 7], _0x508bac, 4249261313);
    _0xd45a08 = _0x50738e(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 8], _0x561ac1, 1770035416);
    _0x2819a6 = _0x50738e(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 9], _0xc9f511, 2336552879);
    _0x26c0f5 = _0x50738e(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 10], _0x2296eb, 4294925233);
    _0x1aa0d4 = _0x50738e(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 11], _0x508bac, 2304563134);
    _0xd45a08 = _0x50738e(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 12], _0x561ac1, 1804603682);
    _0x2819a6 = _0x50738e(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 13], _0xc9f511, 4254626195);
    _0x26c0f5 = _0x50738e(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 14], _0x2296eb, 2792965006);
    _0x1aa0d4 = _0x50738e(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 15], _0x508bac, 1236535329);
    _0xd45a08 = _0x276e49(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 1], _0x152faf, 4129170786);
    _0x2819a6 = _0x276e49(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 6], _0x55327b, 3225465664);
    _0x26c0f5 = _0x276e49(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 11], _0x1f5aef, 643717713);
    _0x1aa0d4 = _0x276e49(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 0], _0x107abf, 3921069994);
    _0xd45a08 = _0x276e49(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 5], _0x152faf, 3593408605);
    _0x2819a6 = _0x276e49(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 10], _0x55327b, 38016083);
    _0x26c0f5 = _0x276e49(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 15], _0x1f5aef, 3634488961);
    _0x1aa0d4 = _0x276e49(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 4], _0x107abf, 3889429448);
    _0xd45a08 = _0x276e49(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 9], _0x152faf, 568446438);
    _0x2819a6 = _0x276e49(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 14], _0x55327b, 3275163606);
    _0x26c0f5 = _0x276e49(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 3], _0x1f5aef, 4107603335);
    _0x1aa0d4 = _0x276e49(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 8], _0x107abf, 1163531501);
    _0xd45a08 = _0x276e49(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 13], _0x152faf, 2850285829);
    _0x2819a6 = _0x276e49(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 2], _0x55327b, 4243563512);
    _0x26c0f5 = _0x276e49(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 7], _0x1f5aef, 1735328473);
    _0x1aa0d4 = _0x276e49(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 12], _0x107abf, 2368359562);
    _0xd45a08 = _0x371538(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 5], _0x3972c4, 4294588738);
    _0x2819a6 = _0x371538(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 8], _0x30cf28, 2272392833);
    _0x26c0f5 = _0x371538(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 11], _0x314991, 1839030562);
    _0x1aa0d4 = _0x371538(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 14], _0x45d06f, 4259657740);
    _0xd45a08 = _0x371538(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 1], _0x3972c4, 2763975236);
    _0x2819a6 = _0x371538(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 4], _0x30cf28, 1272893353);
    _0x26c0f5 = _0x371538(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 7], _0x314991, 4139469664);
    _0x1aa0d4 = _0x371538(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 10], _0x45d06f, 3200236656);
    _0xd45a08 = _0x371538(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 13], _0x3972c4, 681279174);
    _0x2819a6 = _0x371538(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 0], _0x30cf28, 3936430074);
    _0x26c0f5 = _0x371538(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 3], _0x314991, 3572445317);
    _0x1aa0d4 = _0x371538(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 6], _0x45d06f, 76029189);
    _0xd45a08 = _0x371538(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 9], _0x3972c4, 3654602809);
    _0x2819a6 = _0x371538(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 12], _0x30cf28, 3873151461);
    _0x26c0f5 = _0x371538(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 15], _0x314991, 530742520);
    _0x1aa0d4 = _0x371538(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 2], _0x45d06f, 3299628645);
    _0xd45a08 = _0x4d0f54(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 0], _0x52cd0d, 4096336452);
    _0x2819a6 = _0x4d0f54(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 7], _0x61d4de, 1126891415);
    _0x26c0f5 = _0x4d0f54(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 14], _0x42781b, 2878612391);
    _0x1aa0d4 = _0x4d0f54(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 5], _0x2b224b, 4237533241);
    _0xd45a08 = _0x4d0f54(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 12], _0x52cd0d, 1700485571);
    _0x2819a6 = _0x4d0f54(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 3], _0x61d4de, 2399980690);
    _0x26c0f5 = _0x4d0f54(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 10], _0x42781b, 4293915773);
    _0x1aa0d4 = _0x4d0f54(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 1], _0x2b224b, 2240044497);
    _0xd45a08 = _0x4d0f54(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 8], _0x52cd0d, 1873313359);
    _0x2819a6 = _0x4d0f54(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 15], _0x61d4de, 4264355552);
    _0x26c0f5 = _0x4d0f54(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 6], _0x42781b, 2734768916);
    _0x1aa0d4 = _0x4d0f54(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 13], _0x2b224b, 1309151649);
    _0xd45a08 = _0x4d0f54(_0xd45a08, _0x1aa0d4, _0x26c0f5, _0x2819a6, _0x16e0a2[_0x393ce3 + 4], _0x52cd0d, 4149444226);
    _0x2819a6 = _0x4d0f54(_0x2819a6, _0xd45a08, _0x1aa0d4, _0x26c0f5, _0x16e0a2[_0x393ce3 + 11], _0x61d4de, 3174756917);
    _0x26c0f5 = _0x4d0f54(_0x26c0f5, _0x2819a6, _0xd45a08, _0x1aa0d4, _0x16e0a2[_0x393ce3 + 2], _0x42781b, 718787259);
    _0x1aa0d4 = _0x4d0f54(_0x1aa0d4, _0x26c0f5, _0x2819a6, _0xd45a08, _0x16e0a2[_0x393ce3 + 9], _0x2b224b, 3951481745);
    _0xd45a08 = _0x11c64c(_0xd45a08, _0x3db912);
    _0x1aa0d4 = _0x11c64c(_0x1aa0d4, _0x3246a1);
    _0x26c0f5 = _0x11c64c(_0x26c0f5, _0x3ec3c7);
    _0x2819a6 = _0x11c64c(_0x2819a6, _0xad2b01);
  }
  var _0x2dc3a3 = _0x5ac29e(_0xd45a08) + _0x5ac29e(_0x1aa0d4) + _0x5ac29e(_0x26c0f5) + _0x5ac29e(_0x2819a6);
  return _0x2dc3a3.toLowerCase();
};
function randomString(_0x22fab6) {
  for (var _0x527e46 = _0x22fab6 > 0 && undefined !== _0x22fab6 ? _0x22fab6 : 21, _0x16e0b5 = ""; _0x16e0b5.length < _0x527e46;) _0x16e0b5 += Math.random().toString(36).slice(2);
  return _0x16e0b5.slice(0, _0x527e46);
}
function randomnum(_0x199184) {
  _0x199184 = _0x199184 || 32;
  var _0x205682 = "1234567890",
    _0x311fef = _0x205682.length,
    _0x326168 = "";
  for (i = 0; i < _0x199184; i++) _0x326168 += _0x205682.charAt(Math.floor(Math.random() * _0x311fef));
  return _0x326168;
}
function Env(_0x41ec94, _0x350f80) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x125a74 {
    constructor(_0x2c4930) {
      this.env = _0x2c4930;
    }
    ["send"](_0x261572, _0x6210be = "GET") {
      _0x261572 = "string" == typeof _0x261572 ? {
        "url": _0x261572
      } : _0x261572;
      let _0x29dfb5 = this.get;
      "POST" === _0x6210be && (_0x29dfb5 = this.post);
      return new Promise((_0x5759d4, _0x44486a) => {
        _0x29dfb5.call(this, _0x261572, (_0x1c102f, _0x25fb98, _0x3379b9) => {
          _0x1c102f ? _0x44486a(_0x1c102f) : _0x5759d4(_0x25fb98);
        });
      });
    }
    ["get"](_0x2269a7) {
      return this.send.call(this.env, _0x2269a7);
    }
    ["post"](_0x3f85e3) {
      return this.send.call(this.env, _0x3f85e3, "POST");
    }
  }
  return new class {
    constructor(_0x5221e3, _0x19c303) {
      this.name = _0x5221e3;
      this.http = new _0x125a74(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x19c303);
      this.log("", "??" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x3b2ff0, _0x2c769d = null) {
      try {
        return JSON.parse(_0x3b2ff0);
      } catch {
        return _0x2c769d;
      }
    }
    ["toStr"](_0x4781b8, _0x703956 = null) {
      try {
        return JSON.stringify(_0x4781b8);
      } catch {
        return _0x703956;
      }
    }
    ["getjson"](_0x36c11f, _0x8f32f7) {
      let _0x30b505 = _0x8f32f7;
      const _0x32516a = this.getdata(_0x36c11f);
      if (_0x32516a) try {
        _0x30b505 = JSON.parse(this.getdata(_0x36c11f));
      } catch {}
      return _0x30b505;
    }
    ["setjson"](_0x32af96, _0xcfe6c0) {
      try {
        return this.setdata(JSON.stringify(_0x32af96), _0xcfe6c0);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x584f49) {
      return new Promise(_0x1269a9 => {
        this.get({
          "url": _0x584f49
        }, (_0x2b343d, _0x33ade9, _0x1b346b) => _0x1269a9(_0x1b346b));
      });
    }
    ["runScript"](_0x5418aa, _0x4724cb) {
      return new Promise(_0x5843f4 => {
        {
          let _0x2dcc34 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          _0x2dcc34 = _0x2dcc34 ? _0x2dcc34.replace(/\n/g, "").trim() : _0x2dcc34;
          let _0x227ee8 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          _0x227ee8 = _0x227ee8 ? 1 * _0x227ee8 : 20;
          _0x227ee8 = _0x4724cb && _0x4724cb.timeout ? _0x4724cb.timeout : _0x227ee8;
          const [_0x51be70, _0x3ae049] = _0x2dcc34.split("@"),
            _0x1affa5 = {
              "url": "http://" + _0x3ae049 + "/v1/scripting/evaluate",
              "body": {
                "script_text": _0x5418aa,
                "mock_type": "cron",
                "timeout": _0x227ee8
              },
              "headers": {
                "X-Key": _0x51be70,
                "Accept": "*/*"
              }
            };
          this.post(_0x1affa5, (_0x441367, _0x4fa2bc, _0x391741) => _0x5843f4(_0x391741));
        }
      }).catch(_0x22ae2e => this.logErr(_0x22ae2e));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x592ad4 = this.path.resolve(this.dataFile),
            _0x8fc8c5 = this.path.resolve(process.cwd(), this.dataFile),
            _0x301740 = this.fs.existsSync(_0x592ad4),
            _0x5950aa = !_0x301740 && this.fs.existsSync(_0x8fc8c5);
          if (!_0x301740 && !_0x5950aa) return {};
          {
            {
              const _0x2f4c80 = _0x301740 ? _0x592ad4 : _0x8fc8c5;
              try {
                return JSON.parse(this.fs.readFileSync(_0x2f4c80));
              } catch (_0x2a0b32) {
                return {};
              }
            }
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0xb238f8 = this.path.resolve(this.dataFile),
            _0x827318 = this.path.resolve(process.cwd(), this.dataFile),
            _0x38d33a = this.fs.existsSync(_0xb238f8),
            _0xf136f8 = !_0x38d33a && this.fs.existsSync(_0x827318),
            _0x4c3c7e = JSON.stringify(this.data);
          _0x38d33a ? this.fs.writeFileSync(_0xb238f8, _0x4c3c7e) : _0xf136f8 ? this.fs.writeFileSync(_0x827318, _0x4c3c7e) : this.fs.writeFileSync(_0xb238f8, _0x4c3c7e);
        }
      }
    }
    ["lodash_get"](_0x2239a8, _0x520a60, _0x51d9e4) {
      const _0x5b153d = _0x520a60.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x5573e4 = _0x2239a8;
      for (const _0xd9a59c of _0x5b153d) if (_0x5573e4 = Object(_0x5573e4)[_0xd9a59c], undefined === _0x5573e4) return _0x51d9e4;
      return _0x5573e4;
    }
    ["lodash_set"](_0x414464, _0x3f2c0f, _0x337d4f) {
      return Object(_0x414464) !== _0x414464 ? _0x414464 : (Array.isArray(_0x3f2c0f) || (_0x3f2c0f = _0x3f2c0f.toString().match(/[^.[\]]+/g) || []), _0x3f2c0f.slice(0, -1).reduce((_0x227537, _0x59c623, _0x384ed8) => Object(_0x227537[_0x59c623]) === _0x227537[_0x59c623] ? _0x227537[_0x59c623] : _0x227537[_0x59c623] = Math.abs(_0x3f2c0f[_0x384ed8 + 1]) >> 0 == +_0x3f2c0f[_0x384ed8 + 1] ? [] : {}, _0x414464)[_0x3f2c0f[_0x3f2c0f.length - 1]] = _0x337d4f, _0x414464);
    }
    ["getdata"](_0x2b2c5c) {
      {
        let _0x5f311c = this.getval(_0x2b2c5c);
        if (/^@/.test(_0x2b2c5c)) {
          {
            const [, _0x863b85, _0x31881e] = /^@(.*?)\.(.*?)$/.exec(_0x2b2c5c),
              _0x537b76 = _0x863b85 ? this.getval(_0x863b85) : "";
            if (_0x537b76) try {
              const _0x349ba2 = JSON.parse(_0x537b76);
              _0x5f311c = _0x349ba2 ? this.lodash_get(_0x349ba2, _0x31881e, "") : _0x5f311c;
            } catch (_0x27d2a3) {
              _0x5f311c = "";
            }
          }
        }
        return _0x5f311c;
      }
    }
    ["setdata"](_0xfed52, _0x4f05e3) {
      let _0x5db180 = false;
      if (/^@/.test(_0x4f05e3)) {
        const [, _0x17642f, _0x2dff8b] = /^@(.*?)\.(.*?)$/.exec(_0x4f05e3),
          _0x59bf97 = this.getval(_0x17642f),
          _0x210719 = _0x17642f ? "null" === _0x59bf97 ? null : _0x59bf97 || "{}" : "{}";
        try {
          {
            const _0x135afd = JSON.parse(_0x210719);
            this.lodash_set(_0x135afd, _0x2dff8b, _0xfed52);
            _0x5db180 = this.setval(JSON.stringify(_0x135afd), _0x17642f);
          }
        } catch (_0x2c2eb5) {
          const _0x3a8daf = {};
          this.lodash_set(_0x3a8daf, _0x2dff8b, _0xfed52);
          _0x5db180 = this.setval(JSON.stringify(_0x3a8daf), _0x17642f);
        }
      } else _0x5db180 = this.setval(_0xfed52, _0x4f05e3);
      return _0x5db180;
    }
    ["getval"](_0x586b06) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x586b06) : this.isQuanX() ? $prefs.valueForKey(_0x586b06) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x586b06]) : this.data && this.data[_0x586b06] || null;
    }
    ["setval"](_0x3bb7f3, _0x163177) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x3bb7f3, _0x163177) : this.isQuanX() ? $prefs.setValueForKey(_0x3bb7f3, _0x163177) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x163177] = _0x3bb7f3, this.writedata(), true) : this.data && this.data[_0x163177] || null;
    }
    ["initGotEnv"](_0x128b30) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x128b30 && (_0x128b30.headers = _0x128b30.headers ? _0x128b30.headers : {}, undefined === _0x128b30.headers.Cookie && undefined === _0x128b30.cookieJar && (_0x128b30.cookieJar = this.ckjar));
    }
    ["get"](_0x4b9b3d, _0x1ac963 = () => {}) {
      _0x4b9b3d.headers && (delete _0x4b9b3d.headers["Content-Type"], delete _0x4b9b3d.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x4b9b3d.headers = _0x4b9b3d.headers || {}, Object.assign(_0x4b9b3d.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x4b9b3d, (_0x48c272, _0x4ceebf, _0x12b3ca) => {
        !_0x48c272 && _0x4ceebf && (_0x4ceebf.body = _0x12b3ca, _0x4ceebf.statusCode = _0x4ceebf.status);
        _0x1ac963(_0x48c272, _0x4ceebf, _0x12b3ca);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x4b9b3d.opts = _0x4b9b3d.opts || {}, Object.assign(_0x4b9b3d.opts, {
        "hints": false
      })), $task.fetch(_0x4b9b3d).then(_0x222895 => {
        {
          const {
            statusCode: _0x333771,
            statusCode: _0xc0658d,
            headers: _0x3259d0,
            body: _0x24cb90
          } = _0x222895;
          _0x1ac963(null, {
            "status": _0x333771,
            "statusCode": _0xc0658d,
            "headers": _0x3259d0,
            "body": _0x24cb90
          }, _0x24cb90);
        }
      }, _0x2e28a6 => _0x1ac963(_0x2e28a6))) : this.isNode() && (this.initGotEnv(_0x4b9b3d), this.got(_0x4b9b3d).on("redirect", (_0x3b674d, _0xb031f) => {
        try {
          if (_0x3b674d.headers["set-cookie"]) {
            const _0x53e3fb = _0x3b674d.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x53e3fb && this.ckjar.setCookieSync(_0x53e3fb, null);
            _0xb031f.cookieJar = this.ckjar;
          }
        } catch (_0x1f7d18) {
          this.logErr(_0x1f7d18);
        }
      }).then(_0x5ce789 => {
        const {
          statusCode: _0x4bf17e,
          statusCode: _0x323512,
          headers: _0x300618,
          body: _0x51e2b1
        } = _0x5ce789;
        _0x1ac963(null, {
          "status": _0x4bf17e,
          "statusCode": _0x323512,
          "headers": _0x300618,
          "body": _0x51e2b1
        }, _0x51e2b1);
      }, _0x55260d => {
        const {
          message: _0x1fd2a5,
          response: _0x24a501
        } = _0x55260d;
        _0x1ac963(_0x1fd2a5, _0x24a501, _0x24a501 && _0x24a501.body);
      }));
    }
    ["post"](_0x2a1fc7, _0x591e45 = () => {}) {
      {
        if (_0x2a1fc7.body && _0x2a1fc7.headers && !_0x2a1fc7.headers["Content-Type"] && (_0x2a1fc7.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x2a1fc7.headers && delete _0x2a1fc7.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x2a1fc7.headers = _0x2a1fc7.headers || {}, Object.assign(_0x2a1fc7.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.post(_0x2a1fc7, (_0x2273f4, _0x2d515b, _0x252616) => {
          !_0x2273f4 && _0x2d515b && (_0x2d515b.body = _0x252616, _0x2d515b.statusCode = _0x2d515b.status);
          _0x591e45(_0x2273f4, _0x2d515b, _0x252616);
        });else {
          if (this.isQuanX()) _0x2a1fc7.method = "POST", this.isNeedRewrite && (_0x2a1fc7.opts = _0x2a1fc7.opts || {}, Object.assign(_0x2a1fc7.opts, {
            "hints": false
          })), $task.fetch(_0x2a1fc7).then(_0x842c32 => {
            {
              const {
                statusCode: _0xab71f2,
                statusCode: _0x2cabc2,
                headers: _0x314ed0,
                body: _0x30c49a
              } = _0x842c32;
              _0x591e45(null, {
                "status": _0xab71f2,
                "statusCode": _0x2cabc2,
                "headers": _0x314ed0,
                "body": _0x30c49a
              }, _0x30c49a);
            }
          }, _0x205517 => _0x591e45(_0x205517));else {
            if (this.isNode()) {
              this.initGotEnv(_0x2a1fc7);
              const {
                url: _0x20eb38,
                ..._0x2e5492
              } = _0x2a1fc7;
              this.got.post(_0x20eb38, _0x2e5492).then(_0x2721a5 => {
                {
                  const {
                    statusCode: _0x17e173,
                    statusCode: _0x4e9adc,
                    headers: _0x4b6183,
                    body: _0x32eada
                  } = _0x2721a5;
                  _0x591e45(null, {
                    "status": _0x17e173,
                    "statusCode": _0x4e9adc,
                    "headers": _0x4b6183,
                    "body": _0x32eada
                  }, _0x32eada);
                }
              }, _0x3501db => {
                {
                  const {
                    message: _0x24b268,
                    response: _0x1dcc75
                  } = _0x3501db;
                  _0x591e45(_0x24b268, _0x1dcc75, _0x1dcc75 && _0x1dcc75.body);
                }
              });
            }
          }
        }
      }
    }
    ["time"](_0x4a74fd, _0x4e3f60 = null) {
      const _0x363298 = _0x4e3f60 ? new Date(_0x4e3f60) : new Date();
      let _0x2c992e = {
        "M+": _0x363298.getMonth() + 1,
        "d+": _0x363298.getDate(),
        "H+": _0x363298.getHours(),
        "m+": _0x363298.getMinutes(),
        "s+": _0x363298.getSeconds(),
        "q+": Math.floor((_0x363298.getMonth() + 3) / 3),
        "S": _0x363298.getMilliseconds()
      };
      /(y+)/.test(_0x4a74fd) && (_0x4a74fd = _0x4a74fd.replace(RegExp.$1, (_0x363298.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x583147 in _0x2c992e) new RegExp("(" + _0x583147 + ")").test(_0x4a74fd) && (_0x4a74fd = _0x4a74fd.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2c992e[_0x583147] : ("00" + _0x2c992e[_0x583147]).substr(("" + _0x2c992e[_0x583147]).length)));
      return _0x4a74fd;
    }
    ["msg"](_0x8d5c90 = _0x41ec94, _0x4f8d56 = "", _0x17336b = "", _0xb1b602) {
      {
        const _0x22fbe0 = _0x3abff1 => {
          if (!_0x3abff1) return _0x3abff1;
          if ("string" == typeof _0x3abff1) return this.isLoon() ? _0x3abff1 : this.isQuanX() ? {
            "open-url": _0x3abff1
          } : this.isSurge() ? {
            "url": _0x3abff1
          } : undefined;
          if ("object" == typeof _0x3abff1) {
            if (this.isLoon()) {
              {
                let _0x17df0a = _0x3abff1.openUrl || _0x3abff1.url || _0x3abff1["open-url"],
                  _0x136551 = _0x3abff1.mediaUrl || _0x3abff1["media-url"];
                return {
                  "openUrl": _0x17df0a,
                  "mediaUrl": _0x136551
                };
              }
            }
            if (this.isQuanX()) {
              let _0x95c052 = _0x3abff1["open-url"] || _0x3abff1.url || _0x3abff1.openUrl,
                _0x67c0bf = _0x3abff1["media-url"] || _0x3abff1.mediaUrl;
              return {
                "open-url": _0x95c052,
                "media-url": _0x67c0bf
              };
            }
            if (this.isSurge()) {
              let _0x20c2c7 = _0x3abff1.url || _0x3abff1.openUrl || _0x3abff1["open-url"];
              return {
                "url": _0x20c2c7
              };
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x8d5c90, _0x4f8d56, _0x17336b, _0x22fbe0(_0xb1b602)) : this.isQuanX() && $notify(_0x8d5c90, _0x4f8d56, _0x17336b, _0x22fbe0(_0xb1b602))), !this.isMuteLog) {
          {
            let _0x1ec0c2 = ["", "==============📣系统通知📣=============="];
            _0x1ec0c2.push(_0x8d5c90);
            _0x4f8d56 && _0x1ec0c2.push(_0x4f8d56);
            _0x17336b && _0x1ec0c2.push(_0x17336b);
            console.log(_0x1ec0c2.join("\n"));
            this.logs = this.logs.concat(_0x1ec0c2);
          }
        }
      }
    }
    ["log"](..._0x5e34b7) {
      _0x5e34b7.length > 0 && (this.logs = [...this.logs, ..._0x5e34b7]);
      console.log(_0x5e34b7.join(this.logSeparator));
    }
    ["logErr"](_0x5db204, _0x354f62) {
      const _0x1a6d61 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x1a6d61 ? this.log("", "??" + this.name + ", 错误!", _0x5db204.stack) : this.log("", "??" + this.name + ", 错误!", _0x5db204);
    }
    ["wait"](_0x1f2a1) {
      return new Promise(_0xc0411a => setTimeout(_0xc0411a, _0x1f2a1));
    }
    ["done"](_0x327d59 = {}) {
      {
        const _0x294bd4 = new Date().getTime(),
          _0x402077 = (_0x294bd4 - this.startTime) / 1000;
        this.log("", "??" + this.name + ", 结束! ?? " + _0x402077 + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x327d59);
      }
    }
  }(_0x41ec94, _0x350f80);
}