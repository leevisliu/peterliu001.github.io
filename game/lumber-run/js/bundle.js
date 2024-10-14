(function() {
    "use strict";
    class MainBase {
        constructor() {}
        static Ins() {
            var cla = this;
            if (!cla._ins) {
                cla._ins = new cla();
            }
            return cla._ins;
        }
    }
    var MusicConfig = {
        eat1: "eat1",
        gei: "gei",
        speed: "speed",
        success: "success",
        fail: "fail",
        click: "click",
        house: "house",
        tree: "tree",
        board: "board",
        island: "island",
        water: "water",
        bgm: "bgm"
    };
    class MainMusic extends MainBase {
        constructor() {
            super();
            this.sounds = {};
        }
        onComplete(name) {
            this.stopSound(name);
        }
        stopSound(name) {
            Laya.SoundManager.destroySound("music/" + name + ".mp3");
            delete this.sounds[name];
        }
        playBgm(str, bLoop = false) {
            if (Laya.Browser.window.wx) {
                if (this.sound) {
                    console.log("???");
                    this.sound.stop();
                    this.sound.destroy();
                    this.sound = null;
                }
                this.sound = Laya.Browser.window.wx.createInnerAudioContext();
                this.sound.loop = bLoop;
                this.sound.volume = 1;
                this.sound.autoplay = true;
                this.sound.src = "music/" + str + ".mp3";
                this.sound.play();
            } else { //web 播放
                Laya.SoundManager.playMusic("music/" + str + ".mp3"), Laya.SoundManager.autoStopMusic = !1
            }
        }
        setBGMVolume(flag) {
            if (!this.sound) {
                return;
            }
            if (flag) {
                this.sound.volume = 1;
            } else {
                this.sound.volume = 0;
            }
        }
        playSound(name, volume, isLoop, isOne, callback) {
            if (!Laya.Browser.window.wx) {
                if (this.sounds[name] != null) return this.sounds[name];
                var music = Laya.SoundManager.playSound("music/" + name + ".mp3", isLoop ? 0 : 1, Laya.Handler.create(this, function(obj) {
                    this.onComplete(obj);
                    Laya.SoundManager.destroySound("music/" + obj + ".mp3");
                    delete this.sounds[obj];
                    if (callback) {
                        callback();
                    }
                }, [name]));
                if (!volume) volume = 1;
                if (isOne) this.sounds[name] = music;
                Laya.SoundManager.setSoundVolume(volume);
                return music;
            } else {
                if (this.sounds[name] != null) {
                    if (!this.sounds[name].isPlay) {
                        return this.sounds[name].music;
                    } else {
                        if (!this.sounds[name].paused) {
                            return this.sounds[name].music;
                        } else {
                            delete this.sounds[name];
                        }
                    }
                }
                let audioContext = Laya.Browser.window.wx.createInnerAudioContext();
                audioContext.src = "wxRes/music/" + name + ".mp3";
                audioContext.play();
                audioContext.loop = isLoop;
                if (!volume) volume = 1;
                audioContext.volume = volume;
                audioContext.onPlay(() => {
                    if (this.sounds[name]) this.sounds[name].isPlay = true;
                });
                audioContext.onStop(() => {
                    audioContext.stop();
                    audioContext.destroy();
                    if (this.sounds[name]) delete this.sounds[name];
                });
                audioContext.onEnded(() => {
                    audioContext.destroy();
                    if (this.sounds[name]) delete this.sounds[name];
                    if (callback) {
                        callback();
                    }
                });
                audioContext.onError(res => {
                    console.log(res.errMsg);
                    console.log(res.errCode);
                    audioContext.destroy();
                    if (this.sounds[name]) delete this.sounds[name];
                });
                if (isOne) {
                    this.sounds[name] = {
                        isPlay: false,
                        music: audioContext
                    };
                }
                return audioContext;
            }
        }
    }
    class ScaleButton extends Laya.Button {
        constructor(skin = null, label = "") {
            super(skin, label);
            this.SCALE_TIME = 70;
            this.initScaleX = 1;
            this.initScaleY = 1;
            this.TouchEven = null;
            this.TouchEnd = null;
            this.isDown = false;
            this.isTouch = false;
            this._sendNum = 0;
            this._sendTime = 200;
            this._scale = 1;
            this.stateNum = 1;
            this.once(Laya.Event.DISPLAY, this, this.show);
            this.on(Laya.Event.MOUSE_DOWN, this, this.ScaleSmall);
            this.on(Laya.Event.ADDED, this, this.getScale);
            this.on(Laya.Event.CLICK, this, this.onClick);
        }
        addEventListener() {}
        show() {
            this.ChangePos(this);
            var hitarea = new Laya.HitArea();
            var graphics = new Laya.Graphics();
            graphics.drawRect(0, 0, this.width, this.height, "#ff9900");
            hitarea.hit = graphics;
            this.hitArea = hitarea;
        }
        ChangePos(element) {
            if (element.anchorX != .5) {
                element.anchorX = isNaN(element.anchorX) ? 0 : element.anchorX;
                element.x = element.x - element.width * element.anchorX + .5 * element.width * element.scaleX;
            }
            if (element.anchorY != .5) {
                element.anchorY = isNaN(element.anchorY) ? 0 : element.anchorY;
                element.y = element.y - element.height * element.anchorY + .5 * element.height * element.scaleY;
            }
            element.anchorX = .5;
            element.anchorY = .5;
        }
        get sendNum() {
            return this._sendNum;
        }
        set sendNum(value) {
            this._sendNum = value;
        }
        get sendTime() {
            return this._sendTime;
        }
        set sendTime(value) {
            this._sendTime = value;
        }
        onClick() {
            this.isDown = false;
        }
        getScale() {
            this.initScaleX = this.scaleX;
            this.initScaleY = this.scaleY;
        }
        ScaleSmall(even) {
            Laya.Tween.to(this, {
                tosizeScale: .85
            }, this.SCALE_TIME);
            this.isDown = true;
            this.isTouch = false;
            this._sendNum = 0;
            if (this.TouchEven != null) {
                Laya.timer.once(500, this, this.setTouchEven);
            }
            this.on(Laya.Event.MOUSE_UP, this, this.onBtnUp);
            this.on(Laya.Event.MOUSE_OUT, this, this.ScaleBig);
            MainMusic.Ins().playSound(MusicConfig.click);
        }
        setTouchEven() {
            if (this.isDown && this.TouchEven != null) {
                this.TouchEven();
                this.isTouch = true;
                Laya.timer.once(this._sendTime, this, this.setTouchEven);
            }
        }
        get tosizeHeight() {
            return this._bitmap["_source"]._h;
        }
        set tosizeHeight(value) {
            this.event("resize");
        }
        get tosizeScale() {
            return this._scale;
        }
        set tosizeScale(value) {
            this._scale = value;
            this._bitmap["_offset"] = [];
            if (this._bitmap["isInit"] == null) {
                this._bitmap["initW"] = this._bitmap.width;
                this._bitmap["initH"] = this._bitmap.height;
                this._bitmap["initX"] = this._bitmap.source ? this._bitmap.source.offsetX : 0;
                this._bitmap["initY"] = this._bitmap.source ? this._bitmap.source.offsetY : 0;
                this._bitmap["isInit"] = true;
            }
            this._bitmap.width = this._bitmap["initW"] * value;
            this._bitmap.height = this._bitmap["initH"] * value;
            this._bitmap["_offset"][0] = (this._bitmap["initW"] - this._bitmap.width) / 2;
            this._bitmap["_offset"][1] = (this._bitmap["initH"] - this._bitmap.height) / 2;
            this["_children"].forEach(element => {
                if (element.isInit == null) {
                    element.initScaleX = element.scaleX;
                    element.initScaleY = element.scaleY;
                    element.initX = element.x;
                    element.initY = element.y;
                    element.initWidth = element.width;
                    element.initHeight = element.height;
                    element.isInit = true;
                }
                element.scaleX = element.initScaleX * value;
                element.scaleY = element.initScaleY * value;
                var anX = isNaN(element.anchorX) ? 0 : element.anchorX;
                var anY = isNaN(element.anchorY) ? 0 : element.anchorY;
                var offx = element.initX > this.width / 2 ? -(this._bitmap["initW"] - this._bitmap.width) / 2 : (this._bitmap["initW"] - this._bitmap.width) / 2;
                var offy = element.initY > this.height / 2 ? -(this._bitmap["initH"] - this._bitmap.height) / 2 : (this._bitmap["initH"] - this._bitmap.height) / 2;
                element.x = element.initX * value + this._bitmap["_offset"][0];
                element.y = element.initY * value + this._bitmap["_offset"][1];
            });
            this._bitmap["changeSource"]();
        }
        onBtnUp(even) {
            this.ScaleBig();
        }
        ScaleBig(even = null) {
            Laya.Tween.to(this, {
                tosizeScale: 1
            }, this.SCALE_TIME);
            this.isDown = false;
            if (this.TouchEnd != null && this.sendNum > 0) {
                this.TouchEnd();
            }
            this.off(Laya.Event.MOUSE_UP, this, this.onBtnUp);
            this.off(Laya.Event.MOUSE_OUT, this, this.ScaleBig);
        }
        destroy() {
            super.destroy(true);
            this.offAll();
            Laya.Tween.clearTween(this);
        }
    }
    class GameConfig {
        constructor() {}
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/util/ScaleButton.ts", ScaleButton);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedheight"; //"fixedwidth";//czh
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Lock.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();
    class StageUtils {
        static isIpad() {
            var isIpad_ = false;
            var sys_ = Laya.Browser.window.wx && Laya.Browser.window.wx.getSystemInfoSync();
            if (sys_ && sys_.model && 0 <= sys_.model.indexOf("iPad")) {
                isIpad_ = true;
            } else if (Laya.Browser.clientHeight / Laya.Browser.clientWidth <= 1.45) {
                isIpad_ = true;
            }
            return isIpad_;
        }
        static isIphoneX() {
            return Laya.Browser.clientHeight / Laya.Browser.clientWidth >= 1.9;
        }
    }
    var UIEnum;
    (function(UIEnum) {
        UIEnum[UIEnum["None"] = 1e4] = "None";
        UIEnum[UIEnum["Loading"] = 10001] = "Loading";
        UIEnum[UIEnum["Home"] = 2e4] = "Home";
        UIEnum[UIEnum["Realy"] = 20001] = "Realy";
        UIEnum[UIEnum["Fail"] = 20002] = "Fail";
        UIEnum[UIEnum["Sucess"] = 20003] = "Sucess";
        UIEnum[UIEnum["Shop"] = 20004] = "Shop";
        UIEnum[UIEnum["Lock"] = 20005] = "Lock";
        UIEnum[UIEnum["Try"] = 20006] = "Try";
        UIEnum[UIEnum["Build"] = 20007] = "Build";
        UIEnum[UIEnum["Reward"] = 20008] = "Reward";
    })(UIEnum || (UIEnum = {}));
    var OpenWndAni = {
        [UIEnum.Loading]: -1
    };
    var CloseWndAni = {};
    var LayerEnum;
    (function(LayerEnum) {
        LayerEnum[LayerEnum["Game"] = 0] = "Game";
        LayerEnum[LayerEnum["Main"] = 1] = "Main";
        LayerEnum[LayerEnum["UI"] = 2] = "UI";
        LayerEnum[LayerEnum["Tips"] = 3] = "Tips";
    })(LayerEnum || (LayerEnum = {}));
    var GameEvent;
    (function(GameEvent) {
        GameEvent[GameEvent["SubPress"] = 1] = "SubPress";
        GameEvent[GameEvent["JsonPress"] = 2] = "JsonPress";
        GameEvent[GameEvent["ResPress"] = 3] = "ResPress";
        GameEvent[GameEvent["ShowReward"] = 4] = "ShowReward";
        GameEvent[GameEvent["ClickFail"] = 5] = "ClickFail";
        GameEvent[GameEvent["CloseHot"] = 6] = "CloseHot";
        GameEvent[GameEvent["MouseInputDown"] = 7] = "MouseInputDown";
        GameEvent[GameEvent["MouseInputMove"] = 8] = "MouseInputMove";
        GameEvent[GameEvent["MouseInputUp"] = 9] = "MouseInputUp";
    })(GameEvent || (GameEvent = {}));
    var VideoView;
    (function(VideoView) {
        VideoView[VideoView["VIDEO1"] = 1] = "VIDEO1";
        VideoView[VideoView["VIDEO2"] = 2] = "VIDEO2";
        VideoView[VideoView["VIDEO3"] = 3] = "VIDEO3";
        VideoView[VideoView["VIDEO4"] = 4] = "VIDEO4";
        VideoView[VideoView["VIDEO5"] = 5] = "VIDEO5";
        VideoView[VideoView["VIDEO6"] = 6] = "VIDEO6";
    })(VideoView || (VideoView = {}));
    var BannerView;
    (function(BannerView) {
        BannerView[BannerView["BANNER1"] = 1] = "BANNER1";
        BannerView[BannerView["BANNER2"] = 2] = "BANNER2";
        BannerView[BannerView["BANNER3"] = 3] = "BANNER3";
        BannerView[BannerView["BANNER4"] = 4] = "BANNER4";
        BannerView[BannerView["BANNER5"] = 5] = "BANNER5";
        BannerView[BannerView["BANNER6"] = 6] = "BANNER6";
        BannerView[BannerView["BANNER7"] = 7] = "BANNER7";
    })(BannerView || (BannerView = {}));
    var ResConfig = [
        /*{
        url: "config/config.zip",
        type: Laya.Loader.BUFFER
    }, {
        url: "res3d/res3d.zip",
        type: Laya.Loader.BUFFER
    } */ //czh
    ];
    let ResGame = [
        [{
            url: "res/atlas/res/common.json",
            type: "atlas"
        }, {
            url: "res/atlas/res/ad.json",
            type: "atlas"
        }, {
            url: "res/skin/skin_1.png",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/skin_2.png",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/skin_3.png",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/skin_4.png",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/skin_5.png",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/skin_6.png",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/skin_7.png",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/skin_8.png",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/water_5.jpg",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/water_8.jpg",
            type: Laya.Loader.TEXTURE2D
        }, {
            url: "res/skin/water_10.jpg",
            type: Laya.Loader.TEXTURE2D
        }],
        [],
        [{
            url: "res3d/scene/scene.ls"
        }, {
            url: "res3d/map/Board.lh"
        }, {
            url: "res3d/map/man_skin.lh"
        }, {
            url: "res3d/map/mutou.lh"
        }, {
            url: "res3d/map/mutou_2.lh"
        }, {
            url: "res3d/map/shuye.lh"
        }, {
            url: "res3d/map/trees.lh"
        }, {
            url: "res3d/map/water.lh"
        }, {
            url: "res3d/map/jian.lh"
        }, {
            url: "res3d/map/daoposition.lh"
        }, {
            url: "res3d/map/hat_1.lh"
        }, {
            url: "res3d/map/hat_2.lh"
        }, {
            url: "res3d/map/hat_3.lh"
        }, {
            url: "res3d/map/hat_4.lh"
        }, {
            url: "res3d/map/hat_5.lh"
        }, {
            url: "res3d/map/hat_6.lh"
        }, {
            url: "res3d/map/hat_7.lh"
        }, {
            url: "res3d/map/hat_8.lh"
        }, {
            url: "res3d/map/hat_9.lh"
        }, {
            url: "res3d/map/s_fuzi_1.lh"
        }, {
            url: "res3d/map/s_fuzi_2.lh"
        }, {
            url: "res3d/map/s_fuzi_3.lh"
        }, {
            url: "res3d/map/s_fuzi_4.lh"
        }, {
            url: "res3d/map/s_fuzi_5.lh"
        }, {
            url: "res3d/map/s_fuzi_6.lh"
        }, {
            url: "res3d/map/s_fuzi_7.lh"
        }, {
            url: "res3d/map/s_fuzi_8.lh"
        }, {
            url: "res3d/map/s_fuzi_9.lh"
        }, {
            url: "res3d/map/level_1.lh"
        }, {
            url: "res3d/map/level_2.lh"
        }, {
            url: "res3d/map/level_3.lh"
        }, {
            url: "res3d/map/level_4.lh"
        }, {
            url: "res3d/map/level_5.lh"
        }, {
            url: "res3d/map/level_6.lh"
        }, {
            url: "res3d/map/level_7.lh"
        }, {
            url: "res3d/map/level_8.lh"
        }, {
            url: "res3d/map/level_9.lh"
        }, {
            url: "res3d/map/level_10.lh"
        }, {
            url: "res3d/map/level_11.lh"
        }, {
            url: "res3d/map/level_12.lh"
        }]
    ];
    class UIViewManager extends MainBase {
        constructor() {
            super();
            this.onCreate();
            this._uis = [];
        }
        onCreate() {
            this.BgLayer = new Laya.Sprite();
            this.BgLayer.name = "BgLayer";
            this.GameLayer = new Laya.Sprite();
            this.GameLayer.name = "GameLayer";
            this.UI_Main = new Laya.Sprite();
            this.UI_Main.name = "UIMain";
            this.UI_Popup = new Laya.Sprite();
            this.UI_Popup.name = "UIPopup";
            this.UI_Tips = new Laya.Sprite();
            this.UI_Tips.name = "UITips";
            var y = StageUtils.isIphoneX() ? 87 : 0;
            this.BgLayer.y = y;
            this.GameLayer.y = y;
            this.UI_Main.y = 0;
            this.UI_Popup.y = y;
            this.UI_Tips.y = y;
            Laya.stage.addChild(this.BgLayer);
            Laya.stage.addChild(this.GameLayer);
            Laya.stage.addChild(this.UI_Main);
            Laya.stage.addChild(this.UI_Popup);
            Laya.stage.addChild(this.UI_Tips);
        }
        onRegister(key_, ui_) {
            if (ui_ == null) {
                return;
            }
            if (this._uis[key_]) {
                return;
            }
            this._uis[key_] = ui_;
        }
        onGetView(key_) {
            return this._uis[key_];
        }
        onOpen(key_, cb_ = null, ...param) {
            var view = this.onGetView(key_);
            if (view == null) {
                console.error("UI_" + key_ + "不存在");
                return;
            }
            if (view.isShow) {
                return;
            }
            view.isShow = true;
            this.onSetViewParent(view);
            view.loadRes(function() {
                view.createView();
                view.visible = OpenWndAni[key_] == -1;
                view.addToParent();
                view.view.zOrder = key_;
                if (OpenWndAni[key_] == -1) view.open.apply(view, param);
            }.bind(this), function() {
                if (!OpenWndAni[key_] || OpenWndAni[key_] > -1) {
                    view.visible = false;
                    Laya.timer.frameOnce(1, this, this.onApplyOpen.bind(this, view, key_, param, cb_));
                }
            }.bind(this));
        }
        onSetViewParent(view_) {
            var parent = null;
            switch (view_.UIType) {
                case LayerEnum.Game:
                    parent = this.GameLayer;
                    break;

                case LayerEnum.Tips:
                    parent = this.UI_Tips;
                    break;

                case LayerEnum.UI:
                    parent = this.UI_Popup;
                    break;

                default:
                    parent = this.UI_Main;
                    break;
            }
            view_.myParent = parent;
        }
        onApplyOpen(view_, key_, param_, cb_) {
            view_.open.apply(view_, param_);
            view_.view && this.onShowAni(view_, key_, cb_);
        }
        onClose(key_, ...param) {
            var view = this.onGetView(key_);
            if (view == null) {
                return;
            }
            if (!view.isShow) {
                return;
            }
            view.isShow = false;
            if (view.view) {
                view.close.apply(view, param);
                this.onCloseAni(view, key_, function() {
                    view.destroyView();
                    this.onClearRes(view.getRes());
                }.bind(this));
            }
        }
        onClearRes(resources) {
            resources.forEach(function(element) {
                if (!element.islock) {
                    Laya.Loader.clearRes(element.url);
                    if (element.url.indexOf(".ani") != -1) {
                        Laya.Animation.clearCache(element.url + "#");
                    }
                }
            });
        }
        onCloseAni(view_, key_, cb_) {
            var openAniName = CloseWndAni[key_];
            if (!openAniName) openAniName = 0;
            var tweenParam = {
                alpha: 1,
                x: view_.view.x,
                y: view_.view.y
            };
            var tweenTime = 100;
            var tweenTime = 100;
            switch (openAniName) {
                case 0:
                    tweenParam.alpha = .5;
                    tweenTime = 200;
                    var tween = Laya.Tween.to(view_.view, tweenParam, tweenTime, null, Laya.Handler.create(this, () => {
                        Laya.Tween.clear(tween);
                        cb_();
                    }));
                    break;

                case 1:
                    this.onScaleTo0Effect(view_.view, cb_);
                    break;

                default:
                    break;
            }
        }
        onShowAni(view_, key_, cb_) {
            var openAniName = OpenWndAni[key_];
            if (!openAniName) openAniName = 0;
            var tweenParam = {
                alpha: 1,
                x: view_.view.x,
                y: view_.view.y
            };
            var tweenTime = 500;
            switch (openAniName) {
                case 0:
                    tweenParam.alpha = 1;
                    view_.view.alpha = .5;
                    view_.visible = true;
                    var tween = Laya.Tween.to(view_.view, tweenParam, tweenTime, null, Laya.Handler.create(this, () => {
                        Laya.Tween.clear(tween);
                        cb_ && cb_();
                    }));
                    break;

                case 1:
                    view_.visible = true;
                    view_.view.scale(.1, .1);
                    this.onScaleTo1Effect(view_.view, 0, 1, cb_);
                    return;

                default:
                    break;
            }
        }
        onScaleTo0Effect(target, completFunc) {
            if (!target) return;
            var time1 = 150;
            var time2 = 100;
            var scale1 = 1.2;
            var scale2 = 0;
            target.alpha = 1;
            var tween = Laya.Pool.getItemByClass("ScaleTo0EffectTween", Laya.Tween);
            tween.to(target, {
                alpha: 1,
                scaleX: scale1,
                scaleY: scale1
            }, time1, null, Laya.Handler.create(null, function() {
                tween.to(target, {
                    scaleX: scale2,
                    scaleY: scale2
                }, time2, null, Laya.Handler.create(null, function() {
                    Laya.Pool.recover("ScaleTo0EffectTween", tween);
                    completFunc && completFunc();
                }));
            }));
        }
        onScaleTo1Effect(target, delay, scale2 = 1, completFunc = null) {
            if (!target) return;
            var time1 = 150;
            var time2 = 100;
            var scale1 = 1.2;
            target.alpha = 0;
            var tween = Laya.Pool.getItemByClass("UI_SCALE_EFFECT", Laya.Tween);
            Laya.timer.once(delay, null, function() {
                tween.to(target, {
                    alpha: 1,
                    scaleX: scale1,
                    scaleY: scale1
                }, time1, null, Laya.Handler.create(null, function() {
                    tween.to(target, {
                        scaleX: scale2,
                        scaleY: scale2
                    }, time2, null, Laya.Handler.create(null, function() {
                        Laya.Pool.recover("UI_SCALE_EFFECT", tween);
                        completFunc && completFunc();
                    }));
                }));
            });
        }
    }
    class UIMaskView extends Laya.Sprite {
        constructor($parent) {
            super();
            $parent.parent.addChild(this);
            this.zOrder = $parent.zOrder;
            this.onInitMask();
        }
        onClickMask(e) {
            e.stopPropagation();
            return false;
        }
        isOpenBlurEffect() {
            return false;
        }
        onInitMask() {
            this.alpha = .5;
            this.pos(0, -87);
            this.graphics.clear();
            this.name = "mask";
            this.graphics.drawRect(0, 0, Laya.stage.width, 2e3, "#000000");
            this.on(Laya.Event.CLICK, this, this.onClickMask);
            this.addChild(this);
            this.zOrder = this.zOrder - 1;
        }
        close(...param) {
            this.removeSelf();
        }
        destroy() {
            super.destroy();
        }
    }
    class BaseUIView {
        constructor(uiType) {
            this._uiType = uiType;
        }
        initMask() {
            this._mask = new UIMaskView(this._view);
        }
        get UIType() {
            return this._uiType;
        }
        destroyView() {
            if (this._view) {
                this._view.removeSelf();
                this._view.destroy();
                this._view = null;
            }
        }
        getMask() {
            return this._mask;
        }
        setRes(resources) {
            this._res = resources;
        }
        get isShow() {
            return this._isShow;
        }
        set isShow(value) {
            this._isShow = value;
        }
        destroy() {}
        set visible(value) {
            if (this._view) {
                this._view.visible = value;
            }
        }
        getRes() {
            return this._res;
        }
        loadRes(loadComplete, initComplete) {
            if (this._res && this._res.length > 0) {
                Laya.loader.load(this._res, Laya.Handler.create(this, function() {
                    loadComplete();
                    initComplete();
                }));
            } else {
                loadComplete();
                initComplete();
            }
        }
        setClass(uiClass) {
            this._Class = uiClass;
        }
        createView() {
            if (!this._view) {
                this._view = new this._Class();
            }
        }
        set myParent(value) {
            this._myParent = value;
        }
        addToParent() {
            this._myParent.addChild(this._view);
        }
        get view() {
            return this._view;
        }
        open(...param) {}
        close(...param) {
            if (this._mask) this._mask.removeSelf();
        }
    }
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function(ui) {
        class BuildUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(BuildUI.uiView);
            }
        }
        BuildUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Button",
                props: {
                    x: 375,
                    var: "btnBuild",
                    stateNum: 1,
                    skin: "res/build/jx.png",
                    runtime: "script/util/ScaleButton.ts",
                    centerX: 0,
                    bottom: 300,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    width: 99,
                    var: "had",
                    height: 92,
                    centerX: 138,
                    bottom: 278
                },
                compId: 8,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        skin: "res/build/han_eff.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 10
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        skin: "res/build/had_hide.png",
                        anchorY: .2,
                        anchorX: .2
                    },
                    compId: 9
                }]
            }],
            animations: [{
                nodes: [{
                    target: 10,
                    keyframes: {
                        x: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "x",
                            index: 0
                        }],
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleY",
                            index: 5
                        }, {
                            value: 2,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleY",
                            index: 25
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleX",
                            index: 5
                        }, {
                            value: 2,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleX",
                            index: 25
                        }],
                        alpha: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "alpha",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "alpha",
                            index: 5
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "alpha",
                            index: 15
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "alpha",
                            index: 25
                        }]
                    }
                }, {
                    target: 9,
                    keyframes: {
                        x: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "x",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "x",
                            index: 5
                        }],
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .6,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "scaleY",
                            index: 25
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .6,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "scaleX",
                            index: 25
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }],
            loadList: ["res/build/jx.png", "res/build/han_eff.png", "res/build/had_hide.png"],
            loadList3D: []
        };
        ui.BuildUI = BuildUI;
        REG("ui.BuildUI", BuildUI);
        class FailUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(FailUI.uiView);
            }
        }
        FailUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    width: 636,
                    var: "topBox",
                    rotation: 0,
                    height: 284,
                    centerY: -420,
                    centerX: 0
                },
                compId: 3,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        skin: "res/common/btt.png",
                        gray: true
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 150,
                        x: 176,
                        skin: "res/fail/sb.png"
                    },
                    compId: 6
                }]
            }, {
                type: "Image",
                props: {
                    var: "btnVideo",
                    stateNum: 1,
                    skin: "res/fail/tgcg.png",
                    scaleY: .85,
                    scaleX: .92,
                    runtime: "script/util/ScaleButton.ts",
                    centerX: 0,
                    bottom: 360
                },
                compId: 7,
                child: [{
                    type: "Image",
                    props: {
                        y: 132,
                        x: 324,
                        var: "shouzhi",
                        skin: "res/common/had_hide.png",
                        anchorY: 1,
                        anchorX: 1
                    },
                    compId: 33
                }]
            }, {
                type: "Box",
                props: {
                    width: 210,
                    var: "btnBengin",
                    height: 90,
                    centerX: 0,
                    bottom: 300
                },
                compId: 10,
                child: [{
                    type: "Text",
                    props: {
                        y: 0,
                        x: 0,
                        width: 210,
                        valign: "middle",
                        text: "重新开始",
                        strokeColor: "#000000",
                        stroke: 3,
                        height: 90,
                        fontSize: 24,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 11,
                    "child": [{
                        "type": "Script",
                        "props": {
                            "runtime": "script/DelayShow.js"
                        },
                        "compId": 85741
                    }]
                }]
            }, {
                type: "Image",
                props: {
                    skin: "res/fail/k.png",
                    centerY: -50,
                    centerX: 0
                },
                compId: 22
            }],
            animations: [{
                nodes: [{
                    target: 33,
                    keyframes: {
                        var: [{
                            value: "shouzhi",
                            tweenMethod: "linearNone",
                            tween: false,
                            target: 33,
                            key: "var",
                            index: 0
                        }],
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 33,
                            key: "rotation",
                            index: 0
                        }, {
                            value: -15,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 33,
                            key: "rotation",
                            index: 10
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 33,
                            key: "rotation",
                            index: 20
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }],
            loadList: ["res/common/btt.png", "res/fail/sb.png", "res/fail/tgcg.png", "res/common/had_hide.png", "res/fail/k.png"],
            loadList3D: []
        };
        ui.FailUI = FailUI;
        REG("ui.FailUI", FailUI);
        class HomeUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(HomeUI.uiView);
            }
        }
        HomeUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    width: 359,
                    var: "btnBegin",
                    height: 67,
                    centerX: 0,
                    bottom: 300
                },
                compId: 3,
                child: [{
                    type: "Image",
                    props: {
                        y: 33,
                        skin: "res/home/img_start.png",
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 4
                }]
            }, {
                type: "Button",
                props: {
                    var: "btnShop",
                    stateNum: 1,
                    skin: "res/home/btn_shop.png",
                    runtime: "script/util/ScaleButton.ts",
                    right: 32,
                    bottom: 300
                },
                compId: 5,
                child: [{
                    type: "Image",
                    props: {
                        y: -3,
                        x: 99,
                        skin: ""
                    },
                    compId: 14
                }]
            }, {
                type: "Button",
                props: {
                    var: "btnShare",
                    stateNum: 1,
                    skin: "res/home/btn_share.png",
                    runtime: "script/util/ScaleButton.ts",
                    left: 32,
                    bottom: 300,
                    visible: false
                },
                compId: 6
            }, {
                type: "Image",
                props: {
                    width: 600,
                    var: "img_logo",
                    top: 350,
                    height: 300,
                    centerX: 0
                },
                compId: 8,
                child: [{
                    type: "Text",
                    props: {
                        y: 266,
                        x: 178,
                        width: 305,
                        var: "levelLab",
                        valign: "middle",
                        text: "Level 1",
                        strokeColor: "#000000",
                        stroke: 2,
                        height: 41,
                        fontSize: 40,
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 13
                }]
            }, {
                type: "Box",
                props: {
                    x: 10,
                    var: "boxGold",
                    top: 250,
                    right: 15
                },
                compId: 9,
                child: [{
                    type: "Image",
                    props: {
                        y: 10,
                        x: 0,
                        skin: "res/common/di.png",
                        sizeGrid: "5,5,5,5"
                    },
                    compId: 10
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 160,
                        skin: "res/common/jinbi.png"
                    },
                    compId: 11
                }, {
                    type: "Text",
                    props: {
                        y: 25,
                        x: 0,
                        width: 158,
                        var: "txtGold",
                        valign: "middle",
                        text: "1000",
                        height: 38,
                        fontSize: 38,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "right",
                        runtime: "laya.display.Text"
                    },
                    compId: 12
                }]
            }, {
                "type": "Image",
                "props": {
                    "left": 32,
                    "bottom": 300,
                    "var": "btnChouTiAd",
                    "skin": "proImg/img_cover_slide_ad_btn.png"
                },
                "compId": 847194,
                "child": [{
                    "type": "Script",
                    "props": {
                        "runtime": "script/sdk/view/PgChouTiAd$.js"
                    },
                    "compId": 857456154
                }]
            }, {
                "type": "Script",
                "props": {
                    "bottom$": 50,
                    "runtime": "script/PgAutoAddComTip$.js"
                },
                "compId": 8575234861
            }],
            animations: [{
                nodes: [{
                    target: 24,
                    keyframes: {
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 24,
                            key: "rotation",
                            index: 0
                        }, {
                            value: 10,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 24,
                            key: "rotation",
                            index: 4
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 24,
                            key: "rotation",
                            index: 8
                        }, {
                            value: -15,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 24,
                            key: "rotation",
                            index: 12
                        }, {
                            value: 10,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 24,
                            key: "rotation",
                            index: 16
                        }, {
                            value: -10,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 24,
                            key: "rotation",
                            index: 20
                        }, {
                            value: 10,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 24,
                            key: "rotation",
                            index: 24
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 24,
                            label: null,
                            key: "rotation",
                            index: 28
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 24,
                            label: null,
                            key: "rotation",
                            index: 39
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 0
            }],
            loadList: ["res/home/img_start.png", "res/home/btn_shop.png", "res/home/gth.png", "res/home/btn_share.png", "res/common/di.png", "res/common/jinbi.png", "res/common/gundongtiaodi.png", "res/common/gundongtubiaodikuang.png"],
            loadList3D: []
        };
        ui.HomeUI = HomeUI;
        REG("ui.HomeUI", HomeUI);
        class LoadingUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(LoadingUI.uiView);
            }
        }
        LoadingUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    width: 750,
                    var: "bg",
                    height: 1624,
                    centerY: 43.5,
                    centerX: 0
                },
                compId: 3
            }, {
                type: "Image",
                props: {
                    width: 539,
                    var: "proBg",
                    centerY: 260,
                    centerX: 0
                },
                compId: 4,
                child: [{
                    type: "Image",
                    props: {
                        y: 5,
                        x: 5,
                        width: 528,
                        var: "proImg",
                        height: 35
                    },
                    compId: 5
                }]
            }, {
                type: "Image",
                props: {
                    var: "logo",
                    centerY: -300,
                    centerX: 0,
                    width: 600,
                    height: 300
                },
                compId: 6
            }, {
                "type": "Script",
                "props": {
                    "runtime": "script/sdk/data/PgdkDataHhxkH5$.js"
                },
                "compId": 8579
            }, {
                "type": "Script",
                "props": {
                    "isVideoActive$": true,
                    "isAdActive$": true,
                    "channel$": "pg",
                    "appId$": "100065621",
                    "runtime": "script/sdk/platform/PgdkH5$.js"
                },
                "compId": 85710
            }, {
                "type": "Script",
                "props": {
                    "platformHandler$": "@node:85710",
                    "dataHandler$": "@node:8579",
                    "runtime": "script/sdk/Pgdk$.js"
                },
                "compId": 85711
            }, {
                "type": "Script",
                "props": {
                    "bottom$": 50,
                    "runtime": "script/PgAutoAddComTip$.js"
                },
                "compId": 8575234861
            }],
            loadList: [],
            loadList3D: []
        };
        ui.LoadingUI = LoadingUI;
        REG("ui.LoadingUI", LoadingUI);
        class LockUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(LockUI.uiView);
            }
        }
        LockUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    var: "boxTop",
                    top: 110,
                    centerX: 0
                },
                compId: 3,
                child: [{
                    type: "Image",
                    props: {
                        skin: "res/common/btt.png"
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 142,
                        x: 164.5,
                        skin: "res/lock/js.png"
                    },
                    compId: 5
                }]
            }, {
                type: "Box",
                props: {
                    width: 456,
                    var: "boxRole",
                    height: 454,
                    centerY: -120,
                    centerX: 0
                },
                compId: 7,
                child: [{
                    type: "Image",
                    props: {
                        y: 227,
                        x: 228,
                        width: 456,
                        var: "imgLight",
                        skin: "res/common/g.png",
                        height: 454,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 8
                }, {
                    type: "Image",
                    props: {
                        y: 227,
                        x: 228,
                        var: "imgLight2",
                        skin: "res/common/gg.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 9
                }, {
                    type: "Image",
                    props: {
                        y: 227,
                        x: 228,
                        var: "imgIcon"
                    },
                    compId: 10
                }]
            }, {
                type: "Button",
                props: {
                    visible: false,
                    var: "btnShare",
                    stateNum: 1,
                    skin: "res/lock/tz.png",
                    runtime: "script/util/ScaleButton.ts",
                    centerY: 230,
                    centerX: 0
                },
                compId: 11
            }, {
                type: "Box",
                props: {
                    var: "boxProgress",
                    centerY: 110,
                    centerX: 0
                },
                compId: 13,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        var: "imgProBg",
                        skin: "res/common/img_progress_bg.png"
                    },
                    compId: 14
                }, {
                    type: "Image",
                    props: {
                        y: 5,
                        x: 7,
                        width: 1,
                        var: "imgPro",
                        skin: "res/common/img_progress.png",
                        height: 37
                    },
                    compId: 15
                }, {
                    type: "Text",
                    props: {
                        y: 6,
                        x: 198,
                        width: 243,
                        var: "tPer",
                        valign: "middle",
                        text: "100%",
                        strokeColor: "#ffffff",
                        stroke: 2,
                        height: 36,
                        fontSize: 36,
                        font: "SimHei",
                        color: "#000000",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 16
                }, {
                    type: "Text",
                    props: {
                        y: 55,
                        x: 44,
                        width: 538,
                        var: "levelLab",
                        valign: "middle",
                        text: "Level5 Unlock",
                        strokeColor: "#000000",
                        stroke: 2,
                        height: 44,
                        fontSize: 36,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 17
                }]
            }, {
                type: "Box",
                props: {
                    x: 10,
                    width: 210,
                    var: "btnNext",
                    height: 90,
                    centerX: 0,
                    bottom: 300
                },
                compId: 30,
                child: [{
                    type: "Text",
                    props: {
                        y: 0,
                        x: 0,
                        width: 210,
                        visible: true,
                        valign: "middle",
                        text: "Continue",
                        strokeColor: "#000000",
                        stroke: 3,
                        height: 90,
                        fontSize: 30,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 31
                }]
            }],
            animations: [{
                nodes: [{
                    target: 8,
                    keyframes: {
                        x: [{
                            value: 228,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "x",
                            index: 0
                        }],
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 0
                        }, {
                            value: 90,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 20
                        }, {
                            value: 180,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 40
                        }, {
                            value: 270,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 60
                        }, {
                            value: 360,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 80
                        }]
                    }
                }, {
                    target: 9,
                    keyframes: {
                        x: [{
                            value: 228,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "x",
                            index: 0
                        }],
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "rotation",
                            index: 0
                        }, {
                            value: -90,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "rotation",
                            index: 20
                        }, {
                            value: -180,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "rotation",
                            index: 40
                        }, {
                            value: -270,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "rotation",
                            index: 60
                        }, {
                            value: -360,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 9,
                            key: "rotation",
                            index: 80
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }],
            loadList: ["res/common/btt.png", "res/lock/js.png", "res/common/g.png", "res/common/gg.png", "res/lock/tz.png", "res/common/img_progress_bg.png", "res/common/img_progress.png"],
            loadList3D: []
        };
        ui.LockUI = LockUI;
        REG("ui.LockUI", LockUI);
        class RealyUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(RealyUI.uiView);
            }
        }
        RealyUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 180,
                    x: 223,
                    var: "topBox",
                    top: 180,
                    centerX: 0
                },
                compId: 8,
                child: [{
                    type: "Image",
                    props: {
                        y: 56,
                        x: 114.5,
                        var: "imgRank",
                        skin: "res/realy/img_th_1.png"
                    },
                    compId: 10
                }, {
                    type: "Text",
                    props: {
                        y: 0,
                        x: 0,
                        width: 305,
                        var: "levelLab",
                        valign: "middle",
                        text: "Level 1",
                        strokeColor: "#000000",
                        stroke: 2,
                        height: 41,
                        fontSize: 40,
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 7
                }]
            }, {
                type: "Box",
                props: {
                    width: 750,
                    var: "shouBox",
                    bottom: 300
                },
                compId: 3,
                child: [{
                    type: "Image",
                    props: {
                        skin: "res/realy/jiantou.png",
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 86,
                        skin: "res/realy/zi.png",
                        centerX: -198
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 13,
                        x: 171,
                        skin: "res/realy/shouzhi.png"
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 86,
                        x: 334,
                        skin: "res/realy/zi1.png"
                    },
                    compId: 9
                }]
            }],
            animations: [{
                nodes: [{
                    target: 6,
                    keyframes: {
                        x: [{
                            value: 170,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 6,
                            key: "x",
                            index: 0
                        }, {
                            value: 540,
                            tweenMethod: "linearOut",
                            tween: true,
                            target: 6,
                            key: "x",
                            index: 30
                        }, {
                            value: 170,
                            tweenMethod: "linearIn",
                            tween: true,
                            target: 6,
                            key: "x",
                            index: 60
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }],
            loadList: ["res/realy/img_th_1.png", "res/realy/jiantou.png", "res/realy/zi.png", "res/realy/shouzhi.png", "res/realy/zi1.png"],
            loadList3D: []
        };
        ui.RealyUI = RealyUI;
        REG("ui.RealyUI", RealyUI);
        class RewardUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(RewardUI.uiView);
            }
        }
        RewardUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    skin: "res/reward/mucai.png",
                    centerY: -160,
                    centerX: 0
                },
                compId: 9
            }, {
                type: "Box",
                props: {
                    x: 20,
                    var: "boxTop",
                    top: 90,
                    centerX: 0
                },
                compId: 3,
                child: [{
                    type: "Image",
                    props: {
                        y: -23,
                        x: 0,
                        skin: "res/common/btt.png"
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 125,
                        x: 164.5,
                        skin: "res/reward/lqmc.png"
                    },
                    compId: 7
                }]
            }, {
                type: "Button",
                props: {
                    var: "btnVideo",
                    stateNum: 1,
                    skin: "res/reward/ljlq.png",
                    runtime: "script/util/ScaleButton.ts",
                    centerX: 0,
                    bottom: 360,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 4,
                child: [{
                    type: "Image",
                    props: {
                        y: 121,
                        x: 322,
                        var: "shouzhi",
                        skin: "res/common/had_hide.png",
                        rotation: 0,
                        anchorY: 1,
                        anchorX: 1
                    },
                    compId: 17
                }]
            }, {
                type: "Box",
                props: {
                    x: 10,
                    width: 133,
                    var: "btnSkip",
                    height: 48,
                    centerX: 0,
                    bottom: 300
                },
                compId: 5,
                child: [{
                    type: "Text",
                    props: {
                        width: 133,
                        valign: "middle",
                        text: "跳过",
                        strokeColor: "#000000",
                        stroke: 3,
                        height: 48,
                        fontSize: 30,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 8
                }]
            }],
            animations: [{
                nodes: [{
                    target: 4,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 4,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.2,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 4,
                            key: "scaleY",
                            index: 10
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 4,
                            key: "scaleY",
                            index: 20
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 4,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.2,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 4,
                            key: "scaleX",
                            index: 10
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 4,
                            key: "scaleX",
                            index: 20
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }, {
                nodes: [{
                    target: 17,
                    keyframes: {
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 17,
                            key: "rotation",
                            index: 0
                        }, {
                            value: -15,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 17,
                            key: "rotation",
                            index: 10
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 17,
                            key: "rotation",
                            index: 20
                        }]
                    }
                }],
                name: "ani2",
                id: 2,
                frameRate: 24,
                action: 2
            }],
            loadList: ["res/reward/mucai.png", "res/common/btt.png", "res/reward/lqmc.png", "res/reward/ljlq.png", "res/common/had_hide.png"],
            loadList3D: []
        };
        ui.RewardUI = RewardUI;
        REG("ui.RewardUI", RewardUI);
        class ShopItemUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(ShopItemUI.uiView);
            }
        }
        ShopItemUI.uiView = {
            type: "View",
            props: {
                width: 161,
                height: 160
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    width: 161,
                    var: "bgImg",
                    skin: "res/shop/xuanzhong.png",
                    height: 160
                },
                compId: 3
            }, {
                type: "Image",
                props: {
                    width: 161,
                    var: "iconImg",
                    height: 160
                },
                compId: 4
            }, {
                type: "Image",
                props: {
                    width: 161,
                    var: "selectImg",
                    skin: "res/shop/biankuang.png",
                    height: 160
                },
                compId: 5
            }, {
                type: "Box",
                props: {
                    y: 11,
                    x: 11,
                    width: 138,
                    visible: false,
                    var: "boxLock",
                    height: 139,
                    bgColor: "#000000",
                    alpha: .6
                },
                compId: 6,
                child: [{
                    type: "Image",
                    props: {
                        y: 9,
                        x: 33,
                        skin: "res/shop/wenhao.png"
                    },
                    compId: 7
                }]
            }],
            loadList: ["res/shop/xuanzhong.png", "res/shop/biankuang.png", "res/shop/wenhao.png"],
            loadList3D: []
        };
        ui.ShopItemUI = ShopItemUI;
        REG("ui.ShopItemUI", ShopItemUI);
        class ShopViewUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(ShopViewUI.uiView);
            }
        }
        ShopViewUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    var: "img_bg",
                    skin: "res/shop/bjj1.png"
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    var: "boxRole",
                    top: 120,
                    centerX: 0
                },
                compId: 4,
                child: [{
                    type: "Image",
                    props: {
                        var: "unLockSpri"
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        var: "modelImg",
                        skin: "res/shop/ques.png"
                    },
                    compId: 6
                }]
            }, {
                type: "Box",
                props: {
                    x: 0,
                    width: 750,
                    var: "boxList",
                    height: 1142,
                    bottom: -10
                },
                compId: 7,
                child: [{
                    type: "Image",
                    props: {
                        y: 71,
                        x: 0,
                        width: 750,
                        skin: "res/shop/dii.png",
                        height: 1070
                    },
                    compId: 8
                }, {
                    type: "Button",
                    props: {
                        y: 0,
                        x: 29,
                        var: "btnTab1",
                        stateNum: 1,
                        skin: "res/shop/dianji.png",
                        runtime: "script/util/ScaleButton.ts"
                    },
                    compId: 9,
                    child: [{
                        type: "Text",
                        props: {
                            y: 18,
                            x: 28.71875,
                            text: "HEAD",
                            fontSize: 40,
                            font: "SimHei",
                            color: "#ffffff",
                            bold: true,
                            runtime: "laya.display.Text"
                        },
                        compId: 10
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 0,
                        x: 207,
                        var: "btnTab2",
                        stateNum: 1,
                        skin: "res/shop/weidianji.png",
                        runtime: "script/util/ScaleButton.ts"
                    },
                    compId: 11,
                    child: [{
                        type: "Text",
                        props: {
                            y: 18,
                            x: 28,
                            text: "AXE",
                            fontSize: 40,
                            font: "SimHei",
                            color: "#ffffff",
                            bold: true,
                            runtime: "laya.display.Text"
                        },
                        compId: 12
                    }]
                }, {
                    type: "List",
                    props: {
                        y: 162,
                        x: 72,
                        width: 610,
                        var: "list",
                        spaceY: 40,
                        spaceX: 60,
                        repeatY: 3,
                        repeatX: 3,
                        height: 565
                    },
                    compId: 23,
                    child: [{
                        type: "ShopItem",
                        props: {
                            renderType: "render",
                            runtime: "ui.ShopItemUI"
                        },
                        compId: 24
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 12.5,
                        x: 665,
                        var: "btnClose",
                        stateNum: 1,
                        skin: "res/shop/X.png",
                        runtime: "script/util/ScaleButton.ts"
                    },
                    compId: 18,
                    "child": [{
                        "type": "Script",
                        "props": {
                            "runtime": "script/DelayShow.js"
                        },
                        "compId": 85741
                    }]
                }, {
                    type: "Text",
                    props: {
                        y: 797,
                        x: 130,
                        width: 494,
                        var: "txtDesc",
                        valign: "middle",
                        text: "Pass Levels Unlock",
                        height: 38,
                        fontSize: 38,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 13
                }, {
                    type: "Button",
                    props: {
                        y: 730,
                        x: 441,
                        var: "btnVideo",
                        stateNum: 1,
                        skin: "res/shop/kanShiPing.png"
                    },
                    compId: 14,
                    child: [{
                        type: "Text",
                        props: {
                            y: 54,
                            x: 88,
                            var: "txtVideo",
                            valign: "middle",
                            text: "2000",
                            strokeColor: "#000000",
                            stroke: 3,
                            fontSize: 36,
                            font: "SimHei",
                            color: "#ffffff",
                            bold: true,
                            align: "left",
                            runtime: "laya.display.Text"
                        },
                        compId: 15
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 730,
                        x: 72,
                        var: "btnRand",
                        stateNum: 1,
                        skin: "res/shop/suiJiJieSuo.png"
                    },
                    compId: 16,
                    child: [{
                        type: "Text",
                        props: {
                            y: 48,
                            x: 30,
                            width: 160,
                            var: "txtRand",
                            valign: "middle",
                            text: "200",
                            strokeColor: "#000000",
                            stroke: 3,
                            height: 36,
                            fontSize: 36,
                            font: "SimHei",
                            color: "#ffffff",
                            bold: true,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 17
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    var: "boxGold",
                    top: 120,
                    right: 15
                },
                compId: 26,
                child: [{
                    type: "Image",
                    props: {
                        y: 10,
                        x: 0,
                        skin: "res/common/di.png",
                        sizeGrid: "5,5,5,5"
                    },
                    compId: 27
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 160,
                        skin: "res/common/jinbi.png"
                    },
                    compId: 28
                }, {
                    type: "Text",
                    props: {
                        y: 25,
                        x: 0,
                        width: 158,
                        var: "txtGold",
                        valign: "middle",
                        text: "1000",
                        height: 38,
                        fontSize: 38,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "right",
                        runtime: "laya.display.Text"
                    },
                    compId: 30
                }]
            }],
            loadList: ["res/shop/bjj1.png", "res/shop/ques.png", "res/shop/dii.png", "res/shop/dianji.png", "res/shop/weidianji.png", "res/shop/X.png", "res/shop/kanShiPing.png", "res/shop/suiJiJieSuo.png", "res/common/di.png", "res/common/jinbi.png"],
            loadList3D: []
        };
        ui.ShopViewUI = ShopViewUI;
        REG("ui.ShopViewUI", ShopViewUI);
        class SuccessUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(SuccessUI.uiView);
            }
        }
        SuccessUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    width: 636,
                    var: "topBox",
                    height: 284,
                    centerY: -420,
                    centerX: 0
                },
                compId: 4,
                child: [{
                    type: "Image",
                    props: {
                        skin: "res/common/btt.png"
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 143,
                        x: 179,
                        skin: "res/success/cg.png"
                    },
                    compId: 7
                }, {
                    type: "Image",
                    props: {
                        y: 272,
                        x: 229,
                        skin: "res/common/di.png",
                        sizeGrid: "5,5,5,5"
                    },
                    compId: 13
                }, {
                    type: "Image",
                    props: {
                        y: 265,
                        x: 390,
                        skin: "res/common/jinbi.png"
                    },
                    compId: 14
                }, {
                    type: "Text",
                    props: {
                        y: 263,
                        x: 219,
                        width: 210,
                        var: "txtGold",
                        valign: "middle",
                        text: "1500",
                        strokeColor: "#000000",
                        stroke: 3,
                        height: 90,
                        fontSize: 36,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 12
                }]
            }, {
                type: "Image",
                props: {
                    var: "btnVideo",
                    stateNum: 1,
                    skin: "res/ad/sbjl.png",
                    scaleY: .85,
                    scaleX: .92,
                    runtime: "script/util/ScaleButton.ts",
                    centerY: 240,
                    centerX: 0
                },
                compId: 5,
                child: [{
                    type: "Image",
                    props: {
                        y: 132,
                        x: 332,
                        width: 99,
                        var: "shouzhi",
                        skin: "res/common/had_hide.png",
                        pivotY: 92,
                        pivotX: 99,
                        height: 92
                    },
                    compId: 40
                }]
            }, {
                type: "Box",
                props: {
                    x: 10,
                    width: 210,
                    var: "btnNext",
                    height: 90,
                    centerX: 0,
                    bottom: 300
                },
                compId: 10,
                child: [{
                    type: "Text",
                    props: {
                        y: 0,
                        x: 0,
                        width: 210,
                        visible: true,
                        valign: "middle",
                        text: "Continue",
                        strokeColor: "#000000",
                        stroke: 3,
                        height: 90,
                        fontSize: 23,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 11,
                    "child": [{
                        "type": "Script",
                        "props": {
                            "runtime": "script/DelayShow.js"
                        },
                        "compId": 85741
                    }]
                }]
            }, {
                type: "Image",
                props: {
                    skin: "res/success/x.png",
                    centerY: -20,
                    centerX: 0
                },
                compId: 15
            }],
            animations: [{
                nodes: [{
                    target: 40,
                    keyframes: {
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 40,
                            key: "rotation",
                            index: 0
                        }, {
                            value: -15,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 40,
                            key: "rotation",
                            index: 10
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 40,
                            key: "rotation",
                            index: 20
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }],
            loadList: ["res/common/btt.png", "res/success/cg.png", "res/common/di.png", "res/common/jinbi.png", "res/ad/sbjl.png", "res/common/had_hide.png", "res/success/x.png"],
            loadList3D: []
        };
        ui.SuccessUI = SuccessUI;
        REG("ui.SuccessUI", SuccessUI);
        class TryUI extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren();
                this.createView(TryUI.uiView);
            }
        }
        TryUI.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 10,
                    x: 10,
                    var: "boxTop",
                    top: 110,
                    centerX: 0
                },
                compId: 3,
                child: [{
                    type: "Image",
                    props: {
                        skin: "res/common/btt.png"
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 142,
                        x: 164.5,
                        skin: "res/try/mf.png"
                    },
                    compId: 6
                }]
            }, {
                type: "Box",
                props: {
                    y: 10,
                    x: 10,
                    width: 456,
                    var: "boxRole",
                    height: 454,
                    centerY: -120,
                    centerX: 0
                },
                compId: 4,
                child: [{
                    type: "Image",
                    props: {
                        y: 227,
                        x: 228,
                        width: 456,
                        var: "imgLight",
                        skin: "res/common/g.png",
                        height: 454,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 7
                }, {
                    type: "Image",
                    props: {
                        y: 227,
                        x: 228,
                        var: "imgLight2",
                        skin: "res/common/gg.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 8
                }, {
                    type: "Image",
                    props: {
                        y: 227,
                        x: 228,
                        var: "imgIcon"
                    },
                    compId: 9
                }]
            }, {
                type: "Button",
                props: {
                    var: "btnVideo",
                    stateNum: 1,
                    skin: "res/try/sy.png",
                    runtime: "script/util/ScaleButton.ts",
                    centerX: 0,
                    bottom: 370,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 10,
                child: [{
                    type: "Image",
                    props: {
                        y: 121,
                        x: 325,
                        var: "shouzhi",
                        skin: "res/common/had_hide.png",
                        anchorY: 1,
                        anchorX: 1
                    },
                    compId: 20
                }]
            }, {
                type: "Box",
                props: {
                    width: 133,
                    var: "btnNext",
                    height: 48,
                    centerX: 0,
                    bottom: 320
                },
                compId: 11,
                child: [{
                    type: "Text",
                    props: {
                        width: 133,
                        visible: true,
                        valign: "middle",
                        text: "No,thanks",
                        strokeColor: "#000000",
                        stroke: 3,
                        height: 48,
                        fontSize: 30,
                        font: "SimHei",
                        color: "#ffffff",
                        bold: true,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 12,
                    "child": [{
                        "type": "Script",
                        "props": {
                            "runtime": "script/DelayShow.js"
                        },
                        "compId": 85741
                    }]
                }]
            }],
            animations: [{
                nodes: [{
                    target: 7,
                    keyframes: {
                        x: [{
                            value: 228,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 7,
                            key: "x",
                            index: 0
                        }],
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 7,
                            key: "rotation",
                            index: 0
                        }, {
                            value: 90,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 7,
                            key: "rotation",
                            index: 20
                        }, {
                            value: 180,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 7,
                            key: "rotation",
                            index: 40
                        }, {
                            value: 270,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 7,
                            key: "rotation",
                            index: 60
                        }, {
                            value: 360,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 7,
                            key: "rotation",
                            index: 80
                        }]
                    }
                }, {
                    target: 8,
                    keyframes: {
                        x: [{
                            value: 228,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "x",
                            index: 0
                        }],
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 0
                        }, {
                            value: -90,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 20
                        }, {
                            value: -180,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 40
                        }, {
                            value: -270,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 60
                        }, {
                            value: -360,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 8,
                            key: "rotation",
                            index: 80
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }, {
                nodes: [{
                    target: 10,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.2,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleY",
                            index: 10
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleY",
                            index: 20
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.2,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleX",
                            index: 10
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 10,
                            key: "scaleX",
                            index: 20
                        }]
                    }
                }],
                name: "ani2",
                id: 2,
                frameRate: 24,
                action: 0
            }, {
                nodes: [{
                    target: 20,
                    keyframes: {
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 20,
                            key: "rotation",
                            index: 0
                        }, {
                            value: -15,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 20,
                            key: "rotation",
                            index: 10
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 20,
                            key: "rotation",
                            index: 20
                        }]
                    }
                }],
                name: "ani3",
                id: 3,
                frameRate: 24,
                action: 2
            }, {
                nodes: [{
                    target: 20,
                    keyframes: {
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 20,
                            key: "rotation",
                            index: 0
                        }, {
                            value: -15,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 20,
                            key: "rotation",
                            index: 10
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: true,
                            target: 20,
                            key: "rotation",
                            index: 20
                        }]
                    }
                }],
                name: "ani4",
                id: 4,
                frameRate: 24,
                action: 0
            }],
            loadList: ["res/common/btt.png", "res/try/mf.png", "res/common/g.png", "res/common/gg.png", "res/try/sy.png", "res/common/had_hide.png"],
            loadList3D: []
        };
        ui.TryUI = TryUI;
        REG("ui.TryUI", TryUI);
    })(ui || (ui = {}));
    class EventCenter extends MainBase {
        constructor() {
            super();
            this.ed = new Laya.EventDispatcher();
        }
        hasListener(type) {
            return this.ed.hasListener(EventCenter.ID + type);
        }
        event(type, data) {
            return this.ed.event(EventCenter.ID + type, data);
        }
        on(type, caller, listener, args) {
            this.ed.on(EventCenter.ID + type, caller, listener, args);
        }
        off(type, caller, listener) {
            this.ed.off(EventCenter.ID + type, caller, listener);
        }
        offAll(type) {
            this.ed.offAll(EventCenter.ID + type);
        }
    }
    EventCenter.ID = "Game_Event.";
    class TipsManager extends MainBase {
        constructor() {
            super();
        }
        static showTips(view, content, color = "#ffffff") {
            var labBox = Laya.Pool.getItemByClass("FlyTips", Laya.Box);
            labBox.name = "tipsManager";
            var labTpis = labBox.getChildByName("labTpis");
            if (labTpis == null) {
                labTpis = new Laya.Text();
            }
            labTpis.fontSize = 35;
            labTpis.bold = true;
            labTpis.height = 35;
            labTpis.width = 750;
            labTpis.x = 0;
            labTpis.removeChildren();
            labTpis.align = "center";
            labTpis.y = 0;
            labTpis.name = "labTpis";
            labTpis.color = color;
            labTpis.stroke = 8;
            labTpis.strokeColor = "#000000";
            labTpis.text = content + "";
            labBox.anchorX = .5;
            labBox.anchorY = .5;
            labBox.width = 750;
            labBox.x = Laya.stage.width / 2;
            labBox.y = Laya.stage.height / 2;
            labBox.addChild(labTpis);
            labBox.alpha = 0;
            Laya.stage.addChild(labBox);
            Laya.Tween.to(labBox, {
                alpha: 1
            }, 300);
            Laya.Tween.to(labBox, {
                y: Laya.stage.height / 2 - 150
            }, 800, null, null, 500);
            Laya.Tween.to(labBox, {
                alpha: 0
            }, 300, null, Laya.Handler.create(this, this.removeLabel, [labBox]), 800, false);
        }
        static removeLabel(labBox) {
            labBox.removeSelf();
            Laya.Tween.clearAll(labBox);
            Laya.Pool.recover("tips", labBox);
            this.labels.pop();
        }
        static onMask(e) {
            e.stopPropagation();
            return false;
        }
    }
    TipsManager.labelPools = [];
    TipsManager.labels = [];
    class MainCameraFollow extends Laya.Script3D {
        constructor() {
            super();
            this.cameraGrp = null;
            this.camera = null;
            this.moveRot = null;
            this.movePos = null;
            this.offset = null;
            this.targetSp3D = null;
            this.initPos = null;
            this.initRot = null;
            this.endTween = null;
        }
        onAwake() {
            this.cameraGrp = this.owner;
            this.camera = this.cameraGrp.getChildByName("Main Camera");
        }
        onUpdate() {
            super.onUpdate();
        }
        onLateUpdate() {
            super.onLateUpdate();
            if (this.targetSp3D && MainDirector.Ins().isPlay && !MainDirector.Ins().isFinish) {
                Laya.Vector3.add(this.offset, this.targetSp3D.transform.position, this.movePos);
                Laya.Vector3.lerp(this.cameraGrp.transform.position, this.movePos, 1, this.movePos);
                this.cameraGrp.transform.position = this.movePos;
                let curQut = this.targetSp3D.transform.rotation.clone();
                Laya.Quaternion.slerp(this.cameraGrp.transform.rotation, curQut, .1, curQut);
                this.cameraGrp.transform.rotation = curQut;
            }
        }
        onInit(restart = false) {
            this.onPrePos();
            this.targetSp3D = null;
            this.moveRot = this.cameraGrp.transform.rotationEuler.clone();
            this.offset = this.cameraGrp.transform.position.clone();
            this.camera.enableHDR = false;
            this.camera.nearPlane = .3;
            this.camera.farPlane = 18;
            this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly;
        }
        onChangeRole(role3D) {
            if (!MainDirector.Ins().isPlay) {
                this.onPrePos();
            }
            this.cameraGrp.transform.position = new Laya.Vector3(0, 0, 0);
            this.cameraGrp.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
            this.targetSp3D = role3D;
            this.offset = new Laya.Vector3();
            this.movePos = new Laya.Vector3();
            this.moveRot = this.cameraGrp.transform.rotationEuler.clone();
            Laya.Vector3.subtract(this.cameraGrp.transform.position, this.targetSp3D.transform.position, this.offset);
        }
        onShowEndPos(camPos) {
            if (camPos) {
                var camGrp = this.cameraGrp.transform.position.clone();
                var rotY = 180 * Math.atan2(camPos.x - camGrp.x, camPos.z - camGrp.z) / Math.PI;
                this.onClearEndTween();
                var tRot = this.cameraGrp.transform.rotationEuler;
                this.endTween = Laya.Tween.to(tRot, {
                    y: rotY
                }, 1500, null);
                this.endTween.update = new Laya.Handler(this, () => {
                    this.cameraGrp.transform.rotationEuler = tRot.clone();
                });
            }
        }
        onPrePos() {
            if (!this.initPos) {
                this.initPos = this.cameraGrp.transform.position.clone();
                this.initRot = this.cameraGrp.transform.rotationEuler.clone();
            }
            this.cameraGrp.transform.position = this.initPos.clone();
            this.cameraGrp.transform.rotationEuler = this.initRot.clone();
        }
        onClearEndTween() {
            if (this.endTween) {
                this.endTween.clear();
                this.endTween = null;
            }
        }
    }
    class CommonUtils {
        static onGetRandomNum(Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            return Min + Math.round(Rand * Range);
        }
        static onGetRandom(Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            return Math.floor(Min + Rand * Range);
        }
        static onDegreesToRadians(y) {
            return y / 180 * Math.PI;
        }
        static onRadiansToDegrees(y) {
            return y / Math.PI * 180;
        }
        static onRandomSortArray(arr) {
            let sort = arr => {
                let newArr = [];
                for (let i = 0, len = arr.length; i < len; i++) {
                    let j = Math.floor(Math.random() * (len - i));
                    newArr[i] = arr[j];
                    arr.splice(j, 1);
                }
                return newArr;
            };
            let newArr = sort(arr);
            return newArr;
        }
        static onDistanceSquared2D(pos1, pos2) {
            var a = Math.abs(pos1.x - pos2.x);
            var b = Math.abs(pos1.z - pos2.z);
            return a * a + b * b;
        }
        static onNextNumber(start, end) {
            if (start == end) return start;
            var i = Math.random();
            return Math.floor(i * end + (1 - i) * start + i);
        }
        static onCaluDis(pos1, pos2) {
            let o = pos1.x - pos2.x;
            let n = pos1.y - pos2.y;
            let a = pos1.z - pos2.z;
            return Math.sqrt(o * o + n * n + a * a);
        }
        static onRandomBool(t) {
            let e = 100 * t;
            return CommonUtils.onRandom(0, 100) < e;
        }
        static onRandom(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t;
        }
        static onFindModel(sprite, name) {
            if (sprite.name == name) {
                return sprite;
            } else {
                return CommonUtils.findChild(sprite["_children"], name);
            }
        }
        static findChild(spArr, name) {
            var arr = [];
            for (var i = 0; i < spArr.length; i++) {
                var child = spArr[i];
                if (child.name == name) {
                    return child;
                } else if (child.numChildren) {
                    arr = arr.concat(child._children);
                }
            }
            if (!arr.length) {
                return null;
            }
            return CommonUtils.findChild(arr, name);
        }
    }
    class MainPickUpBaseCmp extends Laya.Script3D {
        constructor() {
            super();
            this._pickInfos = [];
            this._owner3D = null;
        }
        onAwake() {
            super.onAwake();
            this._owner3D = this.owner;
        }
        onLateUpdate() {
            super.onLateUpdate();
        }
        onDestroy() {
            super.onDestroy();
        }
        onUpdate() {
            super.onUpdate();
            if (MainDirector.Ins().isPlay && !MainDirector.Ins().isOver) {
                let players = MainDirector.Ins().cmpRunPath.allPlayCmps;
                let len = players.length;
                for (let i = 0; i < len; i++) {
                    var player = players[i];
                    if (player) {
                        var dis = Laya.Vector3.distanceSquared(player.owner3D.transform.position, this._owner3D.transform.position);
                        if (dis < .8) {
                            if (player.onCollectBoard(this._pickInfos)) {
                                this.onRemoveSelf();
                                break;
                            }
                        }
                    }
                }
            }
        }
        onInit() {
            this._owner3D.active = true;
            var len = this._owner3D.numChildren;
            this._pickInfos = [];
            for (let i = 0; i < len; i++) {
                var ptSp = this._owner3D.getChildAt(i);
                var ptPos = ptSp.transform.position.clone();
                this._pickInfos.push(ptPos);
            }
            this._owner3D.destroyChildren();
        }
        onShowAllSubPicks() {
            this._owner3D.active = true;
        }
        onRemoveSelf() {
            if (this._owner3D) {
                this._owner3D.active = false;
                this._owner3D.destroy();
            }
            this.destroy();
        }
    }
    class MainTreeBaseCmp extends Laya.Script3D {
        constructor() {
            super();
            this.curStepIndex = 0;
            this.nameStr = "";
            this.owner3D = null;
            this.isCuting = false;
            this.pts = null;
            this._tree1 = null;
            this._tree2 = null;
            this._tree2Ani = null;
            this._tree3 = null;
            this._tree3Ani = null;
            this._tree4 = null;
            this._tree4Ani = null;
            this._ptGrp = null;
        }
        onAwake() {
            super.onAwake();
            this.owner3D = this.owner;
            this._tree1 = this.owner3D.getChildByName("tree_1_1");
            this._tree1.active = true;
            this._tree2 = this.owner3D.getChildByName("tree_1_2");
            this._tree2Ani = this._tree2.getComponent(Laya.Animator);
            this._tree2.active = false;
            this._tree3 = this.owner3D.getChildByName("tree_1_3");
            this._tree3Ani = this._tree3.getComponent(Laya.Animator);
            this._tree3.active = false;
            this._tree4 = this.owner3D.getChildByName("tree_1_4");
            this._tree4Ani = this._tree4.getComponent(Laya.Animator);
            this._tree4.active = false;
            this._ptGrp = this.owner3D.getChildByName("ptGrp");
        }
        onDestroy() {
            super.onDestroy();
            Laya.timer.clearAll(this);
        }
        onInit() {
            this.curStepIndex = 0;
            if (this._ptGrp && this._ptGrp.numChildren > 0) {
                this.pts = [];
                var len = this._ptGrp.numChildren;
                for (let i = 0; i < len; i++) {
                    var ptSp = this._ptGrp.getChildAt(i);
                    var ptPos = ptSp.transform.position.clone();
                    this.pts.push(ptPos);
                }
                this._ptGrp.destroyChildren();
                this._ptGrp.destroy();
            }
        }
        onPlayCutAni() {
            if (this.curStepIndex == 0) {
                this._tree1.active = false;
                this._tree2.active = true;
                this._tree3.active = false;
                this._tree4.active = false;
                this.isCuting = true;
                this.onPlayTree2Ani();
                return false;
            } else if (this.curStepIndex == 1) {
                this.isCuting = true;
                this.onPlayTree3Ani();
                return false;
            } else if (this.curStepIndex == 2) {
                this.isCuting = false;
                this.onPlayTree4Ani();
                Laya.timer.once(200, this, this.onRemoveSelf);
                return true;
            }
            return false;
        }
        onRemoveSelf() {
            if (this.owner3D) {
                this.owner3D.removeSelf();
                this.owner3D.destroy();
            }
            this.destroy();
        }
        onPlayTree2Ani() {
            if (!this._tree2Ani) {
                return;
            }
            var state = this._tree2Ani.getControllerLayer().getCurrentPlayState();
            if (state && state.animatorState && state.animatorState.name == "tree_1_2") {
                return;
            }
            if (state && state.normalizedTime >= 1) {
                return;
            }
            this._tree2Ani.play("tree_1_2", 0, 0);
            Laya.timer.clear(this, this.onOneTree2Ani);
            Laya.timer.frameLoop(1, this, this.onOneTree2Ani);
        }
        onOneTree2Ani() {
            if (!this._tree2Ani) {
                Laya.timer.clear(this, this.onOneTree2Ani);
                return;
            }
            var state = this._tree2Ani.getControllerLayer().getCurrentPlayState();
            if (state.animatorState.name == "tree_1_2" && state.normalizedTime >= 1) {
                this.isCuting = false;
                this._tree1.active = false;
                this._tree2.active = false;
                this._tree3.active = true;
                this._tree4.active = false;
                this.curStepIndex = 1;
                Laya.timer.clear(this, this.onOneTree2Ani);
            }
        }
        onPlayTree3Ani() {
            if (!this._tree3Ani) {
                return;
            }
            var state = this._tree3Ani.getControllerLayer().getCurrentPlayState();
            if (state && state.animatorState && state.animatorState.name == "tree_1_3") {
                return;
            }
            if (state && state.normalizedTime >= 1) {
                return;
            }
            this._tree3Ani.play("tree_1_3", 0, 0);
            Laya.timer.clear(this, this.onOneTree3Ani);
            Laya.timer.frameLoop(1, this, this.onOneTree3Ani);
        }
        onOneTree3Ani() {
            if (!this._tree3Ani) {
                Laya.timer.clear(this, this.onOneTree3Ani);
                return;
            }
            var state = this._tree3Ani.getControllerLayer().getCurrentPlayState();
            if (state.animatorState.name == "tree_1_3" && state.normalizedTime >= 1) {
                this.isCuting = false;
                this.curStepIndex = 2;
                this._tree1.active = false;
                this._tree2.active = false;
                this._tree3.active = false;
                this._tree4.active = true;
                Laya.timer.clear(this, this.onOneTree3Ani);
            }
        }
        onPlayTree4Ani() {
            if (!this._tree4Ani) {
                return;
            }
            var state = this._tree4Ani.getControllerLayer().getCurrentPlayState();
            if (state && state.animatorState && state.animatorState.name == "tree_1_4") {
                return;
            }
            if (state && state.normalizedTime >= 1) {
                return;
            }
            this._tree4Ani.play("tree_1_4", 0, 0);
        }
    }
    class MainPathCmp extends Laya.Script3D {
        constructor() {
            super();
            this.mPolygonPtsArr = [];
            this.mStartPos = null;
            this.mEndPos = null;
            this.mTreeCmpArr = [];
            this.mBStartZone = false;
            this.mTagsInfoArr = [];
            this.mTags2InfoArr = [];
            this.m2TagsInfoArr = [];
            this.m2Tags2InfoArr = [];
            this.m3TagsInfoArr = [];
            this.m3Tags2InfoArr = [];
            this.owner3D = null;
            this._islandsSp3D = null;
            this._mutousSp3D = null;
            this._treesSp3D = null;
            this._aiTags1 = null;
            this._aiTags2 = null;
            this._aiTags3 = null;
        }
        static onPtInPolygon(x_, y_, areaPoints) {
            let p = {
                x: x_,
                y: y_
            };
            let nCross = 0;
            let p1x, p1y, p2x, p2y;
            let len = areaPoints.length;
            for (let i = 0; i < len; i++) {
                let p1 = areaPoints[i];
                let p2 = areaPoints[(i + 1) % areaPoints.length];
                p1x = p1.x;
                p1y = p1.z;
                p2x = p2.x;
                p2y = p2.z;
                if (p1y == p2y) continue;
                if (p.y < Math.min(p1y, p2y)) continue;
                if (p.y >= Math.max(p1y, p2y)) continue;
                let tx = (p.y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x;
                if (tx > p.x) nCross++;
            }
            return nCross % 2 == 1;
        }
        onAwake() {
            this.owner3D = this.owner;
        }
        onUpdate() {
            super.onUpdate();
        }
        onLateUpdate() {
            super.onLateUpdate();
        }
        onDestroy() {
            super.onDestroy();
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
        }
        onInit() {
            if (!this.owner3D) {
                console.error("MainPathCmp owner3D=null");
                return;
            }
            this.mStartPos = this.owner3D.getChildByName("start").transform.position.clone();
            this.mEndPos = this.owner3D.getChildByName("end").transform.position.clone();
            this._islandsSp3D = this.owner3D.getChildByName("islands");
            this._mutousSp3D = this.owner3D.getChildByName("mutous");
            this._treesSp3D = this.owner3D.getChildByName("trees");
            this._aiTags1 = this.owner3D.getChildByName("aiTags1");
            this._aiTags2 = this.owner3D.getChildByName("aiTags2");
            this._aiTags3 = this.owner3D.getChildByName("aiTags3");
            this.onCreateTagsInfo();
        }
        onRemovePath() {
            this.owner3D.destroy();
            this.mPolygonPtsArr = [];
            this.mTreeCmpArr = [];
            this.mTagsInfoArr = [];
            this.mTags2InfoArr = [];
            this.m2TagsInfoArr = [];
            this.m2Tags2InfoArr = [];
            this.m3TagsInfoArr = [];
            this.m3Tags2InfoArr = [];
        }
        onShowAllPicksItems() {}
        onCreatePathItems() {
            this.mPolygonPtsArr = [];
            if (this._islandsSp3D && this._islandsSp3D.numChildren > 0) {
                this.onCreatePathIsLands();
            }
            if (this._mutousSp3D && this._mutousSp3D.numChildren > 0) {
                this.onCreatePicksInfo();
            }
            if (this._treesSp3D && this._treesSp3D.numChildren > 0) {
                this.onCreateTreeInfo();
            }
        }
        onCreateTagsInfo() {
            this.mTagsInfoArr = [];
            this.mTags2InfoArr = [];
            this.m2TagsInfoArr = [];
            this.m2Tags2InfoArr = [];
            this.m3TagsInfoArr = [];
            this.m3Tags2InfoArr = [];
            var pathTag = 0;
            var tagsSp = null;
            var tags2Sp = null;
            if (this._aiTags1) {
                pathTag = 0;
                tagsSp = this._aiTags1.getChildByName("tags");
                tags2Sp = this._aiTags1.getChildByName("tags2");
                pathTag = this.onCreateTagsSub(tagsSp, pathTag, this.mTagsInfoArr, false);
                if (!this.mBStartZone && this.mTagsInfoArr && this.mTagsInfoArr.length > 1) {
                    this.mTagsInfoArr[this.mTagsInfoArr.length - 1].isEnd = 1;
                }
                pathTag = this.onCreateTagsSub(tags2Sp, 1e3, this.mTags2InfoArr, true);
            }
            if (this._aiTags2) {
                pathTag = 0;
                tagsSp = this._aiTags2.getChildByName("tags");
                tags2Sp = this._aiTags2.getChildByName("tags2");
                pathTag = this.onCreateTagsSub(tagsSp, pathTag, this.m2TagsInfoArr, false);
                if (!this.mBStartZone && this.m2TagsInfoArr && this.m2TagsInfoArr.length > 1) {
                    this.m2TagsInfoArr[this.m2TagsInfoArr.length - 1].isEnd = 1;
                }
                pathTag = this.onCreateTagsSub(tags2Sp, 1e3, this.m2Tags2InfoArr, true);
            }
            if (this._aiTags3) {
                pathTag = 0;
                tagsSp = this._aiTags3.getChildByName("tags");
                tags2Sp = this._aiTags3.getChildByName("tags2");
                pathTag = this.onCreateTagsSub(tagsSp, pathTag, this.m3TagsInfoArr, false);
                if (!this.mBStartZone && this.m3TagsInfoArr && this.m3TagsInfoArr.length > 1) {
                    this.m3TagsInfoArr[this.m3TagsInfoArr.length - 1].isEnd = 1;
                }
                pathTag = this.onCreateTagsSub(tags2Sp, 1e3, this.m3Tags2InfoArr, true);
            }
        }
        onCreateTagsSub(tagSp, pathTag = 0, tagsArr, isTag2 = false) {
            var len = tagSp.numChildren;
            let lastTag = pathTag;
            let preTagIndex = -1;
            for (let i = 0; i < len; i++) {
                var ptSp = tagSp.getChildAt(i);
                var nameStr = ptSp.name;
                var index = nameStr.indexOf("_");
                if (index > 0) {
                    index = parseInt(nameStr.substr(index + 1));
                    if (index == 0) index = preTagIndex + 1;
                    preTagIndex = index;
                    let tag = pathTag + index;
                    lastTag = tag;
                    let tagInfo = {
                        pathID: tag,
                        pos: ptSp.transform.position.clone(),
                        rot: ptSp.transform.rotationEuler.clone(),
                        isTag2: isTag2 ? 1 : 0,
                        isEnd: 0
                    };
                    tagsArr.push(tagInfo);
                }
            }
            return pathTag;
        }
        onCreateTreeInfo() {
            this.mTreeCmpArr = [];
            var len = this._treesSp3D.numChildren;
            let tempSub3D = [];
            for (let i = 0; i < len; i++) {
                var sub3D = this._treesSp3D.getChildAt(i);
                if (sub3D) {
                    var pos = sub3D.transform.position.clone();
                    var treeSp3D = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("trees"));
                    treeSp3D.active = true;
                    treeSp3D.transform.position = pos;
                    treeSp3D.name = "prefab_tree_" + i;
                    this._treesSp3D.addChild(treeSp3D);
                    var cmp = treeSp3D.getComponent(MainTreeBaseCmp);
                    if (cmp) {
                        cmp.destroy();
                    }
                    cmp = treeSp3D.addComponent(MainTreeBaseCmp);
                    this.mTreeCmpArr.push(cmp);
                    cmp.nameStr = "tree_" + i;
                    cmp.onInit();
                    tempSub3D.push(sub3D);
                }
            }
            for (let i = 0; i < tempSub3D.length; i++) {
                var temp3D = tempSub3D[i];
                temp3D.removeSelf();
            }
        }
        onCreatePicksInfo() {
            var len = this._mutousSp3D.numChildren;
            for (let i = 0; i < len; i++) {
                var sub3D = this._mutousSp3D.getChildAt(i);
                if (sub3D && sub3D.numChildren) {
                    var cmp = sub3D.getComponent(MainPickUpBaseCmp);
                    if (!cmp) {
                        cmp = sub3D.addComponent(MainPickUpBaseCmp);
                        cmp.onInit();
                    }
                }
            }
        }
        onCreatePathIsLands() {
            let len = this._islandsSp3D.numChildren;
            for (let i = 0; i < len; i++) {
                var sub3D = this._islandsSp3D.getChildAt(i);
                if (sub3D && sub3D.name.indexOf("island") >= 0) {
                    this.onCreateSubIsLands(sub3D);
                }
            }
        }
        onCreateSubIsLands(sub3D) {
            if (!sub3D || sub3D.numChildren < 0) {
                return;
            }
            var len = sub3D.numChildren;
            var ptsArr = [];
            for (let i = 0; i < len; i++) {
                var ptSp = sub3D.getChildAt(i);
                var ptPos = ptSp.transform.position.clone();
                ptsArr.push(ptPos);
            }
            this.mPolygonPtsArr.push({
                pts: ptsArr
            });
            sub3D.destroyChildren();
        }
    }
    class MainEndCmp extends Laya.Script3D {
        constructor() {
            super();
            this.mPolygonPtsArr = [];
            this.mCamPosSp = null;
            this.mHouseCountArr = [];
            this.owner3D = null;
            this._endCount = 0;
            this._ptFinish = [];
            this._caidaiSp = null;
            this._caidai_1_skp = null;
            this._caidai_2_skp = null;
            this._caidai2Sp = null;
            this._caidai2_1_skp = null;
            this._caidai2_2_skp = null;
            this._gongSp = null;
            this._houseGrp = null;
            this._smokeGrp = null;
            this._smoke_1_skp = null;
            this._smoke_2_skp = null;
            this._smoke_3_skp = null;
        }
        onAwake() {
            super.onAwake();
            this.owner3D = this.owner;
            this._caidaiSp = this.owner3D.getChildByName("caidai");
            if (this._caidaiSp) {
                this._caidaiSp.transform.localScale = new Laya.Vector3(.1, .1, .1);
                this._caidai_1_skp = this._caidaiSp.getChildByName("caidai_1");
                this._caidai_1_skp.particleSystem.play();
                this._caidai_2_skp = this._caidaiSp.getChildByName("caidai_2");
                this._caidai_2_skp.particleSystem.play();
            }
            this._caidai2Sp = this.owner3D.getChildByName("caidai2");
            if (this._caidai2Sp) {
                this._caidai2Sp.transform.localRotationY = 180;
                this._caidai2Sp.transform.localScale = new Laya.Vector3(.1, .1, .1);
                this._caidai2_1_skp = this._caidai2Sp.getChildByName("caidai_1");
                this._caidai2_1_skp.particleSystem.play();
                this._caidai2_2_skp = this._caidai2Sp.getChildByName("caidai_2");
                this._caidai2_2_skp.particleSystem.play();
            }
            this._gongSp = CommonUtils.onFindModel(this.owner3D, "gong");
            this._smokeGrp = this.owner3D.getChildByName("smoke");
            if (this._smokeGrp) {
                this._smokeGrp.transform.localScale = new Laya.Vector3(.1, .1, .1);
                this._smoke_1_skp = this._smokeGrp.getChildByName("smoke_1");
                this._smoke_1_skp.particleSystem.play();
                this._smoke_2_skp = this._smokeGrp.getChildByName("smoke_2");
                this._smoke_2_skp.particleSystem.play();
                this._smoke_3_skp = this._smokeGrp.getChildByName("smoke_3");
                this._smoke_3_skp.particleSystem.play();
            }
            this._houseGrp = this.owner3D.getChildByName("house");
            if (this._houseGrp) {
                this.mHouseCountArr = [];
                for (let i = 0; i < this._houseGrp.numChildren; i++) {
                    var subSp = this._houseGrp.getChildAt(i);
                    if (subSp && subSp.numChildren > 0) {
                        for (let j = 0; j < subSp.numChildren; j++) {
                            var sub2Sp = subSp.getChildAt(j);
                            sub2Sp.active = false;
                        }
                        this.mHouseCountArr.push(subSp.numChildren);
                    }
                }
            }
            Laya.timer.once(100, this, this.onceCaidaiAni);
            Laya.timer.once(100, this, this.onceSmokeAni);
        }
        onLateUpdate() {
            super.onLateUpdate();
        }
        onUpdate() {
            super.onUpdate();
            if (MainDirector.Ins().isPlay && !MainDirector.Ins().isOver) {
                let players = MainDirector.Ins().cmpRunPath.allPlayCmps;
                let len = players.length;
                let pos = this.owner3D.transform.position;
                for (let i = 0; i < len; i++) {
                    var player = players[i];
                    if (!player) {
                        console.error("MainEndCmp player==null");
                        continue;
                    }
                    var posPlayer = player.owner3D.transform.position;
                    if (posPlayer && player.mFinishCount <= 0) {
                        var dis = CommonUtils.onDistanceSquared2D(pos, posPlayer);
                        if (dis < 2) {
                            var isFinish = MainPathCmp.onPtInPolygon(posPlayer.x, posPlayer.z, this._ptFinish);
                            if (isFinish && player.isRole) {
                                this._endCount++;
                                player.mFinishCount = this._endCount;
                                if (player.mFinishCount == 1) {
                                    player.mIsHaveReward = true;
                                    player.onFinish();
                                } else {
                                    player.onFinish();
                                }
                            } else if (isFinish && player.isRole == false) {
                                this._endCount++;
                                player.mFinishCount = this._endCount;
                                player.onFinish();
                            }
                        }
                    } else {}
                }
            }
        }
        onDestroy() {
            super.onDestroy();
            Laya.timer.clearAll(this);
        }
        onInit() {
            if (!this.owner3D) {
                console.error("MainEndCmp owner3D=null");
                return;
            }
            this.onCreatePoint();
            this.onHouseActive();
            this.onGongCan(true);
        }
        onStartGame() {
            this._endCount = 0;
        }
        onPlayCaidaiAni() {
            if (this._caidaiSp) {
                this._caidaiSp.active = true;
                this._caidai_1_skp.active = true;
                this._caidai_1_skp.particleSystem.play();
                this._caidai_2_skp.active = true;
                this._caidai_2_skp.particleSystem.play();
            }
            if (this._caidai2Sp) {
                this._caidai2Sp.active = true;
                this._caidai2_1_skp.active = true;
                this._caidai2_1_skp.particleSystem.play();
                this._caidai2_2_skp.active = true;
                this._caidai2_2_skp.particleSystem.play();
            }
            Laya.timer.once(2e3, this, this.onceCaidaiAni);
        }
        onPlayeSmokeAni(isTrue) {
            if (isTrue && this._smokeGrp) {
                this._smokeGrp.active = true;
                this._smokeGrp.transform.position = this.onGetCamPos();
                this._smoke_1_skp.active = true;
                this._smoke_1_skp.particleSystem.play();
                this._smoke_2_skp.active = true;
                this._smoke_2_skp.particleSystem.play();
                this._smoke_3_skp.active = true;
                this._smoke_3_skp.particleSystem.play();
            } else {
                this.onceSmokeAni();
            }
        }
        onGongCan(isTrue) {
            if (this._gongSp) {
                this._gongSp.active = isTrue;
            }
        }
        onGetCamPos() {
            var camPos = null;
            var houseIndex = 0;
            var houseNum = MainDirector.Ins().houseNum + 1;
            var houseCount = houseNum % 21 > 0 ? houseNum % 21 : 21;
            var index = 0;
            for (let i = 0; i < this.mHouseCountArr.length; i++) {
                index = index + this.mHouseCountArr[i];
                houseIndex++;
                if (index >= houseCount) {
                    break;
                }
            }
            var sp = this._houseGrp.getChildByName("house_" + houseIndex);
            camPos = sp.transform.position.clone();
            return camPos;
        }
        onHouseActive() {
            if (this._houseGrp == null) {
                console.error("EndCmp house =null");
                return;
            }
            var index = 0;
            var houseNum = MainDirector.Ins().houseNum;
            var houseCount = houseNum % 21 > 0 ? houseNum % 21 : houseNum > 0 ? 21 : 0;
            for (let i = 0; i < this._houseGrp.numChildren; i++) {
                var subSp = this._houseGrp.getChildAt(i);
                if (subSp && subSp.numChildren) {
                    for (let j = 0; j < subSp.numChildren; j++) {
                        var sub2Sp = subSp.getChildAt(j);
                        index++;
                        if (index <= houseCount) {
                            sub2Sp.active = true;
                        } else {
                            sub2Sp.active = false;
                        }
                    }
                }
            }
        }
        onCreatePoint() {
            this.mPolygonPtsArr = [];
            var ptEndSp3D = this.owner3D.getChildByName("ptEnd");
            var len = ptEndSp3D.numChildren;
            var ptsArr = [];
            for (let j = 0; j < len; j++) {
                var ptSp = ptEndSp3D.getChildAt(j);
                var ptPos = ptSp.transform.position.clone();
                ptsArr.push(ptPos);
            }
            this.mPolygonPtsArr.push({
                pts: ptsArr
            });
            var ptFinishSp3D = this.owner3D.getChildByName("ptFinish");
            var fLen = ptFinishSp3D.numChildren;
            this._ptFinish = [];
            for (let k = 0; k < fLen; k++) {
                var ptfSp = ptFinishSp3D.getChildAt(k);
                var ptfPos = ptfSp.transform.position.clone();
                this._ptFinish.push(ptfPos);
            }
        }
        onceCaidaiAni() {
            Laya.timer.clear(this, this.onceCaidaiAni);
            if (this._caidaiSp) {
                this._caidaiSp.transform.localScale = new Laya.Vector3(1, 1, 1);
                this._caidai_1_skp.active = false;
                this._caidai_2_skp.active = false;
                this._caidaiSp.active = false;
            }
            if (this._caidai2Sp) {
                this._caidai2Sp.transform.localScale = new Laya.Vector3(1, 1, 1);
                this._caidai2_1_skp.active = false;
                this._caidai2_2_skp.active = false;
                this._caidai2Sp.active = false;
            }
        }
        onceSmokeAni() {
            Laya.timer.clear(this, this.onceSmokeAni);
            if (this._smokeGrp) {
                this._smokeGrp.transform.localScale = new Laya.Vector3(1, 1, 1);
                this._smoke_1_skp.active = false;
                this._smoke_2_skp.active = false;
                this._smoke_3_skp.active = false;
                this._smokeGrp.active = false;
            }
        }
    }
    class MainPlayerCmp extends Laya.Script3D {
        constructor() {
            super();
            this.owner3D = null;
            this.isRole = false;
            this.index = 0;
            this.nameStr = "自己";
            this.mBoradColor = new Laya.Vector4();
            this.mCurBoardCount = 0;
            this.mCurBoardPlank = 0;
            this.mFinishCount = 0;
            this.isStart = false;
            this.isFinish = false;
            this.mIsHaveReward = false;
            this.isCutAni = false;
            this.isCutComplete = true;
            this.isOnceTimeCut = false;
            this.isStopCut = false;
            this.isStopAni = false;
            this.isDownMove = false;
            this.enableTouch = false;
            this.mFloorType = 1;
            this.mPlayerState = 0;
            this.aiSpeed = 2;
            this.roleSpeed = 5;
            this.speed = 0;
            this.curSpeed = 0;
            this.accSpeed = 0;
            this._countTweenType = 0;
            this._playerAni = null;
            this._isDropingBoard = false;
            this._boardsSp = null;
            this._bridgeFrontTag = null;
            this._armsSp3D = null;
            this._headSp3D = null;
            this._manSp3D = null;
            this.addBoardAni = null;
            this.isBoardAni = false;
            this.skpArms = null;
            this.skpArmsSp3D = null;
            this._boardStaticList = [];
            this._callBackTree = null;
            this._aiTime = 0;
            this._aiMoveTime = 0;
            this._aiIsMove = false;
            this._aiBigCircle = 30;
            this._aiSmallCircle = 12;
            this._aiCurPathNodeId = 0;
            this._aiCurPathNode = null;
            this._aiPrePathNode = null;
            this._ai_move_to_big_path_rate = .1;
            this._ai_move_to_small_path_rate = .6;
        }
        onAwake() {
            super.onAwake();
            this.owner3D = this.owner;
            this._playerAni = this.owner3D.getComponent(Laya.Animator);
        }
        onLateUpdate() {}
        onDestroy() {
            super.onDestroy();
        }
        onUpdate() {
            if (!this.isStart) return;
            if (this.isFinish) return;
            var t = Laya.timer.delta / 1e3;
            if (t > .1) {
                t = .1;
            }
            if (MainDirector.Ins().isPlay && !MainDirector.Ins().isOver && this._aiIsMove) {
                this._aiTime += t;
                if (this._aiTime > this._aiMoveTime) {
                    this._aiTime = 0;
                    this._aiIsMove = false;
                    this.onSearchNextTarPoint();
                } else {
                    var pos = this.owner3D.transform.position;
                    var rot = this.owner3D.transform.rotationEuler;
                    var rotY = CommonUtils.onDegreesToRadians(rot.y);
                    var dis = t * (this.speed * (1 + this.accSpeed)) / MainDirector.Ins().mSpeedRate;
                    var posX = pos.x + Math.sin(rotY) * dis;
                    var posY = pos.y;
                    var posZ = pos.z + Math.cos(rotY) * dis;
                    this.owner3D.transform.position = new Laya.Vector3(posX, posY, posZ);
                    var type = MainDirector.Ins().cmpRunPath.onCheckFloor(posX, posZ);
                    if (type == 0) {
                        this.onWater();
                    } else {
                        this.onRoad(type);
                    }
                }
            }
        }
        onSearchNextTarPoint() {
            if (this.isFinish) {
                return;
            }
            var rotPos = CommonUtils.onNextNumber(-100, 100) / 100;
            let findArr = [];
            let findArr2 = [];
            let pathNodeGroup = [];
            if (this.index == 2) {
                pathNodeGroup = MainDirector.Ins().cmpRunPath.mTags2List;
            } else if (this.index == 3) {
                pathNodeGroup = MainDirector.Ins().cmpRunPath.mTags3List;
            } else {
                pathNodeGroup = MainDirector.Ins().cmpRunPath.mTagsList;
            }
            var ownerPos = this.owner3D.transform.position;
            let minDistanceNode = null;
            let minDis = 1e3;
            for (let i = 0; i < pathNodeGroup.length; i++) {
                var dis = CommonUtils.onCaluDis(ownerPos, pathNodeGroup[i].pos);
                if (dis <= this._aiBigCircle) {
                    findArr.push(pathNodeGroup[i]);
                }
                if (dis <= this._aiSmallCircle) {
                    findArr2.push(pathNodeGroup[i]);
                }
                if (dis < minDis && !pathNodeGroup[i].isTag2 && pathNodeGroup[i].pathID != this._aiCurPathNodeId) {
                    minDistanceNode = pathNodeGroup[i];
                }
            }
            let maxPathID = 0;
            let maxNode = null;
            let maxArr = this.onFindMaxPathID(findArr, this._aiCurPathNodeId);
            if (this._aiCurPathNode) {
                if (!this._aiCurPathNode.isTag2) {
                    if (maxArr[0]) {
                        maxPathID = maxArr[0].pathID;
                        maxNode = maxArr[0];
                        let tNode = MainDirector.Ins().cmpRunPath.onGetPathNode(maxPathID, this);
                        if (tNode) {
                            let tPos = tNode.pos;
                            let tDis = CommonUtils.onCaluDis(ownerPos, tPos);
                            if (2 * this.mCurBoardCount >= tDis && CommonUtils.onRandomBool(this._ai_move_to_big_path_rate)) {
                                this._aiCurPathNodeId = maxPathID;
                                console.log("Player 路面 0.1的概率走捷径 name" + this.nameStr);
                                this.onDoMove(rotPos);
                                return;
                            }
                        }
                    }
                } else {
                    if (maxArr[0]) {
                        if (maxArr[0].isTag2 && maxArr[0].pathID > this._aiCurPathNodeId) {
                            maxPathID = maxArr[0].pathID;
                            maxNode = maxArr[0];
                            let aNode = MainDirector.Ins().cmpRunPath.onGetPathNode(maxPathID, this);
                            if (aNode) {
                                let aPos = aNode.pos;
                                var aDis = CommonUtils.onCaluDis(ownerPos, aPos);
                                if (2 * this.mCurBoardCount >= aDis) {
                                    this._aiCurPathNodeId = maxPathID;
                                    console.log("Player 柱子 判断搭桥是否可以过去 name =" + this.nameStr);
                                    this.onDoMove(rotPos);
                                    return;
                                }
                            }
                        }
                    }
                    if (maxArr[1] || minDistanceNode) {
                        if (maxArr[1]) {
                            maxPathID = maxArr[1].pathID;
                            maxNode = maxArr[1];
                        } else {
                            if (minDistanceNode) {
                                maxPathID = minDistanceNode.pathID;
                                maxNode = minDistanceNode;
                            }
                        }
                        let bBode = MainDirector.Ins().cmpRunPath.onGetPathNode(maxPathID, this);
                        if (bBode) {
                            this._aiCurPathNodeId = maxPathID;
                            console.log("Player 柱子 判断搭桥是否可以过去 name =" + this.nameStr);
                            this.onDoMove(rotPos);
                            return;
                        }
                    }
                }
            }
            if (findArr2.length <= 0) {
                this.onDoMove(rotPos, true);
            } else {
                let maxPathID = 0;
                let maxNode = null;
                let maxArr = this.onFindMaxPathID(findArr2, this._aiCurPathNodeId);
                if (!this._aiCurPathNode && maxArr[0]) {
                    maxPathID = maxArr[0].pathID;
                    maxNode = maxArr[0];
                    this._aiCurPathNodeId = maxPathID;
                    this.onDoMove(rotPos);
                    return;
                }
                if (this._aiCurPathNode) {
                    if (!this._aiCurPathNode.isTag2) {
                        if (maxArr[0]) {
                            maxPathID = maxArr[0].pathID;
                            maxNode = maxArr[0];
                            let cNode = MainDirector.Ins().cmpRunPath.onGetPathNode(maxPathID, this);
                            if (cNode) {
                                let cPos = cNode.pos;
                                let cDis = CommonUtils.onCaluDis(ownerPos, cPos);
                                if (2 * this.mCurBoardCount >= cDis && CommonUtils.onRandomBool(this._ai_move_to_big_path_rate)) {
                                    this._aiCurPathNodeId = maxPathID;
                                    this.onDoMove(rotPos);
                                    return;
                                }
                            }
                        }
                    } else {
                        if (maxArr[0]) {
                            if (maxArr[0].isTag2 && maxArr[0].pathID > this._aiCurPathNodeId) {
                                maxPathID = maxArr[0].pathID;
                                maxNode = maxArr[0];
                                let dNode = MainDirector.Ins().cmpRunPath.onGetPathNode(maxPathID, this);
                                if (dNode) {
                                    let dPos = dNode.pos;
                                    let dDis = CommonUtils.onCaluDis(ownerPos, dPos);
                                    if (2 * this.mCurBoardCount >= dDis) {
                                        this._aiCurPathNodeId = maxPathID;
                                        this.onDoMove(rotPos);
                                        return;
                                    }
                                }
                            }
                        }
                        if (maxArr[1] || minDistanceNode) {
                            if (maxArr[1]) {
                                maxPathID = maxArr[1].pathID;
                                maxNode = maxArr[1];
                            } else {
                                if (minDistanceNode) {
                                    maxPathID = minDistanceNode.pathID;
                                    maxNode = minDistanceNode;
                                }
                            }
                            let eNode = MainDirector.Ins().cmpRunPath.onGetPathNode(maxPathID, this);
                            if (eNode) {
                                this._aiCurPathNodeId = maxPathID;
                                this.onDoMove(rotPos);
                                return;
                            }
                        }
                    }
                }
                this.onDoMove(rotPos, true);
            }
        }
        onDoMove(rot, autoAdd = false) {
            if (autoAdd && (!this._aiCurPathNode || !this._aiCurPathNode.isEnd)) {
                this._aiCurPathNodeId++;
            }
            if (this._aiCurPathNode && this._aiCurPathNode.isEnd) {
                return;
            }
            let node = MainDirector.Ins().cmpRunPath.onGetPathNode(this._aiCurPathNodeId, this);
            if (!node) {
                console.log("domove err");
                this.onDoMove(rot, autoAdd);
                return;
            }
            this._aiPrePathNode = this._aiCurPathNode;
            this._aiCurPathNode = node;
            if (!node) {
                console.log("domove null");
            }
            let tPos = this._aiCurPathNode.pos;
            let ownerPos = this.owner3D.transform.position;
            this._aiIsMove = true;
            this.onComputerMoveTime();
            let rotY = 180 * Math.atan2(tPos.x - ownerPos.x, tPos.z - ownerPos.z) / Math.PI;
            this.owner3D.transform.localRotationEulerY = rotY;
            this.onPlayRunAni();
        }
        onComputerMoveTime() {
            if (this._aiIsMove) {
                let tPos = this._aiCurPathNode.pos;
                let owner3DPos = this.owner3D.transform.position;
                let dis = CommonUtils.onCaluDis(owner3DPos, tPos);
                this._aiMoveTime = dis / (this.speed * (1 + this.accSpeed) / MainDirector.Ins().mSpeedRate);
                this._aiTime = 0;
            }
        }
        onFindMaxPathID(findArr, curPathNodeId) {
            let arr = [];
            let maxPathID = 0;
            let maxNode = null;
            for (let j = 0; j < findArr.length; j++) {
                if (findArr[j].pathID > maxPathID && findArr[j].pathID != curPathNodeId) {
                    maxPathID = findArr[j].pathID;
                    maxNode = findArr[j];
                }
                arr.push(maxNode);
            }
            for (let j = 0; j < findArr.length; j++) {
                if (!findArr[j].isTag2 && findArr[j].pathID > maxPathID && findArr[j].pathID != curPathNodeId) {
                    maxPathID = findArr[j].pathID;
                    maxNode = findArr[j];
                }
            }
            arr.push(maxNode);
            return arr;
        }
        onInit(initPos_) {
            if (initPos_) {
                this.owner3D.transform.position = initPos_;
            }
            this._boardsSp = CommonUtils.onFindModel(this.owner3D, "mutou");
            if (!this._boardsSp) {
                this._boardsSp = this.owner3D.addChild(new Laya.Sprite3D());
                this._boardsSp.name = "boards";
                this._boardsSp.transform.localPosition = new Laya.Vector3(0, .7, -.05);
                this._boardsSp.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            } else {
                this._boardsSp.destroyChildren();
            }
            if (this.isRole) {
                console.log("Player onInit isRole" + this.isRole);
                this.addBoardAni = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("mutou"));
                this.addBoardAni.active = true;
                this.addBoardAni.transform.localPosition = new Laya.Vector3(0, 0, 0);
                this.addBoardAni.transform.localScale = new Laya.Vector3(.1, .1, .1);
                this._boardsSp.addChild(this.addBoardAni);
                this.isBoardAni = true;
                this.skpArmsSp3D = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("daoposition"));
                this.skpArmsSp3D.active = true;
                this.skpArmsSp3D.transform.localPosition = new Laya.Vector3(0, 0, 0);
                this.skpArmsSp3D.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
                this.skpArmsSp3D.transform.localScale = new Laya.Vector3(1, 1, 1);
                this.owner3D.addChild(this.skpArmsSp3D);
                if (this.skpArmsSp3D) {
                    this.skpArms = this.skpArmsSp3D.getChildByName("daoguang");
                }
                Laya.timer.once(100, this, this.onceBoardAni);
            }
            this._armsSp3D = CommonUtils.onFindModel(this.owner3D, "wuqi");
            if (this._armsSp3D) {
                this._armsSp3D.destroyChildren();
            }
            this._headSp3D = CommonUtils.onFindModel(this.owner3D, "Bip001 Head");
            if (this._headSp3D) {
                this._headSp3D.destroyChildren();
            }
            this._manSp3D = CommonUtils.onFindModel(this.owner3D, "Man_1");
            this._bridgeFrontTag = this.owner3D.getChildByName("BridgeFrontTag");
            if (!this._bridgeFrontTag) {
                this._bridgeFrontTag = this.owner3D.addChild(new Laya.Sprite3D());
                this._bridgeFrontTag.name = "BridgeFrontTag";
                this._bridgeFrontTag.transform.localPosition = new Laya.Vector3(0, 0, .1);
                this._bridgeFrontTag.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            }
            this.onPlayDaijiAni();
            this._boardStaticList = [];
            if (this.isRole == false) {
                this.mCurBoardCount = CommonUtils.onGetRandom(40, 80);
                var randSpeed = Math.random() * 2 + 2;
                this.aiSpeed = Math.round(randSpeed * 100) / 100;
                var ceilPlank = Math.ceil(this.mCurBoardCount / 6);
                console.log("Player name=" + this.nameStr + " aiSpeed=" + this.aiSpeed);
                this.onAddMessBoard(ceilPlank);
            } else {
                var rolePlank = 0;
                if (MainDirector.Ins().levelNum > 1) {
                    this.mCurBoardCount = 10;
                    rolePlank = Math.ceil(this.mCurBoardCount / 2);
                } else {
                    this.mCurBoardCount = 2;
                    rolePlank = Math.ceil(this.mCurBoardCount / 2);
                }
                this.onAddMessBoard(rolePlank);
            }
            this._aiCurPathNodeId = 0;
            this._aiCurPathNode = null;
        }
        onceBoardAni() {
            Laya.timer.clear(this, this.onceBoardAni);
            this.addBoardAni.transform.localScale = new Laya.Vector3(1, 1, 1);
            this.addBoardAni.active = false;
            this.isBoardAni = false;
        }
        onSkinHead(roleID_ = 0) {
            if (MainDirector.Ins().showId == roleID_ && roleID_ > 0) {
                return;
            }
            this._headSp3D.destroyChildren();
            if (this.isRole && roleID_ > 0) {
                MainDirector.Ins().showId == roleID_;
                var headSp = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("hat_" + roleID_));
                headSp.active = true;
                this._headSp3D.addChild(headSp);
                headSp.transform.localPosition = new Laya.Vector3(0, 0, 0);
                headSp.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            } else {
                var aiRoleID = CommonUtils.onGetRandom(1, 9);
                var aiHeadSp = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("hat_" + aiRoleID));
                aiHeadSp.active = true;
                this._headSp3D.addChild(aiHeadSp);
                aiHeadSp.transform.localPosition = new Laya.Vector3(0, 0, 0);
                aiHeadSp.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            }
            if (this._manSp3D) {
                var skinIndex = CommonUtils.onGetRandom(1, 9);
                var skinPath = "res/skin/skin_" + skinIndex + ".png";
                var guanziSpr = this._manSp3D.skinnedMeshRenderer.material;
                Laya.Texture2D.load(skinPath, Laya.Handler.create(this, function(txt) {
                    guanziSpr.albedoTexture = txt;
                }));
            }
        }
        onSkinArms() {
            this._armsSp3D.destroyChildren();
            if (this.isRole) {
                var amrsID = MainDirector.Ins().armsId;
                var sp3D = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("s_fuzi_" + amrsID));
                sp3D.active = true;
                this._armsSp3D.addChild(sp3D);
                sp3D.transform.localPosition = new Laya.Vector3(0, 0, 0);
                sp3D.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            } else {
                var randAmrsID = CommonUtils.onGetRandom(1, 9);
                var aiSp3D = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("s_fuzi_" + randAmrsID));
                aiSp3D.active = true;
                this._armsSp3D.addChild(aiSp3D);
                aiSp3D.transform.localPosition = new Laya.Vector3(0, 0, 0);
                aiSp3D.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            }
        }
        onWater() {
            this.mFloorType != 0 && (this.mFloorType = 0);
            if (this.mCurBoardCount <= 0) {
                if (this.mFloorType == 0) {
                    this.onDoJump();
                    this.onShowRunAddSpeed(0);
                } else {
                    console.error("PlayerCmp不可能存在 mFloorType=" + this.mFloorType);
                }
            } else {
                this._isDropingBoard = true;
                if (this.onDoDropBoard()) {
                    this.onShowRunAddSpeed(2);
                } else {
                    this.onShowRunAddSpeed(0);
                }
            }
        }
        onRoad(type) {
            this.mFloorType = 1;
            this._isDropingBoard = false;
            if (type == 2) {
                this.onShowRunAddSpeed(2);
            } else {
                this.onShowRunAddSpeed(0);
            }
        }
        onShowRunAddSpeed(type) {
            if (type > 0) {
                if (this.isRole) {
                    this.accSpeed = .35;
                } else {
                    this.accSpeed = .1;
                }
            } else {
                this.accSpeed = 0;
            }
        }
        onDoDropBoard() {
            if (this.isFinish) return false;
            if (this.mCurBoardCount <= 0) {
                this._isDropingBoard = false;
                if (this.mFloorType == 0) {
                    this.onDoJump();
                }
                return false;
            }
            this.mCurBoardCount -= 1;
            var ceilPlank;
            if (this.isRole == false) {
                ceilPlank = Math.ceil(this.mCurBoardCount / 6);
            } else {
                MainMusic.Ins().playSound(MusicConfig.board);
                ceilPlank = Math.ceil(this.mCurBoardCount / 2);
            }
            if (this.mCurBoardPlank > 0 && this._boardStaticList.length > 0 && this.mCurBoardPlank != ceilPlank) {
                let plank = this._boardStaticList.pop();
                plank.removeSelf();
                Laya.Pool.recover("plank_item", plank);
            }
            this.mCurBoardPlank = ceilPlank;
            var pos = this.owner3D.transform.position.clone();
            var rot = this.owner3D.transform.rotationEuler.clone();
            MainDirector.Ins().cmpRunPath.onCreateCheckBoard(pos.x, pos.z, rot, this.isRole);
            if (this.isRole) {}
            return true;
        }
        onDoJump() {
            if (this.mPlayerState != 2) {
                this.mPlayerState = 2;
                if (this.isRole) {}
                this.onPlayShuaiAni();
                this.onClearJumpMoveTween();
                let tPos = this.owner3D.transform.position;
                this.mJumpTween = Laya.Tween.to(tPos, {
                    y: .8
                }, 400, Laya.Ease.linearNone, Laya.Handler.create(this, this.onJumpToZero));
                this.mJumpTween.update = new Laya.Handler(this, () => {
                    this.owner3D.transform.position = tPos.clone();
                });
            }
        }
        onJumpToZero() {
            this.onClearJumpMoveTween();
            let tPos = this.owner3D.transform.position;
            this.mJumpTween = Laya.Tween.to(tPos, {
                y: 0
            }, 400, Laya.Ease.linearNone, Laya.Handler.create(this, this.onJumpFinish));
            this.mJumpTween.update = new Laya.Handler(this, () => {
                this.owner3D.transform.position = tPos.clone();
            });
        }
        onJumpFinish() {
            this.onClearJumpMoveTween();
            if (this.isFinish) {
                console.log("Player 到达中终 name=" + this.nameStr);
                return;
            }
            if (this.mFloorType == 0) {
                this.speed = 0;
                this._aiIsMove = false;
                this.curSpeed = 0;
                var tPos = this.owner3D.transform.position;
                this.mJumpTween = Laya.Tween.to(tPos, {
                    y: -1
                }, 600, Laya.Ease.linearNone, Laya.Handler.create(this, this.onDropFinish));
                this.mJumpTween.update = new Laya.Handler(this, () => {
                    this.owner3D.transform.position = tPos.clone();
                });
            } else {
                console.log("Player 继续往前 name=" + this.nameStr);
                this.mPlayerState = 1;
                this.onPlayRunAni();
            }
        }
        onDropFinish() {
            console.log("Player 落在水面上死亡 name=" + this.nameStr);
        }
        onClearOneBoardStaticList() {
            if (this._boardStaticList.length > 0) {
                let plank = this._boardStaticList.pop();
                plank.removeSelf();
                Laya.Pool.recover("plank_item", plank);
            }
        }
        onClearAllBoardStaticList() {
            this.mCurBoardCount = 0;
            this.mCurBoardPlank = 0;
            for (let j = 0; j < this._boardStaticList.length; j++) {
                let plank = this._boardStaticList[j];
                plank.removeSelf();
                Laya.Pool.recover("plank_item", plank);
            }
            this._boardStaticList = [];
        }
        onShowFinishView(rank = 0) {
            if (rank == 1) {
                MainDirector.Ins().onStageFinish(1);
            } else {
                MainDirector.Ins().onStageFinish();
            }
        }
        onFinish(finishCmp = null) {
            if (this.isFinish) {
                return false;
            }
            this.curSpeed = 0;
            this.isFinish = true;
            if (this.isRole) {
                MainDirector.Ins().isFinish = true;
            }
            this.enableTouch = false;
            let rank = this.mFinishCount - 1;
            this.onClearJumpMoveTween();
            this.onPlayDaijiAni();
            if (!finishCmp) {
                if (this.isRole) {}
            } else {
                if (this.isRole) {}
            }
            if (this.isRole) {
                if (this.mIsHaveReward) {
                    console.log("需要显示盖房子");
                    MainDirector.Ins().cmpRunPath.onShowEndPosCamera();
                    this.onShowFinishView(1);
                } else {
                    this.onShowFinishView();
                    this.onClearAllBoardStaticList();
                }
            } else {
                this.onClearAllBoardStaticList();
            }
            if (Math.random() * 10 > 3) {
                gameapi.playInterstitial();
            };
        }
        onStartGame() {
            this.isStart = true;
            if (this.isRole == false) {
                this.speed = this.aiSpeed;
                Laya.timer.once(400, this, this.onSearchNextTarPoint);
            } else {
                this.isCutAni = false;
                this.isStopCut = false;
                this.enableTouch = true;
                this.curSpeed = this.speed;
            }
        }
        onContinueGame() {
            if (this.isRole) {
                var addCount = 30;
                this.mCurBoardCount += addCount;
                var ceilPlank = Math.ceil(addCount / 2);
                this.onAddMessBoard(ceilPlank);
                this.mPlayerState = 0;
                this.owner3D.transform.localPositionY = 0;
                this.enableTouch = true;
                this.curSpeed = this.speed;
            } else {}
        }
        onAddMessBoard(num_) {
            for (let i = 0; i < num_; i++) {
                this.onAddOneBoard();
                this.mCurBoardPlank++;
            }
        }
        onAddOneBoard() {
            var plank = Laya.Pool.getItemByCreateFun("plank_item", () => {
                return Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("mutou_2"));
            }, this);
            plank.active = true;
            var rotY = 0;
            var rotX = 0;
            var rank = this.mCurBoardPlank % 3;
            if (rank == 0) {
                rotY = 180;
                rotX = 0;
            } else if (rank == 1) {
                rotY = 0;
                rotX = 180;
            }
            plank.transform.localPosition = new Laya.Vector3(0, .05 + .08 * this.mCurBoardPlank, 0);
            plank.transform.localRotationEuler = new Laya.Vector3(rotX, rotY, 0);
            this._boardsSp.addChild(plank);
            this._boardStaticList.push(plank);
        }
        onAddBoardRoleAni() {
            if (this.isBoardAni) {
                console.log("Player 正在播放动画_addBoardAni name=" + this.nameStr);
                return;
            }
            this.addBoardAni.transform.localPosition = new Laya.Vector3(0, .05 + .08 * this.mCurBoardPlank, 0);
            this.addBoardAni.active = true;
            this.isBoardAni = true;
            Laya.timer.once(1e3, this, this.onceBoardAni);
        }
        onDoCollectBoard(isBoard = true) {
            if (this.mPlayerState != 2) {
                var max = 60;
                if (this.isRole) {
                    max = 120;
                }
                if (this.mCurBoardCount <= max) {
                    if (isBoard) {
                        this.mCurBoardCount += 2;
                    } else {
                        this.mCurBoardCount += 2;
                    }
                    var ceilPlank = 0;
                    if (this.isRole == false) {
                        ceilPlank = Math.ceil(this.mCurBoardCount / 5);
                    } else {
                        ceilPlank = Math.ceil(this.mCurBoardCount / 2);
                    }
                    if (this.mCurBoardPlank != ceilPlank) {
                        this.onAddOneBoard();
                        if (this.isRole) {
                            this.onAddBoardRoleAni();
                        }
                    }
                    this.mCurBoardPlank = ceilPlank;
                } else {
                    console.log("已经是最大数量");
                }
            }
        }
        onCollectBoard(pickInfos_) {
            if (!this.isStart) return;
            if (this.isFinish) {
                return false;
            }
            if (!pickInfos_ || pickInfos_.length <= 0) {
                console.error("目标查检出错 pickInfos_=null");
                return false;
            }
            var pos = this.owner3D.transform.position;
            if (MainPathCmp.onPtInPolygon(pos.x, pos.z, pickInfos_)) {
                if (this.isRole) {
                    MainMusic.Ins().playSound(MusicConfig.gei);
                }
                this.onDoCollectBoard();
                return true;
            }
            return false;
        }
        onPlayKangAni() {
            this.isStopAni = false;
            if (!this._playerAni) {
                return;
            }
            var state = this._playerAni.getControllerLayer().getCurrentPlayState();
            if (state.animatorState.name == "man_kang") {
                return;
            }
            Laya.timer.clear(this, this.onStopOnceAni);
            Laya.timer.clear(this, this.onOnceKangAni);
            if (this.isRole) {
                this.onPlaySkpArms();
                Laya.timer.frameLoop(1, this, this.onOnceKangAni);
            }
            this._playerAni.play("man_kang", 0, 0);
        }
        onOnceKangAni() {
            if (!this._playerAni) {
                console.error("Player ani man_kang null..");
                Laya.timer.clear(this, this.onOnceKangAni);
                return;
            }
            var state = this._playerAni.getControllerLayer().getCurrentPlayState();
            if (state.animatorState.name == "man_kang" && state.normalizedTime >= 1) {
                this.onPlaySkpArms();
                this._playerAni.play("man_kang", 0, 0);
            }
        }
        onPlayShuaiAni() {
            this.isStopAni = false;
            if (!this._playerAni) {
                return;
            }
            var state = this._playerAni.getControllerLayer().getCurrentPlayState();
            if (state.animatorState.name == "man_shuai") {
                return;
            }
            Laya.timer.clear(this, this.onStopOnceAni);
            Laya.timer.clear(this, this.onOnceKangAni);
            this._playerAni.play("man_shuai", 0, 0);
        }
        onPlayDaijiAni() {
            this.isStopAni = false;
            if (!this._playerAni) {
                return;
            }
            var state = this._playerAni.getControllerLayer().getCurrentPlayState();
            if (state.animatorState.name == "man_daij") {
                return;
            }
            Laya.timer.clear(this, this.onStopOnceAni);
            Laya.timer.clear(this, this.onOnceKangAni);
            this._playerAni.play("man_daij", 0, 0);
        }
        onPlayRunAni() {
            this.isStopAni = false;
            if (!this._playerAni) {
                return;
            }
            var state = this._playerAni.getControllerLayer().getCurrentPlayState();
            if (state.animatorState.name == "man_run") {
                return;
            }
            Laya.timer.clear(this, this.onStopOnceAni);
            Laya.timer.clear(this, this.onOnceKangAni);
            this._playerAni.play("man_run", 0, 0);
        }
        onStopDaiji2Ani() {
            if (!this._playerAni) {
                return;
            }
            var state = this._playerAni.getControllerLayer().getCurrentPlayState();
            if (state.animatorState.name == "man_daij_2") {
                return;
            }
            if (state.normalizedTime >= 1) {
                this.isStopAni = true;
                this._playerAni.play("man_daij_2", 0, 0);
                return;
            }
            Laya.timer.frameLoop(1, this, this.onStopOnceAni);
        }
        onStopOnceAni() {
            if (!this._playerAni) {
                Laya.timer.clear(this, this.onStopOnceAni);
                return;
            }
            Laya.timer.clear(this, this.onStopOnceAni);
            Laya.timer.clear(this, this.onOnceKangAni);
            var state = this._playerAni.getControllerLayer().getCurrentPlayState();
            if (state.animatorState.name == "man_daij_2") {
                return;
            }
            this.isStopAni = true;
            this._playerAni.play("man_daij_2", 0, 0);
        }
        onPlaySkpArms() {
            this.skpArmsSp3D.active = true;
            if (this.skpArms) {
                this.skpArms.particleSystem.play();
            }
        }
        onStopCountAni() {
            if (this._countTween) {
                this._countTween.clear();
                this._countTween = null;
            }
            this._countTweenType = 0;
        }
        onStopMoveAni() {
            if (this._moveTweenAni) {
                this._moveTweenAni.clear();
                this._moveTweenAni = null;
            }
        }
        onClearJumpMoveTween() {
            if (this.mJumpTween) {
                this.mJumpTween.clear();
                this.mJumpTween = null;
            }
        }
        onRemovePlayer() {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            this.owner3D.destroy();
        }
    }
    class MainRolePlayer extends MainPlayerCmp {
        constructor() {
            super();
            this.cutTreeArr = [];
            this.isRole = true;
            this.onInitRole();
        }
        onDestroy() {
            super.onDestroy();
            this.onUnRegiestEvent();
        }
        onUpdate() {
            if (!this.isStart) {
                return;
            }
            if (this.isFinish) {
                return;
            }
            if (MainDirector.Ins().isPlay && !MainDirector.Ins().isOver && this.isDownMove) {
                var t = Laya.timer.delta / 1e3;
                if (t > .1) t = .1;
                if (this.curSpeed > 0 && this.isStopCut == false) {
                    var pos = this.owner3D.transform.position;
                    var rot = this.owner3D.transform.rotationEuler;
                    var rotY = CommonUtils.onDegreesToRadians(rot.y);
                    var dis = t * (this.curSpeed * (1 + this.accSpeed)) / MainDirector.Ins().mSpeedRate;
                    var posX = pos.x + Math.sin(rotY) * dis;
                    var posY = pos.y;
                    var posZ = pos.z + Math.cos(rotY) * dis;
                    this.owner3D.transform.position = new Laya.Vector3(posX, posY, posZ);
                    var type = MainDirector.Ins().cmpRunPath.onCheckFloor(posX, posZ, true);
                    if (type == 0) {
                        this.onWater();
                    } else {
                        this.onRoad(type);
                    }
                }
            }
            if (MainDirector.Ins().isPlay && !MainDirector.Ins().isOver && this.isCutAni == false) {
                this.onCheckTreeCmp(this.owner3D.transform.position);
            }
        }
        onCheckTreeCmp(vct) {
            var treeCmpArr = MainDirector.Ins().cmpRunPath.onGetAllTreeCmpArr();
            if (!treeCmpArr || treeCmpArr.length <= 0) {
                return;
            }
            this.cutTreeArr = [];
            this.isStopCut = false;
            var len = treeCmpArr.length;
            for (let i = 0; i < len; i++) {
                var treeCmp = treeCmpArr[i];
                if (treeCmp && treeCmp.isCuting == false) {
                    var dis = Laya.Vector3.distanceSquared(treeCmp.owner3D.transform.position, new Laya.Vector3(vct.x, vct.y, vct.z));
                    if (dis <= .8) {
                        if (MainPathCmp.onPtInPolygon(vct.x, vct.z, treeCmp.pts)) {
                            treeCmp.isCuting = true;
                            if (treeCmp.curStepIndex == 0) this.isStopCut = true;
                            this.cutTreeArr.push(treeCmp);
                        }
                    }
                }
            }
            if (this.isDownMove == true && this.isStopCut == false) {
                if (this.cutTreeArr.length > 0) {
                    this.cutTreeArr.forEach(element => {
                        element.isCuting = false;
                    });
                }
                this.cutTreeArr = [];
                if (this.mPlayerState != 2) {
                    this.onPlayRunAni();
                }
            } else if (this.cutTreeArr.length > 0) {
                this.isCutAni = true;
                if (this.isStopCut) {
                    Laya.timer.once(300, this, this.onceCutPlay);
                } else {
                    this.onceCutPlay();
                }
            } else if (this.cutTreeArr.length <= 0) {
                if (this.isStopAni == false && this.isDownMove == false && this.isCutComplete == false && this.isOnceTimeCut == false) {
                    this.isOnceTimeCut = true;
                    Laya.timer.once(1e3, this, this.onceCutComplete);
                }
            }
        }
        onceCutPlay() {
            this.onPlayKangAni();
            MainMusic.Ins().playSound(MusicConfig.tree);
            Laya.timer.once(50, this, this.onCompleteKangAni);
            this.isOnceTimeCut = false;
            this.isCutComplete = false;
            Laya.timer.clear(this, this.onceCutComplete);
        }
        onceCutComplete() {
            if (this.isStopAni == false && this.isDownMove == false && this.isCutComplete == false) {
                this.isCutComplete = true;
                this.onStopDaiji2Ani();
            }
        }
        onCompleteKangAni() {
            for (let i = 0; i < this.cutTreeArr.length; i++) {
                var treeCmp = this.cutTreeArr[i];
                if (treeCmp) {
                    this.onDoCollectBoard(false);
                    if (treeCmp.onPlayCutAni()) {
                        MainDirector.Ins().cmpRunPath.onRemoveTreeCmpArr(treeCmp);
                    }
                }
            }
            this.cutTreeArr = [];
            this.isCutAni = false;
        }
        onJumpFinish() {
            this.onClearJumpMoveTween();
            if (this.isFinish) {
                return;
            }
            if (this.mFloorType == 0) {
                this.curSpeed = 0;
                this.enableTouch = false;
                if (this.mIsHaveReward) {
                    console.log("第一名需要盖房子");
                    var finishCmp = null;
                    this.onFinish(finishCmp);
                } else {
                    this.curSpeed = 0;
                    let tPos = this.owner3D.transform.position;
                    MainDirector.Ins().onCreateWaterAni(tPos.clone());
                    this.mJumpTween = Laya.Tween.to(tPos, {
                        y: -1
                    }, 400, Laya.Ease.linearNone, Laya.Handler.create(this, this.onDropFinish));
                    this.mJumpTween.update = new Laya.Handler(this, () => {
                        this.owner3D.transform.position = tPos.clone();
                    });
                }
            } else {
                if (this.mIsHaveReward) {
                    console.log("第一名需要盖房子");
                    var finishCmp = null;
                    this.onFinish(finishCmp);
                } else {
                    this.mPlayerState = 1;
                    console.log("继续往前.......");
                    if (this.isDownMove) {
                        this.onPlayRunAni();
                    } else {
                        this.onStopDaiji2Ani();
                    }
                }
            }
        }
        onDropFinish() {
            this.curSpeed = 0;
            this.onClearJumpMoveTween();
            MainMusic.Ins().playSound(MusicConfig.water);
            MainDirector.Ins().onStageFail();
        }
        onVideoAddBoard() {
            if (this.isRole) {
                this.mCurBoardCount += 10;
                this.onAddMessBoard(5);
            }
        }
        onInitRole() {
            this.speed = this.roleSpeed;
            this.onRregiestEvent();
        }
        onRregiestEvent() {
            if (this.isRole) {
                EventCenter.Ins().on(GameEvent.MouseInputDown, this, this.onMouseInputDown);
                EventCenter.Ins().on(GameEvent.MouseInputMove, this, this.onMouseInputMove);
                EventCenter.Ins().on(GameEvent.MouseInputUp, this, this.onMouseInputUp);
            }
        }
        onUnRegiestEvent() {
            if (this.isRole) {
                EventCenter.Ins().off(GameEvent.MouseInputDown, this, this.onMouseInputDown);
                EventCenter.Ins().off(GameEvent.MouseInputMove, this, this.onMouseInputMove);
                EventCenter.Ins().off(GameEvent.MouseInputUp, this, this.onMouseInputUp);
            }
        }
        onMouseInputDown() {
            if (!this.isStart) return;
            if (!this.enableTouch) return;
            if (this.isCutAni == true) {
                console.log("MouseDown 正在砍树，不能点击");
                return;
            }
            if (this.curSpeed == 0) {
                this.curSpeed = this.speed;
            }
            this.isDownMove = true;
            this.onPlayRunAni();
        }
        onMouseInputMove(dir) {
            if (!this.isStart) return;
            if (!this.enableTouch) return;
            let e = dir.x / 750;
            this.owner3D.transform.localRotationEulerY -= 150 * e * 1.5;
        }
        onMouseInputUp() {
            if (!this.isStart) return;
            if (!this.enableTouch) return;
            this.isDownMove = false;
            if (this.isCutAni == true) {
                return;
            }
            if (this.mPlayerState != 2) {
                this.onStopDaiji2Ani();
            }
        }
    }
    class MainRunPathMgr extends Laya.Script3D {
        constructor() {
            super();
            this.cmpStartPath = null;
            this.cmpSubPath = null;
            this.cmpRole = null;
            this.cmpEnd = null;
            this.aiCount = 3;
            this.aiCmps = [];
            this.aiPosArr = [];
            this.allPlayCmps = [];
            this.roleRank = 0;
            this.endPos = null;
            this.mCheckPosList = [];
            this.mBoardPosList = [];
            this.mTagsList = [];
            this.mTags2List = [];
            this.mTags3List = [];
            this.owner3D = null;
            this.endSp3D = null;
            this.startSp3D = null;
            this.pathSp3D = null;
            this.playersSp3D = null;
            this.boardsSp3D = null;
            this.posGameOver = null;
            this.isLandIndex = -1;
        }
        onAwake() {
            this.owner3D = this.owner;
        }
        onUpdate() {}
        onLateUpdate() {
            super.onLateUpdate();
            if (MainDirector.Ins().isPlay && !MainDirector.Ins().isOver) {
                var rankIndex = 1;
                var roleDis = Laya.Vector3.distanceSquared(this.endPos, this.cmpRole.owner3D.transform.position.clone());
                let AiPlayers = this.aiCmps;
                let len = AiPlayers.length;
                for (let i = 0; i < len; i++) {
                    var player = this.aiCmps[i];
                    if (!player) {
                        continue;
                    }
                    if (player.mFinishCount > 0) {
                        rankIndex++;
                        continue;
                    }
                    var aiDis = Laya.Vector3.distanceSquared(this.endPos, player.owner3D.transform.position.clone());
                    if (aiDis < roleDis) {
                        rankIndex++;
                    }
                }
                if (this.roleRank != rankIndex) {
                    this.roleRank = rankIndex;
                    this.onUpdateRank();
                }
            }
        }
        onDestroy() {
            super.onDestroy();
            Laya.timer.clearAll(this);
        }
        onUpdateRank() {
            var view = UIViewManager.Ins().onGetView(UIEnum.Realy);
            if (view && view.view) {
                view.onUpdateRank(this.roleRank);
            }
        }
        onInit() {
            this.endSp3D = this.owner3D.getChildByName("End");
            this.cmpEnd = this.endSp3D.addComponent(MainEndCmp);
            this.startSp3D = this.owner3D.getChildByName("Start");
            this.playersSp3D = this.owner3D.getChildByName("Players");
            this.pathSp3D = this.owner3D.getChildByName("Path");
            this.boardsSp3D = this.owner3D.getChildByName("Boards");
            var aiSp3D = this.owner3D.getChildByName("Aipos");
            this.aiPosArr = [];
            for (let i = 0; i < aiSp3D.numChildren; i++) {
                this.aiPosArr.push(aiSp3D.getChildAt(i).transform.position.clone());
            }
            aiSp3D.destroy();
            this.isLandIndex = 0;
        }
        onCreatPath(levelSp3D) {
            if (this.cmpSubPath) {
                this.cmpSubPath.onRemovePath();
            }
            this.pathSp3D.addChild(levelSp3D);
            this.cmpSubPath = levelSp3D.addComponent(MainPathCmp);
            this.cmpSubPath.onInit();
            this.startSp3D.transform.position = levelSp3D.getChildByName("start").transform.position.clone();
            this.endSp3D.transform.position = levelSp3D.getChildByName("end").transform.position.clone();
            if (this.cmpEnd) {
                this.endPos = this.endSp3D.transform.position.clone();
                this.cmpEnd.onInit();
            }
            this.cmpSubPath.onCreatePathItems();
            this.onShowAllPicksItems();
            this.onInitMapList();
        }
        onShowAllPicksItems() {
            if (this.cmpSubPath) {
                this.cmpSubPath.onShowAllPicksItems();
            }
        }
        onInitMapList() {
            this.mCheckPosList = [].concat(this.cmpSubPath.mPolygonPtsArr, this.cmpEnd.mPolygonPtsArr);
            this.mTagsList = [].concat(this.cmpSubPath.mTagsInfoArr, this.cmpSubPath.mTags2InfoArr);
            this.mTags2List = [].concat(this.cmpSubPath.m2TagsInfoArr, this.cmpSubPath.m2Tags2InfoArr);
            this.mTags3List = [].concat(this.cmpSubPath.m3TagsInfoArr, this.cmpSubPath.m3Tags2InfoArr);
            this.mBoardPosList = [];
        }
        onCreatPlayers() {
            this.onRemoveAllPlayers();
            var playPos = new Laya.Vector3(0, 0, 0);
            var roleSp3D = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("man_skin"));
            roleSp3D.active = true;
            this.playersSp3D.addChild(roleSp3D);
            this.cmpRole = roleSp3D.addComponent(MainRolePlayer);
            this.cmpRole.onInit(playPos);
            this.cmpRole.onSkinHead(MainDirector.Ins().roleId);
            this.cmpRole.onSkinArms();
            this.aiCmps = [];
            if (MainDirector.Ins().levelNum > 1) {
                var posArr = this.onGetRandomAiPos();
                var nameArr = this.onGetRandomAiName();
                var level = MainDirector.Ins().levelNum;
                var indexCount = this.aiCount > 0 && this.aiCount < posArr.length ? this.aiCount : posArr.length;
                for (let i = 0; i < indexCount; i++) {
                    var pos = posArr[i];
                    var name = nameArr[i];
                    this.onAddAISp3D(pos, i + 1, name, new Laya.Vector4(0, 0, 0, 0), level);
                }
            }
            this.allPlayCmps = [].concat([this.cmpRole], this.aiCmps);
            MainDirector.Ins().cmpCamera.onChangeRole(roleSp3D);
        }
        onCheckFloor(x_, z_, isRole_ = false) {
            for (let i = 0; i < this.mBoardPosList.length; i++) {
                if (MainPathCmp.onPtInPolygon(x_, z_, this.mBoardPosList[i].pts)) {
                    return 2;
                }
            }
            for (let j = 0; j < this.mCheckPosList.length; j++) {
                if (MainPathCmp.onPtInPolygon(x_, z_, this.mCheckPosList[j].pts)) {
                    if (isRole_ && this.isLandIndex >= 0 && this.isLandIndex != j && j > 0) {
                        this.isLandIndex = j;
                        MainMusic.Ins().playSound(MusicConfig.island);
                    }
                    return 1;
                }
            }
            return 0;
        }
        onCreateCheckBoard(x_, z_, rot_, isRole_ = false) {
            var waterBoard = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("Board"));
            waterBoard.active = true;
            this.boardsSp3D.addChild(waterBoard);
            waterBoard.transform.position = new Laya.Vector3(x_, 0, z_);
            waterBoard.transform.rotationEuler = rot_;
            var spGrp = waterBoard.getChildByName("ptGrp");
            var len = spGrp.numChildren;
            let pts = [];
            for (let i = 0; i < len; i++) {
                var pt = spGrp.getChildAt(i);
                let pos = pt.transform.position.clone();
                pts.push(pos);
            }
            this.mBoardPosList.push({
                pts: pts
            });
            spGrp.destroyChildren();
            spGrp.destroy();
            if (isRole_) {}
        }
        onStartGame() {
            for (let i = 0; i < this.aiCmps.length; i++) {
                const element = this.aiCmps[i];
                if (element) {
                    element.onStartGame();
                }
            }
            this.cmpRole.onStartGame();
            this.cmpEnd.onStartGame();
        }
        onGetAllTreeCmpArr() {
            if (this.cmpSubPath) {
                return this.cmpSubPath.mTreeCmpArr;
            }
            return [];
        }
        onRemoveTreeCmpArr(cmp) {
            var index = this.cmpSubPath.mTreeCmpArr.indexOf(cmp);
            this.cmpSubPath.mTreeCmpArr.splice(index, 1);
            cmp = null;
        }
        onShowEndPosCamera() {
            var camPos = this.cmpEnd.onGetCamPos();
            MainDirector.Ins().cmpCamera.onShowEndPos(camPos);
        }
        onGetPathNode(pathID_, player) {
            let pathNodeGroup = [];
            if (player.index == 2) {
                pathNodeGroup = MainDirector.Ins().cmpRunPath.mTags2List;
            } else if (player.index == 3) {
                pathNodeGroup = MainDirector.Ins().cmpRunPath.mTags3List;
            } else {
                pathNodeGroup = MainDirector.Ins().cmpRunPath.mTagsList;
            }
            let findArr = [];
            for (let j = 0; j < pathNodeGroup.length; j++) {
                if (pathNodeGroup[j].pathID == pathID_) {
                    findArr.push(pathNodeGroup[j]);
                }
            }
            let node = null;
            if (findArr.length == 1) {
                node = findArr[0];
            } else if (findArr.length > 1) {
                node = findArr[0];
                let pos1 = player.ownerSp().transform.position;
                let dis = Laya.Vector3.distanceSquared(node.pos, pos1);
                for (let k = 0; k < findArr.length; k++) {
                    let dis2 = Laya.Vector3.distanceSquared(findArr[k].pos, pos1);
                    if (dis2 < dis) {
                        node = findArr[k];
                        dis = dis2;
                    }
                }
            }
            if (node) {
                return node;
            }
            return null;
        }
        onAddAISp3D(pos_, aiIndex_, nameStr_, color, level = 1) {
            if (pos_) {
                var aiSp3D = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("man_skin"));
                aiSp3D.active = true;
                aiSp3D.name = "aiPlayerSp_" + aiIndex_;
                this.playersSp3D.addChild(aiSp3D);
                let cmp = aiSp3D.addComponent(MainPlayerCmp);
                cmp.nameStr = nameStr_;
                cmp.index = aiIndex_;
                cmp.mBoradColor = color;
                var rate = 0;
                if (level >= 2) {
                    rate = .05;
                } else if (level >= 4) {
                    rate = .1;
                } else if (level >= 10) {
                    rate = .2;
                }
                var speed = cmp.aiSpeed * (1 + rate);
                cmp.aiSpeed = speed;
                cmp.onInit(pos_);
                cmp.onSkinHead();
                cmp.onSkinArms();
                this.aiCmps.push(cmp);
            }
        }
        onGetRandomAiPos() {
            this.aiPosArr = CommonUtils.onRandomSortArray(this.aiPosArr);
            return this.aiPosArr;
        }
        onGetRandomAiName() {
            var names = ["小明", "小东", "小花", "小张", "小李", "小陈", "小刚"];
            return CommonUtils.onRandomSortArray(names);
        }
        onGetBoardColors() {
            let colors = [{
                r: 0,
                g: .3844774,
                b: 1,
                a: 1
            }, {
                r: 1,
                g: .6551723,
                b: 0,
                a: 1
            }, {
                r: 1,
                g: 0,
                b: .7661834,
                a: 1
            }, {
                r: 1,
                g: .2417465,
                b: 0,
                a: 1
            }, {
                r: 0,
                g: 1,
                b: .8205149,
                a: 1
            }, {
                r: .4949741,
                g: 0,
                b: 1,
                a: 1
            }, {
                r: .9507495,
                g: .9528302,
                b: .06741722,
                a: 0
            }, {
                r: .09789959,
                g: .6503652,
                b: .8301887,
                a: 0
            }, {
                r: .6645577,
                g: .0786757,
                b: .9811321,
                a: 0
            }];
            return CommonUtils.onRandomSortArray(colors);
        }
        onRemoveAllPlayers() {
            for (let i = 0; i < this.aiCmps.length; i++) {
                const element = this.aiCmps[i];
                if (element) {
                    element.onRemovePlayer();
                }
            }
            this.aiCmps = [];
            if (this.cmpRole) {
                this.cmpRole.onRemovePlayer();
                this.cmpRole = null;
            }
            this.allPlayCmps = [];
            this.playersSp3D.destroyChildren();
            this.boardsSp3D.destroyChildren();
        }
    }
    class MainAniWater extends Laya.Script3D {
        constructor() {
            super();
            this.water1 = null;
            this.water2 = null;
            this.water3 = null;
        }
        onAwake() {
            super.onAwake();
        }
        onStart() {
            super.onStart();
            this.water1 = this.owner.getChildByName("water_1");
            this.water1.active = false;
            this.water2 = this.owner.getChildByName("water_2");
            this.water2.active = false;
            this.water3 = this.owner.getChildByName("water_3");
            this.water3.active = false;
            this.onPlayAni();
        }
        onPlayAni() {
            this.owner.active = true;
            this.water1.active = true;
            this.water1.particleSystem.play();
            this.water2.active = true;
            this.water2.particleSystem.play();
            this.water3.active = true;
            this.water3.particleSystem.play();
            Laya.timer.once(1500, this, this.onRemove);
        }
        onRemove() {
            Laya.timer.clearAll(this);
            this.owner.removeSelf;
            this.destroy();
        }
    }
    class MainDirector extends MainBase {
        constructor() {
            super(...arguments);
            this.mBoardPlank = 0;
            this.touchId = -1;
            this.resModelArr = [];
            this.particleSp3D = null;
            this._waterAniIndex = 0;
            this.floorSp3D = null;
            this.isFinish = false;
            this.isOver = false;
            this.isPlay = false;
            this.cameraGrp = null;
            this.camera = null;
            this.cmpCamera = null;
            this.cmpRunPath = null;
            this.levelInfo = null;
            this.levelData = null;
            this.levelAllData = null;
            this.isMouseDown = false;
            this.mousePos = new Laya.Vector3(0, 0, 0);
            this.mouseDir = new Laya.Vector3(0, 0, 0);
            this.mSpeedRate = 2 * 1.3;
            this.bgPath = "";
            this.WuchuIsShow = 0;
            this.CDNtime = 0;
            this.BtnDelay = 0;
            this.CDNisShowAd = true;
        }
        onInit() {
            var config = MainModel.Ins().onGetGameLevel();
            var roleConfig = MainModel.Ins().onGetGameRole();
            this.levelNum = config.level;
            this.goldNum = config.gold;
            this.houseNum = config.house;
            this.roleList = roleConfig.lockRole;
            this.armsList = roleConfig.lockArms;
            this.roleId = this.showId = roleConfig.roleId;
            this.armsId = roleConfig.armsId;
            this.roleList = roleConfig.lockRole;
            UIViewManager.Ins().onOpen(UIEnum.Home);
            UIViewManager.Ins().onClose(UIEnum.Loading);
            Laya.Scene3D.load("res3d/scene/scene.ls", Laya.Handler.create(this, this.onInitScene));
        }
        onInitScene(scene) {
            this._scene = scene;
            UIViewManager.Ins().GameLayer.addChild(scene);
            this.cameraGrp = this._scene.getChildByName("CameraGrp");
            this.camera = this.cameraGrp.getChildByName("Main Camera");
            this.cmpCamera = this.cameraGrp.addComponent(MainCameraFollow);
            this.cmpCamera.onInit();
            this.gameSp3D = this._scene.getChildByName("Game");
            this.floorSp3D = this.gameSp3D.getChildByName("Floor");
            this.cmpRunPath = this.gameSp3D.getChildByName("Dynamic").addComponent(MainRunPathMgr);
            this.cmpRunPath.onInit();
            this.particleSp3D = this.gameSp3D.getChildByName("Particle");
            this.onLoadLevelMap();
            this.onAddMouseEvent(true);
            this.onCreateBg();
        }
        getResModel(name) {
            if (!this.resModelArr) {
                this.resModelArr = [];
            }
            var sprite = this.resModelArr[name];
            if (!sprite) {
                var path = "res3d/map/" + name + ".lh";
                this.resModelArr[name] = Laya.loader.getRes(path);
                sprite = this.resModelArr[name];
                if (sprite) {
                    sprite.active = false;
                }
            }
            return sprite;
        }
        onLoadLevelMap() {
            var checkLevel = this.levelNum;
            if (this.levelNum > 12) {
                checkLevel = CommonUtils.onGetRandom(2, 12);
            }
            var levelSp3D = Laya.Sprite3D.instantiate(this.getResModel("level_" + checkLevel));
            levelSp3D.active = true;
            this.onCompleteLoadStageRes(levelSp3D);
            this.onCreateFloor();
        }
        onCreateFloor() {
            if (!this.floorSp3D) {
                return;
            }
            var meshSp3D = this.floorSp3D.getChildByName("plan_water (1)");
            var meshSpr = meshSp3D.meshRenderer.material;
            var skinPath = "";
            if (this.levelNum % 3 == 0) {
                skinPath = "res/skin/water_8.jpg";
            } else if (this.levelNum % 3 == 1) {
                skinPath = "res/skin/water_8.jpg";
            } else if (this.levelNum % 3 == 2) {
                skinPath = "res/skin/water_8.jpg";
            }
            Laya.Texture2D.load(skinPath, Laya.Handler.create(this, function(txt) {
                meshSpr.albedoTexture = txt;
            }));
        }
        onCompleteLoadStageRes(levelSp3D_) {
            this.isFinish = false;
            this.isOver = false;
            if (levelSp3D_) {
                this.cmpRunPath.onCreatPath(levelSp3D_);
            }
            this.cmpRunPath.onCreatPlayers();
        }
        onStartGame() {
            this.isPlay = true;
            if (!this.cmpRunPath.cmpRole.isStart) {
                this.cmpRunPath.onStartGame();
            }
        }
        onStageFail() {
            if (!this.isOver) {
                this.isOver = true;
                this.isPlay = false;
                this.mBoardPlank = this.cmpRunPath.cmpRole.mCurBoardPlank;
                UIViewManager.Ins().onClose(UIEnum.Realy);
                UIViewManager.Ins().onOpen(UIEnum.Fail);
            }
        }
        onStageFinish(rank = 0) {
            this.mBoardPlank = this.cmpRunPath.cmpRole.mCurBoardPlank;
            if (rank == 1) {
                this.onEndStageBuild();
            } else {
                this.onEndStageGame();
            }
        }
        onInitGameEvent() {}
        onEndStageGame() {
            this.isPlay = false;
            this.isOver = true;
            this.cmpRunPath.cmpEnd.onPlayCaidaiAni();
            Laya.timer.once(800, this, this.onShowSucceView);
        }
        onShowSucceView() {
            UIViewManager.Ins().onClose(UIEnum.Realy);
            UIViewManager.Ins().onOpen(UIEnum.Sucess);
        }
        onEndStageBuild() {
            this.isPlay = false;
            this.isOver = true;
            this.cmpRunPath.cmpEnd.onPlayCaidaiAni();
            Laya.timer.once(800, this, this.onShowBuildView);
        }
        onShowBuildView() {
            this.cmpRunPath.cmpEnd.onGongCan(false);
            UIViewManager.Ins().onClose(UIEnum.Realy);
            if (MainDirector.Ins().cmpRunPath.cmpRole.mCurBoardPlank < 5 && this.levelNum > 1) {
                UIViewManager.Ins().onOpen(UIEnum.Reward);
            } else {
                UIViewManager.Ins().onOpen(UIEnum.Build);
            }
        }
        onContinueGame() {
            this.onResetGameInfo();
            this.isPlay = true;
            this.cmpRunPath.cmpRole.onContinueGame();
        }
        onCreateWaterAni(vct3) {
            var waterSp3D = Laya.Sprite3D.instantiate(this.getResModel("water"));
            waterSp3D.active = true;
            waterSp3D.transform.position = vct3;
            waterSp3D.name = "water_ani_" + this._waterAniIndex;
            var cmpWaterAni = waterSp3D.addComponent(MainAniWater);
            this.particleSp3D.addChild(waterSp3D);
            this._waterAniIndex++;
        }
        IsShowTry() {
            var arr = [];
            for (let i = 1; i < 10; i++) {
                if (MainDirector.Ins().roleList.indexOf(i) == -1) {
                    arr.push(i);
                }
            }
            if (arr.length > 0) {
                return true;
            }
            return false;
        }
        onResetGameInfo() {
            this.isPlay = false;
            this.isOver = false;
        }
        onAddMouseEvent(isOn = true) {
            if (isOn) {
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onEventMouseDown);
            } else {
                Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onEventMouseDown);
            }
        }
        onEventMouseDown(event) {
            if (this.touchId == -1) {
                this.touchId = event.touchId;
                this.isMouseDown = true;
                this.mousePos = new Laya.Vector3(Laya.stage.mouseX, Laya.stage.mouseY, 0);
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onEventMouseMove);
                Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onEventMouseUp);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onEventMouseUp);
                EventCenter.Ins().event(GameEvent.MouseInputDown);
            }
        }
        onEventMouseMove(event) {
            if (this.touchId == event.touchId && this.isMouseDown) {
                var mousePt = new Laya.Vector3(Laya.stage.mouseX, Laya.stage.mouseY, 0);
                var dist = Laya.Vector3.distance(mousePt, this.mousePos);
                if (dist >= 2) {
                    Laya.Vector3.subtract(mousePt, this.mousePos, this.mouseDir);
                    EventCenter.Ins().event(GameEvent.MouseInputMove, new Laya.Vector3(this.mouseDir.x, this.mouseDir.y, 0));
                    this.mousePos = mousePt;
                }
            }
        }
        onEventMouseUp(event) {
            if (this.touchId == event.touchId) {
                this.isMouseDown = false;
                this.onOffMouseEvent();
                EventCenter.Ins().event(GameEvent.MouseInputUp);
            }
        }
        onOffMouseEvent() {
            this.touchId = -1;
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onEventMouseMove);
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onEventMouseUp);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onEventMouseUp);
        }
        onCreateBg() {
            UIViewManager.Ins().BgLayer.removeChildren();
            this.bgPath = "res/skin/skin_bg.png";
            Laya.loader.load(this.bgPath, Laya.Handler.create(this, this.onLoaderBg));
        }
        onLoaderBg() {
            var sp = new Laya.Sprite();
            var bgImg = new Laya.Image();
            bgImg.skin = this.bgPath;
            bgImg.width = 750;
            bgImg.height = 1624;
            bgImg.y = 0;
            bgImg.x = 0;
            sp.addChild(bgImg);
            sp.y = StageUtils.isIphoneX() ? -98 : -10;
            UIViewManager.Ins().BgLayer.addChild(sp);
        }
    }
    class MainModel extends MainBase {
        onSetGameLevel(value, gold, house) {
            var obj = this.onGetGameLevel();
            if (obj.level < value || obj.house < house || obj.gold != gold) {
                obj.level = value;
                obj.gold = gold;
                obj.house = house;
                Laya.LocalStorage.setItem("IslandRace-gold", JSON.stringify(obj));
            }
        }
        onGetLockConfigById(id) {
            var config = JsonUtils.Ins().getDataByType("id", "lock", id);
            return config;
        }
        onGetGameRole() {
            var obj = null;
            var vaule = Laya.LocalStorage.getItem("IslandRace-level");
            if (!vaule) {
                obj = {
                    lockRole: [1],
                    lockArms: [1],
                    roleId: 1,
                    armsId: 1
                };
            } else {
                obj = JSON.parse(vaule);
            }
            return obj;
        }
        onSetGameRole() {
            var obj = this.onGetGameRole();
            obj.lockRole = MainDirector.Ins().roleList;
            obj.lockArms = MainDirector.Ins().armsList;
            obj.roleId = MainDirector.Ins().roleId;
            obj.armsId = MainDirector.Ins().armsId;
            Laya.LocalStorage.setItem("IslandRace-level", JSON.stringify(obj));
        }
        onGetGameLevel() {
            var obj = null;
            var vaule = Laya.LocalStorage.getItem("IslandRace-gold");
            if (!vaule) {
                obj = {
                    level: 1,
                    gold: 0,
                    house: 0
                };
            } else {
                obj = JSON.parse(vaule);
            }
            return obj;
        }
        onGetLockConfigbyLevel(levelNum) {
            var config = JsonUtils.Ins().getDataByName("lock");
            var obj = null;
            for (const key in config) {
                if (config.hasOwnProperty(key)) {
                    const element = config[key];
                    if (levelNum >= element.num) {
                        obj = element;
                    } else {
                        break;
                    }
                }
            }
            return obj;
        }
    }
    class wxSdk {
        constructor() {
            this.isShowVideo = false;
            this.banner_height = 0;
            var si = window["wx"].getSystemInfoSync();
            this.windowH = si.windowHeight;
            this.windowW = si.windowWidth;
            this._bannerAdArr = [];
        }
        init() {
            Laya.Browser.window.wx.onShow(function(res) {
                console.log("========onShow=====", res);
                Laya.timer["_lastTimer"] = Date.now();
                this.onShareSuccess();
                if (res && res.scene) {
                    MainMusic.Ins().playSound(MusicConfig.bgm, 1, true, true);
                }
            }.bind(this));
            Laya.Browser.window.wx.onHide(function(res) {
                this.resetShareTime();
            }.bind(this));
        }
        onShareSuccess() {
            this.shareFinishTime = new Date().getTime();
            var temp = this.shareFinishTime - this.lastShareTime;
            console.log("分享的时间：" + temp);
            if (this.shareBack) {
                this.shareBack(temp >= 3e3);
            }
            this.lastShareTime = 0;
        }
        resetShareTime() {
            this.lastShareTime = new Date().getTime();
        }
        showShare() {
            let wx = window["wx"];
            if (wx) {}
        }
        showMenuShare(callback) {
            var title = "";
            var imageUrl = "";
            var index = Math.floor(Math.random() * 4);
            switch (index) {
                case 0:
                    title = "画笔快跑";
                    imageUrl = "res/share/share.png";
                    break;

                case 1:
                    title = "笔尖趣味跑酷游戏";
                    imageUrl = "res/share/share1.jpg";
                    break;

                case 2:
                    title = "随笔而动,漂移如风";
                    imageUrl = "res/share/share2.jpg";
                    break;

                case 3:
                    title = "画下完美笔迹";
                    imageUrl = "res/share/share3.jpg";
                    break;

                default:
                    break;
            }
            if (!window["wx"]) return;
            let shareMsg = {};
            shareMsg.title = title;
            shareMsg.imageUrl = imageUrl;
            shareMsg.query = "";
            Laya.Browser.window.wx.shareAppMessage(shareMsg);
            this.shareBack = callback;
        }
        preLoadBanner() {
            this._bannerAdArr = [];
            var self = this;
            var data = JsonUtils.Ins().getDataByName("banner");
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var element = data[key];
                    if (element.type == 1 && element.isload && this._bannerAdArr[element.adunitId] == null) {
                        var y = StageUtils.isIphoneX() ? 1100 : 1070;
                        var top = y * Laya.Browser.clientHeight / 1334;
                        var ad = Laya.Browser.window.wx.createBannerAd({
                            adUnitId: element.adunitId,
                            style: {
                                left: 0,
                                top: top,
                                width: 2e3 * Laya.Browser.clientWidth / 1334
                            }
                        });
                        ad.onLoad(function(res) {
                            console.log("banner下载", res);
                        }.bind(ad));
                        let banner = ad;
                        ad.onResize(function(size) {
                            if (StageUtils.isIphoneX()) {
                                banner.style.top = Laya.Browser.clientHeight - size.height - 20;
                            } else {
                                banner.style.top = Laya.Browser.clientHeight - size.height;
                            }
                            self.banner_height = size.height;
                        });
                        ad.onError(function(res) {
                            console.log("banner出错", res);
                        });
                        this._bannerAdArr[element.adunitId] = {
                            banner: ad,
                            state: 0
                        };
                    }
                }
            }
        }
        getBannerConfig(showType, type) {
            var obj = null;
            var data = JsonUtils.Ins().getDataByName("banner");
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var element = data[key];
                    if (element.type == type && element.showType == showType) {
                        obj = element;
                        break;
                    }
                }
            }
            return obj;
        }
        visibleBanner(isShow) {
            if (this._bannerAdArr && this._bannerAdArr[this.adBannerId]) {
                if (isShow) {
                    this._bannerAdArr[this.adBannerId].banner.show();
                } else {
                    this._bannerAdArr[this.adBannerId].banner.hide();
                }
            }
        }
        showBanner(isShow, y, banner, callBack) {
            var self = this;
            var config = this.getBannerConfig(banner, 1);
            var bannerId = config.adunitId;
            console.info("banner===" + banner + "====id=======" + bannerId);
            if (bannerId) {
                this.adBannerId = bannerId;
            } else {
                this.adBannerId = "adunit-41a209487c33bd52";
            }
            if (isShow) {
                if (this._bannerAdArr[this.adBannerId] == null) {
                    var top = y * Laya.Browser.clientHeight / 1334;
                    this._bannerAdArr[this.adBannerId] = {
                        banner: null,
                        state: 1
                    };
                    this._bannerAdArr[this.adBannerId].banner = Laya.Browser.window.wx.createBannerAd({
                        adUnitId: this.adBannerId,
                        style: {
                            left: 0,
                            top: top,
                            width: 2e3 * Laya.Browser.clientWidth / 1334
                        }
                    });
                } else {
                    this._bannerAdArr[this.adBannerId].banner.show();
                    this._bannerAdArr[this.adBannerId].state = 1;
                }
                this._bannerAdArr[this.adBannerId].banner.onLoad(function(res) {
                    console.log("banner下载", res);
                    if (self._bannerAdArr[self.adBannerId] && self._bannerAdArr[self.adBannerId].state == 1) {
                        self._bannerAdArr[self.adBannerId].banner.show();
                    } else if (self._bannerAdArr[self.adBannerId] && self._bannerAdArr[self.adBannerId].state == 2) {
                        self._bannerAdArr[self.adBannerId].banner.hide();
                    }
                }.bind(this._bannerAdArr[this.adBannerId].banner));
                let banner = this._bannerAdArr[this.adBannerId].banner;
                this._bannerAdArr[this.adBannerId].banner.onResize(function(size) {
                    if (StageUtils.isIphoneX()) {
                        banner.style.top = Laya.Browser.clientHeight - size.height - 20;
                    } else {
                        banner.style.top = Laya.Browser.clientHeight - size.height;
                    }
                    self.banner_height = size.height;
                });
                this._bannerAdArr[this.adBannerId].banner.onError(function(res) {
                    console.log("banner出错", res);
                });
            } else {
                if (config.isload) {
                    this._bannerAdArr[this.adBannerId].banner.hide();
                    this._bannerAdArr[this.adBannerId].state = 2;
                } else {
                    if (this._bannerAdArr[this.adBannerId]) {
                        this._bannerAdArr[this.adBannerId].banner.hide();
                        this._bannerAdArr[this.adBannerId].banner.destroy();
                        this._bannerAdArr[this.adBannerId].state = 2;
                        this._bannerAdArr[this.adBannerId] = null;
                    }
                }
            }
        }
        getVideoAd(callback, video, myData) {
            Laya.Browser.window.wx.showLoading({
                mask: true
            });
            Laya.timer.once(3e3, null, function() {
                Laya.Browser.window.wx.hideLoading();
            });
            var self = this;
            this.isShowVideo = true;
            var addId = this.getBannerConfig(video, 2).adunitId;
            if (this.videoObj) {
                this.videoObj = Laya.Browser.window.wx.createRewardedVideoAd({
                    adUnitId: addId
                });
                this.videoObj.show().catch(err => {
                    console.log("视频出错", err);
                    callback(false);
                    self.videoObj.offError();
                    self.videoObj.offClose();
                    self.videoObj.offLoad();
                });
            } else {
                this.videoObj = Laya.Browser.window.wx.createRewardedVideoAd({
                    adUnitId: addId
                });
                this.videoObj.load();
            }
            this.videoObj.onLoad(function(res) {
                console.log("视频下载", res);
                if (self.isShowVideo) {
                    self.videoObj.show().catch(err => {
                        callback(false);
                        self.videoObj.offError();
                        self.videoObj.offClose();
                        self.videoObj.offLoad();
                    });
                }
                self.videoObj.offLoad();
            });
            this.videoObj.onClose(function(status) {
                console.log("视频关闭", status);
                if (status && status.isEnded || status == undefined) {
                    if (callback != undefined) {
                        callback(status.isEnded, myData);
                    }
                } else {
                    if (callback != undefined && status) {
                        callback(status.isEnded, myData);
                    }
                }
                self.isShowVideo = false;
                self.videoObj.offClose();
                self.videoObj.offError();
                if (MainModel.Ins().music) {
                    MainModel.Ins().music.play();
                }
            });
            this.videoObj.onError(function(res) {
                TipsManager.showTips(null, "暂无视频广告，请稍后再试");
                console.log("视频出错", res);
                self.videoObj.offError();
                self.videoObj.offClose();
                self.videoObj.offLoad();
            });
        }
        navigateToMiniProgram(appId) {
            Laya.Browser.window.wx.navigateToMiniProgram({
                appId: appId,
                path: "",
                extraData: {
                    foo: ""
                },
                envVersion: "",
                success(res) {
                    console.info("跳转成功");
                },
                fail(res) {
                    console.info("跳转失败");
                }
            });
        }
    }
    class SdkControl extends MainBase {
        constructor() {
            super();
            this._videoTime = 0;
            if (window["wx"] && !this.sdk) {
                this.sdk = new wxSdk();
            }
        }
        init() {
            if (this.sdk) {
                this.sdk.init();
            }
        }
        showMenuShare(callBack) {
            if (this.sdk) {
                this.sdk.showMenuShare(callBack);
            } else {
                callBack && callBack(true);
            }
        }
        showShare() {
            if (this.sdk) this.sdk.showShare();
        }
        preLoadBanner() {
            if (this.sdk) {
                this.sdk.preLoadBanner();
            }
        }
        getUserInfo() {
            if (this.sdk) {
                var opt = Laya.Browser.window.wx.getLaunchOptionsSync();
                Laya.Browser.window.wx.request({
                    url: "",
                    data: {},
                    method: "GET",
                    header: {
                        "content-type": "text/html;charset=UTF-8"
                    },
                    success: function(res) {}
                });
            }
        }
        visibleBanner(isShow) {
            if (this.sdk) this.sdk.visibleBanner(isShow);
        }
        showBanner(isShow, y, banner, callBack) {
            if (this.sdk) {
                if (y == null) {
                    y = StageUtils.isIphoneX() ? 1100 : 1070;
                }
            }
        }
        showVideo(video, callback) {
            /*
                        if (this.sdk) {
                            if (this._videoTime > new Date().getTime()) {
                                var time = Math.ceil((this._videoTime - new Date().getTime()) / 1e3);
                                var str = "您看视频广告太频繁了，请等待" + time + "秒后再试";
                                TipsManager.showTips(null, str);
                                return;
                            }
                            this.getVideoAd(function(isEnd) {
                                console.log("看完了视频的回调");
                                SdkControl.Ins()._videoTime = new Date().getTime() + 1e4;
                                if (callback) {
                                    callback(isEnd);
                                }
                            }, video);
                        }*/

            gameapi.playReward();
            setTimeout(function() {
                pgdk$.showVideoAd$( //全局看视频 czh
                    function(isEnd) {

                        if (callback) {
                            callback(isEnd);
                        }
                        pgdk$.showToast$("获得奖励!");

                        if (isEnd) {
                            if (callback) {
                                callback(isEnd);
                            }
                            pgdk$.showToast$("获得奖励!");
                            console.log("看视频看完czh");
                        } else {
                            //pgdk$.showToast$("未看完视频，无法获得奖励！")
                            console.log("看视频没看完czh");
                        }
                    }.bind(this)
                );
                console.log("Run5000");
            }.bind(this), 4000)
        }
        getVideoAd(callback, video, myData) {
            if (this.sdk) this.sdk.getVideoAd(callback, video, myData);
        }
        navigateToMiniProgram(appId) {
            if (this.sdk) this.sdk.navigateToMiniProgram(appId);
        }
    }
    class JsonUtils extends MainBase {
        constructor() {
            super();
            this.isLoad = false;
            // this._cfg = {};//czh
            this._cfg = {
                "load": [{
                        "id": 1,
                        "role": "0,9",
                        "plan": "18",
                        "object": "7,16",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 2,
                        "role": "63,72",
                        "plan": "18,19,20",
                        "object": "0,9",
                        "end": "8",
                        "color": 2,
                        "type": 1
                    },
                    {
                        "id": 3,
                        "role": "8,17",
                        "plan": "0,1,9,10,18,19,21,22,23,24,25,26,27,28,30,31,32,33,34,35",
                        "object": "65,74",
                        "end": "80",
                        "color": 2,
                        "type": 1
                    },
                    {
                        "id": 4,
                        "role": "72,73",
                        "plan": "0",
                        "object": "55,56",
                        "end": "80",
                        "color": 3,
                        "type": 1
                    },
                    {
                        "id": 5,
                        "role": "77,78",
                        "plan": "0,8,29,30,31,32,33,38,39,40,41,42,47,48,49,50,51,56,57,58,59,60,79",
                        "object": "70,71",
                        "end": "80",
                        "color": 1,
                        "type": 2
                    },
                    {
                        "id": 6,
                        "role": "3,4",
                        "plan": "18,27,35,44",
                        "object": "55,56",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 7,
                        "role": "2",
                        "plan": "3,4,5,12,13,14,21,22,23,30,31,32,39,40,41",
                        "object": "",
                        "end": "78",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 8,
                        "role": "67,76",
                        "plan": "70,71,79,80",
                        "object": "52,61",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 9,
                        "role": "70,71",
                        "plan": "77,78,79,80",
                        "object": "30,31",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 10,
                        "role": "41,42,50,51",
                        "plan": "8,79,80,54,55,63,64,72,73",
                        "object": "20,21_58,67",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 11,
                        "role": "0,1,2",
                        "plan": "72",
                        "object": "54,55",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 12,
                        "role": "70,71,79,80",
                        "plan": "8",
                        "object": "33,34_65,74",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 13,
                        "role": "0,1,9,10",
                        "plan": "8",
                        "object": "6,15_54,55",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 14,
                        "role": "48,49,57,58",
                        "plan": "47,56,65,66,67,68,69,60,51",
                        "object": "4,13_54,55",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 15,
                        "role": "63,64,72,73",
                        "plan": "3,24,33,42,51,60,31,32",
                        "object": "22,23_69,78",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 16,
                        "role": "58,59,67,68",
                        "plan": "25,55,56,64,65",
                        "object": "4,13_45,46",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 17,
                        "role": "40,41,49",
                        "plan": "",
                        "object": "4,13_43,44",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 18,
                        "role": "67,68,76,77",
                        "plan": "42,51,60,69,78",
                        "object": "0,1_7,16",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 19,
                        "role": "0,1,9,10",
                        "plan": "5,6,14,15,23,24,32,33,18,19,20,27,28,29,36,37,38,45,46,47,54,55,56,63,64,65,72,73,74,58,59,60,61,62",
                        "object": "16,17_42,51",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 20,
                        "role": "0,1,2,9,10,11",
                        "plan": "20,29,38,47,56,65,48,57,35,61,62",
                        "object": "44,53_67,68",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 21,
                        "role": "63,64,72,73",
                        "plan": "20,21,22,23,24,29,30,31,32,33,34,38,39,40,41,42,43,47,48,56,57",
                        "object": "25,26_68,77",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 22,
                        "role": "63,64,72,73",
                        "plan": "4,13,47,48,49,50,56,57,58,59",
                        "object": "31,40_41,42",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 23,
                        "role": "66,67",
                        "plan": "10,11,12,13,14,15,16,25,34,43,52,61,70,79,78,77,76,75,74,65,56,57,58,47,48,49,38,39,40,29,30,31",
                        "object": "72,73",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 24,
                        "role": "7,8,16,17",
                        "plan": "0,1,2,9,10,11,46,47,48,49,50,51,60,69,78,63,64,65,66,67",
                        "object": "28,37_70,71,79,80",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 25,
                        "role": "3,12,21,22",
                        "plan": "10,19,28,37,46,25,34,43,52,61,51,57,66,75,76",
                        "object": "64,73_59,60",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 26,
                        "role": "70,71,79,80",
                        "plan": "11,12,20,21,29,30,38,39,47,48,56,57,65,66,74,75",
                        "object": "7,16,8,17_27,28",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 27,
                        "role": "66,67,75,76",
                        "plan": "19,20,28,29,37,38,46,47,55,56,64,65,73,74,21,22,23,24,25,34,43,52,61",
                        "object": "1,10_68,69,77,78",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 28,
                        "role": "21,22,23,30",
                        "plan": "28,37,46,55,64,73,59,60,61,69,78",
                        "object": "18,19_70,79",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 29,
                        "role": "63,64,72,73",
                        "plan": "",
                        "object": "3,12,4,13_34,35,43,44",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 30,
                        "role": "63,64,72,73",
                        "plan": "0,1,9,10,18,19,27,28,80,56,65,66,24,25,34",
                        "object": "39,48_60,61",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 31,
                        "role": "5,14,23,24",
                        "plan": "2,3,11,12,20,21,30,39,48,56,57,65,66,36,16,25,34,43,52,61,70",
                        "object": "9,10_69,78",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 32,
                        "role": "0,1,2,3",
                        "plan": "9,10,11,12,8,29,38,47,56,65,74,24,33,42,51,60",
                        "object": "14,15_72,73",
                        "end": "18",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 33,
                        "role": "76,77,78,79",
                        "plan": "10,11,12,13,14,15,16,19,28,37,46,55,64,25,34,43,52,61,30,31,39,40,48,49,57,58,59,60,66,75",
                        "object": "70,71",
                        "end": "51",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 34,
                        "role": "63,64,72,73,55",
                        "plan": "5,6,7,8,14,15,16,17,23,24,25,26,32,33,34,35",
                        "object": "2,11_61,62",
                        "end": "36",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 35,
                        "role": "12,13,14,21,22,23",
                        "plan": "38,39,40,41,42,43,48,76",
                        "object": "25,26,34,35_61,70",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 36,
                        "role": "63,64,65,72,73,74",
                        "plan": "5,34,41,42,43,50,51,52,75",
                        "object": "19,28,20,29_48,49",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 37,
                        "role": "65,66,67,74,75,76",
                        "plan": "4,19,28,37,46,55,64,59",
                        "object": "1,10_41,42",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 38,
                        "role": "69,70,71,78,79,80",
                        "plan": "0,9,18,65,24,25,34,43,52,51",
                        "object": "19,20_33,42_55,56",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 39,
                        "role": "30,31,32,39,40,41",
                        "plan": "15,16,25,19,28,29,68,72",
                        "object": "67,76_54,55",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 40,
                        "role": "6,7,8,15,16,17",
                        "plan": "31,42,38,36,44,53,72,57,66",
                        "object": "18,19_19,20_67,76",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 41,
                        "role": "72,74",
                        "plan": "0,36,37,45,46,80,34,35,43,44",
                        "object": "30,39,31,40",
                        "end": "17",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 42,
                        "role": "0,1,2,9,10,11",
                        "plan": "5,6,54,52,61,70",
                        "object": "14,15_64,73_77,78",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 43,
                        "role": "6,7,8,15,16,17",
                        "plan": "3,44,55,64",
                        "object": "65,74_52,53,61,62",
                        "end": "2",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 44,
                        "role": "18,19,20,27,28,29",
                        "plan": "8,36,37,38,39,57,58,59,60,61,62",
                        "object": "12,21_64,65_79,80",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 45,
                        "role": "36,37,38,45,46,47",
                        "plan": "20,21,22,23,24,25,29,57,58,59",
                        "object": "43,52,44,53_54,55",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 46,
                        "role": "0,1,2,9,10,11",
                        "plan": "3,54,80",
                        "object": "64,65,73,74_60,69",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 47,
                        "role": "18,27,36,45,54",
                        "plan": "0,9,63,72,8",
                        "object": "4,13_32,41,33,42_38,47,39,48_67,76",
                        "end": "17",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 48,
                        "role": "0,1,2,9,10,11",
                        "plan": "21,22,23,30,76",
                        "object": "63,64,72,73_69,78",
                        "end": "31",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 49,
                        "role": "9,10,11,18,19,20",
                        "plan": "6,27,28,29,38,47,56,55,40,33,34",
                        "object": "21,22_22,23_37,46",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 50,
                        "role": "57,58,59,66,75,68,77",
                        "plan": "0,1,9,10,18,19,27,28,36,14,34",
                        "object": "64,73_62,71_38,39_31,32",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 51,
                        "role": "22,23,24,32,41,50",
                        "plan": "19,28,37,46,55,56,35,52,61,70,69",
                        "object": "10,11_67,76",
                        "end": "6",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 52,
                        "role": "30,31,40,41,50,51",
                        "plan": "7,8,34,35,38,39,47,48,56,57",
                        "object": "1,10_70,71",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 53,
                        "role": "1,2,3,10,12,19,20,21",
                        "plan": "40",
                        "object": "0,9_4,13,5,14_27,28,36,37_43,44,52,53_66,75,67,76",
                        "end": "17",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 54,
                        "role": "72,73,74,75,64,65",
                        "plan": "3,12,19,28,37,46,55,40,41",
                        "object": "1,10_70,71",
                        "end": "35",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 55,
                        "role": "23,24,31,32,33,41",
                        "plan": "0,1,44,28,37,46,47,66,67,68",
                        "object": "11,12_51,60_72,73",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 56,
                        "role": "21,22,31,39,40,41",
                        "plan": "0,8,11,12,13,14,15,71,80",
                        "object": "18,19_49,58",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 57,
                        "role": "7,8,15,16,17,25",
                        "plan": "19,28,37,46,55,64,65,66,67,68,69,41",
                        "object": "9,10_10,11_51,60",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 58,
                        "role": "30,31,32,40,48,49,50",
                        "plan": "76,77,78,79,80",
                        "object": "1,2,10,11_63,64,72,73_58,67",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 59,
                        "role": "59,67,68,69,2,3,12,13",
                        "plan": "18,27,36,45,54,55,63,64,65,72,73,74,75,76,77,78,79,70,61,60",
                        "object": "8,17_13,22_34,35,43,44",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 60,
                        "role": "30,31,32,40,41,50",
                        "plan": "0,8,49,58,67,76",
                        "object": "66,75_69,70,78,79_79,80",
                        "end": "9",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 61,
                        "role": "33,34,35,42,51,52,53",
                        "plan": "0,1,9,10",
                        "object": "3,4_6,7_26,35_74,75_76,77_79,80",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 62,
                        "role": "31,32,39,40,41,48,49",
                        "plan": "0,1,9,80",
                        "object": "3,12_11,12_18,19_61,62_69,78",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 63,
                        "role": "6,7,15,16",
                        "plan": "1,10,19,28,37,46,55,64",
                        "object": "11,12_52,61,53,62_65,74,66,75_68,77,69,78",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 64,
                        "role": "16,17,25,24,32,33,34",
                        "plan": "35,44,53,52,51,50,49,48,47,38",
                        "object": "5,6,14,15_10,19,11,20_66,75_70,71",
                        "end": "62",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 65,
                        "role": "30,31,32,39,48,49,50,41",
                        "plan": "80",
                        "object": "7,16_36,37_43,44_64,73",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 66,
                        "role": "30,32,38,39,40,41,42,49",
                        "plan": "0,80",
                        "object": "4,13_34,35,43,44_36,37,45,46_67,76",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 67,
                        "role": "30,31,32,39,40,41,48,49,50",
                        "plan": "1,7,8",
                        "object": "38,39_41,42_67,76",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 68,
                        "role": "0",
                        "plan": "10,25,30,47,41,60,51,63,72,79,80",
                        "object": "",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 69,
                        "role": "57,58,59,66,67,68",
                        "plan": "0,1,2,9,10,11,18,19,20,35,44,53,75",
                        "object": "6,7_72,73_79,80_31,40",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 70,
                        "role": "29,38,47,48,33,42,51,50",
                        "plan": "31,72,73,74,75,79,80,70,71",
                        "object": "0,9_18,27_36,45_17,26_35,44_56,57_59,60,68,69",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 71,
                        "role": "46,47,54,55,56,57,63,66,72,73,74,75",
                        "plan": "76,67,58,49,50,51,60",
                        "object": "7,16_20,21_70,79",
                        "end": "59",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 72,
                        "role": "17,26,35,44,53,62,71",
                        "plan": "2,78",
                        "object": "1,10_70,79",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 73,
                        "role": "20,21,22,23,24,29,38,47,56,39,57,58,59,60,51,42,33",
                        "plan": "35,76",
                        "object": "0,9_2,3_5,6,14,15_7,8_36,45_53,62_69,70,78,79",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 74,
                        "role": "39,40,41,31,49",
                        "plan": "",
                        "object": "0,1_8,17_35,44_63,72_79,80_38,39",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 75,
                        "role": "56,57,58,59,60,48,49,50,40",
                        "plan": "",
                        "object": "4,5,13,14_14,15_11,12,20,21_27,36_44,53_76,77",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 76,
                        "role": "41,42,43,52,61,60,59,50,49",
                        "plan": "35,28,29,30,31,37,38,39,40,80,76",
                        "object": "4,13_13,22_32,33_33,34_63,64",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 77,
                        "role": "27,28,29,30,31,36,45,54,63,64,65,66,67,58,49,40",
                        "plan": "48,52,53,43,44",
                        "object": "6,15_9,10_25,34_79,80_77,78_55,64_56,57_37,46",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 78,
                        "role": "20,21,29,23,24,33,47,56,57,59,60,51",
                        "plan": "2,3,4,5,6,18,27,36,45,54,26,35,44,53,62,74,75,76,77,78,31,40,39,41,49",
                        "object": "13,22_37,38_42,43_58,67",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 79,
                        "role": "20,21,29,23,24,33,47,56,57,59,60,51",
                        "plan": "12,34,40,46,68",
                        "object": "0,1_8,17_63,72_79,80",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 80,
                        "role": "21,30,31,32,48,49,50,59",
                        "plan": "5,6,7,8,72,73,74,75,39,40,41",
                        "object": "1,10,2,11_16,17_63,64",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 81,
                        "role": "64,66,68,70,60,50,40,48,56,58",
                        "plan": "26,30,36,43,55,77",
                        "object": "",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 82,
                        "role": "20,21,22,23,24,29,38,47,56,57,58,59,60,51,42,33,40",
                        "plan": "",
                        "object": "1,10_16,17_63,64_70,79",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 83,
                        "role": "41,42,50,51",
                        "plan": "31,54,63,72",
                        "object": "10,19,11,20_25,26,34,35_46,47,55,56_67,68_69,78,70,79",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 84,
                        "role": "0,72,80",
                        "plan": "9,18,29,35,44,66,73,79",
                        "object": "",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 85,
                        "role": "11,12,13,14,23,32,41,50,59,58,57,56,47,38,29,30",
                        "plan": "39",
                        "object": "5,14_25,26_35,44_44,53_61,62_68,77",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 86,
                        "role": "9,10,7,16,17,63,64,73,70,71,79",
                        "plan": "0,1,8,80,72",
                        "object": "4,13_36,37_43,44_67,76",
                        "end": "9",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 87,
                        "role": "75",
                        "plan": "0,1,3,14,15,16,25,34,19,28,29,30,38,47,45,54,63,72,49,50,51,41,32,62,71,80,74,65,66,67,68,69",
                        "object": "",
                        "end": "73",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 88,
                        "role": "40,31,41,39,49",
                        "plan": "19,34,61,45",
                        "object": "4,13_9,10_16,17_65,66_69,70_67,76",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 89,
                        "role": "3,4,5,12,21,30,39,48,49,50,41,32,23,14",
                        "plan": "67,68,61",
                        "object": "7,8_12,13_28,37_43,52_58,59_66,75_70,79",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 90,
                        "role": "20,21,22,23,24,33,42,51,50,41,59,58,57,48,47,38,29",
                        "plan": "40,72",
                        "object": "14,15_52,53_57,66",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 91,
                        "role": "55,64,65,66,67,68,59,49,40,39,38,47",
                        "plan": "0,1,79,80",
                        "object": "6,15_50,51",
                        "end": "9",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 92,
                        "role": "20,21,22,23,24,33,42,29,38,47,56,57,58",
                        "plan": "31,72,73,74,75",
                        "object": "70,71_55,64_9,10_7,16",
                        "end": "76",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 93,
                        "role": "12,21,30,39,40,41,50,59",
                        "plan": "4,5,6,7,8,15,16,17,24,25,26,35,44,36,45,54,63,72,55,64,73,74,75,65,56",
                        "object": "22,23,31,32_48,49,57,58_61,70_70,79",
                        "end": "76",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 94,
                        "role": "20,29,38,39,40,41,42,33,24,22,31,49",
                        "plan": "25,34,37,46",
                        "object": "43,44_67,76_27,28",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 95,
                        "role": "0,1,9,10",
                        "plan": "",
                        "object": "15,16,24,25_9,18,10,19_39,40,48,49_42,51,43,52_70,79,71,80_63,64,72,73",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 96,
                        "role": "20,21,22,29,31,38,39,40,32,33,42,51,50,49,40",
                        "plan": "16,17,72,73",
                        "object": "23,32_40,41_30,39_47,48",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 97,
                        "role": "79,70,71",
                        "plan": "20,21,22,23,33,42,51,60,59,58,57,47,38,29,40,8,72,80",
                        "object": "1,10_9,10",
                        "end": "10",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 98,
                        "role": "13,14,22,23,21,20,29,38,47,46,37,48,49,50,41,32",
                        "plan": "8,17,72,73",
                        "object": "25,34_30,39_40,41_65,66",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 99,
                        "role": "58,49,40,39,38",
                        "plan": "0,1,8,63,64,72,73,79,80,47,48,57",
                        "object": "23,32_32,33_45,46_66,75",
                        "end": "56",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 100,
                        "role": "60,61,62,69,70,71,78,79,80",
                        "plan": "77,68,59,50,41,32,31,30,39,48,57",
                        "object": "12,21,13,22_33,34,42,43_66,75",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 101,
                        "role": "41,42,43,44,50,59,68",
                        "plan": "0,6,7,8,15,16,17,24,25,26,33,34,35,51,52,53,60,61,62,69,70,71,78,79,80,45,46,54,55,63,64,72,73",
                        "object": "9,18_18,27_27,36_74,75_75,76_76,77",
                        "end": "44",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 102,
                        "role": "32,33,34,43,52,61,60,59,68,67,66,65,56,47,38,39,40",
                        "plan": "0,1,2,3,80,71,62",
                        "object": "10,19_63,64_42,51_49,50_58,59",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 103,
                        "role": "63,64,72,73",
                        "plan": "54,57,66,75,59,62,26,19,20,21,30,31,32",
                        "object": "1,10_4,5_8,17_23,24",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 104,
                        "role": "28,29,37,46,55,64,65,66,67,58,59,50,41,32,31",
                        "plan": "0,1,2,3,80,71,62,53",
                        "object": "21,30_30,39_49,50_50,51",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 105,
                        "role": "39,41,30,31,32,48,49,50",
                        "plan": "",
                        "object": "7,8_4,13_76,77_40,41_31,40",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 106,
                        "role": "11,12,13,14,15,20,22,24,29,30,28,37,46,47,49,56,65,66,67,68,69,60,51,50,52,43,34,33,32",
                        "plan": "",
                        "object": "2,3_5,6_7,16_10,19_21,22_22,23_37,38_42,43_57,58_58,59_61,70_64,73",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 107,
                        "role": "0,1,2,3,4",
                        "plan": "17,35,53,71,19,38,57,72",
                        "object": "21,22_40,41_59,60_78,79",
                        "end": "79",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 108,
                        "role": "66,67,68,69,60,51,42,41,40,49,48,57",
                        "plan": "71,80",
                        "object": "5,6_9,10_55,64_69,78_52,53",
                        "end": "7",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 109,
                        "role": "57,58,59,65,69",
                        "plan": "0,8,11,12,14,15,30,39,32,41,56,66,67,68,60",
                        "object": "27,28_34,35",
                        "end": "10",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 110,
                        "role": "54,55,56,47,38,37,36,44,43,42,33,24,25,26",
                        "plan": "34,35,45,46",
                        "object": "0,1_8,17_63,72_79,80",
                        "end": "44",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 111,
                        "role": "10,11,12,19,28,37,46,55,64,65,66,67,68,69,70,61,52,51,50,49,48,39,30,21",
                        "plan": "",
                        "object": "6,15_11,20_39,40_43,44_59,60",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 112,
                        "role": "0,1,2,3,4,9,18,27,36,11,29,37,38,39,40,31,22,13",
                        "plan": "7,8,17,71,80",
                        "object": "28,29_30,31_64,73_66,75_69,78_55,56_57,58_51,60",
                        "end": "16",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 113,
                        "role": "20,21,22,29,31,40,39,38,37,46,48,57,56,55",
                        "plan": "43,44",
                        "object": "63,64_61,62_47,56_23,32",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 114,
                        "role": "29,30,31,32,33,38,47,56,57,58,59,60,51,42,40,49",
                        "plan": "0",
                        "object": "16,17_18,19_64,73_50,59",
                        "end": "9",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 115,
                        "role": "63,64,72,73",
                        "plan": "0,9,21,30,39,38,40,48,65,74,44,53,52",
                        "object": "5,6_60,69",
                        "end": "47",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 116,
                        "role": "65,66,67,68,69,60,51,50,41,40,39,48,47,56",
                        "plan": "6,7,8",
                        "object": "1,2_27,28_64,73_52,61",
                        "end": "9",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 117,
                        "role": "0,1,2,3,9,18,27,28,29,30,21,12",
                        "plan": "",
                        "object": "7,16_22,31_31,40_39,40_40,41_68,69_67,68,76,77",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 118,
                        "role": "2,11,10,19,18,6,15,16,25,26,54,55,64,65,74,78,69,70,61,62",
                        "plan": "5,27,75,53",
                        "object": "21,22_22,23_29,38_38,47_33,42_42,51_57,58_58,59",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 119,
                        "role": "11,12,20,14,15,24,32,31,40,49,48,56,65,66,68,69,60",
                        "plan": "4,13,22,21,23,76,67,58,59,57",
                        "object": "2,11_25,26_35,44_36,45_54,55_69,78",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 120,
                        "role": "10,11,19,20,51,52,60,61",
                        "plan": "0,1,2,15,16,17,24,26,33,34,35,37,38,39,46,48,55,56,57,689,69,70,77,79,68",
                        "object": "4,5_61,62_65,74",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 121,
                        "role": "30,32,38,39,40,41,42,48,50",
                        "plan": "0,1,9,10,70,71,79,80",
                        "object": "11,12_19,28_34,35_45,46_52,61_68,69",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 122,
                        "role": "30,31,32,33,34,39,43,48,49,50,52,59,60,61",
                        "plan": "4,41,72",
                        "object": "1,10_20,21_44,53_64,65",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 123,
                        "role": "63,64,72,73",
                        "plan": "19,20,21,22,23,24,32,41,50,59,47,56,65,74,53,62,71,80",
                        "object": "34,43_42,51,43,52_51,52,60,61",
                        "end": "75",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 124,
                        "role": "10,11,12,13,14,15,16,19,25,28,30,31,32,34,37,39,41,43,46,48,49,50,52,55,58,61,64,65,66,67,68,69,70",
                        "plan": "",
                        "object": "9,10_24,35_29,38_53,62_57,58_64,73",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 125,
                        "role": "20,21,29,30,23,24,32,33,47,48,56,57,50,51,59,60",
                        "plan": "",
                        "object": "0,9_7,8_63,64,72,73_71,80",
                        "end": "7",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 126,
                        "role": "37,38,39,46,48,49,50,55,57,59,64,65,66,67,68",
                        "plan": "8,80",
                        "object": "0,9_33,34_63,64_60,69",
                        "end": "9",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 127,
                        "role": "2,6,11,15,18,19,34,35,52,53,54,55,66,68,75,77",
                        "plan": "0,1,3,5,7,8,9,26,27,44,45,62,63,72,74,76,78,80",
                        "object": "13,22_37,38_42,43_58,67",
                        "end": "10",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 128,
                        "role": "37,38,39,40,41,46,48,50,55,57,59,64,65,66,67,68",
                        "plan": "",
                        "object": "1,10_24,25_45,46_70,71_66,75",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 129,
                        "role": "55,63,64,65,73",
                        "plan": "",
                        "object": "3,4_31,32_29,38_41,50_50,59_45,54_66,67,75,76",
                        "end": "76",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 130,
                        "role": "30,31,32,39,40,41",
                        "plan": "4,29,33,38,42,47,50,51,55,56,57,58,59,60,61",
                        "object": "6,7_18,19,27,28_67,76",
                        "end": "13",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 131,
                        "role": "10,11,12,14,15,16,21,23,29,30,31,32,33,38,42,47,48,49,50,51,55,56,57,59,60,61,64,70",
                        "plan": "",
                        "object": "4,13_25,34_39,40_40,41_45,46_52,53",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 132,
                        "role": "21,29,30,31,37,38,40,41,45,46,50,51,55,59,58,59,65,66,67,75",
                        "plan": "80",
                        "object": "5,14_9,10_39,48_63,64",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 133,
                        "role": "8,16,17,26,54,63,64,72",
                        "plan": "0,7,9,18,40,62,71,73,80",
                        "object": "6,15_19,20_32,41_39,48_60,61_65,74",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 134,
                        "role": "28,29,30,37,39,40,46,49,50,55,59,64,65,66,67,68",
                        "plan": "",
                        "object": "7,16_11,12_38,47_70,71",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 135,
                        "role": "10,11,12,19,21,28,29,30,50,51,52,59,61,68,69,70",
                        "plan": "24,56",
                        "object": "6,15_18,19_22,23_25,26_33,42_54,55_65,74_69,78",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 136,
                        "role": "30,31,32,38,39,41,46,47,50,55,58,59,64,65,66,67,68",
                        "plan": "",
                        "object": "4,13_43,44_57,58_70,79",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 137,
                        "role": "22,31,40,48,49,50,57,59",
                        "plan": "5,6,7,8,10,11,12,13,66,68,74,75,76,77,78",
                        "object": "20,29_43,52_51,52_45,46_46,55_63,72_71,80",
                        "end": "67",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 138,
                        "role": "22,23,24,25,31,34,38,39,40,41,43,47,49,50,51,52,56,59,65,66,67,68",
                        "plan": "",
                        "object": "6,7_9,10_24,33_47,48_70,79",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 139,
                        "role": "55,56,57,58,59,60,61,65,69,74,78",
                        "plan": "34,35",
                        "object": "7,8_0,9_45,46_45,54_67,76",
                        "end": "9",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 140,
                        "role": "20,21,29,30,23,24,32,33,47,48,56,57,50,51,59,60",
                        "plan": "0,1,7,8,9,10,16,17,22,31,38,39,40,41,42,49,58,63,64,70,71,72,73,79,80",
                        "object": "4,13_36,37_43,44_67,76",
                        "end": "50",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 141,
                        "role": "1,2,6,7,9,10,16,17,18,26,54,62,63,64,70,71,73,74,78,79",
                        "plan": "5,27,53,75",
                        "object": "13,14_28,37_43,52_66,67",
                        "end": "76",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 142,
                        "role": "20,21,22,23,24,28,29,33,38,42,47,48,51,57,58,59,60,68",
                        "plan": "",
                        "object": "16,17_21,30_50,51_67,76",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 143,
                        "role": "13,21,23,29,33,37,43,47,51,57,59,67",
                        "plan": "0,1,6,7,8,9,16,17,26,54,63,64,71,72,73,74,79,80",
                        "object": "",
                        "end": "10",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 144,
                        "role": "37,38,39,41,42,43,46,48,49,50,52,55,57,58,59,61,64,65,66,68,69,70",
                        "plan": "",
                        "object": "3,12_16,17_39,40_42,51_78,79",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 145,
                        "role": "40,41,42,49,50,51,58,59,60",
                        "plan": "7,8,63,70,71,72,79,80",
                        "object": "3,12_27,28_32,33_48,57",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 146,
                        "role": "46,47,48,50,51,52,55,57,58,59,61,64,65,66,68,69,70",
                        "plan": "",
                        "object": "4,13_9,10_53,62_56,57_60,69",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 147,
                        "role": "44,53,71,80",
                        "plan": "1,2,10,19,25,28,33,34,37,39,43,46,52,55,61,64,65,69,70,79",
                        "object": "66,75_68,77",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 148,
                        "role": "37,38,39,40,41,45,46,49,50,51,55,56,58,59,65,67,74,75,76",
                        "plan": "48",
                        "object": "6,15_28,29_36,37_57,66_68,77",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 149,
                        "role": "16,17,18,19,34,35,36,37,52,53,54,55,70,71,72,73",
                        "plan": "8,9,26,27,44,45,62,63,80",
                        "object": "10,11_78,79",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 150,
                        "role": "27,28,29,36,35,38",
                        "plan": "76,77,78,79,80,39,41,50,30,31,32",
                        "object": "10,19,11,20_5,6,14,15_6,7,15,16_7,8,16,17",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 151,
                        "role": "1,10,19,78,79,80",
                        "plan": "18,4,13,6,15,24,33,48,57,66,75,68,77",
                        "object": "0,9_54,55_16,17_44,53",
                        "end": "5",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 152,
                        "role": "20,21,22,23,24,29,33,37,38,39,40,41,42,43,46,48,50,52,55,57,59,61,64,65,66,67,68,69,70",
                        "plan": "",
                        "object": "6,15_30,31_31,32_34,35_74,75_77,78_60,69_56,65",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 153,
                        "role": "1,9,10,7,16,17,63,64,73,70,71,79",
                        "plan": "0,8,34,35,45,46,72,68,77,80,3,12",
                        "object": "14,23_28,29_51,52_57,66",
                        "end": "4",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 154,
                        "role": "20,21,22,23,24,29,33,38,42,47,49,51,56,58,59,60,65,66,67",
                        "plan": "39",
                        "object": "14,15_18,19_52,61_67,68_64,73",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 155,
                        "role": "0,1,9,10,7,8,16,17,20,21,29,30,23,24,32,33,47,48,56,57,50,51,59,60,63,64,72,73,70,71,79,80",
                        "plan": "3,4,5,13,27,36,45,37,43,36,44,53,67,75,76,77",
                        "object": "22,31_38,39_41,42_49,58",
                        "end": "78",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 156,
                        "role": "30,31,32,33,39,42,46,47,48,49,51,55,58,60,64,65,66,67,68,69",
                        "plan": "40",
                        "object": "4,19_37,38_41,50_48,57_54,63_70,71",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 157,
                        "role": "51,63,64,72,68,76,77",
                        "plan": "5,35,40,45,75",
                        "object": "25,26_65,74",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 158,
                        "role": "46,47,48,49,50,51,52,55,58,61,64,65,66,67,68,69,70",
                        "plan": "",
                        "object": "1,10_16,17_40,41_47,56_57,58_50,59",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 159,
                        "role": "15,23,25,27,36,45,31,40,49,35,44,53,55,57,65",
                        "plan": "2,78",
                        "object": "63,72",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 160,
                        "role": "36,37,45,46,70,71,79,80",
                        "plan": "15,24,25,26,38,54,55,56,65,51,60,69",
                        "object": "0,9_2,3,11,12_16,17_68,77",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 161,
                        "role": "4,11,12,13,36,28,37,46,34,43,52,44,66,67,68,76",
                        "plan": "3,5,27,45,35,53,75,77",
                        "object": "9,10_10,19_7,16_16,17_63,64_64,73_61,70_70,71",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 162,
                        "role": "12,13,14,19,20,21,23,28,32,37,39,40,41,46,47,48",
                        "plan": "30",
                        "object": "10,11_5,6_54,55_66,75",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 163,
                        "role": "3,4,5,12,14,27,28,36,45,46,34,35,44,52,53,66,68,75,76,77",
                        "plan": "8,72,80",
                        "object": "13,22_37,38_42,43_58,67",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 164,
                        "role": "13,14,15,16,22,25,31,33,34,40,43,49,50,52,58,59,60,61",
                        "plan": "32",
                        "object": "4,5_9,10_42,51_67,76",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 165,
                        "role": "1,2,3,10,11,12",
                        "plan": "5,14,23,46,47,48,49,58,67,78,79,80",
                        "object": "50,51_64,73",
                        "end": "32",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 166,
                        "role": "10,11,12,13,14,15,16,19,22,25,28,30,31,32,33,34,37,38",
                        "plan": "29,72,73,74",
                        "object": "1,2_39,40_47,56_69,78",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 167,
                        "role": "2,10,11,18,19,20,60,61,62,69,70,78",
                        "plan": "0,1,9,6,15,16,24,25,26,54,55,56,64,65,74,71,79,80",
                        "object": "12,13_27,36_43,52_76,77",
                        "end": "5",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 168,
                        "role": "12,13,14,20,21,22,23,24,28,29,33,34,38,40,42,47,48,49,50,51",
                        "plan": "31",
                        "object": "5,14_10,11_25,34_38,39_67,76",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 169,
                        "role": "13,22,31,32,37,38,39,41,42,43,48,49,58,67",
                        "plan": "4,36,44,76",
                        "object": "2,11_6,15_18,19_25,26_54,55_61,62_65,74_69,78 ",
                        "end": "5",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 170,
                        "role": "37,38,46,47,30,31,39,40",
                        "plan": "15,33,42,55,57,58,60,70",
                        "object": "1,2_2,3_5,14_11,12_20,21_29,30_34,35_27,36_38,39_47,48_39,48_46,47_66,75",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 171,
                        "role": "10,11,15,16,19,20,21,22,23,24,25,29,33,38,42,47,51,55,56,57,58,59,60,61,64,65,69,70",
                        "plan": "",
                        "object": "13,14_16,17_19,28_32,41_48,49_64,73",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 172,
                        "role": "11,12,13,20,22,29,31,37,38,39,40,41,42,46,48,51,55,57,58,59,60,64,65,66",
                        "plan": "",
                        "object": "16,17_21,30_50,51_47,56_70,79",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 173,
                        "role": "0,1,2,9,11,7,15,16,64,65,73,69,71,78,79,80",
                        "plan": "32,39,40,41,48",
                        "object": "4,13_6,7_7,8_72,73_73,74_67,76",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 174,
                        "role": "10,11,12,13,14,15,16,19,22,25,28,31,34,37,38,39,40,41,42,43,46,49,55,58,64,65,66,67",
                        "plan": "",
                        "object": "2,3_6,7_29,38,30,39_47,48_47,56_63,64_59,60_61,62_68,77",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 175,
                        "role": "0,1,9,3,4,13,31,40,41,43,44,53,71,79,80",
                        "plan": "5,6,7,8,14,15,16,17,23,24,25,26,32,33,34,35,45,46,47,48,54,55,56,57,63,64,65,66,72,73,74,75",
                        "object": "18,19_28,37_41,50_58,59",
                        "end": "36",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 176,
                        "role": "22,23,19,20,21,24,28,30,33,37,41,42,46,47,48,49,50,55,58,64,65,66,67",
                        "plan": "40",
                        "object": "9,10_3,12_16,17_57,58_52,53_73,74_70,79",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 177,
                        "role": "30,31,32,33,37,38,39,42,46,50,51,55,57,58,59,64,65,66",
                        "plan": "49",
                        "object": "2,3_25,26_63,72_67,76",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 178,
                        "role": "19,20,21,22,28,31,37,40,46,47,49,55,58,64,65,66,67",
                        "plan": "39",
                        "object": "5,14_16,25_52,53_54,63_73,74_18,19",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 179,
                        "role": "45,46,47,48,49,54,58,63,67,72,73,74,75,76",
                        "plan": "18,19,22,23,32",
                        "object": "9,10_38,39_50,59_63,64_68,77",
                        "end": "31",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 180,
                        "role": "1,7,9,10,11,12,14,15,16,17,19,21,23,25,28,29,30,32,33,34",
                        "plan": "",
                        "object": "4,13_20,21_23,24_61,62_67,76",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 181,
                        "role": "26,35,44,53,74,75,76,77,78",
                        "plan": "8,72,70,71,79,80",
                        "object": "7,16_16,17_63,64_64,73",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 182,
                        "role": "0,8,9,10,11,12,13,14,15,16,17,19,20,24,25,29,30,31,32,33",
                        "plan": "",
                        "object": "43,44_48,49_59,68_69,78_63,64",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 183,
                        "role": "20,21,22,23,24,29,33,37,38,39,40,42,46,49,51,55,58,59,60,64,65,66,67",
                        "plan": "",
                        "object": "1,10_16,25_38,47_50,51_63,64",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 184,
                        "role": "0,8,9,10,11,12,14,15,16,17,19,25,28,29,30,32,33,34,36,37,43,44,45,53,54,62",
                        "plan": "",
                        "object": "27,28_49,50_55,64_70,79",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 185,
                        "role": "25,26,34,35",
                        "plan": "3,4,31,32,33,36,38,39,43,44",
                        "object": "18,19,27,28_52,61_78,79",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 186,
                        "role": "10,11,12,14,15,16,19,20,21,25,28,29,30,32,33,34,37,43,46,47,48,50,51,52",
                        "plan": "",
                        "object": "4,13_54,55_65,74_34,35",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 187,
                        "role": "1,3,5,7,9,10,12,13,14,16,17,27,28,34,35,37,43,45,46,52,53,63,64,66,67,68,710,71,73,75,77,79",
                        "plan": "",
                        "object": "4,13_36,37_43,44_67,76",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 188,
                        "role": "28,29,30,32,33,34,37,38,39,41,42,43,46,48,50,52,55,61,64,65,66,67,68,69,70",
                        "plan": "",
                        "object": "1,10_25,26_51,60_56,65_75,76",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 189,
                        "role": "3,4,5,12,14,27,28,34,35,36,44,45,46,52,53,66,68,75,76,77",
                        "plan": "21,23,29,30,31,32,33,39,41,47,48,49,50,51,57,59",
                        "object": "6,15_18,19_61,62_65,74",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 190,
                        "role": "28,29,30,32,33,34,37,41,43,46,50,52,55,57,59,61,64,65,66,68,69,70",
                        "plan": "40,49,58",
                        "object": "1,10_16,17_53,62_72,73_60,69",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 191,
                        "role": "1,3,5,7,9,10,12,13,14,16,17,27,28,34,35,37,43,45,46,52,53,63,64,66,67,68,70,71,73,75,77,79",
                        "plan": "30,31,32,39,41,48,49,50",
                        "object": "4,13_36,37_43,44_67,76",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 192,
                        "role": "38,39,40,41,42,46,47,49,51,52,55,58,61,64,65,66,67,68,69,70",
                        "plan": "",
                        "object": "0,1_6,15_50,51_56,57_67,76",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 193,
                        "role": "37,45,46,47,50,51,52,55,57,59,61,68,69,70",
                        "plan": "3,5,49,53,63,64,65,66,67,71,73,75,77,79",
                        "object": "10,19_16,17_54,55",
                        "end": "78",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 194,
                        "role": "37,38,39,40,41,42,47,50,51,56,57,60,65,66,67,68,69,70",
                        "plan": "30,31,32,33",
                        "object": "4,13_27,28_43,52_48,49_58,59_63,72",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 195,
                        "role": "20,21,29,30,47,48,56,57",
                        "plan": "10,11,12,13,14,15,16,19,25,34,37,43,52,55,64,65,67,69,70,71",
                        "object": "23,24_29,38_51,60_57,58",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 196,
                        "role": "31,32,39,40,41,47,48,49,50,51,52,55,56,60,61,64,65,66,67,68,69",
                        "plan": "20,21,22,23,24,25",
                        "object": "4,13_27,36_43,44_57,58_58,59_71,80",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 197,
                        "role": "2,6,10,11,15,16,18,19,25,26,54,55,61,62,64,65,69,70,74,78",
                        "plan": "8,31,39,40,41,49,72,80",
                        "object": "13,22_37,38_42,43_58,67",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 198,
                        "role": "10,11,12,19,21,28,30,37,46,47,48,50,51,52,57,61,66,67,68,69,70",
                        "plan": "0,40,80",
                        "object": "1,2_4,13_27,36_38,39_43,44_62,71_77,78",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 199,
                        "role": "6,14,15,24,25,26,34,46,54,55,56,65,66,74",
                        "plan": "10,16,40,64,70",
                        "object": "3,12_27,28_38,39_41,42_52,53_68,77",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 200,
                        "role": "37,38,39,41,42,43,46,48,49,50,52,55,61,64,65,66,67,68,69,70",
                        "plan": "57",
                        "object": "3,12_16,17_36,45_51,52_72,73_77,78",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 201,
                        "role": "4,12,13,14,22,55,63,64,65,73,61,69,70,71,79",
                        "plan": "36,44,76",
                        "object": "20,29_38,39_41,42_51,60",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 202,
                        "role": "27,28,29,30,31,32,36,45,54,55,56,47,48,49,50,65,74,59,68,77",
                        "plan": "40",
                        "object": "9,10_41,42_67,76_16,17",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 203,
                        "role": "0,1,2,9,10,18,6,7,8,16,17,26,54,63,64,72,73,74,62,70,71,78,79,80",
                        "plan": "31,39,41,49",
                        "object": "4,13_36,37_43,44_67,76",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 204,
                        "role": "21,22,23,30,32,37,39,38,40,41,42,43,48,57,58,59,50,46,55,64,65,52,61,70,69",
                        "plan": "",
                        "object": "18,19_4,13_33,34_47,48_49,58",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 205,
                        "role": "2,10,11,12,18,19,21,22,28,29,30,38",
                        "plan": "63,71,72,73,71,79,80",
                        "object": "1,10_38,47_43,44",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 206,
                        "role": "10,11,12,13,14,15,16,19,28,37,46,55,64,65,66,67,68,69,70,61,52,43,34,25,30,31,32,41,42,51,38,47,57,59",
                        "plan": "40",
                        "object": "9,0_23,24_35,26_79,80_54,63",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 207,
                        "role": "1,9,10,11,12,19,28,46,55,64,73,63,65,66,79,70,61,52,71,69,68",
                        "plan": "16,24,32,40",
                        "object": "4,13_36,37_43,44_67,76",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 208,
                        "role": "10,11,12,13,21,22,23,24,19,28,37,46,55,64,65,66,57,48,38,33,42,43,52,61,70,67,68,59,58",
                        "plan": "40",
                        "object": "5,14_9,10_47,56_39,48_51,52_77,78",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 209,
                        "role": "21,22,23,29,30,32,33,38,47,48,57,58,59,50,51,50,42",
                        "plan": "0,9,18,27,36,44,35,26",
                        "object": "8,17_71,80_33,34_46,47",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 210,
                        "role": "10,11,12,19,28,37,46,55,64,65,66,57,48,39,30,21,49,50,41,32,23,14,15,16,25,34,43,52,61,70,69,68",
                        "plan": "",
                        "object": "4,13_16,17_20,29_39,40_51,60",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 211,
                        "role": "3,4,5,13,22,31,39,40,41,48,49,50,18,28,36,46,54,64,72,25,35,43,53,61,71,79",
                        "plan": "0,1,2,9,10,11,6,7,8,15,16,17,76",
                        "object": "27,28_21,30_23,32_34,35",
                        "end": "26",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 212,
                        "role": "10,11,12,19,28,37,39,39,30,21,40,49,58,67,66,65,64,55,46,50,51,52,61,70,69,68",
                        "plan": "",
                        "object": "6,15_25,26_20,29_47,48_75,76_59,60",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 213,
                        "role": "10,11,12,13,14,15,16,19,28,29,38,39,40,41,42,33,34,25,22,31",
                        "plan": "",
                        "object": "20,29_21,22_32,41_24,25_65,74_70,71",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 214,
                        "role": "10,11,12,13,14,15,16,19,28,29,30,31,22,32,41,50,51,52,43,34,25,37,46",
                        "plan": "",
                        "object": "1,10_24,25_40,49_61,62_70,79",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 215,
                        "role": "28,29,37,38",
                        "plan": "5,6,7,8,15,16,17,24,25,26,34,35,43,44,53,62",
                        "object": "2,11_11,12_29,30_39,40_47,48_65,66_63,72",
                        "end": "3",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 216,
                        "role": "10,11,12,13,14,15,16,25,34,39,43,52,61,70,69,68,67,66,65,64,55,46,37,28,19,29,30,31,32,23,41,29,48,49,50,51,57",
                        "plan": "",
                        "object": "0,9_54,63_71,80_75,76_47,56_19,20_33,42_39,40",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 217,
                        "role": "2,4,6,8,12,14,16,21,23,25,18,28,29,31,33,35,36,39,41,43,46,47,49,51,53,54,57,59,61,64,65,67,69,71,72,75,77,79",
                        "plan": "0,1,3,5,7,9,26,27,44,45,62,63,74,76,78,80",
                        "object": "42,43_58,67",
                        "end": "10",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 218,
                        "role": "19,20,21,28,37,46,55,64,65,66,67,68,59,69,70,61,52,43,42,41,40,39,30",
                        "plan": "",
                        "object": "9,10_57,58_58,59_62,71_63,72_7,16",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 219,
                        "role": "2,11,20,19,18,6,15,24,25,26,54,55,56,65,74,60,61,62,69,78",
                        "plan": "30,32,48,50",
                        "object": "1,10_9,10_16,17_16,25_55,64_63,64_70,71_70,79",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 220,
                        "role": "7,8,16,17,63,64,72,73",
                        "plan": "3,12,4,5,6,15,65,74,75,76,77,68",
                        "object": "0,9_21,22_58,59_71,80",
                        "end": "13",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 221,
                        "role": "21,22,23,24,25,26,39,40,41,42,43,44,57,58,59,60,61,62",
                        "plan": "10,19,28,37,46,55,64,3,4,5,6,7,8,12,13,14,15,16,17,66,67,68,69,70,71,75,76,77,78,79,80",
                        "object": "29,30_47,48",
                        "end": "72",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 222,
                        "role": "3,4,5,11,12,14,15,19,20,24,25,28,29,33,34,38,42,46,47,48,49,50,51,52,55,61,64,70",
                        "plan": "",
                        "object": "9,10_12,21_22,23_16,25_57,58_59,68_65,74",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 223,
                        "role": "18,19,20,21,22,27,28,29,30,31,45,46,47,48,49,54,55,56,57,58",
                        "plan": "0,1,2,3,4,5,72,73,74,75,76,77,25,34,43,52,61",
                        "object": "7,16_70,78_41,42",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 224,
                        "role": "13,22,31,40,49,58,67,19,20,21,23,24,25,28,37,34,43,47,48,50,51,55,56,60,61,64,70",
                        "plan": "",
                        "object": "9,10_6,15_16,17_38,39_41,50_57,66",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 225,
                        "role": "0,1,9,3,4,5,13,7,8,17,27,36,37,45,35,43,44,53,63,72,73,67,75,76,77,71,79,80",
                        "plan": "",
                        "object": "2,11_6,15_25,16_18,19_54,55_61,62_65,74_69,78",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 226,
                        "role": "11,12,13,14,15,20,24,28,29,30,37,46,55,39,48,49,50,41,32,33,34,43,52,61,70,69,68,67,66,65,64,58,55,46,37",
                        "plan": "",
                        "object": "4,5_37,38_40,49_41,42_45,54_56,65_75,76_71,80",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 227,
                        "role": "2,3,11,18,19,27,53,61,62,69,78,77",
                        "plan": "0,1,9,10,70,71,79,80,22,23,24,30,31,32,33,38,39,40,41,42,47,48,49,50,56,57,58",
                        "object": "45,46_66,75",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 228,
                        "role": "10,11,12,13,14,15,16,19,28,37,38,39,40,41,42,43,34,25,48,50,55,56,57,59,60,61,64,66,67,68,70",
                        "plan": "",
                        "object": "9,18_6,7_31,32_40,49_50,51_56,65_67,76",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 229,
                        "role": "3,5,11,12,13,14,15,19,28,37,46,55,45,27,61,52,43,34,25,35,53,75,77,65,66,67,68,69",
                        "plan": "",
                        "object": "6,15_18,19_12,21_46,47_33,34_59,68_61,62_65,74",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 230,
                        "role": "10,11,12,19,21,28,29,30,31,32,33,34,23,24,14,37,46,48,56,57,66,67,68,69,70,59,61,50,51,52,51",
                        "plan": "",
                        "object": "0,1_20,29_37,38_39,48_34,35_59,60_75,76_63,72",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 231,
                        "role": "20,21,22,29,38,48,49,50,51,59,60,41",
                        "plan": "23,24,32,33,47,56",
                        "object": "1,10_63,64_69,78_16,17",
                        "end": "8",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 232,
                        "role": "10,11,12,13,14,15,16,25,34,43,52,61,70,69,68,67,66,65,64,55,46,37,28,19,29,30,39,48,49,50,59,23,32,33",
                        "plan": "",
                        "object": "2,3_6,7_8,17_27,36_42,43_57,58_59,60_72,73_22,31",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 233,
                        "role": "39,40,47,48,55,56,63,64,72",
                        "plan": "78,77,79,80,69,70,71,62,61,53",
                        "object": "3,12_22,23_23,24_24,25_25,26",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 234,
                        "role": "20,21,22,23,24,29,38,39,41,42,33,48,50,57,58,59",
                        "plan": "",
                        "object": "4,13_52,53_64,73_31,32",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 235,
                        "role": "39,40,41,48,49,50,57,58,59",
                        "plan": "68,69,70,63,64,72,73,74,75,4,13",
                        "object": "0,9_9,18_8,17_17,26_51,52_30,31_31,32",
                        "end": "22",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 236,
                        "role": "13,22,31,23,24,25,16,34,55,64,65,66",
                        "plan": "3,12,21,30,46,47,48,49",
                        "object": "28,37_41,42_78,79",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 237,
                        "role": "8,17,26,35,34,33,32",
                        "plan": "0,1,2,9,11,10,18,19,20",
                        "object": "7,8_48,49_63,64_64,65_65,66_51,60_60,69_69,78",
                        "end": "80",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 238,
                        "role": "20,21,22,23,24,29,38,47,56,57,58,59,60,51,42,33",
                        "plan": "77,31",
                        "object": "1,10_6,7_45,46_52,61",
                        "end": "40",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 239,
                        "role": "41,42,43,44",
                        "plan": "1,2,3,4,5,6,7,8,12,13,14,15,16,17,23,24,25,26,34,35,53,60,61,62,67,68,69,70,71,74,75,76,77,78,79,80",
                        "object": "36,37",
                        "end": "44",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 240,
                        "role": "14,15,16,23,25,32,33,34,47,48,55,57,65,66,46,64",
                        "plan": "40",
                        "object": "18,19_69,78",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 241,
                        "role": "46,47,48,57,66,65,64,55,58,50,51,52,61,70,69,68",
                        "plan": "39,40,41,42",
                        "object": "9,10_16,17_65,74_60,61",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 242,
                        "role": "47,48,49,50,51,52,61,70,69,68,67,66,65,56",
                        "plan": "38,39,40,41",
                        "object": "4,13_58,59_75,76",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 243,
                        "role": "9,18,27,17,26,35,39,40,41",
                        "plan": "49,0,8",
                        "object": "2,3_5,6_67,68_75,76_66,75_41,50",
                        "end": "58",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 244,
                        "role": "30,31,38,47,56,57,58,59,60,51,39",
                        "plan": "0,1,2,48,49",
                        "object": "5,14_10,19_72,73_79,80",
                        "end": "44",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 245,
                        "role": "39,40,41,48,50,57,58,59",
                        "plan": "79,80,0,1",
                        "object": "27,28_46,47_40,49_33,42",
                        "end": "2",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 246,
                        "role": "3,4,12,13,20,21,28,29,37,38",
                        "plan": "27,36,45,54,63,72,73,50,51,52,59,60,61",
                        "object": "1,10_47,48_71,80",
                        "end": "26",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 247,
                        "role": "13,22,31,40,49,58,67,37,38,39,41,42,43",
                        "plan": "10,11,19,15,16,55,64,70",
                        "object": "5,14_12,21_27,28_46,47_66,75_59,68_52,53_33,34",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 248,
                        "role": "20,21,22,23,32,41,50,59,58,57,56,47,38,29",
                        "plan": "48",
                        "object": "1,10_15,24,16,25_65,66_79,80",
                        "end": "26",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 249,
                        "role": "23,24,33,30,31,39,41,50,49,57,56,47",
                        "plan": "",
                        "object": "1,2_17,26_18,27_62,71_63,72_79,80_74,75_6,7",
                        "end": "6",
                        "color": 1,
                        "type": 1
                    },
                    {
                        "id": 250,
                        "role": "1,10,19,9,11,13,22,31,21,23,15,16,17,7,25,29,38,47,37,39,41,42,43,33,51,57,58,59,49,67,63,64,65,55,73,69,70,71,61,79",
                        "plan": "",
                        "object": "2,11_5,14_25,26_27,28_54,55_52,53_66,75_69,78",
                        "end": "0",
                        "color": 1,
                        "type": 1
                    }
                ],
                "lock": [{
                        "id": 1,
                        "num": 0,
                        "pross": 5,
                        "name": "菜刀"
                    },
                    {
                        "id": 2,
                        "num": 5,
                        "pross": 5,
                        "name": "钢刀"
                    },
                    {
                        "id": 3,
                        "num": 10,
                        "pross": 10,
                        "name": "魔铁小刀"
                    },
                    {
                        "id": 4,
                        "num": 20,
                        "pross": 10,
                        "name": "手里剑"
                    },
                    {
                        "id": 5,
                        "num": 30,
                        "pross": 10,
                        "name": "风魔手里剑"
                    },
                    {
                        "id": 6,
                        "num": 40,
                        "pross": 10,
                        "name": "小李飞刀"
                    },
                    {
                        "id": 7,
                        "num": 50,
                        "pross": 10,
                        "name": "血狱狂刀"
                    },
                    {
                        "id": 8,
                        "num": 60,
                        "pross": 10,
                        "name": "鸣鸿刀"
                    },
                    {
                        "id": 9,
                        "num": 70,
                        "pross": 0,
                        "name": "龙鳞战斧"
                    }
                ],
                "banner": [{
                        "id": 1,
                        "adunitId": "adunit-6878555555cd8d7b",
                        "type": 1,
                        "showType": 3,
                        "isload": true
                    },
                    {
                        "id": 2,
                        "adunitId": "adunit-2083539291c7799a",
                        "type": 1,
                        "showType": 2,
                        "isload": true
                    },
                    {
                        "id": 3,
                        "adunitId": "adunit-5698b78278c38dc8",
                        "type": 1,
                        "showType": 1,
                        "isload": true
                    },
                    {
                        "id": 4,
                        "adunitId": "adunit-6284cc0d5f77b442",
                        "type": 2,
                        "showType": 1,
                        "isload": false
                    },
                    {
                        "id": 5,
                        "adunitId": "adunit-22bc8be6d35cc458",
                        "type": 2,
                        "showType": 2,
                        "isload": false
                    },
                    {
                        "id": 6,
                        "adunitId": "adunit-664a9295c283a3e8",
                        "type": 2,
                        "showType": 3,
                        "isload": false
                    },
                    {
                        "id": 7,
                        "adunitId": "adunit-8925fd81a8cf410e",
                        "type": 2,
                        "showType": 4,
                        "isload": false
                    }
                ],
                "level": [{
                        "res": "Level1",
                        "bullet": 1
                    },
                    {
                        "res": "Level2",
                        "bullet": 1
                    },
                    {
                        "res": "Level3",
                        "bullet": 1
                    },
                    {
                        "res": "Level9",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_9",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_10",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_11",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_12",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_4",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_6",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_7",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_8",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_13",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_14",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_15",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_16",
                        "bullet": 1
                    },
                    {
                        "res": "Level11",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_18",
                        "bullet": 2
                    },
                    {
                        "res": "Level_h_19",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_20",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_21",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_22",
                        "bullet": 1
                    },
                    {
                        "res": "Level27_4",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_24",
                        "bullet": 1
                    },
                    {
                        "res": "Level23_3",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_26",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_27",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_28",
                        "bullet": 1
                    },
                    {
                        "res": "Level15",
                        "bullet": 1
                    },
                    {
                        "res": "Level19",
                        "bullet": 1
                    },
                    {
                        "res": "Level21",
                        "bullet": 1
                    },
                    {
                        "res": "Level22",
                        "bullet": 1
                    },
                    {
                        "res": "Level26_4",
                        "bullet": 1
                    },
                    {
                        "res": "Level26_5",
                        "bullet": 1
                    },
                    {
                        "res": "Level27_3",
                        "bullet": 1
                    },
                    {
                        "res": "Level31_6",
                        "bullet": 1
                    },
                    {
                        "res": "Level33",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_1",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_39",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_40",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_41",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_42",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_43",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_44",
                        "bullet": 1
                    },
                    {
                        "res": "Level32_1",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_46",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_47",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_48",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_49",
                        "bullet": 1
                    },
                    {
                        "res": "Level_h_50",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_3",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_4",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_5",
                        "bullet": 2
                    },
                    {
                        "res": "Level33_6",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_7",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_8",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_9_x",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_10_x",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_11",
                        "bullet": 1
                    },
                    {
                        "res": "Level33_12",
                        "bullet": 1
                    },
                    {
                        "res": "Level27_4",
                        "bullet": 1
                    },
                    {
                        "res": "Level27_5",
                        "bullet": 1
                    },
                    {
                        "res": "Level27_3",
                        "bullet": 1
                    },
                    {
                        "res": "Level28",
                        "bullet": 2
                    },
                    {
                        "res": "Level29",
                        "bullet": 1
                    },
                    {
                        "res": "Level29_1",
                        "bullet": 2
                    },
                    {
                        "res": "Level29_2",
                        "bullet": 1
                    },
                    {
                        "res": "Level30",
                        "bullet": 1
                    },
                    {
                        "res": "Level30_1_x",
                        "bullet": 1
                    },
                    {
                        "res": "Level31",
                        "bullet": 1
                    },
                    {
                        "res": "Level31_1",
                        "bullet": 1
                    },
                    {
                        "res": "Level30_2",
                        "bullet": 1
                    },
                    {
                        "res": "Level31_2",
                        "bullet": 1
                    },
                    {
                        "res": "Level31_3",
                        "bullet": 1
                    },
                    {
                        "res": "Level31_4",
                        "bullet": 1
                    },
                    {
                        "res": "Level31_5",
                        "bullet": 3
                    },
                    {
                        "res": "Level31_6",
                        "bullet": 1
                    },
                    {
                        "res": "Level31_7",
                        "bullet": 1
                    },
                    {
                        "res": "Level31_9",
                        "bullet": 1
                    },
                    {
                        "res": "Level31_8",
                        "bullet": 1
                    },
                    {
                        "res": "Level34",
                        "bullet": 1
                    },
                    {
                        "res": "Level34_1",
                        "bullet": 2
                    },
                    {
                        "res": "Level34_2",
                        "bullet": 1
                    },
                    {
                        "res": "Level34_3",
                        "bullet": 1
                    },
                    {
                        "res": "Level34_4",
                        "bullet": 1
                    },
                    {
                        "res": "Level34_5",
                        "bullet": 1
                    },
                    {
                        "res": "Level34_6",
                        "bullet": 1
                    },
                    {
                        "res": "Level34_7",
                        "bullet": 1
                    },
                    {
                        "res": "Level34_8",
                        "bullet": 1
                    },
                    {
                        "res": "Level34_9",
                        "bullet": 2
                    },
                    {
                        "res": "Level34_10",
                        "bullet": 2
                    },
                    {
                        "res": "Level34_11",
                        "bullet": 2
                    },
                    {
                        "res": "Level34_12",
                        "bullet": 2
                    }
                ],
                "levelGun": [{
                        "id": 1,
                        "gun": 1
                    },
                    {
                        "id": 2,
                        "gun": 5
                    },
                    {
                        "id": 3,
                        "gun": 9
                    },
                    {
                        "id": 4,
                        "gun": 13
                    },
                    {
                        "id": 5,
                        "gun": 17
                    },
                    {
                        "id": 6,
                        "gun": 21
                    },
                    {
                        "id": 7,
                        "gun": 25
                    },
                    {
                        "id": 8,
                        "gun": 29
                    },
                    {
                        "id": 9,
                        "gun": 33
                    },
                    {
                        "id": 10,
                        "gun": 37
                    },
                    {
                        "id": 11,
                        "gun": 41
                    },
                    {
                        "id": 12,
                        "gun": 45
                    },
                    {
                        "id": 13,
                        "gun": 49
                    },
                    {
                        "id": 14,
                        "gun": 53
                    },
                    {
                        "id": 15,
                        "gun": 57
                    },
                    {
                        "id": 16,
                        "gun": 61
                    },
                    {
                        "id": 17,
                        "gun": 65
                    },
                    {
                        "id": 18,
                        "gun": 69
                    },
                    {
                        "id": 19,
                        "gun": 73
                    },
                    {
                        "id": 20,
                        "gun": 77
                    },
                    {
                        "id": 21,
                        "gun": 81
                    },
                    {
                        "id": 22,
                        "gun": 85
                    },
                    {
                        "id": 23,
                        "gun": 89
                    },
                    {
                        "id": 24,
                        "gun": 93
                    }
                ]
            }
        }
        load(arr) {
            Laya.loader.load(arr, Laya.Handler.create(this, this.complete), Laya.Handler.create(this, this.progress, null, false), null, 1, true, null, true);
            this._arrData = arr;
        }
        getCfg(name, index) {
            return this._cfg[name][index];
        }
        getDataByName(name) {
            return this._cfg[name];
        }
        getDataByType(typeName, jsName, typeVal, isOnLy = true) {
            var source = [];
            for (var key in this._cfg[jsName]) {
                if (!this._cfg[jsName][key][typeName] == null) continue;
                if (!isOnLy) {
                    if (this._cfg[jsName][key][typeName] == typeVal) source.push(this._cfg[jsName][key]);
                } else if (this._cfg[jsName][key][typeName] == typeVal) {
                    return this._cfg[jsName][key];
                }
            }
            return source.length > 0 ? source : null;
        }
        getDataByTypedata(typeName, jsName, typeVal) {
            var source = [];
            var cfg = this._cfg[jsName];
            for (var key in cfg) {
                if (cfg[key][typeName] == typeVal) {
                    source.push(cfg[key]);
                }
            }
            return source.length > 0 ? source : null;
        }
        getDateById(jsName_, id_) {
            var data = null;
            if (this._cfg[jsName_][id_]) {
                data = this._cfg[jsName_][id_];
            }
            return data;
        }
        getDateByMouldId(jsName_, mouldId_) {
            var arr = [];
            var data = this._cfg[jsName_];
            for (var key in data) {
                var temp = data[key];
                if (temp.mould_id == mouldId_) {
                    arr.push(temp);
                }
            }
            return arr;
        }
        getDataCount(name) {
            if (this._cfg[name]) {
                var totalCount = 0;
                for (var key in this._cfg[name]) {
                    totalCount++;
                }
                return totalCount;
            } else {
                return 0;
            }
        }
        stringTo2Array(str) {
            var arr = this.stringToArray(str);
            if (!arr) {
                return [];
            }
            for (var i = 0; i < arr.length; i++) {
                var arr2 = this.stringToArray(arr[i]);
                if (arr2) {
                    arr[i] = arr2;
                }
            }
            return arr;
        }
        stringToArray(str) {
            var arr = null;
            var splitArr = ["|", ";"];
            var last = str[str.length - 1];
            if (splitArr.indexOf(last) != -1) {
                arr = str.substring(0, str.length - 1).split(last);
            }
            return arr;
        }
        complete(evt) {
            if (!evt) return;
            let arr = [];
            if (this._arrData == null || this._arrData.length <= 0) return;
            for (let index = 0; index < this._arrData.length; index++) {
                const element = this._arrData[index];
                let zip = new JSZip(Laya.loader.getRes(this._arrData[index].url));
                for (let key in zip.files) {
                    var obj = zip.files[key];
                    if (obj.dir) continue;
                    if (key.indexOf(".json") >= 0) {
                        this.parseJsonToCfg(key, JSON.parse(zip.file(key).asText()));
                    } else {
                        if (key.indexOf(".lm") >= 0 && key.indexOf(".lmat") < 0 || key.indexOf(".lani") >= 0 || key.indexOf(".ltcb") >= 0) {
                            arr[key] = zip.file(key).asArrayBuffer();
                        } else if (key.indexOf(".jpg") >= 0 || key.indexOf(".png") >= 0) {} else {
                            arr[key] = JSON.parse(zip.file(key).asText());
                        }
                    }
                }
                Laya.loader.clearRes(element.url);
            }
            this._arrData = [];
            Laya.Browser.window.jszipArr = arr;
            Laya.Browser.window.getZipArr = this.getZipArr;
        }
        getZipArr(key) {
            var arr = null;
            if (Laya.Browser.window.jszipArr != null && Laya.Browser.window.jszipArr[key]) {
                arr = [];
                arr = arr.concat(Laya.Browser.window.jszipArr[key]);
            }
            return arr ? arr[0] : arr;
        }
        progress(evt) {
            EventCenter.Ins().event(GameEvent.JsonPress, evt);
        }
        parseJsonToCfg(jsonName, jsonData) {
            if (!jsonData) {
                console.warn("cant`t find jsondata by name = [%s]", jsonName);
                return;
            }
            var names = jsonName.split("/");
            if (names.length == 0) return;
            var nameWithSuffix = names[names.length - 1];
            var realNames = nameWithSuffix.split(".");
            if (realNames.length != 2) return;
            var realName = realNames[0];
            var realData = jsonData[realName];
            this._cfg[realNames[0]] = realData ? realData : jsonData;
            if (this._cfg["banner"] && !this.isLoad) {
                this.isLoad = true;
                SdkControl.Ins().preLoadBanner();
            }
        }
    }
    class LoaderUtils extends MainBase {
        constructor() {
            super();
        }
        load(res, complete, progress) {
            var arr = [];
            arr = arr.concat(res[0]).concat(res[1]).concat(res[2]);
            Laya.loader.create(arr, Laya.Handler.create(this, () => {
                this.stepComplete(complete, progress);
            }), progress);
        }
        stepComplete(complete, progress) {
            if (complete) complete.run();
        }
    }
    var SdkType;
    (function(SdkType) {
        SdkType[SdkType["none"] = 0] = "none";
        SdkType[SdkType["WX"] = 1] = "WX";
        SdkType[SdkType["QQ"] = 2] = "QQ";
    })(SdkType || (SdkType = {}));
    class SdkFactory extends MainBase {
        constructor() {
            super(...arguments);
            this.versionUrl = "version.json";
            this.isCdn = false;
            this.isSub = true;
        }
        onInit() {
            if (Laya.Browser.window.qq && Laya.Browser.window.wx) {
                this.sdkType = SdkType.QQ;
            } else if (Laya.Browser.window.wx) {
                this.sdkType = SdkType.WX;
            } else {
                this.sdkType = SdkType.none;
            }
            this.onLoadVersion();
        }
        onShare() {}
        onLoadVersion() {
            if (this.sdkType == SdkType.none) {
                EventCenter.Ins().event(GameEvent.SubPress, 1);
                Laya.ResourceVersion.enable(this.versionUrl, Laya.Handler.create(this, this.onLoadSub));
            } else {
                var url = "" + this.versionUrl;
                if (window["version"]) url = window["version"] + this.versionUrl;
                Laya.ResourceVersion.enable(url, Laya.Handler.create(this, function() {
                    if (this.isCdn && window["cdnUrl"]) Laya.URL.basePath = Laya.URL.rootPath = window["cdnUrl"];
                    this.onLoadSub();
                }.bind(this)));
            }
        }
        onLoadSub() {
            if (window["cdnUrl"]) {
                var url = window["cdnUrl"] + "wx.json?" + Math.random();
                Laya.loader.load([{
                    url: url,
                    type: Laya.Loader.JSON
                }], Laya.Handler.create(this, function(path) {
                    var config = Laya.loader.getRes(path);
                    if (config) {}
                }.bind(this, url)), null, Laya.Loader.JSON);
            }
            switch (this.sdkType) {
                case SdkType.WX:
                    var self = this;

                    function loadWXPack(index) {
                        var arr = ["res3d", "res", "music"];
                        var loadTask = Laya.Browser.window.wx.loadSubpackage({
                            name: arr[index],
                            success: function(res) {
                                if (index < arr.length - 1) {
                                    console.log("分包加载");
                                    loadWXPack(++index);
                                } else {
                                    JsonUtils.Ins().load(ResConfig);
                                    Laya.loader.on(Laya.Event.COMPLETE, self, self.onLoadRes);
                                }
                            },
                            fail: function(res) {}
                        });
                        loadTask.onProgressUpdate(res => {
                            var pross = index * .5 + res.totalBytesWritten / res.totalBytesExpectedToWrite * .5;
                            EventCenter.Ins().event(GameEvent.SubPress, pross);
                        });
                    }
                    loadWXPack(0);
                    break;

                default:
                    JsonUtils.Ins().load(ResConfig);
                    Laya.loader.on(Laya.Event.COMPLETE, this, this.onLoadRes);
                    break;
            }
        }
        onLoadRes() {
            Laya.loader.off(Laya.Event.COMPLETE, this, this.onLoadRes);
            LoaderUtils.Ins().load(ResGame, Laya.Handler.create(this, this.onResEnd), Laya.Handler.create(this, this.onProgress, null, false));
        }
        onProgress(data) {
            EventCenter.Ins().event(GameEvent.ResPress, data);
        }
        onResEnd() {
            this.onEnterHome();
        }
        onEnterHome() {
            MainControl.Ins().onStart();
        }
    }
    class LoadingView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this.curProgress = 0;
            this.jsonProgress = 0;
            this.subPackProgress = 0;
            this.setClass(ui.LoadingUI);
            this.setRes([]);
        }
        open(...param) {
            super.open();
            this.view.height = Laya.stage.height;
            // var path = Laya.Browser.window.wx ? "wxRes/" : "loading/";
            var path = Laya.Browser.window.wx ? "wxRes/" : "wxRes/"; //czh
            this.view.bg.skin = path + "img_bg.jpg";
            this.view.logo.skin = path + "img_logo.png";
            this.view.proBg.skin = path + "img_progress_bg.png";
            this.view.proImg.skin = path + "img_progress.png";
            this.onUpdataProgress();
            EventCenter.Ins().on(GameEvent.SubPress, this, this.onSubPress);
            EventCenter.Ins().on(GameEvent.JsonPress, this, this.onJson);
            EventCenter.Ins().on(GameEvent.ResPress, this, this.onResPress);
            SdkFactory.Ins().onInit();
        }
        close(...param) {
            super.close();
            EventCenter.Ins().off(GameEvent.SubPress, this, this.onSubPress);
            EventCenter.Ins().off(GameEvent.JsonPress, this, this.onJson);
            EventCenter.Ins().off(GameEvent.ResPress, this, this.onResPress);
        }
        onUpdataProgress() {
            var _width = 528;
            var pross = this.curProgress + this.jsonProgress + this.subPackProgress;
            if (pross > 100) {
                pross = 100;
            }
            this.view.proImg.width = pross <= 0 ? 1 / 100 * _width : pross / 100 * _width;
        }
        onSubPress(data) {
            this.subPackProgress = Math.floor(data * 30);
            this.onUpdataProgress();
        }
        onJson(data) {
            this.jsonProgress = Math.floor(data * 10);
            this.onUpdataProgress();
        }
        onResPress(data) {
            this.curProgress = Math.floor(data * 60);
            this.onUpdataProgress();
        }
    }
    class WQAdapter {
        constructor() {
            this.isShowVideo = false;
            this.shareBack = false;
            this.showTip = null;
            this.customAdArr = [];
            if (Laya.Browser.window.wx || Laya.Browser.onQQMiniGame) {
                var si = window["wx"].getSystemInfoSync();
                this.windowH = si.windowHeight;
                this.windowW = si.windowWidth;
                this.platform = si.platform;
                this.device_info = si;
                var sharedCanvas = window["sharedCanvas"];
                if (sharedCanvas) {
                    sharedCanvas.width = Laya.stage.width;
                    sharedCanvas.height = Laya.stage.height;
                }
            }
        }
        init() {
            var self = this;
            Laya.Browser.window.wx.onShow(res => {
                if (res && res.scene) {
                    if (this.shareBack == true && this.showTip != null) {
                        TipsManager.showTips(null, this.showTip);
                        this.shareBack = false;
                        this.showTip = null;
                    }
                    MainMusic.Ins().setBGMVolume(true);
                }
            });
            Laya.Browser.window.wx.onHide(res => {
                if (res && res.scene) {}
                MainMusic.Ins().setBGMVolume(false);
            });
        }
        shareAppMessage(str = null) {
            if (Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame) {
                this.showTip = str;
                this.shareBack = true;
                Laya.Browser.window["wx"].updateShareMenu({
                    withShareTicket: true
                });
                var shareMsg = {
                    title: "搭桥我最溜",
                    imageUrl: "res/main/share_icon.png",
                    query: ""
                };
                Laya.Browser.window["wx"].shareAppMessage(shareMsg);
            }
        }
        preLoadBanner() {
            this._bannerAdArr = [];
            var self = this;
            var data = this.getAdJson();
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var element = data[key];
                    if (element.type == 1 && element.isload && this._bannerAdArr[element.adunitId] == null) {
                        var offsetY = 1;
                        var scale = Laya.Browser.clientHeight * Laya.Browser.pixelRatio / Laya.stage.designHeight;
                        var top = offsetY * Laya.Browser.clientHeight / 1334;
                        var ad = Laya.Browser.window.wx.createBannerAd({
                            adUnitId: element.adunitId,
                            style: {
                                left: 0,
                                top: (Laya.stage.designHeight - offsetY) * scale / Laya.Browser.pixelRatio - Laya.Browser.clientWidth / 300 * 72 - 45,
                                width: Laya.Browser.clientWidth
                            }
                        });
                        ad.onLoad(function(res) {
                            console.log("banner下载", res);
                            if (self._bannerAdArr[this.adUnitId].state == 1) {
                                self._bannerAdArr[this.adUnitId].banner.show();
                            } else if (self._bannerAdArr[this.adUnitId].state == 2) {
                                self._bannerAdArr[this.adUnitId].banner.hide();
                            }
                        }.bind(ad));
                        ad.onError(function(res) {
                            console.log("banner出错", res);
                        });
                        let banner = ad;
                        ad.onResize(function(size) {
                            banner.style.top = Laya.Browser.clientHeight - size.height;
                        });
                        this._bannerAdArr[element.adunitId] = {
                            banner: ad,
                            state: 0
                        };
                    }
                }
            }
        }
        visibleBanner(isShow) {
            if (this._bannerAdArr && this._bannerAdArr[this.adBannerId]) {
                if (isShow) {
                    this._bannerAdArr[this.adBannerId].banner.show();
                } else {
                    this._bannerAdArr[this.adBannerId].banner.hide();
                }
            }
        }
        showBanner(bShow, banner, callBack) {
            var self = this;
            var config = this.getBannerConfig(banner, 1);
            var bannerId = config.adunitId;
            console.log("WQA:>>>>>> showbanner");
            if (bannerId) {
                this.adBannerId = bannerId;
            } else {
                this.adBannerId = "adunit-9429c36ea287d153";
            }
            if (bShow) {
                if (this._bannerAdArr == null) this._bannerAdArr = [];
                if (this._bannerAdArr[this.adBannerId] == null || this._bannerAdArr[this.adBannerId].banner == null) {
                    if (this._bannerAdArr[this.adBannerId] == null) {
                        this._bannerAdArr[this.adBannerId] = {
                            banner: null,
                            state: 1,
                            num: 0
                        };
                    }
                    var scale = Laya.Browser.clientHeight * Laya.Browser.pixelRatio / Laya.stage.designHeight;
                    var offsetY = 1;
                    this._bannerAdArr[this.adBannerId] = {
                        banner: null,
                        state: 1
                    };
                    this._bannerAdArr[this.adBannerId].banner = Laya.Browser.window.wx.createBannerAd({
                        adUnitId: this.adBannerId,
                        style: {
                            left: 0,
                            top: (Laya.stage.designHeight - offsetY) * scale / Laya.Browser.pixelRatio - Laya.Browser.clientWidth / 300 * 72 - 45,
                            width: Laya.Browser.width
                        }
                    });
                    if (this._bannerAdArr[this.adBannerId].state == 1) {
                        this._bannerAdArr[this.adBannerId].banner.show();
                    }
                } else {
                    this._bannerAdArr[this.adBannerId].banner.show();
                    return;
                }
                this._bannerAdArr[this.adBannerId].banner.onLoad(function(res) {
                    console.log("banner下载", JSON.stringify(res));
                    if (self._bannerAdArr[this.adUnitId] && self._bannerAdArr[this.adUnitId].state == 1) {
                        self._bannerAdArr[this.adUnitId].banner.show();
                    } else if (self._bannerAdArr[this.adUnitId] && self._bannerAdArr[this.adUnitId].state == 2) {
                        self._bannerAdArr[this.adUnitId].banner.hide();
                    }
                }.bind(this._bannerAdArr[this.adBannerId].banner));
                this._bannerAdArr[this.adBannerId].banner.onError(function(res) {
                    console.log("banner出错" + JSON.stringify(res));
                });
            } else {
                if (this._bannerAdArr[this.adBannerId].banner) {
                    this._bannerAdArr[this.adBannerId].banner.hide();
                    this._bannerAdArr[this.adBannerId].banner = null;
                }
            }
        }
        getVideoAd(callback, video, myData) {
            Laya.Browser.window.wx.showLoading({
                mask: true
            });
            Laya.timer.once(3e3, null, function() {
                Laya.Browser.window.wx.hideLoading();
            });
            var self = this;
            this.isShowVideo = true;
            var addId = this.getBannerConfig(video, 2).adunitId;
            this.videoObj = Laya.Browser.window.wx.createRewardedVideoAd({
                adUnitId: addId
            });
            this.videoObj.load();
            var id = "" + video;
            this.videoObj.onLoad(function(res) {
                console.log("视频下载", res);
                if (self.isShowVideo) {
                    self.videoObj.show().catch(err => {
                        MainMusic.Ins().setBGMVolume(false);
                        callback(false);
                        self.videoObj.offError();
                        self.videoObj.offClose();
                        self.videoObj.offLoad();
                    });
                }
                self.videoObj.offLoad();
            });
            this.videoObj.onClose(function(status) {
                console.log("视频关闭", status);
                MainMusic.Ins().setBGMVolume(true);
                if (status && status.isEnded || status == undefined) {
                    if (callback != undefined) {
                        callback(status.isEnded, myData);
                    }
                } else {
                    if (callback != undefined && status) {
                        callback(status.isEnded, myData);
                    }
                }
                self.isShowVideo = false;
                self.videoObj.offClose();
                self.videoObj.offError();
            });
            this.videoObj.onError(function(res) {
                console.log("视频出错" + JSON.stringify(res));
                self.videoObj.offError();
                self.videoObj.offClose();
                self.videoObj.offLoad();
                TipsManager.showTips(null, "暂无视频,请稍后再试");
            });
        }
        getAdJson() {
            let adJson = [{
                id: 1,
                adunitId: "adunit-a75e4cfa2a0c47a4",
                type: 1,
                showType: 1,
                isload: true
            }, {
                id: 2,
                adunitId: "adunit-9429c36ea287d153",
                type: 1,
                showType: 2,
                isload: true
            }, {
                id: 3,
                adunitId: "adunit-cdac577c3331299d",
                type: 1,
                showType: 3,
                isload: true
            }, {
                id: 4,
                adunitId: "adunit-350d0f6e3c9a57bc",
                type: 2,
                showType: 1,
                isload: false
            }, {
                id: 5,
                adunitId: "adunit-3e80c7b0d3b87d34",
                type: 2,
                showType: 2,
                isload: false
            }, {
                id: 6,
                adunitId: "adunit-3acd382a9cd48f8b",
                type: 2,
                showType: 3,
                isload: false
            }];
            return adJson;
        }
        LoadBanner(bannerId) {
            var offsetY = 1;
            var scale = Laya.Browser.clientHeight * Laya.Browser.pixelRatio / Laya.stage.designHeight;
            var top = offsetY * Laya.Browser.clientHeight / 1334;
            var ad = Laya.Browser.window.wx.createBannerAd({
                adUnitId: bannerId,
                style: {
                    left: 0,
                    top: (Laya.stage.designHeight - offsetY) * scale / Laya.Browser.pixelRatio - Laya.Browser.clientWidth / 300 * 72,
                    width: Laya.Browser.clientWidth
                }
            });
            this._bannerAdArr[bannerId].banner = ad;
            var self = this;
            ad.onLoad(function(res) {
                console.log("banner下载", res);
                if (self._bannerAdArr[this.adUnitId].state == 1) {
                    self._bannerAdArr[this.adUnitId].banner.show();
                } else if (self._bannerAdArr[this.adUnitId].state == 2) {
                    self._bannerAdArr[this.adUnitId].banner.hide();
                }
            }.bind(ad));
            let banner = ad;
            ad.onResize(function(size) {
                banner.style.top = Laya.Browser.clientHeight - size.height;
            });
            ad.onError(function(res) {
                console.log("banner出错", res);
            });
        }
        getBannerConfig(showType, type) {
            var obj = null;
            var data = this.getAdJson();
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var element = data[key];
                    if (element.type == type && element.showType == showType) {
                        obj = element;
                        break;
                    }
                }
            }
            return obj;
        }
        loadAd(adBannerId) {
            this.LoadBanner(adBannerId);
        }
        getCustomAdJson() {
            let adJson = [{
                id: 1,
                adUnitId: "adunit-9f242de1d4997237",
                size: 1,
                style: "single"
            }, {
                id: 2,
                adUnitId: "adunit-4526fb37b73707da",
                size: 1,
                style: "single"
            }, {
                id: 3,
                adUnitId: "adunit-b877e402b1b2353f",
                size: 2,
                style: "vertical"
            }, {
                id: 4,
                adUnitId: "adunit-20bf08914f68d629",
                size: 2,
                style: "vertical"
            }, {
                id: 5,
                adUnitId: "adunit-03067d0a68047931",
                size: 5,
                style: "horizontal"
            }];
            return adJson;
        }
        createCustomAd(index, left, top) {
            this.CustomAdDestroy();
            var info = this.getCustomAdJson();
            this.customAd = Laya.Browser.window.wx.createCustomAd({
                adUnitId: info[index].adUnitId,
                style: {
                    left: left,
                    top: top,
                    fixed: true
                }
            });
            if (this.customAd) {
                this.customAd.show().catch(err => {
                    console.log("格子广告显示失败", err);
                });
                this.customAd.onError(err => {
                    console.log("格子广告加载失败", err);
                });
                this.customAd.onLoad(() => {
                    console.log("格子广告加载成功");
                });
                this.customAd.show().then(() => {
                    console.log("格子广告显示成功");
                });
                this.customAd.onClose(() => {
                    console.log("格子广告关闭");
                });
            }
            this.customAd.name = info[index].id;
            this.customAdArr.push(this.customAd);
        }
        CustomAdVisible(index, flag) {
            for (let i = 0; i < this.customAdArr.length; i++) {
                if (flag) {
                    if (this.customAdArr[i] && this.customAdArr[i].name == index) {
                        this.customAdArr[i].show();
                    }
                } else {
                    if (this.customAdArr[i] && this.customAdArr[i].name == index) {
                        this.customAdArr[i].hide();
                    }
                }
            }
        }
        CustomAdDestroy() {
            for (let i = 0; i < this.customAdArr.length; i++) {
                if (this.customAdArr[i]) {
                    this.customAdArr[i].destroy();
                }
            }
            this.customAdArr = [];
        }
        createInterstitialAd() {
            let interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                adUnitId: "adunit-ef36b2258ec14d1d"
            });
            interstitialAd.show().catch(err => {
                console.error(err);
            });
            interstitialAd.onLoad(() => {
                console.log("插屏 广告加载成功");
            });
            interstitialAd.onError(err => {
                console.log(err);
            });
            interstitialAd.onClose(res => {
                console.log("插屏 广告关闭");
            });
        }
        navigateToMiniProgram(info) {
            Laya.Browser.window.wx.navigateToMiniProgram({
                appId: info,
                path: "",
                extraData: {
                    foo: "bar"
                },
                envVersion: "develop",
                success(res) {}
            });
        }
    }
    class WX_SdkAdapter {
        constructor() {
            this._videoTime = 0;
            this.wxurl = "wx.json";
        }
        static get ins() {
            if (WX_SdkAdapter._instance == null) {
                WX_SdkAdapter._instance = new WX_SdkAdapter();
                if (window["wx"]) {
                    WX_SdkAdapter._instance.sdk = new WQAdapter();
                }
            }
            return WX_SdkAdapter._instance;
        }
        init() {
            if (this.sdk) this.sdk.init();
        }
        openJson(callback) {
            if (window["cdnUrl"]) {
                var url = window["cdnUrl"] + this.wxurl + "?" + Math.random();
                Laya.loader.load([{
                    url: url,
                    type: Laya.Loader.JSON
                }], Laya.Handler.create(this, callback, [url]), null, Laya.Loader.JSON);
            } else {
                callback(null);
            }
        }
        shareAppMessage(str = null) {
            if (this.sdk) {
                this.sdk.shareAppMessage(str);
            }
        }
        preLoadBanner() {
            if (this.sdk) this.sdk.preLoadBanner();
        }
        visibleBanner(isShow) {
            if (this.sdk) this.sdk.visibleBanner(isShow);
        }
        showBanner(isShow, banner, callBack) {
            if (this.sdk) {
                this.sdk.showBanner(isShow, banner, callBack);
            }
        }
        showVideo(video, callback) {
            /*
                        if (this.sdk) {
                            MainMusic.Ins().setBGMVolume(false);
                            if (this._videoTime > new Date().getTime()) {
                                var time = Math.ceil((this._videoTime - new Date().getTime()) / 1e3);
                                var str = "您看视频广告太频繁了，请等待" + time + "秒后再试";
                                TipsManager.showTips(null, str);
                                MainMusic.Ins().setBGMVolume(true);
                                callback(false);
                                return;
                            }
                            this.getVideoAd(function(isEnd) {
                                console.log("看完了视频的回调");
                                WX_SdkAdapter.ins._videoTime = new Date().getTime() + 1e4;
                                if (callback) {
                                    MainMusic.Ins().setBGMVolume(true);
                                    callback(isEnd);
                                }
                            }, video);
                        } else {
                            TipsManager.showTips(null, "努力加载中，请稍后再试!");
                        }*/


            gameapi.playReward();
            setTimeout(function() {
                pgdk$.showVideoAd$( //全局看视频 czh
                    function(isEnd) {
                        if (isEnd) {
                            if (callback) {
                                callback(isEnd);
                            }
                            pgdk$.showToast$("获得奖励!");
                            console.log("看视频看完czh");
                        } else {
                            //pgdk$.showToast$("未看完视频，无法获得奖励！")
                            console.log("看视频没看完czh");
                        }
                    }.bind(this)
                );
                console.log("Run6000");
            }.bind(this), 4000)
        }
        getVideoAd(callback, video, myData) {
            if (this.sdk) {
                this.sdk.getVideoAd(callback, video, myData);
            }
        }
        createCustomAd(index, left, top) {
            if (this.sdk) {
                this.sdk.createCustomAd(index, left, top);
            }
        }
        CustomAdVisible(index, flag) {
            if (this.sdk) {
                this.sdk.CustomAdVisible(index, flag);
            }
        }
        CustomAdDestroy(flag) {
            if (this.sdk) {
                this.sdk.CustomAdDestroy();
            }
        }
        createInterstitialAd() {
            if (this.sdk) {
                this.sdk.createInterstitialAd();
            }
        }
        navigateToMiniProgram(info) {
            if (this.sdk) {
                this.sdk.navigateToMiniProgram(info);
            }
        }
    }
    class HomeView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this.topoffsetY = 1;
            this.isStopop = false;
            this.setClass(ui.HomeUI);
            this.setRes([{
                url: "res/atlas/res/home.json",
                type: "atlas"
            }]);
        }
        open(...param) {
            super.open();
            this.view.height = Laya.stage.height;
            //var path = Laya.Browser.window.wx ? "wxRes/" : "loading/";
            var path = Laya.Browser.window.wx ? "wxRes/" : "wxRes/"; //czh
            this.view.img_logo.skin = path + "img_logo.png";
            this.view.btnBegin.on(Laya.Event.CLICK, this, this.onBtnBegin);
            this.view.btnShop.on(Laya.Event.CLICK, this, this.onBtnShop);
            this.view.btnShare.on(Laya.Event.CLICK, this, this.onBtnShare);
            this.view.levelLab.text = "Level" + MainDirector.Ins().levelNum + " ";
            this.setGold();
            if (!MainDirector.Ins().musicBgm) {
                MainMusic.Ins().playBgm(MusicConfig.bgm, true);
                MainDirector.Ins().musicBgm = true;
            }
            MainMusic.Ins().playBgm(MusicConfig.bgm, true);
            MainDirector.Ins().musicBgm = true;
            //this.showAd();
            //this.showBottomList();//屏蔽导出 //czh
        }
        showAd() {
            if (Laya.Browser.window.wx) {
                WX_SdkAdapter.ins.createCustomAd(0, 10, Laya.Browser.clientHeight / 2 + 10);
                WX_SdkAdapter.ins.createCustomAd(1, Laya.Browser.clientWidth - 70, Laya.Browser.clientHeight / 2 + 10);
                WX_SdkAdapter.ins.showBanner(true, BannerView.BANNER1);
                WX_SdkAdapter.ins.CustomAdVisible(1, true);
                WX_SdkAdapter.ins.CustomAdVisible(2, true);
            }
        }
        hideAd() {
            if (Laya.Browser.window.wx) {
                WX_SdkAdapter.ins.showBanner(false, BannerView.BANNER1);
                WX_SdkAdapter.ins.CustomAdVisible(1, false);
                WX_SdkAdapter.ins.CustomAdVisible(2, false);
            }
        }
        showBottomList() {
            this.view.list_up.hScrollBarSkin = "";
            this.view.list_up.scrollBar.elasticBackTime = 200;
            this.view.list_up.scrollBar.elasticDistance = 50;
            this.view.list_up.array = this.onGameList();
            this.view.list_up.renderHandler = new Laya.Handler(this, this.updateTopGameItem);
            Laya.timer.frameOnce(1, this, this.tweenToListTop);
        }
        onGameList() {
            var arr = [{
                icon: "res/ad/彩虹糖冲冲车.jpg",
                name: "彩虹糖冲冲车",
                pkgName: "wxc81ded431c3be5a3"
            }, {
                icon: "res/ad/兄弟别砸我.jpg",
                name: "兄弟别砸我",
                pkgName: "wxa2f99fb2fadd8c5e"
            }, {
                icon: "res/ad/脑洞画一笔.jpg",
                name: "脑洞画一笔",
                pkgName: "wx2a5decb88c2b9d7d"
            }, {
                icon: "res/ad/萌版印画.jpg",
                name: "萌版印画",
                pkgName: "wxb73fdc1c22770e2a"
            }, {
                icon: "res/ad/画啥有啥.jpg",
                name: "画啥有啥",
                pkgName: "wx88f547bfe88dbd7d"
            }, {
                icon: "res/ad/疯狂叠叠乐.jpg",
                name: "疯狂叠叠乐",
                pkgName: "wx30ea6042cc4e2d6d"
            }, {
                icon: "res/ad/难住宝宝了.jpg",
                name: "难住宝宝了",
                pkgName: "wx7c7db8ca864099b3"
            }, {
                icon: "res/ad/帮它摆正.jpg",
                name: "帮它摆正",
                pkgName: "wx7e19c58c762fc7c5"
            }, {
                icon: "res/ad/就爱做甜品.jpg",
                name: "就爱做甜品",
                pkgName: "wx12d1656428dac43c"
            }, {
                icon: "res/ad/炮击海盗船.jpg",
                name: "炮击海盗船",
                pkgName: "wxece20ca2a8a0b248"
            }, {
                icon: "res/ad/我要开当铺.jpg",
                name: "我要开当铺",
                pkgName: "wx32cdcad7e6d60a4a"
            }];
            return arr;
        }
        tweenToListTop() {
            if (this.isStopop) return;
            if (this.view.list_up.scrollBar.value >= this.view.list_up.scrollBar.max) {
                this.topoffsetY = -1;
            } else if (this.view.list_up.scrollBar.value <= this.view.list_up.scrollBar.min) {
                this.topoffsetY = 1;
            }
            this.view.list_up.scrollBar.value = this.view.list_up.scrollBar.value + this.topoffsetY;
            Laya.timer.frameLoop(1, this, this.tweenToListTop);
        }
        updateTopGameItem(cell, index) {
            let info = this.view.list_up.array[index];
            let icon = cell.getChildByName("icon");
            console.log("列表皮肤::>>>>>>>>>", info, info.icon);
            icon.skin = info.icon;
            cell.on(Laya.Event.CLICK, this, this.GameEnterClick, [info.pkgName]);
        }
        GameEnterClick(info) {
            WX_SdkAdapter.ins.navigateToMiniProgram(info);
        }
        close(...param) {
            super.close();
            Laya.timer.clearAll(this);
            this.view.btnBegin.off(Laya.Event.CLICK, this, this.onBtnBegin);
            this.view.btnShop.off(Laya.Event.CLICK, this, this.onBtnShop);
            this.view.btnShare.off(Laya.Event.CLICK, this, this.onBtnShare);
            this.hideAd();
        }
        setGold() {
            this.view.txtGold.text = MainDirector.Ins().goldNum + "";
        }
        onBtnBegin() {
            MainMusic.Ins().playSound(MusicConfig.click);
            UIViewManager.Ins().onClose(UIEnum.Home);
            if (MainDirector.Ins().IsShowTry()) {
                UIViewManager.Ins().onOpen(UIEnum.Try);
            } else {
                UIViewManager.Ins().onOpen(UIEnum.Realy);
            }
        }
        onBtnShop() {
            this.hideAd();
            UIViewManager.Ins().onOpen(UIEnum.Shop);
        }
        onBtnShare() {
            WX_SdkAdapter.ins.shareAppMessage();
        }
    }
    class RealyView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this.setClass(ui.RealyUI);
            this.setRes([{
                url: "res/atlas/res/realy.json",
                type: "atlas"
            }]);
        }
        open(...param) {
            super.open();
            this.view.height = Laya.stage.height;
            this.view.shouBox.visible = true;
            this.view.imgRank.visible = false;
            this.view.on(Laya.Event.CLICK, this, this.onGameStart);
            this.view.levelLab.text = "Level " + MainDirector.Ins().levelNum + "";
            this.showAd();
        }
        showAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            WX_SdkAdapter.ins.showBanner(true, BannerView.BANNER3);
        }
        hideAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            WX_SdkAdapter.ins.showBanner(false, BannerView.BANNER3);
        }
        close(...param) {
            super.close();
            Laya.timer.clearAll(this);
            this.view.off(Laya.Event.CLICK, this, this.onGameStart);
            this.hideAd();
        }
        onUpdateRank(rank) {
            if (rank == 1) {
                this.view.imgRank.skin = "res/realy/img_th_1.png";
            } else if (rank == 2) {
                this.view.imgRank.skin = "res/realy/img_th_2.png";
            } else if (rank == 3) {
                this.view.imgRank.skin = "res/realy/img_th_3.png";
            } else {
                this.view.imgRank.skin = "res/realy/img_th_4.png";
            }
        }
        onGameStart() {
            this.view.shouBox.visible = false;
            this.view.imgRank.visible = true;
            MainDirector.Ins().onStartGame();
        }
    }
    class FailView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this.setClass(ui.FailUI);
            this.setRes([{
                url: "res/atlas/res/fail.json",
                type: "atlas"
            }]);
        }
        open(...param) {
            super.open();
            this.initMask();
            this.view.height = Laya.stage.height;
            MainMusic.Ins().playSound(MusicConfig.fail);
            this.view.btnBengin.on(Laya.Event.CLICK, this, this.onBtnBengin);
            this.view.btnVideo.on(Laya.Event.CLICK, this, this.onBtnVideo);
            this.showAd();
        }
        showAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            this.view.btnBengin.visible = false;
            Laya.timer.once(MainDirector.Ins().BtnDelay, this, () => {
                this.view.btnBengin.visible = true;
            });
            this.view.shouzhi.visible = MainDirector.Ins().WuchuIsShow == 1 ? true : false;
            WX_SdkAdapter.ins.showBanner(true, BannerView.BANNER2);
            WX_SdkAdapter.ins.CustomAdVisible(3, true);
            WX_SdkAdapter.ins.CustomAdVisible(4, true);
            WX_SdkAdapter.ins.createInterstitialAd();
        }
        hideAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            WX_SdkAdapter.ins.showBanner(false, BannerView.BANNER2);
            WX_SdkAdapter.ins.CustomAdVisible(3, false);
            WX_SdkAdapter.ins.CustomAdVisible(4, false);
        }
        close(...param) {
            super.close();
            Laya.timer.clearAll(this);
            this.view.btnBengin.off(Laya.Event.CLICK, this, this.onBtnBengin);
            this.view.btnVideo.off(Laya.Event.CLICK, this, this.onBtnVideo);
            this.hideAd();
        }
        onBtnVideo() {
            WX_SdkAdapter.ins.showVideo(2, this.onVideoCallback.bind(this));
        }
        onBtnBengin() {
            MainMusic.Ins().playSound(MusicConfig.click);
            MainDirector.Ins().onLoadLevelMap();
            UIViewManager.Ins().onClose(UIEnum.Fail);
            UIViewManager.Ins().onOpen(UIEnum.Home);
        }
        onVideoCallback(isShow) {
            if (!isShow) {
                TipsManager.showTips(null, "请观看完完整视频，才能获得奖励!");
                return;
            }
            MainDirector.Ins().levelNum++;
            MainDirector.Ins().onLoadLevelMap();
            MainModel.Ins().onSetGameLevel(MainDirector.Ins().levelNum, MainDirector.Ins().goldNum, MainDirector.Ins().houseNum);
            UIViewManager.Ins().onClose(UIEnum.Fail);
            UIViewManager.Ins().onOpen(UIEnum.Home);
        }
    }
    class SuccessView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this._addNum = 0;
            this.setClass(ui.SuccessUI);
            this.setRes([{
                url: "res/atlas/res/success.json",
                type: "atlas"
            }]);
        }
        open(...param) {
            super.open();
            this.initMask();
            this.view.height = Laya.stage.height;
            this._addNum = MainDirector.Ins().mBoardPlank * 5;
            this.view.txtGold.text = this._addNum + "";
            MainMusic.Ins().playSound(MusicConfig.success);
            this.view.btnNext.on(Laya.Event.CLICK, this, this.onBtnNext);
            this.view.btnVideo.on(Laya.Event.CLICK, this, this.onBtnVideo);
            this.showAd();
        }
        showAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            WX_SdkAdapter.ins.showBanner(true, BannerView.BANNER1);
            this.view.shouzhi.visible = MainDirector.Ins().WuchuIsShow == 1 ? true : false;
            WX_SdkAdapter.ins.CustomAdVisible(3, true);
            WX_SdkAdapter.ins.CustomAdVisible(4, true);
            this.view.btnNext.visible = false;
            Laya.timer.once(MainDirector.Ins().BtnDelay, this, () => {
                this.view.btnNext.visible = true;
            });
        }
        hideAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            WX_SdkAdapter.ins.showBanner(false, BannerView.BANNER1);
            WX_SdkAdapter.ins.CustomAdVisible(3, false);
            WX_SdkAdapter.ins.CustomAdVisible(4, false);
            WX_SdkAdapter.ins.createInterstitialAd();
        }
        close(...param) {
            super.close();
            Laya.timer.clearAll(this);
            this.view.btnNext.off(Laya.Event.CLICK, this, this.onBtnNext);
            this.view.btnVideo.off(Laya.Event.CLICK, this, this.onBtnVideo);
            this.hideAd();
        }
        onBtnVideo() {
            WX_SdkAdapter.ins.showVideo(3, this.onVideoCallback.bind(this));
        }
        onBtnNext() {
            MainMusic.Ins().playSound(MusicConfig.click);
            MainDirector.Ins().levelNum++;
            MainDirector.Ins().onLoadLevelMap();
            MainDirector.Ins().goldNum += this._addNum;
            MainModel.Ins().onSetGameLevel(MainDirector.Ins().levelNum, MainDirector.Ins().goldNum, MainDirector.Ins().houseNum);
            UIViewManager.Ins().onClose(UIEnum.Sucess);
            if (MainDirector.Ins().levelNum <= 70) {
                UIViewManager.Ins().onOpen(UIEnum.Lock);
            } else {
                UIViewManager.Ins().onOpen(UIEnum.Home);
            }
        }
        onVideoCallback(isShow) {
            if (!isShow) {
                TipsManager.showTips(null, "请观看完完整视频，才能获得奖励!");
            }
            MainDirector.Ins().levelNum++;
            MainDirector.Ins().onLoadLevelMap();
            MainDirector.Ins().goldNum += this._addNum * 3;
            var gold = this._addNum * 3;
            this.view.txtGold.text = gold + "";
            MainModel.Ins().onSetGameLevel(MainDirector.Ins().levelNum, MainDirector.Ins().goldNum, MainDirector.Ins().houseNum);
            TipsManager.showTips(null, "Get " + gold + " Coins!");
            UIViewManager.Ins().onClose(UIEnum.Sucess);
            UIViewManager.Ins().onOpen(UIEnum.Home);
        }
    }
    class BuildView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this.endTime = 0;
            this.isBuild = false;
            this.setClass(ui.BuildUI);
            this.setRes([{
                url: "res/atlas/res/build.json",
                type: "atlas"
            }]);
        }
        open(...param) {
            super.open();
            this.view.height = Laya.stage.height;
            this.view.btnBuild.visible = true;
            this.view.had.visible = true;
            this.view.ani1.play();
            this.view.ani1.loop = true;
            this.view.btnBuild.on(Laya.Event.CLICK, this, this.onBtnBuild);
            this.showAd();
        }
        showAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            WX_SdkAdapter.ins.showBanner(true, BannerView.BANNER2);
        }
        hideAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            WX_SdkAdapter.ins.showBanner(false, BannerView.BANNER2);
        }
        close(...param) {
            super.close();
            this.isBuild = false;
            Laya.timer.clearAll(this);
            this.view.btnBuild.off(Laya.Event.CLICK, this, this.onBtnBuild);
            this.hideAd();
        }
        onBtnBuild() {
            if (this.isBuild) {
                TipsManager.showTips(null, "正在建造中");
                return;
            }
            MainMusic.Ins().playSound(MusicConfig.house);
            MainDirector.Ins().cmpRunPath.cmpEnd.onPlayeSmokeAni(true);
            this.isBuild = true;
            this.view.btnBuild.visible = false;
            this.view.had.visible = false;
            var plank = MainDirector.Ins().cmpRunPath.cmpRole.mCurBoardPlank;
            var speedTime = 200;
            var plankTime = plank * 200;
            var time = 0;
            if (plankTime < 4e3) {
                time = 4e3;
                speedTime = Math.floor(4e3 / (plank - 1));
            } else {
                time = plankTime;
                speedTime = 200;
            }
            this.endTime = Date.now() + time;
            this.view.ani1.loop = false;
            Laya.timer.loop(speedTime, this, this.onFrameBuild);
        }
        onFrameBuild() {
            var nowTime = Date.now();
            if (this.endTime - nowTime <= 0) {
                Laya.timer.clear(this, this.onFrameBuild);
                this.onceBuild();
            } else {
                MainDirector.Ins().cmpRunPath.cmpRole.onClearOneBoardStaticList();
            }
        }
        onceBuild() {
            Laya.timer.clear(this, this.onceBuild);
            MainDirector.Ins().cmpRunPath.cmpEnd.onPlayCaidaiAni();
            MainDirector.Ins().houseNum++;
            MainModel.Ins().onSetGameLevel(MainDirector.Ins().levelNum, MainDirector.Ins().goldNum, MainDirector.Ins().houseNum);
            MainDirector.Ins().cmpRunPath.cmpEnd.onHouseActive();
            MainDirector.Ins().cmpRunPath.cmpEnd.onPlayeSmokeAni(false);
            MainDirector.Ins().cmpRunPath.cmpRole.onClearAllBoardStaticList();
            this.isBuild = false;
            UIViewManager.Ins().onClose(UIEnum.Build);
            UIViewManager.Ins().onOpen(UIEnum.Sucess);
        }
    }
    class ShopView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this.type = 0;
            this.isAni = false;
            this.Anitime = 50;
            this.scene = null;
            this.role3D = null;
            this.roleAni = null;
            this.headSp3D = null;
            this.armsSp3D = null;
            this.setClass(ui.ShopViewUI);
            this.setRes([{
                url: "res/atlas/res/shop.json",
                type: "atlas"
            }, {
                url: "res/shop/bjj1.png",
                type: "image"
            }, {
                url: "res/shop/dii.png",
                type: "image"
            }]);
        }
        open(...param) {
            super.open();
            this.initMask();
            this.view.width = Laya.stage.width;
            this.view.height = Laya.stage.height;
            this.isAni = false;
            this.type = 0;
            this.view.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose);
            this.view.btnRand.on(Laya.Event.CLICK, this, this.onBtnRand);
            this.view.btnVideo.on(Laya.Event.CLICK, this, this.onBtnVideo);
            this.view.btnTab1.on(Laya.Event.CLICK, this, this.onBtnTab1);
            this.view.btnTab2.on(Laya.Event.CLICK, this, this.onBtnTab2);
            this.roleId = MainDirector.Ins().roleId;
            this.view.txtGold.text = MainDirector.Ins().goldNum + "";
            this.view.txtRand.text = 1e3 + 500 * MainDirector.Ins().roleList.length + "";
            this.view.txtVideo.text = "2000";
            this.view.list.vScrollBarSkin = "";
            this.view.list.renderHandler = new Laya.Handler(this, this.gameHandler);
            this.setBtnState();
            this.showAd();
        }
        close(...param) {
            super.close();
            if (this.scene) {
                this.scene.destroy();
            }
            if (this.role3D) {
                this.role3D.destroy();
            }
            if (this.headSp3D) {
                this.headSp3D.destroy();
            }
            if (this.armsSp3D) {
                this.armsSp3D.destroy();
            }
            this.scene = null;
            this.role3D = null;
            this.headSp3D = null;
            this.armsSp3D = null;
            Laya.timer.clearAll(this);
            this.view.btnClose.off(Laya.Event.CLICK, this, this.onBtnClose);
            this.view.btnRand.off(Laya.Event.CLICK, this, this.onBtnRand);
            this.view.btnVideo.off(Laya.Event.CLICK, this, this.onBtnVideo);
            this.view.btnTab1.off(Laya.Event.CLICK, this, this.onBtnTab1);
            this.view.btnTab2.off(Laya.Event.CLICK, this, this.onBtnTab2);
            this.hideAd();
        }
        showAd() {
            if (Laya.Browser.window.wx) {
                WX_SdkAdapter.ins.showBanner(true, BannerView.BANNER3);
                WX_SdkAdapter.ins.CustomAdVisible(1, false);
                WX_SdkAdapter.ins.CustomAdVisible(2, false);
            }
        }
        hideAd() {
            if (Laya.Browser.window.wx) {
                WX_SdkAdapter.ins.showBanner(true, BannerView.BANNER2);
                WX_SdkAdapter.ins.CustomAdVisible(1, true);
                WX_SdkAdapter.ins.CustomAdVisible(2, true);
            }
        }
        setBtnState() {
            if (this.type == 1) {
                this.view.btnTab1.skin = "res/shop/dianji.png";
                this.view.btnTab2.skin = "res/shop/weidianji.png";
                this.view.btnRand.visible = false;
                this.view.btnVideo.visible = false;
                this.view.txtDesc.visible = true;
                this.view.txtDesc.text = "Pass Levels Unlock";
            } else {
                this.view.btnTab1.skin = "res/shop/weidianji.png";
                this.view.btnTab2.skin = "res/shop/dianji.png";
                this.view.btnRand.visible = MainDirector.Ins().roleList.length < 9;
                this.view.btnVideo.visible = MainDirector.Ins().roleList.length < 9;
                this.view.txtDesc.visible = false;
            }
            this.setListDate();
        }
        setListDate() {
            var arr = [];
            for (let i = 1; i < 10; i++) {
                arr.push({
                    id: i,
                    lock: false
                });
            }
            if (this.type == 1) {
                arr.forEach(element => {
                    if (MainDirector.Ins().armsList.indexOf(element.id) != -1) {
                        element.lock = true;
                    }
                });
            } else {
                arr.forEach(element => {
                    if (MainDirector.Ins().roleList.indexOf(element.id) != -1) {
                        element.lock = true;
                    }
                });
            }
            this.showArr = arr;
            this.view.list.array = this.showArr;
            this.view.list.refresh();
        }
        loadModel(cell) {
            this.view.modelImg.visible = false;
            if (!this.scene) {
                this.scene = new Laya.Scene3D();
                this.view.unLockSpri.addChild(this.scene);
                this.scene.ambientColor = new Laya.Vector3(.7426471, .824781, 1);
                var camera = new Laya.Camera(0, .3, 1e3);
                this.scene.addChild(camera);
                camera.clearFlag = Laya.CameraClearFlags.DepthOnly;
                camera.transform.translate(new Laya.Vector3(0, -1, 5.6));
                let directionLight = new Laya.DirectionLight();
                this.scene.addChild(directionLight);
                directionLight.color = new Laya.Vector3(1, 1, 1);
                directionLight.intensity = .7;
                directionLight.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
                directionLight.transform.position = new Laya.Vector3(0, 20, 0);
            }
            if (!this.role3D) {
                this.role3D = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("man_skin"));
                this.role3D.active = true;
                this.role3D.transform.position = new Laya.Vector3(0, .2, 0);
                this.role3D.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                this.role3D.transform.localScale = new Laya.Vector3(3, 3, 3);
                this.roleAni = this.role3D.getComponent(Laya.Animator);
                Laya.timer.once(800, this, this.oncePlayAni);
                this.scene.addChild(this.role3D);
            }
            var headID = 1;
            var armsID = 1;
            if (this.type == 1) {
                headID = MainDirector.Ins().roleId;
                armsID = cell.dataSource.id;
            } else {
                headID = cell.dataSource.id;
                armsID = MainDirector.Ins().armsId;
            }
            this.headSp3D = CommonUtils.onFindModel(this.role3D, "Bip001 Head");
            if (this.headSp3D) {
                this.headSp3D.destroyChildren();
            }
            var headSp = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("hat_" + headID));
            headSp.active = true;
            headSp.transform.localPosition = new Laya.Vector3(0, 0, 0);
            headSp.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            this.headSp3D.addChild(headSp);
            this.armsSp3D = CommonUtils.onFindModel(this.role3D, "wuqi");
            if (this.armsSp3D) {
                this.armsSp3D.destroyChildren();
            }
            var armsSp = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("s_fuzi_" + armsID));
            armsSp.active = true;
            armsSp.transform.localPosition = new Laya.Vector3(0, 0, 0);
            armsSp.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            this.armsSp3D.addChild(armsSp);
        }
        oncePlayAni() {
            if (this.roleAni) {
                this.roleAni.play("man_daij", 0, 0);
            }
        }
        gameHandler(cell, index) {
            cell.off(Laya.Event.CLICK, this, this.onClick);
            cell.selectImg.visible = false;
            if (cell.dataSource.lock) {
                cell.boxLock.visible = false;
                if (this.type == 1) {
                    if (MainDirector.Ins().armsId == cell.dataSource.id) {
                        cell.bgImg.skin = "res/shop/xuanzhong.png";
                        this.onClick(cell);
                    } else {
                        cell.bgImg.skin = "res/shop/yijiesuo.png";
                    }
                    cell.iconImg.skin = "res/shop/skin1_" + cell.dataSource.id + ".png";
                } else {
                    if (MainDirector.Ins().roleId == cell.dataSource.id) {
                        cell.bgImg.skin = "res/shop/xuanzhong.png";
                        this.onClick(cell);
                    } else {
                        cell.bgImg.skin = "res/shop/yijiesuo.png";
                    }
                    cell.iconImg.skin = "res/shop/skin_" + cell.dataSource.id + ".png";
                }
            } else {
                if (this.type == 1) {
                    cell.bgImg.skin = "res/shop/xuanzhong.png";
                    cell.iconImg.skin = "res/shop/skin1_" + cell.dataSource.id + ".png";
                    cell.boxLock.visible = true;
                } else {
                    cell.bgImg.skin = "res/shop/weijiesuo.png";
                    cell.iconImg.skin = "";
                    cell.boxLock.visible = false;
                }
            }
            cell.on(Laya.Event.CLICK, this, this.onClick, [cell]);
        }
        onClick(cell) {
            if (this.isAni) return;
            var data = cell.dataSource;
            if (data.lock) {
                this.roleId = cell.dataSource.id;
                if (this.type == 1) {
                    this.view.txtDesc.text = "Pass Levels Unlock";
                } else {
                    this.view.txtDesc.visible = false;
                }
                if (this.role3D) {
                    this.scene.removeChild(this.role3D);
                    this.role3D.destroy();
                    this.role3D = null;
                }
                this.loadModel(cell);
            } else {
                if (this.scene) {
                    this.scene.destroy();
                    this.role3D.destroy();
                    this.scene = null;
                    this.role3D = null;
                }
                this.view.modelImg.visible = true;
                if (this.type == 1) {
                    var level = MainModel.Ins().onGetLockConfigById(data.id);
                    this.view.txtDesc.text = "Pass " + level.num + " Level Get";
                }
            }
            for (let index = 0; index < cell.parent.numChildren; index++) {
                const element = cell.parent.getChildAt(index);
                if (element.visible && element.dataSource) {
                    if (element.dataSource.lock) {
                        element.boxLock.visible = false;
                        element.bgImg.skin = "res/shop/yijiesuo.png";
                        if (element.dataSource.id == data.id) {
                            element.selectImg.visible = true;
                        } else {
                            element.selectImg.visible = false;
                        }
                    } else {
                        element.selectImg.visible = element.dataSource.id == data.id;
                        if (this.type == 1) {
                            element.boxLock.visible = true;
                            element.bgImg.skin = "res/shop/xuanzhong.png";
                            element.iconImg.skin = "res/shop/skin1_" + element.dataSource.id + ".png";
                        } else {
                            element.bgImg.skin = "res/shop/weijiesuo.png";
                        }
                    }
                }
            }
        }
        onBtnRand() {
            if (this.isAni) {
                TipsManager.showTips(null, "Please wait...");
                return;
            }
            if (MainDirector.Ins().goldNum < 1e3 + 500 * MainDirector.Ins().roleList.length) {
                TipsManager.showTips(null, "Need Coins");
                return;
            }
            var arr = [];
            for (let i = 2; i < 10; i++) {
                if (MainDirector.Ins().roleList.indexOf(i) == -1) {
                    arr.push(i);
                }
            }
            if (arr.length > 1) {
                var arr1 = [];
                for (let j = 0; j < this.view.list.cells.length; j++) {
                    const element = this.view.list.cells[j];
                    if (element.visible && element.dataSource) {
                        if (!element.dataSource.lock) {
                            arr1.push(element);
                        } else {
                            element.selectImg.visible = false;
                        }
                    }
                }
                arr1.sort(() => {
                    return Math.random() - .5;
                });
                this.showAniId = 0;
                this.aniType = 0;
                this.Anitime = 200;
                this.isAni = true;
                this.showLockAni(arr1);
            } else {
                var arr2 = [];
                for (let index = 0; index < this.view.list.cells.length; index++) {
                    const element = this.view.list.cells[index];
                    if (element.visible && element.dataSource) {
                        if (!element.dataSource.lock) {
                            arr2.push(element);
                        } else {
                            element.selectImg.visible = false;
                        }
                    }
                }
                this.lockAni(arr2[0]);
            }
        }
        lockAni(cell) {
            this.isAni = false;
            var id = cell.dataSource.id;
            MainDirector.Ins().roleId = id;
            MainDirector.Ins().roleList.push(id);
            MainModel.Ins().onSetGameRole();
            MainDirector.Ins().goldNum -= 1e3 + 500 * MainDirector.Ins().roleList.length;
            MainModel.Ins().onSetGameLevel(MainDirector.Ins().levelNum, MainDirector.Ins().goldNum, MainDirector.Ins().houseNum);
            this.setGold();
            this.roleId = id;
            this.setListDate();
            this.view.txtRand.text = 1e3 + 500 * MainDirector.Ins().roleList.length + "";
            this.view.txtVideo.text = "2000";
            this.view.btnRand.visible = MainDirector.Ins().roleList.length < 9;
            this.view.btnVideo.visible = MainDirector.Ins().roleList.length < 9;
        }
        showLockAni(arr) {
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                if (index == this.showAniId) {
                    element.selectImg.visible = true;
                } else {
                    element.selectImg.visible = false;
                }
            }
            var cell = arr[this.showAniId];
            this.showAniId++;
            if (this.showAniId >= arr.length) {
                this.showAniId = 0;
            }
            if (this.aniType == 0) {
                if (this.Anitime >= 70) {
                    this.Anitime -= 10;
                } else if (this.Anitime < 70 && this.Anitime >= 40) {
                    this.Anitime -= 2;
                } else {
                    this.aniType = 1;
                    this.Anitime += 2;
                }
                Laya.timer.once(this.Anitime, this, this.showLockAni.bind(this, arr));
            } else if (this.aniType == 1) {
                if (this.Anitime >= 40 && this.Anitime < 70) {
                    this.Anitime += 2;
                } else if (this.Anitime >= 70 && this.Anitime < 300) {
                    this.Anitime += 20;
                } else {
                    this.aniType = 2;
                }
                Laya.timer.once(this.Anitime, this, this.showLockAni.bind(this, arr));
            } else {
                Laya.timer.once(100, this, function() {
                    this.lockAni(cell);
                }.bind(this, cell));
            }
        }
        onBtnVideo() {
            if (this.isAni) {
                TipsManager.showTips(null, "Please wait...");
                return;
            }
            WX_SdkAdapter.ins.showVideo(VideoView.VIDEO1, this.videoSucess.bind(this));
        }
        onBtnTab1() {
            if (this.isAni) {
                TipsManager.showTips(null, "Please wait...");
                return;
            }
            this.type = 0;
            this.setBtnState();
        }
        onBtnTab2() {
            if (this.isAni) {
                TipsManager.showTips(null, "Please wait...");
                return;
            }
            this.type = 1;
            this.setBtnState();
        }
        videoSucess(isEnd) {
            if (this.isAni) {
                TipsManager.showTips(null, "Please wait...");
                return;
            }
            if (isEnd) {
                MainDirector.Ins().goldNum += 2e3;
                this.setGold();
                MainModel.Ins().onSetGameLevel(MainDirector.Ins().levelNum, MainDirector.Ins().goldNum, MainDirector.Ins().houseNum);
            }
        }
        setGold() {
            this.view.txtGold.text = MainDirector.Ins().goldNum + "";
            var home = UIViewManager.Ins().onGetView(UIEnum.Home);
            if (home && home.view) {
                home.setGold();
            }
        }
        onBtnClose() {
            UIViewManager.Ins().onClose(UIEnum.Shop);
            if (this.roleId > 0 && MainDirector.Ins().showId != this.roleId) {
                MainDirector.Ins().cmpRunPath.cmpRole.onSkinHead(this.roleId);
            }
        }
    }
    class TryView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this.roleId = 1;
            this.scene = null;
            this.role3D = null;
            this.roleAni = null;
            this.headSp3D = null;
            this.armsSp3D = null;
            this.setClass(ui.TryUI);
            this.setRes([{
                url: "res/atlas/res/try.json",
                type: "atlas"
            }]);
        }
        open(...param) {
            super.open();
            this.initMask();
            this.view.height = Laya.stage.height;
            this.view.btnVideo.on(Laya.Event.CLICK, this, this.onBtnVideo);
            this.view.btnNext.on(Laya.Event.CLICK, this, this.onBtnNext);
            var arr = [];
            for (let index = 1; index < 10; index++) {
                if (MainDirector.Ins().roleList.indexOf(index) == -1 && MainDirector.Ins().showId != index) {
                    arr.push(index);
                }
            }
            this.roleId = arr[CommonUtils.onGetRandomNum(0, arr.length - 1)];
            this.loadModel();
            this.showAd();
        }
        showAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            this.view.btnNext.visible = false;
            Laya.timer.once(MainDirector.Ins().BtnDelay, this, () => {
                this.view.btnNext.visible = true;
            });
            this.view.shouzhi.visible = MainDirector.Ins().WuchuIsShow == 1 ? true : false;
            WX_SdkAdapter.ins.createCustomAd(2, 10, Laya.Browser.clientHeight / 2 - 30);
            WX_SdkAdapter.ins.createCustomAd(3, Laya.Browser.clientWidth - 70, Laya.Browser.clientHeight / 2 - 30);
            WX_SdkAdapter.ins.showBanner(true, BannerView.BANNER2);
            WX_SdkAdapter.ins.CustomAdVisible(3, true);
            WX_SdkAdapter.ins.CustomAdVisible(4, true);
            WX_SdkAdapter.ins.createInterstitialAd();
        }
        hideAd() {
            WX_SdkAdapter.ins.showBanner(false, BannerView.BANNER2);
            WX_SdkAdapter.ins.CustomAdVisible(3, false);
            WX_SdkAdapter.ins.CustomAdVisible(4, false);
        }
        close(...param) {
            super.close();
            if (this.scene) {
                this.scene.destroy();
            }
            if (this.role3D) {
                this.role3D.destroy();
            }
            this.scene = null;
            this.role3D = null;
            Laya.timer.clearAll(this);
            this.view.btnVideo.off(Laya.Event.CLICK, this, this.onBtnVideo);
            this.view.btnNext.off(Laya.Event.CLICK, this, this.onBtnNext);
            this.hideAd();
        }
        loadModel() {
            if (!this.scene) {
                this.scene = new Laya.Scene3D();
                this.view.imgIcon.addChild(this.scene);
                this.scene.ambientColor = new Laya.Vector3(.7426471, .824781, 1);
                var camera = new Laya.Camera(0, .3, 1e3);
                this.scene.addChild(camera);
                camera.clearFlag = Laya.CameraClearFlags.DepthOnly;
                camera.transform.translate(new Laya.Vector3(0, -1, 5.6));
                let directionLight = new Laya.DirectionLight();
                this.scene.addChild(directionLight);
                directionLight.color = new Laya.Vector3(1, 1, 1);
                directionLight.intensity = .7;
                directionLight.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
                directionLight.transform.position = new Laya.Vector3(0, 20, 0);
            }
            if (!this.role3D) {
                this.role3D = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("man_skin"));
                this.role3D.active = true;
                this.role3D.transform.position = new Laya.Vector3(0, -1, 0);
                this.role3D.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                this.role3D.transform.localScale = new Laya.Vector3(3, 3, 3);
                this.roleAni = this.role3D.getComponent(Laya.Animator);
                Laya.timer.once(800, this, this.oncePlayAni);
                this.scene.addChild(this.role3D);
            }
            this.headSp3D = CommonUtils.onFindModel(this.role3D, "Bip001 Head");
            if (this.headSp3D) {
                this.headSp3D.destroyChildren();
            }
            var headSp = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("hat_" + this.roleId));
            headSp.active = true;
            headSp.transform.localPosition = new Laya.Vector3(0, 0, 0);
            headSp.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            this.headSp3D.addChild(headSp);
            this.armsSp3D = CommonUtils.onFindModel(this.role3D, "wuqi");
            if (this.armsSp3D) {
                this.armsSp3D.destroyChildren();
            }
            var armsSp = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("s_fuzi_" + MainDirector.Ins().armsId));
            armsSp.active = true;
            armsSp.transform.localPosition = new Laya.Vector3(0, 0, 0);
            armsSp.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            this.armsSp3D.addChild(armsSp);
        }
        oncePlayAni() {
            if (this.roleAni) {
                this.roleAni.play("man_daij", 0, 0);
            }
        }
        onBtnVideo() {
            WX_SdkAdapter.ins.showVideo(2, this.videoSucess.bind(this));
        }
        videoSucess(isEnd) {
            if (isEnd) {
                if (this.scene) {
                    this.scene.removeSelf();
                }
                MainDirector.Ins().cmpRunPath.cmpRole.onSkinHead(this.roleId);
                UIViewManager.Ins().onClose(UIEnum.Try);
                UIViewManager.Ins().onOpen(UIEnum.Realy);
            }
        }
        onBtnNext() {
            if (this.scene) {
                this.scene.removeSelf();
            }
            MainMusic.Ins().playSound(MusicConfig.click);
            UIViewManager.Ins().onClose(UIEnum.Try);
            UIViewManager.Ins().onOpen(UIEnum.Realy);
        }
    }
    class LockView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this.armsId = 0;
            this.isLock = true;
            this.maxWidth = 610;
            this.scene = null;
            this.role3D = null;
            this.skpRole = null;
            this.setClass(ui.LockUI);
            this.setRes([{
                url: "res/atlas/res/lock.json",
                type: "atlas"
            }]);
        }
        open(...param) {
            super.open();
            this.initMask();
            this.view.height = Laya.stage.height;
            this.view.btnShare.on(Laya.Event.CLICK, this, this.onBtnShare);
            this.view.btnNext.on(Laya.Event.CLICK, this, this.onBtnNext);
            var config = MainModel.Ins().onGetLockConfigbyLevel(MainDirector.Ins().levelNum);
            if (config.id >= MainDirector.Ins().armsList.length) {
                this.armsId = config.id;
            }
            var config1 = MainModel.Ins().onGetLockConfigbyLevel(MainDirector.Ins().levelNum - 1);
            var pross = Math.floor((MainDirector.Ins().levelNum - config.num) / config.pross * 100);
            var pross1 = Math.floor((MainDirector.Ins().levelNum - config1.num - 1) / config1.pross * 100);
            pross = pross == 0 ? 100 : pross;
            this.isLock = pross >= 100;
            this.prossWidth = this.maxWidth * pross1 / 100;
            this.view.imgPro.width = this.prossWidth;
            var nextWidh = this.maxWidth * pross / 100;
            if (MainDirector.Ins().levelNum >= 70) {
                this.view.imgPro.width = this.maxWidth;
                this.view.tPer.text = "100%";
                this.view.levelLab.visible = false;
            } else {
                this.showPross(nextWidh);
                this.view.levelLab.visible = true;
                this.armsId = this.isLock ? config.id : config.id + 1;
                var config2 = config2 = MainModel.Ins().onGetLockConfigById(this.armsId);
                this.view.levelLab.text = "Finish " + config2.num + " Level Unlock";
            }
            this.loadModel();
            this.showAd();
        }
        showAd() {
            if (!Laya.Browser.window.wx) {
                return;
            }
            WX_SdkAdapter.ins.showBanner(true, BannerView.BANNER3);
            this.view.btnNext.visible = false;
            Laya.timer.once(MainDirector.Ins().BtnDelay, this, () => {
                this.view.btnNext.visible = true;
            });
            WX_SdkAdapter.ins.CustomAdVisible(1, true);
            WX_SdkAdapter.ins.CustomAdVisible(2, true);
        }
        hideAd() {
            WX_SdkAdapter.ins.CustomAdVisible(1, false);
            WX_SdkAdapter.ins.CustomAdVisible(2, false);
        }
        close(...param) {
            super.close();
            if (this.scene) {
                this.scene.destroy();
            }
            if (this.role3D) {
                this.role3D.destroy();
            }
            if (this.skpRole) {
                this.skpRole.destroy();
            }
            this.scene = null;
            this.role3D = null;
            this.skpRole = null;
            Laya.timer.clearAll(this);
            this.view.btnShare.off(Laya.Event.CLICK, this, this.onBtnShare);
            this.view.btnNext.off(Laya.Event.CLICK, this, this.onBtnNext);
            this.hideAd();
        }
        loadModel() {
            if (!this.scene) {
                this.scene = new Laya.Scene3D();
                this.view.imgIcon.addChild(this.scene);
                this.scene.ambientColor = new Laya.Vector3(.7426471, .824781, 1);
                var camera = new Laya.Camera(0, .3, 1e3);
                this.scene.addChild(camera);
                camera.clearFlag = Laya.CameraClearFlags.DepthOnly;
                camera.transform.translate(new Laya.Vector3(0, -1, 5.6));
                let directionLight = new Laya.DirectionLight();
                this.scene.addChild(directionLight);
                directionLight.color = new Laya.Vector3(1, 1, 1);
                directionLight.intensity = .7;
                directionLight.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
                directionLight.transform.position = new Laya.Vector3(0, 20, 0);
            }
            this.role3D = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("s_fuzi_" + this.armsId));
            this.role3D.transform.position = new Laya.Vector3(0, -.5, 0);
            this.role3D.transform.rotationEuler = new Laya.Vector3(0, 0, 90);
            this.role3D.transform.localScale = new Laya.Vector3(6, 6, 6);
            this.role3D.active = true;
            if (this.isLock) {
                this.skpRole = Laya.Sprite3D.instantiate(MainDirector.Ins().getResModel("jian"));
                this.skpRole.active = true;
                this.skpRole.transform.position = new Laya.Vector3(0, -.5, 0);
                this.skpRole.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                this.skpRole.transform.localScale = new Laya.Vector3(6, 6, 6);
                this.scene.addChild(this.skpRole);
            } else if (this.skpRole) {
                this.skpRole.active = false;
            }
            this.scene.addChild(this.role3D);
            Laya.timer.loop(50, this, this.onRotateRole);
        }
        onRotateRole() {
            if (this.role3D) {
                this.role3D.transform.rotate(new Laya.Vector3(0, .1, 0), false);
            }
        }
        onBtnShare() {
            TipsManager.showTips(null, "功能未开启");
        }
        onBtnNext() {
            if (this.isLock && this.armsId != 0) {
                MainDirector.Ins().armsId = this.armsId;
                MainDirector.Ins().armsList.push(this.armsId);
                MainModel.Ins().onSetGameRole();
                MainDirector.Ins().cmpRunPath.cmpRole.onSkinArms();
            }
            UIViewManager.Ins().onClose(UIEnum.Lock);
            UIViewManager.Ins().onOpen(UIEnum.Home);
        }
        showPross(prossWidth_) {
            Laya.Tween.to(this, {
                ProssWidth: prossWidth_
            }, 500);
        }
        set ProssWidth(value) {
            if (this.view) {
                this.prossWidth = value;
                this.view.imgPro.width = value;
                this.view.tPer.text = Math.floor(this.prossWidth / this.maxWidth * 100) + "%";
            }
        }
        get ProssWidth() {
            return this.prossWidth;
        }
    }
    class RewardView extends BaseUIView {
        constructor(UItype) {
            super(UItype);
            this.setClass(ui.RewardUI);
            this.setRes([{
                url: "res/atlas/res/reward.json",
                type: "atlas"
            }]);
        }
        open(...param) {
            super.open();
            this.initMask();
            this.view.height = Laya.stage.height;
            this.view.btnSkip.on(Laya.Event.CLICK, this, this.onBtnSkip);
            this.view.btnVideo.on(Laya.Event.CLICK, this, this.onBtnVideo);
            this.showAd();
        }
        showAd() {
            this.view.shouzhi.visible = MainDirector.Ins().WuchuIsShow == 1 ? true : false;
        }
        close(...param) {
            super.close();
            this.view.btnSkip.off(Laya.Event.CLICK, this, this.onBtnSkip);
            this.view.btnVideo.off(Laya.Event.CLICK, this, this.onBtnVideo);
        }
        onBtnVideo() {
            this.videoSucess(true);
        }
        videoSucess(isEnd) {
            if (!isEnd) {
                TipsManager.showTips(null, "请观看完完整视频，才能获得奖励!");
            }
            MainDirector.Ins().mBoardPlank += 10;
            MainDirector.Ins().cmpRunPath.cmpRole.onVideoAddBoard();
            Laya.timer.once(500, this, this.onceClose);
        }
        onBtnSkip() {
            UIViewManager.Ins().onClose(UIEnum.Reward);
            UIViewManager.Ins().onOpen(UIEnum.Sucess);
        }
        onceClose() {
            UIViewManager.Ins().onClose(UIEnum.Reward);
            UIViewManager.Ins().onOpen(UIEnum.Build);
        }
    }
    class MainControl extends MainBase {
        constructor() {
            super();
            this._mainModel = new MainModel();
            this._loading = new LoadingView(LayerEnum.Main);
            this._home = new HomeView(LayerEnum.Main);
            this._realy = new RealyView(LayerEnum.Main);
            this._fail = new FailView(LayerEnum.Main);
            this._success = new SuccessView(LayerEnum.Main);
            this._build = new BuildView(LayerEnum.Main);
            this._shop = new ShopView(LayerEnum.Main);
            this._try = new TryView(LayerEnum.Main);
            this._lock = new LockView(LayerEnum.Main);
            this._reward = new RewardView(LayerEnum.Main);
            UIViewManager.Ins().onRegister(UIEnum.Loading, this._loading);
            UIViewManager.Ins().onRegister(UIEnum.Home, this._home);
            UIViewManager.Ins().onRegister(UIEnum.Realy, this._realy);
            UIViewManager.Ins().onRegister(UIEnum.Fail, this._fail);
            UIViewManager.Ins().onRegister(UIEnum.Sucess, this._success);
            UIViewManager.Ins().onRegister(UIEnum.Build, this._build);
            UIViewManager.Ins().onRegister(UIEnum.Shop, this._shop);
            UIViewManager.Ins().onRegister(UIEnum.Lock, this._lock);
            UIViewManager.Ins().onRegister(UIEnum.Try, this._try);
            UIViewManager.Ins().onRegister(UIEnum.Reward, this._reward);
        }
        onInit() {}
        onStart() {
            MainDirector.Ins().onInit();
        }
    }
    class Main {
        constructor() {
            this.iphoneXHeight = 1624;
            this.iphoneXOff = 87;
            if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
            else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            if (Config3D["_config"]) {
                Config3D["_config"]["enableMultiLight"] = false;
            }
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            if (StageUtils.isIphoneX()) {
                if (Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
                } else {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_NOBORDER;
                }
                Laya.stage.height = this.iphoneXHeight - this.iphoneXOff;
            } else if (Laya.Browser.onPC) {
                Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            } else if (StageUtils.isIpad()) {
                Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
            } else {
                Laya.stage.scaleMode = Laya.Stage.ALIGN_TOP;
            }
            Config.isAntialias = true;
            Laya.loader.retryNum = 3;
            WX_SdkAdapter.ins.init();
            this.onInitScene();
            if (Laya.Browser.window.wx) {}
            this.onLoadLoading();
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat) Laya.Stat.show();
            this.CdnData();
        }
        onInitScene() {
            MainControl.Ins().onInit();
        }
        onLoadLoading() {
            UIViewManager.Ins().onOpen(UIEnum.Loading);
        }
        CdnData() {
            if (Laya.Browser.window.wx) {
                WX_SdkAdapter.ins.openJson(function(json) {
                    if (json) {
                        var config = Laya.loader.getRes(json);
                        MainDirector.Ins().WuchuIsShow = Number(config["isShow"]);
                        MainDirector.Ins().BtnDelay = Number(config["btndelay"]) * 1e3;
                        console.log(MainDirector.Ins().WuchuIsShow, MainDirector.Ins().BtnDelay, MainDirector.Ins().CDNtime);
                        Laya.timer.once(MainDirector.Ins().CDNtime * 1e3, this, () => {
                            MainDirector.Ins().CDNisShowAd = true;
                        });
                    }
                }.bind(this));
            }
        }
    }
    new Main();
})();