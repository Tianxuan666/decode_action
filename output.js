//Fri Nov 29 2024 17:50:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
import { connect } from "cloudflare:sockets";
let userID = "86c50e3a-5b87-49dd-bd20-03c7f2735e40";
const proxyIPs = ["ts.hpc.tw"],
  cn_hostnames = [""];
let CDNIP = "www.visa.com.sg",
  IP1 = "www.visa.com",
  IP2 = "cis.visa.com",
  IP3 = "africa.visa.com",
  IP4 = "www.visa.com.sg",
  IP5 = "www.visaeurope.at",
  IP6 = "www.visa.com.mt",
  IP7 = "qa.visamiddleeast.com",
  IP8 = "usa.visa.com",
  IP9 = "myanmar.visa.com",
  IP10 = "www.visa.com.tw",
  IP11 = "www.visaeurope.ch",
  IP12 = "www.visa.com.br",
  IP13 = "www.visasoutheasteurope.com",
  PT1 = "80",
  PT2 = "8080",
  PT3 = "8880",
  PT4 = "2052",
  PT5 = "2082",
  PT6 = "2086",
  PT7 = "2095",
  PT8 = "443",
  PT9 = "8443",
  PT10 = "2053",
  PT11 = "2083",
  PT12 = "2087",
  PT13 = "2096",
  proxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)],
  proxyPort = proxyIP.includes(":") ? proxyIP.split(":")[1] : "443";
if (!isValidUUID(userID)) {
  throw new Error("uuid is not valid");
}
export default {
  async fetch(_0x4cdfaa, _0x32c44e, _0x17393b) {
    try {
      const {
        proxyip: _0x1c91c3
      } = _0x32c44e;
      userID = _0x32c44e.uuid || userID;
      if (_0x1c91c3) {
        if (_0x1c91c3.includes("]:")) {
          let _0x1c9bae = _0x1c91c3.lastIndexOf(":");
          proxyPort = _0x1c91c3.slice(_0x1c9bae + 1);
          proxyIP = _0x1c91c3.slice(0, _0x1c9bae);
        } else {
          if (!_0x1c91c3.includes("]:") && !_0x1c91c3.includes("]")) {
            [proxyIP, proxyPort = "443"] = _0x1c91c3.split(":");
          } else {
            proxyPort = "443";
            proxyIP = _0x1c91c3;
          }
        }
      } else {
        if (proxyIP.includes("]:")) {
          let _0x26f279 = proxyIP.lastIndexOf(":");
          proxyPort = proxyIP.slice(_0x26f279 + 1);
          proxyIP = proxyIP.slice(0, _0x26f279);
        } else {
          if (!proxyIP.includes("]:") && !proxyIP.includes("]")) {
            [proxyIP, proxyPort = "443"] = proxyIP.split(":");
          } else {
            proxyPort = "443";
          }
        }
      }
      console.log("ProxyIP:", proxyIP);
      console.log("ProxyPort:", proxyPort);
      CDNIP = _0x32c44e.cdnip || CDNIP;
      IP1 = _0x32c44e.ip1 || IP1;
      IP2 = _0x32c44e.ip2 || IP2;
      IP3 = _0x32c44e.ip3 || IP3;
      IP4 = _0x32c44e.ip4 || IP4;
      IP5 = _0x32c44e.ip5 || IP5;
      IP6 = _0x32c44e.ip6 || IP6;
      IP7 = _0x32c44e.ip7 || IP7;
      IP8 = _0x32c44e.ip8 || IP8;
      IP9 = _0x32c44e.ip9 || IP9;
      IP10 = _0x32c44e.ip10 || IP10;
      IP11 = _0x32c44e.ip11 || IP11;
      IP12 = _0x32c44e.ip12 || IP12;
      IP13 = _0x32c44e.ip13 || IP13;
      PT1 = _0x32c44e.pt1 || PT1;
      PT2 = _0x32c44e.pt2 || PT2;
      PT3 = _0x32c44e.pt3 || PT3;
      PT4 = _0x32c44e.pt4 || PT4;
      PT5 = _0x32c44e.pt5 || PT5;
      PT6 = _0x32c44e.pt6 || PT6;
      PT7 = _0x32c44e.pt7 || PT7;
      PT8 = _0x32c44e.pt8 || PT8;
      PT9 = _0x32c44e.pt9 || PT9;
      PT10 = _0x32c44e.pt10 || PT10;
      PT11 = _0x32c44e.pt11 || PT11;
      PT12 = _0x32c44e.pt12 || PT12;
      PT13 = _0x32c44e.pt13 || PT13;
      const _0x2bca54 = _0x4cdfaa.headers.get("Upgrade"),
        _0x336c44 = new URL(_0x4cdfaa.url);
      if (!_0x2bca54 || _0x2bca54 !== "websocket") {
        const _0x185b80 = new URL(_0x4cdfaa.url);
        switch (_0x185b80.pathname) {
          case "/" + userID:
            {
              const _0x1464ba = getVLESSConfig(userID, _0x4cdfaa.headers.get("Host")),
                _0xe099c9 = {
                  "Content-Type": "text/html;charset=utf-8"
                };
              const _0x3dad48 = {
                status: 200,
                headers: _0xe099c9
              };
              return new Response("" + _0x1464ba, _0x3dad48);
            }
          case "/" + userID + "/ty":
            {
              const _0x2d5c0b = gettyConfig(userID, _0x4cdfaa.headers.get("Host")),
                _0x5912a1 = {
                  "Content-Type": "text/plain;charset=utf-8"
                };
              const _0x2615f5 = {
                status: 200,
                headers: _0x5912a1
              };
              return new Response("" + _0x2d5c0b, _0x2615f5);
            }
          case "/" + userID + "/cl":
            {
              const _0xe0d020 = getclConfig(userID, _0x4cdfaa.headers.get("Host")),
                _0x673545 = {
                  "Content-Type": "text/plain;charset=utf-8"
                };
              const _0x4ed6f0 = {
                status: 200,
                headers: _0x673545
              };
              return new Response("" + _0xe0d020, _0x4ed6f0);
            }
          case "/" + userID + "/sb":
            {
              const _0x9064f5 = getsbConfig(userID, _0x4cdfaa.headers.get("Host")),
                _0x12f72b = {
                  "Content-Type": "application/json;charset=utf-8"
                };
              const _0x67e637 = {
                status: 200,
                headers: _0x12f72b
              };
              return new Response("" + _0x9064f5, _0x67e637);
            }
          case "/" + userID + "/pty":
            {
              const _0x158f54 = getptyConfig(userID, _0x4cdfaa.headers.get("Host")),
                _0x1de7e9 = {
                  "Content-Type": "text/plain;charset=utf-8"
                };
              const _0x2efe32 = {
                status: 200,
                headers: _0x1de7e9
              };
              return new Response("" + _0x158f54, _0x2efe32);
            }
          case "/" + userID + "/pcl":
            {
              const _0x11b99e = getpclConfig(userID, _0x4cdfaa.headers.get("Host")),
                _0x5ed3b8 = {
                  "Content-Type": "text/plain;charset=utf-8"
                };
              const _0x539a9b = {
                status: 200,
                headers: _0x5ed3b8
              };
              return new Response("" + _0x11b99e, _0x539a9b);
            }
          case "/" + userID + "/psb":
            {
              const _0x53ac06 = getpsbConfig(userID, _0x4cdfaa.headers.get("Host")),
                _0x580210 = {
                  "Content-Type": "application/json;charset=utf-8"
                };
              const _0x37d407 = {
                status: 200,
                headers: _0x580210
              };
              return new Response("" + _0x53ac06, _0x37d407);
            }
          default:
            if (cn_hostnames.includes("")) {
              const _0x1a95df = {
                "Content-Type": "application/json;charset=utf-8"
              };
              const _0x311f01 = {
                status: 200,
                headers: _0x1a95df
              };
              return new Response(JSON.stringify(_0x4cdfaa.cf, null, 4), _0x311f01);
            }
            const _0x4f3928 = cn_hostnames[Math.floor(Math.random() * cn_hostnames.length)],
              _0x12f0d1 = new Headers(_0x4cdfaa.headers);
            _0x12f0d1.set("cf-connecting-ip", "1.2.3.4");
            _0x12f0d1.set("x-forwarded-for", "1.2.3.4");
            _0x12f0d1.set("x-real-ip", "1.2.3.4");
            _0x12f0d1.set("referer", "https://www.google.com/search?q=edtunnel");
            const _0x200fa4 = "https://" + _0x4f3928 + _0x185b80.pathname + _0x185b80.search,
              _0x185c07 = {
                method: _0x4cdfaa.method,
                headers: _0x12f0d1,
                body: _0x4cdfaa.body,
                redirect: "manual"
              };
            let _0x4d3a53 = new Request(_0x200fa4, _0x185c07);
            const _0x7b905d = await fetch(_0x4d3a53, {
              redirect: "manual"
            });
            if ([301, 302].includes(_0x7b905d.status)) {
              const _0x43f814 = {
                status: 403,
                statusText: "Forbidden"
              };
              return new Response("Redirects to " + _0x4f3928 + " are not allowed.", _0x43f814);
            }
            return _0x7b905d;
        }
      } else {
        if (_0x336c44.pathname.includes("/pyip=")) {
          const _0x30823d = _0x336c44.pathname.split("=")[1];
          if (isValidIP(_0x30823d)) {
            proxyIP = _0x30823d;
            if (proxyIP.includes("]:")) {
              let _0x51be6f = proxyIP.lastIndexOf(":");
              proxyPort = proxyIP.slice(_0x51be6f + 1);
              proxyIP = proxyIP.slice(0, _0x51be6f);
            } else {
              !proxyIP.includes("]:") && !proxyIP.includes("]") ? [proxyIP, proxyPort = "443"] = proxyIP.split(":") : proxyPort = "443";
            }
          }
        }
        return await vlessOverWSHandler(_0x4cdfaa);
      }
    } catch (_0x3ccdd0) {
      let _0x11be69 = _0x3ccdd0;
      return new Response(_0x11be69.toString());
    }
  }
};
function isValidIP(_0x793936) {
  var _0x1d91e4 = /^[\s\S]*$/;
  return _0x1d91e4.test(_0x793936);
}
async function vlessOverWSHandler(_0x3dec19) {
  const _0x474bc6 = new WebSocketPair(),
    [_0x5cc0ce, _0x2b6966] = Object.values(_0x474bc6);
  _0x2b6966.accept();
  let _0x3f80ef = "",
    _0xe124c4 = "";
  const _0x26aa86 = (_0x5f4fd4, _0x110795) => {
      console.log("[" + _0x3f80ef + ":" + _0xe124c4 + "] " + _0x5f4fd4, _0x110795 || "");
    },
    _0x4d62a4 = _0x3dec19.headers.get("sec-websocket-protocol") || "",
    _0x3ee922 = makeReadableWebSocketStream(_0x2b6966, _0x4d62a4, _0x26aa86),
    _0x4be549 = {
      value: null
    };
  let _0x3af404 = null,
    _0x369644 = false;
  _0x3ee922.pipeTo(new WritableStream({
    async write(_0x309c5b, _0x16eb08) {
      if (_0x369644 && _0x3af404) {
        return _0x3af404(_0x309c5b);
      }
      if (_0x4be549.value) {
        const _0x1db978 = _0x4be549.value.writable.getWriter();
        await _0x1db978.write(_0x309c5b);
        _0x1db978.releaseLock();
        return;
      }
      const {
        hasError: _0x5d0a6c,
        message: _0xda93aa,
        portRemote = 443,
        addressRemote = "",
        rawDataIndex: _0x14260a,
        vlessVersion = new Uint8Array([0, 0]),
        isUDP: _0x18fbc4
      } = await processVlessHeader(_0x309c5b, userID);
      _0x3f80ef = addressRemote;
      _0xe124c4 = portRemote + "--" + Math.random() + " " + (_0x18fbc4 ? "udp " : "tcp ") + " ";
      if (_0x5d0a6c) {
        throw new Error(_0xda93aa);
        return;
      }
      if (_0x18fbc4) {
        if (portRemote === 53) {
          _0x369644 = true;
        } else {
          throw new Error("UDP proxy only enable for DNS which is port 53");
          return;
        }
      }
      const _0x55a7fe = new Uint8Array([vlessVersion[0], 0]),
        _0x4c918b = _0x309c5b.slice(_0x14260a);
      if (_0x369644) {
        const {
          write: _0x24de19
        } = await handleUDPOutBound(_0x2b6966, _0x55a7fe, _0x26aa86);
        _0x3af404 = _0x24de19;
        _0x3af404(_0x4c918b);
        return;
      }
      handleTCPOutBound(_0x4be549, addressRemote, portRemote, _0x4c918b, _0x2b6966, _0x55a7fe, _0x26aa86);
    },
    close() {
      _0x26aa86("readableWebSocketStream is close");
    },
    abort(_0x3d2c9d) {
      _0x26aa86("readableWebSocketStream is abort", JSON.stringify(_0x3d2c9d));
    }
  })).catch(_0x480191 => {
    _0x26aa86("readableWebSocketStream pipeTo error", _0x480191);
  });
  const _0x24fa22 = {
    status: 101,
    webSocket: _0x5cc0ce
  };
  return new Response(null, _0x24fa22);
}
async function checkUuidInApiResponse(_0x2e0ad6) {
  try {
    const _0x4c0f4c = await getApiResponse();
    if (!_0x4c0f4c) {
      return false;
    }
    const _0x4c4473 = _0x4c0f4c.users.some(_0x3aef03 => _0x3aef03.uuid === _0x2e0ad6);
    return _0x4c4473;
  } catch (_0x5dfe32) {
    console.error("Error:", _0x5dfe32);
    return false;
  }
}
async function handleTCPOutBound(_0x558e35, _0x33fed4, _0x31b799, _0xd1296, _0x43f52d, _0x4ac2a3, _0x55fc21) {
  async function _0x1d60c4(_0x391312, _0x5b59c8) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(_0x391312)) {
      _0x391312 = "" + atob("d3d3Lg==") + _0x391312 + atob("LnNzbGlwLmlv");
    }
    const _0x6b4d89 = {
      hostname: _0x391312,
      port: _0x5b59c8
    };
    const _0x3c1418 = connect(_0x6b4d89);
    _0x558e35.value = _0x3c1418;
    _0x55fc21("connected to " + _0x391312 + ":" + _0x5b59c8);
    const _0x3abed6 = _0x3c1418.writable.getWriter();
    await _0x3abed6.write(_0xd1296);
    _0x3abed6.releaseLock();
    return _0x3c1418;
  }
  async function _0x1225e0() {
    const _0x5d9258 = await _0x1d60c4(proxyIP || _0x33fed4, proxyPort || _0x31b799);
    _0x5d9258.closed.catch(_0x558227 => {
      console.log("retry tcpSocket closed error", _0x558227);
    }).finally(() => {
      safeCloseWebSocket(_0x43f52d);
    });
    remoteSocketToWS(_0x5d9258, _0x43f52d, _0x4ac2a3, null, _0x55fc21);
  }
  const _0x5abe83 = await _0x1d60c4(_0x33fed4, _0x31b799);
  remoteSocketToWS(_0x5abe83, _0x43f52d, _0x4ac2a3, _0x1225e0, _0x55fc21);
}
function makeReadableWebSocketStream(_0x544870, _0x2fb3a5, _0x4b07d2) {
  let _0x3dc50c = false;
  const _0x52f240 = new ReadableStream({
    start(_0xe374d2) {
      _0x544870.addEventListener("message", _0x4394e1 => {
        if (_0x3dc50c) {
          return;
        }
        const _0x1949a8 = _0x4394e1.data;
        _0xe374d2.enqueue(_0x1949a8);
      });
      _0x544870.addEventListener("close", () => {
        safeCloseWebSocket(_0x544870);
        if (_0x3dc50c) {
          return;
        }
        _0xe374d2.close();
      });
      _0x544870.addEventListener("error", _0x4ea6bf => {
        _0x4b07d2("webSocketServer has error");
        _0xe374d2.error(_0x4ea6bf);
      });
      const {
        earlyData: _0x328b4b,
        error: _0xe1d80f
      } = base64ToArrayBuffer(_0x2fb3a5);
      if (_0xe1d80f) {
        _0xe374d2.error(_0xe1d80f);
      } else {
        if (_0x328b4b) {
          _0xe374d2.enqueue(_0x328b4b);
        }
      }
    },
    pull(_0xba1eec) {},
    cancel(_0xf6a2ec) {
      if (_0x3dc50c) {
        return;
      }
      _0x4b07d2("ReadableStream was canceled, due to " + _0xf6a2ec);
      _0x3dc50c = true;
      safeCloseWebSocket(_0x544870);
    }
  });
  return _0x52f240;
}
async function processVlessHeader(_0x52be97, _0x2bddcf) {
  if (_0x52be97.byteLength < 24) {
    const _0x519efd = {
      hasError: true,
      message: "invalid data"
    };
    return _0x519efd;
  }
  const _0x2c95ec = new Uint8Array(_0x52be97.slice(0, 1));
  let _0x226199 = false,
    _0x56a109 = false;
  const _0x54d0ae = new Uint8Array(_0x52be97.slice(1, 17)),
    _0xd6472e = stringify(_0x54d0ae),
    _0x3481a7 = _0x2bddcf.includes(",") ? _0x2bddcf.split(",") : [_0x2bddcf],
    _0x28af0f = await checkUuidInApiResponse(_0xd6472e);
  _0x226199 = _0x3481a7.some(_0x2ea1d6 => _0x28af0f || _0xd6472e === _0x2ea1d6.trim());
  console.log("checkUuidInApi: " + (await checkUuidInApiResponse(_0xd6472e)) + ", userID: " + _0xd6472e);
  if (!_0x226199) {
    const _0x349ca0 = {
      hasError: true,
      message: "invalid user"
    };
    return _0x349ca0;
  }
  const _0x1bde00 = new Uint8Array(_0x52be97.slice(17, 18))[0],
    _0x3390e6 = new Uint8Array(_0x52be97.slice(18 + _0x1bde00, 18 + _0x1bde00 + 1))[0];
  if (!(_0x3390e6 === 1)) {
    if (_0x3390e6 === 2) {
      _0x56a109 = true;
    } else {
      const _0x3b95a1 = {
        hasError: true,
        message: "command " + _0x3390e6 + " is not support, command 01-tcp,02-udp,03-mux"
      };
      return _0x3b95a1;
    }
  }
  const _0x373f5d = 18 + _0x1bde00 + 1,
    _0x1a9f90 = _0x52be97.slice(_0x373f5d, _0x373f5d + 2),
    _0x3cd786 = new DataView(_0x1a9f90).getUint16(0);
  let _0x2f9f8d = _0x373f5d + 2;
  const _0x4b5e0f = new Uint8Array(_0x52be97.slice(_0x2f9f8d, _0x2f9f8d + 1)),
    _0x3a15f8 = _0x4b5e0f[0];
  let _0x321210 = 0,
    _0x25364f = _0x2f9f8d + 1,
    _0x16f881 = "";
  switch (_0x3a15f8) {
    case 1:
      _0x321210 = 4;
      _0x16f881 = new Uint8Array(_0x52be97.slice(_0x25364f, _0x25364f + _0x321210)).join(".");
      break;
    case 2:
      _0x321210 = new Uint8Array(_0x52be97.slice(_0x25364f, _0x25364f + 1))[0];
      _0x25364f += 1;
      _0x16f881 = new TextDecoder().decode(_0x52be97.slice(_0x25364f, _0x25364f + _0x321210));
      break;
    case 3:
      _0x321210 = 16;
      const _0x30c179 = new DataView(_0x52be97.slice(_0x25364f, _0x25364f + _0x321210)),
        _0x3f5a79 = [];
      for (let _0xea30d8 = 0; _0xea30d8 < 8; _0xea30d8++) {
        _0x3f5a79.push(_0x30c179.getUint16(_0xea30d8 * 2).toString(16));
      }
      _0x16f881 = _0x3f5a79.join(":");
      break;
    default:
      const _0x413a2b = {
        hasError: true,
        message: "invild  addressType is " + _0x3a15f8
      };
      return _0x413a2b;
  }
  if (!_0x16f881) {
    const _0x303df8 = {
      hasError: true,
      message: "addressValue is empty, addressType is " + _0x3a15f8
    };
    return _0x303df8;
  }
  return {
    hasError: false,
    addressRemote: _0x16f881,
    addressType: _0x3a15f8,
    portRemote: _0x3cd786,
    rawDataIndex: _0x25364f + _0x321210,
    vlessVersion: _0x2c95ec,
    isUDP: _0x56a109
  };
}
async function remoteSocketToWS(_0x246244, _0x1eb1cb, _0x4e87cc, _0x4e7c0f, _0x4dd8f2) {
  let _0x167697 = _0x4e87cc,
    _0x107c84 = false;
  await _0x246244.readable.pipeTo(new WritableStream({
    start() {},
    async write(_0x5538c9, _0x2862a7) {
      _0x107c84 = true;
      if (_0x1eb1cb.readyState !== WS_READY_STATE_OPEN) {
        _0x2862a7.error("webSocket.readyState is not open, maybe close");
      }
      if (_0x167697) {
        _0x1eb1cb.send(await new Blob([_0x167697, _0x5538c9]).arrayBuffer());
        _0x167697 = null;
      } else {
        _0x1eb1cb.send(_0x5538c9);
      }
    },
    close() {
      _0x4dd8f2("remoteConnection!.readable is close with hasIncomingData is " + _0x107c84);
    },
    abort(_0x19a0cc) {
      console.error("remoteConnection!.readable abort", _0x19a0cc);
    }
  })).catch(_0x2d40d4 => {
    console.error("remoteSocketToWS has exception ", _0x2d40d4.stack || _0x2d40d4);
    safeCloseWebSocket(_0x1eb1cb);
  });
  if (_0x107c84 === false && _0x4e7c0f) {
    _0x4dd8f2("retry");
    _0x4e7c0f();
  }
}
function base64ToArrayBuffer(_0x8de2c6) {
  if (!_0x8de2c6) {
    const _0x59b013 = {
      error: null
    };
    return _0x59b013;
  }
  try {
    _0x8de2c6 = _0x8de2c6.replace(/-/g, "+").replace(/_/g, "/");
    const _0x42463f = atob(_0x8de2c6),
      _0x4372e1 = Uint8Array.from(_0x42463f, _0x5dfd3c => _0x5dfd3c.charCodeAt(0)),
      _0x45af29 = {
        earlyData: _0x4372e1.buffer,
        error: null
      };
    return _0x45af29;
  } catch (_0xcda831) {
    const _0x547a35 = {
      error: _0xcda831
    };
    return _0x547a35;
  }
}
function isValidUUID(_0x3a4b6a) {
  const _0x542b0b = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return _0x542b0b.test(_0x3a4b6a);
}
const WS_READY_STATE_OPEN = 1,
  WS_READY_STATE_CLOSING = 2;
function safeCloseWebSocket(_0x5525aa) {
  try {
    if (_0x5525aa.readyState === WS_READY_STATE_OPEN || _0x5525aa.readyState === WS_READY_STATE_CLOSING) {
      _0x5525aa.close();
    }
  } catch (_0x1c5936) {
    console.error("safeCloseWebSocket error", _0x1c5936);
  }
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(_0x46bc96, _0x516e91 = 0) {
  return (byteToHex[_0x46bc96[_0x516e91 + 0]] + byteToHex[_0x46bc96[_0x516e91 + 1]] + byteToHex[_0x46bc96[_0x516e91 + 2]] + byteToHex[_0x46bc96[_0x516e91 + 3]] + "-" + byteToHex[_0x46bc96[_0x516e91 + 4]] + byteToHex[_0x46bc96[_0x516e91 + 5]] + "-" + byteToHex[_0x46bc96[_0x516e91 + 6]] + byteToHex[_0x46bc96[_0x516e91 + 7]] + "-" + byteToHex[_0x46bc96[_0x516e91 + 8]] + byteToHex[_0x46bc96[_0x516e91 + 9]] + "-" + byteToHex[_0x46bc96[_0x516e91 + 10]] + byteToHex[_0x46bc96[_0x516e91 + 11]] + byteToHex[_0x46bc96[_0x516e91 + 12]] + byteToHex[_0x46bc96[_0x516e91 + 13]] + byteToHex[_0x46bc96[_0x516e91 + 14]] + byteToHex[_0x46bc96[_0x516e91 + 15]]).toLowerCase();
}
function stringify(_0x136fc0, _0x175c73 = 0) {
  const _0x27f781 = unsafeStringify(_0x136fc0, _0x175c73);
  if (!isValidUUID(_0x27f781)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return _0x27f781;
}
async function handleUDPOutBound(_0x43501b, _0x4847a0, _0xbe40b2) {
  let _0x41073b = false;
  const _0x2d9159 = new TransformStream({
    start(_0x49efad) {},
    transform(_0x5a3684, _0x2b3163) {
      for (let _0x1dfa78 = 0; _0x1dfa78 < _0x5a3684.byteLength;) {
        const _0x36dd41 = _0x5a3684.slice(_0x1dfa78, _0x1dfa78 + 2),
          _0x11dcf9 = new DataView(_0x36dd41).getUint16(0),
          _0x406b9a = new Uint8Array(_0x5a3684.slice(_0x1dfa78 + 2, _0x1dfa78 + 2 + _0x11dcf9));
        _0x1dfa78 = _0x1dfa78 + 2 + _0x11dcf9;
        _0x2b3163.enqueue(_0x406b9a);
      }
    },
    flush(_0x42adef) {}
  });
  _0x2d9159.readable.pipeTo(new WritableStream({
    async write(_0x575604) {
      const _0x2d2c9b = await fetch(dohURL, {
          method: "POST",
          headers: {
            "content-type": "application/dns-message"
          },
          body: _0x575604
        }),
        _0x38967e = await _0x2d2c9b.arrayBuffer(),
        _0x2d4e78 = _0x38967e.byteLength,
        _0x5b31f8 = new Uint8Array([_0x2d4e78 >> 8 & 255, _0x2d4e78 & 255]);
      _0x43501b.readyState === WS_READY_STATE_OPEN && (_0xbe40b2("doh success and dns message length is " + _0x2d4e78), _0x41073b ? _0x43501b.send(await new Blob([_0x5b31f8, _0x38967e]).arrayBuffer()) : (_0x43501b.send(await new Blob([_0x4847a0, _0x5b31f8, _0x38967e]).arrayBuffer()), _0x41073b = true));
    }
  })).catch(_0x1a4968 => {
    _0xbe40b2("dns udp has error" + _0x1a4968);
  });
  const _0x3861e8 = _0x2d9159.writable.getWriter();
  return {
    write(_0x6ad2e3) {
      _0x3861e8.write(_0x6ad2e3);
    }
  };
}
function getVLESSConfig(_0x3332ef, _0x35d001) {
  const _0x1a05a8 = "vless://" + _0x3332ef + "@" + CDNIP + ":8880?encryption=none&security=none&type=ws&host=" + _0x35d001 + "&path=%2F%3Fed%3D2560#" + _0x35d001,
    _0x55192d = "vless://" + _0x3332ef + "@" + CDNIP + ":8443?encryption=none&security=tls&type=ws&host=" + _0x35d001 + "&sni=" + _0x35d001 + "&fp=random&path=%2F%3Fed%3D2560#" + _0x35d001,
    _0x2ee2d4 = "甬哥博客地址：https://ygkkk.blogspot.com\n甬哥YouTube频道：https://www.youtube.com/@ygkkk\n甬哥TG电报群组：https://t.me/ygkkktg\n甬哥TG电报频道：https://t.me/ygkkktgpd\n\nProxyIP全局运行中：" + proxyIP,
    _0x57152b = "https://" + _0x35d001 + "/" + _0x3332ef + "/ty",
    _0x4f83ab = "https://" + _0x35d001 + "/" + _0x3332ef + "/cl",
    _0x1a8f24 = "https://" + _0x35d001 + "/" + _0x3332ef + "/sb",
    _0x318f47 = "https://" + _0x35d001 + "/" + _0x3332ef + "/pty",
    _0x1a28aa = "https://" + _0x35d001 + "/" + _0x3332ef + "/pcl",
    _0x235d2f = "https://" + _0x35d001 + "/" + _0x3332ef + "/psb",
    _0x56bb1b = _0x2ee2d4.replace(/\n/g, "<br>"),
    _0x1efd51 = "\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>\n<style>\n.limited-width {\n    max-width: 200px;\n    overflow: auto;\n    word-wrap: break-word;\n}\n</style>\n</head>\n<script>\nfunction copyToClipboard(text) {\n  const input = document.createElement('textarea');\n  input.style.position = 'fixed';\n  input.style.opacity = 0;\n  input.value = text;\n  document.body.appendChild(input);\n  input.select();\n  document.execCommand('Copy');\n  document.body.removeChild(input);\n  alert('已复制到剪贴板');\n}\n</script>\n";
  return _0x35d001.includes("workers.dev") ? "\n<br>\n<br>\n" + _0x1efd51 + "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless代理脚本 V24.10.18</h1>\n\t    <hr>\n            <p>" + _0x56bb1b + "</p>\n            <hr>\n\t    <hr>\n\t    <hr>\n            <br>\n            <br>\n            <h3>1：CF-workers-vless+ws节点</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>节点特色：</th>\n\t\t\t\t\t\t<th>单节点链接如下：</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">关闭了TLS加密，无视域名阻断</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x1a05a8 + "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x1a05a8 + "')\">点击复制链接</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>客户端参数如下：</h5>\n            <ul>\n                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>\n                <li>端口(port)：7个http端口可任意选择(80、8080、8880、2052、2082、2086、2095)，或反代IP对应端口</li>\n                <li>用户ID(uuid)：" + _0x3332ef + "</li>\n                <li>传输协议(network)：ws 或者 websocket</li>\n                <li>伪装域名(host)：" + _0x35d001 + "</li>\n                <li>路径(path)：/?ed=2560</li>\n\t\t<li>传输安全(TLS)：关闭</li>\n            </ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>2：CF-workers-vless+ws+tls节点</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>节点特色：</th>\n\t\t\t\t\t\t<th>单节点链接如下：</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">启用了TLS加密，<br>如果客户端支持分片(Fragment)功能，建议开启，防止域名阻断</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x55192d + "</td>\t\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x55192d + "')\">点击复制链接</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>客户端参数如下：</h5>\n            <ul>\n                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>\n                <li>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>\n                <li>用户ID(uuid)：" + _0x3332ef + "</li>\n                <li>传输协议(network)：ws 或者 websocket</li>\n                <li>伪装域名(host)：" + _0x35d001 + "</li>\n                <li>路径(path)：/?ed=2560</li>\n                <li>传输安全(TLS)：开启</li>\n                <li>跳过证书验证(allowlnsecure)：false</li>\n\t\t\t</ul>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<br>\t\n\t\t\t<br>\n\t\t\t<h3>3：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>\n\t\t\t<hr>\n\t\t\t<p>注意：<br>1、默认每个订阅链接包含TLS+非TLS共13个端口节点<br>2、当前workers域名作为订阅链接，需通过代理进行订阅更新<br>3、如使用的客户端不支持分片功能，则TLS节点不可用</p>\n\t\t\t<hr>\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x57152b + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x57152b + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta订阅链接：</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x4f83ab + "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x4f83ab + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x1a8f24 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x1a8f24 + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n" : "\n<br>\n<br>\n" + _0x1efd51 + "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless代理脚本 V24.10.18</h1>\n\t\t\t<hr>\n            <p>" + _0x56bb1b + "</p>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>1：CF-pages/workers/自定义域-vless+ws+tls节点</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>节点特色：</th>\n\t\t\t\t\t\t<th>单节点链接如下：</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">启用了TLS加密，<br>如果客户端支持分片(Fragment)功能，可开启，防止域名阻断</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x55192d + "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x55192d + "')\">点击复制链接</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>客户端参数如下：</h5>\n            <ul>\n                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>\n                <li>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>\n                <li>用户ID(uuid)：" + _0x3332ef + "</li>\n                <li>传输协议(network)：ws 或者 websocket</li>\n                <li>伪装域名(host)：" + _0x35d001 + "</li>\n                <li>路径(path)：/?ed=2560</li>\n                <li>传输安全(TLS)：开启</li>\n                <li>跳过证书验证(allowlnsecure)：false</li>\n\t\t\t</ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n\t\t\t<h3>2：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>\n\t\t\t<hr>\n\t\t\t<p>注意：以下订阅链接仅6个TLS端口节点</p>\n\t\t\t<hr>\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x318f47 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x318f47 + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta订阅链接：</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x1a28aa + "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x1a28aa + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x235d2f + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x235d2f + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n";
}
function gettyConfig(_0xfbfcce, _0x398219) {
  const _0x4028ef = btoa("vless://" + _0xfbfcce + "@" + IP1 + ":" + PT1 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V1_" + IP1 + "_" + PT1 + "\nvless://" + _0xfbfcce + "@" + IP2 + ":" + PT2 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V2_" + IP2 + "_" + PT2 + "\nvless://" + _0xfbfcce + "@" + IP3 + ":" + PT3 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V3_" + IP3 + "_" + PT3 + "\nvless://" + _0xfbfcce + "@" + IP4 + ":" + PT4 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V4_" + IP4 + "_" + PT4 + "\nvless://" + _0xfbfcce + "@" + IP5 + ":" + PT5 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V5_" + IP5 + "_" + PT5 + "\nvless://" + _0xfbfcce + "@" + IP6 + ":" + PT6 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V6_" + IP6 + "_" + PT6 + "\nvless://" + _0xfbfcce + "@" + IP7 + ":" + PT7 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V7_" + IP7 + "_" + PT7 + "\nvless://" + _0xfbfcce + "@" + IP8 + ":" + PT8 + "?encryption=none&security=tls&sni=" + _0x398219 + "&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V8_" + IP8 + "_" + PT8 + "\nvless://" + _0xfbfcce + "@" + IP9 + ":" + PT9 + "?encryption=none&security=tls&sni=" + _0x398219 + "&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V9_" + IP9 + "_" + PT9 + "\nvless://" + _0xfbfcce + "@" + IP10 + ":" + PT10 + "?encryption=none&security=tls&sni=" + _0x398219 + "&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V10_" + IP10 + "_" + PT10 + "\nvless://" + _0xfbfcce + "@" + IP11 + ":" + PT11 + "?encryption=none&security=tls&sni=" + _0x398219 + "&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V11_" + IP11 + "_" + PT11 + "\nvless://" + _0xfbfcce + "@" + IP12 + ":" + PT12 + "?encryption=none&security=tls&sni=" + _0x398219 + "&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V12_" + IP12 + "_" + PT12 + "\nvless://" + _0xfbfcce + "@" + IP13 + ":" + PT13 + "?encryption=none&security=tls&sni=" + _0x398219 + "&fp=randomized&type=ws&host=" + _0x398219 + "&path=%2F%3Fed%3D2560#CF_V13_" + IP13 + "_" + PT13);
  return "" + _0x4028ef;
}
function getclConfig(_0x1b4fa0, _0x28583e) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: true\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V1_" + IP1 + "_" + PT1 + "\n  type: vless\n  server: " + IP1 + "\n  port: " + PT1 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V2_" + IP2 + "_" + PT2 + "\n  type: vless\n  server: " + IP2 + "\n  port: " + PT2 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V3_" + IP3 + "_" + PT3 + "\n  type: vless\n  server: " + IP3 + "\n  port: " + PT3 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V4_" + IP4 + "_" + PT4 + "\n  type: vless\n  server: " + IP4 + "\n  port: " + PT4 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V5_" + IP5 + "_" + PT5 + "\n  type: vless\n  server: " + IP5 + "\n  port: " + PT5 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V6_" + IP6 + "_" + PT6 + "\n  type: vless\n  server: " + IP6 + "\n  port: " + PT6 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V7_" + IP7 + "_" + PT7 + "\n  type: vless\n  server: " + IP7 + "\n  port: " + PT7 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: false\n  network: ws\n  servername: " + _0x28583e + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V8_" + IP8 + "_" + PT8 + "\n  type: vless\n  server: " + IP8 + "\n  port: " + PT8 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x28583e + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V9_" + IP9 + "_" + PT9 + "\n  type: vless\n  server: " + IP9 + "\n  port: " + PT9 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x28583e + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V10_" + IP10 + "_" + PT10 + "\n  type: vless\n  server: " + IP10 + "\n  port: " + PT10 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x28583e + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V11_" + IP11 + "_" + PT11 + "\n  type: vless\n  server: " + IP11 + "\n  port: " + PT11 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x28583e + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V12_" + IP12 + "_" + PT12 + "\n  type: vless\n  server: " + IP12 + "\n  port: " + PT12 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x28583e + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\n- name: CF_V13_" + IP13 + "_" + PT13 + "\n  type: vless\n  server: " + IP13 + "\n  port: " + PT13 + "\n  uuid: " + _0x1b4fa0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x28583e + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x28583e + "\n\nproxy-groups:\n- name: 负载均衡\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V1_" + IP1 + "_" + PT1 + "\n    - CF_V2_" + IP2 + "_" + PT2 + "\n    - CF_V3_" + IP3 + "_" + PT3 + "\n    - CF_V4_" + IP4 + "_" + PT4 + "\n    - CF_V5_" + IP5 + "_" + PT5 + "\n    - CF_V6_" + IP6 + "_" + PT6 + "\n    - CF_V7_" + IP7 + "_" + PT7 + "\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\n- name: 自动选择\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V1_" + IP1 + "_" + PT1 + "\n    - CF_V2_" + IP2 + "_" + PT2 + "\n    - CF_V3_" + IP3 + "_" + PT3 + "\n    - CF_V4_" + IP4 + "_" + PT4 + "\n    - CF_V5_" + IP5 + "_" + PT5 + "\n    - CF_V6_" + IP6 + "_" + PT6 + "\n    - CF_V7_" + IP7 + "_" + PT7 + "\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\n- name: 🌍选择代理\n  type: select\n  proxies:\n    - 负载均衡\n    - 自动选择\n    - DIRECT\n    - CF_V1_" + IP1 + "_" + PT1 + "\n    - CF_V2_" + IP2 + "_" + PT2 + "\n    - CF_V3_" + IP3 + "_" + PT3 + "\n    - CF_V4_" + IP4 + "_" + PT4 + "\n    - CF_V5_" + IP5 + "_" + PT5 + "\n    - CF_V6_" + IP6 + "_" + PT6 + "\n    - CF_V7_" + IP7 + "_" + PT7 + "\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,🌍选择代理";
}
function getsbConfig(_0x4ffcd9, _0x5603cd) {
  return "{\n\t  \"log\": {\n\t\t\"disabled\": false,\n\t\t\"level\": \"info\",\n\t\t\"timestamp\": true\n\t  },\n\t  \"experimental\": {\n\t\t\"clash_api\": {\n\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t  \"external_ui\": \"ui\",\n\t\t  \"external_ui_download_url\": \"\",\n\t\t  \"external_ui_download_detour\": \"\",\n\t\t  \"secret\": \"\",\n\t\t  \"default_mode\": \"Rule\"\n\t\t},\n\t\t\"cache_file\": {\n\t\t  \"enabled\": true,\n\t\t  \"path\": \"cache.db\",\n\t\t  \"store_fakeip\": true\n\t\t}\n\t  },\n\t  \"dns\": {\n\t\t\"servers\": [\n\t\t  {\n\t\t\t\"tag\": \"proxydns\",\n\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\"detour\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"localdns\",\n\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\"detour\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"address\": \"rcode://refused\",\n\t\t\t\"tag\": \"block\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\"address\": \"fakeip\"\n\t\t  }\n\t\t],\n\t\t\"rules\": [\n\t\t  {\n\t\t\t\"outbound\": \"any\",\n\t\t\t\"server\": \"localdns\",\n\t\t\t\"disable_cache\": true\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"query_type\": [\n\t\t\t  \"A\",\n\t\t\t  \"AAAA\"\n\t\t\t],\n\t\t\t\"server\": \"dns_fakeip\"\n\t\t  }\n\t\t],\n\t\t\"fakeip\": {\n\t\t  \"enabled\": true,\n\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t},\n\t\t\"independent_cache\": true,\n\t\t\"final\": \"proxydns\"\n\t  },\n\t  \"inbounds\": [\n\t\t{\n\t\t  \"type\": \"tun\",\n\t\t  \"inet4_address\": \"172.19.0.1/30\",\n\t\t  \"inet6_address\": \"fd00::1/126\",\n\t\t  \"auto_route\": true,\n\t\t  \"strict_route\": true,\n\t\t  \"sniff\": true,\n\t\t  \"sniff_override_destination\": true,\n\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t}\n\t  ],\n\t  \"outbounds\": [\n\t\t{\n\t\t  \"tag\": \"select\",\n\t\t  \"type\": \"selector\",\n\t\t  \"default\": \"auto\",\n\t\t  \"outbounds\": [\n\t\t\t\"auto\",\n\t\t\t\"CF_V1_" + IP1 + "_" + PT1 + "\",\n\t\t\t\"CF_V2_" + IP2 + "_" + PT2 + "\",\n\t\t\t\"CF_V3_" + IP3 + "_" + PT3 + "\",\n\t\t\t\"CF_V4_" + IP4 + "_" + PT4 + "\",\n\t\t\t\"CF_V5_" + IP5 + "_" + PT5 + "\",\n\t\t\t\"CF_V6_" + IP6 + "_" + PT6 + "\",\n\t\t\t\"CF_V7_" + IP7 + "_" + PT7 + "\",\n\t\t\t\"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t\"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t\"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t\"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t\"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t\"CF_V13_" + IP13 + "_" + PT13 + "\"\n\t\t  ]\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP1 + "\",\n\t\t  \"server_port\": " + PT1 + ",\n\t\t  \"tag\": \"CF_V1_" + IP1 + "_" + PT1 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP2 + "\",\n\t\t  \"server_port\": " + PT2 + ",\n\t\t  \"tag\": \"CF_V2_" + IP2 + "_" + PT2 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP3 + "\",\n\t\t  \"server_port\": " + PT3 + ",\n\t\t  \"tag\": \"CF_V3_" + IP3 + "_" + PT3 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP4 + "\",\n\t\t  \"server_port\": " + PT4 + ",\n\t\t  \"tag\": \"CF_V4_" + IP4 + "_" + PT4 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP5 + "\",\n\t\t  \"server_port\": " + PT5 + ",\n\t\t  \"tag\": \"CF_V5_" + IP5 + "_" + PT5 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP6 + "\",\n\t\t  \"server_port\": " + PT6 + ",\n\t\t  \"tag\": \"CF_V6_" + IP6 + "_" + PT6 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP7 + "\",\n\t\t  \"server_port\": " + PT7 + ",\n\t\t  \"tag\": \"CF_V7_" + IP7 + "_" + PT7 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{     \n\t\t  \"server\": \"" + IP8 + "\",\n\t\t  \"server_port\": " + PT8 + ",\n\t\t  \"tag\": \"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x5603cd + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP9 + "\",\n\t\t  \"server_port\": " + PT9 + ",\n\t\t  \"tag\": \"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x5603cd + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP10 + "\",\n\t\t  \"server_port\": " + PT10 + ",\n\t\t  \"tag\": \"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x5603cd + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP11 + "\",\n\t\t  \"server_port\": " + PT11 + ",\n\t\t  \"tag\": \"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x5603cd + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP12 + "\",\n\t\t  \"server_port\": " + PT12 + ",\n\t\t  \"tag\": \"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x5603cd + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP13 + "\",\n\t\t  \"server_port\": " + PT13 + ",\n\t\t  \"tag\": \"CF_V13_" + IP13 + "_" + PT13 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x5603cd + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x5603cd + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x4ffcd9 + "\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"direct\",\n\t\t  \"type\": \"direct\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"block\",\n\t\t  \"type\": \"block\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"dns-out\",\n\t\t  \"type\": \"dns\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"auto\",\n\t\t  \"type\": \"urltest\",\n\t\t  \"outbounds\": [\n\t\t\t\"CF_V1_" + IP1 + "_" + PT1 + "\",\n\t\t\t\"CF_V2_" + IP2 + "_" + PT2 + "\",\n\t\t\t\"CF_V3_" + IP3 + "_" + PT3 + "\",\n\t\t\t\"CF_V4_" + IP4 + "_" + PT4 + "\",\n\t\t\t\"CF_V5_" + IP5 + "_" + PT5 + "\",\n\t\t\t\"CF_V6_" + IP6 + "_" + PT6 + "\",\n\t\t\t\"CF_V7_" + IP7 + "_" + PT7 + "\",\n\t\t\t\"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t\"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t\"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t\"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t\"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t\"CF_V13_" + IP13 + "_" + PT13 + "\"\n\t\t  ],\n\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t  \"interval\": \"1m\",\n\t\t  \"tolerance\": 50,\n\t\t  \"interrupt_exist_connections\": false\n\t\t}\n\t  ],\n\t  \"route\": {\n\t\t\"rule_set\": [\n\t\t  {\n\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  }\n\t\t],\n\t\t\"auto_detect_interface\": true,\n\t\t\"final\": \"select\",\n\t\t\"rules\": [\n\t\t  {\n\t\t\t\"outbound\": \"dns-out\",\n\t\t\t\"protocol\": \"dns\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"outbound\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"ip_is_private\": true,\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"outbound\": \"select\"\n\t\t  }\n\t\t]\n\t  },\n\t  \"ntp\": {\n\t\t\"enabled\": true,\n\t\t\"server\": \"time.apple.com\",\n\t\t\"server_port\": 123,\n\t\t\"interval\": \"30m\",\n\t\t\"detour\": \"direct\"\n\t  }\n\t}";
}
function getptyConfig(_0x1a2e87, _0x20f0af) {
  const _0x282f1c = btoa("vless://" + _0x1a2e87 + "@" + IP8 + ":" + PT8 + "?encryption=none&security=tls&sni=" + _0x20f0af + "&fp=randomized&type=ws&host=" + _0x20f0af + "&path=%2F%3Fed%3D2560#CF_V8_" + IP8 + "_" + PT8 + "\nvless://" + _0x1a2e87 + "@" + IP9 + ":" + PT9 + "?encryption=none&security=tls&sni=" + _0x20f0af + "&fp=randomized&type=ws&host=" + _0x20f0af + "&path=%2F%3Fed%3D2560#CF_V9_" + IP9 + "_" + PT9 + "\nvless://" + _0x1a2e87 + "@" + IP10 + ":" + PT10 + "?encryption=none&security=tls&sni=" + _0x20f0af + "&fp=randomized&type=ws&host=" + _0x20f0af + "&path=%2F%3Fed%3D2560#CF_V10_" + IP10 + "_" + PT10 + "\nvless://" + _0x1a2e87 + "@" + IP11 + ":" + PT11 + "?encryption=none&security=tls&sni=" + _0x20f0af + "&fp=randomized&type=ws&host=" + _0x20f0af + "&path=%2F%3Fed%3D2560#CF_V11_" + IP11 + "_" + PT11 + "\nvless://" + _0x1a2e87 + "@" + IP12 + ":" + PT12 + "?encryption=none&security=tls&sni=" + _0x20f0af + "&fp=randomized&type=ws&host=" + _0x20f0af + "&path=%2F%3Fed%3D2560#CF_V12_" + IP12 + "_" + PT12 + "\nvless://" + _0x1a2e87 + "@" + IP13 + ":" + PT13 + "?encryption=none&security=tls&sni=" + _0x20f0af + "&fp=randomized&type=ws&host=" + _0x20f0af + "&path=%2F%3Fed%3D2560#CF_V13_" + IP13 + "_" + PT13);
  return "" + _0x282f1c;
}
function getpclConfig(_0x3c612a, _0xa52049) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: true\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V8_" + IP8 + "_" + PT8 + "\n  type: vless\n  server: " + IP8 + "\n  port: " + PT8 + "\n  uuid: " + _0x3c612a + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xa52049 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xa52049 + "\n\n- name: CF_V9_" + IP9 + "_" + PT9 + "\n  type: vless\n  server: " + IP9 + "\n  port: " + PT9 + "\n  uuid: " + _0x3c612a + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xa52049 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xa52049 + "\n\n- name: CF_V10_" + IP10 + "_" + PT10 + "\n  type: vless\n  server: " + IP10 + "\n  port: " + PT10 + "\n  uuid: " + _0x3c612a + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xa52049 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xa52049 + "\n\n- name: CF_V11_" + IP11 + "_" + PT11 + "\n  type: vless\n  server: " + IP11 + "\n  port: " + PT11 + "\n  uuid: " + _0x3c612a + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xa52049 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xa52049 + "\n\n- name: CF_V12_" + IP12 + "_" + PT12 + "\n  type: vless\n  server: " + IP12 + "\n  port: " + PT12 + "\n  uuid: " + _0x3c612a + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xa52049 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xa52049 + "\n\n- name: CF_V13_" + IP13 + "_" + PT13 + "\n  type: vless\n  server: " + IP13 + "\n  port: " + PT13 + "\n  uuid: " + _0x3c612a + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xa52049 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xa52049 + "\n\nproxy-groups:\n- name: 负载均衡\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\n- name: 自动选择\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\n- name: 🌍选择代理\n  type: select\n  proxies:\n    - 负载均衡\n    - 自动选择\n    - DIRECT\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,🌍选择代理";
}
function getpsbConfig(_0x1612c8, _0x16be7a) {
  return "{\n\t\t  \"log\": {\n\t\t\t\"disabled\": false,\n\t\t\t\"level\": \"info\",\n\t\t\t\"timestamp\": true\n\t\t  },\n\t\t  \"experimental\": {\n\t\t\t\"clash_api\": {\n\t\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t\t  \"external_ui\": \"ui\",\n\t\t\t  \"external_ui_download_url\": \"\",\n\t\t\t  \"external_ui_download_detour\": \"\",\n\t\t\t  \"secret\": \"\",\n\t\t\t  \"default_mode\": \"Rule\"\n\t\t\t},\n\t\t\t\"cache_file\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"path\": \"cache.db\",\n\t\t\t  \"store_fakeip\": true\n\t\t\t}\n\t\t  },\n\t\t  \"dns\": {\n\t\t\t\"servers\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"proxydns\",\n\t\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\t\"detour\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"localdns\",\n\t\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\t\"detour\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"address\": \"rcode://refused\",\n\t\t\t\t\"tag\": \"block\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\t\"address\": \"fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"rules\": [\n\t\t\t  {\n\t\t\t\t\"outbound\": \"any\",\n\t\t\t\t\"server\": \"localdns\",\n\t\t\t\t\"disable_cache\": true\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"query_type\": [\n\t\t\t\t  \"A\",\n\t\t\t\t  \"AAAA\"\n\t\t\t\t],\n\t\t\t\t\"server\": \"dns_fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"fakeip\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t\t},\n\t\t\t\"independent_cache\": true,\n\t\t\t\"final\": \"proxydns\"\n\t\t  },\n\t\t  \"inbounds\": [\n\t\t\t{\n\t\t\t  \"type\": \"tun\",\n\t\t\t  \"inet4_address\": \"172.19.0.1/30\",\n\t\t\t  \"inet6_address\": \"fd00::1/126\",\n\t\t\t  \"auto_route\": true,\n\t\t\t  \"strict_route\": true,\n\t\t\t  \"sniff\": true,\n\t\t\t  \"sniff_override_destination\": true,\n\t\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t\t}\n\t\t  ],\n\t\t  \"outbounds\": [\n\t\t\t{\n\t\t\t  \"tag\": \"select\",\n\t\t\t  \"type\": \"selector\",\n\t\t\t  \"default\": \"auto\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"auto\",\n\t\t\t\t\"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t\t\"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t\t\"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t\t\"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t\t\"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t\t\"CF_V13_" + IP13 + "_" + PT13 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP8 + "\",\n\t\t\t  \"server_port\": " + PT8 + ",\n\t\t\t  \"tag\": \"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x16be7a + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x16be7a + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x1612c8 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP9 + "\",\n\t\t\t  \"server_port\": " + PT9 + ",\n\t\t\t  \"tag\": \"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x16be7a + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x16be7a + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x1612c8 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP10 + "\",\n\t\t\t  \"server_port\": " + PT10 + ",\n\t\t\t  \"tag\": \"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x16be7a + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x16be7a + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x1612c8 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP11 + "\",\n\t\t\t  \"server_port\": " + PT11 + ",\n\t\t\t  \"tag\": \"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x16be7a + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x16be7a + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x1612c8 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP12 + "\",\n\t\t\t  \"server_port\": " + PT12 + ",\n\t\t\t  \"tag\": \"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x16be7a + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x16be7a + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x1612c8 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP13 + "\",\n\t\t\t  \"server_port\": " + PT13 + ",\n\t\t\t  \"tag\": \"CF_V13_" + IP13 + "_" + PT13 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x16be7a + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x16be7a + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x1612c8 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"direct\",\n\t\t\t  \"type\": \"direct\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"block\",\n\t\t\t  \"type\": \"block\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"dns-out\",\n\t\t\t  \"type\": \"dns\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"auto\",\n\t\t\t  \"type\": \"urltest\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t\t\"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t\t\"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t\t\"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t\t\"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t\t\"CF_V13_" + IP13 + "_" + PT13 + "\"\n\t\t\t  ],\n\t\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t\t  \"interval\": \"1m\",\n\t\t\t  \"tolerance\": 50,\n\t\t\t  \"interrupt_exist_connections\": false\n\t\t\t}\n\t\t  ],\n\t\t  \"route\": {\n\t\t\t\"rule_set\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"auto_detect_interface\": true,\n\t\t\t\"final\": \"select\",\n\t\t\t\"rules\": [\n\t\t\t  {\n\t\t\t\t\"outbound\": \"dns-out\",\n\t\t\t\t\"protocol\": \"dns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"ip_is_private\": true,\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  }\n\t\t\t]\n\t\t  },\n\t\t  \"ntp\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server\": \"time.apple.com\",\n\t\t\t\"server_port\": 123,\n\t\t\t\"interval\": \"30m\",\n\t\t\t\"detour\": \"direct\"\n\t\t  }\n\t\t}";
}