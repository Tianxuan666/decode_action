//Wed Nov 06 2024 14:00:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var r = ["url"];
function T(_0x1f9303) {
  return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x2eaa6d) {
    return typeof _0x2eaa6d;
  } : function (_0x3ff8ad) {
    return _0x3ff8ad && "function" == typeof Symbol && _0x3ff8ad.constructor === Symbol && _0x3ff8ad !== Symbol.prototype ? "symbol" : typeof _0x3ff8ad;
  })(_0x1f9303);
}
function i(_0x5bd8cb, _0x391819) {
  if (null == _0x5bd8cb) {
    return {};
  }
  var _0x47f212,
    _0x3bbb6d = a(_0x5bd8cb, _0x391819);
  if (Object.getOwnPropertySymbols) {
    for (var _0x166bff = Object.getOwnPropertySymbols(_0x5bd8cb), _0x5cb636 = 0; _0x5cb636 < _0x166bff.length; _0x5cb636++) {
      _0x47f212 = _0x166bff[_0x5cb636];
      0 <= _0x391819.indexOf(_0x47f212) || Object.prototype.propertyIsEnumerable.call(_0x5bd8cb, _0x47f212) && (_0x3bbb6d[_0x47f212] = _0x5bd8cb[_0x47f212]);
    }
  }
  return _0x3bbb6d;
}
function a(_0x40b16d, _0xe34620) {
  if (null == _0x40b16d) {
    return {};
  }
  for (var _0x51d33b, _0x542a6d = {}, _0x15160b = Object.keys(_0x40b16d), _0x596a4b = 0; _0x596a4b < _0x15160b.length; _0x596a4b++) {
    _0x51d33b = _0x15160b[_0x596a4b];
    0 <= _0xe34620.indexOf(_0x51d33b) || (_0x542a6d[_0x51d33b] = _0x40b16d[_0x51d33b]);
  }
  return _0x542a6d;
}
function s(_0xf01d29, _0x3cd805) {
  return U(_0xf01d29) || o(_0xf01d29, _0x3cd805) || c(_0xf01d29, _0x3cd805) || n();
}
function n() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function o(_0x3157d4, _0x20a5e6) {
  var _0x548c4c = null == _0x3157d4 ? null : "undefined" != typeof Symbol && _0x3157d4[Symbol.iterator] || _0x3157d4["@@iterator"];
  if (null != _0x548c4c) {
    var _0x1734be,
      _0xf77d22,
      _0x1b6955,
      _0x48513c,
      _0x1e2f26 = [],
      _0xda8b52 = !0,
      _0x2875b0 = !1;
    try {
      if (_0x1b6955 = (_0x548c4c = _0x548c4c.call(_0x3157d4)).next, 0 === _0x20a5e6) {
        if (Object(_0x548c4c) !== _0x548c4c) {
          return;
        }
        _0xda8b52 = !1;
      } else {
        for (; !(_0xda8b52 = (_0x1734be = _0x1b6955.call(_0x548c4c)).done) && (_0x1e2f26.push(_0x1734be.value), _0x1e2f26.length !== _0x20a5e6); _0xda8b52 = !0) {}
      }
    } catch (_0x1e5f8f) {
      _0x2875b0 = !0;
      _0xf77d22 = _0x1e5f8f;
    } finally {
      try {
        if (!_0xda8b52 && null != _0x548c4c.return && (_0x48513c = _0x548c4c.return(), Object(_0x48513c) !== _0x48513c)) {
          return;
        }
      } finally {
        if (_0x2875b0) {
          throw _0xf77d22;
        }
      }
    }
    return _0x1e2f26;
  }
}
function U(_0x260dcd) {
  if (Array.isArray(_0x260dcd)) {
    return _0x260dcd;
  }
}
function u(_0x53484f, _0x52e50d) {
  var _0x1bf426,
    _0x3dbe22,
    _0x1d873a,
    _0x5a852b,
    _0x350ab8 = "undefined" != typeof Symbol && _0x53484f[Symbol.iterator] || _0x53484f["@@iterator"];
  if (_0x350ab8) {
    _0x3dbe22 = !(_0x1bf426 = !0);
    return {
      s: function () {
        _0x350ab8 = _0x350ab8.call(_0x53484f);
      },
      n: function () {
        var _0x41fb08 = _0x350ab8.next();
        _0x1bf426 = _0x41fb08.done;
        return _0x41fb08;
      },
      e: function (_0x55ca73) {
        _0x3dbe22 = !0;
        _0x1d873a = _0x55ca73;
      },
      f: function () {
        try {
          _0x1bf426 || null == _0x350ab8.return || _0x350ab8.return();
        } finally {
          if (_0x3dbe22) {
            throw _0x1d873a;
          }
        }
      }
    };
  }
  if (Array.isArray(_0x53484f) || (_0x350ab8 = c(_0x53484f)) || _0x52e50d && _0x53484f && "number" == typeof _0x53484f.length) {
    _0x350ab8 && (_0x53484f = _0x350ab8);
    _0x5a852b = 0;
    return {
      s: _0x52e50d = function () {},
      n: function () {
        return _0x5a852b >= _0x53484f.length ? {
          done: !0
        } : {
          done: !1,
          value: _0x53484f[_0x5a852b++]
        };
      },
      e: function (_0xa1268d) {
        throw _0xa1268d;
      },
      f: _0x52e50d
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function c(_0x4d8b0b, _0x377fcb) {
  var _0x1cad11;
  if (_0x4d8b0b) {
    return "string" == typeof _0x4d8b0b ? l(_0x4d8b0b, _0x377fcb) : "Map" === (_0x1cad11 = "Object" === (_0x1cad11 = Object.prototype.toString.call(_0x4d8b0b).slice(8, -1)) && _0x4d8b0b.constructor ? _0x4d8b0b.constructor.name : _0x1cad11) || "Set" === _0x1cad11 ? Array.from(_0x4d8b0b) : "Arguments" === _0x1cad11 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x1cad11) ? l(_0x4d8b0b, _0x377fcb) : void 0;
  }
}
function l(_0x6d3aca, _0x2fac0f) {
  (null == _0x2fac0f || _0x2fac0f > _0x6d3aca.length) && (_0x2fac0f = _0x6d3aca.length);
  for (var _0x391923 = 0, _0x2aaab4 = new Array(_0x2fac0f); _0x391923 < _0x2fac0f; _0x391923++) {
    _0x2aaab4[_0x391923] = _0x6d3aca[_0x391923];
  }
  return _0x2aaab4;
}
function p(_0xcf9763, _0x235b4a) {
  var _0x90a2a3,
    _0x41ff70 = Object.keys(_0xcf9763);
  Object.getOwnPropertySymbols && (_0x90a2a3 = Object.getOwnPropertySymbols(_0xcf9763), _0x235b4a && (_0x90a2a3 = _0x90a2a3.filter(function (_0xddfd6) {
    return Object.getOwnPropertyDescriptor(_0xcf9763, _0xddfd6).enumerable;
  })), _0x41ff70.push.apply(_0x41ff70, _0x90a2a3));
  return _0x41ff70;
}
function W(_0x4af485) {
  for (var _0x48cb4e = 1; _0x48cb4e < arguments.length; _0x48cb4e++) {
    var _0x1abbf3 = null != arguments[_0x48cb4e] ? arguments[_0x48cb4e] : {};
    _0x48cb4e % 2 ? p(Object(_0x1abbf3), !0).forEach(function (_0x15f354) {
      h(_0x4af485, _0x15f354, _0x1abbf3[_0x15f354]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_0x4af485, Object.getOwnPropertyDescriptors(_0x1abbf3)) : p(Object(_0x1abbf3)).forEach(function (_0x5288ae) {
      Object.defineProperty(_0x4af485, _0x5288ae, Object.getOwnPropertyDescriptor(_0x1abbf3, _0x5288ae));
    });
  }
  return _0x4af485;
}
function h(_0x29ec59, _0xe15e62, _0x784ee1) {
  (_0xe15e62 = g(_0xe15e62)) in _0x29ec59 ? Object.defineProperty(_0x29ec59, _0xe15e62, {
    value: _0x784ee1,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : _0x29ec59[_0xe15e62] = _0x784ee1;
  return _0x29ec59;
}
function f(_0x1887a2, _0x3ae548) {
  if (!(_0x1887a2 instanceof _0x3ae548)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function d(_0x46b39c, _0x4133b7) {
  for (var _0x386902 = 0; _0x386902 < _0x4133b7.length; _0x386902++) {
    var _0x22acb5 = _0x4133b7[_0x386902];
    _0x22acb5.enumerable = _0x22acb5.enumerable || !1;
    _0x22acb5.configurable = !0;
    "value" in _0x22acb5 && (_0x22acb5.writable = !0);
    Object.defineProperty(_0x46b39c, g(_0x22acb5.key), _0x22acb5);
  }
}
function v(_0x3a122e, _0x3013f6, _0x2dcfa1) {
  _0x3013f6 && d(_0x3a122e.prototype, _0x3013f6);
  _0x2dcfa1 && d(_0x3a122e, _0x2dcfa1);
  Object.defineProperty(_0x3a122e, "prototype", {
    writable: !1
  });
  return _0x3a122e;
}
function g(_0x30fe4e) {
  _0x30fe4e = q(_0x30fe4e, "string");
  return "symbol" == T(_0x30fe4e) ? _0x30fe4e : _0x30fe4e + "";
}
function q(_0x173cfa, _0x160aeb) {
  if ("object" != T(_0x173cfa) || !_0x173cfa) {
    return _0x173cfa;
  }
  var _0x16c9b7 = _0x173cfa[Symbol.toPrimitive];
  if (void 0 === _0x16c9b7) {
    return ("string" === _0x160aeb ? String : Number)(_0x173cfa);
  }
  _0x16c9b7 = _0x16c9b7.call(_0x173cfa, _0x160aeb || "default");
  if ("object" != T(_0x16c9b7)) {
    return _0x16c9b7;
  }
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function L() {
  L = function () {
    return _0x558da4;
  };
  var _0x100442,
    _0x558da4 = {},
    _0x5cb554 = Object.prototype,
    _0x32a745 = _0x5cb554.hasOwnProperty,
    _0x41abd7 = Object.defineProperty || function (_0x505469, _0x784ff7, _0x587192) {
      _0x505469[_0x784ff7] = _0x587192.value;
    },
    _0x490086 = "function" == typeof Symbol ? Symbol : {},
    _0x53dbc2 = _0x490086.iterator || "@@iterator",
    _0x381907 = _0x490086.asyncIterator || "@@asyncIterator",
    _0x4beb13 = _0x490086.toStringTag || "@@toStringTag";
  function _0x204e45(_0x2aacd5, _0x38da2d, _0x15ee65) {
    Object.defineProperty(_0x2aacd5, _0x38da2d, {
      value: _0x15ee65,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
    return _0x2aacd5[_0x38da2d];
  }
  try {
    _0x204e45({}, "");
  } catch (_0x5587f8) {
    _0x204e45 = function (_0x2ad0f7, _0x1b8ba4, _0x312954) {
      return _0x2ad0f7[_0x1b8ba4] = _0x312954;
    };
  }
  function _0x1a43ad(_0x2679f8, _0x4c0d13, _0x46d01b, _0x1277d0) {
    var _0x545654,
      _0x18072d,
      _0x1eb7e0,
      _0x43c8cf,
      _0x4c0d13 = _0x4c0d13 && _0x4c0d13.prototype instanceof _0x3d2992 ? _0x4c0d13 : _0x3d2992,
      _0x4c0d13 = Object.create(_0x4c0d13.prototype),
      _0x1277d0 = new _0x4409f2(_0x1277d0 || []);
    _0x41abd7(_0x4c0d13, "_invoke", {
      value: (_0x545654 = _0x2679f8, _0x18072d = _0x46d01b, _0x1eb7e0 = _0x1277d0, _0x43c8cf = _0x11b3ad, function (_0x2eac4a, _0x28504c) {
        if (_0x43c8cf === _0x1b1a7e) {
          throw Error("Generator is already running");
        }
        if (_0x43c8cf === _0xff09d3) {
          if ("throw" === _0x2eac4a) {
            throw _0x28504c;
          }
          return {
            value: _0x100442,
            done: !0
          };
        }
        for (_0x1eb7e0.method = _0x2eac4a, _0x1eb7e0.arg = _0x28504c;;) {
          var _0x4dee6e = _0x1eb7e0.delegate;
          if (_0x4dee6e) {
            _0x4dee6e = function _0x233438(_0x399f03, _0x41d8df) {
              var _0x5b3bec = _0x41d8df.method,
                _0x573a32 = _0x399f03.iterator[_0x5b3bec];
              if (_0x573a32 === _0x100442) {
                _0x41d8df.delegate = null;
                "throw" === _0x5b3bec && _0x399f03.iterator.return && (_0x41d8df.method = "return", _0x41d8df.arg = _0x100442, _0x233438(_0x399f03, _0x41d8df), "throw" === _0x41d8df.method) || "return" !== _0x5b3bec && (_0x41d8df.method = "throw", _0x41d8df.arg = new TypeError("The iterator does not provide a '" + _0x5b3bec + "' method"));
                return _0x4ea364;
              }
              _0x5b3bec = _0x5d72fa(_0x573a32, _0x399f03.iterator, _0x41d8df.arg);
              if ("throw" === _0x5b3bec.type) {
                _0x41d8df.method = "throw";
                _0x41d8df.arg = _0x5b3bec.arg;
                _0x41d8df.delegate = null;
                return _0x4ea364;
              }
              _0x573a32 = _0x5b3bec.arg;
              return _0x573a32 ? _0x573a32.done ? (_0x41d8df[_0x399f03.resultName] = _0x573a32.value, _0x41d8df.next = _0x399f03.nextLoc, "return" !== _0x41d8df.method && (_0x41d8df.method = "next", _0x41d8df.arg = _0x100442), _0x41d8df.delegate = null, _0x4ea364) : _0x573a32 : (_0x41d8df.method = "throw", _0x41d8df.arg = new TypeError("iterator result is not an object"), _0x41d8df.delegate = null, _0x4ea364);
            }(_0x4dee6e, _0x1eb7e0);
            if (_0x4dee6e) {
              if (_0x4dee6e === _0x4ea364) {
                continue;
              }
              return _0x4dee6e;
            }
          }
          if ("next" === _0x1eb7e0.method) {
            _0x1eb7e0.sent = _0x1eb7e0._sent = _0x1eb7e0.arg;
          } else {
            if ("throw" === _0x1eb7e0.method) {
              if (_0x43c8cf === _0x11b3ad) {
                throw _0x43c8cf = _0xff09d3, _0x1eb7e0.arg;
              }
              _0x1eb7e0.dispatchException(_0x1eb7e0.arg);
            } else {
              "return" === _0x1eb7e0.method && _0x1eb7e0.abrupt("return", _0x1eb7e0.arg);
            }
          }
          _0x43c8cf = _0x1b1a7e;
          _0x4dee6e = _0x5d72fa(_0x545654, _0x18072d, _0x1eb7e0);
          if ("normal" === _0x4dee6e.type) {
            if (_0x43c8cf = _0x1eb7e0.done ? _0xff09d3 : _0x18292c, _0x4dee6e.arg === _0x4ea364) {
              continue;
            }
            return {
              value: _0x4dee6e.arg,
              done: _0x1eb7e0.done
            };
          }
          "throw" === _0x4dee6e.type && (_0x43c8cf = _0xff09d3, _0x1eb7e0.method = "throw", _0x1eb7e0.arg = _0x4dee6e.arg);
        }
      })
    });
    return _0x4c0d13;
  }
  function _0x5d72fa(_0x4fd0d2, _0x3ea87d, _0x58255d) {
    try {
      return {
        type: "normal",
        arg: _0x4fd0d2.call(_0x3ea87d, _0x58255d)
      };
    } catch (_0xe8baf0) {
      return {
        type: "throw",
        arg: _0xe8baf0
      };
    }
  }
  _0x558da4.wrap = _0x1a43ad;
  var _0x11b3ad = "suspendedStart",
    _0x18292c = "suspendedYield",
    _0x1b1a7e = "executing",
    _0xff09d3 = "completed",
    _0x4ea364 = {};
  function _0x3d2992() {}
  function _0x12d5e4() {}
  function _0x1d9a7c() {}
  var _0x490086 = {},
    _0x1645f8 = (_0x204e45(_0x490086, _0x53dbc2, function () {
      return this;
    }), Object.getPrototypeOf),
    _0x1645f8 = _0x1645f8 && _0x1645f8(_0x1645f8(_0x421197([]))),
    _0xfd1132 = (_0x1645f8 && _0x1645f8 !== _0x5cb554 && _0x32a745.call(_0x1645f8, _0x53dbc2) && (_0x490086 = _0x1645f8), _0x1d9a7c.prototype = _0x3d2992.prototype = Object.create(_0x490086));
  function _0x48f6a6(_0x3c7c9f) {
    ["next", "throw", "return"].forEach(function (_0x448c06) {
      _0x204e45(_0x3c7c9f, _0x448c06, function (_0x120cc5) {
        return this._invoke(_0x448c06, _0x120cc5);
      });
    });
  }
  function _0x242f7e(_0x1e087e, _0x1213e2) {
    var _0x14e087;
    _0x41abd7(this, "_invoke", {
      value: function (_0x44407c, _0x23ccdd) {
        function _0x4f433d() {
          return new _0x1213e2(function (_0x2b8f93, _0x3f9f41) {
            !function _0x2ebd82(_0x3e3838, _0x1777a9, _0x286a13, _0x42a313) {
              var _0x30a2f3,
                _0x3e3838 = _0x5d72fa(_0x1e087e[_0x3e3838], _0x1e087e, _0x1777a9);
              if ("throw" !== _0x3e3838.type) {
                return (_0x1777a9 = (_0x30a2f3 = _0x3e3838.arg).value) && "object" == T(_0x1777a9) && _0x32a745.call(_0x1777a9, "__await") ? _0x1213e2.resolve(_0x1777a9.__await).then(function (_0x4cdc22) {
                  _0x2ebd82("next", _0x4cdc22, _0x286a13, _0x42a313);
                }, function (_0x56b7ae) {
                  _0x2ebd82("throw", _0x56b7ae, _0x286a13, _0x42a313);
                }) : _0x1213e2.resolve(_0x1777a9).then(function (_0xca8552) {
                  _0x30a2f3.value = _0xca8552;
                  _0x286a13(_0x30a2f3);
                }, function (_0x55774a) {
                  return _0x2ebd82("throw", _0x55774a, _0x286a13, _0x42a313);
                });
              }
              _0x42a313(_0x3e3838.arg);
            }(_0x44407c, _0x23ccdd, _0x2b8f93, _0x3f9f41);
          });
        }
        return _0x14e087 = _0x14e087 ? _0x14e087.then(_0x4f433d, _0x4f433d) : _0x4f433d();
      }
    });
  }
  function _0x5e90aa(_0x1b0e16) {
    var _0x159086 = {
      tryLoc: _0x1b0e16[0],
      catchLoc: _0x1b0e16[1],
      finallyLoc: _0x1b0e16[2],
      afterLoc: _0x1b0e16[3]
    };
    1 in _0x1b0e16;
    2 in _0x1b0e16;
    this.tryEntries.push(_0x159086);
  }
  function _0x1e45b9(_0xa21f3d) {
    var _0x4c7f69 = _0xa21f3d.completion || {};
    _0x4c7f69.type = "normal";
    delete _0x4c7f69.arg;
    _0xa21f3d.completion = _0x4c7f69;
  }
  function _0x4409f2(_0x569913) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    _0x569913.forEach(_0x5e90aa, this);
    this.reset(!0);
  }
  function _0x421197(_0x185bc8) {
    if (_0x185bc8 || "" === _0x185bc8) {
      var _0x536588,
        _0xaf5441 = _0x185bc8[_0x53dbc2];
      if (_0xaf5441) {
        return _0xaf5441.call(_0x185bc8);
      }
      if ("function" == typeof _0x185bc8.next) {
        return _0x185bc8;
      }
      if (!isNaN(_0x185bc8.length)) {
        _0x536588 = -1;
        return (_0xaf5441 = function _0xb8ce97() {
          for (; ++_0x536588 < _0x185bc8.length;) {
            if (_0x32a745.call(_0x185bc8, _0x536588)) {
              _0xb8ce97.value = _0x185bc8[_0x536588];
              _0xb8ce97.done = !1;
              return _0xb8ce97;
            }
          }
          _0xb8ce97.value = _0x100442;
          _0xb8ce97.done = !0;
          return _0xb8ce97;
        }).next = _0xaf5441;
      }
    }
    throw new TypeError(T(_0x185bc8) + " is not iterable");
  }
  _0x41abd7(_0xfd1132, "constructor", {
    value: _0x12d5e4.prototype = _0x1d9a7c,
    configurable: !0
  });
  _0x41abd7(_0x1d9a7c, "constructor", {
    value: _0x12d5e4,
    configurable: !0
  });
  _0x12d5e4.displayName = _0x204e45(_0x1d9a7c, _0x4beb13, "GeneratorFunction");
  _0x558da4.isGeneratorFunction = function (_0x19f707) {
    _0x19f707 = "function" == typeof _0x19f707 && _0x19f707.constructor;
    return !!_0x19f707 && (_0x19f707 === _0x12d5e4 || "GeneratorFunction" === (_0x19f707.displayName || _0x19f707.name));
  };
  _0x558da4.mark = function (_0x2608da) {
    Object.setPrototypeOf ? Object.setPrototypeOf(_0x2608da, _0x1d9a7c) : (_0x2608da.__proto__ = _0x1d9a7c, _0x204e45(_0x2608da, _0x4beb13, "GeneratorFunction"));
    _0x2608da.prototype = Object.create(_0xfd1132);
    return _0x2608da;
  };
  _0x558da4.awrap = function (_0x26e770) {
    return {
      __await: _0x26e770
    };
  };
  _0x48f6a6(_0x242f7e.prototype);
  _0x204e45(_0x242f7e.prototype, _0x381907, function () {
    return this;
  });
  _0x558da4.AsyncIterator = _0x242f7e;
  _0x558da4.async = function (_0x4ad912, _0x3d341f, _0x966e7c, _0x4df3e8, _0x4f17b3) {
    void 0 === _0x4f17b3 && (_0x4f17b3 = Promise);
    var _0x2785e4 = new _0x242f7e(_0x1a43ad(_0x4ad912, _0x3d341f, _0x966e7c, _0x4df3e8), _0x4f17b3);
    return _0x558da4.isGeneratorFunction(_0x3d341f) ? _0x2785e4 : _0x2785e4.next().then(function (_0x107e16) {
      return _0x107e16.done ? _0x107e16.value : _0x2785e4.next();
    });
  };
  _0x48f6a6(_0xfd1132);
  _0x204e45(_0xfd1132, _0x4beb13, "Generator");
  _0x204e45(_0xfd1132, _0x53dbc2, function () {
    return this;
  });
  _0x204e45(_0xfd1132, "toString", function () {
    return "[object Generator]";
  });
  _0x558da4.keys = function (_0x61a3a0) {
    var _0x4fb11b,
      _0x359a3b = Object(_0x61a3a0),
      _0x280b34 = [];
    for (_0x4fb11b in _0x359a3b) _0x280b34.push(_0x4fb11b);
    _0x280b34.reverse();
    return function _0x554054() {
      for (; _0x280b34.length;) {
        var _0x2cb100 = _0x280b34.pop();
        if (_0x2cb100 in _0x359a3b) {
          _0x554054.value = _0x2cb100;
          _0x554054.done = !1;
          return _0x554054;
        }
      }
      _0x554054.done = !0;
      return _0x554054;
    };
  };
  _0x558da4.values = _0x421197;
  _0x4409f2.prototype = {
    constructor: _0x4409f2,
    reset: function (_0x12e219) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x100442, this.done = !1, this.delegate = null, this.method = "next", this.arg = _0x100442, this.tryEntries.forEach(_0x1e45b9), !_0x12e219) {
        for (var _0x1e94a0 in this) "t" === _0x1e94a0.charAt(0) && _0x32a745.call(this, _0x1e94a0) && !isNaN(+_0x1e94a0.slice(1)) && (this[_0x1e94a0] = _0x100442);
      }
    },
    stop: function () {
      this.done = !0;
      var _0x5b78c9 = this.tryEntries[0].completion;
      if ("throw" === _0x5b78c9.type) {
        throw _0x5b78c9.arg;
      }
      return this.rval;
    },
    dispatchException: function (_0x9ffb04) {
      if (this.done) {
        throw _0x9ffb04;
      }
      var _0xfd6f09 = this;
      function _0x30ba93(_0x16e9a8, _0x3de9db) {
        _0x211f1e.type = "throw";
        _0x211f1e.arg = _0x9ffb04;
        _0xfd6f09.next = _0x16e9a8;
        _0x3de9db && (_0xfd6f09.method = "next", _0xfd6f09.arg = _0x100442);
        return !!_0x3de9db;
      }
      for (var _0xab96e8 = this.tryEntries.length - 1; 0 <= _0xab96e8; --_0xab96e8) {
        var _0x4f0b51 = this.tryEntries[_0xab96e8],
          _0x211f1e = _0x4f0b51.completion;
        if ("root" === _0x4f0b51.tryLoc) {
          return _0x30ba93("end");
        }
        if (_0x4f0b51.tryLoc <= this.prev) {
          var _0x549508 = _0x32a745.call(_0x4f0b51, "catchLoc"),
            _0x3a1ca4 = _0x32a745.call(_0x4f0b51, "finallyLoc");
          if (_0x549508 && _0x3a1ca4) {
            if (this.prev < _0x4f0b51.catchLoc) {
              return _0x30ba93(_0x4f0b51.catchLoc, !0);
            }
            if (this.prev < _0x4f0b51.finallyLoc) {
              return _0x30ba93(_0x4f0b51.finallyLoc);
            }
          } else {
            if (_0x549508) {
              if (this.prev < _0x4f0b51.catchLoc) {
                return _0x30ba93(_0x4f0b51.catchLoc, !0);
              }
            } else {
              if (!_0x3a1ca4) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < _0x4f0b51.finallyLoc) {
                return _0x30ba93(_0x4f0b51.finallyLoc);
              }
            }
          }
        }
      }
    },
    abrupt: function (_0x49f89a, _0x5f5235) {
      for (var _0x5bad3b = this.tryEntries.length - 1; 0 <= _0x5bad3b; --_0x5bad3b) {
        var _0x157a90 = this.tryEntries[_0x5bad3b];
        if (_0x157a90.tryLoc <= this.prev && _0x32a745.call(_0x157a90, "finallyLoc") && this.prev < _0x157a90.finallyLoc) {
          var _0x5d73eb = _0x157a90;
          break;
        }
      }
      var _0x46ab85 = (_0x5d73eb = _0x5d73eb && ("break" === _0x49f89a || "continue" === _0x49f89a) && _0x5d73eb.tryLoc <= _0x5f5235 && _0x5f5235 <= _0x5d73eb.finallyLoc ? null : _0x5d73eb) ? _0x5d73eb.completion : {};
      _0x46ab85.type = _0x49f89a;
      _0x46ab85.arg = _0x5f5235;
      return _0x5d73eb ? (this.method = "next", this.next = _0x5d73eb.finallyLoc, _0x4ea364) : this.complete(_0x46ab85);
    },
    complete: function (_0x3296c7, _0x105b10) {
      if ("throw" === _0x3296c7.type) {
        throw _0x3296c7.arg;
      }
      "break" === _0x3296c7.type || "continue" === _0x3296c7.type ? this.next = _0x3296c7.arg : "return" === _0x3296c7.type ? (this.rval = this.arg = _0x3296c7.arg, this.method = "return", this.next = "end") : "normal" === _0x3296c7.type && _0x105b10 && (this.next = _0x105b10);
      return _0x4ea364;
    },
    finish: function (_0x27cc91) {
      for (var _0x1ae4d9 = this.tryEntries.length - 1; 0 <= _0x1ae4d9; --_0x1ae4d9) {
        var _0x3977c1 = this.tryEntries[_0x1ae4d9];
        if (_0x3977c1.finallyLoc === _0x27cc91) {
          this.complete(_0x3977c1.completion, _0x3977c1.afterLoc);
          _0x1e45b9(_0x3977c1);
          return _0x4ea364;
        }
      }
    },
    catch: function (_0x1c6ceb) {
      for (var _0x53db56 = this.tryEntries.length - 1; 0 <= _0x53db56; --_0x53db56) {
        var _0x472c5f,
          _0x3d3deb,
          _0x300247 = this.tryEntries[_0x53db56];
        if (_0x300247.tryLoc === _0x1c6ceb) {
          "throw" === (_0x472c5f = _0x300247.completion).type && (_0x3d3deb = _0x472c5f.arg, _0x1e45b9(_0x300247));
          return _0x3d3deb;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (_0x3b7df0, _0x219586, _0xa381a1) {
      this.delegate = {
        iterator: _0x421197(_0x3b7df0),
        resultName: _0x219586,
        nextLoc: _0xa381a1
      };
      "next" === this.method && (this.arg = _0x100442);
      return _0x4ea364;
    }
  };
  return _0x558da4;
}
function y(_0x44f8aa, _0x2db187, _0x4871ce, _0x412636, _0xef81f1, _0x344470, _0x225272) {
  try {
    var _0x3e4cf2 = _0x44f8aa[_0x344470](_0x225272),
      _0x3bf9dd = _0x3e4cf2.value;
  } catch (_0x1cf8aa) {
    return void _0x4871ce(_0x1cf8aa);
  }
  _0x3e4cf2.done ? _0x2db187(_0x3bf9dd) : Promise.resolve(_0x3bf9dd).then(_0x412636, _0xef81f1);
}
function m(_0x8970b6) {
  return function () {
    var _0x4f9d49 = this,
      _0x3ae352 = arguments;
    return new Promise(function (_0x1e8629, _0x14bf01) {
      var _0x4963b3 = _0x8970b6.apply(_0x4f9d49, _0x3ae352);
      function _0x13bc51(_0x527975) {
        y(_0x4963b3, _0x1e8629, _0x14bf01, _0x13bc51, _0x62da0e, "next", _0x527975);
      }
      function _0x62da0e(_0x333ac5) {
        y(_0x4963b3, _0x1e8629, _0x14bf01, _0x13bc51, _0x62da0e, "throw", _0x333ac5);
      }
      _0x13bc51(void 0);
    });
  };
}
var b = require("axios"),
  x = new at("叮叮联盟阅读"),
  J = (tt(), "V1.02"),
  w = "ddlmyd",
  k = ["\n", "&"],
  N = (x.isNode() ? process.env[w] : x.getdata(w)) || "",
  _ = (x.isNode() ? process.env.wxpusherAppToken : x.getdata("wxpusherAppToken")) || "",
  $ = (x.isNode() ? process.env.wxpusherTopicId : x.getdata("wxpusherTopicId")) || "",
  S = [],
  z = 0,
  A = 14,
  O = require("jimp"),
  H = require("jsqr"),
  D = require("qrcode"),
  G = require("path"),
  j = "https://ghp.ci/https://raw.githubusercontent.com/Huansheng1/my-qinglong-js/main/";
function X() {
  return e.apply(this, arguments);
}
function e() {
  return (e = m(L().mark(function _0x2886d0() {
    var _0x459420;
    return L().wrap(function (_0x28bb3d) {
      for (;;) {
        switch (_0x28bb3d.prev = _0x28bb3d.next) {
          case 0:
            _0x28bb3d.prev = 0;
            _0x28bb3d.next = 3;
            return b.get(j + "announce.txt", {
              timeout: 60000,
              validateStatus: function () {
                return !0;
              }
            });
          case 3:
            _0x459420 = _0x28bb3d.sent;
            console.log(_0x459420.data || "广告区域（预留）: 啦啦啦~啦啦啦~，我是卖广告的小行家");
            _0x28bb3d.next = 10;
            break;
          case 7:
            _0x28bb3d.prev = 7;
            _0x28bb3d.t0 = _0x28bb3d.catch(0);
            console.log("获取公告失败: ".concat(_0x28bb3d.t0.message));
          case 10:
          case "end":
            return _0x28bb3d.stop();
        }
      }
    }, _0x2886d0, null, [[0, 7]]);
  }))).apply(this, arguments);
}
function Q() {
  return E.apply(this, arguments);
}
function E() {
  return (E = m(L().mark(function _0x4d3e58() {
    var _0x113a87,
      _0x3703f9,
      _0x75bc51,
      _0x24d54f = arguments;
    return L().wrap(function (_0x1b1a6e) {
      for (;;) {
        switch (_0x1b1a6e.prev = _0x1b1a6e.next) {
          case 0:
            _0x113a87 = 0 < _0x24d54f.length && void 0 !== _0x24d54f[0] ? _0x24d54f[0] : "README.md";
            _0x3703f9 = 1 < _0x24d54f.length && void 0 !== _0x24d54f[1] ? _0x24d54f[1] : 20000;
            _0x113a87 = "".concat(j).concat(_0x113a87);
            _0x1b1a6e.prev = 3;
            _0x1b1a6e.next = 6;
            return b.get(_0x113a87, {
              timeout: _0x3703f9,
              validateStatus: function (_0x515a75) {
                return 200 <= _0x515a75 && _0x515a75 < 300;
              }
            });
          case 6:
            _0x113a87 = _0x1b1a6e.sent;
            _0x3703f9 = /版本号：V\s*([\d.]+)/;
            _0x75bc51 = _0x113a87.data.match(_0x3703f9);
            _0x75bc51 = _0x75bc51 ? _0x75bc51[1] : "";
            console.log("当前版本:[".concat(J || "未知", "]>>>>>云端☁️版本:[").concat(_0x75bc51 || "未知", "]"));
            return _0x1b1a6e.abrupt("return", _0x75bc51);
          case 14:
            _0x1b1a6e.prev = 14;
            _0x1b1a6e.t0 = _0x1b1a6e.catch(3);
            console.error("拉取仓库最新版本脚本失败: ".concat(_0x1b1a6e.t0.message.replace(j + "Huansheng1/my-qinglong-js@main/", "")));
            return _0x1b1a6e.abrupt("return", null);
          case 18:
          case "end":
            return _0x1b1a6e.stop();
        }
      }
    }, _0x4d3e58, null, [[3, 14]]);
  }))).apply(this, arguments);
}
function B(_0xef626e, _0x47256c, _0x4341b7) {
  for (var _0x532dd8, _0x58631d, _0x3d3578 = 3 < arguments.length && void 0 !== arguments[3] && arguments[3], _0x216e9d = [], _0x2447f1 = _0xef626e.indexOf(_0x47256c); -1 !== _0x2447f1 && -1 !== (_0x58631d = (_0x532dd8 = _0xef626e.slice(_0x2447f1 + _0x47256c.length)).indexOf(_0x4341b7)) && (_0x216e9d.push(_0x532dd8.slice(0, _0x58631d)), _0x3d3578);) {
    _0x2447f1 = (_0xef626e = _0x532dd8.slice(_0x58631d + _0x4341b7.length)).indexOf(_0x47256c);
  }
  return _0x3d3578 ? _0x216e9d : _0x216e9d[0] || "";
}
function C(_0x391426) {
  try {
    return function () {
      var _0x3bce7a = m(L().mark(function _0x42e2d1(_0x34abd1) {
        var _0x377c37, _0x1dcf1a, _0x61d2bf;
        return L().wrap(function (_0x4c29f8) {
          for (;;) {
            switch (_0x4c29f8.prev = _0x4c29f8.next) {
              case 0:
                if ((_0x377c37 = null) != _0x34abd1 && _0x34abd1.startsWith("data:image/") && (_0x377c37 = null == _0x34abd1 || null == (_0x1dcf1a = _0x34abd1.split(",")) ? void 0 : _0x1dcf1a[1]), null != _0x34abd1 && _0x34abd1.includes(";base64,")) {
                  _0x4c29f8.next = 8;
                  break;
                }
                _0x4c29f8.next = 5;
                return O.read(_0x34abd1);
              case 5:
                _0x4c29f8.t0 = _0x4c29f8.sent;
                _0x4c29f8.next = 11;
                break;
              case 8:
                _0x4c29f8.next = 10;
                return O.read(Buffer.from(_0x377c37, "base64"));
              case 10:
                _0x4c29f8.t0 = _0x4c29f8.sent;
              case 11:
                if (_0x1dcf1a = _0x4c29f8.t0, _0x61d2bf = H(_0x1dcf1a.bitmap.data, _0x1dcf1a.bitmap.width, _0x1dcf1a.bitmap.height)) {
                  return _0x4c29f8.abrupt("return", _0x61d2bf.data);
                }
                _0x4c29f8.next = 17;
                break;
              case 17:
                throw new Error("无法从图片中解析二维码");
              case 18:
              case "end":
                return _0x4c29f8.stop();
            }
          }
        }, _0x42e2d1);
      }));
      return function (_0x284869) {
        return _0x3bce7a.apply(this, arguments);
      };
    }()(_0x391426);
  } catch (_0x3bbd72) {
    console.log("解析二维码失败，错误代码：".concat(_0x3bbd72.message, "，待解析的图片：").concat(_0x391426));
    return "";
  }
}
var K = "api.jiudingliliang.com",
  Z = function () {
    return v(function _0x45e5fd(_0x406708) {
      f(this, _0x45e5fd);
      this.wxpusherAppToken = _;
      this.wxpusherTopicId = $;
      this.disabledReadJob = !1;
      this.index = ++z;
      this.valid = !1;
      var _0x5e543d = null == _0x406708 ? void 0 : _0x406708.split("#");
      switch (null == _0x5e543d ? void 0 : _0x5e543d.length) {
        case 1:
          this.activedAuthToken = _0x5e543d[0];
          break;
        case 3:
          this.activedAuthToken = _0x5e543d[0];
          this.wxpusherAppToken = _0x5e543d[1];
          this.wxpusherTopicId = _0x5e543d[2];
          break;
        default:
          console.log("[".concat(this.index, "] 参数错误，请检查参数是否正确"));
      }
    }, [{
      key: "taskApi",
      value: (_0xcd5806 = m(L().mark(function _0x6df329(_0x31dbc3, _0x5a046e, _0x1aa7c1, _0x5cfba4) {
        var _0x3f3df,
          _0x186b54,
          _0x3b4098,
          _0x3138b0,
          _0xeb92b2 = arguments;
        return L().wrap(function (_0xfe18ea) {
          for (;;) {
            switch (_0xfe18ea.prev = _0xfe18ea.next) {
              case 0:
                _0x3f3df = 4 < _0xeb92b2.length && void 0 !== _0xeb92b2[4] ? _0xeb92b2[4] : {};
                _0x3b4098 = 5 < _0xeb92b2.length && void 0 !== _0xeb92b2[5] ? _0xeb92b2[5] : 3;
                _0xfe18ea.prev = 2;
                _0x3f3df = {
                  url: _0x1aa7c1,
                  headers: W({
                    Host: K,
                    Connection: "keep-alive",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090b19) XWEB/9129 Flue",
                    "Content-Type": "application/json;charset=UTF-8",
                    Accept: "*/*",
                    Origin: "http://niskeacuy.roboathena.cn",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "http://niskeacuy.roboathena.cn/",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9"
                  }, _0x3f3df),
                  timeout: 60000
                };
                this.activedAuthToken && (_0x3f3df.headers.Authorization = "Bearer " + (null == (_0x186b54 = this.activedAuthToken) ? void 0 : _0x186b54.replace("Bearer ", "")));
                _0x5cfba4 && (_0x3f3df.body = _0x5cfba4);
                _0x186b54 = _0x3b4098;
              case 7:
                if (0 < _0x186b54) {
                  _0xfe18ea.prev = 8;
                  _0xfe18ea.next = 11;
                  return it(_0x5a046e, _0x3f3df);
                }
                _0xfe18ea.next = 36;
                break;
              case 11:
                if ((_0x3138b0 = _0xfe18ea.sent).resp && 200 <= _0x3138b0.resp.statusCode && _0x3138b0.resp.statusCode < 400) {
                  if (_0x3138b0.resp.body) {
                    return _0xfe18ea.abrupt("return", JSON.parse(_0x3138b0.resp.body) || _0x3138b0.resp.body);
                  }
                  _0xfe18ea.next = 17;
                } else {
                  _0xfe18ea.next = 21;
                }
                break;
              case 17:
                console.log("[".concat(_0x31dbc3, "]请求异常，服务器没返回任何数据~"));
                return _0xfe18ea.abrupt("return", "");
              case 19:
                _0xfe18ea.next = 25;
                break;
              case 21:
                if (console.log("请求出现未知错误：".concat(_0x3138b0.err || "Invalid status code")), 1 < _0x186b54) {
                  _0x186b54--;
                  return _0xfe18ea.abrupt("continue", 7);
                }
                _0xfe18ea.next = 25;
                break;
              case 25:
                return _0xfe18ea.abrupt("return", null == (_0x3b4098 = _0x3138b0.resp) ? void 0 : _0x3b4098.body);
              case 28:
                if (_0xfe18ea.prev = 28, _0xfe18ea.t0 = _0xfe18ea.catch(8), console.log("[".concat(_0x31dbc3, "]请求出现未知异常："), _0xfe18ea.t0), 1 < _0x186b54) {
                  _0x186b54--;
                  return _0xfe18ea.abrupt("continue", 7);
                }
                _0xfe18ea.next = 34;
                break;
              case 34:
                _0xfe18ea.next = 7;
                break;
              case 36:
                _0xfe18ea.next = 41;
                break;
              case 38:
                _0xfe18ea.prev = 38;
                _0xfe18ea.t1 = _0xfe18ea.catch(2);
                console.log("[".concat(_0x31dbc3, "]请求出现未知异常："), _0xfe18ea.t1);
              case 41:
              case "end":
                return _0xfe18ea.stop();
            }
          }
        }, _0x6df329, this, [[2, 38], [8, 28]]);
      })), function (_0x1d284d, _0x5191c6, _0x58b327, _0x1b1dd8) {
        return _0xcd5806.apply(this, arguments);
      })
    }, {
      key: "getUserInfo",
      value: (_0x6fa9d0 = m(L().mark(function _0x4d7293() {
        var _0x31c02d = this;
        return L().wrap(function (_0x1c9895) {
          for (;;) {
            switch (_0x1c9895.prev = _0x1c9895.next) {
              case 0:
                _0x1c9895.prev = 0;
                return _0x1c9895.abrupt("return", this.taskApi("getUserInfo", "post", "https://api.jiudingliliang.com/user/info", "{}").then(function () {
                  var _0x555f4e = m(L().mark(function _0x50e414(_0x2a0cf8) {
                    var _0x5bcb9d;
                    return L().wrap(function (_0x2e3df2) {
                      for (;;) {
                        switch (_0x2e3df2.prev = _0x2e3df2.next) {
                          case 0:
                            if (10000 == (null == _0x2a0cf8 ? void 0 : _0x2a0cf8.code)) {
                              _0x31c02d.balance = (null == _0x2a0cf8 || null == (_0x5bcb9d = _0x2a0cf8.result) ? void 0 : _0x5bcb9d.balanceCash) || 0;
                              x.logAndNotify("账号[".concat(_0x31c02d.index, "] 查询个人信息成功，账号余额 ").concat(_0x31c02d.balance || 0, "，账号名 ").concat((null == _0x2a0cf8 || null == (_0x5bcb9d = _0x2a0cf8.result) ? void 0 : _0x5bcb9d.nickname) || "-"));
                              _0x31c02d.valid = !0;
                              return _0x2e3df2.abrupt("return", !0);
                            }
                            _0x2e3df2.next = 7;
                            break;
                          case 7:
                            x.logAndNotify("账号[".concat(_0x31c02d.index, "] - 查询个人信息失败：").concat((null == _0x2a0cf8 ? void 0 : _0x2a0cf8.msg) || JSON.stringify(_0x2a0cf8)));
                            _0x31c02d.valid = !1;
                            return _0x2e3df2.abrupt("return", !1);
                          case 10:
                          case "end":
                            return _0x2e3df2.stop();
                        }
                      }
                    }, _0x50e414);
                  }));
                  return function (_0x16d009) {
                    return _0x555f4e.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x1c9895.prev = 8;
                _0x1c9895.t0 = _0x1c9895.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 查询个人信息失败：") + (null === _0x1c9895.t0 || void 0 === _0x1c9895.t0 ? void 0 : _0x1c9895.t0.message));
              case 11:
              case "end":
                return _0x1c9895.stop();
            }
          }
        }, _0x4d7293, this, [[0, 8]]);
      })), function () {
        return _0x6fa9d0.apply(this, arguments);
      })
    }, {
      key: "getReadQr",
      value: (_0x3f21ff = m(L().mark(function _0xb02eab() {
        var _0x4b9f88,
          _0x3fd0b7 = this;
        return L().wrap(function (_0x542f2e) {
          for (;;) {
            switch (_0x542f2e.prev = _0x542f2e.next) {
              case 0:
                _0x542f2e.prev = 0;
                _0x4b9f88 = JSON.stringify({
                  route: "/pages/read/read"
                });
                return _0x542f2e.abrupt("return", this.taskApi("getReadQr", "post", "https://api.jiudingliliang.com/task/read-batch", _0x4b9f88, {
                  Accept: "*/*"
                }).then(function () {
                  var _0x366c8b = m(L().mark(function _0x22b553(_0x18e4a2) {
                    var _0x13547f;
                    return L().wrap(function (_0x53a2e6) {
                      for (;;) {
                        switch (_0x53a2e6.prev = _0x53a2e6.next) {
                          case 0:
                            if (10000 == (null == _0x18e4a2 ? void 0 : _0x18e4a2.code)) {
                              _0x13547f = null == _0x18e4a2 || null == (_0x13547f = _0x18e4a2.result) ? void 0 : _0x13547f.qrcode;
                              x.logAndNotify("账号[".concat(_0x3fd0b7.index, "] 获取到阅读二维码成功"));
                              return _0x53a2e6.abrupt("return", _0x13547f);
                            }
                            _0x53a2e6.next = 6;
                            break;
                          case 6:
                            x.logAndNotify("账号[".concat(_0x3fd0b7.index, "] - 获取阅读二维码失败：").concat((null == _0x18e4a2 ? void 0 : _0x18e4a2.msg) || JSON.stringify(_0x18e4a2)));
                            return _0x53a2e6.abrupt("return", !1);
                          case 8:
                          case "end":
                            return _0x53a2e6.stop();
                        }
                      }
                    }, _0x22b553);
                  }));
                  return function (_0x17a1d8) {
                    return _0x366c8b.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x542f2e.prev = 8;
                _0x542f2e.t0 = _0x542f2e.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 获取阅读链接失败：") + (null === _0x542f2e.t0 || void 0 === _0x542f2e.t0 ? void 0 : _0x542f2e.t0.message));
              case 11:
              case "end":
                return _0x542f2e.stop();
            }
          }
        }, _0xb02eab, this, [[0, 8]]);
      })), function () {
        return _0x3f21ff.apply(this, arguments);
      })
    }, {
      key: "checkin",
      value: (_0x3478c4 = m(L().mark(function _0x4ec33a() {
        var _0x3ec070,
          _0x267042 = this;
        return L().wrap(function (_0x2185e3) {
          for (;;) {
            switch (_0x2185e3.prev = _0x2185e3.next) {
              case 0:
                _0x2185e3.prev = 0;
                _0x3ec070 = JSON.stringify({});
                return _0x2185e3.abrupt("return", this.taskApi("checkin", "post", "https://api.jiudingliliang.com/task/checkin", _0x3ec070, {
                  Accept: "*/*"
                }).then(function () {
                  var _0x31a105 = m(L().mark(function _0x2fa20f(_0x58d852) {
                    return L().wrap(function (_0x106711) {
                      for (;;) {
                        switch (_0x106711.prev = _0x106711.next) {
                          case 0:
                            if (10000 == (null == _0x58d852 ? void 0 : _0x58d852.code)) {
                              x.logAndNotify("账号[".concat(_0x267042.index, "] 签到成功"));
                              return _0x106711.abrupt("return", !0);
                            }
                            _0x106711.next = 5;
                            break;
                          case 5:
                            x.logAndNotify("账号[".concat(_0x267042.index, "] - 签到失败：").concat((null == _0x58d852 ? void 0 : _0x58d852.msg) || JSON.stringify(_0x58d852)));
                            return _0x106711.abrupt("return", !1);
                          case 7:
                          case "end":
                            return _0x106711.stop();
                        }
                      }
                    }, _0x2fa20f);
                  }));
                  return function (_0x3b38ef) {
                    return _0x31a105.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x2185e3.prev = 8;
                _0x2185e3.t0 = _0x2185e3.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 签到失败：") + (null === _0x2185e3.t0 || void 0 === _0x2185e3.t0 ? void 0 : _0x2185e3.t0.message));
              case 11:
              case "end":
                return _0x2185e3.stop();
            }
          }
        }, _0x4ec33a, this, [[0, 8]]);
      })), function () {
        return _0x3478c4.apply(this, arguments);
      })
    }, {
      key: "getPostInfo",
      value: (_0x192cfe = m(L().mark(function _0x5a92b7() {
        var _0x3b0dd2,
          _0x4e2922 = this;
        return L().wrap(function (_0x46f1a2) {
          for (;;) {
            switch (_0x46f1a2.prev = _0x46f1a2.next) {
              case 0:
                _0x46f1a2.prev = 0;
                _0x3b0dd2 = JSON.stringify({
                  bn: this.bn,
                  k: this.k
                });
                return _0x46f1a2.abrupt("return", this.taskApi("getPostInfo", "post", "https://api.jiudingliliang.com/task/read-article", _0x3b0dd2, (h(h(h(h(h(h(h(h(h(h(_0x3b0dd2 = {
                  Host: this.readHost,
                  Accept: "*/*"
                }, "Host", "api.jiudingliliang.com"), "Connection", "keep-alive"), "User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090b19) XWEB/9129 Flue"), "Content-Type", "application/json;charset=UTF-8"), "Accept", "*/*"), "Origin", "http://d9skfg1gis.ekmwpp.cn"), "Sec-Fetch-Site", "cross-site"), "Sec-Fetch-Mode", "cors"), "Sec-Fetch-Dest", "empty"), "Referer", "http://d9skfg1gis.ekmwpp.cn/"), h(h(_0x3b0dd2, "Accept-Encoding", "gzip, deflate, br"), "Accept-Language", "zh-CN,zh;q=0.9"))).then(function () {
                  var _0x5d9a46 = m(L().mark(function _0x1c0fc2(_0x1e2f65) {
                    var _0x844eee, _0xc711b0, _0x2bdce9, _0x314e57, _0x23b0d9;
                    return L().wrap(function (_0x3790f3) {
                      for (;;) {
                        switch (_0x3790f3.prev = _0x3790f3.next) {
                          case 0:
                            if ("success" != (null == _0x1e2f65 ? void 0 : _0x1e2f65.msg)) {
                              _0x3790f3.next = 34;
                            } else {
                              if (x.logAndNotify("账号[".concat(_0x4e2922.index, "] 获取本轮第[").concat((null == _0x1e2f65 || null == (_0x844eee = _0x1e2f65.result) ? void 0 : _0x844eee.readingNumber) || 1, "]篇待阅读文章成功 ，本轮总文章数 ").concat((null == _0x1e2f65 || null == (_0x844eee = _0x1e2f65.result) ? void 0 : _0x844eee.totalReading) || "-")), _0x2bdce9 = null == _0x1e2f65 || null == (_0x2bdce9 = _0x1e2f65.result) || null == (_0x2bdce9 = _0x2bdce9.articleUrl) ? void 0 : _0x2bdce9.includes("__biz="), _0x4e2922.k = null == _0x1e2f65 || null == (_0xc711b0 = _0x1e2f65.result) ? void 0 : _0xc711b0.k, _0x4e2922.bn = null == _0x1e2f65 || null == (_0xc711b0 = _0x1e2f65.result) ? void 0 : _0xc711b0.batchNumber, _0x2bdce9) {
                                _0x3790f3.next = 8;
                                return x.wait(200);
                              }
                              _0x3790f3.next = 13;
                            }
                            break;
                          case 8:
                            x.logAndNotify("账号[".concat(_0x4e2922.index, "] 模拟阅读 ").concat(A / 2, "秒……"));
                            _0x3790f3.next = 11;
                            return x.wait(2000 * Math.random() + 500 * A);
                          case 11:
                            _0x3790f3.next = 19;
                            break;
                          case 13:
                            _0x3790f3.next = 15;
                            return _0x4e2922.wxpusherSend(null == _0x1e2f65 || null == (_0x314e57 = _0x1e2f65.result) ? void 0 : _0x314e57.articleUrl);
                          case 15:
                            if (_0x3790f3.sent) {
                              _0x3790f3.next = 17;
                              break;
                            }
                            return _0x3790f3.abrupt("return", !1);
                          case 17:
                            _0x3790f3.next = 19;
                            return x.wait(2000 * Math.random() + 1000 * A);
                          case 19:
                            _0x3790f3.prev = 19;
                            _0x3790f3.next = 22;
                            return _0x4e2922.readCompleted();
                          case 22:
                            _0x23b0d9 = _0x3790f3.sent;
                            _0x3790f3.next = 25;
                            return x.wait(1000 * Math.random());
                          case 25:
                            return _0x3790f3.abrupt("return", _0x23b0d9);
                          case 28:
                            _0x3790f3.prev = 28;
                            _0x3790f3.t0 = _0x3790f3.catch(19);
                            console.log("账号[".concat(_0x4e2922.index, "] 完成阅读失败："), _0x3790f3.t0);
                            return _0x3790f3.abrupt("return", null);
                          case 32:
                            _0x3790f3.next = 40;
                            break;
                          case 34:
                            if (3 == (null == _0x1e2f65 ? void 0 : _0x1e2f65.code)) {
                              x.logAndNotify("账号[".concat(_0x4e2922.index, "] 已阅读完毕该轮，开始结算……"));
                              return _0x3790f3.abrupt("return", !1);
                            }
                            _0x3790f3.next = 39;
                            break;
                          case 39:
                            x.logAndNotify("账号[".concat(_0x4e2922.index, "] - 获取文章信息失败：").concat((null == _0x1e2f65 ? void 0 : _0x1e2f65.msg) || JSON.stringify(_0x1e2f65)));
                          case 40:
                          case "end":
                            return _0x3790f3.stop();
                        }
                      }
                    }, _0x1c0fc2, null, [[19, 28]]);
                  }));
                  return function (_0x59c4fa) {
                    return _0x5d9a46.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x46f1a2.prev = 8;
                _0x46f1a2.t0 = _0x46f1a2.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] 获取文章信息失败：") + (null === _0x46f1a2.t0 || void 0 === _0x46f1a2.t0 ? void 0 : _0x46f1a2.t0.message));
              case 11:
              case "end":
                return _0x46f1a2.stop();
            }
          }
        }, _0x5a92b7, this, [[0, 8]]);
      })), function () {
        return _0x192cfe.apply(this, arguments);
      })
    }, {
      key: "wxpusherSend",
      value: (_0xd28f60 = m(L().mark(function _0x2689bf(_0x2052e4) {
        var _0x402ff7,
          _0x2281e8 = this;
        return L().wrap(function (_0x5ef074) {
          for (;;) {
            switch (_0x5ef074.prev = _0x5ef074.next) {
              case 0:
                _0x5ef074.prev = 0;
                _0x402ff7 = JSON.stringify(h(h(h({
                  appToken: this.wxpusherAppToken,
                  summary: "叮叮联盟阅读阅读",
                  contentType: 2,
                  topicIds: [this.wxpusherTopicId || "11686"]
                }, "contentType", 2), "url", _0x2052e4), "content", "<body onload=\"window.location.href='".concat(_0x2052e4, "'\">出现检测文章！！！\n<a style='padding:10px;color:red;font-size:20px;' href='").concat(_0x2052e4, "'>正在自动跳转中，如果没反应，请点击我打开待检测文章</a>\n请尽快点击链接完成阅读</body>")));
                return _0x5ef074.abrupt("return", this.taskApi("wxpusherSend", "post", "http://wxpusher.zjiecode.com/api/send/message", _0x402ff7, {
                  Host: "wxpusher.zjiecode.com",
                  "Content-Type": "application/json",
                  Accept: "*/*",
                  Referer: "http://wxpusher.zjiecode.com/"
                }).then(function () {
                  var _0x56f36b = m(L().mark(function _0x5d8d74(_0x4862a5) {
                    return L().wrap(function (_0x2334df) {
                      for (;;) {
                        switch (_0x2334df.prev = _0x2334df.next) {
                          case 0:
                            if (1000 === (null == _0x4862a5 ? void 0 : _0x4862a5.code)) {
                              x.logAndNotify("账号[".concat(_0x2281e8.index, "] 推送检测文章成功，请在 ").concat(A, " 秒内点击"));
                              return _0x2334df.abrupt("return", !0);
                            }
                            _0x2334df.next = 5;
                            break;
                          case 5:
                            x.logAndNotify("账号[".concat(_0x2281e8.index, "] 推送检测文章失败：").concat((null == _0x4862a5 ? void 0 : _0x4862a5.msg) || JSON.stringify(_0x4862a5)));
                          case 6:
                          case "end":
                            return _0x2334df.stop();
                        }
                      }
                    }, _0x5d8d74);
                  }));
                  return function (_0x72b2a7) {
                    return _0x56f36b.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x5ef074.prev = 8;
                _0x5ef074.t0 = _0x5ef074.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] 推送检测文章失败：") + (null === _0x5ef074.t0 || void 0 === _0x5ef074.t0 ? void 0 : _0x5ef074.t0.message));
              case 11:
              case "end":
                return _0x5ef074.stop();
            }
          }
        }, _0x2689bf, this, [[0, 8]]);
      })), function (_0xe34b36) {
        return _0xd28f60.apply(this, arguments);
      })
    }, {
      key: "readCompleted",
      value: (_0x7101c0 = m(L().mark(function _0x49a2da() {
        var _0x5364c1,
          _0x42afe8 = this;
        return L().wrap(function (_0x1e6c6e) {
          for (;;) {
            switch (_0x1e6c6e.prev = _0x1e6c6e.next) {
              case 0:
                _0x1e6c6e.prev = 0;
                _0x5364c1 = JSON.stringify({
                  bn: this.bn,
                  k: this.k
                });
                return _0x1e6c6e.abrupt("return", this.taskApi("readRecord", "post", "https://api.jiudingliliang.com/task/read-article-completed", _0x5364c1, (h(h(h(h(h(h(h(h(h(h(_0x5364c1 = {
                  Host: this.readHost,
                  Accept: "*/*"
                }, "Host", "api.jiudingliliang.com"), "Connection", "keep-alive"), "User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090b19) XWEB/9129 Flue"), "Content-Type", "application/json;charset=UTF-8"), "Accept", "*/*"), "Origin", "http://d9skfg1gis.ekmwpp.cn"), "Sec-Fetch-Site", "cross-site"), "Sec-Fetch-Mode", "cors"), "Sec-Fetch-Dest", "empty"), "Referer", "http://d9skfg1gis.ekmwpp.cn/"), h(h(_0x5364c1, "Accept-Encoding", "gzip, deflate, br"), "Accept-Language", "zh-CN,zh;q=0.9"))).then(function () {
                  var _0xb6e8db = m(L().mark(function _0x274226(_0xaaeca9) {
                    var _0x399111, _0x43c85f, _0x397a76, _0x29611a;
                    return L().wrap(function (_0x1c46af) {
                      for (;;) {
                        switch (_0x1c46af.prev = _0x1c46af.next) {
                          case 0:
                            if ("success" != (null == _0xaaeca9 ? void 0 : _0xaaeca9.msg)) {
                              _0x1c46af.next = 9;
                            } else {
                              if (_0x42afe8.k = null == _0xaaeca9 || null == (_0x399111 = _0xaaeca9.result) ? void 0 : _0x399111.k, x.logAndNotify("账号[".concat(_0x42afe8.index, "] 阅读文章成功，当前阅读进度：[").concat((null == _0xaaeca9 || null == (_0x399111 = _0xaaeca9.result) ? void 0 : _0x399111.readingNumber) || 1, "]/[").concat((null == _0xaaeca9 || null == (_0x43c85f = _0xaaeca9.result) ? void 0 : _0x43c85f.totalReading) || "-", "]")), null != _0xaaeca9 && null != (_0x43c85f = _0xaaeca9.result) && _0x43c85f.isFinished) {
                                x.logAndNotify("账号[".concat(_0x42afe8.index, "] 已阅读完毕该轮，开始结算……"));
                                return _0x1c46af.abrupt("return", !1);
                              }
                              _0x1c46af.next = 6;
                            }
                            break;
                          case 6:
                            return _0x1c46af.abrupt("return", !0);
                          case 9:
                            if (_0x29611a = (null == _0xaaeca9 ? void 0 : _0xaaeca9.msg) || JSON.stringify(_0xaaeca9), x.logAndNotify("账号[".concat(_0x42afe8.index, "] - 阅读第").concat((null == _0xaaeca9 || null == (_0x397a76 = _0xaaeca9.result) ? void 0 : _0x397a76.readingNumber) || "-", "篇文章失败：").concat(_0x29611a)), null != _0x29611a && _0x29611a.includes("请求太快，请稍后")) {
                              _0x1c46af.next = 14;
                              return x.wait(2000 * Math.random() + 6000);
                            }
                            _0x1c46af.next = 17;
                            break;
                          case 14:
                            _0x1c46af.next = 16;
                            return _0x42afe8.readCompleted();
                          case 16:
                            return _0x1c46af.abrupt("return", _0x1c46af.sent);
                          case 17:
                          case "end":
                            return _0x1c46af.stop();
                        }
                      }
                    }, _0x274226);
                  }));
                  return function (_0x43e359) {
                    return _0xb6e8db.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x1e6c6e.prev = 8;
                _0x1e6c6e.t0 = _0x1e6c6e.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] 阅读文章失败：") + (null === _0x1e6c6e.t0 || void 0 === _0x1e6c6e.t0 ? void 0 : _0x1e6c6e.t0.msg));
              case 11:
              case "end":
                return _0x1e6c6e.stop();
            }
          }
        }, _0x49a2da, this, [[0, 8]]);
      })), function () {
        return _0x7101c0.apply(this, arguments);
      })
    }, {
      key: "withdrawList",
      value: (_0x4bffbd = m(L().mark(function _0x26479c() {
        var _0xaf9c5a,
          _0x18e444 = this;
        return L().wrap(function (_0x44b8bb) {
          for (;;) {
            switch (_0x44b8bb.prev = _0x44b8bb.next) {
              case 0:
                _0x44b8bb.prev = 0;
                _0xaf9c5a = JSON.stringify({});
                return _0x44b8bb.abrupt("return", this.taskApi("withdrawList", "post", "https://api.jiudingliliang.com/user/withdraw", _0xaf9c5a, {
                  Accept: "*/*"
                }).then(function () {
                  var _0x18afaa = m(L().mark(function _0x414add(_0x37633a) {
                    var _0x355853, _0x556744, _0x45a8a9;
                    return L().wrap(function (_0xe42785) {
                      for (;;) {
                        switch (_0xe42785.prev = _0xe42785.next) {
                          case 0:
                            if (10000 != (null == _0x37633a ? void 0 : _0x37633a.code)) {
                              _0xe42785.next = 12;
                            } else {
                              if (x.logAndNotify("账号[".concat(_0x18e444.index, "] 当前余额 ").concat((null == _0x37633a || null == (_0x355853 = _0x37633a.result) ? void 0 : _0x355853.amount) || 0, "元 距离下一个提现[").concat((null == _0x37633a || null == (_0x355853 = _0x37633a.result) || null == (_0x355853 = _0x355853.transfer) || null == (_0x355853 = _0x355853[0]) ? void 0 : _0x355853.m) || 0, "元]还差 ").concat((null == _0x37633a || null == (_0x556744 = _0x37633a.result) ? void 0 : _0x556744.need) || 0, "元")), Number((null == _0x37633a || null == (_0x556744 = _0x37633a.result) ? void 0 : _0x556744.amount) || 0) >= Number((null == _0x37633a || null == (_0x45a8a9 = _0x37633a.result) || null == (_0x45a8a9 = _0x45a8a9.transfer) || null == (_0x45a8a9 = _0x45a8a9[0]) ? void 0 : _0x45a8a9.m) || 0)) {
                                x.logAndNotify("账号[".concat(_0x18e444.index, "] - 提现准备中……"));
                                _0xe42785.next = 6;
                                return _0x18e444.transferRecord();
                              }
                              _0xe42785.next = 9;
                            }
                            break;
                          case 6:
                            _0xe42785.next = 8;
                            return _0x18e444.transfer(Number(null == _0x37633a || null == (_0x45a8a9 = _0x37633a.result) || null == (_0x45a8a9 = _0x45a8a9.transfer) || null == (_0x45a8a9 = _0x45a8a9[0]) ? void 0 : _0x45a8a9.m));
                          case 8:
                          case 9:
                            return _0xe42785.abrupt("return", !0);
                          case 12:
                            x.logAndNotify("账号[".concat(_0x18e444.index, "] - 获取提现选项失败：").concat((null == _0x37633a ? void 0 : _0x37633a.msg) || JSON.stringify(_0x37633a)));
                            return _0xe42785.abrupt("return", !1);
                          case 14:
                          case "end":
                            return _0xe42785.stop();
                        }
                      }
                    }, _0x414add);
                  }));
                  return function (_0x2a99ec) {
                    return _0x18afaa.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x44b8bb.prev = 8;
                _0x44b8bb.t0 = _0x44b8bb.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 获取提现选项失败：") + (null === _0x44b8bb.t0 || void 0 === _0x44b8bb.t0 ? void 0 : _0x44b8bb.t0.message));
              case 11:
              case "end":
                return _0x44b8bb.stop();
            }
          }
        }, _0x26479c, this, [[0, 8]]);
      })), function () {
        return _0x4bffbd.apply(this, arguments);
      })
    }, {
      key: "transferRecord",
      value: (_0x23a47f = m(L().mark(function _0x2a0043() {
        var _0x5e342a,
          _0x4d15ec = this;
        return L().wrap(function (_0x43a5ba) {
          for (;;) {
            switch (_0x43a5ba.prev = _0x43a5ba.next) {
              case 0:
                _0x43a5ba.prev = 0;
                _0x5e342a = JSON.stringify({
                  rid: 0
                });
                return _0x43a5ba.abrupt("return", this.taskApi("transferRecord", "post", "https://api.jiudingliliang.com/user/transfer-record", _0x5e342a, {
                  Accept: "*/*"
                }).then(function () {
                  var _0x1f610a = m(L().mark(function _0x2fe1bb(_0x34c7e5) {
                    return L().wrap(function (_0x404cf5) {
                      for (;;) {
                        switch (_0x404cf5.prev = _0x404cf5.next) {
                          case 0:
                            if (10000 == (null == _0x34c7e5 ? void 0 : _0x34c7e5.code)) {
                              x.logAndNotify("账号[".concat(_0x4d15ec.index, "] 提现准备成功"));
                              return _0x404cf5.abrupt("return", !0);
                            }
                            _0x404cf5.next = 5;
                            break;
                          case 5:
                            x.logAndNotify("账号[".concat(_0x4d15ec.index, "] - 提现准备失败：").concat((null == _0x34c7e5 ? void 0 : _0x34c7e5.msg) || JSON.stringify(_0x34c7e5)));
                            return _0x404cf5.abrupt("return", !1);
                          case 7:
                          case "end":
                            return _0x404cf5.stop();
                        }
                      }
                    }, _0x2fe1bb);
                  }));
                  return function (_0x56be64) {
                    return _0x1f610a.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x43a5ba.prev = 8;
                _0x43a5ba.t0 = _0x43a5ba.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 提现准备失败：") + (null === _0x43a5ba.t0 || void 0 === _0x43a5ba.t0 ? void 0 : _0x43a5ba.t0.message));
              case 11:
              case "end":
                return _0x43a5ba.stop();
            }
          }
        }, _0x2a0043, this, [[0, 8]]);
      })), function () {
        return _0x23a47f.apply(this, arguments);
      })
    }, {
      key: "transfer",
      value: (_0xdf1953 = m(L().mark(function _0xe14641(_0x53e9f8) {
        var _0x4922a0,
          _0x12d914 = this;
        return L().wrap(function (_0x44ce0a) {
          for (;;) {
            switch (_0x44ce0a.prev = _0x44ce0a.next) {
              case 0:
                _0x44ce0a.prev = 0;
                _0x4922a0 = JSON.stringify({
                  amount: _0x53e9f8
                });
                return _0x44ce0a.abrupt("return", this.taskApi("transfer", "post", "https://api.jiudingliliang.com/user/transfer", _0x4922a0, {
                  Accept: "*/*"
                }).then(function () {
                  var _0x7f396c = m(L().mark(function _0x59e68c(_0x22328d) {
                    var _0x1a4415;
                    return L().wrap(function (_0x56b512) {
                      for (;;) {
                        switch (_0x56b512.prev = _0x56b512.next) {
                          case 0:
                            if (10000 == (null == _0x22328d ? void 0 : _0x22328d.code)) {
                              x.logAndNotify("账号[".concat(_0x12d914.index, "] ").concat((null == _0x22328d || null == (_0x1a4415 = _0x22328d.result) ? void 0 : _0x1a4415.title) || "提现成功"));
                              return _0x56b512.abrupt("return", !0);
                            }
                            _0x56b512.next = 5;
                            break;
                          case 5:
                            x.logAndNotify("账号[".concat(_0x12d914.index, "] - 提现失败：").concat((null == _0x22328d ? void 0 : _0x22328d.msg) || JSON.stringify(_0x22328d)));
                            return _0x56b512.abrupt("return", !1);
                          case 7:
                          case "end":
                            return _0x56b512.stop();
                        }
                      }
                    }, _0x59e68c);
                  }));
                  return function (_0x3d1e12) {
                    return _0x7f396c.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x44ce0a.prev = 8;
                _0x44ce0a.t0 = _0x44ce0a.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 提现失败：") + (null === _0x44ce0a.t0 || void 0 === _0x44ce0a.t0 ? void 0 : _0x44ce0a.t0.message));
              case 11:
              case "end":
                return _0x44ce0a.stop();
            }
          }
        }, _0xe14641, this, [[0, 8]]);
      })), function (_0x5682b9) {
        return _0xdf1953.apply(this, arguments);
      })
    }, {
      key: "doTask",
      value: (_0x4ff79e = m(L().mark(function _0x4112dc() {
        var _0xafd598, _0x3d502c, _0xc50cc8;
        return L().wrap(function (_0x1d273a) {
          for (;;) {
            switch (_0x1d273a.prev = _0x1d273a.next) {
              case 0:
                _0x1d273a.prev = 0;
                _0x1d273a.next = 3;
                return this.getReadQr();
              case 3:
                if (_0xafd598 = _0x1d273a.sent) {
                  _0x1d273a.next = 7;
                  return C(_0xafd598);
                }
                _0x1d273a.next = 21;
                break;
              case 7:
                if (_0xc50cc8 = _0x1d273a.sent, this.bn = null == (_0xafd598 = new URL(_0xc50cc8)) || null == (_0xafd598 = _0xafd598.searchParams) ? void 0 : _0xafd598.get("bn"), this.k = null == (_0x3d502c = new URL(_0xc50cc8)) || null == (_0x3d502c = _0x3d502c.searchParams) ? void 0 : _0x3d502c.get("k"), !this.bn || !this.k) {
                  _0x1d273a.next = 20;
                  break;
                }
              case 11:
                _0x1d273a.next = 13;
                return this.getPostInfo();
              case 13:
                if (_0x1d273a.sent) {
                  _0x1d273a.next = 16;
                  return x.wait(2000 * Math.random());
                }
                _0x1d273a.next = 18;
                break;
              case 16:
                _0x1d273a.next = 11;
                break;
              case 18:
                _0x1d273a.next = 21;
                break;
              case 20:
                x.logAndNotify("账号[".concat(this.index, "] 跳转获取文章页面失败：").concat(_0xc50cc8));
              case 21:
                _0x1d273a.next = 23;
                return x.wait(2000 * Math.random() + 200);
              case 23:
                _0x1d273a.next = 25;
                return this.checkin();
              case 25:
                _0x1d273a.next = 27;
                return x.wait(2000 * Math.random() + 200);
              case 27:
                _0x1d273a.next = 29;
                return this.withdrawList();
              case 29:
                _0x1d273a.next = 34;
                break;
              case 31:
                _0x1d273a.prev = 31;
                _0x1d273a.t0 = _0x1d273a.catch(0);
                x.logAndNotify("\n账号[".concat(this.index, "] 执行任务失败：") + (null === _0x1d273a.t0 || void 0 === _0x1d273a.t0 ? void 0 : _0x1d273a.t0.message));
              case 34:
              case "end":
                return _0x1d273a.stop();
            }
          }
        }, _0x4112dc, this, [[0, 31]]);
      })), function () {
        return _0x4ff79e.apply(this, arguments);
      })
    }]);
    var _0x4ff79e, _0xdf1953, _0x23a47f, _0x4bffbd, _0x7101c0, _0xd28f60, _0x192cfe, _0x3478c4, _0x3f21ff, _0x6fa9d0, _0xcd5806;
  }();
function tt() {
  x.isNode() && (process.on("uncaughtException", function (_0x416bc1) {
    var _0x23835e;
    "MODULE_NOT_FOUND" === _0x416bc1.code ? (_0x23835e = _0x416bc1.message.split("'")[1]).startsWith("./") ? console.log("缺少依赖文件，请前往代码库寻找 ".concat(_0x23835e, " 代码文件，放在本脚本同一目录下 \n 什么？不会？v我50我教你！")) : console.log("缺少依赖，请安装 ".concat(_0x23835e, " 库： ").concat(_0x23835e, " \n 什么？不会？v我50我教你！")) : console.log("发生错误：" + _0x416bc1.message);
  }), process.on("unhandledRejection", function (_0x32cc0b) {
    var _0xa1f8fb,
      _0x5c3112 = _0x32cc0b.stack.split("\n");
    1 < _0x5c3112.length ? (_0x5c3112 = _0x5c3112[1].match(/\((.*):(\d+):(\d+)\)/)) && (_0xa1f8fb = _0x5c3112[1], _0x5c3112 = _0x5c3112[2], console.log("程序执行出现异常，错误信息：" + _0x32cc0b.message + "，错误发生在 ".concat(_0xa1f8fb, " 的第 ").concat(_0x5c3112, " 行 \n 请在本仓库建立 issue 并附上日志或者截图即可？什么，很着急？v我50疯狂星期四！"))) : console.log("发生错误：" + _0x32cc0b.message);
  }));
}
function et() {
  return M.apply(this, arguments);
}
function M() {
  return (M = m(L().mark(function _0x56032f() {
    var _0x14e87f, _0x462b31;
    return L().wrap(function (_0x1b7f7f) {
      for (;;) {
        switch (_0x1b7f7f.prev = _0x1b7f7f.next) {
          case 0:
            _0x1b7f7f.next = 2;
            return b.get("https://api.jiudingliliang.com/domain/temp", {
              params: {
                mid: 1770365
              },
              headers: {
                Connection: "keep-alive",
                "Content-Type": "application/json;charset=utf-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36",
                Accept: "*/*",
                Origin: "http://xuw6q.lmqk.cn",
                Referer: "http://xuw6q.lmqk.cn/index.html?mid=1770365"
              }
            });
          case 2:
            if (null != (_0x14e87f = _0x1b7f7f.sent) && null != (_0x462b31 = _0x14e87f.data) && null != (_0x462b31 = _0x462b31.result) && _0x462b31.host) {
              _0x462b31 = C(null == _0x14e87f || null == (_0x462b31 = _0x14e87f.data) || null == (_0x462b31 = _0x462b31.result) ? void 0 : _0x462b31.host);
              return _0x1b7f7f.abrupt("return", _0x462b31);
            }
            _0x1b7f7f.next = 8;
            break;
          case 8:
            console.log("获取项目最新入口地址失败~".concat((null == _0x14e87f || null == (_0x462b31 = _0x14e87f.data) ? void 0 : _0x462b31.msg) || ""));
          case 9:
          case "end":
            return _0x1b7f7f.stop();
        }
      }
    }, _0x56032f);
  }))).apply(this, arguments);
}
function nt(_0x2ea09e) {
  return R.apply(this, arguments);
}
function R() {
  return (R = m(L().mark(function _0x1e528b(_0x203744) {
    var _0x4f0aff;
    return L().wrap(function (_0x5d4dfc) {
      for (;;) {
        switch (_0x5d4dfc.prev = _0x5d4dfc.next) {
          case 0:
            _0x5d4dfc.prev = 0;
            _0x5d4dfc.next = 3;
            return D.toString(_0x203744, {
              errorCorrectionLevel: "H",
              type: "terminal",
              small: !0
            });
          case 3:
            _0x4f0aff = _0x5d4dfc.sent;
            return _0x5d4dfc.abrupt("return", _0x4f0aff);
          case 7:
            _0x5d4dfc.prev = 7;
            _0x5d4dfc.t0 = _0x5d4dfc.catch(0);
            return _0x5d4dfc.abrupt("return", "");
          case 10:
          case "end":
            return _0x5d4dfc.stop();
        }
      }
    }, _0x1e528b, null, [[0, 7]]);
  }))).apply(this, arguments);
}
function rt() {
  return I.apply(this, arguments);
}
function I() {
  return (I = m(L().mark(function _0x6fd59e() {
    var _0x391a53, _0x410c8d, _0x38feb1;
    return L().wrap(function (_0x32f77c) {
      for (;;) {
        switch (_0x32f77c.prev = _0x32f77c.next) {
          case 0:
            _0x391a53 = G.basename(__filename);
            console.log("======== ▷ 开始启动脚本 ◁ ========\n当前脚本：".concat(_0x391a53, " 🤪"));
            _0x32f77c.next = 4;
            return X();
          case 4:
            _0x32f77c.next = 6;
            return Q("".concat(_0x391a53));
          case 6:
            _0x32f77c.next = 8;
            return et();
          case 8:
            _0x410c8d = (_0x410c8d = _0x32f77c.sent) || "http://18xtnta.weddlmm.online?mid=1770365";
            _0x32f77c.next = 12;
            return nt(_0x410c8d);
          case 12:
            _0x38feb1 = _0x32f77c.sent;
            _0x38feb1 = _0x38feb1 ? "".concat(_0x410c8d, "\n使用手机扫码：\n").concat(_0x38feb1) : "".concat(_0x410c8d);
            x.logAndNotify("\n活动入口[打不开，可用浏览器打开]：".concat(_0x38feb1, "\n\n=============================================================\n"));
            x.wait(100);
          case 16:
          case "end":
            return _0x32f77c.stop();
        }
      }
    }, _0x6fd59e);
  }))).apply(this, arguments);
}
function ot() {
  return P.apply(this, arguments);
}
function P() {
  return (P = m(L().mark(function _0x2cb914() {
    var _0x52dc9e, _0x373c91, _0x174a08, _0x17ac36, _0x308c15, _0x5a4b53;
    return L().wrap(function (_0x4a8f4d) {
      for (;;) {
        switch (_0x4a8f4d.prev = _0x4a8f4d.next) {
          case 0:
            if (!N) {
              _0x4a8f4d.next = 25;
              break;
            }
            _0x52dc9e = k[0];
            _0x373c91 = u(k);
            _0x4a8f4d.prev = 3;
            _0x373c91.s();
          case 5:
            if ((_0x174a08 = _0x373c91.n()).done) {
              _0x4a8f4d.next = 12;
            } else {
              if (_0x174a08 = _0x174a08.value, -1 < N.indexOf(_0x174a08)) {
                _0x52dc9e = _0x174a08;
                return _0x4a8f4d.abrupt("break", 12);
              }
              _0x4a8f4d.next = 10;
            }
            break;
          case 10:
            _0x4a8f4d.next = 5;
            break;
          case 12:
            _0x4a8f4d.next = 17;
            break;
          case 14:
            _0x4a8f4d.prev = 14;
            _0x4a8f4d.t0 = _0x4a8f4d.catch(3);
            _0x373c91.e(_0x4a8f4d.t0);
          case 17:
            _0x4a8f4d.prev = 17;
            _0x373c91.f();
            return _0x4a8f4d.finish(17);
          case 20:
            _0x17ac36 = u(N.split(_0x52dc9e));
            try {
              for (_0x17ac36.s(); !(_0x308c15 = _0x17ac36.n()).done;) {
                (_0x5a4b53 = _0x308c15.value) && S.push(new Z(_0x5a4b53));
              }
            } catch (_0x4433fb) {
              _0x17ac36.e(_0x4433fb);
            } finally {
              _0x17ac36.f();
            }
            userCount = S.length;
            _0x4a8f4d.next = 27;
            break;
          case 25:
            console.log("未找到 配置信息，请检查是否配置 变量：", w);
            return _0x4a8f4d.abrupt("return");
          case 27:
            console.log("共找到".concat(userCount, "个账号"));
            return _0x4a8f4d.abrupt("return", !0);
          case 29:
          case "end":
            return _0x4a8f4d.stop();
        }
      }
    }, _0x2cb914, null, [[3, 14, 17, 20]]);
  }))).apply(this, arguments);
}
function it(_0x4874bc, _0x5671fa) {
  return F.apply(this, arguments);
}
function F() {
  return (F = m(L().mark(function _0x336b40(_0x44eaa0, _0x212fbc) {
    return L().wrap(function (_0x313c77) {
      for (;;) {
        switch (_0x313c77.prev = _0x313c77.next) {
          case 0:
            httpErr = null;
            httpReq = null;
            httpResp = null;
            return _0x313c77.abrupt("return", new Promise(function (_0xdf3835) {
              x.send(_0x44eaa0, _0x212fbc, function () {
                var _0x282312 = m(L().mark(function _0x3a28db(_0x5cb4dd, _0x2a2fac, _0x4c9805) {
                  return L().wrap(function (_0x2359e7) {
                    for (;;) {
                      switch (_0x2359e7.prev = _0x2359e7.next) {
                        case 0:
                          httpErr = _0x5cb4dd;
                          httpReq = _0x2a2fac;
                          httpResp = _0x4c9805;
                          _0xdf3835({
                            err: _0x5cb4dd,
                            req: _0x2a2fac,
                            resp: _0x4c9805
                          });
                        case 2:
                        case "end":
                          return _0x2359e7.stop();
                      }
                    }
                  }, _0x3a28db);
                }));
                return function (_0x401025, _0x59b6d4, _0x12cb3a) {
                  return _0x282312.apply(this, arguments);
                };
              }());
            }));
          case 2:
          case "end":
            return _0x313c77.stop();
        }
      }
    }, _0x336b40);
  }))).apply(this, arguments);
}
function at(_0xa9fea2, _0x382e05) {
  "undefined" != typeof process && -1 < JSON.stringify(process.env).indexOf("GITHUB") && process.exit(0);
  return new (function () {
    return v(function _0x132fda(_0x28fedc, _0x59cacf) {
      f(this, _0x132fda);
      this.name = _0x28fedc;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x59cacf);
      console.log("".concat(this.name, " 开始运行：\n"));
    }, [{
      key: "isNode",
      value: function () {
        return "undefined" != typeof module && !!module.exports;
      }
    }, {
      key: "isQuanX",
      value: function () {
        return "undefined" != typeof $task;
      }
    }, {
      key: "isSurge",
      value: function () {
        return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
      }
    }, {
      key: "isLoon",
      value: function () {
        return "undefined" != typeof $loon;
      }
    }, {
      key: "getdata",
      value: function (_0x118f2d) {
        var _0x5d93e7 = this.getval(_0x118f2d);
        if (/^@/.test(_0x118f2d)) {
          var _0x40289f = s(/^@(.*?)\.(.*?)$/.exec(_0x118f2d), 3),
            _0x35ad81 = _0x40289f[1],
            _0x40289f = _0x40289f[2],
            _0x35ad81 = _0x35ad81 ? this.getval(_0x35ad81) : "";
          if (_0x35ad81) {
            try {
              var _0x2819c7 = JSON.parse(_0x35ad81),
                _0x5d93e7 = _0x2819c7 ? this.lodash_get(_0x2819c7, _0x40289f, "") : _0x5d93e7;
            } catch (_0x31ec72) {
              _0x5d93e7 = "";
            }
          }
        }
        return _0x5d93e7;
      }
    }, {
      key: "setdata",
      value: function (_0xc4e5fe, _0x119fe7) {
        var _0x151505 = !1;
        if (/^@/.test(_0x119fe7)) {
          var _0x56961a = s(/^@(.*?)\.(.*?)$/.exec(_0x119fe7), 3),
            _0x3b837a = _0x56961a[1],
            _0x56961a = _0x56961a[2],
            _0x507c6a = this.getval(_0x3b837a),
            _0x507c6a = _0x3b837a ? "null" === _0x507c6a ? null : _0x507c6a || "{}" : "{}";
          try {
            var _0x551905 = JSON.parse(_0x507c6a);
            this.lodash_set(_0x551905, _0x56961a, _0xc4e5fe);
            _0x151505 = this.setval(JSON.stringify(_0x551905), _0x3b837a);
          } catch (_0xfbe09f) {
            _0x507c6a = {};
            this.lodash_set(_0x507c6a, _0x56961a, _0xc4e5fe);
            _0x151505 = this.setval(JSON.stringify(_0x507c6a), _0x3b837a);
          }
        } else {
          _0x151505 = this.setval(_0xc4e5fe, _0x119fe7);
        }
        return _0x151505;
      }
    }, {
      key: "getval",
      value: function (_0x30dfa2) {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x30dfa2) : this.isQuanX() ? $prefs.valueForKey(_0x30dfa2) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x30dfa2]) : this.data && this.data[_0x30dfa2] || null;
      }
    }, {
      key: "setval",
      value: function (_0x16fe5e, _0x50b718) {
        return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x16fe5e, _0x50b718) : this.isQuanX() ? $prefs.setValueForKey(_0x16fe5e, _0x50b718) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x50b718] = _0x16fe5e, this.writedata(), !0) : this.data && this.data[_0x50b718] || null;
      }
    }, {
      key: "send",
      value: function (_0x2730a2, _0x24d5e9) {
        var _0x3a9844,
          _0x2a274e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function () {};
        "get" != _0x2730a2 && "post" != _0x2730a2 && "put" != _0x2730a2 && "delete" != _0x2730a2 ? console.log("无效的http方法：".concat(_0x2730a2)) : ("get" == _0x2730a2 && _0x24d5e9.headers ? (delete _0x24d5e9.headers["Content-Type"], delete _0x24d5e9.headers["Content-Length"]) : _0x24d5e9.body && _0x24d5e9.headers && (_0x24d5e9.headers["Content-Type"] || (_0x24d5e9.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x24d5e9.headers = _0x24d5e9.headers || {}, Object.assign(_0x24d5e9.headers, {
          "X-Surge-Skip-Scripting": !1
        })), _0x3a9844 = {
          method: _0x2730a2,
          url: _0x24d5e9.url,
          headers: _0x24d5e9.headers,
          timeout: _0x24d5e9.timeout,
          data: _0x24d5e9.body
        }, "get" == _0x2730a2 && delete _0x3a9844.data, $axios(_0x3a9844).then(function (_0x62c838) {
          var _0x3eb8a6 = _0x62c838.status,
            _0xccb5d6 = _0x62c838.request,
            _0x58c346 = _0x62c838.headers,
            _0x62c838 = _0x62c838.data;
          _0x2a274e(null, _0xccb5d6, {
            statusCode: _0x3eb8a6,
            headers: _0x58c346,
            body: _0x62c838
          });
        }).catch(function (_0x1f4919) {
          return console.log(_0x1f4919);
        })) : this.isQuanX() ? (_0x24d5e9.method = _0x2730a2.toUpperCase(), this.isNeedRewrite && (_0x24d5e9.opts = _0x24d5e9.opts || {}, Object.assign(_0x24d5e9.opts, {
          hints: !1
        })), $task.fetch(_0x24d5e9).then(function (_0x1f5717) {
          var _0x862f6d = _0x1f5717.statusCode,
            _0x3dc33d = _0x1f5717.request,
            _0x3b55fb = _0x1f5717.headers,
            _0x1f5717 = _0x1f5717.body;
          _0x2a274e(null, _0x3dc33d, {
            statusCode: _0x862f6d,
            headers: _0x3b55fb,
            body: _0x1f5717
          });
        }, function (_0x543e05) {
          return _0x2a274e(_0x543e05);
        })) : this.isNode() && (this.got = this.got || require("got"), _0x3a9844 = _0x24d5e9.url, _0x24d5e9 = i(_0x24d5e9, r), this.instance = this.got.extend({
          followRedirect: !1
        }), this.instance[_0x2730a2](_0x3a9844, _0x24d5e9).then(function (_0x25ed23) {
          var _0x57dda9 = _0x25ed23.statusCode,
            _0x4e0790 = _0x25ed23.request,
            _0x27722c = _0x25ed23.headers,
            _0x25ed23 = _0x25ed23.body;
          _0x2a274e(null, _0x4e0790, {
            statusCode: _0x57dda9,
            headers: _0x27722c,
            body: _0x25ed23
          });
        }, function (_0x164353) {
          var _0x443bd0 = _0x164353.message,
            _0x12155a = _0x164353.request,
            _0x164353 = _0x164353.response;
          _0x2a274e(_0x443bd0, _0x12155a, _0x164353);
        })));
      }
    }, {
      key: "time",
      value: function (_0x3207bd) {
        var _0x8c291e,
          _0x3474c6 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
          _0x3474c6 = _0x3474c6 ? new Date(_0x3474c6) : new Date(),
          _0x26bcd0 = {
            "M+": _0x3474c6.getMonth() + 1,
            "d+": _0x3474c6.getDate(),
            "h+": _0x3474c6.getHours(),
            "m+": _0x3474c6.getMinutes(),
            "s+": _0x3474c6.getSeconds(),
            "q+": Math.floor((_0x3474c6.getMonth() + 3) / 3),
            S: _0x3474c6.getMilliseconds()
          };
        for (_0x8c291e in /(y+)/.test(_0x3207bd) && (_0x3207bd = _0x3207bd.replace(RegExp.$1, (_0x3474c6.getFullYear() + "").substr(4 - RegExp.$1.length))), _0x26bcd0) new RegExp("(" + _0x8c291e + ")").test(_0x3207bd) && (_0x3207bd = _0x3207bd.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x26bcd0[_0x8c291e] : ("00" + _0x26bcd0[_0x8c291e]).substr(("" + _0x26bcd0[_0x8c291e]).length)));
        return _0x3207bd;
      }
    }, {
      key: "showmsg",
      value: (_0x39bd09 = m(L().mark(function _0x5416c2() {
        var _0x20e998, _0x427361;
        return L().wrap(function (_0x2a8f3b) {
          for (;;) {
            switch (_0x2a8f3b.prev = _0x2a8f3b.next) {
              case 0:
                if (this.notifyStr) {
                  _0x2a8f3b.next = 2;
                  break;
                }
                return _0x2a8f3b.abrupt("return");
              case 2:
                if (_0x20e998 = this.name + " 运行通知\n\n" + this.notifyStr, x.isNode()) {
                  _0x427361 = require("./sendNotify");
                  console.log("\n============== 推送 ==============");
                  _0x2a8f3b.next = 8;
                  return _0x427361.sendNotify(this.name, _0x20e998);
                }
                _0x2a8f3b.next = 10;
                break;
              case 8:
                _0x2a8f3b.next = 11;
                break;
              case 10:
                this.msg(_0x20e998);
              case 11:
              case "end":
                return _0x2a8f3b.stop();
            }
          }
        }, _0x5416c2, this);
      })), function () {
        return _0x39bd09.apply(this, arguments);
      })
    }, {
      key: "logAndNotify",
      value: function (_0x2ead55) {
        console.log(_0x2ead55);
        this.notifyStr += _0x2ead55;
        this.notifyStr += "\n";
      }
    }, {
      key: "logAndNotifyWithTime",
      value: function (_0x3cfbb2) {
        _0x3cfbb2 = "[" + this.time("hh:mm:ss.S") + "]" + _0x3cfbb2;
        console.log(_0x3cfbb2);
        this.notifyStr += _0x3cfbb2;
        this.notifyStr += "\n";
      }
    }, {
      key: "logWithTime",
      value: function (_0x348bb3) {
        console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x348bb3);
      }
    }, {
      key: "msg",
      value: function () {
        function _0x10b064(_0x2109e9) {
          return _0x2109e9 && ("string" == typeof _0x2109e9 ? _0x731d68.isLoon() ? _0x2109e9 : _0x731d68.isQuanX() ? {
            "open-url": _0x2109e9
          } : _0x731d68.isSurge() ? {
            url: _0x2109e9
          } : void 0 : "object" == T(_0x2109e9) ? _0x731d68.isLoon() ? {
            openUrl: _0x2109e9.openUrl || _0x2109e9.url || _0x2109e9["open-url"],
            mediaUrl: _0x2109e9.mediaUrl || _0x2109e9["media-url"]
          } : _0x731d68.isQuanX() ? {
            "open-url": _0x2109e9["open-url"] || _0x2109e9.url || _0x2109e9.openUrl,
            "media-url": _0x2109e9["media-url"] || _0x2109e9.mediaUrl
          } : _0x731d68.isSurge() ? {
            url: _0x2109e9.url || _0x2109e9.openUrl || _0x2109e9["open-url"]
          } : void 0 : void 0);
        }
        var _0x731d68 = this,
          _0x51aeef = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : t,
          _0x408fc9 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
          _0x3221b9 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
          _0x27621b = 3 < arguments.length ? arguments[3] : void 0,
          _0x27621b = (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x51aeef, _0x408fc9, _0x3221b9, _0x10b064(_0x27621b)) : this.isQuanX() && $notify(_0x51aeef, _0x408fc9, _0x3221b9, _0x10b064(_0x27621b))), ["", "============== 系统通知 =============="]);
        _0x27621b.push(_0x51aeef);
        _0x408fc9 && _0x27621b.push(_0x408fc9);
        _0x3221b9 && _0x27621b.push(_0x3221b9);
        console.log(_0x27621b.join("\n"));
      }
    }, {
      key: "getMin",
      value: function (_0x442521, _0x3aced2) {
        return _0x442521 < _0x3aced2 ? _0x442521 : _0x3aced2;
      }
    }, {
      key: "getMax",
      value: function (_0x471d3b, _0x20cc8b) {
        return _0x471d3b < _0x20cc8b ? _0x20cc8b : _0x471d3b;
      }
    }, {
      key: "padStr",
      value: function (_0x1e3e42, _0x54f28) {
        for (var _0x174448 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "0", _0x1e3e42 = String(_0x1e3e42), _0x351fcd = _0x54f28 > _0x1e3e42.length ? _0x54f28 - _0x1e3e42.length : 0, _0x14dfd4 = "", _0x469cab = 0; _0x469cab < _0x351fcd; _0x469cab++) {
          _0x14dfd4 += _0x174448;
        }
        return _0x14dfd4 += _0x1e3e42;
      }
    }, {
      key: "json2str",
      value: function (_0x5ebc00, _0x4745d1) {
        var _0xb883dc,
          _0xb8df85 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          _0x102dc3 = [],
          _0x48684c = u(Object.keys(_0x5ebc00).sort());
        try {
          for (_0x48684c.s(); !(_0xb883dc = _0x48684c.n()).done;) {
            var _0x485626 = _0xb883dc.value,
              _0x56ba4e = _0x5ebc00[_0x485626];
            _0x56ba4e && _0xb8df85 && (_0x56ba4e = encodeURIComponent(_0x56ba4e));
            _0x102dc3.push(_0x485626 + "=" + _0x56ba4e);
          }
        } catch (_0x20fe43) {
          _0x48684c.e(_0x20fe43);
        } finally {
          _0x48684c.f();
        }
        return _0x102dc3.join(_0x4745d1);
      }
    }, {
      key: "str2json",
      value: function (_0x4b020d) {
        var _0x4f32d6,
          _0x2ac34a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          _0x5bee4f = {},
          _0xea1829 = u(_0x4b020d.split("&"));
        try {
          for (_0xea1829.s(); !(_0x4f32d6 = _0xea1829.n()).done;) {
            var _0x47e99e,
              _0x3cc07f,
              _0x1d700c,
              _0xf88676 = _0x4f32d6.value;
            _0xf88676 && -1 != (_0x47e99e = _0xf88676.indexOf("=")) && (_0x3cc07f = _0xf88676.substr(0, _0x47e99e), _0x1d700c = _0xf88676.substr(_0x47e99e + 1), _0x2ac34a && (_0x1d700c = decodeURIComponent(_0x1d700c)), _0x5bee4f[_0x3cc07f] = _0x1d700c);
          }
        } catch (_0x36400e) {
          _0xea1829.e(_0x36400e);
        } finally {
          _0xea1829.f();
        }
        return _0x5bee4f;
      }
    }, {
      key: "randomString",
      value: function (_0x8d3f55) {
        for (var _0x4eb8cd = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "abcdef0123456789", _0x1860a5 = "", _0x2dc821 = 0; _0x2dc821 < _0x8d3f55; _0x2dc821++) {
          _0x1860a5 += _0x4eb8cd.charAt(Math.floor(Math.random() * _0x4eb8cd.length));
        }
        return _0x1860a5;
      }
    }, {
      key: "randomList",
      value: function (_0x545877) {
        return _0x545877[Math.floor(Math.random() * _0x545877.length)];
      }
    }, {
      key: "wait",
      value: function (_0x5d5a39) {
        return new Promise(function (_0x45da2f) {
          return setTimeout(_0x45da2f, _0x5d5a39);
        });
      }
    }, {
      key: "done",
      value: function () {
        var _0x19e93c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          _0x15e469 = (new Date().getTime() - this.startTime) / 1000;
        console.log("\n".concat(this.name, " 运行结束，共运行了 ").concat(_0x15e469, " 秒！"));
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x19e93c);
      }
    }]);
    var _0x39bd09;
  }())(_0xa9fea2, _0x382e05);
}
m(L().mark(function t() {
  var _0xd8006d, _0x571624, _0x563734, _0x5ac07c, _0x121600;
  return L().wrap(function (_0x55a158) {
    for (;;) {
      switch (_0x55a158.prev = _0x55a158.next) {
        case 0:
          _0x55a158.next = 2;
          return rt();
        case 2:
          _0x55a158.next = 4;
          return ot();
        case 4:
          if (_0x55a158.sent) {
            _0x55a158.next = 6;
            break;
          }
          return _0x55a158.abrupt("return");
        case 6:
          console.log("\n================ 开始执行 ================");
          _0xd8006d = 0;
          _0x571624 = S;
        case 8:
          if (_0xd8006d < _0x571624.length) {
            _0x563734 = _0x571624[_0xd8006d];
            _0x55a158.next = 12;
            return _0x563734.getUserInfo();
          }
          _0x55a158.next = 15;
          break;
        case 12:
          _0xd8006d++;
          _0x55a158.next = 8;
          break;
        case 15:
          if (!(0 < (_0x563734 = null == S ? void 0 : S.filter(function (_0x8c0170) {
            return null == _0x8c0170 ? void 0 : _0x8c0170.valid;
          })).length)) {
            _0x55a158.next = 37;
            break;
          }
          console.log("\n================ 任务队列构建完毕 ================");
          _0x5ac07c = u(_0x563734);
          _0x55a158.prev = 19;
          _0x5ac07c.s();
        case 21:
          if ((_0x121600 = _0x5ac07c.n()).done) {
            _0x55a158.next = 27;
            break;
          }
          _0x121600 = _0x121600.value;
          _0x55a158.next = 25;
          return _0x121600.doTask();
        case 25:
          _0x55a158.next = 21;
          break;
        case 27:
          _0x55a158.next = 32;
          break;
        case 29:
          _0x55a158.prev = 29;
          _0x55a158.t0 = _0x55a158.catch(19);
          _0x5ac07c.e(_0x55a158.t0);
        case 32:
          _0x55a158.prev = 32;
          _0x5ac07c.f();
          return _0x55a158.finish(32);
        case 35:
          _0x55a158.next = 38;
          break;
        case 37:
          console.log("\n============== 幻生提示：无可用账号，请检查配置 ============");
        case 38:
          _0x55a158.next = 40;
          return x.showmsg();
        case 40:
        case "end":
          return _0x55a158.stop();
      }
    }
  }, t, null, [[19, 29, 32, 35]]);
}))().catch(function (_0x9a6fa0) {
  return console.log(_0x9a6fa0);
}).finally(function () {
  return x.done();
});