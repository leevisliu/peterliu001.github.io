var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    },
    e = window.egret,
    i = function(t, e, i) {
        t.__class__ = e, i ? i.push(e) : i = [e], t.__types__ = t.__types__ ? i.concat(t.__types__) : i;
    },
    s = function(t, e) {
        function i() {
            this.constructor = t;
        }
        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        i.prototype = e.prototype, t.prototype = new i();
    },
    n = function(t, e, i, s) {
        return new(i || (i = Promise))(function(n, o) {
            function a(t) {
                try {
                    h(s.next(t));
                } catch (t) {
                    o(t);
                }
            }

            function r(t) {
                try {
                    h(s.throw(t));
                } catch (t) {
                    o(t);
                }
            }

            function h(t) {
                t.done ? n(t.value) : new i(function(e) {
                    e(t.value);
                }).then(a, r);
            }
            h((s = s.apply(t, e || [])).next());
        });
    },
    o = function(t, e) {
        function i(t) {
            return function(e) {
                return s([t, e]);
            };
        }

        function s(i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; h;) try {
                if (n = 1, o && (a = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(a = a.call(o, i[1])).done) return a;
                switch (o = 0, a && (i = [0, a.value]), i[0]) {
                    case 0:
                    case 1:
                        a = i;
                        break;

                    case 4:
                        return h.label++, {
                            value: i[1],
                            done: !1
                        };

                    case 5:
                        h.label++, o = i[1], i = [0];
                        continue;

                    case 7:
                        i = h.ops.pop(), h.trys.pop();
                        continue;

                    default:
                        if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            h = 0;
                            continue;
                        }
                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                            h.label = i[1];
                            break;
                        }
                        if (6 === i[0] && h.label < a[1]) {
                            h.label = a[1], a = i;
                            break;
                        }
                        if (a && h.label < a[2]) {
                            h.label = a[2], h.ops.push(i);
                            break;
                        }
                        a[2] && h.ops.pop(), h.trys.pop();
                        continue;
                }
                i = e.call(t, h);
            } catch (t) {
                i = [6, t], o = 0;
            } finally {
                n = a = 0;
            }
            if (5 & i[0]) throw i[1];
            return {
                value: i[0] ? i[1] : void 0,
                done: !0
            };
        }
        var n, o, a, r, h = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1];
            },
            trys: [],
            ops: []
        };
        return r = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this;
        }), r;
    },
    a = function() {
        function i() {
            this.projectId = "00001", this.ERR_NET = {
                errCode: "00001",
                errStr: "网络异常"
            }, this.ERR_SESSION = {
                errCode: "00002",
                errStr: "session过期"
            }, this.ERR_UNKNOWN_PROJECT_ID = {
                errCode: "00003",
                errStr: "项目ID异常"
            }, this.ERR_UNKNOWN_USER_ID = {
                errCode: "00004",
                errStr: "用户ID异常"
            }, this.ERR_USER_INFO = {
                errCode: "00005",
                errStr: "设置用户信息失败"
            }, this.ERR_SCORE = {
                errCode: "00006",
                errStr: "设置用户得分失败"
            }, this.ERR_RANK = {
                errCode: "00007",
                errStr: "获取排行失败"
            }, this.ERR_ADD_FRIEND = {
                errCode: "00008",
                errStr: "添加好友失败"
            }, this.ERR_GET_FRIEND_COUNT = {
                errCode: "00009",
                errStr: "获取好友数量失败"
            }, this.ERR_GET_FRIEND_LIST = {
                errCode: "00010",
                errStr: "获取好友信息失败"
            }, this.ERR_ADD_EVENT = {
                errCode: "00011",
                errStr: "上报统计信息失败"
            }, this.ERR_REPORT_ERROR = {
                errCode: "00012",
                errStr: "上报报错信息失败"
            }, this.ERR_REGISTERED = {
                errCode: "00101",
                errStr: "注册失败"
            }, this.ERR_PARAM = {
                errCode: "00102",
                errStr: "参数异常"
            }, this.sessionCode = null, this.expireTime = 0;
        }
        return i.prototype.getUrl = function() {
            return "debug" == i.BUILD_TYPE ? "http://192.168.199.1:18657/" : "test" == i.BUILD_TYPE ? "http://115.159.193.184:18657/" : "https://dxserver.haiwanwl.com/";
        }, Object.defineProperty(i.prototype, "userId", {
            get: function() {
                return this._userId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "nickName", {
            get: function() {
                return this._nickName;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "avatarUrl", {
            get: function() {
                return this._avatarUrl;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "publicParamter", {
            get: function() {
                return this._publicParamter;
            },
            enumerable: !0,
            configurable: !0
        }), i.init = function(t) {
            (i.instance = new i())._loadData(t);
        }, i.prototype._loadData = function(t) {
            var e = this;
            this._userId = 346746590;
            this._init(t)
            /*
        this._userId = this.loadParamStr("userId"), this._userId && "" != this._userId ? this._init(t) : this.sendHttp(this.getUrl() + "registeredUser?projectId=" + this.projectId, function(i) {
            if (D.log(i), i.userId) e._userId = i.userId, e.saveParam("userId", e._userId), 
            e._init(t), T.isNewPlayer = !0, b.instance.fristTime = D.getSystemTime(); else {
                if (!t.fail) throw e.ERR_REGISTERED;
                t.fail(e.ERR_REGISTERED);
            }
        }, function(e) {
            if (!t.fail) throw e;
            t.fail(e);
        });
		*/
        }, i.prototype._init = function(t) {
            var e = this;
            this.doSessionHttp("init?", function(i) {
                console.log(i), e._nickName = i.nickName, e._avatarUrl = i.avatarUrl, e._publicParamter = i.publicParamter,
                    i.publicParamter.switchs && v.instance.setBlack(i.publicParamter.switchs), i.publicParamter.shareParamList && platform.setShareBase(i.publicParamter.shareParamList),
                    t.success && t.success(i);
            }, function(e) {
                if (!t.fail) throw e;
                t.fail(e);
            });
        }, i.setUserInfo = function(t) {
            this.instance._setUserInfo(t);
        }, i.prototype._setUserInfo = function(t) {
            this.doSessionHttp("setUserInfo?nickName=" + t.nickName + "&avatarUrl=" + t.avatarUrl, function(e) {
                t.success && t.success(e);
            }, function(e) {
                if (!t.fail) throw e;
                t.fail(e);
            });
        }, i.setScore = function(t) {
            this.instance._setScore(t);
        }, i.prototype._setScore = function(t) {
            this.doSessionHttp("setScore?value=" + t.value + "&customValue=" + (t.customValue ? "&customValue=" + t.customValue : ""), function(e) {
                t.success && t.success(e);
            }, function(e) {
                if (!t.fail) throw e;
                t.fail(e);
            });
        }, i.getRank = function(t) {
            this.instance._getRank(t);
        }, i.prototype._getRank = function(t) {
            var e = this;
            this.doSessionHttp("getRank?", function(i) {
                if (!t.success) throw e.ERR_PARAM;
                t.success(i);
            }, function(e) {
                if (!t.fail) throw e;
                t.fail(e);
            });
        }, i.addNewFriend = function(t) {
            this.instance._addNewFriend(t);
        }, i.prototype._addNewFriend = function(t) {
            this.doSessionHttp("addNewFriend?friendUserId=" + t.friendUserId, function(e) {
                t.success && t.success(e);
            }, function(e) {
                if (!t.fail) throw e;
                t.fail(e);
            });
        }, i.getNewFriendCount = function(t) {
            this.instance._getNewFriendCount(t);
        }, i.prototype._getNewFriendCount = function(t) {
            var e = this;
            this.doSessionHttp("getNewFriendCount?", function(i) {
                if (!t.success) throw e.ERR_PARAM;
                t.success(i);
            }, function(e) {
                if (!t.fail) throw e;
                t.fail(e);
            });
        }, i.getNewFriendList = function(t) {
            this.instance._getNewFriendList(t);
        }, i.prototype._getNewFriendList = function(t) {
            var e = 5;
            t.count && (e = t.count), this.doSessionHttp("getNewFriendList?count=" + e, function(e) {
                t.success && t.success(e);
            }, function(e) {
                if (!t.fail) throw e;
                t.fail(e);
            });
        }, i.sendEvent = function(t) {
            this.instance._sendEvent(t);
        }, i.prototype._sendEvent = function(t) {
            this.doSessionHttp("sendEvent?eventName=" + t.eventName + "&customValue=" + (t.customValue ? t.customValue : ""), function(e) {
                t.success && t.success(e);
            }, function(e) {
                if (!t.fail) throw e;
                t.fail(e);
            });
        }, i.reportError = function(t) {
            this.instance._reportError(t);
        }, i.prototype._reportError = function(t) {
            this.doSessionHttp("reportError?errCode=" + t.errCode + "&errStr=" + (t.errStr ? t.errStr : ""), function(e) {
                t.success && t.success(e);
            }, function(e) {
                if (!t.fail) throw e;
                t.fail(e);
            });
        }, i.prototype.getSession = function(t, e, i) {
            var s = this;
            /*
        this.sendHttp(this.getUrl() + "getSession?projectId=" + this.projectId + "&userId=" + this._userId, function(n) {
            if (n.sessionCode) s.sessionCode = n.sessionCode, s.expireTime = n.expireTime, s.doSessionHttp(t, e, i, !0); else {
                if (!i) throw s.ERR_SESSION;
                i(s.ERR_SESSION);
            }
        }, function(t) {
            if (!i) throw s.ERR_NET;
            i(s.ERR_NET);
        });
		*/
        }, i.prototype.doSessionHttp = function(t, e, i, s) {
            if (void 0 === s && (s = !1), this.sessionCode && D.getSystemTime() < this.expireTime) this.sendHttp(this.getUrl() + t + "&sessionCode=" + this.sessionCode, e, i);
            else if (s) {
                if (!i) throw this.ERR_SESSION;
                i(this.ERR_SESSION);
            } else this.getSession(t, e, i);
        }, i.prototype.sendHttp = function(t, i, s) {
            var n = this,
                o = new e.HttpRequest();
            o.responseType = e.HttpResponseType.TEXT, o.open(decodeURIComponent(t), e.HttpMethod.GET),
                o.addEventListener(e.Event.COMPLETE, function(t) {
                    var e = JSON.parse(t.currentTarget.response);
                    if (e)
                        if (e.errCode) {
                            if (!s) throw e;
                            s(e);
                        } else i && i(e), e.expireTime && (n.expireTime = e.expireTime);
                    else {
                        if (!s) throw n.ERR_NET;
                        s(n.ERR_NET);
                    }
                }, this), o.addEventListener(e.IOErrorEvent.IO_ERROR, function(t) {
                    if (!s) throw n.ERR_NET;
                    s(n.ERR_NET);
                }, this), o.send();
        }, i.prototype.saveParam = function(i, s) {
            var n = "";
            switch (void 0 === s ? "undefined" : t(s)) {
                case "string":
                case "number":
                    n = s + "";
                    break;

                case "boolean":
                    n = s ? "true" : "false";
            }
            e.localStorage.setItem("dx" + this.projectId + i, n);
        }, i.prototype.loadParamStr = function(t) {
            var jso = e.localStorage.getItem("dx" + this.projectId + t);

            return jso;
        }, i.prototype.loadParamNumber = function(t) {
            var jso = Number(e.localStorage.getItem("dx" + this.projectId + t));

            return json;
        }, i.prototype.loadParamBoolean = function(t) {
            return "true" == e.localStorage.getItem("dx" + this.projectId + t);
        }, i.BUILD_TYPE = "release", i;
    }();

i(a.prototype, "dxGame");

! function(t) {
    function e() {
        return new Date().getTime();
    }

    function s() {
        return r(e() / d);
    }

    function n(t, e) {
        return void 0 === e && (e = 0), t == e ? t : (e > t && (t += e, e = t - e, t -= e),
            Math.round(Math.random() * (t - e + 1) + e - .5));
    }

    function o(t) {
        return Math.round(t);
    }

    function a(t) {
        return t == o(t) ? t : 0 > t ? -a(-t) : t - t % 1 + 1;
    }

    function r(t) {
        return t == o(t) ? t : 0 > t ? -r(-t) : t - t % 1;
    }

    function h(t) {
        return Math.abs(t);
    }

    function u(t, e) {
        return void 0 === e && (e = 2), Math.pow(t, e);
    }

    function _(t, e) {
        return void 0 === e && (e = 2), Math.pow(t, 1 / e);
    }

    function l(e) {
        return NaN == e || null == e || void 0 == e ? (t.log("非法角度:" + e), e) : e >= 0 ? e >= 720 ? e - 360 * t.roundDown(e / 360) : e >= 360 ? e - 360 : e : 360 - l(-e);
    }

    function c(t, e, i, s, n, o, a, r) {
        return t -= i / 2, e -= s / 2, n -= a / 2, o -= r / 2, !(0 > i || 0 > s || 0 > a || 0 > r) && !(n > t + i || t > n + a || o > e + s || e > o + r);
    }

    function m(t, e, i, s, n, o) {
        return u(t - s) + u(e - n) <= u(i + o);
    }
    t.SRC_W = 720, t.SRC_H = 1136, t.log = function(t) {
        console.log(t);
    }, t.setAnchor = function(t, e, i) {
        void 0 === e && (e = .5), void 0 === i && (i = .5), t.anchorOffsetX = t.width * e,
            t.anchorOffsetY = t.height * i;
    };
    var p = function() {
        function t(t, e) {
            this.func = t, this.thzs = e;
        }
        return t.prototype.run = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            (i = this.func).call.apply(i, [this.thzs].concat(t));
            var i;
        }, t;
    }();
    t.CallBack = p, i(p.prototype, "dx.CallBack");
    var d = 864e5;
    t.getSystemTime = e, t.getSystemDay = s, t.getSystemWeek = function() {
        return (s() + 3) % 7;
    }, t.getSystemHour = function() {
        return new Date().getHours();
    }, t.getHour = function(e) {
        return t.roundDown(e / 36e5);
    }, t.getMin = function(e) {
        return t.roundDown(e / 6e4);
    }, t.getSec = function(e) {
        return t.roundDown(e / 1e3);
    }, t.getNowTime = function() {
        var e = new Date(t.getSystemTime());
        return e.getFullYear().toString() + (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1).toString() : (e.getMonth() + 1).toString()) + (e.getDate() < 10 ? "0" + e.getDate().toString() : e.getDate().toString()) + (e.getHours() < 10 ? "0" + e.getHours().toString() : e.getHours().toString()) + (e.getMinutes() < 10 ? "0" + e.getMinutes().toString() : e.getMinutes().toString()) + (e.getSeconds() < 10 ? "0" + e.getSeconds().toString() : e.getSeconds().toString());
    }, t.getTime = function(e) {
        var i = "0:00:00";
        try {
            var s = t.getHour(e),
                n = t.getMin(e) % 60,
                o = t.getSec(e) % 60;
            i = s + ":" + (10 > n ? "0" + n : n) + ":" + (10 > o ? "0" + o : o);
        } catch (t) {
            i = "0:00:00";
        }
        return i;
    }, t.getTimeBySec = function(e) {
        var i = "0:00";
        try {
            var s = t.roundDown(e / 60),
                n = t.roundDown(e % 60);
            i = (10 > s ? "0" + s : s) + ":" + (10 > n ? "0" + n : n);
        } catch (t) {
            i = "0:00";
        }
        return i;
    }, t.random = n, t.randomf = function(t, e) {
        return void 0 === e && (e = 0), t == e ? t : (e > t && (t += e, e = t - e, t -= e),
            Math.random() * (t - e) + e);
    }, t.randombool = function() {
        return Math.random() > .5;
    }, t.randomSequence = function(t) {
        if (!(0 >= t)) {
            for (var e = [], i = 0; t > i; i++) e[i] = i;
            for (i = 0; t > i; i++) {
                var s = n(t - 1);
                s != i && (e[i] = e[i] ^ e[s], e[s] = e[i] ^ e[s], e[i] = e[i] ^ e[s]);
            }
            return e;
        }
    }, t.randomProbability = function(e) {
        for (var i = 0, s = 0; s < e.length; ++s) i += e[s];
        for (var n = t.randomf(i), s = 0; s < e.length; ++s) {
            if (n <= e[s]) return s;
            n -= e[s];
        }
        return -1;
    }, t.randomSort = function(t) {
        if (!(t.length <= 0))
            for (var e = 0; e < t.length; e++) {
                var i = n(t.length - 1);
                if (i != e) {
                    var s = t[e];
                    t[e] = t[i], t[i] = s;
                }
            }
    };
    var g = "0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    t.randomStr = function(t) {
            for (var e = "", i = 0; t > i; i++) e += g[n(g.length - 1)];
            return e;
        }, t.randAlloc = function(t, e, i, s) {
            for (var n = [], o = t, a = s, r = 0; s - 1 > r; r++) {
                var h = --a * i,
                    u = o - a * e,
                    _ = Math.max(e, o - h),
                    l = Math.min(u - _, 2 * (i - _));
                n[r] = Math.min(i, _ + Math.floor(l * Math.random())), o -= n[r];
            }
            return n[s - 1] = o, n;
        }, t.round = o, t.roundUp = a, t.roundDown = r, t.abs = h, t.pow = u, t.sqrt = _,
        t.getIntLength = function(t) {
            return t.toString().length - (0 > t ? 1 : 0);
        }, t.sin = function(t) {
            return Math.sin(t * Math.PI / 180);
        }, t.cos = function(t) {
            return Math.cos(t * Math.PI / 180);
        }, t.tan = function(t) {
            return Math.tan(t * Math.PI / 180);
        }, t.getAngle = function(e, i, s, n) {
            return t.adjustAngle(180 * Math.atan2(i - n, e - s) / Math.PI - 90);
        }, t.getAngleMy = function(t, e, i, s) {
            var n = Math.abs(t - i),
                o = Math.abs(e - s),
                a = o / Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)),
                r = Math.acos(a),
                h = Math.floor(180 / (Math.PI / r));
            return i > t && s > e && (h = 180 - h), i == t && s > e && (h = 180), i > t && s == e && (h = 90),
                t > i && s > e && (h = -180 + h), t > i && s == e && (h = -90), t > i && e > s && (h = -h),
                h;
        }, t.getDistance = function(t, e, i, s) {
            return _(u(t - i) + u(e - s));
        }, t.max = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (!(t.length <= 0)) {
                for (var i = t[0], s = 1; s < t.length; s++) t[s] > i && (i = t[s]);
                return i;
            }
        }, t.min = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (!(t.length <= 0)) {
                for (var i = t[0], s = 1; s < t.length; s++) t[s] < i && (i = t[s]);
                return i;
            }
        }, t.inAB = function(t, e, i) {
            return t > i && i > e || i > t && e > i;
        }, t.isEqual = function(t, e, i) {
            return void 0 === i && (i = 1e-6), h(t - e) <= i;
        }, t.adjustAngle = l, t.getStrLength = function(t) {
            for (var e = 0, i = 0; i < t.length; i++) e += t.charCodeAt(i) > 255 ? 1 : .5;
            return e;
        }, t.cheakIsPlusInteger = function(t) {
            return 1 == /^[1-9]+[0-9]*]*$/.test(t);
        }, t.cheakIsInteger = function(t) {
            return 1 == /^[0-9]+$/.test(t);
        }, t.cheakIsNumInteger = function(t, e) {
            return void 0 === e && (e = 1), 1 == /^[0-9]{num}$/.test(t);
        }, t.cheakIsTel = function(t) {
            return 1 == /^1[0-9]{10}$/.test(t);
        }, t.cheakIsNumber = function(t) {
            return 1 == /^-?\d+.?\d+$/.test(t);
        }, t.isHit_r2r = c, t.isHit_c2c = m, t.isHit_p2r = function(t, e, i, s, n, o) {
            return c(t, e, 0, 0, i, s, n, o);
        }, t.isHit_p2c = function(t, e, i, s, n) {
            return m(t, e, 0, i, s, n);
        }, t.isHit_X2X = function(t, e, i, s) {
            return c(t, 0, e, 200, i, 0, s, 200);
        }, t.isHit_col2her = function(t, e, i) {
            return i ? c(t - 10, 100, 30, 200, e - 15, 30, 30, 48) : c(t, 50, 52, 40, e, 30, 10, 48);
        }, t.isHit_l2l = function(t, e, i, s) {
            return t -= e / 2, i -= s / 2, !(0 > e || 0 > s || i > t + e || t > i + s);
        }, t.getPosition = function(t, e, i, s) {
            return void 0 === i && (i = 0), void 0 === s && (s = 0), Math.atan2(i - t, s - e) / Math.PI * 180 - 90;
        };
}(D || (D = {}));

var r = function(t) {
    function e(e, i, s, n, o, a, r, h, u, _) {
        var l = t.call(this) || this;
        return l._isClean = !1, l._type = n, l.x = e, l.y = i, l._atk = s, l._aim = a, l._level = o,
            l._png = r, l._hurt = h, l._rotat = u, l._offerX = _, l;
    }
    return s(e, t), Object.defineProperty(e.prototype, "atk", {
        get: function() {
            return this._atk;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "isClean", {
        get: function() {
            return this._isClean;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "level", {
        get: function() {
            return this._level;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "png", {
        get: function() {
            return this._png;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "hurt", {
        get: function() {
            return this._hurt;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "rotat", {
        get: function() {
            return this._rotat;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "offerX", {
        get: function() {
            return this._offerX;
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.changeAim = function(t) {
        this._aim = t;
    }, e;
}(e.Sprite);

i(r.prototype, "MyBullet");

var h;

! function(t) {
    t[t.LOGIN = 0] = "LOGIN", t[t.OPEN = 1] = "OPEN", t[t.MAIN = 2] = "MAIN", t[t.GAME = 3] = "GAME",
        t[t.LOADING = 4] = "LOADING", t[t.SHOP = 5] = "SHOP", t[t.UPGRADE = 6] = "UPGRADE",
        t[t.DIAMONDNOTENOUGH = 7] = "DIAMONDNOTENOUGH", t[t.GOLDNOTENOUGH = 8] = "GOLDNOTENOUGH",
        t[t.HAMMERNOTENOUGH = 9] = "HAMMERNOTENOUGH", t[t.AUTO_BUILD_NOT_ENOUGH = 10] = "AUTO_BUILD_NOT_ENOUGH",
        t[t.HELP = 11] = "HELP", t[t.RANK = 12] = "RANK", t[t.PUSH = 13] = "PUSH", t[t.GUNLVUP = 14] = "GUNLVUP",
        t[t.NOTICE = 15] = "NOTICE", t[t.OFFLINEREWARD = 16] = "OFFLINEREWARD", t[t.OTHERREWARD = 17] = "OTHERREWARD",
        t[t.OPTIOIN = 18] = "OPTIOIN", t[t.BOSS = 19] = "BOSS", t[t.TASK = 20] = "TASK",
        t[t.PAUSE = 21] = "PAUSE", t[t.END = 22] = "END", t[t.PARTNER_AD = 23] = "PARTNER_AD",
        t[t.GET_TOWER = 24] = "GET_TOWER", t[t.SUPPLY = 25] = "SUPPLY", t[t.SIGNIN = 26] = "SIGNIN",
        t[t.count = 27] = "count";
}(h || (h = {}));

var u = function(t) {
    function i() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return s(i, t), i.getMenu = function(t) {
        if (!i.menus[t]) {
            switch (t) {
                case h.LOGIN:
                case h.OPEN:
                case h.LOADING:
                    break;

                case h.SHOP:
                    i.menus[t] = new gt();
                    break;

                case h.UPGRADE:
                    i.menus[t] = new yt();
                    break;

                case h.TASK:
                    i.menus[t] = new wt();
                    break;

                case h.DIAMONDNOTENOUGH:
                    i.menus[t] = new et();
                    break;

                case h.GOLDNOTENOUGH:
                    i.menus[t] = new nt();
                    break;

                case h.HAMMERNOTENOUGH:
                    i.menus[t] = new ot();
                    break;

                case h.AUTO_BUILD_NOT_ENOUGH:
                    i.menus[t] = new tt();
                    break;

                case h.HELP:
                    i.menus[t] = new at();
                    break;

                case h.PUSH:
                    i.menus[t] = new pt();
                    break;

                case h.RANK:
                    i.menus[t] = new dt();
                    break;

                case h.GUNLVUP:
                    i.menus[t] = new rt();
                    break;

                case h.NOTICE:
                    i.menus[t] = new ut();
                    break;

                case h.OFFLINEREWARD:
                    i.menus[t] = new _t();
                    break;

                case h.OTHERREWARD:
                    i.menus[t] = new ct();
                    break;

                case h.OPTIOIN:
                    i.menus[t] = new lt();
                    break;

                case h.BOSS:
                    i.menus[t] = new Tt();
                    break;

                case h.MAIN:
                    break;

                case h.GAME:
                    i.menus[t] = B.GetInstance();
                    break;

                case h.PAUSE:
                    break;

                case h.END:
                    i.menus[t] = new it();
                    break;

                case h.PARTNER_AD:
                    i.menus[t] = new mt();
                    break;

                case h.GET_TOWER:
                    i.menus[t] = new st();
                    break;

                case h.SUPPLY:
                    i.menus[t] = new ft();
                    break;

                case h.SIGNIN:
                    i.menus[t] = new bt();
            }
            i.menus[t].x += i.menus[t].anchorOffsetX = i.menus[t].width / 2, i.menus[t].y += i.menus[t].anchorOffsetY = i.menus[t].height / 2;
        }
        return i.menus[t].parent && i.menus[t].parent.removeChild(i.menus[t]), i.menus[t].reset(),
            i.menus[t];
    }, i.changeMenu = function(t, e) {
        if (!(D.getSystemTime() < i.changeMenuTime + 150)) {
            i.changeMenuTime = D.getSystemTime();
            var s = i.getMenu(t);
            switch (e) {
                case 0:
                    i.currMenu && i.currMenu.remove(), s.show(), i.stage.addChild(s);
                    break;

                case 1:
                    i.currMenu && i.currMenu.close(), s.showNow(), i.stage.addChildAt(s, 0);
            }
            i.currMenu = s;
        }
    }, i.restart = function() {
        if (!(D.getSystemTime() < i.changeMenuTime + 150)) {
            i.changeMenuTime = D.getSystemTime(), i.currMenu && i.currMenu.close();
            var t = i.getMenu(h.MAIN);
            t.showNow(), i.stage.addChildAt(t, 0), i.currMenu = t;
        }
    }, i.prototype.show = function() {
        this.scaleX = 0, this.scaleY = 0, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100);
    }, i.prototype.showNow = function() {
        this.scaleX = 1, this.scaleY = 1;
    }, i.prototype.remove = function() {
        var t = this;
        e.Tween.get(this).wait(150).call(function() {
            t.end();
        }, this);
    }, i.prototype.close = function() {
        var t = this;
        this.scaleX = 1, this.scaleY = 1, e.Tween.get(this).to({
            scaleX: .7,
            scaleY: .7
        }, 100).call(function() {
            t.end();
        }, this);
    }, i.prototype.end = function() {
        this.parent.removeChild(this);
    }, i.stage = null, i.currMenu = null, i.menus = [], i.changeMenuTime = 0, i;
}(eui.Component);

i(u.prototype, "MyMenu");

var _ = function(t) {
    function i(i, s, n, o, a, r, h, u, _, l) {
        void 0 === _ && (_ = 0), void 0 === l && (l = 0);
        var c = t.call(this, i, s, n, o, a, r, h, u, _, l) || this;
        c.MOVE_SPEED = 600, c._targrtX = 0, c._targrtY = 0, c._move = !1, c._bulletImg = new e.Bitmap(),
            c._bulletImg.texture = RES.getRes(h);
        var m = RES.getRes("eff_bullet_json"),
            p = RES.getRes("eff_bullet_png"),
            d = new e.MovieClipDataFactory(m, p);
        return c.armatureDisplay = new e.MovieClip(d.generateMovieClipData("bullet_d_b")),
            c.armatureDisplay.anchorOffsetY = 52, c.armatureDisplay.anchorOffsetX = 97, c.armatureDisplay.y = 40,
            c.armatureDisplay.rotation = -90, c.addChild(c.armatureDisplay), c.armatureDisplay.visible = !1,
            D.setAnchor(c._bulletImg), c.addChild(c._bulletImg), c._targrtX = c._aim.x, c._targrtY = c._aim.y,
            c.rotation = D.getAngleMy(c.x, c.y, c._targrtX, c._targrtY), c._move = !1, e.Tween.removeTweens(c._bulletImg),
            e.Tween.get(c._bulletImg).to({
                scaleX: 1.1,
                scaleY: .9
            }, 50, e.Ease.sineInOut).to({
                scaleX: .9,
                scaleY: 1.1
            }, 100, e.Ease.sineInOut).to({
                scaleX: 1,
                scaleY: 1
            }, 50, e.Ease.sineInOut).call(function() {
                c._move = !0, c.armatureDisplay.gotoAndPlay("act", -1), c.armatureDisplay.visible = !0;
            }), c;
    }
    return s(i, t), i.prototype.run = function(t) {
        if (this._move)
            if (this._aim.isShow && !this._aim.isDead) {
                this._targrtX = this._aim.x, this._targrtY = this._aim.y;
                e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
                if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                    this.y = this._targrtY, this.clean(), this._aim.beHurt(this.atk), void B.GetInstance().addHurtEffect(this._aim.x, this._aim.y, e, this._type, this._hurt);
                this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
            } else {
                if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                    this.y = this._targrtY, void this.clean();
                var e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
                this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
            }
    }, i.prototype.clean = function() {
        this._isClean = !0, this.parent && this.parent.removeChild(this);
    }, i;
}(r);

i(_.prototype, "MyRocket");

var l = function() {
    function t() {
        this._equipmentID = "0", this._userID = "0", this._nickname = "0", this._userData_table = "";
        var t;
        (t = this.getData("equipmentID ")) && (this._equipmentID = t), (t = this.getData("userID")) && (this._userID = t),
        (t = this.getData("nickname")) && (this._nickname = t), (t = this.getData("userData_table")) && (this._userData_table = t);
    }
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance;
        },
        enumerable: !0,
        configurable: !0
    }), t.init = function() {
        t._instance || (t._instance = new t());
    }, t.prototype.getData = function(i) {
        var jsona = e.localStorage.getItem(t.SAVEDATA_PREFIX + i);

        return jsona;
    }, t.prototype.setData = function(i, s) {
        e.localStorage.setItem(t.SAVEDATA_PREFIX + i, s);
    }, t.prototype.reloadGameData = function(t) {
        JSON.parse(t);
    }, t.prototype.saveGameData = function() {
        var t = {};
        return JSON.stringify(t);
    }, Object.defineProperty(t.prototype, "equipmentID", {
        get: function() {
            return this._equipmentID;
        },
        set: function(t) {
            this._equipmentID = t, this.setData("equipmentID", t);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "userID", {
        get: function() {
            return this._userID;
        },
        set: function(t) {
            this._userID = t, this.setData("userID", t);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "nickname", {
        get: function() {
            return this._nickname;
        },
        set: function(t) {
            this._nickname = t, this.setData("nickname", t);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "userDataTable", {
        get: function() {
            return this._userData_table;
        },
        set: function(t) {
            this._userData_table = t, this.setData("userData_table", t);
        },
        enumerable: !0,
        configurable: !0
    }), t.SAVEDATA_PREFIX = "wztf_", t._instance = null, t;
}();

i(l.prototype, "MyNetSave");

var c = function() {
    function t(t, e, i, s) {
        this.method = t, this.code = e, this.pw = i, this.lastResult = s;
    }
    return Object.defineProperty(t.prototype, "identification", {
        get: function() {
            return this.method;
        },
        set: function(t) {
            this.method = t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ID", {
        get: function() {
            return this.code;
        },
        set: function(t) {
            this.code = t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "password", {
        get: function() {
            return this.pw;
        },
        set: function(t) {
            this.pw = t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_lastResult", {
        get: function() {
            return this.lastResult;
        },
        set: function(t) {
            this.lastResult = t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

i(c.prototype, "userData");

var m = function() {
    function t(t, e, i) {
        this.seat_row = t, this.seat_column = e, this.seat_level = i;
    }
    return Object.defineProperty(t.prototype, "row", {
        get: function() {
            return this.seat_row;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "column", {
        get: function() {
            return this.seat_column;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "level", {
        get: function() {
            return this.seat_level;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

i(m.prototype, "TowerData");

var p = function() {
    function t(t, e) {
        this.name = t, this.png = e;
    }
    return Object.defineProperty(t.prototype, "_name", {
        get: function() {
            return this.name;
        },
        set: function(t) {
            this.name = t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_png", {
        get: function() {
            return this.png;
        },
        set: function(t) {
            this.png = t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

i(p.prototype, "friendData");

var d = function() {
    function t(t, e) {
        this.nickname = t, this.avatarUrl = e;
    }
    return Object.defineProperty(t.prototype, "_name", {
        get: function() {
            return this.nickname;
        },
        set: function(t) {
            this.nickname = t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_png", {
        get: function() {
            return this.avatarUrl;
        },
        set: function(t) {
            this.avatarUrl = t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

i(d.prototype, "nameData");

var g = function() {
    function t(t, e, i, s) {
        this.rank = t, this.nickname = e, this.avatarUrl = i, this.score = s;
    }
    return Object.defineProperty(t.prototype, "_rank", {
        get: function() {
            return this.rank;
        },
        set: function(t) {
            this.rank = t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_nickname", {
        get: function() {
            return this.nickname;
        },
        set: function(t) {
            this.nickname = t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_avatarUrl", {
        get: function() {
            return this.avatarUrl;
        },
        set: function(t) {
            this.avatarUrl = t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_score", {
        get: function() {
            return this.score;
        },
        set: function(t) {
            this.score = t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

i(g.prototype, "rankData");

var b = function() {
    function t() {
        this.users = [], this.friends = [], this._fristTime = 0, this._fristPass_1_1 = !1,
            this._fristPass_1_2 = !1, this._fristPass_1_3 = !1, this._fristPass_3_1 = !1, this._fristPass_4_1 = !1,
            this._fristPass_5_1 = !1, this._fristPassOneDay_1_1 = !1, this._fristPassOneDay_1_2 = !1,
            this._fristPassOneDay_1_3 = !1, this._fristPassOneDay_3_1 = !1, this._fristPassOneDay_4_1 = !1,
            this._fristPassOneDay_5_1 = !1, this._taskDLShow = 0, this._dayTime = 0, this._offLineTime = -1,
            this._isBGM = !0, this._isSE = !0, this._powerLast = 0, this._powerNow = 0, this._powerMost = 1,
            this._gold = 0, this._diamond = 0, this._hammer = 8, this._autoBuild = 8, this._getDiamondToday = 5,
            this._getGoldToday = 50, this._getHammerToday = 10, this._getAutoBuildToday = 5,
            this._getTowerToday = 5, this._isContinue = !1, this._waveNow = 1, this._missionNow = 1,
            this._powerForEnemy = 0, this._sandTable = "", this._buildTowerNum_01 = 0, this._buildTowerNum_02 = 0,
            this._buildTowerNum_03 = 0, this._buildTowerNum_04 = 0, this._buildTowerNum_05 = 0,
            this._buildTowerNum_06 = 0, this._buildTowerNum_07 = 0, this._buildTowerNum_08 = 0,
            this._buildTowerNum_09 = 0, this._buildTowerNum_10 = 0, this._buildTowerNum_11 = 0,
            this._buildTowerNum_12 = 0, this._buildTowerNum_13 = 0, this._buildTowerNum_14 = 0,
            this._buildTowerNum_15 = 0, this._buildTowerNum_16 = 0, this._buildTowerNum_17 = 0,
            this._buildTowerNum_18 = 0, this._buildTowerNum_19 = 0, this._buildTowerNum_20 = 0,
            this._buildTowerNum_21 = 0, this._buildTowerNum_22 = 0, this._buildTowerNum_23 = 0,
            this._buildTowerNum_24 = 0, this._buildTowerNum_25 = 0, this._buildTowerNum_26 = 0,
            this._buildTowerNum_27 = 0, this._buildTowerNum_28 = 0, this._buildTowerNum_29 = 0,
            this._buildTowerNum_30 = 0, this._buildTowerNum_31 = 0, this._buildTowerNum_32 = 0,
            this._buildTowerNum_33 = 0, this._buildTowerNum_34 = 0, this._buildTowerNum_35 = 0,
            this._buildTowerNum_36 = 0, this._buildTowerNum_37 = 0, this._buildTowerNum_38 = 0,
            this._buildTowerNum_39 = 0, this._buildTowerNum_40 = 0, this._taskDLNum_01 = 0,
            this._taskDLNum_02 = 0, this._taskDLNum_03 = 0, this._taskCompleteNum_01 = 0, this._taskCompleteNum_02 = 0,
            this._taskCompleteNum_03 = 0, this._taskCompleteNum_04 = 0, this._taskCompleteNum_05 = 0,
            this._taskCompleteNum_06 = 0, this._taskCompleteNum_07 = 0, this._taskCompleteNum_08 = 0,
            this._taskCompleteNum_09 = 0, this._taskCompleteNum_10 = 0, this._taskNeedNum_01 = 0,
            this._taskNeedNum_02 = 0, this._taskNeedNum_03 = 0, this._taskNeedNum_04 = 0, this._taskNeedNum_05 = 0,
            this._taskNeedNum_06 = 0, this._taskNeedNum_07 = 0, this._taskNeedNum_08 = 0, this._taskNeedNum_09 = 0,
            this._taskNeedNum_10 = 0, this._achCompleteNum_01 = 0, this._achCompleteNum_02 = 0,
            this._achCompleteNum_03 = 0, this._achCompleteNum_04 = 0, this._achCompleteNum_05 = 0,
            this._achCompleteNum_06 = 0, this._achCompleteNum_07 = 0, this._achCompleteNum_08 = 0,
            this._achCompleteNum_09 = 0, this._achNeedNum_01 = 0, this._achNeedNum_02 = 0, this._achNeedNum_03 = 0,
            this._achNeedNum_04 = 0, this._achNeedNum_05 = 0, this._achNeedNum_06 = 0, this._achNeedNum_07 = 0,
            this._achNeedNum_08 = 0, this._achNeedNum_09 = 0, this._upgradeNum_01 = 1, this._upgradeNum_02 = 1,
            this._upgradeNum_03 = 1, this._upgradeNum_04 = 1, this._upgradeNum_05 = 1, this._upgradeNum_06 = 1,
            this._helpInGame_01 = !1, this._helpInGame_02 = !1, this._helpInGame_03 = !1, this._helpInGame_04 = !1,
            this._helpInGame_05 = !1, this._helpInGame_06 = !1, this._helpInGame_07 = !1, this._helpInGame_08 = !1,
            this._helpInGame_09 = !1, this._signIn_month = -1, this._signIn_day = -1, this._signIn_index = -1,
            this._signIn_data = [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
            ],
            this.reloadUserData();
        var t;
        (t = this.getData("fristTime")) && (this._fristTime = Number(t)), (t = this.getData("fristPass_1_1")) && (this._fristPass_1_1 = "1" == t),
        (t = this.getData("fristPass_1_2")) && (this._fristPass_1_2 = "1" == t), (t = this.getData("fristPass_1_3")) && (this._fristPass_1_3 = "1" == t),
        (t = this.getData("fristPass_3_1")) && (this._fristPass_3_1 = "1" == t), (t = this.getData("fristPass_4_1")) && (this._fristPass_4_1 = "1" == t),
        (t = this.getData("fristPass_5_1")) && (this._fristPass_5_1 = "1" == t), (t = this.getData("fristPassOneDay_1_1")) && (this._fristPassOneDay_1_1 = "1" == t),
        (t = this.getData("fristPassOneDay_1_2")) && (this._fristPassOneDay_1_2 = "1" == t),
        (t = this.getData("fristPassOneDay_1_3")) && (this._fristPassOneDay_1_3 = "1" == t),
        (t = this.getData("fristPassOneDay_3_1")) && (this._fristPassOneDay_3_1 = "1" == t),
        (t = this.getData("fristPassOneDay_4_1")) && (this._fristPassOneDay_4_1 = "1" == t),
        (t = this.getData("fristPassOneDay_5_1")) && (this._fristPassOneDay_5_1 = "1" == t),
        (t = this.getData("taskDLShow")) && (this._taskDLShow = Number(t)), (t = this.getData("offLineTime")) && (this._offLineTime = Number(t)),
        (t = this.getData("isBGM")) && (this._isBGM = "1" == t), (t = this.getData("isSE")) && (this._isSE = "1" == t),
        (t = this.getData("dayTime")) && (this._dayTime = Number(t)), (t = this.getData("powerNow")) && (this._powerNow = Number(t)),
        (t = this.getData("powerLast")) && (this._powerLast = Number(t)), (t = this.getData("powerMost")) && (this._powerMost = Number(t)),
        (t = this.getData("isContinue")) && (this._isContinue = "1" == t), (t = this.getData("waveNow")) && (this._waveNow = Number(t)),
        (t = this.getData("missionNow")) && (this._missionNow = Number(t)), (t = this.getData("powerForEnemy")) && (this._powerForEnemy = Number(t)),
        (t = this.getData("sandTable")) && (this._sandTable = t), (t = this.getData("gold")) && (this._gold = Number(t)),
        (t = this.getData("diamond")) && (this._diamond = Number(t)), (t = this.getData("hammer")) && (this._hammer = Number(t)),
        (t = this.getData("autoBuild")) && (this._autoBuild = Number(t)), (t = this.getData("getDiamondToday")) && (this._getDiamondToday = Number(t)),
        (t = this.getData("getGoldToday")) && (this._getGoldToday = Number(t)), (t = this.getData("getHammerToday")) && (this._getHammerToday = Number(t)),
        (t = this.getData("getAutoBuildToday")) && (this._getAutoBuildToday = Number(t)),
        (t = this.getData("getTowerToday")) && (this._getTowerToday = Number(t)), (t = this.getData("buildTowerNum_01")) && (this._buildTowerNum_01 = Number(t)),
        (t = this.getData("buildTowerNum_02")) && (this._buildTowerNum_02 = Number(t)),
        (t = this.getData("buildTowerNum_03")) && (this._buildTowerNum_03 = Number(t)),
        (t = this.getData("buildTowerNum_04")) && (this._buildTowerNum_04 = Number(t)),
        (t = this.getData("buildTowerNum_05")) && (this._buildTowerNum_05 = Number(t)),
        (t = this.getData("buildTowerNum_06")) && (this._buildTowerNum_06 = Number(t)),
        (t = this.getData("buildTowerNum_07")) && (this._buildTowerNum_07 = Number(t)),
        (t = this.getData("buildTowerNum_08")) && (this._buildTowerNum_08 = Number(t)),
        (t = this.getData("buildTowerNum_09")) && (this._buildTowerNum_09 = Number(t)),
        (t = this.getData("buildTowerNum_10")) && (this._buildTowerNum_10 = Number(t)),
        (t = this.getData("buildTowerNum_11")) && (this._buildTowerNum_11 = Number(t)),
        (t = this.getData("buildTowerNum_12")) && (this._buildTowerNum_12 = Number(t)),
        (t = this.getData("buildTowerNum_13")) && (this._buildTowerNum_13 = Number(t)),
        (t = this.getData("buildTowerNum_14")) && (this._buildTowerNum_14 = Number(t)),
        (t = this.getData("buildTowerNum_15")) && (this._buildTowerNum_15 = Number(t)),
        (t = this.getData("buildTowerNum_16")) && (this._buildTowerNum_16 = Number(t)),
        (t = this.getData("buildTowerNum_17")) && (this._buildTowerNum_17 = Number(t)),
        (t = this.getData("buildTowerNum_18")) && (this._buildTowerNum_18 = Number(t)),
        (t = this.getData("buildTowerNum_19")) && (this._buildTowerNum_19 = Number(t)),
        (t = this.getData("buildTowerNum_20")) && (this._buildTowerNum_20 = Number(t)),
        (t = this.getData("buildTowerNum_21")) && (this._buildTowerNum_21 = Number(t)),
        (t = this.getData("buildTowerNum_22")) && (this._buildTowerNum_22 = Number(t)),
        (t = this.getData("buildTowerNum_23")) && (this._buildTowerNum_23 = Number(t)),
        (t = this.getData("buildTowerNum_24")) && (this._buildTowerNum_24 = Number(t)),
        (t = this.getData("buildTowerNum_25")) && (this._buildTowerNum_25 = Number(t)),
        (t = this.getData("buildTowerNum_26")) && (this._buildTowerNum_26 = Number(t)),
        (t = this.getData("buildTowerNum_27")) && (this._buildTowerNum_27 = Number(t)),
        (t = this.getData("buildTowerNum_28")) && (this._buildTowerNum_28 = Number(t)),
        (t = this.getData("buildTowerNum_29")) && (this._buildTowerNum_29 = Number(t)),
        (t = this.getData("buildTowerNum_30")) && (this._buildTowerNum_30 = Number(t)),
        (t = this.getData("buildTowerNum_31")) && (this._buildTowerNum_31 = Number(t)),
        (t = this.getData("buildTowerNum_32")) && (this._buildTowerNum_32 = Number(t)),
        (t = this.getData("buildTowerNum_33")) && (this._buildTowerNum_33 = Number(t)),
        (t = this.getData("buildTowerNum_34")) && (this._buildTowerNum_34 = Number(t)),
        (t = this.getData("buildTowerNum_35")) && (this._buildTowerNum_35 = Number(t)),
        (t = this.getData("buildTowerNum_36")) && (this._buildTowerNum_36 = Number(t)),
        (t = this.getData("buildTowerNum_37")) && (this._buildTowerNum_37 = Number(t)),
        (t = this.getData("buildTowerNum_38")) && (this._buildTowerNum_38 = Number(t)),
        (t = this.getData("buildTowerNum_39")) && (this._buildTowerNum_39 = Number(t)),
        (t = this.getData("buildTowerNum_40")) && (this._buildTowerNum_40 = Number(t)),
        (t = this.getData("taskDLNum_01")) && (this._taskDLNum_01 = Number(t)), (t = this.getData("taskDLNum_02")) && (this._taskDLNum_02 = Number(t)),
        (t = this.getData("taskDLNum_03")) && (this._taskDLNum_03 = Number(t)), (t = this.getData("taskCompleteNum_01")) && (this._taskCompleteNum_01 = Number(t)),
        (t = this.getData("taskCompleteNum_02")) && (this._taskCompleteNum_02 = Number(t)),
        (t = this.getData("taskCompleteNum_03")) && (this._taskCompleteNum_03 = Number(t)),
        (t = this.getData("taskCompleteNum_04")) && (this._taskCompleteNum_04 = Number(t)),
        (t = this.getData("taskCompleteNum_05")) && (this._taskCompleteNum_05 = Number(t)),
        (t = this.getData("taskCompleteNum_06")) && (this._taskCompleteNum_06 = Number(t)),
        (t = this.getData("taskCompleteNum_07")) && (this._taskCompleteNum_07 = Number(t)),
        (t = this.getData("taskCompleteNum_08")) && (this._taskCompleteNum_08 = Number(t)),
        (t = this.getData("taskCompleteNum_09")) && (this._taskCompleteNum_09 = Number(t)),
        (t = this.getData("taskCompleteNum_10")) && (this._taskCompleteNum_10 = Number(t)),
        (t = this.getData("taskNeedNum_01")) && (this._taskNeedNum_01 = Number(t)), (t = this.getData("taskNeedNum_02")) && (this._taskNeedNum_02 = Number(t)),
        (t = this.getData("taskNeedNum_03")) && (this._taskNeedNum_03 = Number(t)), (t = this.getData("taskNeedNum_04")) && (this._taskNeedNum_04 = Number(t)),
        (t = this.getData("taskNeedNum_05")) && (this._taskNeedNum_05 = Number(t)), (t = this.getData("taskNeedNum_06")) && (this._taskNeedNum_06 = Number(t)),
        (t = this.getData("taskNeedNum_07")) && (this._taskNeedNum_07 = Number(t)), (t = this.getData("taskNeedNum_08")) && (this._taskNeedNum_08 = Number(t)),
        (t = this.getData("taskNeedNum_09")) && (this._taskNeedNum_09 = Number(t)), (t = this.getData("taskNeedNum_10")) && (this._taskNeedNum_10 = Number(t)),
        (t = this.getData("achCompleteNum_01")) && (this._achCompleteNum_01 = Number(t)),
        (t = this.getData("achCompleteNum_02")) && (this._achCompleteNum_02 = Number(t)),
        (t = this.getData("achCompleteNum_03")) && (this._achCompleteNum_03 = Number(t)),
        (t = this.getData("achCompleteNum_04")) && (this._achCompleteNum_04 = Number(t)),
        (t = this.getData("achCompleteNum_05")) && (this._achCompleteNum_05 = Number(t)),
        (t = this.getData("achCompleteNum_06")) && (this._achCompleteNum_06 = Number(t)),
        (t = this.getData("achCompleteNum_07")) && (this._achCompleteNum_07 = Number(t)),
        (t = this.getData("achCompleteNum_08")) && (this._achCompleteNum_08 = Number(t)),
        (t = this.getData("achCompleteNum_09")) && (this._achCompleteNum_09 = Number(t)),
        (t = this.getData("achNeedNum_01")) && (this._achNeedNum_01 = Number(t)), (t = this.getData("achNeedNum_02")) && (this._achNeedNum_02 = Number(t)),
        (t = this.getData("achNeedNum_03")) && (this._achNeedNum_03 = Number(t)), (t = this.getData("achNeedNum_04")) && (this._achNeedNum_04 = Number(t)),
        (t = this.getData("achNeedNum_05")) && (this._achNeedNum_05 = Number(t)), (t = this.getData("achNeedNum_06")) && (this._achNeedNum_06 = Number(t)),
        (t = this.getData("achNeedNum_07")) && (this._achNeedNum_07 = Number(t)), (t = this.getData("achNeedNum_08")) && (this._achNeedNum_08 = Number(t)),
        (t = this.getData("achNeedNum_09")) && (this._achNeedNum_09 = Number(t)), (t = this.getData("upgradeNum_01")) && (this._upgradeNum_01 = Number(t)),
        (t = this.getData("upgradeNum_02")) && (this._upgradeNum_02 = Number(t)), (t = this.getData("upgradeNum_03")) && (this._upgradeNum_03 = Number(t)),
        (t = this.getData("upgradeNum_04")) && (this._upgradeNum_04 = Number(t)), (t = this.getData("upgradeNum_05")) && (this._upgradeNum_05 = Number(t)),
        (t = this.getData("upgradeNum_06")) && (this._upgradeNum_06 = Number(t)), (t = this.getData("helpInGame_01")) && (this._helpInGame_01 = "1" == t),
        (t = this.getData("helpInGame_02")) && (this._helpInGame_02 = "1" == t), (t = this.getData("helpInGame_03")) && (this._helpInGame_03 = "1" == t),
        (t = this.getData("helpInGame_04")) && (this._helpInGame_04 = "1" == t), (t = this.getData("helpInGame_05")) && (this._helpInGame_05 = "1" == t),
        (t = this.getData("helpInGame_06")) && (this._helpInGame_06 = "1" == t), (t = this.getData("helpInGame_07")) && (this._helpInGame_07 = "1" == t),
        (t = this.getData("helpInGame_08")) && (this._helpInGame_08 = "1" == t), (t = this.getData("helpInGame_09")) && (this._helpInGame_09 = "1" == t),
        (t = this.getData("signIn_month")) && (this._signIn_month = Number(t)), (t = this.getData("signIn_day")) && (this._signIn_day = Number(t)),
        (t = this.getData("signIn_index")) && (this._signIn_index = Number(t));
        for (var e = 0; e < this._signIn_data.length; e++)
            for (var i = 0; i < this._signIn_data[e].length; i++)(t = this.getData("signIn_data" + e + "_" + i)) && (this._signIn_data[e][i] = Number(t));
    }
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance;
        },
        enumerable: !0,
        configurable: !0
    }), t.init = function() {
        t._instance || (t._instance = new t());
    }, t.prototype.getData = function(i) {
        var jsona = e.localStorage.getItem(t.SAVEDATA_PREFIX + i);
        //if(jsona)
        //console.log((t.SAVEDATA_PREFIX + i)+"------读出5------>" + jsona);
        if ("wztf_waveNow" == t.SAVEDATA_PREFIX + i /*|| "wztf_missionNow" == t.SAVEDATA_PREFIX + i*/ ) {
            if (jsona == null) {
                var obj = {
                    level: 1,
                    level2: 1,
                    type: 4
                };
                uptap.UpdataScore(obj);
            }
            console.log((t.SAVEDATA_PREFIX + i) + "------读出5------>" + jsona);
        }
        return jsona;
    }, t.prototype.setData = function(i, s) {
        e.localStorage.setItem(t.SAVEDATA_PREFIX + i, s);

        if ("wztf_waveNow" == t.SAVEDATA_PREFIX + i /*|| "wztf_missionNow" == t.SAVEDATA_PREFIX + i*/ ) {
            var lv1 = Number(e.localStorage.getItem("wztf_missionNow"));
            var lv2 = Number(e.localStorage.getItem("wztf_waveNow"));
            //升级
            var obj = {
                level: lv1,
                level2: lv2,
                type: 4
            };
            uptap.UpdataScore(obj);
            console.log((t.SAVEDATA_PREFIX + i) + "------存储数据111------>" + s);
        }
        if ("wztf_powerMost" == t.SAVEDATA_PREFIX + i) {
            //合成最大等级
            uptap.UpdataScore({
                "level": s,
                type: 5
            });
            console.log((t.SAVEDATA_PREFIX + i) + "------存储数据2222------>" + s);
        }

    }, t.prototype.saveUserData = function() {
        var t = this.users,
            e = JSON.stringify(t);
        l.instance.userDataTable = e;
    }, t.prototype.reloadUserData = function() {
        try {
            for (var t = l.instance.userDataTable, e = JSON.parse(t), i = [], s = 0; s < e.length; s++) {
                var n = "string" == typeof e[s].method ? e[s].method : "yk",
                    o = "string" == typeof e[s].code ? e[s].code : "0",
                    a = "string" == typeof e[s].pw ? e[s].pw : "0",
                    r = "number" == typeof e[s].lastResult ? e[s].lastResult : 0;
                i.push(new c(n, o, a, r));
            }
            this.users = i;
        } catch (t) {
            this.users = [];
        }
    }, t.prototype.getLastUserData = function() {
        if (!(this.users.length > 0)) return null;
        for (var t = 0; t < this.users.length; t++)
            if (1 == this.users[t]._lastResult) return this.users[t];
    }, t.prototype.setUserData = function(t) {
        var e = JSON.parse(t),
            i = e.method,
            s = e.code,
            n = e.pw;
        if (l.instance.equipmentID = e.deviceID, null != this.getUserDataByMethod(i))
            for (var o = 0; o < this.users.length; o++) this.users[o].identification == i && (this.users[o].ID = s,
                this.users[o].password = n, this.users[o]._lastResult = 1);
        else this.users.push(new c(i, s, n, 1));
        this.saveUserData();
    }, t.prototype.getUserDataByMethod = function(t) {
        if (console.log(this.users), !(this.users.length > 0)) return null;
        for (var e = 0; e < this.users.length; e++)
            if (console.log(this.users[e]), this.users[e].identification == t) return this.users[e];
    }, t.prototype.saveSandTableInGame = function(t) {
        var e = t,
            i = JSON.stringify(e);
        this.sandTable = i;
    }, t.prototype.reloadSandTableInGame = function() {
        try {
            for (var t = this._sandTable, e = JSON.parse(t), i = [], s = 0; s < e.length; s++) {
                var n = "number" == typeof e[s].seat_row ? e[s].seat_row : 0,
                    o = "number" == typeof e[s].seat_column ? e[s].seat_column : 0,
                    a = "number" == typeof e[s].seat_level ? e[s].seat_level : 1;
                i.push(new m(n, o, a));
            }
            return i;
        } catch (t) {
            return [];
        }
    }, t.prototype.getTowerBuyNum = function(t) {
        switch (t) {
            case 1:
                return this.buildTowerNum_01;

            case 2:
                return this.buildTowerNum_02;

            case 3:
                return this.buildTowerNum_03;

            case 4:
                return this.buildTowerNum_04;

            case 5:
                return this.buildTowerNum_05;

            case 6:
                return this.buildTowerNum_06;

            case 7:
                return this.buildTowerNum_07;

            case 8:
                return this.buildTowerNum_08;

            case 9:
                return this.buildTowerNum_09;

            case 10:
                return this.buildTowerNum_10;

            case 11:
                return this.buildTowerNum_11;

            case 12:
                return this.buildTowerNum_12;

            case 13:
                return this.buildTowerNum_13;

            case 14:
                return this.buildTowerNum_14;

            case 15:
                return this.buildTowerNum_15;

            case 16:
                return this.buildTowerNum_16;

            case 17:
                return this.buildTowerNum_17;

            case 18:
                return this.buildTowerNum_18;

            case 19:
                return this.buildTowerNum_19;

            case 20:
                return this.buildTowerNum_20;

            case 21:
                return this.buildTowerNum_21;

            case 22:
                return this.buildTowerNum_22;

            case 23:
                return this.buildTowerNum_23;

            case 24:
                return this.buildTowerNum_24;

            case 25:
                return this.buildTowerNum_25;

            case 26:
                return this.buildTowerNum_26;

            case 27:
                return this.buildTowerNum_27;

            case 28:
                return this.buildTowerNum_28;

            case 29:
                return this.buildTowerNum_29;

            case 30:
                return this.buildTowerNum_30;

            case 31:
                return this.buildTowerNum_31;

            case 32:
                return this.buildTowerNum_32;

            case 33:
                return this.buildTowerNum_33;

            case 34:
                return this.buildTowerNum_34;

            case 35:
                return this.buildTowerNum_35;

            case 36:
                return this.buildTowerNum_36;

            case 37:
                return this.buildTowerNum_37;

            case 38:
                return this.buildTowerNum_38;

            case 39:
                return this.buildTowerNum_39;

            case 40:
                return this.buildTowerNum_40;
        }
        return 0;
    }, t.prototype.setTowerBuyNumOffset = function(t, e) {
        switch (t) {
            case 1:
                this.buildTowerNum_01 += e;
                break;

            case 2:
                this.buildTowerNum_02 += e;
                break;

            case 3:
                this.buildTowerNum_03 += e;
                break;

            case 4:
                this.buildTowerNum_04 += e;
                break;

            case 5:
                this.buildTowerNum_05 += e;
                break;

            case 6:
                this.buildTowerNum_06 += e;
                break;

            case 7:
                this.buildTowerNum_07 += e;
                break;

            case 8:
                this.buildTowerNum_08 += e;
                break;

            case 9:
                this.buildTowerNum_09 += e;
                break;

            case 10:
                this.buildTowerNum_10 += e;
                break;

            case 11:
                this.buildTowerNum_11 += e;
                break;

            case 12:
                this.buildTowerNum_12 += e;
                break;

            case 13:
                this.buildTowerNum_13 += e;
                break;

            case 14:
                this.buildTowerNum_14 += e;
                break;

            case 15:
                this.buildTowerNum_15 += e;
                break;

            case 16:
                this.buildTowerNum_16 += e;
                break;

            case 17:
                this.buildTowerNum_17 += e;
                break;

            case 18:
                this.buildTowerNum_18 += e;
                break;

            case 19:
                this.buildTowerNum_19 += e;
                break;

            case 20:
                this.buildTowerNum_20 += e;
                break;

            case 21:
                this.buildTowerNum_21 += e;
                break;

            case 22:
                this.buildTowerNum_22 += e;
                break;

            case 23:
                this.buildTowerNum_23 += e;
                break;

            case 24:
                this.buildTowerNum_24 += e;
                break;

            case 25:
                this.buildTowerNum_25 += e;
                break;

            case 26:
                this.buildTowerNum_26 += e;
                break;

            case 27:
                this.buildTowerNum_27 += e;
                break;

            case 28:
                this.buildTowerNum_28 += e;
                break;

            case 29:
                this.buildTowerNum_29 += e;
                break;

            case 30:
                this.buildTowerNum_30 += e;
                break;

            case 31:
                this.buildTowerNum_31 += e;
                break;

            case 32:
                this.buildTowerNum_32 += e;
                break;

            case 33:
                this.buildTowerNum_33 += e;
                break;

            case 34:
                this.buildTowerNum_34 += e;
                break;

            case 35:
                this.buildTowerNum_35 += e;
                break;

            case 36:
                this.buildTowerNum_36 += e;
                break;

            case 37:
                this.buildTowerNum_37 += e;
                break;

            case 38:
                this.buildTowerNum_38 += e;
                break;

            case 39:
                this.buildTowerNum_39 += e;
                break;

            case 40:
                this.buildTowerNum_40 += e;
        }
    }, t.prototype.setTowerBuyNum = function(t, e) {
        switch (t) {
            case 1:
                this.buildTowerNum_01 = e;
                break;

            case 2:
                this.buildTowerNum_02 = e;
                break;

            case 3:
                this.buildTowerNum_03 = e;
                break;

            case 4:
                this.buildTowerNum_04 = e;
                break;

            case 5:
                this.buildTowerNum_05 = e;
                break;

            case 6:
                this.buildTowerNum_06 = e;
                break;

            case 7:
                this.buildTowerNum_07 = e;
                break;

            case 8:
                this.buildTowerNum_08 = e;
                break;

            case 9:
                this.buildTowerNum_09 = e;
                break;

            case 10:
                this.buildTowerNum_10 = e;
                break;

            case 11:
                this.buildTowerNum_11 = e;
                break;

            case 12:
                this.buildTowerNum_12 = e;
                break;

            case 13:
                this.buildTowerNum_13 = e;
                break;

            case 14:
                this.buildTowerNum_14 = e;
                break;

            case 15:
                this.buildTowerNum_15 = e;
                break;

            case 16:
                this.buildTowerNum_16 = e;
                break;

            case 17:
                this.buildTowerNum_17 = e;
                break;

            case 18:
                this.buildTowerNum_18 = e;
                break;

            case 19:
                this.buildTowerNum_19 = e;
                break;

            case 20:
                this.buildTowerNum_20 = e;
                break;

            case 21:
                this.buildTowerNum_21 = e;
                break;

            case 22:
                this.buildTowerNum_22 = e;
                break;

            case 23:
                this.buildTowerNum_23 = e;
                break;

            case 24:
                this.buildTowerNum_24 = e;
                break;

            case 25:
                this.buildTowerNum_25 = e;
                break;

            case 26:
                this.buildTowerNum_26 = e;
                break;

            case 27:
                this.buildTowerNum_27 = e;
                break;

            case 28:
                this.buildTowerNum_28 = e;
                break;

            case 29:
                this.buildTowerNum_29 = e;
                break;

            case 30:
                this.buildTowerNum_30 = e;
                break;

            case 31:
                this.buildTowerNum_31 = e;
                break;

            case 32:
                this.buildTowerNum_32 = e;
                break;

            case 33:
                this.buildTowerNum_33 = e;
                break;

            case 34:
                this.buildTowerNum_34 = e;
                break;

            case 35:
                this.buildTowerNum_35 = e;
                break;

            case 36:
                this.buildTowerNum_36 = e;
                break;

            case 37:
                this.buildTowerNum_37 = e;
                break;

            case 38:
                this.buildTowerNum_38 = e;
                break;

            case 39:
                this.buildTowerNum_39 = e;
                break;

            case 40:
                this.buildTowerNum_40 = e;
        }
    }, t.prototype.getTaskDLNum = function(t) {
        switch (t) {
            case 1:
                return this.taskDLNum_01;

            case 2:
                return this.taskDLNum_02;

            case 3:
                return this.taskDLNum_03;
        }
        return 0;
    }, t.prototype.setTaskDLNum = function(t, e) {
        switch (t) {
            case 1:
                this.taskDLNum_01 = e;
                break;

            case 2:
                this.taskDLNum_02 = e;
                break;

            case 3:
                this.taskDLNum_03 = e;
        }
    }, t.prototype.getTaskCompleteNum = function(t) {
        switch (t) {
            case 1:
                return this.taskCompleteNum_01;

            case 2:
                return this.taskCompleteNum_02;

            case 3:
                return this.taskCompleteNum_03;

            case 4:
                return this.taskCompleteNum_04;

            case 5:
                return this.taskCompleteNum_05;

            case 6:
                return this.taskCompleteNum_06;

            case 7:
                return this.taskCompleteNum_07;

            case 8:
                return this.taskCompleteNum_08;

            case 9:
                return this.taskCompleteNum_09;

            case 10:
                return this.taskCompleteNum_10;
        }
        return 0;
    }, t.prototype.setTaskCompleteNumOffset = function(t, e) {
        switch (t) {
            case 1:
                this.taskCompleteNum_01 += e;
                break;

            case 2:
                this.taskCompleteNum_02 += e;
                break;

            case 3:
                this.taskCompleteNum_03 += e;
                break;

            case 4:
                this.taskCompleteNum_04 += e;
                break;

            case 5:
                this.taskCompleteNum_05 += e;
                break;

            case 6:
                this.taskCompleteNum_06 += e;
                break;

            case 7:
                this.taskCompleteNum_07 += e;
                break;

            case 8:
                this.taskCompleteNum_08 += e;
                break;

            case 9:
                this.taskCompleteNum_09 += e;
                break;

            case 10:
                this.taskCompleteNum_10 += e;
        }
        E.getRedOfTask();
    }, t.prototype.setTaskCompleteNum = function(t, e) {
        switch (t) {
            case 1:
                this.taskCompleteNum_01 = e;
                break;

            case 2:
                this.taskCompleteNum_02 = e;
                break;

            case 3:
                this.taskCompleteNum_03 = e;
                break;

            case 4:
                this.taskCompleteNum_04 = e;
                break;

            case 5:
                this.taskCompleteNum_05 = e;
                break;

            case 6:
                this.taskCompleteNum_06 = e;
                break;

            case 7:
                this.taskCompleteNum_07 = e;
                break;

            case 8:
                this.taskCompleteNum_08 = e;
                break;

            case 9:
                this.taskCompleteNum_09 = e;
                break;

            case 10:
                this.taskCompleteNum_10 = e;
        }
        E.getRedOfTask();
    }, t.prototype.getTaskNeedNum = function(t) {
        switch (t) {
            case 1:
                return this.taskNeedNum_01;

            case 2:
                return this.taskNeedNum_02;

            case 3:
                return this.taskNeedNum_03;

            case 4:
                return this.taskNeedNum_04;

            case 5:
                return this.taskNeedNum_05;

            case 6:
                return this.taskNeedNum_06;

            case 7:
                return this.taskNeedNum_07;

            case 8:
                return this.taskNeedNum_08;

            case 9:
                return this.taskNeedNum_09;

            case 10:
                return this.taskNeedNum_10;
        }
        return 0;
    }, t.prototype.setTaskNeedNumOffset = function(t, e) {
        switch (t) {
            case 1:
                this.taskNeedNum_01 += e;
                break;

            case 2:
                this.taskNeedNum_02 += e;
                break;

            case 3:
                this.taskNeedNum_03 += e;
                break;

            case 4:
                this.taskNeedNum_04 += e;
                break;

            case 5:
                this.taskNeedNum_05 += e;
                break;

            case 6:
                this.taskNeedNum_06 += e;
                break;

            case 7:
                this.taskNeedNum_07 += e;
                break;

            case 8:
                this.taskNeedNum_08 += e;
                break;

            case 9:
                this.taskNeedNum_09 += e;
                break;

            case 10:
                this.taskNeedNum_10 += e;
        }
        E.getRedOfTask();
    }, t.prototype.setTaskNeedNum = function(t, e) {
        switch (t) {
            case 1:
                this.taskNeedNum_01 = e;
                break;

            case 2:
                this.taskNeedNum_02 = e;
                break;

            case 3:
                this.taskNeedNum_03 = e;
                break;

            case 4:
                this.taskNeedNum_04 = e;
                break;

            case 5:
                this.taskNeedNum_05 = e;
                break;

            case 6:
                this.taskNeedNum_06 = e;
                break;

            case 7:
                this.taskNeedNum_07 = e;
                break;

            case 8:
                this.taskNeedNum_08 = e;
                break;

            case 9:
                this.taskNeedNum_09 = e;
                break;

            case 10:
                this.taskNeedNum_10 = e;
        }
        E.getRedOfTask();
    }, t.prototype.getAchCompleteNum = function(t) {
        switch (t) {
            case 1:
                return this.achCompleteNum_01;

            case 2:
                return this.achCompleteNum_02;

            case 3:
                return this.achCompleteNum_03;

            case 4:
                return this.achCompleteNum_04;

            case 5:
                return this.achCompleteNum_05;

            case 6:
                return this.achCompleteNum_06;

            case 7:
                return this.achCompleteNum_07;

            case 8:
                return this.achCompleteNum_08;

            case 9:
                return this.achCompleteNum_09;
        }
        return 0;
    }, t.prototype.setAchCompleteNumOffset = function(t, e) {
        switch (t) {
            case 1:
                this.achCompleteNum_01 += e;
                break;

            case 2:
                this.achCompleteNum_02 += e;
                break;

            case 3:
                this.achCompleteNum_03 += e;
                break;

            case 4:
                this.achCompleteNum_04 += e;
                break;

            case 5:
                this.achCompleteNum_05 += e;
                break;

            case 6:
                this.achCompleteNum_06 += e;
                break;

            case 7:
                this.achCompleteNum_07 += e;
                break;

            case 8:
                this.achCompleteNum_08 += e;
                break;

            case 9:
                this.achCompleteNum_09 += e;
        }
        E.getRedOfTask();
    }, t.prototype.setAchCompleteNum = function(t, e) {
        switch (t) {
            case 1:
                this.achCompleteNum_01 = e;
                break;

            case 2:
                this.achCompleteNum_02 = e;
                break;

            case 3:
                this.achCompleteNum_03 = e;
                break;

            case 4:
                this.achCompleteNum_04 = e;
                break;

            case 5:
                this.achCompleteNum_05 = e;
                break;

            case 6:
                this.achCompleteNum_06 = e;
                break;

            case 7:
                this.achCompleteNum_07 = e;
                break;

            case 8:
                this.achCompleteNum_08 = e;
                break;

            case 9:
                this.achCompleteNum_09 = e;
        }
        E.getRedOfTask();
    }, t.prototype.getAchNeedNum = function(t) {
        switch (t) {
            case 1:
                return this.achNeedNum_01;

            case 2:
                return this.achNeedNum_02;

            case 3:
                return this.achNeedNum_03;

            case 4:
                return this.achNeedNum_04;

            case 5:
                return this.achNeedNum_05;

            case 6:
                return this.achNeedNum_06;

            case 7:
                return this.achNeedNum_07;

            case 8:
                return this.achNeedNum_08;

            case 9:
                return this.achNeedNum_09;
        }
        return 0;
    }, t.prototype.setAchNeedNumOffset = function(t, e) {
        switch (t) {
            case 1:
                this.achNeedNum_01 += e;
                break;

            case 2:
                this.achNeedNum_02 += e;
                break;

            case 3:
                this.achNeedNum_03 += e;
                break;

            case 4:
                this.achNeedNum_04 += e;
                break;

            case 5:
                this.achNeedNum_05 += e;
                break;

            case 6:
                this.achNeedNum_06 += e;
                break;

            case 7:
                this.achNeedNum_07 += e;
                break;

            case 8:
                this.achNeedNum_08 += e;
                break;

            case 9:
                this.achNeedNum_09 += e;
        }
        E.getRedOfTask();
    }, t.prototype.setAchNeedNum = function(t, e) {
        switch (t) {
            case 1:
                this.achNeedNum_01 = e;
                break;

            case 2:
                this.achNeedNum_02 = e;
                break;

            case 3:
                this.achNeedNum_03 = e;
                break;

            case 4:
                this.achNeedNum_04 = e;
                break;

            case 5:
                this.achNeedNum_05 = e;
                break;

            case 6:
                this.achNeedNum_06 = e;
                break;

            case 7:
                this.achNeedNum_07 = e;
                break;

            case 8:
                this.achNeedNum_08 = e;
                break;

            case 9:
                this.achNeedNum_09 = e;
        }
        E.getRedOfTask();
    }, t.prototype.getUpgradeNum = function(t) {
        switch (t) {
            case 1:
                return this.upgradeNum_01;

            case 2:
                return this.upgradeNum_02;

            case 3:
                return this.upgradeNum_03;

            case 4:
                return this.upgradeNum_04;

            case 5:
                return this.upgradeNum_05;

            case 6:
                return this.upgradeNum_06;
        }
        return 0;
    }, t.prototype.setUpgradeNumOffset = function(t, e) {
        switch (t) {
            case 1:
                this.upgradeNum_01 += e, T.buildMax = E.getUpGradeNum(1);
                break;

            case 2:
                this.upgradeNum_02 += e;
                break;

            case 3:
                this.upgradeNum_03 += e;
                break;

            case 4:
                this.upgradeNum_04 += e;
                break;

            case 5:
                this.upgradeNum_05 += e;
                break;

            case 6:
                this.upgradeNum_06 += e;
        }
        this.achNeedNum_07 = this.upgradeNum_01 + this.upgradeNum_02 + this.upgradeNum_03 + this.upgradeNum_04 + this.upgradeNum_05 + this.upgradeNum_06;
    }, t.prototype.setUpgradeNum = function(t, e) {
        switch (t) {
            case 1:
                this.upgradeNum_01 = e, T.buildMax = E.getUpGradeNum(1);
                break;

            case 2:
                this.upgradeNum_02 = e;
                break;

            case 3:
                this.upgradeNum_03 = e;
                break;

            case 4:
                this.upgradeNum_04 = e;
                break;

            case 5:
                this.upgradeNum_05 = e;
                break;

            case 6:
                this.upgradeNum_06 = e;
        }
        this.achNeedNum_07 = this.upgradeNum_01 + this.upgradeNum_02 + this.upgradeNum_03 + this.upgradeNum_04 + this.upgradeNum_05 + this.upgradeNum_06;
    }, Object.defineProperty(t.prototype, "fristTime", {
        get: function() {
            return this._fristTime;
        },
        set: function(t) {
            this._fristTime = t, this.setData("fristTime", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPass_1_1", {
        get: function() {
            return this._fristPass_1_1;
        },
        set: function(t) {
            this._fristPass_1_1 = t, this.setData("fristPass_1_1", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPass_1_2", {
        get: function() {
            return this._fristPass_1_2;
        },
        set: function(t) {
            this._fristPass_1_2 = t, this.setData("fristPass_1_2", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPass_1_3", {
        get: function() {
            return this._fristPass_1_3;
        },
        set: function(t) {
            this._fristPass_1_3 = t, this.setData("fristPass_1_3", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPass_3_1", {
        get: function() {
            return this._fristPass_3_1;
        },
        set: function(t) {
            this._fristPass_3_1 = t, this.setData("fristPass_3_1", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPass_4_1", {
        get: function() {
            return this._fristPass_4_1;
        },
        set: function(t) {
            this._fristPass_4_1 = t, this.setData("fristPass_4_1", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPass_5_1", {
        get: function() {
            return this._fristPass_5_1;
        },
        set: function(t) {
            this._fristPass_5_1 = t, this.setData("fristPass_5_1", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPassOneDay_1_1", {
        get: function() {
            return this._fristPassOneDay_1_1;
        },
        set: function(t) {
            this._fristPassOneDay_1_1 = t, this.setData("fristPassOneDay_1_1", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPassOneDay_1_2", {
        get: function() {
            return this._fristPassOneDay_1_2;
        },
        set: function(t) {
            this._fristPassOneDay_1_2 = t, this.setData("fristPassOneDay_1_2", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPassOneDay_1_3", {
        get: function() {
            return this._fristPassOneDay_1_3;
        },
        set: function(t) {
            this._fristPassOneDay_1_3 = t, this.setData("fristPassOneDay_1_3", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPassOneDay_3_1", {
        get: function() {
            return this._fristPassOneDay_3_1;
        },
        set: function(t) {
            this._fristPassOneDay_3_1 = t, this.setData("fristPassOneDay_3_1", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPassOneDay_4_1", {
        get: function() {
            return this._fristPassOneDay_4_1;
        },
        set: function(t) {
            this._fristPassOneDay_4_1 = t, this.setData("fristPassOneDay_4_1", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fristPassOneDay_5_1", {
        get: function() {
            return this._fristPassOneDay_5_1;
        },
        set: function(t) {
            this._fristPassOneDay_5_1 = t, this.setData("fristPassOneDay_5_1", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskDLShow", {
        get: function() {
            return this._taskDLShow;
        },
        set: function(t) {
            this._taskDLShow = t, this.setData("taskDLShow", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "dayTime", {
        get: function() {
            return this._dayTime;
        },
        set: function(t) {
            this._dayTime = t, this.setData("dayTime", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "offLineTime", {
        get: function() {
            return this._offLineTime;
        },
        set: function(t) {
            this._offLineTime = t, this.setData("offLineTime", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isBGM", {
        get: function() {
            return this._isBGM;
        },
        set: function(t) {
            this._isBGM = t, this.setData("isBGM", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isSE", {
        get: function() {
            return this._isSE;
        },
        set: function(t) {
            this._isSE = t, this.setData("isSE", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "powerLast", {
        get: function() {
            return this._powerLast;
        },
        set: function(t) {
            this._powerLast = t, this.setData("powerLast", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "powerNow", {
        get: function() {
            return this._powerNow;
        },
        set: function(t) {
            this._powerNow = t, this.setData("powerNow", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "powerMost", {
        get: function() {
            return this._powerMost;
        },
        set: function(t) {
            this._powerMost = t, this.setData("powerMost", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "gold", {
        get: function() {
            return Number(this._gold);
        },
        set: function(t) {
            this._gold = Number(t), this.setData("gold", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "diamond", {
        get: function() {
            return this._diamond;
        },
        set: function(t) {
            this._diamond = t, this.setData("diamond", t.toString()), E.getRedOfUpGrad();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "hammer", {
        get: function() {
            return this._hammer;
        },
        set: function(t) {
            this._hammer = t, this.setData("hammer", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "autoBuild", {
        get: function() {
            return this._autoBuild;
        },
        set: function(t) {
            this._autoBuild = t, this.setData("autoBuild", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "getDiamondToday", {
        get: function() {
            return this._getDiamondToday;
        },
        set: function(t) {
            this._getDiamondToday = t, this.setData("getDiamondToday", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "getGoldToday", {
        get: function() {
            return this._getGoldToday;
        },
        set: function(t) {
            this._getGoldToday = t, this.setData("getGoldToday", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "getHammerToday", {
        get: function() {
            return this._getHammerToday;
        },
        set: function(t) {
            this._getHammerToday = t, this.setData("getHammerToday", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "getAutoBuildToday", {
        get: function() {
            return this._getAutoBuildToday;
        },
        set: function(t) {
            this._getAutoBuildToday = t, this.setData("getAutoBuildToday", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "getTowerToday", {
        get: function() {
            return this._getTowerToday;
        },
        set: function(t) {
            this._getTowerToday = t, this.setData("getTowerToday", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isContinue", {
        get: function() {
            return this._isContinue;
        },
        set: function(t) {
            this._isContinue = t, this.setData("isContinue", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "waveNow", {
        get: function() {
            return this._waveNow;
        },
        set: function(t) {
            this._waveNow = t, this.setData("waveNow", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "missionNow", {
        get: function() {
            return this._missionNow;
        },
        set: function(t) {
            this._missionNow = t, this.setData("missionNow", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "powerForEnemy", {
        get: function() {
            return this._powerForEnemy;
        },
        set: function(t) {
            this._powerForEnemy = t, this.setData("powerForEnemy", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "sandTable", {
        get: function() {
            return this.sandTable;
        },
        set: function(t) {
            this._sandTable = t, this.setData("sandTable", t);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_01", {
        get: function() {
            return this._buildTowerNum_01;
        },
        set: function(t) {
            this._buildTowerNum_01 = t, this.setData("buildTowerNum_01", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_02", {
        get: function() {
            return this._buildTowerNum_02;
        },
        set: function(t) {
            this._buildTowerNum_02 = t, this.setData("buildTowerNum_02", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_03", {
        get: function() {
            return this._buildTowerNum_03;
        },
        set: function(t) {
            this._buildTowerNum_03 = t, this.setData("buildTowerNum_03", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_04", {
        get: function() {
            return this._buildTowerNum_04;
        },
        set: function(t) {
            this._buildTowerNum_04 = t, this.setData("buildTowerNum_04", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_05", {
        get: function() {
            return this._buildTowerNum_05;
        },
        set: function(t) {
            this._buildTowerNum_05 = t, this.setData("buildTowerNum_05", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_06", {
        get: function() {
            return this._buildTowerNum_06;
        },
        set: function(t) {
            this._buildTowerNum_06 = t, this.setData("buildTowerNum_06", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_07", {
        get: function() {
            return this._buildTowerNum_07;
        },
        set: function(t) {
            this._buildTowerNum_07 = t, this.setData("buildTowerNum_07", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_08", {
        get: function() {
            return this._buildTowerNum_08;
        },
        set: function(t) {
            this._buildTowerNum_08 = t, this.setData("buildTowerNum_08", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_09", {
        get: function() {
            return this._buildTowerNum_09;
        },
        set: function(t) {
            this._buildTowerNum_09 = t, this.setData("buildTowerNum_09", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_10", {
        get: function() {
            return this._buildTowerNum_10;
        },
        set: function(t) {
            this._buildTowerNum_10 = t, this.setData("buildTowerNum_10", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_11", {
        get: function() {
            return this._buildTowerNum_11;
        },
        set: function(t) {
            this._buildTowerNum_11 = t, this.setData("buildTowerNum_11", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_12", {
        get: function() {
            return this._buildTowerNum_12;
        },
        set: function(t) {
            this._buildTowerNum_12 = t, this.setData("buildTowerNum_12", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_13", {
        get: function() {
            return this._buildTowerNum_13;
        },
        set: function(t) {
            this._buildTowerNum_13 = t, this.setData("buildTowerNum_13", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_14", {
        get: function() {
            return this._buildTowerNum_14;
        },
        set: function(t) {
            this._buildTowerNum_14 = t, this.setData("buildTowerNum_14", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_15", {
        get: function() {
            return this._buildTowerNum_15;
        },
        set: function(t) {
            this._buildTowerNum_15 = t, this.setData("buildTowerNum_15", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_16", {
        get: function() {
            return this._buildTowerNum_16;
        },
        set: function(t) {
            this._buildTowerNum_16 = t, this.setData("buildTowerNum_16", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_17", {
        get: function() {
            return this._buildTowerNum_17;
        },
        set: function(t) {
            this._buildTowerNum_17 = t, this.setData("buildTowerNum_17", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_18", {
        get: function() {
            return this._buildTowerNum_18;
        },
        set: function(t) {
            this._buildTowerNum_18 = t, this.setData("buildTowerNum_18", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_19", {
        get: function() {
            return this._buildTowerNum_19;
        },
        set: function(t) {
            this._buildTowerNum_19 = t, this.setData("buildTowerNum_19", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_20", {
        get: function() {
            return this._buildTowerNum_20;
        },
        set: function(t) {
            this._buildTowerNum_20 = t, this.setData("buildTowerNum_20", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_21", {
        get: function() {
            return this._buildTowerNum_21;
        },
        set: function(t) {
            this._buildTowerNum_21 = t, this.setData("buildTowerNum_21", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_22", {
        get: function() {
            return this._buildTowerNum_22;
        },
        set: function(t) {
            this._buildTowerNum_22 = t, this.setData("buildTowerNum_22", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_23", {
        get: function() {
            return this._buildTowerNum_23;
        },
        set: function(t) {
            this._buildTowerNum_23 = t, this.setData("buildTowerNum_23", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_24", {
        get: function() {
            return this._buildTowerNum_24;
        },
        set: function(t) {
            this._buildTowerNum_24 = t, this.setData("buildTowerNum_24", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_25", {
        get: function() {
            return this._buildTowerNum_25;
        },
        set: function(t) {
            this._buildTowerNum_25 = t, this.setData("buildTowerNum_25", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_26", {
        get: function() {
            return this._buildTowerNum_26;
        },
        set: function(t) {
            this._buildTowerNum_26 = t, this.setData("buildTowerNum_26", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_27", {
        get: function() {
            return this._buildTowerNum_27;
        },
        set: function(t) {
            this._buildTowerNum_27 = t, this.setData("buildTowerNum_27", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_28", {
        get: function() {
            return this._buildTowerNum_28;
        },
        set: function(t) {
            this._buildTowerNum_28 = t, this.setData("buildTowerNum_28", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_29", {
        get: function() {
            return this._buildTowerNum_29;
        },
        set: function(t) {
            this._buildTowerNum_29 = t, this.setData("buildTowerNum_29", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_30", {
        get: function() {
            return this._buildTowerNum_30;
        },
        set: function(t) {
            this._buildTowerNum_30 = t, this.setData("buildTowerNum_30", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_31", {
        get: function() {
            return this._buildTowerNum_31;
        },
        set: function(t) {
            this._buildTowerNum_31 = t, this.setData("buildTowerNum_31", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_32", {
        get: function() {
            return this._buildTowerNum_32;
        },
        set: function(t) {
            this._buildTowerNum_32 = t, this.setData("buildTowerNum_32", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_33", {
        get: function() {
            return this._buildTowerNum_33;
        },
        set: function(t) {
            this._buildTowerNum_33 = t, this.setData("buildTowerNum_33", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_34", {
        get: function() {
            return this._buildTowerNum_34;
        },
        set: function(t) {
            this._buildTowerNum_34 = t, this.setData("buildTowerNum_34", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_35", {
        get: function() {
            return this._buildTowerNum_35;
        },
        set: function(t) {
            this._buildTowerNum_35 = t, this.setData("buildTowerNum_35", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_36", {
        get: function() {
            return this._buildTowerNum_36;
        },
        set: function(t) {
            this._buildTowerNum_36 = t, this.setData("buildTowerNum_36", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_37", {
        get: function() {
            return this._buildTowerNum_37;
        },
        set: function(t) {
            this._buildTowerNum_37 = t, this.setData("buildTowerNum_37", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_38", {
        get: function() {
            return this._buildTowerNum_38;
        },
        set: function(t) {
            this._buildTowerNum_38 = t, this.setData("buildTowerNum_38", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_39", {
        get: function() {
            return this._buildTowerNum_39;
        },
        set: function(t) {
            this._buildTowerNum_39 = t, this.setData("buildTowerNum_39", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "buildTowerNum_40", {
        get: function() {
            return this._buildTowerNum_40;
        },
        set: function(t) {
            this._buildTowerNum_40 = t, this.setData("buildTowerNum_40", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskDLNum_01", {
        get: function() {
            return this._taskDLNum_01;
        },
        set: function(t) {
            this._taskDLNum_01 = t, this.setData("taskDLNum_01", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskDLNum_02", {
        get: function() {
            return this._taskDLNum_02;
        },
        set: function(t) {
            this._taskDLNum_02 = t, this.setData("taskDLNum_02", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskDLNum_03", {
        get: function() {
            return this._taskDLNum_03;
        },
        set: function(t) {
            this._taskDLNum_03 = t, this.setData("taskDLNum_03", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_01", {
        get: function() {
            return this._taskCompleteNum_01;
        },
        set: function(t) {
            this._taskCompleteNum_01 = t, this.setData("taskCompleteNum_01", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_02", {
        get: function() {
            return this._taskCompleteNum_02;
        },
        set: function(t) {
            this._taskCompleteNum_02 = t, this.setData("taskCompleteNum_02", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_03", {
        get: function() {
            return this._taskCompleteNum_03;
        },
        set: function(t) {
            this._taskCompleteNum_03 = t, this.setData("taskCompleteNum_03", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_04", {
        get: function() {
            return this._taskCompleteNum_04;
        },
        set: function(t) {
            this._taskCompleteNum_04 = t, this.setData("taskCompleteNum_04", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_05", {
        get: function() {
            return this._taskCompleteNum_05;
        },
        set: function(t) {
            this._taskCompleteNum_05 = t, this.setData("taskCompleteNum_05", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_06", {
        get: function() {
            return this._taskCompleteNum_06;
        },
        set: function(t) {
            this._taskCompleteNum_06 = t, this.setData("taskCompleteNum_06", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_07", {
        get: function() {
            return this._taskCompleteNum_07;
        },
        set: function(t) {
            this._taskCompleteNum_07 = t, this.setData("taskCompleteNum_07", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_08", {
        get: function() {
            return this._taskCompleteNum_08;
        },
        set: function(t) {
            this._taskCompleteNum_08 = t, this.setData("taskCompleteNum_08", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_09", {
        get: function() {
            return this._taskCompleteNum_09;
        },
        set: function(t) {
            this._taskCompleteNum_09 = t, this.setData("taskCompleteNum_09", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskCompleteNum_10", {
        get: function() {
            return this._taskCompleteNum_10;
        },
        set: function(t) {
            this._taskCompleteNum_10 = t, this.setData("taskCompleteNum_10", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_01", {
        get: function() {
            return this._taskNeedNum_01;
        },
        set: function(t) {
            this._taskNeedNum_01 = t, this.setData("taskNeedNum_01", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_02", {
        get: function() {
            return this._taskNeedNum_02;
        },
        set: function(t) {
            this._taskNeedNum_02 = t, this.setData("taskNeedNum_02", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_03", {
        get: function() {
            return this._taskNeedNum_03;
        },
        set: function(t) {
            this._taskNeedNum_03 = t, this.setData("taskNeedNum_03", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_04", {
        get: function() {
            return this._taskNeedNum_04;
        },
        set: function(t) {
            this._taskNeedNum_04 = t, this.setData("taskNeedNum_04", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_05", {
        get: function() {
            return this._taskNeedNum_05;
        },
        set: function(t) {
            this._taskNeedNum_05 = t, this.setData("taskNeedNum_05", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_06", {
        get: function() {
            return this._taskNeedNum_06;
        },
        set: function(t) {
            this._taskNeedNum_06 = t, this.setData("taskNeedNum_06", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_07", {
        get: function() {
            return this._taskNeedNum_07;
        },
        set: function(t) {
            this._taskNeedNum_07 = t, this.setData("taskNeedNum_07", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_08", {
        get: function() {
            return this._taskNeedNum_08;
        },
        set: function(t) {
            this._taskNeedNum_08 = t, this.setData("taskNeedNum_08", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_09", {
        get: function() {
            return this._taskNeedNum_09;
        },
        set: function(t) {
            this._taskNeedNum_09 = t, this.setData("taskNeedNum_09", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "taskNeedNum_10", {
        get: function() {
            return this._taskNeedNum_10;
        },
        set: function(t) {
            this._taskNeedNum_10 = t, this.setData("taskNeedNum_10", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achCompleteNum_01", {
        get: function() {
            return this._achCompleteNum_01;
        },
        set: function(t) {
            this._achCompleteNum_01 = t, this.setData("achCompleteNum_01", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achCompleteNum_02", {
        get: function() {
            return this._achCompleteNum_02;
        },
        set: function(t) {
            this._achCompleteNum_02 = t, this.setData("achCompleteNum_02", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achCompleteNum_03", {
        get: function() {
            return this._achCompleteNum_03;
        },
        set: function(t) {
            this._achCompleteNum_03 = t, this.setData("achCompleteNum_03", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achCompleteNum_04", {
        get: function() {
            return this._achCompleteNum_04;
        },
        set: function(t) {
            this._achCompleteNum_04 = t, this.setData("achCompleteNum_04", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achCompleteNum_05", {
        get: function() {
            return this._achCompleteNum_05;
        },
        set: function(t) {
            this._achCompleteNum_05 = t, this.setData("achCompleteNum_05", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achCompleteNum_06", {
        get: function() {
            return this._achCompleteNum_06;
        },
        set: function(t) {
            this._achCompleteNum_06 = t, this.setData("achCompleteNum_06", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achCompleteNum_07", {
        get: function() {
            return this._achCompleteNum_07;
        },
        set: function(t) {
            this._achCompleteNum_07 = t, this.setData("achCompleteNum_07", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achCompleteNum_08", {
        get: function() {
            return this._achCompleteNum_08;
        },
        set: function(t) {
            this._achCompleteNum_08 = t, this.setData("achCompleteNum_08", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achCompleteNum_09", {
        get: function() {
            return this._achCompleteNum_09;
        },
        set: function(t) {
            this._achCompleteNum_09 = t, this.setData("achCompleteNum_09", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achNeedNum_01", {
        get: function() {
            return this._achNeedNum_01;
        },
        set: function(t) {
            this._achNeedNum_01 = t, this.setData("achNeedNum_01", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achNeedNum_02", {
        get: function() {
            return this._achNeedNum_02;
        },
        set: function(t) {
            this._achNeedNum_02 = t, this.setData("achNeedNum_02", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achNeedNum_03", {
        get: function() {
            return this._achNeedNum_03;
        },
        set: function(t) {
            this._achNeedNum_03 = t, this.setData("achNeedNum_03", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achNeedNum_04", {
        get: function() {
            return this._achNeedNum_04;
        },
        set: function(t) {
            this._achNeedNum_04 = t, this.setData("achNeedNum_04", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achNeedNum_05", {
        get: function() {
            return this._achNeedNum_05;
        },
        set: function(t) {
            this._achNeedNum_05 = t, this.setData("achNeedNum_05", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achNeedNum_06", {
        get: function() {
            return this._achNeedNum_06;
        },
        set: function(t) {
            this._achNeedNum_06 = t, this.setData("achNeedNum_06", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achNeedNum_07", {
        get: function() {
            return this._achNeedNum_07;
        },
        set: function(t) {
            this._achNeedNum_07 = t, this.setData("achNeedNum_07", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achNeedNum_08", {
        get: function() {
            return this._achNeedNum_08;
        },
        set: function(t) {
            this._achNeedNum_08 = t, this.setData("achNeedNum_08", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "achNeedNum_09", {
        get: function() {
            return this._achNeedNum_09;
        },
        set: function(t) {
            this._achNeedNum_09 = t, this.setData("achNeedNum_09", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "upgradeNum_01", {
        get: function() {
            return this._upgradeNum_01;
        },
        set: function(t) {
            this._upgradeNum_01 = t, this.setData("upgradeNum_01", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "upgradeNum_02", {
        get: function() {
            return this._upgradeNum_02;
        },
        set: function(t) {
            this._upgradeNum_02 = t, this.setData("upgradeNum_02", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "upgradeNum_03", {
        get: function() {
            return this._upgradeNum_03;
        },
        set: function(t) {
            this._upgradeNum_03 = t, this.setData("upgradeNum_03", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "upgradeNum_04", {
        get: function() {
            return this._upgradeNum_04;
        },
        set: function(t) {
            this._upgradeNum_04 = t, this.setData("upgradeNum_04", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "upgradeNum_05", {
        get: function() {
            return this._upgradeNum_05;
        },
        set: function(t) {
            this._upgradeNum_05 = t, this.setData("upgradeNum_05", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "upgradeNum_06", {
        get: function() {
            return this._upgradeNum_06;
        },
        set: function(t) {
            this._upgradeNum_06 = t, this.setData("upgradeNum_06", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "helpInGame_01", {
        get: function() {
            return this._helpInGame_01;
        },
        set: function(t) {
            this._helpInGame_01 = t, this.setData("helpInGame_01", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "helpInGame_02", {
        get: function() {
            return this._helpInGame_02;
        },
        set: function(t) {
            this._helpInGame_02 = t, this.setData("helpInGame_02", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "helpInGame_03", {
        get: function() {
            return this._helpInGame_03;
        },
        set: function(t) {
            this._helpInGame_03 = t, this.setData("helpInGame_03", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "helpInGame_04", {
        get: function() {
            return this._helpInGame_04;
        },
        set: function(t) {
            this._helpInGame_04 = t, this.setData("helpInGame_04", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "helpInGame_05", {
        get: function() {
            return this._helpInGame_05;
        },
        set: function(t) {
            this._helpInGame_05 = t, this.setData("helpInGame_05", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "helpInGame_06", {
        get: function() {
            return this._helpInGame_06;
        },
        set: function(t) {
            this._helpInGame_06 = t, this.setData("helpInGame_06", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "helpInGame_07", {
        get: function() {
            return this._helpInGame_07;
        },
        set: function(t) {
            this._helpInGame_07 = t, this.setData("helpInGame_07", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "helpInGame_08", {
        get: function() {
            return this._helpInGame_08;
        },
        set: function(t) {
            this._helpInGame_08 = t, this.setData("helpInGame_08", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "helpInGame_09", {
        get: function() {
            return this._helpInGame_09;
        },
        set: function(t) {
            this._helpInGame_09 = t, this.setData("helpInGame_09", t ? "1" : "0");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "signIn_month", {
        get: function() {
            return this._signIn_month;
        },
        set: function(t) {
            this._signIn_month = t, this.setData("signIn_month", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "signIn_day", {
        get: function() {
            return this._signIn_day;
        },
        set: function(t) {
            this._signIn_day = t, this.setData("signIn_day", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "signIn_index", {
        get: function() {
            return this._signIn_index;
        },
        set: function(t) {
            this._signIn_index = t, this.setData("signIn_index", t.toString());
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getSignInData = function(t, e) {
        return this._signIn_data[t][e];
    }, t.prototype.setSignInData = function(t, e, i) {
        this._signIn_data[t][e] = i, this.setData("signIn_data" + t + "_" + e, i.toString());
    }, t._instance = null, t.SAVEDATA_PREFIX = "wztf_", t;
}();

i(b.prototype, "MySaveData");

var f = function() {
    function t() {}
    return t.share = function(t, e, i) {
        return void 0 === e && (e = null), void 0 === i && (i = null), n(this, void 0, void 0, function() {
            var s;
            return o(this, function(n) {
                switch (n.label) {
                    case 0:
                        switch (this.shareType = "", this.shareID = "", this.index = t, t) {
                            case 0:
                                this.shareType = "离线奖励", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 1:
                                this.shareType = "任务界面二次领取", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 2:
                                this.shareType = "Diamond Supply", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 3:
                                this.shareType = "金币补给", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 4:
                                this.shareType = "炮台解锁二次领取", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 5:
                                this.shareType = "BOSS挑战成功二次领取", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 6:
                                this.shareType = "炮台补给", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 7:
                                this.shareType = "商店获得炮台", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 8:
                                this.shareType = "空投二次领取", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 9:
                                this.shareType = "掉落宝箱二次领取", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 10:
                                this.shareType = "获取免费炮台", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 11:
                                this.shareType = "自动合成补给", this.shareID = T.buildShareID(this.shareType);
                                break;

                            case 12:
                                this.shareType = "每日登录", this.shareID = T.buildShareID(this.shareType);
                        }
                        return this._succeessCallback = e, this._failCallback = i, T.share = !0, [4, platform.share(void 0, void 0, l.instance.userID, this.shareType, this.shareID, 0, 0)];

                    case 1:
                        return s = n.sent(), [2];
                }
            });
        });
    }, t.onShowLogin = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return o(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, platform.onShow()];

                    case 1:
                        return (t = e.sent()).errStr, [2];
                }
            });
        });
    }, t.onShowRegister = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return o(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, platform.onShow()];

                    case 1:
                        return (t = e.sent()).errStr ? [2] : (t.scene, [2]);
                }
            });
        });
    }, t.onSuccess = function() {
        this.index >= 0 && platform.sendStatistics("分享事件", this.shareType + "成功"), this._succeessCallback && (this._succeessCallback(),
            this._succeessCallback = null, this._failCallback = null);
    }, t.onFail = function() {
        this.index >= 0 && platform.sendStatistics("分享事件", this.shareType + "失败"), this._failCallback ? (this._failCallback(),
            this._succeessCallback = null, this._failCallback = null) : (this._succeessCallback = null,
            this._failCallback = null);
    }, t.jumpApp = function(t, e, i, s) {
        return void 0 === i && (i = null), void 0 === s && (s = null), n(this, void 0, void 0, function() {
            var n;
            return o(this, function(o) {
                switch (o.label) {
                    case 0:
                        return this.index = -1, this._succeessCallback = i, this._failCallback = s, T.jumpDL = !0, [4, platform.jumpApp(t, e)];

                    case 1:
                        return n = o.sent(), [2];
                }
            });
        });
    }, t._succeessCallback = null, t._failCallback = null, t;
}();

i(f.prototype, "MyWX");

var w = function() {
    function t() {
        this.adsHeight = 165, this.isShowADs = true, this.isShowBanner = !0, this.isLogin = !1,
            this.isShowRank = !1, this.wxLoginInfo = null;
    }
    return t.prototype.getJumpData = function(t) {
        switch (t) {
            case "box":
            case "morepage":
            case "pushapp":
            case "banner":
                return [];

            case "recommender":
            case "moregame":
                return [];

            case "topapp":
                return [];
        }
        return null;
    }, t.prototype.login = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return this.adsHeight = 150, [2, void 0];
            });
        });
    }, t.prototype.showAuthorizationButton = function(t) {
        return void 0 === t && (t = 0), n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, void 0];
            });
        });
    }, t.prototype.share = function(t, e, i, s, a, r, h) {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    success: !0
                }];
            });
        });
    }, t.prototype.jumpApp = function(t, e) {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    success: !1
                }];
            });
        });
    }, t.prototype.lookADs = function(t, e) {
        return void 0 === e && (e = "0"), n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    success: !0
                }];
            });
        });
    }, t.prototype.sendRank = function(t) {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    success: !0
                }];
            });
        });
    }, t.prototype.onShow = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    errStr: "测试用，观看失败"
                }];
            });
        });
    }, t.prototype.showBanner = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    errStr: "测试用，观看失败"
                }];
            });
        });
    }, t.prototype.closeBanner = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    errStr: "测试用，观看失败"
                }];
            });
        });
    }, t.prototype.showAuthor = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    errStr: "测试用，观看失败"
                }];
            });
        });
    }, t.prototype.closeAuthor = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    errStr: "测试用，观看失败"
                }];
            });
        });
    }, t.prototype.showQuan = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    errStr: "测试用，观看失败"
                }];
            });
        });
    }, t.prototype.closeQuan = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    errStr: "测试用，观看失败"
                }];
            });
        });
    }, t.prototype.setBannerBase = function(t) {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    success: !0
                }];
            });
        });
    }, t.prototype.setShareBase = function(t) {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {
                    success: !0
                }];
            });
        });
    }, t.prototype.sendStatistics = function(t, e) {}, t.prototype.getWH = function() {
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        };
    }, t.prototype.setCallback = function(t, e) {
        document.addEventListener("visibilitychange", function() {
            document.hidden ? e() : t();
        });
    }, t.prototype.showRank = function(t) {
        D.log("展示排行榜");
    }, t.prototype.closeRank = function() {
        D.log("关闭排行榜");
    }, t.prototype.wxLogin = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, ""];
            });
        });
    }, t.prototype.setRelease = function() {
        a.BUILD_TYPE = "debug"; //"release";//"debug";
    }, t.prototype.loadSubpackage = function(t) {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {}];
            });
        });
    }, t.prototype.loadSDK = function() {
        return n(this, void 0, void 0, function() {
            return o(this, function(t) {
                return [2, {}];
            });
        });
    }, t.prototype.showInterstitialAd = function(t) {}, t;
}();

i(w.prototype, "DebugPlatform", ["Platform"]), window.platform || (window.platform = new w());

var y = function() {
    function t() {}
    return t.prototype.getTheme = function(t, i, s, n) {
        function o(e) {
            e.resItem.url == t && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null),
                s.call(n));
        }
        var a = this;
        if ("undefined" != typeof generateEUI) e.callLater(function() {
            i.call(n, generateEUI);
        }, this);
        else if ("undefined" != typeof generateEUI2) RES.getResByUrl("resource/gameEui.json", function(t, s) {
            window.JSONParseClass.setData(t), e.callLater(function() {
                i.call(n, generateEUI2);
            }, a);
        }, this, RES.ResourceItem.TYPE_JSON);
        else if ("undefined" != typeof generateJSON)
            if (t.indexOf(".exml") > -1) {
                var r = t.split("/");
                r.pop();
                var h = r.join("/") + "_EUI.json";
                generateJSON.paths[t] ? e.callLater(function() {
                    i.call(n, generateJSON.paths[t]);
                }, this) : RES.getResByUrl(h, function(s) {
                    window.JSONParseClass.setData(s), e.callLater(function() {
                        i.call(n, generateJSON.paths[t]);
                    }, a);
                }, this, RES.ResourceItem.TYPE_JSON);
            } else e.callLater(function() {
                i.call(n, generateJSON);
            }, this);
        else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null),
            RES.getResByUrl(t, function(t) {
                i.call(n, t);
            }, this, RES.ResourceItem.TYPE_TEXT);
    }, t;
}();

i(y.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);

var T = function() {
    function t() {}
    return Object.defineProperty(t, "isStop", {
            get: function() {
                return this._isStop;
            },
            enumerable: !0,
            configurable: !0
        }), t.stopGame = function() {
            this._isStop = !0, ht.closeAuthor(), ht.closeQuan();
        }, t.resumeGame = function() {
            this._isStop = !1, ht.showAuthor(), ht.showQuan();
        }, t.buildShareID = function(t) {
            return l.instance.userID + D.getNowTime() + t + D.randomStr(1);
        }, t.doubleToString = function(t) {
            if (0 == t) return "0";
            if (0 > t) return "-" + this.doubleToString(-t);
            for (var e = t, i = 0; e >= 1e3;) e /= 1e3, ++i;
            return 999.9 == (e = 0 == i ? D.roundDown(e) : D.round(10 * e) / 10) ? "1" + this.NUMBER_SUFFIX[i + 1] : e.toString() + this.NUMBER_SUFFIX[i];
        }, t.CLOSE_UP = 20, t.UP_TIME = 1, t.BLACK_TIME = 3, t.ADS = 0, t.SRC_H = 1136,
        t.ADS_H = 224, t.isWX = !1, t.isShowRank = !1, t.buildMax = 5, t.goldOfTask = 5,
        t._isStop = !1, t.test = !1, t.share = !1, t.jumpDL = !1, t.upNum = 0, t.isBannerShow = !1,
        t.isNewPlayer = !1, t.isAddOfflineReward = !1, t.offLineTime = 0, t.isSkill_0 = !1,
        t.isSkill_1 = !1, t.isSkill_2 = !1, t.isSkill_3 = !1, t.yoffset = 0, t.xoffset = 0,
        t.ytemp = 0, t.bannerNum = 0, t.bannerChange = !1, t.ISONLINE = "debug" != a.BUILD_TYPE,
        t.isDangerousArea = !0, t.NUMBER_SUFFIX = ["", "K", "M", "B", "T", "Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj"],
        t;
}();

i(T.prototype, "GameData");

var N = function(t) {
    function i(i, s, n, o) {
        void 0 === o && (o = 0);
        var a = t.call(this) || this;
        return a.radius = 0, a.color = 0, a.time = 0, a.runTime = 0, a.alphaNum = 0, a._isMove = !1,
            a.alphaNum = s, a.radius = i, a.color = o, a.time = n, a.shape = new e.Shape(),
            a.shape.graphics.clear(), a.shape.graphics.beginFill(a.color, 1), a.shape.graphics.moveTo(0, 0),
            a.shape.graphics.lineTo(a.radius, 0), a.shape.graphics.drawArc(0, 0, a.radius, -90 * Math.PI / 180, 270 * Math.PI / 180, !0),
            a.shape.graphics.lineTo(0, 0), a.shape.graphics.endFill(), a.shape.alpha = a.alphaNum,
            a.addChild(a.shape), a.shape.x = a.radius, a.shape.y = a.radius, a._isMove = !1,
            a.visible = !1, D.setAnchor(a), a;
    }
    return s(i, t), Object.defineProperty(i.prototype, "isMove", {
        get: function() {
            return this._isMove;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.run = function(t) {
        return this._isMove && (this.runTime < this.time ? (this.shape.graphics.clear(),
            this.shape.graphics.beginFill(this.color, 1), this.shape.graphics.moveTo(0, 0),
            this.shape.graphics.lineTo(this.radius, 0), this.shape.graphics.drawArc(0, 0, this.radius, -90 * Math.PI / 180, (this.runTime / this.time * 360 - 90) * Math.PI / 180, !0),
            this.shape.graphics.lineTo(0, 0), this.shape.graphics.endFill(), this.shape.alpha = this.alphaNum,
            this.runTime += t) : this.end()), !0;
    }, i.prototype.reset = function() {
        this.shape.graphics.clear(), this.shape.graphics.beginFill(this.color, 1), this.shape.graphics.moveTo(0, 0),
            this.shape.graphics.lineTo(this.radius, 0), this.shape.graphics.drawArc(0, 0, this.radius, -90 * Math.PI / 180, 270 * Math.PI / 180, !0),
            this.shape.graphics.lineTo(0, 0), this.shape.graphics.endFill(), this.shape.alpha = this.alphaNum,
            this._isMove = !1, this.visible = !0, this.runTime = .01;
    }, i.prototype.begin = function() {
        this._isMove || (this._isMove = !0);
    }, i.prototype.end = function() {
        this._isMove = !1, this.visible = !1;
    }, i;
}(e.Sprite);

i(N.prototype, "MySector");

var v = function() {
    function t() {
        this._BLACK_1 = 1, this._BLACK_2 = 1, this._BLACK_3 = 1, this._BLACK_4 = 1, this._BLACK_5 = 1,
            this._BLACK_6 = 1, this._BLACK_7 = 2, this._BLACK_8 = 0, this._BLACK_9 = 0, T.upNum = this._BLACK_6;
    }
    return Object.defineProperty(t.prototype, "BLACK_1", {
        get: function() {
            return this._BLACK_1;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "BLACK_2", {
        get: function() {
            return this._BLACK_2;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "BLACK_3", {
        get: function() {
            return this._BLACK_3;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "BLACK_4", {
        get: function() {
            return this._BLACK_4;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "BLACK_5", {
        get: function() {
            return this._BLACK_5;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "BLACK_6", {
        get: function() {
            return this._BLACK_6;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "BLACK_7", {
        get: function() {
            return this._BLACK_7;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "BLACK_8", {
        get: function() {
            return this._BLACK_8;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "BLACK_9", {
        get: function() {
            return this._BLACK_9;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance;
        },
        enumerable: !0,
        configurable: !0
    }), t.init = function() {
        t._instance || (t._instance = new t());
    }, t.prototype.setBlack = function(t) {
        for (var e = 0; e < t.length; e++) this.setBlackOne(e, t[e]);
        platform.setBannerBase(this._BLACK_1);
    }, t.prototype.setBlackOne = function(t, e) {
        switch (t) {
            case 0:
                this._BLACK_1 = e;
                break;

            case 1:
                this._BLACK_2 = e;
                break;

            case 2:
                this._BLACK_3 = e;
                break;

            case 3:
                this._BLACK_4 = e;
                break;

            case 4:
                this._BLACK_5 = e;
                break;

            case 5:
                this._BLACK_6 = e;
                break;

            case 6:
                this._BLACK_7 = e;
                break;

            case 7:
                this._BLACK_8 = e;
                break;

            case 8:
                this._BLACK_9 = e;
        }
        T.upNum = this._BLACK_6;
    }, t._instance = null, t;
}();

i(v.prototype, "MySetting");

var S = function() {
    function t(t, e, i, s, n, o, a, r, h, u, _, l) {
        this.seat_cannon = n, this.seat_base = o, this.seat_name = a, this.seat_level = t,
            this.seat_atk = e, this.seat_speed = i, this.seat_range = s, this.seat_gold = r,
            this.seat_type = h, this.seat_fire = u, this.seat_bullet = _, this.seat_hurt = l;
    }
    return Object.defineProperty(t.prototype, "_cannon", {
        get: function() {
            return this.seat_cannon;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_base", {
        get: function() {
            return this.seat_base;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_name", {
        get: function() {
            return this.seat_name;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_level", {
        get: function() {
            return this.seat_level;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_type", {
        get: function() {
            return this.seat_type;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_atk", {
        get: function() {
            return this.seat_atk;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_speed", {
        get: function() {
            return this.seat_speed;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_range", {
        get: function() {
            return this.seat_range;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_gold", {
        get: function() {
            return this.seat_gold;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_fire", {
        get: function() {
            return this.seat_fire;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_bullet", {
        get: function() {
            return this.seat_bullet;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_hurt", {
        get: function() {
            return this.seat_hurt;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

i(S.prototype, "TowerRecord");

var E = function() {
    function t() {}
    return t.getUpGradeNum = function(t) {
            return this.UPGRADE_BASENUM[t] + (b.instance.getUpgradeNum(t) - 1) * this.UPGRADE_ADDNUM[t];
        }, t.getAchNeedNum = function(t) {
            return this.ACH_BASENUM[t] + b.instance.getAchCompleteNum(t) * this.ACH_ADDNUM[t];
        }, t.getRedOfTask = function() {
            for (var e = 1; e < this.TASK_NEEDNUM.length; e++)
                if (b.instance.getTaskNeedNum(e) >= this.TASK_NEEDNUM[e] && b.instance.getTaskCompleteNum(e) < 2) return void(this.isRedOfTask = !0);
            for (var i = 1; i < this.ACH_ADDNUM.length; i++)
                if (t.getAchNeedNum(i) <= b.instance.getAchNeedNum(i)) return void(this.isRedOfTask = !0);
            this.isRedOfTask = !1;
        }, t.getRedOfUpGrad = function() {
            for (var t = 1; t < this.UPGRADE_MAXNUM.length; t++)
                if (b.instance.diamond >= this.UPGRADE_COST[t] && (this.UPGRADE_MAXNUM[t] < 0 || b.instance.getUpgradeNum(t) < this.UPGRADE_MAXNUM[t])) return void(this.isRedOfUpGrade = !0);
            this.isRedOfUpGrade = !1;
        }, t.getTowerRecord = function(t) {
            var e = t;
            try {
                for (var i = RES.getRes("enemyData_json"), s = i.towerData, n = 0; n < i.towerData.length; n++)
                    if (Number(s[n].level) == e) {
                        var o = s[n].cannon,
                            a = s[n].base,
                            r = s[n].name,
                            h = Number(s[n].level),
                            u = Number(s[n].atk),
                            _ = Number(s[n].speed),
                            l = Number(s[n].range),
                            c = D.round(Number(s[n].gold)),
                            m = s[n].type,
                            p = s[n].fire,
                            d = s[n].bullet,
                            g = s[n].hurt;
                        return new S(h, u, _, l, o, a, r, c, m, p, d, g);
                    }
                return new S(1, 1, 1, 3, "tower_XP1_png", "tower_XPD_png", "炮台1", 35, "SHELL", "bullet_p_f", "bullet_p_b1", "bullet_d_h");
            } catch (t) {
                return console.log("炮塔信息"), new S(1, 1, 1, 3, "tower_XP1_png", "tower_XPD_png", "炮台1", 35, "SHELL", "bullet_p_f", "bullet_p_b1", "bullet_d_h");
            }
        }, t.getWaveMap = function(t) {
            var e = t;
            try {
                for (var i = RES.getRes("classData_json"), s = i.classData, n = 0; n < i.classData.length; n++)
                    if (e == Number(s[n].mission)) return s[n].mapdata;
                return [0, 201, 0, 0, 201, 0, 103, 100, 1, 1, 101, 102, 105, 1, 1, 1, 1, 105, 105, 1, 1, 1, 1, 105, 101, 102, 1, 1, 103, 100, 0, 101, 104, 104, 100, 0];
            } catch (t) {
                console.log("场景对应地图加载错误");
            }
            return [0, 201, 0, 0, 201, 0, 103, 100, 1, 1, 101, 102, 105, 1, 1, 1, 1, 105, 105, 1, 1, 1, 1, 105, 101, 102, 1, 1, 103, 100, 0, 101, 104, 104, 100, 0];
        }, t.getWaveRoad = function(t) {
            var e = t;
            try {
                for (var i = RES.getRes("classData_json"), s = i.classData, n = 0; n < i.classData.length; n++)
                    if (e == Number(s[n].mission)) return s[n].roaddata;
                return [1, 7, 6, 24, 25, 31, 34, 28, 29, 11, 10, 4];
            } catch (t) {
                console.log("场景对应路径加载错误");
            }
            return [1, 7, 6, 24, 25, 31, 34, 28, 29, 11, 10, 4];
        }, t.getMonsterNumber = function(t, e) {
            var i = e,
                s = t;
            s > 14 && (s = 14);
            try {
                for (var n = RES.getRes("gradeData_json"), o = n.gradeData, a = 0; a < n.gradeData.length; a++) {
                    var r = Number(o[a].grade),
                        h = Number(o[a].wave);
                    if (s == r && i == h) return o[a].num;
                }
                return [2, 2, 1];
            } catch (t) {
                console.log("敌人数据加载错误");
            }
            return [2, 2, 1];
        }, t.getMonsterHP = function(t, e) {
            var i = e,
                s = t,
                n = t;
            s > 14 && (s = 14);
            try {
                for (var o = RES.getRes("gradeData_json"), a = o.gradeData, r = 0; r < o.gradeData.length; r++) {
                    var h = Number(a[r].grade),
                        u = Number(a[r].wave);
                    if (s == h && i == u) return n > 14 ? D.roundDown(a[r].hp * D.pow(1.8875, n - 14)) : a[r].hp;
                }
                return 6050;
            } catch (t) {
                console.log("敌人血量加载错误");
            }
            return 6050;
        }, t.getMonsterGold = function(t, e) {
            var i = e,
                s = t,
                n = t;
            s > 14 && (s = 14);
            try {
                for (var o = RES.getRes("gradeData_json"), a = o.gradeData, r = 0; r < o.gradeData.length; r++) {
                    var h = Number(a[r].grade),
                        u = Number(a[r].wave);
                    if (s == h && i == u) return n > 14 ? D.roundDown(a[r].gold * D.pow(1.8875, n - 14)) : a[r].gold;
                }
                return 182;
            } catch (t) {
                console.log("敌人金币加载错误");
            }
            return 182;
        }, t.getMonsterMission = function(t, e) {
            var i = e,
                s = t;
            if (s >= 14) return (s - 14) % 4 + 10;
            try {
                for (var n = RES.getRes("gradeData_json"), o = n.gradeData, a = 0; a < n.gradeData.length; a++) {
                    var r = Number(o[a].grade),
                        h = Number(o[a].wave);
                    if (s == r && i == h) return o[a].mission;
                }
                return 1;
            } catch (t) {
                console.log("场景序号加载错误");
            }
            return 1;
        }, t.TASK_NEEDNUM = [0, 1, 6, 150, 4, 2, 100, 25, 150, 9, 1], t.ACH_BASENUM = [0, 50, 50, 50, 1, 3, 1, 5, 5, 2],
        t.ACH_ADDNUM = [0, 120, 120, 120, 1, 1, 8, 10, 4, 2], t.UPGRADE_BASENUM = [0, 8, .02, 0, .01, 1, 1],
        t.UPGRADE_COST = [0, 60, 75, 90, 100, 150, 200], t.UPGRADE_MAXNUM = [0, 50, 25, 26, 50, -1, -1],
        t.UPGRADE_ADDNUM = [0, 1, .02, .02, .01, .05, .1], t.SKILL_TIME_0 = 90, t.SKILL_TIME_1 = 120,
        t.SKILL_TIME_2 = 150, t.SKILL_TIME_3 = 180, t.SKILL_COLDTIME_0 = 330, t.SKILL_COLDTIME_1 = 390,
        t.SKILL_COLDTIME_2 = 450, t.SKILL_COLDTIME_3 = 510, t.isRedOfTask = !1, t.isRedOfUpGrade = !1,
        t;
}();

i(E.prototype, "TypeData");

var k = function() {
    function t() {}
    return t.prototype.getAsset = function(t, e, i) {
        function s(s) {
            e.call(i, s, t);
        }
        if (RES.hasRes(t)) {
            var n = RES.getRes(t);
            n ? s(n) : RES.getResAsync(t, s, this);
        } else RES.getResByUrl(t, s, this, RES.ResourceItem.TYPE_IMAGE);
    }, t;
}();

i(k.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);

var D;

! function(t) {
    function i() {
        o && (n.stop(), n = null, o = null);
    }

    function s() {
        return !!(o = RES.getRes(t._bgmName)) && (a && (a.stop(), a = null), n = o.play(), !0);
    }
    var n, o = null,
        a = null;
    t._bgmName = null, t.playBGM = function(n) {
        return void 0 === n && (n = t._bgmName), null == n ? void i() : b.instance.isBGM ? void(o && t._bgmName == n || (t._bgmName = n,
            i(), s() || ((a = new e.Timer(1e3, 0)).addEventListener(e.TimerEvent.TIMER, s, this),
                a.start()))) : void i();
    }, t.playSE = function(t, e) {
        if (void 0 === e && (e = 1), b.instance.isSE) {
            var i = RES.getRes(t);
            null != i && i.play(0, e);
        }
    };
}(D || (D = {}));

var I = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._runTime = 0, i._isShow = !1, i._enemyImg = new e.Bitmap(), i._enemyImg.texture = RES.getRes("box_01_png"),
            i.addChild(i._enemyImg), D.setAnchor(i._enemyImg), i._enemyImg.x = i._enemyImg.width / 2,
            i._enemyImg.y = i._enemyImg.height / 2, i._shadowImg = new e.Bitmap(), i._shadowImg.texture = RES.getRes("box_png"),
            i.addChild(i._shadowImg), D.setAnchor(i._shadowImg), i._shadowImg.x = i._enemyImg.width / 2,
            i._shadowImg.y = i._enemyImg.height / 2, i;
    }
    return s(i, t), Object.defineProperty(i.prototype, "isShow", {
        get: function() {
            return this._isShow;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.reinit = function() {
        this._runTime = 0, this._enemyImg.rotation = 0, this._isShow = !0, this._shadowImg.scaleX = 1,
            this._shadowImg.scaleY = 1, e.Tween.removeTweens(this._shadowImg), e.Tween.get(this._shadowImg, {
                loop: !0
            }).to({
                scaleX: 1.1,
                scaleY: .9
            }, 250, e.Ease.sineInOut).to({
                scaleX: .9,
                scaleY: 1.1
            }, 500, e.Ease.sineInOut).to({
                scaleX: 1,
                scaleY: 1
            }, 250, e.Ease.sineInOut).wait(1e3);
    }, i.prototype.run = function(t) {
        this._runTime += t, this._enemyImg.rotation = 180 * this._runTime;
    }, i.prototype.close = function() {
        this._isShow = !1, e.Tween.removeTweens(this);
    }, i;
}(e.Sprite);

i(I.prototype, "MyBox");

var C = function(t) {
    function i(i, s, n) {
        void 0 === n && (n = 0);
        var o = t.call(this) || this;
        o._isClean = !1, o.armatureDisplay = null, o.tex = ["eff_build_json", "eff_updata_json", "eff_dead_json"],
            o.png = ["eff_build_png", "eff_updata_png", "eff_dead_png"], o.display = ["eff_build", "eff_updata", "eff_dead"],
            o.armatureW = [134, 232, 102], o.armatureH = [134, 232, 136];
        var a = RES.getRes(o.tex[n]),
            r = RES.getRes(o.png[n]),
            h = new e.MovieClipDataFactory(a, r);
        return o.armatureDisplay = new e.MovieClip(h.generateMovieClipData(o.display[n])),
            o.addChild(o.armatureDisplay), o.width = 106, o.height = 106, o.armatureDisplay.x = -o.armatureW[n] / 2,
            o.armatureDisplay.y = -o.armatureH[n] / 2, o.x = i, o.y = s, o.armatureDisplay.gotoAndPlay("act", 1),
            o.armatureDisplay.addEventListener(e.Event.COMPLETE, function() {
                o.clean();
            }, o), o.armatureDisplay.blendMode = 2 > n ? e.BlendMode.ADD : e.BlendMode.NORMAL,
            o;
    }
    return s(i, t), i.prototype.clean = function() {
        this._isClean = !0, this.parent && this.parent.removeChild(this);
    }, Object.defineProperty(i.prototype, "isClean", {
        get: function() {
            return this._isClean;
        },
        enumerable: !0,
        configurable: !0
    }), i;
}(e.Sprite);

i(C.prototype, "MyEffect");

var A;

! function(t) {
    t[t.SMALL = 0] = "SMALL", t[t.MIDDLE = 1] = "MIDDLE", t[t.LARGE = 2] = "LARGE",
        t[t.BOSS = 3] = "BOSS", t[t.NULL = -1] = "NULL";
}(A || (A = {}));

var O;

! function(t) {
    t[t.READY = 0] = "READY", t[t.SHOW = 1] = "SHOW", t[t.MOVE = 2] = "MOVE", t[t.DEATH = 3] = "DEATH",
        t[t.NULL = -1] = "NULL";
}(O || (O = {}));

var L = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i.SMALL_SCALE = .25, i.MIDDLE_SCALE = .5, i.LAGGE_SCALE = .6, i.BOSS_SCALE = .8,
            i._type = A.NULL, i._hpBase = 0, i._hp = 0, i._speed = 0, i._wayStage = -1, i._ways = [],
            i.width = 106, i.height = 106, i._state = O.NULL, i._shadowImg = new e.Bitmap(),
            i._shadowImg.texture = RES.getRes("ui_enemy_shadow_png"), i.addChild(i._shadowImg),
            D.setAnchor(i._shadowImg), i._shadowImg.x = 0, i._shadowImg.y = 20, i._enemyImg = new e.Bitmap(),
            i._enemyImg.texture = RES.getRes("enemy_1_png"), i.addChild(i._enemyImg), D.setAnchor(i._enemyImg, .5, 1),
            i._enemyImg.x = 0, i._enemyImg.y = 20, i.visible = !1, i._isDead = !0, i._isShow = !1,
            i._isBox = !1, i._waitTime = 999, i._iceImg = new e.Bitmap(), i._iceImg.texture = RES.getRes("ui_enemy_slow_png"),
            i.addChild(i._iceImg), D.setAnchor(i._iceImg), i._iceImg.x = 0, i._iceImg.y = 10,
            i._iceImg.visible = !1, i.Hpbar = new eui.ProgressBar(), i.Hpbar.skinName = "resource/eui_skins/MySkin/MyControl/MyHPProgressBar.exml",
            i.Hpbar.anchorOffsetX = 19, i.Hpbar.maximum = 100, i.Hpbar.value = 100, i.Hpbar.x = 0,
            i.addChild(i.Hpbar), i;
    }
    return s(i, t), Object.defineProperty(i.prototype, "row", {
        get: function() {
            return this._row;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "column", {
        get: function() {
            return this._column;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "hp", {
        get: function() {
            return this._hp;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "speed", {
        get: function() {
            return this._speed;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "wayStage", {
        get: function() {
            return this._wayStage;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "ways", {
        get: function() {
            return this._ways;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "state", {
        get: function() {
            return this._state;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "waitTime", {
        get: function() {
            return this._waitTime;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "moveRoad", {
        get: function() {
            return this._moveRoad;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "isShow", {
        get: function() {
            return this._isShow;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "isDead", {
        get: function() {
            return this._isDead;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.reinit = function(t, e, i, s, n) {
        switch (void 0 === n && (n = !1), this._type = t, this._hpBase = e, this._isBox = n,
            this._isBox && (this._hpBase *= .5), this._hp = this._hpBase, this._speed = 70,
            this._enemyImg.texture = RES.getRes("enemy_1_png"), this._ways = i, this.imgY = 1.5,
            this._moveRoad = 0, this._state = O.READY, this._wayStage = -1, this._isShow = !0,
            this._waitTime = s, this._enemyImg.y = 20, this._type) {
            case A.SMALL:
                this._hp *= .55, this._speed = 105, this._enemyImg.texture = RES.getRes("enemy_1_png"),
                    D.setAnchor(this._enemyImg, .5, 1), this._enemyImg.scaleX = this.SMALL_SCALE, this._enemyImg.scaleY = this.SMALL_SCALE,
                    this._shadowImg.scaleX = .4, this._shadowImg.scaleY = .4, this.Hpbar.value = 100,
                    this.Hpbar.scaleX = 1.4, this.Hpbar.y = -.3 * this._enemyImg.height + this._enemyImg.y - 30;
                break;

            case A.MIDDLE:
                this._hp *= .55, this._speed = 70, this._enemyImg.texture = RES.getRes("enemy_3_png"),
                    D.setAnchor(this._enemyImg, .5, 1), this._enemyImg.scaleX = this.MIDDLE_SCALE, this._enemyImg.scaleY = this.MIDDLE_SCALE,
                    this._shadowImg.scaleX = .5, this._shadowImg.scaleY = .6, this.Hpbar.value = 100,
                    this.Hpbar.scaleX = 1.6, this.Hpbar.y = -this.MIDDLE_SCALE * this._enemyImg.height + this._enemyImg.y - 10;
                break;

            case A.LARGE:
                this._speed = 60, this._enemyImg.texture = RES.getRes("enemy_2_png"), D.setAnchor(this._enemyImg, .5, 1),
                    this._enemyImg.scaleX = this.LAGGE_SCALE, this._enemyImg.scaleY = this.LAGGE_SCALE,
                    this._shadowImg.scaleX = .6, this._shadowImg.scaleY = .6, this.Hpbar.value = 100,
                    this.Hpbar.scaleX = 2, this.Hpbar.y = -.6 * this._enemyImg.height + this._enemyImg.y - 10;
                break;

            case A.BOSS:
                this._speed = 30, this._enemyImg.texture = RES.getRes("enemy_4_png"), this._enemyImg.scaleX = this.BOSS_SCALE,
                    this._enemyImg.scaleY = this.BOSS_SCALE, D.setAnchor(this._enemyImg, .5, 1), this._shadowImg.scaleX = .8,
                    this._shadowImg.scaleY = .8, this.Hpbar.value = 100, this.Hpbar.scaleX = 2.6, this.Hpbar.y = -.8 * this._enemyImg.height + this._enemyImg.y - 10;
                break;

            default:
                this._speed = 60, this._enemyImg.texture = RES.getRes("enemy_4_png"), D.setAnchor(this._enemyImg, .5, 1);
        }
    }, i.prototype.run = function(t) {
        if (this._state != O.NULL) switch (this._state) {
            case O.READY:
                this._waitTime > 0 ? this._waitTime -= t : (this._waitTime = 0, this.showInBegin(),
                    this._state = O.SHOW);
                break;

            case O.SHOW:
                break;

            case O.MOVE:
                this._iceImg.visible = T.isSkill_1, this._aimRow = D.roundDown(this._ways[this._wayStage + 1] / 6),
                    this._aimColumn = this._ways[this._wayStage + 1] % 6, this._aimX = 106 * (this._aimColumn + .5),
                    this._aimY = 106 * (this._aimRow + .5), this.imgY += t, this._aimRow > this._row ? (this.y += this._speed * t * (T.isSkill_1 ? .5 : 1),
                        this._moveRoad += this._speed * t * (T.isSkill_1 ? .5 : 1)) : this._aimRow < this._row ? (this.y -= this._speed * t * (T.isSkill_1 ? .5 : 1),
                        this._moveRoad += this._speed * t * (T.isSkill_1 ? .5 : 1)) : this.y = this._aimY,
                    this._aimColumn > this._column ? (this._enemyImg.skewY = 0, this.x += this._speed * t * (T.isSkill_1 ? .5 : 1),
                        this._moveRoad += this._speed * t * (T.isSkill_1 ? .5 : 1)) : this._aimColumn < this._column ? (this._enemyImg.skewY = 180,
                        this.x -= this._speed * t * (T.isSkill_1 ? .5 : 1), this._moveRoad += this._speed * t * (T.isSkill_1 ? .5 : 1)) : this.x = this._aimX,
                    D.getDistance(this.x, this.y, this._aimX, this._aimY) < 2 && (this._row = this._aimRow,
                        this._column = this._aimColumn, this._wayStage += 1, this._wayStage + 1 >= this._ways.length && B.GetInstance().lostGame());
                break;

            case O.DEATH:
                if (this._deadTime > 0) {
                    if (this._deadTime -= t, this._deadTime > .2) switch (this._type) {
                        case A.SMALL:
                            this._enemyImg.scaleX = this.SMALL_SCALE * (1 - .4 * D.sin(90 * (-2.5 * this._deadTime + 1.5))),
                                this._enemyImg.scaleY = this.SMALL_SCALE * (1 - .4 * D.sin(90 * (-2.5 * this._deadTime + 1.5)));
                            break;

                        case A.MIDDLE:
                            this._enemyImg.scaleX = this.MIDDLE_SCALE * (1 - .4 * D.sin(90 * (-2.5 * this._deadTime + 1.5))),
                                this._enemyImg.scaleY = this.MIDDLE_SCALE * (1 - .4 * D.sin(90 * (-2.5 * this._deadTime + 1.5)));
                            break;

                        case A.LARGE:
                            this._enemyImg.scaleX = this.LAGGE_SCALE * (1 - .4 * D.sin(90 * (-2.5 * this._deadTime + 1.5))),
                                this._enemyImg.scaleY = this.LAGGE_SCALE * (1 - .4 * D.sin(90 * (-2.5 * this._deadTime + 1.5)));
                            break;

                        case A.BOSS:
                            this._enemyImg.scaleX = this.BOSS_SCALE * (1 - .4 * D.sin(90 * (-2.5 * this._deadTime + 1.5))),
                                this._enemyImg.scaleY = this.BOSS_SCALE * (1 - .4 * D.sin(90 * (-2.5 * this._deadTime + 1.5)));
                    } else switch (this._type) {
                        case A.SMALL:
                            this._enemyImg.scaleX = this.SMALL_SCALE * (1 - .4 * D.sin(90 * (-5 * this._deadTime + 2))),
                                this._enemyImg.scaleY = this.SMALL_SCALE * (1 - .4 * D.sin(90 * (-5 * this._deadTime + 2)));
                            break;

                        case A.MIDDLE:
                            this._enemyImg.scaleX = this.MIDDLE_SCALE * (1 - .4 * D.sin(90 * (-5 * this._deadTime + 2))),
                                this._enemyImg.scaleY = this.MIDDLE_SCALE * (1 - .4 * D.sin(90 * (-5 * this._deadTime + 2)));
                            break;

                        case A.LARGE:
                            this._enemyImg.scaleX = this.LAGGE_SCALE * (1 - .4 * D.sin(90 * (-5 * this._deadTime + 2))),
                                this._enemyImg.scaleY = this.LAGGE_SCALE * (1 - .4 * D.sin(90 * (-5 * this._deadTime + 2)));
                            break;

                        case A.BOSS:
                            this._enemyImg.scaleX = this.BOSS_SCALE * (1 - .4 * D.sin(90 * (-5 * this._deadTime + 2))),
                                this._enemyImg.scaleY = this.BOSS_SCALE * (1 - .4 * D.sin(90 * (-5 * this._deadTime + 2)));
                    }
                    if (this._deadTime <= 0) {
                        switch (this._type) {
                            case A.SMALL:
                                this._enemyImg.scaleX = this.SMALL_SCALE, this._enemyImg.scaleY = this.SMALL_SCALE;
                                break;

                            case A.MIDDLE:
                                this._enemyImg.scaleX = this.MIDDLE_SCALE, this._enemyImg.scaleY = this.MIDDLE_SCALE;
                                break;

                            case A.LARGE:
                                this._enemyImg.scaleX = this.LAGGE_SCALE, this._enemyImg.scaleY = this.LAGGE_SCALE;
                                break;

                            case A.BOSS:
                                this._enemyImg.scaleX = this.BOSS_SCALE, this._enemyImg.scaleY = this.BOSS_SCALE;
                        }
                        this.dead();
                    }
                }
        }
    }, i.prototype.showInBegin = function() {
        var t = this;
        this._wayStage = 0, this._aimRow = D.roundDown(this._ways[this._wayStage] / 6),
            this._aimColumn = this._ways[this._wayStage] % 6;
        var i = D.roundDown(this._ways[this._wayStage + 1] / 6),
            s = this._ways[this._wayStage + 1] % 6;
        this._row = this._aimRow, this._column = this._aimColumn, this.x = 106 * (this._column + .5),
            this.y = 106 * (this._row + .5), this._aimX = 106 * (this._aimColumn + .5), this._aimY = 106 * (this._aimRow + .5),
            this.visible = !0, this.imgY = 1.5;
        var n = this.x,
            o = this.x;
        s > this._column ? (this._enemyImg.skewY = 0, n = this.x + 20, o = this.x + 40) : s == this._column ? (this._enemyImg.skewY = 0,
            n = this.x, o = this.x) : (this._enemyImg.skewY = 180, n = this.x - 20, o = this.x - 40);
        var a = this.y;
        a = i > this._row ? this.y + 40 : i == this._row ? this.y : this.y - 40, e.Tween.removeTweens(this),
            e.Tween.get(this).to({
                x: n,
                y: this._aimY - 100,
                imgY: 1.125
            }, 250).to({
                x: o,
                y: a,
                imgY: .375
            }, 250).to({
                imgY: 0
            }, 30).call(function() {
                t._state = O.MOVE, t._isDead = !1;
            });
    }, i.prototype.beHurt = function(t) {
        if (D.randomf(1) - E.getUpGradeNum(2) <= 0 ? (this._hp -= 2 * t, B.GetInstance().reinitHurtNum(this.x, this.y - 40, 2 * t, !0)) : (this._hp -= t,
                B.GetInstance().reinitHurtNum(this.x, this.y - 40, t, !1)), this.Hpbar.value = D.roundUp(this._hp / this._hpBase * 100),
            this._hp <= 0 && !this._isDead) {
            switch (this._isDead = !0, this.beginDead(), this._deadTime = .6, this._state = O.DEATH,
                this._type) {
                case A.SMALL:
                    D.playSE("littleDie_mp3");
                    break;

                case A.MIDDLE:
                    D.playSE("middleDie_mp3");
                    break;

                case A.LARGE:
                    D.playSE("bigDie_mp3");
                    break;

                case A.BOSS:
                    D.playSE("bossDie_mp3");
                    break;

                default:
                    D.playSE("bigDie_mp3");
            }
            return B.GetInstance().addGoldOfEnemy(), !0;
        }
        return !1;
    }, i.prototype.dead = function() {
        this._state = O.NULL, B.GetInstance().addEffect(this.x, this.y, 2), this._isBox && B.GetInstance().showBoxButton(this.x, this.y),
            this.visible = !1, this._isShow = !1, this.endDead(), this.parent && this.parent.removeChild(this);
    }, i.prototype.clean = function() {
        this._state = O.NULL, this._isDead = !0, this.visible = !1, this._isShow = !1, this.endDead(),
            this.parent && this.parent.removeChild(this);
    }, i.prototype.beginDead = function() {
        var t = [1, 0, 0, 0, 200, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            i = new e.ColorMatrixFilter(t);
        this._enemyImg.filters = [i];
    }, i.prototype.endDead = function() {
        var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            i = new e.ColorMatrixFilter(t);
        this._enemyImg.filters = [i];
    }, Object.defineProperty(i.prototype, "imgY", {
        get: function() {
            return this._imgY;
        },
        set: function(t) {
            switch (this._imgY = t, this._type) {
                case A.SMALL:
                    this._state == O.MOVE ? (this._enemyImg.scaleX = this.SMALL_SCALE * (.95 + .1 * D.sin(960 * this._imgY * (T.isSkill_1 ? .5 : 1))),
                        this._enemyImg.scaleY = this.SMALL_SCALE * (.95 - .1 * D.sin(960 * this._imgY * (T.isSkill_1 ? .5 : 1))),
                        this._enemyImg.y = 15 * D.cos(960 * this._imgY * (T.isSkill_1 ? .5 : 1)), this._shadowImg.scaleX = this.SMALL_SCALE + .1 * D.cos(960 * this._imgY * (T.isSkill_1 ? .5 : 1)),
                        this._shadowImg.scaleY = this.SMALL_SCALE + .1 * D.cos(960 * this._imgY * (T.isSkill_1 ? .5 : 1))) : (this._enemyImg.scaleX = this.SMALL_SCALE * (.95 + .1 * D.sin(240 * this._imgY)),
                        this._enemyImg.scaleY = this.SMALL_SCALE * (.95 - .1 * D.sin(240 * this._imgY)));
                    break;

                case A.MIDDLE:
                    this._state == O.MOVE ? (this._enemyImg.scaleX = this.MIDDLE_SCALE * (.95 + .1 * D.sin(480 * this._imgY * (T.isSkill_1 ? .5 : 1))),
                        this._enemyImg.scaleY = this.MIDDLE_SCALE * (.95 - .1 * D.sin(480 * this._imgY * (T.isSkill_1 ? .5 : 1)))) : (this._enemyImg.scaleX = this.MIDDLE_SCALE * (.95 + .1 * D.sin(240 * this._imgY)),
                        this._enemyImg.scaleY = this.MIDDLE_SCALE * (.95 - .1 * D.sin(240 * this._imgY)));
                    break;

                case A.LARGE:
                    this._enemyImg.scaleX = this.LAGGE_SCALE * (.95 + .1 * D.sin(240 * this._imgY * (T.isSkill_1 ? .5 : 1))),
                        this._enemyImg.scaleY = this.LAGGE_SCALE * (.95 - .1 * D.sin(240 * this._imgY * (T.isSkill_1 ? .5 : 1)));
                    break;

                case A.BOSS:
                    this._enemyImg.scaleX = this.BOSS_SCALE * (.95 + .1 * D.sin(240 * this._imgY * (T.isSkill_1 ? .5 : 1))),
                        this._enemyImg.scaleY = this.BOSS_SCALE * (.95 - .1 * D.sin(240 * this._imgY * (T.isSkill_1 ? .5 : 1)));
            }
        },
        enumerable: !0,
        configurable: !0
    }), i;
}(e.Sprite);

i(L.prototype, "MyEnemy");

var R;

! function(t) {
    t[t.Obstacle = 0] = "Obstacle", t[t.Building_blocks = 1] = "Building_blocks", t[t.Up_Left_channel = 100] = "Up_Left_channel",
        t[t.Up_Right_channel = 101] = "Up_Right_channel", t[t.Down_Left_channel = 102] = "Down_Left_channel",
        t[t.Down_Right_channel = 103] = "Down_Right_channel", t[t.Channel_transverse = 104] = "Channel_transverse",
        t[t.Channel_vertical = 105] = "Channel_vertical", t[t.Starting_point_Up = 200] = "Starting_point_Up",
        t[t.Starting_point_Down = 201] = "Starting_point_Down", t[t.Starting_point_Left = 202] = "Starting_point_Left",
        t[t.Starting_Right = 203] = "Starting_Right";
}(R || (R = {}));

var x = function(t) {
    function i(i) {
        var s = t.call(this) || this;
        return s._ID = i, s._row = D.roundDown(s._ID / 6), s._column = s._ID % 6, s._type = R.Obstacle,
            s.width = 106, s.height = 106, D.setAnchor(s), s._bgImg = new e.Bitmap(), s._bgImg.texture = RES.getRes("map_01_01_png"),
            s.addChild(s._bgImg), D.setAnchor(s._bgImg), s._bgImg.x = 53, s._bgImg.y = 53, s._decorateImg = new e.Bitmap(),
            s._decorateImg.texture = RES.getRes("map_04_01_png"), s.addChild(s._decorateImg),
            D.setAnchor(s._decorateImg), s._decorateImg.x = 53, s._decorateImg.y = 53, s._decorateImg.visible = !1,
            s.x = 106 * (s._column + .5), s.y = 106 * (s._row + .5), s._isAlreadyAdd = !1, s;
    }
    return s(i, t), Object.defineProperty(i.prototype, "row", {
        get: function() {
            return this._row;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "column", {
        get: function() {
            return this._column;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "ID", {
        get: function() {
            return this._ID;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "isCanMove", {
        get: function() {
            return this._isCanMove;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "isCanAdd", {
        get: function() {
            return this._isCanAdd;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "isAlreadyAdd", {
        get: function() {
            return this._isAlreadyAdd;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.reinit = function(t) {
        switch (void 0 === t && (t = -1), this._type = t, Number(this.type)) {
            case R.Obstacle:
                e = "map_01_01_png";
                e = (this._column + this._row) % 2 == 0 ? D.roundDown(this._ID / 2) % 2 == 0 ? "map_01_01_png" : "map_01_03_png" : D.roundDown(this._ID / 2) % 2 == 0 ? "map_01_02_png" : "map_01_04_png",
                    this._bgImg.texture = RES.getRes(e), this._decorateImg.texture = RES.getRes("map_04_0" + (this._ID % 3 + 1).toString() + "_png"),
                    this._decorateImg.visible = !0, this._isCanAdd = !1, this._isCanMove = !1;
                break;

            case R.Building_blocks:
                e = "map_01_01_png";
                e = (this._column + this._row) % 2 == 0 ? D.roundDown(this._ID / 2) % 2 == 0 ? "map_01_01_png" : "map_01_03_png" : D.roundDown(this._ID / 2) % 2 == 0 ? "map_01_02_png" : "map_01_04_png",
                    this._bgImg.texture = RES.getRes(e), this._decorateImg.visible = !1, this._isCanAdd = !0,
                    this._isCanMove = !1;
                break;

            case R.Up_Left_channel:
                this._bgImg.texture = RES.getRes("map_03_03_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            case R.Up_Right_channel:
                this._bgImg.texture = RES.getRes("map_03_04_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            case R.Down_Left_channel:
                this._bgImg.texture = RES.getRes("map_03_02_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            case R.Down_Right_channel:
                this._bgImg.texture = RES.getRes("map_03_01_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            case R.Channel_transverse:
                this._bgImg.texture = RES.getRes("map_03_05_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            case R.Channel_vertical:
                this._bgImg.texture = RES.getRes("map_03_06_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            case R.Starting_point_Up:
                this._bgImg.texture = RES.getRes("map_02_04_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            case R.Starting_point_Down:
                this._bgImg.texture = RES.getRes("map_02_03_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            case R.Starting_point_Left:
                this._bgImg.texture = RES.getRes("map_02_02_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            case R.Starting_Right:
                this._bgImg.texture = RES.getRes("map_02_01_png"), this._decorateImg.visible = !1,
                    this._isCanAdd = !1, this._isCanMove = !0;
                break;

            default:
                this._type = R.Obstacle;
                var e = "map_01_01_png";
                e = (this._column + this._row) % 2 == 0 ? D.roundDown(this._ID / 2) % 2 == 0 ? "map_01_01_png" : "map_01_03_png" : D.roundDown(this._ID / 2) % 2 == 0 ? "map_01_02_png" : "map_01_04_png",
                    this._bgImg.texture = RES.getRes(e), this._decorateImg.texture = RES.getRes("map_04_0" + D.random(1, 3).toString() + "_png"),
                    this._decorateImg.visible = !0, this._isCanAdd = !1, this._isCanMove = !1;
        }
    }, i.prototype.addTower = function() {
        this._isAlreadyAdd = !0;
    }, i.prototype.removeTower = function() {
        this._type == R.Building_blocks && (this._isAlreadyAdd = !1);
    }, i.prototype.run = function(t) {}, i;
}(e.Sprite);

i(x.prototype, "MyFloor");

var P;

! function(t) {
    t[t.WAIT = 0] = "WAIT", t[t.READY = 1] = "READY", t[t.MOVE = 2] = "MOVE", t[t.BEGIN = 3] = "BEGIN",
        t[t.PAUSE = 4] = "PAUSE", t[t.ERJI = 5] = "ERJI", t[t.FALL = 6] = "FALL", t[t.PASS = 7] = "PASS",
        t[t.HELP = 8] = "HELP", t[t.OVER = 9] = "OVER";
}(P || (P = {}));

var M;

! function(t) {
    t[t.BEGIN = 0] = "BEGIN", t[t.SKILLON = 1] = "SKILLON", t[t.SKILLEND = 2] = "SKILLEND",
        t[t.BEGINCHOOSE = 3] = "BEGINCHOOSE", t[t.MOVECHOOSE = 4] = "MOVECHOOSE", t[t.ENDCHOOSE = 5] = "ENDCHOOSE",
        t[t.NULL = 6] = "NULL";
}(M || (M = {}));

var B = function(t) {
    function i() {
        var i = t.call(this) || this;
        i.KONGTOUFIRSTSHOW = 20, i.KONGTOUWAIT = 60, i.BOXFIRSTSHOW = 50, i.BOXWAIT = 60,
            i.BOXSHOW = 190, i.BUILDING_TIME = 5, i.AUTO_BUILD_TIME = 20, i.AUTO_BUILD_MAX_COUNT = 15,
            i.AUTO_BUILD_BUY_COUNT = 30, i.DIAMOND_MIN = 55, i.DIAMOND_MAX = 99, i.DLTIME = 6,
            i._stage = P.WAIT, i._fingerStage = M.NULL, i._allFloors = [], i._allFloors2 = [],
            i._allTower = [], i._allEnemy = [], i._allBuLLet = [], i._allHurt = [], i._allReward = [],
            i._monsterWay = [], i._effects = [], i._hurtEffects = [], i._isCritGold = !1, i._isCritDiamond = !1,
            i._powerNow = 0, i._isCleanKongtou = !1, i._quickBuildNum = 1, i._quickBuildGold = 1,
            i._quickBuildTex = "", i._boxNum = 0, i._boxTime = 0, i._boxRunTime = 0, i._boxNum2 = 4,
            i._boxTime2 = 0, i._boxRunTime2 = 0, i.armSkill_0 = null, i.armSkill_1 = null, i.armSkill_2 = null,
            i.armSkill_3 = null, i.endArm = null, i._help2_time = 0, i._help3_time = 0, i._help4_time = 0,
            i._help6_time = 0, i._help8_time = 0, i._addRewardWarningWxE = !1, i._addRewardWarningWx = !1,
            i._addRewardEndWxE = !1, i._addRewardEndWx = !1, i._addRewardEndWxPosY = 0, i._addRewardWarningStr = "",
            i._isIn24 = !1, i._startTime = -1, i._lastTime = -1, i._isGameEnd = !1, i._runTime = 0,
            i.showFreeTowerTime = -30, i.yoffset = 999999, i.xoffset = 0, i.skinName = "resource/eui_skins/MySkin/MyGameSkin.exml",
            i._missionNow = b.instance.missionNow, i._waveNow = b.instance.waveNow, i._rowMax = 6,
            i._columnMax = 6, T.buildMax = E.getUpGradeNum(1), i._hammer = b.instance.hammer,
            i._autoBuild = b.instance.autoBuild, i._buildTime = i.BUILDING_TIME, i._autoBuildTime = i.AUTO_BUILD_TIME,
            i._killEnemyOneWave = 0, i._isNeedMove = !1, i._fingerStage = M.NULL, i.initObj(),
            i._kongtouShow = !1, i._baoxiangShow = !1, i._kongtouTime = i.KONGTOUFIRSTSHOW,
            i._baoxiangTime = i.BOXFIRSTSHOW, i._baoxiangRealy = !1, i._baoxiangShowTime = -1,
            i.erji_group.visible = !1, i.sanji_group.visible = !1, i.system_button_0.touchEnabled = !0,
            i.system_button_1.touchEnabled = !0, i.system_button_2.touchEnabled = !0, i.system_button_3.touchEnabled = !0,
            i.push_button.touchEnabled = !0, i.pushbox_button.touchEnabled = !0, i.pushbox_button0.touchEnabled = !0,
            i.skill_button_0.touchEnabled = !0, i.skill_button_1.touchEnabled = !0, i.skill_button_2.touchEnabled = !0,
            i.skill_button_3.touchEnabled = !0, i.kongtou_button.touchEnabled = !0, i.box_button.touchEnabled = !0,
            i.box_group.touchChildren = !0, i.skill_time_0.visible = !1, i.skill_time_1.visible = !1,
            i.skill_time_2.visible = !1, i.skill_time_3.visible = !1, i.freeTower.visible = !1,
            i.skill_pb_0 = new N(43, .6, E.SKILL_COLDTIME_0, 0), i.skill_add2_0.addChild(i.skill_pb_0),
            i.skill_pb_0.x = 43, i.skill_pb_0.y = 43, i.skill_pb_1 = new N(43, .6, E.SKILL_COLDTIME_1, 0),
            i.skill_add2_1.addChild(i.skill_pb_1), i.skill_pb_1.x = 43, i.skill_pb_1.y = 43,
            i.skill_pb_2 = new N(43, .6, E.SKILL_COLDTIME_2, 0), i.skill_add2_2.addChild(i.skill_pb_2),
            i.skill_pb_2.x = 43, i.skill_pb_2.y = 43, i.skill_pb_3 = new N(43, .6, E.SKILL_COLDTIME_3, 0),
            i.skill_add2_3.addChild(i.skill_pb_3), i.skill_pb_3.x = 43, i.skill_pb_3.y = 43;
        var s = RES.getRes("eff_skill_json"),
            n = RES.getRes("eff_skill_png"),
            o = new e.MovieClipDataFactory(s, n);
        i.armSkill_0 = new e.MovieClip(o.generateMovieClipData("eff_skill")), i.skill_add_0.addChild(i.armSkill_0),
            i.armSkill_0.visible = !1, i.armSkill_1 = new e.MovieClip(o.generateMovieClipData("eff_skill")),
            i.skill_add_1.addChild(i.armSkill_1), i.armSkill_1.visible = !1, i.armSkill_2 = new e.MovieClip(o.generateMovieClipData("eff_skill")),
            i.skill_add_2.addChild(i.armSkill_2), i.armSkill_2.visible = !1, i.armSkill_3 = new e.MovieClip(o.generateMovieClipData("eff_skill")),
            i.skill_add_3.addChild(i.armSkill_3), i.armSkill_3.visible = !1;
        var r = RES.getRes("eff_end_json"),
            h = RES.getRes("eff_end_png"),
            u = new e.MovieClipDataFactory(r, h);
        i.endArm = new e.MovieClip(u.generateMovieClipData("eff_end")), i.tower_group.addChild(i.endArm),
            i.endArm.gotoAndPlay("act", -1), i.endArm.visible = !1, i.endArm.anchorOffsetX = 48,
            i.endArm.anchorOffsetY = 107, i._box = new I(), i.boxAdd_group.addChild(i._box),
            e.Tween.get(i.freeTowerEffect_bg, {
                loop: !0
            }).to({
                rotation: 359
            }, 5e3).set({
                rotation: 0
            }), e.Tween.get(i.freeTowerEffect_front, {
                loop: !0
            }).set({
                alpha: 0,
                rotation: 0
            }).wait(1e3).to({
                alpha: 1,
                rotation: 60
            }, 600).to({
                rotation: 120
            }, 600).to({
                alpha: 0,
                rotation: 180
            }, 600), i.getQuickBuild(), i._goldOfALLEnemy = E.getMonsterGold(i._missionNow, i._waveNow),
            i._classNow = E.getMonsterMission(i._missionNow, i._waveNow), T.goldOfTask = i._goldOfALLEnemy,
            i.reinitFloorBegin(), i.reinitMainTower(), i.continueCardAtStart(), i.sell_img.visible = !1,
            i.sell_tishi.visible = !1, i.lock_img_0.visible = !1, i.lock_img_1.visible = !1,
            i.lock_img_2.visible = !1, i.lock_img_3.visible = !1, D.getHour(D.abs(b.instance.fristTime - D.getSystemTime())) < 24 ? i._isIn24 = !0 : i._isIn24 = !1,
            b.instance.helpInGame_01 ? (i._stage = P.WAIT, i.help1_group.visible = !1) : (i._stage = P.HELP,
                i.help1_group.visible = !0, i.setHelp1()), b.instance.helpInGame_02 ? (i.build_pb.visible = !0,
                i.build_num.visible = !0, i.build_button.visible = !0, i.build_pbdi.visible = !0,
                i.build_frame.visible = !0, i.hammer_img.visible = !0, i._help2_time = 0) : (i.build_pb.visible = !1,
                i.build_num.visible = !1, i.build_button.visible = !1, i.build_pbdi.visible = !1,
                i.build_frame.visible = !1, i.hammer_img.visible = !1, i._help2_time = 2), i.help2_group.visible = !1,
            b.instance.helpInGame_03 ? (i.skill_group_0.visible = !0, i.skill_group_1.visible = !0,
                i.skill_group_2.visible = !0, i.skill_group_3.visible = !0) : (i.skill_group_0.visible = !1,
                i.skill_group_1.visible = !1, i.skill_group_2.visible = !1, i.skill_group_3.visible = !1),
            i.help3_group.visible = !1, i._help3_time = 0, b.instance.helpInGame_04 ? (i.system_button_1.visible = !0,
                i.system_describe_1.visible = !0, i.lock_img_1.visible = !1) : (i.system_button_1.visible = !1,
                i.system_describe_1.visible = !1, i.lock_img_1.visible = !0), i.help4_group.visible = !1,
            i._help4_time = 0, b.instance.helpInGame_06 ? (i.system_button_2.visible = !0, i.system_describe_2.visible = !0,
                i.lock_img_2.visible = !1) : (i.system_button_2.visible = !1, i.system_describe_2.visible = !1,
                i.lock_img_2.visible = !0), i.help6_group.visible = !1, i._help6_time = 0, b.instance.helpInGame_08 ? (i.system_button_3.visible = !0,
                i.system_describe_3.visible = !0, i.tower_level.visible = !0, i.tower_ing.visible = !0,
                i.lock_img_3.visible = !1) : (i.system_button_3.visible = !1, i.system_describe_3.visible = !1,
                i.tower_level.visible = !1, i.tower_ing.visible = !1, i.lock_img_3.visible = !0),
            i.help8_group.visible = !1, i._help8_time = 0, /*"debug" != a.BUILD_TYPE && */ D.playBGM("bgm_mp3"),
            i.help_autoBuild.visible = !1, E.getRedOfTask(), E.getRedOfUpGrad(), i.autoBuild.visible = b.instance.missionNow >= 6,
            i.yoffset >= 99999 && (i.yoffset = T.yoffset, i.xoffset = T.xoffset);
        var _ = i.yoffset - 55;
        return T.ytemp = i.yoffset - 55, 0 > _ && (_ = 0, T.ytemp = 0), i.top_group.y = -55 - _,
            console.log("23333333"), console.log(i.top_group.y), 0 > (_ = i.yoffset - 42) && (_ = 0),
            i.bottom_group.y = 1178 + _, i.rushPush(), i.rushPush2(), ht.showQuan(), e.startTick(i.run, i),
            e.Tween.removeTweens(i.mogameEffectImg), e.Tween.get(i.mogameEffectImg, {
                loop: !0
            }).set({
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }).to({
                alpha: 0,
                scaleX: 1.5,
                scaleY: 1.5
            }, 2e3).wait(8e3), e.Tween.get(i.pushbox_group, {
                loop: !0
            }).to({
                rotation: -15
            }, 100).to({
                rotation: 15
            }, 200).to({
                rotation: -15
            }, 200).to({
                rotation: 15
            }, 200).to({
                rotation: 0
            }, 100).wait(1e3), e.Tween.get(i.pushbox_group0, {
                loop: !0
            }).to({
                rotation: -15
            }, 100).to({
                rotation: 15
            }, 200).to({
                rotation: -15
            }, 200).to({
                rotation: 15
            }, 200).to({
                rotation: 0
            }, 100).wait(1e3), i;
    }
    return s(i, t), i.GetInstance = function() {
        return null == i._instance && (i._instance = new i()), i._instance;
    }, i.prototype.touch_qd = function() {
        D.playSE("button_mp3"), T.stopGame(), this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.SIGNIN)),
            T.isBannerShow || ht.showBanner();
    }, i.prototype.reset = function() {}, i.prototype.initButton = function() {
        this.touch_group.addEventListener(e.TouchEvent.TOUCH_BEGIN, this.startBackFun, this),
            this.touch_group.addEventListener(e.TouchEvent.TOUCH_MOVE, this.controlMove, this),
            this.touch_group.addEventListener(e.TouchEvent.TOUCH_END, this.endBackFun, this),

            this.build_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.addTowerByBuild, this),
            this.system_button_0.addEventListener(e.TouchEvent.TOUCH_TAP, this.showTask, this),
            this.system_button_1.addEventListener(e.TouchEvent.TOUCH_TAP, this.showUpgrade, this),
            this.system_button_2.addEventListener(e.TouchEvent.TOUCH_TAP, this.showShop, this),
            this.system_button_3.addEventListener(e.TouchEvent.TOUCH_TAP, this.quickBuildTower, this),
            this.push_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.showPush, this),
            this.moregameButton.addEventListener(e.TouchEvent.TOUCH_TAP, this.showMoregame, this),
            this.help_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.showHelp, this),
            this.option_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.showOption, this),
            this.rank_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.showRank, this),
            this.skill_button_0.addEventListener(e.TouchEvent.TOUCH_TAP, this.skill_0, this),
            this.skill_button_1.addEventListener(e.TouchEvent.TOUCH_TAP, this.skill_1, this),
            this.skill_button_2.addEventListener(e.TouchEvent.TOUCH_TAP, this.skill_2, this),
            this.skill_button_3.addEventListener(e.TouchEvent.TOUCH_TAP, this.skill_3, this),
            this.kongtou_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.showKongTou, this),
            this.box_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.showBox, this), this.gold_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.showGold, this),
            this.diamond_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.showDiamond, this),
            this.pushbox_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.pushBox, this),
            this.pushbox_button0.addEventListener(e.TouchEvent.TOUCH_TAP, this.pushBox2, this),
            this.help2_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp2, this),
            this.help3_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp3, this),
            this.help4_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp4, this),
            this.help6_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp6, this),
            this.help8_button.addEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp8, this),
            this.autoBuildButton.addEventListener(e.TouchEvent.TOUCH_TAP, this.doAutoBuild, this),
            this.freeTowerButton.addEventListener(e.TouchEvent.TOUCH_TAP, this.showGetFreeTower, this),
            this.help_autoBuild.addEventListener(e.TouchEvent.TOUCH_TAP, this.closeHelp_9, this),
            this.button_qd.addEventListener(e.TouchEvent.TOUCH_TAP, this.touch_qd, this);
    }, i.prototype.removeButton = function() {
        this.touch_group.removeEventListener(e.TouchEvent.TOUCH_BEGIN, this.startBackFun, this),
            this.touch_group.removeEventListener(e.TouchEvent.TOUCH_MOVE, this.controlMove, this),
            this.touch_group.removeEventListener(e.TouchEvent.TOUCH_END, this.endBackFun, this),
            this.build_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.addTowerByBuild, this),
            this.system_button_0.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showTask, this),
            this.system_button_1.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showUpgrade, this),
            this.system_button_2.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showShop, this),
            this.system_button_3.removeEventListener(e.TouchEvent.TOUCH_TAP, this.quickBuildTower, this),
            this.push_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showPush, this),
            this.moregameButton.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showMoregame, this),
            this.help_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showHelp, this),
            this.option_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showOption, this),
            this.rank_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showRank, this),
            this.skill_button_0.removeEventListener(e.TouchEvent.TOUCH_TAP, this.skill_0, this),
            this.skill_button_1.removeEventListener(e.TouchEvent.TOUCH_TAP, this.skill_1, this),
            this.skill_button_2.removeEventListener(e.TouchEvent.TOUCH_TAP, this.skill_2, this),
            this.skill_button_3.removeEventListener(e.TouchEvent.TOUCH_TAP, this.skill_3, this),
            this.kongtou_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showKongTou, this),
            this.box_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showBox, this),
            this.gold_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showGold, this),
            this.diamond_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showDiamond, this),
            this.pushbox_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.pushBox, this),
            this.pushbox_button0.removeEventListener(e.TouchEvent.TOUCH_TAP, this.pushBox2, this),
            this.help2_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp2, this),
            this.help3_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp3, this),
            this.help4_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp3, this),
            this.help6_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp6, this),
            this.help8_button.removeEventListener(e.TouchEvent.TOUCH_TAP, this.stopHelp8, this),
            this.autoBuildButton.removeEventListener(e.TouchEvent.TOUCH_TAP, this.doAutoBuild, this),
            this.freeTowerButton.removeEventListener(e.TouchEvent.TOUCH_TAP, this.showGetFreeTower, this),
            this.help_autoBuild.removeEventListener(e.TouchEvent.TOUCH_TAP, this.closeHelp_9, this),
            this.button_qd.removeEventListener(e.TouchEvent.TOUCH_TAP, this.touch_qd, this);
    }, i.prototype.initObj = function() {
        this.initButton(), this.initFloor(), this.initTower(), this.initMainTower(), this.initShowTower(),
            this.initEnemy(), this.initHurNum(), this.initRewardItem(), this._waitTime = 1,
            this._stage = P.WAIT, this._fingerStage = M.BEGIN;
    }, i.prototype.getCurLandIndex = function() {
        var t = new Date(),
            e = Number(t.getMonth()),
            i = Number(t.getDate());
        if (console.log("curMonth : " + e), console.log("curDay : " + i), b.instance.signIn_month != e || b.instance.signIn_day != i) {
            if (-1 == b.instance.signIn_index) return b.instance.signIn_month = e, b.instance.signIn_day = i,
                void(b.instance.signIn_index = 0);
            if (e >= b.instance.signIn_month) {
                var s = 0;
                s = i > b.instance.signIn_day ? i - b.instance.signIn_day : 31 - b.instance.signIn_day + i,
                    b.instance.signIn_month = e, b.instance.signIn_day = i, b.instance.signIn_index = (s + b.instance.signIn_index) % 7,
                    b.instance.setSignInData(b.instance.signIn_index, 0, 0), b.instance.setSignInData(b.instance.signIn_index, 1, 0);
            }
        }
    }, i.prototype.rushPush = function() {
        var t = this;
        if (!(v.instance.BLACK_4 > 0 && platform.getJumpData("moregame").length > 0)) return this.pushbox_group.visible = !1,
            this.push_button.visible = !1, this.moregameButton.visible = !1, void(this.push_red.visible = !1);
        if (this.pushbox_group.visible = !0, this.push_button.visible = !0, this.moregameButton.visible = !0,
            this.push_red.visible = !0, T.ISONLINE)
            if (this._boxNum >= 0)
                if (platform.getJumpData("moregame")[this._boxNum]) {
                    this.pushbox_group.visible = !0;
                    try {
                        RES.getResByUrl(platform.getJumpData("moregame")[this._boxNum].icon[0], function(e, i) {
                            t.pushbox_icon.texture = e;
                        }, this, RES.ResourceItem.TYPE_IMAGE);
                    } catch (t) {
                        this.pushbox_icon.texture = RES.getRes("icon-144_png");
                    }
                } else this.pushbox_group.visible = !1;
        else this.pushbox_group.visible = !1;
    }, i.prototype.rushPush2 = function() {
        var t = this;
        if (!(v.instance.BLACK_4 > 0 && platform.getJumpData("moregame").length > 0)) return this.pushbox_group0.visible = !1,
            this.push_button.visible = !1, this.moregameButton.visible = !1, void(this.push_red.visible = !1);
        if (this.pushbox_group0.visible = !0, this.push_button.visible = !0, this.moregameButton.visible = !0,
            this.push_red.visible = !0, T.ISONLINE)
            if (this._boxNum2 >= 0)
                if (platform.getJumpData("moregame")[this._boxNum2]) {
                    this.pushbox_group0.visible = !0;
                    try {
                        RES.getResByUrl(platform.getJumpData("moregame")[this._boxNum2].icon[0], function(e, i) {
                            t.pushbox_icon0.texture = e;
                        }, this, RES.ResourceItem.TYPE_IMAGE);
                    } catch (t) {
                        this.pushbox_icon0.texture = RES.getRes("icon-144_png");
                    }
                } else this.pushbox_group0.visible = !1;
        else this.pushbox_group0.visible = !1;
    }, i.prototype.pushBox = function() {
        platform.getJumpData("moregame")[this._boxNum] && ht.jumpApp(platform.getJumpData("moregame")[this._boxNum], "主界面猜玩乐园");
    }, i.prototype.pushBox2 = function() {
        platform.getJumpData("moregame")[this._boxNum2] && ht.jumpApp(platform.getJumpData("moregame")[this._boxNum2], "主界面猜玩乐园");
    }, i.prototype.initFloor = function() {
        for (var t = 0; 36 > t; t++) {
            var e = new x(t);
            this._allFloors.push(e), this.frame_group.addChild(this._allFloors[t]);
            var i = new x(t);
            this._allFloors2.push(i), this.frame2_group.addChild(this._allFloors2[t]);
        }
        this.frame2_group.visible = !1;
    }, i.prototype.initEnemy = function() {
        for (var t = 0; 20 > t; t++) {
            var e = new L();
            this._allEnemy.push(e);
        }
    }, i.prototype.initHurNum = function() {
        for (var t = 0; 40 > t; t++) {
            var e = new U();
            this._allHurt.push(e);
        }
    }, i.prototype.initRewardItem = function() {
        for (var t = 0; 40 > t; t++) {
            var e = new H();
            this._allReward.push(e);
        }
    }, i.prototype.initMainTower = function() {
        this._mainTower = new F(), this.tower_group.addChild(this._mainTower);
    }, i.prototype.reinitMainTower = function() {
        var t = E.getTowerRecord(b.instance.powerMost);
        this._mainTower.reinitMain(t);
    }, i.prototype.initShowTower = function() {
        this._showTower = new Y(), this.show_group.addChild(this._showTower);
    }, i.prototype.reinitShowTower = function(t, e, i, s, n, o, a, r) {
        void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === s && (s = 0), void 0 === n && (n = ""),
            void 0 === o && (o = 0), void 0 === a && (a = 0), void 0 === r && (r = 0), t >= 0 ? (this._showTower.reinit(t, e, i, s, n, o, a, r),
                this._showTower.visible = !0) : (this._showTower.remove(), this._showTower.visible = !1);
    }, i.prototype.reinitFloorBegin = function() {
        var t = E.getWaveMap(this._classNow),
            e = E.getWaveRoad(this._classNow);
        this._monsterWay = e, t.length < this._allFloors.length && (t = [0, 201, 0, 0, 201, 0, 103, 100, 1, 1, 101, 102, 105, 1, 1, 1, 1, 105, 105, 1, 1, 1, 1, 105, 101, 102, 1, 1, 103, 100, 0, 101, 104, 104, 100, 0]);
        for (i = 0; i < this._allFloors.length; i++) this._allFloors[i].reinit(t[i]);
        for (var i = 0; i < this._allFloors2.length; i++) this._allFloors2[i].reinit(t[i]);
        this.reinitEnd();
    }, i.prototype.reinitEnd = function() {
        var t = D.roundDown(this._monsterWay[this._monsterWay.length - 1] / 6),
            e = 106 * (this._monsterWay[this._monsterWay.length - 1] % 6 + .5),
            i = 106 * (t + .5);
        this.endArm.x = e, this.endArm.y = i;
    }, i.prototype.reinitFloor = function() {
        var t = E.getWaveRoad(this._classNow);
        this._monsterWay = t;
        var e = E.getWaveMap(this._classNow);
        e.length < this._allFloors.length && (e = [0, 201, 0, 0, 201, 0, 103, 100, 1, 1, 101, 102, 105, 1, 1, 1, 1, 105, 105, 1, 1, 1, 1, 105, 101, 102, 1, 1, 103, 100, 0, 101, 104, 104, 100, 0]),
            this.frame2_group.visible = !0, this.imgY = 640;
        for (var i = 0; i < this._allFloors.length; i++) this._allFloors[i].reinit(e[i]);
        this.reinitEnd();
    }, i.prototype.reinitFloor2 = function() {
        var t = E.getWaveMap(this._classNow);
        t.length < this._allFloors2.length && (t = [0, 201, 0, 0, 201, 0, 103, 100, 1, 1, 101, 102, 105, 1, 1, 1, 1, 105, 105, 1, 1, 1, 1, 105, 101, 102, 1, 1, 103, 100, 0, 101, 104, 104, 100, 0]);
        for (var e = 0; e < this._allFloors2.length; e++) this._allFloors2[e].reinit(t[e]);
    }, i.prototype.reinitHurtNum = function(t, e, i, s) {
        for (var n = 0; n < this._allHurt.length; n++)
            if (this._allHurt[n].isClean) return this._allHurt[n].reset(t, e, i, s),
                void this.show_group.addChild(this._allHurt[n]);
        var o = new U();
        this._allHurt.push(o), o.reset(t, e, i, s), this.show_group.addChild(o);
    }, i.prototype.addReward = function(t, e, i, s, n) {
        void 0 === s && (s = 0), void 0 === n && (n = !1);
        for (var o = 0; i > o; o++) this.reinitRewardItem(t, e, D.random(40, 80) * (o % 2 == 0 ? 1 : -1), D.random(100, -100), s, n, o);
    }, i.prototype.reinitRewardItem = function(t, e, i, s, n, o, a) {
        void 0 === n && (n = 0), void 0 === o && (o = !1);
        for (var r = 0; r < this._allReward.length; r++)
            if (this._allReward[r].isClean) return this._allReward[r].reset(t, e, i, s, n, o, a),
                void this.reward_group.addChild(this._allReward[r]);
        var h = new H();
        this._allReward.push(h), h.reset(t, e, i, s, n, o, a), this.reward_group.addChild(h);
    }, i.prototype.reinitEnemy = function() {
        var t = E.getMonsterHP(this._missionNow, this._waveNow),
            e = E.getMonsterNumber(this._missionNow, this._waveNow);
        this._goldOfALLEnemy = E.getMonsterGold(this._missionNow, this._waveNow), T.goldOfTask = this._goldOfALLEnemy,
            this._killEnemyOneWave = 0;
        for (var i = [], s = 0; s < e.length; s++)
            for (var n = 0; n < e[s]; n++) switch (s) {
                case 0:
                    1 == e.length ? i.push(A.LARGE) : i.push(A.SMALL);
                    break;

                case 1:
                    i.push(A.MIDDLE);
                    break;

                case 2:
                    i.push(A.LARGE);
            }
        if (1 == i.length) return this._allEnemy[0].reinit(A.BOSS, t, this._monsterWay, 1),
            this.monster_group.addChild(this._allEnemy[0]), this._goldOfOneEnemy = this._goldOfALLEnemy,
            this.showWarning(), void(b.instance.helpInGame_03 || (this._help3_time = 4));
        D.randomSort(i);
        var o = -999;
        this._baoxiangRealy && (o = D.random(1, i.length), this._baoxiangRealy = !1), i.push(A.LARGE);
        for (var a = i.length; a > 0; a--) o == a - 1 ? this._allEnemy[a - 1].reinit(i[i.length - a], t, this._monsterWay, i.length - a + 1, !0) : this._allEnemy[a - 1].reinit(i[i.length - a], t, this._monsterWay, i.length - a + 1),
            this.monster_group.addChild(this._allEnemy[a - 1]);
        this._goldOfOneEnemy = this._goldOfALLEnemy / i.length;
    }, i.prototype.initTower = function() {
        for (var t = 0; 16 > t; t++) {
            var e = new F();
            this._allTower.push(e), this.tower_group.addChild(e), e.visible = !1;
        }
        this._showChecksTower = new F(), this.show_group.addChild(this._showChecksTower),
            this._showChecksTower.visible = !1;
    }, i.prototype.addTower = function(t) {
        for (var e = [], i = 0; i < this._allFloors.length; i++) this._allFloors[i].isCanAdd && !this._allFloors[i].isAlreadyAdd && e.push(this._allFloors[i].ID);
        if (e.length > 0)
            for (var s = e[D.random(0, e.length - 1)], n = 0; n < this._allTower.length; n++)
                if (!this._allTower[n].isShow) {
                    var o = E.getTowerRecord(t);
                    return this._allTower[n].reinit(this._allFloors[s].row, this._allFloors[s].column, o),
                        this._allTower[n].visible = !0, void this._allFloors[s].addTower();
                }
    }, i.prototype.addTowerByPosition = function(t, e, i) {
        var s = this.getFloorByPosition(t, e);
        if (s.isCanAdd && !s.isAlreadyAdd)
            for (var n = 0; n < this._allTower.length; n++)
                if (!this._allTower[n].isShow) {
                    var o = E.getTowerRecord(i);
                    return this._allTower[n].reinit(t, e, o, !0), this._allTower[n].visible = !0, void s.addTower();
                }
    }, i.prototype.addTowerByBuild = function() {
        if (D.playSE("button_mp3"), this._hammer > 0) {
            for (var t = 0; t < this._allFloors.length; t++)
                if (this._allFloors[t].isCanAdd && !this._allFloors[t].isAlreadyAdd) {
                    this._hammer -= 1, b.instance.hammer = this._hammer;
                    var e = b.instance.powerMost - 10 > 0 ? b.instance.powerMost - 10 : 1;
                    return D.randomf(1) < E.getUpGradeNum(4) && b.instance.powerMost > 1 && (e += 1,
                        this.showNotice("Skip")), this.addTower(e), b.instance.achNeedNum_02 += 1, void(b.instance.taskNeedNum_03 += 1);
                }
            this.showNotice("No place");
        } else this.showHammer();
    }, i.prototype.getCanBuild = function() {
        for (var t = 0; t < this._allFloors.length; t++)
            if (this._allFloors[t].isCanAdd && !this._allFloors[t].isAlreadyAdd) return !0;
        return !1;
    }, i.prototype.addTowerByShop = function(t, e) {
        for (var i = 0; i < this._allFloors.length; i++)
            if (this._allFloors[i].isCanAdd && !this._allFloors[i].isAlreadyAdd) return void(0 > e ? (b.instance.getTowerToday -= 1,
                this.addTower(t), this.getQuickBuild(), b.instance.taskNeedNum_07 += 1) : e <= b.instance.gold && (this.showNotice("Successful purchase, The turret has been built for you"),
                b.instance.gold = Number(b.instance.gold) - Number(e), b.instance.setTowerBuyNumOffset(t, 1),
                this.getQuickBuild(), this.addTower(t), b.instance.taskNeedNum_07 += 1));
        this.showNotice("No place");
    }, i.prototype.findSameOfAll = function(t) {
        for (var e = 0; e < this._allTower.length; e++) this._allTower[e].isShow && this._allTower[e].level == t && this._allTower[e].beSame();
    }, i.prototype.cancelSameOfAll = function() {
        for (var t = 0; t < this._allTower.length; t++) this._allTower[t].isShow && this._allTower[t].cancelSame();
    }, i.prototype.getIsMoveOfAll = function() {
        for (var t = 0; t < this._allTower.length; t++)
            if (this._allTower[t].isMove) return !0;
        return !1;
    }, i.prototype.setIsMoveOfAll = function() {
        for (var t = 0; t < this._allTower.length; t++) this._allTower[t].MoveTower();
        this._mainTower.MoveTower();
    }, i.prototype.closeErji = function() {
        this.erji_group.visible = !1, this.erji_group.touchChildren = !0, this.erji_group.touchThrough = !1,
            this.erji_group.touchEnabled = !0, T.resumeGame(), T.isBannerShow && ht.closeBanner();
    }, i.prototype.closeSanji = function() {
        this.sanji_group.visible = !1, this.erji_group.visible || (T.resumeGame(), T.isBannerShow && ht.closeBanner());
    }, i.prototype.showHelp = function() {
        D.playSE("button_mp3"), T.stopGame(), this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.HELP)),
            T.isBannerShow || ht.showBanner(), ht.showInterstitialAd();
    }, i.prototype.showShop = function() {
        D.playSE("button_mp3"), T.stopGame(), this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.SHOP)),
            T.isBannerShow || ht.showBanner();
    }, i.prototype.showGunLvUp = function() {
        T.stopGame(), this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.GUNLVUP));
    }, i.prototype.showNotice = function(t) {
        void 0 === t && (t = ""), ut.setType(t), this.reward_group.addChild(u.getMenu(h.NOTICE));
    }, i.prototype.showTask = function() {
        D.playSE("button_mp3"), T.stopGame(), this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.TASK));
    }, i.prototype.showPush = function() {
        D.playSE("button_mp3"), v.instance.BLACK_4 > 0 && platform.getJumpData("moregame").length > 0 && (T.stopGame(),
            pt.jumpStr = "抽屉导流窗口", u.stage.getChildAt(0).addChild(u.getMenu(h.PUSH)));
    }, i.prototype.showMoregame = function() {
        D.playSE("button_mp3"), v.instance.BLACK_4 > 0 && platform.getJumpData("moregame").length > 0 && (T.stopGame(),
            pt.jumpStr = "暂停导流窗口", u.stage.getChildAt(0).addChild(u.getMenu(h.PUSH)));
    }, i.prototype.showBox = function() {
        D.playSE("button_mp3"), T.stopGame(), this._missionNow <= 10 ? ft.setType(1, 0, D.random(this.DIAMOND_MIN, this.DIAMOND_MAX)) : D.randombool() ? ft.setType(1, 0, D.random(this.DIAMOND_MIN, this.DIAMOND_MAX)) : ft.setType(1, 1, Number(5 * this._goldOfALLEnemy)),
            this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.SUPPLY)), this._baoxiangShow = !1,
            this._box.close(), this.box_group.visible = !1, this.box_group.x = -200, this.box_group.y = -200,
            this._baoxiangTime = this.BOXWAIT;
    }, i.prototype.showKongTou = function() {
        D.playSE("button_mp3"), b.instance.taskNeedNum_04 += 1, T.stopGame(), this._missionNow <= 10 ? ft.setType(0, 0, D.random(this.DIAMOND_MIN, this.DIAMOND_MAX)) : D.randombool() ? ft.setType(0, 0, D.random(this.DIAMOND_MIN, this.DIAMOND_MAX)) : ft.setType(0, 1, Number(5 * this._goldOfALLEnemy)),
            this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.SUPPLY));
    }, i.prototype.addOtherReward = function(t, e) {
        this._missionNow <= 10 ? (b.instance.diamond += D.random(this.DIAMOND_MIN, this.DIAMOND_MAX),
            this.addReward(t, e, D.random(12, 15), 1)) : D.randombool() ? (b.instance.diamond += D.random(this.DIAMOND_MIN, this.DIAMOND_MAX),
            this.addReward(t, e, D.random(12, 15), 1)) : (b.instance.gold = Number(b.instance.gold) + Number(5 * this._goldOfALLEnemy),
            this.addReward(t, e, D.random(12, 15), 0));
    }, i.prototype.showBoxButton = function(t, e) {
        this._baoxiangShow || (this._baoxiangShow = !0, this._baoxiangShowTime = 25, this.box_group.visible = !0,
            this.box_group.x = t, this.box_group.y = e + 237, this._box.reinit());
    }, i.prototype.showKongTouButton = function() {
        this._kongtouShow || (this._kongtouShow = !0, this.kongtou_button.visible = !0,
            this.kongtou_button.x = 320, this.kongtou_button.y = -50);
    }, i.prototype.showDiamond = function() {
        T.stopGame(), this.sanji_group.visible = !0, this.sanji_group.addChild(u.getMenu(h.DIAMONDNOTENOUGH)),
            T.isBannerShow || ht.showBanner();
    }, i.prototype.showOption = function() {
        D.playSE("button_mp3"), T.stopGame(), this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.OPTIOIN));
    }, i.prototype.showRank = function() {
        D.playSE("button_mp3"), T.wxLoginInfo && (T.stopGame(), this.erji_group.visible = !0,
            this.erji_group.addChild(u.getMenu(h.RANK)));
    }, i.prototype.showWarning = function() {
        D.playSE("bossShow_mp3"), T.stopGame(), this.end_group.addChild(u.getMenu(h.BOSS));
    }, i.prototype.endWarning = function() {
        this.erji_group.visible || this.sanji_group.visible || T.resumeGame();
    }, i.prototype.showGold = function(t) {
        void 0 === t && (t = !0), T.stopGame(), this.sanji_group.visible = !0, this.sanji_group.addChild(u.getMenu(h.GOLDNOTENOUGH)),
            t && !T.isBannerShow && ht.showBanner();
    }, i.prototype.showGetFreeTower = function() {
        for (var t = 0; t < this._allFloors.length; t++)
            if (this._allFloors[t].isCanAdd && !this._allFloors[t].isAlreadyAdd) return T.stopGame(),
                this.sanji_group.visible = !0, this.sanji_group.addChild(u.getMenu(h.GET_TOWER)),
                void(T.isBannerShow || ht.showBanner());
        this.showNotice("No place");
    }, i.prototype.addFreeTower = function() {
        this.showFreeTowerTime = -120, i.GetInstance().showNotice("Successfully received"), b.instance.powerMost - 3 > 0 ? i.GetInstance().addTowerByShop(b.instance.powerMost - 3, -1) : i.GetInstance().addTowerByShop(1, -1);
    }, i.prototype.showUpgrade = function() {
        D.playSE("button_mp3"), T.stopGame(), this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.UPGRADE));
    }, i.prototype.showOffline = function() {
        T.stopGame(), this.erji_group.visible = !0, this.erji_group.addChild(u.getMenu(h.OFFLINEREWARD));
    }, i.prototype.showHammer = function() {
        T.stopGame(), this.sanji_group.visible = !0, this.sanji_group.addChild(u.getMenu(h.HAMMERNOTENOUGH)),
            T.isBannerShow || 1 == v.instance.BLACK_7 || 2 == v.instance.BLACK_7 && T.isDangerousArea;
    }, i.prototype.showAutoBuild = function() {
        T.stopGame(), this.sanji_group.visible = !0, this.sanji_group.addChild(u.getMenu(h.AUTO_BUILD_NOT_ENOUGH)),
            T.isBannerShow || 1 == v.instance.BLACK_7 || 2 == v.instance.BLACK_7 && T.isDangerousArea;
    }, i.prototype.showEnd = function(t) {
        switch (t) {
            case 0:
                D.playSE("pass_mp3"), it.setType(0, this._goldOfALLEnemy), this.end_group.addChild(u.getMenu(h.END)), !T.isBannerShow && v.instance.BLACK_8;
                break;

            case 1:
                D.playSE("pass_mp3"), T.stopGame(), it.setType(1, this._goldOfALLEnemy, 100), this.erji_group.visible = !0,
                    this.erji_group.addChild(u.getMenu(h.END)), this.endBackFun();
                break;

            case -1:
                D.playSE("lose_mp3"), it.setType(-1, this._goldOfOneEnemy * this._killEnemyOneWave),
                    this.end_group.addChild(u.getMenu(h.END));
                break;

            default:
                return void T.resumeGame();
        }
    }, i.prototype.closeEnd = function(t) {
        void 0 === t && (t = 0), 1 == t && this.closeErji();
        var e = E.getMonsterMission(this._missionNow, this._waveNow);
        e != this._classNow ? (this._classNow = e, this.reinitFloor(), this._stage = P.MOVE,
            this._isNeedMove = !0, this.endBackFun(), this.touch_group.visible = !1, this.system_button_0.touchEnabled = !1,
            this.system_button_1.touchEnabled = !1, this.push_button.touchEnabled = !1, this.pushbox_button.touchEnabled = !1,
            this.pushbox_button0.touchEnabled = !1, this.system_button_2.touchEnabled = !1,
            this.system_button_3.touchEnabled = !1, this.skill_button_0.touchEnabled = !1, this.skill_button_1.touchEnabled = !1,
            this.skill_button_2.touchEnabled = !1, this.skill_button_3.touchEnabled = !1, this.build_button.touchEnabled = !1,
            this.kongtou_button.touchEnabled = !1, this.box_button.touchEnabled = !1, this.box_group.touchChildren = !1) : (this._waitTime = 1,
            this._stage = P.WAIT);
    }, i.prototype.moveFloor = function() {
        var t = this;
        this.endArm.visible = !1, this.setIsMoveOfAll(), e.Tween.get(this).to({
            imgY: 0
        }, 1500, e.Ease.sineInOut).call(function() {
            t.frame_group.x = 320, t.frame2_group.visible = !1, t.frame2_group.x = 320, t.reinitFloor2();
        });
    }, Object.defineProperty(i.prototype, "imgY", {
        get: function() {
            return this._imgY;
        },
        set: function(t) {
            this._imgY = t, this.frame_group.x = t + 320, this.frame2_group.x = t - 320;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.run = function(t) {
        this._startTime < 0 && (this._startTime = D.getSystemTime(), this._lastTime = this._startTime);
        var e = D.getSystemTime(),
            s = (e - this._lastTime) / 1e3;
        s > .02 && (s = .02), this._lastTime = e;
        for (h = 0; h < this._allHurt.length; h++) this._allHurt[h].isClean || this._allHurt[h].run(s);
        if (this._effects.length > 0)
            for (h = 0; h < this._effects.length; h++)
                if (this._effects[h].isClean) {
                    o = this._effects[h];
                    this._effects.splice(h, 1), o.clean();
                }
        if (this._hurtEffects.length > 0)
            for (h = 0; h < this._hurtEffects.length; h++)
                if (this._hurtEffects[h].isClean) {
                    o = this._hurtEffects[h];
                    this._hurtEffects.splice(h, 1), o.clean();
                }
        if (this._box.isShow && this._box.run(s), this._showTower.visible && this._showTower.run(s),
            this._kongtouShow && this._isCleanKongtou && (this._isCleanKongtou = !1, this._kongtouShow = !1,
                this.kongtou_button.visible = !1, this.kongtou_button.x = -200, this.kongtou_button.y = -200,
                this._kongtouTime = this.KONGTOUWAIT), this._addRewardWarningWxE && (this._addRewardWarningWxE = !1,
                i.GetInstance().showNotice(this._addRewardWarningStr)), this._addRewardWarningWx && (this._addRewardWarningWx = !1,
                this._addRewardWarningWxE = !0), this._addRewardEndWxE && (this._addRewardEndWxE = !1,
                i.GetInstance().addReward(500, this._addRewardEndWxPosY, D.random(12, 15), 0, !0),
                i.GetInstance().showNotice("Successfully received")), this._addRewardEndWx && (this._addRewardEndWx = !1,
                this._addRewardEndWxE = !0), this._buildTime > 0 ? this._hammer < T.buildMax && (this._buildTime -= s) : this._hammer < T.buildMax && (this._buildTime = this.BUILDING_TIME,
                this._hammer += 1, b.instance.hammer = this._hammer), this._autoBuildTime > 0 ? this._autoBuild < this.AUTO_BUILD_MAX_COUNT && (this._autoBuildTime -= s) : this._autoBuild < this.AUTO_BUILD_MAX_COUNT && (this._autoBuildTime = this.AUTO_BUILD_TIME,
                this._autoBuild += 1, b.instance.autoBuild = this._autoBuild), platform.isShowRank && (T.isShowRank || (T.wxLoginInfo = platform.wxLoginInfo,
                T.isShowRank = !0, this.showRank())), this.rushUI(), !T.isAddOfflineReward)
            if (T.isAddOfflineReward = !0,
                b.instance.offLineTime > 0) {
                if (b.instance.helpInGame_01) {
                    T.offLineTime = D.getSystemTime() - b.instance.offLineTime, this._hammer += D.roundUp(T.offLineTime / (1e3 * this.BUILDING_TIME)),
                        this._hammer >= T.buildMax && (this._hammer = T.buildMax), b.instance.hammer = this._hammer;
                    for (n = T.offLineTime; n >= 1e3 * this.AUTO_BUILD_TIME && this._autoBuild < this.AUTO_BUILD_MAX_COUNT;) this._autoBuild++,
                        n -= 1e3 * this.AUTO_BUILD_TIME;
                    T.offLineTime >= 3e5 ? this.showOffline() : b.instance.offLineTime = D.getSystemTime(),
                        b.instance.offLineTime = D.getSystemTime();
                }
            } else b.instance.offLineTime = D.getSystemTime();
        if (T.isStop) return !0;
        if (b.instance.helpInGame_06 && b.instance.getTowerToday > 0) {
            this.showFreeTowerTime += 1 / 60, this.showFreeTowerTime > 60 && (this.showFreeTowerTime = -120), !this.freeTower.visible && this.showFreeTowerTime >= 0 && platform.sendStatistics("展示免费炮塔", ""),
                this.freeTower.visible = this.showFreeTowerTime >= 0;
            var n = D.roundDown(60 - this.showFreeTowerTime);
            this.freeTowerTime.text = "0" + D.roundDown(n / 60) + ":" + D.roundDown(n % 60 / 10) + D.roundDown(n % 60 % 10);
        } else this.freeTower.visible = !1;
        if (this._boxTime <= 0 ? (this._boxNum += 1, this._boxNum >= platform.getJumpData("moregame").length && (this._boxNum = 0),
                this._boxTime = this.DLTIME, this.rushPush()) : this._boxTime -= s, this._boxTime2 <= 0 ? (this._boxNum2 += 1,
                this._boxNum2 >= platform.getJumpData("moregame").length && (this._boxNum2 = 0),
                this._boxTime2 = this.DLTIME, this.rushPush2()) : this._boxTime2 -= s, T.isSkill_0 ? this.skill_timeNumber_0 > 0 ? (this.skill_timeNumber_0 -= s,
                this.skill_time_0.text = D.getTimeBySec(this.skill_timeNumber_0)) : (this.skill_timeNumber_0 = -1,
                T.isSkill_0 = !1, this.skill_pb_0.begin(), this.skill_coldTimeNumber_0 = E.SKILL_COLDTIME_0,
                this.skill_time_0.text = D.getTimeBySec(this.skill_coldTimeNumber_0), this.stopSkill(0)) : this.skill_coldTimeNumber_0 > 0 ? (this.skill_coldTimeNumber_0 -= s,
                this.skill_time_0.text = D.getTimeBySec(this.skill_coldTimeNumber_0)) : this.skill_time_0.visible = !1,
            this.skill_pb_0.visible && this.skill_pb_0.run(s), T.isSkill_1 ? this.skill_timeNumber_1 > 0 ? (this.skill_timeNumber_1 -= s,
                this.skill_time_1.text = D.getTimeBySec(this.skill_timeNumber_1)) : (this.skill_timeNumber_1 = -1,
                T.isSkill_1 = !1, this.skill_pb_1.begin(), this.skill_coldTimeNumber_1 = E.SKILL_COLDTIME_1,
                this.skill_time_1.text = D.getTimeBySec(this.skill_coldTimeNumber_1), this.stopSkill(1)) : this.skill_coldTimeNumber_1 > 0 ? (this.skill_coldTimeNumber_1 -= s,
                this.skill_time_1.text = D.getTimeBySec(this.skill_coldTimeNumber_1)) : this.skill_time_1.visible = !1,
            this.skill_pb_1.visible && this.skill_pb_1.run(s), T.isSkill_2 ? this.skill_timeNumber_2 > 0 ? (this.skill_timeNumber_2 -= s,
                this.skill_time_2.text = D.getTimeBySec(this.skill_timeNumber_2)) : (this.skill_timeNumber_2 = -1,
                T.isSkill_2 = !1, this.skill_pb_2.begin(), this.skill_coldTimeNumber_2 = E.SKILL_COLDTIME_2,
                this.skill_time_2.text = D.getTimeBySec(this.skill_coldTimeNumber_2), this.stopSkill(2)) : this.skill_coldTimeNumber_2 > 0 ? (this.skill_coldTimeNumber_2 -= s,
                this.skill_time_2.text = D.getTimeBySec(this.skill_coldTimeNumber_2)) : this.skill_time_2.visible = !1,
            this.skill_pb_2.visible && this.skill_pb_2.run(s), T.isSkill_3 ? this.skill_timeNumber_3 > 0 ? (this.skill_timeNumber_3 -= s,
                this.skill_time_3.text = D.getTimeBySec(this.skill_timeNumber_3)) : (this.skill_timeNumber_3 = -1,
                T.isSkill_3 = !1, this.skill_pb_3.begin(), this.skill_coldTimeNumber_3 = E.SKILL_COLDTIME_3,
                this.skill_time_3.text = D.getTimeBySec(this.skill_coldTimeNumber_3), this.stopSkill(3)) : this.skill_coldTimeNumber_3 > 0 ? (this.skill_coldTimeNumber_3 -= s,
                this.skill_time_3.text = D.getTimeBySec(this.skill_coldTimeNumber_3)) : this.skill_time_3.visible = !1,
            this.skill_pb_3.visible && this.skill_pb_3.run(s), this._kongtouTime > 0 && (this._kongtouTime -= s,
                this._kongtouTime <= 0 && this.showKongTouButton()), this._baoxiangTime > 0 && (this._baoxiangTime -= s,
                this._baoxiangTime <= 0 && (this._baoxiangRealy = !0)), this._kongtouShow && (this.kongtou_button.y <= 1436 ? (this.kongtou_button.y += 30 * s,
                this.kongtou_button.x = 360 + 100 * D.sin(this.kongtou_button.y / 200 * 180), this.kongtou_button.rotation = 30 * -D.sin(this.kongtou_button.y / 200 * 180)) : (this.kongtou_button.visible = !1,
                this._kongtouShow = !1, this._kongtouTime = this.KONGTOUWAIT, this.kongtou_button.x = -200,
                this.kongtou_button.y = -200)), this._baoxiangShow && (this._baoxiangShowTime > 0 ? this._baoxiangShowTime -= s : (this.box_group.visible = !1,
                this._baoxiangShow = !1, this._baoxiangShowTime = -1, this._baoxiangTime = this.BOXWAIT,
                this._baoxiangRealy = !1, this.box_group.x = -200, this.box_group.y = -200)), this._allEnemy.length > 0)
            for (h = 0; h < this._allEnemy.length; h++) this._allEnemy[h].isShow && this._allEnemy[h].run(s);
        if (this._allBuLLet.length > 0)
            for (h = 0; h < this._allBuLLet.length; h++)
                if (this._allBuLLet[h].isClean) {
                    var o = this._allBuLLet[h];
                    this._allBuLLet.splice(h, 1);
                } else this._allBuLLet[h].run(s);
        switch (this._stage) {
            case P.MOVE:
                this._isNeedMove && !T.isStop && (this._isNeedMove = !1, this.moveFloor());
                for (h = 0; h < this._allTower.length; h++) this._allTower[h].run(s);
                this._mainTower.run(s), this.getIsMoveOfAll() || (this._stage = P.WAIT, this._waitTime = 1,
                    this.touch_group.visible = !0, this.system_button_0.touchEnabled = !0, this.push_button.touchEnabled = !0,
                    this.pushbox_button.touchEnabled = !0, this.pushbox_button0.touchEnabled = !0, this.system_button_1.touchEnabled = !0,
                    this.system_button_2.touchEnabled = !0, this.system_button_3.touchEnabled = !0,
                    this.skill_button_0.touchEnabled = !0, this.skill_button_1.touchEnabled = !0, this.skill_button_2.touchEnabled = !0,
                    this.skill_button_3.touchEnabled = !0, this.build_button.touchEnabled = !0, this.kongtou_button.touchEnabled = !0,
                    this.box_button.touchEnabled = !0, this.box_group.touchChildren = !0);
                break;

            case P.WAIT:
                this.endArm.visible = !0, this._waitTime > 0 ? this._waitTime -= s : (this._waitTime = -1,
                    this._stage = P.READY, this._missionNow >= 2 && !b.instance.helpInGame_04 && b.instance.powerMost >= 4 && (this._help4_time = 2),
                    this._missionNow >= 3 && !b.instance.helpInGame_06 && b.instance.powerMost >= 5 && (this._help6_time = 2),
                    this._missionNow >= 4 && !b.instance.helpInGame_08 && b.instance.powerMost >= 5 && (this._help8_time = 2));
                break;

            case P.READY:
                this.reinitEnemy(), this._stage = P.BEGIN;
                break;

            case P.BEGIN:
                this.changeEneny(), this._help2_time > 0 && (this._help2_time -= s, this._help2_time <= 0 && !b.instance.helpInGame_02 && (this.setHelp2(),
                    T.stopGame())), this._help3_time > 0 && (this._help3_time -= s, this._help3_time <= 0 && !b.instance.helpInGame_03 && (this.setHelp3(),
                    T.stopGame())), this._help4_time > 0 && (this._help4_time -= s, this._help4_time <= 0 && !b.instance.helpInGame_04 && (this.setHelp4(),
                    T.stopGame())), this._help6_time > 0 && (this._help6_time -= s, this._help6_time <= 0 && !b.instance.helpInGame_06 && (this.setHelp6(),
                    T.stopGame())), this._help8_time > 0 && (this._help8_time -= s, this._help8_time <= 0 && !b.instance.helpInGame_08 && (this.setHelp8(),
                    T.stopGame())), b.instance.helpInGame_09 || 1 != this.autoBuild.visible || this.showHelp_9();
                for (h = 0; h < this._allTower.length; h++)
                    if (this._allTower[h].run(s), this._allTower[h].canAtk) {
                        for (var a = null, r = 0; r < this._allEnemy.length; r++) this._allEnemy[r].isDead || D.getDistance(this._allTower[h].x, this._allTower[h].y, this._allEnemy[r].x, this._allEnemy[r].y) <= 106 * this._allTower[h].range * (T.isSkill_3 ? 10 : 1) && (null == a ? a = this._allEnemy[r] : a.moveRoad < this._allEnemy[r].moveRoad && (a = this._allEnemy[r]));
                        null != a && this._allTower[h].setAim(a);
                    }
                if (this._mainTower.run(s), this._mainTower.canAtk) {
                    for (var a = null, r = 0; r < this._allEnemy.length; r++) this._allEnemy[r].isShow && (null == a ? a = this._allEnemy[r] : a.moveRoad < this._allEnemy[r].moveRoad && (a = this._allEnemy[r]));
                    null != a && this._mainTower.setAim(a);
                }
        }
        if (this._allEnemy.length > 0 && this._stage == P.BEGIN) {
            for (var h = 0; h < this._allEnemy.length; h++)
                if (this._allEnemy[h].isShow || !this._allEnemy[h].isDead) return !0;
            this._stage = P.PASS, this.winGame();
        }
        return !0;
    }, i.prototype.addBullet = function(t, e, i, s, n, o, a, r, h, u) {
        switch (void 0 === s && (s = 0), void 0 === h && (h = 0), void 0 === u && (u = 0),
            s) {
            case K.SHELL:
                l = new $(t, e, i, s, n, o, a, r, h, u);
                this.bullet_group.addChild(l), this._allBuLLet.push(l);
                break;

            case K.ELECTRIC:
                l = new J(t, e, i, s, n, o, a, r, h, u);
                this.bullet_group.addChild(l), this._allBuLLet.push(l);
                break;

            case K.ROCKET:
                l = new _(t, e, i, s, n, o, a, r, h, u);
                this.bullet_group.addChild(l), this._allBuLLet.push(l);
                break;

            case K.WAVE:
                l = new Z(t, e, i, s, n, o, a, r, h, u);
                this.bullet_group.addChild(l), this._allBuLLet.push(l);
                break;

            case K.GATLIN:
                l = new V(t, e, i, s, n, o, a, r, h, u);
                this.bullet_group.addChild(l), this._allBuLLet.push(l);
                break;

            case K.RADIAL:
                l = new Q(t, e, i, s, n, o, a, r, h, u);
                this.bullet_group.addChild(l), this._allBuLLet.push(l);
                break;

            case K.LASER:
                var l = new q(t, e, i, s, n, o, a, r, h, u);
                return this.bullet_group.addChild(l), this._allBuLLet.push(l), l;
        }
        return null;
    }, i.prototype.skill_0 = function() {
        D.playSE("button_mp3"), this.skill_pb_0.visible || (T.isSkill_0 = !0, this.skill_pb_0.reset(),
            this.skill_timeNumber_0 = E.SKILL_TIME_0, this.skill_time_0.text = D.getTimeBySec(this.skill_timeNumber_0),
            this.skill_time_0.visible = !0, this.playSkill(0), platform.sendStatistics("技能使用", "攻速翻倍"));
    }, i.prototype.skill_1 = function() {
        D.playSE("button_mp3"), this.skill_pb_1.visible || (T.isSkill_1 = !0, this.skill_pb_1.reset(),
            this.skill_timeNumber_1 = E.SKILL_TIME_1, this.skill_time_1.text = D.getTimeBySec(this.skill_timeNumber_1),
            this.skill_time_1.visible = !0, this.playSkill(1), platform.sendStatistics("技能使用", "怪物减速"));
    }, i.prototype.skill_2 = function() {
        D.playSE("button_mp3"), this.skill_pb_2.visible || (T.isSkill_2 = !0, this.skill_pb_2.reset(),
            this.skill_timeNumber_2 = E.SKILL_TIME_2, this.skill_time_2.text = D.getTimeBySec(this.skill_timeNumber_2),
            this.skill_time_2.visible = !0, this.playSkill(2), platform.sendStatistics("技能使用", "金币翻倍"));
    }, i.prototype.skill_3 = function() {
        D.playSE("button_mp3"), this.skill_pb_3.visible || (T.isSkill_3 = !0, this.skill_pb_3.reset(),
            this.skill_timeNumber_3 = E.SKILL_TIME_3, this.skill_time_3.text = D.getTimeBySec(this.skill_timeNumber_3),
            this.skill_time_3.visible = !0, this.playSkill(3), platform.sendStatistics("技能使用", "全屏攻击"));
    }, i.prototype.doAutoBuild = function() {
        if (D.playSE("button_mp3"), this._autoBuild > 0) {
            for (var t = -1, e = -1, i = 0; i < this._allTower.length; i++)
                if (this._allTower[i] && this._allTower[i].isShow && !(this._allTower[i].level >= 40))
                    for (var s = i + 1; s < this._allTower.length; s++)
                        if (this._allTower[s] && this._allTower[s].isShow && !(this._allTower[s].level >= 40) && this._allTower[i].level == this._allTower[s].level && (0 > t || this._allTower[i].level > this._allTower[t].level)) {
                            t = i, e = s;
                            break;
                        }
            t >= 0 ? (this._autoBuild -= 1, b.instance.autoBuild = this._autoBuild, this.merge(this._allTower[t], this._allTower[e])) : this.showNotice("No battery can be synthesized");
        } else this.showAutoBuild();
    }, i.prototype.rushUI = function() {
        var t = this;
        if (platform.isLogin && (!T.wxLoginInfo && platform.wxLoginInfo && (T.wxLoginInfo = platform.wxLoginInfo), !T.isWX && T.wxLoginInfo)) try {
            T.isWX = !0, RES.getResByUrl(T.wxLoginInfo.avatarUrl, function(e, i) {
                t.head_img.texture = e;
            }, this, RES.ResourceItem.TYPE_IMAGE);
        } catch (t) {
            this.head_img.texture = RES.getRes("ui_top_02_png");
        }
        this.mission_num.text = "Lv." + this._missionNow.toString() + "-" + this._waveNow.toString(),
            this.build_num.text = this._hammer.toString() + "/" + T.buildMax.toString(), this.build_pb.height = 20 + (this.BUILDING_TIME - this._buildTime) / this.BUILDING_TIME * 115,
            this.build_pb.y = 240 - (this.BUILDING_TIME - this._buildTime) / this.BUILDING_TIME * 115,
            this.autoBuildText.text = this._autoBuild + "/" + this.AUTO_BUILD_MAX_COUNT, this.autoBuildProgress.value = 1e3 * (this.AUTO_BUILD_TIME - this._autoBuildTime),
            this.autoBuildProgress.maximum = 1e3 * this.AUTO_BUILD_TIME, this.diamond_num.text = T.doubleToString(b.instance.diamond),
            this.gold_num.text = T.doubleToString(b.instance.gold), this.system_red_0.visible = E.isRedOfTask,
            this.system_red_1.visible = E.isRedOfUpGrade, this.rushQuickBuild(), this.getPower(),
            this.power_num.text = T.doubleToString(this._powerNow), -1 != b.instance.signIn_index && (1 == b.instance.getSignInData(b.instance.signIn_index, 0) && 1 == b.instance.getSignInData(b.instance.signIn_index, 1) ? this.redDot.visible = !1 : this.redDot.visible = !0);
    }, i.prototype.getPower = function() {
        for (var t = 0, e = 0; e < this._allTower.length; e++) this._allTower[e].isShow && (t = Number(t) + Number(this._allTower[e].atk));
        t = Number(t) + Number(this._mainTower.atk), this._powerNow = D.roundDown(t * E.getUpGradeNum(6));
    }, i.prototype.rushQuickBuild = function() {
        var t = this._quickBuildGold * D.pow(1.3, b.instance.getTowerBuyNum(this._quickBuildNum)) * (1 - E.getUpGradeNum(3));
        this.tower_ing.texture = RES.getRes(this._quickBuildTex), this.system_describe_3.text = T.doubleToString(t),
            this.tower_level.text = "LV." + this._quickBuildNum.toString(), t <= b.instance.gold ? this.system_describe_3.textColor = 16777215 : this.system_describe_3.textColor = 16711680;
    }, i.prototype.getQuickBuild = function() {
        for (var t = b.instance.powerMost - 10 > 1 ? b.instance.powerMost - 10 : 1, e = -99, i = t, s = t; s <= b.instance.powerMost - 4; s++) {
            var n = E.getTowerRecord(s)._gold * D.pow(1.3, b.instance.getTowerBuyNum(s)) * D.pow(2, b.instance.powerMost - 4 - s);
            0 > e && (e = n, i = s), e > n && (e = n, i = s);
        }
        this._quickBuildNum = i;
        var o = E.getTowerRecord(this._quickBuildNum);
        this._quickBuildGold = o._gold, this._quickBuildTex = o._cannon, this.rushQuickBuild();
    }, i.prototype.quickBuildTower = function() {
        D.playSE("button_mp3");
        var t = this._quickBuildGold * D.pow(1.3, b.instance.getTowerBuyNum(this._quickBuildNum)) * (1 - E.getUpGradeNum(3));
        t <= b.instance.gold ? this.addTowerByShop(this._quickBuildNum, t) : this.showGold(!1);
    }, i.prototype.getTowerByPosition = function(t, e) {
        for (var i = 0; i < this._allTower.length; i++)
            if (this._allTower[i].column == e && this._allTower[i].row == t) return this._allTower[i];
        return null;
    }, i.prototype.getFloorByPosition = function(t, e) {
        for (var i = 0; i < this._allFloors.length; i++)
            if (this._allFloors[i].column == e && this._allFloors[i].row == t) return this._allFloors[i];
        return null;
    }, i.prototype.addGoldOfEnemy = function() {
        b.instance.gold = Number(b.instance.gold) + Number(this._goldOfOneEnemy * (T.isSkill_2 ? 2 : 1) * (1 + E.getUpGradeNum(5))),
            b.instance.achNeedNum_03 += 1, b.instance.taskNeedNum_06 += 1, this._killEnemyOneWave += 1;
    }, i.prototype.addHammer = function() {
        this._hammer = T.buildMax, b.instance.hammer = this._hammer, this._buildTime = this.BUILDING_TIME;
    }, i.prototype.addAutoBuild = function() {
        this._autoBuild += this.AUTO_BUILD_BUY_COUNT, b.instance.autoBuild = this._autoBuild,
            this._autoBuildTime = this.AUTO_BUILD_TIME;
    }, i.prototype.winGame = function() {
        console.log("游戏成功过关")
        D.playBGM(null);
        uptap.ShowScreenVideo("成功", function() {
            D.playBGM("bgm_mp3");
        });
        if (this._stage = P.OVER, this.cleanGame(), 1 == this._missionNow) switch (this._waveNow) {
            case 1:
                T.isNewPlayer && !b.instance.fristPass_1_1 && (b.instance.fristPass_1_1 = !0, platform.sendStatistics("第一次进游戏", "1-1通关")),
                    this._isIn24 && !b.instance.fristPassOneDay_1_1 && (b.instance.fristPassOneDay_1_1 = !0,
                        platform.sendStatistics("新用户第一天", "1-1通关"));
                break;

            case 2:
                T.isNewPlayer && !b.instance.fristPass_1_2 && (b.instance.fristPass_1_2 = !0, platform.sendStatistics("第一次进游戏", "1-2通关")),
                    this._isIn24 && !b.instance.fristPassOneDay_1_2 && (b.instance.fristPassOneDay_1_2 = !0,
                        platform.sendStatistics("新用户第一天", "1-2通关"));
                break;

            case 3:
                T.isNewPlayer && !b.instance.fristPass_1_3 && (b.instance.fristPass_1_3 = !0, platform.sendStatistics("第一次进游戏", "1-3通关")),
                    this._isIn24 && !b.instance.fristPassOneDay_1_3 && (b.instance.fristPassOneDay_1_3 = !0,
                        platform.sendStatistics("新用户第一天", "1-3通关"));
        }
        if (this._missionNow + 2 > 7 ? this._waveNow < 7 ? (this._waveNow += 1, b.instance.waveNow = this._waveNow,
                b.instance.missionNow = this._missionNow, this.saveSandTable(), b.instance.offLineTime = D.getSystemTime(),
                this.showEnd(0)) : (this._waveNow = 1, this._missionNow += 1, b.instance.waveNow = this._waveNow,
                b.instance.missionNow = this._missionNow, b.instance.achNeedNum_04 = b.instance.missionNow - 1,
                this.saveSandTable(), b.instance.offLineTime = D.getSystemTime(), this.showEnd(1)) : this._waveNow < this._missionNow + 2 ? (this._waveNow += 1,
                b.instance.waveNow = this._waveNow, b.instance.missionNow = this._missionNow, this.saveSandTable(),
                b.instance.offLineTime = D.getSystemTime(), this.showEnd(0)) : (this._waveNow = 1,
                this._missionNow += 1, b.instance.waveNow = this._waveNow, b.instance.missionNow = this._missionNow,
                b.instance.achNeedNum_04 = b.instance.missionNow - 1, this.saveSandTable(), b.instance.offLineTime = D.getSystemTime(),
                this.showEnd(1)), 1 == this._waveNow && this._missionNow <= 5) switch (this._missionNow) {
            case 3:
                T.isNewPlayer && !b.instance.fristPass_3_1 && (b.instance.fristPass_3_1 = !0, platform.sendStatistics("第一次进游戏", "进入3-1")),
                    this._isIn24 && !b.instance.fristPassOneDay_3_1 && (b.instance.fristPassOneDay_3_1 = !0,
                        platform.sendStatistics("新用户第一天", "进入3-1"));
                break;

            case 4:
                T.isNewPlayer && !b.instance.fristPass_4_1 && (b.instance.fristPass_4_1 = !0, platform.sendStatistics("第一次进游戏", "进入4-1")),
                    this._isIn24 && !b.instance.fristPassOneDay_4_1 && (b.instance.fristPassOneDay_4_1 = !0,
                        platform.sendStatistics("新用户第一天", "进入4-1"));
                break;

            case 5:
                T.isNewPlayer && !b.instance.fristPass_5_1 && (b.instance.fristPass_5_1 = !0, platform.sendStatistics("第一次进游戏", "进入5-1")),
                    this._isIn24 && !b.instance.fristPassOneDay_5_1 && (b.instance.fristPassOneDay_5_1 = !0,
                        platform.sendStatistics("新用户第一天", "进入5-1"));
        }
    }, i.prototype.lostGame = function() {
        console.log("游戏失败")
        D.playBGM(null);
        uptap.ShowScreenVideo("失败", function() {
            D.playBGM("bgm_mp3");
        });
        this._stage = P.OVER, this.cleanGame(), this._waveNow > 1 ? (this._waveNow -= 1,
                this.saveSandTable(), b.instance.offLineTime = D.getSystemTime(), this.showEnd(-1)) : (this._waveNow = 1,
                this.saveSandTable(), b.instance.offLineTime = D.getSystemTime(), this.showEnd(-1)),
            b.instance.waveNow = this._waveNow, b.instance.missionNow = this._missionNow;
    }, i.prototype.cleanGame = function() {
        for (var t = 0; t < this._allEnemy.length; t++) this._allEnemy[t].clean();
        for (var e = 0; e < this._allBuLLet.length; e++) this._allBuLLet[e].clean();
        for (var i = 0; i < this._allTower.length; i++) this._allTower[i].cleanTower();
        this._mainTower.cleanTower(), this._allBuLLet = [];
    }, i.prototype.startBackFun = function(t) {
        switch (this._fingerStage) {
            case M.BEGIN:
                for (var e = t.stageX - this.xoffset, i = t.stageY - this.yoffset, s = e - (this.tower_group.x - this.tower_group.width / 2), n = i - (this.tower_group.y - this.tower_group.height / 2), o = 0; o < this._allTower.length; o++)
                    if (this._allTower[o].isShow && D.isHit_r2r(this._allTower[o].x, this._allTower[o].y, 106, 106, s, n, .1, .1)) {
                        this._allTower[o].beChoose(), this._fingerStage = M.MOVECHOOSE, this._checksTower = this._allTower[o],
                            this.reinitShowTower(j.INFORMATION, this._checksTower.row, this._checksTower.column, this._checksTower.level, this._checksTower.name, this._checksTower.atk, this._checksTower.speed, this._checksTower.range),
                            this._showChecksTower.show(this._allTower[o].data), this._showChecksTower.x = e - (this.tower_group.x - this.tower_group.width / 2),
                            this._showChecksTower.y = i - (this.tower_group.y - this.tower_group.height / 2),
                            this.findSameOfAll(this._checksTower.level), this._showChecksTower.visible = !0,
                            b.instance.helpInGame_07 && (this.sell_img.visible = !0, this.sell_tishi.visible = !0),
                            b.instance.helpInGame_01 || this.stopHelp1();
                        break;
                    }
                this.system_button_0.touchEnabled = !1, this.push_button.touchEnabled = !1, this.pushbox_button.touchEnabled = !1,
                    this.pushbox_button0.touchEnabled = !1, this.system_button_1.touchEnabled = !1,
                    this.system_button_2.touchEnabled = !1, this.system_button_3.touchEnabled = !1,
                    this.skill_button_0.touchEnabled = !1, this.skill_button_1.touchEnabled = !1, this.skill_button_2.touchEnabled = !1,
                    this.skill_button_3.touchEnabled = !1, this.build_button.touchEnabled = !1, this.kongtou_button.touchEnabled = !1,
                    this.box_button.touchEnabled = !1, this.box_group.touchChildren = !1;
        }
    }, i.prototype.controlMove = function(t) {
        switch (this._fingerStage) {
            case M.MOVECHOOSE:
                var e = t.stageX - this.xoffset,
                    i = t.stageY - this.yoffset;
                this._showChecksTower.x = e - (this.tower_group.x - this.tower_group.width / 2),
                    this._showChecksTower.y = i - (this.tower_group.y - this.tower_group.height / 2);
                var s = this._showChecksTower.y >= 0 ? D.roundDown(this._showChecksTower.y / 106) : -1,
                    n = this._showChecksTower.x >= 0 ? D.roundDown(this._showChecksTower.x / 106) : -1;
                if (0 > s || 0 > n || s > 5 || n > 5) return void this.reinitShowTower(-1);
                if (s == this._checksTower.row && n == this._checksTower.column) return void this.reinitShowTower(j.INFORMATION, this._checksTower.row, this._checksTower.column, this._checksTower.level, this._checksTower.name, this._checksTower.atk, this._checksTower.speed, this._checksTower.range);
                var o = this.getFloorByPosition(s, n);
                o.isCanAdd && !o.isAlreadyAdd ? this.reinitShowTower(j.NULL, o.row, o.column, this._checksTower.level, this._checksTower.name, this._checksTower.atk, this._checksTower.speed, this._checksTower.range) : o.type == R.Building_blocks ? this.getTowerByPosition(s, n).level == this._checksTower.level ? this.reinitShowTower(j.ADD, o.row, o.column, this._checksTower.level, this._checksTower.name, this._checksTower.atk, this._checksTower.speed, this._checksTower.range) : this.reinitShowTower(j.CHANGE, o.row, o.column, this._checksTower.level, this._checksTower.name, this._checksTower.atk, this._checksTower.speed, this._checksTower.range) : this.reinitShowTower(-1);
        }
    }, i.prototype.endBackFun = function(t) {
        if (void 0 === t && (t = null), this.push_button.touchEnabled = !0, this.pushbox_button.touchEnabled = !0,
            this.pushbox_button0.touchEnabled = !0, this.system_button_0.touchEnabled = !0,
            this.system_button_1.touchEnabled = !0, this.system_button_2.touchEnabled = !0,
            this.system_button_3.touchEnabled = !0, this.skill_button_0.touchEnabled = !0, this.skill_button_1.touchEnabled = !0,
            this.skill_button_2.touchEnabled = !0, this.skill_button_3.touchEnabled = !0, this.build_button.touchEnabled = !0,
            this.kongtou_button.touchEnabled = !0, this.box_button.touchEnabled = !0, this.box_group.touchChildren = !0,
            this.sell_img.visible = !1, this.sell_tishi.visible = !1, this.autoBuild.visible = b.instance.missionNow >= 6,
            b.instance.helpInGame_09, null == t && this._checksTower) return this.cancelSameOfAll(),
            this._checksTower.cancelChoose(), this._checksTower = null, this._showChecksTower.visible = !1,
            this.reinitShowTower(-1), void(this._fingerStage = M.BEGIN);
        switch (this._fingerStage) {
            case M.MOVECHOOSE:
                this.cancelSameOfAll();
                var e = t.stageX - this.xoffset,
                    i = t.stageY - this.yoffset;
                this._showChecksTower.x = e - (this.tower_group.x - this.tower_group.width / 2),
                    this._showChecksTower.y = i - (this.tower_group.y - this.tower_group.height / 2);
                var s = this._showChecksTower.y >= 0 ? D.roundDown(this._showChecksTower.y / 106) : -1,
                    n = this._showChecksTower.x >= 0 ? D.roundDown(this._showChecksTower.x / 106) : -1;
                if (0 > s || 0 > n || s > 5 || n > 5) return D.getDistance(e, i, 470, this.bottom_group.y - 85) < 70 && b.instance.helpInGame_07 && (this.getFloorByPosition(this._checksTower.row, this._checksTower.column).removeTower(),
                        this._checksTower.remove()), this._checksTower.cancelChoose(), this._checksTower = null,
                    this._showChecksTower.visible = !1, this.reinitShowTower(-1), this._fingerStage = M.BEGIN,
                    void(b.instance.helpInGame_01 || this.setHelp1());
                if (s == this._checksTower.row && n == this._checksTower.column) return this._checksTower.cancelChoose(),
                    this._checksTower = null, this._showChecksTower.visible = !1, this.reinitShowTower(-1),
                    this._fingerStage = M.BEGIN, void(b.instance.helpInGame_01 || this.setHelp1());
                var o = this.getFloorByPosition(s, n);
                o.isCanAdd && !o.isAlreadyAdd ? (this.getFloorByPosition(this._checksTower.row, this._checksTower.column).removeTower(),
                    this._checksTower.setPostion(s, n, !1), this.getFloorByPosition(s, n).addTower(),
                    this._checksTower.cancelChoose(), this._checksTower = null, this._showChecksTower.visible = !1,
                    this.reinitShowTower(-1), this._fingerStage = M.BEGIN, b.instance.helpInGame_01 || this.setHelp1()) : o.type == R.Building_blocks ? this.getTowerByPosition(s, n).level == this._checksTower.level && this.getTowerByPosition(s, n).level < 40 ? (this.merge(this.getTowerByPosition(s, n), this._checksTower),
                    this._checksTower = null, this._showChecksTower.visible = !1, this.reinitShowTower(-1),
                    this._fingerStage = M.BEGIN, b.instance.helpInGame_01 || this.removeHelp1()) : (this.getTowerByPosition(s, n).level == this._checksTower.level && 40 == this.getTowerByPosition(s, n).level && this.showNotice("Has reached the highest level"),
                    this.getTowerByPosition(s, n).setPostion(this._checksTower.row, this._checksTower.column, !0),
                    this._checksTower.setPostion(s, n), this._checksTower.cancelChoose(), this._checksTower = null,
                    this._showChecksTower.visible = !1, this.reinitShowTower(-1), this._fingerStage = M.BEGIN,
                    b.instance.helpInGame_01 || this.setHelp1()) : (this._checksTower.cancelChoose(),
                    this._checksTower = null, this._showChecksTower.visible = !1, this.reinitShowTower(-1),
                    this._fingerStage = M.BEGIN, b.instance.helpInGame_01 || this.setHelp1());
        }
    }, i.prototype.merge = function(t, e) {
        var i = t.level + 1;
        t.update(E.getTowerRecord(e.level + 1)), b.instance.achNeedNum_01 += 1, b.instance.taskNeedNum_08 += 1,
            e.cancelChoose(), this.getFloorByPosition(e.row, e.column).removeTower(), e.remove(),
            this._showChecksTower.visible = !1, this.reinitShowTower(-1), this._fingerStage = M.BEGIN,
            i > b.instance.powerMost && (b.instance.powerMost = i, platform.sendStatistics("upgrade", "" + b.instance.powerMost),
                b.instance.achNeedNum_05 = b.instance.powerMost, this._mainTower.updateMain(E.getTowerRecord(b.instance.powerMost)),
                this.getQuickBuild(), this._missionNow >= 2 && this.showGunLvUp(), this._missionNow >= 2 && !b.instance.helpInGame_04 && b.instance.powerMost >= 4 && (this._help4_time = 1),
                this._missionNow >= 3 && !b.instance.helpInGame_06 && b.instance.powerMost >= 5 && (this._help6_time = 1),
                this._missionNow >= 4 && !b.instance.helpInGame_08 && b.instance.powerMost >= 5 && (this._help8_time = 1),
                this.saveSandTable());
    }, i.prototype.saveSandTable = function() {
        for (var t = [], e = 0; e < this._allTower.length; e++)
            if (null != this._allTower[e] && this._allTower[e].isShow) {
                var i = this._allTower[e];
                t.push(new m(i.row, i.column, i.level));
            }
        b.instance.saveSandTableInGame(t), b.instance.offLineTime = D.getSystemTime(), b.instance.powerNow = this._powerNow,
            D.abs(b.instance.powerNow - b.instance.powerLast) > .1 * b.instance.powerLast && (b.instance.powerLast = b.instance.powerNow,
                platform.sendRank(b.instance.powerLast));
    }, i.prototype.continueCardAtStart = function() {
        if (b.instance.helpInGame_01)
            for (var t = b.instance.reloadSandTableInGame(), e = 0; e < t.length; e++) this.addTowerByPosition(t[e].row, t[e].column, t[e].level);
        else this.addTowerByPosition(3, 4, 1),
            this.addTowerByPosition(3, 2, 1);
    }, i.prototype.addEffect = function(t, e, i) {
        var s = new C(t, e, i);
        this.effect_group.addChild(s), this._effects.push(s), 2 == i && this.addReward(t, e, D.random(6, 8), 0);
    }, i.prototype.addHurtEffect = function(t, e, i, s, n) {
        var o = new G(t, e - 20, i, s, n);
        this.effect_group.addChild(o), this._hurtEffects.push(o);
    }, i.prototype.playSkill = function(t) {
        switch (b.instance.achNeedNum_06 += 1, b.instance.taskNeedNum_02 += 1, t) {
            case 0:
                this.armSkill_0.gotoAndPlay("act", -1), this.armSkill_0.visible = !0;
                break;

            case 1:
                this.armSkill_1.gotoAndPlay("act", -1), this.armSkill_1.visible = !0;
                break;

            case 2:
                this.armSkill_2.gotoAndPlay("act", -1), this.armSkill_2.visible = !0;
                break;

            case 3:
                this.armSkill_3.gotoAndPlay("act", -1), this.armSkill_3.visible = !0;
        }
    }, i.prototype.critGold = function() {
        var t = this;
        this._isCritGold || (this._isCritGold = !0, e.Tween.removeTweens(this.gold_img),
            e.Tween.get(this.gold_img).to({
                scaleX: 1.2,
                scaleY: 1.2
            }, 100, e.Ease.sineInOut).to({
                scaleX: 1,
                scaleY: 1
            }, 100, e.Ease.sineInOut).call(function() {
                t._isCritGold = !1;
            }, this));
    }, i.prototype.critDiamond = function() {
        var t = this;
        this._isCritDiamond || (this._isCritDiamond = !0, e.Tween.removeTweens(this.diamond_img),
            e.Tween.get(this.diamond_img).to({
                scaleX: 1.2,
                scaleY: 1.2
            }, 100, e.Ease.sineInOut).to({
                scaleX: 1,
                scaleY: 1
            }, 100, e.Ease.sineInOut).call(function() {
                t._isCritDiamond = !1;
            }, this));
    }, i.prototype.stopSkill = function(t) {
        switch (t) {
            case 0:
                this.armSkill_0.stop(), this.armSkill_0.visible = !1;
                break;

            case 1:
                this.armSkill_1.stop(), this.armSkill_1.visible = !1;
                break;

            case 2:
                this.armSkill_2.stop(), this.armSkill_2.visible = !1;
                break;

            case 3:
                this.armSkill_3.stop(), this.armSkill_3.visible = !1;
        }
    }, i.prototype.changeEneny = function() {
        for (var t = [], e = 0; e < this._allEnemy.length - 1; e++) this._allEnemy[e].isShow && t.push(this._allEnemy[e]);
        for (var i = 0; i < t.length - 1; i++)
            for (var s = 0; s < t.length - 1 - i; s++)
                if (t[s].y > t[s + 1].y) {
                    var n = t[s];
                    t[s] = t[s + 1], t[s + 1] = n;
                }
        for (var o = 0; o < t.length; o++) this.monster_group.setChildIndex(t[o], o + 1);
    }, i.prototype.setHelp1 = function() {
        var t = this;
        this.help1_img.visible = !0;
        for (var i = null, s = null, n = 0; n < this._allTower.length - 1; n++)
            if (this._allTower[n].isShow)
                if (null == s) s = this._allTower[n],
                    this.help1_img.x = s.x, this.help1_img.y = s.y;
                else {
                    if (null == i) {
                        i = this._allTower[n];
                        break;
                    }
                    this.help1_group.visible = !1, this._stage = P.WAIT, b.instance.helpInGame_01 = !0;
                }
        e.Tween.removeTweens(this.help1_img), e.Tween.get(this.help1_img, {
            loop: !0
        }).to({
            x: i.x,
            y: i.y
        }, 1500, e.Ease.sineInOut).call(function() {
            t.help1_img.x = s.x, t.help1_img.y = s.y;
        });
    }, i.prototype.stopHelp1 = function() {
        e.Tween.removeTweens(this.help1_img), this.help1_img.visible = !1;
    }, i.prototype.removeHelp1 = function() {
        e.Tween.removeTweens(this.help1_img), this.help1_group.visible = !1, this._stage = P.WAIT,
            b.instance.helpInGame_01 = !0;
    }, i.prototype.setHelp2 = function() {
        this.endBackFun(), this.help2_group.visible = !0, this.build_pb.visible = !0, this.build_num.visible = !0,
            this.build_button.visible = !0, this.build_pbdi.visible = !0, this.build_frame.visible = !0,
            this.hammer_img.visible = !0, e.Tween.removeTweens(this.help2_img), e.Tween.get(this.help2_img, {
                loop: !0
            }).to({
                y: 60
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1.1,
                scaleY: .9
            }, 250, e.Ease.sineInOut).to({
                scaleX: .9,
                scaleY: 1.1
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1,
                scaleY: 1,
                y: 30
            }, 250, e.Ease.sineInOut).wait(500);
    }, i.prototype.stopHelp2 = function() {
        D.playSE("button_mp3"), this.addTowerByBuild(), this.removeHelp2();
    }, i.prototype.removeHelp2 = function() {
        e.Tween.removeTweens(this.help2_img), this.help2_group.visible = !1, T.resumeGame(),
            b.instance.helpInGame_02 = !0;
    }, i.prototype.setHelp3 = function() {
        this.endBackFun(), this.help3_group.visible = !0, this.skill_group_0.visible = !0,
            this.skill_group_1.visible = !0, this.skill_group_2.visible = !0, this.skill_group_3.visible = !0,
            e.Tween.removeTweens(this.help3_img), e.Tween.get(this.help3_img, {
                loop: !0
            }).to({
                x: 135,
                y: 45
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1.1,
                scaleY: .9
            }, 250, e.Ease.sineInOut).to({
                scaleX: .9,
                scaleY: 1.1
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1,
                scaleY: 1,
                x: 165,
                y: 15
            }, 250, e.Ease.sineInOut).wait(500);
    }, i.prototype.stopHelp3 = function() {
        D.playSE("button_mp3"), this.skill_0(), this.removeHelp3();
    }, i.prototype.removeHelp3 = function() {
        e.Tween.removeTweens(this.help3_img), this.help3_group.visible = !1, T.resumeGame(),
            b.instance.helpInGame_03 = !0;
    }, i.prototype.setHelp4 = function() {
        this.endBackFun(), this.system_button_1.visible = !0, this.system_describe_1.visible = !0,
            this.help4_group.visible = !0, this.lock_img_1.visible = !1, e.Tween.removeTweens(this.help4_img),
            e.Tween.get(this.help4_img, {
                loop: !0
            }).to({
                y: 150
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1.1,
                scaleY: .9
            }, 250, e.Ease.sineInOut).to({
                scaleX: .9,
                scaleY: 1.1
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1,
                scaleY: 1,
                y: 120
            }, 250, e.Ease.sineInOut).wait(500);
    }, i.prototype.stopHelp4 = function() {
        D.playSE("button_mp3"), this.showUpgrade(), this.removeHelp4();
    }, i.prototype.removeHelp4 = function() {
        e.Tween.removeTweens(this.help4_img), this.help4_group.visible = !1, b.instance.helpInGame_04 = !0;
    }, i.prototype.setHelp6 = function() {
        this.endBackFun(), this.system_button_2.visible = !0, this.system_describe_2.visible = !0,
            this.help6_group.visible = !0, this.lock_img_2.visible = !1, e.Tween.removeTweens(this.help6_img),
            e.Tween.get(this.help6_img, {
                loop: !0
            }).to({
                y: 150
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1.1,
                scaleY: .9
            }, 250, e.Ease.sineInOut).to({
                scaleX: .9,
                scaleY: 1.1
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1,
                scaleY: 1,
                y: 120
            }, 250, e.Ease.sineInOut).wait(500);
    }, i.prototype.stopHelp6 = function() {
        D.playSE("button_mp3"), this.showShop(), this.removeHelp6();
    }, i.prototype.removeHelp6 = function() {
        e.Tween.removeTweens(this.help6_img), this.help6_group.visible = !1, b.instance.helpInGame_06 = !0;
    }, i.prototype.setHelp8 = function() {
        this.endBackFun(), this.help8_group.visible = !0, this.system_button_3.visible = !0,
            this.system_describe_3.visible = !0, this.tower_level.visible = !0, this.tower_ing.visible = !0,
            this.lock_img_3.visible = !1, e.Tween.removeTweens(this.help8_img), e.Tween.get(this.help8_img, {
                loop: !0
            }).to({
                x: 525,
                y: 165
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1.1,
                scaleY: .9
            }, 250, e.Ease.sineInOut).to({
                scaleX: .9,
                scaleY: 1.1
            }, 250, e.Ease.sineInOut).to({
                scaleX: 1,
                scaleY: 1,
                x: 505,
                y: 145
            }, 250, e.Ease.sineInOut).wait(500);
    }, i.prototype.stopHelp8 = function() {
        D.playSE("button_mp3");
        var t = this._quickBuildGold * D.pow(1.3, b.instance.getTowerBuyNum(this._quickBuildNum)) * (1 - E.getUpGradeNum(3));
        t <= b.instance.gold ? this.addTowerByShop(this._quickBuildNum, t) : (b.instance.gold = 0,
            this.addTower(this._quickBuildNum), this.showNotice("The purchase is successful, the turret has been built for you")), this.removeHelp8();
    }, i.prototype.removeHelp8 = function() {
        e.Tween.removeTweens(this.help8_img), this.help8_group.visible = !1, T.resumeGame(),
            b.instance.helpInGame_08 = !0;
    }, i.prototype.showHelp_9 = function() {
        T.stopGame(), this.help_autoBuild.visible = !0, this.help_autoBuild_img.y = 964 + T.yoffset / 2;
    }, i.prototype.closeHelp_9 = function() {
        this.help_autoBuild.visible = !1, T.resumeGame(), b.instance.helpInGame_09 = !0,
            this.showNotice("Can be automatically synthesized");
    }, i.prototype.addRewardEnd = function(t) {
        void 0 === t && (t = 0), this._addRewardEndWx = !0, this._addRewardEndWxPosY = t;
    }, i.prototype.addRewardWarning = function(t) {
        void 0 === t && (t = ""), this._addRewardWarningWx = !0, this._addRewardWarningStr = t;
    }, i._instance = null, i.winCount = 0, i;
}(u);

i(B.prototype, "MyGame");

var G = function(t) {
    function i(i, s, n, o, a) {
        var r = t.call(this) || this;
        r._isClean = !1, r.armatureDisplay = null, r.armatureP = [158, 124, 158, 202, 146, 124, 0];
        var h = a;
        r.x = i, r.y = s;
        var u = RES.getRes("eff_hurt_json"),
            _ = RES.getRes("eff_hurt_png"),
            l = new e.MovieClipDataFactory(u, _);
        return "bullet_h_h" == h && (h = "bullet_h_h" + D.random(1, 3).toString()), r.armatureDisplay = new e.MovieClip(l.generateMovieClipData(h)),
            r.addChild(r.armatureDisplay), r.rotation = n - 90, r.armatureDisplay.anchorOffsetX = r.armatureP[o] / 2,
            r.armatureDisplay.anchorOffsetY = r.armatureP[o] / 2, r.armatureDisplay.alpha = .9,
            (0 == o || 3 == o) && (r.armatureDisplay.scaleX = .6, r.armatureDisplay.scaleY = .6),
            r.armatureDisplay.gotoAndPlay("act", 1), r.armatureDisplay.addEventListener(e.Event.COMPLETE, function() {
                r.clean();
            }, r), r;
    }
    return s(i, t), i.prototype.clean = function() {
        this._isClean = !0, this.parent && this.parent.removeChild(this);
    }, Object.defineProperty(i.prototype, "isClean", {
        get: function() {
            return this._isClean;
        },
        enumerable: !0,
        configurable: !0
    }), i;
}(e.Sprite);

i(G.prototype, "MyHurtEffect");

var U = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._isClean = !1, i._toRight = !1, i._endTime = .6, i.label = new e.TextField(),
            i.label.size = 25, i.label.textColor = 16711680, i.label.strokeColor = 16777215,
            i.label.stroke = 2, i.label.bold = !0, i.label.textAlign = e.HorizontalAlign.CENTER,
            i.label.width = 300, i.addChild(i.label), D.setAnchor(i), D.setAnchor(i.label),
            i._isClean = !0, i;
    }
    return s(i, t), Object.defineProperty(i.prototype, "isClean", {
        get: function() {
            return this._isClean;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.reset = function(t, e, i, s) {
        s ? (this.label.size = 25, this.label.textColor = 16711680, this.label.strokeColor = 16777215,
                this.label.stroke = 2, this.label.bold = !0, this.label.text = "Crit" + T.doubleToString(i)) : (this.label.size = 25,
                this.label.textColor = 16777215, this.label.strokeColor = 16711680, this.label.stroke = 2,
                this.label.bold = !0, this.label.text = T.doubleToString(i)), this._toRight = D.randombool(),
            this._endTime = .6, this._baseY = e, this._baseX = t, this.x = this._baseX, this.y = this._baseY + 36,
            this._isClean = !1;
    }, i.prototype.run = function(t) {
        this._isClean || (this._endTime > 0 ? (this._endTime -= t, this.x = this._baseX + 80 * (.6 - this._endTime) * (this._toRight ? 1 : -1),
            this.y = this._baseY + 400 * (this._endTime - .3) * (this._endTime - .3)) : this.dead());
    }, i.prototype.dead = function() {
        this.parent.removeChild(this), this._isClean = !0;
    }, i;
}(e.Sprite);

i(U.prototype, "MyHurtNum");

var H = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._isClean = !1, i.item = new e.Bitmap(), i.item.texture = RES.getRes("ui_bottom_05_png"),
            i.addChild(i.item), i._isClean = !0, i;
    }
    return s(i, t), Object.defineProperty(i.prototype, "isClean", {
        get: function() {
            return this._isClean;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.reset = function(t, i, s, n, o, a, r) {
        var h = this;
        void 0 === o && (o = 0), void 0 === r && (r = 0);
        var u = (a ? 2 : 1) * D.randomf(.5, .7);
        this._baseY = i + n * (a ? 1.5 : 1), this._baseX = t + s * (a ? 1.5 : 1), this.x = t,
            this.y = i, this.rotation = D.random(90, -90);
        var _ = 50 * r;
        switch (this._isClean = !1, this.visible = !1, o) {
            case 0:
                this.item.texture = RES.getRes("ui_money_01_png"), D.setAnchor(this.item), this._aimX = 200,
                    this._aimY = -220 - T.yoffset + T.ytemp, this.item.scaleX = u, this.item.scaleY = u;
                break;

            case 1:
                this.item.texture = RES.getRes("ui_money_02_png"), D.setAnchor(this.item), this._aimX = 400,
                    this._aimY = -220 - T.yoffset + T.ytemp, this.item.scaleX = u, this.item.scaleY = u;
                break;

            case 2:
                this.item.texture = RES.getRes("ui_bottom_05_png"), D.setAnchor(this.item), this._aimX = 318,
                    this._aimY = 820, this.item.scaleX = u, this.item.scaleY = u;
        }
        e.Tween.removeTweens(this), e.Tween.get(this).wait(_).call(function() {
            h.visible = !0;
        }).to({
            x: this._baseX,
            y: this._baseY,
            rotation: 90
        }, 300, e.Ease.sineInOut).wait(100).to({
            x: this._aimX,
            y: this._aimY,
            rotation: 720
        }, 600, e.Ease.sineInOut).call(function() {
            switch (h.dead(), o) {
                case 0:
                    B.GetInstance().critGold();
                    break;

                case 1:
                    B.GetInstance().critDiamond();
            }
        });
    }, i.prototype.dead = function() {
        this.parent.removeChild(this), this._isClean = !0;
    }, i;
}(e.Sprite);

i(H.prototype, "MyRewardItem");

var j;

! function(t) {
    t[t.INFORMATION = 0] = "INFORMATION", t[t.CHANGE = 1] = "CHANGE", t[t.ADD = 2] = "ADD",
        t[t.NULL = 3] = "NULL";
}(j || (j = {}));

var Y = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.FALLSPEED = 1e3, e.MOVESPEED = 600, e.TYPEPARAMETER = 2.5, e.LEVELPARAMETER = .05,
            e.BASEPOWER = 1e3, e.skinName = "resource/eui_skins/MySkin/MyShowTowerSkin.exml",
            e._type = j.NULL, e._level = 0, e._name = "a1", e._atk = 1, e._speed = 1, e._range = 3,
            e._row = 0, e._column = 0, D.setAnchor(e), e.touchEnabled = !1, e._isShow = !1,
            e.visible = !1, e;
    }
    return s(e, t), Object.defineProperty(e.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "level", {
        get: function() {
            return this._level;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "name", {
        get: function() {
            return this._name;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "atk", {
        get: function() {
            return this._atk;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "speed", {
        get: function() {
            return this._speed;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "range", {
        get: function() {
            return this._range;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "row", {
        get: function() {
            return this._row;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "column", {
        get: function() {
            return this._column;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "isShow", {
        get: function() {
            return this._isShow;
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.reinit = function(t, e, i, s, n, o, a, r) {
        switch (this._type = t, this._level = s, this._name = n, this._atk = o, this._speed = a,
            this._range = r, this._row = e, this._column = i, this._isShow = !0, this.range_group.scaleX = 2 * this._range * 106 / 460,
            this.range_group.scaleY = 2 * this._range * 106 / 460, this._type) {
            case j.INFORMATION:
                this.information_group.visible = !0, this.tips_group.visible = !1, this.level_text.text = "Lv." + this._level.toString(),
                    this.name_text.text = "Name:" + this._name, this.atk_text.text = "Attack:" + T.doubleToString(this._atk) + "/S",
                    this.speeed_text.text = "Speed:" + this._speed.toString() + "S/n";
                break;

            case j.CHANGE:
                this.information_group.visible = !1, this.tips_group.visible = !0, this.change_text.visible = !0,
                    this.add_text.visible = !1;
                break;

            case j.ADD:
                this.information_group.visible = !1, this.tips_group.visible = !0, this.change_text.visible = !1,
                    this.add_text.visible = !0;
                break;

            case j.NULL:
                this.information_group.visible = !1, this.tips_group.visible = !1, this.change_text.visible = !1,
                    this.add_text.visible = !1;
                break;

            default:
                this._isShow = !1, this.visible = !1;
        }
        this.x = 106 * (this._column + .5), this.y = 106 * (this._row + .5);
    }, e.prototype.run = function(t) {
        this._isShow && (this.range_group.rotation += 60 * t);
    }, e.prototype.remove = function() {
        this._isShow = !1;
    }, e;
}(eui.Component);

i(Y.prototype, "MyShowTower");

var X;

! function(t) {
    t[t.SHOW = 0] = "SHOW", t[t.BUILD = 1] = "BUILD", t[t.MOVE = 2] = "MOVE", t[t.WAIT = 3] = "WAIT",
        t[t.FIGHT = 4] = "FIGHT", t[t.CHANGE = 5] = "CHANGE", t[t.NULL = -1] = "NULL";
}(X || (X = {}));

var K;

! function(t) {
    t[t.SHELL = 0] = "SHELL", t[t.ELECTRIC = 1] = "ELECTRIC", t[t.ROCKET = 2] = "ROCKET",
        t[t.WAVE = 3] = "WAVE", t[t.GATLIN = 4] = "GATLIN", t[t.RADIAL = 5] = "RADIAL",
        t[t.LASER = 6] = "LASER", t[t.NULL = -1] = "NULL";
}(K || (K = {}));

var F = function(t) {
    function i() {
        var i = t.call(this) || this;
        i._isRealyMove = !1, i._isMain = !1, i._isCrit = !1, i._shakeTime = 0, i._shotTime = 0,
            i._shakeTimeBase = 0, i.fireArm = null, i.mcFactory = null, i.armatureW = [25, 110, 116, 75, 80, 27, 3],
            i.armatureH = [92, 110, 116, 150, 88, 54, 112], i.armatureY = [20, 0, 30, 0, 0, 0, 0],
            i.armatureX = [53, 53, 53, 53, 53, 53, 53], i._row = -1, i._column = -1, i._level = 0,
            i._type = K.NULL, i._state = X.NULL, i._same = !1, i._checked = !1, i._fire = "bullet_p_f",
            i._bullet = "bullet_p_b1", i._hurt = "bullet_d_h", i.width = 106, i.height = 106,
            i._atkBase = 0, i._speedBase = 0, i._rangeBase = 0, i._atk = 0, i._speed = 0, i._range = 0,
            D.setAnchor(i), i._canAtk = !1, i._diImg = new e.Bitmap(), i._diImg.texture = RES.getRes("tower_bg_1_png"),
            i.addChild(i._diImg), D.setAnchor(i._diImg), i._diImg.x = 53, i._diImg.y = 53, i._baseImg = new e.Bitmap(),
            i._baseImg.texture = RES.getRes("tower_JPD2"), i.addChild(i._baseImg), D.setAnchor(i._baseImg),
            i._baseImg.x = 53, i._baseImg.y = 53, i._sameImg = new e.Bitmap(), i._sameImg.texture = RES.getRes("ui_mergeRemind_png"),
            i.addChild(i._sameImg), D.setAnchor(i._sameImg), i._sameImg.x = 53, i._sameImg.y = 53,
            i._sameImg.visible = !1, i._levelImg = new e.Bitmap(), i._levelImg.texture = RES.getRes("ui_towerLevel_png"),
            i.addChild(i._levelImg), D.setAnchor(i._levelImg), i._levelImg.x = 89, i._levelImg.y = 89,
            i._isMove = !1, i._levelText = new e.TextField(), i._levelText.size = 40, i._levelText.textColor = 0,
            i._levelText.width = 50, i._levelText.height = 40, i._levelText.textAlign = "center",
            i._levelText.scaleX = .5, i._levelText.scaleY = .5, i._levelText.text = "0", i.addChild(i._levelText),
            D.setAnchor(i._levelText), i._levelText.y = 89, i._levelText.x = 89, i._cannon = new e.Sprite(),
            i.addChild(i._cannon), i._cannon.height = 106, i._cannon.width = 106, D.setAnchor(i._cannon),
            i._cannon.x = 53, i._cannon.y = 53, i._cannonImg = new e.Bitmap(), i._cannonImg.texture = RES.getRes("tower_JP1"),
            i._cannon.addChild(i._cannonImg), D.setAnchor(i._cannonImg), i._cannonImg.x = 53,
            i._cannonImg.y = 53, i.visible = !1;
        var s = RES.getRes("eff_fire_json"),
            n = RES.getRes("eff_fire_png");
        return i.mcFactory = new e.MovieClipDataFactory(s, n), i;
    }
    return s(i, t), Object.defineProperty(i.prototype, "row", {
        get: function() {
            return this._row;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "column", {
        get: function() {
            return this._column;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "level", {
        get: function() {
            return this._level;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "name", {
        get: function() {
            return this._name;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "atk", {
        get: function() {
            return this._atk;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "speed", {
        get: function() {
            return this._speed;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "fire", {
        get: function() {
            return this._fire;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "bullet", {
        get: function() {
            return this._bullet;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "hurt", {
        get: function() {
            return this._hurt;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "range", {
        get: function() {
            return this._range;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "state", {
        get: function() {
            return this._state;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "data", {
        get: function() {
            return this._data;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "aimX", {
        get: function() {
            return this._aimX;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "aimY", {
        get: function() {
            return this._aimY;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "checked", {
        get: function() {
            return this._checked;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "same", {
        get: function() {
            return this._same;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "isShow", {
        get: function() {
            return this._isShow;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "canAtk", {
        get: function() {
            return this._canAtk;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "isMove", {
        get: function() {
            return this._isMove;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.addFire = function() {
        null != this.fireArm && (this.fireArm.visible = !1, this.fireArm.stop(), this.fireArm.removeEventListener(e.Event.COMPLETE, this.fireOver, this),
                this.fireArm = null), this.fireArm = new e.MovieClip(this.mcFactory.generateMovieClipData(this._fire)),
            this._cannon.addChild(this.fireArm), this._type == K.LASER || (this.fireArm.x = this.armatureX[this._type],
                this.fireArm.y = this.armatureY[this._type], this.fireArm.anchorOffsetX = this.armatureW[this._type],
                this.fireArm.anchorOffsetY = this.armatureH[this._type] / 2), this.fireArm.addEventListener(e.Event.COMPLETE, this.fireOver, this),
            this.fireArm.visible = !1, this.fireArm.rotation = -90;
    }, i.prototype.fireOver = function() {
        this.fireArm.visible = !1;
    }, i.prototype.reinitMain = function(t) {
        this._isMain = !0, this._bulletA = null, this.visible = !0, this._aimEnemy = null,
            this.alpha = 1, this._data = t, this._level = t._level, this._type = this.setType(t._type),
            this._state = X.WAIT, this._fire = t._fire, this._bullet = t._bullet, this._hurt = t._hurt,
            this.addFire(), this._same = !1, this._checked = !1, this._canAtk = !0, this._atkBase = t._atk,
            this._speedBase = t._speed, this._rangeBase = 1136, this._atk = this._atkBase, this._speed = this._speedBase,
            this._atkTime = 1 / this._speed, this._range = this._rangeBase, this._name = t._name,
            this._isShow = !0, this._levelText.text = this._level.toString(), this._baseImg.texture = RES.getRes(t._base),
            D.setAnchor(this._baseImg), this._baseImg.x = 53, this._baseImg.y = 53, this._cannonImg.texture = RES.getRes(t._cannon),
            D.setAnchor(this._cannonImg), this._cannonImg.x = 53, this._cannonImg.y = 53, this.towerRotation = 0,
            this.x = 320, this.y = -70, this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1),
            this._isMove = !1, this._fireTime = 0;
    }, i.prototype.updateMain = function(t) {
        null != this._bulletA && (this._bulletA.clean(), this._bulletA = null), this.alpha = 1,
            this.towerRotation = 0, this._data = t, this._fire = t._fire, this._bullet = t._bullet,
            this._hurt = t._hurt, this._level = t._level, this._type = this.setType(t._type),
            this.addFire(), this._state = X.WAIT, this._same = !1, this._checked = !1, this._atkBase = t._atk,
            this._speedBase = t._speed, this._rangeBase = 1136, this._atk = this._atkBase, this._speed = this._speedBase,
            this._atkTime = 1 / this._speed, this._range = this._rangeBase, this._name = t._name,
            this._isShow = !0, this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1), this._levelText.text = this._level.toString(),
            this._baseImg.texture = RES.getRes(t._base), D.setAnchor(this._baseImg), this._baseImg.x = 53,
            this._baseImg.y = 53, this._cannonImg.texture = RES.getRes(t._cannon), D.setAnchor(this._cannonImg),
            this._cannonImg.x = 53, this._cannonImg.y = 53, this._aimEnemy = null, this._fireTime = 0;
    }, i.prototype.reinit = function(t, i, s, n) {
        var o = this;
        return void 0 === n && (n = !1), this._bulletA = null, this._isMain = !1, this._aimEnemy = null,
            this.alpha = 1, this._row = t, this._column = i, this._data = s, this._fire = s._fire,
            this._bullet = s._bullet, this._hurt = s._hurt, this._level = s._level, this._type = this.setType(s._type),
            this.addFire(), this._state = X.BUILD, this._same = !1, this._checked = !1, this._canAtk = !1,
            this._atkBase = s._atk, this._speedBase = s._speed, this._rangeBase = s._range,
            this._atk = this._atkBase, this._speed = this._speedBase, this._atkTime = 1 / this._speed,
            this._range = this._rangeBase, this._name = s._name, this._isShow = !0, this._levelText.text = this._level.toString(),
            this._baseImg.texture = RES.getRes(s._base), D.setAnchor(this._baseImg), this._baseImg.x = 53,
            this._baseImg.y = 53, this._cannonImg.texture = RES.getRes(s._cannon), D.setAnchor(this._cannonImg),
            this._cannonImg.x = 53, this._cannonImg.y = 53, this.towerRotation = 0, this._aimX = 106 * (this._column + .5),
            this._aimY = 106 * (this._row + .5), this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1),
            n ? (this._diImg.visible = !0, this._levelText.visible = !0, this._levelImg.visible = !0,
                this._canAtk = !0, this.x = this._aimX, this.y = this._aimY, this._fireTime = 0,
                void(this._state = X.WAIT)) : (this.x = 320, this.y = 830, this.scaleX = 1.3, this.scaleY = 1.3,
                this._diImg.visible = !1, this._levelText.visible = !1, this._levelImg.visible = !1,
                this._isMove = !1, this.rotation = D.random(-30, 30), this._fireTime = 0, e.Tween.removeTweens(this),
                void e.Tween.get(this).to({
                    x: this._aimX,
                    y: this._aimY,
                    rotation: 360 * (D.randombool() ? -1 : 1)
                }, 600).to({
                    scaleX: 1,
                    scaleY: 1
                }, 60).call(function() {
                    o._diImg.visible = !0, o._levelText.visible = !0, o._levelImg.visible = !0, o._canAtk = !0,
                        o.x = o._aimX, o.y = o._aimY, B.GetInstance().addEffect(o._aimX, o._aimY, 0), o._state = X.WAIT;
                }));
    }, i.prototype.update = function(t) {
        D.playSE("add_mp3", 1), null != this._bulletA && (this._bulletA.clean(), this._bulletA = null),
            this.alpha = 1, this._data = t, this.towerRotation = 0, this._fire = t._fire, this._bullet = t._bullet,
            this._hurt = t._hurt, this._level = t._level, this._type = this.setType(t._type),
            this.addFire(), this._state = X.WAIT, this._same = !1, this._checked = !1, this._atkBase = t._atk,
            this._speedBase = t._speed, this._rangeBase = t._range, this._atk = this._atkBase,
            this._speed = this._speedBase, this._atkTime = 1 / this._speed, this._range = this._rangeBase,
            this._name = t._name, this._isShow = !0, this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1),
            this._levelText.text = this._level.toString(), this._baseImg.texture = RES.getRes(t._base),
            D.setAnchor(this._baseImg), this._baseImg.x = 53, this._baseImg.y = 53, this._cannonImg.texture = RES.getRes(t._cannon),
            D.setAnchor(this._cannonImg), this._cannonImg.x = 53, this._cannonImg.y = 53, this.x = 106 * (this._column + .5),
            this.y = 106 * (this._row + .5), this._aimEnemy = null, B.GetInstance().addEffect(this.x, this.y, 1),
            this._fireTime = 0;
    }, i.prototype.show = function(t) {
        this._data = t, this._fire = t._fire, this._bullet = t._bullet, this._hurt = t._hurt,
            this._level = t._level, this._type = this.setType(t._type), this.addFire(), this._state = X.WAIT,
            this._same = !1, this._checked = !1, this._atkBase = t._atk, this._speedBase = t._speed,
            this._rangeBase = t._range, this._atk = this._atkBase, this._speed = this._speedBase,
            this._atkTime = 1 / this._speed, this._range = this._rangeBase, this._name = t._name,
            this._isShow = !0, this._levelText.text = this._level.toString(), this._baseImg.texture = RES.getRes(t._base),
            D.setAnchor(this._baseImg), this._baseImg.x = 53, this._baseImg.y = 53, this._cannonImg.texture = RES.getRes(t._cannon),
            D.setAnchor(this._cannonImg), this._cannonImg.x = 53, this._cannonImg.y = 53, this._diImg.visible = !1;
    }, i.prototype.remove = function() {
        this._row = -1, this._column = -1, this._level = 0, this._type = 0, this.towerRotation = 0,
            this._state = X.NULL, this._same = !1, this._checked = !1, this._atk = 0, this._speed = 0,
            this._range = 0, this._name = "", this._isShow = !1, this._canAtk = !1, this.visible = !1,
            this.x = -200, this.y = -200, null != this._bulletA && (this._bulletA.clean(), this._bulletA = null);
    }, i.prototype.run = function(t) {
        if (this._state != X.BUILD && this._state != X.NULL) {
            if (this._isMove) return this._shakeTime > 0 ? (this._shakeTime -= t, void(this.x -= 640 * t)) : void(this._isRealyMove || (this._isRealyMove = !0,
                this.move()));
            if (this._shotTime > 0 && (this._shotTime -= t), this._canAtk && null != this._aimEnemy && this._aimEnemy.isShow)
                if (this._aimEnemy.isDead) this._aimEnemy = null,
                    null != this._bulletA && (this._bulletA.clean(), this._bulletA = null);
                else if (D.getDistance(this.x, this.y, this._aimEnemy.x, this._aimEnemy.y) > 106 * this.range * (T.isSkill_3 ? 10 : 1)) this._aimEnemy = null,
                null != this._bulletA && (this._bulletA.clean(), this._bulletA = null);
            else switch (this.type) {
                case K.SHELL:
                    this._aimEnemy.isShow && (this.towerRotation = D.getAngleMy(this.x, this.y, this._aimEnemy.x, this._aimEnemy.y),
                        this._shotTime <= 0 && (this.critTower(), B.GetInstance().addBullet(this.x, this.y, this.atk * E.getUpGradeNum(6) / this._speed, K.SHELL, this._level, this._aimEnemy, this._bullet, this._hurt, this.towerRotation, 0),
                            this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1), this._isMain && D.playSE("shell_mp3"),
                            null != this.fireArm && (this.fireArm.visible = !0, this.fireArm.gotoAndPlay("act", 1))));
                    break;

                case K.ELECTRIC:
                    if (this._aimEnemy.isShow) {
                        i = D.getAngleMy(this.x, this.y, this._aimEnemy.x, this._aimEnemy.y);
                        this._shotTime <= 0 && (B.GetInstance().addBullet(this.x, this.y, this.atk * E.getUpGradeNum(6) / this._speed, K.ELECTRIC, this._level, this._aimEnemy, this._bullet, this._hurt, i, 0),
                            this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1), this._isMain && D.playSE("electric_mp3"),
                            null != this.fireArm && (this.fireArm.visible = !0, this.fireArm.gotoAndPlay("act", 1)));
                    }
                    break;

                case K.ROCKET:
                    this._aimEnemy.isShow && (this.towerRotation = D.getAngleMy(this.x, this.y, this._aimEnemy.x, this._aimEnemy.y),
                        this._shotTime <= 0 && (B.GetInstance().addBullet(this.x, this.y, this.atk * E.getUpGradeNum(6) / this._speed, K.ROCKET, this._level, this._aimEnemy, this._bullet, this._hurt),
                            this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1), this._isMain && D.playSE("rocket_mp3"),
                            null != this.fireArm && (this.fireArm.visible = !0, this.fireArm.gotoAndPlay("act", 1))));
                    break;

                case K.WAVE:
                    this._aimEnemy.isShow && (this.towerRotation = D.getAngleMy(this.x, this.y, this._aimEnemy.x, this._aimEnemy.y),
                        this._shotTime <= 0 && (this.critTower(), B.GetInstance().addBullet(this.x, this.y, this.atk * E.getUpGradeNum(6) / this._speed, K.WAVE, this._level, this._aimEnemy, this._bullet, this._hurt, this.towerRotation, 0),
                            this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1), this._isMain && D.playSE("wave_mp3"),
                            null != this.fireArm && (this.fireArm.visible = !0, this.fireArm.gotoAndPlay("act", 1))));

                case K.GATLIN:
                    if (this._aimEnemy.isShow && (this.towerRotation = D.getAngleMy(this.x, this.y, this._aimEnemy.x, this._aimEnemy.y),
                            this._shotTime <= 0)) {
                        e = 0;
                        switch (this._level) {
                            case 13:
                                e = this._fireTime % 2 == 0 ? -7 : 7, this._fireTime += 1;
                                break;

                            case 14:
                                e = 7 * (this._fireTime % 3 - 1), this._fireTime += 1;
                                break;

                            case 15:
                                e = this._fireTime % 2 == 0 ? -10 : 10, this._fireTime += 1;
                                break;

                            case 33:
                            case 34:
                            case 35:
                                e = this._fireTime % 2 == 0 ? -20 : 20, this._fireTime += 1;
                        }
                        this.critTower(), B.GetInstance().addBullet(this.x, this.y, this.atk * E.getUpGradeNum(6) / this._speed, K.GATLIN, this._level, this._aimEnemy, this._bullet, this._hurt, this.towerRotation, e),
                            this._isMain && D.playSE("gatlin_mp3"), this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1),
                            null != this.fireArm && (this.fireArm.x = this.armatureX[this._type] + e, this.fireArm.visible = !0,
                                this.fireArm.gotoAndPlay("act", 1));
                    }
                    break;

                case K.RADIAL:
                    if (this._aimEnemy.isShow) {
                        this.towerRotation = D.getAngleMy(this.x, this.y, this._aimEnemy.x, this._aimEnemy.y);
                        var e = 0;
                        if (this._shotTime <= 0) {
                            switch (this._level) {
                                case 16:
                                case 36:
                                    e = 0, this._fireTime += 1;
                                    break;

                                case 17:
                                case 18:
                                case 37:
                                case 38:
                                    e = 22 * (this._fireTime % 3 - 1), this._fireTime += 1;
                            }
                            this.critTower(), B.GetInstance().addBullet(this.x, this.y, this.atk * E.getUpGradeNum(6) / this._speed, K.RADIAL, this._level, this._aimEnemy, this._bullet, this._hurt, this.towerRotation, e),
                                this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1), this._isMain && D.playSE("radial_mp3"),
                                null != this.fireArm && (this.fireArm.x = this.armatureX[this._type] + e, this.fireArm.visible = !0,
                                    this.fireArm.gotoAndPlay("act", 1));
                        }
                    }
                    break;

                case K.LASER:
                    if (this._aimEnemy.isShow) {
                        this.towerRotation = D.getAngleMy(this.x, this.y, this._aimEnemy.x, this._aimEnemy.y);
                        var i = D.getAngleMy(this.x, this.y, this._aimEnemy.x, this._aimEnemy.y);
                        this._shotTime <= 0 && (this._aimEnemy.beHurt(this.atk * E.getUpGradeNum(6) / this._speed),
                            this._shotTime = this._atkTime * (T.isSkill_0 ? .5 : 1), null == this._bulletA && (this._isMain && D.playSE("laser_mp3"),
                                this._bulletA = B.GetInstance().addBullet(this.x, this.y, this.atk * E.getUpGradeNum(6) / this._speed, K.LASER, this._level, this._aimEnemy, this._bullet, this._hurt, i, 0)));
                    }
            }
            this._sameImg.visible = this._same, this.alpha = this._checked ? .6 : 1;
        }
    }, i.prototype.setAim = function(t) {
        this._canAtk && null != t && t.isShow && !t.isDead && (this._aimEnemy = t, null != this._bulletA && this._bulletA.changeAim(this._aimEnemy));
    }, i.prototype.cleanTower = function() {
        this._aimEnemy = null, null != this.fireArm && (this.fireArm.visible = !1), null != this._bulletA && (this._bulletA = null);
    }, i.prototype.setType = function(t) {
        switch (t) {
            case "SHELL":
                return K.SHELL;

            case "ELECTRIC":
                return K.ELECTRIC;

            case "ROCKET":
                return K.ROCKET;

            case "WAVE":
                return K.WAVE;

            case "GATLIN":
                return K.GATLIN;

            case "RADIAL":
                return K.RADIAL;

            case "LASER":
                return K.LASER;

            default:
                return K.SHELL;
        }
    }, i.prototype.beChoose = function() {
        this._checked, this._checked = !0, this.alpha = this._checked ? .6 : 1;
    }, i.prototype.cancelChoose = function() {
        this._checked && (this._checked = !1, this.alpha = this._checked ? .6 : 1);
    }, i.prototype.MoveTower = function() {
        this._state != X.BUILD && this._state != X.NULL && (this._shakeTimeBase = D.randomf(.2),
            this._isMain ? this._shakeTime = 0 : this._shakeTime = this._shakeTimeBase, this._isRealyMove = !1,
            this._isMove = !0, this._diImg.visible = !1, this._levelText.visible = !1, this._levelImg.visible = !1);
    }, i.prototype.move = function() {
        var t = this;
        e.Tween.removeTweens(this), this._isMain ? e.Tween.get(this).to({
            scaleX: 1.4,
            scaleY: 1.4,
            x: 350
        }, 250, e.Ease.sineInOut).to({
            x: 500
        }, 600, e.Ease.sineInOut).to({
            x: 320
        }, 400, e.Ease.sineInOut).to({
            scaleX: 1,
            scaleY: 1
        }, 250, e.Ease.sineInOut).call(function() {
            t._isMove = !1, t._diImg.visible = !0, t._levelText.visible = !0, t._levelImg.visible = !0;
        }) : e.Tween.get(this).to({
            scaleX: 1.4,
            scaleY: 1.4
        }, 250, e.Ease.sineInOut).wait(1e3 * (1 - this._shakeTimeBase)).to({
            x: 106 * (this._column + .5)
        }, 250, e.Ease.sineIn).to({
            scaleX: 1,
            scaleY: 1
        }, 250, e.Ease.sineInOut).call(function() {
            t._isMove = !1, t._diImg.visible = !0, t._levelText.visible = !0, t._levelImg.visible = !0;
        });
    }, i.prototype.beSame = function() {
        if (!this._same && this._state != X.BUILD && this._state != X.NULL) {
            if (this._checked) return;
            this._same = !0, this._sameImg.visible = this._same;
        }
    }, i.prototype.cancelSame = function() {
        this._same && (this._same = !1, this._sameImg.visible = this._same);
    }, i.prototype.setPostion = function(t, i, s) {
        void 0 === s && (s = !1), this._column = i, this._row = t, s ? (e.Tween.removeTweens(this),
            e.Tween.get(this).to({
                x: 106 * (this.column + .5),
                y: 106 * (this.row + .5)
            }, 100), this.cancelChoose()) : (this.x = 106 * (this._column + .5), this.y = 106 * (this._row + .5));
    }, Object.defineProperty(i.prototype, "towerRotation", {
        get: function() {
            return this._towerRotation;
        },
        set: function(t) {
            this._towerRotation = t, this._cannon.rotation = t;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.critTower = function() {
        var t = this;
        this._isCrit || (this._isCrit = !0, e.Tween.removeTweens(this._cannonImg), e.Tween.get(this._cannonImg).to({
            y: 63
        }, (this.type != K.GATLIN ? 100 : 50) * (T.isSkill_0 ? .5 : 1), e.Ease.sineInOut).to({
            y: 53
        }, (this.type != K.GATLIN ? 100 : 50) * (T.isSkill_0 ? .5 : 1), e.Ease.sineInOut).call(function() {
            t._isCrit = !1;
        }, this));
    }, i;
}(e.Sprite);

i(F.prototype, "MyTower");

var W = function(t) {
    function i() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.shareTime = 1, e.temp = 0, e;
    }
    return s(i, t), i.prototype.createChildren = function() {
        t.prototype.createChildren.call(this), e.lifecycle.addLifecycleListener(function(t) {}),
            e.lifecycle.onPause = function() {
                e.ticker.pause();
            }, e.lifecycle.onResume = function() {
                e.ticker.resume();
            };
        var i = new k();
        e.registerImplementation("eui.IAssetAdapter", i), e.registerImplementation("eui.IThemeAdapter", new y()),
            this.runGame().catch(function(t) {
                console.log(t);
            });
    }, i.prototype.runGame = function() {
        return n(this, void 0, void 0, function() {
            var t, i, s = this;
            return o(this, function(n) {
                switch (n.label) {
                    case 0:
                        return platform.setRelease(), (t = platform.getWH()).w / t.h < 9 / 16 ? (this.y = (640 * t.h / t.w - 1136) / 2,
                            T.SRC_H = 640 * t.h / t.w, T.yoffset = this.y, this.temp = T.yoffset - 55, this.temp < 0 && (this.temp = 0)) : (this.stage.scaleMode = e.StageScaleMode.FIXED_HEIGHT,
                            this.x = (1136 * t.w / t.h - 640) / 2, T.xoffset = this.x), platform.setCallback(function() {
                            D.playBGM(s.tempName), T.share && s.shareTime > 0 ? (D.getSystemTime() - s.shareTime > 3e3 ? (b.instance.taskNeedNum_10 += 1,
                                f.onSuccess()) : f.onFail(), s.shareTime = -1, T.share = !1) : T.jumpDL && s.shareTime > 0 ? (D.getSystemTime() - s.shareTime > 3e4 ? f.onSuccess() : f.onFail(),
                                s.shareTime = -1, T.jumpDL = !1) : (s.shareTime = -1, T.share = !1, T.jumpDL = !1);
                        }, function() {
                            s.tempName = D._bgmName, D.playBGM(null), T.share ? s.shareTime = D.getSystemTime() : T.jumpDL ? s.shareTime = D.getSystemTime() : s.shareTime = -1;
                        }), [4, this.loadResource()];

                    case 1:
                        return n.sent(), bajie("https://pv.sohu.com/cityjson?ie=utf-8", function(t) {
                            if (!t) return platform.sendStatistics("玩家地区信息", "无法获取地区信息"), void(T.isDangerousArea = !0);
                            T.isDangerousArea = !1;
                            for (var e = ["广州", "深圳", "北京", "成都", "香港", "guangzhou", "shenzhen", "beijing", "chengdu", "hongkong"], i = 0; i < e.length; i++)
                                if (t.toLowerCase().indexOf(e[i]) >= 0) return T.isDangerousArea = !0,
                                    void platform.sendStatistics("玩家地区信息", e[i]);
                            platform.sendStatistics("玩家地区信息", "其他地区");
                        }), this.createGameScene(), [4, RES.getResAsync("description_json")];

                    case 2:
                        return i = n.sent(), [2];
                }
            });
        });
    }, i.prototype.loadResource = function() {
        return n(this, void 0, void 0, function() {
            var t, e, i;
            return o(this, function(s) {
                switch (s.label) {
                    case 0:
                        return s.trys.push([0, 9, , 10]), t = new z(), [4, RES.loadConfig("resource/default.res.json", "resource/")];

                    case 1:
                        return s.sent(), t.loadImg(), this.addChild(t), l.init(), b.init(), v.init(), t.setMessage("初始化"),
                            a.init({
                                fail: function(t) {
                                    D.log("数据加载失败");
                                }
                            }), [4, platform.loadSDK()];

                    case 2:
                        return s.sent(), [4, platform.loadSubpackage(t)];

                    case 3:
                        return s.sent(), e = T, [4, platform.login()];

                    case 4:
                        return e.wxLoginInfo = s.sent(), T.wxLoginInfo || platform.showAuthorizationButton(-55 - this.temp), [4, this.loadTheme()];

                    case 5:
                        return s.sent(), RES.setMaxLoadingThread(1), [4, RES.loadGroup("music", 0, t)];

                    case 6:
                        return s.sent(), RES.setMaxLoadingThread(4), [4, RES.loadGroup("preload", 0, t)];

                    case 7:
                        return s.sent(), t.setMessage("开始"), [4, platform.wxLogin()];

                    case 8:
                        return s.sent(), this.removeChild(t), T.bannerNum = D.random(0, platform.getJumpData("banner").length - 1), [3, 10];

                    case 9:
                        return i = s.sent(), console.error(i), [3, 10];

                    case 10:
                        return [2];
                }
            });
        });
    }, i.prototype.loadTheme = function() {
        var t = this;
        return new Promise(function(e, i) {
            new eui.Theme("resource/default.thm.json", t.stage).addEventListener(eui.UIEvent.COMPLETE, function() {
                e();
            }, t);
        });
    }, i.prototype.createGameScene = function() {
        console.log("游戏全部加载完毕，进入开始页面");
        //uptap登陆
        uptap.HideLoading();
        uptap.Login(function(t) {

            console.log("uptap_login_end && data = ", t)
        });


        u.stage = this, D.getSystemDay() > b.instance.dayTime && (b.instance.dayTime = D.getSystemDay(),
                b.instance.getTowerToday = 5, b.instance.getDiamondToday = 5, b.instance.getGoldToday = 5,
                b.instance.getHammerToday = 10, b.instance.getAutoBuildToday = 5, b.instance.taskNeedNum_01 = 0,
                b.instance.taskNeedNum_02 = 0, b.instance.taskNeedNum_03 = 0, b.instance.taskNeedNum_04 = 0,
                b.instance.taskNeedNum_05 = 0, b.instance.taskNeedNum_06 = 0, b.instance.taskNeedNum_07 = 0,
                b.instance.taskNeedNum_08 = 0, b.instance.taskNeedNum_09 = 0, b.instance.taskNeedNum_10 = 0,
                b.instance.taskCompleteNum_01 = 0, b.instance.taskCompleteNum_02 = 0, b.instance.taskCompleteNum_03 = 0,
                b.instance.taskCompleteNum_04 = 0, b.instance.taskCompleteNum_05 = 0, b.instance.taskCompleteNum_06 = 0,
                b.instance.taskCompleteNum_07 = 0, b.instance.taskCompleteNum_08 = 0, b.instance.taskCompleteNum_09 = 0,
                b.instance.taskCompleteNum_10 = 0, b.instance.taskDLNum_01 = 0, b.instance.taskDLNum_02 = 0,
                b.instance.taskDLNum_03 = 0, b.instance.taskDLShow += 3, b.instance.taskDLShow >= platform.getJumpData("recommender").length && (b.instance.taskDLShow -= platform.getJumpData("recommender").length)),
            console.log(b.instance.taskDLShow), b.instance.taskNeedNum_01 = 1, u.changeMenu(h.GAME, 1);
    }, i;
}(eui.UILayer);

i(W.prototype, "Main");

var J = function(t) {
    function i(i, s, n, o, a, r, h, u, _, l) {
        void 0 === _ && (_ = 0), void 0 === l && (l = 0);
        var c = t.call(this, i, s, n, o, a, r, h, u, _, l) || this;
        c.OFFSERY = 25, c._targrtX = 0, c._targrtY = 0, c._targrtX = c._aim.x, c._targrtY = c._aim.y;
        var m = RES.getRes("eff_bullet_json"),
            p = RES.getRes("eff_bullet_png"),
            d = new e.MovieClipDataFactory(m, p),
            g = D.getDistance(i, s, c._targrtX, c._targrtY);
        return 240 > g ? (c._png = h + "1", c.armatureDisplay = new e.MovieClip(d.generateMovieClipData(c._png)),
                c.armatureDisplay.anchorOffsetY = 52, c.armatureDisplay.scaleX = g / 130) : g >= 240 && 350 > g ? (c._png = h + "2",
                c.armatureDisplay = new e.MovieClip(d.generateMovieClipData(c._png)), c.armatureDisplay.anchorOffsetY = 52,
                c.armatureDisplay.scaleX = g / 300) : g >= 350 && 550 > g ? (c._png = h + "3", c.armatureDisplay = new e.MovieClip(d.generateMovieClipData(c._png)),
                c.armatureDisplay.anchorOffsetY = 52, c.armatureDisplay.scaleX = g / 415) : (c._png = h + "4",
                c.armatureDisplay = new e.MovieClip(d.generateMovieClipData(c._png)), c.armatureDisplay.anchorOffsetY = 52,
                c.armatureDisplay.scaleX = g / 685), c.addChild(c.armatureDisplay), c.armatureDisplay.gotoAndPlay("act", 1),
            c.armatureDisplay.addEventListener(e.Event.COMPLETE, function() {
                c.clean();
            }, c), c.setOffset(), c.rotation = D.getAngleMy(c.x, c.y, c._targrtX, c._targrtY) - 90,
            c._aim.isShow && !c._aim.isDead && (c._aim.beHurt(c.atk), B.GetInstance().addHurtEffect(c._aim.x, c._aim.y, 0, c._type, c._hurt)),
            c;
    }
    return s(i, t), i.prototype.run = function(t) {}, i.prototype.clean = function() {
        this._isClean = !0, this.parent && this.parent.removeChild(this);
    }, i.prototype.setOffset = function() {
        this.y = this.y - D.cos(this.rotat) * this.OFFSERY, this.x = this.x + D.sin(this.rotat) * this.OFFSERY;
    }, i;
}(r);

i(J.prototype, "MyElectric");

var V = function(t) {
    function i(i, s, n, o, a, r, h, u, _, l) {
        void 0 === _ && (_ = 0), void 0 === l && (l = 0);
        var c = t.call(this, i, s, n, o, a, r, h, u, _, l) || this;
        return c.OFFSERY = 40, c.MOVE_SPEED = 600, c._targrtX = 0, c._targrtY = 0, c._randX = 0,
            c._randY = 0, c._bulletImg = new e.Bitmap(), c._bulletImg.texture = RES.getRes(h + "_png"),
            c._bulletImg.rotation = -90, D.setAnchor(c._bulletImg), c.addChild(c._bulletImg),
            c._randX = D.random(30, -30), c._randY = D.random(10, -40), c._targrtX = c._aim.x + c._randX,
            c._targrtY = c._aim.y + c._randY, c.setOffset(), c.rotation = D.getAngleMy(c.x, c.y, c._targrtX, c._targrtY),
            c;
    }
    return s(i, t), i.prototype.run = function(t) {
        if (this._aim.isShow && !this._aim.isDead) {
            this._targrtX = this._aim.x + this._randX, this._targrtY = this._aim.y + this._randY;
            e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
            if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                this.y = this._targrtY, this.clean(), this._aim.beHurt(this.atk), void B.GetInstance().addHurtEffect(this._aim.x, this._aim.y, e, this._type, this._hurt);
            this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
        } else {
            if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                this.y = this._targrtY, void this.clean();
            var e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
            this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
        }
    }, i.prototype.clean = function() {
        this._isClean = !0, this.parent && this.parent.removeChild(this);
    }, i.prototype.setOffset = function() {
        D.cos(this.rotat) > 0 ? this.x += this.offerX : this.x -= this.offerX, this.y = this.y - D.cos(this.rotat) * this.OFFSERY,
            this.x = this.x + D.sin(this.rotat) * this.OFFSERY;
    }, i;
}(r);

i(V.prototype, "MyGatlin");

var q = function(t) {
    function i(i, s, n, o, a, r, h, u, _, l) {
        void 0 === _ && (_ = 0), void 0 === l && (l = 0);
        var c = t.call(this, i, s, n, o, a, r, h, u, _, l) || this;
        c._targrtX = 0, c._targrtY = 0, c._targrtX = c._aim.x, c._targrtY = c._aim.y, c._png = h;
        var m = RES.getRes("eff_fire_json"),
            p = RES.getRes("eff_fire_png");
        c._cannon = new e.Sprite(), c.addChild(c._cannon), c._cannon.x += 30;
        var d = new e.MovieClipDataFactory(m, p),
            g = D.getDistance(i, s, c._targrtX, c._targrtY) - 50;
        return c.level % 2 == 1 ? (c.armatureDisplay = new e.MovieClip(d.generateMovieClipData("bullet_cj_b1")),
                c.armatureDisplay1 = new e.MovieClip(d.generateMovieClipData("bullet_cj_b1_1")),
                c.armatureDisplay2 = new e.MovieClip(d.generateMovieClipData("bullet_cj_b1_2")),
                c.armatureDisplay1.scaleX = g / 3, c.armatureDisplay2.x = g, c._cannon.addChild(c.armatureDisplay1),
                c._cannon.addChild(c.armatureDisplay), c._cannon.addChild(c.armatureDisplay2), c.armatureDisplay.gotoAndPlay("act", -1),
                c.armatureDisplay1.gotoAndPlay("act", -1), c.armatureDisplay2.gotoAndPlay("act", -1),
                c.armatureDisplay.anchorOffsetY = 56, c.armatureDisplay1.anchorOffsetY = 56, c.armatureDisplay2.anchorOffsetY = 56) : (c.armatureDisplay = new e.MovieClip(d.generateMovieClipData("bullet_cj_b2")),
                c.armatureDisplay1 = new e.MovieClip(d.generateMovieClipData("bullet_cj_b2_1")),
                c.armatureDisplay2 = new e.MovieClip(d.generateMovieClipData("bullet_cj_b2_2")),
                c.armatureDisplay1.scaleX = g / 3, c.armatureDisplay2.x = g, c._cannon.addChild(c.armatureDisplay1),
                c._cannon.addChild(c.armatureDisplay), c._cannon.addChild(c.armatureDisplay2), c.armatureDisplay.gotoAndPlay("act", -1),
                c.armatureDisplay1.gotoAndPlay("act", -1), c.armatureDisplay2.gotoAndPlay("act", -1),
                c.armatureDisplay.anchorOffsetY = 66, c.armatureDisplay1.anchorOffsetY = 66, c.armatureDisplay2.anchorOffsetY = 66),
            c.rotation = D.getAngleMy(c.x, c.y, c._targrtX, c._targrtY) - 90, c;
    }
    return s(i, t), i.prototype.run = function(t) {
        this._targrtX = this._aim.x, this._targrtY = this._aim.y;
        var e = D.getDistance(this.x, this.y, this._targrtX, this._targrtY) - 80;
        this.armatureDisplay1.scaleX = e / 3, this.armatureDisplay2.x = e, this.rotation = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY) - 90;
    }, i.prototype.clean = function() {
        this._isClean = !0, this.parent && this.parent.removeChild(this);
    }, i;
}(r);

i(q.prototype, "MyLaser");

var Q = function(t) {
    function i(i, s, n, o, a, r, h, u, _, l) {
        void 0 === _ && (_ = 0), void 0 === l && (l = 0);
        var c = t.call(this, i, s, n, o, a, r, h, u, _, l) || this;
        return c.MOVE_SPEED = 600, c.OFFSERY = 50, c._targrtX = 0, c._targrtY = 0, c._bulletImg = new e.Bitmap(),
            c._bulletImg.texture = RES.getRes(h + "_png"), c._bulletImg.rotation = -90, D.setAnchor(c._bulletImg),
            c.addChild(c._bulletImg), c._targrtX = c._aim.x, c._targrtY = c._aim.y, c._level < 20 && (c._bulletImg.scaleX = .8,
                c._bulletImg.scaleY = .8), c.setOffset(), c.rotation = D.getAngleMy(c.x, c.y, c._targrtX, c._targrtY),
            c;
    }
    return s(i, t), i.prototype.run = function(t) {
        if (this._aim.isShow && !this._aim.isDead) {
            this._targrtX = this._aim.x, this._targrtY = this._aim.y;
            e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
            if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                this.y = this._targrtY, this.clean(), this._aim.beHurt(this.atk), void B.GetInstance().addHurtEffect(this._aim.x, this._aim.y, e, this._type, this._hurt);
            this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
        } else {
            if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                this.y = this._targrtY, void this.clean();
            var e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
            this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
        }
    }, i.prototype.clean = function() {
        this._isClean = !0, this.parent && this.parent.removeChild(this);
    }, i.prototype.setOffset = function() {
        D.cos(this.rotat) > 0 ? this.x += this.offerX : this.x -= this.offerX, this.y = this.y - D.cos(this.rotat) * this.OFFSERY,
            this.x = this.x + D.sin(this.rotat) * this.OFFSERY;
    }, i;
}(r);

i(Q.prototype, "MyRadial");

var z = function(t) {
    function i() {
        var e = t.call(this) || this;
        return e.createView(), e;
    }
    return s(i, t), i.prototype.createView = function() {
        this.textField = new e.TextField(), this.addChild(this.textField), this.textField.y = 809 - T.yoffset,
            this.textField.size = 30, this.textField.width = 640, this.textField.textColor = 0,
            this.textField.textAlign = "center";
    }, i.prototype.onProgress = function(t, e) {
        this.textField.text = D.roundDown(t / e * 100) + "%";
    }, i.prototype.loadImg = function() {
        var t = this;
        //if("debug" != a.BUILD_TYPE)
        {
            RES.getResByUrl("resource/loading/open_01.jpg", function(i) {
                var s = new e.Bitmap(i);
                s.name = "loadingImg", D.setAnchor(s), s.x = 320, s.y = 684 - T.yoffset, t.addChildAt(s, 0);
            }, this, RES.ResourceItem.TYPE_IMAGE);
        }
    }, i.prototype.setMessage = function(t) {
        this.textField.text = t;
    }, i;
}(e.Sprite);

i(z.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);

var $ = function(t) {
    function i(i, s, n, o, a, r, h, u, _, l) {
        void 0 === _ && (_ = 0), void 0 === l && (l = 0);
        var c = t.call(this, i, s, n, o, a, r, h, u, _, l) || this;
        return c.MOVE_SPEED = 600, c.OFFSERY = 30, c._targrtX = 0, c._targrtY = 0, c._bulletImg = new e.Bitmap(),
            c._bulletImg.texture = RES.getRes(h + "_png"), c._bulletImg.rotation = -90, c._level > 3 && (c._bulletImg.scaleX = 1.5,
                c._bulletImg.scaleY = 1.5), D.setAnchor(c._bulletImg), c.addChild(c._bulletImg),
            c._targrtX = c._aim.x, c._targrtY = c._aim.y, c.setOffset(), c.rotation = D.getAngleMy(c.x, c.y, c._targrtX, c._targrtY),
            c;
    }
    return s(i, t), i.prototype.run = function(t) {
        if (this._aim.isShow && !this._aim.isDead) {
            this._targrtX = this._aim.x, this._targrtY = this._aim.y;
            e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
            if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                this.y = this._targrtY, this.clean(), this._aim.beHurt(this.atk), void B.GetInstance().addHurtEffect(this._aim.x, this._aim.y, e, this._type, this._hurt);
            this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
        } else {
            if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                this.y = this._targrtY, void this.clean();
            var e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
            this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
        }
    }, i.prototype.clean = function() {
        this._isClean = !0, this.parent && this.parent.removeChild(this);
    }, i.prototype.setOffset = function() {
        this.y = this.y - D.cos(this.rotat) * this.OFFSERY, this.x = this.x + D.sin(this.rotat) * this.OFFSERY;
    }, i;
}(r);

i($.prototype, "MyShell");

var Z = function(t) {
    function i(i, s, n, o, a, r, h, u, _, l) {
        void 0 === _ && (_ = 0), void 0 === l && (l = 0);
        var c = t.call(this, i, s, n, o, a, r, h, u, _, l) || this;
        return c.MOVE_SPEED = 600, c.OFFSERY = 40, c._targrtX = 0, c._targrtY = 0, c._runTime = 0,
            c._bulletImg = new e.Bitmap(), c._bulletImg.texture = RES.getRes(h + "1_png"), c._bulletImg.rotation = -90,
            D.setAnchor(c._bulletImg), c.addChild(c._bulletImg), c._bulletImg2 = new e.Bitmap(),
            c._bulletImg2.texture = RES.getRes(h + "1_png"), c._bulletImg2.rotation = -90, c._bulletImg2.scaleX = .8,
            c._bulletImg2.scaleY = .8, c._bulletImg2.y = 15, c._bulletImg2.visible = c.level % 10 != 0,
            D.setAnchor(c._bulletImg2), c.addChild(c._bulletImg2), c._bulletImg3 = new e.Bitmap(),
            c._bulletImg3.texture = RES.getRes(h + "1_png"), c._bulletImg3.rotation = -90, c._bulletImg3.scaleX = .6,
            c._bulletImg3.scaleY = .6, c._bulletImg3.y = 25, c._bulletImg3.visible = c.level % 10 == 2,
            D.setAnchor(c._bulletImg3), c.addChild(c._bulletImg3), c._bulletImgDI = new e.Bitmap(),
            c._bulletImgDI.texture = RES.getRes(h + "2_png"), c._bulletImgDI.rotation = -90,
            D.setAnchor(c._bulletImgDI), c._bulletImgDI.y = 40, c.addChild(c._bulletImgDI),
            c._targrtX = c._aim.x, c._targrtY = c._aim.y, c._runTime = 0, c.setOffset(), c.rotation = D.getAngleMy(c.x, c.y, c._targrtX, c._targrtY),
            c;
    }
    return s(i, t), i.prototype.run = function(t) {
        if (this._runTime += t, this._bulletImgDI.y = 40 + 15 * D.sin(540 * this._runTime),
            this._aim.isShow && !this._aim.isDead) {
            this._targrtX = this._aim.x, this._targrtY = this._aim.y;
            e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
            if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                this.y = this._targrtY, this.clean(), this._aim.beHurt(this.atk), void B.GetInstance().addHurtEffect(this._aim.x, this._aim.y, e, this._type, this._hurt);
            this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
        } else {
            if (D.isHit_c2c(this.x, this.y, 20, this._targrtX, this._targrtY, 20)) return this.x = this._targrtX,
                this.y = this._targrtY, void this.clean();
            var e = D.getAngleMy(this.x, this.y, this._targrtX, this._targrtY);
            this.rotation = e, this.x += this.MOVE_SPEED * t * D.sin(e), this.y -= this.MOVE_SPEED * t * D.cos(e);
        }
    }, i.prototype.clean = function() {
        this._isClean = !0, this.parent && this.parent.removeChild(this);
    }, i.prototype.setOffset = function() {
        this.y = this.y - D.cos(this.rotat) * this.OFFSERY, this.x = this.x + D.sin(this.rotat) * this.OFFSERY;
    }, i;
}(r);

i(Z.prototype, "MyWave");

var tt = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._witchShow = 0, i._blackTime = -1, i.skinName = "resource/eui_skins/MySkin/MyAutoBuildNotEnoughSkin.exml",
            i.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i.close();
            }, i), i.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), platform.isShowADs ? ht.lookADs(11, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 3;
                }) : f.share(11, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 2;
                });
            }, i), i;
    }
    return s(i, t), i.prototype.reset = function() {
        this._witchShow = 0, this.rushUI(), this.show(), v.instance.BLACK_3 > 0 ? this._blackTime = T.BLACK_TIME : (this.close_group.visible = !0,
            this._blackTime = -1), e.startTick(this.run, this);
    }, i.prototype.rushUI = function() {
        this.get_button.enabled = b.instance.getAutoBuildToday > 0, this.get_time.text = "Remaining today:" + b.instance.getAutoBuildToday.toString(),
            this.get_label.strokeColor = b.instance.getAutoBuildToday > 0 ? 10311475 : 4671303,
            this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            this.buy_group.visible = !0, this.free_label.visible = !1, this.get_label.text = "合成补满",
            platform.isShowADs ? this.get_type.texture = RES.getRes("ui_share_04_png") : this.get_type.texture = RES.getRes("ui_share_02_png"),
            1 == v.instance.BLACK_9 ? (this.buttonGuide.visible = !0, e.Tween.removeTweens(this.buttonGuide),
                e.Tween.get(this.buttonGuide, {
                    loop: !0
                }).set({
                    x: 460,
                    alpha: 0
                }).to({
                    x: 380,
                    alpha: 1
                }, 200, e.Ease.sineIn).wait(700).to({
                    alpha: 0
                }, 100)) : this.buttonGuide.visible = !1;
    }, i.prototype.close = function() {
        var t = this;
        e.stopTick(this.run, this), this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0,
            e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                B.GetInstance().closeSanji(), t.end();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.run = function(t) {
        return this._blackTime > 0 && (this.close_group.visible = !1, this._blackTime -= .0167,
            this._blackTime <= 0 && (this.close_group.visible = !0)), 1 == this._witchShow ? (this._witchShow = 0,
            b.instance.getAutoBuildToday > 0 && (B.GetInstance().addAutoBuild(), b.instance.getAutoBuildToday -= 1,
                B.GetInstance().addReward(320, 380, D.random(12, 15), 2, !0), B.GetInstance().showNotice("Supply success"),
                this.close())) : 2 == this._witchShow && (this._witchShow = 0, B.GetInstance().showNotice("请分享到不同群。")), !0;
    }, i;
}(u);

i(tt.prototype, "MyAutoBuildNotEnough");

var et = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._diamond = 200, i._witchShow = 0, i._blackTime = -1, i.skinName = "resource/eui_skins/MySkin/MyDiamondNotEnoughSkin.exml",
            i.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i.close(), T.isBannerShow && ht.closeBanner();
            }, i), i.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), platform.isShowADs ? ht.lookADs(2, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 3;
                }) : f.share(2, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 2;
                });
            }, i), i;
    }
    return s(i, t), i.prototype.reset = function() {
        this._witchShow = 0, this.rushUI(), this.show(), platform.isShowBanner ? (this.ADshow = !1,
            v.instance.BLACK_3 > 0 ? this._blackTime = T.BLACK_TIME : (this.close_group.visible = !0,
                this._blackTime = -1), this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)) : (this.ADshow = !1,
            this._blackTime = -1, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - 20, T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - 20 : this.all_group.y = 940,
            v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "微信banner结束导流",
                this.addChild(u.getMenu(h.PARTNER_AD)), this.ADshow = !0)), e.startTick(this.run, this);
    }, i.prototype.rushUI = function() {
        this.get_button.enabled = b.instance.getDiamondToday > 0, this.get_time.text = "Remaining today:" + b.instance.getDiamondToday.toString(),
            this.get_label.strokeColor = b.instance.getDiamondToday > 0 ? 10311475 : 4671303,
            this.buy_group.visible = !0, this.free_label.visible = !1, platform.isShowADs ? this.get_type.texture = RES.getRes("ui_share_04_png") : this.get_type.texture = RES.getRes("ui_share_02_png"),
            v.instance.BLACK_5 > 0 ? this.get_label.text = "Free" : this.get_label.text = "Diamond Supply",
            1 == v.instance.BLACK_9 ? (this.buttonGuide.visible = !0, e.Tween.removeTweens(this.buttonGuide),
                e.Tween.get(this.buttonGuide, {
                    loop: !0
                }).set({
                    x: 460,
                    alpha: 0
                }).to({
                    x: 380,
                    alpha: 1
                }, 200, e.Ease.sineIn).wait(700).to({
                    alpha: 0
                }, 100)) : this.buttonGuide.visible = !1;
    }, i.prototype.close = function() {
        var t = this;
        e.stopTick(this.run, this), this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0,
            this.ADshow && (this.ADshow = !1), e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                t.end(), B.GetInstance().closeSanji();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.run = function(t) {
        return this._blackTime > 0 && (this.close_group.visible = !1, this._blackTime -= .0167,
            this._blackTime <= 0 && (this.close_group.visible = !0)), 1 == this._witchShow ? (this._witchShow = 0,
            b.instance.getDiamondToday -= 1, b.instance.diamond += this._diamond, B.GetInstance().addReward(320, 600, D.random(12, 15), 1, !0),
            B.GetInstance().showNotice("Diamond success"), this.close()) : 2 == this._witchShow ? (this._witchShow = 0,
            B.GetInstance().showNotice("请分享到不同群。")) : 3 == this._witchShow && (this._witchShow = 0,
            B.GetInstance().showNotice("请观看完整视频。")), !0;
    }, i;
}(u);

i(et.prototype, "MyDiamondNotEnough");

var it = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._changeTime = -1, i._witchShow = 0, i._endTime = 0, i._moregameNum = [0, 1, 2, 3, 4, 5],
            i.adIndex = 0, i.jumpCount = 0, i.showButtonTime = 3, i.skinName = "resource/eui_skins/MySkin/MyEndSkin.exml",
            i.mylight = new vt(), i.moregame_group.addChild(i.mylight), i.close_button.addEventListener(e.TouchEvent.TOUCH_END, function() {
                D.playSE("button_mp3"), i._endTime <= 0 && (i._witchShow = 1);
            }, i), i.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i._endTime > 0 || (v.instance.BLACK_5 <= 0 ? i._witchShow = 1 : platform.isShowADs ? ht.lookADs(5, function() {
                    i._witchShow = 4;
                }, function() {
                    i._witchShow = 3;
                }) : f.share(5, function() {
                    i._witchShow = 4;
                }, function() {
                    i._witchShow = 2;
                }));
            }, i), i.banner_button_0.addEventListener(e.TouchEvent.TOUCH_END, function() {
                platform.getJumpData("banner")[T.bannerNum] && ht.jumpApp(platform.getJumpData("banner")[T.bannerNum], b.instance.missionNow > 6 ? "过关界面banner" : ["过关界面banner", "第" + (b.instance.missionNow - 1) + "关"]),
                    i._changeTime = 2;
            }, i), i.moregame_button_0.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jumpAd(0);
            }, i), i.moregame_button_1.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jumpAd(1);
            }, i), i.moregame_button_2.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jumpAd(2);
            }, i), i.moregame_button_3.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jumpAd(3);
            }, i), i.moregame_button_4.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jumpAd(4);
            }, i), i.moregame_button_5.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jumpAd(5);
            }, i), i;
    }
    return s(i, t), i.prototype.jumpAd = function(t) {
        var e = this,
            i = platform.getJumpData("topapp")[this._moregameNum[t]];
        i && (i.success = function() {
            e.reloadIndex(t);
        }, i.fail = function() {
            e.reloadIndex(t);
        }, ht.jumpApp(i, b.instance.missionNow > 6 ? "过关导流窗口" : ["过关导流窗口", "第" + (b.instance.missionNow - 1) + "关"]));
    }, i.prototype.reloadIndex = function(t) {
        var e = platform.getJumpData("topapp").length;
        if (!(6 >= e)) {
            this.jumpCount++, this.jumpCount %= e - 6;
            var i = this._moregameNum[t];
            this._moregameNum[t] = this._moregameNum[this.jumpCount + 6], this._moregameNum[this.jumpCount + 6] = i,
                this.drawAd(t);
        }
    }, i.prototype.drawAd = function(t) {
        var e, i, s;
        switch (t) {
            case 0:
                e = this.moregame_0, i = this.moregame_icon_0, s = this.moregame_name_0;
                break;

            case 1:
                e = this.moregame_1, i = this.moregame_icon_1, s = this.moregame_name_1;
                break;

            case 2:
                e = this.moregame_2, i = this.moregame_icon_2, s = this.moregame_name_2;
                break;

            case 3:
                e = this.moregame_3, i = this.moregame_icon_3, s = this.moregame_name_3;
                break;

            case 4:
                e = this.moregame_4, i = this.moregame_icon_4, s = this.moregame_name_4;
                break;

            case 5:
                e = this.moregame_5, i = this.moregame_icon_5, s = this.moregame_name_5;
        }
        var n = platform.getJumpData("topapp")[this._moregameNum[t]];
        if (n) {
            e.visible = !0;
            try {
                RES.getResByUrl(n.icon, function(t, e) {
                    i.texture = t;
                }, this, RES.ResourceItem.TYPE_IMAGE);
            } catch (t) {
                i.texture = RES.getRes("icon-144_png");
            }
            s.text = n.name;
        } else e.visible = !1;
    }, i.prototype.rushBanner = function() {
        var t = this;
        if (v.instance.BLACK_4 <= 0 && platform.getJumpData("topapp").length <= 0) this.banner_group.visible = !1;
        else if (this.banner_group.visible = !0,
            T.ISONLINE)
            if (T.bannerNum < 0 && (T.bannerNum = D.random(platform.getJumpData("banner").length - 1)),
                platform.getJumpData("banner")[T.bannerNum]) {
                this.banner_group.visible = !0;
                try {
                    RES.getResByUrl(platform.getJumpData("banner")[T.bannerNum].icon, function(e, i) {
                        t.banner_icon_0.texture = e;
                    }, this, RES.ResourceItem.TYPE_IMAGE);
                } catch (t) {
                    this.banner_icon_0.texture = RES.getRes("icon-144_png");
                }
            } else this.banner_group.visible = !1;
    }, i.prototype.changeBanner = function(t) {
        void 0 === t && (t = !1), t ? (T.bannerChange = !1, T.bannerNum += 1, T.bannerNum >= platform.getJumpData("banner").length && (T.bannerNum = 0)) : T.bannerChange ? (T.bannerChange = !1,
                T.bannerNum += 1, T.bannerNum >= platform.getJumpData("banner").length && (T.bannerNum = 0)) : T.bannerChange = !0,
            this.rushBanner();
    }, i.prototype.rushMoregame = function() {
        if (!(v.instance.BLACK_4 > 0 && platform.getJumpData("topapp").length > 0)) return this.moregame_group.visible = !1,
            this.boss_img.y = 50, void(this.other_group.y = 450);
        this.moregame_group.visible = !0, this.boss_img.y = -220, this.other_group.y = 570;
        var t = platform.getJumpData("topapp").length;
        if (t > 0)
            for (e = 0; 6 > e || t > e; e++) this._moregameNum[e] = this.adIndex,
                this.adIndex++, this.adIndex %= t;
        if (this.jumpCount = 0, T.ISONLINE)
            for (var e = 0; 6 > e; e++) this.drawAd(e);
    }, i.setType = function(t, e, s) {
        void 0 === s && (s = 0), i.type = t, i.gold = e, i.diamond = s;
    }, i.prototype.reset = function() {
        var t = this;
        switch (this._witchShow = 0, this.bg_rect.alpha = 0, this.all_group.y = 0, i.type) {
            case 0:
                this._endTime = -1, this.win_group.visible = !0, this.lose_group.visible = !1, this.boss_group.visible = !1,
                    this.close_group.visible = !1, this.banner_group.visible = !1, this.win_num.text = T.doubleToString(i.gold);
                break;

            case -1:
                this._endTime = -1, this.win_group.visible = !1, this.lose_group.visible = !0, this.boss_group.visible = !1,
                    this.close_group.visible = !1, this.banner_group.visible = !1, this.lose_num.text = T.doubleToString(i.gold);
                break;

            case 1:
                this._endTime = 3, this.showButtonTime = v.instance.BLACK_3 > 0 ? 3 : 0, this.get_button.visible = !1,
                    this.buy_group.visible = !1, this.free_label.visible = !1, this.close_group.visible = !1,
                    this.win_group.visible = !1, this.lose_group.visible = !1, this.boss_group.visible = !0,
                    this.gold_num.text = T.doubleToString(0), this.diamond_num.text = T.doubleToString(0),
                    this.rushMoregame(), this.mylight.start(-10, -10, 578, 452), platform.isShowBanner ? (this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        T.SRC_H < 1260 ? this.boss_group.y = T.SRC_H - T.ADS_H - T.yoffset - 250 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.boss_group.y = 760 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.banner_group.visible = !1) : (platform.sendStatistics("特殊事件", "微信banner加载失败"),
                        v.instance.BLACK_4 > 0 && platform.getJumpData("topapp").length > 0 ? (this.banner_group.visible = !0,
                            this.changeBanner(), this.banner_group.y = T.SRC_H - T.yoffset - 2) : this.banner_group.visible = !1,
                        this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - 20, T.SRC_H < 1260 ? this.boss_group.y = T.SRC_H - T.ADS_H - T.yoffset - 250 - 20 : this.boss_group.y = 740),
                    e.startTick(this.run, this), !T.isBannerShow && v.instance.BLACK_2 > 0 && ht.showBanner();
                break;

            default:
                this.end();
        }
        i.type <= 0 ? (e.Tween.removeTweens(this), e.Tween.get(this.all_group).to({
            y: 200
        }, 250).wait(3e3).to({
            y: 0
        }, 250).call(function() {
            t.end(), B.GetInstance().closeEnd(), T.isBannerShow && ht.closeBanner();
        })) : (e.Tween.removeTweens(this), e.Tween.get(this.all_group).to({
            y: 200
        }, 250).call(function() {
            t.bg_rect.alpha = .85;
        }));
    }, i.prototype.bossEnd = function() {
        var t = this;
        this.mylight.stop(), e.stopTick(this.run, this), e.Tween.removeTweens(this), e.Tween.get(this.all_group).to({
            y: 0
        }, 250).call(function() {
            t.bg_rect.alpha = 0, t.end(), B.GetInstance().closeEnd(i.type);
        });
    }, i.prototype.run = function(t) {

        var s = .0167;
        switch (this.mylight.run(0), this._changeTime > 0 && (this._changeTime -= s, this._changeTime <= 0 && (this._changeTime = -1,
                this.changeBanner(!0))), this._endTime > 0 ? (this._endTime -= s, this.gold_num.text = T.doubleToString((3 - this._endTime) / 3 * i.gold),
                this.diamond_num.text = T.doubleToString((3 - this._endTime) / 3 * i.diamond), this._endTime <= 0 && (this._endTime = -1,
                    this.gold_num.text = T.doubleToString(i.gold), this.diamond_num.text = T.doubleToString(i.diamond),
                    this.get_button.visible = !0, this.buy_group.visible = v.instance.BLACK_5 > 0, this.free_label.visible = 0 == v.instance.BLACK_5,
                    platform.isShowADs ? this.get_type.texture = RES.getRes("ui_share_04_png") : this.get_type.texture = RES.getRes("ui_share_02_png"),
                    1 != v.instance.BLACK_9 || T.isDangerousArea ? this.buttonGuide.visible = !1 : (this.buttonGuide.visible = !0,
                        e.Tween.removeTweens(this.buttonGuide), e.Tween.get(this.buttonGuide, {
                            loop: !0
                        }).set({
                            x: 238,
                            alpha: 0
                        }).to({
                            x: 158,
                            alpha: 1
                        }, 200, e.Ease.sineIn).wait(700).to({
                            alpha: 0
                        }, 100)))) : this.showButtonTime >= 0 && (this.showButtonTime -= s, this.showButtonTime < 0 && (this.close_group.visible = !0)),
            this._witchShow) {
            case 1:
                this._witchShow = 0, b.instance.diamond += i.diamond, b.instance.gold = Number(b.instance.gold) + Number(i.gold),
                    B.GetInstance().addReward(70, 375, D.random(12, 15), 1, !0), B.GetInstance().addReward(350, 375, D.random(12, 15), 0, !0),
                    B.GetInstance().showNotice("Successfully received"), this.bossEnd();
                break;

            case 2:
                this._witchShow = 0, B.GetInstance().showNotice("请分享到不同群。");
                break;

            case 3:
                this._witchShow = 0, B.GetInstance().showNotice("请观看完整视频。");
                break;

            case 4:
                this._witchShow = 0, b.instance.diamond += 5 * i.diamond, b.instance.gold = Number(b.instance.gold) + Number(5 * i.gold),
                    B.GetInstance().addReward(70, 375, D.random(12, 15), 1, !0), B.GetInstance().addReward(350, 375, D.random(12, 15), 0, !0),
                    B.GetInstance().showNotice("5 times Successfully received"), this.bossEnd();
        }
        return !0;
    }, i.type = 0, i.gold = 0, i.diamond = 100, i;
}(u);

i(it.prototype, "MyEnd");

var st = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i.skinName = "resource/eui_skins/MySkin/MyGetTowerSkin.exml", i.close_button.addEventListener(e.TouchEvent.TOUCH_END, function() {
            D.playSE("button_mp3"), i.close();
        }, i), i.get_button.addEventListener(e.TouchEvent.TOUCH_END, function() {
            D.playSE("button_mp3"), platform.isShowADs ? ht.lookADs(10, function() {
                B.GetInstance().addFreeTower(), i.close();
            }, function() {
                B.GetInstance().showNotice("请观看完整视频。");
            }) : f.share(10, function() {
                B.GetInstance().addFreeTower(), i.close();
            }, function() {
                B.GetInstance().showNotice("请分享到不同群。");
            });
        }, i), i;
    }
    return s(i, t), i.prototype.reset = function() {
        T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 : this.all_group.y = 960,
            this.mostTowert = b.instance.powerMost - 3 > 1 ? b.instance.powerMost - 3 : 1, platform.isShowBanner ? (this.ADshow = !1,
                v.instance.BLACK_3 > 0 ? (this.close_group.visible = !1, e.Tween.get(this.close_group).wait(1e3 * T.BLACK_TIME).set({
                    visible: !0
                })) : this.close_group.visible = !0, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)) : (platform.sendStatistics("特殊事件", "微信banner加载失败"),
                this.ADshow = !1, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - 20, T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - 20 : this.all_group.y = 940,
                v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "微信banner结束导流",
                    this.addChild(u.getMenu(h.PARTNER_AD)), this.ADshow = !0));
        var t = E.getTowerRecord(this.mostTowert);
        this.tower_base.texture = RES.getRes(t._base), this.tower_cannon.texture = RES.getRes(t._cannon),
            this.tower_level.text = "LV." + this.mostTowert.toString(), this.get_num.text = "GetLV." + this.mostTowert + t._name,
            this.get_time.text = "Remaining today:" + b.instance.getTowerToday.toString(), platform.isShowADs ? this.get_type.texture = RES.getRes("ui_share_04_png") : this.get_type.texture = RES.getRes("ui_share_02_png"),
            v.instance.BLACK_5 > 0 ? this.get_label.text = "Free" : this.get_label.text = "Video Get",
            1 == v.instance.BLACK_9 ? (this.buttonGuide.visible = !0, e.Tween.removeTweens(this.buttonGuide),
                e.Tween.get(this.buttonGuide, {
                    loop: !0
                }).set({
                    x: 460,
                    alpha: 0
                }).to({
                    x: 380,
                    alpha: 1
                }, 200, e.Ease.sineIn).wait(700).to({
                    alpha: 0
                }, 100)) : this.buttonGuide.visible = !1, this.show();
    }, i.prototype.close = function() {
        var t = this;
        this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0, this.ADshow && (this.ADshow = !1),
            e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                B.GetInstance().closeSanji(), t.end();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i;
}(u);

i(st.prototype, "MyGetTower");

var nt = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._gold = 200, i._witchShow = 0, i._blackTime = -1, i.skinName = "resource/eui_skins/MySkin/MyGoldNotEnoughSkin.exml",
            i.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i.close();
            }, i), i.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3");

                platform.isShowADs ? ht.lookADs(3, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 3;
                }) : f.share(3, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 2;
                });
            }, i), i;
    }
    return s(i, t), i.prototype.reset = function() {
        console.log("傻逼啊啊啊啊啊");
        this._witchShow = 0;
        this._gold = 120 * T.goldOfTask;
        this.showFirst = !1;
        this.rushUI();
        this.show();
        if (platform.isShowBanner) {
            this.ADshow = true;
            v.instance.BLACK_3 > 0 ? this._blackTime = T.BLACK_TIME : (this.close_group.visible = !0,
                    this._blackTime = -1), this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)
        } else {
            platform.sendStatistics("特殊事件", "微信banner加载失败"),
                this.ADshow = !1, this._blackTime = -1, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - 20,
                T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - 20 : this.all_group.y = 940,
                v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "微信banner结束导流",
                    this.addChild(u.getMenu(h.PARTNER_AD)), this.ADshow = !0)
        }
        e.startTick(this.run, this);
    }, i.prototype.rushUI = function() {
        //b.instance.getGoldToday = 0;
        this.get_button.enabled = b.instance.getGoldToday > 0, this.get_num.text = T.doubleToString(this._gold),
            this.get_time.text = "Remaining today:" + b.instance.getGoldToday.toString(), this.get_label.strokeColor = b.instance.getGoldToday > 0 ? 10311475 : 4671303,
            this.buy_group.visible = !0, this.free_label.visible = !1, platform.isShowADs ? this.get_type.texture = RES.getRes("ui_share_04_png") : this.get_type.texture = RES.getRes("ui_share_02_png"),
            v.instance.BLACK_5 > 0 ? this.get_label.text = "Free" : this.get_label.text = "金币补给",
            1 == v.instance.BLACK_9 ? (this.buttonGuide.visible = !0, e.Tween.removeTweens(this.buttonGuide),
                e.Tween.get(this.buttonGuide, {
                    loop: !0
                }).set({
                    x: 460,
                    alpha: 0
                }).to({
                    x: 380,
                    alpha: 1
                }, 200, e.Ease.sineIn).wait(700).to({
                    alpha: 0
                }, 100)) : this.buttonGuide.visible = !1;
    }, i.prototype.close = function() {
        var t = this;
        e.stopTick(this.run, this), this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0,
            this.ADshow && (this.ADshow = !1), e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                B.GetInstance().closeSanji(), t.end();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.run = function(t) {


        return this._blackTime > 0 && (this.close_group.visible = !1, this._blackTime -= .0167,
            this._blackTime <= 0 && (this.close_group.visible = !0)), 1 == this._witchShow ? (this._witchShow = 0,
            b.instance.getGoldToday -= 1, b.instance.gold = Number(b.instance.gold) + Number(this._gold),
            B.GetInstance().addReward(320, 600, D.random(12, 15), 0, !0), B.GetInstance().showNotice("Gold success"),
            this.close()) : 2 == this._witchShow ? (this._witchShow = 0, B.GetInstance().showNotice("请分享到不同群。")) : 3 == this._witchShow && (this._witchShow = 0,
            B.GetInstance().showNotice("请观看完整视频。")), !0;
    }, i;
}(u);

i(nt.prototype, "MyGoldNotEnough");

var ot = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._witchShow = 0, i._blackTime = -1, i.skinName = "resource/eui_skins/MySkin/MyHammerNotEnoughSkin.exml",
            i.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i.close();
            }, i), i.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), T.buildMax < 20 && b.instance.getHammerToday >= 8 || b.instance.getHammerToday >= 10 ? i._witchShow = 1 : platform.isShowADs ? ht.lookADs(6, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 3;
                }) : f.share(6, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 2;
                });
            }, i), i;
    }
    return s(i, t), i.prototype.reset = function() {
        this._witchShow = 0, this.rushUI(), this.show(), v.instance.BLACK_3 > 0 ? this._blackTime = T.BLACK_TIME : (this.close_group.visible = !0,
            this._blackTime = -1), e.startTick(this.run, this);
    }, i.prototype.rushUI = function() {
        this.get_button.enabled = b.instance.getHammerToday > 0, this.get_time.text = "Remaining today:" + b.instance.getHammerToday.toString(),
            this.get_label.strokeColor = b.instance.getHammerToday > 0 ? 10311475 : 4671303,
            this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            T.buildMax < 20 && b.instance.getHammerToday >= 8 || b.instance.getHammerToday >= 10 ? (this.buy_group.visible = !1,
                this.free_label.visible = !0) : (this.buy_group.visible = !0, this.free_label.visible = !1,
                this.get_label.text = "Build up", platform.isShowADs ? this.get_type.texture = RES.getRes("ui_share_04_png") : this.get_type.texture = RES.getRes("ui_share_02_png")),
            1 == v.instance.BLACK_9 ? (this.buttonGuide.visible = !0, e.Tween.removeTweens(this.buttonGuide),
                e.Tween.get(this.buttonGuide, {
                    loop: !0
                }).set({
                    x: 460,
                    alpha: 0
                }).to({
                    x: 380,
                    alpha: 1
                }, 200, e.Ease.sineIn).wait(700).to({
                    alpha: 0
                }, 100)) : this.buttonGuide.visible = !1;
    }, i.prototype.close = function() {
        var t = this;
        e.stopTick(this.run, this), this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0,
            e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                B.GetInstance().closeSanji(), t.end();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.run = function(t) {
        return this._blackTime > 0 && (this.close_group.visible = !1, this._blackTime -= .0167,
            this._blackTime <= 0 && (this.close_group.visible = !0)), 1 == this._witchShow ? (this._witchShow = 0,
            b.instance.getHammerToday > 0 && (B.GetInstance().addHammer(), b.instance.getHammerToday -= 1,
                B.GetInstance().addReward(320, 400, D.random(12, 15), 2, !0), B.GetInstance().showNotice("Supply success"),
                this.close())) : 2 == this._witchShow && (this._witchShow = 0, B.GetInstance().showNotice("请分享到不同群。")), !0;
    }, i;
}(u);

i(ot.prototype, "MyHammerNotEnough");

var at = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i.skinName = "resource/eui_skins/MySkin/MyHelpSkin.exml", i.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
            D.playSE("button_mp3"), i.close();
        }, i), i;
    }
    return s(i, t), i.prototype.reset = function() {
        e.startTick(this.run, this), this.rushUI(), platform.isShowBanner ? this.ADshow = !1 : (platform.sendStatistics("特殊事件", "微信banner加载失败"),
            this.ADshow = !1, v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "微信banner结束导流",
                this.addChild(u.getMenu(h.PARTNER_AD)), this.ADshow = !0)), this.show();
    }, i.prototype.rushUI = function() {
        T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 : this.all_group.y = 960;
    }, i.prototype.close = function() {
        var t = this;
        e.stopTick(this.run, this), this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0,
            this.ADshow && (this.ADshow = !1), e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                t.end(), B.GetInstance().closeErji();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.run = function(t) {
        return !0;
    }, i;
}(u);

i(at.prototype, "MyHelp");

var rt = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._diamond = 100, i._witchShow = 0, i._blackTime = -1, i._upTime = -1, i.skinName = "resource/eui_skins/MySkin/MyMainGunLvUpSkin.exml",
            i.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i._witchShow = 1;
            }, i), i.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i._upTime > 0 || (v.instance.BLACK_5 <= 0 ? i._witchShow = 1 : platform.isShowADs ? ht.lookADs(4, function() {
                    i._witchShow = 4;
                }, function() {
                    i._witchShow = 3;
                }) : f.share(4, function() {
                    i._witchShow = 4;
                }, function() {
                    i._witchShow = 2;
                }));
            }, i), i;
    }
    return s(i, t), i.prototype.reset = function() {
        console.log("解锁新炮塔！");

        this._witchShow = 0;
        var t = E.getTowerRecord(b.instance.powerMost);
        this.tower_img.texture = RES.getRes(t._cannon), this.tower_level.text = "Lv." + b.instance.powerMost,
            this.baseImg.texture = RES.getRes(t._base), this.tower_name.size = 25, this.tower_name.text = t._name, this.tower_atk.text = T.doubleToString(t._atk),
            this.tower_range.text = t._range.toString(), T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            platform.isShowBanner ? (this.ADshow = !1, v.instance.BLACK_6 > 0 ? T.upNum >= v.instance.BLACK_6 ? (this._upTime = T.UP_TIME,
                    T.upNum = 1) : (this._upTime = -1, T.upNum += 1, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                    T.SRC_H < 1260 ? (this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)) : (this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)), T.isBannerShow || ht.showBanner()) : (this._upTime = -1,
                    this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                    T.SRC_H < 1260 ? (this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)) : (this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)), T.isBannerShow || ht.showBanner()),
                v.instance.BLACK_3 > 0 ? this._blackTime = T.BLACK_TIME : (this.close_group.visible = !0,
                    this._blackTime = -1)) : (platform.sendStatistics("特殊事件", "微信banner加载失败"), this.ADshow = !1,
                this._blackTime = -1, this._upTime = -1, this.close_group.visible = !0, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - 20,
                T.SRC_H < 1260 ? (this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - 20, this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - 20) : (this.all_group.y = 940,
                    this.up_group.y = 940), v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "微信banner结束导流",
                    this.addChild(u.getMenu(h.PARTNER_AD)), this.ADshow = !0)), v.instance.BLACK_5 > 0 ? (this.buy_group.visible = !0,
                this.free_label.visible = !1, platform.isShowADs ? this.get_type.texture = RES.getRes("ui_share_04_png") : this.get_type.texture = RES.getRes("ui_share_02_png"),
                1 != v.instance.BLACK_9 || T.isDangerousArea ? this.buttonGuide.visible = !1 : (this.buttonGuide.visible = !0,
                    e.Tween.removeTweens(this.buttonGuide), e.Tween.get(this.buttonGuide, {
                        loop: !0
                    }).set({
                        x: 296,
                        alpha: 0
                    }).to({
                        x: 216,
                        alpha: 1
                    }, 200, e.Ease.sineIn).wait(700).to({
                        alpha: 0
                    }, 100))) : (this.buy_group.visible = !1, this.free_label.visible = !0), this.show(),
            e.startTick(this.run, this);
    }, i.prototype.close = function() {
        var t = this;
        e.stopTick(this.run, this), this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0,
            this.ADshow && (this.ADshow = !1), e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                t.end(), B.GetInstance().closeErji();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.run = function(t) {
        switch (this._blackTime > 0 && (this.close_group.visible = !1, this._blackTime -= .0167,
            this._blackTime <= 0 && (this.close_group.visible = !0)), this._upTime > 0 && (this.up_group.y = T.SRC_H - T.yoffset - 90,
            this.close_group.y = T.SRC_H - T.yoffset - 40, this._upTime -= .0167, this._upTime <= 0 && (this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                T.SRC_H < 1260 ? this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.up_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                T.isBannerShow || ht.showBanner())), this._witchShow) {
            case 1:
                this._witchShow = 0, b.instance.diamond += this._diamond, B.GetInstance().addHammer(),
                    B.GetInstance().addReward(320, 600, D.random(12, 15), 1, !0), B.GetInstance().addReward(320, 400, D.random(12, 15), 2, !0),
                    B.GetInstance().showNotice("Successfully received"), this.close();
                break;

            case 2:
                this._witchShow = 0, B.GetInstance().showNotice("请分享到不同群。");
                break;

            case 3:
                this._witchShow = 0, B.GetInstance().showNotice("请观看完整视频。");
                break;

            case 4:
                this._witchShow = 0, b.instance.diamond += 5 * this._diamond, B.GetInstance().addHammer(),
                    B.GetInstance().addReward(320, 600, D.random(12, 15), 1, !0), B.GetInstance().addReward(320, 400, D.random(12, 15), 2, !0),
                    B.GetInstance().showNotice("5 times Successfully received"), this.close();
        }
        return !0;
    }, i;
}(u);

i(rt.prototype, "MyMainGunLvUp");

var ht = function(failed,callback) {
    function t() {}
    return t.lookADs = function(t, e, i) {
        D.playBGM(null);
        console.log("开始播放视频！");
                callback && callback()
        console.log("视频播放完毕！");
        //正常播放完毕
        //激励视频
        uptap.ShowExcitationVideoAdv(function(n1) {
            // 
            D.playBGM("bgm_mp3");
            switch (n1.type) {
                case "1":
                    //暂时没有广告
                    console.log("暂时没有广告");
                    break;
                case "2":
                    //想要奖励，必须看完广告（用户点击跳过按钮）
                    console.log("必须看完整视频才能获得奖励哦！");
                    break;
                case "3":

                    //广告正常播放完毕
                    b.instance.taskNeedNum_05 += 1;
                    b.instance.achNeedNum_09 += 1;
                    e && e()
                    break;
            }
        })




        //没有播放完毕
        //D.playBGM("bgm_mp3");
        //i && i()

        return;
        return void 0 === t && (t = 0), void 0 === e && (e = null), void 0 === i && (i = null),
            n(this, void 0, void 0, function() {
                var s;
                return o(this, function(n) {
                    switch (n.label) {
                        case 0:
                            switch (t) {
                                case 0:
                                    this.shareType = "离线奖励";
                                    break;

                                case 1:
                                    this.shareType = "任务界面二次领取";
                                    break;

                                case 2:
                                    this.shareType = "Diamond Supply";
                                    break;

                                case 3:
                                    this.shareType = "金币补给";
                                    break;

                                case 4:
                                    this.shareType = "炮台解锁二次领取";
                                    break;

                                case 5:
                                    this.shareType = "BOSS挑战成功二次领取";
                                    break;

                                case 6:
                                    this.shareType = "炮台补给";
                                    break;

                                case 7:
                                    this.shareType = "商店获得炮台";
                                    break;

                                case 8:
                                    this.shareType = "空投二次领取";
                                    break;

                                case 9:
                                    this.shareType = "掉落宝箱二次领取";
                                    break;

                                case 10:
                                    this.shareType = "获取免费炮台";
                                    break;

                                case 11:
                                    this.shareType = "自动合成补给";
                                    break;

                                case 12:
                                    this.shareType = "每日登录";
                            }
                            return D.playBGM(null), [4, platform.lookADs(t, this.shareType)];

                        case 1:
                            return (s = n.sent()).success ? (D.playBGM("bgm_mp3"), b.instance.taskNeedNum_05 += 1,
                                b.instance.achNeedNum_09 += 1, e && e(), [2]) : (D.playBGM("bgm_mp3"), i && i(), [2]);
                    }
                });
            });
    }, t.closeBanner = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return o(this, function(e) {
                switch (e.label) {
                    case 0:
                        return T.isBannerShow = !1, [4, platform.closeBanner()];

                    case 1:
                        return t = e.sent(), [2];
                }
            });
        });
    }, t.showBanner = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return o(this, function(e) {
                switch (e.label) {
                    case 0:
                        return T.isBannerShow = !0, [4, platform.showBanner()];

                    case 1:
                        return t = e.sent(), [2];
                }
            });
        });
    }, t.closeAuthor = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return o(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, platform.closeAuthor()];

                    case 1:
                        return t = e.sent(), [2];
                }
            });
        });
    }, t.showAuthor = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return o(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, platform.showAuthor()];

                    case 1:
                        return t = e.sent(), [2];
                }
            });
        });
    }, t.closeQuan = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return o(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, platform.closeQuan()];

                    case 1:
                        return t = e.sent(), [2];
                }
            });
        });
    }, t.showQuan = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return o(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, platform.showQuan()];

                    case 1:
                        return t = e.sent(), [2];
                }
            });
        });
    }, t.jumpApp = function(t, e) {
        return n(this, void 0, void 0, function() {
            var i;
            return o(this, function(s) {
                switch (s.label) {
                    case 0:
                        return [4, platform.jumpApp(t, e)];

                    case 1:
                        return i = s.sent(), [2];
                }
            });
        });
    }, t.showInterstitialAd = function(t) {
        platform.showInterstitialAd(t);
    }, t;
}();

i(ht.prototype, "MyADs");

var ut = function(t) {
    function i() {
        var e = t.call(this) || this;
        return e.skinName = "resource/eui_skins/MySkin/MyNoticeSkin.exml", e;
    }
    return s(i, t), i.setType = function(t) {
        i.str = t;
    }, i.prototype.reset = function() {
        var t = this;
        this.str_label.text = i.str, this.y = 50, this.alpha = 1, e.Tween.removeTweens(this),
            e.Tween.get(this).to({
                y: 120
            }, 250, e.Ease.sineInOut).wait(1e3).to({
                alpha: .6,
                y: 50
            }, 500, e.Ease.sineInOut).call(function() {
                t.end();
            });
    }, i.str = "No place", i;
}(u);

i(ut.prototype, "MyNotice");

var _t = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._gold = 200, i._witchShow = 0, i._blackTime = -1, i._upTime = -1, i.skinName = "resource/eui_skins/MySkin/MyOfflineRewardSkin.exml",
            i.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i._upTime > 0 || (i._witchShow = 4);
            }, i), i.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i._upTime > 0 || (platform.isShowADs ? ht.lookADs(0, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 3;
                }) : f.share(0, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 2;
                }));
            }, i), i;
    }
    return s(i, t), i.prototype.reset = function() {
        this._witchShow = 0, this._gold = D.roundDown(T.offLineTime / 3e5) * T.goldOfTask,
            b.instance.offLineTime = D.getSystemTime(), this.rushUI(), this.show(), T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            platform.isShowBanner ? (this.ADshow = !1, v.instance.BLACK_6 > 0 ? T.upNum >= v.instance.BLACK_6 ? (this._upTime = T.UP_TIME,
                    T.upNum = 1) : (this._upTime = -1, T.upNum += 1, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                    T.SRC_H < 1260 ? (this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)) : (this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)), T.isBannerShow || ht.showBanner()) : (this._upTime = -1,
                    this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                    T.SRC_H < 1260 ? (this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)) : (this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)), T.isBannerShow || ht.showBanner()),
                v.instance.BLACK_3 > 0 ? this._blackTime = T.BLACK_TIME : (this.close_group.visible = !0,
                    this._blackTime = -1)) : (this.ADshow = !1, platform.sendStatistics("特殊事件", "微信banner加载失败"),
                this._blackTime = -1, this._upTime = -1, this.close_group.visible = !0, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - 20,
                T.SRC_H < 1260 ? (this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - 20, this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - 20) : (this.all_group.y = 940,
                    this.up_group.y = 940), v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "微信banner结束导流",
                    this.addChild(u.getMenu(h.PARTNER_AD)), this.ADshow = !0)), e.startTick(this.run, this);
    }, i.prototype.rushUI = function() {
        this.get_num.text = T.doubleToString(this._gold), this.getTen_num.text = T.doubleToString(10 * this._gold),
            v.instance.BLACK_5 > 0 ? (this.get_type.visible = !0, this.getTen_group.visible = !0,
                this.buy_group.visible = !0, this.free_label.visible = !1, this.free_label.text = "10 times reward",
                platform.sendStatistics("展示离线奖励页面", "页面2")) : (this.get_type.visible = !0, this.getTen_group.visible = !0,
                this.buy_group.visible = !0, this.free_label.visible = !1, platform.isShowADs ? this.get_type.texture = RES.getRes("ui_share_04_png") : this.get_type.texture = RES.getRes("ui_share_02_png"),
                platform.sendStatistics("展示离线奖励页面", "页面1")), 1 == v.instance.BLACK_9 ? (this.buttonGuide.visible = !0,
                e.Tween.removeTweens(this.buttonGuide), e.Tween.get(this.buttonGuide, {
                    loop: !0
                }).set({
                    x: 249,
                    alpha: 0
                }).to({
                    x: 169,
                    alpha: 1
                }, 200, e.Ease.sineIn).wait(700).to({
                    alpha: 0
                }, 100)) : this.buttonGuide.visible = !1;
    }, i.prototype.close = function() {
        var t = this;
        e.stopTick(this.run, this), this.ADshow && (this.ADshow = !1), this.scaleX = 1,
            this.scaleY = 1, this.bg_rect.alpha = 0, e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                B.GetInstance().closeErji(), t.end();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.run = function(t) {
        return this._blackTime > 0 && (this.close_group.visible = !1, this._blackTime -= .0167,
            this._blackTime <= 0 && (this.close_group.visible = !0)), this._upTime > 0 && (this.up_group.y = T.SRC_H - T.yoffset - 90,
            this.close_group.y = T.SRC_H - T.yoffset - 40, this._upTime -= .0167, this._upTime <= 0 && (this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                T.SRC_H < 1260 ? this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.up_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                T.isBannerShow || ht.showBanner())), 1 == this._witchShow ? (this._witchShow = 0,
            b.instance.gold = Number(b.instance.gold) + Number(10 * this._gold), B.GetInstance().addReward(320, 600, D.random(12, 15), 0, !0),
            B.GetInstance().showNotice("10 times Successfully received"), this.close()) : 2 == this._witchShow ? (this._witchShow = 0,
            B.GetInstance().showNotice("请分享到不同群。")) : 3 == this._witchShow ? (this._witchShow = 0,
            B.GetInstance().showNotice("请观看完整视频。")) : 4 == this._witchShow && (this._witchShow = 0,
            b.instance.gold = Number(b.instance.gold) + Number(this._gold), B.GetInstance().addReward(320, 600, D.random(12, 15), 0, !0),
            B.GetInstance().showNotice("Successfully received"), this.close()), !0;
    }, i;
}(u);

i(_t.prototype, "MyOfflineReward");

var lt = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i.skinName = "resource/eui_skins/MySkin/MyOptionSkin.exml", i.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
            D.playSE("button_mp3"), B.GetInstance().closeErji(), i.close();
        }, i), i.music_check.addEventListener(eui.UIEvent.CHANGE, function(t) {
            D.playSE("button_mp3"), b.instance.isBGM = !t.target.selected, e.log(t.target.selected),
                D.playBGM("bgm_mp3");
        }, i), i.sound_check.addEventListener(eui.UIEvent.CHANGE, function(t) {
            D.playSE("button_mp3"), b.instance.isSE = !t.target.selected, e.log(t.target.selected);
        }, i), i;
    }
    return s(i, t), i.prototype.reset = function() {
        var t = this;
        this.sound_check.selected = !b.instance.isSE, this.music_check.selected = !b.instance.isBGM;
        var e = E.getTowerRecord(b.instance.powerMost);
        if (this.maxTower_name.text = "Name: " + e._name, this.maxTower_level.text = "Lv." + e._level.toString(),
            platform.isLogin && T.wxLoginInfo) try {
            RES.getResByUrl(T.wxLoginInfo.avatarUrl, function(e, i) {
                t.head_img.texture = e;
            }, this, RES.ResourceItem.TYPE_IMAGE);
        } catch (t) {
            this.head_img.texture = RES.getRes("ui_top_02_png");
        }
        this.show(), T.isBannerShow || ht.showBanner(), ht.showInterstitialAd();
    }, i.prototype.show = function() {
        this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100);
    }, i;
}(u);

i(lt.prototype, "MyOption");

var ct = function(t) {
    function i() {
        var s = t.call(this) || this;
        return s._witchShow = 0, s._blackTime = -1, s._upTime = -1, s.skinName = "resource/eui_skins/MySkin/MyOtherRewardSkin.exml",
            s.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), s._upTime > 0 || s.close();
            }, s), s.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                if (D.playSE("button_mp3"), !(s._upTime > 0)) switch (i.showType) {
                    case 0:
                        s.showFirst ? f.share(0 == i.type ? 8 : 9, function() {
                            s._witchShow = 1;
                        }, function() {
                            s._witchShow = 3;
                        }) : (0 == i.type && (B.GetInstance()._isCleanKongtou = !0), v.instance.BLACK_5 > 0 ? (s.showFirst = !0,
                            b.instance.diamond += i.diamond, B.GetInstance().addReward(320, 600, D.random(12, 15), 1, !0),
                            s.rushUI()) : s._witchShow = 1);
                        break;

                    case 1:
                        s.showFirst ? f.share(0 == i.type ? 8 : 9, function() {
                            s._witchShow = 2;
                        }, function() {
                            s._witchShow = 3;
                        }) : v.instance.BLACK_5 > 0 ? (s.showFirst = !0, 0 == i.type && (B.GetInstance()._isCleanKongtou = !0),
                            b.instance.gold = Number(b.instance.gold) + Number(i.gold), B.GetInstance().addReward(320, 600, D.random(12, 15), 0, !0),
                            s.rushUI()) : s._witchShow = 2;
                }
            }, s), s;
    }
    return s(i, t), i.setType = function(t, e, s) {
        switch (void 0 === s && (s = 0), i.type = t, i.showType = e, i.showType) {
            case 0:
                i.diamond = s;
                break;

            case 1:
                i.gold = s;
        }
    }, i.prototype.reset = function() {
        this._witchShow = 0, this.showFirst = !1, T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            platform.isShowBanner ? (this.ADshow = !1, v.instance.BLACK_6 > 0 ? T.upNum >= v.instance.BLACK_6 ? (this._upTime = T.UP_TIME,
                    T.upNum = 1) : (this._upTime = -1, T.upNum += 1, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                    T.SRC_H < 1260 ? (this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)) : (this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)), T.isBannerShow || ht.showBanner()) : (this._upTime = -1,
                    this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                    T.SRC_H < 1260 ? (this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)) : (this.all_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                        this.up_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP)), T.isBannerShow || ht.showBanner()),
                v.instance.BLACK_3 > 0 ? this._blackTime = T.BLACK_TIME : (this.close_group.visible = !0,
                    this._blackTime = -1)) : (this.ADshow = !1, platform.sendStatistics("特殊事件", "微信banner加载失败"),
                this._blackTime = -1, this._upTime = -1, this.close_group.visible = !0, this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - 20,
                T.SRC_H < 1260 ? (this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - 20, this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - 20) : (this.all_group.y = 940,
                    this.up_group.y = 940), v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "微信banner结束导流",
                    this.addChild(u.getMenu(h.PARTNER_AD)), this.ADshow = !0)), this.rushUI(), this.show(),
            e.startTick(this.run, this);
    }, i.prototype.rushUI = function() {
        switch (i.type) {
            case 0:
                this.name_label.text = "Supplies to";
                break;

            case 1:
                this.name_label.text = "Big treasure chest";
        }
        switch (i.showType) {
            case 0:
                this.diamond_img.visible = !0, this.gold_img.visible = !1, this.get_type.texture = RES.getRes("ui_money_02_png"),
                    this.get_num.text = "+" + T.doubleToString(i.diamond);
                break;

            case 1:
                this.diamond_img.visible = !1, this.gold_img.visible = !0, this.get_type.texture = RES.getRes("ui_money_01_png"),
                    this.get_num.text = "+" + T.doubleToString(i.gold);
        }
        this.showFirst ? v.instance.BLACK_5 > 0 ? (this.buy_group.visible = !1, this.free_label.visible = !0,
            this.free_label.text = "Get it again") : (this.buy_group.visible = !0, this.free_label.visible = !1) : (this.buy_group.visible = !1,
            this.free_label.text = "Free", this.free_label.visible = !0);
    }, i.prototype.close = function() {
        var t = this;
        e.stopTick(this.run, this), this.ADshow && (this.ADshow = !1), this.scaleX = 1,
            this.scaleY = 1, this.bg_rect.alpha = 0, e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                B.GetInstance().closeErji(), t.end();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.run = function(t) {
        console.log("傻逼啊啊啊啊啊")
        return this._blackTime > 0 && (this.close_group.visible = !1, this._blackTime -= .0167,
            this._blackTime <= 0 && (this.close_group.visible = !0)), this._upTime > 0 && (this.up_group.y = T.SRC_H - T.yoffset - 90,
            this.close_group.y = T.SRC_H - T.yoffset - 40, this._upTime -= .0167, this._upTime <= 0 && (this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                T.SRC_H < 1260 ? this.up_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.up_group.y = 960 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
                T.isBannerShow || ht.showBanner())), 1 == this._witchShow ? (this._witchShow = 0,
            b.instance.diamond += i.diamond, B.GetInstance().addReward(320, 600, D.random(12, 15), 1, !0),
            B.GetInstance().showNotice("Diamond success"), this.close()) : 2 == this._witchShow ? (this._witchShow = 0,
            b.instance.gold = Number(b.instance.gold) + Number(i.gold), B.GetInstance().addReward(320, 600, D.random(12, 15), 0, !0),
            B.GetInstance().showNotice("Gold success"), this.close()) : 3 == this._witchShow && (this._witchShow = 0,
            B.GetInstance().showNotice("请分享到不同群。")), !0;
    }, i.diamond = 200, i.gold = 200, i.showType = 0, i.type = 0, i;
}(u);

i(ct.prototype, "MyOtherReward");

var mt = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i.timeOffset = 0, i.AD_DISTANCE = 138, i.MOVE_TIME = 5e3, i.skinName = "resource/eui_skins/MySkin/MyPartnerAdSkin.exml",
            i.ad0.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(0);
            }, i), i.ad1.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(1);
            }, i), i.ad2.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(2);
            }, i), i.ad3.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(3);
            }, i), i.ad4.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(4);
            }, i), i.ad5.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(5);
            }, i), i.ad6.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(6);
            }, i), i.ad7.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(7);
            }, i), i.ad8.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(8);
            }, i), i.ad9.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(9);
            }, i), i.bannerAd.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.doJump(-1);
            }, i), i.mylight = new vt(), i.addChild(i.mylight), e.startTick(i.run, i), i;
    }
    return s(i, t), i.setType = function(t, e) {
            i.type = t, i.jumpStr = e;
        }, i.prototype.reset = function() {
            var t = this;
            switch (i.recommenderData && i.recommenderData.length <= 0 && (i.recommenderData = platform.getJumpData("recommender")),
                i.bannerData && i.bannerData.length <= 0 && (i.bannerData = platform.getJumpData("recommender")),
                i.type) {
                case 0:
                    this.bgImg.visible = !0, this.adGroup.visible = !0, this.bannerAd.visible = !1,
                        this.showAd(i.recommenderData[0], this.ad0, this.icon0, this.text0), this.showAd(i.recommenderData[1], this.ad1, this.icon1, this.text1),
                        this.showAd(i.recommenderData[2], this.ad2, this.icon2, this.text2), this.showAd(i.recommenderData[3], this.ad3, this.icon3, this.text3),
                        this.showAd(i.recommenderData[4], this.ad4, this.icon4, this.text4), this.showAd(i.recommenderData[5], this.ad5, this.icon5, this.text5),
                        this.showAd(i.recommenderData[6], this.ad6, this.icon6, this.text6), this.showAd(i.recommenderData[7], this.ad7, this.icon7, this.text7),
                        this.showAd(i.recommenderData[8], this.ad8, this.icon8, this.text8), this.showAd(i.recommenderData[9], this.ad9, this.icon9, this.text9),
                        this.allgroup.y = 954 + T.yoffset / 2, this.mylight.start(this.allgroup.x, this.allgroup.y, 640, 183),
                        this.timeOffset = D.random(999999);
                    break;

                case 1:
                    if (this.bgImg.visible = !1, this.adGroup.visible = !1, this.bannerAd.visible = !0,
                        platform.getJumpData("banner")[T.bannerNum]) {
                        this.bannerAd.visible = !0;
                        try {
                            RES.getResByUrl(platform.getJumpData("banner")[T.bannerNum].icon, function(e, i) {
                                t.bannerAd.texture = e;
                            }, this, RES.ResourceItem.TYPE_IMAGE);
                        } catch (t) {
                            this.bannerAd.texture = RES.getRes("icon-144_png");
                        }
                    } else this.bannerAd.visible = !1;
            }
        }, i.prototype.run = function(t) {
            if (0 != i.type) return !0;
            this.mylight.run(0);
            var e = i.recommenderData.length,
                s = this.AD_DISTANCE * e,
                n = (t + this.timeOffset) * this.AD_DISTANCE / this.MOVE_TIME % s,
                o = 0 * this.AD_DISTANCE - n;
            return o < -this.AD_DISTANCE && (o += s), this.ad0.x = o, (o = 1 * this.AD_DISTANCE - n) < -this.AD_DISTANCE && (o += s),
                this.ad1.x = o, (o = 2 * this.AD_DISTANCE - n) < -this.AD_DISTANCE && (o += s),
                this.ad2.x = o, (o = 3 * this.AD_DISTANCE - n) < -this.AD_DISTANCE && (o += s),
                this.ad3.x = o, (o = 4 * this.AD_DISTANCE - n) < -this.AD_DISTANCE && (o += s),
                this.ad4.x = o, (o = 5 * this.AD_DISTANCE - n) < -this.AD_DISTANCE && (o += s),
                this.ad5.x = o, (o = 6 * this.AD_DISTANCE - n) < -this.AD_DISTANCE && (o += s),
                this.ad6.x = o, (o = 7 * this.AD_DISTANCE - n) < -this.AD_DISTANCE && (o += s),
                this.ad7.x = o, (o = 8 * this.AD_DISTANCE - n) < -this.AD_DISTANCE && (o += s),
                this.ad8.x = o, (o = 9 * this.AD_DISTANCE - n) < -this.AD_DISTANCE && (o += s),
                this.ad9.x = o, !0;
        }, i.prototype.showAd = function(t, e, i, s) {
            if (T.ISONLINE)
                if (t) {
                    e.visible = !0;
                    try {
                        T.ISONLINE && RES.getResByUrl(t.icon[0], function(t, e) {
                            i.texture = t;
                        }, this, RES.ResourceItem.TYPE_IMAGE);
                    } catch (t) {
                        i.texture = RES.getRes("icon-144_png");
                    }
                    s.text = t.name;
                } else e.visible = !1;
        }, i.prototype.doJump = function(t) {
            switch (i.type) {
                case 0:
                    i.recommenderData[t] && ht.jumpApp(i.recommenderData[t], i.jumpStr);
            }
        }, i.type = 0, i.jumpStr = "微信banner结束导流", i.recommenderData = [], i.bannerData = [],
        i;
}(u);

i(mt.prototype, "MyPartnerAd");

var pt = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i.dt = .015, i._changeTime = -1, i._moregameNum = [0, 1, 2, 3, 4, 5, 6, 7, 8],
            i.jumpCount = 0, i.adIndex = 0, i.skinName = "resource/eui_skins/MySkin/MyDLMenu.exml",
            i.mylight = new vt(), i.moregame_group.addChild(i.mylight), i.close_button.addEventListener(e.TouchEvent.TOUCH_END, function() {
                D.playSE("button_mp3"), T.resumeGame(), i.mylight.stop(), i.end(), T.isBannerShow && ht.closeBanner(),
                    e.stopTick(i.run, i);
            }, i), i.banner_button_0.addEventListener(e.TouchEvent.TOUCH_END, function() {
                console.log("11aaa"), platform.getJumpData("banner")[T.bannerNum] && ht.jumpApp(platform.getJumpData("banner")[T.bannerNum], "抽屉界面banner"),
                    i._changeTime = 2;
            }, i), i.moregame_button_0.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jump(0);
            }, i), i.moregame_button_1.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jump(1);
            }, i), i.moregame_button_2.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jump(2);
            }, i), i.moregame_button_3.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jump(3);
            }, i), i.moregame_button_4.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jump(4);
            }, i), i.moregame_button_5.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jump(5);
            }, i), i.moregame_button_6.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jump(6);
            }, i), i.moregame_button_7.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jump(7);
            }, i), i.moregame_button_8.addEventListener(e.TouchEvent.TOUCH_END, function() {
                i.jump(8);
            }, i), i;
    }
    return s(i, t), i.prototype.jump = function(t) {
        var e = this,
            s = platform.getJumpData("topapp")[this._moregameNum[t]];
        s && (s.success = function() {
            e.reloadIndex(t);
        }, s.fail = function() {
            e.reloadIndex(t);
        }, ht.jumpApp(s, i.jumpStr));
    }, i.prototype.reloadIndex = function(t) {
        var e = platform.getJumpData("topapp").length;
        if (!(9 >= e)) {
            this.jumpCount++, this.jumpCount %= e - 9;
            var i = this._moregameNum[t];
            this._moregameNum[t] = this._moregameNum[this.jumpCount + 9], this._moregameNum[this.jumpCount + 9] = i,
                this.drawAd(t);
        }
    }, i.prototype.drawAd = function(t) {
        var e, i, s;
        switch (t) {
            case 0:
                e = this.moregame_0, i = this.moregame_icon_0, s = this.moregame_name_0;
                break;

            case 1:
                e = this.moregame_1, i = this.moregame_icon_1, s = this.moregame_name_1;
                break;

            case 2:
                e = this.moregame_2, i = this.moregame_icon_2, s = this.moregame_name_2;
                break;

            case 3:
                e = this.moregame_3, i = this.moregame_icon_3, s = this.moregame_name_3;
                break;

            case 4:
                e = this.moregame_4, i = this.moregame_icon_4, s = this.moregame_name_4;
                break;

            case 5:
                e = this.moregame_5, i = this.moregame_icon_5, s = this.moregame_name_5;
                break;

            case 6:
                e = this.moregame_6, i = this.moregame_icon_6, s = this.moregame_name_6;
                break;

            case 7:
                e = this.moregame_7, i = this.moregame_icon_7, s = this.moregame_name_7;
                break;

            case 8:
                e = this.moregame_8, i = this.moregame_icon_8, s = this.moregame_name_8;
        }
        var n = platform.getJumpData("topapp")[this._moregameNum[t]];
        if (n) {
            e.visible = !0;
            try {
                RES.getResByUrl(n.icon, function(t, e) {
                    i.texture = t;
                }, this, RES.ResourceItem.TYPE_IMAGE);
            } catch (t) {
                i.texture = RES.getRes("icon-144_png");
            }
            s.text = n.name;
        } else e.visible = !1;
    }, i.prototype.rushMoregame = function() {
        if (T.ISONLINE) {
            var t = platform.getJumpData("topapp").length;
            if (t > 0)
                for (e = 0; 9 > e || t > e; e++) this._moregameNum[e] = this.adIndex,
                    this.adIndex++, this.adIndex %= t;
            this.jumpCount = 0;
            for (var e = 0; 9 > e; e++) this.drawAd(e);
        }
    }, i.prototype.rushBanner = function() {
        var t = this;
        if (v.instance.BLACK_4 <= 0 && platform.getJumpData("topapp").length > 0) this.banner_group.visible = !1;
        else if (this.banner_group.visible = !0,
            T.ISONLINE)
            if (T.bannerNum < 0 && (T.bannerNum = D.random(platform.getJumpData("banner").length - 1)),
                platform.getJumpData("banner")[T.bannerNum]) {
                this.banner_group.visible = !0;
                try {
                    RES.getResByUrl(platform.getJumpData("banner")[T.bannerNum].icon, function(e, i) {
                        t.banner_icon_0.texture = e;
                    }, this, RES.ResourceItem.TYPE_IMAGE);
                } catch (t) {
                    this.banner_icon_0.texture = RES.getRes("icon-144_png");
                }
            } else this.banner_group.visible = !1;
    }, i.prototype.changeBanner = function(t) {
        void 0 === t && (t = !1), t ? (T.bannerChange = !1, T.bannerNum += 1, T.bannerNum >= platform.getJumpData("banner").length && (T.bannerNum = 0)) : T.bannerChange ? (T.bannerChange = !1,
                T.bannerNum += 1, T.bannerNum >= platform.getJumpData("banner").length && (T.bannerNum = 0)) : T.bannerChange = !0,
            this.rushBanner();
    }, i.prototype.reset = function() {
        this.rushMoregame(), this.mylight.start(-10, 70, 578, 700), this.moregame_group.y = T.SRC_H - T.ADS_H - T.yoffset - 20,
            e.startTick(this.run, this), T.isBannerShow || ht.showBanner(), platform.isShowBanner ? this.banner_group.visible = !1 : (platform.sendStatistics("特殊事件", "微信banner加载失败"),
                v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 ? (this.banner_group.visible = !0,
                    this.changeBanner(), this.banner_group.y = T.SRC_H - T.yoffset - 2) : this.banner_group.visible = !1);
    }, i.prototype.run = function() {
        return this._changeTime > 0 && (this._changeTime -= .0167, this._changeTime <= 0 && (this._changeTime = -1,
            this.changeBanner(!0))), this.mylight.run(0), !1;
    }, i.jumpStr = "", i;
}(u);

i(pt.prototype, "MyPush");

var dt = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i.worlds = [], i.friends = [], i.skinName = "resource/eui_skins/MySkin/MyRankingSkin.exml",
            i.close_button.addEventListener(e.TouchEvent.TOUCH_END, function() {
                D.playSE("button_mp3"), platform.closeRank(), i.rankImg.visible = !1, i.close();
            }, i), i.rankImg = new e.Bitmap(), i.rankImg.width = 640, i.rankImg.height = 1136,
            i.addChild(i.rankImg), i;
    }
    return s(i, t), i.prototype.reset = function() {
        this.rankImg.y = T.yoffset / 2, this.all_group.y = T.yoffset / 2, platform.showRank(this.rankImg),
            this.rankImg.visible = !0, this.show(), T.isBannerShow || ht.showBanner(), ht.showInterstitialAd();
    }, i.prototype.close = function() {
        var t = this;
        this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0, e.Tween.get(this).to({
            scaleX: .7,
            scaleY: .7
        }, 100).call(function() {
            B.GetInstance().closeErji(), t.end();
        }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i;
}(u);

i(dt.prototype, "MyRank");

var gt = function(t) {
    function i() {
        var i = t.call(this) || this;
        i.shops = [], i._witchShow = 0, i.skinName = "resource/eui_skins/MySkin/MyShopSkin.exml",
            i.mostTowert = b.instance.powerMost, i.close_button.addEventListener(e.TouchEvent.TOUCH_END, function() {
                D.playSE("button_mp3"), e.stopTick(i.run, i), i.close();
            }, i), i.tower_button.addEventListener(e.TouchEvent.TOUCH_END, function() {
                D.playSE("button_mp3"), b.instance.getTowerToday > 0 && (B.GetInstance().getCanBuild() ? platform.isShowADs ? ht.lookADs(7, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 3;
                }) : f.share(7, function() {
                    i._witchShow = 1;
                }, function() {
                    i._witchShow = 2;
                }) : B.GetInstance().showNotice("No place"));
            }, i), i.help7_button.addEventListener(e.TouchEvent.TOUCH_END, i.stopHelp7, i);
        for (var s = 0; s < b.instance.powerMost; s++) i.shops[s] = new Et(s + 1), i.shop_group.addChild(i.shops[s]),
            i.shops[s].y = 150 * s;
        return i;
    }
    return s(i, t), i.prototype.reset = function() {
        if (this._witchShow = 0, T.SRC_H < 1260 ? this.all_group.y = T.SRC_H - T.ADS_H - T.yoffset - 50 : this.all_group.y = 960,
            this.mostTowert = b.instance.powerMost - 3 > 1 ? b.instance.powerMost - 3 : 1, b.instance.powerMost > this.shops.length)
            for (var t = this.shops.length, i = 0; i < b.instance.powerMost; i++) i >= t ? (this.shops[i] = new Et(i + 1),
                this.shop_group.addChild(this.shops[i]), this.shops[i].y = 150 * i) : this.shops[i].rushUI();
        b.instance.helpInGame_07 ? (this.help7_group.visible = !1, ht.showInterstitialAd()) : this.setHelp7(),
            platform.isShowBanner ? this.ADshow = !1 : (platform.sendStatistics("特殊事件", "微信banner加载失败"),
                this.ADshow = !1, v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "微信banner结束导流",
                    this.addChild(u.getMenu(h.PARTNER_AD)), this.ADshow = !0)), this.rushUI(), this.show(),
            e.startTick(this.run, this);
    }, i.prototype.rushUI = function() {
        var t = E.getTowerRecord(this.mostTowert);
        this.tower_base.texture = RES.getRes(t._base), this.tower_cannon.texture = RES.getRes(t._cannon),
            this.tower_level.text = "LV." + this.mostTowert.toString(), this.tower_name.text = "-1-" + t._name.toString(),
            this.tower_atk.text = "Hurt:" + T.doubleToString(t._atk) + "/S", this.tower_range.text = "attack range:" + t._range.toString(),
            this.tower_time.text = "Remaining today:" + b.instance.getTowerToday.toString(), this.get_type.visible = !0,
            this.tower_gold.visible = !0, this.free_label.visible = !1, platform.isShowADs ? (this.get_type.texture = RES.getRes("ui_share_03_png"),
                this.tower_gold.text = "Video") : (this.get_type.texture = RES.getRes("ui_share_01_png"),
                this.tower_gold.text = "分享领取"), v.instance.BLACK_5 > 0 && (this.tower_gold.text = "Free"),
            b.instance.getTowerToday > 0 ? (this.tower_button.enabled = !0, this.buy_group.visible = !0,
                this.can_group.visible = !1) : (this.tower_button.enabled = !1, this.buy_group.visible = !1,
                this.can_group.visible = !0);
    }, i.prototype.run = function(t) {
        this.rushUI();
        for (var e = 0; e < this.shops.length; e++) this.shops[e].rushUI();
        return 1 == this._witchShow ? (this._witchShow = 0, b.instance.powerMost - 3 > 0 ? B.GetInstance().addTowerByShop(b.instance.powerMost - 3, -1) : B.GetInstance().addTowerByShop(1, -1),
            B.GetInstance().showNotice("Successfully received,The turret has been built for you")) : 2 == this._witchShow ? (this._witchShow = 0,
            B.GetInstance().showNotice("请分享到不同群。")) : 3 == this._witchShow && (this._witchShow = 0,
            B.GetInstance().showNotice("请观看完整视频。")), !0;
    }, i.prototype.close = function() {
        var t = this;
        this.ADshow && (this.ADshow = !1), this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0,
            e.Tween.get(this).to({
                scaleX: .7,
                scaleY: .7
            }, 100).call(function() {
                B.GetInstance().closeErji(), t.end();
            }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.setHelp7 = function() {
        this.help7_group.visible = !0, e.Tween.removeTweens(this.help7_img), e.Tween.get(this.help7_img, {
            loop: !0
        }).to({
            x: 385,
            y: 230
        }, 250, e.Ease.sineInOut).to({
            scaleX: 1.1,
            scaleY: .9
        }, 250, e.Ease.sineInOut).to({
            scaleX: .9,
            scaleY: 1.1
        }, 250, e.Ease.sineInOut).to({
            scaleX: 1,
            scaleY: 1
        }, 125, e.Ease.sineInOut).to({
            x: 370,
            y: 245
        }, 200, e.Ease.sineInOut).wait(500);
    }, i.prototype.stopHelp7 = function() {
        D.playSE("button_mp3"), 35 * (1 - E.getUpGradeNum(3)) <= b.instance.gold ? (b.instance.gold -= 35 * (1 - E.getUpGradeNum(3)),
                B.GetInstance().addTowerByShop(1, 0), b.instance.setTowerBuyNumOffset(1, 1), B.GetInstance().showNotice("The purchase is successful, the turret has been built for you")) : (b.instance.gold = 0,
                b.instance.setTowerBuyNumOffset(1, 1), B.GetInstance().addTowerByShop(1, 0), B.GetInstance().showNotice("The purchase is successful, the turret has been built for you")),
            this.removeHelp7();
    }, i.prototype.removeHelp7 = function() {
        e.Tween.removeTweens(this.help7_img), this.help7_group.visible = !1, b.instance.helpInGame_07 = !0;
    }, i;
}(u);

i(gt.prototype, "MyShop");

var bt = function(t) {
    function i() {
        var i = t.call(this) || this;
        return i._gold = 200, i._witchShow = 0, i._changeTime = -1, i.skinName = "resource/eui_skins/MySkin/MySignInSkin.exml",
            i.button_close0.addEventListener(e.TouchEvent.TOUCH_END, i.touch_close, i), i.button_close1.addEventListener(e.TouchEvent.TOUCH_END, i.touch_close, i),
            i.button_get.addEventListener(e.TouchEvent.TOUCH_END, i.touch_get, i), i.button_get_video.addEventListener(e.TouchEvent.TOUCH_END, i.touch_get_video, i),
            i.banner_button_0.addEventListener(e.TouchEvent.TOUCH_END, i.touch_banner, i), i;
    }
    return s(i, t), i.prototype.rushUI = function() {
        this.label_0.text = T.doubleToString(this._gold), this.label_3.text = T.doubleToString(2 * this._gold),
            this.group_close.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP);
        for (var t = 0; 7 > t; t++) Number(this.group_all.getChildAt(t).name) < b.instance.signIn_index ? (this.group_all.getChildAt(t).visible = !0,
            this.group_all.getChildAt(t + 7).visible = !1) : (this.group_all.getChildAt(t).visible = !1,
            this.group_all.getChildAt(t + 7).visible = !0), t == b.instance.signIn_index && (this.button_get.enabled = 0 == b.instance.getSignInData(t, 0),
            this.button_get_video.enabled = 0 == b.instance.getSignInData(t, 1));
        this._changeTime > 0 && (this._changeTime -= .0167, this._changeTime <= 0 && (this._changeTime = -1,
            this.changeBanner(!0)));
    }, i.prototype.reset = function() {
        this._witchShow = 0, this._gold = 120 * T.goldOfTask, this.show(), e.startTick(this.run, this),
            B.GetInstance().getCurLandIndex(), e.Tween.get(this.image_tishi).to({
                scaleX: .7,
                scaleY: .7
            }, 500).to({
                scaleX: 1,
                scaleY: 1
            }, 500), platform.isShowBanner ? this.banner_group.visible = !1 : this.banner_group.visible = !0;
    }, i.prototype.run = function(t) {
        return this.rushUI(), 1 == this._witchShow ? (this._witchShow = 0, this.getReward(!0)) : 2 == this._witchShow ? (this._witchShow = 0,
            B.GetInstance().showNotice("请分享到不同群。")) : 3 == this._witchShow && (this._witchShow = 0,
            B.GetInstance().showNotice("请观看完整视频。")), !0;
    }, i.prototype.getReward = function(t) {
        switch (void 0 === t && (t = !1), b.instance.signIn_index) {
            case 0:
                b.instance.gold += t ? 3 * this._gold : this._gold, B.GetInstance().addReward(this.group_all.getChildAt(b.instance.signIn_index).x + 70, 203, D.random(12, 15), 0, !0);
                break;

            case 3:
                b.instance.gold += t ? 6 * this._gold : this._gold, B.GetInstance().addReward(this.group_all.getChildAt(b.instance.signIn_index).x + 70, 203, D.random(12, 15), 0, !0);
                break;

            case 1:
                B.GetInstance().addTowerByShop(10, -1), B.GetInstance().showNotice("Successfully received, The turret has been built for you");
                break;

            case 2:
                b.instance.diamond += t ? 1500 : 500, B.GetInstance().addReward(this.group_all.getChildAt(b.instance.signIn_index).x + 70, 203, D.random(12, 15), 1, !0);
                break;

            case 4:
                b.instance.diamond += t ? 3e3 : 1e3, B.GetInstance().addReward(this.group_all.getChildAt(b.instance.signIn_index).x + 70, 203, D.random(12, 15), 1, !0);
                break;

            case 5:
                b.instance.diamond += t ? 4500 : 1500, B.GetInstance().addReward(this.group_all.getChildAt(b.instance.signIn_index).x + 70, 203, D.random(12, 15), 1, !0);
                break;

            case 6:
                B.GetInstance().addTowerByShop(30, -1), B.GetInstance().showNotice("Successfully received, The turret has been built for you");
        }
        b.instance.setSignInData(b.instance.signIn_index, t ? 1 : 0, 1);
    }, i.prototype.touch_get = function() {
        D.playSE("button_mp3"), this.getReward();
    }, i.prototype.touch_get_video = function() {
        var t = this;
        D.playSE("button_mp3"), 1 != b.instance.signIn_index && 6 != b.instance.signIn_index || B.GetInstance().getCanBuild() ? T.ISONLINE ? platform.isShowADs ? ht.lookADs(12, function() {
            t._witchShow = 1;
        }, function() {
            t._witchShow = 3;
        }) : f.share(11, function() {
            t._witchShow = 1;
        }, function() {
            t._witchShow = 2;
        }) : this.getReward(!0) : B.GetInstance().showNotice("No place");
    }, i.prototype.touch_close = function() {
        D.playSE("button_mp3"), this.close();
    }, i.prototype.touch_banner = function() {
        D.playSE("button_mp3"), platform.getJumpData("banner")[T.bannerNum] && ht.jumpApp(platform.getJumpData("banner")[T.bannerNum], "每日登录banner"),
            this._changeTime = 2;
    }, i.prototype.close = function() {
        var t = this;
        this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0, e.Tween.get(this).to({
            scaleX: .7,
            scaleY: .7
        }, 100).call(function() {
            B.GetInstance().closeErji(), t.end(), e.stopTick(t.run, t);
        }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = .85;
        }, this);
    }, i.prototype.rushBanner = function() {
        var t = this;
        if (v.instance.BLACK_4 <= 0 && platform.getJumpData("topapp").length <= 0) this.banner_group.visible = !1;
        else if (this.banner_group.visible = !0,
            T.ISONLINE)
            if (T.bannerNum < 0 && (T.bannerNum = D.random(platform.getJumpData("banner").length - 1)),
                platform.getJumpData("banner")[T.bannerNum]) {
                this.banner_group.visible = !0;
                try {
                    RES.getResByUrl(platform.getJumpData("banner")[T.bannerNum].icon, function(e, i) {
                        t.banner_icon_0.texture = e;
                    }, this, RES.ResourceItem.TYPE_IMAGE);
                } catch (t) {
                    this.banner_icon_0.texture = RES.getRes("icon-144_png");
                }
            } else this.banner_group.visible = !1;
    }, i.prototype.changeBanner = function(t) {
        void 0 === t && (t = !1), t ? (T.bannerChange = !1, T.bannerNum += 1, T.bannerNum >= platform.getJumpData("banner").length && (T.bannerNum = 0)) : T.bannerChange ? (T.bannerChange = !1,
                T.bannerNum += 1, T.bannerNum >= platform.getJumpData("banner").length && (T.bannerNum = 0)) : T.bannerChange = !0,
            this.rushBanner();
    }, i;
}(u);

i(bt.prototype, "MySiGnIn");

var ft = function(t) {
    function i() {
        var s = t.call(this) || this;
        return s._changeTime = -1, s._witchShow = 0, s._endTime = 0, s._moregameNum = [0, 1, 2, 3, 4, 5],
            s.adIndex = 0, s.jumpCount = 0, s.showButtonTime = 3, s.skinName = "resource/eui_skins/MySkin/MySupplySkin.exml",
            s.mylight = new vt(), s.moregame_group.addChild(s.mylight), s.close_button.addEventListener(e.TouchEvent.TOUCH_END, function() {
                D.playSE("button_mp3"), s._endTime <= 0 && (s._witchShow = 1);
            }, s), s.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), s._endTime > 0 || (v.instance.BLACK_5 <= 0 ? s._witchShow = 1 : platform.isShowADs ? ht.lookADs(0 == i.type ? 8 : 9, function() {
                    s._witchShow = 4;
                }, function() {
                    s._witchShow = 3;
                }) : f.share(0 == i.type ? 8 : 9, function() {
                    s._witchShow = 4;
                }, function() {
                    s._witchShow = 2;
                }));
            }, s), s.banner_button_0.addEventListener(e.TouchEvent.TOUCH_END, function() {
                platform.getJumpData("banner")[T.bannerNum] && ht.jumpApp(platform.getJumpData("banner")[T.bannerNum], 0 == i.type ? "空投界面banner" : "宝箱界面banner"),
                    s._changeTime = 2;
            }, s), s.moregame_button_0.addEventListener(e.TouchEvent.TOUCH_END, function() {
                s.jumpAd(0);
            }, s), s.moregame_button_1.addEventListener(e.TouchEvent.TOUCH_END, function() {
                s.jumpAd(1);
            }, s), s.moregame_button_2.addEventListener(e.TouchEvent.TOUCH_END, function() {
                s.jumpAd(2);
            }, s), s.moregame_button_3.addEventListener(e.TouchEvent.TOUCH_END, function() {
                s.jumpAd(3);
            }, s), s.moregame_button_4.addEventListener(e.TouchEvent.TOUCH_END, function() {
                s.jumpAd(4);
            }, s), s.moregame_button_5.addEventListener(e.TouchEvent.TOUCH_END, function() {
                s.jumpAd(5);
            }, s), s;
    }
    return s(i, t), i.prototype.jumpAd = function(t) {
        var e = this,
            s = platform.getJumpData("topapp")[this._moregameNum[t]];
        s && (s.success = function() {
            e.reloadIndex(t);
        }, s.fail = function() {
            e.reloadIndex(t);
        }, ht.jumpApp(s, 0 == i.type ? "空投导流窗口" : "宝箱导流窗口"));
    }, i.prototype.reloadIndex = function(t) {
        var e = platform.getJumpData("topapp").length;
        if (!(6 >= e)) {
            this.jumpCount++, this.jumpCount %= e - 6;
            var i = this._moregameNum[t];
            this._moregameNum[t] = this._moregameNum[this.jumpCount + 6], this._moregameNum[this.jumpCount + 6] = i,
                this.drawAd(t);
        }
    }, i.prototype.drawAd = function(t) {
        var e, i, s;
        switch (t) {
            case 0:
                e = this.moregame_0, i = this.moregame_icon_0, s = this.moregame_name_0;
                break;

            case 1:
                e = this.moregame_1, i = this.moregame_icon_1, s = this.moregame_name_1;
                break;

            case 2:
                e = this.moregame_2, i = this.moregame_icon_2, s = this.moregame_name_2;
                break;

            case 3:
                e = this.moregame_3, i = this.moregame_icon_3, s = this.moregame_name_3;
                break;

            case 4:
                e = this.moregame_4, i = this.moregame_icon_4, s = this.moregame_name_4;
                break;

            case 5:
                e = this.moregame_5, i = this.moregame_icon_5, s = this.moregame_name_5;
        }
        var n = platform.getJumpData("topapp")[this._moregameNum[t]];
        if (n) {
            e.visible = !0;
            try {
                RES.getResByUrl(n.icon, function(t, e) {
                    i.texture = t;
                }, this, RES.ResourceItem.TYPE_IMAGE);
            } catch (t) {
                i.texture = RES.getRes("icon-144_png");
            }
            s.text = n.name;
        } else e.visible = !1;
    }, i.prototype.rushBanner = function() {
        var t = this;
        if (v.instance.BLACK_4 <= 0 && platform.getJumpData("topapp").length <= 0) this.banner_group.visible = !1;
        else if (this.banner_group.visible = !0,
            T.ISONLINE)
            if (T.bannerNum < 0 && (T.bannerNum = D.random(platform.getJumpData("banner").length - 1)),
                platform.getJumpData("banner")[T.bannerNum]) {
                this.banner_group.visible = !0;
                try {
                    RES.getResByUrl(platform.getJumpData("banner")[T.bannerNum].icon, function(e, i) {
                        t.banner_icon_0.texture = e;
                    }, this, RES.ResourceItem.TYPE_IMAGE);
                } catch (t) {
                    this.banner_icon_0.texture = RES.getRes("icon-144_png");
                }
            } else this.banner_group.visible = !1;
    }, i.prototype.changeBanner = function(t) {
        void 0 === t && (t = !1), t ? (T.bannerChange = !1, T.bannerNum += 1, T.bannerNum >= platform.getJumpData("banner").length && (T.bannerNum = 0)) : T.bannerChange ? (T.bannerChange = !1,
                T.bannerNum += 1, T.bannerNum >= platform.getJumpData("banner").length && (T.bannerNum = 0)) : T.bannerChange = !0,
            this.rushBanner();
    }, i.prototype.rushMoregame = function() {
        if (!(v.instance.BLACK_4 > 0 && platform.getJumpData("topapp").length > 0)) return this.moregame_group.visible = !1,
            this.img.y = 50, void(this.other_group.y = 450);
        this.moregame_group.visible = !0, this.img.y = -220, this.other_group.y = 570;
        var t = platform.getJumpData("topapp").length;
        if (t > 0)
            for (e = 0; 6 > e || t > e; e++) this._moregameNum[e] = this.adIndex,
                this.adIndex++, this.adIndex %= t;
        if (this.jumpCount = 0, T.ISONLINE)
            for (var e = 0; 6 > e; e++) this.drawAd(e);
    }, i.setType = function(t, e, i) {
        switch (this.type = t, this.rewardType = e, this.value = i, this.type) {
            case 0:
                platform.sendStatistics("打开空投", "打开次数");
                break;

            case 1:
                platform.sendStatistics("打开宝箱", "打开次数");
        }
    }, i.prototype.reset = function() {
        var t = this;
        if (this._witchShow = 0, this.bg_rect.alpha = 0, this.all_group.y = 0, this._endTime = 3,
            this.showButtonTime = v.instance.BLACK_3 > 0 ? 3 : 0, this.get_button.visible = !1,
            this.buy_group.visible = !1, this.free_label.visible = !1, this.close_group.visible = !1,
            this.rewardImg.texture = RES.getRes("ui_money_0" + (0 == i.rewardType ? 2 : 1) + "_png"),
            this.rewardValue.text = T.doubleToString(0), this.rushMoregame(), this.mylight.start(-10, -10, 578, 452),
            platform.isShowBanner) this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            T.SRC_H < 1260 ? this.boss_group.y = T.SRC_H - T.ADS_H - T.yoffset - 250 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP) : this.boss_group.y = 760 - (v.instance.BLACK_2 > 0 ? 0 : T.CLOSE_UP),
            this.banner_group.visible = !1;
        else {
            switch (i.type) {
                case 0:
                    platform.sendStatistics("空投特殊事件", "微信banner加载失败");
                    break;

                case 1:
                    platform.sendStatistics("宝箱特殊事件", "微信banner加载失败");
            }
            v.instance.BLACK_4 > 0 && platform.getJumpData("topapp").length > 0 ? (this.banner_group.visible = !0,
                    this.changeBanner(), this.banner_group.y = T.SRC_H - T.yoffset - 2) : this.banner_group.visible = !1,
                this.close_group.y = T.SRC_H - T.ADS_H - T.yoffset - 20, T.SRC_H < 1260 ? this.boss_group.y = T.SRC_H - T.ADS_H - T.yoffset - 250 - 20 : this.boss_group.y = 740;
        }
        e.startTick(this.run, this), T.isBannerShow || ht.showBanner(), e.Tween.removeTweens(this),
            e.Tween.get(this.all_group).to({
                y: 200
            }, 250).call(function() {
                t.bg_rect.alpha = .85;
            });
    }, i.prototype.bossEnd = function() {
        var t = this;
        0 == i.type && (B.GetInstance()._isCleanKongtou = !0), this.mylight.stop(), e.stopTick(this.run, this),
            e.Tween.removeTweens(this), e.Tween.get(this.all_group).to({
                y: 0
            }, 250).call(function() {
                t.bg_rect.alpha = 0, B.GetInstance().closeErji(), t.end();
            });
    }, i.prototype.run = function(t) {
        var s = .0167;
        switch (this.mylight.run(0), this._changeTime > 0 && (this._changeTime -= s, this._changeTime <= 0 && (this._changeTime = -1,
                this.changeBanner(!0))), this._endTime > 0 ? (this._endTime -= s, this.rewardValue.text = T.doubleToString((3 - this._endTime) / 3 * i.value),
                this._endTime <= 0 && (this._endTime = -1, this.rewardValue.text = T.doubleToString(i.value),
                    this.get_button.visible = !0, this.buy_group.visible = v.instance.BLACK_5 > 0, this.free_label.visible = 0 == v.instance.BLACK_5,
                    platform.isShowADs ? this.get_type.texture = RES.getRes("ui_share_04_png") : this.get_type.texture = RES.getRes("ui_share_02_png"),
                    1 != v.instance.BLACK_9 || T.isDangerousArea ? this.buttonGuide.visible = !1 : (this.buttonGuide.visible = !0,
                        e.Tween.removeTweens(this.buttonGuide), e.Tween.get(this.buttonGuide, {
                            loop: !0
                        }).set({
                            x: 238,
                            alpha: 0
                        }).to({
                            x: 158,
                            alpha: 1
                        }, 200, e.Ease.sineIn).wait(700).to({
                            alpha: 0
                        }, 100)))) : this.showButtonTime >= 0 && (this.showButtonTime -= s, this.showButtonTime < 0 && (this.close_group.visible = !0)),
            this._witchShow) {
            case 1:
                switch (this._witchShow = 0, i.rewardType) {
                    case 0:
                        b.instance.diamond += i.value;
                        break;

                    case 1:
                        b.instance.gold += i.value;
                }
                switch (B.GetInstance().addReward(70, 375, D.random(12, 15), 1, !0), B.GetInstance().addReward(350, 375, D.random(12, 15), 0, !0),
                    B.GetInstance().showNotice("Successfully received"), this.bossEnd(), i.type) {
                    case 0:
                        platform.sendStatistics("打开空投", "直接领取次数");
                        break;

                    case 1:
                        platform.sendStatistics("打开宝箱", "直接领取次数");
                }
                break;

            case 2:
                this._witchShow = 0, B.GetInstance().showNotice("请分享到不同群。");
                break;

            case 3:
                this._witchShow = 0, B.GetInstance().showNotice("请观看完整视频。");
                break;

            case 4:
                switch (this._witchShow = 0, i.rewardType) {
                    case 0:
                        b.instance.diamond += 3 * i.value;
                        break;

                    case 1:
                        b.instance.gold += 3 * i.value;
                }
                switch (B.GetInstance().addReward(70, 375, D.random(12, 15), 1, !0), B.GetInstance().addReward(350, 375, D.random(12, 15), 0, !0),
                    B.GetInstance().showNotice("3 times Successfully received"), this.bossEnd(), i.type) {
                    case 0:
                        platform.sendStatistics("打开空投", "3倍领取次数");
                        break;

                    case 1:
                        platform.sendStatistics("打开宝箱", "3倍领取次数");
                }
        }
        return !0;
    }, i.type = 0, i.rewardType = 0, i.value = 0, i;
}(u);

i(ft.prototype, "MySupply");

var wt = function(t) {
    function i() {
        var i = t.call(this) || this;
        i.achs = [], i.achNums = [], i.tasks = [], i.skinName = "resource/eui_skins/MySkin/MyTaskSkin.exml",
            i.close_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), e.stopTick(i.run, i), i.close();
            }, i), i.ach_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i.achShow = !0, i.changeAch();
                for (var t = 0; t < i.achs.length; t++) i.achs[t].reset(i.achNums[t]);
            }, i), i.task_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), i.achShow = !1, i.changeTask();
            }, i);
        for (var s = -3; 10 > s; s++) {
            var n = new kt(s);
            i.tasks.push(n);
        }
        for (var o = 0; 9 > o; o++) {
            var a = new Nt(o + 1);
            i.ach_group.addChild(a), i.achs.push(a), i.achNums.push(o + 1), a.y = 0;
        }
        return i;
    }
    return s(i, t), i.prototype.reset = function() {
        this.achShow = !1, this.changeTask(), this.ach_group.scrollV = 0, this.task_group.scrollV = 0,
            this.changeAch();
        for (var t = 0; t < this.achs.length; t++) this.achs[t].reset(this.achNums[t]),
            this.achs[t].rushUI();
        this.rushUI(), this.show(), e.startTick(this.run, this), v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "任务界面猜你爱玩",
            this.addChild(u.getMenu(h.PARTNER_AD))), ht.showInterstitialAd();
    }, i.prototype.rushUI = function() {
        if (this.achShow) {
            this.ach_group.visible = !0, this.task_group.visible = !1;
            for (var t = 0; t < this.achs.length; t++) this.achs[t].rushUI();
            this.ach_button.enabled = !1, this.task_button.enabled = !0;
        } else {
            this.ach_group.visible = !1, this.task_group.visible = !0;
            for (var e = 0; e < this.tasks.length; e++) this.tasks[e].rushUI();
            this.ach_button.enabled = !0, this.task_button.enabled = !1;
        }
    }, i.prototype.run = function(t) {
        return this.rushUI(), !0;
    }, i.prototype.close = function() {
        var t = this;
        this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0, e.Tween.get(this).to({
            scaleX: .7,
            scaleY: .7
        }, 100).call(function() {
            B.GetInstance().closeErji(), t.end();
        }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.changeTask = function() {
        this.task_group.removeChildren(), this.ach_group.scrollV = 0, this.task_group.scrollV = 0;
        for (var t = 0; t < this.tasks.length; t++)
            for (var e = 0; e < this.tasks.length - 1 - t; e++)
                if (this.tasks[e].level > this.tasks[e + 1].level) {
                    var i = this.tasks[e];
                    this.tasks[e] = this.tasks[e + 1], this.tasks[e + 1] = i;
                }
        for (var s = 0; s < this.tasks.length; s++) this.tasks[s].num <= 0 ? v.instance.BLACK_4 > 0 && b.instance.missionNow > 4 && platform.getJumpData("recommender").length > 0 && this.task_group.addChild(this.tasks[s]) : this.task_group.addChild(this.tasks[s]);
    }, i.prototype.changeAch = function() {
        var t = [];
        this.ach_group.scrollV = 0, this.task_group.scrollV = 0;
        for (var e = 0; e < this.achs.length; e++) E.getAchNeedNum(this.achNums[e]) <= b.instance.getAchNeedNum(this.achNums[e]) ? t.push(this.achNums[e]) : t.push(this.achNums[e] + 100);
        for (var i = 0; i < t.length - 1; i++)
            for (var s = 0; s < t.length - 1 - i; s++)
                if (t[s] > t[s + 1]) {
                    var n = t[s];
                    t[s] = t[s + 1], t[s + 1] = n;
                }
        for (var o = 0; o < t.length; o++) t[o] = t[o] % 100;
        this.achNums = t;
    }, i;
}(u);

i(wt.prototype, "MyTask");

var yt = function(t) {
    function i() {
        var i = t.call(this) || this;
        i.upgrades = [], i.upgradeNums = [], i.skinName = "resource/eui_skins/MySkin/MyUpgradeSkin.exml",
            i.close_button.addEventListener(e.TouchEvent.TOUCH_END, function() {
                e.stopTick(i.run, i), D.playSE("button_mp3"), i.close();
            }, i), i.help5_button.addEventListener(e.TouchEvent.TOUCH_END, i.stopHelp5, i);
        for (var s = 0; 6 > s; s++) {
            var n = new Dt(s + 1);
            i.upgrade_group.addChild(n), i.upgrades.push(n), i.upgradeNums.push(s + 1), n.y = 150 * s;
        }
        return i;
    }
    return s(i, t), i.prototype.reset = function() {
        this.rushUI(), this.show(), this.changeUpgrade();
        for (var t = 0; t < this.upgrades.length; t++) this.upgrades[t].reset(this.upgradeNums[t]);
        b.instance.helpInGame_05 ? (this.help5_group.visible = !1, ht.showInterstitialAd()) : this.setHelp5(),
            e.startTick(this.run, this), v.instance.BLACK_4 > 0 && platform.getJumpData("recommender").length > 0 && (mt.jumpStr = "升级界面猜你爱玩",
                this.addChild(u.getMenu(h.PARTNER_AD)));
    }, i.prototype.rushUI = function() {
        for (var t = 0; t < this.upgrades.length; t++) this.upgrades[t].rushUI();
    }, i.prototype.run = function(t) {
        return this.rushUI(), !0;
    }, i.prototype.close = function() {
        var t = this;
        this.scaleX = 1, this.scaleY = 1, this.bg_rect.alpha = 0, e.Tween.get(this).to({
            scaleX: .7,
            scaleY: .7
        }, 100).call(function() {
            B.GetInstance().closeErji(), t.end();
        }, this);
    }, i.prototype.show = function() {
        var t = this;
        this.bg_rect.alpha = 0, this.scaleX = .7, this.scaleY = .7, e.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100).call(function() {
            t.bg_rect.alpha = 1;
        }, this);
    }, i.prototype.changeUpgrade = function() {
        for (var t = [], e = 0; e < this.upgrades.length; e++) E.UPGRADE_MAXNUM[this.upgradeNums[e]] > 0 && E.UPGRADE_MAXNUM[this.upgradeNums[e]] > b.instance.getUpgradeNum(this.upgradeNums[e]) ? t.push(this.upgradeNums[e]) : E.UPGRADE_MAXNUM[this.upgradeNums[e]] < 0 ? t.push(this.upgradeNums[e]) : t.push(this.upgradeNums[e] + 100);
        for (var i = 0; i < t.length - 1; i++)
            for (var s = 0; s < t.length - 1 - i; s++)
                if (t[s] > t[s + 1]) {
                    var n = t[s];
                    t[s] = t[s + 1], t[s + 1] = n;
                }
        for (var o = 0; o < t.length; o++) t[o] = t[o] % 100;
        this.upgradeNums = t;
    }, i.prototype.setHelp5 = function() {
        this.help5_group.visible = !0, e.Tween.removeTweens(this.help5_img), e.Tween.get(this.help5_img, {
            loop: !0
        }).to({
            x: 385,
            y: 230
        }, 250, e.Ease.sineInOut).to({
            scaleX: 1.1,
            scaleY: .9
        }, 250, e.Ease.sineInOut).to({
            scaleX: .9,
            scaleY: 1.1
        }, 250, e.Ease.sineInOut).to({
            scaleX: 1,
            scaleY: 1
        }, 125, e.Ease.sineInOut).to({
            x: 370,
            y: 245
        }, 200, e.Ease.sineInOut).wait(500);
    }, i.prototype.stopHelp5 = function() {
        D.playSE("button_mp3"), b.instance.diamond >= E.UPGRADE_COST[1] ? (b.instance.diamond -= E.UPGRADE_COST[1],
            b.instance.setUpgradeNumOffset(1, 1), b.instance.taskNeedNum_09 += 1) : (b.instance.diamond = 0,
            b.instance.setUpgradeNumOffset(1, 1), b.instance.taskNeedNum_09 += 1), this.removeHelp5();
    }, i.prototype.removeHelp5 = function() {
        e.Tween.removeTweens(this.help5_img), this.help5_group.visible = !1, b.instance.helpInGame_05 = !0;
    }, i;
}(u);

i(yt.prototype, "MyUpgrade");

var Tt = function(t) {
    function i() {
        var e = t.call(this) || this;
        return e._runTime = 0, e._isClose = !1, e.skinName = "resource/eui_skins/MySkin/MyWarningSkin.exml",
            e;
    }
    return s(i, t), i.prototype.reset = function() {
        this._runTime = 0, this._isClose = !1, e.startTick(this.run, this);
    }, i.prototype.run = function(t) {
        return this._runTime += .016, this.beginDead(), this._runTime > 3 && !this._isClose && (this._isClose = !0,
            this.close()), !0;
    }, i.prototype.beginDead = function() {
        var t = [1, 0, 0, 0, 50 * D.sin(360 * this._runTime), 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            i = new e.ColorMatrixFilter(t);
        this.bg_rect.filters = [i];
    }, i.prototype.close = function() {
        var t = this;
        e.Tween.removeTweens(this), e.Tween.get(this.warning_img).to({
            alpha: .6
        }, 500).call(function() {
            t.end(), B.GetInstance().endWarning(), e.stopTick(t.run, t);
        });
    }, i;
}(u);

i(Tt.prototype, "MyWarning");

var Nt = function(t) {
    function i(i) {
        var s = t.call(this) || this;
        return s._num = i, s._ID = s._num, s.skinName = "resource/eui_skins/MySkin/MyControl/MyAchievementControl.exml",
            s.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function(t) {
                D.playSE("button_mp3"), E.getAchNeedNum(s._num) <= b.instance.getAchNeedNum(s._num) && (b.instance.setAchCompleteNumOffset(s._num, 1),
                    b.instance.diamond += 50, B.GetInstance().addReward(t.stageX, t.stageY - 237 - T.yoffset, D.random(12, 15), 1, !0));
            }, s), s.rushUI(), s;
    }
    return s(i, t), Object.defineProperty(i.prototype, "ID", {
        get: function() {
            return this._ID;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.reset = function(t) {
        this._num = t;
    }, i.prototype.rushUI = function() {
        this.arh_pb.maximum = E.getAchNeedNum(this._num), this.arh_pb.value = b.instance.getAchNeedNum(this._num),
            this.get_button.enabled = E.getAchNeedNum(this._num) <= b.instance.getAchNeedNum(this._num);
        var t = E.getAchNeedNum(this._num).toString();
        switch (this._num) {
            case 1:
                this.ach_describe.text = "Synthesize " + t + " defense towers";
                break;

            case 2:
                this.ach_describe.text = "Build " + t + " defense towers";
                break;

            case 3:
                this.ach_describe.text = "Kill " + t + " enemies";
                break;

            case 4:
                this.ach_describe.text = "Beat " + t + " bosses";
                break;

            case 5:
                this.ach_describe.text = "Main gun reaches level " + t;
                break;

            case 6:
                this.ach_describe.text = "Use " + t + " assist skill functions";
                break;

            case 7:
                this.ach_describe.text = "Strengthen the total store level to " + t;
                break;

            case 8:
                this.ach_describe.text = "A total of " + t + " tasks completed daily";
                break;

            case 9:
                this.ach_describe.text = t + " times watched ads";
        }
    }, i;
}(eui.Component);

i(Nt.prototype, "AchievementControl");

var vt = function(t) {
    function i() {
        var e = t.call(this) || this;
        return e.MOVE_SPEED = 400, e.POINT_INTERVAL = 4, e.POINT_WIDTH = 12, e.time = 0,
            e.touchEnabled = !1, e.touchChildren = !1, e;
    }
    return s(i, t), i.prototype.start = function(t, e, i, s) {
        void 0 === t && (t = this.x), void 0 === e && (e = this.y), void 0 === i && (i = this.width),
            void 0 === s && (s = this.height), this.x = t, this.y = e, this.width = i, this.height = s;
    }, i.prototype.stop = function() {
        for (;;) {
            var t = this.getChildByName("light");
            if (!t) return;
            e.Tween.removeTweens(t), t.parent && t.parent.removeChild(t);
        }
    }, i.prototype.run = function(t) {
        return this.time += 1e3 / 60 / 2, this.drowEffect(t), this.time += 1e3 / 60 / 2,
            this.drowEffect(t), !0;
    }, i.prototype.drowEffect = function(t) {
        var e = this.width - 2 * this.POINT_INTERVAL - this.POINT_WIDTH,
            i = this.height - 2 * this.POINT_INTERVAL - this.POINT_WIDTH,
            s = 2 * (e + i),
            n = this.MOVE_SPEED * this.time / 1e3 % s,
            o = 0,
            a = 0;
        e >= n ? (o = n, a = 0) : e + i >= n ? (o = e, a = n - e) : 2 * e + i > n ? (o = 2 * e + i - n,
                a = i) : (o = 0, a = s - n), this.addChild(this.getLightPoint(o, a)), o = e - o,
            a = i - a, this.addChild(this.getLightPoint(o, a));
    }, i.prototype.getLightPoint = function(t, i) {
        var s = new e.Bitmap(RES.getRes("lightEffect_png"));
        return s.x = t + this.POINT_INTERVAL, s.y = i + this.POINT_INTERVAL, s.width = this.POINT_WIDTH,
            s.height = this.POINT_WIDTH, s.blendMode = e.BlendMode.ADD, s.name = "light", e.Tween.get(s).wait(100).to({
                alpha: 0
            }, 1e3).call(function() {
                s.parent && s.parent.removeChild(s);
            }), s;
    }, i;
}(eui.Group);

i(vt.prototype, "MyLightEffect");

var St = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "resource/eui_skins/MySkin/MyControl/MyRankControl.exml", e;
    }
    return s(e, t), e.prototype.reset = function(t) {
        var e = this;
        if (void 0 === t && (t = null), null == t || t._rank < 0) this.visible = !1;
        else {
            switch (this.visible = !0, t._rank) {
                case 0:
                    this.rank_label.visible = !1, this.rank_img.visible = !0, this.rank_img.texture = RES.getRes("ui_rank_01_png");
                    break;

                case 1:
                    this.rank_label.visible = !1, this.rank_img.visible = !0, this.rank_img.texture = RES.getRes("ui_rank_02_png");
                    break;

                case 2:
                    this.rank_label.visible = !1, this.rank_img.visible = !0, this.rank_img.texture = RES.getRes("ui_rank_03_png");
                    break;

                default:
                    this.rank_label.visible = !0, this.rank_img.visible = !1, this.rank_label.text = "" + (t._rank + 1);
            }
            if ("11" == t._avatarUrl || "" == t._avatarUrl) this.rank_head.texture = RES.getRes("ui_top_02_png");
            else try {
                RES.getResByUrl(t._avatarUrl, function(t, i) {
                    e.rank_head.texture = t;
                }, this, RES.ResourceItem.TYPE_IMAGE);
            } catch (t) {
                this.rank_head.texture = RES.getRes("ui_top_02_png");
            }
            this.rank_name.text = t._nickname, this.rank_power.text = t._score;
        }
    }, e;
}(eui.Component);

i(St.prototype, "RankContral");

var Et = function(t) {
    function i(i) {
        var s = t.call(this) || this;
        return s._num = i, s._gold = 99999, s.skinName = "resource/eui_skins/MySkin/MyControl/MyShopControl.exml",
            s.tower_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), s._gold <= b.instance.gold ? B.GetInstance().addTowerByShop(s._num, s._gold) : B.GetInstance().showGold();
            }, s), s.rushUI(), s;
    }
    return s(i, t), i.prototype.rushUI = function() {
        console.log("商店被打开")
        var t = E.getTowerRecord(this._num);
        this._gold = t._gold * D.pow(1.3, b.instance.getTowerBuyNum(this._num)) * (1 - E.getUpGradeNum(3)),
            this.tower_base.texture = RES.getRes(t._base), this.tower_cannon.texture = RES.getRes(t._cannon),
            this.tower_level.text = "LV." + this._num.toString(), this.tower_name.size = 22, this.tower_name.text = t._name.toString(),
            this.tower_atk.text = "Hurt:" + T.doubleToString(t._atk) + "/S", this.tower_range.text = "attack range:" + t._range.toString(),
            this.tower_gold.text = T.doubleToString(this._gold), this.unlock_level.text = "Lv." + (this._num + 4).toString() + " unlock",
            b.instance.powerMost - this._num > 3 ? (this.tower_button.enabled = !0, this.buy_group.visible = !0,
                this.unlock_level.visible = !1, this._gold <= b.instance.gold && (this.tower_button.enabled = !0)) : (this.tower_button.enabled = !1,
                this.buy_group.visible = !1, this.unlock_level.visible = !0);
    }, i;
}(eui.Component);

i(Et.prototype, "ShopControl");

var kt = function(t) {
    function i(i) {
        var s = t.call(this) || this;
        return s._showAD = 0, s._diamind = 200, s._num = i + 1, s._gold = 1, s.skinName = "resource/eui_skins/MySkin/MyControl/MyTaskControl.exml",
            s._num <= 0 && (s.getShowAd(), s.rushDL()), s.get_button.addEventListener(e.TouchEvent.TOUCH_TAP, function(t) {
                D.playSE("button_mp3"), b.instance.getTaskNeedNum(s._num) >= E.TASK_NEEDNUM[s._num] && (b.instance.getTaskCompleteNum(s._num) <= 0 ? (b.instance.setTaskCompleteNum(s._num, 1),
                    b.instance.gold = Number(b.instance.gold) + Number(s._gold), b.instance.achNeedNum_08 += 1,
                    B.GetInstance().addReward(t.stageX, t.stageY - 237 - T.yoffset, D.random(12, 15), 0, !0)) : 1 == b.instance.getTaskCompleteNum(s._num) && ht.lookADs(1, function() {
                    b.instance.setTaskCompleteNum(s._num, 2), b.instance.gold = Number(b.instance.gold) + Number(s._gold),
                        B.GetInstance().addRewardEnd(t.stageY - 237 - T.yoffset);
                }, function() {
                    B.GetInstance().showNotice("请观看完整视频。");
                }));
            }, s), s.dl_button.addEventListener(e.TouchEvent.TOUCH_TAP, function(t) {
                D.playSE("button_mp3"), platform.getJumpData("recommender")[s._showAD] && (b.instance.getTaskDLNum(s._num + 3) > 1 ? ht.jumpApp(platform.getJumpData("recommender")[s._showAD], "任务导流") : 1 == b.instance.getTaskDLNum(s._num + 3) ? (b.instance.diamond = Number(b.instance.diamond) + Number(s._diamind),
                    B.GetInstance().addReward(t.stageX, t.stageY - 237 - T.yoffset, D.random(12, 15), 1, !0),
                    b.instance.setTaskDLNum(s._num + 3, 2)) : f.jumpApp(platform.getJumpData("recommender")[s._showAD], "任务导流", function() {
                    b.instance.setTaskDLNum(s._num + 3, 1);
                }, function() {
                    B.GetInstance().addRewardWarning("The trial time is less than 30 seconds! Try again to get diamond rewards!");
                }));
            }, s), s.rushUI(), s;
    }
    return s(i, t), Object.defineProperty(i.prototype, "num", {
        get: function() {
            return this._num;
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.reset = function() {
        this.rushUI();
    }, i.prototype.getShowAd = function() {
        this._showAD = b.instance.taskDLShow + this._num + 3, this._showAD >= platform.getJumpData("recommender").length && (this._showAD -= platform.getJumpData("recommender").length),
            console.log(this._showAD);
    }, i.prototype.rushDL = function() {
        var t = this;
        if (T.ISONLINE)
            if (platform.getJumpData("recommender")[this._showAD]) {
                this.dl_group.visible = !0;
                try {
                    RES.getResByUrl(platform.getJumpData("recommender")[this._showAD].icon[0], function(e, i) {
                        t.dl_icon.texture = e;
                    }, this, RES.ResourceItem.TYPE_IMAGE);
                } catch (t) {
                    this.dl_icon.texture = RES.getRes("icon-144_png");
                }
                this.dl_name.text = platform.getJumpData("recommender")[this._showAD].name;
            } else this.dl_group.visible = !1;
    }, i.prototype.rushUI = function() {
        if (this._num > 0) {
            this.task_group.visible = !0, this.dl_group.visible = !1, this._gold = 20 * T.goldOfTask,
                this.task_pb.maximum = E.TASK_NEEDNUM[this._num], this.task_pb.value = b.instance.getTaskNeedNum(this._num),
                this.task_reward.text = T.doubleToString(this._gold), this.get_button.enabled = b.instance.getTaskNeedNum(this._num) >= E.TASK_NEEDNUM[this._num],
                b.instance.getTaskCompleteNum(this._num) <= 0 ? (this.get_button.visible = !0, this.task_get.strokeColor = b.instance.getTaskNeedNum(this._num) >= E.TASK_NEEDNUM[this._num] ? 3375106 : 4671303,
                    this.task_get.visible = !0, this.task_share.visible = !1, this.task_get.text = "Receive") : 1 == b.instance.getTaskCompleteNum(this._num) ? v.instance.BLACK_5 <= 0 ? (this.get_button.visible = !1,
                    this.task_get.visible = !0, this.task_share.visible = !1, this.task_get.text = "Received",
                    this.task_get.strokeColor = 4671303) : (this.get_button.visible = !0, this.task_get.visible = !1,
                    this.task_share.visible = !0) : (this.get_button.visible = !1, this.task_get.visible = !0,
                    this.task_share.visible = !1, this.task_get.text = "Received", this.task_get.strokeColor = 4671303);
            var t = E.TASK_NEEDNUM[this._num].toString();
            switch (this._num) {
                case 1:
                    this.task_describe.text = "Login game";
                    break;

                case 2:
                    this.task_describe.text = "Use any skill " + t + " times";
                    break;

                case 3:
                    this.task_describe.text = "[Build]" + t + " times defense tower";
                    break;

                case 4:
                    this.task_describe.text = "Collect " + t + " airdrop materials";
                    break;

                case 5:
                    this.task_describe.text = "After watching " + t + " 15-second ads";
                    break;

                case 6:
                    this.task_describe.text = "Knock down " + t + " enemies";
                    break;

                case 7:
                    this.task_describe.text = "Purchase " + t + " defense towers with gold coins";
                    break;

                case 8:
                    this.task_describe.text = "[Synthesis] Synthesize defense tower " + t + " times";
                    break;

                case 9:
                    this.task_describe.text = "Use enhanced skills " + t + " times";
                    break;


            }
        } else this.task_group.visible = !1, this.dl_group.visible = !0, b.instance.getTaskDLNum(this._num + 3) <= 0 ? this.dl_label.text = "Play for 30 seconds" : 1 == b.instance.getTaskDLNum(this._num + 3) ? this.dl_label.text = "Receive" : this.dl_label.text = "enter the game";
    }, Object.defineProperty(i.prototype, "level", {
        get: function() {
            return this._num > 0 ? b.instance.getTaskNeedNum(this._num) < E.TASK_NEEDNUM[this._num] ? this._num + 100 : b.instance.getTaskCompleteNum(this._num) <= 0 ? this._num - 200 : 1 == b.instance.getTaskCompleteNum(this._num) && v.instance.BLACK_5 > 0 ? this._num - 100 : this._num + 200 : this._num;
        },
        enumerable: !0,
        configurable: !0
    }), i;
}(eui.Component);

i(kt.prototype, "TaskControl");

var Dt = function(t) {
    function i(i) {
        var s = t.call(this) || this;
        return s._num = i, s._diamond = E.UPGRADE_COST[s._num], s.skinName = "resource/eui_skins/MySkin/MyControl/MyUpgradeControl.exml",
            s.upgrade_button.addEventListener(e.TouchEvent.TOUCH_TAP, function() {
                D.playSE("button_mp3"), b.instance.diamond >= s._diamond ? E.UPGRADE_MAXNUM[s._num] > 0 && E.UPGRADE_MAXNUM[s._num] > b.instance.getUpgradeNum(s._num) ? (b.instance.diamond -= s._diamond,
                    b.instance.setUpgradeNumOffset(s._num, 1), b.instance.taskNeedNum_09 += 1) : E.UPGRADE_MAXNUM[s._num] < 0 && (b.instance.diamond -= s._diamond,
                    b.instance.setUpgradeNumOffset(s._num, 1), b.instance.taskNeedNum_09 += 1) : B.GetInstance().showDiamond();
            }, s), s.rushUI(), s;
    }
    return s(i, t), i.prototype.reset = function(t) {
        switch (this._num = t, this._diamond = E.UPGRADE_COST[this._num], this._num) {
            case 1:
                this.upgrade_img.texture = RES.getRes("ui_g_buildUpProb_png"), this.upgrade_name.text = "Capacity expansion of supply station",
                    this.upgrade_cost.text = this._diamond.toString();
                break;

            case 2:
                this.upgrade_img.texture = RES.getRes("ui_g_crit_png"), this.upgrade_name.text = "Fort crit boost",
                    this.upgrade_cost.text = this._diamond.toString();
                break;

            case 3:
                this.upgrade_img.texture = RES.getRes("ui_g_price_png"), this.upgrade_name.text = "Lower purchase price",
                    this.upgrade_cost.text = this._diamond.toString();
                break;

            case 4:
                this.upgrade_img.texture = RES.getRes("ui_g_libraryCount_png"), this.upgrade_name.text = "Build additional levels+1",
                    this.upgrade_cost.text = this._diamond.toString();
                break;

            case 5:
                this.upgrade_img.texture = RES.getRes("ui_g_coin_png"), this.upgrade_name.text = "Overall gold bonus",
                    this.upgrade_cost.text = this._diamond.toString();
                break;

            case 6:
                this.upgrade_img.texture = RES.getRes("ui_g_towerPower_png"), this.upgrade_name.text = "Overall attack damage bonus",
                    this.upgrade_cost.text = this._diamond.toString();
        }
        this.rushUI();
    }, i.prototype.rushUI = function() {
        switch (this.upgrade_level.text = "Lv." + b.instance.getUpgradeNum(this._num), b.instance.diamond >= this._diamond && (E.UPGRADE_MAXNUM[this._num] > 0 && E.UPGRADE_MAXNUM[this._num] > b.instance.getUpgradeNum(this._num) ? this.upgrade_button.enabled = !0 : E.UPGRADE_MAXNUM[this._num] < 0 ? this.upgrade_button.enabled = !0 : (this.upgrade_button.enabled = !1,
            this.upgrade_cost.text = "Max")), this._num) {
            case 1:
                E.UPGRADE_MAXNUM[this._num] > b.instance.getUpgradeNum(this._num) ? this.upgrade_describe.text = D.roundDown(E.getUpGradeNum(this._num)).toString() + " - " + D.roundDown(E.getUpGradeNum(this._num) + E.UPGRADE_ADDNUM[this._num]).toString() : this.upgrade_describe.text = D.roundDown(E.getUpGradeNum(this._num)).toString();
                break;

            case 2:
            case 3:
            case 4:
                E.UPGRADE_MAXNUM[this._num] > b.instance.getUpgradeNum(this._num) ? this.upgrade_describe.text = D.roundDown(100 * E.getUpGradeNum(this._num)).toString() + "% - " + D.roundDown(100 * (E.getUpGradeNum(this._num) + E.UPGRADE_ADDNUM[this._num])).toString() + "%" : this.upgrade_describe.text = D.roundDown(100 * E.getUpGradeNum(this._num)).toString() + "%";
                break;

            case 5:
                this.upgrade_describe.text = D.roundDown(100 * E.getUpGradeNum(this._num)).toString() + "% - " + D.roundDown(100 * (E.getUpGradeNum(this._num) + E.UPGRADE_ADDNUM[this._num])).toString() + "%";
                break;

            case 6:
                this.upgrade_describe.text = D.roundDown(100 * E.getUpGradeNum(this._num)).toString() + "% - " + D.roundDown(100 * (E.getUpGradeNum(this._num) + E.UPGRADE_ADDNUM[this._num])).toString() + "%";
        }
    }, i;
}(eui.Component);

i(Dt.prototype, "UpgradeControl"), window.Main = W;