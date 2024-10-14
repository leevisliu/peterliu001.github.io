"use strict";
window.g_aUN = class {
    constructor(e, a) {
        this.g_asA = e, this.g_aUO = a, this.g_aUP = !1, this.g_aUQ = () => this.g_Lg()
    }
    g_aUR() {}
    g_aUS(e, a, _, g) {
        this.g_asA.g_aUT(this.g_aUO, e, a, _, g)
    }
    g_aUU(e, a, _, g) {
        return this.g_asA.g_aUV(this.g_aUO, e, a, _, g)
    }
    g_aUW(e, a, _) {
        this.g_asA.g_aUX() ? this.g_aUS(e, a, _) : this.g_asA.g_aUY()._OnMessageFromDOM({
            type: "event",
            component: this.g_aUO,
            handler: e,
            dispatchOpts: _ || null,
            data: a,
            responseId: null
        })
    }
    g_aUZ(e, a) {
        this.g_asA.g_aU_(this.g_aUO, e, a)
    }
    g_aU$(e) {
        for (const [a, _] of e) this.g_aUZ(a, _)
    }
    g_aVa() {
        return this.g_asA
    }
    g_aVb() {
        return this.g_aUO
    }
    g_afl() {
        this.g_aUP || (this.g_asA.g_aVc(this.g_aUQ), this.g_aUP = !0)
    }
    g_aeX() {
        this.g_aUP && (this.g_asA.g_aVd(this.g_aUQ), this.g_aUP = !1)
    }
    g_Lg() {}
}, window.g_m_ = class {
    constructor(e, a) {
        this.g_lI = e, this.g_m$ = a, this.g_nb = -1, this.g_nc = -Infinity, this.g_nd = () => this.g_ne(), this.g_nf = !1, this.g_ng = !1
    }
    g_ni(e) {
        this.g_ng = !!e
    }
    g_nm() {
        if (-1 === this.g_nb) {
            const e = Date.now(),
                a = e - this.g_nc,
                _ = this.g_m$;
            a >= _ && this.g_ng ? (this.g_nc = e, this.g_nn()) : this.g_nb = self.setTimeout(this.g_nd, Math.max(_ - a, 4))
        }
    }
    g_nn() {
        this.g_nf = !0, this.g_lI(), this.g_nf = !1
    }
    g_lM() {
        this.g_nf || (this.g_no(), this.g_nc = Date.now())
    }
    g_ne() {
        this.g_nb = -1, this.g_nc = Date.now(), this.g_nn()
    }
    g_no() {
        -1 !== this.g_nb && (self.clearTimeout(this.g_nb), this.g_nb = -1)
    }
    g_er() {
        this.g_no(), this.g_lI = null, this.g_nd = null
    }
}, "use strict", window.g_aVe = class extends g_aUN {
    constructor(e, a) {
        super(e, a), this.g_aVf = new Map, this.g_aVg = !0, this.g_aUZ("create", e => this.g_aVh(e)), this.g_aUZ("destroy", e => this.g_aVi(e)), this.g_aUZ("set-visible", e => this.g_aVj(e)), this.g_aUZ("update-position", e => this.g_aVk(e)), this.g_aUZ("update-state", e => this.g_aKp(e)), this.g_aUZ("focus", e => this.g_aVl(e)), this.g_aUZ("set-css-style", e => this.g_aVm(e))
    }
    g_aVn(e) {
        this.g_aVg = !!e
    }
    g_aVo(e, _) {
        this.g_aUZ(e, e => {
            const a = e.elementId,
                g = this.g_aVf.get(a);
            return _(g, e)
        })
    }
    g_aVh(e) {
        const a = e.elementId,
            _ = this.g_afN(a, e);
        this.g_aVf.set(a, _), e.isVisible || (_.style.display = "none"), this.g_aVg && document.body.appendChild(_)
    }
    g_afN() {
        throw new Error("required override")
    }
    g_aVp() {}
    g_aVi(e) {
        const a = e.elementId,
            _ = this.g_aVf.get(a);
        this.g_aVp(_), this.g_aVg && _.parentElement.removeChild(_), this.g_aVf.delete(a)
    }
    g_aVq(e, a, _) {
        _ || (_ = {}), _.elementId = a, this.g_aUS(e, _)
    }
    g_aVr(e, a, _) {
        _ || (_ = {}), _.elementId = a, this.g_aUW(e, _)
    }
    g_aVj(e) {
        if (this.g_aVg) {
            const a = this.g_aVf.get(e.elementId);
            a.style.display = e.isVisible ? "" : "none"
        }
    }
    g_aVk(e) {
        if (this.g_aVg) {
            const a = this.g_aVf.get(e.elementId);
            a.style.left = e.left + "px", a.style.top = e.top + "px", a.style.width = e.width + "px", a.style.height = e.height + "px";
            const _ = e.fontSize;
            null !== _ && (a.style.fontSize = _ + "em")
        }
    }
    g_aKp(e) {
        const a = this.g_aVf.get(e.elementId);
        this.g_aVs(a, e)
    }
    g_aVs() {
        throw new Error("required override")
    }
    g_aVl(e) {
        const a = this.g_aVf.get(e.elementId);
        e.focus ? a.focus() : a.blur()
    }
    g_aVm(e) {
        const a = this.g_aVf.get(e.elementId);
        a.style[e.prop] = e.val
    }
    g_aVt(e) {
        return this.g_aVf.get(e)
    }
}, "use strict"; {
    function _(e) {
        if (e.g_aVu) {
            const a = document.createElement("script");
            a.async = !1, a.textContent = e.g_o, document.head.appendChild(a)
        } else return new Promise((a, _) => {
            const g = document.createElement("script");
            g.onload = a, g.onerror = _, g.async = !1, g.src = e, document.head.appendChild(g)
        })
    }
    async function t(e) {
        const a = await r(e),
            _ = new TextDecoder("utf-8");
        return _.decode(a)
    }

    function r(e) {
        return new Promise((_, g) => {
            const a = new FileReader;
            a.onload = e => _(e.target.result), a.onerror = e => g(e), a.readAsArrayBuffer(e)
        })
    }

    function s(e) {
        return n.has(e)
    }
    const a = /(iphone|ipod|ipad)/i.test(navigator.userAgent);
    let e = new Audio;
    const d = {
        "audio/webm; codecs=opus": !!e.canPlayType("audio/webm; codecs=opus"),
        "audio/ogg; codecs=opus": !!e.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!e.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!e.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!e.canPlayType("audio/mp4"),
        "audio/mpeg": !!e.canPlayType("audio/mpeg")
    };
    e = null;
    const g = [];
    let u = 0;
    window.RealFile = window.File;
    const i = [],
        p = new Map,
        h = new Map;
    let l = 0;
    const m = [];
    self.g_aVv = function(e) {
        if ("function" != typeof e) throw new Error("runOnStartup called without a function");
        m.push(e)
    }, self.getGlobal = function(e) {
        if (!e) throw new Error("missing global variable");
        return e
    };
    const n = new Set(["cordova", "playable-ad", "instant-games"]);
    window.g_aVw = class e {
        constructor(e) {
            this.g_aVx = e.g_aVy, this.g_aVz = null, this.g_aqu = "", this.g_aVA = e.g_aVB, this.g_aVC = {}, this.g_aVD = null, this.g_aVE = null, this.g_aVF = [], this.g_aVG = null, this.g_aou = null, this.g_asu = null, this.g_apb = -1, this.g_aVH = () => this.g_aVI(), this.g_aVJ = [], this.g_aqz = e.g_aVK, s(this.g_aqz) && this.g_aVx && (console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."), this.g_aVx = !1), this.g_aVL = !1, this.g_aVM = null, this.g_aVN = null, ("html5" === this.g_aqz || "playable-ad" === this.g_aqz) && "file" === location.protocol.substr(0, 4) && alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"), this.g_aU_("runtime", "cordova-fetch-local-file", e => this.g_aVO(e)), this.g_aU_("runtime", "create-job-worker", e => this.g_aVP(e)), "cordova" === this.g_aqz ? document.addEventListener("deviceready", () => this.g_ad_(e)) : this.g_ad_(e)
        }
        g_er() {
            this.g_ats(), this.g_aVz && (this.g_aVz.onmessage = null, this.g_aVz = null), this.g_aVD && (this.g_aVD.terminate(), this.g_aVD = null), this.g_aVE && (this.g_aVE.g_er(), this.g_aVE = null), this.g_aou && (this.g_aou.parentElement.removeChild(this.g_aou), this.g_aou = null)
        }
        g_aVQ() {
            return this.g_aou
        }
        g_fl() {
            return this.g_aqu
        }
        g_aUX() {
            return this.g_aVx
        }
        g_auf() {
            return this.g_aqz
        }
        g_asU() {
            return a && "cordova" === this.g_aqz
        }
        g_aug() {
            return a && s(this.g_aqz) || navigator.standalone
        }
        async g_ad_(e) {
            if ("playable-ad" === this.g_aqz) {
                this.g_aVM = self.c3_base64files, this.g_aVN = {}, await this.g_aVR();
                for (let a = 0, _ = e.g_aVS.length; a < _; ++a) {
                    const _ = e.g_aVS[a].toLowerCase();
                    this.g_aVN.hasOwnProperty(_) ? e.g_aVS[a] = {
                        g_aVu: !0,
                        g_o: this.g_aVN[_]
                    } : this.g_aVM.hasOwnProperty(_) && (e.g_aVS[a] = URL.createObjectURL(this.g_aVM[_]))
                }
            }
            if (e.g_aVT) this.g_aqu = e.g_aVT;
            else {
                const e = location.origin;
                this.g_aqu = ("null" === e ? "file:///" : e) + location.pathname;
                const a = this.g_aqu.lastIndexOf("/"); - 1 !== a && (this.g_aqu = this.g_aqu.substr(0, a + 1))
            }
            if (e.g_aVU)
                for (const [a, _] of Object.entries(e.g_aVU)) this.g_aVC[a] = URL.createObjectURL(_);
            const a = new MessageChannel;
            this.g_aVz = a.port1, this.g_aVz.onmessage = e => this._OnMessageFromRuntime(e.data), window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(e => this.g_aVV(e)), this.g_asu = new self.g_aVW(this), await this.g_asu.g_alx(), this.g_aVX(), "object" == typeof window.StatusBar && window.StatusBar.hide(), "object" == typeof window.AndroidFullScreen && window.AndroidFullScreen.immersiveMode(), await this.g_aVY(), this.g_aVx ? await this.g_aVZ(e, a.port2) : await this.g_aV_(e, a.port2)
        }
        g_aV$(e) {
            return this.g_aVC.hasOwnProperty(e) ? this.g_aVC[e] : e.endsWith("/workermain.js") && this.g_aVC.hasOwnProperty("workermain.js") ? this.g_aVC["workermain.js"] : "playable-ad" === this.g_aqz && this.g_aVM.hasOwnProperty(e.toLowerCase()) ? URL.createObjectURL(this.g_aVM[e.toLowerCase()]) : e
        }
        async g_aWa(_, a, g) {
            if (_.startsWith("blob:")) return new Worker(_, g);
            if (this.g_asU()) {
                const a = await this.g_Cd(this.g_aVA + _),
                    e = new Blob([a], {
                        type: "application/javascript"
                    });
                return new Worker(URL.createObjectURL(e), g)
            }
            const t = new URL(_, a),
                n = location.origin !== t.origin;
            if (n) {
                const e = await fetch(t);
                if (!e.ok) throw new Error("failed to fetch worker script");
                const a = await e.blob();
                return new Worker(URL.createObjectURL(a), g)
            }
            return new Worker(t, g)
        }
        g_aVX() {
            if (this.g_aug()) {
                const _ = document.documentElement.style,
                    a = document.body.style,
                    g = window.innerWidth < window.innerHeight,
                    t = g ? window.screen.width : window.screen.height,
                    n = g ? window.screen.height : window.screen.width;
                a.height = _.height = n + "px", a.width = _.width = t + "px"
            }
        }
        g_aWb(_) {
            return {
                baseUrl: this.g_aqu,
                windowInnerWidth: window.innerWidth,
                windowInnerHeight: window.innerHeight,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: e.g_apG(),
                projectData: _.g_aWc,
                previewImageBlobs: window.cr_previewImageBlobs || this.g_aVM,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                exportType: _.g_aVK,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.g_aWd,
                jobScheduler: this.g_asu.g_aWe(),
                supportedAudioFormats: d,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.g_aVA + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.g_aVA + "opus.wasm.wasm",
                isiOSCordova: this.g_asU(),
                isiOSWebView: this.g_aug(),
                isFBInstantAvailable: "undefined" != typeof self.FBInstant
            }
        }
        async g_aVZ(e, a) {
            const _ = this.g_aV$(e.g_aWf);
            this.g_aVD = await this.g_aWa(_, this.g_aqu, {
                name: "Runtime"
            }), this.g_aou = document.createElement("canvas"), this.g_aou.style.display = "none";
            const g = this.g_aou.transferControlToOffscreen();
            document.body.appendChild(this.g_aou), window.c3canvas = this.g_aou, this.g_aVD.postMessage(Object.assign(this.g_aWb(e), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: a,
                canvas: g,
                workerDependencyScripts: e.g_aWg || [],
                engineScripts: e.g_aVS,
                projectScripts: window.g_aWh,
                projectScriptsStatus: self.C3_ProjectScriptsStatus
            }), [a, g, ...this.g_asu.g_aWi()]), this.g_aVF = i.map(e => new e(this)), this.g_aWj(), self.c3_callFunction = (e, a) => this.g_aVG.g_Ws(e, a), "preview" === this.g_aqz && (self.goToLastErrorScript = () => this.g_aUT("runtime", "go-to-last-error-script"))
        }
        async g_aV_(a, g) {
            this.g_aou = document.createElement("canvas"), this.g_aou.style.display = "none", document.body.appendChild(this.g_aou), window.c3canvas = this.g_aou, this.g_aVF = i.map(e => new e(this)), this.g_aWj();
            const t = a.g_aVS.map(e => "string" == typeof e ? new URL(e, this.g_aqu).toString() : e);
            if (Array.isArray(a.g_aWg) && t.unshift(...a.g_aWg), await Promise.all(t.map(a => _(a))), a.g_aWk && 0 < a.g_aWk.length) {
                const e = self.C3_ProjectScriptsStatus;
                try {
                    if (await Promise.all(a.g_aWk.map(a => _(a[1]))), Object.values(e).some(e => !e)) return void self.setTimeout(() => this.g_aWl(e), 100)
                } catch (_) {
                    return console.error("[Preview] Error loading project scripts: ", _), void self.setTimeout(() => this.g_aWl(e), 100)
                }
            }
            if ("preview" === this.g_aqz && "object" != typeof self.g_aU.g_aUM) return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."), void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");
            const n = Object.assign(this.g_aWb(a), {
                isInWorker: !1,
                messagePort: g,
                canvas: this.g_aou,
                runOnStartupFunctions: m
            });
            this.g_aVE = self.C3_CreateRuntime(n), await self.C3_InitRuntime(this.g_aVE, n)
        }
        g_aWl(e) {
            const a = Object.entries(e).filter(e => !e[1]).map(e => e[0]),
                _ = `Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;
            console.error("[Preview] " + _), alert(_)
        }
        async g_aVP() {
            const e = await this.g_asu.g_aWm();
            return {
                outputPort: e,
                transferables: [e]
            }
        }
        g_aUY() {
            if (this.g_aVx) throw new Error("not available in worker mode");
            return this.g_aVE
        }
        g_aUT(_, a, g, t, n) {
            this.g_aVz.postMessage({
                type: "event",
                component: _,
                handler: a,
                dispatchOpts: t || null,
                data: g,
                responseId: null
            }, this.g_aVL ? void 0 : n)
        }
        g_aUV(_, a, t, n, i) {
            const e = l++,
                o = new Promise((_, a) => {
                    h.set(e, {
                        resolve: _,
                        reject: a
                    })
                });
            return this.g_aVz.postMessage({
                type: "event",
                component: _,
                handler: a,
                dispatchOpts: n || null,
                data: t,
                responseId: e
            }, this.g_aVL ? void 0 : i), o
        }["_OnMessageFromRuntime"](e) {
            const a = e.type;
            if ("event" === a) this.g_aWn(e);
            else if ("result" === a) this.g_aWo(e);
            else if ("runtime-ready" === a) this.g_aWp();
            else if ("alert" === a) alert(e.message);
            else throw new Error(`unknown message '${a}'`)
        }
        g_aWn(_) {
            const t = _.component,
                n = _.handler,
                a = _.data,
                i = _.responseId,
                e = p.get(t);
            if (!e) return void console.warn(`[DOM] No event handlers for component '${t}'`);
            const o = e.get(n);
            if (!o) return void console.warn(`[DOM] No handler '${n}' for component '${t}'`);
            let g = null;
            try {
                g = o(a)
            } catch (e) {
                return console.error(`Exception in '${t}' handler '${n}':`, e), void(null !== i && this.g_aWq(i, !1, "" + e))
            }
            null !== i && (g && g.then ? g.then(e => this.g_aWq(i, !0, e)).catch(e => {
                console.error(`Rejection from '${t}' handler '${n}':`, e), this.g_aWq(i, !1, "" + e)
            }) : this.g_aWq(i, !0, g))
        }
        g_aWq(e, a, _) {
            let g;
            _ && _.transferables && (g = _.transferables), this.g_aVz.postMessage({
                type: "result",
                responseId: e,
                isOk: a,
                result: _
            }, g)
        }
        g_aWo(_) {
            const a = _.responseId,
                g = _.isOk,
                t = _.result,
                n = h.get(a);
            g ? n.resolve(t) : n.reject(t), h.delete(a)
        }
        g_aU_(e, a, _) {
            let g = p.get(e);
            if (g || (g = new Map, p.set(e, g)), g.has(a)) throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);
            g.set(a, _)
        }
        static g_aWr(e) {
            if (i.includes(e)) throw new Error("DOM handler already added");
            i.push(e)
        }
        g_aWj() {
            for (const e of this.g_aVF)
                if ("runtime" === e.g_aVb()) return void(this.g_aVG = e);
            throw new Error("cannot find runtime DOM handler")
        }
        g_aVV(e) {
            this.g_aUT("debugger", "message", e)
        }
        g_aWp() {
            for (const e of this.g_aVF) e.g_aUR()
        }
        static g_apG() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
        }
        async g_aWs() {
            return await this.g_aUV("runtime", "get-remote-preview-status-info")
        }
        g_aVc(e) {
            this.g_aVJ.push(e), this.g_atr()
        }
        g_aVd(e) {
            const a = this.g_aVJ.indexOf(e);
            if (-1 === a) throw new Error("invalid callback");
            this.g_aVJ.splice(a, 1), this.g_aVJ.length || this.g_ats()
        }
        g_atr() {
            -1 === this.g_apb && this.g_aVJ.length && (this.g_apb = requestAnimationFrame(this.g_aVH))
        }
        g_ats() {
            -1 !== this.g_apb && (cancelAnimationFrame(this.g_apb), this.g_apb = -1)
        }
        g_aVI() {
            this.g_apb = -1;
            for (const e of this.g_aVJ) e();
            this.g_atr()
        }
        g_aWt(e) {
            this.g_aVG.g_aWt(e)
        }
        g_aWu(e) {
            this.g_aVG.g_aWu(e)
        }
        g_aWv() {
            this.g_aVG.g_aWv()
        }
        g_aLb(e) {
            this.g_aVG.g_aLb(e)
        }
        g_CA(e) {
            return !!d[e]
        }
        async g_ahm(e) {
            const a = await this.g_aUV("runtime", "opus-decode", {
                arrayBuffer: e
            }, null, [e]);
            return new Float32Array(a)
        }
        g_ge(e) {
            return /^(?:[a-z]+:)?\/\//.test(e) || "data:" === e.substr(0, 5) || "blob:" === e.substr(0, 5)
        }
        g_gf(e) {
            return !this.g_ge(e)
        }
        async g_aVO(e) {
            const a = e.filename;
            switch (e.as) {
                case "text":
                    return await this.g_Ce(a);
                case "buffer":
                    return await this.g_Cd(a);
                default:
                    throw new Error("unsupported type");
            }
        }
        g_aWw() {
            const e = window.cordova && window.cordova.plugins && window.cordova.plugins.permissions;
            if ("object" != typeof e) throw new Error("Permission API is not loaded");
            return e
        }
        g_aWx(e, a) {
            const _ = e[a];
            if ("string" != typeof _) throw new Error("Invalid permission name");
            return _
        }
        g_aWy(e) {
            const a = this.g_aWw();
            return new Promise((_, g) => a.checkPermission(this.g_aWx(a, e), e => _(!!e.hasPermission), g))
        }
        g_aHJ(e) {
            const a = this.g_aWw();
            return new Promise((_, g) => a.requestPermission(this.g_aWx(a, e), e => _(!!e.hasPermission), g))
        }
        async g_aWz(e) {
            if ("cordova" !== this.g_auf()) return !0;
            if (this.g_asU()) return !0;
            for (const _ of e) {
                const e = await this.g_aWy(_);
                if (e) continue;
                const a = await this.g_aHJ(_);
                if (!1 === a) return !1
            }
            return !0
        }
        async g_aWA(...e) {
            if (!1 === (await this.g_aWz(e))) throw new Error("Permission not granted")
        }
        g_aWB(e) {
            const _ = window.cordova.file.applicationDirectory + "www/" + e.toLowerCase();
            return new Promise((e, a) => {
                window.resolveLocalFileSystemURL(_, _ => {
                    _.file(e, a)
                }, a)
            })
        }
        async g_Ce(e) {
            const a = await this.g_aWB(e);
            return await t(a)
        }
        g_aWC() {
            if (g.length && !(8 <= u)) {
                u++;
                const e = g.shift();
                this.g_aWD(e.filename, e.g_aWE, e.g_aWF)
            }
        }
        g_Cd(e) {
            return new Promise((_, t) => {
                g.push({
                    filename: e,
                    g_aWE: e => {
                        u--, this.g_aWC(), _(e)
                    },
                    g_aWF: e => {
                        u--, this.g_aWC(), t(e)
                    }
                }), this.g_aWC()
            })
        }
        async g_aWD(_, a, e) {
            try {
                const g = await this.g_aWB(_),
                    t = await r(g);
                a(t)
            } catch (_) {
                e(_)
            }
        }
        async g_aVR() {
            const e = [];
            for (const [a, _] of Object.entries(this.g_aVM)) e.push(this.g_aWG(a, _));
            await Promise.all(e)
        }
        async g_aWG(e, a) {
            if ("object" == typeof a) this.g_aVM[e] = new Blob([a.str], {
                type: a.type
            }), this.g_aVN[e] = a.str;
            else {
                let _ = await this.g_aWH(a);
                _ || (_ = this.g_aWI(a)), this.g_aVM[e] = _
            }
        }
        async g_aWH(e) {
            try {
                const a = await fetch(e);
                return await a.blob()
            } catch (e) {
                return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.", e), null
            }
        }
        g_aWI(e) {
            const a = this.g_aWJ(e);
            return this.g_aWK(a.data, a.g_gx)
        }
        g_aWJ(_) {
            const a = _.indexOf(",");
            if (0 > a) throw new URIError("expected comma in data: uri");
            const t = _.substring(5, a),
                n = _.substring(a + 1),
                o = t.split(";"),
                e = o[0] || "",
                r = o[1],
                g = o[2];
            let s;
            return s = "base64" === r || "base64" === g ? atob(n) : decodeURIComponent(n), {
                g_gx: e,
                data: s
            }
        }
        g_aWK(_, a) {
            let t, n, i = _.length,
                e = i >> 2,
                o = new Uint8Array(i),
                g = new Uint32Array(o.buffer, 0, e);
            for (t = 0, n = 0; t < e; ++t) g[t] = _.charCodeAt(n++) | _.charCodeAt(n++) << 8 | _.charCodeAt(n++) << 16 | _.charCodeAt(n++) << 24;
            for (let e = 3 & i; e--;) o[n] = _.charCodeAt(n), ++n;
            return new Blob([o], {
                type: a
            })
        }
        g_aVY() {
            let e = null;
            const _ = new Promise(a => e = a),
                g = new ArrayBuffer(1),
                t = new MessageChannel;
            return t.port2.onmessage = a => {
                a.data && a.data.arrayBuffer || (this.g_aVL = !0, console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")), e()
            }, t.port1.postMessage({
                arrayBuffer: g
            }, [g]), _
        }
    }
} {
    function _(e) {
        return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents
    }

    function t(e) {
        return new Promise((a, _) => {
            // const g = document.createElement("link");
            // g.onload = () => a(g), g.onerror = e => _(e), g.rel = "stylesheet", g.href = e, document.head.appendChild(g)
            // console.log(g.href)
        })
    }

    function a(e) {
        return new Promise((a, _) => {
            const g = new Image;
            g.onload = () => a(g), g.onerror = e => _(e), g.src = e
        })
    }
    async function s(e) {
        const _ = URL.createObjectURL(e);
        try {
            return await a(_)
        } finally {
            URL.revokeObjectURL(_)
        }
    }

    function d(e) {
        return new Promise((_, g) => {
            let a = new FileReader;
            a.onload = e => _(e.target.result), a.onerror = e => g(e), a.readAsText(e)
        })
    }
    async function u(e, _, t) {
        if (!/firefox/i.test(navigator.userAgent)) return await s(e);
        let n = await d(e);
        const o = new DOMParser,
            g = o.parseFromString(n, "image/svg+xml"),
            r = g.documentElement;
        if (r.hasAttribute("width") && r.hasAttribute("height")) {
            const a = r.getAttribute("width"),
                _ = r.getAttribute("height");
            if (!a.includes("%") && !_.includes("%")) return await s(e)
        }
        r.setAttribute("width", _ + "px"), r.setAttribute("height", t + "px");
        const i = new XMLSerializer;
        return n = i.serializeToString(g), e = new Blob([n], {
            type: "image/svg+xml"
        }), await s(e)
    }

    function e(e) {
        do {
            if (e.parentNode && e.hasAttribute("contenteditable")) return !0;
            e = e.parentNode
        } while (e);
        return !1
    }

    function g(e) {
        const a = e.target.tagName.toLowerCase();
        o.has(a) && e.preventDefault()
    }

    function f(e) {
        (e.metaKey || e.ctrlKey) && e.preventDefault()
    }

    function i() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (e) {
            return !1
        }
    }

    function c() {
        const _ = document.activeElement;
        if (!_) return !1;
        const a = _.tagName.toLowerCase(),
            g = new Set(["email", "number", "password", "search", "tel", "text", "url"]);
        return "textarea" === a || ("input" === a ? g.has(_.type.toLowerCase() || "text") : e(_))
    }
    const h = new Map([
            ["OSLeft", "MetaLeft"],
            ["OSRight", "MetaRight"]
        ]),
        l = {
            dispatchRuntimeEvent: !0,
            dispatchUserScriptEvent: !0
        },
        m = {
            dispatchUserScriptEvent: !0
        },
        n = {
            dispatchRuntimeEvent: !0
        },
        o = new Set(["canvas", "body", "html"]);
    self.C3_GetSvgImageSize = async function(e) {
        const _ = await s(e);
        if (0 < _.width && 0 < _.height) return [_.width, _.height];
        else {
            _.style.position = "absolute", _.style.left = "0px", _.style.top = "0px", _.style.visibility = "hidden", document.body.appendChild(_);
            const e = _.getBoundingClientRect();
            return document.body.removeChild(_), [e.width, e.height]
        }
    }, self.C3_RasterSvgImageBlob = async function(_, a, t, n, o) {
        const e = await u(_, a, t),
            g = document.createElement("canvas");
        g.width = n, g.height = o;
        const r = g.getContext("2d");
        return r.drawImage(e, 0, 0, a, t), g
    };
    let p = !1;
    document.addEventListener("pause", () => p = !0), document.addEventListener("resume", () => p = !1);
    const v = class extends g_aUN {
        constructor(_) {
            super(_, "runtime"), this.g_aWL = !0, this.g_aWM = -1, this.g_aWN = "any", this.g_aWO = !1, this.g_aWP = !1, this.g_aWQ = null, this.g_aWR = null, this.g_aWS = null, _.g_aU_("canvas", "update-size", e => this.g_aWT(e)), _.g_aU_("runtime", "invoke-download", e => this.g_aWU(e)), _.g_aU_("runtime", "raster-svg-image", e => this.g_aWV(e)), _.g_aU_("runtime", "get-svg-image-size", e => this.g_aWW(e)), _.g_aU_("runtime", "set-target-orientation", e => this.g_aWX(e)), _.g_aU_("runtime", "register-sw", () => this.g_aWY()), _.g_aU_("runtime", "post-to-debugger", e => this.g_aWZ(e)), _.g_aU_("runtime", "go-to-script", e => this.g_aWZ(e)), _.g_aU_("runtime", "before-start-ticking", () => this.g_aW_()), _.g_aU_("runtime", "debug-highlight", e => this.g_aW$(e)), _.g_aU_("runtime", "enable-device-orientation", () => this.g_aXa()), _.g_aU_("runtime", "enable-device-motion", () => this.g_aXb()), _.g_aU_("runtime", "add-stylesheet", e => this.g_aXc(e)), _.g_aU_("runtime", "alert", e => this.g_aXd(e));
            const t = new Set(["input", "textarea", "datalist"]);
            window.addEventListener("contextmenu", _ => {
                const a = _.target,
                    g = a.tagName.toLowerCase();
                t.has(g) || e(a) || _.preventDefault()
            });
            const a = _.g_aVQ();
            window.addEventListener("selectstart", g), window.addEventListener("gesturehold", g), a.addEventListener("selectstart", g), a.addEventListener("gesturehold", g), window.addEventListener("touchstart", g, {
                passive: !1
            }), "undefined" == typeof PointerEvent ? a.addEventListener("touchstart", g) : (window.addEventListener("pointerdown", g, {
                passive: !1
            }), a.addEventListener("pointerdown", g)), this.g_aXe = 0, window.addEventListener("mousedown", e => {
                1 === e.button && e.preventDefault()
            }), window.addEventListener("mousewheel", f, {
                passive: !1
            }), window.addEventListener("wheel", f, {
                passive: !1
            }), window.addEventListener("resize", () => this.g_aps()), _.g_aug() && window.addEventListener("focusout", () => {
                c() || (document.scrollingElement.scrollTop = 0)
            }), this.g_aXf = new Set, this.g_aXg = new WeakSet, this.g_aKh = !1
        }
        g_aW_() {
            return "cordova" === this.g_asA.g_auf() ? (document.addEventListener("pause", () => this.g_asw(!0)), document.addEventListener("resume", () => this.g_asw(!1))) : document.addEventListener("visibilitychange", () => this.g_asw(document.hidden)), {
                isSuspended: !!(document.hidden || p)
            }
        }
        g_aUR() {
            window.addEventListener("focus", () => this.g_aXh("window-focus")), window.addEventListener("blur", () => {
                this.g_aXh("window-blur", {
                    parentHasFocus: i()
                }), this.g_aXe = 0
            }), window.addEventListener("fullscreenchange", () => this.g_apt()), window.addEventListener("webkitfullscreenchange", () => this.g_apt()), window.addEventListener("mozfullscreenchange", () => this.g_apt()), window.addEventListener("fullscreenerror", e => this.g_apu(e)), window.addEventListener("webkitfullscreenerror", e => this.g_apu(e)), window.addEventListener("mozfullscreenerror", e => this.g_apu(e)), window.addEventListener("keydown", e => this.g_aXi("keydown", e)), window.addEventListener("keyup", e => this.g_aXi("keyup", e)), window.addEventListener("dblclick", e => this.g_aXj("dblclick", e, l)), window.addEventListener("wheel", e => this.g_aXk("wheel", e)), "undefined" == typeof PointerEvent ? (window.addEventListener("mousedown", e => {
                this.g_aXl(e), this.g_aXm("pointerdown", e)
            }), window.addEventListener("mousemove", e => this.g_aXm("pointermove", e)), window.addEventListener("mouseup", e => this.g_aXm("pointerup", e)), window.addEventListener("touchstart", e => {
                this.g_aXl(e), this.g_aXn("pointerdown", e)
            }), window.addEventListener("touchmove", e => this.g_aXn("pointermove", e)), window.addEventListener("touchend", e => this.g_aXn("pointerup", e)), window.addEventListener("touchcancel", e => this.g_aXn("pointercancel", e))) : (window.addEventListener("pointerdown", e => {
                this.g_aXl(e), this.g_aXo("pointerdown", e)
            }), this.g_asA.g_aUX() && "undefined" != typeof window.onpointerrawupdate && self === self.top ? (this.g_aWR = new g_m_(() => this.g_aXp(), 5), this.g_aWR.g_ni(!0), window.addEventListener("pointerrawupdate", e => this.g_aXq(e))) : window.addEventListener("pointermove", e => this.g_aXo("pointermove", e)), window.addEventListener("pointerup", e => this.g_aXo("pointerup", e)), window.addEventListener("pointercancel", e => this.g_aXo("pointercancel", e)));
            const e = () => this.g_aWv();
            window.addEventListener("pointerup", e, !0), window.addEventListener("touchend", e, !0), window.addEventListener("click", e, !0), window.addEventListener("keydown", e, !0), window.addEventListener("gamepadconnected", e, !0)
        }
        g_aXh(e, a) {
            this.g_aUS(e, a || null, n)
        }
        g_aXr() {
            return Math.max(window.innerWidth, 1)
        }
        g_aXs() {
            return Math.max(window.innerHeight, 1)
        }
        g_aps() {
            const e = this.g_aXr(),
                a = this.g_aXs();
            this.g_aXh("window-resize", {
                innerWidth: e,
                innerHeight: a,
                devicePixelRatio: window.devicePixelRatio
            }), this.g_asA.g_aug() && (-1 !== this.g_aWM && clearTimeout(this.g_aWM), this.g_aXt(e, a, 0))
        }
        g_aXu(e, a, _) {
            -1 !== this.g_aWM && clearTimeout(this.g_aWM), this.g_aWM = setTimeout(() => this.g_aXt(e, a, _), 48)
        }
        g_aXt(_, a, g) {
            const t = this.g_aXr(),
                n = this.g_aXs();
            this.g_aWM = -1, t != _ || n != a ? this.g_aXh("window-resize", {
                innerWidth: t,
                innerHeight: n,
                devicePixelRatio: window.devicePixelRatio
            }) : 10 > g && this.g_aXu(t, n, g + 1)
        }
        g_aWX(e) {
            this.g_aWN = e.targetOrientation
        }
        g_aXv() {
            const e = this.g_aWN;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e).catch(e => console.warn("[Construct 3] Failed to lock orientation: ", e));
            else try {
                let a = !1;
                screen.lockOrientation ? a = screen.lockOrientation(e) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(e) : screen.mozLockOrientation ? a = screen.mozLockOrientation(e) : screen.msLockOrientation && (a = screen.msLockOrientation(e)), a || console.warn("[Construct 3] Failed to lock orientation")
            } catch (e) {
                console.warn("[Construct 3] Failed to lock orientation: ", e)
            }
        }
        g_apt() {
            const e = g_aVw.g_apG();
            e && "any" !== this.g_aWN && this.g_aXv(), this.g_aUS("fullscreenchange", {
                isFullscreen: e,
                innerWidth: this.g_aXr(),
                innerHeight: this.g_aXs()
            })
        }
        g_apu(e) {
            console.warn("[Construct 3] Fullscreen request failed: ", e), this.g_aUS("fullscreenerror", {
                isFullscreen: g_aVw.g_apG(),
                innerWidth: this.g_aXr(),
                innerHeight: this.g_aXs()
            })
        }
        g_asw(e) {
            e ? this.g_asA.g_ats() : this.g_asA.g_atr(), this.g_aUS("visibilitychange", {
                hidden: e
            })
        }
        g_aXi(e, a) {
            "Backspace" === a.key && g(a);
            const _ = h.get(a.code) || a.code;
            this.g_aUW(e, {
                code: _,
                key: a.key,
                which: a.which,
                repeat: a.repeat,
                altKey: a.altKey,
                ctrlKey: a.ctrlKey,
                metaKey: a.metaKey,
                shiftKey: a.shiftKey,
                timeStamp: a.timeStamp
            }, l)
        }
        g_aXk(e, a) {
            this.g_aUS(e, {
                clientX: a.clientX,
                clientY: a.clientY,
                pageX: a.pageX,
                pageY: a.pageY,
                deltaX: a.deltaX,
                deltaY: a.deltaY,
                deltaZ: a.deltaZ,
                deltaMode: a.deltaMode,
                timeStamp: a.timeStamp
            }, l)
        }
        g_aXj(a, e, g) {
            _(e) || this.g_aUW(a, {
                button: e.button,
                buttons: e.buttons,
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                timeStamp: e.timeStamp
            }, g)
        }
        g_aXm(a, e) {
            if (!_(e)) {
                const _ = this.g_aXe;
                "pointerdown" === a && 0 !== _ ? a = "pointermove" : "pointerup" == a && 0 !== e.buttons && (a = "pointermove"), this.g_aUW(a, {
                    pointerId: 1,
                    pointerType: "mouse",
                    button: e.button,
                    buttons: e.buttons,
                    lastButtons: _,
                    clientX: e.clientX,
                    clientY: e.clientY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    timeStamp: e.timeStamp
                }, l), this.g_aXe = e.buttons, this.g_aXj(e.type, e, m)
            }
        }
        g_aXo(e, a) {
            this.g_aWR && "pointermove" !== e && this.g_aWR.g_lM();
            let _ = 0;
            if ("mouse" === a.pointerType && (_ = this.g_aXe), this.g_aUW(e, {
                    pointerId: a.pointerId,
                    pointerType: a.pointerType,
                    button: a.button,
                    buttons: a.buttons,
                    lastButtons: _,
                    clientX: a.clientX,
                    clientY: a.clientY,
                    pageX: a.pageX,
                    pageY: a.pageY,
                    width: a.width || 0,
                    height: a.height || 0,
                    pressure: a.pressure || 0,
                    tangentialPressure: a.tangentialPressure || 0,
                    tiltX: a.tiltX || 0,
                    tiltY: a.tiltY || 0,
                    twist: a.twist || 0,
                    timeStamp: a.timeStamp
                }, l), "mouse" === a.pointerType) {
                let _ = "mousemove";
                "pointerdown" === e ? _ = "mousedown" : "pointerup" == e && (_ = "pointerup"), this.g_aXj(_, a, m), this.g_aXe = a.buttons
            }
        }
        g_aXq(e) {
            this.g_aWS = e, this.g_aWR.g_nm()
        }
        g_aXp() {
            this.g_aXo("pointermove", this.g_aWS), this.g_aWS = null
        }
        g_aXn(e, a) {
            for (let _ = 0, g = a.changedTouches.length; _ < g; ++_) {
                const g = a.changedTouches[_];
                this.g_aUW(e, {
                    pointerId: g.identifier,
                    pointerType: "touch",
                    button: 0,
                    buttons: 0,
                    lastButtons: 0,
                    clientX: g.clientX,
                    clientY: g.clientY,
                    pageX: g.pageX,
                    pageY: g.pageY,
                    width: 2 * (g.radiusX || g.webkitRadiusX || 0),
                    height: 2 * (g.radiusY || g.webkitRadiusY || 0),
                    pressure: g.force || g.webkitForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: g.rotationAngle || 0,
                    timeStamp: a.timeStamp
                }, l)
            }
        }
        g_aXl(e) {
            window !== window.top && window.focus(), this.g_aXw(e.target) && document.activeElement && !this.g_aXw(document.activeElement) && document.activeElement.blur()
        }
        g_aXw(e) {
            return !e || e === document || e === window || e === document.body || "canvas" === e.tagName.toLowerCase()
        }
        g_aXa() {
            this.g_aWO || (this.g_aWO = !0, window.addEventListener("deviceorientation", e => this.g_aIc(e)))
        }
        g_aXb() {
            this.g_aWP || (this.g_aWP = !0, window.addEventListener("devicemotion", e => this.g_aId(e)))
        }
        g_aIc(e) {
            this.g_aUS("deviceorientation", {
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp
            }, l)
        }
        g_aId(_) {
            let a = null;
            const t = _.acceleration;
            t && (a = {
                x: t.x || 0,
                y: t.y || 0,
                z: t.z || 0
            });
            let n = null;
            const i = _.accelerationIncludingGravity;
            i && (n = {
                x: i.x || 0,
                y: i.y || 0,
                z: i.z || 0
            });
            let e = null;
            const o = _.rotationRate;
            o && (e = {
                alpha: o.alpha || 0,
                beta: o.beta || 0,
                gamma: o.gamma || 0
            }), this.g_aUS("devicemotion", {
                acceleration: a,
                accelerationIncludingGravity: n,
                rotationRate: e,
                interval: _.interval,
                timeStamp: _.timeStamp
            }, l)
        }
        g_aWT(e) {
            const a = this.g_aVa(),
                _ = a.g_aVQ();
            _.style.width = e.styleWidth + "px", _.style.height = e.styleHeight + "px", _.style.marginLeft = e.marginLeft + "px", _.style.marginTop = e.marginTop + "px", a.g_aVX(), this.g_aWL && (_.style.display = "", this.g_aWL = !1)
        }
        g_aWU(_) {
            const g = _.url,
                t = _.filename,
                n = document.createElement("a"),
                e = document.body;
            n.textContent = t, n.href = g, n.download = t, e.appendChild(n), n.click(), e.removeChild(n)
        }
        async g_aWV(_) {
            const a = _.blob,
                t = _.imageWidth,
                n = _.imageHeight,
                o = _.surfaceWidth,
                e = _.surfaceHeight,
                r = _.imageBitmapOpts,
                g = await self.C3_RasterSvgImageBlob(a, t, n, o, e);
            let s;
            return s = r ? await createImageBitmap(g, r) : await createImageBitmap(g), {
                imageBitmap: s,
                transferables: [s]
            }
        }
        async g_aWW(e) {
            return await self.C3_GetSvgImageSize(e.blob)
        }
        async g_aXc(e) {
            await t(e.url)
        }
        g_aWv() {
            const e = [...this.g_aXf];
            if (this.g_aXf.clear(), !this.g_aKh)
                for (const _ of e) {
                    const e = _.play();
                    e && e.catch(() => {
                        this.g_aXg.has(_) || this.g_aXf.add(_)
                    })
                }
        }
        g_aWt(e) {
            if ("function" != typeof e.play) throw new Error("missing play function");
            this.g_aXg.delete(e);
            let a;
            try {
                a = e.play()
            } catch (a) {
                return void this.g_aXf.add(e)
            }
            a && a.catch(() => {
                this.g_aXg.has(e) || this.g_aXf.add(e)
            })
        }
        g_aWu(e) {
            this.g_aXf.delete(e), this.g_aXg.add(e)
        }
        g_aLb(e) {
            this.g_aKh = !!e
        }
        g_aW$(e) {
            const a = e.show;
            if (!a) return void(this.g_aWQ && (this.g_aWQ.style.display = "none"));
            this.g_aWQ || (this.g_aWQ = document.createElement("div"), this.g_aWQ.id = "inspectOutline", document.body.appendChild(this.g_aWQ));
            const _ = this.g_aWQ;
            _.style.display = "", _.style.left = e.left - 1 + "px", _.style.top = e.top - 1 + "px", _.style.width = e.width + 2 + "px", _.style.height = e.height + 2 + "px", _.textContent = e.name
        }
        g_aWY() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        g_aWZ(e) {
            window.c3_postToMessagePort && (e.from = "runtime", window.c3_postToMessagePort(e))
        }
        g_Ws(e, a) {
            return this.g_aUU("js-invoke-function", {
                name: e,
                params: a
            })
        }
        g_aXd(e) {
            alert(e.message)
        }
    };
    g_aVw.g_aWr(v)
} {
    const e = document.currentScript.src;
    self.g_aVW = class {
        constructor(a) {
            this.g_aXx = a, this.g_aqu = e ? e.substr(0, e.lastIndexOf("/") + 1) : a.g_fl(), this.g_auO = Math.min(navigator.hardwareConcurrency || 2, 16), this.g_aXy = null, this.g_aXz = [], this.g_auM = null, this.g_aXA = null
        }
        async g_alx() {
            if (this.g_aXB) throw new Error("already initialised");
            this.g_aXB = !0;
            const e = this.g_aXx.g_aV$("dispatchworker.js");
            this.g_aXy = await this.g_aXx.g_aWa(e, this.g_aqu, {
                name: "DispatchWorker"
            });
            const a = new MessageChannel;
            this.g_auM = a.port1, this.g_aXy.postMessage({
                type: "_init",
                "in-port": a.port2
            }, [a.port2]), this.g_aXA = await this.g_aWm()
        }
        async g_aWm() {
            const _ = this.g_aXz.length,
                a = this.g_aXx.g_aV$("jobworker.js"),
                g = await this.g_aXx.g_aWa(a, this.g_aqu, {
                    name: "JobWorker" + _
                }),
                t = new MessageChannel,
                n = new MessageChannel;
            return this.g_aXy.postMessage({
                type: "_addJobWorker",
                port: t.port1
            }, [t.port1]), g.postMessage({
                type: "init",
                number: _,
                "dispatch-port": t.port2,
                "output-port": n.port2
            }, [t.port2, n.port2]), this.g_aXz.push(g), n.port1
        }
        g_aWe() {
            return {
                inputPort: this.g_auM,
                outputPort: this.g_aXA,
                maxNumWorkers: this.g_auO
            }
        }
        g_aWi() {
            return [this.g_auM, this.g_aXA]
        }
    }
}
if ("use strict", window.C3_IsSupported) {
    "undefined" != typeof OffscreenCanvas;
    window.c3_runtimeInterface = new g_aVw({
        g_aVy: !1,
        g_aWf: "workermain.js",
        g_aVS: ["./scripts/c3runtime.1.js"],
        g_aVB: "scripts/",
        g_aWg: [],
        g_aVK: "html5"
    })
} {
    const e = class extends g_aUN {
        constructor(e) {
            super(e, "mouse"), this.g_aUZ("cursor", e => this.g_aXC(e))
        }
        g_aXC(e) {
            document.documentElement.style.cursor = e
        }
    };
    g_aVw.g_aWr(e)
} {
    const e = class extends g_aUN {
        constructor(e) {
            super(e, "touch"), this.g_aUZ("request-permission", e => this.g_aXD(e))
        }
        async g_aXD(e) {
            const a = e.type;
            let _ = !0;
            0 === a ? _ = await this.g_aXE() : 1 === a && (_ = await this.g_aXF()), this.g_aUS("permission-result", {
                type: a,
                result: _
            })
        }
        async g_aXE() {
            if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
            try {
                const e = await self.DeviceOrientationEvent.requestPermission();
                return "granted" === e
            } catch (e) {
                return console.warn("[Touch] Failed to request orientation permission: ", e), !1
            }
        }
        async g_aXF() {
            if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
            try {
                const e = await self.DeviceMotionEvent.requestPermission();
                return "granted" === e
            } catch (e) {
                return console.warn("[Touch] Failed to request motion permission: ", e), !1
            }
        }
    };
    g_aVw.g_aWr(e)
} {
    function e(e, _) {
        return e.length === _.length && (e === _ || e.toLowerCase() === _.toLowerCase())
    }
    const a = class extends g_aUN {
        constructor(e) {
            super(e, "audio"), this.g_aXG = null, this.g_aXH = null, this.g_aXI = !1, this.g_aXJ = !1, this.g_aXK = () => this.g_aXL(), this.g_aXM = [], this.g_aXN = [], this.g_aXO = null, this.g_aXP = "", this.g_aXQ = -1, this.g_aXR = new Map, this.g_aKg = 1, this.g_aKh = !1, this.g_aJV = 0, this.g_alt = 1, this.g_arV = 0, this.g_aJY = "HRTF", this.g_aJZ = "inverse", this.g_aXS = 600, this.g_aKc = 1e4, this.g_aKd = 1, this.g_aXT = !1, this.g_aXU = !1, this.g_aXV = this.g_asA.g_CA("audio/webm; codecs=opus"), this.g_aXW = new Map, this.g_aXX = new Set, this.g_aXY = !1, this.g_aXZ = "", this.g_aX_ = null, self.C3Audio_OnMicrophoneStream = (e, a) => this.g_aX$(e, a), this.g_aYa = null, self.C3Audio_GetOutputStream = () => this.g_aYb(), self.C3Audio_DOMInterface = this, this.g_aU$([
                ["create-audio-context", e => this.g_aYc(e)],
                ["play", e => this.g_aYd(e)],
                ["stop", e => this.g_aQa(e)],
                ["stop-all", () => this.g_aYe()],
                ["set-paused", e => this.g_aYf(e)],
                ["set-volume", e => this.g_aYg(e)],
                ["fade-volume", e => this.g_aYh(e)],
                ["set-master-volume", e => this.g_aYi(e)],
                ["set-muted", e => this.g_aYj(e)],
                ["set-silent", e => this.g_aYk(e)],
                ["set-looping", e => this.g_aYl(e)],
                ["set-playback-rate", e => this.g_aYm(e)],
                ["seek", e => this.g_aYn(e)],
                ["preload", e => this.g_aYo(e)],
                ["unload", e => this.g_HN(e)],
                ["unload-all", () => this.g_aYp()],
                ["set-suspended", e => this.g_aYq(e)],
                ["add-effect", e => this.g_aYr(e)],
                ["set-effect-param", e => this.g_aYs(e)],
                ["remove-effects", e => this.g_aYt(e)],
                ["tick", e => this.g_Ke(e)],
                ["load-state", e => this.g_aYu(e)]
            ])
        }
        async g_aYc(e) {
            e.isiOSCordova && (this.g_aXT = !0), this.g_aJV = e.timeScaleMode, this.g_aJY = ["equalpower", "HRTF", "soundfield"][e.panningModel], this.g_aJZ = ["linear", "inverse", "exponential"][e.distanceModel], this.g_aXS = e.refDistance, this.g_aKc = e.maxDistance, this.g_aKd = e.rolloffFactor;
            const a = {
                latencyHint: e.latencyHint
            };
            if ("undefined" != typeof AudioContext) this.g_aXG = new AudioContext(a);
            else if ("undefined" != typeof webkitAudioContext) this.g_aXG = new webkitAudioContext(a);
            else throw new Error("Web Audio API not supported");
            this.g_aYv(), this.g_aXG.onstatechange = () => {
                "running" !== this.g_aXG.state && this.g_aYv()
            }, this.g_aXH = this.g_aXG.createGain(), this.g_aXH.connect(this.g_aXG.destination);
            const _ = e.listenerPos;
            this.g_aXG.listener.setPosition(_[0], _[1], _[2]), this.g_aXG.listener.setOrientation(0, 0, 1, 0, -1, 0), self.C3_GetAudioContextCurrentTime = () => this.g_aYw();
            try {
                await Promise.all(e.preloadList.map(e => this.g_aYx(e.originalUrl, e.url, e.type, !1)))
            } catch (e) {
                console.error("[Construct 3] Preloading sounds failed: ", e)
            }
            return {
                sampleRate: this.g_aXG.sampleRate
            }
        }
        g_aYv() {
            this.g_aXJ || (this.g_aXI = !1, window.addEventListener("pointerup", this.g_aXK, !0), window.addEventListener("touchend", this.g_aXK, !0), window.addEventListener("click", this.g_aXK, !0), window.addEventListener("keydown", this.g_aXK, !0), this.g_aXJ = !0)
        }
        g_aYy() {
            this.g_aXJ && (this.g_aXI = !0, window.removeEventListener("pointerup", this.g_aXK, !0), window.removeEventListener("touchend", this.g_aXK, !0), window.removeEventListener("click", this.g_aXK, !0), window.removeEventListener("keydown", this.g_aXK, !0), this.g_aXJ = !1)
        }
        g_aXL() {
            if (!this.g_aXI) {
                const e = this.g_aXG;
                "suspended" === e.state && e.resume && e.resume();
                const a = e.createBuffer(1, 220, 22050),
                    _ = e.createBufferSource();
                _.buffer = a, _.connect(e.destination), _.start(0), "running" === e.state && this.g_aYy()
            }
        }
        g_aJQ() {
            return this.g_aXG
        }
        g_aYw() {
            return this.g_aXG.currentTime
        }
        g_aJS() {
            return this.g_aXH
        }
        g_aYz(e) {
            const a = this.g_aXW.get(e.toLowerCase());
            return a ? a[0].g_aYA() : this.g_aJS()
        }
        g_aYB(e, _) {
            e = e.toLowerCase();
            let g = this.g_aXW.get(e);
            g || (g = [], this.g_aXW.set(e, g)), _.g_and(g.length), _.g_aYC(e), g.push(_), this.g_aYD(e)
        }
        g_aYD(e) {
            let a = this.g_aJS();
            const _ = this.g_aXW.get(e);
            if (_ && _.length) {
                a = _[0].g_aYA();
                for (let e = 0, a = _.length; e < a; ++e) {
                    const g = _[e];
                    e + 1 === a ? g.g_aYE(this.g_aJS()) : g.g_aYE(_[e + 1].g_aYA())
                }
            }
            for (const _ of this.g_aYF(e)) _.g_aYG(a);
            this.g_aX_ && this.g_aXZ === e && (this.g_aX_.disconnect(), this.g_aX_.connect(a))
        }
        g_aYH() {
            return this.g_aKg
        }
        g_aKM() {
            return this.g_aKh
        }
        g_aYI() {
            return this.g_aJV
        }
        g_Le() {
            return this.g_alt
        }
        g_Gt() {
            return this.g_arV
        }
        g_aYJ() {
            return this.g_aXT
        }
        g_aYK() {
            return this.g_aXV
        }
        g_aYL() {
            this.g_aXU = !0
        }
        g_aYM() {
            return this.g_aJY
        }
        g_aYN() {
            return this.g_aJZ
        }
        g_aYO() {
            return this.g_aXS
        }
        g_aYP() {
            return this.g_aKc
        }
        g_aYQ() {
            return this.g_aKd
        }
        g_aYR(e, a) {
            return a ? this.g_asA.g_ahm(e).then(e => {
                const a = this.g_aXG.createBuffer(1, e.length, 48e3),
                    _ = a.getChannelData(0);
                return _.set(e), a
            }) : new Promise((a, _) => {
                this.g_aXG.decodeAudioData(e, a, _)
            })
        }
        g_aWt(e) {
            this.g_asA.g_aWt(e)
        }
        g_aWu(e) {
            this.g_asA.g_aWu(e)
        }
        g_aYS(a) {
            let _ = 0;
            for (let g = 0, e = this.g_aXN.length; g < e; ++g) {
                const t = this.g_aXN[g];
                this.g_aXN[_] = t, t.g_aYT() === a ? t.g_er() : ++_
            }
            this.g_aXN.length = _
        }
        g_aYU() {
            let e = 0;
            for (let a = 0, _ = this.g_aXM.length; a < _; ++a) {
                const _ = this.g_aXM[a];
                this.g_aXM[e] = _, _.g_aYV() ? _.g_er() : ++e
            }
            this.g_aXM.length = e
        }* g_aYF(a) {
            if (a)
                for (const _ of this.g_aXN) e(_.g_aYW(), a) && (yield _);
            else this.g_aXO && !this.g_aXO.g_aYX() && (yield this.g_aXO)
        }
        async g_aYx(_, a, g, t, n) {
            for (const e of this.g_aXM)
                if (e.g_aYY() === a) return await e.g_Cp(), e;
            if (n) return null;
            t && (this.g_aXT || this.g_aXU) && this.g_aYU();
            const e = g_aYZ.g_sp(this, _, a, g, t);
            return this.g_aXM.push(e), await e.g_Cp(), e
        }
        async g_aY_(_, a, t, n, i) {
            for (const e of this.g_aXN)
                if (e.g_aYY() === a && (e.g_aY$() || i)) return e.g_aZa(n), e;
            const e = await this.g_aYx(_, a, t, i),
                o = e.g_ahC(n);
            return this.g_aXN.push(o), o
        }
        g_aZb(e) {
            let a = this.g_aXR.get(e);
            if (!a) {
                let _ = null;
                const g = new Promise(e => _ = e);
                a = {
                    g_aZc: 0,
                    promise: g,
                    resolve: _
                }, this.g_aXR.set(e, a)
            }
            a.g_aZc++
        }
        g_aZd(e) {
            const a = this.g_aXR.get(e);
            if (!a) throw new Error("expected pending tag");
            a.g_aZc--, 0 === a.g_aZc && (a.resolve(), this.g_aXR.delete(e))
        }
        g_aZe(e) {
            e || (e = this.g_aXP);
            const _ = this.g_aXR.get(e);
            return _ ? _.promise : Promise.resolve()
        }
        g_aZf() {
            if (0 < this.g_aXX.size) return void this.g_afl();
            for (const e of this.g_aXN)
                if (e.g_Ze()) return void this.g_afl()
        }
        g_Lg() {
            for (const a of this.g_aXX) a.g_Lg();
            const e = this.g_aYw();
            for (const a of this.g_aXN) a.g_Lg(e);
            const a = this.g_aXN.filter(a => a.g_Ze()).map(a => a.g_aZg());
            this.g_aUS("state", {
                tickCount: this.g_aXQ,
                audioInstances: a,
                analysers: [...this.g_aXX].map(a => a.g_aZh())
            }), 0 === a.length && 0 === this.g_aXX.size && this.g_aeX()
        }
        g_aZi(e, a, _) {
            this.g_aUS("trigger", {
                type: e,
                tag: a,
                aiid: _
            })
        }
        async g_aYd(_) {
            const a = _.originalUrl,
                t = _.url,
                n = _.type,
                o = _.isMusic,
                e = _.tag,
                r = _.isLooping,
                g = _.vol,
                s = _.pos,
                i = _.panning;
            let d = _.off;
            if (0 < d && !_.trueClock)
                if (this.g_aXG.getOutputTimestamp) {
                    const e = this.g_aXG.getOutputTimestamp();
                    d = d - e.performanceTime / 1e3 + e.contextTime
                } else d = d - performance.now() / 1e3 + this.g_aXG.currentTime;
            this.g_aXP = e, this.g_aZb(e);
            try {
                this.g_aXO = await this.g_aY_(a, t, n, e, o), i ? (this.g_aXO.g_aZj(!0), this.g_aXO.g_aZk(i.x, i.y, i.angle, i.innerAngle, i.outerAngle, i.outerGain), i.hasOwnProperty("uid") && this.g_aXO.g_aZl(i.uid)) : this.g_aXO.g_aZj(!1), this.g_aXO.g_No(r, g, s, d)
            } catch (e) {
                return void console.error("[Construct 3] Audio: error starting playback: ", e)
            } finally {
                this.g_aZd(e)
            }
            this.g_afl()
        }
        g_aQa(e) {
            const a = e.tag;
            for (const _ of this.g_aYF(a)) _.g_Kp()
        }
        g_aYe() {
            for (const e of this.g_aXN) e.g_Kp()
        }
        g_aYf(e) {
            const a = e.tag,
                _ = e.paused;
            for (const g of this.g_aYF(a)) _ ? g.g_aZm() : g.g_Nn();
            this.g_aZf()
        }
        g_aYg(e) {
            const a = e.tag,
                _ = e.vol;
            for (const g of this.g_aYF(a)) g.g_aKW(_)
        }
        async g_aYh(_) {
            const a = _.tag,
                g = _.vol,
                t = _.duration,
                n = _.stopOnEnd;
            await this.g_aZe(a);
            for (const e of this.g_aYF(a)) e.g_aKX(g, t, n);
            this.g_aZf()
        }
        g_aYi(e) {
            this.g_aKg = e.vol;
            for (const a of this.g_aXN) a.g_aZn()
        }
        g_aYj(e) {
            const a = e.tag,
                _ = e.isMuted;
            for (const g of this.g_aYF(a)) g.g_aKV(_)
        }
        g_aYk(e) {
            this.g_aKh = e.isSilent, this.g_asA.g_aLb(this.g_aKh);
            for (const a of this.g_aXN) a.g_aZo()
        }
        g_aYl(e) {
            const a = e.tag,
                _ = e.isLooping;
            for (const g of this.g_aYF(a)) g.g_aKU(_)
        }
        async g_aYm(e) {
            const a = e.tag,
                _ = e.rate;
            await this.g_aZe(a);
            for (const g of this.g_aYF(a)) g.g_MA(_)
        }
        async g_aYn(e) {
            const a = e.tag,
                _ = e.pos;
            await this.g_aZe(a);
            for (const g of this.g_aYF(a)) g.g_aLa(_)
        }
        async g_aYo(_) {
            const a = _.originalUrl,
                g = _.url,
                t = _.type,
                n = _.isMusic;
            try {
                await this.g_aY_(a, g, t, "", n)
            } catch (e) {
                console.error("[Construct 3] Audio: error preloading: ", e)
            }
        }
        async g_HN(_) {
            const a = _.url,
                g = _.type,
                t = _.isMusic,
                n = await this.g_aYx("", a, g, t, !0);
            if (n) {
                n.g_er();
                const e = this.g_aXM.indexOf(n); - 1 !== e && this.g_aXM.splice(e, 1)
            }
        }
        g_aYp() {
            for (const e of this.g_aXM) e.g_er();
            this.g_aXM.length = 0
        }
        g_aYq(e) {
            const a = e.isSuspended;
            !a && this.g_aXG.resume && this.g_aXG.resume();
            for (const _ of this.g_aXN) _.g_atq(a);
            a && this.g_aXG.suspend && this.g_aXG.suspend()
        }
        g_Ke(e) {
            if (this.g_alt = e.timeScale, this.g_arV = e.gameTime, this.g_aXQ = e.tickCount, 0 !== this.g_aJV)
                for (const e of this.g_aXN) e.g_aZp();
            const a = e.listenerPos;
            a && this.g_aXG.listener.setPosition(a[0], a[1], a[2]);
            for (const _ of e.instPans) {
                const e = _.uid;
                for (const a of this.g_aXN) a.g_Et() === e && a.g_aZq(_.x, _.y, _.angle)
            }
        }
        async g_aYr(_) {
            const a = _.type,
                g = _.tag,
                t = _.params;
            let n;
            if ("filter" === a) n = new g_aZr(this, ...t);
            else if ("delay" === a) n = new g_aZs(this, ...t);
            else if ("convolution" === a) {
                let a = null;
                try {
                    a = await this.g_aYx(_.bufferOriginalUrl, _.bufferUrl, _.bufferType, !1)
                } catch (e) {
                    return void console.log("[Construct 3] Audio: error loading convolution: ", e)
                }
                n = new g_aZt(this, a.g_aZu(), ...t), n.g_aZv(_.bufferOriginalUrl, _.bufferUrl, _.bufferType)
            } else if ("flanger" === a) n = new g_aZw(this, ...t);
            else if ("phaser" === a) n = new g_aZx(this, ...t);
            else if ("gain" === a) n = new g_aZy(this, ...t);
            else if ("tremolo" === a) n = new g_aZz(this, ...t);
            else if ("ringmod" === a) n = new g_aZA(this, ...t);
            else if ("distortion" === a) n = new g_aZB(this, ...t);
            else if ("compressor" === a) n = new g_aZC(this, ...t);
            else if ("analyser" === a) n = new g_aZD(this, ...t);
            else throw new Error("invalid effect type");
            this.g_aYB(g, n), this.g_aZE()
        }
        g_aYs(_) {
            const a = _.tag,
                t = _.index,
                n = _.param,
                i = _.value,
                e = _.ramp,
                o = _.time,
                g = this.g_aXW.get(a);
            !g || 0 > t || t >= g.length || (g[t].g_aZF(n, i, e, o), this.g_aZE())
        }
        g_aYt(e) {
            const a = e.tag.toLowerCase(),
                _ = this.g_aXW.get(a);
            if (_ && _.length) {
                for (const e of _) e.g_er();
                this.g_aXW.delete(a), this.g_aYD(a)
            }
        }
        g_aZG(e) {
            this.g_aXX.add(e), this.g_aZf()
        }
        g_aZH(e) {
            this.g_aXX.delete(e)
        }
        g_aZE() {
            this.g_aXY || (this.g_aXY = !0, Promise.resolve().then(() => this.g_aZI()))
        }
        g_aZI() {
            const e = {};
            for (const [a, _] of this.g_aXW) e[a] = _.map(e => e.g_aZg());
            this.g_aUS("fxstate", {
                fxstate: e
            }), this.g_aXY = !1
        }
        async g_aYu(e) {
            const _ = e.saveLoadMode;
            if (3 !== _)
                for (const e of this.g_aXN) e.g_aYV() && 1 === _ || !e.g_aYV() && 2 === _ || e.g_Kp();
            for (const _ of this.g_aXW.values())
                for (const e of _) e.g_er();
            this.g_aXW.clear(), this.g_alt = e.timeScale, this.g_arV = e.gameTime;
            const a = e.listenerPos;
            this.g_aXG.listener.setPosition(a[0], a[1], a[2]), this.g_aKh = e.isSilent, this.g_asA.g_aLb(this.g_aKh), this.g_aKg = e.masterVolume;
            const g = [];
            for (const a of Object.values(e.effects)) g.push(Promise.all(a.map(e => this.g_aYr(e))));
            await Promise.all(g), await Promise.all(e.playing.map(e => this.g_aZJ(e, _))), this.g_aZf()
        }
        async g_aZJ(_, a) {
            if (3 === a) return;
            const t = _.bufferOriginalUrl,
                n = _.bufferUrl,
                o = _.bufferType,
                e = _.isMusic,
                r = _.tag,
                g = _.isLooping,
                s = _.volume,
                i = _.playbackTime;
            if (e && 1 === a) return;
            if (!e && 2 === a) return;
            let d = null;
            try {
                d = await this.g_aY_(t, n, o, r, e)
            } catch (e) {
                return void console.error("[Construct 3] Audio: error loading audio state: ", e)
            }
            d.g_aZK(_.pan), d.g_No(g, s, i, 0), _.isPlaying || d.g_aZm(), d.g_aZL(_)
        }
        g_aX$(e, a) {
            this.g_aX_ && this.g_aX_.disconnect(), this.g_aXZ = a.toLowerCase(), this.g_aX_ = this.g_aXG.createMediaStreamSource(e), this.g_aX_.connect(this.g_aYz(this.g_aXZ))
        }
        g_aYb() {
            return this.g_aYa || (this.g_aYa = this.g_aXG.createMediaStreamDestination(), this.g_aXH.connect(this.g_aYa)), this.g_aYa.stream
        }
    };
    g_aVw.g_aWr(a)
}
"use strict", self.g_aYZ = class {
    constructor(_, a, g, t, n) {
        this.g_aZM = _, this.g_aZN = a, this.g_CQ = g, this.g_kU = t, this.g_aZO = n, this.g_aZP = "", this.g_aZQ = "not-loaded", this.g_CV = null
    }
    g_er() {
        this.g_aZQ = "not-loaded", this.g_aZM = null, this.g_CV = null
    }
    static g_sp(_, a, g, t, n) {
        const e = "audio/webm; codecs=opus" === t && !_.g_aYK();
        return n && e && _.g_aYL(), !n || _.g_aYJ() || e ? new g_aZR(_, a, g, t, n, e) : new g_aZS(_, a, g, t, n)
    }
    g_ahC(e) {
        return "html5" === this.g_aZP ? new g_aZT(this.g_aZM, this, e) : new g_aZU(this.g_aZM, this, e)
    }
    g_HF() {}
    g_Cp() {
        return this.g_CV || (this.g_CV = this.g_HF()), this.g_CV
    }
    g_CW() {}
    g_aZV() {}
    g_aZW() {
        return "failed" === this.g_aZQ
    }
    g_aJQ() {
        return this.g_aZM.g_aJQ()
    }
    g_aZX() {
        return this.g_aZP
    }
    g_aZY() {
        return this.g_aZN
    }
    g_aYY() {
        return this.g_CQ
    }
    g_aZZ() {
        return this.g_kU
    }
    g_aYV() {
        return this.g_aZO
    }
    g_ajp() {}
}, "use strict", self.g_aZS = class extends g_aYZ {
    constructor(_, a, g, t, n) {
        super(_, a, g, t, n), this.g_aZP = "html5", this.g_aZ_ = new Audio, this.g_aZ_.crossOrigin = "anonymous", this.g_aZ_.autoplay = !1, this.g_aZ_.preload = "auto", this.g_aZ$ = null, this.g_a_a = null, this.g_a_b = !1, this.g_aZ_.addEventListener("canplaythrough", () => this.g_a_b = !0), this.g_a_c = this.g_aJQ().createGain(), this.g_a_d = null, this.g_aZ_.addEventListener("canplay", () => {
            this.g_aZ$ && (this.g_aZQ = "loaded", this.g_aZ$(), this.g_aZ$ = null, this.g_a_a = null), this.g_a_d || !this.g_aZ_ || (this.g_a_d = this.g_aJQ().createMediaElementSource(this.g_aZ_), this.g_a_d.connect(this.g_a_c))
        }), this.onended = null, this.g_aZ_.addEventListener("ended", () => {
            this.onended && this.onended()
        }), this.g_aZ_.addEventListener("error", e => this.g_a_e(e))
    }
    g_er() {
        this.g_aZM.g_aYS(this), this.g_a_c.disconnect(), this.g_a_c = null, this.g_a_d.disconnect(), this.g_a_d = null, this.g_aZ_ && !this.g_aZ_.paused && this.g_aZ_.pause(), this.onended = null, this.g_aZ_ = null, super.g_er()
    }
    g_HF() {
        return this.g_aZQ = "loading", new Promise((e, a) => {
            this.g_aZ$ = e, this.g_a_a = a, this.g_aZ_.src = this.g_CQ
        })
    }
    g_a_e(e) {
        console.error(`[Construct 3] Audio '${this.g_CQ}' error: `, e), this.g_a_a && (this.g_aZQ = "failed", this.g_a_a(e), this.g_aZ$ = null, this.g_a_a = null)
    }
    g_CW() {
        const e = 4 <= this.g_aZ_.readyState;
        return e && (this.g_a_b = !0), e || this.g_a_b
    }
    g_aZV() {
        return this.g_CW()
    }
    g_a_f() {
        return this.g_aZ_
    }
    g_a_g() {
        return this.g_a_c
    }
    g_ajp() {
        return this.g_aZ_.duration
    }
}, "use strict", self.g_aZR = class extends g_aYZ {
    constructor(_, a, g, t, n, e) {
        super(_, a, g, t, n), this.g_aZP = "webaudio", this.g_a_h = null, this.g_a_i = null, this.g_a_j = !!e
    }
    g_er() {
        this.g_aZM.g_aYS(this), this.g_a_h = null, this.g_a_i = null, super.g_er()
    }
    async g_a_k() {
        if (this.g_a_h) return this.g_a_h;
        const e = this.g_aZM.g_aVa();
        if ("cordova" === e.g_auf() && e.g_gf(this.g_CQ)) this.g_a_h = await e.g_Cd(this.g_CQ);
        else {
            const e = await fetch(this.g_CQ);
            if (!e.ok) throw new Error(`error fetching audio data: ${e.status} ${e.statusText}`);
            this.g_a_h = await e.arrayBuffer()
        }
    }
    async g_a_l() {
        return this.g_a_i ? this.g_a_i : void(this.g_a_i = await this.g_aZM.g_aYR(this.g_a_h, this.g_a_j), this.g_a_h = null)
    }
    async g_HF() {
        try {
            this.g_aZQ = "loading", await this.g_a_k(), await this.g_a_l(), this.g_aZQ = "loaded"
        } catch (e) {
            this.g_aZQ = "failed", console.error(`[Construct 3] Failed to load audio '${this.g_CQ}': `, e)
        }
    }
    g_CW() {
        return !!(this.g_a_h || this.g_a_i)
    }
    g_aZV() {
        return !!this.g_a_i
    }
    g_aZu() {
        return this.g_a_i
    }
    g_ajp() {
        return this.g_a_i ? this.g_a_i.duration : 0
    }
}, "use strict"; {
    function _(_) {
        return _ * e
    }
    const e = 180 / Math.PI;
    let g = 0;
    self.g_a_m = class {
        constructor(_, a, t) {
            this.g_aZM = _, this.g_xN = a, this.g_a_n = t, this.g_a_o = g++, this.g_a_p = this.g_aJQ().createGain(), this.g_a_p.connect(this.g_aJS()), this.g_a_q = null, this.g_a_r = !1, this.g_VP = !0, this.g_a_s = !1, this.g_a_t = !1, this.g_abe = !1, this.g_a_u = 1, this.g_a_v = !1, this.g_LI = 1;
            const n = this.g_aZM.g_aYI();
            this.g_a_w = 1 === n && !this.g_aYV() || 2 === n, this.g_a_x = -1, this.g_a_y = -1, this.g_a_z = !1
        }
        g_er() {
            this.g_aZM = null, this.g_xN = null, this.g_a_q && (this.g_a_q.disconnect(), this.g_a_q = null), this.g_a_p.disconnect(), this.g_a_p = null
        }
        g_aJQ() {
            return this.g_aZM.g_aJQ()
        }
        g_aJS() {
            return this.g_aZM.g_aYz(this.g_a_n)
        }
        g_aYH() {
            return this.g_aZM.g_aYH()
        }
        g_a_A() {
            return this.g_a_w ? this.g_aZM.g_Gt() : performance.now() / 1e3
        }
        g_aZY() {
            return this.g_xN.g_aZY()
        }
        g_aYY() {
            return this.g_xN.g_aYY()
        }
        g_aZZ() {
            return this.g_xN.g_aZZ()
        }
        g_aYT() {
            return this.g_xN
        }
        g_aYV() {
            return this.g_xN.g_aYV()
        }
        g_aZa(e) {
            this.g_a_n = e
        }
        g_aYW() {
            return this.g_a_n
        }
        g_a_B() {
            return this.g_a_o
        }
        g_aYX() {}
        g_aY$() {}
        g_MD() {
            return !this.g_VP && !this.g_a_s && !this.g_aYX()
        }
        g_Ze() {
            return !this.g_VP && !this.g_aYX()
        }
        g_a_C() {}
        g_ajp(e) {
            let a = this.g_xN.g_ajp();
            return e && (a /= this.g_LI || .001), a
        }
        g_No() {}
        g_Kp() {}
        g_aZm() {}
        g_M_() {
            return this.g_a_s
        }
        g_Nn() {}
        g_aKW(e) {
            this.g_a_u = e, this.g_a_p.gain.cancelScheduledValues(0), this.g_a_y = -1, this.g_a_p.gain.value = this.g_a_D()
        }
        g_aKX(_, g, t) {
            if (!this.g_a_E()) {
                _ *= this.g_aYH();
                const a = this.g_a_p.gain;
                a.cancelScheduledValues(0);
                const n = this.g_aZM.g_aYw(),
                    e = n + g;
                a.setValueAtTime(a.value, n), a.linearRampToValueAtTime(_, e), this.g_a_u = _, this.g_a_y = e, this.g_a_z = t
            }
        }
        g_aZn() {
            this.g_aKW(this.g_a_u)
        }
        g_Lg(e) {
            -1 !== this.g_a_y && e >= this.g_a_y && (this.g_a_y = -1, this.g_a_z && this.g_Kp(), this.g_aZM.g_aZi("fade-ended", this.g_a_n, this.g_a_o))
        }
        g_a_D() {
            const e = this.g_a_u * this.g_aYH();
            return isFinite(e) ? e : 0
        }
        g_aKV(e) {
            e = !!e, this.g_a_v === e || (this.g_a_v = e, this.g_aZo())
        }
        g_a_E() {
            return this.g_a_v
        }
        g_aKM() {
            return this.g_aZM.g_aKM()
        }
        g_aZo() {}
        g_aKU() {}
        g__N() {
            return this.g_abe
        }
        g_MA(e) {
            this.g_LI === e || (this.g_LI = e, this.g_aZp())
        }
        g_aZp() {}
        g_MB() {
            return this.g_LI
        }
        g_aLa() {}
        g_atq() {}
        g_aZj(e) {
            e = !!e, this.g_a_r === e || (this.g_a_r = e, this.g_a_r ? (!this.g_a_q && (this.g_a_q = this.g_aJQ().createPanner(), this.g_a_q.panningModel = this.g_aZM.g_aYM(), this.g_a_q.distanceModel = this.g_aZM.g_aYN(), this.g_a_q.refDistance = this.g_aZM.g_aYO(), this.g_a_q.maxDistance = this.g_aZM.g_aYP(), this.g_a_q.rolloffFactor = this.g_aZM.g_aYQ()), this.g_a_p.disconnect(), this.g_a_p.connect(this.g_a_q), this.g_a_q.connect(this.g_aJS())) : (this.g_a_q.disconnect(), this.g_a_p.disconnect(), this.g_a_p.connect(this.g_aJS())))
        }
        g_aZk(a, t, n, i, e, o) {
            this.g_a_r && (this.g_aZq(a, t, n), this.g_a_q.coneInnerAngle = _(i), this.g_a_q.coneOuterAngle = _(e), this.g_a_q.coneOuterGain = o)
        }
        g_aZq(e, a, _) {
            this.g_a_r && (this.g_a_q.setPosition(e, a, 0), this.g_a_q.setOrientation(Math.cos(_), Math.sin(_), 0))
        }
        g_aZl(e) {
            this.g_a_x = e
        }
        g_Et() {
            return this.g_a_x
        }
        g_a_F() {}
        g_aYG(e) {
            const a = this.g_a_q || this.g_a_p;
            a.disconnect(), a.connect(e)
        }
        g_aZg() {
            return {
                aiid: this.g_a_B(),
                tag: this.g_a_n,
                duration: this.g_ajp(),
                volume: this.g_a_u,
                isPlaying: this.g_MD(),
                playbackTime: this.g_a_C(),
                playbackRate: this.g_MB(),
                uid: this.g_a_x,
                bufferOriginalUrl: this.g_aZY(),
                bufferUrl: "",
                bufferType: this.g_aZZ(),
                isMusic: this.g_aYV(),
                isLooping: this.g__N(),
                isMuted: this.g_a_E(),
                resumePosition: this.g_a_F(),
                pan: this.g_a_G()
            }
        }
        g_aZL(e) {
            this.g_MA(e.playbackRate), this.g_aKV(e.isMuted)
        }
        g_a_G() {
            if (!this.g_a_q) return null;
            const e = this.g_a_q;
            return {
                pos: [e.positionX.value, e.positionY.value, e.positionZ.value],
                orient: [e.orientationX.value, e.orientationY.value, e.orientationZ.value],
                cia: e.coneInnerAngle,
                coa: e.coneOuterAngle,
                cog: e.coneOuterGain,
                uid: this.g_a_x
            }
        }
        g_aZK(e) {
            if (!e) return void this.g_aZj(!1);
            this.g_aZj(!0);
            const a = this.g_a_q;
            a.setPosition(...a.pos), a.setOrientation(...a.orient), a.coneInnerAngle = a.cia, a.coneOuterAngle = a.coa, a.coneOuterGain = a.cog, this.g_a_x = a.uid
        }
    }
}
"use strict", self.g_aZT = class extends g_a_m {
    constructor(e, a, _) {
        super(e, a, _), this.g_xN.g_a_g().connect(this.g_a_p), this.g_xN.onended = () => this.g_a_H()
    }
    g_er() {
        this.g_Kp(), this.g_xN.g_a_g().disconnect(), super.g_er()
    }
    g_a_f() {
        return this.g_xN.g_a_f()
    }
    g_a_H() {
        this.g_VP = !0, this.g_a_x = -1, this.g_aZM.g_aZi("ended", this.g_a_n, this.g_a_o)
    }
    g_aYX() {
        return this.g_a_f().ended
    }
    g_aY$() {
        return !!this.g_VP || this.g_aYX()
    }
    g_a_C(e) {
        let a = this.g_a_f().currentTime;
        return e && (a *= this.g_LI), this.g_abe || (a = Math.min(a, this.g_ajp())), a
    }
    g_No(e, a, _) {
        const g = this.g_a_f();
        if (1 !== g.playbackRate && (g.playbackRate = 1), g.loop !== e && (g.loop = e), this.g_aKW(a), g.muted && (g.muted = !1), g.currentTime !== _) try {
            g.currentTime = _
        } catch (e) {
            console.warn(`[Construct 3] Exception seeking audio '${this.g_xN.g_aYY()}' to position '${_}': `, e)
        }
        this.g_aZM.g_aWt(g), this.g_VP = !1, this.g_a_s = !1, this.g_abe = e, this.g_LI = 1
    }
    g_Kp() {
        const e = this.g_a_f();
        e.paused || e.pause(), this.g_aZM.g_aWu(e), this.g_VP = !0, this.g_a_s = !1, this.g_a_x = -1
    }
    g_aZm() {
        if (!(this.g_a_s || this.g_VP || this.g_aYX())) {
            const e = this.g_a_f();
            e.paused || e.pause(), this.g_aZM.g_aWu(e), this.g_a_s = !0
        }
    }
    g_Nn() {
        !this.g_a_s || this.g_VP || this.g_aYX() || (this.g_aZM.g_aWt(this.g_a_f()), this.g_a_s = !1)
    }
    g_aZo() {
        this.g_a_f().muted = this.g_a_v || this.g_aKM()
    }
    g_aKU(e) {
        e = !!e, this.g_abe === e || (this.g_abe = e, this.g_a_f().loop = e)
    }
    g_aZp() {
        let e = this.g_LI;
        this.g_a_w && (e *= this.g_aZM.g_Le());
        try {
            this.g_a_f().playbackRate = e
        } catch (a) {
            console.warn(`[Construct 3] Unable to set playback rate '${e}':`, a)
        }
    }
    g_aLa(e) {
        if (!(this.g_VP || this.g_aYX())) try {
            this.g_a_f().currentTime = e
        } catch (a) {
            console.warn(`[Construct 3] Error seeking audio to '${e}': `, a)
        }
    }
    g_a_F() {
        return this.g_a_C()
    }
    g_atq(e) {
        e ? this.g_MD() ? (this.g_a_f().pause(), this.g_a_t = !0) : this.g_a_t = !1 : this.g_a_t && (this.g_aZM.g_aWt(this.g_a_f()), this.g_a_t = !1)
    }
}, "use strict", self.g_aZU = class extends g_a_m {
    constructor(e, a, _) {
        super(e, a, _), this.g_a_I = null, this.g_a_J = e => this.g_a_H(e), this.g_a_K = !0, this.g_a_L = null, this.g_arQ = 0, this.g_a_M = 0, this.g_a_N = 1
    }
    g_er() {
        this.g_Kp(), this.g_a_O(), this.g_a_J = null, super.g_er()
    }
    g_a_O() {
        this.g_a_I && this.g_a_I.disconnect(), this.g_a_I = null, this.g_a_L = null
    }
    g_a_H(e) {
        this.g_a_s || this.g_a_t || e.target !== this.g_a_L || (this.g_a_K = !0, this.g_VP = !0, this.g_a_x = -1, this.g_a_O(), this.g_aZM.g_aZi("ended", this.g_a_n, this.g_a_o))
    }
    g_aYX() {
        return !(!this.g_VP && this.g_a_I && this.g_a_I.loop) && !this.g_a_s && this.g_a_K
    }
    g_aY$() {
        return !this.g_a_I || this.g_VP || this.g_aYX()
    }
    g_a_C(e) {
        let a = 0;
        return a = this.g_a_s ? this.g_a_M : this.g_a_A() - this.g_arQ, e && (a *= this.g_LI), this.g_abe || (a = Math.min(a, this.g_ajp())), a
    }
    g_No(e, a, _, g) {
        this.g_a_N = 1, this.g_aKW(a), this.g_a_O(), this.g_a_I = this.g_aJQ().createBufferSource(), this.g_a_I.buffer = this.g_xN.g_aZu(), this.g_a_I.connect(this.g_a_p), this.g_a_L = this.g_a_I, this.g_a_I.onended = this.g_a_J, this.g_a_I.loop = e, this.g_a_I.start(g, _), this.g_a_K = !1, this.g_VP = !1, this.g_a_s = !1, this.g_abe = e, this.g_LI = 1, this.g_arQ = this.g_a_A() - _
    }
    g_Kp() {
        if (this.g_a_I) try {
            this.g_a_I.stop(0)
        } catch (e) {}
        this.g_VP = !0, this.g_a_s = !1, this.g_a_x = -1
    }
    g_aZm() {
        this.g_a_s || this.g_VP || this.g_aYX() || (this.g_a_M = this.g_a_C(!0), this.g_abe && (this.g_a_M %= this.g_ajp()), this.g_a_s = !0, this.g_a_I.stop(0))
    }
    g_Nn() {
        !this.g_a_s || this.g_VP || this.g_aYX() || (this.g_a_O(), this.g_a_I = this.g_aJQ().createBufferSource(), this.g_a_I.buffer = this.g_xN.g_aZu(), this.g_a_I.connect(this.g_a_p), this.g_a_L = this.g_a_I, this.g_a_I.onended = this.g_a_J, this.g_a_I.loop = this.g_abe, this.g_aZn(), this.g_aZp(), this.g_arQ = this.g_a_A() - this.g_a_M / (this.g_LI || .001), this.g_a_I.start(0, this.g_a_M), this.g_a_s = !1)
    }
    g_a_D() {
        return super.g_a_D() * this.g_a_N
    }
    g_aZo() {
        this.g_a_N = this.g_a_v || this.g_aKM() ? 0 : 1, this.g_aZn()
    }
    g_aKU(e) {
        e = !!e, this.g_abe === e || (this.g_abe = e, this.g_a_I && (this.g_a_I.loop = e))
    }
    g_aZp() {
        let e = this.g_LI;
        this.g_a_w && (e *= this.g_aZM.g_Le()), this.g_a_I && (this.g_a_I.playbackRate.value = e)
    }
    g_aLa(e) {
        this.g_VP || this.g_aYX() || (this.g_a_s ? this.g_a_M = e : (this.g_aZm(), this.g_a_M = e, this.g_Nn()))
    }
    g_a_F() {
        return this.g_a_M
    }
    g_atq(e) {
        e ? this.g_MD() ? (this.g_a_t = !0, this.g_a_M = this.g_a_C(!0), this.g_abe && (this.g_a_M %= this.g_ajp()), this.g_a_I.stop(0)) : this.g_a_t = !1 : this.g_a_t && (this.g_a_O(), this.g_a_I = this.g_aJQ().createBufferSource(), this.g_a_I.buffer = this.g_xN.g_aZu(), this.g_a_I.connect(this.g_a_p), this.g_a_L = this.g_a_I, this.g_a_I.onended = this.g_a_J, this.g_a_I.loop = this.g_abe, this.g_aZn(), this.g_aZp(), this.g_arQ = this.g_a_A() - this.g_a_M / (this.g_LI || .001), this.g_a_I.start(0, this.g_a_M), this.g_a_t = !1)
    }
    g_aZL(e) {
        super.g_aZL(e), this.g_a_M = e.resumePosition
    }
}, "use strict"; {
    function _(e) {
        return Math.pow(10, e / 20)
    }

    function g(a) {
        return Math.max(Math.min(_(a), 1), 0)
    }

    function t(e) {
        return 20 * (Math.log(e) / 2.302585092994046)
    }

    function n(e) {
        return t(Math.max(Math.min(e, 1), 0))
    }

    function i(e, a) {
        return 1 - Math.exp(-a * e)
    }
    class a {
        constructor(e) {
            this.g_aZM = e, this.g_aXG = e.g_aJQ(), this.g_DD = -1, this.g_a_n = "", this.g_kU = "", this.g_a_P = null
        }
        g_er() {
            this.g_aXG = null
        }
        g_and(e) {
            this.g_DD = e
        }
        g_EV() {
            return this.g_DD
        }
        g_aYC(e) {
            this.g_a_n = e
        }
        g_aYW() {
            return this.g_a_n
        }
        g_a_Q() {
            return this.g_aXG.createGain()
        }
        g_aYA() {}
        g_aYE() {}
        g_a_R(_, a, g, t) {
            if (_.cancelScheduledValues(0), 0 === t) return void(_.value = a);
            const n = this.g_aXG.currentTime;
            t += n, 0 === g ? _.setValueAtTime(a, t) : 1 === g ? (_.setValueAtTime(_.value, n), _.linearRampToValueAtTime(a, t)) : 2 === g ? (_.setValueAtTime(_.value, n), _.exponentialRampToValueAtTime(a, t)) : void 0
        }
        g_aZg() {
            return {
                type: this.g_kU,
                tag: this.g_a_n,
                params: this.g_a_P
            }
        }
    }
    self.g_aZr = class extends a {
        constructor(_, a, t, n, i, e, o) {
            super(_), this.g_kU = "filter", this.g_a_P = [a, t, n, i, e, o], this.g_a_S = this.g_a_Q(), this.g_a_T = this.g_a_Q(), this.g_a_T.gain.value = o, this.g_a_U = this.g_a_Q(), this.g_a_U.gain.value = 1 - o, this.g_a_V = this.g_aXG.createBiquadFilter(), this.g_a_V.type = a, this.g_a_V.frequency.value = t, this.g_a_V.detune.value = n, this.g_a_V.Q.value = i, this.g_a_V.gain.vlaue = e, this.g_a_S.connect(this.g_a_V), this.g_a_S.connect(this.g_a_U), this.g_a_V.connect(this.g_a_T)
        }
        g_er() {
            this.g_a_S.disconnect(), this.g_a_V.disconnect(), this.g_a_T.disconnect(), this.g_a_U.disconnect(), super.g_er()
        }
        g_aYE(e) {
            this.g_a_T.disconnect(), this.g_a_T.connect(e), this.g_a_U.disconnect(), this.g_a_U.connect(e)
        }
        g_aYA() {
            return this.g_a_S
        }
        g_aZF(e, a, _, g) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_a_P[5] = a, this.g_a_R(this.g_a_T.gain, a, _, g), this.g_a_R(this.g_a_U.gain, 1 - a, _, g)) : 1 === e ? (this.g_a_P[1] = a, this.g_a_R(this.g_a_V.frequency, a, _, g)) : 2 === e ? (this.g_a_P[2] = a, this.g_a_R(this.g_a_V.detune, a, _, g)) : 3 === e ? (this.g_a_P[3] = a, this.g_a_R(this.g_a_V.Q, a, _, g)) : 4 === e ? (this.g_a_P[4] = a, this.g_a_R(this.g_a_V.gain, a, _, g)) : void 0
        }
    }, self.g_aZs = class extends a {
        constructor(e, a, _, g) {
            super(e), this.g_kU = "delay", this.g_a_P = [a, _, g], this.g_a_S = this.g_a_Q(), this.g_a_T = this.g_a_Q(), this.g_a_T.gain.value = g, this.g_a_U = this.g_a_Q(), this.g_a_U.gain.value = 1 - g, this.g_a_W = this.g_a_Q(), this.g_a_X = this.g_aXG.createDelay(a), this.g_a_X.delayTime.value = a, this.g_a_Y = this.g_a_Q(), this.g_a_Y.gain.value = _, this.g_a_S.connect(this.g_a_W), this.g_a_S.connect(this.g_a_U), this.g_a_W.connect(this.g_a_T), this.g_a_W.connect(this.g_a_X), this.g_a_X.connect(this.g_a_Y), this.g_a_Y.connect(this.g_a_W)
        }
        g_er() {
            this.g_a_S.disconnect(), this.g_a_T.disconnect(), this.g_a_U.disconnect(), this.g_a_W.disconnect(), this.g_a_X.disconnect(), this.g_a_Y.disconnect(), super.g_er()
        }
        g_aYE(e) {
            this.g_a_T.disconnect(), this.g_a_T.connect(e), this.g_a_U.disconnect(), this.g_a_U.connect(e)
        }
        g_aYA() {
            return this.g_a_S
        }
        g_aZF(_, a, t, n) {
            0 === _ ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_a_P[2] = a, this.g_a_R(this.g_a_T.gain, a, t, n), this.g_a_R(this.g_a_U.gain, 1 - a, t, n)) : 4 === _ ? (this.g_a_P[1] = g(a), this.g_a_R(this.g_a_Y.gain, g(a), t, n)) : 5 === _ ? (this.g_a_P[0] = a, this.g_a_R(this.g_a_X.delayTime, a, t, n)) : void 0
        }
    }, self.g_aZt = class extends a {
        constructor(e, a, _, g) {
            super(e), this.g_kU = "convolution", this.g_a_P = [_, g], this.g_a_Z = "", this.g_a__ = "", this.g_a_$ = "", this.g_a_S = this.g_a_Q(), this.g_a_T = this.g_a_Q(), this.g_a_T.gain.value = g, this.g_a_U = this.g_a_Q(), this.g_a_U.gain.value = 1 - g, this.g_a$a = this.g_aXG.createConvolver(), this.g_a$a.normalize = _, this.g_a$a.buffer = a, this.g_a_S.connect(this.g_a$a), this.g_a_S.connect(this.g_a_U), this.g_a$a.connect(this.g_a_T)
        }
        g_er() {
            this.g_a_S.disconnect(), this.g_a$a.disconnect(), this.g_a_T.disconnect(), this.g_a_U.disconnect(), super.g_er()
        }
        g_aYE(e) {
            this.g_a_T.disconnect(), this.g_a_T.connect(e), this.g_a_U.disconnect(), this.g_a_U.connect(e)
        }
        g_aYA() {
            return this.g_a_S
        }
        g_aZF(e, a, _, g) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_a_P[1] = a, this.g_a_R(this.g_a_T.gain, a, _, g), this.g_a_R(this.g_a_U.gain, 1 - a, _, g)) : void 0
        }
        g_aZv(e, a, _) {
            this.g_a_Z = e, this.g_a__ = a, this.g_a_$ = _
        }
        g_aZg() {
            const e = super.g_aZg();
            return e.bufferOriginalUrl = this.g_a_Z, e.bufferUrl = "", e.bufferType = this.g_a_$, e
        }
    }, self.g_aZw = class extends a {
        constructor(_, a, g, t, n, e) {
            super(_), this.g_kU = "flanger", this.g_a_P = [a, g, t, n, e], this.g_a_S = this.g_a_Q(), this.g_a_U = this.g_a_Q(), this.g_a_U.gain.value = 1 - e / 2, this.g_a_T = this.g_a_Q(), this.g_a_T.gain.value = e / 2, this.g_a$b = this.g_a_Q(), this.g_a$b.gain.value = n, this.g_a_X = this.g_aXG.createDelay(a + g), this.g_a_X.delayTime.value = a, this.g_a$c = this.g_aXG.createOscillator(), this.g_a$c.frequency.value = t, this.g_a$d = this.g_a_Q(), this.g_a$d.gain.value = g, this.g_a_S.connect(this.g_a_X), this.g_a_S.connect(this.g_a_U), this.g_a_X.connect(this.g_a_T), this.g_a_X.connect(this.g_a$b), this.g_a$b.connect(this.g_a_X), this.g_a$c.connect(this.g_a$d), this.g_a$d.connect(this.g_a_X.delayTime), this.g_a$c.start(0)
        }
        g_er() {
            this.g_a$c.stop(0), this.g_a_S.disconnect(), this.g_a_X.disconnect(), this.g_a$c.disconnect(), this.g_a$d.disconnect(), this.g_a_U.disconnect(), this.g_a_T.disconnect(), this.g_a$b.disconnect(), super.g_er()
        }
        g_aYE(e) {
            this.g_a_T.disconnect(), this.g_a_T.connect(e), this.g_a_U.disconnect(), this.g_a_U.connect(e)
        }
        g_aYA() {
            return this.g_a_S
        }
        g_aZF(e, a, _, g) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_a_P[4] = a, this.g_a_R(this.g_a_T.gain, a / 2, _, g), this.g_a_R(this.g_a_U.gain, 1 - a / 2, _, g)) : 6 === e ? (this.g_a_P[1] = a / 1e3, this.g_a_R(this.g_a$d.gain, a / 1e3, _, g)) : 7 === e ? (this.g_a_P[2] = a, this.g_a_R(this.g_a$c.frequency, a, _, g)) : 8 === e ? (this.g_a_P[3] = a / 100, this.g_a_R(this.g_a$b.gain, a / 100, _, g)) : void 0
        }
    }, self.g_aZx = class extends a {
        constructor(_, a, t, n, i, e, o) {
            super(_), this.g_kU = "phaser", this.g_a_P = [a, t, n, i, e, o], this.g_a_S = this.g_a_Q(), this.g_a_U = this.g_a_Q(), this.g_a_U.gain.value = 1 - o / 2, this.g_a_T = this.g_a_Q(), this.g_a_T.gain.value = o / 2, this.g_a_V = this.g_aXG.createBiquadFilter(), this.g_a_V.type = "allpass", this.g_a_V.frequency.value = a, this.g_a_V.detune.value = t, this.g_a_V.Q.value = n, this.g_a$c = this.g_aXG.createOscillator(), this.g_a$c.frequency.value = e, this.g_a$d = this.g_a_Q(), this.g_a$d.gain.value = i, this.g_a_S.connect(this.g_a_V), this.g_a_S.connect(this.g_a_U), this.g_a_V.connect(this.g_a_T), this.g_a$c.connect(this.g_a$d), this.g_a$d.connect(this.g_a_V.frequency), this.g_a$c.start(0)
        }
        g_er() {
            this.g_a$c.stop(0), this.g_a_S.disconnect(), this.g_a_V.disconnect(), this.g_a$c.disconnect(), this.g_a$d.disconnect(), this.g_a_U.disconnect(), this.g_a_T.disconnect(), super.g_er()
        }
        g_aYE(e) {
            this.g_a_T.disconnect(), this.g_a_T.connect(e), this.g_a_U.disconnect(), this.g_a_U.connect(e)
        }
        g_aYA() {
            return this.g_a_S
        }
        g_aZF(e, a, _, g) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_a_P[5] = a, this.g_a_R(this.g_a_T.gain, a / 2, _, g), this.g_a_R(this.g_a_U.gain, 1 - a / 2, _, g)) : 1 === e ? (this.g_a_P[0] = a, this.g_a_R(this.g_a_V.frequency, a, _, g)) : 2 === e ? (this.g_a_P[1] = a, this.g_a_R(this.g_a_V.detune, a, _, g)) : 3 === e ? (this.g_a_P[2] = a, this.g_a_R(this.g_a_V.Q, a, _, g)) : 6 === e ? (this.g_a_P[3] = a, this.g_a_R(this.g_a$d.gain, a, _, g)) : 7 === e ? (this.g_a_P[4] = a, this.g_a_R(this.g_a$c.frequency, a, _, g)) : void 0
        }
    }, self.g_aZy = class extends a {
        constructor(e, a) {
            super(e), this.g_kU = "gain", this.g_a_P = [a], this.g_a$e = this.g_a_Q(), this.g_a$e.gain.value = a
        }
        g_er() {
            this.g_a$e.disconnect(), super.g_er()
        }
        g_aYE(e) {
            this.g_a$e.disconnect(), this.g_a$e.connect(e)
        }
        g_aYA() {
            return this.g_a$e
        }
        g_aZF(_, a, t, n) {
            4 === _ ? (this.g_a_P[0] = g(a), this.g_a_R(this.g_a$e.gain, g(a), t, n)) : void 0
        }
    }, self.g_aZz = class extends a {
        constructor(e, a, _) {
            super(e), this.g_kU = "tremolo", this.g_a_P = [a, _], this.g_a$e = this.g_a_Q(), this.g_a$e.gain.value = 1 - _ / 2, this.g_a$c = this.g_aXG.createOscillator(), this.g_a$c.frequency.value = a, this.g_a$d = this.g_a_Q(), this.g_a$d.gain.value = _ / 2, this.g_a$c.connect(this.g_a$d), this.g_a$d.connect(this.g_a$e.gain), this.g_a$c.start(0)
        }
        g_er() {
            this.g_a$c.stop(0), this.g_a$c.disconnect(), this.g_a$d.disconnect(), this.g_a$e.disconnect(), super.g_er()
        }
        g_aYE(e) {
            this.g_a$e.disconnect(), this.g_a$e.connect(e)
        }
        g_aYA() {
            return this.g_a$e
        }
        g_aZF(e, a, _, g) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_a_P[1] = a, this.g_a_R(this.g_a$e.gain.value, 1 - a / 2, _, g), this.g_a_R(this.g_a$d.gain.value, a / 2, _, g)) : 7 === e ? (this.g_a_P[0] = a, this.g_a_R(this.g_a$c.frequency, a, _, g)) : void 0
        }
    }, self.g_aZA = class extends a {
        constructor(e, a, _) {
            super(e), this.g_kU = "ringmod", this.g_a_P = [a, _], this.g_a_S = this.g_a_Q(), this.g_a_T = this.g_a_Q(), this.g_a_T.gain.value = _, this.g_a_U = this.g_a_Q(), this.g_a_U.gain.value = 1 - _, this.g_a$f = this.g_a_Q(), this.g_a$f.gain.value = 0, this.g_a$c = this.g_aXG.createOscillator(), this.g_a$c.frequency.value = a, this.g_a$c.connect(this.g_a$f.gain), this.g_a$c.start(0), this.g_a_S.connect(this.g_a$f), this.g_a_S.connect(this.g_a_U), this.g_a$f.connect(this.g_a_T)
        }
        g_er() {
            this.g_a$c.stop(0), this.g_a$c.disconnect(), this.g_a$f.disconnect(), this.g_a_S.disconnect(), this.g_a_T.disconnect(), this.g_a_U.disconnect(), super.g_er()
        }
        g_aYE(e) {
            this.g_a_T.disconnect(), this.g_a_T.connect(e), this.g_a_U.disconnect(), this.g_a_U.connect(e)
        }
        g_aYA() {
            return this.g_a_S
        }
        g_aZF(e, a, _, g) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_a_P[1] = a, this.g_a_R(this.g_a_T.gain, a, _, g), this.g_a_R(this.g_a_U.gain, 1 - a, _, g)) : 7 === e ? (this.g_a_P[0] = a, this.g_a_R(this.g_a$c.frequency, a, _, g)) : void 0
        }
    }, self.g_aZB = class extends a {
        constructor(_, a, g, t, n, e) {
            super(_), this.g_kU = "distortion", this.g_a_P = [a, g, t, n, e], this.g_a_S = this.g_a_Q(), this.g_a$g = this.g_a_Q(), this.g_a$h = this.g_a_Q(), this.g_a$i(t, n), this.g_a_T = this.g_a_Q(), this.g_a_T.gain.value = e, this.g_a_U = this.g_a_Q(), this.g_a_U.gain.value = 1 - e, this.g_a$j = this.g_aXG.createWaveShaper(), this.g_a$k = new Float32Array(65536), this.g_a$l(a, g), this.g_a$j.curve = this.g_a$k, this.g_a_S.connect(this.g_a$g), this.g_a_S.connect(this.g_a_U), this.g_a$g.connect(this.g_a$j), this.g_a$j.connect(this.g_a$h), this.g_a$h.connect(this.g_a_T)
        }
        g_er() {
            this.g_a_S.disconnect(), this.g_a$g.disconnect(), this.g_a$j.disconnect(), this.g_a$h.disconnect(), this.g_a_T.disconnect(), this.g_a_U.disconnect(), super.g_er()
        }
        g_a$i(e, _) {
            .01 > e && (e = .01), this.g_a$g.gain.value = e, this.g_a$h.gain.value = Math.pow(1 / e, .6) * _
        }
        g_a$l(e, a) {
            for (let _, g = 0; 32768 > g; ++g) _ = g / 32768, _ = this.g_a$m(_, e, a), this.g_a$k[32768 + g] = _, this.g_a$k[32768 - g - 1] = -_
        }
        g_a$m(e, a, _) {
            const t = 1.05 * _ * a - a,
                n = 0 > e ? -1 : 1,
                o = 0 > e ? -e : e;
            let g = o < a ? o : a + t * i(o - a, 1 / t);
            return g *= n, g
        }
        g_aYE(e) {
            this.g_a_T.disconnect(), this.g_a_T.connect(e), this.g_a_U.disconnect(), this.g_a_U.connect(e)
        }
        g_aYA() {
            return this.g_a_S
        }
        g_aZF(e, a, _, g) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_a_P[4] = a, this.g_a_R(this.g_a_T.gain, a, _, g), this.g_a_R(this.g_a_U.gain, 1 - a, _, g)) : void 0
        }
    }, self.g_aZC = class extends a {
        constructor(_, a, g, t, n, e) {
            super(_), this.g_kU = "compressor", this.g_a_P = [a, g, t, n, e], this.g_a$e = this.g_aXG.createDynamicsCompressor(), this.g_a$e.threshold.value = a, this.g_a$e.knee.value = g, this.g_a$e.ratio.value = t, this.g_a$e.attack.value = n, this.g_a$e.release.value = e
        }
        g_er() {
            this.g_a$e.disconnect(), super.g_er()
        }
        g_aYE(e) {
            this.g_a$e.disconnect(), this.g_a$e.connect(e)
        }
        g_aYA() {
            return this.g_a$e
        }
        g_aZF() {}
    }, self.g_aZD = class extends a {
        constructor(e, a, _) {
            super(e), this.g_kU = "analyser", this.g_a_P = [a, _], this.g_a$e = this.g_aXG.createAnalyser(), this.g_a$e.fftSize = a, this.g_a$e.smoothingTimeConstant = _, this.g_a$n = new Float32Array(this.g_a$e.frequencyBinCount), this.g_a$o = new Uint8Array(a), this.g_a$p = 0, this.g_a$q = 0, this.g_aZM.g_aZG(this)
        }
        g_er() {
            this.g_aZM.g_aZH(this), this.g_a$e.disconnect(), super.g_er()
        }
        g_Lg() {
            this.g_a$e.getFloatFrequencyData(this.g_a$n), this.g_a$e.getByteTimeDomainData(this.g_a$o);
            const e = this.g_a$e.fftSize;
            this.g_a$p = 0;
            let a = 0;
            for (let _, g = 0; g < e; ++g) _ = (this.g_a$o[g] - 128) / 128, 0 > _ && (_ = -_), this.g_a$p < _ && (this.g_a$p = _), a += _ * _;
            this.g_a$p = n(this.g_a$p), this.g_a$q = n(Math.sqrt(a / e))
        }
        g_aYE(e) {
            this.g_a$e.disconnect(), this.g_a$e.connect(e)
        }
        g_aYA() {
            return this.g_a$e
        }
        g_aZF() {}
        g_aZh() {
            return {
                tag: this.g_aYW(),
                index: this.g_EV(),
                peak: this.g_a$p,
                rms: this.g_a$q,
                binCount: this.g_a$e.frequencyBinCount,
                freqBins: this.g_a$n
            }
        }
    }
} {
    const e = class extends g_aUN {
        constructor(e) {
            super(e, "browser"), this.g_aqz = "", this.g_aU$([
                ["get-initial-state", e => this.g_a$r(e)],
                ["ready-for-sw-messages", () => this.g_a$s()],
                ["alert", e => this.g_aXd(e)],
                ["close", () => this.g_a$t()],
                ["set-focus", e => this.g_aVl(e)],
                ["vibrate", e => this.g_a$u(e)],
                ["lock-orientation", e => this.g_a$v(e)],
                ["unlock-orientation", () => this.g_a$w()],
                ["navigate", e => this.g_a$x(e)],
                ["request-fullscreen", e => this.g_a$y(e)],
                ["exit-fullscreen", () => this.g_a$z()],
                ["set-hash", e => this.g_a$A(e)]
            ]), window.addEventListener("online", () => this.g_aMh(!0)), window.addEventListener("offline", () => this.g_aMh(!1)), window.addEventListener("hashchange", () => this.g_aMk()), document.addEventListener("backbutton", () => this.g_a$B()), "undefined" != typeof Windows && Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", e => this.g_a$C(e))
        }
        g_a$r(e) {
            return this.g_aqz = e.exportType, {
                location: location.toString(),
                isOnline: !!navigator.onLine,
                referrer: document.referrer,
                title: document.title,
                isCookieEnabled: !!navigator.cookieEnabled,
                screenWidth: screen.width,
                screenHeight: screen.height,
                windowOuterWidth: window.outerWidth,
                windowOuterHeight: window.outerHeight,
                isScirraArcade: "undefined" != typeof window.is_scirra_arcade
            }
        }
        g_a$s() {
            window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(e => this.g_aUS("sw-message", e.data))
        }
        g_aMh(e) {
            this.g_aUS("online-state", {
                isOnline: e
            })
        }
        g_a$B() {
            this.g_aUS("backbutton")
        }
        g_a$C(e) {
            e.handled = !0, this.g_aUS("backbutton")
        }
        g_a$D() {
            return "nwjs" === this.g_aqz ? nw.Window.get() : null
        }
        g_aXd(e) {
            alert(e.message)
        }
        g_a$t() {
            navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : window.close()
        }
        g_aVl(e) {
            const _ = e.isFocus;
            if ("nwjs" === this.g_aqz) {
                const e = this.g_a$D();
                _ ? e.focus() : e.blur()
            } else _ ? window.focus() : window.blur()
        }
        g_a$u(e) {
            navigator.vibrate && navigator.vibrate(e.pattern)
        }
        g_a$v(e) {
            const _ = e.orientation;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(_).catch(e => console.warn("[Construct 3] Failed to lock orientation: ", e));
            else try {
                let e = !1;
                screen.lockOrientation ? e = screen.lockOrientation(_) : screen.webkitLockOrientation ? e = screen.webkitLockOrientation(_) : screen.mozLockOrientation ? e = screen.mozLockOrientation(_) : screen.msLockOrientation && (e = screen.msLockOrientation(_)), e || console.warn("[Construct 3] Failed to lock orientation")
            } catch (e) {
                console.warn("[Construct 3] Failed to lock orientation: ", e)
            }
        }
        g_a$w() {
            try {
                screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
            } catch (e) {}
        }
        g_a$x(e) {
            const a = e.type;
            if ("back" === a) navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.back();
            else if ("forward" === a) window.forward();
            else if ("home" === a) window.g_a$E();
            else if ("reload" === a) location.reload();
            else if ("url" === a) {
                const a = e.url,
                    _ = e.target,
                    g = e.exportType;
                "windows-uwp" === g && "undefined" != typeof Windows ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)) : "cordova" === g ? window.open(a, "_system") : "preview" === g ? window.open(a, "_blank") : !this.g_aMg && (2 === _ ? window.top.location = a : 1 === _ ? window.parent.location = a : window.location = a)
            } else if ("new-window" === a) {
                const a = e.url,
                    _ = e.tag,
                    g = e.exportType;
                "windows-uwp" === g && "undefined" != typeof Windows ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)) : "cordova" === g ? window.open(a, "_system") : window.open(a, _)
            }
        }
        g_a$y(e) {
            const a = {
                    navigationUI: "auto"
                },
                _ = e.navUI;
            1 === _ ? a.navigationUI = "hide" : 2 === _ && (a.navigationUI = "show");
            const g = document.documentElement;
            g.requestFullscreen ? g.requestFullscreen(a) : g.mozRequestFullScreen ? g.mozRequestFullScreen(a) : g.msRequestFullscreen ? g.msRequestFullscreen(a) : g.webkitRequestFullScreen && ("undefined" == typeof Element.ALLOW_KEYBOARD_INPUT ? g.webkitRequestFullScreen() : g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))
        }
        g_a$z() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }
        g_a$A(e) {
            location.hash = e.hash
        }
        g_aMk() {
            this.g_aUS("hashchange", {
                location: location.toString()
            })
        }
    };
    g_aVw.g_aWr(e)
} {
    function _(e) {
        e.stopPropagation()
    }
    const a = class extends g_aVe {
        constructor(e) {
            super(e, "button")
        }
        g_afN(a, g) {
            const t = document.createElement("input"),
                n = g.isCheckbox;
            let e = t;
            if (n) {
                t.type = "checkbox";
                const _ = document.createElement("label");
                _.appendChild(t), _.appendChild(document.createTextNode("")), _.style.fontFamily = "sans-serif", _.style.userSelect = "none", _.style.webkitUserSelect = "none", _.style.display = "inline-block", _.style.color = "black", e = _
            } else t.type = "button";
            return e.style.position = "absolute", e.addEventListener("touchstart", _), e.addEventListener("touchmove", _), e.addEventListener("touchend", _), e.addEventListener("mousedown", _), e.addEventListener("mouseup", _), e.addEventListener("keydown", _), e.addEventListener("keyup", _), t.addEventListener("click", () => this.g_aVr("click", a, {
                isChecked: t.checked
            })), t.id = g.id, this.g_aVs(e, g), e
        }
        g_a$F(e) {
            return "input" === e.tagName.toLowerCase() ? e : e.firstChild
        }
        g_aVs(e, a) {
            const _ = this.g_a$F(e);
            _.checked = a.isChecked, _.disabled = !a.isEnabled, e.title = a.title, e === _ ? _.value = a.text : e.lastChild.textContent = a.text
        }
    };
    g_aVw.g_aWr(a)
}