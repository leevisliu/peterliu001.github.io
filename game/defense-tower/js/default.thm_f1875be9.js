function e(e, t) {
    function i() {
        this.constructor = e;
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype, e.prototype = new i();
}

var t = window.egret;

window.skins = {}, window.generateEUI = {}, generateEUI.paths = {}, generateEUI.styles = void 0,
    generateEUI.skins = {
        "eui.ProgressBar": "resource/eui_skins/ProgressBarSkin.exml"
    }, generateEUI.paths["resource/eui_skins/MySkin/MyAutoBuildNotEnoughSkin.exml"] = window.MyAutoBuildNotEnoughSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "get_time", "get_button", "free_label", "get_type", "get_label", "buy_group", "buttonGuide", "all_group", "close_button", "close_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.close_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_button_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = n.prototype;
        return o.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, o.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 785, e.height = 785, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Label2_i(), this.get_time_i(), this.get_button_i(), this.free_label_i(), this.buy_group_i(), this.buttonGuide_i()],
                e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.height = 700, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 600, e.x = 0, e.y = 0,
                e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69.39, e.scale9Grid = new egret.Rectangle(22, 29, 3, 4),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_12_png", e.width = 369, e.x = 114,
                e.y = 12.3, e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 50, e.stroke = 2, e.text = "自动合成补给站",
                e.x = 120.16, e.y = 23.52, e;
        }, o._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 560, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 85, e;
        }, o._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 250, e.scale9Grid = new egret.Rectangle(31, 31, 3, 3),
                e.source = "ui_01_13_png", e.width = 250, e.x = 175, e.y = 170, e;
        }, o._Image5_i = function() {
            var e = new eui.Image();
            return e.height = 87, e.source = "ui_dl_01_01_png", e.width = 168, e.x = 217.23,
                e.y = 251.5, e;
        }, o._Image6_i = function() {
            var e = new eui.Image();
            return e.height = 18, e.source = "ui_dl_01_02_png", e.width = 145.5, e.x = 227.72,
                e.y = 304.83, e;
        }, o._Image7_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(34, 31, 5, 3), e.source = "ui_01_15_png",
                e.width = 300, e.x = 152.12, e.y = 455, e;
        }, o._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 30, e.stroke = 3, e.strokeColor = 0, e.text = "Increase the number of automatic synthesis by 30",
                e.textAlign = "center", e.textColor = 65280, e.width = 300, e.x = 150, e.y = 474,
                e;
        }, o.get_time_i = function() {
            var e = new eui.Label();
            return this.get_time = e, e.bold = !0, e.text = "5 times left today", e.textColor = 8553090,
                e.x = 223.62, e.y = 563, e;
        }, o.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetY = 37.5, e.enabled = !0, e.label = "",
                e.width = 250, e.x = 175.65, e.y = 746, e.skinName = r, e;
        }, o.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 75, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 3, e.strokeColor = 10311475, e.text = "Free", e.textAlign = "center",
                e.textColor = 16777215, e.touchEnabled = !1, e.width = 150, e.x = 300, e.y = 746,
                e;
        }, o.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetY = 23, e.touchChildren = !1, e.touchEnabled = !1,
                e.x = 210.56, e.y = 746, e.elementsContent = [this.get_type_i(), this.get_label_i()],
                e;
        }, o.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_02_png", e.touchEnabled = !1, e.x = 26, e.y = 23,
                e;
        }, o.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "分享填满", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 150, e.x = 42.51, e.y = 23, e;
        }, o.buttonGuide_i = function() {
            var e = new eui.Image();
            return this.buttonGuide = e, e.rotation = 241.49, e.scaleX = -1, e.scaleY = 1, e.source = "ui_yindao2_png",
                e.x = 430.16, e.y = 740.19, e;
        }, o.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label3_i(), this.close_button_i()],
                e;
        }, o._Label3_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "No, skip cruelly>>", e.x = 7.73,
                e.y = 3.68, e;
        }, o.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = a, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyControl/HPProgressBarSkin.exml"] = window.MyHPProgressBar = function(i) {
        function n() {
            i.call(this), this.skinParts = ["thumb"], this.height = 7, this.width = 37, this.elementsContent = [this._Image1_i(), this.thumb_i()];
        }
        e(n, i);
        var r = n.prototype;
        return r._Image1_i = function() {
            var e = new eui.Image();
            return e.scale9Grid = new egret.Rectangle(1, 1, 4, 4), e.source = "cjdj_01_png", e.verticalCenter = 0,
                e;
        }, r.thumb_i = function() {
            var e = new eui.Image();
            return this.thumb = e, e.source = "cjdj_02_png", e.x = 1, e.y = 1, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyControl/MyAchievementControl.exml"] = window.MyAchievementControl = function(i) {
        function n() {
            i.call(this), this.skinParts = ["ach_describe", "arh_pb", "ach_reward", "get_button"],
                this.height = 150, this.width = 500, this.elementsContent = [this._Group2_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["thumb", "labelDisplay"], this.height = 26, this.width = 300,
                        this.elementsContent = [this._Image1_i(), this.thumb_i(), this.labelDisplay_i()];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return e.scale9Grid = new egret.Rectangle(16, 12, 1, 1), e.source = "ui_01_05_png",
                        e.width = 300, e;
                }, r.thumb_i = function() {
                    var e = new eui.Image();
                    return this.thumb = e, e.scale9Grid = new egret.Rectangle(11, 6, 1, 1), e.source = "ui_01_06_png",
                        e.width = 288, e.x = 6, e.y = 6, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.bottom = 6, e.horizontalCenter = 0,
                        e.size = 14, e.stroke = 2, e.textAlign = "center", e.textColor = 16777215, e.verticalAlign = "middle",
                        e;
                }, n;
            }(eui.Skin),
            a = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_04_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_01_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            o = n.prototype;
        return o._Group2_i = function() {
            var e = new eui.Group();
            return e.height = 150, e.width = 500, e.elementsContent = [this._Group1_i()],
                e;
        }, o._Group1_i = function() {
            var e = new eui.Group();
            return e.height = 150, e.width = 500, e.x = 0, e.y = 0, e.elementsContent = [this.ach_describe_i(), this.arh_pb_i(), this._Image1_i(), this._Image2_i(), this.ach_reward_i(), this._Rect1_i(), this.get_button_i(), this._Label1_i()],
                e;
        }, o.ach_describe_i = function() {
            var e = new eui.Label();
            return this.ach_describe = e, e.bold = !0, e.size = 22, e.text = "Build 410 defense towers", e.textColor = 10311475,
                e.y = 20, e;
        }, o.arh_pb_i = function() {
            var e = new eui.ProgressBar();
            return this.arh_pb = e, e.value = 50, e.x = 0, e.y = 100, e.skinName = r, e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.height = 36, e.scale9Grid = new egret.Rectangle(18, 18, 2, 2), e.source = "ui_01_04_png",
                e.width = 180, e.x = 30, e.y = 55, e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.source = "ui_money_02_png", e.y = 45, e;
        }, o.ach_reward_i = function() {
            var e = new eui.Label();
            return this.ach_reward = e, e.bold = !0, e.text = "50", e.textAlign = "center",
                e.width = 160, e.x = 50, e.y = 58, e;
        }, o._Rect1_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .5, e.fillColor = 7820336, e.height = 2, e.width = 500, e.y = 148,
                e;
        }, o.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetY = 37.5, e.label = "", e.width = 180,
                e.x = 320, e.y = 77.5, e.skinName = a, e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 2, e.strokeColor = 4671303,
                e.text = "Get", e.touchEnabled = !1, e.x = 380, e.y = 77.5, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyControl/MyHPProgressBar.exml"] = window.MyHPProgressBar = function(i) {
        function n() {
            i.call(this), this.skinParts = ["thumb"], this.height = 7, this.width = 37, this.elementsContent = [this._Image1_i(), this.thumb_i()];
        }
        e(n, i);
        var r = n.prototype;
        return r._Image1_i = function() {
            var e = new eui.Image();
            return e.scale9Grid = new egret.Rectangle(1, 1, 4, 4), e.source = "cjdj_01_png", e.verticalCenter = 0,
                e;
        }, r.thumb_i = function() {
            var e = new eui.Image();
            return this.thumb = e, e.source = "cjdj_02_png", e.x = 1, e.y = 1, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyControl/MyRankControl.exml"] = window.MyRankControl = function(i) {
        function n() {
            i.call(this), this.skinParts = ["rank_img", "rank_label", "rank_head", "rank_name", "rank_power"],
                this.height = 105, this.width = 500, this.elementsContent = [this._Group1_i()];
        }
        e(n, i);
        var r = n.prototype;
        return r._Group1_i = function() {
            var e = new eui.Group();
            return e.height = 105, e.scaleX = 1, e.scaleY = 1, e.width = 500, e.x = 0, e.y = 0,
                e.elementsContent = [this._Image1_i(), this.rank_img_i(), this.rank_label_i(), this.rank_head_i(), this._Image2_i(), this.rank_name_i(), this.rank_power_i()],
                e;
        }, r._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.height = 95, e.scale9Grid = new egret.Rectangle(21, 22, 14, 14),
                e.source = "ui_01_09_png", e.width = 500, e.y = 5, e;
        }, r.rank_img_i = function() {
            var e = new eui.Image();
            return this.rank_img = e, e.source = "ui_rank_01_png", e.x = 6, e.y = 27, e;
        }, r.rank_label_i = function() {
            var e = new eui.Label();
            return this.rank_label = e, e.anchorOffsetX = 40, e.bold = !0, e.text = "9999",
                e.textAlign = "center", e.textColor = 4013373, e.width = 80, e.x = 36, e.y = 38.63,
                e;
        }, r.rank_head_i = function() {
            var e = new eui.Image();
            return this.rank_head = e, e.height = 75, e.source = "ui_top_02_png", e.width = 75,
                e.x = 75, e.y = 15, e;
        }, r._Image2_i = function() {
            var e = new eui.Image();
            return e.height = 85, e.source = "ui_01_10_png", e.width = 85, e.x = 70, e.y = 10,
                e;
        }, r.rank_name_i = function() {
            var e = new eui.Label();
            return this.rank_name = e, e.bold = !0, e.height = 25, e.size = 24, e.stroke = 2,
                e.strokeColor = 4013373, e.text = "Useraaaaaaa", e.textColor = 16777215, e.width = 220,
                e.x = 165.69, e.y = 41, e;
        }, r.rank_power_i = function() {
            var e = new eui.Label();
            return this.rank_power = e, e.bold = !0, e.height = 25, e.size = 24, e.stroke = 2,
                e.strokeColor = 10311475, e.text = "123.5T", e.textAlign = "center", e.textColor = 16777215,
                e.width = 100, e.x = 395.71, e.y = 41, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyControl/MyShopControl.exml"] = window.MyShopControl = function(i) {
        function n() {
            i.call(this), this.skinParts = ["tower_base", "tower_cannon", "tower_name", "tower_atk", "tower_range", "tower_level", "tower_button", "tower_gold", "buy_group", "unlock_level"],
                this.height = 150, this.width = 500, this.elementsContent = [this._Group1_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = n.prototype;
        return a._Group1_i = function() {
            var e = new eui.Group();
            return e.height = 150, e.width = 500, e.x = 0, e.y = 0, e.elementsContent = [this.tower_base_i(), this.tower_cannon_i(), this.tower_name_i(), this.tower_atk_i(), this.tower_range_i(), this.tower_level_i(), this._Rect1_i(), this.tower_button_i(), this.buy_group_i(), this.unlock_level_i()],
                e;
        }, a.tower_base_i = function() {
            var e = new eui.Image();
            return this.tower_base = e, e.anchorOffsetX = 62, e.height = 124, e.source = "tower_XPD_png",
                e.width = 124, e.x = 50, e.y = 15, e;
        }, a.tower_cannon_i = function() {
            var e = new eui.Image();
            return this.tower_cannon = e, e.anchorOffsetX = 62, e.height = 124, e.source = "tower_XP1_png",
                e.width = 124, e.x = 50, e.y = 15, e;
        }, a.tower_name_i = function() {
            var e = new eui.Label();
            return this.tower_name = e, e.bold = !0, e.size = 26, e.text = "Mini cannon", e.textColor = 10311475,
                e.x = 90, e.y = 31, e;
        }, a.tower_atk_i = function() {
            var e = new eui.Label();
            return this.tower_atk = e, e.bold = !0, e.size = 26, e.text = "Hurt:12/S", e.textColor = 10311475,
                e.x = 90, e.y = 62, e;
        }, a.tower_range_i = function() {
            var e = new eui.Label();
            return this.tower_range = e, e.bold = !0, e.size = 26, e.text = "Attack range:2.2", e.textColor = 10311475,
                e.x = 90, e.y = 92, e;
        }, a.tower_level_i = function() {
            var e = new eui.Label();
            return this.tower_level = e, e.anchorOffsetX = 50, e.bold = !0, e.size = 24, e.stroke = 2,
                e.text = "Lv.40", e.textAlign = "center", e.textColor = 16777215, e.width = 100,
                e.x = 50, e.y = 105, e;
        }, a._Rect1_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .5, e.fillColor = 7820336, e.height = 2, e.width = 500, e.y = 148,
                e;
        }, a.tower_button_i = function() {
            var e = new eui.Button();
            return this.tower_button = e, e.label = "", e.width = 180, e.x = 320, e.y = 40,
                e.skinName = r, e;
        }, a.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.touchChildren = !1, e.touchEnabled = !1, e.touchThrough = !0,
                e.x = 334, e.y = 47, e.elementsContent = [this._Image1_i(), this.tower_gold_i()],
                e;
        }, a._Image1_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1, e.scaleY = 1, e.source = "ui_money_01_png", e.touchEnabled = !1,
                e.x = 0, e.y = 0, e;
        }, a.tower_gold_i = function() {
            var e = new eui.Label();
            return this.tower_gold = e, e.bold = !0, e.size = 30, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "600.6T", e.textAlign = "center", e.textColor = 16777215, e.touchEnabled = !1,
                e.width = 150, e.x = 31, e.y = 13, e;
        }, a.unlock_level_i = function() {
            var e = new eui.Label();
            return this.unlock_level = e, e.bold = !0, e.size = 22, e.stroke = 2, e.strokeColor = 4671303,
                e.text = "Unlock 14th level of main gun", e.textAlign = "center", e.touchEnabled = !1, e.width = 180,
                e.x = 321, e.y = 61, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyControl/MyTaskControl.exml"] = window.MyTaskControl = function(i) {
        function n() {
            i.call(this), this.skinParts = ["dl_name", "dl_button", "dl_label", "dl_icon", "dl_group", "task_describe", "task_pb", "task_reward", "get_button", "task_share", "task_get", "task_group"],
                this.height = 150, this.width = 500, this.elementsContent = [this.dl_group_i(), this.task_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["thumb", "labelDisplay"], this.height = 26, this.width = 300,
                        this.elementsContent = [this._Image1_i(), this.thumb_i(), this.labelDisplay_i()];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return e.scale9Grid = new egret.Rectangle(16, 12, 1, 1), e.source = "ui_01_05_png",
                        e.width = 300, e;
                }, r.thumb_i = function() {
                    var e = new eui.Image();
                    return this.thumb = e, e.scale9Grid = new egret.Rectangle(11, 6, 1, 1), e.source = "ui_01_06_png",
                        e.width = 288, e.x = 6, e.y = 6, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.bottom = 6, e.horizontalCenter = 0,
                        e.size = 14, e.stroke = 2, e.textAlign = "center", e.textColor = 16777215, e.verticalAlign = "middle",
                        e;
                }, n;
            }(eui.Skin),
            o = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_04_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_01_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            u = n.prototype;
        return u.dl_group_i = function() {
            var e = new eui.Group();
            return this.dl_group = e, e.height = 150, e.visible = !1, e.width = 500, e.x = 0,
                e.y = 0, e.elementsContent = [this._Image1_i(), this._Label1_i(), this.dl_name_i(), this._Label2_i(), this._Image2_i(), this._Image3_i(), this._Label3_i(), this.dl_button_i(), this.dl_label_i(), this._Image4_i(), this.dl_icon_i(), this._Image5_i()],
                e;
        }, u._Image1_i = function() {
            var e = new eui.Image();
            return e.height = 150, e.scale9Grid = new egret.Rectangle(22, 27, 7, 11), e.source = "ui_01_17_png",
                e.width = 500, e.x = 0, e.y = 0, e;
        }, u._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 26, e.strokeColor = 10311475,
                e.text = "【Try】", e.textColor = 10311475, e.x = -5, e.y = 20, e;
        }, u.dl_name_i = function() {
            var e = new eui.Label();
            return this.dl_name = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 26,
                e.strokeColor = 10311475, e.text = "Little Survivor", e.textAlign = "left", e.textColor = 10311475,
                e.x = 90, e.y = 20, e;
        }, u._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20, e.strokeColor = 10311475,
                e.text = "Try it for 30 seconds", e.textAlign = "left", e.textColor = 10311475, e.x = 5, e.y = 104,
                e;
        }, u._Image2_i = function() {
            var e = new eui.Image();
            return e.height = 36, e.scale9Grid = new egret.Rectangle(18, 18, 2, 2), e.source = "ui_01_04_png",
                e.width = 180, e.x = 30, e.y = 60, e;
        }, u._Image3_i = function() {
            var e = new eui.Image();
            return e.source = "ui_money_02_png", e.y = 50, e;
        }, u._Label3_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.text = "200", e.textAlign = "center", e.width = 160, e.x = 50,
                e.y = 63, e;
        }, u.dl_button_i = function() {
            var e = new eui.Button();
            return this.dl_button = e, e.anchorOffsetY = 37.5, e.label = "", e.width = 180,
                e.x = 320, e.y = 77.5, e.skinName = r, e;
        }, u.dl_label_i = function() {
            var e = new eui.Label();
            return this.dl_label = e, e.anchorOffsetX = 70, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 2, e.strokeColor = 4671303, e.text = "Play for 30 seconds", e.textAlign = "center",
                e.touchEnabled = !1, e.width = 140, e.x = 411, e.y = 77.5, e;
        }, u._Image4_i = function() {
            var e = new eui.Image();
            return e.source = "ui_win_demo_avt_rect_png", e.touchEnabled = !1, e.x = 237, e.y = -2,
                e;
        }, u.dl_icon_i = function() {
            var e = new eui.Image();
            return this.dl_icon = e, e.height = 75, e.rotation = -20, e.source = "icon-144_png",
                e.touchEnabled = !1, e.width = 75, e.x = 246, e.y = 32, e;
        }, u._Image5_i = function() {
            var e = new eui.Image();
            return e.source = "ui_win_demo_8_png", e.touchEnabled = !1, e.x = 307, e.y = 31,
                e;
        }, u.task_group_i = function() {
            var e = new eui.Group();
            return this.task_group = e, e.height = 150, e.width = 500, e.x = 0, e.y = 0, e.elementsContent = [this.task_describe_i(), this.task_pb_i(), this._Image6_i(), this._Image7_i(), this.task_reward_i(), this.get_button_i(), this.task_share_i(), this.task_get_i(), this._Rect1_i()],
                e;
        }, u.task_describe_i = function() {
            var e = new eui.Label();
            return this.task_describe = e, e.bold = !0, e.size = 22, e.text = "Purchase 15 defense towers with gold coins",
                e.textColor = 10311475, e.y = 20, e;
        }, u.task_pb_i = function() {
            var e = new eui.ProgressBar();
            return this.task_pb = e, e.value = 50, e.x = 0, e.y = 100, e.skinName = a, e;
        }, u._Image6_i = function() {
            var e = new eui.Image();
            return e.height = 36, e.scale9Grid = new egret.Rectangle(18, 18, 2, 2), e.source = "ui_01_04_png",
                e.width = 180, e.x = 30, e.y = 55, e;
        }, u._Image7_i = function() {
            var e = new eui.Image();
            return e.source = "ui_money_01_png", e.y = 45, e;
        }, u.task_reward_i = function() {
            var e = new eui.Label();
            return this.task_reward = e, e.bold = !0, e.text = "12.3T", e.textAlign = "center",
                e.width = 160, e.x = 50, e.y = 58, e;
        }, u.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetY = 37.5, e.label = "", e.width = 180,
                e.x = 320, e.y = 77.5, e.skinName = o, e;
        }, u.task_share_i = function() {
            var e = new eui.Group();
            return this.task_share = e, e.anchorOffsetY = 20.5, e.touchChildren = !1, e.touchEnabled = !1,
                e.x = 330, e.y = 77.5, e.elementsContent = [this._Image8_i(), this._Label4_i()],
                e;
        }, u._Image8_i = function() {
            var e = new eui.Image();
            return e.source = "ui_share_03_png", e.touchEnabled = !1, e.x = 0, e.y = 0, e;
        }, u._Label4_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 30, e.stroke = 2, e.strokeColor = 3375106, e.text = "Double",
                e.touchEnabled = !1, e.x = 37, e.y = 6, e;
        }, u.task_get_i = function() {
            var e = new eui.Label();
            return this.task_get = e, e.anchorOffsetX = 70, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 2, e.strokeColor = 3375106, e.text = "Get", e.textAlign = "center",
                e.touchEnabled = !1, e.width = 140, e.x = 411, e.y = 77.5, e;
        }, u._Rect1_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .5, e.fillColor = 7820336, e.height = 2, e.scaleX = 1, e.scaleY = 1,
                e.width = 500, e.x = 0, e.y = 148, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyControl/MyUpgradeControl.exml"] = window.MyUpgradeControl = function(i) {
        function n() {
            i.call(this), this.skinParts = ["upgrade_img", "upgrade_name", "upgrade_describe", "upgrade_level", "upgrade_button", "upgrade_cost"],
                this.height = 150, this.width = 500, this.elementsContent = [this._Group1_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = n.prototype;
        return a._Group1_i = function() {
            var e = new eui.Group();
            return e.height = 150, e.width = 500, e.x = 0, e.y = 0, e.elementsContent = [this.upgrade_img_i(), this.upgrade_name_i(), this.upgrade_describe_i(), this.upgrade_level_i(), this._Rect1_i(), this.upgrade_button_i(), this.upgrade_cost_i(), this._Image1_i()],
                e;
        }, a.upgrade_img_i = function() {
            var e = new eui.Image();
            return this.upgrade_img = e, e.height = 80, e.source = "ui_skill_01_png", e.width = 80,
                e.y = 22, e;
        }, a.upgrade_name_i = function() {
            var e = new eui.Label();
            return this.upgrade_name = e, e.bold = !0, e.size = 20, e.text = "Capacity expansion of supply station", e.textColor = 10311475,
                e.x = 90, e.y = 42, e;
        }, a.upgrade_describe_i = function() {
            var e = new eui.Label();
            return this.upgrade_describe = e, e.bold = !0, e.size = 26, e.text = "50 - 51",
                e.textColor = 10311475, e.x = 90, e.y = 82, e;
        }, a.upgrade_level_i = function() {
            var e = new eui.Label();
            return this.upgrade_level = e, e.bold = !0, e.size = 24, e.stroke = 2, e.text = "Lv.40",
                e.textAlign = "center", e.textColor = 16777215, e.width = 100, e.x = -10, e.y = 105,
                e;
        }, a._Rect1_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .5, e.fillColor = 7820336, e.height = 2, e.width = 500, e.y = 148,
                e;
        }, a.upgrade_button_i = function() {
            var e = new eui.Button();
            return this.upgrade_button = e, e.label = "", e.width = 160, e.x = 340, e.y = 70,
                e.skinName = r, e;
        }, a.upgrade_cost_i = function() {
            var e = new eui.Label();
            return this.upgrade_cost = e, e.bold = !0, e.size = 30, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "60", e.textAlign = "center", e.textColor = 16777215, e.touchEnabled = !1,
                e.width = 100, e.x = 403, e.y = 90, e;
        }, a._Image1_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1, e.scaleY = 1, e.source = "ui_money_02_png", e.touchEnabled = !1,
                e.x = 354.5, e.y = 77, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyDiamondNotEnoughSkin.exml"] = window.MyDiamondNotEnoughSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "get_num", "get_time", "get_button", "free_label", "get_type", "get_label", "buy_group", "buttonGuide", "all_group", "close_button", "close_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.close_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3), e.source = "ui_button_03_png",
                        e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            o = n.prototype;
        return o.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, o.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 785, e.height = 785, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.get_num_i(), this.get_time_i(), this.get_button_i(), this.free_label_i(), this.buy_group_i(), this.buttonGuide_i()],
                e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.height = 700, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 600, e.x = 0, e.y = 0,
                e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69.39, e.scale9Grid = new egret.Rectangle(22, 29, 3, 4),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_12_png", e.width = 369, e.x = 114,
                e.y = 12.3, e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 50, e.stroke = 2, e.text = "Get diamonds",
                e.x = 145.5, e.y = 23.52, e;
        }, o._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 560, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 85, e;
        }, o._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 250, e.scale9Grid = new egret.Rectangle(31, 31, 3, 3),
                e.source = "ui_01_13_png", e.width = 250, e.x = 175, e.y = 170, e;
        }, o._Image5_i = function() {
            var e = new eui.Image();
            return e.source = "ui_box_02_png", e.x = 163.66, e.y = 183, e;
        }, o._Image6_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(34, 31, 5, 3), e.source = "ui_01_15_png",
                e.width = 272, e.x = 166.12, e.y = 455, e;
        }, o._Image7_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_02_png", e.x = 177.62,
                e.y = 453.52, e;
        }, o.get_num_i = function() {
            var e = new eui.Label();
            return this.get_num = e, e.bold = !0, e.size = 35, e.stroke = 3, e.strokeColor = 936611,
                e.text = "+200", e.textAlign = "center", e.textColor = 12122363, e.width = 200,
                e.x = 235.66, e.y = 472.48, e;
        }, o.get_time_i = function() {
            var e = new eui.Label();
            return this.get_time = e, e.bold = !0, e.text = "5 times left today", e.textColor = 8553090,
                e.x = 223.62, e.y = 563, e;
        }, o.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetY = 37.5, e.enabled = !0, e.height = 75,
                e.label = "", e.width = 250, e.x = 175.65, e.y = 746, e.skinName = r, e;
        }, o.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 75, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 3, e.strokeColor = 10311475, e.text = "Free", e.textAlign = "center",
                e.textColor = 16777215, e.touchEnabled = !1, e.width = 150, e.x = 300, e.y = 746,
                e;
        }, o.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetY = 23, e.height = 46, e.touchChildren = !1,
                e.touchEnabled = !1, e.x = 210.56, e.y = 746, e.elementsContent = [this.get_type_i(), this.get_label_i()],
                e;
        }, o.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_02_png", e.touchEnabled = !1, e.x = 26, e.y = 23,
                e;
        }, o.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "Diamond Supply", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 150, e.x = 42.51, e.y = 23, e;
        }, o.buttonGuide_i = function() {
            var e = new eui.Image();
            return this.buttonGuide = e, e.rotation = 241.49, e.scaleX = -1, e.scaleY = 1, e.source = "ui_yindao2_png",
                e.x = 430.1600000000001, e.y = 740.1900000000002, e;
        }, o.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label2_i(), this.close_button_i()],
                e;
        }, o._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "No, skip cruelly>>", e.x = 7.73,
                e.y = 3.68, e;
        }, o.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = a, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyDLMenu.exml"] = window.MyDLMenu = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "banner_icon_0", "banner_button_0", "banner_group", "moregame_icon_0", "moregame_name_0", "moregame_des_0", "moregame_button_0", "moregame_0", "moregame_icon_1", "moregame_name_1", "moregame_des_1", "moregame_button_1", "moregame_1", "moregame_icon_2", "moregame_name_2", "moregame_des_2", "moregame_button_2", "moregame_2", "moregame_icon_3", "moregame_name_3", "moregame_des_3", "moregame_button_3", "moregame_3", "moregame_icon_4", "moregame_name_4", "moregame_des_4", "moregame_button_4", "moregame_4", "moregame_icon_5", "moregame_name_5", "moregame_des_5", "moregame_button_5", "moregame_5", "moregame_icon_6", "moregame_name_6", "moregame_des_6", "moregame_button_6", "moregame_6", "moregame_icon_7", "moregame_name_7", "moregame_des_7", "moregame_button_7", "moregame_7", "moregame_icon_8", "moregame_name_8", "moregame_des_8", "moregame_button_8", "moregame_8", "close_button", "moregame_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.banner_group_i(), this.moregame_group_i()];
        }
        e(n, i);
        var r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "icon-144_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            u = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            _ = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            s = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            l = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            h = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            c = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            g = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            m = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_04_png")]), new eui.State("disabled", [])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_01_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            f = n.prototype;
        return f.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, f.banner_group_i = function() {
            var e = new eui.Group();
            return this.banner_group = e, e.anchorOffsetY = 200, e.height = 200, e.width = 640,
                e.y = 1136, e.elementsContent = [this.banner_icon_0_i(), this.banner_button_0_i()],
                e;
        }, f.banner_icon_0_i = function() {
            var e = new eui.Image();
            return this.banner_icon_0 = e, e.height = 200, e.source = "icon-144_png", e.width = 640,
                e.x = 0, e.y = 0, e;
        }, f.banner_button_0_i = function() {
            var e = new eui.Button();
            return this.banner_button_0 = e, e.alpha = 0, e.height = 200, e.label = "", e.width = 640,
                e.x = 0, e.y = 0, e.skinName = r, e;
        }, f.moregame_group_i = function() {
            var e = new eui.Group();
            return this.moregame_group = e, e.anchorOffsetX = 279, e.anchorOffsetY = 885, e.height = 885,
                e.width = 558, e.x = 320, e.y = 1028, e.elementsContent = [this._Image1_i(), this._Image2_i(), this.moregame_0_i(), this.moregame_1_i(), this.moregame_2_i(), this.moregame_3_i(), this.moregame_4_i(), this.moregame_5_i(), this.moregame_6_i(), this.moregame_7_i(), this.moregame_8_i(), this.close_button_i(), this._Label1_i()],
                e;
        }, f._Image1_i = function() {
            var e = new eui.Image();
            return e.height = 700, e.scale9Grid = new egret.Rectangle(20, 20, 60, 60), e.source = "hyzw_kuang_png",
                e.width = 578, e.x = -10, e.y = 70, e;
        }, f._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 225.5, e.anchorOffsetY = 25, e.height = 50, e.source = "hyzw_zi_01_png",
                e.width = 451, e.x = 279, e.y = 40, e;
        }, f.moregame_0_i = function() {
            var e = new eui.Group();
            return this.moregame_0 = e, e.height = 210, e.width = 170, e.x = 14, e.y = 94, e.elementsContent = [this.moregame_icon_0_i(), this._Image3_i(), this.moregame_name_0_i(), this.moregame_des_0_i(), this.moregame_button_0_i()],
                e;
        }, f.moregame_icon_0_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_0 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, f._Image3_i = function() {
            var e = new eui.Image();
            return e.height = 210, e.scale9Grid = new egret.Rectangle(21, 163, 128, 28), e.source = "hyzw_neir01_png",
                e.width = 170, e;
        }, f.moregame_name_0_i = function() {
            var e = new eui.Label();
            return this.moregame_name_0 = e, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.size = 22, e.text = "Little Survivor", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 154, e.x = 8, e.y = 173, e;
        }, f.moregame_des_0_i = function() {
            var e = new eui.Label();
            return this.moregame_des_0 = e, e.anchorOffsetY = 9, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 18, e.size = 15, e.text = "9 million people crowded", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "top", e.width = 170, e.x = 8, e.y = 197, e;
        }, f.moregame_button_0_i = function() {
            var e = new eui.Button();
            return this.moregame_button_0 = e, e.alpha = 0, e.height = 210, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = a, e;
        }, f.moregame_1_i = function() {
            var e = new eui.Group();
            return this.moregame_1 = e, e.height = 210, e.width = 170, e.x = 194, e.y = 94,
                e.elementsContent = [this.moregame_icon_1_i(), this._Image4_i(), this.moregame_name_1_i(), this.moregame_des_1_i(), this.moregame_button_1_i()],
                e;
        }, f.moregame_icon_1_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_1 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, f._Image4_i = function() {
            var e = new eui.Image();
            return e.height = 210, e.scale9Grid = new egret.Rectangle(21, 163, 128, 28), e.source = "hyzw_neir02_png",
                e.width = 170, e;
        }, f.moregame_name_1_i = function() {
            var e = new eui.Label();
            return this.moregame_name_1 = e, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.size = 22, e.text = "Little Survivor", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 154, e.x = 8, e.y = 173, e;
        }, f.moregame_des_1_i = function() {
            var e = new eui.Label();
            return this.moregame_des_1 = e, e.anchorOffsetY = 9, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 18, e.size = 15, e.text = "9 million people crowded", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "top", e.width = 170, e.x = 8, e.y = 197, e;
        }, f.moregame_button_1_i = function() {
            var e = new eui.Button();
            return this.moregame_button_1 = e, e.alpha = 0, e.height = 210, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = o, e;
        }, f.moregame_2_i = function() {
            var e = new eui.Group();
            return this.moregame_2 = e, e.height = 210, e.width = 170, e.x = 374, e.y = 94,
                e.elementsContent = [this.moregame_icon_2_i(), this._Image5_i(), this.moregame_name_2_i(), this.moregame_des_2_i(), this.moregame_button_2_i()],
                e;
        }, f.moregame_icon_2_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_2 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, f._Image5_i = function() {
            var e = new eui.Image();
            return e.height = 210, e.scale9Grid = new egret.Rectangle(21, 163, 128, 28), e.source = "hyzw_neir03_png",
                e.width = 170, e;
        }, f.moregame_name_2_i = function() {
            var e = new eui.Label();
            return this.moregame_name_2 = e, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.size = 22, e.text = "Little Survivor", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 154, e.x = 8, e.y = 173, e;
        }, f.moregame_des_2_i = function() {
            var e = new eui.Label();
            return this.moregame_des_2 = e, e.anchorOffsetY = 9, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 18, e.size = 15, e.text = "9 million people crowded", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "top", e.width = 170, e.x = 8, e.y = 197, e;
        }, f.moregame_button_2_i = function() {
            var e = new eui.Button();
            return this.moregame_button_2 = e, e.alpha = 0, e.height = 210, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = u, e;
        }, f.moregame_3_i = function() {
            var e = new eui.Group();
            return this.moregame_3 = e, e.height = 210, e.width = 170, e.x = 14, e.y = 314,
                e.elementsContent = [this.moregame_icon_3_i(), this._Image6_i(), this.moregame_name_3_i(), this.moregame_des_3_i(), this.moregame_button_3_i()],
                e;
        }, f.moregame_icon_3_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_3 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, f._Image6_i = function() {
            var e = new eui.Image();
            return e.height = 210, e.scale9Grid = new egret.Rectangle(21, 163, 128, 28), e.source = "hyzw_neir02_png",
                e.width = 170, e;
        }, f.moregame_name_3_i = function() {
            var e = new eui.Label();
            return this.moregame_name_3 = e, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.size = 22, e.text = "Little Survivor", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 154, e.x = 8, e.y = 173, e;
        }, f.moregame_des_3_i = function() {
            var e = new eui.Label();
            return this.moregame_des_3 = e, e.anchorOffsetY = 9, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 18, e.size = 15, e.text = "9 million people crowded", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "top", e.width = 170, e.x = 8, e.y = 197, e;
        }, f.moregame_button_3_i = function() {
            var e = new eui.Button();
            return this.moregame_button_3 = e, e.alpha = 0, e.height = 210, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = _, e;
        }, f.moregame_4_i = function() {
            var e = new eui.Group();
            return this.moregame_4 = e, e.height = 210, e.width = 170, e.x = 194, e.y = 314,
                e.elementsContent = [this.moregame_icon_4_i(), this._Image7_i(), this.moregame_name_4_i(), this.moregame_des_4_i(), this.moregame_button_4_i()],
                e;
        }, f.moregame_icon_4_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_4 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, f._Image7_i = function() {
            var e = new eui.Image();
            return e.height = 210, e.scale9Grid = new egret.Rectangle(21, 163, 128, 28), e.source = "hyzw_neir03_png",
                e.width = 170, e;
        }, f.moregame_name_4_i = function() {
            var e = new eui.Label();
            return this.moregame_name_4 = e, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.size = 22, e.text = "Little Survivor", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 154, e.x = 8, e.y = 173, e;
        }, f.moregame_des_4_i = function() {
            var e = new eui.Label();
            return this.moregame_des_4 = e, e.anchorOffsetY = 9, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 18, e.size = 15, e.text = "9 million people crowded", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "top", e.width = 170, e.x = 8, e.y = 197, e;
        }, f.moregame_button_4_i = function() {
            var e = new eui.Button();
            return this.moregame_button_4 = e, e.alpha = 0, e.height = 210, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = s, e;
        }, f.moregame_5_i = function() {
            var e = new eui.Group();
            return this.moregame_5 = e, e.height = 210, e.width = 170, e.x = 374, e.y = 314,
                e.elementsContent = [this.moregame_icon_5_i(), this._Image8_i(), this.moregame_name_5_i(), this.moregame_des_5_i(), this.moregame_button_5_i()],
                e;
        }, f.moregame_icon_5_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_5 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, f._Image8_i = function() {
            var e = new eui.Image();
            return e.height = 210, e.scale9Grid = new egret.Rectangle(21, 163, 128, 28), e.source = "hyzw_neir01_png",
                e.width = 170, e;
        }, f.moregame_name_5_i = function() {
            var e = new eui.Label();
            return this.moregame_name_5 = e, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.size = 22, e.text = "Little Survivor", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 154, e.x = 8, e.y = 173, e;
        }, f.moregame_des_5_i = function() {
            var e = new eui.Label();
            return this.moregame_des_5 = e, e.anchorOffsetY = 9, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 18, e.size = 15, e.text = "9 million people crowded", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "top", e.width = 170, e.x = 8, e.y = 197, e;
        }, f.moregame_button_5_i = function() {
            var e = new eui.Button();
            return this.moregame_button_5 = e, e.alpha = 0, e.height = 210, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = l, e;
        }, f.moregame_6_i = function() {
            var e = new eui.Group();
            return this.moregame_6 = e, e.height = 210, e.width = 170, e.x = 14, e.y = 534,
                e.elementsContent = [this.moregame_icon_6_i(), this._Image9_i(), this.moregame_name_6_i(), this.moregame_des_6_i(), this.moregame_button_6_i()],
                e;
        }, f.moregame_icon_6_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_6 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, f._Image9_i = function() {
            var e = new eui.Image();
            return e.height = 210, e.scale9Grid = new egret.Rectangle(21, 163, 128, 28), e.source = "hyzw_neir03_png",
                e.width = 170, e;
        }, f.moregame_name_6_i = function() {
            var e = new eui.Label();
            return this.moregame_name_6 = e, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.size = 22, e.text = "Little Survivor", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 154, e.x = 8, e.y = 173, e;
        }, f.moregame_des_6_i = function() {
            var e = new eui.Label();
            return this.moregame_des_6 = e, e.anchorOffsetY = 9, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 18, e.size = 15, e.text = "9 million people crowded", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "top", e.width = 170, e.x = 8, e.y = 197, e;
        }, f.moregame_button_6_i = function() {
            var e = new eui.Button();
            return this.moregame_button_6 = e, e.alpha = 0, e.height = 210, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = h, e;
        }, f.moregame_7_i = function() {
            var e = new eui.Group();
            return this.moregame_7 = e, e.height = 210, e.width = 170, e.x = 194, e.y = 534,
                e.elementsContent = [this.moregame_icon_7_i(), this._Image10_i(), this.moregame_name_7_i(), this.moregame_des_7_i(), this.moregame_button_7_i()],
                e;
        }, f.moregame_icon_7_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_7 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, f._Image10_i = function() {
            var e = new eui.Image();
            return e.height = 210, e.scale9Grid = new egret.Rectangle(21, 163, 128, 28), e.source = "hyzw_neir01_png",
                e.width = 170, e;
        }, f.moregame_name_7_i = function() {
            var e = new eui.Label();
            return this.moregame_name_7 = e, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.size = 22, e.text = "Little Survivor", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 154, e.x = 8, e.y = 173, e;
        }, f.moregame_des_7_i = function() {
            var e = new eui.Label();
            return this.moregame_des_7 = e, e.anchorOffsetY = 9, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 18, e.size = 15, e.text = "9 million people crowded", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "top", e.width = 170, e.x = 8, e.y = 197, e;
        }, f.moregame_button_7_i = function() {
            var e = new eui.Button();
            return this.moregame_button_7 = e, e.alpha = 0, e.height = 210, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = c, e;
        }, f.moregame_8_i = function() {
            var e = new eui.Group();
            return this.moregame_8 = e, e.height = 210, e.width = 170, e.x = 374, e.y = 534,
                e.elementsContent = [this.moregame_icon_8_i(), this._Image11_i(), this.moregame_name_8_i(), this.moregame_des_8_i(), this.moregame_button_8_i()],
                e;
        }, f.moregame_icon_8_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_8 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, f._Image11_i = function() {
            var e = new eui.Image();
            return e.height = 210, e.scale9Grid = new egret.Rectangle(21, 163, 128, 28), e.source = "hyzw_neir02_png",
                e.width = 170, e;
        }, f.moregame_name_8_i = function() {
            var e = new eui.Label();
            return this.moregame_name_8 = e, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.size = 22, e.text = "Little Survivor", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 154, e.x = 8, e.y = 173, e;
        }, f.moregame_des_8_i = function() {
            var e = new eui.Label();
            return this.moregame_des_8 = e, e.anchorOffsetY = 9, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 18, e.size = 15, e.text = "9 million people crowded", e.textAlign = "left", e.touchEnabled = !1,
                e.verticalAlign = "top", e.width = 170, e.x = 8, e.y = 197, e;
        }, f.moregame_button_8_i = function() {
            var e = new eui.Button();
            return this.moregame_button_8 = e, e.alpha = 0, e.height = 210, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = g, e;
        }, f.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.anchorOffsetX = 90, e.anchorOffsetY = 37.5, e.height = 75,
                e.label = "", e.width = 180, e.x = 279, e.y = 845, e.skinName = m, e;
        }, f._Label1_i = function() {
            var e = new eui.Label();
            return e.anchorOffsetX = 45, e.anchorOffsetY = 15, e.bold = !0, e.fontFamily = "Microsoft YaHei",
                e.height = 30, e.stroke = 3, e.strokeColor = 31758, e.text = "Close", e.textAlign = "center",
                e.touchEnabled = !1, e.verticalAlign = "top", e.width = 90, e.x = 279, e.y = 844,
                e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyEndSkin.exml"] = window.MyEndSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "win_num", "win_group", "lose_num", "lose_group", "boss_img", "moregame_icon_0", "moregame_name_0", "moregame_button_0", "moregame_0", "moregame_icon_1", "moregame_name_1", "moregame_button_1", "moregame_1", "moregame_icon_2", "moregame_name_2", "moregame_button_2", "moregame_2", "moregame_icon_3", "moregame_name_3", "moregame_button_3", "moregame_3", "moregame_icon_4", "moregame_name_4", "moregame_button_4", "moregame_4", "moregame_icon_5", "moregame_name_5", "moregame_button_5", "moregame_5", "moregame_group", "diamond_num", "gold_num", "get_button", "get_type", "get_label", "buttonGuide", "buy_group", "free_label", "other_group", "boss_group", "all_group", "close_button", "close_group", "banner_icon_0", "banner_button_0", "banner_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.close_group_i(), this.banner_group_i()];
        }
        e(n, i);
        var r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            u = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            _ = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            s = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            l = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            h = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3), e.source = "ui_button_03_png",
                        e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            c = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "icon-144_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            g = n.prototype;
        return g.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = 1, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, g.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.height = 400, e.width = 640, e.x = 0, e.y = 200, e.elementsContent = [this.win_group_i(), this.lose_group_i(), this.boss_group_i()],
                e;
        }, g.win_group_i = function() {
            var e = new eui.Group();
            return this.win_group = e, e.height = 700, e.scaleX = 1, e.scaleY = 1, e.visible = !1,
                e.width = 640, e.x = 0, e.y = 0, e.elementsContent = [this._Rect1_i(), this._Image1_i(), this._Image2_i(), this.win_num_i(), this._Rect2_i(), this._Rect3_i(), this._Rect4_i(), this._Rect5_i()],
                e;
        }, g._Rect1_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetX = 320, e.fillAlpha = .5, e.height = 350, e.width = 640, e.x = 320,
                e.y = 165, e;
        }, g._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 238.5, e.anchorOffsetY = 0, e.scale9Grid = new egret.Rectangle(24, 25, 7, 6),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_win_png", e.x = 337, e.y = 67, e;
        }, g._Image2_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_01_png", e.x = 201.62,
                e.y = 409.52, e;
        }, g.win_num_i = function() {
            var e = new eui.Label();
            return this.win_num = e, e.size = 35, e.stroke = 3, e.strokeColor = 10311475, e.text = "999.9KK",
                e.textAlign = "left", e.width = 200, e.x = 283.66, e.y = 428.48, e;
        }, g._Rect2_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 60, e.width = 180, e.x = 0, e.y = 414, e;
        }, g._Rect3_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 60, e.width = 180, e.x = 460, e.y = 414, e;
        }, g._Rect4_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 20, e.width = 640, e.x = 0, e.y = 394, e;
        }, g._Rect5_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 20, e.width = 640, e.x = 0, e.y = 474, e;
        }, g.lose_group_i = function() {
            var e = new eui.Group();
            return this.lose_group = e, e.height = 700, e.scaleX = 1, e.scaleY = 1, e.visible = !1,
                e.width = 640, e.x = 0, e.y = 0, e.elementsContent = [this._Rect6_i(), this._Image3_i(), this._Image4_i(), this.lose_num_i(), this._Rect7_i(), this._Rect8_i(), this._Rect9_i(), this._Rect10_i()],
                e;
        }, g._Rect6_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetX = 320, e.fillAlpha = .5, e.height = 350, e.width = 640, e.x = 320,
                e.y = 165, e;
        }, g._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 306.5, e.anchorOffsetY = 0, e.scale9Grid = new egret.Rectangle(24, 25, 7, 6),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_lose_png", e.x = 338, e.y = 36, e;
        }, g._Image4_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_01_png", e.x = 201.62,
                e.y = 409.52, e;
        }, g.lose_num_i = function() {
            var e = new eui.Label();
            return this.lose_num = e, e.bold = !0, e.size = 35, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "999.9KK", e.textAlign = "left", e.width = 200, e.x = 283.66, e.y = 428.48,
                e;
        }, g._Rect7_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 60, e.width = 180, e.x = 0, e.y = 414, e;
        }, g._Rect8_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 60, e.width = 180, e.x = 460, e.y = 414, e;
        }, g._Rect9_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 20, e.width = 640, e.x = 0, e.y = 394, e;
        }, g._Rect10_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 20, e.width = 640, e.x = 0, e.y = 474, e;
        }, g.boss_group_i = function() {
            var e = new eui.Group();
            return this.boss_group = e, e.anchorOffsetY = 750, e.height = 750, e.scaleX = 1,
                e.scaleY = 1, e.width = 640, e.x = 0, e.y = 760, e.elementsContent = [this.boss_img_i(), this.moregame_group_i(), this.other_group_i()],
                e;
        }, g.boss_img_i = function() {
            var e = new eui.Image();
            return this.boss_img = e, e.anchorOffsetX = 283.5, e.anchorOffsetY = 0, e.scale9Grid = new egret.Rectangle(24, 25, 7, 6),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_bossWin_png", e.x = 320, e.y = 50, e;
        }, g.moregame_group_i = function() {
            var e = new eui.Group();
            return this.moregame_group = e, e.anchorOffsetX = 279, e.anchorOffsetY = 216, e.height = 432,
                e.visible = !1, e.width = 558, e.x = 320, e.y = 350, e.elementsContent = [this._Image5_i(), this.moregame_0_i(), this.moregame_1_i(), this.moregame_2_i(), this.moregame_3_i(), this.moregame_4_i(), this.moregame_5_i()],
                e;
        }, g._Image5_i = function() {
            var e = new eui.Image();
            return e.height = 452, e.scale9Grid = new egret.Rectangle(20, 20, 60, 60), e.source = "hyzw_kuang_png",
                e.width = 578, e.x = -10, e.y = -10, e;
        }, g.moregame_0_i = function() {
            var e = new eui.Group();
            return this.moregame_0 = e, e.height = 196, e.width = 170, e.x = 14, e.y = 14, e.elementsContent = [this.moregame_icon_0_i(), this._Image6_i(), this.moregame_name_0_i(), this.moregame_button_0_i()],
                e;
        }, g.moregame_icon_0_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_0 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image6_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir01_png", e;
        }, g.moregame_name_0_i = function() {
            var e = new eui.Label();
            return this.moregame_name_0 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_0_i = function() {
            var e = new eui.Button();
            return this.moregame_button_0 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = r, e;
        }, g.moregame_1_i = function() {
            var e = new eui.Group();
            return this.moregame_1 = e, e.height = 196, e.width = 170, e.x = 194, e.y = 14,
                e.elementsContent = [this.moregame_icon_1_i(), this._Image7_i(), this.moregame_name_1_i(), this.moregame_button_1_i()],
                e;
        }, g.moregame_icon_1_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_1 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image7_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir02_png", e;
        }, g.moregame_name_1_i = function() {
            var e = new eui.Label();
            return this.moregame_name_1 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_1_i = function() {
            var e = new eui.Button();
            return this.moregame_button_1 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = a, e;
        }, g.moregame_2_i = function() {
            var e = new eui.Group();
            return this.moregame_2 = e, e.height = 196, e.width = 170, e.x = 374, e.y = 14,
                e.elementsContent = [this.moregame_icon_2_i(), this._Image8_i(), this.moregame_name_2_i(), this.moregame_button_2_i()],
                e;
        }, g.moregame_icon_2_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_2 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image8_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir03_png", e;
        }, g.moregame_name_2_i = function() {
            var e = new eui.Label();
            return this.moregame_name_2 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_2_i = function() {
            var e = new eui.Button();
            return this.moregame_button_2 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = o, e;
        }, g.moregame_3_i = function() {
            var e = new eui.Group();
            return this.moregame_3 = e, e.height = 196, e.width = 170, e.x = 14, e.y = 220,
                e.elementsContent = [this.moregame_icon_3_i(), this._Image9_i(), this.moregame_name_3_i(), this.moregame_button_3_i()],
                e;
        }, g.moregame_icon_3_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_3 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image9_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir01_png", e;
        }, g.moregame_name_3_i = function() {
            var e = new eui.Label();
            return this.moregame_name_3 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_3_i = function() {
            var e = new eui.Button();
            return this.moregame_button_3 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = u, e;
        }, g.moregame_4_i = function() {
            var e = new eui.Group();
            return this.moregame_4 = e, e.height = 196, e.width = 170, e.x = 194, e.y = 220,
                e.elementsContent = [this.moregame_icon_4_i(), this._Image10_i(), this.moregame_name_4_i(), this.moregame_button_4_i()],
                e;
        }, g.moregame_icon_4_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_4 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image10_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir02_png", e;
        }, g.moregame_name_4_i = function() {
            var e = new eui.Label();
            return this.moregame_name_4 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_4_i = function() {
            var e = new eui.Button();
            return this.moregame_button_4 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = _, e;
        }, g.moregame_5_i = function() {
            var e = new eui.Group();
            return this.moregame_5 = e, e.height = 196, e.width = 170, e.x = 374, e.y = 220,
                e.elementsContent = [this.moregame_icon_5_i(), this._Image11_i(), this.moregame_name_5_i(), this.moregame_button_5_i()],
                e;
        }, g.moregame_icon_5_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_5 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image11_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir03_png", e;
        }, g.moregame_name_5_i = function() {
            var e = new eui.Label();
            return this.moregame_name_5 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_5_i = function() {
            var e = new eui.Button();
            return this.moregame_button_5 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = s, e;
        }, g.other_group_i = function() {
            var e = new eui.Group();
            return this.other_group = e, e.height = 300, e.scaleX = 1, e.scaleY = 1, e.width = 640,
                e.x = 0, e.y = 450, e.elementsContent = [this._Image12_i(), this.diamond_num_i(), this._Image13_i(), this.gold_num_i(), this._Rect11_i(), this._Rect12_i(), this._Rect13_i(), this._Rect14_i(), this._Rect15_i(), this.get_button_i(), this.buy_group_i(), this.free_label_i()],
                e;
        }, g._Image12_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_02_png", e.x = 65, e.y = 15.52,
                e;
        }, g.diamond_num_i = function() {
            var e = new eui.Label();
            return this.diamond_num = e, e.size = 35, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "999.9KK", e.textAlign = "left", e.width = 200, e.x = 152.66, e.y = 34.48,
                e;
        }, g._Image13_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_01_png", e.x = 345,
                e.y = 15.52, e;
        }, g.gold_num_i = function() {
            var e = new eui.Label();
            return this.gold_num = e, e.size = 35, e.stroke = 3, e.strokeColor = 10311475, e.text = "999.9KK",
                e.textAlign = "left", e.width = 200, e.x = 433.66, e.y = 34.48, e;
        }, g._Rect11_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 60, e.width = 60, e.x = 0, e.y = 20, e;
        }, g._Rect12_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 60, e.width = 60, e.x = 580, e.y = 20, e;
        }, g._Rect13_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetX = 20, e.fillAlpha = .4, e.height = 60, e.width = 40, e.x = 320,
                e.y = 20, e;
        }, g._Rect14_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 20, e.width = 640, e.x = 0, e.y = 0, e;
        }, g._Rect15_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 20, e.width = 640, e.x = 0, e.y = 80, e;
        }, g.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetX = 125, e.anchorOffsetY = 37.5, e.enabled = !0,
                e.label = "", e.width = 250, e.x = 320, e.y = 149, e.skinName = l, e;
        }, g.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetX = 96.5, e.anchorOffsetY = 23, e.touchChildren = !1,
                e.touchEnabled = !1, e.width = 193, e.x = 320, e.y = 149, e.elementsContent = [this.get_type_i(), this.get_label_i(), this.buttonGuide_i()],
                e;
        }, g.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_02_png", e.touchEnabled = !1, e.x = 26, e.y = 23,
                e;
        }, g.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "5 Times", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 150, e.x = 33.51, e.y = 23, e;
        }, g.buttonGuide_i = function() {
            var e = new eui.Image();
            return this.buttonGuide = e, e.rotation = 241.49, e.scaleX = -1, e.scaleY = 1, e.source = "ui_yindao2_png",
                e.x = 158, e.y = 20, e;
        }, g.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 100, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 3, e.strokeColor = 10311475, e.text = "Free", e.textAlign = "center",
                e.textColor = 16777215, e.touchEnabled = !1, e.width = 200, e.x = 320, e.y = 149,
                e;
        }, g.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label1_i(), this.close_button_i()],
                e;
        }, g._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "Get it directly>>", e.textAlign = "center",
                e.width = 167, e.x = 7.73, e.y = 3.68, e;
        }, g.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = h, e;
        }, g.banner_group_i = function() {
            var e = new eui.Group();
            return this.banner_group = e, e.anchorOffsetY = 200, e.height = 200, e.width = 640,
                e.y = 1136, e.elementsContent = [this.banner_icon_0_i(), this.banner_button_0_i()],
                e;
        }, g.banner_icon_0_i = function() {
            var e = new eui.Image();
            return this.banner_icon_0 = e, e.height = 200, e.source = "icon-144_png", e.width = 640,
                e.x = 0, e.y = 0, e;
        }, g.banner_button_0_i = function() {
            var e = new eui.Button();
            return this.banner_button_0 = e, e.alpha = 0, e.height = 200, e.label = "", e.width = 640,
                e.x = 0, e.y = 0, e.skinName = c, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyGameSkin.exml"] = window.MyGameSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["frame_group", "frame2_group", "tower_group", "monster_group", "bullet_group", "effect_group", "touch_group", "head_img", "top_di", "mission_num", "power_num", "gold_num", "diamond_num", "gold_img", "diamond_img", "rank_button", "help_button", "option_button", "gold_button", "diamond_button", "pushbox_icon", "pushbox_button", "push_red0", "pushbox_group", "pushbox_icon0", "pushbox_button0", "push_red1", "pushbox_group0", "moregameButton", "button_qd", "redDot", "top_group", "mogameEffectImg", "push_red", "push_button", "bottom_frame", "build_pbdi", "build_pb", "build_frame", "hammer_img", "build_num", "build_button", "system_ing_0", "system_button_0", "system_describe_0", "lock_img_0", "system_red_0", "system_group_0", "system_ing_1", "system_button_1", "system_describe_1", "system_red_1", "lock_img_1", "system_group_1", "system_ing_2", "system_button_2", "sell_img", "system_describe_2", "system_red_2", "lock_img_2", "system_group_2", "system_ing_3", "tower_ing", "system_button_3", "system_describe_3", "tower_level", "lock_img_3", "system_red_3", "system_group_3", "skill_add_0", "skill_img_0", "skill_di_0", "skill_button_0", "skill_add2_0", "skill_time_0", "skill_describe_0", "skill_group_0", "skill_add_1", "skill_img_1", "skill_di_1", "skill_button_1", "skill_add2_1", "skill_time_1", "skill_describe_1", "skill_group_1", "skill_add_2", "skill_img_2", "skill_di_2", "skill_button_2", "skill_add2_2", "skill_time_2", "skill_describe_2", "skill_group_2", "skill_add_3", "skill_img_3", "skill_di_3", "skill_button_3", "skill_add2_3", "skill_time_3", "skill_describe_3", "skill_group_3", "sell_tishi", "help3_img", "help3_button", "help3_group", "help2_img", "help2_button", "help2_group", "help8_img", "help8_button", "help8_group", "help4_img", "help4_button", "help4_group", "help6_img", "help6_button", "help6_group", "autoBuildButton", "autoBuildProgress", "autoBuildText", "autoBuild", "freeTowerEffect_bg", "freeTowerButton", "freeTowerEffect_front", "freeTowerTime", "freeTower", "bottom_group", "show_group", "kongtou_button", "box_button0", "boxAdd_group", "box_button", "box_group", "end_group", "erji_group", "sanji_group", "reward_group", "help1_img", "help1_group", "help_autoBuild_img", "help_autoBuild"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.frame_group_i(), this.frame2_group_i(), this.tower_group_i(), this.monster_group_i(), this.bullet_group_i(), this.effect_group_i(), this.touch_group_i(), this.top_group_i(), this.push_button_i(), this.bottom_group_i(), this.show_group_i(), this.kongtou_button_i(), this.box_group_i(), this.end_group_i(), this.erji_group_i(), this.sanji_group_i(), this.reward_group_i(), this.help1_group_i(), this.help_autoBuild_i()];
        }
        e(n, i);
        var r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_menu_02_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_menu_02_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_menu_02_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            u = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_top_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            _ = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_top_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            s = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_kuang_01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            l = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_kuang_01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            h = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_98_png")]), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_button_98_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            c = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_qd_01_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            g = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_bottom_05_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            m = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_menu_01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            f = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_menu_02_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            p = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_menu_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            w = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_top_02_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            b = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_skill_01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            d = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_skill_02_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            y = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_skill_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            v = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_skill_04_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            x = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_bottom_06_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            I = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_bottom_02_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            k = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_01_10_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            C = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_01_10_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            Y = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_01_10_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            O = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_dl_01_01_png")]), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_dl_01_01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            S = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["thumb"], this.elementsContent = [this.thumb_i()];
                }
                return e(i, t), i.prototype.thumb_i = function() {
                    var e = new eui.Image();
                    return this.thumb = e, e.source = "ui_dl_01_02_png", e;
                }, i;
            }(eui.Skin),
            X = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_box_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            L = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "box_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            D = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "box_01_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            G = n.prototype;
        return G.frame_group_i = function() {
            var e = new eui.Group();
            return this.frame_group = e, e.anchorOffsetX = 318, e.anchorOffsetY = 318, e.height = 636,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 636, e.x = 320, e.y = 555,
                e.elementsContent = [this._Image1_i()], e;
        }, G._Image1_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1, e.scaleY = 1, e.source = "bj_01_jpg", e.x = -2, e.y = -361,
                e;
        }, G.frame2_group_i = function() {
            var e = new eui.Group();
            return this.frame2_group = e, e.anchorOffsetX = 318, e.anchorOffsetY = 318, e.height = 636,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 636, e.x = 320, e.y = 555,
                e.elementsContent = [this._Image2_i()], e;
        }, G._Image2_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1, e.scaleY = 1, e.source = "bj_01_jpg", e.x = -2, e.y = -361,
                e;
        }, G.tower_group_i = function() {
            var e = new eui.Group();
            return this.tower_group = e, e.anchorOffsetX = 318, e.anchorOffsetY = 318, e.height = 636,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 636, e.x = 320, e.y = 555,
                e;
        }, G.monster_group_i = function() {
            var e = new eui.Group();
            return this.monster_group = e, e.anchorOffsetX = 318, e.anchorOffsetY = 318, e.height = 636,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 636, e.x = 320, e.y = 555,
                e;
        }, G.bullet_group_i = function() {
            var e = new eui.Group();
            return this.bullet_group = e, e.anchorOffsetX = 318, e.anchorOffsetY = 318, e.height = 636,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 636, e.x = 320, e.y = 555,
                e;
        }, G.effect_group_i = function() {
            var e = new eui.Group();
            return this.effect_group = e, e.anchorOffsetX = 318, e.anchorOffsetY = 318, e.height = 636,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 636, e.x = 320, e.y = 555,
                e;
        }, G.touch_group_i = function() {
            var e = new eui.Group();
            return this.touch_group = e, e.height = 1600, e.touchChildren = !0, e.touchEnabled = !0,
                e.touchThrough = !1, e.width = 640, e.x = 0, e.y = 0, e;
        }, G.top_group_i = function() {
            var e = new eui.Group();
            return this.top_group = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 250,
                e.touchChildren = !0, e.touchEnabled = !1, e.touchThrough = !0, e.width = 638, e.x = 0,
                e.y = -55, e.elementsContent = [this.head_img_i(), this.top_di_i(), this.mission_num_i(), this.power_num_i(), this.gold_num_i(), this.diamond_num_i(), this.gold_img_i(), this.diamond_img_i(), this.rank_button_i(), this.help_button_i(), this.option_button_i(), this._Image3_i(), this._Image4_i(), this.gold_button_i(), this.diamond_button_i(), this.pushbox_group_i(), this.pushbox_group0_i(), this.moregameButton_i(), this._Group1_i()],
                e;
        }, G.head_img_i = function() {
            var e = new eui.Image();
            return this.head_img = e, e.anchorOffsetX = 53, e.anchorOffsetY = 53, e.height = 106,
                e.source = "ui_top_02_png", e.touchEnabled = !1, e.width = 106, e.x = 89, e.y = 118,
                e;
        }, G.top_di_i = function() {
            var e = new eui.Image();
            return this.top_di = e, e.source = "ui_top_01_png", e.touchEnabled = !1, e;
        }, G.mission_num_i = function() {
            var e = new eui.Label();
            return this.mission_num = e, e.anchorOffsetX = 180, e.fontFamily = "Microsoft YaHei",
                e.height = 60, e.scaleX = .5, e.scaleY = .5, e.size = 60, e.stroke = 6, e.strokeColor = 8994566,
                e.text = "关卡 999-9", e.textAlign = "center", e.touchEnabled = !1, e.width = 360,
                e.x = 320, e.y = 117, e;
        }, G.power_num_i = function() {
            var e = new eui.Label();
            return this.power_num = e, e.anchorOffsetX = 100, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 38, e.stroke = 3, e.text = "999.9MM", e.textAlign = "center",
                e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200, e.x = 127, e.y = 187,
                e;
        }, G.gold_num_i = function() {
            var e = new eui.Label();
            return this.gold_num = e, e.anchorOffsetX = 110, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 45, e.text = "999.9MM", e.textAlign = "center",
                e.touchEnabled = !1, e.width = 220, e.x = 299, e.y = 68, e;
        }, G.diamond_num_i = function() {
            var e = new eui.Label();
            return this.diamond_num = e, e.anchorOffsetX = 110, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 45, e.text = "999.9MM", e.textAlign = "center",
                e.touchEnabled = !1, e.width = 220, e.x = 495, e.y = 68, e;
        }, G.gold_img_i = function() {
            var e = new eui.Image();
            return this.gold_img = e, e.anchorOffsetX = 30, e.anchorOffsetY = 26, e.source = "ui_money_01_png",
                e.x = 214, e.y = 77, e;
        }, G.diamond_img_i = function() {
            var e = new eui.Image();
            return this.diamond_img = e, e.anchorOffsetX = 33.5, e.anchorOffsetY = 26, e.source = "ui_money_02_png",
                e.x = 410, e.y = 77, e;
        }, G.rank_button_i = function() {
            var e = new eui.Button();
            return this.rank_button = e, e.alpha = 0, e.anchorOffsetX = 30, e.anchorOffsetY = 30,
                e.height = 60, e.label = "", e.width = 60, e.x = 197, e.y = 139, e.skinName = r,
                e;
        }, G.help_button_i = function() {
            var e = new eui.Button();
            return this.help_button = e, e.alpha = 0, e.anchorOffsetX = 30, e.anchorOffsetY = 30,
                e.height = 60, e.label = "", e.width = 60, e.x = 444, e.y = 137, e.skinName = a,
                e;
        }, G.option_button_i = function() {
            var e = new eui.Button();
            return this.option_button = e, e.alpha = 0, e.anchorOffsetX = 30, e.anchorOffsetY = 30,
                e.height = 60, e.label = "", e.width = 60, e.x = 135, e.y = 158, e.skinName = o,
                e;
        }, G._Image3_i = function() {
            var e = new eui.Image();
            return e.scale9Grid = new egret.Rectangle(2, 2, 16, 16), e.scaleX = 1, e.scaleY = 1,
                e.source = "ui_top_03_png", e.x = 224, e.y = 80, e;
        }, G._Image4_i = function() {
            var e = new eui.Image();
            return e.scale9Grid = new egret.Rectangle(2, 2, 16, 16), e.scaleX = 1, e.scaleY = 1,
                e.source = "ui_top_03_png", e.x = 420, e.y = 80, e;
        }, G.gold_button_i = function() {
            var e = new eui.Button();
            return this.gold_button = e, e.alpha = 0, e.anchorOffsetY = 2, e.height = 40, e.label = "",
                e.width = 180, e.x = 185, e.y = 60, e.skinName = u, e;
        }, G.diamond_button_i = function() {
            var e = new eui.Button();
            return this.diamond_button = e, e.alpha = 0, e.anchorOffsetY = 2, e.height = 40,
                e.label = "", e.width = 180, e.x = 380, e.y = 60, e.skinName = _, e;
        }, G.pushbox_group_i = function() {
            var e = new eui.Group();
            return this.pushbox_group = e, e.anchorOffsetX = 62, e.anchorOffsetY = 65.5, e.height = 131,
                e.scaleX = .9, e.scaleY = .9, e.width = 124, e.x = 580, e.y = 225, e.elementsContent = [this.pushbox_icon_i(), this._Image5_i(), this.pushbox_button_i(), this.push_red0_i()],
                e;
        }, G.pushbox_icon_i = function() {
            var e = new eui.Image();
            return this.pushbox_icon = e, e.anchorOffsetX = 52, e.anchorOffsetY = 52, e.height = 104,
                e.source = "icon-144_png", e.touchEnabled = !1, e.width = 104, e.x = 62, e.y = 65.5,
                e;
        }, G._Image5_i = function() {
            var e = new eui.Image();
            return e.height = 134, e.source = "hyzw_kuang_01_png", e.touchEnabled = !1, e.width = 124,
                e.x = -1, e.y = 2, e;
        }, G.pushbox_button_i = function() {
            var e = new eui.Button();
            return this.pushbox_button = e, e.alpha = 0, e.height = 131, e.label = "", e.width = 124,
                e.x = 0, e.y = 0, e.skinName = s, e;
        }, G.push_red0_i = function() {
            var e = new eui.Image();
            return this.push_red0 = e, e.scaleX = 1, e.scaleY = 1, e.source = "redDot_png",
                e.touchEnabled = !1, e.x = 84, e.y = 1.5, e;
        }, G.pushbox_group0_i = function() {
            var e = new eui.Group();
            return this.pushbox_group0 = e, e.anchorOffsetX = 62, e.anchorOffsetY = 65.5, e.height = 131,
                e.scaleX = .9, e.scaleY = .9, e.width = 124, e.x = 462, e.y = 225, e.elementsContent = [this.pushbox_icon0_i(), this._Image6_i(), this.pushbox_button0_i(), this.push_red1_i()],
                e;
        }, G.pushbox_icon0_i = function() {
            var e = new eui.Image();
            return this.pushbox_icon0 = e, e.anchorOffsetX = 52, e.anchorOffsetY = 52, e.height = 104,
                e.source = "icon-144_png", e.touchEnabled = !1, e.width = 104, e.x = 62, e.y = 65.5,
                e;
        }, G._Image6_i = function() {
            var e = new eui.Image();
            return e.height = 134, e.source = "hyzw_kuang_01_png", e.touchEnabled = !1, e.width = 124,
                e.x = -1, e.y = 2, e;
        }, G.pushbox_button0_i = function() {
            var e = new eui.Button();
            return this.pushbox_button0 = e, e.alpha = 0, e.height = 131, e.label = "", e.width = 124,
                e.x = 0, e.y = 0, e.skinName = l, e;
        }, G.push_red1_i = function() {
            var e = new eui.Image();
            return this.push_red1 = e, e.scaleX = 1, e.scaleY = 1, e.source = "redDot_png",
                e.touchEnabled = !1, e.x = 84, e.y = 1.5, e;
        }, G.moregameButton_i = function() {
            var e = new eui.Button();
            return this.moregameButton = e, e.label = "", e.scaleX = 1, e.scaleY = 1, e.x = 478,
                e.y = 107, e.skinName = h, e;
        }, G._Group1_i = function() {
            var e = new eui.Group();
            return e.height = 163, e.visible = !1, e.width = 163, e.x = -18, e.y = 249, e.elementsContent = [this.button_qd_i(), this.redDot_i()],
                e;
        }, G.button_qd_i = function() {
            var e = new eui.Button();
            return this.button_qd = e, e.height = 150, e.horizontalCenter = 0, e.label = "",
                e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 0, e.width = 130, e.skinName = c,
                e;
        }, G.redDot_i = function() {
            var e = new eui.Image();
            return this.redDot = e, e.scaleX = 1, e.scaleY = 1, e.source = "redDot_png", e.x = 102,
                e.y = 22, e;
        }, G.push_button_i = function() {
            var e = new eui.Group();
            return this.push_button = e, e.height = 174, e.width = 64, e.y = 481, e.elementsContent = [this._Image7_i(), this.mogameEffectImg_i(), this.push_red_i()],
                e;
        }, G._Image7_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_chouti_01_png", e;
        }, G.mogameEffectImg_i = function() {
            var e = new eui.Image();
            return this.mogameEffectImg = e, e.anchorOffsetY = 87, e.source = "hyzw_chouti_01_png",
                e.y = 87, e;
        }, G.push_red_i = function() {
            var e = new eui.Image();
            return this.push_red = e, e.scaleX = 1, e.scaleY = 1, e.source = "redDot_png", e.touchEnabled = !1,
                e.x = 17, e.y = 12, e;
        }, G.bottom_group_i = function() {
            var e = new eui.Group();
            return this.bottom_group = e, e.anchorOffsetY = 311, e.height = 311, e.touchChildren = !0,
                e.touchEnabled = !1, e.touchThrough = !0, e.width = 640, e.y = 1178, e.elementsContent = [this.bottom_frame_i(), this.build_pbdi_i(), this.build_pb_i(), this.build_frame_i(), this.hammer_img_i(), this.build_num_i(), this.build_button_i(), this.system_group_0_i(), this.system_group_1_i(), this.system_group_2_i(), this.system_group_3_i(), this.skill_group_0_i(), this.skill_group_1_i(), this.skill_group_2_i(), this.skill_group_3_i(), this.sell_tishi_i(), this.help3_group_i(), this.help2_group_i(), this.help8_group_i(), this.help4_group_i(), this.help6_group_i(), this.autoBuild_i(), this.freeTower_i()],
                e;
        }, G.bottom_frame_i = function() {
            var e = new eui.Image();
            return this.bottom_frame = e, e.source = "ui_bottom_01_png", e.touchEnabled = !1,
                e.x = 0, e.y = 0, e;
        }, G.build_pbdi_i = function() {
            var e = new eui.Image();
            return this.build_pbdi = e, e.anchorOffsetX = 103, e.anchorOffsetY = 104, e.source = "ui_bottom_03_png",
                e.touchEnabled = !1, e.x = 320, e.y = 202, e;
        }, G.build_pb_i = function() {
            var e = new eui.Image();
            return this.build_pb = e, e.anchorOffsetX = 58, e.anchorOffsetY = 0, e.height = 10,
                e.scale9Grid = new egret.Rectangle(13, 18, 84, 115), e.source = "ui_bottom_04_png",
                e.touchEnabled = !1, e.x = 320, e.y = 250, e;
        }, G.build_frame_i = function() {
            var e = new eui.Image();
            return this.build_frame = e, e.anchorOffsetX = 100, e.anchorOffsetY = 102, e.source = "ui_bottom_02_png",
                e.touchEnabled = !1, e.x = 320, e.y = 201.65, e;
        }, G.hammer_img_i = function() {
            var e = new eui.Image();
            return this.hammer_img = e, e.anchorOffsetX = 42, e.anchorOffsetY = 40, e.source = "ui_bottom_05_png",
                e.touchEnabled = !1, e.x = 320, e.y = 190, e;
        }, G.build_num_i = function() {
            var e = new eui.Label();
            return this.build_num = e, e.anchorOffsetX = 180, e.fontFamily = "Microsoft YaHei",
                e.height = 60, e.scaleX = .5, e.scaleY = .5, e.size = 60, e.stroke = 6, e.strokeColor = 8994566,
                e.text = "57/57", e.textAlign = "center", e.touchEnabled = !1, e.width = 360, e.x = 320,
                e.y = 227, e;
        }, G.build_button_i = function() {
            var e = new eui.Button();
            return this.build_button = e, e.alpha = 0, e.anchorOffsetX = 55, e.anchorOffsetY = 55,
                e.height = 110, e.label = "", e.width = 110, e.x = 320, e.y = 192, e.skinName = g,
                e;
        }, G.system_group_0_i = function() {
            var e = new eui.Group();
            return this.system_group_0 = e, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5,
                e.height = 85, e.touchChildren = !0, e.touchEnabled = !1, e.width = 85, e.x = 74,
                e.y = 224, e.elementsContent = [this.system_ing_0_i(), this.system_button_0_i(), this.system_describe_0_i(), this.lock_img_0_i(), this.system_red_0_i()],
                e;
        }, G.system_ing_0_i = function() {
            var e = new eui.Image();
            return this.system_ing_0 = e, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5, e.source = "ui_01_10_png",
                e.touchEnabled = !1, e.x = 42.5, e.y = 42.5, e;
        }, G.system_button_0_i = function() {
            var e = new eui.Button();
            return this.system_button_0 = e, e.anchorOffsetX = 38, e.anchorOffsetY = 38, e.label = "",
                e.x = 42.5, e.y = 40, e.skinName = m, e;
        }, G.system_describe_0_i = function() {
            var e = new eui.Label();
            return this.system_describe_0 = e, e.anchorOffsetX = 100, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 40, e.stroke = 3, e.text = "Task", e.textAlign = "center",
                e.touchEnabled = !1, e.width = 200, e.x = 42.5, e.y = 58, e;
        }, G.lock_img_0_i = function() {
            var e = new eui.Image();
            return this.lock_img_0 = e, e.anchorOffsetX = 35, e.anchorOffsetY = 36.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_func_lock_png", e.touchEnabled = !1, e.visible = !1,
                e.x = 42.5, e.y = 42.5, e;
        }, G.system_red_0_i = function() {
            var e = new eui.Image();
            return this.system_red_0 = e, e.height = 20, e.source = "redDot_png", e.touchEnabled = !1,
                e.visible = !1, e.width = 20, e.x = 65, e.y = 0, e;
        }, G.system_group_1_i = function() {
            var e = new eui.Group();
            return this.system_group_1 = e, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5,
                e.height = 85, e.touchChildren = !0, e.touchEnabled = !1, e.width = 85, e.x = 178,
                e.y = 226, e.elementsContent = [this.system_ing_1_i(), this.system_button_1_i(), this.system_describe_1_i(), this.system_red_1_i(), this.lock_img_1_i()],
                e;
        }, G.system_ing_1_i = function() {
            var e = new eui.Image();
            return this.system_ing_1 = e, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5, e.source = "ui_01_10_png",
                e.touchEnabled = !1, e.x = 42.5, e.y = 42.5, e;
        }, G.system_button_1_i = function() {
            var e = new eui.Button();
            return this.system_button_1 = e, e.anchorOffsetX = 38, e.anchorOffsetY = 38, e.label = "",
                e.x = 42.5, e.y = 40, e.skinName = f, e;
        }, G.system_describe_1_i = function() {
            var e = new eui.Label();
            return this.system_describe_1 = e, e.anchorOffsetX = 100, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 40, e.stroke = 3, e.text = "Strengthen", e.textAlign = "center",
                e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200, e.x = 42.5, e.y = 58,
                e;
        }, G.system_red_1_i = function() {
            var e = new eui.Image();
            return this.system_red_1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 20,
                e.source = "redDot_png", e.touchEnabled = !1, e.visible = !1, e.width = 20, e.x = 65,
                e.y = 0, e;
        }, G.lock_img_1_i = function() {
            var e = new eui.Image();
            return this.lock_img_1 = e, e.anchorOffsetX = 35, e.anchorOffsetY = 36.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_func_lock_png", e.touchEnabled = !1, e.x = 42.5, e.y = 42.5,
                e;
        }, G.system_group_2_i = function() {
            var e = new eui.Group();
            return this.system_group_2 = e, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5,
                e.height = 85, e.touchChildren = !0, e.touchEnabled = !1, e.width = 85, e.x = 462,
                e.y = 226, e.elementsContent = [this.system_ing_2_i(), this.system_button_2_i(), this.sell_img_i(), this.system_describe_2_i(), this.system_red_2_i(), this.lock_img_2_i()],
                e;
        }, G.system_ing_2_i = function() {
            var e = new eui.Image();
            return this.system_ing_2 = e, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5, e.source = "ui_01_10_png",
                e.touchEnabled = !1, e.x = 42.5, e.y = 42.5, e;
        }, G.system_button_2_i = function() {
            var e = new eui.Button();
            return this.system_button_2 = e, e.anchorOffsetX = 38, e.anchorOffsetY = 38, e.label = "",
                e.touchEnabled = !1, e.x = 44.5, e.y = 38, e.skinName = p, e;
        }, G.sell_img_i = function() {
            var e = new eui.Image();
            return this.sell_img = e, e.anchorOffsetX = 39, e.anchorOffsetY = 39, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_menu_04_png", e.touchEnabled = !1, e.x = 42.5, e.y = 42.5,
                e;
        }, G.system_describe_2_i = function() {
            var e = new eui.Label();
            return this.system_describe_2 = e, e.anchorOffsetX = 100, e.fontFamily = "Microsoft YaHei",
                e.height = 40, e.scaleX = .5, e.scaleY = .5, e.size = 40, e.stroke = 3, e.text = "Shop",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200,
                e.x = 42.5, e.y = 58, e;
        }, G.system_red_2_i = function() {
            var e = new eui.Image();
            return this.system_red_2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 20,
                e.source = "redDot_png", e.touchEnabled = !1, e.visible = !1, e.width = 20, e.x = 65,
                e.y = 0, e;
        }, G.lock_img_2_i = function() {
            var e = new eui.Image();
            return this.lock_img_2 = e, e.anchorOffsetX = 35, e.anchorOffsetY = 36.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_func_lock_png", e.touchEnabled = !1, e.x = 42.5, e.y = 42.5,
                e;
        }, G.system_group_3_i = function() {
            var e = new eui.Group();
            return this.system_group_3 = e, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5,
                e.height = 85, e.touchChildren = !0, e.touchEnabled = !1, e.width = 85, e.x = 567,
                e.y = 226, e.elementsContent = [this.system_ing_3_i(), this.tower_ing_i(), this.system_button_3_i(), this.system_describe_3_i(), this.tower_level_i(), this.lock_img_3_i(), this.system_red_3_i()],
                e;
        }, G.system_ing_3_i = function() {
            var e = new eui.Image();
            return this.system_ing_3 = e, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5, e.height = 85,
                e.source = "ui_01_10_png", e.touchEnabled = !1, e.width = 85, e.x = 42.5, e.y = 42.5,
                e;
        }, G.tower_ing_i = function() {
            var e = new eui.Image();
            return this.tower_ing = e, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5, e.height = 85,
                e.source = "tower_XP1_png", e.touchEnabled = !1, e.width = 85, e.x = 42.5, e.y = 50,
                e;
        }, G.system_button_3_i = function() {
            var e = new eui.Button();
            return this.system_button_3 = e, e.alpha = 0, e.anchorOffsetX = 42.5, e.anchorOffsetY = 42.5,
                e.height = 85, e.label = "", e.width = 85, e.x = 42.5, e.y = 42.5, e.skinName = w,
                e;
        }, G.system_describe_3_i = function() {
            var e = new eui.Label();
            return this.system_describe_3 = e, e.anchorOffsetX = 100, e.fontFamily = "Microsoft YaHei",
                e.height = 40, e.scaleX = .5, e.scaleY = .5, e.size = 35, e.stroke = 3, e.text = "173.7MM",
                e.textAlign = "center", e.textColor = 16711680, e.touchEnabled = !1, e.verticalAlign = "middle",
                e.width = 200, e.x = 42.5, e.y = 58, e;
        }, G.tower_level_i = function() {
            var e = new eui.Label();
            return this.tower_level = e, e.anchorOffsetX = 100, e.fontFamily = "Microsoft YaHei",
                e.height = 40, e.scaleX = .5, e.scaleY = .5, e.size = 35, e.stroke = 3, e.text = "LV.30",
                e.textAlign = "left", e.textColor = 16777215, e.touchEnabled = !1, e.verticalAlign = "middle",
                e.width = 200, e.x = 54.5, e.y = 3, e;
        }, G.lock_img_3_i = function() {
            var e = new eui.Image();
            return this.lock_img_3 = e, e.anchorOffsetX = 35, e.anchorOffsetY = 36.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_func_lock_png", e.touchEnabled = !1, e.visible = !1,
                e.x = 42.5, e.y = 42.5, e;
        }, G.system_red_3_i = function() {
            var e = new eui.Image();
            return this.system_red_3 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 20,
                e.source = "redDot_png", e.touchEnabled = !1, e.visible = !1, e.width = 20, e.x = 65,
                e.y = 0, e;
        }, G.skill_group_0_i = function() {
            var e = new eui.Group();
            return this.skill_group_0 = e, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.height = 96,
                e.touchChildren = !0, e.touchEnabled = !1, e.width = 96, e.x = 100, e.y = 105, e.elementsContent = [this.skill_add_0_i(), this.skill_img_0_i(), this.skill_di_0_i(), this.skill_button_0_i(), this.skill_add2_0_i(), this.skill_time_0_i(), this.skill_describe_0_i()],
                e;
        }, G.skill_add_0_i = function() {
            var e = new eui.Group();
            return this.skill_add_0 = e, e.anchorOffsetX = 89.5, e.anchorOffsetY = 104, e.height = 208,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 179, e.x = 48, e.y = 48, e;
        }, G.skill_img_0_i = function() {
            var e = new eui.Image();
            return this.skill_img_0 = e, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.source = "ui_bottom_06_png",
                e.touchEnabled = !1, e.x = 48, e.y = 48, e;
        }, G.skill_di_0_i = function() {
            var e = new eui.Image();
            return this.skill_di_0 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 13, e.source = "ui_bottom_07_png",
                e.touchEnabled = !1, e.x = 48, e.y = 96, e;
        }, G.skill_button_0_i = function() {
            var e = new eui.Button();
            return this.skill_button_0 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 42.5, e.label = "",
                e.scaleX = 1, e.scaleY = 1, e.x = 48, e.y = 48, e.skinName = b, e;
        }, G.skill_add2_0_i = function() {
            var e = new eui.Group();
            return this.skill_add2_0 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 43, e.height = 86,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 86, e.x = 48, e.y = 48, e;
        }, G.skill_time_0_i = function() {
            var e = new eui.Label();
            return this.skill_time_0 = e, e.anchorOffsetX = 100, e.anchorOffsetY = 22.5, e.fontFamily = "Microsoft YaHei",
                e.height = 45, e.scaleX = .5, e.scaleY = .5, e.size = 45, e.stroke = 3, e.text = "00:00",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200,
                e.x = 48, e.y = 48, e;
        }, G.skill_describe_0_i = function() {
            var e = new eui.Label();
            return this.skill_describe_0 = e, e.anchorOffsetX = 100, e.anchorOffsetY = 20, e.fontFamily = "Microsoft YaHei",
                e.height = 40, e.scaleX = .5, e.scaleY = .5, e.size = 30, e.stroke = 3, e.text = "Double speed",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200,
                e.x = 48, e.y = 96, e;
        }, G.skill_group_1_i = function() {
            var e = new eui.Group();
            return this.skill_group_1 = e, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.height = 96,
                e.touchChildren = !0, e.touchEnabled = !1, e.width = 96, e.x = 205, e.y = 85, e.elementsContent = [this.skill_add_1_i(), this.skill_img_1_i(), this.skill_di_1_i(), this.skill_button_1_i(), this.skill_add2_1_i(), this.skill_time_1_i(), this.skill_describe_1_i()],
                e;
        }, G.skill_add_1_i = function() {
            var e = new eui.Group();
            return this.skill_add_1 = e, e.anchorOffsetX = 89.5, e.anchorOffsetY = 104, e.height = 208,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 179, e.x = 48, e.y = 48, e;
        }, G.skill_img_1_i = function() {
            var e = new eui.Image();
            return this.skill_img_1 = e, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.source = "ui_bottom_06_png",
                e.touchEnabled = !1, e.x = 48, e.y = 48, e;
        }, G.skill_di_1_i = function() {
            var e = new eui.Image();
            return this.skill_di_1 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 13, e.source = "ui_bottom_07_png",
                e.touchEnabled = !1, e.x = 48, e.y = 96, e;
        }, G.skill_button_1_i = function() {
            var e = new eui.Button();
            return this.skill_button_1 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 42.5, e.label = "",
                e.scaleX = 1, e.scaleY = 1, e.x = 48, e.y = 48, e.skinName = d, e;
        }, G.skill_add2_1_i = function() {
            var e = new eui.Group();
            return this.skill_add2_1 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 43, e.height = 86,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 86, e.x = 48, e.y = 48, e;
        }, G.skill_time_1_i = function() {
            var e = new eui.Label();
            return this.skill_time_1 = e, e.anchorOffsetX = 100, e.anchorOffsetY = 22.5, e.fontFamily = "Microsoft YaHei",
                e.height = 45, e.scaleX = .5, e.scaleY = .5, e.size = 45, e.stroke = 3, e.text = "00:00",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200,
                e.x = 48, e.y = 48, e;
        }, G.skill_describe_1_i = function() {
            var e = new eui.Label();
            return this.skill_describe_1 = e, e.anchorOffsetX = 100, e.anchorOffsetY = 20, e.fontFamily = "Microsoft YaHei",
                e.height = 40, e.scaleX = .5, e.scaleY = .5, e.size = 40, e.stroke = 3, e.text = "Monster slow down",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200,
                e.x = 48, e.y = 96, e;
        }, G.skill_group_2_i = function() {
            var e = new eui.Group();
            return this.skill_group_2 = e, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.height = 96,
                e.touchChildren = !0, e.touchEnabled = !1, e.width = 96, e.x = 435, e.y = 85, e.elementsContent = [this.skill_add_2_i(), this.skill_img_2_i(), this.skill_di_2_i(), this.skill_button_2_i(), this.skill_add2_2_i(), this.skill_time_2_i(), this.skill_describe_2_i()],
                e;
        }, G.skill_add_2_i = function() {
            var e = new eui.Group();
            return this.skill_add_2 = e, e.anchorOffsetX = 89.5, e.anchorOffsetY = 104, e.height = 208,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 179, e.x = 48, e.y = 48, e;
        }, G.skill_img_2_i = function() {
            var e = new eui.Image();
            return this.skill_img_2 = e, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.source = "ui_bottom_06_png",
                e.touchEnabled = !1, e.x = 48, e.y = 48, e;
        }, G.skill_di_2_i = function() {
            var e = new eui.Image();
            return this.skill_di_2 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 13, e.source = "ui_bottom_07_png",
                e.touchEnabled = !1, e.x = 48, e.y = 96, e;
        }, G.skill_button_2_i = function() {
            var e = new eui.Button();
            return this.skill_button_2 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 42.5, e.label = "",
                e.scaleX = 1, e.scaleY = 1, e.x = 48, e.y = 48, e.skinName = y, e;
        }, G.skill_add2_2_i = function() {
            var e = new eui.Group();
            return this.skill_add2_2 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 43, e.height = 86,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 86, e.x = 48, e.y = 48, e;
        }, G.skill_time_2_i = function() {
            var e = new eui.Label();
            return this.skill_time_2 = e, e.anchorOffsetX = 100, e.anchorOffsetY = 22.5, e.fontFamily = "Microsoft YaHei",
                e.height = 45, e.scaleX = .5, e.scaleY = .5, e.size = 45, e.stroke = 3, e.text = "00:00",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200,
                e.x = 48, e.y = 48, e;
        }, G.skill_describe_2_i = function() {
            var e = new eui.Label();
            return this.skill_describe_2 = e, e.anchorOffsetX = 100, e.anchorOffsetY = 20, e.fontFamily = "Microsoft YaHei",
                e.height = 40, e.scaleX = .5, e.scaleY = .5, e.size = 40, e.stroke = 3, e.text = "Double",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200,
                e.x = 48, e.y = 96, e;
        }, G.skill_group_3_i = function() {
            var e = new eui.Group();
            return this.skill_group_3 = e, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.height = 96,
                e.touchChildren = !0, e.touchEnabled = !1, e.width = 96, e.x = 540, e.y = 105, e.elementsContent = [this.skill_add_3_i(), this.skill_img_3_i(), this.skill_di_3_i(), this.skill_button_3_i(), this.skill_add2_3_i(), this.skill_time_3_i(), this.skill_describe_3_i()],
                e;
        }, G.skill_add_3_i = function() {
            var e = new eui.Group();
            return this.skill_add_3 = e, e.anchorOffsetX = 89.5, e.anchorOffsetY = 104, e.height = 208,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 179, e.x = 48, e.y = 48, e;
        }, G.skill_img_3_i = function() {
            var e = new eui.Image();
            return this.skill_img_3 = e, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.source = "ui_bottom_06_png",
                e.touchEnabled = !1, e.x = 48, e.y = 48, e;
        }, G.skill_di_3_i = function() {
            var e = new eui.Image();
            return this.skill_di_3 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 13, e.source = "ui_bottom_07_png",
                e.touchEnabled = !1, e.x = 48, e.y = 96, e;
        }, G.skill_button_3_i = function() {
            var e = new eui.Button();
            return this.skill_button_3 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 42.5, e.label = "",
                e.scaleX = 1, e.scaleY = 1, e.x = 48, e.y = 48, e.skinName = v, e;
        }, G.skill_add2_3_i = function() {
            var e = new eui.Group();
            return this.skill_add2_3 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 43, e.height = 86,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 86, e.x = 48, e.y = 48, e;
        }, G.skill_time_3_i = function() {
            var e = new eui.Label();
            return this.skill_time_3 = e, e.anchorOffsetX = 100, e.anchorOffsetY = 22.5, e.fontFamily = "Microsoft YaHei",
                e.height = 45, e.scaleX = .5, e.scaleY = .5, e.size = 45, e.stroke = 3, e.text = "00:00",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200,
                e.x = 48, e.y = 48, e;
        }, G.skill_describe_3_i = function() {
            var e = new eui.Label();
            return this.skill_describe_3 = e, e.anchorOffsetX = 100, e.anchorOffsetY = 20, e.fontFamily = "Microsoft YaHei",
                e.height = 40, e.scaleX = .5, e.scaleY = .5, e.size = 40, e.stroke = 3, e.text = "Full screen attack",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 200,
                e.x = 48, e.y = 96, e;
        }, G.sell_tishi_i = function() {
            var e = new eui.Image();
            return this.sell_tishi = e, e.scaleX = 1, e.scaleY = 1, e.source = "ui_reclaim_tips_png",
                e.touchEnabled = !1, e.x = 326, e.y = 118, e;
        }, G.help3_group_i = function() {
            var e = new eui.Group();
            return this.help3_group = e, e.height = 311, e.scaleX = 1, e.scaleY = 1, e.touchChildren = !0,
                e.touchEnabled = !0, e.touchThrough = !1, e.visible = !1, e.width = 640, e.x = 0,
                e.elementsContent = [this._Rect1_i(), this._Rect2_i(), this._Rect3_i(), this._Rect4_i(), this._Rect5_i(), this._Rect6_i(), this._Label1_i(), this.help3_img_i(), this.help3_button_i()],
                e;
        }, G._Rect1_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1110, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.x = 0, e.y = -1070, e;
        }, G._Rect2_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 150, e.scaleX = 1, e.scaleY = 1,
                e.width = 20, e.y = 40, e;
        }, G._Rect3_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 150, e.scaleX = 1, e.scaleY = 1,
                e.width = 470, e.x = 170, e.y = 40, e;
        }, G._Rect4_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 800, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.y = 190, e;
        }, G._Rect5_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillAlpha = .5, e.fillColor = 0,
                e.height = 80, e.scaleX = 1, e.scaleY = 1, e.width = 320, e.x = 206, e.y = -99,
                e;
        }, G._Rect6_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillColor = 16777215, e.height = 80,
                e.scaleX = 1, e.scaleY = 1, e.strokeWeight = 2, e.width = 320, e.x = 200, e.y = -105,
                e;
        }, G._Label1_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 20,
                e.text = "Use skills to help you clear all obstacles, monsters are called miserable.", e.textColor = 0, e.width = 300, e.x = 210, e.y = -94,
                e;
        }, G.help3_img_i = function() {
            var e = new eui.Image();
            return this.help3_img = e, e.anchorOffsetX = 50.5, e.anchorOffsetY = 42, e.rotation = 45,
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_yindao1_png", e.x = 165, e.y = 15, e;
        }, G.help3_button_i = function() {
            var e = new eui.Button();
            return this.help3_button = e, e.alpha = 0, e.label = "", e.x = 51, e.y = 54, e.skinName = x,
                e;
        }, G.help2_group_i = function() {
            var e = new eui.Group();
            return this.help2_group = e, e.height = 311, e.scaleX = 1, e.scaleY = 1, e.touchChildren = !0,
                e.touchEnabled = !0, e.touchThrough = !1, e.visible = !1, e.width = 640, e.x = 0,
                e.y = 0, e.elementsContent = [this._Rect7_i(), this._Rect8_i(), this._Rect9_i(), this._Rect10_i(), this._Rect11_i(), this._Label2_i(), this.help2_img_i(), this.help2_button_i()],
                e;
        }, G._Rect7_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1150, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.x = 0, e.y = -1070, e;
        }, G._Rect8_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 950, e.scaleX = 1, e.scaleY = 1,
                e.width = 200, e.x = 0, e.y = 80, e;
        }, G._Rect9_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 950, e.scaleX = 1, e.scaleY = 1,
                e.width = 200, e.x = 440, e.y = 80, e;
        }, G._Rect10_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillAlpha = .5, e.fillColor = 0,
                e.height = 80, e.scaleX = 1, e.scaleY = 1, e.width = 320, e.x = 164, e.y = -89,
                e;
        }, G._Rect11_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillColor = 16777215, e.height = 80,
                e.scaleX = 1, e.scaleY = 1, e.strokeWeight = 2, e.width = 320, e.x = 158, e.y = -95,
                e;
        }, G._Label2_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 25,
                e.text = "Click the build button to add a turret to fight for you.", e.textColor = 0, e.width = 300, e.x = 168, e.y = -84,
                e;
        }, G.help2_img_i = function() {
            var e = new eui.Image();
            return this.help2_img = e, e.anchorOffsetX = 50.5, e.anchorOffsetY = 42, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_yindao1_png", e.x = 320, e.y = 30, e;
        }, G.help2_button_i = function() {
            var e = new eui.Button();
            return this.help2_button = e, e.alpha = 0, e.label = "", e.x = 220, e.y = 101, e.skinName = I,
                e;
        }, G.help8_group_i = function() {
            var e = new eui.Group();
            return this.help8_group = e, e.height = 311, e.scaleX = 1, e.scaleY = 1, e.touchChildren = !0,
                e.touchEnabled = !0, e.touchThrough = !1, e.visible = !1, e.width = 640, e.x = 0,
                e.y = 0, e.elementsContent = [this._Rect12_i(), this._Rect13_i(), this._Rect14_i(), this._Rect15_i(), this._Label3_i(), this.help8_img_i(), this.help8_button_i()],
                e;
        }, G._Rect12_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1210, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.x = 0, e.y = -1070, e;
        }, G._Rect13_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1010, e.scaleX = 1, e.scaleY = 1,
                e.width = 505, e.x = 0, e.y = 140, e;
        }, G._Rect14_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillAlpha = .5, e.fillColor = 0,
                e.height = 100, e.scaleX = 1, e.scaleY = 1, e.width = 320, e.x = 164, e.y = 20,
                e;
        }, G._Rect15_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillColor = 16777215, e.height = 100,
                e.scaleX = 1, e.scaleY = 1, e.strokeWeight = 2, e.width = 320, e.x = 158, e.y = 14,
                e;
        }, G._Label3_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 20,
                e.text = "Quickly purchase the most cost-effective battery for you accurately, saving you a lot of time", e.textColor = 0, e.width = 300, e.x = 168,
                e.y = 28, e;
        }, G.help8_img_i = function() {
            var e = new eui.Image();
            return this.help8_img = e, e.anchorOffsetX = 50.5, e.anchorOffsetY = 42, e.rotation = -45,
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_yindao1_png", e.x = 505, e.y = 145, e;
        }, G.help8_button_i = function() {
            var e = new eui.Button();
            return this.help8_button = e, e.alpha = 0, e.label = "", e.x = 524, e.y = 183, e.skinName = k,
                e;
        }, G.help4_group_i = function() {
            var e = new eui.Group();
            return this.help4_group = e, e.height = 311, e.scaleX = 1, e.scaleY = 1, e.touchChildren = !0,
                e.touchEnabled = !0, e.touchThrough = !1, e.visible = !1, e.width = 640, e.x = 0,
                e.y = 0, e.elementsContent = [this._Rect16_i(), this._Rect17_i(), this._Rect18_i(), this.help4_img_i(), this.help4_button_i()],
                e;
        }, G._Rect16_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1210, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.x = 0, e.y = -1070, e;
        }, G._Rect17_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1010, e.scaleX = 1, e.scaleY = 1,
                e.width = 100, e.y = 140, e;
        }, G._Rect18_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1010, e.scaleX = 1, e.scaleY = 1,
                e.width = 390, e.x = 250, e.y = 140, e;
        }, G.help4_img_i = function() {
            var e = new eui.Image();
            return this.help4_img = e, e.anchorOffsetX = 50.5, e.anchorOffsetY = 42, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_yindao1_png", e.x = 181, e.y = 120, e;
        }, G.help4_button_i = function() {
            var e = new eui.Button();
            return this.help4_button = e, e.alpha = 0, e.label = "", e.x = 134, e.y = 182, e.skinName = C,
                e;
        }, G.help6_group_i = function() {
            var e = new eui.Group();
            return this.help6_group = e, e.height = 311, e.scaleX = 1, e.scaleY = 1, e.touchChildren = !0,
                e.touchEnabled = !0, e.touchThrough = !1, e.visible = !1, e.width = 640, e.x = 0,
                e.y = 0, e.elementsContent = [this._Rect19_i(), this._Rect20_i(), this._Rect21_i(), this.help6_img_i(), this.help6_button_i()],
                e;
        }, G._Rect19_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1210, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.x = 0, e.y = -1070, e;
        }, G._Rect20_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1010, e.scaleX = 1, e.scaleY = 1,
                e.width = 385, e.y = 140, e;
        }, G._Rect21_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1010, e.scaleX = 1, e.scaleY = 1,
                e.width = 105, e.x = 535, e.y = 140, e;
        }, G.help6_img_i = function() {
            var e = new eui.Image();
            return this.help6_img = e, e.anchorOffsetX = 50.5, e.anchorOffsetY = 42, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_yindao1_png", e.x = 463, e.y = 120, e;
        }, G.help6_button_i = function() {
            var e = new eui.Button();
            return this.help6_button = e, e.alpha = 0, e.label = "", e.x = 419, e.y = 182, e.skinName = Y,
                e;
        }, G.autoBuild_i = function() {
            var e = new eui.Group();
            return this.autoBuild = e, e.scaleX = 1, e.scaleY = 1, e.x = 264, e.y = 97, e.elementsContent = [this.autoBuildButton_i(), this.autoBuildProgress_i(), this.autoBuildText_i()],
                e;
        }, G.autoBuildButton_i = function() {
            var e = new eui.Button();
            return this.autoBuildButton = e, e.label = "", e.skinName = O, e;
        }, G.autoBuildProgress_i = function() {
            var e = new eui.ProgressBar();
            return this.autoBuildProgress = e, e.touchEnabled = !1, e.value = 100, e.x = 6.5,
                e.y = 35, e.skinName = S, e;
        }, G.autoBuildText_i = function() {
            var e = new eui.Label();
            return this.autoBuildText = e, e.bold = !0, e.size = 16, e.stroke = 2, e.strokeColor = 10361884,
                e.text = "15/15", e.textAlign = "right", e.textColor = 16777215, e.touchEnabled = !1,
                e.verticalAlign = "middle", e.width = 80, e.x = 23, e.y = 34, e;
        }, G.freeTower_i = function() {
            var e = new eui.Group();
            return this.freeTower = e, e.x = -6.47, e.y = -112.32, e.elementsContent = [this.freeTowerEffect_bg_i(), this.freeTowerButton_i(), this.freeTowerEffect_front_i(), this.freeTowerTime_i()],
                e;
        }, G.freeTowerEffect_bg_i = function() {
            var e = new eui.Image();
            return this.freeTowerEffect_bg = e, e.alpha = .6, e.anchorOffsetX = 64, e.anchorOffsetY = 62,
                e.blendMode = "add", e.source = "ui_dl_02_03_png", e.touchEnabled = !1, e.x = 70.65,
                e.y = 67.32, e;
        }, G.freeTowerButton_i = function() {
            var e = new eui.Image();
            return this.freeTowerButton = e, e.source = "ui_dl_02_01_png", e.touchEnabled = !0,
                e;
        }, G.freeTowerEffect_front_i = function() {
            var e = new eui.Image();
            return this.freeTowerEffect_front = e, e.anchorOffsetX = 38, e.anchorOffsetY = 37.5,
                e.blendMode = "add", e.source = "ui_dl_02_02_png", e.touchEnabled = !1, e.x = 80.47,
                e.y = 42.5, e;
        }, G.freeTowerTime_i = function() {
            var e = new eui.Label();
            return this.freeTowerTime = e, e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 24,
                e.stroke = 2, e.text = "02:00", e.touchEnabled = !1, e.x = 35.8, e.y = 136.33, e;
        }, G.show_group_i = function() {
            var e = new eui.Group();
            return this.show_group = e, e.anchorOffsetX = 318, e.anchorOffsetY = 318, e.height = 636,
                e.touchChildren = !1, e.touchEnabled = !1, e.touchThrough = !0, e.width = 636, e.x = 320,
                e.y = 555, e;
        }, G.kongtou_button_i = function() {
            var e = new eui.Button();
            return this.kongtou_button = e, e.anchorOffsetX = 94.5, e.anchorOffsetY = 265, e.label = "",
                e.scaleX = 1, e.scaleY = 1, e.x = -200, e.y = -200, e.skinName = X, e;
        }, G.box_group_i = function() {
            var e = new eui.Group();
            return this.box_group = e, e.anchorOffsetX = 126.5, e.anchorOffsetY = 126.5, e.height = 253,
                e.scaleX = 1, e.scaleY = 1, e.touchChildren = !0, e.touchEnabled = !1, e.touchThrough = !0,
                e.width = 253, e.x = -200, e.y = -200, e.elementsContent = [this.boxAdd_group_i(), this.box_button_i()],
                e;
        }, G.boxAdd_group_i = function() {
            var e = new eui.Group();
            return this.boxAdd_group = e, e.height = 253, e.scaleX = 1, e.scaleY = 1, e.touchChildren = !0,
                e.touchEnabled = !1, e.touchThrough = !0, e.width = 253, e.x = 0, e.y = 0, e.elementsContent = [this.box_button0_i()],
                e;
        }, G.box_button0_i = function() {
            var e = new eui.Button();
            return this.box_button0 = e, e.alpha = 0, e.label = "", e.x = 0, e.y = 0, e.skinName = L,
                e;
        }, G.box_button_i = function() {
            var e = new eui.Button();
            return this.box_button = e, e.alpha = 0, e.label = "", e.x = 0, e.y = 0, e.skinName = D,
                e;
        }, G.end_group_i = function() {
            var e = new eui.Group();
            return this.end_group = e, e.height = 1136, e.touchChildren = !1, e.touchEnabled = !1,
                e.touchThrough = !0, e.width = 640, e.x = 0, e.y = 0, e;
        }, G.erji_group_i = function() {
            var e = new eui.Group();
            return this.erji_group = e, e.height = 1136, e.touchChildren = !0, e.touchEnabled = !0,
                e.touchThrough = !1, e.width = 640, e.x = 0, e.y = 0, e;
        }, G.sanji_group_i = function() {
            var e = new eui.Group();
            return this.sanji_group = e, e.height = 1136, e.touchChildren = !0, e.touchEnabled = !0,
                e.touchThrough = !1, e.width = 640, e.x = 0, e.y = 0, e;
        }, G.reward_group_i = function() {
            var e = new eui.Group();
            return this.reward_group = e, e.anchorOffsetX = 318, e.anchorOffsetY = 318, e.height = 636,
                e.touchChildren = !1, e.touchEnabled = !1, e.touchThrough = !0, e.width = 636, e.x = 320,
                e.y = 555, e;
        }, G.help1_group_i = function() {
            var e = new eui.Group();
            return this.help1_group = e, e.anchorOffsetX = 318, e.anchorOffsetY = 318, e.height = 636,
                e.touchChildren = !1, e.touchEnabled = !1, e.touchThrough = !0, e.visible = !1,
                e.width = 636, e.x = 320, e.y = 555, e.elementsContent = [this._Rect22_i(), this._Rect23_i(), this._Rect24_i(), this._Rect25_i(), this._Rect26_i(), this._Rect27_i(), this._Label4_i(), this.help1_img_i()],
                e;
        }, G._Rect22_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 500, e.fillAlpha = .8, e.height = 700, e.width = 640, e.x = -2,
                e.y = 10, e;
        }, G._Rect23_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .8, e.height = 220, e.width = 106, e.x = -2, e.y = 210, e;
        }, G._Rect24_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetX = 106, e.fillAlpha = .8, e.height = 220, e.width = 106, e.x = 640,
                e.y = 210, e;
        }, G._Rect25_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 700, e.width = 640, e.x = -2,
                e.y = 430, e;
        }, G._Rect26_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillAlpha = .5, e.fillColor = 0,
                e.height = 120, e.width = 320, e.x = 164, e.y = 52, e;
        }, G._Rect27_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillColor = 16777215, e.height = 120,
                e.strokeWeight = 2, e.width = 320, e.x = 158, e.y = 46, e;
        }, G._Label4_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.size = 20, e.text = "“Welcome to come to Tower Defense” The turret is ready for you, drag the turrets of the same level to coincide to increase the level, hurry up",
                e.textColor = 0, e.width = 300, e.x = 168, e.y = 54, e;
        }, G.help1_img_i = function() {
            var e = new eui.Image();
            return this.help1_img = e, e.source = "ui_yindao2_png", e.x = 227, e.y = 237, e;
        }, G.help_autoBuild_i = function() {
            var e = new eui.Group();
            return this.help_autoBuild = e, e.elementsContent = [this._Rect28_i(), this.help_autoBuild_img_i()],
                e;
        }, G._Rect28_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .8, e.height = 1536, e.width = 640, e.y = -200, e;
        }, G.help_autoBuild_img_i = function() {
            var e = new eui.Group();
            return this.help_autoBuild_img = e, e.x = 264, e.y = 964, e.elementsContent = [this._Image8_i(), this._Label5_i(), this._Rect29_i(), this._Rect30_i(), this._Label6_i(), this._Image9_i(), this._Label7_i()],
                e;
        }, G._Image8_i = function() {
            var e = new eui.Image();
            return e.source = "ui_dl_01_01_png", e;
        }, G._Label5_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 16, e.stroke = 2, e.strokeColor = 10361884, e.text = "15/15",
                e.textAlign = "right", e.textColor = 16777215, e.touchEnabled = !1, e.verticalAlign = "middle",
                e.width = 80, e.x = 23, e.y = 34, e;
        }, G._Rect29_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillAlpha = .5, e.fillColor = 0,
                e.height = 90, e.scaleX = 1, e.scaleY = 1, e.width = 280, e.x = -83.99999999999997,
                e.y = -158.44, e;
        }, G._Rect30_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillColor = 16777215, e.height = 90,
                e.scaleX = 1, e.scaleY = 1, e.strokeWeight = 2, e.width = 280, e.x = -83.99999999999997,
                e.y = -158.44, e;
        }, G._Label6_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 25,
                e.text = "The automatic synthesis function is unlocked! Click here to quickly synthesize the turret!", e.textColor = 0, e.width = 250, e.x = -73,
                e.y = -150.94, e;
        }, G._Image9_i = function() {
            var e = new eui.Image();
            return e.source = "ui_yindao1_png", e.x = 7.6, e.y = -72.75, e;
        }, G._Label7_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 20,
                e.text = "Click the screen to continue", e.textColor = 16777215, e.x = -4, e.y = 106, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyGetTowerSkin.exml"] = window.MyGetTowerSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "tower_base", "tower_cannon", "tower_level", "get_num", "get_time", "get_button", "get_type", "get_label", "buy_group", "buttonGuide", "all_group", "close_button", "close_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.close_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_button_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = n.prototype;
        return o.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, o.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 785, e.height = 785, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this.tower_base_i(), this.tower_cannon_i(), this.tower_level_i(), this._Image5_i(), this.get_num_i(), this.get_time_i(), this.get_button_i(), this.buy_group_i(), this.buttonGuide_i()],
                e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.height = 700, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 600, e.x = 0, e.y = 0,
                e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69.39, e.scale9Grid = new egret.Rectangle(22, 29, 3, 4),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_12_png", e.width = 369, e.x = 114,
                e.y = 12.3, e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 50, e.stroke = 2, e.text = "Get the battery immediately",
                e.x = 145.5, e.y = 23.52, e;
        }, o._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 560, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 85, e;
        }, o._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 250, e.scale9Grid = new egret.Rectangle(31, 31, 3, 3),
                e.source = "ui_01_13_png", e.width = 250, e.x = 175, e.y = 170, e;
        }, o.tower_base_i = function() {
            var e = new eui.Image();
            return this.tower_base = e, e.scaleX = 2, e.scaleY = 2, e.source = "tower_JPD_png",
                e.x = 177.23, e.y = 172, e;
        }, o.tower_cannon_i = function() {
            var e = new eui.Image();
            return this.tower_cannon = e, e.scaleX = 2, e.scaleY = 2, e.source = "tower_JP1_png",
                e.x = 177.23, e.y = 172, e;
        }, o.tower_level_i = function() {
            var e = new eui.Label();
            return this.tower_level = e, e.bold = !0, e.size = 40, e.stroke = 3, e.text = "Lv.40",
                e.textAlign = "center", e.textColor = 16777215, e.width = 200, e.x = 200, e.y = 365,
                e;
        }, o._Image5_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(34, 31, 5, 3), e.source = "ui_01_15_png",
                e.width = 420, e.x = 88.94, e.y = 455.5, e;
        }, o.get_num_i = function() {
            var e = new eui.Label();
            return this.get_num = e, e.bold = !0, e.size = 35, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "领取Lv40迷你小炮", e.textAlign = "center", e.width = 400, e.x = 100.44, e.y = 472,
                e;
        }, o.get_time_i = function() {
            var e = new eui.Label();
            return this.get_time = e, e.bold = !0, e.text = "Receive the remaining 5 times today", e.textColor = 8553090,
                e.x = 223.62, e.y = 563, e;
        }, o.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetY = 37.5, e.enabled = !0, e.label = "",
                e.width = 250, e.x = 175.65, e.y = 746, e.skinName = r, e;
        }, o.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetY = 23, e.touchChildren = !1, e.touchEnabled = !1,
                e.x = 210.56, e.y = 746, e.elementsContent = [this.get_type_i(), this.get_label_i()],
                e;
        }, o.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_02_png", e.touchEnabled = !1, e.x = 26, e.y = 23,
                e;
        }, o.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "Battery Supply", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 150, e.x = 42.51, e.y = 23, e;
        }, o.buttonGuide_i = function() {
            var e = new eui.Image();
            return this.buttonGuide = e, e.rotation = 241.49, e.scaleX = -1, e.scaleY = 1, e.source = "ui_yindao2_png",
                e.x = 430.16, e.y = 740.19, e;
        }, o.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label2_i(), this.close_button_i()],
                e;
        }, o._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "No, skip cruelly>>", e.x = 7.73,
                e.y = 3.68, e;
        }, o.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = a, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyGoldNotEnoughSkin.exml"] = window.MyGoldNotEnoughSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "get_num", "get_time", "get_button", "free_label", "get_type", "get_label", "buy_group", "buttonGuide", "all_group", "close_button", "close_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.close_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_button_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = n.prototype;
        return o.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, o.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 785, e.height = 785, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.get_num_i(), this.get_time_i(), this.get_button_i(), this.free_label_i(), this.buy_group_i(), this.buttonGuide_i()],
                e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.height = 700, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 600, e.x = 0, e.y = 0,
                e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69.39, e.scale9Grid = new egret.Rectangle(22, 29, 3, 4),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_12_png", e.width = 369, e.x = 114,
                e.y = 12.3, e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 50, e.stroke = 2, e.text = "Claim coins",
                e.x = 145.5, e.y = 23.52, e;
        }, o._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 560, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 85, e;
        }, o._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 250, e.scale9Grid = new egret.Rectangle(31, 31, 3, 3),
                e.source = "ui_01_13_png", e.width = 250, e.x = 175, e.y = 170, e;
        }, o._Image5_i = function() {
            var e = new eui.Image();
            return e.source = "ui_box_01_png", e.x = 157.66, e.y = 136, e;
        }, o._Image6_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(34, 31, 5, 3), e.source = "ui_01_15_png",
                e.width = 272, e.x = 166.12, e.y = 455, e;
        }, o._Image7_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_01_png", e.x = 184.62,
                e.y = 453.52, e;
        }, o.get_num_i = function() {
            var e = new eui.Label();
            return this.get_num = e, e.bold = !0, e.size = 35, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "+100K", e.textAlign = "center", e.width = 200, e.x = 235.66, e.y = 472.48,
                e;
        }, o.get_time_i = function() {
            var e = new eui.Label();
            return this.get_time = e, e.bold = !0, e.text = "5 times left today", e.textColor = 8553090,
                e.x = 223.62, e.y = 563, e;
        }, o.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetY = 37.5, e.enabled = !0, e.label = "",
                e.width = 250, e.x = 175.65, e.y = 746, e.skinName = r, e;
        }, o.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 75, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 3, e.strokeColor = 10311475, e.text = "Free", e.textAlign = "center",
                e.textColor = 16777215, e.touchEnabled = !1, e.width = 150, e.x = 300, e.y = 746,
                e;
        }, o.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetY = 23, e.touchChildren = !1, e.touchEnabled = !1,
                e.x = 210.56, e.y = 746, e.elementsContent = [this.get_type_i(), this.get_label_i()],
                e;
        }, o.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_02_png", e.touchEnabled = !1, e.x = 26, e.y = 23,
                e;
        }, o.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "Supply gold", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 150, e.x = 42.51, e.y = 23, e;
        }, o.buttonGuide_i = function() {
            var e = new eui.Image();
            return this.buttonGuide = e, e.rotation = 241.49, e.scaleX = -1, e.scaleY = 1, e.source = "ui_yindao2_png",
                e.x = 430.16, e.y = 740.19, e;
        }, o.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label2_i(), this.close_button_i()],
                e;
        }, o._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "No, skip cruelly>>", e.x = 7.73,
                e.y = 3.68, e;
        }, o.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = a, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyHammerNotEnoughSkin.exml"] = window.MyHammerNotEnoughSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "get_time", "get_button", "free_label", "get_type", "get_label", "buy_group", "buttonGuide", "all_group", "close_button", "close_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.close_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_button_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = n.prototype;
        return o.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, o.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 785, e.height = 785, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Label2_i(), this.get_time_i(), this.get_button_i(), this.free_label_i(), this.buy_group_i(), this.buttonGuide_i()],
                e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.height = 700, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 600, e.x = 0, e.y = 0,
                e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69.39, e.scale9Grid = new egret.Rectangle(22, 29, 3, 4),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_12_png", e.width = 369, e.x = 114,
                e.y = 12.3, e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 30, e.stroke = 2, e.text = "Battery Supply Station",
                e.x = 149.5, e.y = 23.52, e;
        }, o._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 560, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 85, e;
        }, o._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 250, e.scale9Grid = new egret.Rectangle(31, 31, 3, 3),
                e.source = "ui_01_13_png", e.width = 250, e.x = 175, e.y = 170, e;
        }, o._Image5_i = function() {
            var e = new eui.Image();
            return e.source = "ui_bottom_03_png", e.x = 194.65, e.y = 194, e;
        }, o._Image6_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.fillMode = "clip", e.height = 68, e.source = "ui_bottom_04_png",
                e.x = 236, e.y = 289.5, e;
        }, o._Image7_i = function() {
            var e = new eui.Image();
            return e.source = "ui_bottom_05_png", e.x = 255, e.y = 251, e;
        }, o._Image8_i = function() {
            var e = new eui.Image();
            return e.source = "ui_bottom_02_png", e.x = 197, e.y = 194, e;
        }, o._Image9_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(34, 31, 5, 3), e.source = "ui_01_15_png",
                e.width = 272, e.x = 166.12, e.y = 455, e;
        }, o._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 30, e.stroke = 3, e.strokeColor = 0, e.text = "Turret construction fill",
                e.textAlign = "center", e.textColor = 65280, e.width = 200, e.x = 202, e.y = 474.5,
                e;
        }, o.get_time_i = function() {
            var e = new eui.Label();
            return this.get_time = e, e.bold = !0, e.text = "5 times left today", e.textColor = 8553090,
                e.x = 223.62, e.y = 563, e;
        }, o.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetY = 37.5, e.enabled = !0, e.label = "",
                e.width = 250, e.x = 175.65, e.y = 746, e.skinName = r, e;
        }, o.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 75, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 3, e.strokeColor = 10311475, e.text = "Free", e.textAlign = "center",
                e.textColor = 16777215, e.touchEnabled = !1, e.width = 150, e.x = 300, e.y = 746,
                e;
        }, o.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetY = 23, e.touchChildren = !1, e.touchEnabled = !1,
                e.x = 210.56, e.y = 746, e.elementsContent = [this.get_type_i(), this.get_label_i()],
                e;
        }, o.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_02_png", e.touchEnabled = !1, e.x = 26, e.y = 23,
                e;
        }, o.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "分享填满", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 150, e.x = 42.51, e.y = 23, e;
        }, o.buttonGuide_i = function() {
            var e = new eui.Image();
            return this.buttonGuide = e, e.rotation = 241.49, e.scaleX = -1, e.scaleY = 1, e.source = "ui_yindao2_png",
                e.x = 430.16, e.y = 740.19, e;
        }, o.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label3_i(), this.close_button_i()],
                e;
        }, o._Label3_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "No, skip cruelly>>", e.x = 7.73,
                e.y = 3.68, e;
        }, o.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = a, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyHelpSkin.exml"] = window.MyHelpSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "close_button", "all_group"], this.height = 1136,
                this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = n.prototype;
        return a.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, a.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 785, e.height = 785, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this.close_button_i(), this._Label2_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()],
                e;
        }, a._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.height = 746, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 600, e.x = 0, e.y = 40,
                e;
        }, a._Image2_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1, e.scaleY = 1, e.source = "ui_menuname_05_01_png", e.x = 191,
                e.y = -29, e;
        }, a._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 40, e.stroke = 2, e.text = "Gameplay", e.x = 216, e.y = -10,
                e;
        }, a._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 625, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_14_png", e.width = 560, e.x = 20,
                e.y = 60, e;
        }, a.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.anchorOffsetX = 0, e.enabled = !0, e.label = "",
                e.width = 183.33, e.x = 208.33, e.y = 692, e.skinName = r, e;
        }, a._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 26, e.stroke = 3, e.strokeColor = 10311475, e.text = "understood",
                e.textAlign = "center", e.textColor = 16777215, e.touchEnabled = !1, e.width = 150,
                e.x = 226.28, e.y = 713, e;
        }, a._Group1_i = function() {
            var e = new eui.Group();
            return e.x = 51.28, e.y = 80, e.elementsContent = [this._Label3_i(), this._Label4_i(), this._Image4_i(), this._Image5_i()],
                e;
        }, a._Label3_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 23, e.stroke = 3, e.strokeColor = 0, e.text = "1.Turret construction fill",
                e.textAlign = "center", e.textColor = 6618980, e.width = 300, e.x = 100, e.y = 0,
                e;
        }, a._Label4_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 16, e.stroke = 1, e.text = "Two turrets of the same level are dragged to coincide, that is, to increase the level", e.textAlign = "center",
                e.width = 500, e.x = 0, e.y = 35.18, e;
        }, a._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 103, e.scale9Grid = new egret.Rectangle(31, 32, 2, 1),
                e.source = "ui_hp_rect_png", e.width = 439, e.x = 26, e.y = 66, e;
        }, a._Image5_i = function() {
            var e = new eui.Image();
            return e.source = "hp_c2_png", e.x = 51, e.y = 64, e;
        }, a._Group2_i = function() {
            var e = new eui.Group();
            return e.x = 51.28, e.y = 272, e.elementsContent = [this._Label5_i(), this._Label6_i(), this._Image6_i(), this._Image7_i()],
                e;
        }, a._Label5_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 23, e.stroke = 3, e.strokeColor = 0, e.text = "2.How to get stronger",
                e.textAlign = "center", e.textColor = 6618980, e.width = 300, e.x = 100, e.y = 0,
                e;
        }, a._Label6_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 16, e.stroke = 1, e.text = "Upgrading and strengthening, building turrets, and synthetic turrets can make you stronger",
                e.textAlign = "center", e.width = 500, e.x = 0, e.y = 35.18, e;
        }, a._Image6_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 103, e.scale9Grid = new egret.Rectangle(31, 32, 2, 1),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_hp_rect_png", e.width = 439, e.x = 27.5,
                e.y = 66, e;
        }, a._Image7_i = function() {
            var e = new eui.Image();
            return e.source = "hp_c1_png", e.x = 73, e.y = 64, e;
        }, a._Group3_i = function() {
            var e = new eui.Group();
            return e.x = 51.28, e.y = 472, e.elementsContent = [this._Label7_i(), this._Label8_i(), this._Image8_i(), this._Image9_i()],
                e;
        }, a._Label7_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 23, e.stroke = 3, e.strokeColor = 0, e.text = "3.How to remove the turret",
                e.textAlign = "center", e.textColor = 6618980, e.width = 300, e.x = 100, e.y = 0,
                e;
        }, a._Label8_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 16, e.stroke = 1, e.text = "Drag the turret and move the turret to the store location", e.textAlign = "center",
                e.width = 500, e.x = 0, e.y = 38.18, e;
        }, a._Image8_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 103, e.scale9Grid = new egret.Rectangle(31, 32, 2, 1),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_hp_rect_png", e.width = 439, e.x = 27.5,
                e.y = 66, e;
        }, a._Image9_i = function() {
            var e = new eui.Image();
            return e.source = "hp_c3_png", e.x = 107, e.y = 64, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyMainGunLvUpSkin.exml"] = window.MyMainGunLvUpSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "baseImg", "tower_img", "tower_level", "tower_name", "tower_atk", "tower_range", "get_num", "all_group", "get_button", "free_label", "get_type", "get_label", "buttonGuide", "buy_group", "up_group", "close_button", "close_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.up_group_i(), this.close_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_button_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = n.prototype;
        return o.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, o.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 785, e.height = 785, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this.baseImg_i(), this.tower_img_i(), this.tower_level_i(), this.tower_name_i(), this._Label2_i(), this._Image5_i(), this.tower_atk_i(), this._Label3_i(), this._Image6_i(), this.tower_range_i(), this._Image7_i(), this._Image8_i(), this.get_num_i()],
                e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.height = 700, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 600, e.x = 0, e.y = 0,
                e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69.39, e.scale9Grid = new egret.Rectangle(22, 29, 3, 4),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_12_png", e.width = 369, e.x = 114,
                e.y = 12.3, e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 50, e.stroke = 2, e.text = "Unlock",
                e.x = 200.23, e.y = 23.7, e;
        }, o._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 560, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 85, e;
        }, o._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 150, e.scale9Grid = new egret.Rectangle(31, 31, 3, 3),
                e.source = "ui_01_13_png", e.width = 150, e.x = 228.75, e.y = 146, e;
        }, o.baseImg_i = function() {
            var e = new eui.Image();
            return this.baseImg = e, e.source = "tower_XPD_png", e.x = 241.75, e.y = 159, e;
        }, o.tower_img_i = function() {
            var e = new eui.Image();
            return this.tower_img = e, e.source = "tower_XP1_png", e.x = 241.75, e.y = 159,
                e;
        }, o.tower_level_i = function() {
            var e = new eui.Label();
            return this.tower_level = e, e.anchorOffsetX = 50, e.bold = !0, e.size = 24, e.stroke = 2,
                e.text = "Lv.40", e.textAlign = "center", e.textColor = 16777215, e.width = 100,
                e.x = 304.12, e.y = 260, e;
        }, o.tower_name_i = function() {
            var e = new eui.Label();
            return this.tower_name = e, e.bold = !0, e.size = 60, e.strokeColor = 10311475,
                e.text = "Medium missile", e.textColor = 10311475, e.x = 181.25, e.y = 319.65, e;
        }, o._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.text = "Attack:", e.textAlign = "right", e.textColor = 10311475,
                e.x = 80.72, e.y = 409.5, e;
        }, o._Image5_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(21, 17, 1, 2), e.source = "ui_01_14_png",
                e.width = 198.67, e.x = 253.07, e.y = 406, e;
        }, o.tower_atk_i = function() {
            var e = new eui.Label();
            return this.tower_atk = e, e.bold = !0, e.text = "123K", e.textAlign = "center",
                e.width = 200, e.x = 256.56, e.y = 409.5, e;
        }, o._Label3_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.right = 347, e.text = "Range：", e.textAlign = "left", e.textColor = 10311475,
                e.x = 80.72, e.y = 463.5, e;
        }, o._Image6_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(21, 17, 1, 2), e.source = "ui_01_14_png",
                e.width = 198.67, e.x = 253.07, e.y = 460, e;
        }, o.tower_range_i = function() {
            var e = new eui.Label();
            return this.tower_range = e, e.bold = !0, e.text = "2.2", e.textAlign = "center",
                e.width = 200, e.x = 256.56, e.y = 463.5, e;
        }, o._Image7_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(34, 31, 5, 3), e.source = "ui_01_15_png",
                e.width = 272, e.x = 166.12, e.y = 528, e;
        }, o._Image8_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_02_png", e.x = 184.62,
                e.y = 526.52, e;
        }, o.get_num_i = function() {
            var e = new eui.Label();
            return this.get_num = e, e.bold = !0, e.size = 35, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "+100", e.textAlign = "center", e.width = 200, e.x = 235.66, e.y = 546.96,
                e;
        }, o.up_group_i = function() {
            var e = new eui.Group();
            return this.up_group = e, e.anchorOffsetY = 100, e.height = 100, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this.get_button_i(), this.free_label_i(), this.buy_group_i()],
                e;
        }, o.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetX = 0, e.anchorOffsetY = 37.5, e.enabled = !0,
                e.label = "", e.width = 344, e.x = 125.65, e.y = 60, e.skinName = r, e;
        }, o.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 150, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 3, e.strokeColor = 10311475, e.text = "Free", e.textAlign = "center",
                e.textColor = 16777215, e.touchEnabled = !1, e.visible = !1, e.width = 300, e.x = 300,
                e.y = 60, e;
        }, o.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetY = 23, e.touchChildren = !1, e.touchEnabled = !1,
                e.x = 210.56, e.y = 60, e.elementsContent = [this.get_type_i(), this.get_label_i(), this.buttonGuide_i()],
                e;
        }, o.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_02_png", e.touchEnabled = !1, e.x = -44, e.y = 23,
                e;
        }, o.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 25, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "5 times to collect & refill", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 300, e.x = -42.49, e.y = 23, e;
        }, o.buttonGuide_i = function() {
            var e = new eui.Image();
            return this.buttonGuide = e, e.rotation = 241.49, e.scaleX = -1, e.scaleY = 1, e.source = "ui_yindao2_png",
                e.x = 266, e.y = 16, e;
        }, o.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label4_i(), this.close_button_i()],
                e;
        }, o._Label4_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "Get it directly>>", e.textAlign = "center",
                e.width = 167, e.x = 7.73, e.y = 3.68, e;
        }, o.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = a, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyNoticeSkin.exml"] = window.MyNoticeSkin = function(t) {
        function i() {
            t.call(this), this.skinParts = ["str_label"], this.height = 50, this.width = 640,
                this.elementsContent = [this._Image1_i(), this.str_label_i()];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return e.source = "ui_01_18_png", e.touchEnabled = !1, e.x = 60.5, e.y = 0, e;
        }, n.str_label_i = function() {
            var e = new eui.Label();
            return this.str_label = e, e.size = 40, e.stroke = 3, e.text = "The trial time is less than 30 seconds! Try again to get diamond rewards!",
                e.textAlign = "center", e.touchEnabled = !1, e.width = 640, e.y = 5, e;
        }, i;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyOfflineRewardSkin.exml"] = window.MyOfflineRewardSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "get_num", "getTen_num", "getTen_group", "all_group", "get_button", "free_label", "get_type", "get_label", "buttonGuide", "buy_group", "up_group", "close_button", "close_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.up_group_i(), this.close_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_button_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = n.prototype;
        return o.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, o.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 785, e.height = 785, e.touchChildren = !1,
                e.touchEnabled = !1, e.touchThrough = !1, e.width = 600, e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.get_num_i(), this.getTen_group_i()],
                e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.height = 700, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 600, e.x = 0, e.y = 0,
                e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69.39, e.scale9Grid = new egret.Rectangle(22, 29, 3, 4),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_12_png", e.width = 369, e.x = 114,
                e.y = 12.3, e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 50, e.stroke = 2, e.text = "Offline reward",
                e.x = 145.5, e.y = 23.52, e;
        }, o._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 560, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 85, e;
        }, o._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 250, e.scale9Grid = new egret.Rectangle(31, 31, 3, 3),
                e.source = "ui_01_13_png", e.width = 250, e.x = 175, e.y = 146, e;
        }, o._Image5_i = function() {
            var e = new eui.Image();
            return e.source = "ui_box_01_png", e.x = 157.66, e.y = 112, e;
        }, o._Image6_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(34, 31, 5, 3), e.source = "ui_01_15_png",
                e.width = 272, e.x = 166.12, e.y = 431, e;
        }, o._Image7_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_01_png", e.x = 184.62,
                e.y = 429.52, e;
        }, o.get_num_i = function() {
            var e = new eui.Label();
            return this.get_num = e, e.bold = !0, e.size = 35, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "+100K", e.textAlign = "center", e.width = 200, e.x = 235.66, e.y = 448.48,
                e;
        }, o.getTen_group_i = function() {
            var e = new eui.Group();
            return this.getTen_group = e, e.height = 100, e.width = 400, e.x = 95, e.y = 505,
                e.elementsContent = [this._Image8_i(), this._Image9_i(), this.getTen_num_i(), this._Image10_i(), this._Label2_i()],
                e;
        }, o._Image8_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(34, 31, 5, 3), e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_01_15_png", e.width = 272, e.x = 71.12, e.y = 23, e;
        }, o._Image9_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_01_png", e.x = 89.62,
                e.y = 21.519999999999982, e;
        }, o.getTen_num_i = function() {
            var e = new eui.Label();
            return this.getTen_num = e, e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 35,
                e.stroke = 3, e.strokeColor = 10311475, e.text = "+1M", e.textAlign = "center",
                e.width = 200, e.x = 140.66, e.y = 41.960000000000036, e;
        }, o._Image10_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1, e.scaleY = 1, e.source = "ui_swin_arrow_png", e.x = 210.73000000000002,
                e.y = -20.039999999999964, e;
        }, o._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 60, e.stroke = 3, e.strokeColor = 16737280,
                e.text = "x10", e.textColor = 16762880, e.x = 105.33000000000001, e.y = -22.850000000000023,
                e;
        }, o.up_group_i = function() {
            var e = new eui.Group();
            return this.up_group = e, e.anchorOffsetY = 100, e.height = 100, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this.get_button_i(), this.free_label_i(), this.buy_group_i()],
                e;
        }, o.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetY = 37.5, e.enabled = !0, e.label = "",
                e.width = 250, e.x = 175.65, e.y = 60, e.skinName = r, e;
        }, o.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 75, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 3, e.strokeColor = 10311475, e.text = "Free", e.textAlign = "center",
                e.textColor = 16777215, e.touchEnabled = !1, e.visible = !1, e.width = 150, e.x = 300,
                e.y = 60, e;
        }, o.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetY = 23, e.touchChildren = !1, e.touchEnabled = !1,
                e.x = 210.56, e.y = 60, e.elementsContent = [this.get_type_i(), this.get_label_i(), this.buttonGuide_i()],
                e;
        }, o.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_04_png", e.touchEnabled = !1, e.x = 26, e.y = 23,
                e;
        }, o.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "10 Times", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 150, e.x = 42.51, e.y = 23, e;
        }, o.buttonGuide_i = function() {
            var e = new eui.Image();
            return this.buttonGuide = e, e.rotation = 241.49, e.scaleX = -1, e.scaleY = 1, e.source = "ui_yindao2_png",
                e.x = 219.36, e.y = 16, e;
        }, o.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label3_i(), this.close_button_i()],
                e;
        }, o._Label3_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "Get it directly>>", e.textAlign = "center",
                e.width = 167, e.x = 7.73, e.y = 3.68, e;
        }, o.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = a, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyOptionSkin.exml"] = window.MyOptionSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "head_img", "maxTower_level", "maxTower_name", "music_check", "sound_check", "close_button", "all_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i()];
        }
        e(n, i);
        var r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_setting_01_02_png")]), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_setting_01_01_png",
                        e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_setting_01_02_png")]), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_setting_01_01_png",
                        e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.stroke = 2, e.strokeColor = 10311475,
                        e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            u = n.prototype;
        return u.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, u.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.height = 700, e.width = 500, e.x = 70, e.y = 150, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Label2_i(), this._Image3_i(), this._Image4_i(), this.head_img_i(), this._Image5_i(), this.maxTower_level_i(), this.maxTower_name_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this.music_check_i(), this.sound_check_i(), this.close_button_i()],
                e;
        }, u._Image1_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1, e.scaleY = 1, e.source = "ui_menuname_05_01_png", e.x = 144,
                e.y = 0, e;
        }, u._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 633, e.scale9Grid = new egret.Rectangle(24, 25, 7, 6),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 500, e.x = 0, e.y = 67,
                e;
        }, u._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 40, e.stroke = 2, e.text = "Settings",
                e.x = 168, e.y = 18.5, e;
        }, u._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.stroke = 2, e.text = "Basic Information", e.textColor = 16760576,
                e.x = 138.5, e.y = 102, e;
        }, u._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 129, e.scale9Grid = new egret.Rectangle(24, 20, 4, 5),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_09_png", e.width = 446, e.x = 28,
                e.y = 145, e;
        }, u._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 210, e.scale9Grid = new egret.Rectangle(24, 20, 4, 5),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_09_png", e.width = 446, e.x = 25,
                e.y = 360.5, e;
        }, u.head_img_i = function() {
            var e = new eui.Image();
            return this.head_img = e, e.height = 75, e.scaleX = 1, e.scaleY = 1, e.source = "ui_top_02_png",
                e.width = 75, e.x = 57, e.y = 171, e;
        }, u._Image5_i = function() {
            var e = new eui.Image();
            return e.height = 85, e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_10_png", e.width = 85,
                e.x = 52, e.y = 166, e;
        }, u.maxTower_level_i = function() {
            var e = new eui.Label();
            return this.maxTower_level = e, e.scaleX = 1, e.scaleY = 1, e.size = 20, e.stroke = 2,
                e.text = "Main gun level: 9", e.x = 162.5, e.y = 175.5, e;
        }, u.maxTower_name_i = function() {
            var e = new eui.Label();
            return this.maxTower_name = e, e.scaleX = 1, e.scaleY = 1, e.size = 20, e.stroke = 2,
                e.text = "Gun name: large missile", e.x = 162.5, e.y = 215, e;
        }, u._Label3_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.stroke = 2, e.text = "Basic settings", e.textColor = 16760576,
                e.x = 186.5, e.y = 312.5, e;
        }, u._Label4_i = function() {
            var e = new eui.Label();
            return e.scaleX = 1, e.scaleY = 1, e.size = 30, e.stroke = 2, e.text = "mMusic", e.x = 89.5,
                e.y = 409.5, e;
        }, u._Label5_i = function() {
            var e = new eui.Label();
            return e.scaleX = 1, e.scaleY = 1, e.size = 30, e.stroke = 2, e.text = "Sound effects", e.x = 20,
                e.y = 496, e;
        }, u.music_check_i = function() {
            var e = new eui.CheckBox();
            return this.music_check = e, e.enabled = !0, e.label = "", e.scaleX = 1, e.scaleY = 1,
                e.selected = !1, e.x = 208, e.y = 404, e.skinName = r, e;
        }, u.sound_check_i = function() {
            var e = new eui.CheckBox();
            return this.sound_check = e, e.label = "", e.scaleX = 1, e.scaleY = 1, e.selected = !0,
                e.x = 207, e.y = 488, e.skinName = a, e;
        }, u.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.label = "Close", e.scaleX = 1, e.scaleY = 1, e.x = 183,
                e.y = 598, e.skinName = o, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyOtherRewardSkin.exml"] = window.MyOtherRewardSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "name_label", "diamond_img", "gold_img", "get_type", "get_num", "all_group", "get_button", "free_label", "ads_type", "get_label", "buy_group", "up_group", "close_button", "close_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.up_group_i(), this.close_group_i()];
        }
        e(n, i);
        var r = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_button_03_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = n.prototype;
        return o.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, o.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 785, e.height = 785, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this.name_label_i(), this._Image3_i(), this._Image4_i(), this.diamond_img_i(), this.gold_img_i(), this._Image5_i(), this.get_type_i(), this.get_num_i()],
                e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetY = 0, e.height = 700, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_02_png", e.width = 600, e.x = 0, e.y = 0,
                e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 184.5, e.anchorOffsetY = 0, e.height = 69.39, e.scale9Grid = new egret.Rectangle(22, 29, 3, 4),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_12_png", e.width = 369, e.x = 300,
                e.y = 12.3, e;
        }, o.name_label_i = function() {
            var e = new eui.Label();
            return this.name_label = e, e.anchorOffsetX = 200, e.bold = !0, e.scaleX = 1, e.scaleY = 1,
                e.size = 50, e.stroke = 2, e.text = "Your supplies have been delivered", e.textAlign = "center", e.width = 400,
                e.x = 300, e.y = 23.52, e;
        }, o._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 560, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 85, e;
        }, o._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 250, e.scale9Grid = new egret.Rectangle(31, 31, 3, 3),
                e.source = "ui_01_13_png", e.width = 250, e.x = 175, e.y = 170, e;
        }, o.diamond_img_i = function() {
            var e = new eui.Image();
            return this.diamond_img = e, e.source = "ui_box_02_png", e.x = 163.66, e.y = 183,
                e;
        }, o.gold_img_i = function() {
            var e = new eui.Image();
            return this.gold_img = e, e.source = "ui_box_01_png", e.x = 157.66, e.y = 136, e;
        }, o._Image5_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(34, 31, 5, 3), e.source = "ui_01_15_png",
                e.width = 272, e.x = 166.12, e.y = 455, e;
        }, o.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_02_png",
                e.x = 184.62, e.y = 453.52, e;
        }, o.get_num_i = function() {
            var e = new eui.Label();
            return this.get_num = e, e.bold = !0, e.size = 35, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "+100K", e.textAlign = "center", e.width = 200, e.x = 235.66, e.y = 472.48,
                e;
        }, o.up_group_i = function() {
            var e = new eui.Group();
            return this.up_group = e, e.anchorOffsetY = 100, e.height = 100, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this.get_button_i(), this.free_label_i(), this.buy_group_i()],
                e;
        }, o.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetY = 37.5, e.enabled = !0, e.label = "",
                e.width = 250, e.x = 175.65, e.y = 60, e.skinName = r, e;
        }, o.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 75, e.anchorOffsetY = 15, e.bold = !0,
                e.size = 30, e.stroke = 3, e.strokeColor = 10311475, e.text = "Free", e.textAlign = "center",
                e.textColor = 16777215, e.touchEnabled = !1, e.width = 150, e.x = 300, e.y = 60,
                e;
        }, o.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetY = 23, e.touchChildren = !1, e.touchEnabled = !1,
                e.x = 210.56, e.y = 60, e.elementsContent = [this.ads_type_i(), this.get_label_i()],
                e;
        }, o.ads_type_i = function() {
            var e = new eui.Image();
            return this.ads_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_02_png", e.touchEnabled = !1, e.x = 26, e.y = 23,
                e;
        }, o.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "分享领取", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 150, e.x = 42.51, e.y = 23, e;
        }, o.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label1_i(), this.close_button_i()],
                e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "No, skip cruelly>>", e.x = 7.73,
                e.y = 3.68, e;
        }, o.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = a, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyPartnerAdSkin.exml"] = window.MyPartnerAdSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bgImg", "icon0", "text0", "ad0", "icon1", "text1", "ad1", "icon2", "text2", "ad2", "icon3", "text3", "ad3", "icon4", "text4", "ad4", "icon5", "text5", "ad5", "icon6", "text6", "ad6", "icon7", "text7", "ad7", "icon8", "text8", "ad8", "icon9", "text9", "ad9", "adGroup", "bannerAd", "allgroup"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.allgroup_i()];
        }
        e(n, i);
        var r = n.prototype;
        return r.allgroup_i = function() {
            var e = new eui.Group();
            return this.allgroup = e, e.height = 182, e.y = 954, e.elementsContent = [this.bgImg_i(), this.adGroup_i(), this.bannerAd_i()],
                e;
        }, r.bgImg_i = function() {
            var e = new eui.Image();
            return this.bgImg = e, e.height = 182, e.scale9Grid = new egret.Rectangle(20, 20, 60, 60),
                e.source = "hyzw_kuang_png", e.width = 640, e;
        }, r.adGroup_i = function() {
            var e = new eui.Group();
            return this.adGroup = e, e.scrollEnabled = !0, e.width = 609, e.x = 15, e.y = 14,
                e.elementsContent = [this.ad0_i(), this.ad1_i(), this.ad2_i(), this.ad3_i(), this.ad4_i(), this.ad5_i(), this.ad6_i(), this.ad7_i(), this.ad8_i(), this.ad9_i()],
                e;
        }, r.ad0_i = function() {
            var e = new eui.Group();
            return this.ad0 = e, e.elementsContent = [this.icon0_i(), this._Image1_i(), this.text0_i()],
                e;
        }, r.icon0_i = function() {
            var e = new eui.Image();
            return this.icon0 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image1_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir01_png", e.width = 136, e;
        }, r.text0_i = function() {
            var e = new eui.Label();
            return this.text0 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.ad1_i = function() {
            var e = new eui.Group();
            return this.ad1 = e, e.x = 138, e.elementsContent = [this.icon1_i(), this._Image2_i(), this.text1_i()],
                e;
        }, r.icon1_i = function() {
            var e = new eui.Image();
            return this.icon1 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image2_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir02_png", e.width = 136, e;
        }, r.text1_i = function() {
            var e = new eui.Label();
            return this.text1 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.ad2_i = function() {
            var e = new eui.Group();
            return this.ad2 = e, e.x = 276, e.elementsContent = [this.icon2_i(), this._Image3_i(), this.text2_i()],
                e;
        }, r.icon2_i = function() {
            var e = new eui.Image();
            return this.icon2 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image3_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir03_png", e.width = 136, e;
        }, r.text2_i = function() {
            var e = new eui.Label();
            return this.text2 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.ad3_i = function() {
            var e = new eui.Group();
            return this.ad3 = e, e.x = 414, e.elementsContent = [this.icon3_i(), this._Image4_i(), this.text3_i()],
                e;
        }, r.icon3_i = function() {
            var e = new eui.Image();
            return this.icon3 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image4_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir01_png", e.width = 136, e;
        }, r.text3_i = function() {
            var e = new eui.Label();
            return this.text3 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.ad4_i = function() {
            var e = new eui.Group();
            return this.ad4 = e, e.x = 552, e.elementsContent = [this.icon4_i(), this._Image5_i(), this.text4_i()],
                e;
        }, r.icon4_i = function() {
            var e = new eui.Image();
            return this.icon4 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image5_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir02_png", e.width = 136, e;
        }, r.text4_i = function() {
            var e = new eui.Label();
            return this.text4 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.ad5_i = function() {
            var e = new eui.Group();
            return this.ad5 = e, e.x = 690, e.elementsContent = [this.icon5_i(), this._Image6_i(), this.text5_i()],
                e;
        }, r.icon5_i = function() {
            var e = new eui.Image();
            return this.icon5 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image6_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir03_png", e.width = 136, e;
        }, r.text5_i = function() {
            var e = new eui.Label();
            return this.text5 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.ad6_i = function() {
            var e = new eui.Group();
            return this.ad6 = e, e.x = 828, e.elementsContent = [this.icon6_i(), this._Image7_i(), this.text6_i()],
                e;
        }, r.icon6_i = function() {
            var e = new eui.Image();
            return this.icon6 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image7_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir01_png", e.width = 136, e;
        }, r.text6_i = function() {
            var e = new eui.Label();
            return this.text6 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.ad7_i = function() {
            var e = new eui.Group();
            return this.ad7 = e, e.x = 966, e.elementsContent = [this.icon7_i(), this._Image8_i(), this.text7_i()],
                e;
        }, r.icon7_i = function() {
            var e = new eui.Image();
            return this.icon7 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image8_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir02_png", e.width = 136, e;
        }, r.text7_i = function() {
            var e = new eui.Label();
            return this.text7 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.ad8_i = function() {
            var e = new eui.Group();
            return this.ad8 = e, e.x = 1104, e.elementsContent = [this.icon8_i(), this._Image9_i(), this.text8_i()],
                e;
        }, r.icon8_i = function() {
            var e = new eui.Image();
            return this.icon8 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image9_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir03_png", e.width = 136, e;
        }, r.text8_i = function() {
            var e = new eui.Label();
            return this.text8 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.ad9_i = function() {
            var e = new eui.Group();
            return this.ad9 = e, e.x = 1242, e.elementsContent = [this.icon9_i(), this._Image10_i(), this.text9_i()],
                e;
        }, r.icon9_i = function() {
            var e = new eui.Image();
            return this.icon9 = e, e.height = 130, e.source = "icon-144_png", e.width = 130,
                e.x = 3, e.y = 1, e;
        }, r._Image10_i = function() {
            var e = new eui.Image();
            return e.height = 153, e.source = "hyzw_neir01_png", e.width = 136, e;
        }, r.text9_i = function() {
            var e = new eui.Label();
            return this.text9 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 20,
                e.text = "Little Survivor", e.textAlign = "center", e.width = 136, e.y = 126, e;
        }, r.bannerAd_i = function() {
            var e = new eui.Image();
            return this.bannerAd = e, e.height = 200, e.scaleX = 1, e.scaleY = 1, e.source = "icon-144_png",
                e.touchEnabled = !0, e.width = 640, e.x = 0, e.y = -18, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyRankingSkin.exml"] = window.MyRankingSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "world_group", "world_scroller", "friend_group", "friend_scroller", "rank_img", "rank_label", "rank_head", "rank_name", "rank_power", "world_button", "friend_button", "close_button", "all_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i()];
        }
        e(n, i);
        var r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_menuname_03_01_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_menuname_01_01_png")])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_menuname_03_02_png",
                        e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_menuname_04_01_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_menuname_04_01_png")])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_menuname_04_02_png",
                        e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_close_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            u = n.prototype;
        return u.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, u.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.height = 840, e.width = 600, e.x = 0, e.y = -16, e.elementsContent = [this._Image1_i(), this._Image2_i(), this.world_scroller_i(), this.friend_scroller_i(), this._Group1_i(), this._Group2_i(), this.world_button_i(), this.friend_button_i(), this.close_button_i()],
                e;
        }, u._Image1_i = function() {
            var e = new eui.Image();
            return e.height = 840, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3), e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_01_01_png", e.visible = !1, e.width = 600, e.x = 0,
                e.y = 0, e;
        }, u._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 730, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.visible = !1, e.width = 560,
                e.x = 20, e.y = 88, e;
        }, u.world_scroller_i = function() {
            var e = new eui.Scroller();
            return this.world_scroller = e, e.anchorOffsetY = 0, e.height = 663, e.scaleX = 1,
                e.scaleY = 1, e.visible = !1, e.width = 500, e.x = 49, e.y = 132, e.viewport = this.world_group_i(),
                e;
        }, u.world_group_i = function() {
            var e = new eui.Group();
            return this.world_group = e, e.layout = this._VerticalLayout1_i(), e;
        }, u._VerticalLayout1_i = function() {
            var e = new eui.VerticalLayout();
            return e.gap = 0, e;
        }, u.friend_scroller_i = function() {
            var e = new eui.Scroller();
            return this.friend_scroller = e, e.anchorOffsetY = 0, e.height = 663, e.scaleX = 1,
                e.scaleY = 1, e.visible = !1, e.width = 500, e.x = 49, e.y = 132, e.viewport = this.friend_group_i(),
                e;
        }, u.friend_group_i = function() {
            var e = new eui.Group();
            return this.friend_group = e, e.layout = this._VerticalLayout2_i(), e;
        }, u._VerticalLayout2_i = function() {
            var e = new eui.VerticalLayout();
            return e.gap = 0, e;
        }, u._Group1_i = function() {
            var e = new eui.Group();
            return e.visible = !1, e.x = 9, e.y = 91, e.elementsContent = [this._Image3_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i()],
                e;
        }, u._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 39, e.scale9Grid = new egret.Rectangle(27, 18, 4, 1),
                e.source = "ui_01_07_png", e.width = 580, e;
        }, u._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 24, e.stroke = 2, e.text = "玩家ID", e.x = 268.68, e.y = 9,
                e;
        }, u._Label2_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 24, e.stroke = 2, e.text = "排名", e.x = 45.67, e.y = 9,
                e;
        }, u._Label3_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 24, e.stroke = 2, e.text = "头像", e.x = 130.52, e.y = 9,
                e;
        }, u._Label4_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 24, e.stroke = 2, e.text = "战斗力", e.x = 448.67, e.y = 9,
                e;
        }, u._Group2_i = function() {
            var e = new eui.Group();
            return e.height = 120, e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.width = 500,
                e.x = 49, e.y = 685, e.elementsContent = [this._Image4_i(), this._Image5_i(), this.rank_img_i(), this.rank_label_i(), this.rank_head_i(), this._Image6_i(), this.rank_name_i(), this.rank_power_i(), this._Image7_i()],
                e;
        }, u._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.height = 120, e.scale9Grid = new egret.Rectangle(26, 22, 13, 15),
                e.source = "ui_01_11_png", e.width = 570, e.x = -34, e.y = 3, e;
        }, u._Image5_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.height = 95, e.scale9Grid = new egret.Rectangle(21, 22, 14, 14),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_09_png", e.width = 500, e.y = 15.96,
                e;
        }, u.rank_img_i = function() {
            var e = new eui.Image();
            return this.rank_img = e, e.source = "ui_rank_01_png", e.x = 7, e.y = 41, e;
        }, u.rank_label_i = function() {
            var e = new eui.Label();
            return this.rank_label = e, e.anchorOffsetX = 40, e.bold = !0, e.text = "999+",
                e.textAlign = "center", e.textColor = 4013373, e.width = 80, e.x = 37, e.y = 52.63,
                e;
        }, u.rank_head_i = function() {
            var e = new eui.Image();
            return this.rank_head = e, e.height = 75, e.source = "ui_top_02_png", e.width = 75,
                e.x = 75, e.y = 26, e;
        }, u._Image6_i = function() {
            var e = new eui.Image();
            return e.source = "ui_01_10_png", e.x = 70, e.y = 21, e;
        }, u.rank_name_i = function() {
            var e = new eui.Label();
            return this.rank_name = e, e.bold = !0, e.height = 25, e.size = 24, e.stroke = 2,
                e.strokeColor = 4013373, e.text = "玩家aaaaaaa", e.textColor = 16777215, e.width = 220,
                e.x = 165.69, e.y = 52, e;
        }, u.rank_power_i = function() {
            var e = new eui.Label();
            return this.rank_power = e, e.bold = !0, e.height = 25, e.size = 24, e.stroke = 2,
                e.strokeColor = 10311475, e.text = "123.5T", e.textAlign = "center", e.textColor = 16777215,
                e.width = 100, e.x = 395.71, e.y = 52, e;
        }, u._Image7_i = function() {
            var e = new eui.Image();
            return e.scaleX = 1, e.scaleY = 1, e.source = "rank_self_png", e.x = 454, e.y = 0,
                e;
        }, u.world_button_i = function() {
            var e = new eui.Button();
            return this.world_button = e, e.label = "", e.scaleX = 1, e.scaleY = 1, e.visible = !1,
                e.x = 112, e.y = 10, e.skinName = r, e;
        }, u.friend_button_i = function() {
            var e = new eui.Button();
            return this.friend_button = e, e.label = "", e.scaleX = 1, e.scaleY = 1, e.visible = !1,
                e.x = 305.66, e.y = 10, e.skinName = a, e;
        }, u.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.height = 66, e.label = "", e.scaleX = 1, e.scaleY = 1,
                e.width = 66, e.x = 10, e.y = 160, e.skinName = o, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyShopSkin.exml"] = window.MyShopSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "close_button", "shop_group", "shop_scroller", "tower_base", "tower_cannon", "tower_name", "tower_atk", "tower_range", "tower_level", "tower_button", "free_label", "get_type", "tower_gold", "buy_group", "can_group", "tower_time", "help7_img", "help7_button", "help7_group", "all_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i()];
        }
        e(n, i);
        var r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_close_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_04_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_01_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            o = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_01_10_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            u = n.prototype;
        return u.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, u.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.anchorOffsetY = 840, e.height = 840, e.width = 600,
                e.x = 20, e.y = 960, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.close_button_i(), this._Image4_i(), this._Label1_i(), this.shop_scroller_i(), this._Group1_i(), this.help7_group_i()],
                e;
        }, u._Image1_i = function() {
            var e = new eui.Image();
            return e.height = 840, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3), e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_01_01_png", e.width = 600, e.x = 0, e.y = 0, e;
        }, u._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 560, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 88, e;
        }, u._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 150, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 658, e;
        }, u.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.height = 66, e.label = "", e.scaleX = 1, e.scaleY = 1,
                e.width = 66, e.x = 17.33, e.y = 16, e.skinName = r, e;
        }, u._Image4_i = function() {
            var e = new eui.Image();
            return e.height = 80, e.scale9Grid = new egret.Rectangle(28, 17, 1, 2), e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_01_07_png", e.width = 250, e.x = 175, e.y = 10, e;
        }, u._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 60, e.stroke = 2, e.text = "Shop",
                e.x = 230, e.y = 23, e;
        }, u.shop_scroller_i = function() {
            var e = new eui.Scroller();
            return this.shop_scroller = e, e.height = 515, e.scaleX = 1, e.scaleY = 1, e.width = 500,
                e.x = 49, e.y = 110, e.viewport = this.shop_group_i(), e;
        }, u.shop_group_i = function() {
            var e = new eui.Group();
            return this.shop_group = e, e.layout = this._VerticalLayout1_i(), e;
        }, u._VerticalLayout1_i = function() {
            var e = new eui.VerticalLayout();
            return e.gap = 0, e;
        }, u._Group1_i = function() {
            var e = new eui.Group();
            return e.height = 150, e.scaleX = 1, e.scaleY = 1, e.width = 500, e.x = 49, e.y = 658,
                e.elementsContent = [this.tower_base_i(), this.tower_cannon_i(), this.tower_name_i(), this.tower_atk_i(), this.tower_range_i(), this.tower_level_i(), this._Rect1_i(), this.tower_button_i(), this.buy_group_i(), this.can_group_i(), this.tower_time_i()],
                e;
        }, u.tower_base_i = function() {
            var e = new eui.Image();
            return this.tower_base = e, e.source = "tower_JPD_png", e.x = -22, e.y = 12, e;
        }, u.tower_cannon_i = function() {
            var e = new eui.Image();
            return this.tower_cannon = e, e.source = "tower_JP1_png", e.x = -22, e.y = 12, e;
        }, u.tower_name_i = function() {
            var e = new eui.Label();
            return this.tower_name = e, e.bold = !0, e.size = 26, e.text = "Mini cannon", e.textColor = 10311475,
                e.x = 90, e.y = 31, e;
        }, u.tower_atk_i = function() {
            var e = new eui.Label();
            return this.tower_atk = e, e.bold = !0, e.size = 26, e.text = "Hurt:12/S", e.textColor = 10311475,
                e.x = 90, e.y = 62, e;
        }, u.tower_range_i = function() {
            var e = new eui.Label();
            return this.tower_range = e, e.bold = !0, e.size = 26, e.text = "Attack range:2.2", e.textColor = 10311475,
                e.x = 90, e.y = 92, e;
        }, u.tower_level_i = function() {
            var e = new eui.Label();
            return this.tower_level = e, e.bold = !0, e.size = 24, e.stroke = 2, e.text = "Lv.40",
                e.textAlign = "center", e.textColor = 16777215, e.width = 100, e.x = -10, e.y = 105,
                e;
        }, u._Rect1_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .5, e.fillColor = 7820336, e.height = 2, e.width = 500, e.y = 148,
                e;
        }, u.tower_button_i = function() {
            var e = new eui.Button();
            return this.tower_button = e, e.anchorOffsetX = 90, e.anchorOffsetY = 37.5, e.enabled = !0,
                e.label = "", e.width = 180, e.x = 410, e.y = 77.5, e.skinName = a, e;
        }, u.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetX = 85.5, e.anchorOffsetY = 22, e.height = 44,
                e.touchChildren = !1, e.touchEnabled = !1, e.width = 171, e.x = 410, e.y = 77.5,
                e.elementsContent = [this.free_label_i(), this.get_type_i(), this.tower_gold_i()],
                e;
        }, u.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 75, e.anchorOffsetY = 12.5, e.bold = !0,
                e.size = 25, e.stroke = 3, e.strokeColor = 31758, e.text = "Free", e.textAlign = "center",
                e.textColor = 16777215, e.touchEnabled = !1, e.verticalAlign = "middle", e.visible = !1,
                e.width = 150, e.x = 85.5, e.y = 22, e;
        }, u.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.height = 41,
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_share_03_png", e.width = 40, e.x = 26,
                e.y = 21, e;
        }, u.tower_gold_i = function() {
            var e = new eui.Label();
            return this.tower_gold = e, e.anchorOffsetY = 12.5, e.bold = !0, e.size = 25, e.stroke = 3,
                e.strokeColor = 31758, e.text = "分享领取", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 150, e.x = 31, e.y = 22,
                e;
        }, u.can_group_i = function() {
            var e = new eui.Group();
            return this.can_group = e, e.anchorOffsetY = 13, e.touchChildren = !1, e.touchEnabled = !1,
                e.visible = !1, e.x = 334, e.y = 77.5, e.elementsContent = [this._Label2_i()],
                e;
        }, u._Label2_i = function() {
            var e = new eui.Label();
            return e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3, e.strokeColor = 4144959,
                e.text = "Received", e.textAlign = "center", e.textColor = 16777215, e.touchEnabled = !1,
                e.width = 150, e.x = 3, e.y = 13, e;
        }, u.tower_time_i = function() {
            var e = new eui.Label();
            return this.tower_time = e, e.anchorOffsetX = 200, e.bold = !0, e.height = 50, e.scaleX = .5,
                e.scaleY = .5, e.size = 50, e.text = "Remaining today:5", e.textAlign = "center", e.textColor = 10311475,
                e.width = 400, e.x = 408, e.y = 114, e;
        }, u.help7_group_i = function() {
            var e = new eui.Group();
            return this.help7_group = e, e.height = 840, e.scaleX = 1, e.scaleY = 1, e.touchChildren = !0,
                e.touchEnabled = !0, e.touchThrough = !1, e.width = 600, e.x = 0, e.y = 0, e.elementsContent = [this._Rect2_i(), this._Rect3_i(), this._Rect4_i(), this._Rect5_i(), this._Rect6_i(), this._Label3_i(), this.help7_img_i(), this.help7_button_i()],
                e;
        }, u._Rect2_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 600, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.x = -20, e.y = -500, e;
        }, u._Rect3_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 180, e.scaleX = 1, e.scaleY = 1,
                e.width = 400, e.x = -20, e.y = 100, e;
        }, u._Rect4_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1e3, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.x = -20, e.y = 280, e;
        }, u._Rect5_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillAlpha = .5, e.fillColor = 0,
                e.height = 80, e.scaleX = 1, e.scaleY = 1, e.width = 260, e.x = 80, e.y = 280, e;
        }, u._Rect6_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillColor = 16777215, e.height = 80,
                e.scaleX = 1, e.scaleY = 1, e.strokeWeight = 2, e.width = 260, e.x = 74, e.y = 274,
                e;
        }, u._Label3_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 25,
                e.text = "Spend gold coins to buy battery level upgrade.", e.textAlign = "left", e.textColor = 0, e.width = 240,
                e.x = 88, e.y = 290, e;
        }, u.help7_img_i = function() {
            var e = new eui.Image();
            return this.help7_img = e, e.anchorOffsetX = 50.5, e.anchorOffsetY = 42, e.rotation = -135,
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_yindao1_png", e.x = 370, e.y = 245, e;
        }, u.help7_button_i = function() {
            var e = new eui.Button();
            return this.help7_button = e, e.alpha = 0, e.height = 100, e.label = "", e.width = 180,
                e.x = 371, e.y = 132, e.skinName = o, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyShowTowerSkin.exml"] = window.MyShowTowerSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["range_group", "level_text", "name_text", "atk_text", "speeed_text", "information_group", "change_text", "add_text", "tips_group"],
                this.height = 460, this.width = 460, this.elementsContent = [this.range_group_i(), this.information_group_i(), this.tips_group_i()];
        }
        e(n, i);
        var r = n.prototype;
        return r.range_group_i = function() {
            var e = new eui.Group();
            return this.range_group = e, e.anchorOffsetX = 230, e.anchorOffsetY = 230, e.height = 460,
                e.width = 460, e.x = 230, e.y = 230, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i()],
                e;
        }, r._Image1_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 119.5, e.scaleX = 1, e.scaleY = 1, e.source = "attackScope_png",
                e.width = 239, e.x = 230, e.y = 5, e;
        }, r._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 119.5, e.rotation = 60, e.scaleX = 1, e.scaleY = 1, e.source = "attackScope_png",
                e.width = 239, e.x = 425, e.y = 118, e;
        }, r._Image3_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 119.5, e.rotation = -60, e.scaleX = 1, e.scaleY = 1, e.source = "attackScope_png",
                e.width = 239, e.x = 34, e.y = 118, e;
        }, r._Image4_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 119.5, e.rotation = 120, e.scaleX = 1, e.scaleY = 1, e.source = "attackScope_png",
                e.width = 239, e.x = 425, e.y = 342, e;
        }, r._Image5_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 119.5, e.rotation = -120, e.scaleX = 1, e.scaleY = 1, e.source = "attackScope_png",
                e.width = 239, e.x = 34, e.y = 342, e;
        }, r._Image6_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 119.5, e.rotation = 180, e.scaleX = 1, e.scaleY = 1, e.source = "attackScope_png",
                e.width = 239, e.x = 230, e.y = 455, e;
        }, r.information_group_i = function() {
            var e = new eui.Group();
            return this.information_group = e, e.anchorOffsetX = 100, e.anchorOffsetY = 75,
                e.height = 150, e.visible = !1, e.width = 200, e.x = 230, e.y = 105.5, e.elementsContent = [this._Rect1_i(), this._Image7_i(), this.level_text_i(), this.name_text_i(), this.atk_text_i(), this.speeed_text_i()],
                e;
        }, r._Rect1_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .6, e.height = 136, e.strokeAlpha = .6, e.width = 186, e.x = 7,
                e.y = 7, e;
        }, r._Image7_i = function() {
            var e = new eui.Image();
            return e.height = 150, e.scale9Grid = new egret.Rectangle(16, 22, 61, 53), e.scaleX = 1,
                e.scaleY = 1, e.source = "rank_item_avatar_png", e.width = 200, e.x = 0, e.y = 0,
                e;
        }, r.level_text_i = function() {
            var e = new eui.Label();
            return this.level_text = e, e.anchorOffsetX = 180, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 30, e.text = "Lv.99", e.textAlign = "center",
                e.verticalAlign = "middle", e.width = 360, e.x = 100, e.y = 20, e;
        }, r.name_text_i = function() {
            var e = new eui.Label();
            return this.name_text = e, e.anchorOffsetX = 190, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 30, e.text = "Name:超级牛逼小炮", e.textAlign = "center",
                e.verticalAlign = "middle", e.width = 380, e.x = 100, e.y = 44.5, e;
        }, r.atk_text_i = function() {
            var e = new eui.Label();
            return this.atk_text = e, e.anchorOffsetX = 180, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 30, e.text = "Attack:999.9Aa/s", e.textAlign = "center",
                e.verticalAlign = "middle", e.width = 360, e.x = 100, e.y = 75, e;
        }, r.speeed_text_i = function() {
            var e = new eui.Label();
            return this.speeed_text = e, e.anchorOffsetX = 180, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 30, e.text = "Attack speed:9.8S/num", e.textAlign = "center",
                e.verticalAlign = "middle", e.width = 360, e.x = 100, e.y = 103.5, e;
        }, r.tips_group_i = function() {
            var e = new eui.Group();
            return this.tips_group = e, e.anchorOffsetX = 100, e.anchorOffsetY = 35, e.height = 70,
                e.width = 200, e.x = 230, e.y = 110, e.elementsContent = [this._Rect2_i(), this._Image8_i(), this.change_text_i(), this.add_text_i()],
                e;
        }, r._Rect2_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .6, e.height = 56, e.strokeAlpha = .6, e.width = 186, e.x = 7,
                e.y = 7, e;
        }, r._Image8_i = function() {
            var e = new eui.Image();
            return e.height = 70, e.scale9Grid = new egret.Rectangle(16, 22, 61, 53), e.scaleX = 1,
                e.scaleY = 1, e.source = "rank_item_avatar_png", e.width = 200, e.x = 0, e.y = 0,
                e;
        }, r.change_text_i = function() {
            var e = new eui.Label();
            return this.change_text = e, e.anchorOffsetX = 180, e.anchorOffsetY = 20, e.fontFamily = "Microsoft YaHei",
                e.height = 40, e.scaleX = .5, e.scaleY = .5, e.size = 40, e.text = "Position exchange", e.textAlign = "center",
                e.verticalAlign = "middle", e.width = 360, e.x = 100, e.y = 35, e;
        }, r.add_text_i = function() {
            var e = new eui.Label();
            return this.add_text = e, e.anchorOffsetX = 190, e.anchorOffsetY = 20, e.fontFamily = "Microsoft YaHei",
                e.scaleX = .5, e.scaleY = .5, e.size = 40, e.text = "Merge", e.textAlign = "center",
                e.verticalAlign = "middle", e.visible = !1, e.width = 380, e.x = 100, e.y = 35,
                e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/ProgressBarSkin.exml"] = window.skins.ProgressBarSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["thumb", "labelDisplay"], this.minHeight = 18,
                this.minWidth = 30, this.elementsContent = [this._Image1_i(), this.thumb_i(), this.labelDisplay_i()];
        }
        e(n, i);
        var r = n.prototype;
        return r._Image1_i = function() {
            var e = new eui.Image();
            return e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(1, 1, 4, 4), e.source = "track_pb_png",
                e.verticalCenter = 0, e.percentWidth = 100, e;
        }, r.thumb_i = function() {
            var e = new eui.Image();
            return this.thumb = e, e.percentHeight = 100, e.source = "thumb_pb_png", e.percentWidth = 100,
                e;
        }, r.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.fontFamily = "Tahoma", e.horizontalCenter = 0, e.size = 15,
                e.textAlign = "center", e.textColor = 7368816, e.verticalAlign = "middle", e.verticalCenter = 0,
                e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MySignInSkin.exml"] = window.MySignInSkin = function(t) {
        function i() {
            t.call(this), this.skinParts = ["bg_rect", "button_close0", "group_get0", "group_get1", "group_get2", "group_get3", "group_get4", "group_get5", "group_get6", "label_0", "group_canGet0", "group_canGet1", "group_canGet2", "label_3", "group_canGet3", "group_canGet4", "group_canGet5", "group_canGet6", "group_all", "button_get", "button_get_video", "image_tishi", "banner_icon_0", "banner_button_0", "banner_group", "button_close1", "group_close"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this._Group1_i(), this.banner_group_i(), this.group_close_i()];
        }
        e(i, t);
        var n = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_close_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_qd_03_02_png")])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_qd_03_01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_qd_04_02_png")])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_qd_04_01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "icon-144_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            u = i.prototype;
        return u.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.alpha = .85, e.height = 1800, e.width = 640, e.x = 0,
                e.y = -332, e;
        }, u._Group1_i = function() {
            var e = new eui.Group();
            return e.height = 830, e.width = 640, e.x = 0, e.y = 0, e.elementsContent = [this._Image1_i(), this.button_close0_i(), this.group_all_i(), this.button_get_i(), this.button_get_video_i(), this.image_tishi_i()],
                e;
        }, u._Image1_i = function() {
            var e = new eui.Image();
            return e.source = "ui_qd_02_01_png", e.x = 0, e.y = 0, e;
        }, u.button_close0_i = function() {
            var e = new eui.Button();
            return this.button_close0 = e, e.label = "", e.scaleX = 1.5, e.scaleY = 1.5, e.x = 569.19,
                e.y = 140.32, e.skinName = n, e;
        }, u.group_all_i = function() {
            var e = new eui.Group();
            return this.group_all = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 337,
                e.scaleX = 1, e.scaleY = 1, e.width = 640, e.x = 0, e.y = 357, e.elementsContent = [this.group_get0_i(), this.group_get1_i(), this.group_get2_i(), this.group_get3_i(), this.group_get4_i(), this.group_get5_i(), this.group_get6_i(), this.group_canGet0_i(), this.group_canGet1_i(), this.group_canGet2_i(), this.group_canGet3_i(), this.group_canGet4_i(), this.group_canGet5_i(), this.group_canGet6_i()],
                e;
        }, u.group_get0_i = function() {
            var e = new eui.Group();
            return this.group_get0 = e, e.height = 157, e.name = "0", e.scaleX = 1, e.scaleY = 1,
                e.visible = !1, e.width = 141, e.x = 33, e.y = 5, e.elementsContent = [this._Image2_i(), this._Image3_i()],
                e;
        }, u._Image2_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.source = "ui_qd_05_01_png", e.verticalCenter = 20,
                e;
        }, u._Image3_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = 0, e.source = "ui_qd_02_02_png", e.y = 0, e;
        }, u.group_get1_i = function() {
            var e = new eui.Group();
            return this.group_get1 = e, e.height = 157, e.name = "1", e.scaleX = 1, e.scaleY = 1,
                e.visible = !1, e.width = 141, e.x = 177, e.y = 5, e.elementsContent = [this._Image4_i(), this._Image5_i()],
                e;
        }, u._Image4_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.source = "ui_qd_05_01_png", e.verticalCenter = 20,
                e;
        }, u._Image5_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = 0, e.source = "ui_qd_02_02_png", e.verticalCenter = 0,
                e;
        }, u.group_get2_i = function() {
            var e = new eui.Group();
            return this.group_get2 = e, e.height = 157, e.name = "2", e.scaleX = 1, e.scaleY = 1,
                e.visible = !1, e.width = 141, e.x = 321, e.y = 5, e.elementsContent = [this._Image6_i(), this._Image7_i()],
                e;
        }, u._Image6_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.source = "ui_qd_05_01_png", e.verticalCenter = 20,
                e;
        }, u._Image7_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = 0, e.source = "ui_qd_02_02_png", e.verticalCenter = 0,
                e;
        }, u.group_get3_i = function() {
            var e = new eui.Group();
            return this.group_get3 = e, e.height = 157, e.name = "3", e.scaleX = 1, e.scaleY = 1,
                e.visible = !1, e.width = 141, e.x = 465, e.y = 5, e.elementsContent = [this._Image8_i(), this._Image9_i()],
                e;
        }, u._Image8_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.source = "ui_qd_05_01_png", e.verticalCenter = 20,
                e;
        }, u._Image9_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = 0, e.source = "ui_qd_02_02_png", e.verticalCenter = 0,
                e;
        }, u.group_get4_i = function() {
            var e = new eui.Group();
            return this.group_get4 = e, e.height = 157, e.name = "4", e.scaleX = 1, e.scaleY = 1,
                e.visible = !1, e.width = 141, e.x = 105, e.y = 176, e.elementsContent = [this._Image10_i(), this._Image11_i()],
                e;
        }, u._Image10_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.source = "ui_qd_05_01_png", e.verticalCenter = 20,
                e;
        }, u._Image11_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = 0, e.source = "ui_qd_02_02_png", e.verticalCenter = 0,
                e;
        }, u.group_get5_i = function() {
            var e = new eui.Group();
            return this.group_get5 = e, e.height = 157, e.name = "5", e.scaleX = 1, e.scaleY = 1,
                e.visible = !1, e.width = 141, e.x = 249, e.y = 176, e.elementsContent = [this._Image12_i(), this._Image13_i()],
                e;
        }, u._Image12_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.source = "ui_qd_05_01_png", e.verticalCenter = 20,
                e;
        }, u._Image13_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = 0, e.source = "ui_qd_02_02_png", e.verticalCenter = 0,
                e;
        }, u.group_get6_i = function() {
            var e = new eui.Group();
            return this.group_get6 = e, e.height = 157, e.name = "6", e.scaleX = 1, e.scaleY = 1,
                e.visible = !1, e.width = 141, e.x = 393, e.y = 176, e.elementsContent = [this._Image14_i(), this._Image15_i()],
                e;
        }, u._Image14_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.source = "ui_qd_05_01_png", e.verticalCenter = 20,
                e;
        }, u._Image15_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = 0, e.source = "ui_qd_02_02_png", e.verticalCenter = 0,
                e;
        }, u.group_canGet0_i = function() {
            var e = new eui.Group();
            return this.group_canGet0 = e, e.height = 157, e.name = "0", e.scaleX = 1, e.scaleY = 1,
                e.width = 141, e.x = 33, e.y = 5, e.elementsContent = [this._Image16_i(), this.label_0_i()],
                e;
        }, u._Image16_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_01_png",
                e.verticalCenter = 4.5, e;
        }, u.label_0_i = function() {
            var e = new eui.Label();
            return this.label_0 = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = .5,
                e.size = 20, e.stroke = 2, e.strokeColor = 16522074, e.text = "A wave of gold coins", e.textColor = 16777215,
                e.verticalCenter = 53.5, e;
        }, u.group_canGet1_i = function() {
            var e = new eui.Group();
            return this.group_canGet1 = e, e.height = 157, e.name = "1", e.scaleX = 1, e.scaleY = 1,
                e.width = 141, e.x = 177, e.y = 5, e.elementsContent = [this._Image17_i(), this._Image18_i(), this._Label1_i()],
                e;
        }, u._Image17_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.source = "tower_HJD_png", e.verticalCenter = 6.5,
                e;
        }, u._Image18_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.source = "tower_HJ4_png",
                e.verticalCenter = 4.5, e;
        }, u._Label1_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.horizontalCenter = .5, e.size = 20, e.stroke = 2,
                e.strokeColor = 16522074, e.text = "10 level battery", e.textColor = 16777215, e.verticalCenter = 53.5,
                e;
        }, u.group_canGet2_i = function() {
            var e = new eui.Group();
            return this.group_canGet2 = e, e.height = 157, e.name = "2", e.scaleX = 1, e.scaleY = 1,
                e.width = 141, e.x = 321, e.y = 5, e.elementsContent = [this._Image19_i(), this._Label2_i()],
                e;
        }, u._Image19_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_02_png",
                e.verticalCenter = 4.5, e;
        }, u._Label2_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.horizontalCenter = .5, e.size = 20, e.stroke = 2,
                e.strokeColor = 16522074, e.text = "500 diamonds", e.textColor = 16777215, e.verticalCenter = 53.5,
                e;
        }, u.group_canGet3_i = function() {
            var e = new eui.Group();
            return this.group_canGet3 = e, e.height = 157, e.name = "3", e.scaleX = 1, e.scaleY = 1,
                e.width = 141, e.x = 465, e.y = 5, e.elementsContent = [this._Image20_i(), this.label_3_i()],
                e;
        }, u._Image20_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_01_png",
                e.verticalCenter = 4.5, e;
        }, u.label_3_i = function() {
            var e = new eui.Label();
            return this.label_3 = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = .5,
                e.size = 20, e.stroke = 2, e.strokeColor = 16522074, e.text = "Big Wave Gold Coin", e.textColor = 16777215,
                e.verticalCenter = 53.5, e;
        }, u.group_canGet4_i = function() {
            var e = new eui.Group();
            return this.group_canGet4 = e, e.height = 157, e.name = "4", e.scaleX = 1, e.scaleY = 1,
                e.width = 141, e.x = 105, e.y = 176, e.elementsContent = [this._Image21_i(), this._Label3_i()],
                e;
        }, u._Image21_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_02_png",
                e.verticalCenter = 4.5, e;
        }, u._Label3_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.horizontalCenter = .5, e.size = 20, e.stroke = 2,
                e.strokeColor = 16522074, e.text = "1000 diamonds", e.textColor = 16777215, e.verticalCenter = 53.5,
                e;
        }, u.group_canGet5_i = function() {
            var e = new eui.Group();
            return this.group_canGet5 = e, e.height = 157, e.name = "5", e.scaleX = 1, e.scaleY = 1,
                e.width = 141, e.x = 249, e.y = 176, e.elementsContent = [this._Image22_i(), this._Label4_i()],
                e;
        }, u._Image22_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_02_png",
                e.verticalCenter = 4.5, e;
        }, u._Label4_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.horizontalCenter = .5, e.size = 20, e.stroke = 2,
                e.strokeColor = 16522074, e.text = "1500 diamonds", e.textColor = 16777215, e.verticalCenter = 53.5,
                e;
        }, u.group_canGet6_i = function() {
            var e = new eui.Group();
            return this.group_canGet6 = e, e.height = 157, e.name = "6", e.scaleX = 1, e.scaleY = 1,
                e.width = 141, e.x = 393, e.y = 176, e.elementsContent = [this._Image23_i(), this._Image24_i(), this._Label5_i()],
                e;
        }, u._Image23_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.source = "tower_JPD_png", e.y = 23, e;
        }, u._Image24_i = function() {
            var e = new eui.Image();
            return e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.source = "tower_JP4_png",
                e.verticalCenter = 12.5, e;
        }, u._Label5_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.horizontalCenter = .5, e.size = 18, e.stroke = 2,
                e.strokeColor = 16522074, e.text = "Super Battery Pack", e.textColor = 16777215, e.verticalCenter = 53.5,
                e;
        }, u.button_get_i = function() {
            var e = new eui.Button();
            return this.button_get = e, e.label = "", e.x = 54.96, e.y = 710, e.skinName = r,
                e;
        }, u.button_get_video_i = function() {
            var e = new eui.Button();
            return this.button_get_video = e, e.label = "", e.x = 345, e.y = 710, e.skinName = a,
                e;
        }, u.image_tishi_i = function() {
            var e = new eui.Image();
            return this.image_tishi = e, e.height = 52, e.source = "ui_qd_04_03_png", e.width = 131,
                e.x = 480.34, e.y = 784.68, e;
        }, u.banner_group_i = function() {
            var e = new eui.Group();
            return this.banner_group = e, e.bottom = 0, e.height = 200, e.left = 0, e.width = 640,
                e.elementsContent = [this.banner_icon_0_i(), this.banner_button_0_i()], e;
        }, u.banner_icon_0_i = function() {
            var e = new eui.Image();
            return this.banner_icon_0 = e, e.height = 200, e.left = 0, e.source = "icon-144_png",
                e.verticalCenter = 0, e.width = 640, e;
        }, u.banner_button_0_i = function() {
            var e = new eui.Button();
            return this.banner_button_0 = e, e.bottom = 0, e.height = 200, e.horizontalCenter = 0,
                e.label = "", e.scaleX = 1, e.scaleY = 1, e.width = 640, e.x = 0, e.y = 0, e.skinName = o,
                e;
        }, u.group_close_i = function() {
            var e = new eui.Group();
            return this.group_close = e, e.anchorOffsetY = 40, e.height = 40, e.horizontalCenter = 0,
                e.width = 200, e.y = 892, e.elementsContent = [this._Label6_i(), this.button_close1_i()],
                e;
        }, u._Label6_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1,
                e.size = 20, e.text = "no thank!", e.verticalCenter = 0, e;
        }, u.button_close1_i = function() {
            var e = new eui.Button();
            return this.button_close1 = e, e.enabled = !0, e.height = 40, e.horizontalCenter = 0,
                e.label = "                    ", e.scaleX = 1, e.scaleY = 1, e.skinName = "skins.ProgressBarSkin",
                e.verticalCenter = 0, e.width = 120, e;
        }, i;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MySupplySkin.exml"] = window.MySupplySkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "img", "moregame_icon_0", "moregame_name_0", "moregame_button_0", "moregame_0", "moregame_icon_1", "moregame_name_1", "moregame_button_1", "moregame_1", "moregame_icon_2", "moregame_name_2", "moregame_button_2", "moregame_2", "moregame_icon_3", "moregame_name_3", "moregame_button_3", "moregame_3", "moregame_icon_4", "moregame_name_4", "moregame_button_4", "moregame_4", "moregame_icon_5", "moregame_name_5", "moregame_button_5", "moregame_5", "moregame_group", "rewardImg", "rewardValue", "get_button", "get_type", "get_label", "buttonGuide", "buy_group", "free_label", "other_group", "boss_group", "all_group", "close_button", "close_group", "banner_icon_0", "banner_button_0", "banner_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i(), this.close_group_i(), this.banner_group_i()];
        }
        e(n, i);
        var r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            u = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            _ = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            s = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "hyzw_neir01_png", e.percentWidth = 100,
                        e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            l = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_button_05_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_button_02_png")])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3),
                        e.source = "ui_button_03_png", e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.bold = !0, e.horizontalCenter = 0, e.stroke = 2,
                        e.strokeColor = 3375106, e.touchEnabled = !1, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            h = function(i) {
                function n() {
                    i.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(n, i);
                var r = n.prototype;
                return r._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(52, 38, 24, 3), e.source = "ui_button_03_png",
                        e.percentWidth = 100, e;
                }, r.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, n;
            }(eui.Skin),
            c = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "icon-144_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            g = n.prototype;
        return g.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = 1, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, g.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.height = 400, e.width = 640, e.x = 0, e.y = 200, e.elementsContent = [this.boss_group_i()],
                e;
        }, g.boss_group_i = function() {
            var e = new eui.Group();
            return this.boss_group = e, e.anchorOffsetY = 750, e.height = 750, e.scaleX = 1,
                e.scaleY = 1, e.width = 640, e.x = 0, e.y = 760, e.elementsContent = [this.img_i(), this.moregame_group_i(), this.other_group_i()],
                e;
        }, g.img_i = function() {
            var e = new eui.Image();
            return this.img = e, e.scale9Grid = new egret.Rectangle(24, 25, 7, 6), e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_ktjl_png", e.x = 72, e.y = 52, e;
        }, g.moregame_group_i = function() {
            var e = new eui.Group();
            return this.moregame_group = e, e.scaleX = 1, e.scaleY = 1, e.x = 41, e.y = 134,
                e.elementsContent = [this._Image1_i(), this.moregame_0_i(), this.moregame_1_i(), this.moregame_2_i(), this.moregame_3_i(), this.moregame_4_i(), this.moregame_5_i()],
                e;
        }, g._Image1_i = function() {
            var e = new eui.Image();
            return e.height = 452, e.scale9Grid = new egret.Rectangle(20, 20, 60, 60), e.source = "hyzw_kuang_png",
                e.width = 578, e.x = -10, e.y = -10, e;
        }, g.moregame_0_i = function() {
            var e = new eui.Group();
            return this.moregame_0 = e, e.height = 196, e.width = 170, e.x = 14, e.y = 14, e.elementsContent = [this.moregame_icon_0_i(), this._Image2_i(), this.moregame_name_0_i(), this.moregame_button_0_i()],
                e;
        }, g.moregame_icon_0_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_0 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image2_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir01_png", e;
        }, g.moregame_name_0_i = function() {
            var e = new eui.Label();
            return this.moregame_name_0 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_0_i = function() {
            var e = new eui.Button();
            return this.moregame_button_0 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = r, e;
        }, g.moregame_1_i = function() {
            var e = new eui.Group();
            return this.moregame_1 = e, e.height = 196, e.width = 170, e.x = 194, e.y = 14,
                e.elementsContent = [this.moregame_icon_1_i(), this._Image3_i(), this.moregame_name_1_i(), this.moregame_button_1_i()],
                e;
        }, g.moregame_icon_1_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_1 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image3_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir02_png", e;
        }, g.moregame_name_1_i = function() {
            var e = new eui.Label();
            return this.moregame_name_1 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_1_i = function() {
            var e = new eui.Button();
            return this.moregame_button_1 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = a, e;
        }, g.moregame_2_i = function() {
            var e = new eui.Group();
            return this.moregame_2 = e, e.height = 196, e.width = 170, e.x = 374, e.y = 14,
                e.elementsContent = [this.moregame_icon_2_i(), this._Image4_i(), this.moregame_name_2_i(), this.moregame_button_2_i()],
                e;
        }, g.moregame_icon_2_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_2 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image4_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir03_png", e;
        }, g.moregame_name_2_i = function() {
            var e = new eui.Label();
            return this.moregame_name_2 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_2_i = function() {
            var e = new eui.Button();
            return this.moregame_button_2 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = o, e;
        }, g.moregame_3_i = function() {
            var e = new eui.Group();
            return this.moregame_3 = e, e.height = 196, e.width = 170, e.x = 14, e.y = 220,
                e.elementsContent = [this.moregame_icon_3_i(), this._Image5_i(), this.moregame_name_3_i(), this.moregame_button_3_i()],
                e;
        }, g.moregame_icon_3_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_3 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image5_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir01_png", e;
        }, g.moregame_name_3_i = function() {
            var e = new eui.Label();
            return this.moregame_name_3 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_3_i = function() {
            var e = new eui.Button();
            return this.moregame_button_3 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = u, e;
        }, g.moregame_4_i = function() {
            var e = new eui.Group();
            return this.moregame_4 = e, e.height = 196, e.width = 170, e.x = 194, e.y = 220,
                e.elementsContent = [this.moregame_icon_4_i(), this._Image6_i(), this.moregame_name_4_i(), this.moregame_button_4_i()],
                e;
        }, g.moregame_icon_4_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_4 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image6_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir02_png", e;
        }, g.moregame_name_4_i = function() {
            var e = new eui.Label();
            return this.moregame_name_4 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_4_i = function() {
            var e = new eui.Button();
            return this.moregame_button_4 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = _, e;
        }, g.moregame_5_i = function() {
            var e = new eui.Group();
            return this.moregame_5 = e, e.height = 196, e.width = 170, e.x = 374, e.y = 220,
                e.elementsContent = [this.moregame_icon_5_i(), this._Image7_i(), this.moregame_name_5_i(), this.moregame_button_5_i()],
                e;
        }, g.moregame_icon_5_i = function() {
            var e = new eui.Image();
            return this.moregame_icon_5 = e, e.anchorOffsetX = 81, e.anchorOffsetY = 81, e.height = 162,
                e.source = "icon-144_png", e.width = 162, e.x = 85, e.y = 85, e;
        }, g._Image7_i = function() {
            var e = new eui.Image();
            return e.source = "hyzw_neir03_png", e;
        }, g.moregame_name_5_i = function() {
            var e = new eui.Label();
            return this.moregame_name_5 = e, e.anchorOffsetX = 85, e.anchorOffsetY = 15, e.bold = !0,
                e.fontFamily = "Microsoft YaHei", e.height = 30, e.size = 25, e.text = "Little Survivor",
                e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 170,
                e.x = 85, e.y = 175, e;
        }, g.moregame_button_5_i = function() {
            var e = new eui.Button();
            return this.moregame_button_5 = e, e.alpha = 0, e.height = 196, e.label = "", e.width = 170,
                e.x = 0, e.y = 0, e.skinName = s, e;
        }, g.other_group_i = function() {
            var e = new eui.Group();
            return this.other_group = e, e.height = 300, e.scaleX = 1, e.scaleY = 1, e.width = 640,
                e.x = 0, e.y = 450, e.elementsContent = [this.rewardImg_i(), this.rewardValue_i(), this._Rect1_i(), this._Rect2_i(), this._Rect3_i(), this._Rect4_i(), this.get_button_i(), this.buy_group_i(), this.free_label_i()],
                e;
        }, g.rewardImg_i = function() {
            var e = new eui.Image();
            return this.rewardImg = e, e.scaleX = 1.3, e.scaleY = 1.3, e.source = "ui_money_02_png",
                e.x = 186, e.y = 15.52, e;
        }, g.rewardValue_i = function() {
            var e = new eui.Label();
            return this.rewardValue = e, e.size = 35, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "999.9KK", e.textAlign = "left", e.width = 200, e.x = 273.66, e.y = 34.48,
                e;
        }, g._Rect1_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetX = 0, e.fillAlpha = .4, e.height = 60, e.width = 172, e.x = 0,
                e.y = 20, e;
        }, g._Rect2_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetX = 0, e.fillAlpha = .4, e.height = 60, e.width = 197, e.x = 443,
                e.y = 20, e;
        }, g._Rect3_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 20, e.width = 640, e.x = 0, e.y = 0, e;
        }, g._Rect4_i = function() {
            var e = new eui.Rect();
            return e.fillAlpha = .4, e.height = 20, e.width = 640, e.x = 0, e.y = 80, e;
        }, g.get_button_i = function() {
            var e = new eui.Button();
            return this.get_button = e, e.anchorOffsetX = 125, e.anchorOffsetY = 37.5, e.enabled = !0,
                e.label = "", e.width = 250, e.x = 320, e.y = 149, e.skinName = l, e;
        }, g.buy_group_i = function() {
            var e = new eui.Group();
            return this.buy_group = e, e.anchorOffsetX = 96.5, e.anchorOffsetY = 23, e.touchChildren = !1,
                e.touchEnabled = !1, e.width = 193, e.x = 320, e.y = 149, e.elementsContent = [this.get_type_i(), this.get_label_i(), this.buttonGuide_i()],
                e;
        }, g.get_type_i = function() {
            var e = new eui.Image();
            return this.get_type = e, e.anchorOffsetX = 20, e.anchorOffsetY = 20.5, e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_share_02_png", e.touchEnabled = !1, e.x = 26, e.y = 23,
                e;
        }, g.get_label_i = function() {
            var e = new eui.Label();
            return this.get_label = e, e.anchorOffsetY = 15, e.bold = !0, e.size = 30, e.stroke = 3,
                e.strokeColor = 10311475, e.text = "3 Times", e.textAlign = "center", e.textColor = 16777215,
                e.touchEnabled = !1, e.width = 150, e.x = 33.51, e.y = 23, e;
        }, g.buttonGuide_i = function() {
            var e = new eui.Image();
            return this.buttonGuide = e, e.rotation = 241.49, e.scaleX = -1, e.scaleY = 1, e.source = "ui_yindao2_png",
                e.x = 158, e.y = 20, e;
        }, g.free_label_i = function() {
            var e = new eui.Label();
            return this.free_label = e, e.anchorOffsetX = 100, e.anchorOffsetY = 15, e.bold = !0,
                e.scaleX = 1, e.scaleY = 1, e.size = 30, e.stroke = 3, e.strokeColor = 10311475,
                e.text = "Free", e.textAlign = "center", e.textColor = 16777215, e.touchEnabled = !1,
                e.width = 200, e.x = 321, e.y = 148.5, e;
        }, g.close_group_i = function() {
            var e = new eui.Group();
            return this.close_group = e, e.anchorOffsetX = 90, e.anchorOffsetY = 30, e.height = 30,
                e.width = 180, e.x = 320, e.y = 1e3, e.elementsContent = [this._Label1_i(), this.close_button_i()],
                e;
        }, g._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.size = 20, e.stroke = 1, e.text = "Get it directly>>", e.textAlign = "center",
                e.width = 167, e.x = 7.73, e.y = 3.68, e;
        }, g.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.alpha = 0, e.anchorOffsetX = 100, e.height = 30,
                e.label = "", e.width = 200, e.x = 90, e.y = 0, e.skinName = h, e;
        }, g.banner_group_i = function() {
            var e = new eui.Group();
            return this.banner_group = e, e.anchorOffsetY = 200, e.height = 200, e.width = 640,
                e.y = 1136, e.elementsContent = [this.banner_icon_0_i(), this.banner_button_0_i()],
                e;
        }, g.banner_icon_0_i = function() {
            var e = new eui.Image();
            return this.banner_icon_0 = e, e.height = 200, e.source = "icon-144_png", e.width = 640,
                e.x = 0, e.y = 0, e;
        }, g.banner_button_0_i = function() {
            var e = new eui.Button();
            return this.banner_button_0 = e, e.alpha = 0, e.height = 200, e.label = "", e.width = 640,
                e.x = 0, e.y = 0, e.skinName = c, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyTaskSkin.exml"] = window.MyTaskSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "ach_group", "ach_scroller", "task_group", "task_scroller", "close_button", "task_button", "ach_button", "all_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i()];
        }
        e(n, i);
        var r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_close_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_menuname_01_01_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_menuname_01_01_png")])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_menuname_01_02_png",
                        e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ui_menuname_02_01_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "ui_menuname_02_01_png")])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return this._Image1 = e, e.percentHeight = 100, e.source = "ui_menuname_02_02_png",
                        e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            u = n.prototype;
        return u.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, u.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.height = 840, e.width = 600, e.x = 20, e.y = 100, e.elementsContent = [this._Image1_i(), this._Image2_i(), this.ach_scroller_i(), this.task_scroller_i(), this.close_button_i(), this.task_button_i(), this.ach_button_i()],
                e;
        }, u._Image1_i = function() {
            var e = new eui.Image();
            return e.height = 840, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3), e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_01_01_png", e.width = 600, e.x = 0, e.y = 0, e;
        }, u._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 730, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 88, e;
        }, u.ach_scroller_i = function() {
            var e = new eui.Scroller();
            return this.ach_scroller = e, e.height = 685, e.scaleX = 1, e.scaleY = 1, e.width = 500,
                e.x = 49, e.y = 110, e.viewport = this.ach_group_i(), e;
        }, u.ach_group_i = function() {
            var e = new eui.Group();
            return this.ach_group = e, e.layout = this._VerticalLayout1_i(), e;
        }, u._VerticalLayout1_i = function() {
            var e = new eui.VerticalLayout();
            return e.gap = 0, e;
        }, u.task_scroller_i = function() {
            var e = new eui.Scroller();
            return this.task_scroller = e, e.height = 685, e.scaleX = 1, e.scaleY = 1, e.width = 500,
                e.x = 49, e.y = 110, e.viewport = this.task_group_i(), e;
        }, u.task_group_i = function() {
            var e = new eui.Group();
            return this.task_group = e, e.layout = this._VerticalLayout2_i(), e;
        }, u._VerticalLayout2_i = function() {
            var e = new eui.VerticalLayout();
            return e.gap = 0, e;
        }, u.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.height = 66, e.label = "", e.scaleX = 1, e.scaleY = 1,
                e.width = 66, e.x = 17.33, e.y = 16, e.skinName = r, e;
        }, u.task_button_i = function() {
            var e = new eui.Button();
            return this.task_button = e, e.label = "", e.scaleX = 1, e.scaleY = 1, e.x = 112,
                e.y = 10, e.skinName = a, e;
        }, u.ach_button_i = function() {
            var e = new eui.Button();
            return this.ach_button = e, e.label = "", e.scaleX = 1, e.scaleY = 1, e.x = 305.66,
                e.y = 10, e.skinName = o, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyUpgradeSkin.exml"] = window.MyUpgradeSkin = function(i) {
        function n() {
            i.call(this), this.skinParts = ["bg_rect", "close_button", "upgrade_group", "upgrade_scroller", "help5_img", "help5_button", "help5_group", "all_group"],
                this.height = 1136, this.width = 640, this.elementsContent = [this.bg_rect_i(), this.all_group_i()];
        }
        e(n, i);
        var r = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_close_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            a = function(t) {
                function i() {
                    t.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
                        this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])];
                }
                e(i, t);
                var n = i.prototype;
                return n._Image1_i = function() {
                    var e = new eui.Image();
                    return e.percentHeight = 100, e.source = "ui_01_10_png", e.percentWidth = 100, e;
                }, n.labelDisplay_i = function() {
                    var e = new eui.Label();
                    return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
                }, i;
            }(eui.Skin),
            o = n.prototype;
        return o.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, o.all_group_i = function() {
            var e = new eui.Group();
            return this.all_group = e, e.height = 840, e.width = 600, e.x = 20, e.y = 100, e.elementsContent = [this._Image1_i(), this._Image2_i(), this.close_button_i(), this._Image3_i(), this._Label1_i(), this.upgrade_scroller_i(), this.help5_group_i()],
                e;
        }, o._Image1_i = function() {
            var e = new eui.Image();
            return e.height = 840, e.scale9Grid = new egret.Rectangle(35, 34, 2, 3), e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_01_01_png", e.width = 600, e.x = 0, e.y = 0, e;
        }, o._Image2_i = function() {
            var e = new eui.Image();
            return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 730, e.scale9Grid = new egret.Rectangle(27, 24, 1, 2),
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_01_03_png", e.width = 560, e.x = 20,
                e.y = 88, e;
        }, o.close_button_i = function() {
            var e = new eui.Button();
            return this.close_button = e, e.height = 66, e.label = "", e.scaleX = 1, e.scaleY = 1,
                e.width = 66, e.x = 17.33, e.y = 16, e.skinName = r, e;
        }, o._Image3_i = function() {
            var e = new eui.Image();
            return e.height = 80, e.scale9Grid = new egret.Rectangle(28, 17, 1, 2), e.scaleX = 1,
                e.scaleY = 1, e.source = "ui_01_07_png", e.width = 250, e.x = 175, e.y = 10, e;
        }, o._Label1_i = function() {
            var e = new eui.Label();
            return e.bold = !0, e.scaleX = 1, e.scaleY = 1, e.size = 50, e.stroke = 2, e.text = "Enhance",
                e.x = 200, e.y = 23, e;
        }, o.upgrade_scroller_i = function() {
            var e = new eui.Scroller();
            return this.upgrade_scroller = e, e.height = 685, e.scaleX = 1, e.scaleY = 1, e.width = 500,
                e.x = 49, e.y = 110, e.viewport = this.upgrade_group_i(), e;
        }, o.upgrade_group_i = function() {
            var e = new eui.Group();
            return this.upgrade_group = e, e.layout = this._VerticalLayout1_i(), e;
        }, o._VerticalLayout1_i = function() {
            var e = new eui.VerticalLayout();
            return e.gap = 0, e;
        }, o.help5_group_i = function() {
            var e = new eui.Group();
            return this.help5_group = e, e.height = 840, e.scaleX = 1, e.scaleY = 1, e.touchChildren = !0,
                e.touchEnabled = !0, e.touchThrough = !1, e.width = 600, e.x = 0, e.y = 0, e.elementsContent = [this._Rect1_i(), this._Rect2_i(), this._Rect3_i(), this._Rect4_i(), this._Rect5_i(), this._Label2_i(), this.help5_img_i(), this.help5_button_i()],
                e;
        }, o._Rect1_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 600, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.x = -20, e.y = -500, e;
        }, o._Rect2_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 180, e.scaleX = 1, e.scaleY = 1,
                e.width = 400, e.x = -20, e.y = 100, e;
        }, o._Rect3_i = function() {
            var e = new eui.Rect();
            return e.anchorOffsetY = 0, e.fillAlpha = .8, e.height = 1e3, e.scaleX = 1, e.scaleY = 1,
                e.width = 640, e.x = -20, e.y = 280, e;
        }, o._Rect4_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillAlpha = .5, e.fillColor = 0,
                e.height = 80, e.scaleX = 1, e.scaleY = 1, e.width = 220, e.x = 121, e.y = 276,
                e;
        }, o._Rect5_i = function() {
            var e = new eui.Rect();
            return e.ellipseHeight = 20, e.ellipseWidth = 20, e.fillColor = 16777215, e.height = 80,
                e.scaleX = 1, e.scaleY = 1, e.strokeWeight = 2, e.width = 220, e.x = 115, e.y = 270,
                e;
        }, o._Label2_i = function() {
            var e = new eui.Label();
            return e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 25,
                e.text = "Strengthen your ability to help you fight", e.textAlign = "left", e.textColor = 0, e.width = 200, e.x = 125,
                e.y = 285, e;
        }, o.help5_img_i = function() {
            var e = new eui.Image();
            return this.help5_img = e, e.anchorOffsetX = 50.5, e.anchorOffsetY = 42, e.rotation = -135,
                e.scaleX = 1, e.scaleY = 1, e.source = "ui_yindao1_png", e.x = 370, e.y = 245, e;
        }, o.help5_button_i = function() {
            var e = new eui.Button();
            return this.help5_button = e, e.alpha = 0, e.height = 100, e.label = "", e.width = 180,
                e.x = 371, e.y = 132, e.skinName = a, e;
        }, n;
    }(eui.Skin), generateEUI.paths["resource/eui_skins/MySkin/MyWarningSkin.exml"] = window.MyWarningSkin = function(t) {
        function i() {
            t.call(this), this.skinParts = ["bg_rect", "warning_img"], this.height = 1136,
                this.width = 640, this.elementsContent = [this.bg_rect_i(), this.warning_img_i()];
        }
        e(i, t);
        var n = i.prototype;
        return n.bg_rect_i = function() {
            var e = new eui.Rect();
            return this.bg_rect = e, e.anchorOffsetY = 900, e.fillAlpha = .7, e.height = 1800,
                e.width = 640, e.x = 0, e.y = 568, e;
        }, n.warning_img_i = function() {
            var e = new eui.Image();
            return this.warning_img = e, e.source = "ui_bossOut_png", e.x = 0, e.y = 270, e;
        }, i;
    }(eui.Skin);