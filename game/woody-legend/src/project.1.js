window.__require = (function e(f, v, C) {
	function a(_, w) {
		if (!v[_]) {
			if (!f[_]) {
				var N = _.split('/')
				if (((N = N[N.length - 1]), !f[N])) {
					var k = 'function' == typeof __require && __require
					if (!w && k) return k(N, !0)
					if (b) return b(N, !0)
					throw new Error("Cannot find module '" + _ + "'")
				}
				_ = N
			}
			var L = (v[_] = { exports: {} })
			f[_][0].call(
				L.exports,
				function (v) {
					return a(f[_][1][v] || v)
				},
				L,
				L.exports,
				e,
				f,
				v,
				C
			)
		}
		return v[_].exports
	}
	for (
		var b = 'function' == typeof __require && __require, _ = 0;
		_ < C.length;
		_++
	)
		a(C[_])
	return a
})(
	{
		AStarMoveType: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'd8b5aOv2ydICLvN0ax2hzqs', 'AStarMoveType')
				var b = cc.Enum({ FOUR_DIRECTION: -1, EIGHT_DIRECTION: -1 })
				;(v.exports = b), cc._RF.pop()
			},
			{},
		],
		AStarStep: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'cddcfi9HolIJqBlrTmLMDgD', 'AStarStep')
				var b = cc.Class({
					properties: function () {
						return {
							g: { default: 0, type: cc.Integer },
							h: { default: 0, type: cc.Integer },
							f: {
								get: function () {
									return this.g + this.h
								},
							},
							position: { default: new cc.Vec2() },
							last: { default: null, type: b, serializable: !1 },
						}
					},
					ctor: function () {
						arguments.length > 0 &&
							arguments[0] instanceof cc.Vec2 &&
							(this.position = arguments[0])
					},
					equalTo: function (f) {
						return (
							f instanceof b && this.position.equals(f.position)
						)
					},
					toString: function () {
						return (
							'(position: ' +
							this.position +
							' g: ' +
							this.g +
							' h: ' +
							this.h +
							' f: ' +
							this.f +
							')'
						)
					},
				})
				;(v.exports = b), cc._RF.pop()
			},
			{},
		],
		AStar: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'c6b32yKT3RKT7HVcYN3ryNr', 'AStar')
				var b = f('AStarStep'),
					_ = f('AStarMoveType')
				cc.Class({
					extends: cc.Component,
					properties: {
						barrierLayerName: 'barrier',
						moveType: { default: _.FOUR_DIRECTION, type: _ },
					},
					editor: { requireComponent: cc.TiledMap },
					onLoad: function () {
						;(this._open = []), (this._closed = [])
					},
					start: function () {},
					_indexOfStepArray: function (f, v) {
						for (var C = 0; C < v.length; ++C)
							if (f.equals(v[C].position)) return C
						return -1
					},
					_insertToOpen: function (f) {
						for (
							var v = f.f, C = this._open.length, b = 0;
							b < C && !(v <= this._open[b].f);
							++b
						);
						this._open.splice(b, 0, f)
					},
					moveToward: function (f, v) {
						;(this._closed = []), (this._open = [])
						var C = []
						this._open.push(new b(f))
						do {
							var _ = this._open.shift()
							if ((this._closed.push(_), _.position.equals(v))) {
								var w = _
								do {
									C.unshift(w.position), (w = w.last)
								} while (null !== w)
								;(this._open = []), (this._closed = [])
								break
							}
							for (
								var N = this._borderMovablePoints(_.position),
									k = 0;
								k < N.length;
								++k
							) {
								var L = N[k]
								if (
									-1 ==
									this._indexOfStepArray(L, this._closed)
								) {
									var B = new b(L),
										S = this._costToMove(L, v),
										M = this._indexOfStepArray(
											L,
											this._open
										)
									if (-1 == M) {
										;(B.last = _), (B.g = _.g + S)
										var I = L.sub(v)
										;(B.h = Math.abs(I.x) + Math.abs(I.y)),
											this._insertToOpen(B)
									} else
										(B = this._open[M]),
											_.g + S < B.g &&
												((B.g = _.g + S),
												this._open.splice(M, 1),
												this._insertToOpen(B))
								} else N.splice(k, 1), k--
							}
						} while (this._open.length > 0)
						return C
					},
					_costToMove: function (f, v) {
						return this.moveType == _.EIGHT_DIRECTION
							? f.x != v.x && f.y != v.y
								? 14
								: 10
							: 1
					},
					getGidByPos: function (f) {
						var v = cc
							.find('Canvas')
							.getComponent('Game')
							.getMapTypeByMapPos(f.x, f.y)
						if (-1 != v && 0 != v) {
							var C = v.split('-')
							3 == parseInt(C[0]) &&
								9 == parseInt(C[0]) &&
								(v = 0)
						}
						return v
					},
					_borderMovablePoints: function (f) {
						var v = [],
							C = !1,
							b = !1,
							w = !1,
							N = !1,
							k = cc.v2(f.x, f.y - 1)
						0 === this.getGidByPos(k) && (v.push(k), (C = !0))
						var L = cc.v2(f.x, f.y + 1)
						0 === this.getGidByPos(L) && (v.push(L), (b = !0))
						var B = cc.v2(f.x - 1, f.y)
						0 === this.getGidByPos(B) && (v.push(B), (w = !0))
						var S = cc.v2(f.x + 1, f.y)
						if (
							(0 === this.getGidByPos(S) && (v.push(S), (N = !0)),
							this.moveType == _.EIGHT_DIRECTION)
						) {
							var M = cc.v2(f.x - 1, f.y - 1)
							C && w && 0 === this.getGidByPos(M) && v.push(M)
							var I = cc.v2(f.x + 1, f.y - 1)
							C && N && 0 === this.getGidByPos(I) && v.push(I)
							var x = cc.v2(f.x - 1, f.y + 1)
							b && w && 0 === this.getGidByPos(x) && v.push(x)
							var q = cc.v2(f.x + 1, f.y + 1)
							b && N && 0 === this.getGidByPos(q) && v.push(q)
						}
						return v
					},
				}),
					cc._RF.pop()
			},
			{ AStarMoveType: 'AStarMoveType', AStarStep: 'AStarStep' },
		],
		AdsManager: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '2af3fK2MsJACqZfhVyyJnjI', 'AdsManager'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('../platforms/pfLq'),
					_ = f('./AudioManager'),
					w = f('./UtilManager')
				let N = {
					request: { lastTime: 0, nextTime: 0, interval: 0 },
					screenAd: {
						lastTime: 0,
						nextTime: 0,
						interval: 30,
						timeout: 30,
					},
					rewardAd: {
						lastTime: 0,
						nextTime: 0,
						interval: 0,
						timeout: 30,
					},
					status: { reward: !1, screen: !1 },
				}
				switch (b.default.pfName) {
					case 'shareit':
						N.rewardAd.interval = 30
						break
					case 'vigoo':
						N.screenAd.interval = 0
						break
					case 'cy':
						;(N.request.interval = 0), (N.screenAd.interval = 90)
						break
					case 'admobapp':
						N.screenAd.interval = 60
				}
				let s = (f) => {
						let v = new Date().getTime()
						if (v < N.request.nextTime) return !1
						;(N.request.lastTime = v),
							(N.request.nextTime = v + 1e3 * N.request.interval),
							(N[f] = N[f] || {})
						let C = N[f]
						return !(
							v < C.nextTime ||
							((C.lastTime = v),
							(C.nextTime = v + 1e3 * C.interval),
							0)
						)
					},
					c = (f) => {
						let v = new Date().getTime()
						N[f] = N[f] || {}
						let C = N[f]
						return v > C.lastTime + 1e3 * C.timeout
					},
					r = (f, v = 0, C = 10) => {
						N[f] = N[f] || {}
						let b = N[f]
						b.interval &&
							((v = v || b.lastTime), (b.nextTime = v + 1e3 * C))
					}
				;(C.default = {
					showRewardedAd(f, v, C, k) {
						if (
							((k = k || {}),
							(k = Object.assign({ checkStatus: !0 }, k)),
							console.log('=====showRewardedAd====1=', k),
							k.checkStatus && N.status.reward && !c('rewardAd'))
						)
							// return (
								// w.default.showTips(
								// 	b.default.lang('广告加载中')
								// ),
								// void console.warn(
								// 	'等待上一次请求响应，本次点击不生效'
								// )
							// )
						;(N.status.reward = !0), (_.default.muted = !0)
						let p = () => {
								f && f()
							},
							d = (f = !0) => {
								f &&
									w.default.showTips(
										b.default.lang('广告加载失败')
									),
									v && v()
							},
							u = (f) => {
								console.log(
									'=====广告回调结果=====',
									'h5' == b.default.appType
										? f
										: JSON.stringify(f)
								),
									setTimeout(() => {
										switch (
											((N.status.reward = !1),
											(_.default.muted = !1),
											f.type)
										) {
											case '1':
												r('rewardAd'), d()
												break
											case '2':
												w.default.showTips(
													b.default.lang('广告跳过')
												),
													C && C(),
													r(
														'request',
														new Date().getTime()
													)
												break
											case '3':
												r(
													'request',
													new Date().getTime()
												),
													p()
												break
											case '5':
												d(!1)
												break
											case '11':
												d()
										}
									}, 10)
							}
						if (!s('rewardAd'))
							return u({
								type: '11',
								desc: 'adsManager:广告冷却时间未到',
							})
						// switch (b.default.pfName) {
						// 	case 'vigoo':
						// 		b.default.vigoo.ShowExcitationVideoAdv(u)
						// 		break
						// 	case 'oppo':
						// 		b.default.oppo.ShowExcitationVideoAdv(u)
						// 		break
						// 	case 'shareit':
						// 		b.default.shareit.ShowExcitationVideoAdv(u)
						// 		break
						// 	case 'admobapp':
						// 		var L = k.scene || '',
						// 			B = k.subPortal || ''
						// 		;(b.default.admobapp.showRewardAdResult = u),
						// 			b.default.admobapp.callJsbMethod(
						// 				'showRewardAds',
						// 				{ scene: L, subPortal: B }
						// 			)
						// 		break
						// 	case 'hwapp':
						// 		if (!window.jsb) return
						// 		;(b.default.hw.showRewardAdResult = u),
						// 			b.default.hw.callJsbMethod('showRewardAds')
						// 		break
						// 	case 'stapp':
						// 		;(b.default.stapp.showRewardAdResult = u),
						// 			(L = k.scene || ''),
						// 			(B = k.subPortal || ''),
						// 			b.default.stapp.callJsbMethod(
						// 				'showRewardAds',
						// 				{ scene: L, subPortal: B }
						// 			)
						// 		break
						// 	case 'miapp':
						// 		;(p = () => {
						// 			b.default.miapp.uploadEvent('adSuccReward'),
						// 				f && f()
						// 		}),
						// 			b.default.miapp.uploadEvent('adShowReward'),
						// 			(b.default.miapp.showRewardAdResult = u),
						// 			(L = k.scene || ''),
						// 			(B = k.subPortal || ''),
						// 			b.default.miapp.callJsbMethod(
						// 				'showRewardAds',
						// 				{ scene: L, subPortal: B }
						// 			)
						// 		break
						// 	case 'hago':
						// 		b.default.hg.showRewardedAd(u)
						// 		break
						// 	case 'cy':
						// 		b.default.cy.showAd(3, u)
						// 		break
						// 	case 'tapapp':
						// 		;(L = k.scene || ''),
						// 			(b.default.tapapp.showRewardAdResult = u),
						// 			b.default.tapapp.callJsbMethod(
						// 				'showRewardAds',
						// 				{ scene: L }
						// 			)
						// 		break
						// 	default:
						// 		var S = { type: '3' },
						// 			M = 3e3,
						// 			I = Math.random()
						// 		I < 0.2
						// 			? ((S.type = '2'), (M = 0))
						// 			: I >= 0.2 && I < 0.3
						// 			? ((S.type = '1'), (M = 0))
						// 			: w.default.showTips(
						// 					'加载激励视频成功\r\n' +
						// 						M / 1e3 +
						// 						'秒后发起成功回调'
						// 			  ),
						// 			setTimeout(() => {
						// 				u(S)
						// 			}, M)
						// }

    
					},
					showScreenAd(f, v, C, k) {
						if (
							((f = f || {}),
							(f = Object.assign({ checkStatus: !0 }, f)),
							console.log('=====showScreenAd====2=', f),
							f.checkStatus && N.status.screen && !c('screenAd'))
						)
							return console.warn(
								'等待上一次请求响应，本次点击不生效'
							)
						;(N.status.screen = !0), (_.default.muted = !0)
						let p = () => {
								v && v()
							},
							d = () => {
								C && C()
							},
							u = (f) => {
								console.log(
									'=====广告回调结果=====',
									'h5' == b.default.appType
										? f
										: JSON.stringify(f)
								),
									setTimeout(() => {
										switch (
											((N.status.screen = !1),
											(_.default.muted = !1),
											f.type)
										) {
											case '1':
												r('screenAd'), d()
												break
											case '2':
												r(
													'request',
													new Date().getTime()
												),
													k && k()
												break
											case '3':
												r(
													'request',
													new Date().getTime()
												),
													p()
												break
											case '11':
												d()
										}
									}, 10)
							}
						if (!s('screenAd'))
							return u({
								type: '11',
								desc: 'adsManager:广告冷却时间未到',
							})
						let L = f.node || ''
						switch (b.default.pfName) {
							case 'vigoo':
								b.default.vigoo.ShowScreenVideo(L, u)
								break
							case 'oppo':
								return u({
									type: '1',
									desc: 'oppo:暂未接入插屏广告',
								})
							case 'shareit':
								b.default.shareit.ShowScreenVideo(L, u)
								break
							case 'admobapp':
								b.default.admobapp.showScreenAdResult = u
								var B = f.scene || ''
								b.default.admobapp.callJsbMethod(
									'showScreenAds',
									{ scene: B }
								)
								break
							case 'stapp':
								;(b.default.stapp.showScreenAdResult = u),
									(B = f.scene || ''),
									b.default.stapp.callJsbMethod(
										'showScreenAds',
										{ scene: B }
									)
								break
							case 'miapp':
								;(p = () => {
									b.default.miapp.uploadEvent('adSuccScreen'),
										v && v()
								}),
									b.default.miapp.uploadEvent('adShowScreen'),
									(b.default.miapp.showScreenAdResult = u),
									(B = f.scene || ''),
									b.default.miapp.callJsbMethod(
										'showScreenAds',
										{ scene: B }
									)
								break
							case 'hago':
								break
							case 'cy':
								b.default.cy.showAd(2, u)
								break
							case 'tapapp':
								;(b.default.tapapp.showScreenAdResult = u),
									(B = f.scene || ''),
									b.default.tapapp.callJsbMethod(
										'showScreenAds',
										{ scene: B }
									)
								break
							default:
								var S = { type: '3' },
									M = 3e3,
									I = Math.random()
								I < 0.2
									? ((S.type = '2'), (M = 0))
									: I >= 0.2 && I < 0.3
									? ((S.type = '1'), (M = 0))
									: w.default.showTips(
											'加载插屏广告成功\r\n' +
												M / 1e3 +
												'秒后发起成功回调'
									  ),
									setTimeout(() => {
										u(S)
									}, M)
						}
					},
					showBannerAd(f) {
						switch (
							((f = f || {}),
							console.log('=====showBannerAd=====', f),
							b.default.pfName)
						) {
							case 'admobapp':
							case 'tapapp':
								var v = f.position || ''
								b.default[
									b.default.pfName
								].callJsbMethod('showBanner', { position: v })
								break
							case 'stapp':
								if (!(v = f.position || '')) return
								b.default.stapp.callJsbMethod('showBanner', {
									position: v,
								})
								break
							case 'miapp':
								;(v = f.position || ''),
									b.default.miapp.callJsbMethod(
										'showBanner',
										{ position: v }
									)
						}
					},
					hiddenBannerAd() {
						switch (
							(console.log('=====hiddenBannerAd=====', f),
							b.default.pfName)
						) {
							case 'admobapp':
							case 'stapp':
							case 'miapp':
							case 'tapapp':
								var f = { scene: '' }
								b.default[b.default.pfName].callJsbMethod(
									'hiddenBanner',
									f
								)
						}
					},
					uploadRewardScene(f, ...v) {
						if (f && 0 != v.length)
							switch (b.default.pfName) {
								case 'stapp':
									b.default.stapp.callJsbMethod(
										'showRewardedBadgeView',
										{ scene: f, subPortal: v }
									)
							}
					},
				}),
					cc._RF.pop()
			},
			{
				'../platforms/pfLq': 'pfLq',
				'./AudioManager': 'AudioManager',
				'./UtilManager': 'UtilManager',
			},
		],
		AudioManager: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'eb274/8dgpGxIAyqLyeossw', 'AudioManager'),
					Object.defineProperty(C, '__esModule', { value: !0 }),
					(C.default = new (class {
						constructor() {
							;(this._bgId = null),
								(this._audioStatus = !0),
								(this._muted = !1),
								(this._shakeStatus = !0),
								(this.music = {}),
								(this._lastBgUrl = null),
								(this._bgStatus = '')
						}
						get audioStatus() {
							return this._audioStatus
						}
						set audioStatus(f) {
							;(this._audioStatus = f), (this.muted = !f)
						}
						get muted() {
							return this._muted
						}
						set muted(f) {
							;(f || this._audioStatus) &&
								((this._muted = f),
								f ? this.pauseAll() : this.resumeAll())
						}
						get shakeStatus() {
							return this._shakeStatus
						}
						set shakeStatus(f) {
							this._shakeStatus = f
						}
						init(f) {
							for (; f.length > 0; ) {
								let v = f.shift()
								this.loadRes(v)
							}
						}
						playMusic(f = 'play', v = '', C = !0, b = 1) {
							switch (f) {
								case 'play':
									if (!this._audioStatus || this._muted || !v)
										return
									if (this._lastBgUrl !== v)
										null !== this._bgId &&
											cc.audioEngine.stop(this._bgId)
									else if (null !== this._bgId)
										switch (this._bgStatus) {
											case 'play':
												return this._bgId
											case 'pause':
												return (
													cc.audioEngine.resume(
														this._bgId
													),
													(this._bgStatus = 'play'),
													this._bgId
												)
										}
									let f = this.music[v]
									if (f)
										return (
											(this._bgId = this.music[
												v
											].aid = cc.audioEngine.play(
												f.clip,
												C,
												b
											)),
											(this._bgStatus = 'play'),
											(this._lastBgUrl = v),
											this._bgId
										)
									this.loadRes(v, (f) => {
										;(this._bgId = this.music[
											v
										].aid = cc.audioEngine.play(f, C, b)),
											(this._bgStatus = 'play'),
											(this._lastBgUrl = v)
									})
									break
								case 'pause':
									if (!this._bgId) return
									setTimeout(() => {
										cc.audioEngine.pause(this._bgId),
											(this._bgStatus = 'pause')
									}, 10)
									break
								case 'resume':
									if (!this._audioStatus || !this._bgId)
										return
									setTimeout(() => {
										cc.audioEngine.resume(this._bgId),
											(this._bgStatus = 'play')
									}, 10)
									break
								case 'stop':
									if (!this._bgId) return
									setTimeout(() => {
										cc.audioEngine.stop(this._bgId),
											(this._bgStatus = 'stop')
									}, 10)
							}
						}
						play(f, v = !1, C = 1, b) {
							if (!this._audioStatus || this._muted) return
							let _ = this.music[f]
							if (_) {
								let f = cc.audioEngine.play(_.clip, v, C)
								b && b(f)
							} else
								this.loadRes(f, (f) => {
									let _ = cc.audioEngine.play(f, v, C)
									b && b(_)
								})
						}
						stopAll() {
							cc.audioEngine.stopAll()
						}
						pauseAll() {
							cc.audioEngine.pauseAll()
						}
						resumeAll() {
							cc.audioEngine.resumeAll()
						}
						shake() {}
						loadRes(f, v) {
							cc.loader.loadRes(f, cc.AudioClip, (C, b) => {
								C
									? console.error('load error:', f)
									: ((this.music[f] = this.music[f] || {}),
									  (this.music[f].clip = b),
									  v && v(b))
							})
						}
					})()),
					cc._RF.pop()
			},
			{},
		],
		BossDanmuAtk: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '6ec07aVPbJGUps9YY8YInNM', 'BossDanmuAtk')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						;(this.gameComponent = cc
							.find('Canvas')
							.getComponent('Game')),
							(this.player = this.gameComponent.getPlayer())
					},
					init: function (f) {
						;(this.id = f.id),
							(this.conf = b.bossDanmuAtkConf[this.id]),
							(this.atkPower = f.atkPower)
					},
					atk: function () {
						var f = this,
							v = this,
							C = this.conf,
							_ = 'weapon/1guai_zidan',
							w = 0,
							N = 0,
							k = 0,
							L = 1,
							B = setInterval(function () {
								if (w >= C.sheNum)
									return v.atkOver(), clearInterval(B)
								if (!v.node) return clearInterval(B)
								for (
									var h = function (w) {
											var B = void 0
											if (
												('my' == C.target
													? (B = cc
															.v2(
																v.node.x,
																v.node.y - 300
															)
															.sub(
																cc.v2(
																	v.node.x,
																	v.node.y
																)
															))
													: 'player' == C.target &&
													  (B = cc
															.v2(
																v.player.x,
																v.player.y
															)
															.sub(
																cc.v2(
																	v.node.x,
																	v.node.y
																)
															)),
												w > 0 &&
													C.dirDiff &&
													(N += Math.floor(
														Math.random() *
															C.dirDiff
													)),
												(B = B.rotate(
													(Math.PI / 180) * N
												)),
												C.sheChangeDir)
											)
												++k >= C.sheChangeNum &&
													((k = 0),
													(N += C.sheChangeDir * L),
													1 == L &&
														N >= C.dirMax / 2 &&
														(L = -1),
													-1 == L &&
														N <= -C.dirMax / 2 &&
														(L = 1)),
													f.scheduleOnce(function () {
														v.gameComponent.createEnemyAtkNode(
															{
																hitWall: !0,
																pos:
																	f.node
																		.position,
																atkPower:
																	f.atkPower,
																icon: _,
															},
															B
														)
													}, 0.01)
											else {
												var S = C.bulletNum
												'player' == C.target &&
													(S = C.bulletNum - 1)
												var M = C.dirMax / S
												if (C.isShan)
													for (
														var I =
																b.shanDanmuConf[
																	C.shanId
																],
															u = function (b) {
																for (
																	var w =
																			-C.dirMax /
																				2 +
																			M *
																				b,
																		N = B.rotate(
																			(Math.PI /
																				180) *
																				w
																		),
																		k = 0,
																		L = 0;
																	L <
																	I.num
																		.length;
																	L++
																) {
																	for (
																		var h = function (
																				C
																			) {
																				var b = void 0
																				if (
																					1 ==
																					I
																						.num[
																						L
																					]
																				)
																					b = N
																				else {
																					var w =
																							I.dir /
																							(I
																								.num[
																								L
																							] -
																								1),
																						B =
																							-I.dir /
																								2 +
																							w *
																								C
																					b = N.rotate(
																						(Math.PI /
																							180) *
																							B
																					)
																				}
																				f.scheduleOnce(
																					function () {
																						v.gameComponent.createEnemyAtkNode(
																							{
																								hitWall: !0,
																								pos:
																									f
																										.node
																										.position,
																								speAdd: k,
																								atkPower:
																									f.atkPower,
																								icon: _,
																							},
																							b
																						)
																					},
																					0.01
																				)
																			},
																			S = 0;
																		S <
																		I.num[
																			L
																		];
																		S++
																	)
																		h(S)
																	k +=
																		I.speDiff
																}
															},
															x = 0;
														x < C.bulletNum;
														x++
													)
														u(x)
												else
													for (
														var g = function (b) {
																var w =
																		-C.dirMax /
																			2 +
																		M * b,
																	N = B.rotate(
																		(Math.PI /
																			180) *
																			w
																	)
																f.scheduleOnce(
																	function () {
																		v.gameComponent.createEnemyAtkNode(
																			{
																				hitWall: !0,
																				pos:
																					f
																						.node
																						.position,
																				atkPower:
																					f.atkPower,
																				icon: _,
																			},
																			N
																		)
																	},
																	0.01
																)
															},
															q = 0;
														q < C.bulletNum;
														q++
													)
														g(q)
											}
										},
										S = 0;
									S < C.createNum;
									S++
								)
									h(S)
								w++
							}, C.atkDiff)
					},
					atkOver: function () {
						this.node &&
							this.node.getComponent('Enemy_Guai').atkOver()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		BoxReward: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '52d06eXVjlBULGOF3yz5qSc', 'BoxReward')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: { itemNode: cc.Prefab },
					start: function () {
						var f = this,
							v = this
						;(this.isOver = !1),
							(this.spine = this.node.getChildByName('spine')),
							this.spine
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (C, b) {
									var _ = C.animation ? C.animation.name : ''
									'huangjinbaoxiang_1' != _ || f.isOver
										? 'mianfeibaoxiang_1' != _ ||
										  f.isOver ||
										  ((f.isOver = !0),
										  v.spine
												.getComponent('sp.Skeleton')
												.setAnimation(
													1,
													'mianfeibaoxiang_2',
													!0
												))
										: ((f.isOver = !0),
										  v.spine
												.getComponent('sp.Skeleton')
												.setAnimation(
													1,
													'huangjinbaoxiang_2',
													!0
												))
								}),
							this.node
								.getChildByName('bg')
								.runAction(cc.fadeTo(0.2, 155)),
							this.node.runAction(
								cc.sequence(
									cc.delayTime(0.3),
									cc.callFunc(
										function () {
											;(this.node.getChildByName(
												'spine'
											).active = !0),
												'big' == this.type
													? this.node
															.getChildByName(
																'spine'
															)
															.getComponent(
																'sp.Skeleton'
															)
															.setAnimation(
																1,
																'huangjinbaoxiang_1',
																!1
															)
													: 'normal' == this.type &&
													  this.node
															.getChildByName(
																'spine'
															)
															.getComponent(
																'sp.Skeleton'
															)
															.setAnimation(
																1,
																'mianfeibaoxiang_1',
																!1
															)
										}.bind(this)
									)
								)
							),
							setTimeout(function () {
								;(v.node.getChildByName('close').active = !0),
									(v.node.getChildByName('Label').active = !0)
							}, 3e3)
					},
					init: function (f) {
						console.log('data', f),
							(this.type = f.type),
							(f = f.data)
						for (var v = 0; v < f.length; v++) {
							var C = cc.instantiate(this.itemNode)
							;(C.opacity = 0),
								(C.getChildByName('label').getComponent(
									cc.Label
								).string = cc.myself.changeNumToUnit(f[v].num)),
								this.node.getChildByName('content').addChild(C),
								C.runAction(
									cc.sequence(
										cc.delayTime(2 + 0.2 * v),
										cc.fadeIn(0.2)
									)
								)
							var _ = f[v].type
							if ('gold' == _)
								(cc.myself.gold += f[v].num),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										'ui/icon_gold'
									)
							else if ('diamond' == _)
								(cc.myself.diamond += f[v].num),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										'ui/icon_diamond'
									)
							else if ('scroll' == _) {
								for (
									var w = 0;
									w < cc.myself.scrollList.length;
									w++
								)
									if (
										cc.myself.scrollList[w].type ==
										f[v].type2 + 'Scroll'
									) {
										cc.myself.scrollList[w].num += f[v].num
										break
									}
								cc.myself.asyncShowImage(
									C.getChildByName('icon').getComponent(
										cc.Sprite
									),
									'ui/icon_' + f[v].type2 + 'Scroll'
								)
							} else if ('equip5' == _) {
								var N = {
									id: f[v].type2,
									wear: !1,
									strength: 0,
									guid: cc.myself.warehouseGUID + 1,
								}
								;(cc.myself.warehouseGUID += 1),
									cc.myself.warehouseList.push(N),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_jin1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.weaponConf[f[v].type2].icon
									)
							} else if ('equip4' == _) {
								var k = {
									id: f[v].type2,
									wear: !1,
									strength: 0,
									guid: cc.myself.warehouseGUID + 1,
								}
								;(cc.myself.warehouseGUID += 1),
									cc.myself.warehouseList.push(k),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_zi1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.weaponConf[f[v].type2].icon
									)
							} else if ('equip3' == _) {
								var L = {
									id: f[v].type2,
									wear: !1,
									strength: 0,
									guid: cc.myself.warehouseGUID + 1,
								}
								;(cc.myself.warehouseGUID += 1),
									cc.myself.warehouseList.push(L),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_lan1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.weaponConf[f[v].type2].icon
									)
							} else if ('equip2' == _) {
								var B = {
									id: f[v].type2,
									wear: !1,
									strength: 0,
									guid: cc.myself.warehouseGUID + 1,
								}
								;(cc.myself.warehouseGUID += 1),
									cc.myself.warehouseList.push(B),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_lv1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.weaponConf[f[v].type2].icon
									)
							} else if ('equip1' == _) {
								var S = {
									id: f[v].type2,
									wear: !1,
									strength: 0,
									guid: cc.myself.warehouseGUID + 1,
								}
								;(cc.myself.warehouseGUID += 1),
									cc.myself.warehouseList.push(S),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_bai1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.weaponConf[f[v].type2].icon
									)
							} else if ('workmate1' == _) {
								var M = {
									id: f[v].type2,
									wear: !1,
									star: 1,
									guid: cc.myself.workmateGUID + 1,
								}
								;(cc.myself.workmateGUID += 1),
									cc.myself.workmateList.push(M),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_bai1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.workmateConf[f[v].type2].icon
									)
							} else if ('workmate2' == _) {
								var I = {
									id: f[v].type2,
									wear: !1,
									star: 1,
									guid: cc.myself.workmateGUID + 1,
								}
								;(cc.myself.workmateGUID += 1),
									cc.myself.workmateList.push(I),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_lv1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.workmateConf[f[v].type2].icon
									)
							} else if ('workmate3' == _) {
								var x = {
									id: f[v].type2,
									wear: !1,
									star: 1,
									guid: cc.myself.workmateGUID + 1,
								}
								;(cc.myself.workmateGUID += 1),
									cc.myself.workmateList.push(x),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_lan1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.workmateConf[f[v].type2].icon
									)
							} else if ('workmate4' == _) {
								var q = {
									id: f[v].type2,
									wear: !1,
									star: 1,
									guid: cc.myself.workmateGUID + 1,
								}
								;(cc.myself.workmateGUID += 1),
									cc.myself.workmateList.push(q),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_zi1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.workmateConf[f[v].type2].icon
									)
							} else if ('workmate5' == _) {
								var P = {
									id: f[v].type2,
									wear: !1,
									star: 1,
									guid: cc.myself.workmateGUID + 1,
								}
								;(cc.myself.workmateGUID += 1),
									cc.myself.workmateList.push(P),
									cc.myself.asyncShowImage(
										C.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_jin1'
									),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.workmateConf[f[v].type2].icon
									)
							}
						}
						cc.myself.setLocalData('gold', cc.myself.gold),
							cc.myself.setLocalData(
								'diamond',
								cc.myself.diamond
							),
							cc.myself.setLocalData(
								'scrollList',
								cc.myself.scrollList
							),
							cc.myself.setLocalData(
								'warehouseGUID',
								cc.myself.warehouseGUID
							),
							cc.myself.setLocalData(
								'warehouseList',
								cc.myself.warehouseList
							),
							cc.myself.setLocalData(
								'workmateGUID',
								cc.myself.workmateGUID
							),
							cc.myself.setLocalData(
								'workmateList',
								cc.myself.workmateList
							),
							cc.myself.setLocalData(
								'bigBoxMedalNum',
								cc.myself.bigBoxMedalNum
							),
							cc.myself.setLocalData(
								'getbigBoxTime',
								cc.myself.getbigBoxTime
							),
							cc.myself.setLocalData(
								'getNormalBoxTime',
								cc.myself.getNormalBoxTime
							),
							cc.myself.setLocalData(
								'getBigBoxNum',
								cc.myself.getBigBoxNum
							)
					},
					close: function () {
						this.node.destroy(),
							(cc
								.find('Canvas')
								.getComponent('Main').createEquipPageNum = 0),
							(cc
								.find('Canvas')
								.getComponent('Main').createWorkmatePageNum = 0)
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		BuffGet: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'aba8bkglnVFWoI/LRVJgTVm', 'BuffGet')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						this.node.runAction(
							cc.sequence(
								cc.moveBy(1, cc.v2(0, 200)),
								cc.callFunc(
									function () {
										this.node.destroy()
									}.bind(this)
								)
							)
						)
					},
					init: function (f) {
						this.type = f.type
						var v = b.buffConf[this.type],
							C = this.node.getChildByName('buffNode')
						cc.myself.asyncShowImage(
							C.getChildByName('icon').getComponent(cc.Sprite),
							v.icon
						),
							(C.getChildByName('name').getComponent(
								cc.Label
							).string = v.name),
							(C.getChildByName('ins').getComponent(
								cc.Label
							).string = v.ins)
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		BuildScene: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'bfbd5oYVItCqJRhfK/aXKvm', 'BuildScene')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: { cubeNode: cc.Prefab },
					start: function () {
						;(this.cubeX = 12),
							(this.cubeY = 16),
							this.changeWorld(),
							(this.touchType = 0),
							(this.touchType2 = 'q'),
							cc.systemEvent.on(
								cc.SystemEvent.EventType.KEY_DOWN,
								this.onKeyDown,
								this
							),
							cc.systemEvent.on(
								cc.SystemEvent.EventType.KEY_UP,
								this.onKeyUp,
								this
							),
							this.touchOn()
					},
					touchOn: function () {
						var f = this.node.getChildByName('cubeList')
						this.node.on(
							cc.Node.EventType.TOUCH_START,
							function (v) {
								v.stopPropagation()
								for (var C = 0; C < f.children.length; C++) {
									var _ = f.children[C],
										w = _.convertToNodeSpace(
											v.getLocation()
										)
									if (
										cc
											.rect(0, 0, _.width, _.height)
											.contains(w)
									) {
										var N =
											b.gameSetting.colorList[
												this.touchType
											]
										;(_.color = cc.color(N.r, N.g, N.b)),
											(_.getChildByName(
												'label'
											).getComponent(cc.Label).string =
												this.touchType +
												'-' +
												this.touchType2)
									}
								}
							},
							this
						),
							this.node.on(
								cc.Node.EventType.TOUCH_MOVE,
								function (v) {
									v.stopPropagation()
									for (
										var C = 0;
										C < f.children.length;
										C++
									) {
										var _ = f.children[C],
											w = _.convertToNodeSpace(
												v.getLocation()
											)
										if (
											cc
												.rect(0, 0, _.width, _.height)
												.contains(w)
										) {
											var N =
												b.gameSetting.colorList[
													this.touchType
												]
											;(_.color = cc.color(
												N.r,
												N.g,
												N.b
											)),
												(_.getChildByName(
													'label'
												).getComponent(
													cc.Label
												).string =
													this.touchType +
													'-' +
													this.touchType2)
										}
									}
								},
								this
							),
							this.node.on(
								cc.Node.EventType.TOUCH_END,
								function (f) {
									f.stopPropagation()
								},
								this
							),
							this.node.on(
								cc.Node.EventType.TOUCH_CANCEL,
								function (f) {
									f.stopPropagation()
								},
								this
							)
					},
					onKeyUp: function (f) {
						this.touchType = 0
					},
					onKeyDown: function (f) {
						switch (f.keyCode) {
							case cc.macro.KEY[1]:
								this.touchType = 1
								break
							case cc.macro.KEY[2]:
								this.touchType = 2
								break
							case cc.macro.KEY[3]:
								this.touchType = 3
								break
							case cc.macro.KEY[4]:
								this.touchType = 4
								break
							case cc.macro.KEY[5]:
								this.touchType = 5
								break
							case cc.macro.KEY[6]:
								this.touchType = 6
								break
							case cc.macro.KEY[7]:
								this.touchType = 7
								break
							case cc.macro.KEY[8]:
								this.touchType = 8
								break
							case cc.macro.KEY[9]:
								this.touchType = 9
								break
							case cc.macro.KEY.space:
								this.touchType2 = ' '
								break
							case cc.macro.KEY.q:
								this.touchType2 = 'q'
								break
							case cc.macro.KEY.w:
								this.touchType2 = 'w'
								break
							case cc.macro.KEY.e:
								this.touchType2 = 'e'
								break
							case cc.macro.KEY.r:
								this.touchType2 = 'r'
								break
							case cc.macro.KEY.t:
								this.touchType2 = 't'
								break
							case cc.macro.KEY.y:
								this.touchType2 = 'y'
								break
							case cc.macro.KEY.u:
								this.touchType2 = 'u'
								break
							case cc.macro.KEY.i:
								this.touchType2 = 'i'
								break
							case cc.macro.KEY.o:
								this.touchType2 = 'o'
								break
							case cc.macro.KEY.p:
								this.touchType2 = 'p'
								break
							case cc.macro.KEY.a:
								this.touchType2 = 'a'
								break
							case cc.macro.KEY.s:
								this.touchType2 = 's'
								break
							case cc.macro.KEY.d:
								this.touchType2 = 'd'
								break
							case cc.macro.KEY.f:
								this.touchType2 = 'f'
								break
							case cc.macro.KEY.g:
								this.touchType2 = 'g'
								break
							case cc.macro.KEY.h:
								this.touchType2 = 'h'
								break
							case cc.macro.KEY.j:
								this.touchType2 = 'j'
								break
							case cc.macro.KEY.k:
								this.touchType2 = 'k'
								break
							case cc.macro.KEY.l:
								this.touchType2 = 'l'
								break
							case cc.macro.KEY.z:
								this.touchType2 = 'z'
								break
							case cc.macro.KEY.x:
								this.touchType2 = 'x'
								break
							case cc.macro.KEY.c:
								this.touchType2 = 'c'
								break
							case cc.macro.KEY.v:
								this.touchType2 = 'v'
								break
							case cc.macro.KEY.b:
								this.touchType2 = 'b'
								break
							case cc.macro.KEY.n:
								this.touchType2 = 'n'
								break
							case cc.macro.KEY.m:
								this.touchType2 = 'm'
						}
					},
					changeX: function () {
						;(this.cubeX = parseInt(
							this.node
								.getChildByName('xe')
								.getComponent(cc.EditBox).string
						)),
							this.changeWorld()
					},
					changeY: function () {
						;(this.cubeY = parseInt(
							this.node
								.getChildByName('ye')
								.getComponent(cc.EditBox).string
						)),
							this.changeWorld()
					},
					changeWorld: function () {
						this.node.getChildByName('cubeList').removeAllChildren()
						for (var f = 0; f < this.cubeX; f++)
							for (var v = 0; v < this.cubeY; v++) {
								var C = cc.instantiate(this.cubeNode)
								;(C.x = (C.width + 2) * f - 230),
									(C.y = 280 - (C.height + 2) * v),
									(C.name = f + ',' + v),
									this.node
										.getChildByName('cubeList')
										.addChild(C)
							}
					},
					daochu: function () {
						var f = {}
						;(f.width = this.cubeX),
							(f.height = this.cubeY),
							(f.id = this.node
								.getChildByName('ide')
								.getComponent(cc.EditBox).string),
							(f.data = {})
						for (
							var v = 0;
							v <
							this.node.getChildByName('cubeList').children
								.length;
							v++
						) {
							var C = this.node.getChildByName('cubeList')
								.children[v]
							0 !=
								parseInt(
									C.getChildByName('label').getComponent(
										cc.Label
									).string
								) &&
								(f.data[C.name] = C.getChildByName(
									'label'
								).getComponent(cc.Label).string)
						}
						console.log(
							'-----------------导出数据--------------------'
						),
							console.log(JSON.stringify(f))
					},
					daoru: function () {
						var f = this.node
							.getChildByName('daoru')
							.getComponent(cc.EditBox).string
						if (
							((this.node
								.getChildByName('daoru')
								.getComponent(cc.EditBox).string = ''),
							'' != f)
						) {
							try {
								;(f = JSON.parse(f)),
									console.log('daoru str', f)
							} catch (f) {
								return void console.log('数据错误')
							}
							if (f.width && f.height) {
								var v = { x: -230, y: 280 }
								this.node
									.getChildByName('cubeList')
									.removeAllChildren()
								for (var C = 0; C < f.width; C++)
									for (var _ = 0; _ < f.height; _++) {
										var w = cc.instantiate(this.cubeNode)
										if (
											((w.x = v.x + (w.width + 2) * C),
											(w.y = v.y - (w.height + 2) * _),
											(w.name = C + ',' + _),
											f.data[w.name])
										) {
											var N = f.data[w.name].split('-'),
												k = parseInt(N[0]),
												L =
													(parseInt(N[1]),
													b.gameSetting.colorList[k])
											;(w.color = cc.color(
												L.r,
												L.g,
												L.b
											)),
												(w
													.getChildByName('label')
													.getComponent(
														cc.Label
													).string = f.data[w.name])
										}
										this.node
											.getChildByName('cubeList')
											.addChild(w)
									}
							}
						} else console.log('数据错误')
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		Bullet: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '4cafdqtn99BrK5zBbIDoDiG', 'Bullet')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					onEnable: function () {
						;(this.isOver = !1),
							(this.node.x += this.goX),
							(this.node.y += this.goY),
							(this.hitTime = 0),
							(this.hitNum = 3),
							(this.catapultNum = 0)
					},
					start: function () {},
					init: function (f) {
						;(this.dp = f.dp),
							(this.isSub = f.isSub),
							this.node.getChildByName('icon').stopAllActions(),
							this.isSub ||
								this.node
									.getChildByName('icon')
									.runAction(
										cc.repeatForever(cc.rotateBy(0.1, 360))
									),
							this.changeMove(this.dp),
							(this.atkPower =
								f.atkPower || Math.floor(100 * Math.random())),
							(this.penetrate = f.penetrate),
							(this.rebound = f.rebound),
							(this.catapult = f.catapult),
							this.rebound && (this.hitNum = this.rebound),
							(this.icyIce = f.icyIce),
							(this.fire = f.fire),
							(this.poison = f.poison),
							(this.node.getChildByName('fire').active =
								this.fire > 0),
							(this.node.getChildByName('ice').active =
								this.icyIce > 0),
							(this.node.getChildByName('du').active =
								this.poison > 0)
					},
					changeMove: function (f) {
						var v = Math.atan2(f.y, f.x),
							C = (180 * v) / Math.PI
						;(C = 360 - C + 90),
							(C %= 360),
							(this.node.getChildByName('icon').angle = C)
						var _ = this.isSub
							? b.gameSetting.subBulletMoveSpeed
							: b.gameSetting.bulletMoveSpeed
						;(this.moveX = Math.cos(v) * _),
							(this.moveY = Math.sin(v) * _)
						var w = Math.sqrt(
							this.node.getChildByName('icon').width *
								this.node.getChildByName('icon').width +
								this.node.getChildByName('icon').height *
									this.node.getChildByName('icon').height
						)
						;(this.goX = Math.cos(v) * w),
							(this.goY = Math.sin(v) * w)
					},
					getCritDamage: function () {
						return cc.myself.getPlayerCritDamage()
					},
					getAtkCrit: function () {
						return cc.myself.getPlayerCrit()
					},
					getAtkPower: function () {
						return this.atkPower
					},
					getIsIcyIce: function () {
						return this.icyIce
					},
					getIsFire: function () {
						return this.fire
					},
					getIsPoison: function () {
						return this.poison
					},
					getDp: function () {
						return this.dp
					},
					getBulletAttribute: function () {
						return {
							icyIce: this.icyIce,
							fire: this.fire,
							poison: this.poison,
						}
					},
					onCollisionEnter: function (f, v) {
						if (f.tag > 1e3)
							if (f.tag > 1010 && this.rebound) {
								if (this.hitTime > 0) return
								if ((this.hitNum--, this.hitNum <= 0))
									return (
										(this.isOver = !0),
										void cc
											.find('Canvas')
											.getComponent('Game')
											.putInBulletPool(this.node)
									)
								var C
								;(this.hitTime = 0.1),
									1011 == f.tag
										? ((C = cc.v2(this.dp.x, -this.dp.y)),
										  (this.moveY = -this.moveY))
										: 1012 == f.tag
										? ((C = cc.v2(-this.dp.x, this.dp.y)),
										  (this.moveX = -this.moveX))
										: 1013 == f.tag
										? ((C = cc.v2(this.dp.x, -this.dp.y)),
										  (this.moveY = -this.moveY))
										: 1014 == f.tag
										? ((C = cc.v2(-this.dp.x, this.dp.y)),
										  (this.moveX = -this.moveX))
										: 1021 == f.tag
										? ((C = cc.v2(this.dp.x, -this.dp.y)),
										  (this.moveY = -this.moveY))
										: 1022 == f.tag
										? ((C = cc.v2(-this.dp.x, this.dp.y)),
										  (this.moveX = -this.moveX))
										: 1023 == f.tag
										? ((C = cc.v2(this.dp.x, -this.dp.y)),
										  (this.moveY = -this.moveY))
										: 1024 == f.tag &&
										  ((C = cc.v2(-this.dp.x, this.dp.y)),
										  (this.moveX = -this.moveX)),
									(this.dp = C)
							} else
								(this.isOver = !0),
									cc
										.find('Canvas')
										.getComponent('Game')
										.putInBulletPool(this.node)
						else
							switch (f.tag) {
								case 21:
									if (this.catapult)
										if (this.catapultNum >= this.catapult)
											this.penetrate ||
												cc
													.find('Canvas')
													.getComponent('Game')
													.putInBulletPool(this.node)
										else {
											var b = cc
												.find('Canvas')
												.getComponent('Game')
												.getBulletDpWithUUID(
													f.node,
													f.node.uuid,
													this.node
												)
											b
												? (this.catapultNum++,
												  (this.dp = b),
												  this.changeMove(b))
												: this.penetrate ||
												  cc
														.find('Canvas')
														.getComponent('Game')
														.putInBulletPool(
															this.node
														)
										}
									else
										this.penetrate ||
											cc
												.find('Canvas')
												.getComponent('Game')
												.putInBulletPool(this.node)
							}
					},
					update: function (f) {
						cc
							.find('Canvas')
							.getComponent('Game')
							.getGameIsOver() ||
							cc
								.find('Canvas')
								.getComponent('Game')
								.getGamePause() ||
							(this.hitTime > 0 && (this.hitTime -= f),
							this.isOver ||
								((this.node.x += this.moveX),
								(this.node.y += this.moveY),
								(this.node.x < -cc.winSize.width ||
									this.node.x > cc.winSize.width) &&
									((this.isOver = !0),
									cc
										.find('Canvas')
										.getComponent('Game')
										.putInBulletPool(this.node))))
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		ChooseBuff: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'f7fd6LXxJpOYIeyWAsEITSY', 'ChooseBuff')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {
						changeNode: {
							default: null,
							type: cc.Node,
							tooltip: '更换buff列表',
						},
					},
					onLoad: function () {
						;(this.buffNode = this.node.getChildByName('buffNode')),
							(this.gameComponent = cc
								.find('Canvas')
								.getComponent('Game')),
							this.gameComponent.setGamePause(!0),
							cc.myself.scaleToShow(this.node),
							(this.scrollDiffList = [20, 20, 20]),
							(this.time = 0),
							(this.isManList = [!1, !1, !1]),
							(this.stopTimeList = [0.8, 1, 1.2]),
							(this.changeNum = 0)
					},
					init: function (f) {
						;(this.isAngle = f.isAngle), (this.isDamon = f.isDamon)
					},
					start: function () {
						this.resetChooseList()
					},
					resetChooseList: function () {
						var f =
							this.gameComponent
								.getPlayer()
								.getComponent('Player')
								.getExp().level || 1
						this.node
							.getChildByName('title')
							.getChildByName('word_title')
							.getComponent(cc.Label).string = Lq.lang(
							'冒险升级',
							{ data: { num: f } }
						)
						var v = _.buffConf,
							C = []
						if (this.gameComponent.getIsGuide())
							C = [
								'Attack(m)',
								'AttackSpeed(m)',
								'CriticalHit(l)',
								'Doublehit',
								'FrontArrow+1',
								'SlantArrow+1',
							]
						else
							for (var b in v)
								if (v[b].isOnly) {
									if (-1 == cc.myself.addBuffList.indexOf(b))
										for (
											var w = 0;
											w < v[b].weight[f - 1] / 10;
											w++
										)
											C.push(b)
								} else
									for (
										var N = 0;
										N < v[b].weight[f - 1] / 10;
										N++
									)
										C.push(b)
						for (var k = []; k.length < 3; ) {
							for (
								var L = C[Math.floor(Math.random() * C.length)],
									B = !1,
									S = 0;
								S < k.length;
								S++
							)
								if (k[S] == L) {
									B = !0
									break
								}
							B || k.push(L)
						}
						;(this.chooseList = k),
							this.isChange
								? this.resetBuffNode(k)
								: this.createBuffNode(k)
					},
					createBuffNode: function (f) {
						for (
							var v = this,
								i = function (C) {
									var b = v.node.getChildByName(
										'buffNode_' + C
									)
									setTimeout(function () {
										b
											.getChildByName('label')
											.getComponent(cc.Label).string =
											f[C]
									}, 1500),
										setTimeout(function () {
											;(v.changeNode.active = !0),
												(b.getChildByName(
													'choose'
												).active = !0),
												(b.getChildByName(
													'label'
												).active = !0)
											var _ = b
												.getChildByName('choose')
												.getComponent(cc.Button)
												.clickEvents[0]
											;(_.target = v.node),
												(_.component = 'ChooseBuff'),
												(_.handler = 'chooseBuff'),
												(_.customEventData = f[C])
											var w = b
												.getChildByName('bg')
												.getComponent(cc.Button)
												.clickEvents[0]
											;(w.target = v.node),
												(w.component = 'ChooseBuff'),
												(w.handler = 'showBuffIns'),
												(w.customEventData = f[C])
										}, 2e3)
								},
								C = 0;
							C < f.length;
							C++
						)
							i(C)
					},
					resetBuffNode: function (f) {
						for (
							var v = this,
								i = function (C) {
									var b = v.node.getChildByName(
										'buffNode_' + C
									)
									;(b
										.getChildByName('label')
										.getComponent(cc.Label).string = f[C]),
										setTimeout(function () {
											;(b.getChildByName(
												'choose'
											).active = !0),
												(b.getChildByName(
													'label'
												).active = !0)
										}, 2e3),
										(b
											.getChildByName('choose')
											.getComponent(
												cc.Button
											).clickEvents[0].customEventData =
											f[C]),
										(b
											.getChildByName('bg')
											.getComponent(
												cc.Button
											).clickEvents[0].customEventData =
											f[C])
								},
								C = 0;
							C < f.length;
							C++
						)
							i(C)
					},
					rotateScroll: function () {
						for (var f = 0; f < 3; f++)
							if (this.scrollDiffList[f] > 0) {
								var v = this.node.getChildByName(
									'buffScroll' + (f + 1)
								)
								v.zIndex = 10
								for (var C = 0; C < v.children.length; C++) {
									var b = v.children[C]
									;(b.y = cc.myself.accSub(
										b.y,
										this.scrollDiffList[f]
									)),
										b.y <= -300 && (b.y = 200)
								}
							}
					},
					manScroll: function (f) {
						for (
							var v = this.node.getChildByName(
									'buffScroll' + (f + 1)
								),
								C = -999,
								b = 0,
								w = 0;
							w < v.children.length;
							w++
						) {
							var N = v.children[w]
							N.y > C && ((b = w), (C = N.y))
						}
						var k = v.children[b]
						cc.myself.asyncShowImage(
							k.getComponent(cc.Sprite),
							_.buffConf[this.chooseList[f]].icon
						)
						for (var L = 0; L < v.children.length; L++)
							v.children[L].runAction(cc.moveBy(1, cc.v2(0, -C)))
					},
					chooseBuff: function (f, v) {
                        // 开始游戏、请求广告
                        if(document.domain.indexOf("v2zz.com")>=0) handleStatsEvent("page_play");
                        if(document.domain.indexOf("v2zz.com")>=0) handleStatsEvent("ad_load","Interstitial");
						cc.myself.addBuffList.push(v),
							cc.myself.checkAddBuff(),
							this.close(),
							'HpIncrease' == v
								? this.gameComponent
										.getPlayer()
										.getComponent('Player')
										.afterGetHpBuff(
											Math.floor(
												(cc.myself.getPlayerBaseHp() *
													_.buffConf[v].num) /
													100
											)
										)
								: 'HpRecover' == v &&
								  this.gameComponent
										.getPlayer()
										.getComponent('Player')
										.afterGetHpAddBuff(
											Math.floor(
												(cc.myself.getPlayerBaseHp() *
													_.buffConf[v].num) /
													100
											)
										),
							cc.myself.showPre('pre/buffGet', {
								jname: 'BuffGet',
								data: { type: v },
							})
					},
					showBuffIns: function (f, v) {
						;(this.node.getChildByName('content').active = !0),
							(this.node
								.getChildByName('content')
								.getChildByName('word_icon_1')
								.getComponent(cc.Label).string =
								_.buffConf[v].name),
							(this.node
								.getChildByName('content')
								.getChildByName('label')
								.getComponent(cc.Label).string =
								_.buffConf[v].ins)
					},
					close: function () {
						this.node.destroy(),
							this.gameComponent.setGamePause(!1),
							this.gameComponent
								.getPlayer()
								.getComponent('Player')
								.checkUp(1)
					},
					resetScrollPos: function () {
						for (var f = 0; f < 3; f++)
							for (
								var v = this.node.getChildByName(
										'buffScroll' + (f + 1)
									),
									C = 0;
								C < v.children.length;
								C++
							)
								v.children[C].y = 200 - 100 * C
					},
					change: function () {
						var f = this,
							v = this
						b.default.showRewardedAd(function () {
							for (var C = 0; C < 3; C++) {
								var b = v.node.getChildByName('buffNode_' + C)
								;(b.getChildByName('choose').active = !1),
									(b.getChildByName('label').active = !1)
							}
							;(f.changeNode.active = !1),
								v.resetScrollPos(),
								(v.scrollDiffList = [20, 20, 20]),
								(v.time = 0),
								(v.isManList = [!1, !1, !1]),
								(v.stopTimeList = [0.8, 1, 1.2]),
								(v.isChange = !0),
								v.resetChooseList(),
								v.changeNum++
						})
					},
					update: function (f) {
						;(this.time += f),
							this.time > this.stopTimeList[2]
								? ((this.scrollDiffList[2] = 0),
								  this.isManList[2] ||
										((this.isManList[2] = !0),
										this.manScroll(2)))
								: this.time > this.stopTimeList[1]
								? ((this.scrollDiffList[1] = 0),
								  this.isManList[1] ||
										((this.isManList[1] = !0),
										this.manScroll(1)))
								: this.time > this.stopTimeList[0] &&
								  ((this.scrollDiffList[0] = 0),
								  this.isManList[0] ||
										((this.isManList[0] = !0),
										this.manScroll(0))),
							this.rotateScroll()
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		ChoutiAd: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '3eafb5QXcJKgr2xYz7wtx3t', 'ChoutiAd'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {
							for (
								var f = this,
									v = this,
									i = function (C) {
										var b = cc.myself.adList2[C],
											_ = cc.instantiate(
												f.node.getChildByName('upItem')
											)
										cc.loader.load(
											{ url: b.pic, type: 'png' },
											function (f, v) {
												_.getChildByName(
													'icon'
												).getComponent(
													cc.Sprite
												).spriteFrame = new cc.SpriteFrame(
													v
												)
											}
										),
											(_.name = b.position)
										var w = _.getComponent(cc.Button)
											.clickEvents[0]
										;(w.target = v.node),
											(w.component = 'ChoutiAd'),
											(w.handler = 'jumptomoregame'),
											(w.customEventData = b.id),
											(_.x = 65 + 140 * C),
											(_.y = 0),
											cc.myself.adList2.length > 3.8 &&
												_.runAction(
													cc.repeatForever(
														cc.sequence(
															cc.moveBy(
																2 *
																	(cc.myself
																		.adList2
																		.length -
																		3.8) *
																	1.15,
																cc.v2(
																	140 *
																		-(
																			cc
																				.myself
																				.adList2
																				.length -
																			3.8
																		),
																	0
																)
															),
															cc.delayTime(1),
															cc.moveBy(
																2 *
																	(cc.myself
																		.adList2
																		.length -
																		3.8) *
																	1.15,
																cc.v2(
																	140 *
																		(cc
																			.myself
																			.adList2
																			.length -
																			3.8),
																	0
																)
															),
															cc.delayTime(1)
														)
													)
												),
											f.node
												.getChildByName('up_mask')
												.getChildByName('content')
												.addChild(_)
									},
									C = 0;
								C < cc.myself.adList2.length;
								C++
							)
								i(C)
							var b = this.node.getChildByName('content')
							if (cc.myself.adList1.length < 6)
								for (
									var _ = 6;
									_ > cc.myself.adList1.length;
									_--
								)
									b[_ - 1].destroy()
							for (var w = []; w.length < b.children.length; ) {
								var N = Math.floor(
									Math.random() * cc.myself.adList1.length
								)
								;-1 == w.indexOf(N) && w.push(N)
							}
							for (
								var c = function (f) {
										var C = b.children[f],
											_ = cc.myself.adList1[w[f]],
											N = Math.floor(
												5 * Math.random() + 5
											)
										cc.loader.load(
											{ url: _.pic, type: 'png' },
											function (f, v) {
												C.getChildByName(
													'icon'
												).getComponent(
													cc.Sprite
												).spriteFrame = new cc.SpriteFrame(
													v
												)
											}
										),
											(C.getChildByName(
												'name'
											).getComponent(cc.Label).string =
												N + '个好友在玩')
										var k = C.getComponent(cc.Button)
											.clickEvents[0]
										;(k.target = v.node),
											(k.component = 'ChoutiAd'),
											(k.handler = 'jumptomoregame'),
											(k.customEventData = _.id)
										for (var L = []; L.length < 3; ) {
											var B =
												Math.floor(10 * Math.random()) +
												1
											;-1 == L.indexOf(B) && L.push(B)
										}
										for (var S = 0; S < 3; S++)
											cc.myself.asyncShowImage(
												C.getChildByName(
													'head' + (S + 1)
												).getComponent(cc.Sprite),
												'ui/head/' + L[S]
											)
									},
									k = 0;
								k < b.children.length;
								k++
							)
								c(k)
						},
						jumptomoregame: function (f, v) {
							for (var C, b = 0; b < cc.myself.adList.length; b++)
								if (cc.myself.adList[b].id == v) {
									C = cc.myself.adList[b]
									break
								}
							if (C) {
								var _ = Number(f.target.name)
								console.log('position', _),
									'undefined' != typeof wx &&
										(1 == +C.type
											? wx.navigateToMiniProgram({
													appId: C.appid,
													path: C.path,
													extraData: {
														msssg: 'from 木叶传说',
													},
													success: function () {
														console.log('跳转成功')
													},
													fail: function () {},
											  })
											: 2 == +C.type &&
											  wx.previewImage({
													urls: [C.spic],
											  }))
							} else console.error('没找到广告数据')
						},
						close: function () {
							this.node.destroy()
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		Config: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '21508/v78dERq21aeeTbOPA', 'Config')
				var b = {
						gameid: 106,
						requestUrl: '',
						wssUrl: '',
						trygameUrl: '',
						houtaiUrl: '',
						musicUrl: '',
						version: '1.0.7',
					},
					_ = (function (f, v, C) {
						return (
							v in f
								? Object.defineProperty(f, v, {
										value: C,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (f[v] = C),
							f
						)
					})(
						{
							'FrontArrow+1': {
								name: 'Front arrow',
								ins: 'Front arrow +1',
								icon: 'ui/skill/ability_icon_004',
								type: 'forwardArrow',
								num: 1,
								weight: [
									40,
									40,
									60,
									50,
									50,
									40,
									40,
									40,
									40,
									40,
								],
							},
							'SlantArrow+1': {
								name: 'Slant arrow',
								ins: 'Slant arrow +1',
								icon: 'ui/skill/ability_icon_005',
								type: 'diagonalArrow',
								num: 1,
								weight: [
									40,
									40,
									60,
									50,
									50,
									40,
									40,
									40,
									40,
									40,
								],
							},
							'SideArrow+1': {
								name: 'Side arrow',
								ins: 'Side arrow +1 each side',
								icon: 'ui/skill/ability_icon_001',
								type: 'sidedArrow',
								num: 1,
								weight: [
									40,
									40,
									60,
									50,
									50,
									40,
									40,
									40,
									40,
									40,
								],
							},
							'BackArrow+1': {
								name: 'Back arrow',
								ins: 'Back arrow +1',
								icon: 'ui/skill/ability_icon_003',
								type: 'backwardArrow',
								num: 1,
								weight: [
									40,
									40,
									60,
									50,
									50,
									40,
									40,
									40,
									40,
									40,
								],
							},
							ReboundShoot: {
								name: 'Rebound shoot',
								ins: 'Arrow rebound at wall',
								icon: 'ui/skill/ability_icon_006',
								type: 'rebound',
								num: 1,
								isOnly: 1,
								weight: [
									40,
									40,
									60,
									50,
									50,
									40,
									40,
									40,
									40,
									40,
								],
							},
							Rebound: {
								name: 'Rebound',
								ins: 'Arrow rebound between enemies',
								icon: 'ui/skill/ability_icon_008',
								type: 'catapult',
								num: 2,
								isOnly: 1,
								weight: [
									30,
									30,
									40,
									40,
									40,
									50,
									50,
									50,
									50,
									50,
								],
							},
							Penetrate: {
								name: 'Penetrate',
								ins: 'Arrow penetrate an extra enemy',
								icon: 'ui/skill/ability_icon_007',
								type: 'penetrate',
								num: 1,
								isOnly: 1,
								weight: [
									30,
									30,
									40,
									40,
									40,
									50,
									50,
									50,
									50,
									50,
								],
							},
							HpRecover: {
								name: 'HP recover',
								ins: 'Recover 50% HP at once',
								icon: 'ui/skill/ability_icon_018',
								type: 'hpAdd',
								num: 50,
								weight: [0, 0, 40, 40, 40, 50, 50, 50, 50, 50],
								angleWeight: 80,
							},
							HpIncrease: {
								name: 'HP increase',
								ins: 'Increase 25% max HP',
								icon: 'ui/skill/ability_icon_022',
								type: 'hpPercentage',
								num: 25,
								weight: [
									20,
									20,
									40,
									40,
									40,
									50,
									50,
									50,
									50,
									50,
								],
								angleWeight: 80,
							},
							'Attack(s)': {
								name: 'increase attack(small)',
								ins: 'Basic attack +25%',
								icon: 'ui/skill/ability_icon_024',
								type: 'atkPercentage',
								num: 25,
								weight: [
									80,
									80,
									50,
									50,
									50,
									40,
									40,
									40,
									40,
									40,
								],
								angleWeight: 10,
							},
							'Attack(m)': {
								name: 'increase attack(middle)',
								ins: 'Basic attack +50%',
								icon: 'ui/skill/ability_icon_024',
								type: 'atkPercentage',
								num: 50,
								weight: [0, 0, 5, 10, 15, 20, 25, 30, 35, 40],
								demonWeight: 30,
							},
							'Attack(l)': {
								name: 'increase attack(large)',
								ins: 'Basic attack +75%',
								icon: 'ui/skill/ability_icon_024',
								type: 'atkPercentage',
								num: 75,
								weight: [0, 0, 0, 0, 5, 10, 15, 20, 25, 30],
								demonWeight: 30,
							},
							'AttackSpeed(s)': {
								name: 'increase attack speed(small)',
								ins: 'Attack speed +20%',
								icon: 'ui/skill/ability_icon_026',
								type: 'atkSpe',
								num: 0.2,
								weight: [
									80,
									80,
									50,
									50,
									50,
									40,
									40,
									40,
									40,
									40,
								],
							},
							'AttackSpeed(m)': {
								name: 'increase attack speed(middle)',
								ins: 'Attack speed +30%',
								icon: 'ui/skill/ability_icon_026',
								type: 'atkSpe',
								num: 0.3,
								weight: [0, 0, 5, 10, 15, 20, 25, 30, 35, 40],
								demonWeight: 30,
							},
							'AttackSpeed(l)': {
								name: 'increase attack speed(large)',
								ins: 'Attack speed +40%',
								icon: 'ui/skill/ability_icon_026',
								type: 'atkSpe',
								num: 0.4,
								weight: [0, 0, 0, 0, 5, 10, 15, 20, 25, 30],
								demonWeight: 30,
							},
							IncreaseSpeed: {
								name: 'Increase speed',
								ins: 'Basic speed +20%',
								icon: 'ui/skill/ability_icon_017',
								type: 'spe',
								num: 20,
								weight: [
									30,
									30,
									30,
									30,
									30,
									30,
									30,
									30,
									30,
									30,
								],
							},
							Shield: {
								name: 'Shield',
								ins: 'Received damage -10%',
								icon: 'ui/skill/ability_icon_016',
								type: 'damageReductionPer',
								num: 10,
								weight: [
									40,
									40,
									40,
									40,
									40,
									40,
									40,
									40,
									40,
									40,
								],
							},
							Doublehit: {
								name: 'Double hit',
								ins: '1 extra arrow',
								icon: 'ui/skill/ability_icon_002',
								type: 'serial',
								num: 1,
								isOnly: 1,
								weight: [
									60,
									60,
									40,
									40,
									60,
									40,
									40,
									40,
									40,
									40,
								],
								demonWeight: 30,
							},
							InvincibleStar: {
								name: 'Invincible star',
								ins: 'invincible for 2s every 10s',
								icon: 'ui/skill/ability_icon_015',
								type: 'wudiStar',
								num: 1,
								isOnly: 1,
								weight: [
									30,
									30,
									40,
									40,
									40,
									50,
									50,
									50,
									50,
									50,
								],
								angleWeight: 20,
							},
							Wisdom: {
								name: 'Wisdom',
								ins: 'Exp +40%',
								icon: 'ui/skill/ability_icon_021',
								type: 'expAdd',
								num: 0.4,
								weight: [30, 30, 50, 50, 50, 40, 35, 30, 20, 0],
								angleWeight: 20,
							},
							RotatingShield: {
								name: 'Rotating shield',
								ins: 'Defend next 2 attacks',
								icon: 'ui/skill/ability_icon_023',
								type: 'rotaryShield',
								num: 1,
								weight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
							},
							Anger: {
								name: 'Anger',
								ins: 'Increase attack when HP is low',
								icon: 'ui/skill/ability_icon_012',
								type: 'anger',
								num: 4,
								weight: [
									30,
									30,
									40,
									40,
									40,
									50,
									50,
									50,
									50,
									50,
								],
								angleWeight: 20,
							},
							Absorb: {
								name: 'Absorb',
								ins:
									'Possibly recover HP when eliminate an enemy',
								icon: 'ui/skill/ability_icon_013',
								type: 'bloodThirsty',
								num: 2,
								weight: [
									30,
									30,
									40,
									40,
									40,
									50,
									50,
									50,
									50,
									50,
								],
								angleWeight: 20,
							},
							'CriticalHit(s)': {
								name: 'CriticalHit(small)',
								ins: 'Critical hit chance +10%',
								icon: 'ui/skill/ability_icon_025',
								type: 'crit',
								num: 0.1,
								weight: [
									50,
									50,
									50,
									50,
									50,
									40,
									40,
									40,
									40,
									40,
								],
								angleWeight: 20,
							},
							'CriticalHit(m)': {
								name: 'CriticalHit(middle)',
								ins: 'Critical hit chance +20%',
								icon: 'ui/skill/ability_icon_025',
								type: 'crit',
								num: 0.2,
								weight: [0, 0, 5, 10, 15, 20, 25, 30, 35, 40],
								demonWeight: 30,
							},
							'CriticalHit(l)': {
								name: 'CriticalHit(large)',
								ins: 'Critical hit chance +30%',
								icon: 'ui/skill/ability_icon_025',
								type: 'crit',
								num: 0.3,
								weight: [0, 0, 0, 0, 5, 10, 15, 20, 25, 30],
								demonWeight: 30,
							},
							Frost: {
								name: 'Frost',
								ins:
									'Gain extra frost damage to reduce enemy speed',
								icon: 'ui/skill/ability_icon_010',
								type: 'icyIce',
								num: 1,
								weight: [
									30,
									30,
									40,
									40,
									40,
									50,
									50,
									50,
									50,
									50,
								],
							},
							Fire: {
								name: 'Fire',
								ins:
									'Gain extra fire damage to burn enemy continuously',
								icon: 'ui/skill/ability_icon_011',
								type: 'fire',
								num: 1.5,
								weight: [
									30,
									30,
									40,
									40,
									40,
									50,
									50,
									50,
									50,
									50,
								],
							},
							Poison: {
								name: 'Poison',
								ins:
									'Gain extra poison damage to hurt enemy continuously',
								icon: 'ui/skill/ability_icon_009',
								type: 'poison',
								num: 1.5,
								weight: [
									30,
									30,
									40,
									40,
									40,
									50,
									50,
									50,
									50,
									50,
								],
							},
							Revive: {
								name: 'Revive',
								ins: 'Revive after player died automatically',
								icon: 'ui/skill/ability_icon_014',
								type: 'revive',
								num: 1,
								isOnly: 1,
								weight: [
									30,
									30,
									30,
									30,
									30,
									30,
									30,
									30,
									30,
									30,
								],
							},
							Float: {
								name: 'Float',
								ins: 'Can cross river',
								icon: 'ui/skill/ability_icon_020',
								type: 'levitate',
								num: 1,
								isOnly: 1,
								weight: [
									50,
									50,
									50,
									50,
									50,
									50,
									50,
									50,
									50,
									50,
								],
							},
						},
						'Penetrate',
						{
							name: 'Penetrate',
							ins: 'Can cross wall',
							icon: 'ui/skill/ability_icon_019',
							type: 'pierceWall',
							num: 1,
							isOnly: 1,
							weight: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
						}
					)
				;(b.gameSetting = {
					colorList: [
						{ r: 255, g: 255, b: 255 },
						{ r: 255, g: 0, b: 0 },
						{ r: 255, g: 1, b: 133 },
						{ r: 204, g: 1, b: 255 },
						{ r: 127, g: 0, b: 255 },
						{ r: 39, g: 40, b: 255 },
						{ r: 0, g: 127, b: 255 },
						{ r: 0, g: 175, b: 207 },
						{ r: 30, g: 178, b: 1 },
						{ r: 239, g: 197, b: 0 },
					],
					bulletMoveSpeed: 25,
					subBulletMoveSpeed: 15,
					danmuMoveSpeed: 4,
					angleMapConf: { width: 11, height: 14, id: '', data: {} },
					BossMapConf: {
						width: 11,
						height: 25,
						id: '',
						data: { '5,13': '9-q' },
					},
					pengTag: {},
					equipQualityIconColor: ['bai', 'lv', 'lan', 'zi', 'jin'],
					getExp: { normal: 50, boss: 500 },
					playerUpLevelNeedExp: [
						100,
						150,
						300,
						400,
						500,
						600,
						700,
						800,
						900,
					],
					enemyAddAttribute: {
						floor: 10,
						hp: 2,
						atk: 0.6,
						goldAdd: 0.5,
					},
					mapAddAttribute: {
						enemyHp: {
							scene: [1, 2, 3, 4, 5],
							num: [-0.25, 0.25, 0.75, 1, 1.5],
						},
						enemyAtk: {
							scene: [1, 2, 3, 4, 5],
							num: [0, 0.25, 0.5, 0.75, 1],
						},
					},
					workmateImg: {
						火: 'huo',
						水: 'shui',
						木: 'mu',
						土: 'tu',
						金: 'jin',
					},
					equipUpNeed: {
						scroll: [
							2,
							4,
							6,
							8,
							10,
							12,
							14,
							16,
							18,
							20,
							23,
							26,
							29,
							32,
							35,
							38,
							41,
							44,
							47,
							50,
							54,
							58,
							62,
							66,
							70,
							74,
							78,
							82,
							86,
							90,
							95,
							100,
							105,
							110,
							115,
							120,
							125,
							130,
							135,
							140,
						],
						gold: [
							500,
							1500,
							3e3,
							5e3,
							7500,
							10500,
							14e3,
							18e3,
							22500,
							27500,
							33e3,
							39e3,
							45500,
							52500,
							6e4,
							68e3,
							76500,
							85500,
							95e3,
							105e3,
							115500,
							126500,
							138e3,
							15e4,
							162500,
							175500,
							189e3,
							203e3,
							217500,
							232500,
							248e3,
							264e3,
							280500,
							297500,
							315e3,
							333e3,
							351500,
							370500,
							39e4,
							41e4,
						],
					},
					tfUpNeed: {
						gold: [
							500,
							1500,
							3e3,
							5e3,
							7500,
							10500,
							14e3,
							18e3,
							22500,
							27500,
							33e3,
							39e3,
							45500,
							52500,
							6e4,
							68e3,
							76500,
							85500,
							95e3,
							105e3,
							115500,
							126500,
							138e3,
							15e4,
							162500,
							175500,
							189e3,
							203e3,
							217500,
							232500,
							248e3,
							264e3,
							280500,
							297500,
							315e3,
							333e3,
							351500,
							370500,
							39e4,
							41e4,
							430500,
							451500,
							473e3,
							495e3,
							517500,
							540500,
							564e3,
							588e3,
							612500,
							637500,
							663e3,
						],
					},
					normalBoxWeight: {
						gold: 300,
						diamond: 0,
						scroll: 200,
						equip5: 0,
						equip4: 0,
						equip3: 10,
						equip2: 20,
						equip1: 50,
						workmate1: 20,
						workmate2: 10,
						workmate3: 0,
						workmate4: 0,
						workmate5: 0,
					},
					bigBoxWeight: {
						gold: 800,
						diamond: 5,
						scroll: 400,
						equip5: 5,
						equip4: 10,
						equip3: 20,
						equip2: 250,
						equip1: 400,
						workmate1: 250,
						workmate2: 50,
						workmate3: 10,
						workmate4: 5,
						workmate5: 5,
					},
					spBigBoxWeight: {
						diamond: 2,
						equip5: 1,
						equip4: 2,
						equip3: 10,
						equip2: 185,
						equip1: 0,
						workmate1: 50,
						workmate2: 50,
						workmate3: 5,
						workmate4: 2,
						workmate5: 1,
					},
					bossDownWeight: {
						diamond: 5,
						equip5: 1,
						equip4: 2,
						equip3: 10,
						equip2: 82,
						equip1: 100,
						workmate1: 25,
						workmate2: 17,
						workmate3: 5,
						workmate4: 2,
						workmate5: 1,
					},
					dailySeeVideoGetStrengthMaxNum: 5,
					dailySeeVideoGetBoxMaxNum: 2,
					maxBigMapSucaiNum: 12,
					maxBigMapZhangaiNum: 1,
					dibiaoList: [1, 1, 2, 3],
					guideMapConf: {
						floorNum: 5,
						mapList: [1, 2, 3, 101, 4],
						enemyNumList: [0, 1, 3, 5, 1],
						enemyIdList: [0],
						bossIdList: [201],
					},
					mixEquipGetDiamond: [50, 100, 150, 200],
					enemyBoxCollider: {
						'spine/1guai': { ox: 0, oy: 10, width: 36, height: 36 },
						'spine/2guai': { ox: 0, oy: 10, width: 30, height: 36 },
						'spine/3guai': { ox: 0, oy: 15, width: 36, height: 45 },
						'spine/5guai': { ox: 0, oy: 20, width: 36, height: 36 },
						'spine/6guai': { ox: 0, oy: 5, width: 36, height: 36 },
						'spine/17guai': { ox: 0, oy: 5, width: 36, height: 36 },
						'spine/1boss': { ox: 0, oy: 20, width: 64, height: 64 },
						'spine/2boss': { ox: 0, oy: 20, width: 64, height: 64 },
						'spine/3boss': { ox: 0, oy: 15, width: 64, height: 64 },
						'spine/8boss': { ox: 0, oy: 5, width: 72, height: 72 },
					},
					normalTurntable: [
						{ type: 'gold_30', num: 10 },
						{ type: 'gold_60', num: 5 },
						{ type: 'gold_30', num: 10 },
						{ type: 'gold_90', num: 2 },
						{ type: 'gold_60', num: 5 },
						{ type: 'gold_180', num: 1 },
					],
					bigTurntable: [
						{ type: 'diamond_100', num: 12 },
						{ type: 'diamond_50', num: 40 },
						{ type: 'diamond_200', num: 6 },
						{ type: 'diamond_50', num: 40 },
						{ type: 'diamond_500', num: 1 },
						{ type: 'diamond_300', num: 2 },
					],
					newSignInConf: [
						{ type: 'diamond', num: 50 },
						{ type: 'equip', num: 1, type2: 11 },
						{ type: 'scroll', num: 100, type2: 'weapon' },
						{ type: 'diamond', num: 100 },
						{ type: 'diamond', num: 200 },
						{ type: 'scroll', num: 50, type2: 'ring' },
						{ type: 'equip', num: 1, type2: 212 },
					],
					workmateSpineName: {
						金: 'jin',
						木: 'mu',
						水: 'shui',
						火: 'huo',
						土: 'tu',
						战士: 'zs',
						忍者: 'rz',
						卫士: 'ws',
						刺客: 'ck',
						猎人: 'lr',
						勇士: 'ys',
					},
				}),
					(b.bigMapConf = [
						{
							name: 'Map1',
							floorNum: 30,
							mapList: [
								101,
								102,
								103,
								104,
								105,
								106,
								107,
								108,
								109,
								110,
							],
							angleNum: 5,
							enemyNumList: [2, 3, 3, 4, 4, 4],
							enemyIdList: [1, 2, 3, 4, 7, 10],
							bossIdList: [100, 104, 107],
							angelProbability: [100, 100, 100],
							demonProbability: [100, 100],
							expAdd: -0.1,
						},
						{
							name: 'Map2',
							floorNum: 30,
							mapList: [
								101,
								102,
								103,
								104,
								105,
								106,
								107,
								108,
								109,
								110,
								201,
								202,
							],
							angleNum: 5,
							enemyNumList: [2, 3, 3, 4, 4, 5],
							enemyIdList: [2, 3, 4, 5, 6, 7, 10],
							bossIdList: [102, 105, 108],
							angelProbability: [100, 100, 100],
							demonProbability: [100, 75],
							expAdd: 0,
						},
						{
							name: 'Map3',
							floorNum: 30,
							mapList: [
								101,
								102,
								103,
								104,
								105,
								106,
								107,
								108,
								109,
								110,
								201,
								202,
								203,
								204,
							],
							angleNum: 5,
							enemyNumList: [3, 3, 4, 4, 5, 6],
							enemyIdList: [2, 3, 5, 8, 9, 10, 13],
							bossIdList: [103, 106, 109],
							angelProbability: [100, 100, 50],
							demonProbability: [100, 50],
							expAdd: 0.15,
						},
						{
							name: 'Map4',
							floorNum: 30,
							mapList: [
								101,
								102,
								103,
								104,
								105,
								106,
								107,
								108,
								109,
								110,
								201,
								202,
								203,
								204,
								205,
								206,
							],
							angleNum: 5,
							enemyNumList: [3, 4, 4, 5, 5, 7],
							enemyIdList: [2, 8, 9, 10, 11, 13, 14, 16],
							bossIdList: [108, 101, 110],
							angelProbability: [100, 75, 50],
							demonProbability: [100, 50],
							expAdd: 0.25,
						},
						{
							name: 'Map5',
							floorNum: 30,
							mapList: [
								101,
								102,
								103,
								104,
								105,
								106,
								107,
								108,
								109,
								110,
								201,
								202,
								203,
								204,
								205,
								206,
								207,
								208,
							],
							angleNum: 5,
							enemyNumList: [3, 4, 5, 5, 6, 8],
							enemyIdList: [3, 5, 8, 9, 11, 12, 14, 15, 17, 18],
							bossIdList: [111, 112, 116],
							angelProbability: [75, 75, 50],
							demonProbability: [75, 50],
							expAdd: 0.35,
						},
						{
							name: 'Map6',
							floorNum: 30,
							mapList: [
								101,
								102,
								103,
								104,
								105,
								106,
								107,
								108,
								109,
								110,
								201,
								202,
								203,
								204,
								205,
								206,
								207,
								208,
								209,
								210,
							],
							angleNum: 5,
							enemyNumList: [4, 5, 5, 6, 7, 9],
							enemyIdList: [
								2,
								3,
								5,
								6,
								8,
								9,
								10,
								11,
								12,
								13,
								14,
								15,
								16,
								17,
								18,
							],
							bossIdList: [
								104,
								105,
								106,
								110,
								111,
								112,
								113,
								114,
								115,
								116,
								117,
								118,
							],
							angelProbability: [75, 75, 50],
							demonProbability: [75, 50],
							expAdd: 0.5,
						},
					]),
					(b.mapConf = {
						1: { width: 11, height: 11, id: '', data: {} },
						2: {
							width: 11,
							height: 17,
							data: {
								'1,1': '9-q',
								'2,1': '9-q',
								'3,3': '9-q',
								'3,4': '9-q',
								'4,6': '9-q',
								'6,6': '9-q',
								'7,3': '9-q',
								'7,4': '9-q',
								'8,1': '9-q',
								'9,1': '9-q',
							},
						},
						3: {
							width: 11,
							height: 17,
							data: {
								'1,1': '9-q',
								'2,1': '9-q',
								'3,3': '9-q',
								'3,4': '9-q',
								'4,6': '9-q',
								'4,7': '1-q',
								'5,7': '1-q',
								'6,6': '9-q',
								'6,7': '1-q',
								'7,3': '9-q',
								'7,4': '9-q',
								'8,1': '9-q',
								'9,1': '9-q',
							},
						},
						4: {
							width: 11,
							height: 19,
							id: '',
							data: { '5,8': '9-q' },
						},
						101: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'2,2': '9-q',
								'2,5': '9-q',
								'2,8': '9-q',
								'2,11': '9-q',
								'2,14': '9-q',
								'8,2': '9-q',
								'8,5': '9-q',
								'8,8': '9-q',
								'8,11': '9-q',
								'8,14': '9-q',
							},
						},
						102: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'1,2': '9-q',
								'1,7': '9-q',
								'1,14': '9-q',
								'2,11': '1-q',
								'3,9': '9-q',
								'3,11': '1-q',
								'5,2': '9-q',
								'5,6': '9-q',
								'7,5': '1-q',
								'7,9': '9-q',
								'8,5': '1-q',
								'9,2': '9-q',
								'9,7': '9-q',
								'9,14': '9-q',
							},
						},
						103: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'1,2': '9-q',
								'1,10': '9-q',
								'1,14': '9-q',
								'2,5': '2-q',
								'3,5': '2-q',
								'3,7': '9-q',
								'4,5': '2-q',
								'4,14': '9-q',
								'5,2': '9-q',
								'5,5': '2-q',
								'5,10': '9-q',
								'5,12': '2-q',
								'6,12': '2-q',
								'7,7': '9-q',
								'7,12': '2-q',
								'8,12': '2-q',
								'9,2': '9-q',
								'9,10': '9-q',
							},
						},
						104: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'1,3': '9-q',
								'3,3': '9-q',
								'3,6': '9-q',
								'3,10': '9-q',
								'3,13': '9-q',
								'5,3': '2-q',
								'5,4': '2-q',
								'5,5': '2-q',
								'5,6': '2-q',
								'5,7': '2-q',
								'5,8': '2-q',
								'5,9': '2-q',
								'5,10': '2-q',
								'5,11': '2-q',
								'5,12': '2-q',
								'5,13': '2-q',
								'5,14': '2-q',
								'5,15': '2-q',
								'7,3': '9-q',
								'7,6': '9-q',
								'7,9': '9-q',
								'7,13': '9-q',
								'9,3': '9-q',
							},
						},
						105: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'1,13': '9-q',
								'2,3': '1-q',
								'2,4': '1-q',
								'2,8': '9-q',
								'3,3': '1-q',
								'3,4': '1-q',
								'3,13': '9-q',
								'4,8': '9-q',
								'5,2': '9-q',
								'5,13': '9-q',
								'6,8': '9-q',
								'7,2': '9-q',
								'7,14': '1-q',
								'7,15': '1-q',
								'8,8': '9-q',
								'8,14': '1-q',
								'8,15': '1-q',
								'9,2': '9-q',
							},
						},
						106: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'1,2': '9-q',
								'1,9': '9-q',
								'1,17': '9-q',
								'3,9': '1-q',
								'4,9': '1-q',
								'5,2': '9-q',
								'5,5': '9-q',
								'5,9': '1-q',
								'5,11': '9-q',
								'5,14': '9-q',
								'6,9': '1-q',
								'7,9': '1-q',
								'9,2': '9-q',
								'9,9': '9-q',
								'9,17': '9-q',
							},
						},
						107: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'1,2': '9-q',
								'1,16': '9-q',
								'2,5': '2-q',
								'2,6': '2-q',
								'2,7': '2-q',
								'2,8': '2-q',
								'5,2': '9-q',
								'5,5': '9-q',
								'5,8': '9-q',
								'5,11': '9-q',
								'5,14': '9-q',
								'8,11': '2-q',
								'8,12': '2-q',
								'8,13': '2-q',
								'8,14': '2-q',
								'9,2': '9-q',
								'9,6': '9-q',
								'9,16': '9-q',
							},
						},
						108: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'0,0': '1-q',
								'0,1': '1-q',
								'0,18': '1-q',
								'0,19': '1-q',
								'1,0': '1-q',
								'1,1': '1-q',
								'1,4': '9-q',
								'1,9': '9-q',
								'1,18': '1-q',
								'1,19': '1-q',
								'2,14': '9-q',
								'2,18': '1-q',
								'2,19': '1-q',
								'3,1': '9-q',
								'3,18': '1-q',
								'3,19': '1-q',
								'5,7': '9-q',
								'5,12': '9-q',
								'7,1': '9-q',
								'7,18': '1-q',
								'7,19': '1-q',
								'8,14': '9-q',
								'8,18': '1-q',
								'8,19': '1-q',
								'9,0': '1-q',
								'9,1': '1-q',
								'9,4': '9-q',
								'9,9': '9-q',
								'9,18': '1-q',
								'9,19': '1-q',
								'10,0': '1-q',
								'10,1': '1-q',
								'10,18': '1-q',
								'10,19': '1-q',
							},
						},
						109: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'0,4': '2-q',
								'1,2': '9-q',
								'1,4': '2-q',
								'1,10': '9-q',
								'2,4': '2-q',
								'2,7': '9-q',
								'3,13': '9-q',
								'5,2': '9-q',
								'5,10': '9-q',
								'7,13': '9-q',
								'8,4': '2-q',
								'8,7': '9-q',
								'9,2': '9-q',
								'9,4': '2-q',
								'9,10': '9-q',
								'10,4': '2-q',
							},
						},
						110: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'0,3': '9-q',
								'0,14': '9-q',
								'2,0': '2-q',
								'2,1': '2-q',
								'2,2': '2-q',
								'2,3': '2-q',
								'2,4': '2-q',
								'2,5': '2-q',
								'2,6': '2-q',
								'2,11': '2-q',
								'2,12': '2-q',
								'2,13': '2-q',
								'2,14': '2-q',
								'2,15': '2-q',
								'2,16': '2-q',
								'2,17': '2-q',
								'4,2': '9-q',
								'4,6': '9-q',
								'4,10': '9-q',
								'4,14': '9-q',
								'8,2': '9-q',
								'8,6': '9-q',
								'8,10': '9-q',
								'8,14': '9-q',
							},
						},
						201: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'1,3': '9-q',
								'2,2': '1-q',
								'2,3': '1-q',
								'2,4': '1-q',
								'2,5': '1-q',
								'2,6': '1-q',
								'2,11': '1-q',
								'2,12': '1-q',
								'2,13': '1-q',
								'2,14': '1-q',
								'2,15': '1-q',
								'3,4': '9-q',
								'3,6': '9-q',
								'3,12': '9-q',
								'3,14': '9-q',
								'7,5': '9-q',
								'7,7': '9-q',
								'7,13': '9-q',
								'7,15': '9-q',
								'8,4': '1-q',
								'8,5': '1-q',
								'8,6': '1-q',
								'8,7': '1-q',
								'8,8': '1-q',
								'8,13': '1-q',
								'8,14': '1-q',
								'8,15': '1-q',
								'8,16': '1-q',
								'8,17': '1-q',
								'9,16': '9-q',
							},
						},
						202: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'1,1': '1-q',
								'1,2': '1-q',
								'1,12': '9-q',
								'1,16': '1-q',
								'1,17': '1-q',
								'2,1': '1-q',
								'2,2': '1-q',
								'2,3': '9-q',
								'2,16': '1-q',
								'2,17': '1-q',
								'3,10': '9-q',
								'4,6': '9-q',
								'4,10': '1-q',
								'5,1': '9-q',
								'5,9': '9-q',
								'5,10': '1-q',
								'6,6': '9-q',
								'6,10': '1-q',
								'7,10': '9-q',
								'8,1': '1-q',
								'8,2': '1-q',
								'8,3': '9-q',
								'8,16': '1-q',
								'8,17': '1-q',
								'9,1': '1-q',
								'9,2': '1-q',
								'9,12': '9-q',
								'9,16': '1-q',
								'9,17': '1-q',
							},
						},
						203: {
							width: 11,
							height: 20,
							id: '',
							data: {
								'1,2': '2-q',
								'1,13': '2-q',
								'2,1': '9-q',
								'2,2': '2-q',
								'2,4': '9-q',
								'2,10': '9-q',
								'2,12': '9-q',
								'2,13': '2-q',
								'3,2': '2-q',
								'3,6': '1-q',
								'3,7': '1-q',
								'3,8': '1-q',
								'3,13': '2-q',
								'4,13': '2-q',
								'5,7': '9-q',
								'6,16': '2-q',
								'7,2': '2-q',
								'7,6': '1-q',
								'7,7': '1-q',
								'7,8': '1-q',
								'7,16': '2-q',
								'8,1': '9-q',
								'8,2': '2-q',
								'8,4': '9-q',
								'8,10': '9-q',
								'8,13': '9-q',
								'8,15': '9-q',
								'8,16': '2-q',
								'9,2': '2-q',
								'9,16': '2-q',
							},
						},
						204: {
							width: 11,
							height: 19,
							id: '',
							data: {
								'1,3': '9-q',
								'1,4': '2-q',
								'1,8': '9-q',
								'1,13': '9-q',
								'1,14': '2-q',
								'2,1': '9-q',
								'2,4': '2-q',
								'2,11': '9-q',
								'2,14': '2-q',
								'3,4': '2-q',
								'3,14': '2-q',
								'4,4': '2-q',
								'4,8': '9-q',
								'4,9': '2-q',
								'4,14': '2-q',
								'5,4': '2-q',
								'5,9': '2-q',
								'5,14': '2-q',
								'6,3': '9-q',
								'6,4': '2-q',
								'6,9': '2-q',
								'6,13': '9-q',
								'6,14': '2-q',
								'7,6': '9-q',
								'7,9': '2-q',
								'8,9': '2-q',
								'9,8': '9-q',
								'9,9': '2-q',
							},
						},
						205: {
							width: 11,
							height: 18,
							id: '',
							data: {
								'0,4': '1-q',
								'0,13': '9-q',
								'1,3': '9-q',
								'1,4': '1-q',
								'1,6': '9-q',
								'2,4': '1-q',
								'3,4': '1-q',
								'3,8': '9-q',
								'3,9': '3-q',
								'4,3': '9-q',
								'4,9': '3-q',
								'5,9': '3-q',
								'6,9': '3-q',
								'6,12': '9-q',
								'7,8': '9-q',
								'7,9': '3-q',
								'7,13': '1-q',
								'8,13': '1-q',
								'9,2': '9-q',
								'9,4': '9-q',
								'9,12': '9-q',
								'9,13': '1-q',
								'10,13': '1-q',
							},
						},
						206: {
							width: 11,
							height: 17,
							id: '',
							data: {
								'0,0': '9-q',
								'0,1': '2-q',
								'0,2': '2-q',
								'0,8': '9-q',
								'1,1': '2-q',
								'1,2': '2-q',
								'1,12': '9-q',
								'2,5': '9-q',
								'2,10': '1-q',
								'2,11': '1-q',
								'2,12': '1-q',
								'2,13': '1-q',
								'2,14': '1-q',
								'3,2': '9-q',
								'5,3': '3-q',
								'5,4': '3-q',
								'5,5': '3-q',
								'5,6': '3-q',
								'5,7': '3-q',
								'5,8': '3-q',
								'5,9': '3-q',
								'5,10': '3-q',
								'5,11': '3-q',
								'5,12': '3-q',
								'5,13': '3-q',
								'7,2': '9-q',
								'8,5': '9-q',
								'8,10': '1-q',
								'8,11': '1-q',
								'8,12': '1-q',
								'8,13': '1-q',
								'8,14': '1-q',
								'9,1': '2-q',
								'9,2': '2-q',
								'9,12': '9-q',
								'10,0': '9-q',
								'10,1': '2-q',
								'10,2': '2-q',
								'10,8': '9-q',
							},
						},
						207: {
							width: 11,
							height: 16,
							id: '',
							data: {
								'0,0': '9-q',
								'0,1': '3-q',
								'1,1': '3-q',
								'1,6': '9-q',
								'1,12': '9-q',
								'1,13': '2-q',
								'2,1': '3-q',
								'2,13': '2-q',
								'3,4': '1-q',
								'3,9': '9-q',
								'3,13': '2-q',
								'4,3': '9-q',
								'4,4': '1-q',
								'5,4': '1-q',
								'5,7': '1-q',
								'6,4': '9-q',
								'6,6': '9-q',
								'6,7': '1-q',
								'7,7': '1-q',
								'7,10': '3-q',
								'7,13': '2-q',
								'8,7': '9-q',
								'8,10': '3-q',
								'8,12': '9-q',
								'8,13': '2-q',
								'9,1': '9-q',
								'9,10': '3-q',
								'9,13': '2-q',
							},
						},
						208: {
							width: 11,
							height: 18,
							id: '',
							data: {
								'1,1': '9-q',
								'1,2': '1-q',
								'1,3': '1-q',
								'1,4': '1-q',
								'1,13': '1-q',
								'1,14': '1-q',
								'1,15': '1-q',
								'2,2': '1-q',
								'2,3': '9-q',
								'2,14': '9-q',
								'2,15': '1-q',
								'3,2': '1-q',
								'3,9': '9-q',
								'3,15': '1-q',
								'4,7': '9-q',
								'4,8': '2-q',
								'4,9': '2-q',
								'5,8': '2-q',
								'5,9': '2-q',
								'6,7': '9-q',
								'6,8': '2-q',
								'6,9': '2-q',
								'7,2': '1-q',
								'7,9': '9-q',
								'7,15': '1-q',
								'8,2': '1-q',
								'8,3': '9-q',
								'8,14': '9-q',
								'8,15': '1-q',
								'9,1': '9-q',
								'9,2': '1-q',
								'9,3': '1-q',
								'9,4': '1-q',
								'9,13': '1-q',
								'9,14': '1-q',
								'9,15': '1-q',
							},
						},
						209: {
							width: 11,
							height: 18,
							id: '',
							data: {
								'0,0': '1-q',
								'0,1': '1-q',
								'0,16': '1-q',
								'0,17': '1-q',
								'1,0': '1-q',
								'1,1': '1-q',
								'1,2': '9-q',
								'1,5': '9-q',
								'1,6': '2-q',
								'1,11': '9-q',
								'1,16': '1-q',
								'1,17': '1-q',
								'2,1': '9-q',
								'2,6': '2-q',
								'3,6': '2-q',
								'4,5': '9-q',
								'4,6': '2-q',
								'6,10': '9-q',
								'6,11': '2-q',
								'7,11': '2-q',
								'8,1': '9-q',
								'8,11': '2-q',
								'9,0': '1-q',
								'9,1': '1-q',
								'9,2': '9-q',
								'9,6': '9-q',
								'9,10': '9-q',
								'9,11': '2-q',
								'9,16': '1-q',
								'9,17': '1-q',
								'10,0': '1-q',
								'10,1': '1-q',
								'10,16': '1-q',
								'10,17': '1-q',
							},
						},
						210: {
							width: 11,
							height: 18,
							id: '',
							data: {
								'0,0': '1-q',
								'0,1': '1-q',
								'0,16': '1-q',
								'0,17': '1-q',
								'1,0': '1-q',
								'1,1': '1-q',
								'1,6': '9-q',
								'1,10': '9-q',
								'1,16': '1-q',
								'1,17': '1-q',
								'2,2': '9-q',
								'2,14': '9-q',
								'5,4': '9-q',
								'5,12': '9-q',
								'8,2': '9-q',
								'8,14': '9-q',
								'9,0': '1-q',
								'9,1': '1-q',
								'9,6': '9-q',
								'9,10': '9-q',
								'9,16': '1-q',
								'9,17': '1-q',
								'10,0': '1-q',
								'10,1': '1-q',
								'10,16': '1-q',
								'10,17': '1-q',
							},
						},
					}),
					(b.playerDefaultConf = {
						hp: 500,
						spe: 330,
						atk: 50,
						atkPercentage: 100,
						hpPercentage: 100,
						spePercentage: 100,
						extraAtk: 1,
						extraAtkPercentage: 0,
						damageReduction: 0,
						damageReductionPer: 0,
						crit: 0,
						critDamage: 3,
						hide: 0,
						atkSpe: 1.2,
						atkSpePercentage: 100,
						armor: 0,
						armorPercentage: 0,
						enemyDieGetHp: 0,
						enemyDieGetHpPercentage: 0,
						upLevelGetHp: 0,
						addWeaponAttribute: 0,
						offlineGold: 0,
						hpShield: 0,
						forwardArrow: 0,
						diagonalArrow: 0,
						sidedArrow: 0,
						backwardArrow: 0,
						expAdd: 1,
						pierceWall: 0,
						levitate: 0,
					}),
					(b.trammelsConf = {
						金: {
							icon: 'ui/cp/attribute_icon_001',
							type: 'atkPercentage',
							ins: 'Metal(3/5):Attack +50%/100%',
							data: { need: [3, 5], num: [50, 100] },
						},
						木: {
							icon: 'ui/cp/attribute_icon_002',
							type: 'hpPercentage',
							ins: 'Nature(2/4):Max HP +50%/100%',
							data: { need: [2, 4], num: [50, 100] },
						},
						水: {
							icon: 'ui/cp/attribute_icon_003',
							type: 'spePercentage',
							ins: 'Water(2/4):Speed +20%/30%',
							data: { need: [2, 4], num: [20, 30] },
						},
						火: {
							icon: 'ui/cp/attribute_icon_004',
							type: 'extraAtkPercentage',
							ins: 'Fire(2/4):Bonus damage +20%/40%',
							data: { need: [2, 4], num: [20, 40] },
						},
						土: {
							icon: 'ui/cp/attribute_icon_005',
							type: 'damageReductionPer',
							ins: 'Earth(3/5):increase 15%/30% damage reduction',
							data: { need: [3, 5], num: [15, 30] },
						},
						战士: {
							icon: 'ui/cp/attribute_icon_009',
							type: 'hpPercentage',
							ins: 'Warrior(2/4):All HP +50%/100%',
							data: { need: [2, 4], num: [50, 100] },
						},
						刺客: {
							icon: 'ui/cp/attribute_icon_011',
							type: 'crit',
							ins:
								'Assassinator(2/4):All triple hit chance +10%/20%',
							data: { need: [2, 4], num: [0.1, 0.2] },
						},
						忍者: {
							icon: 'ui/cp/attribute_icon_008',
							type: 'hide',
							ins: 'Ninja(2/4):cloak for 2s/4s every 10s',
							data: { need: [2, 4], num: [2, 4] },
						},
						勇士: {
							icon: 'ui/cp/attribute_icon_007',
							type: 'atkSpePercentage',
							ins: 'Hero(2/4):All attack speed +30%/50%',
							data: { need: [2, 4], num: [20, 35] },
						},
						卫士: {
							icon: 'ui/cp/attribute_icon_010',
							type: 'hpShield',
							ins:
								'Guardian(2/4):All gain 10%/20% shield of max HP',
							data: { need: [2, 4], num: [10, 20] },
						},
						猎人: {
							icon: 'ui/cp/attribute_icon_006',
							type: 'serial',
							ins: 'Hunter(2/4):All gain 1/2 extra arrow',
							data: { need: [2, 4], num: [1, 2] },
						},
					}),
					(b.buffConf = _),
					(b.weaponConf = {
						1: {
							id: 1,
							quality: 1,
							data: { atk: 30 },
							add: { atk: 15 },
							addMax: 10,
							name: 'Hammer(white)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_001',
							weaponIcon: 'chuizi',
							upId: 2,
						},
						2: {
							id: 2,
							quality: 2,
							data: { atk: 40, critDamage: 0.5 },
							add: { atk: 20 },
							addMax: 20,
							name: 'Hammer(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_002',
							weaponIcon: 'chuizi',
							upId: 3,
						},
						3: {
							id: 3,
							quality: 3,
							data: { atk: 50, critDamage: 0.75, crit: 0.1 },
							add: { atk: 25 },
							addMax: 30,
							name: 'Hammer(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_003',
							weaponIcon: 'chuizi',
							upId: 4,
						},
						4: {
							id: 4,
							quality: 4,
							data: { atk: 60, critDamage: 1, crit: 0.2 },
							add: { atk: 30 },
							addMax: 40,
							name: 'Hammer(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_004',
							weaponIcon: 'chuizi',
							upId: 0,
						},
						5: {
							id: 5,
							quality: 1,
							data: { atk: 30 },
							add: { atk: 15 },
							addMax: 10,
							name: 'Dagger(white)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_005',
							weaponIcon: 'bishou',
							upId: 6,
						},
						6: {
							id: 6,
							quality: 2,
							data: { atk: 50, critDamage: 0.05 },
							add: { atk: 25 },
							addMax: 20,
							name: 'Dagger(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_006',
							weaponIcon: 'bishou',
							upId: 7,
						},
						7: {
							id: 7,
							quality: 3,
							data: { atk: 75, critDamage: 0.05, crit: 0.05 },
							add: { atk: 37.5 },
							addMax: 30,
							name: 'Dagger(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_007',
							weaponIcon: 'bishou',
							upId: 8,
						},
						8: {
							id: 8,
							quality: 4,
							data: { atk: 100, critDamage: 0.1, crit: 0.05 },
							add: { atk: 50 },
							addMax: 40,
							name: 'Dagger(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_008',
							weaponIcon: 'bishou',
							upId: 0,
						},
						9: {
							id: 9,
							quality: 1,
							data: { atk: 20 },
							add: { atk: 10 },
							addMax: 10,
							name: 'Short sword(white)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_009',
							weaponIcon: 'bishou',
							upId: 10,
						},
						10: {
							id: 10,
							quality: 2,
							data: { atk: 40, critDamage: 0.1 },
							add: { atk: 20 },
							addMax: 20,
							name: 'Short sword(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_010',
							weaponIcon: 'bishou',
							upId: 11,
						},
						11: {
							id: 11,
							quality: 3,
							data: { atk: 60, critDamage: 0.2, crit: 0.1 },
							add: { atk: 30 },
							addMax: 30,
							name: 'Short sword(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_011',
							weaponIcon: 'bishou',
							upId: 12,
						},
						12: {
							id: 12,
							quality: 4,
							data: { atk: 80, critDamage: 0.3, crit: 0.2 },
							add: { atk: 40 },
							addMax: 40,
							name: 'Short sword(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_012',
							weaponIcon: 'bishou',
							upId: 0,
						},
						13: {
							id: 13,
							quality: 1,
							data: { atk: 60 },
							add: { atk: 30 },
							addMax: 10,
							name: 'Crossdart(white)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_013',
							weaponIcon: 'feibiao',
							upId: 14,
						},
						14: {
							id: 14,
							quality: 2,
							data: { atk: 60, critDamage: 1 },
							add: { atk: 30 },
							addMax: 20,
							name: 'Crossdart(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_014',
							weaponIcon: 'feibiao',
							upId: 15,
						},
						15: {
							id: 15,
							quality: 3,
							data: { atk: 60, critDamage: 1.5, crit: 0.01 },
							add: { atk: 30 },
							addMax: 30,
							name: 'Crossdart(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_014',
							weaponIcon: 'feibiao',
							upId: 16,
						},
						16: {
							id: 16,
							quality: 4,
							data: { atk: 60, critDamage: 2, crit: 0.02 },
							add: { atk: 30 },
							addMax: 40,
							name: 'Crossdart(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_016',
							weaponIcon: 'feibiao',
							upId: 0,
						},
						17: {
							id: 17,
							quality: 1,
							data: { atk: 30 },
							add: { atk: 15 },
							addMax: 10,
							name: 'Shuriken(white)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_017',
							weaponIcon: 'feibiao',
							upId: 18,
						},
						18: {
							id: 18,
							quality: 2,
							data: { atk: 60, critDamage: 0.02 },
							add: { atk: 30 },
							addMax: 20,
							name: 'Shuriken(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_018',
							weaponIcon: 'feibiao',
							upId: 19,
						},
						19: {
							id: 19,
							quality: 3,
							data: { atk: 90, critDamage: 0.05 },
							add: { atk: 45 },
							addMax: 30,
							name: 'Shuriken(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_019',
							weaponIcon: 'feibiao',
							upId: 20,
						},
						20: {
							id: 20,
							quality: 4,
							data: { atk: 120, critDamage: 0.05, crit: 0.01 },
							add: { atk: 60 },
							addMax: 40,
							name: 'Shuriken(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_020',
							weaponIcon: 'feibiao',
							upId: 0,
						},
						21: {
							id: 21,
							quality: 1,
							data: { atk: 50 },
							add: { atk: 25 },
							addMax: 10,
							name: 'Reap(white)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_021',
							weaponIcon: 'fuzi',
							upId: 22,
						},
						22: {
							id: 22,
							quality: 2,
							data: { atk: 70, critDamage: 0.05 },
							add: { atk: 35 },
							addMax: 20,
							name: 'Reap(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_021',
							weaponIcon: 'fuzi',
							upId: 23,
						},
						23: {
							id: 23,
							quality: 3,
							data: { atk: 90, critDamage: 0.1, crit: 0.05 },
							add: { atk: 45 },
							addMax: 30,
							name: 'Reap(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_023',
							weaponIcon: 'fuzi',
							upId: 24,
						},
						24: {
							id: 24,
							quality: 4,
							data: { atk: 100, critDamage: 0.1, crit: 0.1 },
							add: { atk: 50 },
							addMax: 40,
							name: 'Reap(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_023',
							weaponIcon: 'fuzi',
							upId: 0,
						},
						25: {
							id: 25,
							quality: 1,
							data: { atk: 45 },
							add: { atk: 22.5 },
							addMax: 10,
							name: 'Dart(white)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_025',
							weaponIcon: 'feibiao',
							upId: 26,
						},
						26: {
							id: 26,
							quality: 2,
							data: { atk: 60, critDamage: 0.05 },
							add: { atk: 30 },
							addMax: 20,
							name: 'Dart(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_025',
							weaponIcon: 'feibiao',
							upId: 27,
						},
						27: {
							id: 27,
							quality: 3,
							data: { atk: 75, critDamage: 0.05, crit: 0.1 },
							add: { atk: 37.5 },
							addMax: 30,
							name: 'Dart(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_027',
							weaponIcon: 'feibiao',
							upId: 28,
						},
						28: {
							id: 28,
							quality: 4,
							data: { atk: 90, critDamage: 0.1, crit: 0.2 },
							add: { atk: 45 },
							addMax: 40,
							name: 'Dart(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_028',
							weaponIcon: 'feibiao',
							upId: 0,
						},
						29: {
							id: 29,
							quality: 2,
							data: { atk: 60 },
							add: { atk: 30 },
							addMax: 20,
							name: 'Axe(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_029',
							weaponIcon: 'fuzi',
							upId: 30,
						},
						30: {
							id: 30,
							quality: 3,
							data: { atk: 80, critDamage: 0.1 },
							add: { atk: 40 },
							addMax: 30,
							name: 'Axe(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_030',
							weaponIcon: 'fuzi',
							upId: 31,
						},
						31: {
							id: 31,
							quality: 4,
							data: { atk: 100, critDamage: 0.25, crit: 0.1 },
							add: { atk: 50 },
							addMax: 40,
							name: 'Axe(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_031',
							weaponIcon: 'fuzi',
							upId: 32,
						},
						32: {
							id: 32,
							quality: 5,
							data: {
								atk: 120,
								critDamage: 0.5,
								crit: 0.2,
								skill: 'Anger',
							},
							add: { atk: 60 },
							addMax: 50,
							name: 'Axe(orange)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_032',
							weaponIcon: 'fuzi',
							upId: 0,
						},
						33: {
							id: 33,
							quality: 2,
							data: { atk: 80 },
							add: { atk: 40 },
							addMax: 20,
							name: 'Feather(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_033',
							weaponIcon: 'gongjian',
							upId: 34,
						},
						34: {
							id: 34,
							quality: 3,
							data: { atk: 95, critDamage: 0.1 },
							add: { atk: 47.5 },
							addMax: 30,
							name: 'Feather(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_033',
							weaponIcon: 'gongjian',
							upId: 35,
						},
						35: {
							id: 35,
							quality: 4,
							data: { atk: 110, critDamage: 0.3, crit: 0.05 },
							add: { atk: 55 },
							addMax: 40,
							name: 'Feather(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_033',
							weaponIcon: 'gongjian',
							upId: 36,
						},
						36: {
							id: 36,
							quality: 5,
							data: {
								atk: 130,
								critDamage: 0.5,
								crit: 0.05,
								skill: 'Rebound',
							},
							add: { atk: 60 },
							addMax: 50,
							name: 'Feather(orange)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_033',
							weaponIcon: 'gongjian',
							upId: 0,
						},
						37: {
							id: 37,
							quality: 2,
							data: { atk: 90 },
							add: { atk: 45 },
							addMax: 20,
							name: 'Bow(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_037',
							weaponIcon: 'gongjian',
							upId: 38,
						},
						38: {
							id: 38,
							quality: 3,
							data: { atk: 100, critDamage: 1 },
							add: { atk: 50 },
							addMax: 30,
							name: 'Bow(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_038',
							weaponIcon: 'gongjian',
							upId: 39,
						},
						39: {
							id: 39,
							quality: 4,
							data: { atk: 110, critDamage: 1.5, crit: 0.1 },
							add: { atk: 55 },
							addMax: 40,
							name: 'Bow(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_039',
							weaponIcon: 'gongjian',
							upId: 40,
						},
						40: {
							id: 40,
							quality: 5,
							data: {
								atk: 110,
								critDamage: 2,
								crit: 0.2,
								skill: 'Penetrate',
							},
							add: { atk: 55 },
							addMax: 50,
							name: 'Bow(orange)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_040',
							weaponIcon: 'gongjian',
							upId: 0,
						},
						41: {
							id: 41,
							quality: 2,
							data: { atk: 60 },
							add: { atk: 30 },
							addMax: 20,
							name: 'Crossbow(green)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_041',
							weaponIcon: 'gongjian',
							upId: 42,
						},
						42: {
							id: 42,
							quality: 3,
							data: { atk: 90, critDamage: 0.05 },
							add: { atk: 45 },
							addMax: 30,
							name: 'Crossbow(blue)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_042',
							weaponIcon: 'gongjian',
							upId: 31,
						},
						43: {
							id: 43,
							quality: 4,
							data: { atk: 120, critDamage: 0.05, crit: 0.01 },
							add: { atk: 60 },
							addMax: 40,
							name: 'Crossbow(purple)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_043',
							weaponIcon: 'gongjian',
							upId: 44,
						},
						44: {
							id: 44,
							quality: 5,
							data: {
								atk: 150,
								critDamage: 0.1,
								crit: 0.01,
								skill: 'Absorb',
							},
							add: { atk: 60 },
							addMax: 50,
							name: 'Crossbow(orange)',
							ins: 'Increase HP',
							type: 'weapon',
							icon: 'ui/weapon/weapon_044',
							weaponIcon: 'gongjian',
							upId: 0,
						},
						101: {
							id: 101,
							quality: 1,
							data: { hp: 200 },
							add: { hp: 100 },
							addMax: 10,
							name: 'Mail(white)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_001',
							upId: 102,
						},
						102: {
							id: 102,
							quality: 2,
							data: { hp: 300, damageReductionPer: 5 },
							add: { hp: 150 },
							addMax: 20,
							name: 'Mail(green)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_001',
							upId: 103,
						},
						103: {
							id: 103,
							quality: 3,
							data: {
								hp: 400,
								damageReductionPer: 5,
								hpShield: 10,
							},
							add: { hp: 200 },
							addMax: 30,
							name: 'Mail(blue)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_003',
							upId: 104,
						},
						104: {
							id: 104,
							quality: 4,
							data: {
								hp: 500,
								damageReductionPer: 10,
								hpShield: 15,
							},
							add: { hp: 250 },
							addMax: 40,
							name: 'Mail(purple)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_003',
							upId: 0,
						},
						105: {
							id: 105,
							quality: 1,
							data: { hp: 400 },
							add: { hp: 200 },
							addMax: 10,
							name: 'Armor of thorn(white)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_005',
							upId: 106,
						},
						106: {
							id: 106,
							quality: 2,
							data: { hp: 600 },
							add: { hp: 300 },
							addMax: 20,
							name: 'Armor of thorn(green)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_005',
							upId: 107,
						},
						107: {
							id: 107,
							quality: 3,
							data: { hp: 800, damageReductionPer: 5 },
							add: { hp: 400 },
							addMax: 30,
							name: 'Armor of thorn(blue)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_007',
							upId: 108,
						},
						108: {
							id: 108,
							quality: 4,
							data: {
								hp: 1e3,
								damageReductionPer: 5,
								hpShield: 5,
							},
							add: { hp: 500 },
							addMax: 40,
							name: 'Armor of thorn(purple)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_007',
							upId: 0,
						},
						109: {
							id: 109,
							quality: 1,
							data: { hp: 200 },
							add: { hp: 100 },
							addMax: 10,
							name: 'Armor of abyss(white)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_009',
							upId: 110,
						},
						110: {
							id: 110,
							quality: 2,
							data: {
								hp: 200,
								damageReductionPer: 10,
								hpShield: 10,
							},
							add: { hp: 100 },
							addMax: 20,
							name: 'Armor of abyss(green)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_009',
							upId: 111,
						},
						111: {
							id: 111,
							quality: 3,
							data: {
								hp: 200,
								damageReductionPer: 10,
								hpShield: 20,
							},
							add: { hp: 200 },
							addMax: 30,
							name: 'Armor of abyss(blue)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_011',
							upId: 112,
						},
						112: {
							id: 112,
							quality: 4,
							data: {
								hp: 200,
								damageReductionPer: 10,
								hpShield: 40,
							},
							add: { hp: 100 },
							addMax: 40,
							name: 'Armor of abyss(purple)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_011',
							upId: 0,
						},
						113: {
							id: 113,
							quality: 1,
							data: { hp: 400 },
							add: { hp: 200 },
							addMax: 10,
							name: 'Armor of demon(white)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_013',
							upId: 114,
						},
						114: {
							id: 114,
							quality: 2,
							data: { hp: 400, damageReductionPer: 10 },
							add: { hp: 200 },
							addMax: 20,
							name: 'Armor of demon(green)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_013',
							upId: 115,
						},
						115: {
							id: 115,
							quality: 3,
							data: {
								hp: 400,
								damageReductionPer: 20,
								hpShield: 5,
							},
							add: { hp: 200 },
							addMax: 30,
							name: 'Armor of demon(blue)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_015',
							upId: 116,
						},
						116: {
							id: 116,
							quality: 4,
							data: {
								hp: 400,
								damageReductionPer: 30,
								hpShield: 10,
							},
							add: { hp: 200 },
							addMax: 40,
							name: 'Armor of demon(purple)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_015',
							upId: 0,
						},
						117: {
							id: 117,
							quality: 1,
							data: { hp: 300 },
							add: { hp: 150 },
							addMax: 10,
							name: 'Mana resist cloak(white)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_017',
							upId: 117,
						},
						118: {
							id: 118,
							quality: 2,
							data: { hp: 400, damageReductionPer: 5 },
							add: { hp: 100 },
							addMax: 20,
							name: 'Mana resist cloak(green)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_017',
							upId: 119,
						},
						119: {
							id: 119,
							quality: 3,
							data: {
								hp: 500,
								damageReductionPer: 10,
								hpShield: 10,
							},
							add: { hp: 250 },
							addMax: 30,
							name: 'Mana resist cloak(blue)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_019',
							upId: 120,
						},
						120: {
							id: 120,
							quality: 4,
							data: {
								hp: 600,
								damageReductionPer: 15,
								hpShield: 20,
							},
							add: { hp: 300 },
							addMax: 40,
							name: 'Mana resist cloak(purple)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_019',
							upId: 0,
						},
						121: {
							id: 121,
							quality: 1,
							data: { hp: 600 },
							add: { hp: 300 },
							addMax: 10,
							name: 'Silver cuirass(white)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_021',
							upId: 122,
						},
						122: {
							id: 122,
							quality: 2,
							data: { hp: 800 },
							add: { hp: 400 },
							addMax: 20,
							name: 'Silver cuirass(green)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_021',
							upId: 123,
						},
						123: {
							id: 123,
							quality: 3,
							data: { hp: 1e3 },
							add: { hp: 500 },
							addMax: 30,
							name: 'Silver cuirass(blue)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_023',
							upId: 124,
						},
						124: {
							id: 124,
							quality: 4,
							data: { hp: 1200 },
							add: { hp: 600 },
							addMax: 40,
							name: 'Silver cuirass(purple)',
							ins: 'Increase HP',
							type: 'clothes',
							icon: 'ui/weapon/cloth_023',
							upId: 0,
						},
						201: {
							id: 201,
							quality: 1,
							data: { atk: 20, hp: 100 },
							add: { atk: 10, hp: 50 },
							addMax: 10,
							name: 'Destiny ring(white)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_001',
							upId: 202,
						},
						202: {
							id: 202,
							quality: 2,
							data: { atk: 30, hp: 100 },
							add: { atk: 15, hp: 50 },
							addMax: 20,
							name: 'Destiny ring(green)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_001',
							upId: 203,
						},
						203: {
							id: 203,
							quality: 3,
							data: { atk: 30, hp: 200, expAdd: 0.1 },
							add: { atk: 15, hp: 100 },
							addMax: 30,
							name: 'Destiny ring(blue)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_003',
							upId: 204,
						},
						204: {
							id: 204,
							quality: 4,
							data: { atk: 40, hp: 200, expAdd: 0.2 },
							add: { atk: 20, hp: 100 },
							addMax: 40,
							name: 'Destiny ring(purple)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_003',
							upId: 0,
						},
						205: {
							id: 205,
							quality: 1,
							data: { atk: 30, hp: 100 },
							add: { atk: 15, hp: 50 },
							addMax: 10,
							name: 'Enlightenment ring(white)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_005',
							upId: 206,
						},
						206: {
							id: 206,
							quality: 2,
							data: { atk: 40, hp: 100 },
							add: { atk: 20, hp: 50 },
							addMax: 20,
							name: 'Enlightenment ring(green)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_005',
							upId: 207,
						},
						207: {
							id: 207,
							quality: 3,
							data: { atk: 50, hp: 100, expAdd: 0.05 },
							add: { atk: 25, hp: 50 },
							addMax: 30,
							name: 'Enlightenment ring(blue)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_007',
							upId: 208,
						},
						208: {
							id: 208,
							quality: 4,
							data: { atk: 60, hp: 100, expAdd: 0.1 },
							add: { atk: 30, hp: 100 },
							addMax: 40,
							name: 'Enlightenment ring(purple)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_007',
							upId: 0,
						},
						209: {
							id: 209,
							quality: 1,
							data: { atk: 80 },
							add: { atk: 40 },
							addMax: 10,
							name: 'Potential ring(white)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_009',
							upId: 210,
						},
						210: {
							id: 210,
							quality: 2,
							data: { atk: 80 },
							add: { atk: 40 },
							addMax: 20,
							name: 'Potential ring(green)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_009',
							upId: 211,
						},
						211: {
							id: 211,
							quality: 3,
							data: { atk: 80, expAdd: 0.05 },
							add: { atk: 40 },
							addMax: 30,
							name: 'Potential ring(blue)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_011',
							upId: 212,
						},
						212: {
							id: 212,
							quality: 4,
							data: { atk: 80, expAdd: 0.1 },
							add: { atk: 40 },
							addMax: 40,
							name: 'Potential ring(purple)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_011',
							upId: 0,
						},
						213: {
							id: 213,
							quality: 1,
							data: { atk: 20, hp: 200 },
							add: { atk: 10, hp: 100 },
							addMax: 10,
							name: 'Desire ring(white)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_013',
							upId: 214,
						},
						214: {
							id: 214,
							quality: 2,
							data: { atk: 20, hp: 300 },
							add: { atk: 10, hp: 150 },
							addMax: 20,
							name: 'Desire ring(green)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_013',
							upId: 215,
						},
						215: {
							id: 215,
							quality: 3,
							data: { atk: 20, hp: 300, expAdd: 0.3 },
							add: { atk: 10, hp: 150 },
							addMax: 30,
							name: 'Desire ring(blue)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_015',
							upId: 216,
						},
						216: {
							id: 216,
							quality: 4,
							data: { atk: 20, hp: 400, expAdd: 0.5 },
							add: { atk: 20, hp: 200 },
							addMax: 40,
							name: 'Desire ring(purple)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_015',
							upId: 0,
						},
						217: {
							id: 217,
							quality: 1,
							data: { atk: 10, hp: 500 },
							add: { atk: 5, hp: 250 },
							addMax: 10,
							name: 'Heal ring(white)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_017',
							upId: 218,
						},
						218: {
							id: 218,
							quality: 2,
							data: { atk: 10, hp: 600 },
							add: { atk: 5, hp: 300 },
							addMax: 20,
							name: 'Heal ring(green)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_017',
							upId: 219,
						},
						219: {
							id: 219,
							quality: 3,
							data: { atk: 10, hp: 700, expAdd: 0.1 },
							add: { atk: 5, hp: 350 },
							addMax: 30,
							name: 'Heal ring(blue)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_019',
							upId: 220,
						},
						220: {
							id: 220,
							quality: 4,
							data: { atk: 10, hp: 800, expAdd: 0.3 },
							add: { atk: 5, hp: 400 },
							addMax: 40,
							name: 'Heal ring(purple)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_019',
							upId: 0,
						},
						221: {
							id: 221,
							quality: 1,
							data: { atk: 20, hp: 200, expAdd: 0.25 },
							add: { atk: 10, hp: 100 },
							addMax: 10,
							name: 'Wisdom ring(white)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_021',
							upId: 222,
						},
						222: {
							id: 222,
							quality: 2,
							data: { atk: 20, hp: 200, expAdd: 0.5 },
							add: { atk: 10, hp: 100 },
							addMax: 20,
							name: 'Wisdom ring(green)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_021',
							upId: 223,
						},
						223: {
							id: 223,
							quality: 3,
							data: { atk: 20, hp: 200, expAdd: 0.75 },
							add: { atk: 10, hp: 100 },
							addMax: 30,
							name: 'Wisdom ring(blue)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_023',
							upId: 224,
						},
						224: {
							id: 224,
							quality: 4,
							data: { atk: 20, hp: 200, expAdd: 1 },
							add: { atk: 10, hp: 100 },
							addMax: 40,
							name: 'Wisdom ring(purple)',
							ins: 'Increase HP',
							type: 'ring',
							icon: 'ui/weapon/ring_023',
							upId: 0,
						},
						301: {
							id: 301,
							quality: 1,
							data: { atk: 20, hp: 200 },
							add: { atk: 10, hp: 100 },
							addMax: 10,
							name: 'Chain of chaos(white)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_001',
							upId: 302,
						},
						302: {
							id: 302,
							quality: 2,
							data: { atk: 30, hp: 200 },
							add: { atk: 15, hp: 100 },
							addMax: 20,
							name: 'Chain of chaos(green)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_001',
							upId: 303,
						},
						303: {
							id: 303,
							quality: 3,
							data: { atk: 30, hp: 200, expAdd: 0.1 },
							add: { atk: 15, hp: 100 },
							addMax: 30,
							name: 'Chain of chaos(blue)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_001',
							upId: 304,
						},
						304: {
							id: 304,
							quality: 4,
							data: { atk: 40, hp: 200, expAdd: 0.2 },
							add: { atk: 20, hp: 100 },
							addMax: 40,
							name: 'Chain of chaos(purple)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_001',
							upId: 0,
						},
						305: {
							id: 305,
							quality: 1,
							data: { atk: 30, hp: 200 },
							add: { atk: 15, hp: 100 },
							addMax: 10,
							name: 'Fire necklace(white)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_005',
							upId: 306,
						},
						306: {
							id: 306,
							quality: 2,
							data: { atk: 40, hp: 200 },
							add: { atk: 20, hp: 100 },
							addMax: 20,
							name: 'Fire necklace(green)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_005',
							upId: 307,
						},
						307: {
							id: 307,
							quality: 3,
							data: { atk: 50, hp: 200, expAdd: 0.05 },
							add: { atk: 25, hp: 100 },
							addMax: 30,
							name: 'Fire necklace(blue)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_005',
							upId: 308,
						},
						308: {
							id: 308,
							quality: 4,
							data: { atk: 60, hp: 200, expAdd: 0.1 },
							add: { atk: 20, hp: 100 },
							addMax: 40,
							name: 'Chain of chaos(purple)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_005',
							upId: 0,
						},
						309: {
							id: 309,
							quality: 1,
							data: { atk: 60 },
							add: { atk: 30 },
							addMax: 10,
							name: 'Monarch amulet(white)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_009',
							upId: 310,
						},
						310: {
							id: 310,
							quality: 2,
							data: { atk: 70, hp: 100 },
							add: { atk: 35, hp: 50 },
							addMax: 20,
							name: 'Monarch amulet(green)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_009',
							upId: 311,
						},
						311: {
							id: 311,
							quality: 3,
							data: { atk: 80, hp: 200, expAdd: 0.05 },
							add: { atk: 40, hp: 100 },
							addMax: 30,
							name: 'Monarch amulet(blue)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_009',
							upId: 312,
						},
						312: {
							id: 312,
							quality: 4,
							data: { atk: 80, hp: 300, expAdd: 0.1 },
							add: { atk: 40, hp: 150 },
							addMax: 40,
							name: 'Monarch amulet(purple)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_009',
							upId: 0,
						},
						313: {
							id: 313,
							quality: 1,
							data: { atk: 30, hp: 200 },
							add: { atk: 15, hp: 100 },
							addMax: 10,
							name: 'Tear gem(white)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_013',
							upId: 314,
						},
						314: {
							id: 314,
							quality: 2,
							data: { atk: 30, hp: 300 },
							add: { atk: 15, hp: 150 },
							addMax: 20,
							name: 'Tear gem(green)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_013',
							upId: 315,
						},
						315: {
							id: 315,
							quality: 3,
							data: { atk: 30, hp: 300, expAdd: 0.3 },
							add: { atk: 15, hp: 150 },
							addMax: 30,
							name: 'Tear gem(blue)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_013',
							upId: 316,
						},
						316: {
							id: 316,
							quality: 4,
							data: { atk: 30, hp: 400, expAdd: 0.5 },
							add: { atk: 15, hp: 200 },
							addMax: 40,
							name: 'Tear gem(purple)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_013',
							upId: 0,
						},
						317: {
							id: 317,
							quality: 1,
							data: { atk: 10, hp: 500 },
							add: { atk: 5, hp: 250 },
							addMax: 10,
							name: 'Wheel of time(white)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_017',
							upId: 318,
						},
						318: {
							id: 318,
							quality: 2,
							data: { atk: 10, hp: 600 },
							add: { atk: 5, hp: 300 },
							addMax: 20,
							name: 'Wheel of time(green)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_017',
							upId: 319,
						},
						319: {
							id: 319,
							quality: 3,
							data: { atk: 20, hp: 700, expAdd: 0.1 },
							add: { atk: 10, hp: 350 },
							addMax: 30,
							name: 'Wheel of time(blue)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_017',
							upId: 320,
						},
						320: {
							id: 320,
							quality: 4,
							data: { atk: 20, hp: 800, expAdd: 0.3 },
							add: { atk: 20, hp: 400 },
							addMax: 40,
							name: 'Wheel of time(purple)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_017',
							upId: 0,
						},
						321: {
							id: 321,
							quality: 1,
							data: { atk: 20, hp: 100 },
							add: { atk: 10, hp: 50 },
							addMax: 10,
							name: 'Eternal necklace(white)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_021',
							upId: 322,
						},
						322: {
							id: 322,
							quality: 2,
							data: { atk: 30, hp: 200 },
							add: { atk: 15, hp: 100 },
							addMax: 20,
							name: 'Eternal necklace(green)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_021',
							upId: 323,
						},
						323: {
							id: 323,
							quality: 3,
							data: { atk: 40, hp: 300, expAdd: 0.25 },
							add: { atk: 20, hp: 150 },
							addMax: 30,
							name: 'Eternal necklace(blue)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_021',
							upId: 324,
						},
						324: {
							id: 324,
							quality: 4,
							data: { atk: 40, hp: 400, expAdd: 0.5 },
							add: { atk: 20, hp: 200 },
							addMax: 40,
							name: 'Eternal necklace(purple)',
							ins: 'Increase HP',
							type: 'necklace',
							icon: 'ui/weapon/necklace_021',
							upId: 0,
						},
					}),
					(b.workmateConf = {
						1: {
							name: 'Metal·Warrior',
							atk: 80,
							spe: 0.5,
							spine: '',
							icon: 'ui/workmate/jin_zhanshi',
							bulletIcon: 'bullet_1.png',
							type1: '金',
							type2: '战士',
							quality: 4,
						},
						2: {
							name: 'Metal·Assassinator',
							atk: 60,
							spe: 0.67,
							spine: '',
							icon: 'ui/workmate/jin_cike',
							bulletIcon: 'bullet_1.png',
							type1: '金',
							type2: '刺客',
							quality: 4,
						},
						3: {
							name: 'Metal·Ninja',
							atk: 40,
							spe: 0.75,
							spine: '',
							icon: 'ui/workmate/jin_renzhe',
							bulletIcon: 'bullet_1.png',
							type1: '金',
							type2: '忍者',
							quality: 3,
						},
						4: {
							name: 'Metal·Guardian',
							atk: 40,
							spe: 0.5,
							spine: '',
							icon: 'ui/workmate/jin_weishi',
							bulletIcon: 'bullet_1.png',
							type1: '金',
							type2: '卫士',
							quality: 2,
						},
						5: {
							name: 'Metal·Hunter',
							atk: 40,
							spe: 1.25,
							spine: '',
							icon: 'ui/workmate/jin_lieren',
							bulletIcon: 'bullet_1.png',
							type1: '金',
							type2: '猎人',
							quality: 5,
						},
						6: {
							name: 'Nature·Assassinator',
							atk: 10,
							spe: 1,
							spine: '',
							icon: 'ui/workmate/mu_cike',
							bulletIcon: 'bullet_1.png',
							type1: '木',
							type2: '刺客',
							quality: 1,
						},
						7: {
							name: 'Nature·Ninja',
							atk: 12.5,
							spe: 0.8,
							spine: '',
							icon: 'ui/workmate/mu_renzhe',
							bulletIcon: 'bullet_1.png',
							type1: '木',
							type2: '忍者',
							quality: 1,
						},
						8: {
							name: 'Nature·Hero',
							atk: 25,
							spe: 0.8,
							spine: '',
							icon: 'ui/workmate/mu_yongshi',
							bulletIcon: 'bullet_1.png',
							type1: '木',
							type2: '勇士',
							quality: 2,
						},
						9: {
							name: 'Nature·Hunter',
							atk: 30,
							spe: 1,
							spine: '',
							icon: 'ui/workmate/mu_lieren',
							bulletIcon: 'bullet_1.png',
							type1: '木',
							type2: '猎人',
							quality: 4,
						},
						10: {
							name: 'Water·Warrior',
							atk: 25,
							spe: 0.4,
							spine: '',
							icon: 'ui/workmate/shui_zhanshi',
							bulletIcon: 'bullet_1.png',
							type1: '水',
							type2: '战士',
							quality: 1,
						},
						11: {
							name: 'Water·Ninja',
							atk: 62.5,
							spe: 0.8,
							spine: '',
							icon: 'ui/workmate/shui_renzhe',
							bulletIcon: 'bullet_1.png',
							type1: '水',
							type2: '忍者',
							quality: 5,
						},
						12: {
							name: 'Water·Hero',
							atk: 40,
							spe: 1,
							spine: '',
							icon: 'ui/workmate/shui_yongshi',
							bulletIcon: 'bullet_1.png',
							type1: '水',
							type2: '勇士',
							quality: 4,
						},
						13: {
							name: 'Water·Guardian',
							atk: 20,
							spe: 0.5,
							spine: '',
							icon: 'ui/workmate/shui_weishi',
							bulletIcon: 'bullet_1.png',
							type1: '水',
							type2: '卫士',
							quality: 1,
						},
						14: {
							name: 'Water·Hunter',
							atk: 60,
							spe: 0.5,
							spine: '',
							icon: 'ui/workmate/shui_lieren',
							bulletIcon: 'bullet_1.png',
							type1: '水',
							type2: '猎人',
							quality: 3,
						},
						15: {
							name: 'Fire·Warrior',
							atk: 50,
							spe: 0.4,
							spine: '',
							icon: 'ui/workmate/huo_zhanshi',
							bulletIcon: 'bullet_1.png',
							type1: '火',
							type2: '战士',
							quality: 2,
						},
						16: {
							name: 'Fire·Assassinator',
							atk: 50,
							spe: 0.6,
							spine: '',
							icon: 'ui/workmate/huo_cike',
							bulletIcon: 'bullet_1.png',
							type1: '火',
							type2: '刺客',
							quality: 3,
						},
						17: {
							name: 'Fire·Ninja',
							atk: 25,
							spe: 0.8,
							spine: '',
							icon: 'ui/workmate/huo_renzhe',
							bulletIcon: 'bullet_1.png',
							type1: '火',
							type2: '忍者',
							quality: 2,
						},
						18: {
							name: 'Fire·Hero',
							atk: 25,
							spe: 1.6,
							spine: '',
							icon: 'ui/workmate/huo_yongshi',
							bulletIcon: 'bullet_1.png',
							type1: '火',
							type2: '勇士',
							quality: 4,
						},
						19: {
							name: 'Fire·Guardian',
							atk: 22.5,
							spe: 0.4,
							spine: '',
							icon: 'ui/workmate/huo_weishi',
							bulletIcon: 'bullet_1.png',
							type1: '火',
							type2: '卫士',
							quality: 1,
						},
						20: {
							name: 'Earth·Warrior',
							atk: 75,
							spe: 0.4,
							spine: '',
							icon: 'ui/workmate/tu_zhanshi',
							bulletIcon: 'bullet_1.png',
							type1: '土',
							type2: '战士',
							quality: 3,
						},
						21: {
							name: 'Earth·Assassinator',
							atk: 16,
							spe: 0.625,
							spine: '',
							icon: 'ui/workmate/tu_cike',
							bulletIcon: 'bullet_1.png',
							type1: '土',
							type2: '刺客',
							quality: 2,
						},
						22: {
							name: 'Earth·Hero',
							atk: 25,
							spe: 1.2,
							spine: '',
							icon: 'ui/workmate/tu_yongshi',
							bulletIcon: 'bullet_1.png',
							type1: '土',
							type2: '勇士',
							quality: 3,
						},
						23: {
							name: 'Earth·Guardian',
							atk: 80,
							spe: 0.375,
							spine: '',
							icon: 'ui/workmate/tu_weishi',
							bulletIcon: 'bullet_1.png',
							type1: '土',
							type2: '卫士',
							quality: 3,
						},
						24: {
							name: 'Earth·Hunter',
							atk: 10,
							spe: 1,
							spine: '',
							icon: 'ui/workmate/tu_lieren',
							bulletIcon: 'bullet_1.png',
							type1: '土',
							type2: '猎人',
							quality: 2,
						},
					}),
					(b.tfConf = [
						{
							type: 'hp',
							default: 250,
							add: 250,
							name: 'HP',
							ins: 'Increase initial HP',
						},
						{
							type: 'atk',
							default: 50,
							add: 50,
							name: 'Strength',
							ins: 'Increase initial attack',
						},
						{
							type: 'enemyDieGetHpPercentage',
							default: 0.02,
							add: 0.002,
							name: 'Recover',
							ins: 'Elimination feedback \nchance',
						},
						{
							type: 'atkSpe',
							default: 0.02,
							add: 0.02,
							name: 'Agility',
							ins: 'Increase initial \nattack speed',
						},
						{
							type: 'damageReductionPer',
							default: 1,
							add: 1,
							name: 'Stiff',
							ins: 'Reduce received damage',
						},
						{
							type: 'upLevelGetHp',
							default: 0.05,
							add: 0.004,
							name: 'Heal',
							ins: 'Recover HP when \nupgrade',
						},
						{
							type: 'addWeaponAttribute',
							default: 0.01,
							add: 0.005,
							name: 'EquipUp',
							ins: 'Increase equipment \nabilities',
						},
						{
							type: 'offlineGold',
							default: 4,
							add: 4,
							name: 'BonusGold',
							ins: 'Get offline gold every 10 seconds',
						},
						{
							type: 'workmateBuff',
							default: 0.5,
							add: 0.5,
							name: 'GuardUp',
							ins: 'Increase guard \nabilities',
						},
					]),
					(b.enemyConf = {
						0: {
							atk: 10,
							hp: 200,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							atkRange: 9,
							atkDiff: 1.6,
							scale: 1.3,
							spine: 'spine/1guai',
							hitWall: !1,
							dirData: [0],
							bulletIcon: 'weapon/1guai_zidan',
						},
						1: {
							atk: 100,
							hp: 300,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							atkRange: 9,
							atkDiff: 1.6,
							scale: 1.3,
							spine: 'spine/1guai',
							hitWall: !1,
							dirData: [0],
							bulletIcon: 'weapon/1guai_zidan',
						},
						2: {
							atk: 60,
							hp: 600,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							atkRange: 9,
							atkDiff: 1.6,
							scale: 1.6,
							spine: 'spine/1guai',
							hitWall: !1,
							dirData: [0],
							bulletIcon: 'weapon/1guai_zidan',
						},
						3: {
							atk: 100,
							hp: 500,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							atkRange: 9,
							atkDiff: 1.6,
							scale: 1.8,
							spine: 'spine/1guai',
							hitWall: !1,
							dirData: [0],
							bulletIcon: 'weapon/1guai_zidan',
						},
						4: {
							atk: 120,
							hp: 600,
							spe: 0.3,
							moveType: 'move',
							bulletType: 'routi',
							hitWall: !0,
							scale: 2,
							spine: 'spine/2guai',
							atkRange: 0,
							atkDiff: 1,
						},
						5: {
							atk: 100,
							hp: 800,
							spe: 0.25,
							moveType: 'move',
							bulletType: 'routi',
							hitWall: !0,
							scale: 2,
							spine: 'spine/6guai',
							atkRange: 0,
							atkDiff: 1,
						},
						6: {
							atk: 100,
							hp: 1e3,
							spe: 0.2,
							moveType: 'move',
							bulletType: 'routi',
							hitWall: !0,
							scale: 2,
							spine: 'spine/17guai',
							atkRange: 0,
							atkDiff: 1,
						},
						7: {
							atk: 100,
							hp: 800,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							scale: 1.2,
							spine: 'spine/3guai',
							dirData: [0],
							bulletIcon: 'weapon/3guai_zidan',
						},
						8: {
							atk: 100,
							hp: 400,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 0.75,
							scale: 1.5,
							spine: 'spine/3guai',
							dirData: [45, 0, -45],
							bulletIcon: 'weapon/3guai_zidan',
						},
						9: {
							atk: 100,
							hp: 400,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							scale: 2,
							spine: 'spine/3guai',
							dirData: [30, 0, -30],
							bulletIcon: 'weapon/3guai_zidan',
						},
						10: {
							atk: 200,
							hp: 500,
							spe: 1,
							moveType: 'move',
							bulletType: 'laser',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 0.9,
							scale: 1.25,
							spine: 'spine/5guai',
							dirData: [0],
							bulletIcon: 'weapon/5guai_zidan',
						},
						11: {
							atk: 100,
							hp: 1e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'laser',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							scale: 1.5,
							spine: 'spine/5guai',
							dirData: [0],
							bulletIcon: 'weapon/5guai_zidan',
						},
						12: {
							atk: 150,
							hp: 750,
							spe: 1,
							moveType: 'move',
							bulletType: 'laser',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.2,
							scale: 2,
							spine: 'spine/5guai',
							dirData: [0],
							bulletIcon: 'weapon/5guai_zidan',
						},
						13: {
							atk: 100,
							hp: 1e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !0,
							atkRange: 9,
							atkDiff: 1,
							scale: 1.5,
							spine: 'spine/6guai',
							dirData: [0],
						},
						14: {
							atk: 150,
							hp: 1e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !0,
							atkRange: 9,
							atkDiff: 0.8,
							scale: 1.8,
							spine: 'spine/6guai',
							dirData: [45, 0, -45],
						},
						15: {
							atk: 120,
							hp: 1e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !0,
							atkRange: 9,
							atkDiff: 1,
							scale: 2.2,
							spine: 'spine/6guai',
							dirData: [30, 0, -30],
						},
						16: {
							atk: 120,
							hp: 1e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'magic',
							magicNum: 1,
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							scale: 1.5,
							spine: 'spine/17guai',
						},
						17: {
							atk: 100,
							hp: 1e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'magic',
							magicNum: 2,
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							scale: 1.8,
							spine: 'spine/17guai',
						},
						18: {
							atk: 120,
							hp: 500,
							spe: 1,
							moveType: 'move',
							bulletType: 'magic',
							magicNum: 3,
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							scale: 2.1,
							spine: 'spine/17guai',
						},
						99: {
							moveType: 'move',
							bulletType: 'earthQuake',
							hitWall: !1,
							atkRange: 4,
							atkDiff: 1,
							target: 'player',
							earthQuakeNum: 1,
						},
						100: {
							atk: 200,
							hp: 2e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							dirData: [0],
							isBoss: !0,
							scale: 2,
							spine: 'spine/1boss',
						},
						101: {
							atk: 200,
							hp: 4e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							dirData: [30, 0, -30],
							isBoss: !0,
							scale: 2,
							spine: 'spine/1boss',
						},
						102: {
							atk: 250,
							hp: 4e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							dirData: [45, 0, -45],
							isBoss: !0,
							scale: 2,
							spine: 'spine/3guai',
						},
						103: {
							atk: 250,
							hp: 4e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.25,
							dirData: [15, 0, -15],
							isBoss: !0,
							scale: 2,
							spine: 'spine/3guai',
						},
						104: {
							atk: 300,
							hp: 2e3,
							spe: 0.2,
							moveType: 'move',
							bulletType: 'routi',
							hitWall: !1,
							atkRange: 0,
							atkDiff: 1,
							isBoss: !1,
							splitNum: 2,
							splitHp: 20,
							scale: 2,
							spine: 'spine/2boss',
						},
						105: {
							atk: 300,
							hp: 3e3,
							spe: 0.2,
							moveType: 'move',
							bulletType: 'routi',
							hitWall: !1,
							atkRange: 0,
							atkDiff: 1,
							isBoss: !1,
							splitNum: 3,
							splitHp: 20,
							scale: 2.5,
							spine: 'spine/6guai',
						},
						106: {
							atk: 350,
							hp: 3e3,
							spe: 0.2,
							moveType: 'move',
							bulletType: 'routi',
							hitWall: !1,
							atkRange: 0,
							atkDiff: 1,
							isBoss: !1,
							splitNum: 3,
							splitHp: 20,
							scale: 2.5,
							spine: 'spine/17guai',
						},
						107: {
							atk: 400,
							hp: 7e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'magic',
							magicNum: 5,
							hitWall: !1,
							atkRange: 7,
							atkDiff: 2,
							isBoss: !0,
							scale: 1.6,
							spine: 'spine/3boss',
						},
						108: {
							atk: 400,
							hp: 7e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'magic',
							magicNum: 6,
							hitWall: !1,
							atkRange: 7,
							atkDiff: 2,
							isBoss: !0,
							scale: 1.6,
							spine: 'spine/3boss',
						},
						109: {
							atk: 400,
							hp: 7e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'magic',
							magicNum: 7,
							hitWall: !1,
							atkRange: 7,
							atkDiff: 2,
							isBoss: !0,
							scale: 1.6,
							spine: 'spine/3boss',
						},
						110: {
							atk: 500,
							hp: 1e4,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.25,
							dirData: [30, 15, 0, -15, -30],
							isBoss: !0,
							scale: 1.5,
							spine: 'spine/8boss',
						},
						111: {
							atk: 500,
							hp: 1e4,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.5,
							dirData: [30, 20, 10, 0, -10, -20, -30],
							isBoss: !0,
							scale: 1.5,
							spine: 'spine/8boss',
						},
						112: {
							atk: 500,
							hp: 1e4,
							spe: 1,
							moveType: 'move',
							bulletType: 'magic',
							magicNum: 7,
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.5,
							isBoss: !0,
							scale: 1.5,
							spine: 'spine/8boss',
						},
						113: {
							atk: 500,
							hp: 1e4,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.25,
							dirData: [30, 15, 0, -15, -30],
							isBoss: !0,
							scale: 2,
							spine: 'spine/1boss',
						},
						114: {
							atk: 500,
							hp: 1e4,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.5,
							dirData: [30, 20, 10, 0, -10, -20, -30],
							isBoss: !0,
							scale: 2,
							spine: 'spine/3guai',
						},
						115: {
							atk: 500,
							hp: 1e4,
							spe: 1,
							moveType: 'move',
							bulletType: 'magic',
							magicNum: 7,
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.5,
							isBoss: !0,
							scale: 2,
							spine: 'spine/3boss',
						},
						116: {
							atk: 500,
							hp: 1e4,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.25,
							dirData: [30, 20, 10, 0, -10, -20, -30],
							isBoss: !0,
							scale: 2,
							spine: 'spine/6guai',
						},
						117: {
							atk: 500,
							hp: 1e4,
							spe: 1,
							moveType: 'move',
							bulletType: 'bullet',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.5,
							dirData: [30, 20, 10, 0, -10, -20, -30],
							isBoss: !0,
							scale: 2,
							spine: 'spine/17guai',
						},
						118: {
							atk: 500,
							hp: 1e4,
							spe: 1,
							moveType: 'move',
							bulletType: 'magic',
							magicNum: 7,
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.5,
							isBoss: !0,
							scale: 2,
							spine: 'spine/5guai',
						},
						199: {
							atk: 100,
							hp: 2500,
							spe: 0.2,
							moveType: 'move',
							bulletType: 'earthQuake',
							magicNum: 3,
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1,
							isBoss: !0,
							target: 'my',
							earthQuakeNum: 6,
							callId: 2,
							callTime: 10,
						},
						201: {
							atk: 100,
							hp: 3e3,
							spe: 1,
							moveType: 'move',
							bulletType: 'fire',
							hitWall: !1,
							atkRange: 9,
							atkDiff: 1.25,
							dirData: [45, 0, -45],
							isBoss: !0,
							scale: 1.6,
							spine: 'spine/1boss',
						},
					}),
					(b.bossDanmuAtkConf = {
						1: {
							dirMax: 180,
							sheChangeDir: 15,
							sheChangeNum: 1,
							createNum: 1,
							bulletNum: 1,
							sheNum: 30,
							speedDiff: 0,
							isShan: !1,
							target: 'player',
							dirDiff: 0,
							atkDiff: 200,
						},
						2: {
							dirMax: 60,
							sheChangeDir: 0,
							sheChangeNum: 1,
							createNum: 1,
							bulletNum: 5,
							sheNum: 5,
							speedDiff: 0,
							isShan: !1,
							target: 'player',
							dirDiff: 30,
							atkDiff: 200,
						},
						3: {
							dirMax: 360,
							sheChangeDir: 0,
							sheChangeNum: 1,
							createNum: 1,
							bulletNum: 11,
							sheNum: 5,
							speedDiff: 0,
							isShan: !1,
							target: 'my',
							dirDiff: 0,
							atkDiff: 250,
						},
						4: {
							dirMax: 360,
							sheChangeDir: 0,
							sheChangeNum: 1,
							createNum: 1,
							bulletNum: 4,
							sheNum: 1,
							speedDiff: 0,
							isShan: !0,
							shanId: 1,
							target: 'my',
							dirDiff: 0,
							atkDiff: 250,
						},
						5: {
							dirMax: 60,
							sheChangeDir: 20,
							sheChangeNum: 2,
							createNum: 1,
							bulletNum: 1,
							sheNum: 30,
							speedDiff: 0,
							isShan: !0,
							target: 'player',
							dirDiff: 0,
							atkDiff: 200,
						},
					}),
					(b.shanDanmuConf = {
						1: { num: [1, 2, 3], dir: 30, speDiff: 1 },
					}),
					(b.insConf = {
						weapon: 'Weapon',
						clothes: 'Costume',
						ring: 'Ring',
						necklace: 'Necklace',
						scroll: 'Scroll',
						weaponScroll: 'Weapon scroll',
						clothesScroll: 'Costume scroll',
						ringScroll: 'Ring scroll',
						necklaceScroll: 'Necklace scroll',
						atk: 'Attack',
						hp: 'HP',
						spe: 'Move speed',
						atkPercentage: 'Attack bonus',
						hpPercentage: 'HP bonus',
						spePercentage: 'Speed bonus',
						extraAtkPercentage: 'Extra damage bonus',
						damageReduction: 'Reduce received damage',
						damageReductionPer: 'Damage Reduction',
						crit: 'Crit',
						critDamage: 'Crit Damage',
						hide: 'Evasion',
						atkSpe: 'Attack speed',
						atkSpePercentage: 'Attack speed bonus',
						armor: 'Armor',
						armorPercentage: 'Armor bonus',
						enemyDieGetHp: 'Elimination HP feedback',
						enemyDieGetHpPercentage: 'Elimination feedback chance',
						upLevelGetHp: 'Upgrade recover',
						addWeaponAttribute: 'Equipment bonus',
						offlineGold: 'Offline income',
						hpShield: 'Shield',
						forwardArrow: 'Front arrow',
						diagonalArrow: 'Slant arrow',
						sidedArrow: 'Side arrow',
						backwardArrow: 'Back arrow',
						expAdd: 'Exp Add',
						pierceWall: 'Penetrate',
						levitate: 'Float',
						skill: 'Extra skill',
					}),
					(v.exports = b),
					cc._RF.pop()
			},
			{},
		],
		DailyGold: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '59127XmDyxPh4yV7y6stbjR', 'DailyGold')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						cc.myself.scaleToShow(this.node),
							(this.normalContent = this.node
								.getChildByName('di')
								.getChildByName('content')
								.getChildByName('health_1')),
							(this.sanContent = this.node
								.getChildByName('di')
								.getChildByName('content')
								.getChildByName('health_2')),
							this.resetUI()
					},
					resetUI: function () {
						var f =
							_.tfConf[7].default +
							(cc.myself.tfList[7] - 1) * _.tfConf[7].add
						if (
							cc.myself.getTime() - cc.myself.offlineMoneyTime >
							144e5
						) {
							var v = Math.floor((144e5 * f) / 10 / 1e3)
							;(this.normalContent
								.getChildByName('sum_1')
								.getComponent(cc.Label).string = v),
								(this.sanContent
									.getChildByName('sum_2')
									.getComponent(cc.Label).string = 3 * v)
						} else {
							var C = Math.floor(
								f *
									((cc.myself.getTime() -
										cc.myself.offlineMoneyTime) /
										10 /
										1e3)
							)
							;(this.normalContent
								.getChildByName('sum_1')
								.getComponent(cc.Label).string = C),
								(this.sanContent
									.getChildByName('sum_2')
									.getComponent(cc.Label).string = 3 * C)
						}
					},
					normalGet: function () {
						var f,
							v =
								_.tfConf[7].default +
								(cc.myself.tfList[7] - 1) * _.tfConf[7].add
						switch (
							((f =
								cc.myself.getTime() -
									cc.myself.offlineMoneyTime >
								144e5
									? Math.floor((144e5 * v) / 10 / 1e3)
									: Math.floor(
											v *
												((cc.myself.getTime() -
													cc.myself
														.offlineMoneyTime) /
													10 /
													1e3)
									  )),
							(cc.myself.offlineMoneyTime = cc.myself.getTime()),
							cc.myself.setLocalData(
								'offlineMoneyTime',
								cc.myself.offlineMoneyTime
							),
							(cc.myself.gold += f),
							cc.myself.setLocalData('gold', cc.myself.gold),
							cc
								.find('Canvas')
								.getComponent('Main')
								.getMoneyAction(),
							Lq.pfName)
						) {
							case 'cy':
								b.default.showScreenAd({})
						}
						this.close(), cc.myself.tips(Lq.lang('领取金币成功'))
					},
					videoGet: function () {
						var f = this
						b.default.showRewardedAd(function () {
							var v =
									_.tfConf[7].default +
									(cc.myself.tfList[7] - 1) * _.tfConf[7].add,
								C = 0
							;(C =
								cc.myself.getTime() -
									cc.myself.offlineMoneyTime >
								144e5
									? (144e5 * v) / 10 / 1e3
									: v *
									  ((cc.myself.getTime() -
											cc.myself.offlineMoneyTime) /
											10 /
											1e3)),
								(C = Math.floor(3 * C)),
								(cc.myself.offlineMoneyTime = cc.myself.getTime()),
								cc.myself.setLocalData(
									'offlineMoneyTime',
									cc.myself.offlineMoneyTime
								),
								(cc.myself.gold += C),
								cc.myself.setLocalData('gold', cc.myself.gold),
								cc
									.find('Canvas')
									.getComponent('Main')
									.getMoneyAction(),
								f.close(),
								cc.myself.tips(Lq.lang('领取金币成功'))
						})
					},
					share: function () {
						cc.myself.wxShare()
					},
					close: function () {
						this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		Discription2: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '8aa2645+9xCL5I78nVvglRo', 'Discription2'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {},
						init: function (f) {
							;(this.data = f),
								(this.node
									.getChildByName('label_mid')
									.getComponent(cc.Label).string = f.str),
								(this.node
									.getChildByName('label_top')
									.getComponent(cc.Label).string = f.name)
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		Discription: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '7f69cK7paBHf4ovNXJqQuzR', 'Discription'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {
							this.data.fan
								? (this.node.x -=
										this.node.getChildByName('icon').width /
											2 -
										18)
								: (this.node.x +=
										this.node.getChildByName('icon').width /
											2 -
										18)
						},
						init: function (f) {
							;(this.data = f),
								this.node.getChildByName('label').on(
									cc.Node.EventType.SIZE_CHANGED,
									function () {
										this.node.getChildByName('icon').width =
											this.node.getChildByName('label')
												.width + 10
									}.bind(this)
								),
								(this.node
									.getChildByName('label')
									.getComponent(cc.Label).string = f.str),
								f.fan &&
									(this.node.getChildByName(
										'icon'
									).scaleX = -1)
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		EarthQuakeAtk: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '1b1ceqHjzhNl4oLoGU16R1S', 'EarthQuakeAtk'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {
							;(this.time = 0), (this.isOver = !1)
						},
						init: function (f) {
							if (
								((this.mnode = f.node),
								(this.tnode = f.tnode),
								(this.atkPower = f.atkPower),
								f.dp)
							)
								this.moveLine(f.dp)
							else {
								var v = cc
									.v2(this.tnode.x, this.tnode.y)
									.sub(cc.v2(this.mnode.x, this.mnode.y))
								this.moveLine(v)
							}
						},
						moveLine: function (f) {
							var v = (180 * Math.atan2(f.y, f.x)) / Math.PI
							;(v = 360 - v + 90), (this.node.angle = v)
						},
						onCollisionStay: function (f, v) {
							0 == f.tag &&
								f.node
									.getComponent('Player')
									.hitThorn(this.atkPower)
						},
						beLong: function () {
							;(this.node.getChildByName('icon').height += 10),
								(this.node.getComponent(
									cc.BoxCollider
								).size = cc.size(
									this.node.getChildByName('icon').width,
									this.node.getChildByName('icon').height
								)),
								(this.node.getComponent(
									cc.BoxCollider
								).offset.y =
									this.node.getChildByName('icon').height / 2)
						},
						update: function (f) {
							cc
								.find('Canvas')
								.getComponent('Game')
								.getGameIsOver() ||
								cc
									.find('Canvas')
									.getComponent('Game')
									.getGamePause() ||
								((this.time += f),
								this.time >= 3
									? this.isOver || this.node.destroy()
									: this.beLong())
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		EnemyAtk: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'c9584pmEURPm4oHicZfRJMA', 'EnemyAtk')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					onEnable: function () {
						this.isOver = !1
					},
					start: function () {},
					init: function (f) {
						this.speAdd = f.speAdd || 0
						var v = Math.atan2(f.dp.y, f.dp.x),
							C = (180 * v) / Math.PI
						;(C = 360 - C + 90),
							(C %= 360),
							(this.node.getChildByName('icon').angle = C),
							(this.moveX =
								Math.cos(v) *
								(b.gameSetting.danmuMoveSpeed + this.speAdd)),
							(this.moveY =
								Math.sin(v) *
								(b.gameSetting.danmuMoveSpeed + this.speAdd)),
							(this.atkPower = f.atkPower || 100),
							f.icon &&
								cc.myself.asyncShowImage(
									this.node
										.getChildByName('icon')
										.getComponent(cc.Sprite),
									'enemyAtkUi/' + f.icon
								),
							(this.node.getComponent(
								cc.BoxCollider
							).size = cc.size(
								this.node.getChildByName('icon').width,
								this.node.getChildByName('icon').height
							)),
							(this.hitWall = f.hitWall),
							(this.isOver = !1)
					},
					getAtkPower: function () {
						return this.atkPower
					},
					onCollisionEnter: function (f, v) {
						if (f.tag > 1e3)
							if (f.tag > 1020)
								(this.isOver = !0),
									cc
										.find('Canvas')
										.getComponent('Game')
										.putInEnemyAtkPool(this.node)
							else {
								if (!this.hitWall) return
								;(this.isOver = !0),
									cc
										.find('Canvas')
										.getComponent('Game')
										.putInEnemyAtkPool(this.node)
							}
					},
					update: function (f) {
						cc
							.find('Canvas')
							.getComponent('Game')
							.getGameIsOver() ||
							cc
								.find('Canvas')
								.getComponent('Game')
								.getGamePause() ||
							this.isOver ||
							((this.node.x += this.moveX),
							(this.node.y += this.moveY),
							(this.node.x < -cc.winSize.width ||
								this.node.x > cc.winSize.width) &&
								((this.isOver = !0),
								cc
									.find('Canvas')
									.getComponent('Game')
									.putInEnemyAtkPool(this.node)))
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		Enemy_Guai: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '87622im5U1EU7GF+nCx0pZb', 'Enemy_Guai')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						;(this.gameComponent = cc
							.find('Canvas')
							.getComponent('Game')),
							(this.isAtking = !1)
					},
					init: function (f) {
						;(this.id = f.id), (this.conf = b.enemyConf[f.id])
						var v = b.gameSetting.enemyAddAttribute,
							C = b.gameSetting.mapAddAttribute,
							_ = 0
						if (
							cc.myself.bigMapNum >
							C.enemyAtk.scene[C.enemyAtk.scene.length - 1]
						) {
							for (var w = 0; w < C.enemyAtk.scene.length; w++)
								_ += C.enemyAtk.num[w]
							for (
								var N = 0;
								N <
								cc.myself.bigMapNum -
									C.enemyAtk.scene[
										C.enemyAtk.scene.length - 1
									];
								N++
							)
								_ += C.enemyAtk.num[C.enemyAtk.num.length - 1]
						} else
							for (var k = 0; k < C.enemyAtk.scene.length; k++)
								if (
									cc.myself.bigMapNum <= C.enemyAtk.scene[k]
								) {
									if (0 == k) _ = C.enemyAtk.num[0]
									else
										for (var L = 0; L < k + 1; L++)
											_ += C.enemyAtk.num[L]
									break
								}
						if (
							((this.atkPower =
								this.conf.atk *
								(1 + Math.floor(f.floorNum / v.floor) * v.atk) *
								(1 + _)),
							(this.atkPower = Math.floor(this.atkPower)),
							(this.routiPower = this.atkPower),
							this.conf.isBoss)
						) {
							this.node.addComponent('BossDanmuAtk')
							var B = Math.floor(5 * Math.random()) + 1
							this.node
								.getComponent('BossDanmuAtk')
								.init({ id: B, atkPower: this.atkPower })
						}
						this.atkNum = 0
					},
					atk: function () {
						var f = this,
							v = this
						if (!this.isAtking)
							if (
								((this.isAtking = !0),
								this.atkNum++,
								this.conf.isBoss && this.atkNum % 2 == 0)
							)
								this.node.getComponent('BossDanmuAtk').atk()
							else if ('bullet' == this.conf.bulletType)
								this.gameComponent.createEnemyAtk(
									this.node,
									this.conf,
									this.atkPower
								),
									this.atkOver()
							else if ('laser' == this.conf.bulletType)
								cc.loader.loadRes(
									'pre/enemy/laserAtk',
									cc.Prefab,
									function (f, v) {
										var C = cc.instantiate(v)
										C.getComponent('LaserAtk').init({
											tnode: this.gameComponent.getPlayer(),
											node: this.node,
											atkPower: this.atkPower,
											id: this.id,
										}),
											(C.x = this.node.x),
											(C.y = this.node.y),
											cc
												.find('Canvas')
												.getComponent('Game')
												.getBulletList()
												.addChild(C)
									}.bind(this)
								),
									setTimeout(function () {
										v.atkOver()
									}, 2e3)
							else if ('magic' == this.conf.bulletType)
								var C = 0,
									b = v.conf,
									_ = setInterval(function () {
										if (C >= b.magicNum)
											return v.atkOver(), clearInterval(_)
										C++,
											cc.loader.loadRes(
												'pre/enemy/magicAtk',
												cc.Prefab,
												function (f, v) {
													var C = cc.instantiate(v)
													C.getComponent(
														'magicAtk'
													).init({
														atkPower: this.atkPower,
														id: this.id,
													})
													var b = cc
														.find('Canvas')
														.getComponent('Game')
														.getPlayer()
													;(C.x = b.x),
														(C.y = b.y),
														cc
															.find('Canvas')
															.getComponent(
																'Game'
															)
															.getBulletList()
															.addChild(C)
												}.bind(f)
											)
									}, 250)
							else if ('earthQuake' == this.conf.bulletType)
								!(function () {
									var C
									'my' == f.conf.target &&
										(C = cc
											.v2(v.node.x, v.node.y - 300)
											.sub(cc.v2(v.node.x, v.node.y)))
									for (
										var b = 360 / f.conf.earthQuakeNum,
											a = function (v) {
												cc.loader.loadRes(
													'pre/enemy/earthQuakeAtk',
													cc.Prefab,
													function (f, _) {
														var w
														C &&
															(w = C.rotate(
																(Math.PI /
																	180) *
																	v *
																	b
															))
														var N = cc.instantiate(
															_
														)
														N.getComponent(
															'EarthQuakeAtk'
														).init({
															tnode: this.gameComponent.getPlayer(),
															node: this.node,
															atkPower: this
																.atkPower,
															dp: w,
														}),
															(N.x = this.node.x),
															(N.y = this.node.y),
															cc
																.find('Canvas')
																.getComponent(
																	'Game'
																)
																.getBulletList()
																.addChild(N)
													}.bind(f)
												)
											},
											_ = 0;
										_ < f.conf.earthQuakeNum;
										_++
									)
										a(_)
									setTimeout(function () {
										v.atkOver()
									}, 2e3)
								})()
							else if ('routi' == this.conf.bulletType)
								this.node
									.getComponent('Enemy_Normal')
									.hitByRouti(),
									this.atkOver()
							else if ('fire' == this.conf.bulletType)
								for (
									var o = function (v) {
											cc.loader.loadRes(
												'pre/enemy/fireAtk',
												cc.Prefab,
												function (f, C) {
													var b = cc.instantiate(C)
													b
														.getComponent('FireAtk')
														.init({
															tnode: this.gameComponent.getPlayer(),
															node: this.node,
															atkPower: Math.floor(
																0.25 *
																	this
																		.atkPower
															),
															dir: this.conf
																.dirData[v],
														}),
														(b.x = this.node.x),
														(b.y = this.node.y),
														cc
															.find('Canvas')
															.getComponent(
																'Game'
															)
															.getBulletList()
															.addChild(b),
														this.atkOver()
												}.bind(f)
											)
										},
										w = 0;
									w < this.conf.dirData.length;
									w++
								)
									o(w)
					},
					atkOver: function () {
						this.node &&
							((this.isAtking = !1),
							this.node.getComponent('Enemy_Normal') &&
								this.node
									.getComponent('Enemy_Normal')
									.atkOver())
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		Enemy_Normal: [
			function (f, v, C) {
				'use strict'
				function n(f) {
					return (n =
						'function' == typeof Symbol &&
						'symbol' == typeof Symbol.iterator
							? function (f) {
									return typeof f
							  }
							: function (f) {
									return f &&
										'function' == typeof Symbol &&
										f.constructor === Symbol &&
										f !== Symbol.prototype
										? 'symbol'
										: typeof f
							  })(f)
				}
				cc._RF.push(v, 'afd11ZvpBlODbbBFNc+cHhZ', 'Enemy_Normal')
				var b = f('Config'),
					_ = f('AStar')
				cc.Class({
					extends: cc.Component,
					properties: {},
					init: function (f) {
						;(this.gameComponent = cc
							.find('Canvas')
							.getComponent('Game')),
							(this.enemyId = f.enemyId),
							(this.conf = b.enemyConf[this.enemyId]),
							(this.cubeX = f.pos.x),
							(this.cubeY = f.pos.y)
						var v = cc
							.find('Canvas')
							.getComponent('Game')
							.getPosByMapPos(this.cubeX + ',' + this.cubeY)
						;(this.node.x = v.x), (this.node.y = v.y)
						var C = b.gameSetting.enemyAddAttribute,
							_ = b.gameSetting.mapAddAttribute,
							w = 0
						if (
							cc.myself.bigMapNum >
							_.enemyHp.scene[_.enemyHp.scene.length - 1]
						) {
							for (var N = 0; N < _.enemyHp.scene.length; N++)
								w += _.enemyHp.num[N]
							for (
								var k = 0;
								k <
								cc.myself.bigMapNum -
									_.enemyHp.scene[_.enemyHp.scene.length - 1];
								k++
							)
								w += _.enemyHp.num[_.enemyHp.num.length - 1]
						} else
							for (var L = 0; L < _.enemyHp.scene.length; L++)
								if (cc.myself.bigMapNum <= _.enemyHp.scene[L]) {
									if (0 == L) w = _.enemyHp.num[0]
									else
										for (var B = 0; B <= L; B++)
											w += _.enemyHp.num[B]
									break
								}
						;(this.maxHp =
							this.conf.hp *
							(1 + Math.floor(f.floorNum / C.floor) * C.hp) *
							(1 + w)),
							this.gameComponent.isGuide &&
								(this.maxHp = this.conf.hp),
							(this.maxHp = Math.floor(this.maxHp)),
							(this.hp = this.maxHp)
						var S = 0
						if (
							cc.myself.bigMapNum >
							_.enemyAtk.scene[_.enemyAtk.scene.length - 1]
						) {
							for (var M = 0; M < _.enemyAtk.scene.length; M++)
								S += _.enemyAtk.num[M]
							for (
								var I = 0;
								I <
								cc.myself.bigMapNum -
									_.enemyAtk.scene[
										_.enemyAtk.scene.length - 1
									];
								I++
							)
								S += _.enemyAtk.num[_.enemyAtk.num.length - 1]
						} else
							for (var x = 0; x < _.enemyAtk.scene.length; x++)
								if (
									cc.myself.bigMapNum <= _.enemyAtk.scene[x]
								) {
									if (0 == x) S = _.enemyAtk.num[0]
									else
										for (var q = 0; q <= x; q++)
											S += _.enemyAtk.num[q]
									break
								}
						if (
							((this.atkPower =
								this.conf.atk *
								(1 + Math.floor(f.floorNum / C.floor) * C.atk) *
								(1 + S)),
							this.gameComponent.getIsGuide() &&
								(this.atkPower = this.conf.atk),
							(this.atkPower = Math.floor(this.atkPower)),
							(this.routiPower = this.atkPower),
							(this.atkRange = this.conf.atkRange),
							(this.atkDiff = this.conf.atkDiff),
							(this.splitNum = this.conf.splitNum),
							(this.bulletHitWall = this.conf.hitWall),
							(this.yijingSplitNum = f.yijingSplitNum || 0),
							this.resetHpUI(),
							this.conf.spine &&
								cc.loader.loadRes(
									this.conf.spine,
									sp.SkeletonData,
									function (f, v) {
										;(this.node
											.getChildByName('spine')
											.getComponent(
												sp.Skeleton
											).skeletonData = v),
											this.node
												.getChildByName('spine')
												.getComponent(sp.Skeleton)
												.setAnimation(
													1,
													'zheng_stand',
													!0
												)
									}.bind(this)
								),
							this.conf.scale &&
								((this.node.scale = this.conf.scale),
								(this.node.getChildByName('hp').scale =
									1 / this.conf.scale)),
							(this.moveNeed = 1),
							(this.isSplit = !1),
							b.gameSetting.enemyBoxCollider[this.conf.spine])
						) {
							var P =
								b.gameSetting.enemyBoxCollider[this.conf.spine]
							;(this.node.getComponent(cc.BoxCollider).offset.x =
								P.ox),
								(this.node.getComponent(
									cc.BoxCollider
								).offset.y = P.oy),
								(this.node.getComponent(
									cc.BoxCollider
								).size = cc.size(P.width, P.height))
						}
					},
					onEnable: function () {
						;(this.atkTime = 0),
							(this.moveTime = 0),
							(this.isMoving = !1),
							(this.isAtking = !1),
							(this.movePos = []),
							(this.nowPlayerPos = { x: 0, y: 0 }),
							(this.imgType = ''),
							(this.iceTime = 0),
							(this.fireTime = 0),
							(this.checkFireTime = 0),
							(this.poisonTime = 0),
							(this.checkPoisonTime = 0),
							(this.callTime = 0),
							(this.isDie = !1)
					},
					start: function () {
						var f = this
						;(this._aStar = this.getComponent(_)),
							(this.gameComponent = cc
								.find('Canvas')
								.getComponent('Game')),
							(this.player = this.gameComponent.getPlayer()),
							this.node
								.getChildByName('spine')
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									var b = (v.animation
										? v.animation.name
										: ''
									).split('_')
									;('gongji' === b[1] ||
										('stand' == b[1] &&
											'routi' == f.conf.bulletType)) &&
										f.node.getComponent('Enemy_Guai').atk()
								}),
							(this.shoujiSpine = this.node.getChildByName(
								'shouji'
							)),
							this.shoujiSpine
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									v.animation && v.animation.name,
										(f.shoujiSpine.active = !1)
								})
					},
					resetHpUI: function () {
						this.hp < 0 && (this.hp = 0),
							(this.node
								.getChildByName('hp')
								.getChildByName('hp_di')
								.getChildByName('hp_red')
								.getComponent(cc.Sprite).fillRange =
								this.hp / this.maxHp)
					},
					getHpPer: function () {
						return this.hp / this.maxHp
					},
					getMyType1: function (f) {
						var v = (180 * Math.atan2(f.y, f.x)) / Math.PI
						v = 360 - v + 90
						var C,
							b = 0
						switch (
							((v %= 360) <= 45 || v > 315
								? (b = 0)
								: v > 45 && v <= 135
								? (b = 1)
								: v > 135 && v <= 225
								? (b = 2)
								: v > 225 && v <= 315 && (b = 3),
							b)
						) {
							case 0:
								C = 'bei'
								break
							case 1:
								C = 'you'
								break
							case 2:
								C = 'zheng'
								break
							case 3:
								C = 'zuo'
						}
						return C
					},
					move: function (f) {
						var v = this
						if (
							!this.player.getComponent('Player').isHide() &&
							!this.checkAtkRange(f) &&
							!this.isTui &&
							!this.isDie &&
							((this.moveTime += f),
							(this.atkTime = 0),
							this.moveTime > this.moveNeed)
						) {
							var C = (function () {
								v.isTui || v.node.stopAllActions(),
									(v.moveTime = 0)
								var C = v.gameComponent.getPlayerMapPos()
								;(C = C.split(',')),
									parseInt(C[0]),
									v.cubeX,
									parseInt(C[1]),
									v.cubeY,
									(parseInt(C[0]) == v.nowPlayerPos.x &&
										parseInt(C[1]) == v.nowPlayerPos.y) ||
										((v.nowPlayerPos.x = parseInt(C[0])),
										(v.nowPlayerPos.y = parseInt(C[1])),
										(v.movePos = []))
								var b = cc.v2(v.cubeX, v.cubeY),
									_ = cc.v2(parseInt(C[0]), parseInt(C[1])),
									w = v._aStar.moveToward(b, _)
								if (w.length <= 1)
									return (
										cc.log('cannot find path'),
										{ v: void 0 }
									)
								v.atkDiff = 100
								var N = [],
									k = v.conf.spe
								v.iceTime > 0 && (k *= 2)
								for (
									var c = function (C) {
											var b = v.gameComponent.getPosByMapPos(
													w[C].x + ',' + w[C].y
												),
												_ = 10 * Math.random() - 5,
												L = 10 * Math.random() - 5
											;(b.x += _), (b.y += L)
											var B = cc.callFunc(
												function () {
													if (!this.isAtking) {
														var f = cc
																.v2(b.x, b.y)
																.sub(
																	cc.v2(
																		this
																			.node
																			.x,
																		this
																			.node
																			.y
																	)
																),
															v = this.getMyType1(
																f
															)
														this.imgType !=
															v + '_zou' &&
															((this.imgType =
																v + '_zou'),
															this.node
																.getChildByName(
																	'spine'
																)
																.getComponent(
																	'sp.Skeleton'
																)
																.setAnimation(
																	1,
																	v + '_zou',
																	!0
																))
													}
												}.bind(v)
											)
											N.push(B), N.push(cc.moveTo(k, b))
											var S = cc.callFunc(
												function () {
													;(this.cubeX = w[C].x),
														(this.cubeY = w[C].y),
														this.checkAtkRange(f)
												}.bind(v)
											)
											N.push(S)
										},
										L = 1;
									L < w.length;
									++L
								)
									c(L)
								v.node.runAction(cc.sequence(N)),
									(v.moveNeed = 5 * v.conf.spe)
							})()
							if ('object' === n(C)) return C.v
						}
					},
					checkMove: function (f, v) {
						return !(
							!this.checkMoveTypeCanMove(
								this.getMapTypeByPos(f, v)
							) || this.checkPosisMove(f, v)
						)
					},
					checkMoveTypeCanMove: function (f) {
						return 0 == f
					},
					checkPosisMove: function (f, v) {
						return -1 != this.movePos.indexOf(f + ',' + v)
					},
					getMapTypeByPos: function (f, v) {
						return this.gameComponent.getMapTypeByMapPos(f, v)
					},
					moveAction: function (f, v) {
						this.isMoving = !0
						var C = this.gameComponent.getPosByMapPos(f + ',' + v)
						this.node.runAction(
							cc.sequence(
								cc.moveTo(0.2, cc.v2(C.x, C.y)),
								cc.callFunc(
									function () {
										;(this.isMoving = !1),
											(this.cubeX = f),
											(this.cubeY = v),
											this.movePos.push(f + ',' + v)
									}.bind(this)
								)
							)
						)
					},
					checkAtkRange: function (f) {
						if (this.isAtking) return !0
						if (this.isDie) return !0
						var v = this.gameComponent.getPlayerMapPos()
						v = v.split(',')
						var C = Math.abs(parseInt(v[0]) - this.cubeX),
							b = Math.abs(parseInt(v[1]) - this.cubeY)
						return C <= this.atkRange && b <= this.atkRange
							? (this.isTui || this.node.stopAllActions(),
							  this.checkAtk(f),
							  !0)
							: void 0
					},
					checkAtk: function (f) {
						this.isAtking ||
							this.player.getComponent('Player').isHide() ||
							((this.moveTime = 0),
							(this.atkTime += f),
							this.atkTime > 1 / this.atkDiff &&
								((this.atkTime = 0), this.atk()))
					},
					atk: function () {
						this.isAtking = !0
						var f = cc
								.v2(this.player.x, this.player.y)
								.sub(cc.v2(this.node.x, this.node.y)),
							v = this.getMyType1(f)
						'routi' == this.conf.bulletType
							? this.node
									.getChildByName('spine')
									.getComponent('sp.Skeleton')
									.setAnimation(1, v + '_stand', !1)
							: this.node
									.getChildByName('spine')
									.getComponent('sp.Skeleton')
									.setAnimation(1, v + '_gongji', !1)
					},
					atkOver: function () {
						;(this.atkDiff = this.conf.atkDiff),
							(this.isAtking = !1),
							(this.moveNeed = 1)
					},
					createBullet: function () {
						this.gameComponent.createEnemyAtk(
							this.node,
							this.bulletHitWall
						)
					},
					hitByAttribute: function (f) {
						f.icyIce && (this.iceTime = 1),
							f.fire && (this.fireTime = 1),
							f.poison && (this.poisonTime = 1)
					},
					hitByDp: function (f) {
						if (!this.conf.isBoss && !this.isDie) {
							var v = (180 * Math.atan2(f.y, f.x)) / Math.PI
							v = 360 - v + 90
							var C = 0,
								b = 0
							;(v %= 360) <= 22.5 || v > 337.5
								? (b = -1)
								: v > 22.5 && v <= 67.5
								? ((C = -1), (b = -1))
								: v > 67.5 && v <= 112.5
								? (C = -1)
								: v > 112.5 && v <= 157.5
								? ((C = -1), (b = 1))
								: v > 157.5 && v <= 202.5
								? (b = 1)
								: v > 202.5 && v <= 247.5
								? ((C = 1), (b = 1))
								: v > 247.5 && v <= 292.5
								? (C = 1)
								: v > 292.5 && v <= 337.5 && ((C = 1), (b = -1))
							var _ = this.cubeX + C,
								w = this.cubeY + b
							if (
								0 == this.gameComponent.getMapTypeByMapPos(_, w)
							) {
								var N = []
								this.node.stopAllActions(),
									(this.moveNeed = 0.1)
								var k = this.gameComponent.getPosByMapPos(
									_ + ',' + w
								)
								N.push(cc.moveTo(0.1, k))
								var L = cc.callFunc(
									function () {
										;(this.cubeX = _),
											(this.cubeY = w),
											this.checkAtkRange(0),
											(this.isTui = !1)
									}.bind(this)
								)
								N.push(L),
									this.node.runAction(cc.sequence(N)),
									(this.isTui = !0)
							}
						}
					},
					hitByRouti: function () {
						if (!this.isDie) {
							var f = this.node
								.getChildByName('spine')
								.getComponent('sp.Skeleton')
								.getCurrent(1)
							if (f) {
								var v = f.animation.name.split('_'),
									C = 0,
									b = 0
								if (
									('zheng' == v[0]
										? (b = -1)
										: 'bei' == v[0]
										? (b = 1)
										: 'zuo' == v[0]
										? (C = -1)
										: 'you' == v[0] && (b = 1),
									0 != C || 0 != b)
								) {
									var _ = this.cubeX + C,
										w = this.cubeY + b
									if (
										0 ==
										this.gameComponent.getMapTypeByMapPos(
											_,
											w
										)
									) {
										var N = []
										this.node.stopAllActions(),
											(this.moveNeed = 0.1)
										var k = this.gameComponent.getPosByMapPos(
											_ + ',' + w
										)
										N.push(cc.moveTo(0.1, k))
										var L = cc.callFunc(
											function () {
												;(this.cubeX = _),
													(this.cubeY = w),
													this.checkAtkRange(0),
													(this.isTui = !1)
											}.bind(this)
										)
										N.push(L),
											this.node.runAction(cc.sequence(N)),
											(this.isTui = !0)
									}
								}
							}
						}
					},
					onCollisionEnter: function (f, v) {
						switch (f.tag) {
							case 1:
								if (this.hp <= 0) return void this.checkIsDie()
								;(this.shoujiSpine.active = !0),
									this.shoujiSpine
										.getComponent('sp.Skeleton')
										.setAnimation(1, 'shouji', !1)
								var C = this.node.getChildByName('spine')
								;(C.color = cc.color(155, 0, 0)),
									C.runAction(
										cc.sequence(
											cc.scaleTo(0.1, 0.9),
											cc.callFunc(
												function () {
													C.color = cc.color(
														255,
														255,
														255
													)
												}.bind(this)
											),
											cc.scaleTo(0.1, 1)
										)
									)
								var b = f.node.getComponent('Bullet'),
									_ = parseInt(b.getAtkPower()),
									w = b.getAtkCrit(),
									N = b.getCritDamage(),
									k = b.getDp(),
									L = null
								w &&
									Math.random() < w &&
									((_ *= N),
									(_ = parseInt(_)),
									(L = cc.color('#FF3600'))),
									(this.hp -= _),
									this.gameComponent.createHitLabel({
										str: _,
										pos: {
											x: this.node.x + 30,
											y: this.node.y + 50,
										},
										color: L,
									}),
									this.resetHpUI(),
									this.hitByDp(k),
									this.hitByAttribute(b.getBulletAttribute()),
									this.checkIsDie()
						}
					},
					checkIsDie: function () {
						if (!this.isDie) {
							if (
								(this.resetHpUI(),
								this.splitNum &&
									this.splitNum > 0 &&
									this.hp / this.maxHp <
										this.conf.splitHp / 100 &&
									!this.isSplit &&
									this.splitNum > this.yijingSplitNum)
							) {
								for (
									var f = [
											{ x: -1, y: 0 },
											{ x: 1, y: 0 },
										],
										v = 0;
									v < 2;
									v++
								)
									this.gameComponent.createEnemy(
										this.enemyId,
										this.cubeX + f[v].x,
										this.cubeY + f[v].y,
										{
											yijingSplitNum:
												this.yijingSplitNum + 1,
										}
									)
								this.isSplit = !0
							}
							if (this.hp <= 0) {
								this.isDie = !0
								var C = this.gameComponent.getFloorNum(),
									_ = this.node.position
								if (this.conf.splitNum) {
									if (0 == this.yijingSplitNum) {
										this.gameComponent.downGold(
											this.node.position
										)
										var w = { type: 'scroll', pos: _ },
											N = Math.floor(
												8 * Math.random() + 1
											),
											k = [
												'weapon',
												'clothes',
												'ring',
												'necklace',
											],
											L =
												k[
													Math.floor(
														Math.random() * k.length
													)
												]
										;(w.num = N),
											(w.type2 = L),
											this.gameComponent.downDiamond(w)
										var B = b.gameSetting.bossDownWeight,
											S = []
										for (var M in B)
											if (B[M] > 0)
												for (var I = 0; I < B[M]; I++)
													S.push(M)
										var x =
												S[
													Math.floor(
														Math.random() * S.length
													)
												],
											q = this.getBoxRewardData(x)
										;(q.pos = _),
											this.gameComponent.downDiamond(q)
									}
								} else if (
									(this.gameComponent.downGold(
										this.node.position
									),
									this.conf.isBoss)
								) {
									var P = { type: 'scroll', pos: _ },
										A = Math.floor(8 * Math.random() + 1),
										T = [
											'weapon',
											'clothes',
											'ring',
											'necklace',
										],
										D =
											T[
												Math.floor(
													Math.random() * T.length
												)
											]
									;(P.num = A),
										(P.type2 = D),
										this.gameComponent.downDiamond(P)
									var R = b.gameSetting.bossDownWeight,
										E = []
									for (var O in R)
										if (R[O] > 0)
											for (var F = 0; F < R[O]; F++)
												E.push(O)
									var G =
											E[
												Math.floor(
													Math.random() * E.length
												)
											],
										H = this.getBoxRewardData(G)
									if (
										((H.pos = _),
										this.gameComponent.downDiamond(H),
										30 == C &&
											cc.myself.bigMapNum ==
												Math.floor(
													cc.myself.bigMapMaxNum / 100
												))
									) {
										var V = {
											type: 'diamond',
											num: 5 * cc.myself.bigMapNum,
											pos: _,
										}
										this.gameComponent.downDiamond(V)
									}
								}
								this.gameComponent.createEnemyDeadSpine(
									this.node.position
								),
									this.node.destroy(),
									this.player
										.getComponent('Player')
										.bloodThirstyAddHp(),
									Math.random() <
										cc.myself.getPlayerEnemyDieGetHpPercentage() &&
										this.gameComponent
											.getPlayer()
											.getComponent('Player')
											.afterGetHpAddBuff(
												Math.floor(
													0.25 *
														cc.myself.getPlayerBaseHp()
												)
											),
									setTimeout(function () {
										cc.find('Canvas')
											.getComponent('Game')
											.checkIsWin()
									}, 1e3)
							}
						}
					},
					getBoxRewardData: function (f) {
						var v = {}
						if ('equip5' == f) {
							var C = []
							for (var _ in b.weaponConf)
								5 == b.weaponConf[_].quality && C.push(_)
							var w = C[Math.floor(Math.random() * C.length)]
							;(v.type2 = w), (v.type = 'equip'), (v.num = 1)
						} else if ('equip4' == f) {
							var N = []
							for (var k in b.weaponConf)
								4 == b.weaponConf[k].quality && N.push(k)
							var L = N[Math.floor(Math.random() * N.length)]
							;(v.type2 = L), (v.type = 'equip'), (v.num = 1)
						} else if ('equip3' == f) {
							var B = []
							for (var S in b.weaponConf)
								3 == b.weaponConf[S].quality && B.push(S)
							var M = B[Math.floor(Math.random() * B.length)]
							;(v.type2 = M), (v.type = 'equip'), (v.num = 1)
						} else if ('equip2' == f) {
							var I = []
							for (var x in b.weaponConf)
								2 == b.weaponConf[x].quality && I.push(x)
							var q = I[Math.floor(Math.random() * I.length)]
							;(v.type2 = q), (v.type = 'equip'), (v.num = 1)
						} else if ('equip1' == f) {
							var P = []
							for (var A in b.weaponConf)
								1 == b.weaponConf[A].quality && P.push(A)
							var T = P[Math.floor(Math.random() * P.length)]
							;(v.type2 = T), (v.type = 'equip'), (v.num = 1)
						} else if ('workmate1' == f) {
							var D = []
							for (var R in b.workmateConf)
								1 == b.workmateConf[R].quality && D.push(R)
							var E = D[Math.floor(Math.random() * D.length)]
							;(v.type2 = E), (v.type = 'workmate'), (v.num = 1)
						} else if ('workmate2' == f) {
							var O = []
							for (var F in b.workmateConf)
								2 == b.workmateConf[F].quality && O.push(F)
							var G = O[Math.floor(Math.random() * O.length)]
							;(v.type2 = G), (v.type = 'workmate'), (v.num = 1)
						} else if ('workmate3' == f) {
							var H = []
							for (var V in b.workmateConf)
								3 == b.workmateConf[V].quality && H.push(V)
							var j = H[Math.floor(Math.random() * H.length)]
							;(v.type2 = j), (v.type = 'workmate'), (v.num = 1)
						} else if ('workmate4' == f) {
							var U = []
							for (var W in b.workmateConf)
								4 == b.workmateConf[W].quality && U.push(W)
							var z = U[Math.floor(Math.random() * U.length)]
							;(v.type2 = z), (v.type = 'workmate'), (v.num = 1)
						} else if ('workmate5' == f) {
							var Y = []
							for (var J in b.workmateConf)
								5 == b.workmateConf[J].quality && Y.push(J)
							var X = Y[Math.floor(Math.random() * Y.length)]
							;(v.type2 = X), (v.type = 'workmate'), (v.num = 1)
						} else if ('diamond' == f) {
							var K = 5 * cc.myself.bigMapNum
							K <= 0 && (K = 5), (v.num = K)
						}
						return v
					},
					getRoutiPower: function () {
						return this.routiPower
					},
					onMiao: function () {
						;(this.node.getChildByName('light').active = !0),
							(this.node.getChildByName('gps').active = !0)
					},
					offMiao: function () {
						;(this.node.getChildByName('light').active = !1),
							(this.node.getChildByName('gps').active = !1)
					},
					update: function (f) {
						if (
							!this.gameComponent.getGameIsOver() &&
							!this.gameComponent.getGamePause()
						) {
							this.iceTime > 0 && (this.iceTime -= f)
							var v = cc.myself.getPlayerAtk(),
								C = cc.myself.getPlayerFire(),
								b = cc.myself.getPlayerPoison()
							if (
								this.fireTime > 0 &&
								((this.fireTime -= f),
								(this.checkFireTime += f),
								this.checkFireTime >= 0.25)
							) {
								this.checkFireTime = 0
								var _ = Math.floor(((0.25 * v) / 4) * C)
								;(this.hp -= _),
									this.gameComponent.createHitLabel({
										str: _,
										pos: {
											x: this.node.x + 30,
											y: this.node.y + 50,
										},
										color: cc.color(255, 0, 0),
									}),
									this.checkIsDie()
							}
							if (
								this.poisonTime > 0 &&
								((this.poisonTime -= f),
								(this.checkPoisonTime += f),
								this.checkPoisonTime >= 0.5)
							) {
								this.checkPoisonTime = 0
								var w = Math.floor(((0.25 * v) / 2) * b)
								;(this.hp -= w),
									this.gameComponent.createHitLabel({
										str: w,
										pos: {
											x: this.node.x + 30,
											y: this.node.y + 50,
										},
										color: cc.color('#C000FF'),
									}),
									this.checkIsDie()
							}
							this.conf.callId &&
								((this.callTime += f),
								this.callTime >= this.conf.callTime &&
									(this.gameComponent.createEnemy(
										this.conf.callId,
										this.cubeX,
										this.cubeY
									),
									(this.callTime = 0)))
							var N = this.node
									.getChildByName('hp')
									.getChildByName('hp_di')
									.getChildByName('hp_r')
									.getComponent(cc.Sprite).fillRange,
								k = this.hp / this.maxHp
							N > k
								? (this.node
										.getChildByName('hp')
										.getChildByName('hp_di')
										.getChildByName('hp_r')
										.getComponent(cc.Sprite).fillRange =
										N - 0.01)
								: N < k &&
								  (this.node
										.getChildByName('hp')
										.getChildByName('hp_di')
										.getChildByName('hp_r')
										.getComponent(cc.Sprite).fillRange =
										N + 0.01),
								'move' == this.conf.moveType && this.move(f),
								(this.node.zIndex = this.gameComponent.getZIndexByMapPos(
									this.cubeX,
									this.cubeY
								))
						}
					},
				}),
					cc._RF.pop()
			},
			{ AStar: 'AStar', Config: 'Config' },
		],
		EquipIns: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '8ad92YsdXdISaa19Iyt32yN', 'EquipIns')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						this.resetUI(),
							cc
								.find('Canvas')
								.getComponent('Main')
								.feedbackBtnHide()
					},
					init: function (f) {
						;(this.data = f),
							(this.conf = b.weaponConf[this.data.id]),
							cc.myself.asyncShowImage(
								this.node
									.getChildByName('di')
									.getChildByName('thing')
									.getChildByName('di')
									.getComponent(cc.Sprite),
								'ui/equip/zhuangbei_' +
									b.gameSetting.equipQualityIconColor[
										this.conf.quality - 1
									] +
									'1'
							),
							cc.myself.asyncShowImage(
								this.node
									.getChildByName('di')
									.getChildByName('thing')
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								this.conf.icon
							),
							cc.myself.asyncShowImage(
								this.node
									.getChildByName('di')
									.getChildByName('down')
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								'ui/icon_' + this.conf.type + 'Scroll'
							)
					},
					resetUI: function () {
						var f,
							v,
							C = this.node.getChildByName('di'),
							_ = C.getChildByName('thing'),
							w = C.getChildByName('up'),
							N = C.getChildByName('down'),
							k = N.getChildByName('addins')
						;(k.getComponent(cc.Label).string = ''),
							(_.getChildByName('level').getComponent(
								cc.Label
							).string = 'Lv.' + this.data.strength),
							(_.getChildByName('content').getComponent(
								cc.Label
							).string = this.conf.name)
						for (var L = 0; L < cc.myself.warehouseList.length; L++)
							if (
								cc.myself.warehouseList[L].wear &&
								b.weaponConf[cc.myself.warehouseList[L].id]
									.type == this.conf.type
							) {
								;(v =
									b.weaponConf[
										cc.myself.warehouseList[L].id
									]),
									(f = cc.myself.warehouseList[L])
								break
							}
						var B = 1
						for (var S in this.conf.data) {
							var M = w.getChildByName('sx' + B)
							M.active = !0
							var I = this.conf.data[S]
							this.conf.add[S] &&
								((I += this.data.strength * this.conf.add[S]),
								'' == k.getComponent(cc.Label).string &&
									(k.getComponent(cc.Label).string =
										k.getComponent(cc.Label).string + '  '),
								(k.getComponent(cc.Label).string =
									k.getComponent(cc.Label).string +
									b.insConf[S] +
									'+' +
									this.conf.add[S])),
								('crit' != S &&
									'critDamage' != S &&
									'expAdd' != S) ||
									(I *= 100),
								(M.getChildByName('num').getComponent(
									cc.Label
								).string = I),
								('crit' != S &&
									'critDamage' != S &&
									'expAdd' != S &&
									'hide' != S &&
									'damageReductionPer' != S) ||
									(M.getChildByName('num').getComponent(
										cc.Label
									).string = I + '%'),
								(M.getComponent(cc.Label).string = b.insConf[S])
							var x = 0
							if (
								(v &&
									v.data[S] &&
									((x = v.data[S]),
									v.add[S] && (x += f.strength * v.add[S])),
								('crit' != S &&
									'critDamage' != S &&
									'expAdd' != S) ||
									(x *= 100),
								'skill' != S)
							) {
								var q = I - x
								q >= 0
									? (M.getChildByName('plus').getComponent(
											cc.Label
									  ).string = '+' + q)
									: ((M.getChildByName('plus').getComponent(
											cc.Label
									  ).string = q),
									  (M.getChildByName(
											'plus'
									  ).color = cc.color('#FF3600')))
							} else M.getChildByName('plus').active = !1
							B++
						}
						if (this.data.strength >= 10 * this.conf.quality);
						else {
							for (
								var P = this.conf.type + 'Scroll', A = 0, T = 0;
								T < cc.myself.scrollList.length;
								T++
							)
								if (cc.myself.scrollList[T].type == P) {
									A = cc.myself.scrollList[T].num
									break
								}
							;(N.getChildByName('cailiao').getComponent(
								cc.Label
							).string =
								b.insConf[P] +
								A +
								'/' +
								b.gameSetting.equipUpNeed.scroll[
									this.data.strength
								]),
								(N.getChildByName('coin')
									.getChildByName('num2')
									.getComponent(cc.Label).string =
									b.gameSetting.equipUpNeed.gold[
										this.data.strength
									])
						}
						this.data.wear &&
							(C.getChildByName('button')
								.getChildByName('take')
								.getChildByName('word_take')
								.getComponent(cc.Label).string = Lq.lang(
								'卸下'
							))
					},
					strengthEquip: function () {
						for (
							var f, v = this.conf.type + 'Scroll', C = 0;
							C < cc.myself.scrollList.length;
							C++
						)
							if (cc.myself.scrollList[C].type == v) {
								f = cc.myself.scrollList[C]
								break
							}
						if (this.data.strength >= 10 * this.conf.quality)
							cc.myself.tips(Lq.lang('已到强化上限'))
						else if (
							f.num <
							b.gameSetting.equipUpNeed.scroll[this.data.strength]
						)
							cc.myself.tips(Lq.lang('卷轴不足'))
						else {
							if (
								cc.myself.gold <
								b.gameSetting.equipUpNeed.gold[
									this.data.strength
								]
							)
								return (
									cc.myself.tips(Lq.lang('金币不足')),
									void cc
										.find('Canvas')
										.getComponent('Main')
										.showGoldLack()
								)
							;(f.num -=
								b.gameSetting.equipUpNeed.scroll[
									this.data.strength
								]),
								(cc.myself.gold -=
									b.gameSetting.equipUpNeed.gold[
										this.data.strength
									]),
								(this.data.strength += 1),
								cc.myself.setLocalData('gold', cc.myself.gold),
								cc.myself.setLocalData(
									'scrollList',
									cc.myself.scrollList
								),
								cc.myself.setLocalData(
									'warehouseList',
									cc.myself.warehouseList
								),
								this.resetUI(),
								cc.myself.checkBuff(),
								cc
									.find('Canvas')
									.getComponent('Main')
									.resetEquipInfo()
						}
					},
					wearEquip: function () {
						if (this.data.wear)
							return (
								(this.data.wear = !1),
								cc.myself.checkBuff(),
								(cc
									.find('Canvas')
									.getComponent(
										'Main'
									).createEquipPageNum = 0),
								cc
									.find('Canvas')
									.getComponent('Main')
									.resetEquipUI(),
								cc
									.find('Canvas')
									.getComponent('Main')
									.resetEquipAttribute(),
								void this.close()
							)
						for (var f = 0; f < cc.myself.warehouseList.length; f++)
							if (
								cc.myself.warehouseList[f].wear &&
								this.conf.type ==
									b.weaponConf[cc.myself.warehouseList[f].id]
										.type
							) {
								cc.myself.warehouseList[f].wear = !1
								break
							}
						;(this.data.wear = !0),
							this.close(),
							cc.myself.checkBuff(),
							(cc
								.find('Canvas')
								.getComponent('Main').createEquipPageNum = 0),
							cc
								.find('Canvas')
								.getComponent('Main')
								.resetEquipUI(),
							cc
								.find('Canvas')
								.getComponent('Main')
								.resetEquipAttribute()
					},
					goToGame: function () {
						if ('{}' == JSON.stringify(cc.myself.pauseData)) {
							if (cc.myself.strength < 5)
								return (
									cc.myself.tips(Lq.lang('体力不足')),
									void cc
										.find('Canvas')
										.getComponent('Main')
										.showHealthLack()
								)
							;(cc.myself.strength -= 5),
								cc.myself.setLocalData(
									'strength',
									cc.myself.strength
								),
								cc.myself.resetGameData(),
								cc.director.loadScene('GameScene')
						} else cc.myself.showPre('pre/continue')
					},
					close: function () {
						this.node.destroy(),
							cc.myself.setLocalData(
								'warehouseList',
								cc.myself.warehouseList
							),
							cc
								.find('Canvas')
								.getComponent('Main')
								.feedbackBtnShow()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		EquipMixReward: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'bba401yszRA4bcT8jMVfB6j', 'EquipMixReward')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						cc.myself.scaleToShow(this.node)
					},
					init: function (f) {
						this.data = f
						var v = _.weaponConf[f.id]
						;(this.diamondNum =
							_.gameSetting.mixEquipGetDiamond[v.quality - 2]),
							(this.node
								.getChildByName('di')
								.getChildByName('content')
								.getChildByName('health_2')
								.getChildByName('sum_2')
								.getComponent(cc.Label).string =
								'x' + this.diamondNum)
					},
					video: function () {
						var f = this
						b.default.showRewardedAd(function () {
							;(cc.myself.diamond += f.diamondNum),
								cc.myself.setLocalData(
									'diamond',
									cc.myself.diamond
								),
								cc.myself.tips(
									Lq.lang('恭喜获得x钻石', {
										data: { num: f.diamondNum },
									})
								),
								f.close()
						})
					},
					close: function () {
						this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		EquipMixSuccess: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '40f58q+EZ9P3qhQ8N0ce+7T', 'EquipMixSuccess')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						cc.myself.scaleToShow(this.node)
					},
					init: function (f) {
						this.data = f
						for (var v = 0; v < f.length; v++) {
							var C = b.weaponConf[f[v].id],
								_ = cc.instantiate(
									this.node.getChildByName('itemNode')
								)
							cc.myself.asyncShowImage(
								_.getChildByName('iconbg').getComponent(
									cc.Sprite
								),
								'ui/equip/zhuangbei_' +
									b.gameSetting.equipQualityIconColor[
										C.quality - 1
									] +
									'1'
							),
								cc.myself.asyncShowImage(
									_.getChildByName('icon').getComponent(
										cc.Sprite
									),
									C.icon
								),
								(_.getChildByName('num').getComponent(
									cc.Label
								).string = 'Lv.' + f[v].strength),
								(_.getChildByName('name').getComponent(
									cc.Label
								).string = C.name),
								this.node
									.getChildByName('scrollview')
									.getChildByName('content')
									.addChild(_)
						}
					},
					close: function () {
						this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		EquipMix: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'a52a0xQOpxHLbfGEYSMSVh8', 'EquipMix')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {
						equipItem: cc.Prefab,
						equipContent: cc.Prefab,
					},
					start: function () {
						cc.find('Canvas').getComponent('Main').feedbackBtnHide()
						var f = this,
							v = this.node.getChildByName('di'),
							C = v.getChildByName('up'),
							b = v.getChildByName('down')
						;(this.content = b
							.getChildByName('scrollview')
							.getChildByName('content')),
							(this.coinLabel = C.getChildByName(
								'coin'
							).getChildByName('num')),
							(this.showIcon = C.getChildByName('icon')),
							(this.showList = []),
							this.resetUI(),
							(this.isMixing = !1),
							(this.mixSpine = C.getChildByName('spine')),
							this.mixSpine
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									v.animation && v.animation.name,
										(f.mixSpine.active = !1)
								})
					},
					checkInShowList: function (f) {
						for (var v = !1, C = 0; C < this.showList.length; C++)
							if (f == this.showList[C]) {
								v = !0
								break
							}
						return v
					},
					resetContent: function (f) {
						for (
							var v = this.content,
								C = [],
								_ = [],
								w = [],
								N = [],
								k = 0;
							k < cc.myself.warehouseList.length;
							k++
						) {
							var L = cc.myself.warehouseList[k],
								B = b.weaponConf[L.id]
							if (B.upId > 0 && !this.checkInShowList(L.guid))
								if (f) {
									if (-1 != f.indexOf(L.id)) {
										var S = B.type
										'weapon' == S
											? C.push(cc.myself.warehouseList[k])
											: 'clothes' == S
											? _.push(cc.myself.warehouseList[k])
											: 'ring' == S
											? w.push(cc.myself.warehouseList[k])
											: 'necklace' == S &&
											  N.push(cc.myself.warehouseList[k])
									}
								} else {
									var M = B.type
									'weapon' == M
										? C.push(cc.myself.warehouseList[k])
										: 'clothes' == M
										? _.push(cc.myself.warehouseList[k])
										: 'ring' == M
										? w.push(cc.myself.warehouseList[k])
										: 'necklace' == M &&
										  N.push(cc.myself.warehouseList[k])
								}
						}
						if (C.length > 0) {
							for (
								var I = cc.instantiate(this.equipContent),
									x = 0;
								x < C.length;
								x++
							) {
								var q = cc.instantiate(this.equipItem)
								cc.myself.asyncShowImage(
									q
										.getChildByName('bg')
										.getComponent(cc.Sprite),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											b.weaponConf[C[x].id].quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										q
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										b.weaponConf[C[x].id].icon
									),
									(q
										.getChildByName('label')
										.getComponent(cc.Label).string =
										'Lv.' + C[x].strength),
									I.getChildByName('content').addChild(q)
								var P = q.getComponent(cc.Button).clickEvents[0]
								;(P.target = this.node),
									(P.component = 'EquipMix'),
									(P.handler = 'choose'),
									(P.customEventData = C[x].guid)
							}
							;(I.getChildByName('top')
								.getChildByName('title')
								.getComponent(cc.Label).string = Lq.lang(
								'武器'
							)),
								I.getChildByName('content').on(
									cc.Node.EventType.SIZE_CHANGED,
									function () {
										;(I.height =
											I.getChildByName('content').height +
											80),
											(I.getChildByName('top').y =
												I.getChildByName('content')
													.height / 2)
									}.bind(this)
								),
								(I.name = 'weapon'),
								v.addChild(I)
						}
						if (_.length > 0) {
							for (
								var A = cc.instantiate(this.equipContent),
									T = 0;
								T < _.length;
								T++
							) {
								var D = cc.instantiate(this.equipItem)
								cc.myself.asyncShowImage(
									D.getChildByName('bg').getComponent(
										cc.Sprite
									),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											b.weaponConf[_[T].id].quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										D.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.weaponConf[_[T].id].icon
									),
									(D.getChildByName('label').getComponent(
										cc.Label
									).string = 'Lv.' + _[T].strength),
									A.getChildByName('content').addChild(D)
								var R = D.getComponent(cc.Button).clickEvents[0]
								;(R.target = this.node),
									(R.component = 'EquipMix'),
									(R.handler = 'choose'),
									(R.customEventData = _[T].guid)
							}
							;(A.getChildByName('top')
								.getChildByName('title')
								.getComponent(cc.Label).string = Lq.lang(
								'衣服'
							)),
								A.getChildByName('content').on(
									cc.Node.EventType.SIZE_CHANGED,
									function () {
										;(A.height =
											A.getChildByName('content').height +
											80),
											(A.getChildByName('top').y =
												A.getChildByName('content')
													.height / 2)
									}.bind(this)
								),
								(A.name = 'clothes'),
								v.addChild(A)
						}
						if (w.length > 0) {
							for (
								var E = cc.instantiate(this.equipContent),
									O = 0;
								O < w.length;
								O++
							) {
								var F = cc.instantiate(this.equipItem)
								cc.myself.asyncShowImage(
									F.getChildByName('bg').getComponent(
										cc.Sprite
									),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											b.weaponConf[w[O].id].quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										F.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.weaponConf[w[O].id].icon
									),
									(F.getChildByName('label').getComponent(
										cc.Label
									).string = 'Lv.' + w[O].strength),
									E.getChildByName('content').addChild(F)
								var G = F.getComponent(cc.Button).clickEvents[0]
								;(G.target = this.node),
									(G.component = 'EquipMix'),
									(G.handler = 'choose'),
									(G.customEventData = w[O].guid)
							}
							;(E.getChildByName('top')
								.getChildByName('title')
								.getComponent(cc.Label).string = Lq.lang(
								'戒指'
							)),
								E.getChildByName('content').on(
									cc.Node.EventType.SIZE_CHANGED,
									function () {
										;(E.height =
											E.getChildByName('content').height +
											80),
											(E.getChildByName('top').y =
												E.getChildByName('content')
													.height / 2)
									}.bind(this)
								),
								(E.name = 'ring'),
								v.addChild(E)
						}
						if (N.length > 0) {
							for (
								var H = cc.instantiate(this.equipContent),
									V = 0;
								V < N.length;
								V++
							) {
								var j = cc.instantiate(this.equipItem)
								cc.myself.asyncShowImage(
									j
										.getChildByName('bg')
										.getComponent(cc.Sprite),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											b.weaponConf[N[V].id].quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										j
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										b.weaponConf[N[V].id].icon
									),
									(j
										.getChildByName('label')
										.getComponent(cc.Label).string =
										'Lv.' + N[V].strength),
									H.getChildByName('content').addChild(j)
								var U = j.getComponent(cc.Button).clickEvents[0]
								;(U.target = this.node),
									(U.component = 'EquipMix'),
									(U.handler = 'choose'),
									(U.customEventData = N[V].guid)
							}
							;(H.getChildByName('top')
								.getChildByName('title')
								.getComponent(cc.Label).string = Lq.lang(
								'项链'
							)),
								H.getChildByName('content').on(
									cc.Node.EventType.SIZE_CHANGED,
									function () {
										;(H.height =
											H.getChildByName('content').height +
											80),
											(H.getChildByName('top').y =
												H.getChildByName('content')
													.height / 2)
									}.bind(this)
								),
								(H.name = 'necklace'),
								v.addChild(H)
						}
					},
					resetContentByType: function (f) {
						this.content.getChildByName(f)
					},
					resetUI: function () {
						if (
							(this.content.removeAllChildren(),
							this.showList.length > 0)
						) {
							for (
								var f, v = 0;
								v < cc.myself.warehouseList.length;
								v++
							)
								if (
									cc.myself.warehouseList[v].guid ==
									this.showList[0]
								) {
									f = cc.myself.warehouseList[v].id
									break
								}
							if (!f)
								return void console.error(
									'没找到第一个选中的装备的id'
								)
						} else {
							for (
								var C = {}, _ = 0;
								_ < cc.myself.warehouseList.length;
								_++
							) {
								var w = cc.myself.warehouseList[_].id
								b.weaponConf[w].upId > 0 &&
									(C[w] ? C[w]++ : (C[w] = 1))
							}
							var N = []
							for (var k in C)
								if (C[k] >= 3)
									for (
										var L = 0;
										L < Math.floor(C[k] / 3);
										L++
									)
										N.push(k)
							this.mixList = N
							for (var B = 0; B < N.length; B++) {
								var S = b.weaponConf[N[B]]
								if (S.upId > 0) {
									var M = cc.instantiate(this.equipItem)
									cc.myself.asyncShowImage(
										M.getChildByName('bg').getComponent(
											cc.Sprite
										),
										'ui/equip/zhuangbei_' +
											b.gameSetting.equipQualityIconColor[
												S.quality - 1
											] +
											'1'
									),
										cc.myself.asyncShowImage(
											M.getChildByName(
												'icon'
											).getComponent(cc.Sprite),
											S.icon
										),
										(M.getChildByName('label').active = !1),
										this.content.addChild(M)
								}
							}
						}
						this.resetShowUI()
					},
					resetShowUI: function () {
						for (var f = 1; f < 4; f++) {
							var v = this.showIcon.getChildByName(
								'kongicon_' + f
							)
							if (f > this.showList.length)
								cc.myself.asyncShowImage(
									v.getComponent(cc.Sprite),
									'ui/workmate/kongicon'
								),
									cc.myself.asyncShowImage(
										v
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										''
									)
							else {
								var C = cc.myself.getwarehouseDataByGUID(
										this.showList[f - 1]
									),
									_ = b.weaponConf[C.id]
								cc.myself.asyncShowImage(
									v.getComponent(cc.Sprite),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											_.quality - 1
										] +
										'2'
								),
									cc.myself.asyncShowImage(
										v
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										_.icon
									)
							}
						}
					},
					choose: function (f, v) {
						this.isMixing ||
							(this.showList.length >= 3
								? cc.myself.tips(Lq.lang('不能放超过3件装备'))
								: (this.showList.push(parseInt(v)),
								  this.resetUI(),
								  (this.showIcon
										.getChildByName(
											'kongicon_' + this.showList.length
										)
										.getComponent(
											cc.Button
										).clickEvents[0].customEventData = this.showList[
										this.showList.length - 1
								  ])))
					},
					unChoose: function (f, v) {
						if (
							!this.isMixing &&
							0 != parseInt(v) &&
							0 != this.showList.length
						) {
							for (var C = this.showList.length - 1; C >= 0; C--)
								if (parseInt(v) == this.showList[C]) {
									this.showList.splice(C, 1)
									break
								}
							this.resetUI()
							for (var b = 1; b < 4; b++) {
								var _ = this.showIcon
									.getChildByName('kongicon_' + b)
									.getComponent(cc.Button).clickEvents[0]
								b > this.showList.length
									? (_.customEventData = 0)
									: (_.customEventData = this.showList[b - 1])
							}
						}
					},
					mixAction: function () {
						this.isMixing ||
							(this.mixList &&
								(0 != this.mixList.length
									? ((this.isMixing = !0),
									  (this.mixSpine.active = !0),
									  this.mixSpine
											.getComponent('sp.Skeleton')
											.setAnimation(
												1,
												'zhuangbeihecheng',
												!1
											),
									  this.node.runAction(
											cc.sequence(
												cc.delayTime(0.9),
												cc.callFunc(
													function () {
														this.mix()
													}.bind(this)
												)
											)
									  ))
									: cc.myself.tips(
											Lq.lang('没有可以合成的装备')
									  )))
					},
					mix: function () {
						for (var f = [], v = 0; v < this.mixList.length; v++) {
							for (
								var C = void 0, _ = !1, w = 0, N = 0;
								N < 3;
								N++
							)
								for (
									var k = cc.myself.warehouseList.length - 1;
									k >= 0;
									k--
								)
									if (
										cc.myself.warehouseList[k].id ==
										this.mixList[v]
									) {
										var L = cc.myself.warehouseList[k]
										;(C = b.weaponConf[L.id].upId),
											L.wear && (_ = !0),
											L.strength > w && (w = L.strength),
											cc.myself.warehouseList.splice(k, 1)
										break
									}
							var B = {
								id: C,
								wear: _,
								strength: w,
								guid: cc.myself.warehouseGUID + 1,
							}
							cc.myself.warehouseList.push(B)
							var S = {
								id: C,
								wear: _,
								strength: w,
								guid: cc.myself.warehouseGUID + 1,
							}
							f.push(S), (cc.myself.warehouseGUID += 1)
						}
						this.showList = []
						for (var M = 1; M < 4; M++)
							this.showIcon
								.getChildByName('kongicon_' + M)
								.getComponent(
									cc.Button
								).clickEvents[0].customEventData = 0
						this.resetUI(),
							cc.myself.setLocalData(
								'warehouseGUID',
								cc.myself.warehouseGUID
							),
							cc.myself.setLocalData(
								'warehouseList',
								cc.myself.warehouseList
							),
							cc.myself.showPre('pre/equipMixSuccess', {
								jname: 'EquipMixSuccess',
								data: f,
							}),
							(this.isMixing = !1)
					},
					close: function () {
						this.node.destroy(),
							(cc
								.find('Canvas')
								.getComponent('Main').createEquipPageNum = 0),
							cc
								.find('Canvas')
								.getComponent('Main')
								.resetEquipUI(),
							cc
								.find('Canvas')
								.getComponent('Main')
								.feedbackBtnShow()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		EquipScroll: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'af80fsoAe9BmLfmSKnWS/q8', 'EquipScroll')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {},
					init: function (f) {
						;(this.type = f.type),
							(this.node
								.getChildByName('di')
								.getChildByName('thing')
								.getChildByName('content')
								.getComponent(cc.Label).string =
								b.insConf[this.type]),
							cc.myself.asyncShowImage(
								this.node
									.getChildByName('di')
									.getChildByName('thing')
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								'ui/icon_' + this.type
							)
					},
					close: function () {
						this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		EquipSmeltSuccess: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '6395cdblWtKx7bPh7Qy/Wx/', 'EquipSmeltSuccess'),
					f('Config'),
					cc.Class({
						extends: cc.Component,
						properties: { itemNode: cc.Prefab },
						start: function () {
							cc.myself.scaleToShow(this.node)
						},
						init: function (f) {
							for (var v in (console.log('data', f),
							(this.rewardList = f.rewardList),
							(this.content = this.node.getChildByName(
								'content'
							)),
							this.rewardList)) {
								var C = cc.instantiate(this.itemNode)
								if (
									((C.getChildByName('label').getComponent(
										cc.Label
									).string = cc.myself.changeNumToUnit(
										this.rewardList[v]
									)),
									this.content.addChild(C),
									'gold' == v)
								)
									(cc.myself.gold += this.rewardList[v]),
										cc.myself.asyncShowImage(
											C.getChildByName(
												'icon'
											).getComponent(cc.Sprite),
											'ui/icon_gold'
										)
								else {
									for (
										var b = 0;
										b < cc.myself.scrollList.length;
										b++
									)
										if (cc.myself.scrollList[b].type == v) {
											cc.myself.scrollList[
												b
											].num += this.rewardList[v]
											break
										}
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										'ui/icon_' + v
									)
								}
							}
							cc.myself.setLocalData('gold', cc.myself.gold),
								cc.myself.setLocalData(
									'scrollList',
									cc.myself.scrollList
								),
								cc.myself.setLocalData(
									'warehouseList',
									cc.myself.warehouseList
								)
						},
						close: function () {
							this.node.destroy(),
								(cc
									.find('Canvas')
									.getComponent(
										'Main'
									).createEquipPageNum = 0)
						},
					}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		EquipSmelt: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '04690CRHaxELp3BBfmj7Gkl', 'EquipSmelt')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {
						equipItem: cc.Prefab,
						equipContent: cc.Prefab,
					},
					start: function () {
						cc.find('Canvas').getComponent('Main').feedbackBtnHide()
						var f = this,
							v = this.node.getChildByName('di'),
							C = v.getChildByName('up'),
							b = v.getChildByName('down')
						;(this.content = b
							.getChildByName('scrollview')
							.getChildByName('content')),
							(this.coinLabel = C.getChildByName(
								'coin'
							).getChildByName('num')),
							(this.showIcon = C.getChildByName('icon')),
							(this.showList = []),
							this.resetUI(),
							(this.isMixing = !1),
							(this.mixSpine = C.getChildByName('spine')),
							this.mixSpine
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									v.animation && v.animation.name,
										(f.mixSpine.active = !1)
								})
					},
					checkInShowList: function (f) {
						for (var v = !1, C = 0; C < this.showList.length; C++)
							if (f == this.showList[C]) {
								v = !0
								break
							}
						return v
					},
					resetContent: function (f) {
						for (
							var v = this.content,
								C = [],
								_ = [],
								w = [],
								N = [],
								k = 0;
							k < cc.myself.warehouseList.length;
							k++
						) {
							var L = cc.myself.warehouseList[k],
								B = b.weaponConf[L.id]
							if (!L.wear && !this.checkInShowList(L.guid))
								if (f) {
									if (-1 != f.indexOf(L.id)) {
										var S = B.type
										'weapon' == S
											? C.push(cc.myself.warehouseList[k])
											: 'clothes' == S
											? _.push(cc.myself.warehouseList[k])
											: 'ring' == S
											? w.push(cc.myself.warehouseList[k])
											: 'necklace' == S &&
											  N.push(cc.myself.warehouseList[k])
									}
								} else {
									var M = B.type
									'weapon' == M
										? C.push(cc.myself.warehouseList[k])
										: 'clothes' == M
										? _.push(cc.myself.warehouseList[k])
										: 'ring' == M
										? w.push(cc.myself.warehouseList[k])
										: 'necklace' == M &&
										  N.push(cc.myself.warehouseList[k])
								}
						}
						if (C.length > 0) {
							for (
								var I = cc.instantiate(this.equipContent),
									x = 0;
								x < C.length;
								x++
							) {
								var q = cc.instantiate(this.equipItem)
								cc.myself.asyncShowImage(
									q
										.getChildByName('bg')
										.getComponent(cc.Sprite),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											b.weaponConf[C[x].id].quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										q
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										b.weaponConf[C[x].id].icon
									),
									(q
										.getChildByName('label')
										.getComponent(cc.Label).string =
										'Lv.' + C[x].strength),
									I.getChildByName('content').addChild(q)
								var P = q.getComponent(cc.Button).clickEvents[0]
								;(P.target = this.node),
									(P.component = 'EquipSmelt'),
									(P.handler = 'choose'),
									(P.customEventData = C[x].guid)
							}
							;(I.getChildByName('top')
								.getChildByName('title')
								.getComponent(cc.Label).string = Lq.lang(
								'武器'
							)),
								I.getChildByName('content').on(
									cc.Node.EventType.SIZE_CHANGED,
									function () {
										;(I.height =
											I.getChildByName('content').height +
											80),
											(I.getChildByName('top').y =
												I.getChildByName('content')
													.height / 2)
									}.bind(this)
								),
								(I.name = 'weapon'),
								v.addChild(I)
						}
						if (_.length > 0) {
							for (
								var A = cc.instantiate(this.equipContent),
									T = 0;
								T < _.length;
								T++
							) {
								var D = cc.instantiate(this.equipItem)
								cc.myself.asyncShowImage(
									D.getChildByName('bg').getComponent(
										cc.Sprite
									),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											b.weaponConf[_[T].id].quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										D.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.weaponConf[_[T].id].icon
									),
									(D.getChildByName('label').getComponent(
										cc.Label
									).string = 'Lv.' + _[T].strength),
									A.getChildByName('content').addChild(D)
								var R = D.getComponent(cc.Button).clickEvents[0]
								;(R.target = this.node),
									(R.component = 'EquipSmelt'),
									(R.handler = 'choose'),
									(R.customEventData = _[T].guid)
							}
							;(A.getChildByName('top')
								.getChildByName('title')
								.getComponent(cc.Label).string = Lq.lang(
								'衣服'
							)),
								A.getChildByName('content').on(
									cc.Node.EventType.SIZE_CHANGED,
									function () {
										;(A.height =
											A.getChildByName('content').height +
											80),
											(A.getChildByName('top').y =
												A.getChildByName('content')
													.height / 2)
									}.bind(this)
								),
								(A.name = 'clothes'),
								v.addChild(A)
						}
						if (w.length > 0) {
							for (
								var E = cc.instantiate(this.equipContent),
									O = 0;
								O < w.length;
								O++
							) {
								var F = cc.instantiate(this.equipItem)
								cc.myself.asyncShowImage(
									F.getChildByName('bg').getComponent(
										cc.Sprite
									),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											b.weaponConf[w[O].id].quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										F.getChildByName('icon').getComponent(
											cc.Sprite
										),
										b.weaponConf[w[O].id].icon
									),
									(F.getChildByName('label').getComponent(
										cc.Label
									).string = 'Lv.' + w[O].strength),
									E.getChildByName('content').addChild(F)
								var G = F.getComponent(cc.Button).clickEvents[0]
								;(G.target = this.node),
									(G.component = 'EquipSmelt'),
									(G.handler = 'choose'),
									(G.customEventData = w[O].guid)
							}
							;(E.getChildByName('top')
								.getChildByName('title')
								.getComponent(cc.Label).string = Lq.lang(
								'戒指'
							)),
								E.getChildByName('content').on(
									cc.Node.EventType.SIZE_CHANGED,
									function () {
										;(E.height =
											E.getChildByName('content').height +
											80),
											(E.getChildByName('top').y =
												E.getChildByName('content')
													.height / 2)
									}.bind(this)
								),
								(E.name = 'ring'),
								v.addChild(E)
						}
						if (N.length > 0) {
							for (
								var H = cc.instantiate(this.equipContent),
									V = 0;
								V < N.length;
								V++
							) {
								var j = cc.instantiate(this.equipItem)
								cc.myself.asyncShowImage(
									j
										.getChildByName('bg')
										.getComponent(cc.Sprite),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											b.weaponConf[N[V].id].quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										j
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										b.weaponConf[N[V].id].icon
									),
									(j
										.getChildByName('label')
										.getComponent(cc.Label).string =
										'Lv.' + N[V].strength),
									H.getChildByName('content').addChild(j)
								var U = j.getComponent(cc.Button).clickEvents[0]
								;(U.target = this.node),
									(U.component = 'EquipSmelt'),
									(U.handler = 'choose'),
									(U.customEventData = N[V].guid)
							}
							;(H.getChildByName('top')
								.getChildByName('title')
								.getComponent(cc.Label).string = Lq.lang(
								'项链'
							)),
								H.getChildByName('content').on(
									cc.Node.EventType.SIZE_CHANGED,
									function () {
										;(H.height =
											H.getChildByName('content').height +
											80),
											(H.getChildByName('top').y =
												H.getChildByName('content')
													.height / 2)
									}.bind(this)
								),
								(H.name = 'necklace'),
								v.addChild(H)
						}
					},
					resetContentByType: function (f) {},
					resetUpContent: function () {
						var f = this.node
							.getChildByName('di')
							.getChildByName('up')
							.getChildByName('scrollview')
							.getChildByName('content')
						f.removeAllChildren()
						for (var v = 0; v < this.showList.length; v++) {
							var C = cc.myself.getwarehouseDataByGUID(
									this.showList[v]
								),
								_ = b.weaponConf[C.id],
								w = cc.instantiate(this.equipItem)
							;(w.scale = 0.8),
								cc.myself.asyncShowImage(
									w
										.getChildByName('bg')
										.getComponent(cc.Sprite),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											_.quality - 1
										] +
										'1'
								),
								cc.myself.asyncShowImage(
									w
										.getChildByName('icon')
										.getComponent(cc.Sprite),
									_.icon
								),
								(w
									.getChildByName('label')
									.getComponent(cc.Label).string =
									'Lv.' + C.strength),
								f.addChild(w)
							var N = w.getComponent(cc.Button).clickEvents[0]
							;(N.target = this.node),
								(N.component = 'EquipSmelt'),
								(N.handler = 'unChoose'),
								(N.customEventData = C.guid)
						}
					},
					resetUI: function () {
						this.content.removeAllChildren()
						var f = this.node
							.getChildByName('di')
							.getChildByName('up')
							.getChildByName('toggle')
						this.showList = []
						for (
							var v = f
									.getChildByName('bai_t')
									.getComponent(cc.Toggle).isChecked,
								C = f
									.getChildByName('lv_t')
									.getComponent(cc.Toggle).isChecked,
								_ = f
									.getChildByName('lan_t')
									.getComponent(cc.Toggle).isChecked,
								w = 0;
							w < cc.myself.warehouseList.length;
							w++
						) {
							var N = cc.myself.warehouseList[w],
								k = b.weaponConf[N.id]
							N.wear ||
								(((1 == k.quality && v) ||
									(2 == k.quality && C) ||
									(3 == k.quality && _)) &&
									this.showList.push(N.guid))
						}
						this.resetContent(), this.resetUpContent()
					},
					choose: function (f, v) {
						this.isMixing ||
							(0 != parseInt(v) &&
								((f.target.getComponent(
									cc.Button
								).clickEvents[0].handler = 'unChoose'),
								(f.target.scale = 0.8),
								f.target.removeFromParent(),
								this.showList.push(parseInt(v)),
								this.node
									.getChildByName('di')
									.getChildByName('up')
									.getChildByName('scrollview')
									.getChildByName('content')
									.addChild(f.target)))
					},
					unChoose: function (f, v) {
						if (!this.isMixing && 0 != parseInt(v)) {
							for (var C = this.showList.length - 1; C >= 0; C--)
								if (parseInt(v) == this.showList[C]) {
									this.showList.splice(C, 1)
									break
								}
							;(f.target.getComponent(
								cc.Button
							).clickEvents[0].handler = 'choose'),
								(f.target.scale = 1),
								f.target.removeFromParent()
							var _ =
								b.weaponConf[
									cc.myself.getwarehouseDataByGUID(
										parseInt(v)
									).id
								].type
							this.content
								.getChildByName(_)
								.getChildByName('content')
								.addChild(f.target)
						}
					},
					getDataByWarehouseList: function (f) {
						for (var v = 0; v < cc.myself.warehouseList.length; v++)
							if (cc.myself.warehouseList[v].guid == f)
								return cc.myself.warehouseList[v]
						return null
					},
					mixAction: function () {
						this.isMixing ||
							(this.showList.length < 1
								? cc.myself.tips(
										Lq.lang('至少放入1件装备才能进行熔炼')
								  )
								: ((this.mixSpine.active = !0),
								  this.mixSpine
										.getComponent('sp.Skeleton')
										.setAnimation(
											1,
											'zhuangbeihecheng',
											!1
										),
								  this.node.runAction(
										cc.sequence(
											cc.delayTime(0.9),
											cc.callFunc(
												function () {
													this.mix()
												}.bind(this)
											)
										)
								  )))
					},
					mix: function () {
						for (var f = {}, v = 0; v < this.showList.length; v++)
							for (
								var C = cc.myself.warehouseList.length - 1;
								C >= 0;
								C--
							)
								if (
									cc.myself.warehouseList[C].guid ==
									this.showList[v]
								) {
									var _ = cc.myself.warehouseList[C],
										w = b.weaponConf[_.id],
										N = w.type + 'Scroll',
										k = 2 * Math.pow(3, w.quality - 1),
										L = 0
									if (_.strength > 0)
										for (var B = 0; B < _.strength; B++)
											(k += Math.floor(
												b.gameSetting.equipUpNeed
													.scroll[B] / 2
											)),
												(L += Math.floor(
													b.gameSetting.equipUpNeed
														.gold[B] / 2
												))
									f[N] ? (f[N] += k) : (f[N] = k),
										L > 0 &&
											(f.gold
												? (f.gold += L)
												: (f.gold = L)),
										cc.myself.warehouseList.splice(C, 1)
									break
								}
						this.resetUI(),
							cc.myself.showPre('pre/equipSmeltSuccess', {
								jname: 'EquipSmeltSuccess',
								data: { rewardList: f },
							})
					},
					close: function () {
						this.node.destroy(),
							(cc
								.find('Canvas')
								.getComponent('Main').createEquipPageNum = 0),
							cc
								.find('Canvas')
								.getComponent('Main')
								.resetEquipUI(),
							cc
								.find('Canvas')
								.getComponent('Main')
								.feedbackBtnShow()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		EventStop: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'ff5efDBvt5L3YxbkKsVprnx', 'EventStop'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {
							this.node.on(
								cc.Node.EventType.TOUCH_START,
								this.stop,
								this,
								!0
							),
								this.node.on(
									cc.Node.EventType.TOUCH_MOVE,
									this.stop,
									this,
									!0
								),
								this.node.on(
									cc.Node.EventType.TOUCH_END,
									this.stop,
									this,
									!0
								)
						},
						start: function () {},
						stop: function (f) {
							f.stopPropagation()
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		FireAtk: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '4a276rHicBEMZCakigrlGDr', 'FireAtk')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						;(this.fireTime = 5),
							(this.time = 0),
							(this.isOver = !1)
					},
					init: function (f) {
						;(this.mnode = f.node),
							(this.tnode = f.tnode),
							(this.atkPower = f.atkPower || 250),
							(this.dir = f.dir),
							this.moveLine()
					},
					moveLine: function () {
						var f = this.mnode,
							v = this.tnode,
							C = cc.v2(v.x, v.y).sub(cc.v2(f.x, f.y))
						C = C.rotate((Math.PI / 180) * this.dir)
						var _ = (180 * Math.atan2(C.y, C.x)) / Math.PI
						;(_ = 360 - _ + 90),
							(this.node.getChildByName('icon').angle = _)
						var w = C.mag() / b.gameSetting.danmuMoveSpeed / 60
						this.node.runAction(
							cc.sequence(
								cc.moveBy(w, C),
								cc.callFunc(
									function () {
										;(this.isFiring = !0),
											(this.node.getChildByName(
												'icon'
											).active = !1),
											(this.node.getChildByName(
												'line'
											).active = !0)
									}.bind(this)
								)
							)
						)
					},
					getAtkPower: function () {
						return this.atkPower
					},
					update: function (f) {
						cc
							.find('Canvas')
							.getComponent('Game')
							.getGameIsOver() ||
							cc
								.find('Canvas')
								.getComponent('Game')
								.getGamePause() ||
							(this.isFiring &&
								((this.time += f),
								this.time >= this.fireTime &&
									(this.isOver ||
										((this.isOver = !0),
										this.node.destroy()))))
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		FreeBox: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '31528qUQsBAkLPwxhL25n1g', 'FreeBox')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						cc.myself.scaleToShow(this.node), this.resetUI()
					},
					resetUI: function () {
						var f =
							_.gameSetting.dailySeeVideoGetBoxMaxNum -
							cc.myself.dailySeeVideoGetBoxNum
						this.node
							.getChildByName('di')
							.getChildByName('content')
							.getChildByName('health_2')
							.getChildByName('chance')
							.getComponent(
								cc.Label
							).string = Lq.lang('今日剩余次数', {
							data: { num: f },
						})
					},
					diamondBuy: function () {
						cc.myself.diamond < 100
							? cc.myself.tips(Lq.lang('钻石不足'))
							: ((cc.myself.diamond -= 100),
							  cc.myself.setLocalData(
									'diamond',
									cc.myself.diamond
							  ),
							  cc
									.find('Canvas')
									.getComponent('Main')
									.openFreeBigBox(),
							  this.resetUI())
					},
					video: function () {
						if (
							_.gameSetting.dailySeeVideoGetBoxMaxNum -
								cc.myself.dailySeeVideoGetBoxNum <=
							0
						)
							cc.myself.tips(Lq.lang('今天视频次数已经用完'))
						else {
							var f = this
							b.default.showRewardedAd(function () {
								;(cc.myself.dailySeeVideoGetBoxNum += 1),
									cc.myself.setLocalData(
										'dailySeeVideoGetBoxNum',
										cc.myself.dailySeeVideoGetBoxNum
									),
									(cc.myself.dailySeeVideoGetBoxTime = cc.myself.getTime()),
									cc.myself.setLocalData(
										'dailySeeVideoGetBoxTime',
										cc.myself.dailySeeVideoGetBoxTime
									),
									cc
										.find('Canvas')
										.getComponent('Main')
										.openFreeBigBox(),
									f.resetUI()
							})
						}
					},
					close: function () {
						this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		GamePause: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '7f2d9O6tzhFU7L1981VlnED', 'GamePause')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						;(this.buffNode = this.node.getChildByName('buffNode')),
							(this.gameComponent = cc
								.find('Canvas')
								.getComponent('Game')),
							this.gameComponent.setGamePause(!0)
						for (var f = 0; f < cc.myself.addBuffList.length; f++) {
							var v = cc.instantiate(this.buffNode)
							cc.myself.asyncShowImage(
								v
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								_.buffConf[cc.myself.addBuffList[f]].icon
							),
								this.node
									.getChildByName('scrollview')
									.getChildByName('content')
									.addChild(v)
						}
					},
					backHome: function () {
						if (cc.find('Canvas').getComponent('Game').isGuide)
							cc.myself.tips(Lq.lang('新手地图不能返回主城'))
						else if (
							cc
								.find('Canvas')
								.getComponent('Game')
								.player.getComponent('Player').addingExp
						)
							cc.myself.tips(Lq.lang('请等待经验结算完毕'))
						else {
							switch (Lq.pfName) {
								case 'vigoo':
									b.default.showScreenAd({ node: '返回首页' })
							}
							this.gameComponent.getGamePauseData(),
								cc.director.loadScene('MainScene')
						}
					},
					gameResume: function () {
						this.close()
					},
					close: function () {
						this.gameComponent.setGamePause(!1), this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		Game: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '280c3rsZJJKnZ9RqbALVwtK', 'Game')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {
						Rocker: { type: cc.Node, default: null },
						bulletNode: { type: cc.Prefab, default: null },
						enemyAtkNode: { type: cc.Prefab, default: null },
						subPlayerNode: cc.Prefab,
						hitLabelNode: cc.Prefab,
						hitWallSpine: cc.Prefab,
						mapNormal: cc.Prefab,
						obstacles0: cc.Prefab,
						obstacles1: cc.Prefab,
						obstacles2: cc.Prefab,
						obstacles3: cc.Prefab,
						flyGoldNode: cc.Prefab,
						flyDiamondNode: cc.Prefab,
						cpNode: { type: cc.Prefab, default: null },
						discription: cc.Prefab,
						angleNode: cc.Prefab,
						demonNode: cc.Prefab,
						turntableNode: cc.Prefab,
						guideLine: cc.Prefab,
						enemyDeadSpine: cc.Prefab,
					},
					onLoad: function () {
						;(cc.director.getCollisionManager().enabled = !0),
							(this.firstInitMap = !0),
							(this.firstInGame = !0),
							(this.isGuide = !1),
							(this.floorNum = cc.myself.pauseData.floorNum || 0),
							(this.playerWeaponIcon = 'chuizi')
						for (
							var f = 0;
							f < cc.myself.warehouseList.length;
							f++
						) {
							var v = cc.myself.warehouseList[f]
							if (v.wear) {
								var C = _.weaponConf[v.id]
								if ('weapon' == C.type) {
									C.weaponIcon &&
										(this.playerWeaponIcon = C.weaponIcon)
									break
								}
							}
						}
					},
					start: function () {
						var f = this
						;(this.gamePause = !1),
							(this.overAction = !1),
							(this.nowPlayMapList = []),
							(this.enemyList = this.node.getChildByName(
								'enemyList'
							)),
							(this.bulletList = this.node.getChildByName(
								'bulletList'
							)),
							(this.playerList = this.node.getChildByName(
								'playerList'
							)),
							(this.ui = this.node.getChildByName('ui')),
							(this.map = this.node.getChildByName('map')),
							(this.obstaclesList = this.node.getChildByName(
								'obstaclesList'
							)),
							(this.player = this.playerList
								.getChildByName('gamePlayer')
								.getChildByName('player')),
							this.player
								.getComponent('sp.Skeleton')
								.setAnimation(1, 'bei_zou', !0),
							this.player
								.getComponent('sp.Skeleton')
								.setSkin(this.playerWeaponIcon),
							(this.playerImgType = 'bei_zou'),
							(this.bigMapConf =
								_.bigMapConf[cc.myself.bigMapNum - 1]),
							cc.myself.bigMapNum > _.bigMapConf.length &&
								(this.bigMapConf =
									_.bigMapConf[_.bigMapConf.length - 1]),
							this.isGuide &&
								(this.bigMapConf = _.gameSetting.guideMapConf),
							this.touchOn(),
							this.resetGameData(),
							(this.bulletPool = new cc.NodePool()),
							(this.enemyAtkPool = new cc.NodePool()),
							(this.hitLabelPool = new cc.NodePool()),
							(this.hitWallPool = new cc.NodePool()),
							(this.obstacles0Pool = new cc.NodePool()),
							(this.flyGoldPool = new cc.NodePool())
						for (var v = 0; v < 300; v++) {
							var C = cc.instantiate(this.bulletNode)
							this.bulletPool.put(C)
							var b = cc.instantiate(this.enemyAtkNode)
							this.enemyAtkPool.put(b)
							var w = cc.instantiate(this.hitLabelNode)
							this.hitLabelPool.put(w)
						}
						for (var N = 0; N < 100; N++) {
							var k = cc.instantiate(this.obstacles0)
							this.obstacles0Pool.put(k)
							var L = cc.instantiate(this.flyGoldNode)
							this.flyGoldPool.put(L)
						}
						this.initMap()
						var B = this.node
								.getChildByName('ui')
								.getChildByName('top')
								.getChildByName('scrollview')
								.getChildByName('content'),
							S = cc.myself.getWorkmateCp()
						for (var M in S)
							if (S[M] >= _.trammelsConf[M].data.need[0]) {
								var I = cc.instantiate(this.cpNode)
								cc.myself.asyncShowImage(
									I.getChildByName('cp_1')
										.getChildByName('icon')
										.getComponent(cc.Sprite),
									_.trammelsConf[M].icon
								),
									S[M] >= _.trammelsConf[M].data.need[1] &&
										((I.getChildByName('cp_1')
											.getChildByName('condition')
											.getChildByName('bar_2')
											.getChildByName(
												'buff2'
											).active = !0),
										(I.getChildByName('cp_1')
											.getChildByName('condition')
											.getChildByName('word')
											.getComponent(cc.Label).string =
											S[M] +
											'/' +
											_.trammelsConf[M].data.need[1])),
									(I.getChildByName('cp_1')
										.getChildByName('condition')
										.getChildByName('word')
										.getComponent(cc.Label).string =
										S[M] +
										'/' +
										_.trammelsConf[M].data.need[1]),
									B.addChild(I)
								var x = I.getComponent(cc.Button).clickEvents[0]
								;(x.target = this.node),
									(x.component = 'Game'),
									(x.handler = 'showDis'),
									(x.customEventData = M)
							}
						this.player
							.getComponent('sp.Skeleton')
							.setCompleteListener(function (v, C) {
								var b = (v.animation
									? v.animation.name
									: ''
								).split('_')
								if (
									'gongji1' === b[1] ||
									'gongji2' === b[1] ||
									'gongji' === b[1]
								) {
									if (f.dir.mag() < 0.5)
										return void f.changePlayerImg(
											f.getBulletDp(f.player)
										)
									f.changePlayerImg(f.dir)
								}
							})
					},
					startGuide: function () {
						;(this.isGuide = !0), (this.floorNum = 1)
					},
					touchOn: function () {
						this.ui.on(
							cc.Node.EventType.TOUCH_START,
							function (f) {
								if (
									(this.disNode &&
										(this.disNode.destroy(),
										(this.disNode = null)),
									!this.overAction)
								) {
									;(this.isLockEnemy = !1),
										(this.playerImgShowNum = 0),
										(this.isMoving = !0)
									var v = f.getLocation()
									;(this.Rocker.parent.active = !0),
										(this.Rocker.parent.x =
											v.x - cc.winSize.width / 2),
										(this.Rocker.parent.y =
											v.y - cc.winSize.height / 2)
									var C = this.Rocker.parent.convertToNodeSpaceAR(
											v
										),
										b = C.mag()
									b &&
										((this.dir.x = C.x / this.Max_r),
										(this.dir.y = C.y / this.Max_r),
										b > this.Max_r &&
											((this.dir.x = C.x / b),
											(this.dir.y = C.y / b),
											(C.x = (this.Max_r * C.x) / b),
											(C.y = (this.Max_r * C.y) / b))),
										this.Rocker.setPosition(C)
								}
							},
							this
						),
							this.ui.on(
								cc.Node.EventType.TOUCH_MOVE,
								function (f) {
									if (!this.overAction) {
										var v = f.getLocation(),
											C = this.Rocker.parent.convertToNodeSpaceAR(
												v
											),
											b = C.mag()
										b &&
											((this.dir.x = C.x / this.Max_r),
											(this.dir.y = C.y / this.Max_r),
											b > this.Max_r &&
												((this.dir.x = C.x / b),
												(this.dir.y = C.y / b),
												(C.x = (this.Max_r * C.x) / b),
												(C.y =
													(this.Max_r * C.y) / b))),
											this.Rocker.setPosition(C)
									}
								},
								this
							),
							this.ui.on(
								cc.Node.EventType.TOUCH_END,
								function (f) {
									;(this.playerImgShowNum = 0),
										(this.isMoving = !1),
										this.Rocker.setPosition(cc.v2(0, 0)),
										(this.dir = cc.v2(0, 0)),
										(this.Rocker.parent.active = !1)
								},
								this
							),
							this.ui.on(
								cc.Node.EventType.TOUCH_CANCEL,
								function (f) {
									;(this.playerImgShowNum = 0),
										(this.isMoving = !1),
										this.Rocker.setPosition(cc.v2(0, 0)),
										(this.dir = cc.v2(0, 0)),
										(this.Rocker.parent.active = !1)
								},
								this
							)
					},
					showDis: function (f, v) {
						this.disNode &&
							(this.disNode.destroy(), (this.disNode = null))
						var C = f.target.parent.parent.parent,
							b = _.trammelsConf[v].ins,
							w = f.target.parent.convertToWorldSpaceAR(
								f.target.position
							)
						;(w.x -= cc.winSize.width / 2),
							(w.y -= cc.winSize.height / 2)
						var N = null
						w.x >= 0 && (N = !0)
						var k = cc.instantiate(this.discription)
						k.getComponent('Discription').init({ str: b, fan: N }),
							(k.position = cc.v2(w.x, w.y + 40)),
							C.addChild(k),
							(this.disNode = k)
					},
					getMapId: function () {
						for (
							var f = this.bigMapConf.mapList, v = [], C = 0;
							C < f.length;
							C++
						) {
							for (
								var b = !1, _ = 0;
								_ < this.nowPlayMapList.length;
								_++
							)
								if (f[C] === this.nowPlayMapList[_]) {
									b = !0
									break
								}
							b || v.push(f[C])
						}
						return v[Math.floor(Math.random() * v.length)]
					},
					resetGameData: function () {
						if (
							((this.floorReward = []),
							(this.Max_r = 60),
							this.isGuide)
						) {
							var f = this.bigMapConf.mapList[this.floorNum - 1]
							;(this.conf = _.mapConf[f]),
								5 == this.floorNum
									? ((this.node
											.getChildByName('ui')
											.getChildByName('top')
											.getChildByName(
												'bosshp'
											).active = !0),
									  (this.node
											.getChildByName('ui')
											.getChildByName('top')
											.getChildByName('bosshp')
											.getChildByName('progress')
											.getChildByName('gqjd_2')
											.getChildByName('gqjd_1')
											.getComponent(
												cc.Sprite
											).fillRange = 1))
									: (this.node
											.getChildByName('ui')
											.getChildByName('top')
											.getChildByName(
												'bosshp'
											).active = !1)
						} else if (this.isAngle || 0 == this.floorNum)
							this.conf = _.gameSetting.angleMapConf
						else {
							var v = this.getMapId()
							;(this.conf = _.mapConf[v]),
								this.floorNum % 10 == 0 && this.floorNum > 0
									? ((this.conf = _.gameSetting.BossMapConf),
									  (this.node
											.getChildByName('ui')
											.getChildByName('top')
											.getChildByName(
												'bosshp'
											).active = !0),
									  (this.node
											.getChildByName('ui')
											.getChildByName('top')
											.getChildByName('bosshp')
											.getChildByName('progress')
											.getChildByName('gqjd_2')
											.getChildByName('gqjd_1')
											.getComponent(
												cc.Sprite
											).fillRange = 1))
									: (this.node
											.getChildByName('ui')
											.getChildByName('top')
											.getChildByName(
												'bosshp'
											).active = !1)
						}
						;(this.isMoving = !1),
							(this.Rocker.x = -0),
							(this.Rocker.y = -0),
							(this.dir = cc.v2(0, 0)),
							(this.playerImgShowNum = 0),
							(this.playerImgName = 's00'),
							(this.isLockEnemy = !1),
							(this.checkBulletTime = 0),
							(this.playerPosList = []),
							(this.playerPosPointer = 0),
							(this.noEnemey = !1),
							(this.goDoor = !1),
							(this.checkMiaoEnemyTime = 0),
							cc.myself.aldOnStart({
								stageId:
									cc.myself.bigMapNum + '.' + this.floorNum,
								stageName:
									'地图' +
									cc.myself.bigMapNum +
									'-第' +
									this.floorNum +
									'层',
							})
					},
					checkBossHp: function () {
						if (this.isGuide) {
							if (this.floorNum % 5 != 0) return
						} else if (this.floorNum % 10 != 0) return
						for (
							var f = null, v = 0;
							v < this.playerList.children.length;
							v++
						)
							if ('enemy' == this.playerList.children[v].name) {
								f = this.playerList.children[v]
								break
							}
						f &&
							(this.node
								.getChildByName('ui')
								.getChildByName('top')
								.getChildByName('bosshp')
								.getChildByName('progress')
								.getChildByName('gqjd_2')
								.getChildByName('gqjd_1')
								.getComponent(
									cc.Sprite
								).fillRange = f
								.getComponent('Enemy_Normal')
								.getHpPer())
					},
					checkEnemyGps: function () {
						for (
							var f, v = 99999, C = 0;
							C < this.playerList.children.length;
							C++
						) {
							var b = this.playerList.children[C]
							if (
								'enemy' === b.name &&
								Math.abs(this.player.x - b.x) <=
									cc.winSize.width + b.width / 2 &&
								Math.abs(this.player.y - b.y) <
									cc.winSize.height + b.height / 2
							) {
								var _ = cc
									.v2(this.player.x, this.player.y)
									.sub(cc.v2(b.x, b.y))
									.mag()
								_ < v && ((v = _), (f = b))
							}
						}
						this.lockEnemyNode &&
							(this.lockEnemyNode.isValid
								? this.lockEnemyNode
										.getComponent('Enemy_Normal')
										.offMiao()
								: (this.lockEnemyNode = null)),
							f &&
								(f.getComponent('Enemy_Normal').onMiao(),
								(this.lockEnemyNode = f))
					},
					getBulletDp: function (f) {
						for (
							var v, C, b = 99999, _ = 0;
							_ < this.playerList.children.length;
							_++
						) {
							var w = this.playerList.children[_]
							if (
								'enemy' === w.name &&
								Math.abs(f.x - w.x) <=
									cc.winSize.width + w.width / 2 &&
								Math.abs(f.y - w.y) <
									cc.winSize.height / 2 + w.height / 2
							) {
								var N = cc
									.v2(f.x, f.y)
									.sub(cc.v2(w.x, w.y))
									.mag()
								N < b && ((b = N), (C = w))
							}
						}
						return (
							C && (v = cc.v2(C.x, C.y).sub(cc.v2(f.x, f.y))), v
						)
					},
					getBulletDpWithUUID: function (f, v, C) {
						for (
							var b, _, w = 99999, N = 0;
							N < this.playerList.children.length;
							N++
						) {
							var k = this.playerList.children[N]
							if (
								'enemy' === k.name &&
								k.uuid != v &&
								Math.abs(f.x - k.x) <= 144 &&
								Math.abs(f.y - k.y) < 144
							) {
								var L = cc
									.v2(f.x, f.y)
									.sub(cc.v2(k.x, k.y))
									.mag()
								L < w && ((w = L), (_ = k))
							}
						}
						return (
							_ && (b = cc.v2(_.x, _.y).sub(cc.v2(C.x, C.y))), b
						)
					},
					createBullet: function (f) {
						var v = this,
							C = this,
							b = f.dp
						if (b) {
							var _ = 1
							f.arrowNum && (_ += f.arrowNum)
							var w = 0,
								N = setInterval(function () {
									if (w >= _) return clearInterval(N)
									var k = 1
									f.forwardArrow && (k += f.forwardArrow)
									for (
										var c = function (_) {
												v.scheduleOnce(function () {
													C.createBulletNode(
														f,
														b,
														_,
														k
													)
												}, 0.01)
											},
											L = 0;
										L < k;
										L++
									)
										c(L)
									if (f.diagonalArrow)
										for (
											var h = function (_) {
													v.scheduleOnce(function () {
														C.createBulletNode(
															f,
															b.rotate(
																(Math.PI /
																	180) *
																	45
															),
															_,
															f.diagonalArrow
														),
															C.createBulletNode(
																f,
																b.rotate(
																	(Math.PI /
																		180) *
																		-45
																),
																_,
																f.diagonalArrow
															)
													}, 0.01)
												},
												B = 0;
											B < f.diagonalArrow;
											B++
										)
											h(B)
									if (f.sidedArrow)
										for (
											var d = function (_) {
													v.scheduleOnce(function () {
														C.createBulletNode(
															f,
															b.rotate(
																(Math.PI /
																	180) *
																	90
															),
															_,
															f.sidedArrow
														),
															C.createBulletNode(
																f,
																b.rotate(
																	(Math.PI /
																		180) *
																		-90
																),
																_,
																f.sidedArrow
															)
													}, 0.01)
												},
												S = 0;
											S < f.sidedArrow;
											S++
										)
											d(S)
									if (f.backwardArrow)
										for (
											var m = function (_) {
													v.scheduleOnce(function () {
														C.createBulletNode(
															f,
															b.rotate(
																(Math.PI /
																	180) *
																	180
															),
															_,
															f.backwardArrow
														)
													}, 0.01)
												},
												M = 0;
											M < f.backwardArrow;
											M++
										)
											m(M)
									w++
								}, 100)
						}
					},
					createBulletNode: function (f, v, C, b) {
						var _ = null
						;(_ =
							this.bulletPool.size() > 0
								? this.bulletPool.get()
								: cc.instantiate(this.bulletNode)),
							f.icon &&
								cc.myself.asyncShowImage(
									_.getChildByName('icon').getComponent(
										cc.Sprite
									),
									f.icon
								)
						var w = _.getChildByName('icon').width,
							N = (-b / 2) * w + w / 2 + C * w
						f.pos && ((_.x = f.pos.x), (_.y = f.pos.y))
						var k = Math.atan2(v.y, v.x),
							L = (180 * k) / Math.PI
						;(L = 360 - L + 90),
							(_.x += N * Math.cos(k - Math.PI / 2)),
							(_.y += N * Math.sin(k - Math.PI / 2))
						var B = {
							dp: v,
							atkPower: f.atkPower,
							penetrate: f.penetrate,
							rebound: f.rebound,
							catapult: f.catapult,
							icyIce: f.icyIce,
							fire: f.fire,
							poison: f.poison,
							crit: f.crit,
							isSub: f.isSub,
						}
						_.getComponent('Bullet').init(B),
							(_.name = 'bullet'),
							this.bulletList.addChild(_)
					},
					createEnemy: function (f, v, C, b) {
						var _ = {
							pos: { x: v, y: C },
							enemyId: f,
							floorNum: this.floorNum,
						}
						b && Object.assign(_, b),
							cc.loader.loadRes(
								'pre/enemy/normal',
								cc.Prefab,
								function (v, C) {
									var b = cc.instantiate(C)
									;(b.name = 'enemy'),
										b.getComponent('Enemy_Normal').init(_),
										b
											.addComponent('Enemy_Guai')
											.init({
												id: f,
												floorNum: this.floorNum,
											}),
										this.playerList.addChild(b)
								}.bind(this)
							)
					},
					createEnemyAtk: function (f, v, C) {
						var b = this,
							_ = this,
							w = cc
								.v2(this.player.x, this.player.y)
								.sub(cc.v2(f.x, f.y))
						if (v.dirData) {
							;(v.pos = f.position), (v.atkPower = C)
							for (
								var l = function (f) {
										b.scheduleOnce(function () {
											_.createEnemyAtkNode(
												v,
												w.rotate(
													(Math.PI / 180) *
														v.dirData[f]
												),
												1,
												1
											)
										}, 0.01)
									},
									N = 0;
								N < v.dirData.length;
								N++
							)
								l(N)
						}
					},
					createEnemyAtkNode: function (f, v, C, b) {
						var _ = null
						;(_ =
							this.enemyAtkPool.size() > 0
								? this.enemyAtkPool.get()
								: cc.instantiate(this.enemyAtkNode)),
							f.icon &&
								cc.myself.asyncShowImage(
									_.getChildByName('icon').getComponent(
										cc.Sprite
									),
									f.icon
								),
							f.bulletIcon &&
								cc.myself.asyncShowImage(
									_.getChildByName('icon').getComponent(
										cc.Sprite
									),
									f.bulletIcon
								),
							f.pos && ((_.x = f.pos.x), (_.y = f.pos.y))
						var w = {
							dp: v,
							atkPower: f.atkPower,
							penetrate: f.penetrate,
							rebound: f.rebound,
							catapult: f.catapult,
							icyIce: f.icyIce,
							fire: f.fire,
							poison: f.poison,
							hitWall: f.hitWall,
							speAdd: f.speAdd,
						}
						_.getComponent('EnemyAtk').init(w),
							(_.name = 'EnemyAtk'),
							this.bulletList.addChild(_)
					},
					changePlayerImg: function (f) {
						if (f) {
							var v = (180 * Math.atan2(f.y, f.x)) / Math.PI
							v = 360 - v + 90
							var C,
								b,
								_ = 0
							switch (
								((v %= 360) <= 45 || v > 315
									? (_ = 0)
									: v > 45 && v <= 135
									? (_ = 1)
									: v > 135 && v <= 225
									? (_ = 2)
									: v > 225 && v <= 315 && (_ = 3),
								_)
							) {
								case 0:
									C = 'bei'
									break
								case 1:
									C = 'you'
									break
								case 2:
									C = 'zheng'
									break
								case 3:
									C = 'zuo'
							}
							if (
								((b = this.isMoving ? 'zou' : 'stand'), C && b)
							) {
								var w = C + '_' + b
								this.playerImgType != w &&
									((this.playerImgType = w),
									this.player
										.getComponent('sp.Skeleton')
										.setAnimation(
											1,
											this.playerImgType,
											!0
										))
							}
						} else if ('' != this.playerImgType) {
							var N = this.playerImgType.split('_')
							'stand' != N[1] &&
								((this.playerImgType = N[0] + '_stand'),
								this.player
									.getComponent('sp.Skeleton')
									.setAnimation(1, this.playerImgType, !0))
						}
					},
					resetPlayerImg: function () {
						if (this.playerImgShowNum % 3 == 0) {
							var f = this.playerImgShowNum % 24
							f < 10 && (f = '0' + f),
								this.isMoving
									? cc.myself.asyncShowImage(
											this.player.getComponent(cc.Sprite),
											'player/run/ylx_run_' +
												this.playerImgName +
												f
									  )
									: cc.myself.asyncShowImage(
											this.player.getComponent(cc.Sprite),
											'player/standby/ylx_standby_' +
												this.playerImgName +
												f
									  )
						}
					},
					resetCameraPos: function () {
						this.node.getChildByName(
							'Main Camera'
						).y = this.player.y
					},
					checkRiverImg: function (f, v) {
						var C = !1,
							b = !1,
							_ = !1,
							w = !1,
							N = this.getMapTypeByMapPos(f, v).split('-'),
							k = (parseInt(N[0]), N[1]),
							L = this.getMapTypeByMapPos(f, v - 1)
						if (0 != L && -1 != L) {
							var B = L.split('-'),
								S = parseInt(B[0]),
								M = B[1]
							2 == S && k == M && (C = !0)
						}
						var I = this.getMapTypeByMapPos(f, v + 1)
						if (0 != I && -1 != I) {
							var x = I.split('-'),
								q = parseInt(x[0]),
								P = x[1]
							2 == q && k == P && (w = !0)
						}
						var A = this.getMapTypeByMapPos(f - 1, v)
						if (0 != A && -1 != A) {
							var T = A.split('-'),
								D = parseInt(T[0]),
								R = T[1]
							2 == D && k == R && (b = !0)
						}
						var E = this.getMapTypeByMapPos(f + 1, v)
						if (0 != E && -1 != E) {
							var O = E.split('-'),
								F = parseInt(O[0]),
								G = O[1]
							2 == F && k == G && (_ = !0)
						}
						var H = 1,
							V = 1
						return (
							C && (V = w ? 2 : 3),
							w && (V = C ? 2 : 1),
							b && (_ ? (V = 4) : ((V = 5), (H = -1))),
							_ && (V = b ? 4 : 5),
							{ num: V, sx: H }
						)
					},
					initMap: function () {
						var f = this,
							v = this
						this.map.removeAllChildren(),
							v.player.parent.removeFromParent()
						for (
							var C = this.playerList.children.length - 1;
							C >= 0;
							C--
						)
							'obstacles' == this.playerList.children[C].name &&
								this.playerList.children[C].destroy()
						this.removeAngle(),
							this.removeDemon(),
							(this.playerPosList = []),
							(this.playerPosPointer = 0)
						var b = this.conf,
							w =
								cc.myself.bigMapNum %
								_.gameSetting.maxBigMapSucaiNum
						0 == w && (w = 1)
						var N =
								(cc.myself.bigMapNum %
									_.gameSetting.maxBigMapZhangaiNum) +
								1,
							k = 1
						cc.myself.bigMapNum > 0 &&
							(k =
								_.gameSetting.dibiaoList[
									(cc.myself.bigMapNum - 1) % 4
								])
						var L = new cc.Node(),
							B = L.addComponent(cc.Sprite)
						cc.myself.asyncShowImage(B, 'ui/bigMap/dibiao_' + k, [
							750,
							48 * b.height + 96,
						]),
							this.map.addChild(L),
							this.firstInitMap &&
								(cc.loader.loadRes(
									'pre/bigMap/bigMapUp_' + w,
									cc.Prefab,
									function (f, v) {
										var C = cc.instantiate(v)
										;(C.y = (b.height / 2) * 48 + 24),
											(C.name = 'bigMapUp'),
											(C.getChildByName(
												'floor'
											).getComponent(cc.Label).string =
												this.floorNum + 1),
											this.map.addChild(C),
											this.isGuide
												? 1 == this.floorNum &&
												  this.checkIsWin()
												: 0 == this.floorNum &&
												  this.checkIsWin()
									}.bind(this)
								),
								cc.loader.loadRes(
									'pre/bigMap/bigMapDown_' + w,
									cc.Prefab,
									function (f, v) {
										var C = cc.instantiate(v)
										;(C.y = (-b.height / 2) * 48 - 24),
											this.map.addChild(C)
									}.bind(this)
								))
						var S,
							M = 0,
							I = Math.floor(this.floorNum / 5),
							x = this.bigMapConf.enemyNumList
						this.isGuide
							? (S = this.bigMapConf.enemyNumList[
									this.floorNum - 1
							  ])
							: ((S = I >= x.length ? x[x.length - 1] : x[I]),
							  this.floorNum % 10 == 0 && (S = 1),
							  0 == this.floorNum && (S = 0))
						var q = []
						if (S > 0) {
							for (; q.length < S; ) {
								for (
									var P = Math.floor(10 * Math.random()) + 1,
										A = !1,
										T = 0;
									T < q.length;
									T++
								)
									if (q[T] == P) {
										A = !0
										break
									}
								A || q.push(P)
							}
							this.floorNum % 10 == 0 && (q = [1]),
								this.isGuide &&
									this.floorNum % 5 == 0 &&
									(q = [1])
						}
						this.nowFloorEenemyNum = S
						for (var D = 0, R = 0; R < b.height; R++) {
							b.width % 2 == 0 && M++
							for (var E = 0; E < b.width; E++) {
								var O = E + ',' + R,
									F = void 0
								if (this.firstInitMap) {
									;((F = cc.instantiate(this.mapNormal)).x =
										(b.width / 2) * 48 - 24 - 48 * E),
										(F.y =
											(b.height / 2) * 48 - 24 - 48 * R),
										(F.name = O),
										(F.getChildByName('label').getComponent(
											cc.Label
										).string = M)
									var G = ++M % 2
									0 == G && (G = 2),
										cc.myself.asyncShowImage(
											F.getChildByName(
												'icon'
											).getComponent(cc.Sprite),
											'ui/bigMap/qipan_' + G
										),
										this.map.addChild(F)
								}
								if (b.data[O]) {
									var H = b.data[O].split('-'),
										V = parseInt(H[0]),
										j = H[1]
									if (9 == V) {
										if ((D++, -1 != q.indexOf(D)))
											if (this.isGuide)
												if (this.floorNum % 5 == 0) {
													var U = this.bigMapConf
														.bossIdList[
														this.floorNum / 5 - 1
													]
													this.createEnemy(U, E, R)
												} else {
													var W = this.bigMapConf
															.enemyIdList,
														z =
															W[
																Math.floor(
																	Math.random() *
																		W.length
																)
															]
													this.createEnemy(z, E, R)
												}
											else if (this.floorNum % 10 == 0) {
												var Y = void 0
												if (
													this.bigMapConf.bossIdList
														.length > 3
												) {
													var J = this.bigMapConf
														.bossIdList
													Y =
														J[
															Math.floor(
																Math.random() *
																	J.length
															)
														]
												} else
													Y = this.bigMapConf
														.bossIdList[
														this.floorNum / 10 - 1
													]
												this.createEnemy(Y, E, R)
											} else {
												var X = this.bigMapConf
														.enemyIdList,
													K =
														X[
															Math.floor(
																Math.random() *
																	X.length
															)
														]
												this.createEnemy(K, E, R)
											}
									} else if (1 == V) {
										var Q = cc.myself.changeForBuild(j),
											$ =
												Math.floor(3 * Math.random()) +
												1,
											Z =
												'ui/bigMap/zhangaiwu' +
												N +
												'_' +
												V +
												'_' +
												Q +
												'_',
											ee = cc.instantiate(this.obstacles1)
										;(ee.x =
											(b.width / 2) * 48 - 24 - 48 * E),
											(ee.y =
												(b.height / 2) * 48 -
												24 -
												48 * R),
											cc.myself.asyncShowImage(
												ee
													.getChildByName('shadow')
													.getComponent(cc.Sprite),
												Z + 'y'
											),
											cc.myself.asyncShowImage(
												ee
													.getChildByName('icon')
													.getComponent(cc.Sprite),
												Z + $
											),
											(ee.zIndex = M),
											(ee.name = 'obstacles'),
											this.playerList.addChild(ee)
									} else if (2 == V) {
										var te = cc.myself.changeForBuild(j),
											ie = this.checkRiverImg(E, R),
											ae = ie.num,
											oe =
												'ui/bigMap/zhangaiwu' +
												N +
												'_' +
												V +
												'_' +
												te +
												'_',
											le = cc.instantiate(this.obstacles2)
										;(le.x =
											(b.width / 2) * 48 - 24 - 48 * E),
											(le.y =
												(b.height / 2) * 48 -
												24 -
												48 * R),
											cc.myself.asyncShowImage(
												le
													.getChildByName('icon')
													.getComponent(cc.Sprite),
												oe + ae
											),
											(le.getChildByName('icon').scaleX =
												ie.sx),
											(le.zIndex = M),
											(le.name = 'obstacles'),
											this.playerList.addChild(le)
									} else if (3 == V) {
										var se = cc.myself.changeForBuild(j),
											ce =
												Math.floor(3 * Math.random()) +
												1,
											re =
												'ui/bigMap/zhangaiwu' +
												N +
												'_' +
												V +
												'_' +
												se +
												'_',
											he = cc.instantiate(this.obstacles3)
										;(he.x =
											(b.width / 2) * 48 - 24 - 48 * E),
											(he.y =
												(b.height / 2) * 48 -
												24 -
												48 * R),
											cc.myself.asyncShowImage(
												he
													.getChildByName('icon')
													.getComponent(cc.Sprite),
												re + ce
											),
											this.map.addChild(he)
									} else if (F) {
										var pe = _.gameSetting.colorList[V]
										;(F.getChildByName(
											'icon'
										).color = cc.color(pe.r, pe.g, pe.b)),
											(F.getComponent(
												cc.BoxCollider
											).tag = 1e3 + parseInt(b.data[O]))
									}
								}
							}
						}
						if (this.firstInitMap) {
							for (var de = 0, ue = 0; ue < b.height; ue++) {
								var me = ++de % 4
								0 == me && (me = 4)
								var ge = null
								;(ge =
									this.obstacles0Pool.size() > 0
										? this.obstacles0Pool.get()
										: cc.instantiate(this.obstacles0)),
									cc.myself.asyncShowImage(
										ge
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										'ui/bigMap/bm2_' + me
									),
									(ge.x = (b.width / 2) * 48 + 12),
									(ge.y = (b.height / 2) * 48 - 24 - 48 * ue),
									(ge.name = 'obstacles0'),
									(ge.getComponent(
										cc.BoxCollider
									).tag = 1022),
									v.map.addChild(ge)
								var ye = null
								;(ye =
									this.obstacles0Pool.size() > 0
										? this.obstacles0Pool.get()
										: cc.instantiate(this.obstacles0)),
									cc.myself.asyncShowImage(
										ye
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										'ui/bigMap/bm2_' + me
									),
									(ye.x = (-b.width / 2) * 48 - 12),
									(ye.y = (b.height / 2) * 48 - 24 - 48 * ue),
									(ye.name = 'obstacles0'),
									(ye.scaleX = -1),
									(ye.getComponent(
										cc.BoxCollider
									).tag = 1024),
									v.map.addChild(ye)
							}
							de = 0
							for (var fe = 0; fe < b.width; fe++) {
								var ve = ++de % 4
								0 == ve && (ve = 4)
								var Ce = null
								;(Ce =
									this.obstacles0Pool.size() > 0
										? this.obstacles0Pool.get()
										: cc.instantiate(this.obstacles0)),
									cc.myself.asyncShowImage(
										Ce.getChildByName('icon').getComponent(
											cc.Sprite
										),
										'ui/bigMap/bm2_' + ve
									),
									(Ce.x = (b.width / 2) * 48 - 24 - 48 * fe),
									(Ce.y = (b.height / 2) * 48 + 12),
									(Ce.name = 'obstacles0'),
									(Ce.angle = 90),
									(Ce.getComponent(
										cc.BoxCollider
									).tag = 1023),
									v.map.addChild(Ce)
								var be = null
								;(be =
									this.obstacles0Pool.size() > 0
										? this.obstacles0Pool.get()
										: cc.instantiate(this.obstacles0)),
									cc.myself.asyncShowImage(
										be
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										'ui/bigMap/bm2_' + ve
									),
									(be.x = (b.width / 2) * 48 - 24 - 48 * fe),
									(be.y = (-b.height / 2) * 48 - 12),
									(be.name = 'obstacles0'),
									(be.angle = -90),
									(be.getComponent(
										cc.BoxCollider
									).tag = 1021),
									v.map.addChild(be)
							}
							for (
								var ne = function (v) {
										var C = new cc.Node(),
											_ = C.addComponent(cc.Sprite)
										cc.loader.loadRes(
											'ui/bigMap/bj2',
											function (f, v) {
												_.spriteFrame = new cc.SpriteFrame(
													v
												)
											}
										),
											0 == v
												? ((C.x =
														(b.width / 2) * 48 +
														12 -
														1),
												  (C.y =
														(b.height / 2) * 48 +
														12))
												: 1 == v
												? ((C.x =
														(b.width / 2) * 48 +
														12 -
														1),
												  (C.y =
														(-b.height / 2) * 48 -
														12),
												  (C.scaleY = -1))
												: 2 == v
												? ((C.x =
														(-b.width / 2) * 48 -
														12 +
														1),
												  (C.y =
														(b.height / 2) * 48 +
														12),
												  (C.scaleX = -1))
												: 3 == v &&
												  ((C.x =
														(-b.width / 2) * 48 -
														12 +
														1),
												  (C.y =
														(-b.height / 2) * 48 -
														12),
												  (C.scaleY = -1),
												  (C.scaleX = -1)),
											f.map.addChild(C)
									},
									_e = 0;
								_e < 4;
								_e++
							)
								ne(_e)
						}
						var we = Math.floor(b.width / 2),
							Ne = Math.floor(b.height - 1),
							ke = this.getPosByMapPos(we + ',' + Ne)
						if (
							((this.player.x = ke.x),
							(this.player.y = ke.y),
							cc.myself.workmateList.length > 0)
						)
							for (
								var Le = 0, Be = 0;
								Be < cc.myself.workmateList.length;
								Be++
							) {
								var Se = cc.myself.workmateList[Be]
								if (Se.wear) {
									var Me = _.workmateConf[Se.id],
										Ie = void 0
									this.playerList.getChildByName(
										Me.name + '_' + Se.guid
									)
										? (Ie = this.playerList.getChildByName(
												Me.name + '_' + Se.guid
										  ))
												.getComponent('SubPlayer')
												.setCubePos(we, Ne)
										: (((Ie = cc.instantiate(
												this.subPlayerNode
										  )).name = Me.name + '_' + Se.guid),
										  Ie.getComponent('SubPlayer').init({
												guid: Se.guid,
												x: we,
												y: Ne,
												id: Le + 1,
										  }),
										  this.playerList.addChild(Ie)),
										(Ie.x = ke.x),
										(Ie.y = ke.y),
										Le++
								}
							}
						if (
							(this.playerPosList.push({ x: we, y: Ne }),
							this.isAngle)
						) {
							;(this.isAngle = !1), (this.nowFloorEenemyNum = 0)
							var xe = cc.instantiate(this.angleNode),
								qe = this.getPosByMapPos(
									Math.floor(b.width / 2) +
										',' +
										Math.floor(3)
								)
							;(xe.x = qe.x),
								(xe.y = qe.y),
								(xe.name = 'angle'),
								this.playerList.addChild(xe),
								setTimeout(function () {
									v.checkIsWin()
								}, 2e3)
						}
						if (0 == cc.myself.bigMapNum && 1 == this.floorNum) {
							var Pe = cc.instantiate(this.guideLine)
							Pe.getComponent('GuideLine').init({
								height: b.height,
							}),
								this.map.addChild(Pe)
						}
						this.playerList.addChild(this.player.parent),
							this.resetCameraPos()
					},
					changeAllZIndex: function () {
						for (
							var f = 0;
							f < this.playerList.children.length;
							f++
						)
							this.playerList.children[f].name
					},
					getZIndexByMapPos: function (f, v) {
						return this.map.getChildByName(f + ',' + v)
							? parseInt(
									this.map
										.getChildByName(f + ',' + v)
										.getChildByName('label')
										.getComponent(cc.Label).string
							  )
							: 0
					},
					getMapTypeByPos: function (f, v) {
						if (this.conf) {
							for (var C = 0; C < this.conf.width; C++)
								for (var b = 0; b < this.conf.height; b++) {
									var _ = this.map.getChildByName(C + ',' + b)
									if (
										Math.abs(f - _.x) <= _.width / 2 &&
										Math.abs(v - _.y) <= _.height / 2
									) {
										if (this.conf.data[_.name]) {
											var w = this.conf.data[
												_.name
											].split(',')
											return 9 == parseInt(w[0]) ||
												3 == parseInt(w[0])
												? null
												: parseInt(w[0])
										}
										return this.conf.data[_.name]
									}
								}
							return -1
						}
					},
					getMapTypeByMapPos: function (f, v) {
						return this.conf.data[f + ',' + v]
							? this.conf.data[f + ',' + v]
							: f < 0 ||
							  v < 0 ||
							  f >= this.conf.width ||
							  v >= this.conf.height
							? -1
							: 0
					},
					getPosByMapPos: function (f) {
						return this.map.getChildByName(f)
							? this.map.getChildByName(f).position
							: null
					},
					getPosById: function (f) {
						if (f >= this.playerPosList.length)
							return this.playerPosList[0]
						var v = this.playerPosPointer
						return (
							this.playerPosPointer - f < 0 &&
								(v =
									this.playerPosList.length +
									this.playerPosPointer),
							this.playerPosList[v - f]
						)
					},
					getIsGuide: function () {
						return this.isGuide
					},
					getEnemyList: function () {
						return this.enemyList
					},
					getBulletList: function () {
						return this.bulletList
					},
					getPlayer: function () {
						return this.player
					},
					getPlayerPos: function () {
						return this.player.position
					},
					getPlayerPosList: function () {
						return {
							pos: this.playerPosList,
							pointer: this.playerPosPointer,
						}
					},
					getPlayerMapPos: function () {
						if (!this.conf) return null
						for (var f = 0; f < this.conf.width; f++)
							for (var v = 0; v < this.conf.height; v++) {
								var C = this.map.getChildByName(f + ',' + v)
								if (
									Math.abs(this.player.x - C.x) <=
										C.width / 2 &&
									Math.abs(this.player.y - C.y) <=
										C.height / 2
								)
									return C.name
							}
						return null
					},
					getPlayerMapZIndex: function () {
						if (!this.conf) return 0
						for (var f = 0; f < this.conf.width; f++)
							for (var v = 0; v < this.conf.height; v++) {
								var C = this.map.getChildByName(f + ',' + v)
								if (
									Math.abs(this.player.x - C.x) <=
										C.width / 2 &&
									Math.abs(this.player.y - C.y) <=
										C.height / 2
								)
									return parseInt(
										C.getChildByName('label').getComponent(
											cc.Label
										).string
									)
							}
						return 0
					},
					createHitWallSpine: function (f) {
						var v = null
						;((v =
							this.hitWallPool.size() > 0
								? this.hitWallPool.get()
								: cc.instantiate(this.hitWallSpine)).x = f.x),
							(v.y = f.y),
							this.bulletList.addChild(v)
					},
					putInHitWallPool: function (f) {
						this.hitWallPool.put(f)
					},
					putInBulletPool: function (f) {
						this.bulletPool.put(f)
					},
					putInEnemyAtkPool: function (f) {
						this.enemyAtkPool.put(f)
					},
					putInObstacles0Pool: function (f) {
						this.obstacles0Pool.put(f)
					},
					putInFlyGoldPool: function (f) {
						this.flyGoldPool.put(f)
					},
					createHitLabel: function (f) {
						var v = null
						;(v =
							this.hitLabelPool.size() > 0
								? this.hitLabelPool.get()
								: cc.instantiate(this.hitLabelNode)),
							f.str &&
								(v
									.getChildByName('label')
									.getComponent(cc.Label).string = f.str),
							f.color
								? (v.getChildByName('label').color = f.color)
								: (v.getChildByName('label').color = cc.color(
										'#FFFFFF'
								  )),
							f.color == cc.color('#FF3600')
								? (v
										.getChildByName('label')
										.getComponent(cc.Label).fontSize = 48)
								: (v
										.getChildByName('label')
										.getComponent(cc.Label).fontSize = 30),
							f.pos && ((v.x = f.pos.x), (v.y = f.pos.y)),
							this.node.addChild(v)
					},
					putInHitLabelPool: function (f) {
						this.hitLabelPool.put(f)
					},
					createEnemyDeadSpine: function (f) {
						var v = cc.instantiate(this.enemyDeadSpine)
						;(v.position = f),
							this.playerList.addChild(v),
							v
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (f, C) {
									v.destroy()
								})
					},
					backMain: function () {
						switch (Lq.pfName) {
							case 'vigoo':
								var f = !0 === cc.myself.isWin ? '成功' : '失败'
								b.default.showScreenAd({ node: f })
						}
						cc.director.loadScene('MainScene')
					},
					revivePlayer: function () {
						this.player.getComponent('Player').revive(),
							(this.ui.getChildByName('revive').active = !1)
					},
					goToNextMap: function () {
						var f = this
						if (this.firstInGame) {
							if (
								((this.firstInGame = !1),
								'{}' != JSON.stringify(cc.myself.pauseData))
							)
								return
							setTimeout(function () {
								f.showChooseBuff()
							}, 100)
						} else {
							if (
								(this.floorNum % 10 == 0 &&
									(this.nowPlayMapList = []),
								this.floorNum++,
								!this.isGuide && this.floorNum % 10 == 5)
							) {
								var v = Math.floor(this.floorNum / 10),
									C = this.bigMapConf.angelProbability[v]
								Math.random() < C / 100 && (this.isAngle = !0)
							}
							this.resetGameData(), this.initMap()
						}
					},
					getGamePauseData: function () {
						var f = this.player.getComponent('Player').getExp(),
							v = this.floorNum
						this.noEnemey && v++
						var C = {
							bigMapNum: cc.myself.bigMapNum,
							floorNum: v,
							playerHp: this.player
								.getComponent('Player')
								.getHp(),
							playerExp: f.exp,
							playerLevel: f.level,
							gameGold: cc.myself.gameGold,
							addBuffList: cc.myself.addBuffList,
							getRewardList: cc.myself.getRewardList,
						}
						;(cc.myself.pauseData = C),
							cc.myself.setLocalData(
								'pauseData',
								cc.myself.pauseData
							)
					},
					getGameIsOver: function () {
						return this.player.getComponent('Player').getHp() <= 0
					},
					setGamePause: function (f) {
						this.gamePause = f
					},
					getGamePause: function () {
						return this.gamePause
					},
					getFloorNum: function () {
						return this.floorNum
					},
					checkIsWin: function () {
						for (
							var f = this, v = this, C = 0, b = 0;
							b < this.playerList.children.length;
							b++
						)
							'enemy' === this.playerList.children[b].name && C++
						var w = this.noEnemey
						if (((this.noEnemey = 0 == C), !w && this.noEnemey)) {
							for (
								var N = this.bulletList.children.length - 1;
								N >= 0;
								N--
							) {
								var k = this.bulletList.children[N]
								'bullet' == k.name
									? this.putInBulletPool(k)
									: 'EnemyAtk' == k.name
									? this.putInEnemyAtkPool(k)
									: k.destroy()
							}
							if (
								(this.playerList.getChildByName('angle')
									? (this.overAction = !1)
									: (this.overAction = !0),
								this.isGuide
									? 1 == this.floorNum &&
									  (this.overAction = !1)
									: 0 == this.floorNum &&
									  (this.overAction = !1),
								this.floorNum == this.bigMapConf.floorNum &&
									this.player
										.getComponent('Player')
										.setWudiTime(10),
								(this.dir = cc.v2(0, 0)),
								this.floorReward.length > 0)
							)
								for (
									var L = 0;
									L < this.floorReward.length;
									L++
								)
									cc.myself.getRewardList.push(
										this.floorReward[L]
									)
							;(this.floorReward = []),
								this.isGuide
									? this.floorNum % 5 == 0 &&
									  (this.node
											.getChildByName('ui')
											.getChildByName('top')
											.getChildByName('bosshp')
											.getChildByName('progress')
											.getChildByName('gqjd_2')
											.getChildByName('gqjd_1')
											.getComponent(
												cc.Sprite
											).fillRange = 0)
									: this.floorNum % 10 == 0 &&
									  (this.node
											.getChildByName('ui')
											.getChildByName('top')
											.getChildByName('bosshp')
											.getChildByName('progress')
											.getChildByName('gqjd_2')
											.getChildByName('gqjd_1')
											.getComponent(
												cc.Sprite
											).fillRange = 0)
							for (
								var B = this.player.position,
									h = function (v) {
										var C = f.map.children[v]
										if ('gold' == C.name) {
											var b = 0.5 * Math.random() + 0.2
											C.runAction(
												cc.sequence(
													cc.moveTo(
														b,
														cc.v2(B.x, B.y + 48)
													),
													cc.callFunc(
														function () {
															;(cc.myself.gameGold += 5),
																this.putInFlyGoldPool(
																	C
																)
														}.bind(f)
													)
												)
											)
										} else if ('diamond' == C.name) {
											var _ = 0.5 * Math.random() + 0.2
											C.runAction(
												cc.sequence(
													cc.moveTo(
														_,
														cc.v2(B.x, B.y + 48)
													),
													cc.removeSelf(!0)
												)
											)
										}
									},
									S = 0;
								S < this.map.children.length;
								S++
							)
								h(S)
							this.map
								.getChildByName('bigMapUp')
								.getChildByName('chenglou_k').active = !0
							var M = this.playerImgType.split('_')
							'gongji' === M[1] &&
								((this.playerImgType = M[0] + '_stand'),
								this.player
									.getComponent('sp.Skeleton')
									.setAnimation(1, this.playerImgType, !0)),
								setTimeout(function () {
									if (
										(cc.myself.tips(
											Lq.lang('传送门已打开')
										),
										v.isGuide)
									)
										v.floorNum < 5
											? v.nowFloorEenemyNum > 0 &&
											  v.player
													.getComponent('Player')
													.upLevel()
											: (cc.myself.getRewardList.push({
													type: 'equip',
													num: 1,
													type2: 1,
											  }),
											  cc.myself.getRewardList.push({
													type: 'workmate',
													num: 1,
													type2: 6,
											  }))
									else if (v.floorNum > 0)
										if (
											v.floorNum % 10 == 0 &&
											v.floorNum < v.bigMapConf.floorNum
										) {
											v.player
												.getComponent('Player')
												.addExp(
													500 *
														cc.myself.getPlayerExpAdd()
												)
											var C =
												(cc.myself.bigMapNum - 1) *
												_.gameSetting.enemyAddAttribute
													.goldAdd *
												250
											cc.myself.gameGold += Math.floor(C)
											var b =
												v.bigMapConf.demonProbability[
													v.floorNum / 10 - 1
												]
											if (Math.random() < b / 100) {
												var w = cc.instantiate(
														v.demonNode
													),
													N = v.getPosByMapPos(
														Math.floor(
															v.conf.width / 2
														) + ',2'
													)
												;(w.x = N.x),
													(w.y = N.y),
													(w.name = 'demon'),
													v.playerList.addChild(w)
											}
										} else {
											v.player
												.getComponent('Player')
												.addExp(
													50 *
														v.nowFloorEenemyNum *
														cc.myself.getPlayerExpAdd()
												)
											var k =
												25 *
												f.nowFloorEenemyNum *
												((cc.myself.bigMapNum - 1) *
													_.gameSetting
														.enemyAddAttribute
														.goldAdd)
											cc.myself.gameGold += Math.floor(k)
										}
									if (v.floorNum == v.bigMapConf.floorNum) {
										v.floorNum++
										for (
											var L =
												f.bulletList.children.length -
												1;
											L >= 0;
											L--
										) {
											var B = f.bulletList.children[L]
											'bullet' == B.name
												? f.putInBulletPool(B)
												: 'EnemyAtk' == B.name
												? f.putInEnemyAtkPool(B)
												: B.destroy()
										}
										;(cc.myself.isWin = !0), v.showOverUI()
									} else
										setTimeout(function () {
											f.getGamePauseData()
										}, 1e3)
								}, 1e3),
								cc.myself.aldOnEnd({
									stageId:
										cc.myself.bigMapNum +
										'.' +
										this.floorNum,
									stageName:
										'地图' +
										cc.myself.bigMapNum +
										'-第' +
										this.floorNum +
										'层',
									event: 'complete',
								})
						}
					},
					downGold: function (f) {
						var v
						;(v = this.isGuide
							? this.floorNum % 5 == 0
								? 100
								: 20
							: this.floorNum % 10 == 0
							? 50
							: 5),
							(v = Math.floor(v))
						for (var C = [0, 50], b = 0; b < v; b++) {
							var _ = void 0
							_ =
								this.flyGoldPool.size() > 0
									? this.flyGoldPool.get()
									: cc.instantiate(this.flyGoldNode)
							var w = 360 * Math.random(),
								N =
									f.x +
									Math.cos((w * Math.PI) / 180) *
										(Math.random() * (C[1] - C[0]) + C[0]),
								k =
									f.y +
									Math.sin((w * Math.PI) / 180) *
										(Math.random() * (C[1] - C[0]) + C[0])
							;(_.x = N),
								(_.y = k + 120),
								(_.name = 'gold'),
								this.map.addChild(_),
								_.runAction(
									cc.sequence(
										cc.moveBy(0.2, cc.v2(0, -120)),
										cc.moveBy(0.05, cc.v2(0, 15)),
										cc.moveBy(0.05, cc.v2(0, -15))
									)
								)
						}
					},
					downDiamond: function (f) {
						console.log('data', f), this.floorReward.push(f)
						for (var v = [50, 150], C = 0; C < 1; C++) {
							var b = cc.instantiate(this.flyDiamondNode)
							'equip' == f.type
								? cc.myself.asyncShowImage(
										b
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										_.weaponConf[f.type2].icon
								  )
								: 'scroll' == f.type
								? cc.myself.asyncShowImage(
										b
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										'ui/icon_' + f.type2 + 'Scroll'
								  )
								: 'workmate' == f.type &&
								  cc.myself.asyncShowImage(
										b
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										_.workmateConf[f.type2].icon
								  )
							var w = 360 * Math.random(),
								N =
									f.pos.x +
									Math.cos((w * Math.PI) / 180) *
										(Math.random() * (v[1] - v[0]) + v[0]),
								k =
									f.pos.y +
									Math.sin((w * Math.PI) / 180) *
										(Math.random() * (v[1] - v[0]) + v[0])
							;(b.x = N),
								(b.y = k + 120),
								(b.name = 'diamond'),
								this.map.addChild(b),
								b.runAction(
									cc.sequence(
										cc.moveBy(0.2, cc.v2(0, -120)),
										cc.moveBy(0.05, cc.v2(0, 15)),
										cc.moveBy(0.05, cc.v2(0, -15))
									)
								)
						}
					},
					showOverUI: function () {
						this.ui.getChildByName('over').active = !0
					},
					showReviveUI: function () {
						this.ui.getChildByName('revive').active = !0
					},
					showWinUI: function () {
						this.ui.getChildByName('win').active = !0
					},
					showInterludeUI: function () {
						for (
							var f = this.bulletList.children.length - 1;
							f >= 0;
							f--
						) {
							var v = this.bulletList.children[f]
							'bullet' == v.name
								? this.putInBulletPool(v)
								: 'EnemyAtk' == v.name
								? this.putInEnemyAtkPool(v)
								: v.destroy()
						}
						this.ui.getChildByName('interlude').active = !0
					},
					showChooseBuff: function () {
						cc.myself.showPre('pre/chooseBuff')
					},
					showDemon: function () {
						cc.myself.showPre('pre/showDemon')
					},
					showAngel: function () {
						cc.myself.showPre('pre/showAngel')
					},
					showTurntable: function (f) {
						f || (f = 'normal'),
							cc.myself.showPre('pre/showTurntable', {
								jname: 'ShowTurntable',
								data: { type: f },
							})
					},
					removeAngle: function () {
						for (
							var f = 0;
							f < this.playerList.children.length;
							f++
						)
							if ('angle' == this.playerList.children[f].name) {
								this.playerList.children[f].destroy()
								break
							}
					},
					removeDemon: function () {
						for (
							var f = 0;
							f < this.playerList.children.length;
							f++
						)
							if ('demon' == this.playerList.children[f].name) {
								this.playerList.children[f].destroy()
								break
							}
					},
					removeTurntable: function () {
						for (
							var f = 0;
							f < this.playerList.children.length;
							f++
						)
							if (
								'turntable' == this.playerList.children[f].name
							) {
								this.playerList.children[f].destroy()
								break
							}
					},
					showGamePause: function () {
						cc.myself.showPre('pre/gamePause')
					},
					resetExpUI: function () {
						var f = this.player.getComponent('Player').getExp(),
							v = this.node
								.getChildByName('ui')
								.getChildByName('top')
								.getChildByName('level')
						11 == f.level
							? ((v
									.getChildByName('grade')
									.getComponent(cc.Label).string =
									'Lv.' + f.level),
							  (v
									.getChildByName('progress')
									.getChildByName('gqjd_2')
									.getChildByName('gqjd_1')
									.getComponent(cc.Sprite).fillRange = 1))
							: ((v
									.getChildByName('grade')
									.getComponent(cc.Label).string =
									'Lv.' + f.level),
							  (v
									.getChildByName('progress')
									.getChildByName('gqjd_2')
									.getChildByName('gqjd_1')
									.getComponent(cc.Sprite).fillRange =
									f.exp /
									_.gameSetting.playerUpLevelNeedExp[
										f.level - 1
									]))
					},
					checkPlayerIsGongjiAnimation: function () {
						var f = this.player
							.getComponent('sp.Skeleton')
							.getCurrent(1)
						if (f) {
							var v = f.animation.name.split('_')
							if (
								'gongji1' === v[1] ||
								'gongji2' === v[1] ||
								'gongji' === v[1]
							)
								return !0
						}
						return !1
					},
					update: function (f) {
						if (
							!this.getGameIsOver() &&
							!this.getGamePause() &&
							!this.goDoor
						) {
							if (this.noEnemey) {
								if (this.dir.y > 0.85) {
									var v = this.getPlayerMapPos().split(','),
										C = parseInt(v[0])
									if (
										0 == parseInt(v[1]) &&
										(5 == C || 6 == C)
									)
										return (
											(this.goDoor = !0),
											'bei_zou' != this.playerImgType &&
												(this.player
													.getComponent('sp.Skeleton')
													.setAnimation(
														1,
														'bei_zou',
														!0
													),
												(this.playerImgType =
													'bei_zou')),
											void this.player.runAction(
												cc.sequence(
													cc.moveBy(
														0.6,
														cc.v2(0, 120)
													),
													cc.callFunc(
														function () {
															this.showInterludeUI()
														}.bind(this)
													)
												)
											)
										)
								}
							} else
								(this.checkMiaoEnemyTime += f),
									this.checkMiaoEnemyTime > 0.1 &&
										this.checkEnemyGps()
							if (
								(this.playerImgShowNum++,
								this.checkBossHp(),
								(this.checkBulletTime += f),
								this.checkBulletTime >
									1 / cc.myself.getPlayerAtkSpe() &&
									this.getBulletDp(this.player))
							) {
								this.isMoving
								var b = this.playerImgType.split('_')
								this.player
									.getComponent('sp.Skeleton')
									.setAnimation(1, b[0] + '_gongji', !1),
									(this.playerImgType = b[0] + '_gongji'),
									(this.checkBulletTime = 0)
								var _ = cc.myself.getPlayerArrowNum(),
									w = cc.myself.getPlayerArrowAttribute(),
									N = {
										pos: {
											x: this.player.x,
											y: this.player.y,
										},
										dp: this.getBulletDp(this.player),
										atkPower: this.player
											.getComponent('Player')
											.getAtkPower(),
										icon: 'weapon/' + this.playerWeaponIcon,
										penetrate: cc.myself.getPlayerArrowIsPenetrate(),
										rebound: cc.myself.getPlayerArrowIsRebound(),
										arrowNum: cc.myself.getPlayerSerial(),
										catapult: cc.myself.getPlayerCatapult(),
									}
								Object.assign(N, _),
									Object.assign(N, w),
									this.createBullet(N)
							}
							if (this.dir.mag() > 0) {
								var k =
									(180 * Math.atan2(this.dir.y, this.dir.x)) /
									Math.PI
								;(k = 360 - k + 90),
									(this.Rocker.parent.getChildByName(
										'direction'
									).angle = k),
									(this.player.parent.getChildByName(
										'light'
									).angle = k + 180)
							}
							if (this.dir.mag() < 0.05)
								this.checkPlayerIsGongjiAnimation() ||
									this.changePlayerImg(
										this.getBulletDp(this.player)
									)
							else {
								this.checkPlayerIsGongjiAnimation() ||
									this.changePlayerImg(this.dir)
								var L = cc.myself.getPlayerSpe(),
									B = this.dir.x * L * f,
									S = this.dir.y * L * f,
									M = this.player.x + B,
									I = this.player.y + S,
									x = cc.myself.getPlayerPierceWall() > 0,
									q = cc.myself.getPlayerLevitate() > 0,
									P = this.getMapTypeByPos(M, this.player.y)
								P
									? 1 == P
										? x && (this.player.x = M)
										: 2 == P && q && (this.player.x = M)
									: (this.player.x = M)
								var A = this.getMapTypeByPos(this.player.x, I)
								A
									? 1 == A
										? x && (this.player.y = I)
										: 2 == A && q && (this.player.y = I)
									: (this.player.y = I),
									this.resetCameraPos()
								var T = this.getPlayerMapPos().split(','),
									D = parseInt(T[0]),
									R = parseInt(T[1])
								;(D ==
									this.playerPosList[this.playerPosPointer]
										.x &&
									this.playerPosList[this.playerPosPointer]
										.y == R) ||
									(this.playerPosList.length >= 8
										? (this.playerPosPointer ==
										  this.playerPosList.length - 1
												? (this.playerPosPointer = 0)
												: this.playerPosPointer++,
										  (this.playerPosList[
												this.playerPosPointer
										  ].x = D),
										  (this.playerPosList[
												this.playerPosPointer
										  ].y = R))
										: (this.playerPosList.push({
												x: D,
												y: R,
										  }),
										  this.playerPosPointer++))
							}
						}
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		GoldLack: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'a747dHMsAZNSJjlRR2ifljT', 'GoldLack')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						this.resetUI()
					},
					resetUI: function () {
						var f =
							_.tfConf[7].default +
							(cc.myself.tfList[7] - 1) * _.tfConf[7].add
						0 == cc.myself.tfList[7] && (f = _.tfConf[7].default)
						var v = cc.myself.changeNumToUnit(
							Math.floor((3e7 * f) / 10 / 1e3)
						)
						;(this.node
							.getChildByName('di')
							.getChildByName('content')
							.getChildByName('health_1')
							.getChildByName('sum_1')
							.getComponent(cc.Label).string = 'x' + v),
							(this.node
								.getChildByName('di')
								.getChildByName('content')
								.getChildByName('health_2')
								.getChildByName('sum_2')
								.getComponent(cc.Label).string = 'x' + v)
						var C =
							_.gameSetting.dailySeeVideoGetStrengthMaxNum -
							cc.myself.dailySeeVideoGetGoldNum
						this.node
							.getChildByName('di')
							.getChildByName('content')
							.getChildByName('health_2')
							.getChildByName('chance')
							.getComponent(
								cc.Label
							).string = Lq.lang('今日剩余次数', {
							data: { num: C },
						})
					},
					diamondBuy: function () {
						if (cc.myself.diamond < 50)
							cc.myself.tips(Lq.lang('钻石不足'))
						else {
							var f =
								_.tfConf[7].default +
								(cc.myself.tfList[7] - 1) * _.tfConf[7].add
							0 == cc.myself.tfList[7] &&
								(f = _.tfConf[7].default),
								console.log(
									'cc.myself.tfList',
									cc.myself.tfList
								),
								console.log('one', f)
							var v = Math.floor((3e7 * f) / 10 / 1e3)
							;(cc.myself.diamond -= 50),
								cc.myself.setLocalData(
									'diamond',
									cc.myself.diamond
								),
								(cc.myself.gold += v),
								cc.myself.setLocalData('gold', cc.myself.gold),
								cc.myself.tips(
									Lq.lang('金币+x', { data: { num: v } })
								),
								this.close()
						}
					},
					video: function () {
						if (
							_.gameSetting.dailySeeVideoGetStrengthMaxNum -
								cc.myself.dailySeeVideoGetGoldNum <=
							0
						)
							cc.myself.tips(Lq.lang('今天视频次数已经用完'))
						else {
							var f = this
							b.default.showRewardedAd(function () {
								var v =
										_.tfConf[7].default +
										(cc.myself.tfList[7] - 1) *
											_.tfConf[7].add,
									C = Math.floor((3e7 * v) / 10 / 1e3)
								;(cc.myself.gold += C),
									cc.myself.setLocalData(
										'gold',
										cc.myself.gold
									),
									(cc.myself.dailySeeVideoGetGoldNum += 1),
									cc.myself.setLocalData(
										'dailySeeVideoGetGoldNum',
										cc.myself.dailySeeVideoGetGoldNum
									),
									(cc.myself.dailySeeVideoGetGoldTime = cc.myself.getTime()),
									cc.myself.setLocalData(
										'dailySeeVideoGetGoldTime',
										cc.myself.dailySeeVideoGetGoldTime
									),
									cc.myself.tips(
										Lq.lang('金币+x', { data: { num: C } })
									),
									f.close()
							})
						}
					},
					close: function () {
						this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		GuideLine: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '9b0f332U4NBYK+yKVcxOR+E', 'GuideLine'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {
							this.node
								.getChildByName('yindao_1')
								.runAction(
									cc.repeatForever(
										cc.sequence(
											cc.moveBy(0.5, cc.v2(0, 40)),
											cc.moveBy(0.5, cc.v2(0, -40))
										)
									)
								)
						},
						init: function (f) {
							for (var v = f.height, C = 0; C < v; C++) {
								var b = cc.instantiate(
									this.node.getChildByName('yindao_3')
								)
								;(b.y = 48 * (v / 2 - 1) - 48 * C),
									this.node.addChild(b)
							}
							;(this.node.getChildByName('yindao_1').y =
								(v / 2) * 48),
								(this.node.getChildByName('yindao_2').y =
									(v / 2) * 48),
								this.node.getChildByName('yindao_3').destroy()
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		HealthLack: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '880f1DWW2FBIazoLB9kZWOS', 'HealthLack')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						this.resetUI()
					},
					resetUI: function () {
						var f =
							_.gameSetting.dailySeeVideoGetBoxMaxNum -
							cc.myself.dailySeeVideoGetBoxNum
						this.node
							.getChildByName('di')
							.getChildByName('content')
							.getChildByName('health_2')
							.getChildByName('chance')
							.getComponent(
								cc.Label
							).string = Lq.lang('今日剩余次数', {
							data: { num: f },
						})
					},
					diamondBuy: function () {
						cc.myself.diamond < 25
							? cc.myself.tips(Lq.lang('钻石不足'))
							: ((cc.myself.diamond -= 25),
							  cc.myself.setLocalData(
									'diamond',
									cc.myself.diamond
							  ),
							  (cc.myself.strength += 25),
							  cc.myself.setLocalData(
									'strength',
									cc.myself.strength
							  ),
							  cc.myself.tips(
									Lq.lang('获得x体力', { data: { num: 25 } })
							  ),
							  this.close())
					},
					video: function () {
						if (
							_.gameSetting.dailySeeVideoGetStrengthMaxNum -
								cc.myself.dailySeeVideoGetStrengthNum <=
							0
						)
							cc.myself.tips(Lq.lang('今天视频次数已经用完'))
						else {
							var f = this
							b.default.showRewardedAd(function () {
								;(cc.myself.strength += 50),
									cc.myself.setLocalData(
										'strength',
										cc.myself.strength
									),
									(cc.myself.dailySeeVideoGetStrengthNum += 1),
									cc.myself.setLocalData(
										'dailySeeVideoGetStrengthNum',
										cc.myself.dailySeeVideoGetStrengthNum
									),
									(cc.myself.dailySeeVideoGetStrengthTime = cc.myself.getTime()),
									cc.myself.setLocalData(
										'dailySeeVideoGetStrengthTime',
										cc.myself.dailySeeVideoGetStrengthTime
									),
									cc.myself.tips(
										Lq.lang('获得x体力', {
											data: { num: 5 },
										})
									),
									f.close()
							})
						}
					},
					close: function () {
						this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		HitLabel: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '84bd1CGRytLGIpVoT3RqPTW', 'HitLabel'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onEnable: function () {
							var f = this
							;(this.label = this.node.getChildByName('label')),
								(this.label.y = 0),
								this.label.runAction(
									cc.sequence(
										cc.moveBy(0.3, cc.v2(0, 50)),
										cc.callFunc(function () {
											cc.find('Canvas')
												.getComponent('Game')
												.putInHitLabelPool(f.node)
										})
									)
								)
						},
						start: function () {},
					}),
					cc._RF.pop()
			},
			{},
		],
		HitWall: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'd0c73RYuE5Dg7qmDDf5q3aW', 'HitWall'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onEnable: function () {
							this.node
								.getComponent('sp.Skeleton')
								.setAnimation(1, 'dazhong', !1)
						},
						start: function () {
							var f = this
							this.node
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									cc.find('Canvas')
										.getComponent('Game')
										.putInHitWallPool(f.node)
								})
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		Interlude: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'e43d3TtRX5GQIG+RF50YjYF', 'Interlude'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {
							;(this.showTime = 0),
								(this.gameComponent = cc
									.find('Canvas')
									.getComponent('Game'))
						},
						start: function () {
							var f = this,
								v = this
							this.node
								.getChildByName('spine')
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (C, b) {
									var _ = C.animation ? C.animation.name : ''
									'qiehuan_kai' == _
										? ((v.node.active = !1),
										  f.gameComponent.setGamePause(!1))
										: 'qiehuan_guan' == _ &&
										  (v.gameComponent.goToNextMap(),
										  v.node
												.getChildByName('spine')
												.getComponent('sp.Skeleton')
												.setAnimation(
													1,
													'qiehuan_kai',
													!1
												))
								})
						},
						onEnable: function () {
							;(this.time = 0),
								this.gameComponent.setGamePause(!0),
								0 == this.showTime
									? (this.node
											.getChildByName('spine')
											.getComponent('sp.Skeleton')
											.setAnimation(1, 'qiehuan_kai', !1),
									  this.gameComponent.goToNextMap())
									: this.node
											.getChildByName('spine')
											.getComponent('sp.Skeleton')
											.setAnimation(
												1,
												'qiehuan_guan',
												!1
											),
								this.showTime++
						},
						update: function (f) {},
					}),
					cc._RF.pop()
			},
			{},
		],
		Invite: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '3167d1pW7tHao+ZPQXGkL2M', 'Invite')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					onLoad: function () {
						cc.myself.scaleToShow(this.node)
					},
					start: function () {
						var f = this
						cc.myself.xmlhttprequest(
							'',
							'POST',
							{ gameid: b.gameid, uid: cc.myself.uid },
							function (v) {
								try {
									v = JSON.parse(v)
								} catch (f) {
									return console.log('data is not json')
								}
								console.log('inviteList', v),
									f.resetList(v.data)
							}
						),
							cc
								.find('Canvas')
								.getComponent('Main')
								.feedbackBtnHide()
					},
					resetList: function (f) {
						if (f)
							for (var v = 0; v < f.length; v++) {
								var C = cc.instantiate(
									this.node
										.getChildByName('di')
										.getChildByName('contentNode')
								)
								;(C.getChildByName('person')
									.getChildByName('num')
									.getComponent(cc.Label).string = v + 1),
									(C.x = 0),
									(C.y = 0),
									(C.getChildByName('person')
										.getChildByName('get')
										.getChildByName('already').active =
										1 == parseInt(f[v].status)),
									(C.getChildByName('person')
										.getChildByName('get')
										.getChildByName('word_get').active =
										0 == parseInt(f[v].status))
								var b = C.getChildByName('person')
									.getChildByName('get')
									.getComponent(cc.Button).clickEvents[0]
								;(b.target = this.node),
									(b.component = 'Invite'),
									(b.handler = 'getReward'),
									(b.customEventData = f[v].suid),
									this.node
										.getChildByName('di')
										.getChildByName('scrollview')
										.getChildByName('content')
										.addChild(C)
							}
						var _ = 0
						f && (_ = f.length)
						for (var w = 0; w < 5; w++) {
							var N = cc.instantiate(
								this.node
									.getChildByName('di')
									.getChildByName('contentNode')
							)
							;(N.getChildByName('person')
								.getChildByName('num')
								.getComponent(cc.Label).string = w + 1 + _),
								(N.x = 0),
								(N.y = 0),
								(N.getChildByName('person')
									.getChildByName('get')
									.getChildByName('word_get').active = !1),
								(N.getChildByName('person')
									.getChildByName('get')
									.getChildByName('none').active = !0),
								this.node
									.getChildByName('di')
									.getChildByName('scrollview')
									.getChildByName('content')
									.addChild(N)
						}
					},
					getReward: function (f, v) {
						cc.myself.xmlhttprequest(
							'',
							'POST',
							{ gameid: b.gameid, uid: cc.myself.uid, suid: v },
							function (v) {
								1 == parseInt(v) &&
									((f.target.getChildByName(
										'word_get'
									).active = !1),
									(f.target.getChildByName(
										'already'
									).active = !0),
									(cc.myself.diamond += 50),
									cc.myself.setLocalData(
										'diamond',
										cc.myself.diamond
									),
									cc.myself.tips(
										Lq.lang('钻石+x', { data: { num: 50 } })
									))
							}
						)
					},
					invite: function () {
						var f = cc.myself.getShareList()
						wx.aldShareAppMessage({
							title: f.text || '亮了',
							imageUrl: f.url,
							query: 'uid=' + cc.myself.uid,
						})
					},
					close: function () {
						this.node.destroy(),
							cc
								.find('Canvas')
								.getComponent('Main')
								.feedbackBtnShow()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		JsEnhance: [
			function (f, v, C) {
				'use strict'
				function n() {
					if ('undefined' == typeof Reflect || !Reflect.construct)
						return !1
					if (Reflect.construct.sham) return !1
					if ('function' == typeof Proxy) return !0
					try {
						return (
							Date.prototype.toString.call(
								Reflect.construct(Date, [], function () {})
							),
							!0
						)
					} catch (f) {
						return !1
					}
				}
				function a(f, v, C) {
					return (a = n()
						? Reflect.construct
						: function (f, v, C) {
								var b = [null]
								b.push.apply(b, v)
								var _ = new (Function.bind.apply(f, b))()
								return C && o(_, C.prototype), _
						  }).apply(null, arguments)
				}
				function o(f, v) {
					return (o =
						Object.setPrototypeOf ||
						function (f, v) {
							return (f.__proto__ = v), f
						})(f, v)
				}
				function l(f) {
					return (
						(function (f) {
							if (Array.isArray(f)) {
								for (
									var v = 0, C = new Array(f.length);
									v < f.length;
									v++
								)
									C[v] = f[v]
								return C
							}
						})(f) ||
						(function (f) {
							if (
								Symbol.iterator in Object(f) ||
								'[object Arguments]' ===
									Object.prototype.toString.call(f)
							)
								return Array.from(f)
						})(f) ||
						(function () {
							throw new TypeError(
								'Invalid attempt to spread non-iterable instance'
							)
						})()
					)
				}
				cc._RF.push(v, '45e12hxdB1CC7JrcA7zMZon', 'JsEnhance'),
					Object.defineProperty(C, '__esModule', { value: !0 }),
					(C.default = void 0)
				var b = {
					init: function () {},
					getSumByList: function (f) {
						if (!Array.isArray(f) || 0 == f.length) return 0
						var v = 0
						return (
							f.forEach(function (f) {
								v += Number(f)
							}),
							v
						)
					},
					getRandByWeightList: function (f, v) {
						if (!Array.isArray(f) || 0 == f.length) return []
						var C = f.length
						v = v > C ? C : v
						var _ = []
						f.forEach(function (f) {
							_.push(Math.abs(Number(f)) + 1)
						})
						for (var w = b.getSumByList(_), N = [], k = {}; v; ) {
							for (
								var L = Math.floor(Math.random() * w),
									B = 0,
									S = 0;
								B < C && !((S += _[B]) >= L);
								B++
							);
							k[B] ||
								((k[B] = 1),
								(_[B] = 0),
								(w = b.getSumByList(_)),
								N.push(B),
								v--)
						}
						return N
					},
				}
				!(function () {
					var e = function (f, v, C) {
						f.prototype.hasOwnProperty(v) ||
							Object.defineProperty(f.prototype, v, {
								value: C,
								writable: !0,
								enumerable: !1,
								configurable: !0,
							})
					}
					e(Number, 'integer', function () {
						return Math[this < 0 ? 'ceil' : 'floor'](this)
					}),
						e(String, 'trim', function () {
							return this.replace(/^\s+|\s+$/g, '')
						}),
						e(Array, 'unique', function () {
							for (
								var f, v = [], C = {}, b = 0;
								null != (f = this[b]);
								b++
							)
								C[f] || (v.push(f), (C[f] = !0))
							return v
						}),
						e(Array, 'shuffle', function () {
							for (var f = this.length, v = 0; f; ) {
								var C = [
									this[(v = Math.floor(Math.random() * f--))],
									this[f],
								]
								;(this[f] = C[0]), (this[v] = C[1])
							}
							return this
						}),
						e(Array, 'rand', function (f) {
							var v =
									!(
										arguments.length > 1 &&
										void 0 !== arguments[1]
									) || arguments[1],
								C = this.length
							if (0 == C) return []
							var b = []
							switch (!0) {
								case f < C / 2:
									for (var _ = {}; f; ) {
										var w = Math.floor(Math.random() * C)
										_[w] ||
											((_[w] = 1), b.push(this[w]), f--)
									}
									break
								case f <= C:
									var N = Object.assign([], this)
									N.shuffle(), (b = N.slice(0, f))
									break
								default:
									if (v) {
										for (var k = []; f; )
											0 == k.length &&
												(k = Object.assign(
													[],
													this
												)).shuffle(),
												b.push(k.shift()),
												f--
										b.shuffle()
									} else
										for (; f; ) {
											var L = Math.floor(
												Math.random() * C
											)
											b.push(this[L]), f--
										}
							}
							return b
						}),
						e(Array, 'repeat', function (f) {
							var v = Object.assign([], this)
							if (f <= 1) return v
							for (; f > 1; ) (v = v.concat(this)), f--
							return v
						}),
						e(Array, 'inArray', function (f) {
							return this.indexOf(f) > -1
						}),
						e(String, 'repeat', function (f) {
							if (null == this)
								throw new TypeError(
									"can't convert " + this + ' to object'
								)
							var v = '' + this
							if (((f = +f) != f && (f = 0), f < 0))
								throw new RangeError(
									'repeat count must be non-negative'
								)
							if (f == 1 / 0)
								throw new RangeError(
									'repeat count must be less than infinity'
								)
							if (((f = Math.floor(f)), 0 == v.length || 0 == f))
								return ''
							if (v.length * f >= 1 << 28)
								throw new RangeError(
									'repeat count must not overflow maximum string size'
								)
							for (
								var C = '';
								1 == (1 & f) && (C += v), 0 != (f >>>= 1);

							)
								v += v
							return C
						}),
						e(String, 'padStart', function (f, v) {
							return (
								(f >>= 0),
								(v = String(void 0 !== v ? v : ' ')),
								this.length > f || '' === v
									? String(this)
									: ((f -= this.length) > v.length &&
											(v += v.repeat(f / v.length)),
									  v.slice(0, f) + String(this))
							)
						}),
						e(String, 'padEnd', function (f, v) {
							return (
								(f >>= 0),
								(v = String(void 0 !== v ? v : ' ')),
								this.length > f || '' === v
									? String(this)
									: ((f -= this.length) > v.length &&
											(v += v.repeat(f / v.length)),
									  String(this) + v.slice(0, f))
							)
						}),
						e(String, 'interpolate', function (f) {
							var v = Object.keys(f),
								C = Object.values(f)
							return a(
								Function,
								l(v).concat(['return `'.concat(this, '`;')])
							).apply(void 0, l(C))
						})
				})()
				var _ = b
				;(C.default = _), (v.exports = C.default), cc._RF.pop()
			},
			{},
		],
		JsonOb: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '000b00Lx19Ke4hAFc9/Qlnh', 'JsonOb'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b = Object.prototype,
					_ = '[object Object]',
					w = '[object Array]',
					N = [
						'push',
						'pop',
						'shift',
						'unshift',
						'short',
						'reverse',
						'splice',
					],
					k = (function () {
						function e(f, v) {
							b.toString.call(f) !== _ &&
								b.toString.call(f) !== w &&
								console.error('请传入一个对象或数组'),
								(this._callback = v),
								this.observe(f)
						}
						return (
							(e.prototype.observe = function (f, v) {
								var C = this
								b.toString.call(f) === w &&
									this.overrideArrayProto(f, v),
									Object.keys(f).forEach(function (N) {
										var k = C,
											L = f[N],
											B = v && v.slice()
										B ? B.push(N) : (B = [N]),
											Object.defineProperty(f, N, {
												get: function () {
													return L
												},
												set: function (f) {
													L !== f &&
														('[object Object]' ===
															b.toString.call(
																f
															) &&
															k.observe(f, B),
														k._callback(f, L, B),
														(L = f))
												},
											}),
											(b.toString.call(f[N]) !== _ &&
												b.toString.call(f[N]) !== w) ||
												C.observe(f[N], B)
									}, this)
							}),
							(e.prototype.overrideArrayProto = function (f, v) {
								var C,
									b = Array.prototype,
									_ = Object.create(Array.prototype),
									w = this
								N.forEach(function (f) {
									Object.defineProperty(_, f, {
										value: function () {
											var _ = this.slice()
											return (
												(C = b[f].apply(
													this,
													arguments
												)),
												w.observe(this, v),
												w._callback(this, _, v),
												C
											)
										},
									})
								}),
									(f.__proto__ = _)
							}),
							e
						)
					})()
				;(C.JsonOb = k), cc._RF.pop()
			},
			{},
		],
		Lang: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '72b62p8gkBGForvh3Jc1r0w', 'Lang'),
					Object.defineProperty(C, '__esModule', { value: !0 }),
					(C.default = {
						游戏名称: {
							cn: { value: '木叶传说', style: null },
							en: { value: 'Woody Legend', style: null },
						},
						广告加载失败: {
							cn: { value: '请您稍后再试', style: null },
							en: {
								value: 'Please try again later',
								style: null,
							},
						},
						广告跳过: {
							cn: {
								value: '完整观看广告后您才能获得奖励',
								style: null,
							},
							en: {
								value:
									'You can get rewards \n after watching the full ad',
								style: null,
							},
						},
						谢谢: {
							cn: { value: '不了，谢谢', style: null },
							en: { value: 'No, thanks', style: null },
						},
						下一关: {
							cn: { value: '下一关', style: null },
							en: { value: 'Next level', style: null },
						},
						第几关: {
							cn: { value: '第$level$关', style: null },
							en: { value: 'Level $level$', style: null },
						},
						冒险升级: {
							cn: { value: '本次冒险升到 $num$ 级', style: null },
							en: {
								value: 'Upgrade to Level $num$',
								style: null,
							},
						},
						传送门已打开: {
							cn: { value: '传送门已打开', style: null },
							en: { value: 'Portal Opened', style: null },
						},
						火: {
							cn: { value: '火', style: null },
							en: { value: 'Fire', style: null },
						},
						水: {
							cn: { value: '水', style: null },
							en: { value: 'Water', style: null },
						},
						木: {
							cn: { value: '木', style: null },
							en: { value: 'Nature', style: null },
						},
						土: {
							cn: { value: '土', style: null },
							en: { value: 'Earth', style: null },
						},
						金: {
							cn: { value: '金', style: null },
							en: { value: 'Metal', style: null },
						},
						战士: {
							cn: { value: '战士', style: null },
							en: { value: 'Warrior', style: null },
						},
						忍者: {
							cn: { value: '忍者', style: null },
							en: { value: 'Ninja', style: null },
						},
						卫士: {
							cn: { value: '卫士', style: null },
							en: { value: 'Guardian', style: null },
						},
						刺客: {
							cn: { value: '刺客', style: null },
							en: { value: 'Assassinator', style: null },
						},
						猎人: {
							cn: { value: '猎人', style: null },
							en: { value: 'Hunter', style: null },
						},
						勇士: {
							cn: { value: '勇士', style: null },
							en: { value: 'Hero', style: null },
						},
						地图x: {
							cn: { value: '地图$num$', style: null },
							en: { value: 'Map $num$', style: null },
						},
						'增加50%/100%攻击力': {
							cn: { value: '增加50%/100%攻击力', style: null },
							en: { value: 'Attack +50%/100%', style: null },
						},
						'增加50%/100%最大生命值': {
							cn: {
								value: '增加50%/100%最大生命值',
								style: null,
							},
							en: { value: 'Max HP +50%/100%', style: null },
						},
						'增加20%/30%移动速度': {
							cn: { value: '增加20%/30%移动速度', style: null },
							en: { value: 'Speed +20%/30%', style: null },
						},
						'击附加攻击力20%/40%额外伤害': {
							cn: {
								value: '击附加攻击力20%/40%额外伤害',
								style: null,
							},
							en: { value: 'Bonus damage +20%/40%', style: null },
						},
						'全体增加50%/100%生命值': {
							cn: {
								value: '全体增加50%/100%生命值',
								style: null,
							},
							en: { value: 'All HP +50%/100%', style: null },
						},
						'全体攻击时10%/20%几率3倍伤害': {
							cn: {
								value: '全体攻击时10%/20%几率3倍伤害',
								style: null,
							},
							en: {
								value: 'All triple hit chance +10%/20%',
								style: null,
							},
						},
						'全体增加30%/50%攻速': {
							cn: { value: '全体增加30%/50%攻速', style: null },
							en: {
								value: 'All attack speed +30%/50%',
								style: null,
							},
						},
						'全体获得10%/20%最大生命值的护盾': {
							cn: {
								value: '全体获得10%/20%最大生命值的护盾',
								style: null,
							},
							en: {
								value: 'All gain 10%/20% shield of max HP',
								style: null,
							},
						},
						'全体增加1/2只箭': {
							cn: { value: '全体增加1/2只箭', style: null },
							en: {
								value: 'All gain 1/2 extra arrow',
								style: null,
							},
						},
						' 增加血量': {
							cn: { value: ' 增加血量', style: null },
							en: { value: 'Increase HP', style: null },
						},
						弹射: {
							cn: { value: '弹射', style: null },
							en: { value: 'Rebound', style: null },
						},
						穿透: {
							cn: { value: '穿透', style: null },
							en: { value: 'Penetrate', style: null },
						},
						嗜血: {
							cn: { value: '嗜血', style: null },
							en: { value: 'Absorb', style: null },
						},
						衣服: {
							cn: { value: '衣服', style: null },
							en: { value: 'Costume', style: null },
						},
						戒指: {
							cn: { value: '戒指', style: null },
							en: { value: 'Ring', style: null },
						},
						项链: {
							cn: { value: '项链', style: null },
							en: { value: 'Necklace', style: null },
						},
						卷轴: {
							cn: { value: '卷轴', style: null },
							en: { value: 'Scroll', style: null },
						},
						衣服卷轴: {
							cn: { value: '衣服卷轴', style: null },
							en: { value: 'Costume scroll', style: null },
						},
						戒指卷轴: {
							cn: { value: '戒指卷轴', style: null },
							en: { value: 'Ring scroll', style: null },
						},
						项链卷轴: {
							cn: { value: '项链卷轴', style: null },
							en: { value: 'Necklace scroll', style: null },
						},
						攻击: {
							cn: { value: '攻击', style: null },
							en: { value: 'Attack', style: null },
						},
						生命: {
							cn: { value: '生命', style: null },
							en: { value: 'HP', style: null },
						},
						移动速度: {
							cn: { value: '移动速度', style: null },
							en: { value: 'Move speed', style: null },
						},
						攻击加成: {
							cn: { value: '攻击加成', style: null },
							en: { value: 'Attack bonus', style: null },
						},
						血量加成: {
							cn: { value: '血量加成', style: null },
							en: { value: 'HP bonus', style: null },
						},
						移速加成: {
							cn: { value: '移速加成', style: null },
							en: { value: 'Speed bonus', style: null },
						},
						额外伤害加成: {
							cn: { value: '额外伤害加成', style: null },
							en: { value: 'Extra damage bonus', style: null },
						},
						暴击率: {
							cn: { value: '暴击率', style: null },
							en: { value: 'Critical hit chance', style: null },
						},
						暴击伤害: {
							cn: { value: '暴击伤害', style: null },
							en: { value: 'Critical hit damage', style: null },
						},
						隐匿率: {
							cn: { value: '隐匿率', style: null },
							en: { value: 'Evasion', style: null },
						},
						攻速: {
							cn: { value: '攻速', style: null },
							en: { value: 'AttackSpeed', style: null },
						},
						攻速加成: {
							cn: { value: '攻速加成', style: null },
							en: { value: 'Attack speed bonus', style: null },
						},
						护甲: {
							cn: { value: '护甲', style: null },
							en: { value: 'Armor', style: null },
						},
						护甲加成: {
							cn: { value: '护甲加成', style: null },
							en: { value: 'Armor bonus', style: null },
						},
						怪物死亡掉血加主角血量数量: {
							cn: {
								value: '怪物死亡掉血加主角血量数量',
								style: null,
							},
							en: {
								value: 'Elimination HP feedback',
								style: null,
							},
						},
						怪物死亡回血概率: {
							cn: { value: '怪物死亡回血概率', style: null },
							en: {
								value: 'Elimination feedback chance',
								style: null,
							},
						},
						升级回复生命: {
							cn: { value: '升级回复生命', style: null },
							en: { value: 'Upgrade recover', style: null },
						},
						装备属性加成: {
							cn: { value: '装备属性加成', style: null },
							en: { value: 'Equipment bonus', style: null },
						},
						离线金币收益: {
							cn: { value: '离线金币收益', style: null },
							en: { value: 'Offline income', style: null },
						},
						生命护盾: {
							cn: { value: '生命护盾', style: null },
							en: { value: 'Shield', style: null },
						},
						正向箭: {
							cn: { value: '正向箭', style: null },
							en: { value: 'Front arrow', style: null },
						},
						两侧箭: {
							cn: { value: '两侧箭', style: null },
							en: { value: 'Side arrow', style: null },
						},
						背向箭: {
							cn: { value: '背向箭', style: null },
							en: { value: 'Back arrow', style: null },
						},
						经验增加: {
							cn: { value: '经验增加', style: null },
							en: { value: 'Exp increase', style: null },
						},
						穿墙: {
							cn: { value: '穿墙', style: null },
							en: { value: 'Penetrate', style: null },
						},
						漂浮: {
							cn: { value: '漂浮', style: null },
							en: { value: 'Float', style: null },
						},
						附加技能: {
							cn: { value: '附加技能', style: null },
							en: { value: 'Extra skill', style: null },
						},
						增加初始生命: {
							cn: { value: '增加初始生命', style: null },
							en: { value: 'Increase initial HP', style: null },
						},
						力量: {
							cn: { value: '力量', style: null },
							en: { value: 'Strength', style: null },
						},
						增加初始攻击力: {
							cn: { value: '增加初始攻击力', style: null },
							en: {
								value: 'Increase initial attack',
								style: null,
							},
						},
						回复: {
							cn: { value: '回复', style: null },
							en: { value: 'Recover', style: null },
						},
						怪物死亡后回血概率: {
							cn: { value: '怪物死亡后回血概率', style: null },
							en: {
								value: 'Elimination feedback chance',
								style: null,
							},
						},
						敏捷: {
							cn: { value: '敏捷', style: null },
							en: { value: 'Agility', style: null },
						},
						增加初始攻速: {
							cn: { value: '增加初始攻速', style: null },
							en: {
								value: 'Increase initial attack speed',
								style: null,
							},
						},
						坚盾: {
							cn: { value: '坚盾', style: null },
							en: { value: 'Stiff', style: null },
						},
						受到的伤害减免: {
							cn: { value: '受到的伤害减免', style: null },
							en: {
								value: 'Reduce received damage',
								style: null,
							},
						},
						治疗: {
							cn: { value: '治疗', style: null },
							en: { value: 'Heal', style: null },
						},
						升级时回复血量: {
							cn: { value: '升级时回复血量', style: null },
							en: {
								value: 'Recover HP when upgrade',
								style: null,
							},
						},
						装备增强: {
							cn: { value: '装备增强', style: null },
							en: { value: 'EquipUp', style: null },
						},
						装备属性增强: {
							cn: { value: '装备属性增强', style: null },
							en: {
								value: 'Increase equipment abilities',
								style: null,
							},
						},
						离线收益: {
							cn: { value: '离线收益', style: null },
							en: { value: 'BonusGold', style: null },
						},
						离线每10s获得金币: {
							cn: { value: '离线每10s获得金币', style: null },
							en: {
								value: 'Get offline gold every 10 seconds',
								style: null,
							},
						},
						守护者强化: {
							cn: { value: '守护者强化', style: null },
							en: { value: 'GuardUp', style: null },
						},
						守护者的属性增强: {
							cn: { value: '守护者的属性增强', style: null },
							en: {
								value: 'Increase guard abilities',
								style: null,
							},
						},
						正前方多一支箭: {
							cn: { value: '正前方多一支箭', style: null },
							en: { value: 'Front arrow +1', style: null },
						},
						斜向箭: {
							cn: { value: '斜向箭', style: null },
							en: { value: 'Slant arrow', style: null },
						},
						斜方向多一支箭: {
							cn: { value: '斜方向多一支箭', style: null },
							en: { value: 'Slant arrow +1', style: null },
						},
						两侧各多一支箭: {
							cn: { value: '两侧各多一支箭', style: null },
							en: {
								value: 'Side arrow +1 each side',
								style: null,
							},
						},
						后方多一支箭: {
							cn: { value: '后方多一支箭', style: null },
							en: { value: 'Back arrow +1', style: null },
						},
						反弹墙壁: {
							cn: { value: '反弹墙壁', style: null },
							en: { value: 'Rebound shoot', style: null },
						},
						发射的武器碰到墙壁会反弹一次: {
							cn: {
								value: '发射的武器碰到墙壁会反弹一次',
								style: null,
							},
							en: { value: 'Arrow rebound at wall', style: null },
						},
						发射的武器会在敌人之间来回弹射一次: {
							cn: {
								value: '发射的武器会在敌人之间来回弹射一次',
								style: null,
							},
							en: {
								value: 'Arrow rebound between enemies',
								style: null,
							},
						},
						发射的武器会额外穿透一个目标: {
							cn: {
								value: '发射的武器会额外穿透一个目标',
								style: null,
							},
							en: {
								value: 'Arrow penetrate an extra enemy',
								style: null,
							},
						},
						生命恢复: {
							cn: { value: '生命恢复', style: null },
							en: { value: 'HP recover', style: null },
						},
						'立即恢复50%的生命值': {
							cn: { value: '立即恢复50%的生命值', style: null },
							en: {
								value: 'Recover 50% HP at once',
								style: null,
							},
						},
						生命提高: {
							cn: { value: '生命提高', style: null },
							en: { value: 'HP increase', style: null },
						},
						'永久提高25%的生命上限': {
							cn: { value: '永久提高25%的生命上限', style: null },
							en: { value: 'Increase 25% max HP', style: null },
						},
						'增加25%基础攻击力': {
							cn: { value: '增加25%基础攻击力', style: null },
							en: { value: 'Basic attack +25%', style: null },
						},
						'增加50%基础攻击力': {
							cn: { value: '增加50%基础攻击力', style: null },
							en: { value: 'Basic attack +50%', style: null },
						},
						'增加75%基础攻击力': {
							cn: { value: '增加75%基础攻击力', style: null },
							en: { value: 'Basic attack +75%', style: null },
						},
						'增加20%基础攻速': {
							cn: { value: '增加20%基础攻速', style: null },
							en: { value: 'Attack speed +20%', style: null },
						},
						'增加30%基础攻速': {
							cn: { value: '增加30%基础攻速', style: null },
							en: { value: 'Attack speed +30%', style: null },
						},
						'增加40%基础攻速': {
							cn: { value: '增加40%基础攻速', style: null },
							en: { value: 'Attack speed +40%', style: null },
						},
						移速增加: {
							cn: { value: '移速增加', style: null },
							en: { value: 'Increase speed', style: null },
						},
						'增加20%基础移速': {
							cn: { value: '增加20%基础移速', style: null },
							en: { value: 'Basic speed +20%', style: null },
						},
						盾牌: {
							cn: { value: '盾牌', style: null },
							en: { value: 'Shield', style: null },
						},
						'受到的伤害减免10%': {
							cn: { value: '受到的伤害减免10%', style: null },
							en: { value: 'Received damage -10%', style: null },
						},
						连续射击: {
							cn: { value: '连续射击', style: null },
							en: { value: 'Double hit', style: null },
						},
						额外发射一支箭: {
							cn: { value: '额外发射一支箭', style: null },
							en: { value: '1 extra arrow', style: null },
						},
						无敌星星: {
							cn: { value: '无敌星星', style: null },
							en: { value: 'Invincible star', style: null },
						},
						聪明: {
							cn: { value: '聪明', style: null },
							en: { value: 'Wisdom', style: null },
						},
						'杀死怪物获得的经验值额外增加40%': {
							cn: {
								value: '杀死怪物获得的经验值额外增加40%',
								style: null,
							},
							en: { value: 'Exp +20%', style: null },
						},
						旋转盾牌: {
							cn: { value: '旋转盾牌', style: null },
							en: { value: 'Rotating shield', style: null },
						},
						抵挡接下来的两次攻击: {
							cn: { value: '抵挡接下来的两次攻击', style: null },
							en: { value: 'Defend next 2 attacks', style: null },
						},
						愤怒: {
							cn: { value: '愤怒', style: null },
							en: { value: 'Anger', style: null },
						},
						血量越少攻击力越高: {
							cn: { value: '血量越少攻击力越高', style: null },
							en: {
								value: 'Increase attack when HP is low',
								style: null,
							},
						},
						怪物死亡后有几率为玩家回复血量: {
							cn: {
								value: '怪物死亡后有几率为玩家回复血量',
								style: null,
							},
							en: {
								value:
									'Possibly recover HP when eliminate an enemy',
								style: null,
							},
						},
						'增加10%暴击几率': {
							cn: { value: '增加10%暴击几率', style: null },
							en: {
								value: 'Critical hit chance +10%',
								style: null,
							},
						},
						'增加20%暴击几率': {
							cn: { value: '增加20%暴击几率', style: null },
							en: {
								value: 'Critical hit chance +20%',
								style: null,
							},
						},
						'增加30%暴击几率': {
							cn: { value: '增加30%暴击几率', style: null },
							en: {
								value: 'Critical hit chance +30%',
								style: null,
							},
						},
						寒冰: {
							cn: { value: '寒冰', style: null },
							en: { value: 'Frost', style: null },
						},
						'武器附带冰霜伤害，减速怪物': {
							cn: {
								value: '武器附带冰霜伤害，减速怪物',
								style: null,
							},
							en: {
								value:
									'Gain extra frost damage to reduce enemy speed',
								style: null,
							},
						},
						火焰: {
							cn: { value: '火焰', style: null },
							en: { value: 'Fire', style: null },
						},
						'武器附带火焰伤害，燃烧怪物': {
							cn: {
								value: '武器附带火焰伤害，燃烧怪物',
								style: null,
							},
							en: {
								value:
									'Gain extra fire damage to burn enemy continuously',
								style: null,
							},
						},
						萃毒: {
							cn: { value: '萃毒', style: null },
							en: { value: 'Poison', style: null },
						},
						'武器附带毒素伤害，怪物中毒': {
							cn: {
								value: '武器附带毒素伤害，怪物中毒',
								style: null,
							},
							en: {
								value:
									'Gain extra poison damage to hurt enemy continuously',
								style: null,
							},
						},
						复活: {
							cn: { value: '复活', style: null },
							en: { value: 'Revive', style: null },
						},
						玩家死亡后自动复活一次: {
							cn: {
								value: '玩家死亡后自动复活一次',
								style: null,
							},
							en: {
								value: 'Revive after player died automatically',
								style: null,
							},
						},
						漂浮术: {
							cn: { value: '漂浮术', style: null },
							en: { value: 'Float', style: null },
						},
						玩家可以穿越河流: {
							cn: { value: '玩家可以穿越河流', style: null },
							en: { value: 'Can cross river', style: null },
						},
						玩家可以穿越墙壁: {
							cn: { value: '玩家可以穿越墙壁', style: null },
							en: { value: 'Can cross wall', style: null },
						},
						领取金币成功: {
							cn: { value: '领取金币成功', style: null },
							en: { value: 'Gold received', style: null },
						},
						卸下: {
							cn: { value: '卸下', style: null },
							en: { value: 'Take Off', style: null },
						},
						已到强化上限: {
							cn: { value: '已到强化上限', style: null },
							en: { value: 'Max reinforcement', style: null },
						},
						卷轴不足: {
							cn: { value: '卷轴不足', style: null },
							en: { value: 'Not enough scrolls', style: null },
						},
						金币不足: {
							cn: { value: '金币不足', style: null },
							en: { value: 'Not enough gold', style: null },
						},
						体力不足: {
							cn: { value: '体力不足', style: null },
							en: { value: 'Not enough power', style: null },
						},
						武器: {
							cn: { value: '武器', style: null },
							en: { value: 'Weapon', style: null },
						},
						不能放超过3件装备: {
							cn: { value: '不能放超过3件装备', style: null },
							en: {
								value: 'Can not put more than \n3 equipments',
								style: null,
							},
						},
						需要3件相同装备才能合成: {
							cn: {
								value: '需要3件相同装备才能合成',
								style: null,
							},
							en: {
								value: 'Need 3 same equipments \nto merge',
								style: null,
							},
						},
						没有可以合成的装备: {
							cn: { value: '没有可以合成的装备', style: null },
							en: {
								value: 'No available equipments \nto merge',
								style: null,
							},
						},
						获得: {
							cn: { value: '获得', style: null },
							en: { value: 'Gain', style: null },
						},
						至少放入1件装备才能进行熔炼: {
							cn: {
								value: '至少放入1件装备才能进行熔炼',
								style: null,
							},
							en: {
								value: 'Put at least 1 equipment \nto fuse',
								style: null,
							},
						},
						钻石不足: {
							cn: { value: '钻石不足', style: null },
							en: { value: 'Not enough diamond', style: null },
						},
						获得20体力: {
							cn: { value: '获得20体力', style: null },
							en: { value: 'Gain 20 power', style: null },
						},
						今天视频次数已经用完: {
							cn: { value: '今天视频次数已经用完', style: null },
							en: {
								value: 'All videos watched today',
								style: null,
							},
						},
						获得x体力: {
							cn: { value: '获得$num$体力', style: null },
							en: { value: 'Gain $num$ power', style: null },
						},
						第x层: {
							cn: { value: '第$num$层', style: null },
							en: { value: 'Level $num$', style: null },
						},
						新手地图不能返回主城: {
							cn: { value: '新手地图不能返回主城', style: null },
							en: {
								value: 'Can not go back at beginner map',
								style: null,
							},
						},
						请等待经验结算完毕: {
							cn: { value: '请等待经验结算完毕', style: null },
							en: {
								value: 'Please wait until exp gained',
								style: null,
							},
						},
						'金币+x': {
							cn: { value: '金币+$num$', style: null },
							en: { value: 'gold +$num$', style: null },
						},
						恭喜获得x钻石: {
							cn: { value: '恭喜获得$num$钻石', style: null },
							en: {
								value: '$num$ diamonds received',
								style: null,
							},
						},
						您已领取过该奖励: {
							cn: { value: '您已领取过该奖励', style: null },
							en: { value: 'Already received', style: null },
						},
						地图: {
							cn: { value: '地图', style: null },
							en: { value: 'Map', style: null },
						},
						已到初始地图: {
							cn: { value: '已到初始地图', style: null },
							en: { value: 'First map reached', style: null },
						},
						已到最新地图: {
							cn: { value: '已到最新地图', style: null },
							en: { value: 'New map reached', style: null },
						},
						暂未开放: {
							cn: { value: '暂未开放', style: null },
							en: { value: 'Coming soon', style: null },
						},
						你还没穿戴这种类型的装备: {
							cn: {
								value: '你还没穿戴这种类型的装备',
								style: null,
							},
							en: {
								value:
									"Haven't equiped this \nkind of equipment",
								style: null,
							},
						},
						时间不足: {
							cn: { value: '时间不足', style: null },
							en: { value: 'Not enough time', style: null },
						},
						徽章不足: {
							cn: { value: '徽章不足', style: null },
							en: { value: 'Not enough badges', style: null },
						},
						今天已领完全部的宝箱: {
							cn: { value: '今天已领完全部的宝箱', style: null },
							en: {
								value: 'All boxes received today',
								style: null,
							},
						},
						已到上限: {
							cn: { value: '已到上限', style: null },
							en: { value: 'Max', style: null },
						},
						残忍拒绝: {
							cn: { value: '残忍拒绝', style: null },
							en: { value: 'No, thanks', style: null },
						},
						世界: {
							cn: { value: '世界', style: null },
							en: { value: 'World', style: null },
						},
						新手世界: {
							cn: { value: '新手世界', style: null },
							en: { value: 'Beginner world', style: null },
						},
						你复活了: {
							cn: { value: '你复活了', style: null },
							en: { value: 'Revived', style: null },
						},
						x分钟: {
							cn: { value: '$num$分钟', style: null },
							en: { value: '$num$ minutes', style: null },
						},
						恭喜获得: {
							cn: { value: '恭喜获得', style: null },
							en: { value: 'Received', style: null },
						},
						'钻石+x': {
							cn: { value: '钻石+$num$', style: null },
							en: { value: 'Diamonds +$num$', style: null },
						},
						钻石: {
							cn: { value: '钻石', style: null },
							en: { value: 'Diamond', style: null },
						},
						今天已经签到过了: {
							cn: { value: '今天已经签到过了', style: null },
							en: {
								value: 'Already received daily \nbonus today',
								style: null,
							},
						},
						签到成功: {
							cn: { value: '签到成功', style: null },
							en: { value: 'Daily bonus got', style: null },
						},
						'暂无空位，请移除后再试': {
							cn: {
								value: '暂无空位，请移除后再试',
								style: null,
							},
							en: {
								value:
									'Not enough space, \nplease remove and try',
								style: null,
							},
						},
						不能放超过3个守护者: {
							cn: { value: '不能放超过3个守护者', style: null },
							en: {
								value: 'Can not put more than 3 guards',
								style: null,
							},
						},
						需要3个相同守护者才能合成: {
							cn: {
								value: '需要3个相同守护者才能合成',
								style: null,
							},
							en: {
								value: 'Need 3 same guards \nto merge',
								style: null,
							},
						},
						'改用欧美计数方式，1000为k，一百万为M，十亿为B，一万亿为T，一千万亿为Q': {
							cn: {
								value: " '万', 亿', '兆', '京'",
								style: null,
							},
							en: {
								value:
									'改用欧美计数方式，1000为k，一百万为M，十亿为B，一万亿为T，一千万亿为Q',
								style: null,
							},
						},
						'导入：': {
							cn: { value: '导入：', style: null },
							en: { value: 'Import', style: null },
						},
						导出: {
							cn: { value: '导出', style: null },
							en: { value: 'Export', style: null },
						},
						'过场动画中...': {
							cn: { value: '过场动画中...', style: null },
							en: { value: 'Interlude', style: null },
						},
						放弃: {
							cn: { value: '放弃', style: null },
							en: { value: 'Give up', style: null },
						},
						继续: {
							cn: { value: '继续', style: null },
							en: { value: 'Revive', style: null },
						},
						'勇士！请继续前进吧！': {
							cn: { value: '勇士！请继续前进吧！', style: null },
							en: { value: 'Hero! Please go on!', style: null },
						},
						战利品: {
							cn: { value: '战利品', style: null },
							en: { value: 'Reward', style: null },
						},
						超越玩家: {
							cn: { value: '超越了$num$%的玩家', style: null },
							en: { value: 'Passed $num$% players', style: null },
						},
						'200层': {
							cn: { value: '200层', style: null },
							en: { value: 'Level 200', style: null },
						},
						世界1: {
							cn: { value: '世界1', style: null },
							en: { value: 'World 1', style: null },
						},
						点击任意区域继续: {
							cn: { value: '点击任意区域继续', style: null },
							en: {
								value: 'Click any area to continue',
								style: null,
							},
						},
						返回主界面: {
							cn: { value: '返回主界面', style: null },
							en: { value: 'Back to main page', style: null },
						},
						更换: {
							cn: { value: '更换', style: null },
							en: { value: 'Change', style: null },
						},
						合成: {
							cn: { value: '合成', style: null },
							en: { value: 'Merge', style: null },
						},
						'熔 炼': {
							cn: { value: '熔 炼', style: null },
							en: { value: 'Fuse', style: null },
						},
						'合 成': {
							cn: { value: '合 成', style: null },
							en: { value: 'Merge', style: null },
						},
						荣耀: {
							cn: { value: '荣耀', style: null },
							en: { value: 'Glory', style: null },
						},
						时间收益: {
							cn: { value: '时间收益', style: null },
							en: { value: 'Income', style: null },
						},
						鼓舞: {
							cn: { value: '鼓舞', style: null },
							en: { value: 'Encourage', style: null },
						},
						铁壁: {
							cn: { value: '铁壁', style: null },
							en: { value: 'Stiff', style: null },
						},
						恢复: {
							cn: { value: '恢复', style: null },
							en: { value: 'Recover', style: null },
						},
						健壮: {
							cn: { value: '健壮', style: null },
							en: { value: 'Robust', style: null },
						},
						'达到35级后，可继续升级': {
							cn: {
								value: '达到35级后，可继续升级',
								style: null,
							},
							en: {
								value: 'Can continue to upgrade \nafter lv.35',
								style: null,
							},
						},
						立即升级: {
							cn: { value: '立即升级', style: null },
							en: { value: 'Upgrade', style: null },
						},
						'天赋可永久提升角色战斗力！': {
							cn: {
								value: '天赋可永久提升角色战斗力！',
								style: null,
							},
							en: {
								value: 'Talent makes player stronger',
								style: null,
							},
						},
						开始游戏: {
							cn: { value: '开始游戏', style: null },
							en: { value: 'Start', style: null },
						},
						最高层数: {
							cn: { value: '最高层数：$num$/30', style: null },
							en: {
								value: 'Highest leve: $num$/30',
								style: null,
							},
						},
						地图1: {
							cn: { value: '地图1', style: null },
							en: { value: 'Map 1', style: null },
						},
						领取: {
							cn: { value: '领取', style: null },
							en: { value: 'Receive', style: null },
						},
						黄金宝箱: {
							cn: { value: '黄金宝箱', style: null },
							en: { value: 'Gold box', style: null },
						},
						免费宝箱: {
							cn: { value: '免费宝箱', style: null },
							en: { value: 'Free box', style: null },
						},
						今日剩余次数: {
							cn: { value: '今日剩余次数：$num$', style: null },
							en: {
								value: 'Available chances today: $num$',
								style: null,
							},
						},
						购买宝箱: {
							cn: { value: '购买宝箱', style: null },
							en: { value: 'Buy boxes', style: null },
						},
						换一批: {
							cn: { value: '换一批', style: null },
							en: { value: 'Refresh', style: null },
						},
						选我: {
							cn: { value: '选我', style: null },
							en: { value: 'Choose', style: null },
						},
						请等待: {
							cn: { value: '请等待', style: null },
							en: { value: 'Please wait', style: null },
						},
						关闭: {
							cn: { value: '关闭', style: null },
							en: { value: 'Close', style: null },
						},
						点击技能查看详细介绍: {
							cn: { value: '点击技能查看详细介绍', style: null },
							en: {
								value: 'Click skill to see details',
								style: null,
							},
						},
						'请选择新的能力!': {
							cn: { value: '请选择新的能力!', style: null },
							en: {
								value: 'Please choose new skill',
								style: null,
							},
						},
						'本次冒险升到2级！': {
							cn: { value: '本次冒险升到2级！', style: null },
							en: {
								value: 'Reached lv.2 in this game',
								style: null,
							},
						},
						'10个好友在玩': {
							cn: { value: '10个好友在玩', style: null },
							en: {
								value: '10 friends are playing',
								style: null,
							},
						},
						好友在玩: {
							cn: { value: '好友在玩', style: null },
							en: {
								value: 'What friends are playing',
								style: null,
							},
						},
						猜你喜欢: {
							cn: { value: '猜你喜欢', style: null },
							en: { value: 'Hot game', style: null },
						},
						返回: {
							cn: { value: '返回', style: null },
							en: { value: 'Back', style: null },
						},
						重新开始: {
							cn: { value: '重新开始', style: null },
							en: { value: 'Restart', style: null },
						},
						继续游戏: {
							cn: { value: '继续游戏', style: null },
							en: { value: 'Continue', style: null },
						},
						地图未完成: {
							cn: {
								value: '你有一张未完成地图\n确定要重新开始吗',
								style: null,
							},
							en: {
								value:
									'Still have an unfinished map.\nSurely want to restart?',
								style: null,
							},
						},
						提示: {
							cn: { value: '提示', style: null },
							en: { value: 'Tip', style: null },
						},
						'3倍领取': {
							cn: { value: '3倍领取', style: null },
							en: { value: 'Get x3', style: null },
						},
						点击领取: {
							cn: { value: '点击领取', style: null },
							en: { value: 'Receive', style: null },
						},
						日常金币: {
							cn: { value: '日常金币', style: null },
							en: { value: 'Daily gold coins', style: null },
						},
						'领 取': {
							cn: { value: '领 取', style: null },
							en: { value: 'Receive', style: null },
						},
						额外奖励: {
							cn: { value: '额外奖励', style: null },
							en: { value: 'Extra reward', style: null },
						},
						混沌之链: {
							cn: { value: '混沌之链', style: null },
							en: { value: 'Chain of chaos', style: null },
						},
						确定: {
							cn: { value: '确定', style: null },
							en: { value: 'Confirm', style: null },
						},
						升级: {
							cn: { value: '升级', style: null },
							en: { value: 'Upgrade', style: null },
						},
						装备: {
							cn: { value: '装备', style: null },
							en: { value: 'Equipment', style: null },
						},
						穿戴: {
							cn: { value: '装备', style: null },
							en: { value: 'Take On', style: null },
						},
						闯关获取: {
							cn: { value: '闯关获取', style: null },
							en: { value: 'LevelBonus', style: null },
						},
						'升级卷轴10/15': {
							cn: { value: '升级卷轴10/15', style: null },
							en: { value: 'Upgrade scrolls 10/15', style: null },
						},
						'下一等级：': {
							cn: { value: '下一等级：', style: null },
							en: { value: 'Next level:', style: null },
						},
						闪避: {
							cn: { value: '闪避', style: null },
							en: { value: 'Evasion', style: null },
						},
						暴击: {
							cn: { value: '暴击', style: null },
							en: { value: 'Critical hit', style: null },
						},
						'属性：': {
							cn: { value: '属性：', style: null },
							en: { value: 'Value:', style: null },
						},
						锤子提示: {
							cn: {
								value:
									'看不出来么？这是一个锤子！小锤抠缝，大锤搞定。没错，我就是王大锤！',
								style: null,
							},
							en: { value: 'A hammer', style: null },
						},
						装备合成: {
							cn: { value: '装备合成', style: null },
							en: { value: 'Merge equipments', style: null },
						},
						只显示能合成的装备: {
							cn: { value: '只显示能合成的装备', style: null },
							en: {
								value: 'Screen mergeable equipments',
								style: null,
							},
						},
						一键合成: {
							cn: { value: '一键合成', style: null },
							en: { value: 'Merge', style: null },
						},
						合装备提示: {
							cn: {
								value: '三个同一装备可合成更强大的装备。',
								style: null,
							},
							en: {
								value:
									'Merge 3 equipments\nto get a better one',
								style: null,
							},
						},
						选择你想合成的装备: {
							cn: { value: '选择你想合成的装备', style: null },
							en: {
								value: 'Choose equipments you want to merge',
								style: null,
							},
						},
						卷轴详情: {
							cn: { value: '卷轴详情', style: null },
							en: { value: 'Scroll detail', style: null },
						},
						蓝色: {
							cn: { value: '蓝色', style: null },
							en: { value: 'Blue', style: null },
						},
						绿色: {
							cn: { value: '绿色', style: null },
							en: { value: 'Green', style: null },
						},
						白色: {
							cn: { value: '白色', style: null },
							en: { value: 'White', style: null },
						},
						一键添加: {
							cn: { value: '一键添加', style: null },
							en: { value: 'Add', style: null },
						},
						一键熔炼: {
							cn: { value: '一键熔炼', style: null },
							en: { value: 'Fuse', style: null },
						},
						装备熔炼: {
							cn: { value: '装备熔炼', style: null },
							en: { value: 'Fuse equipments', style: null },
						},
						'小提示：回到主页不会丢失当前游戏进度': {
							cn: {
								value: '小提示：回到主页不会丢失当前游戏进度',
								style: null,
							},
							en: {
								value:
									'Tip: You can go back to main page without losing game progress.',
								style: null,
							},
						},
						已学会的能力: {
							cn: { value: '已学会的能力', style: null },
							en: {
								value: 'Already learned skills',
								style: null,
							},
						},
						暂停: {
							cn: { value: '暂停', style: null },
							en: { value: 'Pause', style: null },
						},
						'今日剩余次数：2': {
							cn: { value: '今日剩余次数：2', style: null },
							en: {
								value: 'Available chances today: 2',
								style: null,
							},
						},
						购买金币: {
							cn: { value: '购买金币', style: null },
							en: { value: 'Buy gold coins', style: null },
						},
						购买体力: {
							cn: { value: '购买体力', style: null },
							en: { value: 'Buy powers', style: null },
						},
						邀请玩家: {
							cn: { value: '邀请玩家', style: null },
							en: { value: 'Invite friends', style: null },
						},
						未邀请: {
							cn: { value: '未邀请', style: null },
							en: { value: 'Not invited', style: null },
						},
						已领取: {
							cn: { value: '已领取', style: null },
							en: { value: 'Already received', style: null },
						},
						邀请玩家领钻石: {
							cn: { value: '邀请玩家领钻石', style: null },
							en: {
								value: 'Invite friends to receive diamonds',
								style: null,
							},
						},
						排行榜: {
							cn: { value: '排行榜', style: null },
							en: { value: 'Ranking', style: null },
						},
						请选择一项天使的馈赠: {
							cn: { value: '请选择一项天使的馈赠', style: null },
							en: {
								value: 'Choose a gift from angel',
								style: null,
							},
						},
						降低概率: {
							cn: { value: '降低概率', style: null },
							en: { value: 'Chance↓', style: null },
						},
						签约: {
							cn: { value: '签约', style: null },
							en: { value: 'Accept', style: null },
						},
						不签: {
							cn: { value: '不签', style: null },
							en: { value: 'Decline', style: null },
						},
						概率失去生命上限: {
							cn: { value: '概率失去$num$生命上限', style: null },
							en: {
								value: 'Possibly reduce $num$ max HP',
								style: null,
							},
						},
						签订契约可获得: {
							cn: { value: '签订契约可获得', style: null },
							en: { value: 'Accept to receive', style: null },
						},
						免费抽奖: {
							cn: { value: '免费抽奖', style: null },
							en: { value: 'Free lucky try', style: null },
						},
						'60分钟': {
							cn: { value: '60分钟', style: null },
							en: { value: '60 minutes', style: null },
						},
						双倍领取: {
							cn: { value: '双倍领取', style: null },
							en: { value: 'Get x2', style: null },
						},
						'7日签到奖励': {
							cn: { value: '7日签到奖励', style: null },
							en: { value: 'Day 7 bonus', style: null },
						},
						守护者: {
							cn: { value: '守护者', style: null },
							en: { value: 'Guard', style: null },
						},
						更换守护者: {
							cn: { value: '更换守护者', style: null },
							en: { value: 'Change guard', style: null },
						},
						金思聪: {
							cn: { value: '金思聪', style: null },
							en: { value: 'Golden wise', style: null },
						},
						守护者详情: {
							cn: { value: '守护者详情', style: null },
							en: { value: 'Guard detail', style: null },
						},
						守护合成: {
							cn: { value: '守护合成', style: null },
							en: { value: 'Merge guards', style: null },
						},
						合守护者提示: {
							cn: {
								value: '三个同一守护者可合成更强大的\n守护者。',
								style: null,
							},
							en: {
								value: 'Merge 3 guards to \nget a better one',
								style: null,
							},
						},
						选择你想合成的守护者: {
							cn: { value: '选择你想合成的守护者', style: null },
							en: {
								value: 'Choose guards you want to merge',
								style: null,
							},
						},
						守护者合成: {
							cn: { value: '守护者合成', style: null },
							en: { value: 'Merge guards', style: null },
						},
						战斗: {
							cn: { value: '战斗', style: null },
							en: { value: 'Fight', style: null },
						},
						天赋: {
							cn: { value: '天赋', style: null },
							en: { value: 'Talent', style: null },
						},
						木叶传说: {
							cn: { value: '木叶传说', style: null },
							en: { value: 'Woody Legend', style: null },
						},
						'没错，我就是魔鬼！': {
							cn: { value: '没错，我就是魔鬼！', style: null },
							en: { value: 'Hi, I am Mr. Myth!', style: null },
						},
						获得天赋: {
							cn: { value: '获得天赋', style: null },
							en: { value: 'Gain talent', style: null },
						},
						合成成功: {
							cn: { value: '合成成功', style: null },
							en: { value: 'Merged', style: null },
						},
						已签到: {
							cn: { value: '已签到', style: null },
							en: { value: 'Completed', style: null },
						},
						已装备: {
							cn: { value: '已装备', style: null },
							en: { value: 'Equiped', style: null },
						},
						战斗结束: {
							cn: { value: '战斗结束', style: null },
							en: { value: 'Finished', style: null },
						},
						'x后+1': {
							cn: { value: '$num$后+1', style: null },
							en: { value: 'After $num$ +1', style: null },
						},
						'最高层数：18/50': {
							cn: { value: '最高层数：18/50', style: null },
							en: { value: 'Highest leve: 18/50', style: null },
						},
						攻击增加: {
							cn: { value: '攻击增加', style: null },
							en: { value: 'increase attack', style: null },
						},
						中: {
							cn: { value: '中', style: null },
							en: { value: 'middle', style: null },
						},
						攻速增加: {
							cn: { value: '攻速增加', style: null },
							en: { value: 'increase attack speed', style: null },
						},
						大: {
							cn: { value: '大', style: null },
							en: { value: 'large', style: null },
						},
						'增加15%/30%伤害减免': {
							cn: { value: '增加15%/30%伤害减免', style: null },
							en: {
								value: 'increase 15%/30% damage reduction',
								style: null,
							},
						},
						'全体每隔10s隐匿2/4秒': {
							cn: { value: '全体每隔10s隐匿2/4秒', style: null },
							en: {
								value: 'cloak for 2s/4s every 10s',
								style: null,
							},
						},
						战锤: {
							cn: { value: '战锤', style: null },
							en: { value: 'hammer', style: null },
						},
						白: {
							cn: { value: '白', style: null },
							en: { value: 'white', style: null },
						},
						绿: {
							cn: { value: '绿', style: null },
							en: { value: 'green', style: null },
						},
						蓝: {
							cn: { value: '蓝', style: null },
							en: { value: 'blue', style: null },
						},
						紫: {
							cn: { value: '紫', style: null },
							en: { value: 'purple', style: null },
						},
						匕首: {
							cn: { value: '匕首', style: null },
							en: { value: 'dagger', style: null },
						},
						短刀: {
							cn: { value: '短刀', style: null },
							en: { value: 'short sword', style: null },
						},
						十字镖: {
							cn: { value: '十字镖', style: null },
							en: { value: 'crossdart', style: null },
						},
						手里剑: {
							cn: { value: '手里剑', style: null },
							en: { value: 'shuriken', style: null },
						},
						镰刀: {
							cn: { value: '镰刀', style: null },
							en: { value: 'reap', style: null },
						},
						飞镖: {
							cn: { value: '飞镖', style: null },
							en: { value: 'dart', style: null },
						},
						斧头: {
							cn: { value: '斧头', style: null },
							en: { value: 'axe', style: null },
						},
						橙: {
							cn: { value: '橙', style: null },
							en: { value: 'orange', style: null },
						},
						羽毛: {
							cn: { value: '羽毛', style: null },
							en: { value: 'feather', style: null },
						},
						弓箭: {
							cn: { value: '弓箭', style: null },
							en: { value: 'bow', style: null },
						},
						弩箭: {
							cn: { value: '弩箭', style: null },
							en: { value: 'crossbow', style: null },
						},
						锁子甲: {
							cn: { value: '锁子甲', style: null },
							en: { value: 'mail', style: null },
						},
						荆棘之铠: {
							cn: { value: '荆棘之铠', style: null },
							en: { value: 'armor of thorn', style: null },
						},
						深渊魔甲: {
							cn: { value: '深渊魔甲', style: null },
							en: { value: 'armor of abyss', style: null },
						},
						天魔甲: {
							cn: { value: '天魔甲', style: null },
							en: { value: 'armor of demon', style: null },
						},
						魔抗斗篷: {
							cn: { value: '魔抗斗篷', style: null },
							en: { value: 'mana resist cloak', style: null },
						},
						银鳞胸甲: {
							cn: { value: '银鳞胸甲', style: null },
							en: { value: 'silver cuirass', style: null },
						},
						命运之戒: {
							cn: { value: '命运之戒', style: null },
							en: { value: 'destiny ring', style: null },
						},
						启示指环: {
							cn: { value: '启示指环', style: null },
							en: { value: 'enlightenment ring', style: null },
						},
						潜能之戒: {
							cn: { value: '潜能之戒', style: null },
							en: { value: 'potential ring', style: null },
						},
						贪婪指环: {
							cn: { value: '贪婪指环', style: null },
							en: { value: 'desire ring', style: null },
						},
						治疗指环: {
							cn: { value: '治疗指环', style: null },
							en: { value: 'heal ring', style: null },
						},
						智者指环: {
							cn: { value: '智者指环', style: null },
							en: { value: 'wisdom ring', style: null },
						},
						火焰项链: {
							cn: { value: '火焰项链', style: null },
							en: { value: 'fire necklace', style: null },
						},
						君王护符: {
							cn: { value: '君王护符', style: null },
							en: { value: 'monarch amulet', style: null },
						},
						凝泪微华: {
							cn: { value: '凝泪微华', style: null },
							en: { value: 'tear gem', style: null },
						},
						时空之轮: {
							cn: { value: '时空之轮', style: null },
							en: { value: 'wheel of time', style: null },
						},
						永恒之链: {
							cn: { value: '永恒之链', style: null },
							en: { value: 'eternal necklace', style: null },
						},
						小: {
							cn: { value: '小', style: null },
							en: { value: 'small', style: null },
						},
						每隔10s无敌2s: {
							cn: { value: '每隔10s无敌2s', style: null },
							en: {
								value: 'invincible for 2s every 10s',
								style: null,
							},
						},
						广告加载中: {
							cn: { value: '广告加载中', style: null },
							en: { value: 'Advertising loading', style: null },
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		LaserAtk: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '945c4g/pmxC457r3d0+rzsO', 'LaserAtk'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {
							;(this.miaozhunTime = 1),
								(this.delayTime = 0.5),
								(this.showTime = 0.5),
								(this.time = 0),
								(this.isOver = !1)
						},
						init: function (f) {
							;(this.mnode = f.node),
								(this.tnode = f.tnode),
								(this.atkPower = f.atkPower),
								(this.id = f.id),
								this.moveLine()
						},
						moveLine: function () {
							var f = this.mnode,
								v = this.tnode,
								C = cc.v2(v.x, v.y).sub(cc.v2(f.x, f.y)),
								b = (180 * Math.atan2(C.y, C.x)) / Math.PI
							;(b = 360 - b + 90), (this.node.angle = -b)
						},
						getAtkPower: function () {
							return this.atkPower
						},
						update: function (f) {
							this.mnode.isValid
								? cc
										.find('Canvas')
										.getComponent('Game')
										.getGameIsOver() ||
								  cc
										.find('Canvas')
										.getComponent('Game')
										.getGamePause() ||
								  ((this.node.x = this.mnode.x),
								  (this.node.y = this.mnode.y),
								  (this.time += f),
								  this.time > this.miaozhunTime
										? (this.node.getChildByName('icon')
												.active &&
												(this.node.getChildByName(
													'icon'
												).active = !1),
										  this.time >
												this.miaozhunTime +
													this.delayTime &&
												(this.time >
												this.miaozhunTime +
													this.delayTime +
													this.showTime
													? this.isOver ||
													  this.node.destroy()
													: this.node.getChildByName(
															'line'
													  ).active ||
													  (this.node.getChildByName(
															'line'
													  ).active = !0)))
										: this.moveLine())
								: this.node.destroy()
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		Loading: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'eb886y2EdxEyp8zawzgKPVL', 'Loading')
				var b = o(f('./platforms/pfLq')),
					_ = o(f('./Myself'))
				function o(f) {
					return f && f.__esModule ? f : { default: f }
				}
				var w = f('Config')
				b.default.init(),
					b.default.onLaunch(),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {
							;(cc.myself = _.default),
								console.log('--------loading-------')
						},
						start: function () {
							var f = this
							b.default.hideLoading(),
								(this.time = 0),
								(this.isGo = !1),
								(this.isLoad = !0),
								(this.isLogin = !0),
								(this.startScene = ''),
								b.default.onLoading(
									this,
									function (v) {
										if (
											((f.node
												.getChildByName('p')
												.getChildByName('bar')
												.getComponent(
													cc.Sprite
												).fillRange = v / 100),
											(f.node
												.getChildByName('text')
												.getComponent(
													cc.Label
												).string = ''.concat(v, '%')),
											!(v < 100))
										)
											switch (f.startScene) {
												case 'GameScene':
													cc.director.loadScene(
														'GameScene',
														function () {
															cc.find('Canvas')
																.getComponent(
																	'Game'
																)
																.startGuide()
														}
													)
													break
												case 'MainScene':
													cc.director.loadScene(
														'MainScene'
													)
											}
									},
									{ totalSize: 5e3, float: 2 }
								),
								(this.startScene =
									0 == cc.myself.bigMapMaxNum
										? 'GameScene'
										: 'MainScene'),
								cc.director.preloadScene(
									this.startScene,
									null,
									function (v, C) {
										switch (f.startScene) {
											case 'GameScene':
												cc.loader.loadResArray(
													[
														'pre/bigMap/bigMapDown_1',
														'pre/bigMap/bigMapUp_1',
													],
													function () {
														b.default.loadingOver()
													}
												)
												break
											case 'MainScene':
												b.default.loadingOver()
										}
									}
								)
						},
						getCustomInfo: function () {
							var f = this
							cc.myself.xmlhttprequest(
								w.houtaiUrl + 'custom/',
								'POST',
								{ gameid: w.gameid },
								function (v) {
									try {
										v = JSON.parse(v)
									} catch (f) {
										return console.log('data is not json')
									}
									console.log('custom', v),
										(cc.myself.custom = v),
										f.showWeChatAd(v),
										f.aloneLogin()
								}
							)
						},
						aloneLogin: function () {
							cc.myself.xmlhttprequest(
								w.houtaiUrl + 'shstatus/',
								'POST',
								{ gameid: w.gameid, v: w.version },
								function (f) {
									try {
										f = JSON.parse(f)
									} catch (f) {
										return console.log(
											f,
											'parse json error'
										)
									}
									cc.myself.isShenhe ||
										(cc.myself.isShenhe = 1 == f),
										cc.myself.xmlhttprequest(
											w.houtaiUrl + 'share/',
											'POST',
											{ gameid: cc.myself.gid, sh: f },
											function (f) {
												try {
													f = JSON.parse(f)
												} catch (f) {
													return console.log(
														'data is not json'
													)
												}
												console.log(
													'sharelist data',
													f
												),
													(cc.myself.sharelist = f)
											}
										)
								}
							)
						},
						resetAd: function () {
							var f = this,
								v = this
							if (
								(console.log('adalone', cc.myself.adAlone),
								cc.myself.adAlone.length > 0)
							) {
								var C = cc.myself.adAlone[0],
									b = this.node
										.getChildByName('ui')
										.getChildByName('hotgame')
								cc.loader.load(
									{ url: C.pic, type: 'png' },
									function (f, v) {
										b
											.getChildByName('icon')
											.getComponent(
												cc.Sprite
											).spriteFrame = new cc.SpriteFrame(
											v
										)
									}
								),
									(b
										.getChildByName('name')
										.getComponent(cc.Label).string =
										C.title),
									(b.name = C.position)
								var _ = b.getComponent(cc.Button).clickEvents[0]
								;(_.target = v.node),
									(_.component = 'GameScene'),
									(_.handler = 'jumptomoregame'),
									(_.customEventData = C.appid)
								var w = cc.myself.adAlone[1]
								if (w) {
									var N = this.node
										.getChildByName('ui')
										.getChildByName('hotgame2')
									cc.loader.load(
										{ url: w.pic, type: 'png' },
										function (f, v) {
											N.getChildByName(
												'icon'
											).getComponent(
												cc.Sprite
											).spriteFrame = new cc.SpriteFrame(
												v
											)
										}
									),
										(N.getChildByName('name').getComponent(
											cc.Label
										).string = w.title),
										(N.name = w.position)
									var k = N.getComponent(cc.Button)
										.clickEvents[0]
									;(k.target = v.node),
										(k.component = 'GameScene'),
										(k.handler = 'jumptomoregame'),
										(k.customEventData = w.appid)
								} else {
									w = cc.myself.adAlone[0]
									var L = this.node
										.getChildByName('ui')
										.getChildByName('hotgame2')
									cc.loader.load(
										{ url: dadata2ta.pic, type: 'png' },
										function (f, v) {
											L.getChildByName(
												'icon'
											).getComponent(
												cc.Sprite
											).spriteFrame = new cc.SpriteFrame(
												v
											)
										}
									),
										(L.getChildByName('name').getComponent(
											cc.Label
										).string = w.title),
										(L.name = w.position)
									var B = L.getComponent(cc.Button)
										.clickEvents[0]
									;(B.target = v.node),
										(B.component = 'GameScene'),
										(B.handler = 'jumptomoregame'),
										(B.customEventData = w.appid)
								}
							}
							for (
								var h = function (C) {
										var b = cc.myself.adList1[C],
											_ = cc.instantiate(f.moreGameNode)
										cc.loader.load(
											{ url: b.pic, type: 'png' },
											function (f, v) {
												_.getChildByName(
													'icon'
												).getComponent(
													cc.Sprite
												).spriteFrame = new cc.SpriteFrame(
													v
												)
											}
										),
											(_.getChildByName(
												'name'
											).getComponent(cc.Label).string =
												b.title),
											(_.getChildByName(
												'di_' + (C % 3)
											).active = !0),
											(_.name = b.position)
										var w = _.getComponent(cc.Button)
											.clickEvents[0]
										;(w.target = v.node),
											(w.component = 'GameScene'),
											(w.handler = 'jumptomoregame'),
											(w.customEventData = b.appid),
											f.node
												.getChildByName('more')
												.getChildByName('more')
												.getChildByName('board')
												.getChildByName('scrollview')
												.getChildByName('content')
												.addChild(_)
									},
									S = 0;
								S < cc.myself.adList1.length;
								S++
							)
								h(S)
							for (
								var d = function (C) {
										var b = cc.myself.adList2[C],
											_ = cc.instantiate(f.moreGameNode2)
										cc.loader.load(
											{ url: b.pic, type: 'png' },
											function (f, v) {
												_.getChildByName(
													'icon'
												).getComponent(
													cc.Sprite
												).spriteFrame = new cc.SpriteFrame(
													v
												)
											}
										),
											(_.name = b.position)
										var w = _.getComponent(cc.Button)
											.clickEvents[0]
										;(w.target = v.node),
											(w.component = 'GameScene'),
											(w.handler = 'jumptomoregame'),
											(w.customEventData = b.appid),
											(_.x = 60 + 110 * C),
											cc.myself.adList2.length > 5 &&
												_.runAction(
													cc.repeatForever(
														cc.sequence(
															cc.moveBy(
																2 *
																	(cc.myself
																		.adList2
																		.length -
																		5) *
																	1.15,
																cc.v2(
																	110 *
																		-(
																			cc
																				.myself
																				.adList2
																				.length -
																			5
																		),
																	0
																)
															),
															cc.delayTime(1),
															cc.moveBy(
																2 *
																	(cc.myself
																		.adList2
																		.length -
																		5) *
																	1.15,
																cc.v2(
																	110 *
																		(cc
																			.myself
																			.adList2
																			.length -
																			5),
																	0
																)
															),
															cc.delayTime(1)
														)
													)
												),
											f.node
												.getChildByName('ui')
												.getChildByName('aiplay')
												.getChildByName('scrollview')
												.getChildByName('content')
												.addChild(_)
									},
									M = 0;
								M < cc.myself.adList2.length;
								M++
							)
								d(M)
							for (
								var m = function (C) {
										var b = cc.myself.adList2[C],
											_ = cc.instantiate(f.moreGameNode2)
										cc.loader.load(
											{ url: b.pic, type: 'png' },
											function (f, v) {
												_.getChildByName(
													'icon'
												).getComponent(
													cc.Sprite
												).spriteFrame = new cc.SpriteFrame(
													v
												)
											}
										),
											(_.name = b.position)
										var w = _.getComponent(cc.Button)
											.clickEvents[0]
										;(w.target = v.node),
											(w.component = 'GameScene'),
											(w.handler = 'jumptomoregame'),
											(w.customEventData = b.appid),
											f.node
												.getChildByName('ui')
												.getChildByName('youplay')
												.getChildByName('scrollview')
												.getChildByName('content')
												.addChild(_)
									},
									I = 0;
								I < cc.myself.adList2.length;
								I++
							)
								m(I)
						},
						jumptomoregame: function (f, v) {
							for (var C, b = 0; b < cc.myself.adList.length; b++)
								if (cc.myself.adList[b].appid == v) {
									C = cc.myself.adList[b]
									break
								}
							var _ = Number(f.target.name)
							console.log('position', _),
								_ >= 31 &&
									_ <= 40 &&
									cc.myself.aldSendEvent('游戏跳转_试玩', {
										name: C.title,
									}),
								_ >= 3 &&
									_ <= 20 &&
									cc.myself.aldSendEvent('游戏跳转_侧边', {
										name: C.title,
									}),
								_ >= 21 &&
									_ <= 30 &&
									cc.myself.aldSendEvent('游戏跳转_底边', {
										name: C.title,
									}),
								_ >= 41 &&
									_ <= 50 &&
									cc.myself.aldSendEvent('游戏跳转_暗跳', {
										name: C.title,
									}),
								(1 != _ && 2 != _) ||
									cc.myself.aldSendEvent('游戏跳转_单个', {
										name: C.title,
									}),
								cc.myself.aldSendEvent('游戏跳转_总', {
									name: C.title,
								}),
								'undefined' != typeof wx &&
									(1 == +C.type
										? wx.navigateToMiniProgram({
												appId: C.appid,
												path: C.path,
												extraData: {
													msssg: 'from 宝石粉碎',
												},
												success: function () {
													console.log('跳转成功')
												},
												fail: function () {
													console.log('跳转失败'),
														wx.navigateToMiniProgram(
															{
																appId: C.appid,
																path: C.path,
																extraData: {
																	msssg:
																		'from 宝石粉碎',
																},
															}
														)
												},
										  })
										: 2 == +C.type &&
										  wx.previewImage({ urls: [C.spic] }))
						},
						addShouquan: function () {
							if (
								'true' == cc.myself.custom.authRequired &&
								!cc.myself.chidNum
							) {
								var f = this,
									v = cc.view.getFrameSize(),
									C = cc.director.getWinSize()
								C.width,
									v.width,
									C.height,
									v.height,
									wx.getSystemInfo({
										success: function (v) {
											f.loginbtn = wx.createUserInfoButton(
												{
													type: 'image',
													image: '',
													style: {
														width: 1e3,
														height: 2e3,
													},
												}
											)
										},
									}),
									f.loginbtn.onTap(function (v) {
										if (v.iv) {
											f.loginbtn.destroy()
											var C = {
												iv: v.iv,
												encryptedData: v.encryptedData,
											}
											LQSDK.gameauth(C, function (f) {
												console.log(
													'gameauth:' +
														JSON.stringify(f)
												)
											}),
												(cc.myself.custom.authRequired = !1),
												cc.myself.xmlhttprequest(
													w.houtaiUrl + 'aloneuid/',
													'POST',
													{
														iv: v.iv,
														encryptedData:
															v.encryptedData,
														jscode:
															cc.myself.jscode,
														gameid: w.gameid,
													},
													function (f) {
														try {
															f = JSON.parse(f)
														} catch (f) {
															return console.log(
																'data is not json'
															)
														}
														;(cc.myself.uid =
															f.data.uid),
															(cc.myself.isnew =
																f.data.isnew)
														var v = wx.getLaunchOptionsSync()
															.query
														console.log('info', v),
															v &&
																v.uid &&
																cc.myself.xmlhttprequest(
																	'',
																	'POST',
																	{
																		gameid:
																			w.gameid,
																		uid:
																			v.uid,
																		suid:
																			cc
																				.myself
																				.uid,
																	},
																	function (
																		f
																	) {
																		console.log(
																			'invite',
																			f
																		)
																	}
																)
													}
												)
										} else 'true' == cc.myself.custom.gameSkip && ((cc.myself.custom.authRequired = !1), f.loginbtn.destroy())
									})
							}
						},
						showWeChatAd: function (f) {
							if ('undefined' != typeof wx) {
								var v = []
								for (var C in f)
									if (-1 != C.indexOf('?chid=')) {
										var _ = parseFloat(f[C]),
											w = C.substr(C.length - 3)
										v.push([parseInt(w), _])
									}
								var N = wx.getLaunchOptionsSync()
								console.log('LaunchOption', N)
								var k = N.query
								if (
									(k &&
										k.shareQuery &&
										cc.myself.aldSendEvent(
											'从' + k.shareQuery + '分享图进来',
											{ query: k.shareQuery }
										),
									k &&
										k.gift &&
										((1 != k.gift &&
											2 != k.gift &&
											3 != k.gift &&
											4 != k.gift) ||
											(0 == cc.myself.getGZGift
												? (cc.myself.tips(
														b.default.lang(
															'钻石+x',
															{
																data: {
																	num: 50,
																},
															}
														)
												  ),
												  (cc.myself.diamond += 50),
												  cc.myself.setLocalData(
														'diamond',
														cc.myself.diamond
												  ),
												  cc.myself.setLocalData(
														'getGZGift',
														1
												  ))
												: cc.myself.tips(
														b.default.lang(
															'您已领取过该奖励'
														)
												  ))),
									k && k.chid)
								) {
									var L = k.chid
									for (var B in v) {
										var S = v[B]
										if (S[0] == L) {
											;(cc.myself.isChid = !0),
												(cc.myself.chidNum = S[0]),
												(cc.myself.isShenhe = 1 == S[1])
											break
										}
									}
									cc.myself.chidNum ||
										(cc.myself.isShenhe = !1)
								} else
									(1005 != N.scene &&
										1006 != N.scene &&
										1027 != N.scene &&
										1042 != N.scene &&
										1053 != N.scene &&
										1054 != N.scene &&
										1055 != N.scene &&
										1106 != N.scene) ||
										(cc.myself.custom.sousuopinbi &&
											(cc.myself.isShenhe = !0))
								if (
									1047 == N.scene ||
									1048 == N.scene ||
									1011 == N.scene
								)
									if (void 0 !== N.query.scene) {
										var M = decodeURIComponent(
											N.query.scene
										)
										if (-1 != M.indexOf('&')) {
											var I = M.split('&'),
												x = []
											for (var q in I) {
												var P = I[q].split('=')
												x[P[0]] = P[1]
											}
											if (
												(console.log(
													'------decodeURIComponent--',
													M,
													x
												),
												x.chid)
											) {
												for (var A in v) {
													var T = v[A]
													if (T[0] == x.chid) {
														;(cc.myself.isChid = !0),
															(cc.myself.chidNum =
																T[0]),
															(cc.myself.isShenhe =
																1 == T[1])
														break
													}
												}
												cc.myself.chidNum ||
													(cc.myself.isShenhe = !1)
											} else
												cc.myself.erweimapinbi &&
													(cc.myself.isShenhe = !0)
										} else
											cc.myself.erweimapinbi &&
												(cc.myself.isShenhe = !0)
									} else
										cc.myself.erweimapinbi &&
											(cc.myself.isShenhe = !0)
							}
						},
						noFaceShow: function () {
							cc.myself.custom &&
								2 == parseInt(cc.myself.custom.noFaceModel) &&
								this.node.getChildByName('ui')
						},
					}),
					cc._RF.pop()
			},
			{
				'./Myself': 'Myself',
				'./platforms/pfLq': 'pfLq',
				Config: 'Config',
			},
		],
		Main: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '68f83bMU5BMiqXMkHry0MOz', 'Main')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {
						equipItem: cc.Prefab,
						equipContent: cc.Prefab,
						workmateItem: cc.Prefab,
						discription: cc.Prefab,
						discription2: cc.Prefab,
						cpNode: cc.Prefab,
						flyGoldNode: cc.Prefab,
						equipPageContent: cc.Prefab,
						workmatePageContent: cc.Prefab,
					},
					onLoad: function () {
						;(this.touchCaidanTime = 0),
							(this.touchCaidanNum = 0),
							(this.isStart = !1),
							(this.workmatePageHeightNum = 3),
							(this.workmatePageSyNum = 0),
							(this.equipPageHeightNum = 4),
							(this.equipPageSyNum = 0),
							(this.createEquipPageNum = 0),
							(this.createWorkmatePageNum = 0),
							(this.equipTypeList = [
								'weapon',
								'clothes',
								'ring',
								'necklace',
								'scroll',
							]),
							(this.nowShowEquipType = 'weapon'),
							cc.myself.chidNum
								? ((this.node
										.getChildByName('battle')
										.getChildByName('chouti').active = !1),
								  (this.node
										.getChildByName('top')
										.getChildByName('hotgame').active = !1))
								: this.resetAloneAd()
					},
					start: function () {
						var f = this
						cc.director.preloadScene('GameScene'),
							(this.nowType = 'battle'),
							this.node
								.getChildByName('talent')
								.getChildByName('bg')
								.on(
									cc.Node.EventType.TOUCH_END,
									function (f) {
										f.stopPropagation(),
											this.disNode &&
												(this.disNode.destroy(),
												(this.disNode = null))
									},
									this
								),
							this.node
								.getChildByName('workmate')
								.getChildByName('bg')
								.on(
									cc.Node.EventType.TOUCH_END,
									function (f) {
										f.stopPropagation(),
											this.disNode &&
												(this.disNode.destroy(),
												(this.disNode = null))
									},
									this
								),
							this.resetBattleUI(),
							cc.myself.checkBuff(),
							(this.buttonDelayTime = 0),
							(this.talenetSpine = this.node
								.getChildByName('talent')
								.getChildByName('spnode')
								.getChildByName('uplevelSpine')),
							this.talenetSpine
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									f.talenetSpine.x = 1e4
								})
						for (var v = cc.myself.bigMapNum; v > 0; v--) {
							var C = new cc.Node(),
								b = C.addComponent(cc.Sprite),
								w = v % _.gameSetting.maxBigMapSucaiNum
							0 == w && (w = _.gameSetting.maxBigMapSucaiNum),
								cc.myself.asyncShowImage(b, 'ui/ditu' + w, [
									400,
									450,
								]),
								this.node
									.getChildByName('battle')
									.getChildByName('worldpic')
									.getChildByName('pageview')
									.getComponent(cc.PageView)
									.addPage(C)
						}
						if (
							(this.node
								.getChildByName('battle')
								.getChildByName('worldpic')
								.getChildByName('pageview')
								.getComponent(cc.PageView)
								.setCurrentPageIndex(cc.myself.bigMapNum - 1),
							2 != parseInt(cc.myself.isnew) ||
								cc.myself.isToday(cc.myself.signInTime) ||
								this.showSignIn(),
							window.wx)
						)
							if (this.feedbackBtn) this.feedbackBtn.show()
							else {
								var N = cc.view.getFrameSize(),
									k = cc.director.getWinSize()
								setTimeout(function () {
									var v = f.node.getChildByName('top').y
									;(f.feedbackBtn = wx.createFeedbackButton({
										type: 'image',
										image: '',
										style: {
											left:
												((0.5 * k.width - 233 - 27.5) /
													k.width) *
												N.width,
											top:
												((0.5 * k.height -
													122.5 -
													27.5 -
													v) /
													k.height) *
												N.height,
											width: (55 / k.width) * N.width,
											height: (55 / k.height) * N.height,
										},
									})),
										f.feedbackBtnShow()
								}, 1e3)
							}
						this.wxLogin(),
							setTimeout(function () {
								var v = 2 * f.node.getChildByName('top').y
								;(f.node
									.getChildByName('equip')
									.getChildByName('scrollview').height += v),
									(f.node
										.getChildByName('equip')
										.getChildByName('scrollview')
										.getChildByName('content').height += v),
									(f.node
										.getChildByName('equip')
										.getChildByName('scrollview')
										.getChildByName('indicator').y -= v),
									(f.node
										.getChildByName('workmate')
										.getChildByName('down_content')
										.getChildByName(
											'scrollview'
										).height += v),
									(f.node
										.getChildByName('workmate')
										.getChildByName('down_content')
										.getChildByName('scrollview')
										.getChildByName('content').height += v),
									(f.node
										.getChildByName('workmate')
										.getChildByName('down_content')
										.getChildByName('scrollview')
										.getChildByName('indicator').y -= v)
								var C = Math.floor(v / 140),
									b = v % 140
								;(f.workmatePageHeightNum += C),
									(f.workmatePageSyNum += Math.floor(
										b / (f.workmatePageHeightNum - 1)
									))
								var _ = Math.floor(v / 120),
									w = v % 120
								;(f.equipPageHeightNum += _),
									(f.equipPageSyNum += Math.floor(
										w / (f.equipPageHeightNum - 1)
									))
							}, 1e3)
					},
					feedbackBtnShow: function () {
						this.feedbackBtn && this.feedbackBtn.show()
					},
					feedbackBtnHide: function () {
						this.feedbackBtn && this.feedbackBtn.hide()
					},
					resetAloneAd: function () {
						if (cc.myself.aloneAdList) {
							var f, v
							for (
								5 == cc.myself.oneAdList.length &&
								(cc.myself.oneAdList = []);
								!f;

							) {
								var C = Math.floor(5 * Math.random()) + 1
								;-1 == cc.myself.oneAdList.indexOf(C) && (f = C)
							}
							for (
								var b = 0;
								b < cc.myself.aloneAdList.length;
								b++
							)
								if (cc.myself.aloneAdList[b].position == f) {
									v = cc.myself.aloneAdList[b]
									break
								}
							if (v) {
								var _ = this.node
									.getChildByName('top')
									.getChildByName('hotgame')
								cc.loader.load(
									{ url: v.pic, type: 'png' },
									function (f, v) {
										_.getChildByName('icon').getComponent(
											cc.Sprite
										).spriteFrame = new cc.SpriteFrame(v)
									}
								),
									(_.getChildByName('di').getComponent(
										cc.Button
									).clickEvents[0].customEventData = v.id)
							}
						}
					},
					aloneAdJump: function (f, v) {
						for (
							var C, b = this, _ = 0;
							_ < cc.myself.adList.length;
							_++
						)
							if (cc.myself.adList[_].id == v) {
								C = cc.myself.adList[_]
								break
							}
						C
							? 'undefined' != typeof wx &&
							  (1 == +C.type
									? wx.navigateToMiniProgram({
											appId: C.appid,
											path: C.path,
											extraData: {
												msssg: 'from 木叶传说',
											},
											success: function () {
												console.log('跳转成功'),
													cc.myself.aldSendEvent(
														'游戏跳转_单个',
														{ name: C.title }
													),
													cc.myself.oneAdList.push(
														Number(C.position)
													),
													b.resetAloneAd()
											},
											fail: function () {},
									  })
									: 2 == +C.type &&
									  wx.previewImage({ urls: [C.spic] }))
							: console.error('没找到广告数据')
					},
					startGame: function () {
						if (!this.isStart) {
							if (cc.myself.strength < 5)
								return (
									cc.myself.tips(Lq.lang('体力不足')),
									void this.showHealthLack()
								)
							if ('{}' == JSON.stringify(cc.myself.pauseData)) {
								this.isStart = !0
								var f = new cc.Node(),
									v = f.addComponent(cc.Sprite)
								cc.myself.asyncShowImage(
									v,
									'ui/icon_strength',
									[32, 50]
								),
									(f.position = this.node
										.getChildByName('top')
										.getChildByName('health').position),
									(f.y += this.node.getChildByName('top').y),
									this.node.addChild(f)
								var C = this.node
									.getChildByName('battle')
									.getChildByName('startgame').position
								f.runAction(
									cc.sequence(
										cc.moveTo(1, C),
										cc.callFunc(function () {
											cc.myself.aldSendEvent(
												'点击开始游戏'
											),
												(cc.myself.strength -= 5),
												cc.myself.setLocalData(
													'strength',
													cc.myself.strength
												),
												cc.myself.resetGameData(),
												cc.director.loadScene(
													'GameScene'
												)
										})
									)
								),
									this.feedbackBtnHide()
							} else cc.myself.showPre('pre/continue')
						}
					},
					resetTopUI: function () {
						var f = this.node.getChildByName('top')
						;(f
							.getChildByName('health')
							.getChildByName('num')
							.getComponent(cc.Label).string =
							cc.myself.strength),
							(f
								.getChildByName('coin')
								.getChildByName('num')
								.getComponent(cc.Label).string =
								cc.myself.gold),
							(f
								.getChildByName('diamond')
								.getChildByName('num')
								.getComponent(cc.Label).string =
								cc.myself.diamond)
					},
					resetBattleUI: function () {
						var f = this.node.getChildByName('battle'),
							v = f.getChildByName('word_1'),
							C = f.getChildByName('worldpic')
						v
							.getChildByName('world_num')
							.getComponent(cc.Label).string = Lq.lang(
							'地图x',
							null,
							{ data: { num: cc.myself.bigMapNum } }
						)
						var b =
							cc.myself.bigMapNum %
							_.gameSetting.maxBigMapSucaiNum
						0 == b && (b = _.gameSetting.maxBigMapSucaiNum),
							cc.myself.asyncShowImage(
								C.getChildByName('pic').getComponent(cc.Sprite),
								'ui/ditu' + b
							)
						var w = Lq.lang('最高层数', null, { data: { num: 30 } })
						cc.myself.bigMapNum ==
							Math.floor(cc.myself.bigMapMaxNum / 100) &&
							(w = Lq.lang('最高层数', null, {
								data: { num: cc.myself.bigMapFloor },
							})),
							(v
								.getChildByName('position')
								.getComponent(cc.Label).string = w)
					},
					mapScroll: function (f, v) {
						;(cc.myself.bigMapNum =
							f.getComponent(cc.PageView).getCurrentPageIndex() +
							1),
							this.resetBattleUI()
					},
					mapLeft: function () {
						1 != cc.myself.bigMapNum
							? (cc.myself.bigMapNum--,
							  this.node
									.getChildByName('battle')
									.getChildByName('worldpic')
									.getChildByName('pageview')
									.getComponent(cc.PageView)
									.setCurrentPageIndex(
										cc.myself.bigMapNum - 1
									),
							  this.resetBattleUI())
							: cc.myself.tips(Lq.lang('已到初始地图'))
					},
					mapRight: function () {
						cc.myself.bigMapNum >=
						Math.floor(cc.myself.bigMapMaxNum / 100)
							? cc.myself.tips(Lq.lang('已到最新地图'))
							: (cc.myself.bigMapNum++,
							  this.node
									.getChildByName('battle')
									.getChildByName('worldpic')
									.getChildByName('pageview')
									.getComponent(cc.PageView)
									.setCurrentPageIndex(
										cc.myself.bigMapNum - 1
									),
							  this.resetBattleUI())
					},
					clickTable: function (f, v) {
						if (
							('battle' == v &&
								(cc.myself.getTime() - this.touchCaidanTime <
								1e3
									? (this.touchCaidanNum++,
									  this.touchCaidanNum > 15 &&
											((this.touchCaidanNum = 0),
											(cc.myself.diamond += 1e4),
											cc.myself.setLocalData(
												'diamond',
												cc.myself.diamond
											)))
									: (this.touchCaidanNum = 1),
								(this.touchCaidanTime = cc.myself.getTime())),
							v != this.nowType)
						) {
							var C = f.target.parent
							cc.myself.asyncShowImage(
								C.getChildByName(this.nowType).getComponent(
									cc.Sprite
								),
								'ui/tubiao_' + this.nowType + '1'
							),
								cc.myself.asyncShowImage(
									f.target.getComponent(cc.Sprite),
									'ui/tubiao_' + v + '2'
								),
								this.node.getChildByName(this.nowType) &&
									(this.node.getChildByName(
										this.nowType
									).active = !1),
								(this.node.getChildByName('top').active = !1),
								(this.nowType = v),
								this.node.getChildByName(this.nowType) &&
									(this.node.getChildByName(
										this.nowType
									).active = !0),
								('talent' != v && 'battle' != v) ||
									(this.node.getChildByName(
										'top'
									).active = !0),
								'equip' == v
									? (this.clickEquip(),
									  cc.myself.aldSendEvent(
											'点击进入装备界面'
									  ))
									: 'talent' == v
									? (this.clickTalent(),
									  cc.myself.aldSendEvent(
											'点击进入天赋界面'
									  ))
									: 'workmate' == v
									? (this.clickWorkmate(),
									  cc.myself.aldSendEvent(
											'点击进入守护者界面'
									  ))
									: 'rank' == v &&
									  cc.myself.aldSendEvent(
											'点击进入排行榜界面'
									  )
						}
					},
					clickTalent: function () {
						for (
							var f = this.node.getChildByName('talent'),
								v = f.getChildByName('content'),
								C = 0;
							C < cc.myself.tfList.length;
							C++
						) {
							;(v.children[C].getChildByName('grade')
								.getChildByName('zidi')
								.getChildByName('sum')
								.getComponent(cc.Label).string =
								cc.myself.tfList[C]),
								(v.children[C].getChildByName('lock').active =
									0 == cc.myself.tfList[C]),
								(v.children[C].getChildByName(
									'name'
								).getComponent(cc.Label).string =
									_.tfConf[C].name)
							var b = v.children[C].getComponent(cc.Button)
								.clickEvents[0]
							;(b.target = this.node),
								(b.component = 'Main'),
								(b.handler = 'showTalentDis'),
								(b.customEventData = C)
						}
						f
							.getChildByName('levelup')
							.getChildByName('coin')
							.getChildByName('sum')
							.getComponent(
								cc.Label
							).string = cc.myself.changeNumToUnit(
							cc.myself.getUpTalentNeedGold()
						)
					},
					showTalentDis: function (f, v) {
						this.disNode &&
							(this.disNode.destroy(), (this.disNode = null))
						var C,
							b = this.node.getChildByName('talent'),
							w = _.tfConf[v].ins,
							N = _.tfConf[v].name
						cc.myself.tfList[v] > 0 &&
							((C =
								_.tfConf[v].default +
								_.tfConf[v].add * (cc.myself.tfList[v] - 1)),
							(C = Math.floor(1e3 * C) / 1e3) < 1 &&
							'atkSpe' != _.tfConf[v].type &&
							'offlineGold' != _.tfConf[v].type
								? (C = String(Math.floor(1e3 * C) / 10) + '%')
								: 'damageReductionPer' == _.tfConf[v].type &&
								  (C += '%')),
							C && (w = ''.concat(w, ' ').concat(C))
						var k = f.target.parent.convertToWorldSpaceAR(
							f.target.position
						)
						;(k.x -= cc.winSize.width / 2),
							(k.y -= cc.winSize.height / 2)
						var L = cc.instantiate(this.discription2)
						L.getComponent('Discription2').init({
							str: w,
							fan: null,
							name: N,
						}),
							(L.position = cc.v2(k.x, k.y + 40)),
							b.addChild(L),
							(this.disNode = L)
					},
					clickWorkmate: function () {
						0 == this.createWorkmatePageNum &&
							this.resetWorkmateUI()
						for (
							var f = 0;
							f < cc.myself.warehouseList.length;
							f++
						) {
							var v = cc.myself.warehouseList[f]
							if (v.wear) {
								var C = _.weaponConf[v.id]
								if ('weapon' == C.type) {
									C.weaponIcon &&
										this.node
											.getChildByName('workmate')
											.getChildByName('up_character')
											.getChildByName('character')
											.getChildByName('spine')
											.getComponent('sp.Skeleton')
											.setSkin(C.weaponIcon)
									break
								}
							}
						}
					},
					resetWorkmateUI: function () {
						var f = this,
							v = this.node.getChildByName('workmate'),
							C = v.getChildByName('up_character'),
							b = v
								.getChildByName('down_content')
								.getChildByName('scrollview'),
							w = b.getChildByName('content')
						b.getComponent(cc.PageView).removeAllPages(),
							cc.myself.workmateList.length >= 2 &&
								cc.myself.workmateList.sort(function (f, v) {
									return Number(
										_.workmateConf[v.id].quality
									) === Number(_.workmateConf[f.id].quality)
										? Number(v.id) === Number(f.id)
											? Number(v.star) - Number(f.star)
											: Number(f.id) - Number(v.id)
										: Number(_.workmateConf[v.id].quality) -
												Number(
													_.workmateConf[f.id].quality
												)
								})
						for (
							var N = this.workmateItem,
								k = 0,
								L = 4 * this.workmatePageHeightNum,
								B = 0;
							B < Math.ceil(cc.myself.workmateList.length / L);
							B++
						) {
							var S = cc.instantiate(this.workmatePageContent)
							;(S.height = w.height),
								(S.getComponent(
									cc.Layout
								).spacingY += this.workmatePageSyNum)
							var M = L
							L * (B + 1) > cc.myself.workmateList.length &&
								(M = cc.myself.workmateList.length - L * B)
							for (
								var d = function (v) {
										var b =
												cc.myself.workmateList[
													L * B + v
												],
											w = _.workmateConf[b.id]
										if (0 == B) {
											var M = cc.instantiate(N)
											M.getChildByName('already').active =
												b.wear
											for (var I = 1; I < 4; I++)
												M.getChildByName(
													'star'
												).getChildByName(
													'star_' + I
												).active = b.star >= I
											cc.myself.asyncShowImage(
												M.getChildByName(
													'icon_di'
												).getComponent(cc.Sprite),
												'ui/workmate/shouhuzhe_' +
													_.gameSetting
														.equipQualityIconColor[
														w.quality - 1
													]
											),
												cc.loader.loadRes(
													'spine/' +
														_.gameSetting
															.workmateSpineName[
															w.type1
														],
													sp.SkeletonData,
													function (f, v) {
														;(M.getChildByName(
															'spine'
														).getComponent(
															sp.Skeleton
														).skeletonData = v),
															M.getChildByName(
																'spine'
															)
																.getComponent(
																	sp.Skeleton
																)
																.setAnimation(
																	1,
																	'zheng_stand',
																	!0
																),
															M.getChildByName(
																'spine'
															)
																.getComponent(
																	sp.Skeleton
																)
																.setSkin(
																	b.star +
																		'_' +
																		_
																			.gameSetting
																			.workmateSpineName[
																			w
																				.type2
																		]
																)
													}.bind(f)
												)
											var x = M.getComponent(cc.Button)
												.clickEvents[0]
											;(x.target = f.node),
												(x.component = 'Main'),
												(x.handler =
													'clickWorkmateItem'),
												(x.customEventData = b.guid),
												S.addChild(M)
										}
										if (b.wear) {
											k++
											var q = C.getChildByName(
												'workmate_' + k
											)
											cc.loader.loadRes(
												'spine/' +
													_.gameSetting
														.workmateSpineName[
														w.type1
													],
												sp.SkeletonData,
												function (f, v) {
													;(q.getChildByName(
														'spine'
													).active = !0),
														(q
															.getChildByName(
																'spine'
															)
															.getComponent(
																sp.Skeleton
															).skeletonData = v),
														q
															.getChildByName(
																'spine'
															)
															.getComponent(
																sp.Skeleton
															)
															.setAnimation(
																1,
																'zheng_stand',
																!0
															),
														q
															.getChildByName(
																'spine'
															)
															.getComponent(
																sp.Skeleton
															)
															.setSkin(
																b.star +
																	'_' +
																	_
																		.gameSetting
																		.workmateSpineName[
																		w.type2
																	]
															),
														(q.getChildByName(
															'icon'
														).active = !1)
												}.bind(f)
											)
										}
									},
									I = 0;
								I < M;
								I++
							)
								d(I)
							b.getComponent(cc.PageView).addPage(S)
						}
						for (var x = k + 1; x < 6; x++) {
							var q = C.getChildByName('workmate_' + x)
							cc.myself.asyncShowImage(
								q
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								'ui/workmate/kongwei'
							),
								(q.getChildByName('spine').active = !1),
								(q.getChildByName('icon').active = !0)
						}
						var P = v
							.getChildByName('up_cp')
							.getChildByName('scrollview')
							.getChildByName('content')
						P.removeAllChildren()
						var A = cc.myself.getWorkmateCp()
						for (var T in A)
							if (A[T] >= _.trammelsConf[T].data.need[0]) {
								var D = cc.instantiate(this.cpNode)
								cc.myself.asyncShowImage(
									D.getChildByName('cp_1')
										.getChildByName('icon')
										.getComponent(cc.Sprite),
									_.trammelsConf[T].icon
								),
									A[T] >= _.trammelsConf[T].data.need[1] &&
										(D.getChildByName('cp_1')
											.getChildByName('condition')
											.getChildByName('bar_2')
											.getChildByName(
												'buff2'
											).active = !0),
									(D.getChildByName('cp_1')
										.getChildByName('condition')
										.getChildByName('word')
										.getComponent(cc.Label).string =
										A[T] +
										'/' +
										_.trammelsConf[T].data.need[1]),
									P.addChild(D)
								var R = D.getComponent(cc.Button).clickEvents[0]
								;(R.target = this.node),
									(R.component = 'Main'),
									(R.handler = 'showWorkmateDis'),
									(R.customEventData = T)
							}
						this.createWorkmatePageNum = 1
					},
					showWorkmateDis: function (f, v) {
						this.disNode &&
							(this.disNode.destroy(), (this.disNode = null))
						var C = this.node.getChildByName('workmate'),
							b = _.trammelsConf[v].ins,
							w = f.target.parent.convertToWorldSpaceAR(
								f.target.position
							)
						;(w.x -= cc.winSize.width / 2),
							(w.y -= cc.winSize.height / 2)
						var N = null
						w.x >= 0 && (N = !0)
						var k = cc.instantiate(this.discription)
						k.getComponent('Discription').init({ str: b, fan: N }),
							(k.position = cc.v2(w.x, w.y + 30)),
							C.addChild(k),
							(this.disNode = k)
					},
					scrollWorkmatePage: function (f, v) {
						var C = this,
							b = f
								.getComponent(cc.PageView)
								.getCurrentPageIndex()
						if (b >= this.createWorkmatePageNum) {
							var w = f.getComponent(cc.PageView).getPages()[b],
								N = 4 * this.workmatePageHeightNum,
								k = N
							N * (b + 1) > cc.myself.workmateList.length &&
								(k = cc.myself.workmateList.length - N * b)
							for (
								var c = function (f) {
										var v =
												cc.myself.workmateList[
													N * b + f
												],
											k = _.workmateConf[v.id],
											L = cc.instantiate(C.workmateItem)
										L.getChildByName('already').active =
											v.wear
										for (var B = 1; B < 4; B++)
											L.getChildByName(
												'star'
											).getChildByName(
												'star_' + B
											).active = v.star >= B
										cc.myself.asyncShowImage(
											L.getChildByName(
												'icon_di'
											).getComponent(cc.Sprite),
											'ui/workmate/shouhuzhe_' +
												_.gameSetting
													.equipQualityIconColor[
													k.quality - 1
												]
										),
											cc.loader.loadRes(
												'spine/' +
													_.gameSetting
														.workmateSpineName[
														k.type1
													],
												sp.SkeletonData,
												function (f, C) {
													;(L.getChildByName(
														'spine'
													).getComponent(
														sp.Skeleton
													).skeletonData = C),
														L.getChildByName(
															'spine'
														)
															.getComponent(
																sp.Skeleton
															)
															.setAnimation(
																1,
																'zheng_stand',
																!0
															),
														L.getChildByName(
															'spine'
														)
															.getComponent(
																sp.Skeleton
															)
															.setSkin(
																v.star +
																	'_' +
																	_
																		.gameSetting
																		.workmateSpineName[
																		k.type2
																	]
															)
												}.bind(C)
											)
										var S = L.getComponent(cc.Button)
											.clickEvents[0]
										;(S.target = C.node),
											(S.component = 'Main'),
											(S.handler = 'clickWorkmateItem'),
											(S.customEventData = v.guid),
											w.addChild(L)
									},
									L = 0;
								L < k;
								L++
							)
								c(L)
							this.createWorkmatePageNum = b + 1
						}
					},
					clickWorkmateItem: function (f, v) {
						for (
							var C, b = 0;
							b < cc.myself.workmateList.length;
							b++
						)
							if (cc.myself.workmateList[b].guid == parseInt(v)) {
								C = cc.myself.workmateList[b]
								break
							}
						C
							? cc.myself.showPre('pre/workmate_content', {
									jname: 'WorkmateIns',
									data: C,
							  })
							: console.error('没找到守护者数据')
					},
					showWorkmateChange: function () {
						cc.myself.showPre('pre/workmate_change'),
							cc.myself.aldSendEvent('点击进入守护者更换界面')
					},
					resetEquipInfo: function () {
						for (
							var f = this.node
									.getChildByName('equip')
									.getChildByName('upcontent'),
								v = 0;
							v < cc.myself.warehouseList.length;
							v++
						) {
							var C = _.weaponConf[cc.myself.warehouseList[v].id],
								b = C.type
							if (cc.myself.warehouseList[v].wear) {
								var w = f.getChildByName('icon_' + b)
								;(w.getChildByName('icon').active = !0),
									(w.getChildByName('num').active = !0),
									cc.myself.asyncShowImage(
										w.getComponent(cc.Sprite),
										'ui/equip/zhuangbei_' +
											_.gameSetting.equipQualityIconColor[
												C.quality - 1
											] +
											'1'
									),
									cc.myself.asyncShowImage(
										w
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										C.icon
									),
									(w
										.getChildByName('num')
										.getComponent(cc.Label).string =
										'Lv.' +
										cc.myself.warehouseList[v].strength)
							}
						}
					},
					clickEquip: function () {
						this.resetEquipAttribute(),
							0 == this.createEquipPageNum && this.resetEquipUI()
					},
					resetEquipUI: function (f) {
						if (!f || f == this.nowShowEquipType) {
							cc.myself.warehouseList.length >= 2 &&
								cc.myself.warehouseList.sort(function (f, v) {
									return Number(
										_.weaponConf[v.id].quality
									) === Number(_.weaponConf[f.id].quality)
										? Number(f.id) - Number(v.id)
										: Number(_.weaponConf[v.id].quality) -
												Number(
													_.weaponConf[f.id].quality
												)
								})
							var v = this.node
									.getChildByName('equip')
									.getChildByName('scrollview'),
								C = v.getChildByName('content')
							if (
								(v.getComponent(cc.PageView).removeAllPages(),
								'scroll' != this.nowShowEquipType)
							) {
								for (
									var b = [], w = 0;
									w < cc.myself.warehouseList.length;
									w++
								)
									_.weaponConf[cc.myself.warehouseList[w].id]
										.type != this.nowShowEquipType ||
										cc.myself.warehouseList[w].wear ||
										b.push(cc.myself.warehouseList[w])
								for (
									var N = 4 * this.equipPageHeightNum, k = 0;
									k < Math.ceil(b.length / N);
									k++
								) {
									var L = cc.instantiate(
										this.equipPageContent
									)
									;(L.height = C.height),
										(L.getComponent(
											cc.Layout
										).spacingX = 42),
										(L.getComponent(
											cc.Layout
										).spacingY += this.equipPageSyNum)
									var B = N
									N * (k + 1) > b.length &&
										(B = b.length - N * k)
									for (var S = 0; S < B; S++) {
										var M = b[N * k + S],
											I = _.weaponConf[M.id]
										if (0 == k) {
											var x = cc.instantiate(
												this.equipItem
											)
											cc.myself.asyncShowImage(
												x
													.getChildByName('bg')
													.getComponent(cc.Sprite),
												'ui/equip/zhuangbei_' +
													_.gameSetting
														.equipQualityIconColor[
														I.quality - 1
													] +
													'1'
											),
												cc.myself.asyncShowImage(
													x
														.getChildByName('icon')
														.getComponent(
															cc.Sprite
														),
													I.icon
												),
												(x
													.getChildByName('label')
													.getComponent(
														cc.Label
													).string =
													'Lv.' + M.strength)
											var q = x.getComponent(cc.Button)
												.clickEvents[0]
											;(q.target = this.node),
												(q.component = 'Main'),
												(q.handler = 'clickEquipItem'),
												(q.customEventData = M.guid),
												L.addChild(x)
										}
									}
									v.getComponent(cc.PageView).addPage(L)
								}
							} else {
								var P = cc.instantiate(this.equipPageContent)
								P.height = C.height
								for (
									var A = 0;
									A < cc.myself.scrollList.length;
									A++
								)
									if (cc.myself.scrollList[A].num > 0) {
										var T = cc.instantiate(this.equipItem)
										;(T.getChildByName(
											'label'
										).active = !0),
											(T.getChildByName(
												'label'
											).getComponent(cc.Label).string =
												cc.myself.scrollList[A].num),
											cc.myself.asyncShowImage(
												T.getChildByName(
													'icon'
												).getComponent(cc.Sprite),
												'ui/icon_' +
													cc.myself.scrollList[A].type
											)
										var D = T.getComponent(cc.Button)
											.clickEvents[0]
										;(D.target = this.node),
											(D.component = 'Main'),
											(D.handler = 'clickScrollItem'),
											(D.customEventData =
												cc.myself.scrollList[A].type),
											P.addChild(T)
									}
								v.getComponent(cc.PageView).addPage(P)
							}
							this.createEquipPageNum = 1
						}
					},
					changeEquipType: function (f, v) {
						if (!(this.buttonDelayTime < 1)) {
							var C = this.equipTypeList.length,
								b = this.equipTypeList.indexOf(
									this.nowShowEquipType
								)
							'left' == v ? b-- : 'right' == v && b++
							var w = b - 1,
								N = b + 1
							;(w = c(w)), (N = c(N)), (b = c(b))
							var k = this.node
								.getChildByName('equip')
								.getChildByName('bantou')
							;(k
								.getChildByName('left_label')
								.getComponent(cc.Label).string =
								_.insConf[this.equipTypeList[w]]),
								(k
									.getChildByName('mid_label')
									.getComponent(cc.Label).string =
									_.insConf[this.equipTypeList[b]]),
								(k
									.getChildByName('right_label')
									.getComponent(cc.Label).string =
									_.insConf[this.equipTypeList[N]]),
								(this.nowShowEquipType = this.equipTypeList[b]),
								this.resetEquipUI(),
								(this.buttonDelayTime = 0)
						}
						function c(f) {
							return f < 0 && (f += C), f >= C && (f -= C), f
						}
					},
					resetEquipAttribute: function () {
						for (
							var f = _.playerDefaultConf.atk,
								v = _.playerDefaultConf.hp,
								C = cc.myself.getAddWeaponAttribute(),
								b = 0;
							b < cc.myself.warehouseList.length;
							b++
						)
							if (cc.myself.warehouseList[b].wear) {
								var w = cc.myself.warehouseList[b],
									N = _.weaponConf[w.id]
								N.data.atk &&
									((f += N.data.atk * C),
									N.add.atk &&
										(f += N.add.atk * w.strength * C)),
									N.data.hp &&
										((v += N.data.hp * C),
										N.add.hp &&
											(v += N.add.hp * w.strength * C))
							}
						for (var k = 0; k < cc.myself.tfList.length; k++)
							if (cc.myself.tfList[k] > 0) {
								var L = _.tfConf[k]
								'atk' == L.type
									? (f +=
											L.default +
											L.add * (cc.myself.tfList[k] - 1))
									: 'hp' == L.type &&
									  (v +=
											L.default +
											L.add * (cc.myself.tfList[k] - 1))
							}
						var B = this.node
								.getChildByName('equip')
								.getChildByName('upcontent'),
							S = B.getChildByName('descript')
						;(S.getChildByName('attack')
							.getChildByName('num')
							.getComponent(cc.Label).string = Math.floor(f)),
							(S.getChildByName('hp')
								.getChildByName('num')
								.getComponent(cc.Label).string = Math.floor(v))
						for (
							var M = ['weapon', 'clothes', 'ring', 'necklace'],
								I = 0;
							I < M.length;
							I++
						) {
							var x = B.getChildByName('icon_' + M[I])
							;(x.getChildByName('icon').active = !1),
								(x.getChildByName('num').active = !1),
								cc.myself.asyncShowImage(
									x.getComponent(cc.Sprite),
									'ui/equip/zhuangbeikong'
								)
						}
						for (
							var q = 0;
							q < cc.myself.warehouseList.length;
							q++
						) {
							var P = _.weaponConf[cc.myself.warehouseList[q].id],
								A = P.type
							if (cc.myself.warehouseList[q].wear) {
								var T = B.getChildByName('icon_' + A)
								;(T.getChildByName('icon').active = !0),
									(T.getChildByName('num').active = !0),
									cc.myself.asyncShowImage(
										T.getComponent(cc.Sprite),
										'ui/equip/zhuangbei_' +
											_.gameSetting.equipQualityIconColor[
												P.quality - 1
											] +
											'1'
									),
									cc.myself.asyncShowImage(
										T.getChildByName('icon').getComponent(
											cc.Sprite
										),
										P.icon
									),
									(T.getChildByName('num').getComponent(
										cc.Label
									).string =
										'Lv.' +
										cc.myself.warehouseList[q].strength),
									'weapon' == A &&
										this.node
											.getChildByName('equip')
											.getChildByName('upcontent')
											.getChildByName('spine')
											.getComponent('sp.Skeleton')
											.setSkin(P.weaponIcon)
							}
						}
					},
					scrollEquipPage: function (f, v) {
						var C = f
							.getComponent(cc.PageView)
							.getCurrentPageIndex()
						if (C >= this.createEquipPageNum) {
							for (
								var b = f.getComponent(cc.PageView).getPages()[
										C
									],
									w = [],
									N = 0;
								N < cc.myself.warehouseList.length;
								N++
							)
								_.weaponConf[cc.myself.warehouseList[N].id]
									.type != this.nowShowEquipType ||
									cc.myself.warehouseList[N].wear ||
									w.push(cc.myself.warehouseList[N])
							var k = 4 * this.equipPageHeightNum,
								L = k
							k * (C + 1) > w.length && (L = w.length - k * C)
							for (var B = 0; B < L; B++) {
								var S = w[k * C + B],
									M = _.weaponConf[S.id],
									I = cc.instantiate(this.equipItem)
								cc.myself.asyncShowImage(
									I.getChildByName('bg').getComponent(
										cc.Sprite
									),
									'ui/equip/zhuangbei_' +
										_.gameSetting.equipQualityIconColor[
											M.quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										I.getChildByName('icon').getComponent(
											cc.Sprite
										),
										M.icon
									),
									(I.getChildByName('label').getComponent(
										cc.Label
									).string = 'Lv.' + S.strength)
								var x = I.getComponent(cc.Button).clickEvents[0]
								;(x.target = this.node),
									(x.component = 'Main'),
									(x.handler = 'clickEquipItem'),
									(x.customEventData = S.guid),
									b.addChild(I)
							}
							this.createEquipPageNum = C + 1
						}
					},
					clickEquipItem: function (f, v) {
						for (
							var C, b = 0;
							b < cc.myself.warehouseList.length;
							b++
						)
							if (cc.myself.warehouseList[b].guid == v) {
								C = cc.myself.warehouseList[b]
								break
							}
						C
							? cc.myself.showPre('pre/equip_content', {
									jname: 'EquipIns',
									data: C,
							  })
							: console.error('没获取到装备数据')
					},
					clickWearEquipItem: function (f, v) {
						for (
							var C, b = 0;
							b < cc.myself.warehouseList.length;
							b++
						)
							if (
								cc.myself.warehouseList[b].wear &&
								_.weaponConf[cc.myself.warehouseList[b].id]
									.type == v
							) {
								C = cc.myself.warehouseList[b]
								break
							}
						if (!C)
							return (
								console.error('没获取到装备数据'),
								void cc.myself.tips(
									Lq.lang('你还没穿戴这种类型的装备')
								)
							)
						cc.myself.showPre('pre/equip_content', {
							jname: 'EquipIns',
							data: C,
						})
					},
					clickScrollItem: function (f, v) {
						cc.myself.showPre('pre/equip_scroll', {
							jname: 'EquipScroll',
							data: { type: v },
						})
					},
					upTalent: function () {
						if (cc.myself.gold < cc.myself.getUpTalentNeedGold())
							return (
								cc.myself.tips(Lq.lang('金币不足')),
								void cc
									.find('Canvas')
									.getComponent('Main')
									.showGoldLack()
							)
						for (var f = 999, v = 0, C = 0; C < 9; C++)
							cc.myself.tfList[C] < f &&
								((f = cc.myself.tfList[C]), (v = C))
						cc.myself.tfList[v]++,
							(cc.myself.gold -= cc.myself.getUpTalentNeedGold()),
							cc.myself.setLocalData('gold', cc.myself.gold),
							cc.myself.setLocalData('tfList', cc.myself.tfList),
							this.clickTalent(),
							(this.talenetSpine.position = this.node
								.getChildByName('talent')
								.getChildByName('content').children[
								v
							].position),
							this.talenetSpine
								.getComponent('sp.Skeleton')
								.setAnimation(1, 'tianfushengji', !1)
					},
					clickRank: function () {
						cc.myself.showPre('pre/ranking')
					},
					showEquipMix: function () {
						cc.myself.showPre('pre/equip_mix'),
							cc.myself.aldSendEvent('点击进入装备合成')
					},
					showEquipSmelt: function () {
						cc.myself.showPre('pre/equip_smelt'),
							cc.myself.aldSendEvent('点击进入装备熔炼')
					},
					showWorkmateMix: function () {
						cc.myself.showPre('pre/workmate_mix'),
							cc.myself.aldSendEvent('点击进入守护者合成界面')
					},
					showGoldLack: function () {
						cc.myself.showPre('pre/gold_lack')
					},
					showHealthLack: function () {
						cc.myself.showPre('pre/health_lack')
					},
					showFreeBox: function () {
						cc.myself.showPre('pre/box')
					},
					showChooseBuff: function () {
						cc.myself.showPre('pre/chooseBuff')
					},
					showInvite: function () {
						cc.myself.showPre('pre/invite')
					},
					showSignIn: function () {
						cc.myself.showPre('pre/signIn')
					},
					showChoutiAd: function () {
						cc.myself.showPre('pre/choutiAd')
					},
					showDailyGold: function () {
						if (
							(cc.myself.aldSendEvent('点击离线金币'),
							cc.myself.getTime() - cc.myself.offlineMoneyTime <
								18e5)
						) {
							var f =
									_.tfConf[7].default +
									(cc.myself.tfList[7] - 1) * _.tfConf[7].add,
								v = Math.floor(
									f *
										((cc.myself.getTime() -
											cc.myself.offlineMoneyTime) /
											10 /
											1e3)
								)
							return (
								(cc.myself.gold += v),
								cc.myself.setLocalData('gold', cc.myself.gold),
								(cc.myself.offlineMoneyTime = cc.myself.getTime()),
								cc.myself.setLocalData(
									'golofflineMoneyTimed',
									cc.myself.offlineMoneyTime
								),
								void this.getMoneyAction()
							)
						}
						cc.myself.showPre('pre/dailyGold')
					},
					resetBoxUI: function () {
						var f = this.node
								.getChildByName('top')
								.getChildByName('free_box'),
							v = this.node
								.getChildByName('top')
								.getChildByName('golden_box'),
							C = cc.myself.getTime() - cc.myself.getNormalBoxTime
						C < 18e5
							? ((f.getChildByName('free_not').active = !0),
							  (f.getChildByName('free_get').active = !1),
							  (f
									.getChildByName('free_not')
									.getChildByName('time_free')
									.getComponent(
										cc.Label
									).string = cc.myself.changeTime(
									(18e5 - C) / 1e3
							  )))
							: ((f.getChildByName('free_not').active = !1),
							  (f.getChildByName('free_get').active = !0))
						var b = cc.myself.getTime() - cc.myself.getbigBoxTime
						b < 144e5 || cc.myself.bigBoxMedalNum < 5
							? ((v.getChildByName('gold_not').active = !0),
							  (v.getChildByName('gold_get').active = !1),
							  b < 144e5
									? ((v
											.getChildByName('gold_not')
											.getChildByName(
												'time_free'
											).active = !0),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'gold_progress_1'
											).active = !1),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'progress_pink'
											).active = !1),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'word_gold_progress'
											).active = !1),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'medal_di'
											).active = !1),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'medal'
											).active = !1),
									  (v
											.getChildByName('gold_not')
											.getChildByName('time_free')
											.getComponent(
												cc.Label
											).string = cc.myself.changeTime(
											(144e5 - b) / 1e3
									  )))
									: ((v
											.getChildByName('gold_not')
											.getChildByName(
												'time_free'
											).active = !1),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'gold_progress_1'
											).active = !0),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'progress_pink'
											).active = !0),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'word_gold_progress'
											).active = !0),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'medal_di'
											).active = !0),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'medal'
											).active = !0),
									  (v
											.getChildByName('gold_not')
											.getChildByName(
												'word_gold_progress'
											)
											.getComponent(cc.Label).string =
											cc.myself.bigBoxMedalNum + '/5'),
									  (v
											.getChildByName('gold_not')
											.getChildByName('progress_pink')
											.getComponent(cc.Sprite).fillRange =
											cc.myself.bigBoxMedalNum / 5)))
							: ((v.getChildByName('gold_not').active = !1),
							  (v.getChildByName('gold_get').active = !0))
					},
					showBoxReward: function (f) {
						cc.myself.showPre('pre/boxReward', {
							jname: 'BoxReward',
							data: f,
						})
					},
					getBoxRewardData: function (f) {
						var v = {}
						if (((v.type = f), 'equip5' == f)) {
							var C = []
							for (var b in _.weaponConf)
								5 == _.weaponConf[b].quality && C.push(b)
							var w = C[Math.floor(Math.random() * C.length)]
							;(v.type2 = w), (v.num = 1)
						} else if ('equip4' == f) {
							var N = []
							for (var k in _.weaponConf)
								4 == _.weaponConf[k].quality && N.push(k)
							var L = N[Math.floor(Math.random() * N.length)]
							;(v.type2 = L), (v.num = 1)
						} else if ('equip3' == f) {
							var B = []
							for (var S in _.weaponConf)
								3 == _.weaponConf[S].quality && B.push(S)
							var M = B[Math.floor(Math.random() * B.length)]
							;(v.type2 = M), (v.num = 1)
						} else if ('equip2' == f) {
							var I = []
							for (var x in _.weaponConf)
								2 == _.weaponConf[x].quality && I.push(x)
							var q = I[Math.floor(Math.random() * I.length)]
							;(v.type2 = q), (v.num = 1)
						} else if ('equip1' == f) {
							var P = []
							for (var A in _.weaponConf)
								1 == _.weaponConf[A].quality && P.push(A)
							var T = P[Math.floor(Math.random() * P.length)]
							;(v.type2 = T), (v.num = 1)
						} else if ('workmate1' == f) {
							var D = []
							for (var R in _.workmateConf)
								1 == _.workmateConf[R].quality && D.push(R)
							var E = D[Math.floor(Math.random() * D.length)]
							;(v.type2 = E), (v.num = 1)
						} else if ('workmate2' == f) {
							var O = []
							for (var F in _.workmateConf)
								2 == _.workmateConf[F].quality && O.push(F)
							var G = O[Math.floor(Math.random() * O.length)]
							;(v.type2 = G), (v.num = 1)
						} else if ('workmate3' == f) {
							var H = []
							for (var V in _.workmateConf)
								3 == _.workmateConf[V].quality && H.push(V)
							var j = H[Math.floor(Math.random() * H.length)]
							;(v.type2 = j), (v.num = 1)
						} else if ('workmate4' == f) {
							var U = []
							for (var W in _.workmateConf)
								4 == _.workmateConf[W].quality && U.push(W)
							var z = U[Math.floor(Math.random() * U.length)]
							;(v.type2 = z), (v.num = 1)
						} else if ('workmate5' == f) {
							var Y = []
							for (var J in _.workmateConf)
								5 == _.workmateConf[J].quality && Y.push(J)
							var X = Y[Math.floor(Math.random() * Y.length)]
							;(v.type2 = X), (v.num = 1)
						} else if ('diamond' == f) {
							var K = Math.floor(90 * Math.random()) + 10
							v.num = K
						}
						return v
					},
					openNormalBox: function () {
						if (
							(cc.myself.aldSendEvent('点击获取免费宝箱'),
							!(this.buttonDelayTime < 0.5))
						)
							if (
								cc.myself.getTime() -
									cc.myself.getNormalBoxTime <
								18e5
							)
								cc.myself.tips(Lq.lang('时间不足'))
							else {
								var f = _.gameSetting.normalBoxWeight,
									v = []
								for (var C in f)
									if (f[C] > 0)
										for (var w = 0; w < f[C]; w++) v.push(C)
								for (
									var N = [],
										k = Math.floor(3 * Math.random()) + 1,
										L = 0;
									L < k;
									L++
								) {
									var B =
											v[
												Math.floor(
													Math.random() * v.length
												)
											],
										S = {}
									if (((S.type = B), 'gold' == B)) {
										var M = _.tfConf[7].default
										cc.myself.tfList[7] > 0 &&
											(M +=
												_.tfConf[7].add *
												(cc.myself.tfList[7] - 1)),
											(M *=
												6 * (50 * Math.random() + 10)),
											(M = parseInt(M)),
											(S.num = M)
									} else if ('diamond' == B);
									else if ('scroll' == B) {
										var I = Math.floor(
												15 * (0.2 * Math.random() + 0.1)
											),
											x = [
												'weapon',
												'clothes',
												'ring',
												'necklace',
											],
											q =
												x[
													Math.floor(
														Math.random() * x.length
													)
												]
										;(S.num = I), (S.type2 = q)
									} else S = this.getBoxRewardData(B)
									N.push(S)
								}
								var P = { data: N, type: 'normal' }
								switch (
									(this.showBoxReward(P),
									(this.buttonDelayTime = 0),
									cc.myself.getTime() -
										cc.myself.getNormalBoxTime >=
									72e5
										? (cc.myself.getNormalBoxTime =
												cc.myself.getTime() - 54e5)
										: (cc.myself.getNormalBoxTime += 18e5),
									Lq.pfName)
								) {
									case 'cy':
										b.default.showScreenAd({})
								}
							}
					},
					openBigBox: function () {
						if (
							(cc.myself.aldSendEvent('点击获取黄金宝箱'),
							!(this.buttonDelayTime < 0.5))
						)
							if (
								cc.myself.getTime() - cc.myself.getbigBoxTime <
								144e5
							)
								cc.myself.tips(Lq.lang('时间不足'))
							else if (cc.myself.bigBoxMedalNum < 5)
								cc.myself.tips(Lq.lang('徽章不足'))
							else if (cc.myself.getBigBoxNum >= 3)
								cc.myself.tips(Lq.lang('今天已领完全部的宝箱'))
							else {
								var f = _.gameSetting.bigBoxWeight,
									v = []
								for (var C in f)
									if (f[C] > 0)
										for (var b = 0; b < f[C]; b++) v.push(C)
								var w = [],
									N = _.gameSetting.spBigBoxWeight,
									k = []
								for (var L in N)
									if (N[L] > 0)
										for (var B = 0; B < N[L]; B++) k.push(L)
								var S = k[Math.floor(Math.random() * k.length)],
									M = this.getBoxRewardData(S)
								w.push(M)
								for (
									var I = Math.floor(5 * Math.random()) + 3,
										x = 0;
									x < I;
									x++
								) {
									var q =
											v[
												Math.floor(
													Math.random() * v.length
												)
											],
										P = {}
									if (((P.type = q), 'gold' == q)) {
										var A = _.tfConf[7].default
										cc.myself.tfList[7] > 0 &&
											(A +=
												_.tfConf[7].add *
												(cc.myself.tfList[7] - 1)),
											(A *=
												6 *
												(120 * Math.random() + 120)),
											(A = parseInt(A)),
											(P.num = A)
									} else if ('diamond' == q) {
										var T = Math.floor(
											90 * Math.random() + 10
										)
										P.num = T
									} else if ('scroll' == q) {
										var D = Math.floor(
												60 * (0.4 * Math.random() + 0.4)
											),
											R = [
												'weapon',
												'clothes',
												'ring',
												'necklace',
											],
											E =
												R[
													Math.floor(
														Math.random() * R.length
													)
												]
										;(P.num = D), (P.type2 = E)
									} else P = this.getBoxRewardData(q)
									w.push(P)
								}
								var O = { data: w, type: 'big' }
								this.showBoxReward(O),
									(this.buttonDelayTime = 0),
									(cc.myself.getbigBoxTime = cc.myself.getTime()),
									(cc.myself.bigBoxMedalNum = 0),
									cc.myself.getBigBoxNum++
							}
					},
					openFreeBigBox: function () {
						var f = _.gameSetting.bigBoxWeight,
							v = []
						for (var C in f)
							if (f[C] > 0)
								for (var b = 0; b < f[C]; b++) v.push(C)
						var w = [],
							N = _.gameSetting.spBigBoxWeight,
							k = []
						for (var L in N)
							if (N[L] > 0)
								for (var B = 0; B < N[L]; B++) k.push(L)
						var S = k[Math.floor(Math.random() * k.length)],
							M = this.getBoxRewardData(S)
						w.push(M)
						for (
							var I = Math.floor(5 * Math.random()) + 3, x = 0;
							x < I;
							x++
						) {
							var q = v[Math.floor(Math.random() * v.length)],
								P = {}
							if (((P.type = q), 'gold' == q)) {
								var A = _.tfConf[7].default
								cc.myself.tfList[7] > 0 &&
									(A +=
										_.tfConf[7].add *
										(cc.myself.tfList[7] - 1)),
									(A *= 6 * (120 * Math.random() + 120)),
									(A = parseInt(A)),
									(P.num = A)
							} else if ('diamond' == q) {
								var T = Math.floor(90 * Math.random()) + 10
								P.num = T
							} else if ('scroll' == q) {
								var D = Math.floor(
										60 * (0.4 * Math.random() + 0.4)
									),
									R = [
										'weapon',
										'clothes',
										'ring',
										'necklace',
									],
									E = R[Math.floor(Math.random() * R.length)]
								;(P.num = D), (P.type2 = E)
							} else P = this.getBoxRewardData(q)
							w.push(P)
						}
						var O = { data: w, type: 'big' }
						this.showBoxReward(O)
					},
					resetStrengthUI: function () {
						var f = this.node
							.getChildByName('top')
							.getChildByName('health')
						f.getChildByName('tips').active =
							cc.myself.strength < cc.myself.maxStrength
						var v = cc.myself.changeTime(
							Math.ceil(
								(cc.myself.strengthAddDiffTime -
									(cc.myself.getTime() -
										cc.myself.strengthAddTime)) /
									1e3
							)
						)
						f
							.getChildByName('tips')
							.getComponent(cc.Label).string = Lq.lang('x后+1', {
							data: { num: v },
						})
					},
					resetDailyGoldUI: function () {
						var f = this.node
							.getChildByName('top')
							.getChildByName('offlineGold')
						f.active = cc.myself.tfList[7] > 0
						var v = f.getChildByName('jinbijindu'),
							C = f.getChildByName('time'),
							b = f.getChildByName('num')
						v.getComponent(cc.Sprite).fillRange =
							(((cc.myself.getTime() -
								cc.myself.offlineMoneyTime) /
								1e3) %
								10) /
							10
						var w =
							_.tfConf[7].default +
							(cc.myself.tfList[7] - 1) * _.tfConf[7].add
						if (
							cc.myself.getTime() - cc.myself.offlineMoneyTime >
							144e5
						)
							(C.getComponent(cc.Label).string = Lq.lang(
								'已到上限'
							)),
								(b.getComponent(
									cc.Label
								).string = cc.myself.changeNumToUnit(
									Math.floor((144e5 * w) / 10 / 1e3)
								)),
								0 == b.active && (b.active = !0)
						else {
							var N =
								144e5 -
								(cc.myself.getTime() -
									cc.myself.offlineMoneyTime)
							;(C.getComponent(
								cc.Label
							).string = cc.myself.changeTime(
								Math.floor(N / 1e3) + 1
							)),
								0 == b.active
									? ((b.active = !0),
									  (b.getComponent(
											cc.Label
									  ).string = cc.myself.changeNumToUnit(
											Math.floor(
												w *
													((cc.myself.getTime() -
														cc.myself
															.offlineMoneyTime) /
														10 /
														1e3)
											)
									  )))
									: v.getComponent(cc.Sprite).fillRange <
											1 / 60 &&
									  (b.getComponent(
											cc.Label
									  ).string = cc.myself.changeNumToUnit(
											Math.floor(
												w *
													((cc.myself.getTime() -
														cc.myself
															.offlineMoneyTime) /
														10 /
														1e3)
											)
									  ))
						}
					},
					getMoneyAction: function (f) {
						for (
							var v = [100, 250],
								C = this.node.getChildByName('top'),
								b = C.getChildByName('offlineGold'),
								_ = C.getChildByName('coin'),
								w = 0;
							w < 10;
							w++
						) {
							var N = cc.instantiate(this.flyGoldNode)
							f || (f = cc.v2(b.x, b.y)), (N.x = f.x), (N.y = f.y)
							var k = 36 * w,
								L =
									f.x +
									Math.cos((k * Math.PI) / 180) *
										(Math.random() * (v[1] - v[0]) + v[0]),
								B =
									f.y +
									Math.sin((k * Math.PI) / 180) *
										(Math.random() * (v[1] - v[0]) + v[0])
							C.addChild(N),
								N.runAction(
									cc.sequence(
										cc.moveTo(0.25, cc.v2(L, B)),
										cc.moveTo(0.5, cc.v2(_.x, _.y + 0)),
										cc.removeSelf(!0)
									)
								)
						}
					},
					wxLogin: function () {
						window.wx &&
							wx.login({
								success: function (f) {
									;(cc.myself.jscode = f.code),
										wx.getUserInfo({
											withCredentials: !0,
											success: function (f) {
												console.log('wxgetUserInfo', f),
													cc.myself.xmlhttprequest(
														_.houtaiUrl +
															'aloneuid/',
														'POST',
														{
															iv: f.iv,
															encryptedData:
																f.encryptedData,
															jscode:
																cc.myself
																	.jscode,
															gameid: _.gameid,
														},
														function (f) {
															try {
																f = JSON.parse(
																	f
																)
															} catch (f) {
																return console.log(
																	'data is not json'
																)
															}
															;(cc.myself.uid =
																f.data.uid),
																(cc.myself.isnew =
																	f.data.isnew)
															var v = wx.getLaunchOptionsSync()
																.query
															console.log(
																'info',
																v
															),
																v &&
																	v.uid &&
																	cc.myself.xmlhttprequest(
																		'',
																		'POST',
																		{
																			gameid:
																				_.gameid,
																			uid:
																				v.uid,
																			suid:
																				cc
																					.myself
																					.uid,
																		},
																		function (
																			f
																		) {
																			console.log(
																				'invite',
																				f
																			)
																		}
																	)
														}
													)
											},
											fail: function () {
												cc.myself.xmlhttprequest(
													_.houtaiUrl + 'aloneuid/',
													'POST',
													{
														jscode:
															cc.myself.jscode,
														gameid: _.gameid,
													},
													function (f) {
														try {
															f = JSON.parse(f)
														} catch (f) {
															return console.log(
																'data is not json'
															)
														}
														;(cc.myself.uid =
															f.data.uid),
															(cc.myself.isnew =
																f.data.isnew),
															2 ==
																parseInt(
																	cc.myself
																		.isnew
																) &&
																cc.myself.isToday(
																	cc.myself
																		.signInTime
																)
														var v = wx.getLaunchOptionsSync()
															.query
														console.log('info', v),
															v &&
																v.uid &&
																cc.myself.xmlhttprequest(
																	'',
																	'POST',
																	{
																		gameid:
																			_.gameid,
																		uid:
																			v.uid,
																		suid:
																			cc
																				.myself
																				.uid,
																	},
																	function (
																		f
																	) {
																		console.log(
																			'invite',
																			f
																		)
																	}
																)
													}
												)
											},
										})
								},
							})
					},
					update: function (f) {
						cc.myself.checkStrength(),
							this.resetStrengthUI(),
							this.resetDailyGoldUI(),
							this.resetBoxUI(),
							(this.buttonDelayTime += f)
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		MapBox: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '31487J3WAlJV5OPCW1oFbDY', 'MapBox'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {},
						onCollisionEnter: function (f, v) {
							if (v.tag > 1e3)
								switch (f.tag) {
									case 1:
									case 11:
										f.node.destroy()
								}
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		Myself: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '34d76+2k3tPsIPFyV7QYJcM', 'Myself')
				var b = o(f('./managers/UtilManager')),
					_ = o(f('./platforms/pfLq'))
				function o(f) {
					return f && f.__esModule ? f : { default: f }
				}
				function l(f) {
					return (l =
						'function' == typeof Symbol &&
						'symbol' == typeof Symbol.iterator
							? function (f) {
									return typeof f
							  }
							: function (f) {
									return f &&
										'function' == typeof Symbol &&
										f.constructor === Symbol &&
										f !== Symbol.prototype
										? 'symbol'
										: typeof f
							  })(f)
				}
				function c(f, v) {
					for (var C = 0; C < v.length; C++) {
						var b = v[C]
						;(b.enumerable = b.enumerable || !1),
							(b.configurable = !0),
							'value' in b && (b.writable = !0),
							Object.defineProperty(f, b.key, b)
					}
				}
				var w = f('Config'),
					N = f('./modelView/ViewModel').VM,
					k = (function () {
						function e() {
							var f = this
							;(function (f, v) {
								if (!(f instanceof v))
									throw new TypeError(
										'Cannot call a class as a function'
									)
							})(this, e),
								(this.accAdd = function (f, v) {
									var C, b, _
									;(f = Number(f)), (v = Number(v))
									try {
										C = this.countDecimals(f) + 1
									} catch (f) {
										C = 0
									}
									try {
										b = this.countDecimals(v) + 1
									} catch (f) {
										b = 0
									}
									_ = Math.pow(10, Math.max(C, b))
									var w =
										(this.accMul(f, _) +
											this.accMul(v, _)) /
										_
									return this.getCorrectResult('add', f, v, w)
								}),
								(this.accSub = function (f, v) {
									var C, b, _
									;(f = Number(f)), (v = Number(v))
									try {
										C = this.countDecimals(f) + 1
									} catch (f) {
										C = 0
									}
									try {
										b = this.countDecimals(v) + 1
									} catch (f) {
										b = 0
									}
									_ = Math.pow(10, Math.max(C, b))
									var w = Number(
										(this.accMul(f, _) -
											this.accMul(v, _)) /
											_
									)
									return this.getCorrectResult('sub', f, v, w)
								}),
								(this.accDiv = function (f, v) {
									;(f = Number(f)), (v = Number(v))
									var C,
										b,
										_ = 0,
										w = 0
									try {
										_ = this.countDecimals(f)
									} catch (f) {}
									try {
										w = this.countDecimals(v)
									} catch (f) {}
									;(C = this.convertToInt(f)),
										(b = this.convertToInt(v))
									var N = this.accMul(
										C / b,
										Math.pow(10, w - _)
									)
									return this.getCorrectResult('div', f, v, N)
								}),
								(this.accMul = function (f, v) {
									;(f = Number(f)), (v = Number(v))
									var C = 0,
										b = f.toString(),
										_ = v.toString()
									try {
										C += this.countDecimals(b)
									} catch (f) {}
									try {
										C += this.countDecimals(_)
									} catch (f) {}
									var w =
										(this.convertToInt(b) *
											this.convertToInt(_)) /
										Math.pow(10, C)
									return this.getCorrectResult('mul', f, v, w)
								}),
								(this.countDecimals = function (f) {
									var v = 0
									try {
										var C = (f = Number(f))
											.toString()
											.toUpperCase()
										if (2 === C.split('E').length) {
											var b = !1
											2 === C.split('.').length &&
												((C = C.split('.')[1]),
												0 !==
													parseInt(C.split('E')[0]) &&
													(b = !0))
											var _ = C.split('E')
											b && (v = _[0].length),
												(v -= parseInt(_[1]))
										} else
											2 === C.split('.').length &&
												0 !==
													parseInt(C.split('.')[1]) &&
												(v = C.split('.')[1].length)
									} catch (f) {
										throw f
									} finally {
										return (isNaN(v) || v < 0) && (v = 0), v
									}
								}),
								(this.convertToInt = function (f) {
									f = Number(f)
									var v = this.countDecimals(f),
										C = f.toString().toUpperCase()
									return 2 === C.split('E').length
										? Math.round(f * Math.pow(10, v))
										: Number(C.replace('.', ''))
								}),
								(this.getCorrectResult = function (f, v, C, b) {
									var _ = 0
									switch (f) {
										case 'add':
											_ = v + C
											break
										case 'sub':
											_ = v - C
											break
										case 'div':
											_ = v / C
											break
										case 'mul':
											_ = v * C
									}
									return Math.abs(b - _) > 1 ? _ : b
								}),
								(this.tfList = this.getLocalData(
									'tfList',
									'json'
								) || [0, 0, 0, 0, 0, 0, 0, 0, 0]),
								this.tfList.length > 9
									? (this.restartData(),
									  setTimeout(function () {
											f.setGameData()
									  }, 2e3))
									: this.setGameData(),
								N.add(this, 'myself')
						}
						return (
							(function (f, v, C) {
								v && c(f.prototype, v), C && c(f, C)
							})(e, [
								{
									key: 'setGameData',
									value: function () {
										if (
											((this.gid = 106),
											(this.noFaceModel = 0),
											(this.gold =
												this.getLocalData(
													'gold',
													'number'
												) || 0),
											(this.level =
												this.getLocalData(
													'level',
													'number'
												) || 0),
											(this.exp =
												this.getLocalData(
													'exp',
													'number'
												) || 0),
											(this.diamond =
												this.getLocalData(
													'diamond',
													'number'
												) || 0),
											(this.bigMapMaxNum =
												this.getLocalData(
													'bigMapMaxNum',
													'number'
												) || 0),
											(this.bigMapNum = Math.floor(
												this.bigMapMaxNum / 100
											)),
											(this.bigMapFloor = Math.floor(
												this.bigMapMaxNum % 100
											)),
											(this.useStrength = 5),
											(this.maxStrength = 80),
											(this.strength =
												parseInt(
													this.getLocalData(
														'strength',
														'number'
													)
												) || 0),
											0 == this.bigMapMaxNum &&
												(this.strength = this.maxStrength),
											(this.strengthAddDiffTime = 3e5),
											(this.infiniteStrengthTime = 0),
											(this.strengthAddTime =
												parseInt(
													this.getLocalData(
														'strengthAddTime'
													)
												) || 0),
											this.strength < this.maxStrength)
										) {
											var f = Math.floor(
												(this.getTime() -
													this.strengthAddTime) /
													this.strengthAddDiffTime
											)
											if (
												((this.strength += f),
												this.strength >=
													this.maxStrength)
											)
												(this.strength = this.maxStrength),
													(this.strengthAddTime = this.getTime()),
													this.setLocalData(
														'strengthAddTime',
														this.strengthAddTime
													)
											else {
												var v =
													(this.getTime() -
														this.strengthAddTime) %
													this.strengthAddDiffTime
												;(this.strengthAddTime =
													this.getTime() - v),
													this.setLocalData(
														'strengthAddTime',
														this.strengthAddTime
													)
											}
										} else
											(this.strengthAddTime = this.getTime()),
												this.getLocalData(
													'strengthAddTime',
													this.strengthAddTime
												)
										;(this.workmateList =
											this.getLocalData(
												'workmateList',
												'json'
											) || []),
											(this.workmateGUID =
												parseInt(
													this.getLocalData(
														'workmateGUID'
													)
												) || 0),
											(this.warehouseList =
												this.getLocalData(
													'warehouseList',
													'json'
												) || []),
											console.log(
												'this.warehouseList',
												this.warehouseList,
												l(this.warehouseList)
											),
											(this.warehouseGUID =
												parseInt(
													this.getLocalData(
														'warehouseGUID'
													)
												) || 0),
											(this.scrollList = this.getLocalData(
												'scrollList'
											) || [
												{
													type: 'weaponScroll',
													num: 0,
												},
												{
													type: 'clothesScroll',
													num: 0,
												},
												{ type: 'ringScroll', num: 0 },
												{
													type: 'necklaceScroll',
													num: 0,
												},
											])
										try {
											this.scrollList = JSON.parse(
												this.scrollList
											)
										} catch (f) {
											console.log(
												'this.scrollList cannot parse',
												this.scrollList
											)
										}
										;(this.pauseData =
											this.getLocalData(
												'pauseData',
												'json'
											) || {}),
											(this.hasTryGameId =
												this.getLocalData(
													'hasTryGameId',
													'json'
												) || []),
											(this.openVibrate =
												parseInt(
													this.getLocalData(
														'openVibrate'
													)
												) || 1),
											(this.openMusic =
												parseInt(
													this.getLocalData(
														'openMusic'
													)
												) || 1),
											(this.offlineGoldTime =
												parseInt(
													this.getLocalData(
														'offlineGoldTime'
													)
												) || 0),
											(this.bigBoxMedalNum =
												parseInt(
													this.getLocalData(
														'bigBoxMedalNum'
													)
												) || 0),
											(this.getbigBoxTime =
												parseInt(
													this.getLocalData(
														'getbigBoxTime'
													)
												) || 0),
											(this.getNormalBoxTime =
												parseInt(
													this.getLocalData(
														'getNormalBoxTime'
													)
												) || 0),
											(this.getBigBoxNum =
												parseInt(
													this.getLocalData(
														'getBigBoxNum'
													)
												) || 0),
											this.isToday(this.getbigBoxTime) ||
												(this.getBigBoxNum = 0),
											(this.dailySeeVideoGetStrengthNum =
												parseInt(
													this.getLocalData(
														'dailySeeVideoGetStrengthNum'
													)
												) || 0),
											(this.dailySeeVideoGetStrengthTime =
												parseInt(
													this.getLocalData(
														'dailySeeVideoGetStrengthTime'
													)
												) || 0),
											this.isToday(
												this
													.dailySeeVideoGetStrengthTime
											) ||
												(this.dailySeeVideoGetStrengthNum = 0),
											(this.dailySeeVideoGetGoldNum =
												parseInt(
													this.getLocalData(
														'dailySeeVideoGetGoldNum'
													)
												) || 0),
											(this.dailySeeVideoGetGoldTime =
												parseInt(
													this.getLocalData(
														'dailySeeVideoGetGoldTime'
													)
												) || 0),
											this.isToday(
												this.dailySeeVideoGetGoldTime
											) ||
												(this.dailySeeVideoGetGoldNum = 0),
											(this.dailySeeVideoGetBoxNum =
												parseInt(
													this.getLocalData(
														'dailySeeVideoGetBoxNum'
													)
												) || 0),
											(this.dailySeeVideoGetBoxTime =
												parseInt(
													this.getLocalData(
														'dailySeeVideoGetBoxTime'
													)
												) || 0),
											this.isToday(
												this.dailySeeVideoGetBoxTime
											) ||
												(this.dailySeeVideoGetBoxNum = 0),
											(this.signInList =
												this.getLocalData(
													'signInList'
												) ||
												w.gameSetting.newSignInConf)
										try {
											this.signInList = JSON.parse(
												this.signInList
											)
										} catch (f) {
											console.log(
												'this.signInList cannot parse',
												this.signInList
											)
										}
										;(this.signInNum =
											parseInt(
												this.getLocalData('signInNum')
											) || 0),
											(this.signInTime =
												parseInt(
													this.getLocalData(
														'signInTime'
													)
												) || 0),
											(this.offlineMoneyTime =
												parseInt(
													this.getLocalData(
														'offlineMoneyTime'
													)
												) || 0),
											(this.sharelist = {
												text: 'share',
												url: '',
											}),
											(this.offlineTime = 0),
											(this.oneAdList = []),
											(this.rewardList = []),
											(this.bannerType = ''),
											(this.shareNum = 0),
											(this.shareType = !1),
											(this.shareMode = 1),
											(this.shareModeNum = 0),
											(this.firstGame =
												0 == this.bigMapMaxNum),
											console.log(
												'firstGame',
												this.firstGame,
												this.strength
											),
											this.firstGame &&
												((this.strength = this.maxStrength),
												this.setLocalData(
													'strength',
													this.strength
												),
												(this.getNormalBoxTime = this.getTime()),
												this.setLocalData(
													'getNormalBoxTime',
													this.getNormalBoxTime
												),
												(this.offlineMoneyTime = this.getTime()),
												this.setLocalData(
													'offlineMoneyTime',
													this.offlineMoneyTime
												),
												(this.pauseData = {}),
												this.setLocalData(
													'pauseData',
													''
												)),
											(this.tryTime = 0),
											(this.tryCallback = null),
											this.resetGameData()
									},
								},
								{
									key: 'setdata',
									value: function (f) {
										if (
											(Object.assign(this, f),
											this.nickName)
										)
											try {
												;(this.nickName = this.hex2str(
													this.nickName
												)),
													console.log(
														'my nickname',
														this.nickName
													)
											} catch (f) {
												return console.log(
													'this.nickname cannot decode',
													this.nickName
												)
											}
									},
								},
								{
									key: 'restartData',
									value: function () {
										console.log('重新设置数据'),
											(this.gold =
												this.getLocalData(
													'gold',
													'number'
												) || 0),
											(this.level =
												this.getLocalData(
													'level',
													'number'
												) || 0),
											(this.strength =
												this.getLocalData(
													'strength',
													'number'
												) || 80),
											(this.diamond =
												this.getLocalData(
													'diamond',
													'number'
												) || 0),
											this.setLocalData(
												'gold',
												this.gold
											),
											this.setLocalData(
												'level',
												this.level
											),
											this.setLocalData(
												'strength',
												this.strength
											),
											this.setLocalData(
												'diamond',
												this.diamond
											),
											(this.strengthAddTime = this.getTime()),
											this.setLocalData(
												'strengthAddTime',
												this.strengthAddTime
											),
											(this.bigMapMaxNum =
												this.getLocalData(
													'bigMapMaxNum',
													'number'
												) || 0),
											(this.bigMapNum = Math.floor(
												this.bigMapMaxNum / 100
											)),
											(this.bigMapFloor = Math.floor(
												this.bigMapMaxNum % 100
											)),
											(this.workmateList =
												this.getLocalData(
													'workmateList',
													'json'
												) || []),
											(this.workmateGUID =
												this.getLocalData(
													'workmateGUID',
													'number'
												) || 0),
											(this.warehouseList =
												this.getLocalData(
													'warehouseList',
													'json'
												) || []),
											(this.warehouseGUID =
												this.getLocalData(
													'warehouseGUID',
													'number'
												) || 0),
											this.setLocalData(
												'bigMapMaxNum',
												this.bigMapMaxNum
											),
											this.setLocalData(
												'workmateList',
												this.workmateList
											),
											this.setLocalData(
												'workmateGUID',
												this.workmateGUID
											),
											this.setLocalData(
												'warehouseList',
												this.warehouseList
											),
											this.setLocalData(
												'warehouseGUID',
												this.warehouseGUID
											),
											(this.scrollList = this.getLocalData(
												'scrollList',
												'json'
											) || [
												{
													type: 'weaponScroll',
													num: 0,
												},
												{
													type: 'clothesScroll',
													num: 0,
												},
												{ type: 'ringScroll', num: 0 },
												{
													type: 'necklaceScroll',
													num: 0,
												},
											]),
											(this.tfList = this.getLocalData(
												'tfList',
												'json'
											) || [0, 0, 0, 0, 0, 0, 0, 0, 0]),
											this.setLocalData(
												'scrollList',
												this.scrollList
											),
											this.setLocalData(
												'tfList',
												this.tfList
											),
											(this.bigBoxMedalNum =
												this.getLocalData(
													'bigBoxMedalNum',
													'number'
												) || 0),
											(this.getbigBoxTime =
												this.getLocalData(
													'getbigBoxTime',
													'number'
												) || 0),
											(this.getNormalBoxTime =
												this.getLocalData(
													'getNormalBoxTime',
													'number'
												) || 0),
											(this.getBigBoxNum =
												this.getLocalData(
													'getBigBoxNum',
													'number'
												) || 0),
											this.setLocalData(
												'bigBoxMedalNum',
												this.bigBoxMedalNum
											),
											this.setLocalData(
												'getbigBoxTime',
												this.getbigBoxTime
											),
											this.setLocalData(
												'getNormalBoxTime',
												this.getNormalBoxTime
											),
											this.setLocalData(
												'getBigBoxNum',
												this.getBigBoxNum
											)
									},
								},
								{
									key: 'getTime',
									value: function () {
										return +new Date()
									},
								},
								{
									key: 'isToday',
									value: function (f) {
										return (
											new Date(f).toDateString() ===
											new Date().toDateString()
										)
									},
								},
								{
									key: 'hex2str',
									value: function (f) {
										for (
											var v = new Array(), C = 0;
											C < f.length;
											C++
										)
											v.push(f.substring(C, C + 2)), C++
										var b = ''
										return (
											v.forEach(function (f) {
												b += '%' + f
											}),
											decodeURI(b)
										)
									},
								},
								{
									key: 'getShareList',
									value: function () {
										return this.sharelist.length > 0
											? this.sharelist[
													Math.floor(
														Math.random() *
															this.sharelist
																.length
													)
											  ]
											: { text: 'share', url: '' }
									},
								},
								{
									key: 'preloadScene',
									value: function (f, v) {
										var C = cc.director._getSceneUuid(f)
										C
											? (cc.director.emit(
													cc.Director
														.EVENT_BEFORE_SCENE_LOADING,
													f
											  ),
											  cc.loader.load(
													{
														uuid: C.uuid,
														type: 'uuid',
													},
													function (f, v, C) {
														console.log(
															'已完成Items:' + f
														),
															console.log(
																'全部Items:' + v
															),
															console.log(
																'当前Item:' +
																	C.url
															)
														var b = (f / v) * 100
														console.log(
															'加载进度:' + b
														)
													},
													function (f, C) {
														v && v(f, C)
													}
											  ))
											: v(new Error())
									},
								},
								{
									key: 'preLoadRes',
									value: function () {
										cc.loader.loadResArray(
											[
												'ui/bullet_0',
												'ui/bullet_1',
												'ui/bullet_2',
												'ui/bullet_3',
												'pre/enemy',
												'pre/zhiyuline',
												'pre/SubWeapon',
												'pre/flyGold',
											],
											function (f) {
												console.log(
													'load preloadList',
													f
												)
											}
										)
									},
								},
								{
									key: 'changeTime',
									value: function (f) {
										var v = Math.floor(f),
											C = 0,
											b = 0
										return (
											v > 60 &&
												((C = parseInt(v / 60)),
												(v = parseInt(v % 60)),
												C > 60 &&
													((b = parseInt(C / 60)),
													(C = parseInt(C % 60)))),
											(b < 10 ? '0' + b : b) +
												':' +
												(C < 10 ? '0' + C : C) +
												':' +
												(v < 10 ? '0' + v : v)
										)
									},
								},
								{
									key: 'isIphoneX',
									value: function () {
										return (
											/iphone/gi.test(
												navigator.userAgent
											) &&
											812 == screen.height &&
											375 == screen.width
										)
									},
								},
								{
									key: 'resetWidget',
									value: function (f, v) {
										'up' == v
											? ((f.y =
													cc.winSize.height / 2 -
													(512 - f.y)),
											  this.isIphoneX() &&
													((f.y -= 80),
													f.getComponent(cc.Widget) &&
														(f.getComponent(
															cc.Widget
														).top += 80)))
											: 'down' == v &&
											  (f.y =
													512 -
													(cc.winSize.height / 2 -
														f.y))
									},
								},
								{
									key: 'showPre',
									value: function (f, v) {
										var C = cc.loader.getRes(f, cc.Prefab)
										if (C) {
											var b = cc.instantiate(C)
											v &&
												b
													.getComponent(v.jname)
													.init(v.data),
												(b.zIndex = 1),
												cc
													.find('Canvas')
													.getChildByName('ui')
													? cc
															.find('Canvas')
															.getChildByName(
																'ui'
															)
															.addChild(b)
													: cc
															.find('Canvas')
															.addChild(b)
										} else
											cc.loader.loadRes(
												f,
												cc.Prefab,
												function (f, C) {
													var b = cc.instantiate(C)
													v &&
														b
															.getComponent(
																v.jname
															)
															.init(v.data),
														(b.zIndex = 1),
														cc
															.find('Canvas')
															.getChildByName(
																'ui'
															)
															? cc
																	.find(
																		'Canvas'
																	)
																	.getChildByName(
																		'ui'
																	)
																	.addChild(b)
															: cc
																	.find(
																		'Canvas'
																	)
																	.addChild(b)
												}.bind(this)
											)
									},
								},
								{
									key: 'copyPre',
									value: function (f, v) {
										var C = cc.instantiate(f)
										v &&
											(C.getComponent(v.jname).init(
												v.data
											),
											(C.name = v.jname)),
											(C.active = !0),
											(C.zIndex = 1),
											cc.find('Canvas').addChild(C)
									},
								},
								{
									key: 'asyncShowImage',
									value: function (f, v, C) {
										if (v) {
											var b = cc.loader.getRes(v)
											b
												? ((f.spriteFrame = new cc.SpriteFrame(
														b
												  )),
												  C &&
														((f.node.width = C[0]),
														(f.node.height = C[1])))
												: cc.loader.loadRes(
														v,
														function (v, b) {
															if (v)
																return console.error(
																	v
																)
															;(f.spriteFrame = new cc.SpriteFrame(
																b
															)),
																C &&
																	((f.node.width =
																		C[0]),
																	(f.node.height =
																		C[1]))
														}
												  )
										}
									},
								},
								{
									key: 'getDanmuList',
									value: function () {
										if (
											!(
												this.danmuList &&
												this.danmuList.length > 0
											) &&
											0 != this.isShowDanmu
										) {
											var f = this
											cc.request(
												gameconfig.gameSetting
													.requestUrl + 'getbarrage',
												'POST',
												{ uid: this.uid },
												function (v) {
													try {
														v = JSON.parse(v)
													} catch (f) {
														return console.log(
															'data is not json'
														)
													}
													if (1 == v.status) {
														f.danmuList = []
														for (
															var C = 0;
															C < v.data.length;
															C++
														)
															'' !=
																v.data[C]
																	.avatarUrl &&
																f.danmuList.push(
																	v.data[C]
																)
														for (
															var b = Math.floor(
																	4 *
																		Math.random() +
																		5
																),
																_ = 0;
															_ < b;
															_++
														)
															f.showDanmu()
													}
												}
											)
										}
									},
								},
								{
									key: 'showDanmu',
									value: function () {
										if (
											'Main' ==
											cc.director.getScene().name
										) {
											if (0 != this.danmuList.length) {
												var f,
													v = this.danmuList[0]
												this.danmuList.splice(0, 1),
													((f =
														this.danmuPool.size > 0
															? this.danmuPool.get()
															: cc.instantiate(
																	cc.loader.getRes(
																		'mould/danmunode'
																	)
															  ))
														.getChildByName('text')
														.getComponent(
															cc.Label
														).string = v.content),
													'' != v.avatarUrl &&
														cc.loader.load(
															{
																url:
																	v.avatarUrl,
																type: 'png',
															},
															function (v, C) {
																f
																	.getChildByName(
																		'mask'
																	)
																	.getChildByName(
																		'head'
																	)
																	.getComponent(
																		cc.Sprite
																	).spriteFrame = new cc.SpriteFrame(
																	C
																)
															}
														),
													f.getChildByName('text').on(
														cc.Node.EventType
															.SIZE_CHANGED,
														function () {
															;(f.getChildByName(
																'wenzidi'
															).width =
																f.getChildByName(
																	'text'
																).width + 80),
																f
																	.getChildByName(
																		'text'
																	)
																	.off(
																		cc.Node
																			.EventType
																			.SIZE_CHANGED
																	)
														}.bind(this)
													),
													(f.x =
														cc.winSize.width / 2 +
														300),
													(f.y =
														700 * Math.random() -
														200),
													(f.name = 'danmu'),
													cc
														.find(
															'Canvas/danmuinfo'
														)
														.addChild(f)
												var C = 7 * Math.random() + 3
												f.runAction(
													cc.sequence(
														cc.moveTo(
															C,
															cc.v2(
																-cc.winSize
																	.width /
																	2 -
																	400,
																f.y
															)
														),
														cc.removeSelf(),
														cc.callFunc(
															function () {
																this
																	.danmuList &&
																this.danmuList
																	.length > 0
																	? this.showDanmu()
																	: cc
																			.find(
																				'Canvas/danmuinfo'
																			)
																			.getChildByName(
																				'danmu'
																			) ||
																	  this.getDanmuList(),
																	this.danmuPool.put(
																		f
																	)
															}.bind(this)
														)
													)
												)
											}
										} else this.danmuList = null
									},
								},
								{
									key: 'sendDanmu',
									value: function (f) {
										var v
										;((v =
											this.danmuPool.size > 0
												? this.danmuPool.get()
												: cc.instantiate(
														cc.loader.getRes(
															'mould/danmunode'
														)
												  ))
											.getChildByName('text')
											.getComponent(cc.Label).string = f),
											cc.loader.load(
												{
													url: this.avatarUrl,
													type: 'png',
												},
												function (f, C) {
													v
														.getChildByName('mask')
														.getChildByName('head')
														.getComponent(
															cc.Sprite
														).spriteFrame = new cc.SpriteFrame(
														C
													)
												}
											),
											v.getChildByName('text').on(
												cc.Node.EventType.SIZE_CHANGED,
												function () {
													;(v.getChildByName(
														'wenzidi'
													).width =
														v.getChildByName('text')
															.width + 80),
														v
															.getChildByName(
																'text'
															)
															.off(
																cc.Node
																	.EventType
																	.SIZE_CHANGED
															)
												}.bind(this)
											),
											(v.x = cc.winSize.width / 2 + 300),
											(v.y = 700 * Math.random() - 200),
											cc
												.find('Canvas/danmuinfo')
												.addChild(v)
										var C = 7 * Math.random() + 3
										v.runAction(
											cc.sequence(
												cc.moveTo(
													C,
													cc.v2(
														-cc.winSize.width / 2 -
															400,
														v.y
													)
												),
												cc.callFunc(
													function () {
														this.danmuPool.put(v)
													}.bind(this)
												)
											)
										)
									},
								},
								{
									key: 'aldSendEvent',
									value: function (f, v) {
										switch (_.default.pfName) {
											case 'wx':
												if (!wx.aldSendEvent) return
												;(v = v || null),
													wx.aldSendEvent(f, v)
										}
									},
								},
								{
									key: 'aldOnStart',
									value: function (f) {
										window.wx && wx.aldStage.onStart(f)
									},
								},
								{
									key: 'aldOnRunning',
									value: function (f) {
										window.wx && wx.aldStage.onRunning(f)
									},
								},
								{
									key: 'aldOnEnd',
									value: function (f) {
										window.wx && wx.aldStage.onEnd(f)
									},
								},
								{
									key: 'getShareMode',
									value: function () {
										switch (
											parseInt(this.custom.shareMode)
										) {
											case 1:
												return 'share'
											case 2:
												return 'video'
											case 3:
												return this.shareModeNum % 2 ==
													0
													? 'share'
													: 'video'
											case 4:
												return this.shareModeNum % 2 ==
													1
													? 'share'
													: 'video'
											case 5:
												var f = new Date().getHours()
												return f >= 22 || f < 6
													? 'video'
													: this.shareModeNum % 2 == 1
													? 'share'
													: 'video'
											case 6:
												return Math.floor(
													this.shareModeNum / 2
												) > this.custom.shareVideoNum ||
													this.shareModeNum % 2 == 1
													? 'share'
													: 'video'
										}
									},
								},
								{
									key: 'wxShareMode',
									value: function (f) {
										switch (
											parseInt(this.custom.shareMode)
										) {
											case 1:
												this.wxShare(f)
												break
											case 2:
												this.openVideo(f)
												break
											case 3:
												this.shareModeNum % 2 == 0
													? this.wxShare(f)
													: this.openVideo(f)
												break
											case 4:
												this.shareModeNum % 2 == 1
													? this.wxShare(f)
													: this.openVideo(f)
												break
											case 5:
												var v = new Date().getHours()
												v >= 22 || v < 6
													? this.openVideo(f)
													: this.shareModeNum % 2 == 1
													? this.wxShare(f)
													: this.openVideo(f)
												break
											case 6:
												Math.floor(
													this.shareModeNum / 2
												) > this.custom.shareVideoNum ||
												this.shareModeNum % 2 == 1
													? this.wxShare(f)
													: this.openVideo(f)
										}
									},
								},
								{
									key: 'wxShare',
									value: function (f) {
										if (window.wx) {
											if (cc.myself.isShenhe)
												return void (f && f())
											;(this.offlineTime = this.getTime()),
												(this.shareCallback = f)
											var v = this.getShareList()
											wx.aldShareAppMessage({
												title: v.text || '亮了',
												imageUrl: v.url,
											})
										} else f && f()
									},
								},
								{
									key: 'openVideo',
									value: function (f, v) {
										var C = v || 'adunit-0abc9dbd7aed108b'
										;(cc.videoInTime = cc.myself.getTime()),
											(cc.videoCallback = f)
										var b = this
										if ('undefined' != typeof wx) {
											console.log('create video')
											var _ = wx.createRewardedVideoAd({
												adUnitId: C,
											})
											b.videoAd ||
												((b.videoAd = _),
												b.videoAd.onClose(function (f) {
													console.log('close', f),
														f.isEnded &&
															(cc.videoCallback &&
																cc.videoCallback(),
															b.shareModeNum++)
												}),
												b.videoAd.onError(function (
													f
												) {})),
												b.videoAd
													.load()
													.then(function () {
														return b.videoAd.show()
													})
													.catch(function (f) {
														return console.log(
															f.errMsg
														)
													})
										} else f && f()
									},
								},
								{
									key: 'openVideo2',
									value: function (f) {
										;(cc.videoInTime = cc.myself.getTime()),
											(cc.videoCallback = f)
										var v = this
										if ('undefined' != typeof wx) {
											console.log('create video')
											var C = wx.createRewardedVideoAd({
												adUnitId:
													'adunit-0abc9dbd7aed108b',
											})
											v.videoAd2 ||
												((v.videoAd2 = C),
												v.videoAd2.onClose(function (
													f
												) {
													console.log('close', f),
														f.isEnded
															? (cc.videoCallback &&
																	cc.videoCallback(),
															  v.shareModeNum++)
															: (v.tips(
																	'需要看完视频才能领取奖励'
															  ),
															  v.emitEvent(
																	'openReviveSub'
															  ))
												}),
												v.videoAd2.onError(function (
													f
												) {})),
												v.videoAd2
													.load()
													.then(function () {
														return v.videoAd2.show()
													})
													.catch(function (f) {
														return console.log(
															f.errMsg
														)
													})
										} else f && f()
									},
								},
								{
									key: 'showBanner',
									value: function (f) {
										if (
											!this.isShenhe &&
											'undefined' != typeof wx
										) {
											var v = this
											this.bannerAd &&
												(this.bannerAd.destroy(),
												(this.bannerAd = null)),
												wx.getSystemInfo({
													success: function (f) {
														;(v.bannerAd = wx.createBannerAd(
															{
																adUnitId:
																	'adunit-7958e1cffb73a39b',
																style: {
																	top: 0,
																	left: 0,
																	width:
																		f.screenWidth,
																},
															}
														)),
															v.bannerAd.onLoad(
																function () {
																	var C =
																			f.screenHeight -
																			v
																				.bannerAd
																				.style
																				.realHeight,
																		b = wx.getSystemInfoSync()
																	b &&
																		-1 !=
																			b.model.indexOf(
																				'iPhone X'
																			) &&
																		(C -= 0),
																		(v.bannerAd.style.top = C),
																		(v.bannerAd.style.left = 0),
																		(v.bannerAd.style.width =
																			f.screenWidth)
																}
															),
															v.bannerAd.onError(
																function (f) {
																	1004 ==
																	f.errCode
																		? console.log(
																				'无合适的广告'
																		  )
																		: 1001 ==
																				f.errCode &&
																		  console.log(
																				'参数异常'
																		  )
																}
															),
															v.bannerAd.show()
													},
												})
										}
									},
								},
								{
									key: 'hideBanner',
									value: function () {
										this.bannerAd &&
											(this.bannerAd.destroy(),
											(this.bannerAd = null),
											(this.bannerType = ''))
									},
								},
								{
									key: 'showBanner2',
									value: function () {
										this.bannerAd && this.bannerAd.show()
									},
								},
								{
									key: 'hideBanner2',
									value: function () {
										this.bannerAd && this.bannerAd.hide()
									},
								},
								{
									key: 'wxVibrateShort',
									value: function (f) {
										window.wx &&
											wx.vibrateShort({
												complete: function () {
													f && f()
												},
											})
									},
								},
								{
									key: 'wxVibrateLong1',
									value: function (f) {
										window.wx &&
											wx.vibrateShort({
												complete: function () {
													wx.vibrateShort({
														complete: function () {
															wx.vibrateShort({
																complete: function () {
																	wx.vibrateShort(
																		{
																			complete: function () {
																				f &&
																					f()
																			},
																		}
																	)
																},
															})
														},
													})
												},
											})
									},
								},
								{
									key: 'wxVibrateLong2',
									value: function (f) {
										window.wx &&
											wx.vibrateLong({
												complete: function () {
													f && f()
												},
											})
									},
								},
								{
									key: 'wxCreateInnerAudioContext',
									value: function (f) {
										var v =
											arguments.length > 1 &&
											void 0 !== arguments[1] &&
											arguments[1]
										if (
											'undefined' != typeof wx &&
											this.openMusic
										) {
											var C = wx.createInnerAudioContext()
											;(C.loop = v),
												(C.src = w.musicUrl + '' + f),
												C.play(),
												C.onEnded(function (f) {
													C.destroy()
												})
										}
									},
								},
								{
									key: 'showLoading',
									value: function () {
										this.loadingnode ||
											((this.loadingnode = cc.instantiate(
												cc.loader.getRes(
													'mould/loading'
												)
											)),
											(this.loadingnode.zIndex = 999),
											cc
												.find('Canvas')
												.addChild(this.loadingnode))
									},
								},
								{ key: 'hideLoading', value: function () {} },
								{
									key: 'compareArrDown',
									value: function (f, v) {
										return f.sort(
											(function (f) {
												return function (v, C) {
													var b = v[f],
														_ = C[f]
													return (
														isNaN(Number(b)) ||
															isNaN(Number(_)) ||
															((b = Number(b)),
															(_ = Number(_))),
														b < _
															? 1
															: b > _
															? -1
															: 0
													)
												}
											})(v)
										)
									},
								},
								{
									key: 'compareArrUp',
									value: function (f, v) {
										return f.sort(
											(function (f) {
												return function (v, C) {
													var b = v[f],
														_ = C[f]
													return (
														isNaN(Number(b)) ||
															isNaN(Number(_)) ||
															((b = Number(b)),
															(_ = Number(_))),
														b < _
															? -1
															: b > _
															? 1
															: 0
													)
												}
											})(v)
										)
									},
								},
								{
									key: 'loadPrefab',
									value: function (f, v) {
										cc.loader.loadRes(
											f,
											cc.Prefab,
											function (f, C) {
												var b = cc.instantiate(C)
												v &&
													b
														.getComponent(v.jname)
														.init(v.data),
													cc
														.find('Canvas')
														.addChild(b)
											}.bind(this)
										)
									},
								},
								{
									key: 'tips',
									value: function (f, v) {
										switch (cc.director.getScene().name) {
											case 'MainScene':
												return b.default.showTips(f, v)
										}
										var C = cc.loader.getRes(
											'pre/tips',
											cc.Prefab
										)
										if (C) {
											var _ = cc.instantiate(C)
											;(_.zIndex = 999),
												(_.getChildByName(
													'label'
												).getComponent(
													cc.Label
												).string = f),
												cc
													.find('Canvas')
													.getChildByName('ui')
													? cc
															.find('Canvas')
															.getChildByName(
																'ui'
															)
															.addChild(_)
													: cc
															.find('Canvas')
															.addChild(_),
												_.runAction(
													cc.sequence(
														cc.moveBy(
															1,
															cc.v2(0, 200)
														),
														cc.callFunc(
															function () {
																_.destroy(),
																	v && v()
															}
														)
													)
												)
										} else
											cc.loader.loadRes(
												'pre/tips',
												cc.Prefab,
												function (C, b) {
													var _ = cc.instantiate(b)
													;(_.zIndex = 999),
														(_.getChildByName(
															'label'
														).getComponent(
															cc.Label
														).string = f),
														cc
															.find('Canvas')
															.getChildByName(
																'ui'
															)
															? cc
																	.find(
																		'Canvas'
																	)
																	.getChildByName(
																		'ui'
																	)
																	.addChild(_)
															: cc
																	.find(
																		'Canvas'
																	)
																	.addChild(
																		_
																	),
														_.runAction(
															cc.sequence(
																cc.moveBy(
																	1,
																	cc.v2(
																		0,
																		200
																	)
																),
																cc.callFunc(
																	function () {
																		_.destroy(),
																			v &&
																				v()
																	}
																)
															)
														)
												}.bind(this)
											)
									},
								},
								{
									key: 'changeObjToArray',
									value: function (f) {
										var v = []
										for (var C in f) {
											var b = C.split(',')
											null == v[parseInt(b[0])] &&
												(v[parseInt(b[0])] = []),
												(v[parseInt(b[0])][
													parseInt(b[1])
												] = f[C])
										}
										return v
									},
								},
								{
									key: 'getObjCount',
									value: function (f) {
										var v = 0
										for (var C in f)
											f.hasOwnProperty(C) && v++
										return v
									},
								},
								{
									key: 'xmlhttprequest',
									value: function (f, v, C, b) {
										v || (v = 'GET')
										var _ = new XMLHttpRequest()
										;(_.onreadystatechange = function () {
											if (
												4 == _.readyState &&
												_.status >= 200 &&
												_.status < 400
											) {
												var f = _.responseText
												console.log('response', f),
													b && b(f)
											}
										}),
											_.open(v, f, !0),
											window.my &&
												(_.setRequestHeader(
													'Access-Control-Allow-Origin',
													''
												),
												_.setRequestHeader(
													'Content-Type',
													'application/json'
												)),
											'object' == l(C) &&
												(C = JSON.stringify(C)),
											_.send(C)
									},
								},
								{
									key: 'setLocalData',
									value: function (f, v) {
										'string' != typeof v &&
											(v = JSON.stringify(v)),
											_.default.sys.localStorage.setItem(
												f,
												v
											)
									},
								},
								{
									key: 'getLocalData',
									value: function (f) {
										var v =
												arguments.length > 1 &&
												void 0 !== arguments[1]
													? arguments[1]
													: 'string',
											C = _.default.sys.localStorage.getItem(
												f
											)
										switch (v) {
											case 'number':
												C = C ? Number(C) : 0
												break
											case 'json':
												C = C ? JSON.parse(C) : ''
										}
										return C
									},
								},
								{
									key: 'emitEvent',
									value: function (f, v) {
										v
											? cc.director.emit(f, v)
											: cc.director.emit(f)
									},
								},
								{
									key: 'scaleToShow',
									value: function (f) {
										;(f.scale = 0.85),
											f.runAction(
												cc.sequence(
													cc.scaleTo(0.1, 1.1),
													cc.scaleTo(0.05, 1)
												)
											)
									},
								},
								{
									key: 'resetGameData',
									value: function () {
										;(this.pauseData =
											this.pauseData || {}),
											(this.bigMapNum =
												this.pauseData.bigMapNum || 1),
											(this.gameGold =
												this.pauseData.gameGold || 0),
											(this.addBuffList =
												this.pauseData.addBuffList ||
												[]),
											(this.getRewardList =
												this.pauseData.getRewardList ||
												[]),
											this.checkBuff(),
											this.checkAddBuff()
									},
								},
								{
									key: 'changeUnitToNum',
									value: function (f) {
										var v = f.substring(0, f.length - 1),
											C = 1
										switch (f.substring(f.length - 1)) {
											case 'A':
												C = 1
												break
											case 'K':
												C = 1e3
												break
											case 'M':
												C = 1e6
												break
											case 'B':
												C = 1e9
												break
											case 'T':
												C = 1e12
												break
											case 'P':
												C = 1e15
												break
											case 'E':
												C = 1e18
												break
											case 'Z':
												C = 1e21
												break
											case 'Y':
												C = 1e24
												break
											case 'S':
												C = 1e27
												break
											default:
												v = parseFloat(f)
										}
										return v * C
									},
								},
								{
									key: 'changeNumToUnit',
									value: function (f) {
										var v = f + ''
										return (
											f > 1e27
												? ((f /= 1e27),
												  (v =
														Math.floor(1 * f) / 1 +
														'S'))
												: f > 1e24
												? ((f /= 1e24),
												  (v =
														Math.floor(1 * f) / 1 +
														'Y'))
												: f > 1e21
												? ((f /= 1e21),
												  (v =
														Math.floor(1 * f) / 1 +
														'Z'))
												: f > 1e18
												? ((f /= 1e18),
												  (v =
														Math.floor(1 * f) / 1 +
														'E'))
												: f > 1e15
												? ((f /= 1e15),
												  (v =
														Math.floor(1 * f) / 1 +
														'P'))
												: f > 1e12
												? ((f /= 1e12),
												  (v =
														Math.floor(1 * f) / 1 +
														'T'))
												: f > 1e9
												? ((f /= 1e9),
												  (v =
														Math.floor(1 * f) / 1 +
														'B'))
												: f > 1e6
												? ((f /= 1e6),
												  (v =
														Math.floor(1 * f) / 1 +
														'M'))
												: f > 1e3 &&
												  ((f /= 1e3),
												  (v =
														Math.floor(1 * f) / 1 +
														'K')),
											v
										)
									},
								},
								{
									key: 'randomByWeight',
									value: function (f) {
										for (
											var v = 0, C = 0;
											C < f.length;
											C++
										)
											(v += f[C]), (f[C] = v)
										for (
											var b = Math.random() * v, _ = 0;
											_ < f.length;
											_++
										)
											if (b < f[_]) return _
									},
								},
								{
									key: 'checkStrength',
									value: function () {
										this.getTime() - this.strengthAddTime >=
											this.strengthAddDiffTime &&
											(this.strength < this.maxStrength
												? (this.strength++,
												  this.setLocalData(
														'strength',
														this.strength
												  ),
												  (this.strengthAddTime += this.strengthAddDiffTime),
												  this.setLocalData(
														'strengthAddTime',
														this.strengthAddTime
												  ))
												: ((this.strengthAddTime = this.getTime()),
												  this.setLocalData(
														'strengthAddTime',
														this.strengthAddTime
												  )))
									},
								},
								{
									key: 'getNoFaceModel',
									value: function () {
										return this.custom &&
											this.custom.noFaceModel
											? this.custom.noFaceModel
											: this.noFaceModel
									},
								},
								{
									key: 'changeForBuild',
									value: function (f) {
										var v = 0
										switch (f) {
											case 'q':
												v = 1
												break
											case 'w':
												v = 2
												break
											case 'e':
												v = 3
												break
											case 'r':
												v = 4
												break
											case 't':
												v = 5
												break
											case 'y':
												v = 6
												break
											case 'u':
												v = 7
												break
											case 'i':
												v = 8
												break
											case 'o':
												v = 9
												break
											case 'p':
												v = 10
										}
										return v
									},
								},
								{
									key: 'checkAddBuff',
									value: function () {
										for (
											var f = {}, v = 0;
											v < this.addBuffList.length;
											v++
										) {
											var C =
												w.buffConf[this.addBuffList[v]]
											f[C.type]
												? (f[C.type] += C.num)
												: (f[C.type] = C.num)
										}
										this.addBuffData = f
									},
								},
								{
									key: 'getPlayerAddBuffListData',
									value: function () {
										return (
											this.addBuffData ||
												this.checkAddBuff(),
											this.addBuffData
										)
									},
								},
								{
									key: 'getPlayerAttribute',
									value: function (f) {
										var v = 0,
											C = 100
										w.playerDefaultConf[f + 'Percentage'] &&
											(C =
												100 -
												w.playerDefaultConf[
													f + 'Percentage'
												]),
											this.buffList[f] &&
												(v += this.buffList[f]),
											this.buffList[f + 'Percentage'] &&
												(C += this.buffList[
													f + 'Percentage'
												])
										var b = this.getPlayerAddBuffListData()
										b[f] && (v += b[f]),
											b[f + 'Percentage'] &&
												(C += b[f + 'Percentage'])
										var _ = (v * C) / 100
										return parseFloat(_.toFixed(3))
									},
								},
								{
									key: 'getPlayerHp',
									value: function () {
										return Math.floor(
											this.getPlayerAttribute('hp')
										)
									},
								},
								{
									key: 'getPlayerAtk',
									value: function () {
										var f = this.getPlayerAttribute(
											'extraAtk'
										)
										return Math.floor(
											this.getPlayerAttribute('atk') * f
										)
									},
								},
								{
									key: 'getPlayerSpe',
									value: function () {
										return this.getPlayerAttribute('spe')
									},
								},
								{
									key: 'getPlayerAtkSpe',
									value: function () {
										return this.getPlayerAttribute('atkSpe')
									},
								},
								{
									key: 'getPlayerCrit',
									value: function () {
										return this.getPlayerAttribute('crit')
									},
								},
								{
									key: 'getPlayerCritDamage',
									value: function () {
										return this.getPlayerAttribute(
											'critDamage'
										)
									},
								},
								{
									key: 'getPlayerDamageReduction',
									value: function () {
										return this.getPlayerAttribute(
											'damageReduction'
										)
									},
								},
								{
									key: 'getPlayerDamageReductionPer',
									value: function () {
										return this.getPlayerAttribute(
											'damageReductionPer'
										)
									},
								},
								{
									key: 'getPlayerArmor',
									value: function () {
										return this.getPlayerAttribute('armor')
									},
								},
								{
									key: 'getPlayerArrowNum',
									value: function () {
										return {
											forwardArrow: this.getPlayerAttribute(
												'forwardArrow'
											),
											diagonalArrow: this.getPlayerAttribute(
												'diagonalArrow'
											),
											sidedArrow: this.getPlayerAttribute(
												'sidedArrow'
											),
											backwardArrow: this.getPlayerAttribute(
												'backwardArrow'
											),
										}
									},
								},
								{
									key: 'getPlayerArrowIsPenetrate',
									value: function () {
										return (
											this.getPlayerAttribute(
												'penetrate'
											) > 0
										)
									},
								},
								{
									key: 'getPlayerArrowIsRebound',
									value: function () {
										return (
											this.getPlayerAttribute('rebound') >
											0
										)
									},
								},
								{
									key: 'getPlayerSerial',
									value: function () {
										return this.getPlayerAttribute('serial')
									},
								},
								{
									key: 'getPlayerCatapult',
									value: function () {
										return this.getPlayerAttribute(
											'catapult'
										)
									},
								},
								{
									key: 'getPlayerPierceWall',
									value: function () {
										return this.getPlayerAttribute(
											'pierceWall'
										)
									},
								},
								{
									key: 'getPlayerLevitate',
									value: function () {
										return this.getPlayerAttribute(
											'levitate'
										)
									},
								},
								{
									key: 'getPlayerArrowAttribute',
									value: function () {
										return {
											icyIce: this.getPlayerAttribute(
												'icyIce'
											),
											fire: this.getPlayerAttribute(
												'fire'
											),
											poison: this.getPlayerAttribute(
												'poison'
											),
										}
									},
								},
								{
									key: 'getPlayerDamageReduction',
									value: function () {
										return this.getPlayerAttribute(
											'damageReduction'
										)
									},
								},
								{
									key: 'getPlayerExpAdd',
									value: function () {
										return this.getPlayerAttribute('expAdd')
									},
								},
								{
									key: 'getPlayerAnger',
									value: function () {
										return this.getPlayerAttribute('anger')
									},
								},
								{
									key: 'getPlayerBaseHp',
									value: function () {
										var f = 0
										this.buffList.hp &&
											(f += this.buffList.hp)
										var v = this.getPlayerAddBuffListData()
										return v.hp && (f += v.hp), f.toFixed(0)
									},
								},
								{
									key: 'getPlayerHide',
									value: function () {
										return this.getPlayerAttribute('hide')
									},
								},
								{
									key: 'getPlayerHpShield',
									value: function () {
										return this.getPlayerAttribute(
											'hpShield'
										)
									},
								},
								{
									key: 'getPlayerBloodThirsty',
									value: function () {
										return this.getPlayerAttribute(
											'bloodThirsty'
										)
									},
								},
								{
									key: 'getPlayerFire',
									value: function () {
										return this.getPlayerAttribute('fire')
									},
								},
								{
									key: 'getPlayerPoison',
									value: function () {
										return this.getPlayerAttribute('poison')
									},
								},
								{
									key: 'getPlayerWudiStar',
									value: function () {
										return this.getPlayerAttribute(
											'wudiStar'
										)
									},
								},
								{
									key: 'getPlayerEnemyDieGetHpPercentage',
									value: function () {
										return this.getPlayerAttribute(
											'enemyDieGetHpPercentage'
										)
									},
								},
								{
									key: 'getPlayerUpLevelGetHp',
									value: function () {
										return this.getPlayerAttribute(
											'upLevelGetHp'
										)
									},
								},
								{
									key: 'getWorkmateCp',
									value: function () {
										for (
											var f = [], v = {}, C = 0;
											C < this.workmateList.length;
											C++
										)
											if (
												this.workmateList[C].wear &&
												-1 ==
													f.indexOf(
														this.workmateList[C].id
													)
											) {
												var b =
														w.workmateConf[
															this.workmateList[C]
																.id
														],
													_ = b.type1,
													N = b.type2
												v[_] ? v[_]++ : (v[_] = 1),
													v[N] ? v[N]++ : (v[N] = 1),
													f.push(
														this.workmateList[C].id
													)
											}
										return v
									},
								},
								{
									key: 'getWorkMateData',
									value: function () {
										var f = this.getWorkmateCp(),
											v = {}
										for (var C in f) {
											var b = w.trammelsConf[C]
											if (f[C] < b.data.need[0]);
											else if (
												f[C] >=
												b.data.need[
													b.data.need.length - 1
												]
											)
												v[b.type]
													? (v[b.type] +=
															b.data.num[
																b.data.need
																	.length - 1
															])
													: (v[b.type] =
															b.data.num[
																b.data.need
																	.length - 1
															])
											else
												for (
													var _ = 1;
													_ < b.data.need.length;
													_++
												)
													if (f[C] < b.data.need[_]) {
														v[b.type]
															? (v[b.type] +=
																	b.data.num[
																		_ - 1
																	])
															: (v[b.type] =
																	b.data.num[
																		_ - 1
																	])
														break
													}
										}
										return v
									},
								},
								{
									key: 'getWeaponData',
									value: function (f) {
										var v = w.weaponConf[f.id],
											C = {}
										for (var b in v.data) C[b] = v.data[b]
										if (f.strength)
											for (var _ in v.add)
												C[_] += v.add[_] * f.strength
										return C
									},
								},
								{
									key: 'getAddWeaponAttribute',
									value: function () {
										var f = 1
										return (
											this.tfList[6] > 0 &&
												(f +=
													w.tfConf[6].default +
													w.tfConf[6].add *
														(this.tfList[6] - 1)),
											f.toFixed(3)
										)
									},
								},
								{
									key: 'checkBuff',
									value: function () {
										;(this.buffList = {}),
											Object.assign(
												this.buffList,
												w.playerDefaultConf
											)
										for (
											var f = 0;
											f < this.warehouseList.length;
											f++
										)
											if (this.warehouseList[f].wear) {
												var v = this.getWeaponData(
													this.warehouseList[f]
												)
												for (var C in v)
													'skill' == C
														? '{}' !=
																JSON.stringify(
																	cc.myself
																		.pauseData
																) &&
														  this.addBuffList.push(
																v[C]
														  )
														: this.buffList[C]
														? (this.buffList[C] +=
																v[C] *
																this.getAddWeaponAttribute())
														: (this.buffList[C] =
																v[C] *
																this.getAddWeaponAttribute())
											}
										for (
											var b = 0;
											b < this.tfList.length;
											b++
										)
											if (this.tfList[b] > 0) {
												var _ = w.tfConf[b]
												if ('firstTf' == _.type);
												else {
													var N =
														_.default +
														_.add *
															(this.tfList[b] - 1)
													this.buffList[_.type]
														? (this.buffList[
																_.type
														  ] += N)
														: (this.buffList[
																_.type
														  ] = N)
												}
											}
										var k = this.getWorkMateData()
										for (var L in k)
											this.buffList[L]
												? (this.buffList[L] += k[L])
												: (this.buffList[L] = k[L])
									},
								},
								{
									key: 'getWorkMateDataByGUID',
									value: function (f) {
										for (
											var v = 0;
											v < this.workmateList.length;
											v++
										)
											if (this.workmateList[v].guid == f)
												return this.workmateList[v]
										return null
									},
								},
								{
									key: 'getwarehouseDataByGUID',
									value: function (f) {
										for (
											var v = 0;
											v < this.warehouseList.length;
											v++
										)
											if (this.warehouseList[v].guid == f)
												return this.warehouseList[v]
										return null
									},
								},
								{
									key: 'getUpTalentNeedGold',
									value: function () {
										for (
											var f = 999, v = 0;
											v < this.tfList.length;
											v++
										)
											this.tfList[v] < f &&
												(f = this.tfList[v])
										return (
											(f =
												f >
												w.gameSetting.tfUpNeed.gold
													.length
													? w.gameSetting.tfUpNeed
															.gold.length - 1
													: f),
											w.gameSetting.tfUpNeed.gold[f]
										)
									},
								},
								{
									key: 'getOfflineGoldNum',
									value: function () {
										if (0 == this.tfList[7]) return 0
										var f =
												w.tfConf[7].default +
												w.tfConf[7].add *
													(this.tfList[7] - 1),
											v =
												this.getTime() -
												this.offlineGoldTime
										return (
											v >= 144e5 && (v = 144e5),
											Math.floor(v / 1e3 / 10) * f
										)
									},
								},
							]),
							e
						)
					})()
				;(v.exports = new k()), cc._RF.pop()
			},
			{
				'./managers/UtilManager': 'UtilManager',
				'./modelView/ViewModel': 'ViewModel',
				'./platforms/pfLq': 'pfLq',
				Config: 'Config',
			},
		],
		Obstacle3: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'de61bo3yitKQJd33zpmlGRX', 'Obstacle3'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {},
						onCollisionStay: function (f, v) {
							0 == f.tag &&
								f.node.getComponent('Player').hitThorn(100)
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		Over: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '55ab6pP1ctC/bEru0VX2L4m', 'Over')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					onLoad: function () {
						var f = this
						;(this.buffNode = this.node.getChildByName('buffNode')),
							(this.gameComponent = cc
								.find('Canvas')
								.getComponent('Game')),
							(this.content = this.node
								.getChildByName('scrollview')
								.getChildByName('content')),
							(this.jiesu_di = this.node.getChildByName(
								'jiesu_di'
							)),
							this.jiesu_di
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									'chuxian' ==
										(v.animation ? v.animation.name : '') &&
										f.jiesu_di
											.getComponent('sp.Skeleton')
											.setAnimation(1, 'xunhuan', !0)
								}),
							this.node
								.getChildByName('medal')
								.getChildByName('xz_1')
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									v.animation && v.animation.name
									var b = f.gameComponent.getFloorNum() - 1
									Math.floor(b / 10) > 1
										? ((f.node
												.getChildByName('medal')
												.getChildByName(
													'xz_2'
												).active = !0),
										  f.node
												.getChildByName('medal')
												.getChildByName('xz_2')
												.getComponent('sp.Skeleton')
												.setAnimation(
													1,
													'qiaozhang',
													!1
												))
										: (f.node.getChildByName(
												'btn'
										  ).active = !0)
								}),
							this.node
								.getChildByName('medal')
								.getChildByName('xz_2')
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									v.animation && v.animation.name
									var b = f.gameComponent.getFloorNum() - 1
									Math.floor(b / 10) > 2
										? ((f.node
												.getChildByName('medal')
												.getChildByName(
													'xz_3'
												).active = !0),
										  f.node
												.getChildByName('medal')
												.getChildByName('xz_3')
												.getComponent('sp.Skeleton')
												.setAnimation(
													1,
													'qiaozhang',
													!1
												))
										: (f.node.getChildByName(
												'btn'
										  ).active = !0)
								}),
							this.node
								.getChildByName('medal')
								.getChildByName('xz_3')
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									v.animation && v.animation.name,
										(f.node.getChildByName(
											'btn'
										).active = !0)
								}),
							(this.allNameList = [
								'Label',
								'bigMapNum',
								'floorNum',
								'paramWord',
								'paramNum',
								'di_reward',
								'reward',
								'scrollview',
								'medal',
							])
					},
					hideAll: function () {
						;(this.node.getChildByName('bg').opacity = 0),
							(this.jiesu_di.active = !1)
						for (var f = 0; f < this.allNameList.length; f++)
							this.node.getChildByName(
								this.allNameList[f]
							).active = !1
					},
					showAction: function () {
						var f = this
						this.node.runAction(
							cc.sequence(
								cc.delayTime(0.5),
								cc.callFunc(
									function () {
										;(this.jiesu_di.active = !0),
											this.jiesu_di
												.getComponent('sp.Skeleton')
												.setAnimation(1, 'chuxian', !1)
									}.bind(this)
								)
							)
						),
							this.node
								.getChildByName('bg')
								.runAction(cc.fadeTo(0.5, 155)),
							this.node.runAction(
								cc.sequence(
									cc.delayTime(1),
									cc.callFunc(
										function () {
											for (
												var v = 0;
												v < this.allNameList.length;
												v++
											)
												f.node
													.getChildByName(
														this.allNameList[v]
													)
													.runAction(cc.fadeIn(0.2))
											f.node.runAction(
												cc.sequence(
													cc.delayTime(0.3),
													cc.callFunc(function () {
														var v =
															f.gameComponent.getFloorNum() -
															1
														Math.floor(v / 10) > 0
															? ((f.node
																	.getChildByName(
																		'medal'
																	)
																	.getChildByName(
																		'xz_1'
																	).active = !0),
															  f.node
																	.getChildByName(
																		'medal'
																	)
																	.getChildByName(
																		'xz_1'
																	)
																	.getComponent(
																		'sp.Skeleton'
																	)
																	.setAnimation(
																		1,
																		'qiaozhang',
																		!1
																	))
															: (f.node.getChildByName(
																	'btn'
															  ).active = !0)
														for (
															var C = 0;
															C <
															f.content.children
																.length;
															C++
														)
															f.content.children[
																C
															].runAction(
																cc.sequence(
																	cc.delayTime(
																		0.2 * C
																	),
																	cc.fadeIn(
																		0.2
																	)
																)
															)
													})
												)
											)
										}.bind(this)
									)
								)
							)
					},
					showScrollView: function () {},
					onEnable: function () {
						switch (Lq.pfName) {
							case 'vigoo':
								break
							default:
								b.default.showScreenAd()
						}
						if (
							(this.showAction(),
							this.content.removeAllChildren(),
							cc.myself.gameGold > 0)
						) {
							var f = cc.instantiate(this.buffNode)
							;(f.opacity = 0),
								(f
									.getChildByName('label')
									.getComponent(
										cc.Label
									).string = cc.myself.changeNumToUnit(
									cc.myself.gameGold
								)),
								cc.myself.asyncShowImage(
									f
										.getChildByName('icon')
										.getComponent(cc.Sprite),
									'ui/icon_gold'
								),
								this.content.addChild(f)
						}
						for (
							var v = 0;
							v < cc.myself.getRewardList.length;
							v++
						) {
							var C = cc.instantiate(this.buffNode)
							;(C.opacity = 0),
								(C.getChildByName('label').getComponent(
									cc.Label
								).string = cc.myself.changeNumToUnit(
									cc.myself.getRewardList[v].num
								)),
								this.content.addChild(C)
							var w = cc.myself.getRewardList[v].type
							if ('gold' == w)
								(cc.myself.gold +=
									cc.myself.getRewardList[v].num),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										'ui/icon_gold'
									)
							else if ('diamond' == w)
								(cc.myself.diamond +=
									cc.myself.getRewardList[v].num),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										'ui/icon_diamond'
									)
							else if ('scroll' == w) {
								for (
									var N = 0;
									N < cc.myself.scrollList.length;
									N++
								)
									if (
										cc.myself.scrollList[N].type ==
										cc.myself.getRewardList[v].type2 +
											'Scroll'
									) {
										cc.myself.scrollList[N].num +=
											cc.myself.getRewardList[v].num
										break
									}
								cc.myself.asyncShowImage(
									C.getChildByName('icon').getComponent(
										cc.Sprite
									),
									'ui/icon_' +
										cc.myself.getRewardList[v].type2 +
										'Scroll'
								)
							} else if ('equip' == w) {
								var k = {
									id: cc.myself.getRewardList[v].type2,
									wear: 0 == cc.myself.warehouseGUID,
									strength: 0,
									guid: cc.myself.warehouseGUID + 1,
								}
								;(cc.myself.warehouseGUID += 1),
									cc.myself.warehouseList.push(k)
								var L =
									_.weaponConf[
										cc.myself.getRewardList[v].type2
									]
								cc.myself.asyncShowImage(
									C.getChildByName('bg').getComponent(
										cc.Sprite
									),
									'ui/equip/zhuangbei_' +
										_.gameSetting.equipQualityIconColor[
											L.quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										L.icon
									)
							} else if ('workmate' == w) {
								var B = {
									id: cc.myself.getRewardList[v].type2,
									star: 1,
									wear: 0 == cc.myself.workmateGUID,
									guid: cc.myself.workmateGUID + 1,
								}
								;(cc.myself.workmateGUID += 1),
									cc.myself.workmateList.push(B)
								var S =
									_.workmateConf[
										cc.myself.getRewardList[v].type2
									]
								cc.myself.asyncShowImage(
									C.getChildByName('bg').getComponent(
										cc.Sprite
									),
									'ui/equip/zhuangbei_' +
										_.gameSetting.equipQualityIconColor[
											S.quality - 1
										] +
										'1'
								),
									cc.myself.asyncShowImage(
										C.getChildByName('icon').getComponent(
											cc.Sprite
										),
										S.icon
									)
							}
						}
						var M = this.gameComponent.getFloorNum()
						;(this.node
							.getChildByName('bigMapNum')
							.getComponent(cc.Label).string =
							Lq.lang('世界') + cc.myself.bigMapNum),
							0 == cc.myself.bigMapNum &&
								(this.node
									.getChildByName('bigMapNum')
									.getComponent(cc.Label).string = Lq.lang(
									'新手世界'
								)),
							(this.node
								.getChildByName('floorNum')
								.getComponent(
									cc.Label
								).string = Lq.lang('第x层', {
								data: { num: M - 1 },
							}))
						var I = 6 * Math.random() - 3,
							x = parseInt(3 * M + I),
							q = Lq.lang('超越玩家', { data: { num: x } })
						;(this.node
							.getChildByName('paramNum')
							.getComponent(cc.Label).string = q),
							cc.myself.getTime() - cc.myself.getbigBoxTime >
								144e5 &&
								((cc.myself.bigBoxMedalNum += Math.floor(
									M / 10
								)),
								cc.myself.setLocalData(
									'bigBoxMedalNum',
									cc.myself.bigBoxMedalNum
								))
						var P = 100 * cc.myself.bigMapNum + (M - 1)
						M > 30 && (P = 100 * (cc.myself.bigMapNum + 1)),
							0 == cc.myself.bigMapNum && (P = 101),
							console.log('score', P, cc.myself.bigMapMaxNum),
							parseInt(cc.myself.bigMapMaxNum) < P &&
								((cc.myself.bigMapMaxNum = P),
								cc.myself.setLocalData('bigMapMaxNum', P),
								(cc.myself.bigMapNum = Math.floor(
									cc.myself.bigMapMaxNum / 100
								)),
								(cc.myself.bigMapFloor = Math.floor(
									cc.myself.bigMapMaxNum % 100
								))),
							window.wx &&
								wx.postMessage({
									action: 'UserCloudStaroge',
									key: 'score',
									value: P,
								}),
							(cc.myself.pauseData = {}),
							cc.myself.setLocalData('pauseData', ''),
							console.log(
								'cc.myself.pauseData',
								cc.myself.pauseData
							),
							(cc.myself.gold += cc.myself.gameGold),
							cc.myself.setLocalData('gold', cc.myself.gold),
							cc.myself.setLocalData(
								'diamond',
								cc.myself.diamond
							),
							cc.myself.setLocalData(
								'scrollList',
								cc.myself.scrollList
							),
							cc.myself.setLocalData(
								'warehouseGUID',
								cc.myself.warehouseGUID
							),
							cc.myself.setLocalData(
								'warehouseList',
								cc.myself.warehouseList
							),
							cc.myself.setLocalData(
								'workmateGUID',
								cc.myself.workmateGUID
							),
							cc.myself.setLocalData(
								'workmateList',
								cc.myself.workmateList
							),
							cc.myself.setLocalData(
								'bigBoxMedalNum',
								cc.myself.bigBoxMedalNum
							),
							cc.myself.setLocalData(
								'getbigBoxTime',
								cc.myself.getbigBoxTime
							),
							cc.myself.setLocalData(
								'getNormalBoxTime',
								cc.myself.getNormalBoxTime
							),
							cc.myself.setLocalData(
								'getBigBoxNum',
								cc.myself.getBigBoxNum
							),
							this.gameComponent.noEnemey ||
								cc.myself.aldOnEnd({
									stageId: cc.myself.bigMapNum + '.' + M,
									stageName:
										'地图' +
										cc.myself.bigMapNum +
										'-第' +
										M +
										'层',
									event: 'fail',
								})
					},
					start: function () {},
					close: function () {
						this.node.active = !1
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		Player: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'a6c38uSKMRPWLSA9JTknReK', 'Player')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						var f = this
						;(this.maxHp = cc.myself.getPlayerHp()),
							(this.hp = this.maxHp),
							(this.addingExp = !1),
							(this.hp =
								cc.myself.pauseData.playerHp || this.maxHp),
							(this.gameComponent = cc
								.find('Canvas')
								.getComponent('Game')),
							(this.hitThornTime = 0),
							(this.hitFireTime = 0),
							(this.hitRoutiTime = 0),
							(this.level = cc.myself.pauseData.playerLevel || 1),
							(this.exp = cc.myself.pauseData.playerExp || 0),
							(this.nowLevel =
								cc.myself.pauseData.playerLevel || 1),
							this.gameComponent.resetExpUI(),
							(this.hpShield = 0),
							(this.hpShieldTime = 999),
							(this.hideTime = 0),
							(this.checkHideTime = 0),
							(this.wudiTime = 0),
							(this.checkWudiTime = 0),
							this.resetHpUI(),
							(this.reviveSpine = this.node.parent.getChildByName(
								'revive'
							)),
							this.reviveSpine
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									v.animation && v.animation.name,
										(f.reviveSpine.x = -1e3)
								}),
							(this.uplevelSpine = this.node.parent.getChildByName(
								'uplevel'
							)),
							this.uplevelSpine
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									v.animation && v.animation.name,
										(f.uplevelSpine.x = -1e3),
										f.gameComponent.showChooseBuff()
								}),
							(this.shoujiSpine = this.node.parent.getChildByName(
								'shouji'
							)),
							this.shoujiSpine
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									v.animation && v.animation.name,
										(f.shoujiSpine.x = -1e3)
								})
					},
					revive: function () {
						;(this.reviveSpine.x = this.node.x),
							(this.reviveSpine.y = this.node.y + 40),
							this.reviveSpine
								.getComponent('sp.Skeleton')
								.setAnimation(1, 'fuhuochenggong', !1),
							cc.myself.tips(Lq.lang('你复活了')),
							(this.hp = this.maxHp),
							this.resetHpUI(),
							(this.wudiTime = 2)
					},
					getAtkPower: function () {
						var f = cc.myself.getPlayerAtk()
						if (cc.myself.getPlayerAnger() > 0) {
							var v = this.hp / this.maxHp
							f *=
								1 +
								(Math.floor((1 - v) / 0.05) / 100) *
									cc.myself.getPlayerAnger()
						}
						return Math.floor(f)
					},
					getHp: function () {
						return this.hp
					},
					addExp: function (f) {
						var v = this
						this.addingExp = !0
						var C = this
						if (10 != this.level) {
							var _ = !1
							f = Math.floor(f)
							var w = Math.floor(f / 50),
								N = setInterval(function () {
									if (
										(setTimeout(function () {
											v.addingExp = !1
										}, 2e3),
										f <= 0)
									)
										return (
											_
												? (C.nowLevel++,
												  (C.uplevelSpine.x = C.node.x),
												  (C.uplevelSpine.y =
														C.node.y + 40),
												  C.uplevelSpine
														.getComponent(
															'sp.Skeleton'
														)
														.setAnimation(
															1,
															'zhujueshengji',
															!1
														))
												: (C.gameComponent.overAction = !1),
											clearInterval(N)
										)
									var k = w
									k >= f && (k = f), (C.exp += k)
									var L =
										(1 +
											C.gameComponent.bigMapConf.expAdd) *
										b.gameSetting.playerUpLevelNeedExp[
											C.level - 1
										]
									C.exp >= L &&
										((C.exp -= L),
										C.level++,
										(_ = !0),
										cc.myself.getPlayerUpLevelGetHp() > 0 &&
											C.afterGetHpAddBuff(
												Math.floor(
													cc.myself.getPlayerBaseHp() *
														cc.myself.getPlayerUpLevelGetHp()
												)
											)),
										C.gameComponent.resetExpUI(),
										(f -= k)
								}, 8)
						} else this.gameComponent.overAction = !1
					},
					checkUp: function () {
						this.nowLevel < this.level
							? (this.nowLevel++,
							  (this.uplevelSpine.x = this.node.x),
							  (this.uplevelSpine.y = this.node.y + 40),
							  this.uplevelSpine
									.getComponent('sp.Skeleton')
									.setAnimation(1, 'zhujueshengji', !1))
							: (this.gameComponent.overAction = !1)
					},
					upLevel: function () {
						this.level++,
							(this.uplevelSpine.x = this.node.x),
							(this.uplevelSpine.y = this.node.y + 40),
							this.uplevelSpine
								.getComponent('sp.Skeleton')
								.setAnimation(1, 'zhujueshengji', !1),
							this.gameComponent.resetExpUI()
					},
					getExp: function () {
						return { level: this.level, exp: this.exp }
					},
					setWudiTime: function (f) {
						this.wudiTime = f
					},
					afterGetHpBuff: function (f) {
						;(this.hp += f),
							(this.maxHp += f),
							f >= 0
								? this.gameComponent.createHitLabel({
										str: f,
										pos: {
											x: this.node.x + 30,
											y: this.node.y + 50,
										},
										color: cc.color('#6AEE48'),
								  })
								: this.gameComponent.createHitLabel({
										str: f,
										pos: {
											x: this.node.x + 30,
											y: this.node.y + 50,
										},
										color: cc.color('#E9EE4B'),
								  }),
							this.resetHpUI()
					},
					afterGetHpAddBuff: function (f) {
						;(this.hp += f),
							this.hp > this.maxHp && (this.hp = this.maxHp),
							f >= 0
								? this.gameComponent.createHitLabel({
										str: f,
										pos: {
											x: this.node.x + 30,
											y: this.node.y + 50,
										},
										color: cc.color('#6AEE48'),
								  })
								: this.gameComponent.createHitLabel({
										str: f,
										pos: {
											x: this.node.x + 30,
											y: this.node.y + 50,
										},
										color: cc.color('#E9EE4B'),
								  }),
							this.resetHpUI()
					},
					afterDemonSubHp: function (f) {
						;(this.maxHp += f),
							this.maxHp <= 0 && (this.maxHp = 1),
							this.hp > this.maxHp && (this.hp = this.maxHp),
							f >= 0
								? this.gameComponent.createHitLabel({
										str: f,
										pos: {
											x: this.node.x + 30,
											y: this.node.y + 50,
										},
										color: cc.color('#6AEE48'),
								  })
								: this.gameComponent.createHitLabel({
										str: f,
										pos: {
											x: this.node.x + 30,
											y: this.node.y + 50,
										},
										color: cc.color('#E9EE4B'),
								  }),
							this.resetHpUI()
					},
					hitThorn: function (f) {
						this.wudiTime > 0 ||
							this.hitThornTime > 0 ||
							this.hp < 0 ||
							((this.hitThornTime = 0.5), this.hitMy(f))
					},
					hitFire: function (f) {
						this.wudiTime > 0 ||
							this.hitFireTime > 0 ||
							this.hp < 0 ||
							((this.hitFireTime = 0.5), this.hitMy(f))
					},
					hitRouti: function (f) {
						this.wudiTime > 0 ||
							this.hitRoutiTime > 0 ||
							this.hp < 0 ||
							((this.hitRoutiTime = 1), this.hitMy(f))
					},
					hitMy: function (f) {
						;(this.shoujiSpine.x = this.node.x),
							(this.shoujiSpine.y = this.node.y + 40),
							this.shoujiSpine
								.getComponent('sp.Skeleton')
								.setAnimation(1, 'shouji', !1),
							(f *=
								1 -
								cc.myself.getPlayerDamageReductionPer() / 100),
							(f -= cc.myself.getPlayerDamageReduction()),
							(f = parseInt(f)),
							this.gameComponent.createHitLabel({
								str: f,
								pos: {
									x: this.node.x + 30,
									y: this.node.y + 50,
								},
								color: cc.color('#FF3600'),
							}),
							this.hpShield >= f
								? ((this.hpShield -= f), (f = 0))
								: ((f -= this.hpShield), (this.hpShield = 0)),
							(this.hp -= f),
							this.hp <= 0 &&
								(-1 != cc.myself.addBuffList.indexOf('Revive')
									? (cc.myself.addBuffList.splice(
											cc.myself.addBuffList.indexOf(
												'Revive'
											),
											1
									  ),
									  this.revive())
									: this.gameComponent.showReviveUI()),
							this.resetHpUI()
					},
					resetHpUI: function () {
						this.hp < 0 && (this.hp = 0)
						var f = this.node.parent.getChildByName('hp')
						;(f
							.getChildByName('hp_num')
							.getComponent(cc.Label).string = this.hp),
							(f
								.getChildByName('hp_di')
								.getChildByName('hp_blue')
								.getComponent(cc.Sprite).fillRange =
								this.hp / this.maxHp),
							(f
								.getChildByName('hp_di')
								.getChildByName('hp_dun')
								.getComponent(cc.Sprite).fillRange =
								this.hpShield / this.maxHp),
							this.hp + this.hpShield > this.maxHp
								? (f
										.getChildByName('hp_di')
										.getChildByName('hp_dun').x = 40)
								: (f
										.getChildByName('hp_di')
										.getChildByName('hp_dun').x =
										(80 * (this.hp + this.hpShield)) /
											this.maxHp -
										40),
							(this.hpShieldTime = 0)
					},
					bloodThirstyAddHp: function () {
						var f = cc.myself.getPlayerBloodThirsty()
						if (f > 0) {
							var v = Math.floor((this.maxHp / 100) * f)
							;(this.hp += v),
								this.hp > this.maxHp && (this.hp = this.maxHp),
								this.resetHpUI(),
								this.gameComponent.createHitLabel({
									str: v,
									pos: {
										x: this.node.x + 30,
										y: this.node.y + 50,
									},
									color: cc.color('#6AEE48'),
								})
						}
					},
					isHide: function () {
						return this.hideTime > 0
					},
					onCollisionEnter: function (f, v) {
						if (41 != f.tag)
							if (42 != f.tag)
								if (43 != f.tag) {
									if (!(this.hp <= 0 || this.wudiTime > 0)) {
										var C = 0
										11 == f.tag
											? ((C = f.node
													.getComponent('EnemyAtk')
													.getAtkPower()),
											  this.gameComponent.putInEnemyAtkPool(
													f.node
											  ),
											  (this.node.color = cc.color(
													155,
													0,
													0
											  )),
											  this.node.runAction(
													cc.sequence(
														cc.scaleTo(0.1, 0.9),
														cc.callFunc(
															function () {
																this.node.color = cc.color(
																	255,
																	255,
																	255
																)
															}.bind(this)
														),
														cc.scaleTo(0.1, 1)
													)
											  ))
											: 12 == f.tag
											? (C = f.node.parent
													.getComponent('LaserAtk')
													.getAtkPower())
											: 13 == f.tag &&
											  (C = f.node.parent
													.getComponent('magicAtk')
													.getAtkPower()),
											C > 0 && this.hitMy(C)
									}
								} else this.gameComponent.showTurntable()
							else this.gameComponent.showDemon()
						else this.gameComponent.showAngel()
					},
					onCollisionStay: function (f, v) {
						15 == f.tag
							? this.hitFire(
									f.node.parent
										.getComponent('FireAtk')
										.getAtkPower()
							  )
							: 21 == f.tag &&
							  this.hitRouti(
									f.node
										.getComponent('Enemy_Normal')
										.getRoutiPower()
							  )
					},
					update: function (f) {
						if (
							!this.gameComponent.getGameIsOver() &&
							!this.gameComponent.getGamePause()
						) {
							this.wudiTime > 0
								? (this.wudiTime -= f)
								: cc.myself.getPlayerWudiStar() > 0 &&
								  ((this.checkWudiTime += f),
								  this.checkWudiTime >= 10 &&
										((this.checkWudiTime = 0),
										(this.wudiTime = 2))),
								this.hitThornTime > 0 &&
									(this.hitThornTime -= f),
								this.hitFireTime > 0 && (this.hitFireTime -= f),
								this.hitRoutiTime > 0 &&
									(this.hitRoutiTime -= f)
							var v = cc.myself.getPlayerHide()
							this.hideTime > 0
								? ((this.hideTime -= f),
								  this.hideTime <= 0 &&
										((this.node.opacity = 255),
										(this.node.color = cc.color(
											255,
											255,
											255
										))))
								: v > 0 &&
								  ((this.checkHideTime += f),
								  this.checkHideTime >= 10 &&
										((this.checkHideTime = 0),
										(this.hideTime = v),
										(this.node.opacity = 155),
										(this.node.color = cc.color(
											255,
											255,
											255
										))))
							var C = cc.myself.getPlayerHpShield()
							C > 0 &&
								((this.hpShieldTime += f),
								this.hpShieldTime >= 10 &&
									((this.hpShieldTime = 0),
									(this.hpShield = Math.floor(
										(cc.myself.getPlayerBaseHp() * C) / 100
									)),
									this.resetHpUI()))
							var b = this.node.parent
									.getChildByName('hp')
									.getChildByName('hp_di')
									.getChildByName('hp_b')
									.getComponent(cc.Sprite).fillRange,
								_ = this.hp / this.maxHp
							b > _
								? (this.node.parent
										.getChildByName('hp')
										.getChildByName('hp_di')
										.getChildByName('hp_b')
										.getComponent(cc.Sprite).fillRange =
										b - 0.01)
								: b < _ &&
								  (this.node.parent
										.getChildByName('hp')
										.getChildByName('hp_di')
										.getChildByName('hp_b')
										.getComponent(cc.Sprite).fillRange =
										b + 0.01),
								(this.node.parent.getChildByName(
									'light'
								).position = this.node.position),
								(this.node.parent.getChildByName(
									'hp'
								).x = this.node.x),
								(this.node.parent.getChildByName('hp').y =
									this.node.y + 90),
								this.wudiTime > 0
									? ((this.node.parent.getChildByName(
											'wudidun'
									  ).x = this.node.x),
									  (this.node.parent.getChildByName(
											'wudidun'
									  ).y = this.node.y + 30))
									: (this.node.parent.getChildByName(
											'wudidun'
									  ).x = -1e3),
								this.shoujiSpine.x > -cc.winSize.width / 2 &&
									this.shoujiSpine.x < cc.winSize.width / 2 &&
									((this.shoujiSpine.x = this.node.x),
									(this.shoujiSpine.y = this.node.y + 40)),
								(this.node.parent.zIndex = this.gameComponent.getPlayerMapZIndex())
						}
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		RankView: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '206a9eKGmZHpoYjugX+S7pf', 'RankView'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {},
						share: function () {
							cc.myself.wxShare()
						},
						close: function () {},
					}),
					cc._RF.pop()
			},
			{},
		],
		Rank: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '64b37opvTBHprbQYNXU4bJ/', 'Rank'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {},
						onEnable: function () {
							if (window.wx) {
								wx.getOpenDataContext &&
									((this.openDataContext = wx.getOpenDataContext()),
									this.openDataContext &&
										(this.sharedCanvas = this.openDataContext.canvas)),
									this.setSharedCanvasSize(
										this.node.width,
										this.node.height
									)
								var f = this.getSpriteFrame()
								f &&
									(this.node.getComponent(
										cc.Sprite
									).spriteFrame = f),
									wx.postMessage({
										action: 'friendRank',
										rankType: 'rank',
									})
							}
						},
						onDisable: function () {},
						start: function () {
							this.node.on(
								cc.Node.EventType.TOUCH_START,
								this.touchStart.bind(this)
							),
								this.node.on(
									cc.Node.EventType.TOUCH_MOVE,
									this.touchMove.bind(this)
								),
								this.node.on(
									cc.Node.EventType.TOUCH_END,
									this.touchEnd.bind(this)
								),
								this.node.on(
									cc.Node.EventType.TOUCH_CANCEL,
									this.touchCancel.bind(this)
								)
						},
						getSpriteFrame: function () {
							return (
								(this.texture = new cc.Texture2D()),
								(this.spriteFrame = new cc.SpriteFrame()),
								this.spriteFrame
							)
						},
						setSharedCanvasSize: function (f, v) {
							this.sharedCanvas &&
								((this.sharedCanvas.width = f),
								(this.sharedCanvas.height = v))
						},
						touchStart: function (f) {
							wx.postMessage({ action: 'touchStart' })
						},
						touchMove: function (f) {
							var v = f.getLocation().sub(f.getPreviousLocation())
							wx.postMessage({
								action: 'touchMove',
								x: v.x,
								y: v.y,
							})
						},
						touchEnd: function (f) {
							wx.postMessage({ action: 'touchEnd' })
						},
						touchCancel: function (f) {
							wx.postMessage({ action: 'touchEnd' })
						},
						updateSpriteFrame: function () {
							this.texture &&
								this.texture.initWithElement &&
								(this.texture.initWithElement(
									this.sharedCanvas
								),
								this.texture.handleLoadedTexture(),
								this.spriteFrame.setTexture(this.texture))
						},
						update: function (f) {
							this.updateSpriteFrame()
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		RestartGame: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'cf3e85BcABCLZRkjS2SHKR2', 'RestartGame'),
					f('Config'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {
							cc.myself.scaleToShow(this.node)
						},
						restart: function () {
							cc.myself.resetGameData(),
								cc.director.loadScene('GameScene')
						},
						newGame: function () {
							;(cc.myself.pauseData = {}),
								cc.myself.setLocalData('pauseData', ''),
								cc.myself.resetGameData(),
								cc.director.loadScene('GameScene')
						},
						close: function () {
							this.node.destroy()
						},
					}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		Revive: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '6439ddYGJxNl77p/qcbu9Pd', 'Revive')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('./modelView/VMParent')
				cc.Class({
					extends: _.default,
					ctor: function () {
						this.data = { time: 10 }
					},
					properties: {},
					onEnable: function () {
						cc.myself.scaleToShow(this.node),
							(this.data.time = 10),
							(this.isOpenVideo = !1),
							(this.node.getChildByName(
								'close'
							).active = !cc
								.find('Canvas')
								.getComponent('Game')
								.getIsGuide())
					},
					start: function () {
						;(this.isOpenVideo = !1),
							(this.gameComponent = cc
								.find('Canvas')
								.getComponent('Game'))
					},
					revive: function () {
						if (this.gameComponent.getIsGuide())
							this.gameComponent.revivePlayer()
						else {
							var f = this
							b.default.showRewardedAd(function () {
								f.gameComponent.revivePlayer()
							})
						}
					},
					close: function () {
						switch (Lq.pfName) {
							case 'cy':
								b.default.showScreenAd({})
						}
						;(cc.myself.isWin = !1),
							this.node.destroy(),
							cc.find('Canvas').getComponent('Game').showOverUI(),
							cc.find('Canvas').getComponent('Game').checkIsWin()
					},
					update: function (f) {
						this.isOpenVideo ||
							((this.data.time -= f),
							this.data.time <= 0 &&
								((this.data.time = 0),
								this.gameComponent.getIsGuide()
									? this.gameComponent.revivePlayer()
									: this.close()))
					},
				}),
					cc._RF.pop()
			},
			{
				'./managers/AdsManager': 'AdsManager',
				'./modelView/VMParent': 'VMParent',
			},
		],
		SIgnIn: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'd55bfr+qoVLr5Zbwor1IbU2', 'SIgnIn')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					onLoad: function () {},
					start: function () {
						cc.myself.scaleToShow(this.node), this.resetUI()
					},
					resetUI: function () {
						for (var f = 0; f < 7; f++) {
							var v = this.node
									.getChildByName('di')
									.getChildByName('iconList')
									.getChildByName('day_' + (f + 1)),
								C = cc.myself.signInNum % 7,
								b = cc.myself.signInList[f]
							if (
								((v.getChildByName('yiqiandao').active = f < C),
								(v
									.getChildByName('num')
									.getComponent(cc.Label).string = b.num),
								'diamond' == b.type)
							)
								(v
									.getChildByName('name')
									.getComponent(cc.Label).string = Lq.lang(
									'钻石'
								)),
									cc.myself.asyncShowImage(
										v
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										'ui/icon_diamond'
									)
							else if ('equip' == b.type) {
								var w = _.weaponConf[b.type2]
								;(v
									.getChildByName('name')
									.getComponent(cc.Label).string = 'Equip'),
									cc.myself.asyncShowImage(
										v
											.getChildByName('icon_di')
											.getComponent(cc.Sprite),
										'ui/equip/zhuangbei_' +
											_.gameSetting.equipQualityIconColor[
												w.quality - 1
											] +
											'1'
									),
									cc.myself.asyncShowImage(
										v
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										w.icon
									)
							} else
								'scroll' == b.type &&
									(cc.myself.asyncShowImage(
										v
											.getChildByName('icon')
											.getComponent(cc.Sprite),
										'ui/icon_' + b.type2 + 'Scroll'
									),
									(v
										.getChildByName('name')
										.getComponent(cc.Label).string =
										'Scroll'))
						}
					},
					signIn: function () {
						if (
							(cc.myself.aldSendEvent('点击普通签到'),
							cc.myself.isToday(cc.myself.signInTime))
						)
							cc.myself.tips(Lq.lang('今天已经签到过了'))
						else {
							var f =
								cc.myself.signInList[cc.myself.signInNum % 7]
							if ('diamond' == f.type)
								(cc.myself.diamond += f.num),
									cc.myself.setLocalData(
										'diamond',
										cc.myself.diamond
									)
							else if ('equip' == f.type) {
								var v = {
									id: f.type2,
									wear: !1,
									strength: 0,
									guid: cc.myself.warehouseGUID + 1,
								}
								cc.myself.warehouseList.push(v),
									console.log(
										'cc.myself.warehouseList',
										cc.myself.warehouseList
									),
									(cc.myself.warehouseGUID += 1),
									cc.myself.setLocalData(
										'warehouseGUID',
										cc.myself.warehouseGUID
									),
									cc.myself.setLocalData(
										'warehouseList',
										cc.myself.warehouseList
									)
							} else if ('scroll' == f.type) {
								for (
									var C = 0;
									C < cc.myself.scrollList.length;
									C++
								)
									if (
										cc.myself.scrollList[C].type ==
										f.type2 + 'Scroll'
									) {
										cc.myself.scrollList[C].num += f.num
										break
									}
								cc.myself.setLocalData(
									'scrollList',
									cc.myself.scrollList
								)
							}
							cc.myself.tips(Lq.lang('签到成功')),
								cc.myself.signInNum++,
								cc.myself.setLocalData(
									'signInNum',
									cc.myself.signInNum
								),
								(cc.myself.signInTime = cc.myself.getTime()),
								cc.myself.setLocalData(
									'signInTime',
									cc.myself.signInTime
								),
								cc.myself.signInNum % 7 == 0 &&
									this.getNewSignInList(),
								this.resetUI()
						}
					},
					video: function () {
						cc.myself.aldSendEvent('点击双倍签到')
						var f = this
						cc.myself.isToday(cc.myself.signInTime)
							? cc.myself.tips(Lq.lang('今天已经签到过了'))
							: b.default.showRewardedAd(function () {
									var v =
										cc.myself.signInList[
											cc.myself.signInNum % 7
										]
									if ('diamond' == v.type)
										(cc.myself.diamond += 2 * v.num),
											cc.myself.setLocalData(
												'diamond',
												cc.myself.diamond
											)
									else if ('equip' == v.type) {
										var C = {
											id: v.type2,
											wear: !1,
											strength: 0,
											guid: cc.myself.warehouseGUID + 1,
										}
										cc.myself.warehouseList.push(C),
											(cc.myself.warehouseGUID += 1)
										var b = {
											id: v.type2,
											wear: !1,
											strength: 0,
											guid: cc.myself.warehouseGUID + 1,
										}
										cc.myself.warehouseList.push(b),
											(cc.myself.warehouseGUID += 1),
											cc.myself.setLocalData(
												'warehouseGUID',
												cc.myself.warehouseGUID
											),
											cc.myself.setLocalData(
												'warehouseList',
												cc.myself.warehouseList
											)
									} else if ('scroll' == v.type) {
										for (
											var _ = 0;
											_ < cc.myself.scrollList.length;
											_++
										)
											if (
												cc.myself.scrollList[_].type ==
												v.type2 + 'Scroll'
											) {
												cc.myself.scrollList[_].num +=
													2 * v.num
												break
											}
										cc.myself.setLocalData(
											'scrollList',
											cc.myself.scrollList
										)
									}
									cc.myself.tips(Lq.lang('签到成功')),
										cc.myself.aldSendEvent(
											'双倍签到-成功观看视频'
										),
										cc.myself.signInNum++,
										cc.myself.setLocalData(
											'signInNum',
											cc.myself.signInNum
										),
										(cc.myself.signInTime = cc.myself.getTime()),
										cc.myself.setLocalData(
											'signInTime',
											cc.myself.signInTime
										),
										cc.myself.signInNum % 7 == 0 &&
											f.getNewSignInList(),
										f.resetUI()
							  })
					},
					getNewSignInList: function () {
						var f = ['weapon', 'clothes'],
							v = ['ring', 'necklace'],
							C = f[Math.floor(Math.random() * f.length)],
							b = v[Math.floor(Math.random() * v.length)],
							w = [],
							N = []
						for (var k in _.weaponConf)
							3 == _.weaponConf[k].quality &&
								(_.weaponConf[k].type == C
									? w.push(k)
									: _.weaponConf[k].type == b && N.push(k))
						var L = [
							{ type: 'diamond', num: 50 },
							{
								type: 'equip',
								num: 1,
								type2: w[Math.floor(Math.random() * w.length)],
							},
							{ type: 'scroll', num: 100, type2: C },
							{ type: 'diamond', num: 100 },
							{ type: 'diamond', num: 200 },
							{ type: 'scroll', num: 50, type2: b },
							{
								type: 'equip',
								num: 1,
								type2: N[Math.floor(Math.random() * N.length)],
							},
						]
						console.log('newSignInConf', L),
							(cc.myself.signInList = L),
							cc.myself.setLocalData(
								'signInList',
								cc.myself.signInList
							)
					},
					close: function () {
						this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		SeasunDcLogger: [
			function (f, v, C) {
				'use strict'
				function n() {
					console.log('SeasunDcLogger start')
				}
				cc._RF.push(v, '56660jKBENH0bV8anW+qC1s', 'SeasunDcLogger'),
					Object.defineProperty(C, '__esModule', { value: !0 }),
					(C.SeasunDcLogger = n),
					(n.getRequest = function (f) {
						if ((console.log(' getRequest = ' + f), window.wx))
							console.log('getRequest url = ' + f),
								wx.request({
									url: f,
									method: 'GET',
									header: {
										'content-type':
											'application/x-www-form-urlencoded',
									},
									success: function (f) {
										console.log(
											'SeasunDcLogger.getRequest() script send OK = ' +
												f.data
										)
									},
									fail: function (f) {
										console.log(
											'SeasunDcLogger.getRequest() script send fail '
										)
									},
								})
						else
							try {
								var v = null
								try {
									v = new XMLHttpRequest()
								} catch (f) {
									try {
										v = ActiveXobject('Msxml12.XMLHTTP')
									} catch (f) {
										try {
											v = ActiveXobject(
												'Microsoft.XMLHTTP'
											)
										} catch (f) {
											console &&
												console.log(
													'SeasunDcLogger.getRequest() Error'
												)
										}
									}
								}
								if (v)
									try {
										;(v.onreadystatechange = function () {
                                            
											4 == v.readyState &&
												v.status < 400 &&
												console &&
												console.log(
													'SeasunDcLogger.getRequest() OK',
												);
                                            // 游戏加载
                                            if(v.readyState == 4){
                                                if(document.domain.indexOf("v2zz.com")>=0) handleStatsEvent("page_loadfinish");
                                            }
                                           
										}),
											v.open('GET', f, !0),
											v.send(null),
											console.log(
												'SeasunDcLogger.getRequest() xmlhttp send OK'
											)
									} catch (f) {
										console &&
											console.log(
												'SeasunDcLogger.getRequest() Error'
											)
									}
							} catch (v) {
								var C = document.createElement('script')
								;(C.src = f),
									document.body.insertBefore(
										C,
										document.body.firstChild
									)
							}
					}),
					(n.handleResponse = function (f) {
						console.log(f)
					}),
					(n.customSetInterval = function (f, v) {
						return setInterval(f, v)
					}),
					(n.setLocalStorage = function (f, v) {
						localStorage.setItem(f, v)
					}),
					(n.getLocalStorage = function (f) {
						return localStorage.getItem(f)
					}),
					(n.onError = function (f) {
						try {
							console && console.log(error)
						} catch (f) {}
					}),
					(n.heartbeatThreadId = null),
					(n._dcLoggerConfig = null),
					(n._dcLog = []),
					(n.heartbeat = null),
					(n.deviceId = null),
					(n.config = function (f) {
						try {
							if (!f) throw 'config is null.'
							n._AgentInfo._init(),
								(n._dcLoggerConfig = f),
								f.getRequest && (n.getRequest = f.getRequest),
								f.handleResponse &&
									(n.handleResponse = f.handleResponse),
								f.customSetInterval &&
									(n.customSetInterval = f.customSetInterval),
								f.setLocalStorage &&
									(n.setLocalStorage = f.setLocalStorage),
								f.getLocalStorage &&
									(n.getLocalStorage = f.getLocalStorage),
								f.onError && (n.onError = f.onError),
								(n.deviceId = n.getLocalStorage(
									'SeasunDcLogger.deviceId'
								)),
								console.log(
									' SeasunDcLogger.deviceId = ' + n.deviceId
								),
								n.deviceId ||
									((n.deviceId = n._guid()),
									n.setLocalStorage(
										'SeasunDcLogger.deviceId',
										n.deviceId
									))
						} catch (f) {
							n._onError(f)
						}
					}),
					(n.push = function (f) {
						try {
							if (void 0 === n._dcLog) return
							console.log(
								'SeasunDcLogger.push log.msgType = ' + f.msgType
							),
								n._dcLog.push(f)
						} catch (f) {
							n._onError(f)
						}
					}),
					(n.consume = function () {
						try {
							if (void 0 === n._dcLog || 0 == n._dcLog.length)
								return
							if (!n._dcLoggerConfig || !n._dcLoggerConfig.appId)
								return
							for (
								var f = [], v = null, C = n._dcLog.shift();
								null != C;

							) {
								console.log(
									' SeasunDcLogger.sendHeartbeat() 0 log.msgType=  ' +
										C.msgType
								),
									n.updateRoleInfo(C),
									C.msgType &&
										'role.login' == C.msgType &&
										(console.log(
											' SeasunDcLogger.sendHeartbeat() 1 '
										),
										n.sendHeartbeat()),
									C.msgType &&
										'role.logout' == C.msgType &&
										(console.log(
											' SeasunDcLogger.sendHeartbeat() 2 '
										),
										(n.heartbeat = null))
								var b = n.buildMessage(C)
								f.push(b),
									(v = encodeURIComponent(
										JSON.stringify(f, n._replacer)
									)),
									n.send(v),
									(f = []),
									(v = null),
									(C = n._dcLog.pop())
							}
							v && v.length > 0 && n.send(v)
						} catch (f) {
							n._onError(f)
						}
					}),
					(n.updateRoleInfo = function (f) {
						console.log('updateRoleInfo heartbeat log = ' + f)
						try {
							if (!f)
								return void console.log(
									'updateRoleInfo heartbeat return '
								)
							if (f.msgType && 'role.login' == f.msgType)
								console.log(
									'updateRoleInfo heartbeat -------------1-------------- '
								),
									(n.heartbeat = n._deepClone(f)),
									console.log(
										'updateRoleInfo heartbeat --------------2------------- '
									),
									(n.heartbeat.msgType = 'device.heartbeat'),
									console.log(
										'updateRoleInfo heartbeat --------------3------------- '
									),
									(n.heartbeat.onlineSessionId = n._guid()),
									console.log(
										'SeasunDcLogger.heartbeat.onlineSessionId = ' +
											n.heartbeat.onlineSessionId
									)
							else {
								if (!n.heartbeat) return
								f.roleName &&
									(n.heartbeat.roleName = f.roleName),
									f.roleType &&
										(n.heartbeat.roleType = f.roleType),
									f.roleLevel &&
										(n.heartbeat.roleLevel = f.roleLevel),
									f.roleVipLevel &&
										(n.heartbeat.roleVipLevel =
											f.roleVipLevel),
									f.zone && (n.heartbeat.zone = f.zone),
									f.zoneName &&
										(n.heartbeat.zoneName = f.zoneName),
									f.roleName &&
										(n.heartbeat.roleName = f.roleName),
									f.server && (n.heartbeat.server = f.server),
									f.serverName &&
										(n.heartbeat.serverName = f.serverName),
									f.partyId &&
										(n.heartbeat.partyId = f.partyId),
									f.gender && (n.heartbeat.gender = f.gender),
									f.battleScore &&
										(n.heartbeat.battleScore =
											f.battleScore)
							}
						} catch (f) {
							n._onError(f)
						}
					}),
					(n.buildMessage = function (f) {
						try {
							return (
								f &&
									(n._AgentInfo &&
										((f.os = n._AgentInfo.OSname),
										(f.browserName =
											n._AgentInfo.browserName),
										(f.browserVer =
											n._AgentInfo.browserVer)),
									(f.deviceScreen =
										window.document.body.clientWidth +
										'*' +
										window.document.body.clientHeight),
									(f.msgId = n._guid()),
									(f.msgVersion = '3.0.0'),
									(f.dataSdkVersion = '2.0.0'),
									(f.dataSdkLanguage = 'js'),
									(f.datasource = 'client'),
									(f.appId = n._dcLoggerConfig.appId),
									(f.appVersion =
										n._dcLoggerConfig.appVersion),
									(f.channel = n._dcLoggerConfig.channel),
									(f.commonAttributes =
										n._dcLoggerConfig.commonAttributes),
									(f.userAgent = window.navigator.userAgent),
									console.log(
										'logInfo.userAgent = ' + f.userAgent
									),
									(f.deviceId = n.deviceId),
									(f.timestamp = new Date()),
									(f.timestamp.toJSON = function () {
										return n._dateFtt(
											'yyyy-MM-dd hh:mm:ss.S',
											f.timestamp
										)
									})),
								f
							)
						} catch (f) {
							n._onError(f)
						}
					}),
					(n.send = function (f) {
						try {
							if (!f) return
							var v = '///jspush',
								C =
									(v = 'https:' + v) +
									'?appId=' +
									n._dcLoggerConfig.appId +
									'&data=' +
									f +
									'&df=js_batch&callback=SeasunDcLogger.handleResponse&time=' +
									Number(new Date())
							n.getRequest(C)
						} catch (f) {
							n._onError(f)
						}
					}),
					(n.sendHeartbeat = function () {
						try {
							if (
								(console.log(
									'SeasunDcLogger.heartbeat 1 SeasunDcLogger.heartbeat = ' +
										n.heartbeat
								),
								!n.heartbeat)
							)
								return void console.log(
									'SeasunDcLogger.heartbeat 2'
								)
							if (
								(console.log('SeasunDcLogger.heartbeat 3'),
								void 0 === n._dcLog)
							)
								return void console.log(
									'SeasunDcLogger.heartbeat 4'
								)
							console.log('SeasunDcLogger.heartbeat'),
								console.log(n.heartbeat),
								n._dcLog.push(n.heartbeat)
						} catch (f) {
							n._onError(f)
						}
					}),
					(n.start = function () {
						try {
							var f = 1e3
							n._dcLoggerConfig.interval &&
								(f = n._dcLoggerConfig.interval)
							var v = {
								msgType: 'device.connect',
								currentUrl: window.location.href,
							}
							n._dcLog.push(v),
								n.customSetInterval(n.consume, f),
								n.customSetInterval(n.sendHeartbeat, 3e5)
						} catch (f) {
							n._onError(f)
						}
					}),
					(n.end = function () {
						try {
							n.consume()
						} catch (f) {
							n._onError(f)
						}
					}),
					(n._onError = function (f) {
						try {
							n.onError(f)
						} catch (f) {}
					}),
					(n._dateFtt = function (f, v) {
						var C = {
							'M+': v.getMonth() + 1,
							'd+': v.getDate(),
							'h+': v.getHours(),
							'm+': v.getMinutes(),
							's+': v.getSeconds(),
							'q+': Math.floor((v.getMonth() + 3) / 3),
							S: v.getMilliseconds(),
						}
						for (var b in (/(y+)/.test(f) &&
							(f = f.replace(
								RegExp.$1,
								(v.getFullYear() + '').substr(
									4 - RegExp.$1.length
								)
							)),
						C))
							new RegExp('(' + b + ')').test(f) &&
								(f = f.replace(
									RegExp.$1,
									1 == RegExp.$1.length
										? C[b]
										: ('00' + C[b]).substr(
												('' + C[b]).length
										  )
								))
						return f
					}),
					(n._isClass = function (f) {
						return null === f
							? 'Null'
							: void 0 === f
							? 'Undefined'
							: Object.prototype.toString.call(f).slice(8, -1)
					}),
					(n._deepClone = function e(f) {
						var v,
							C = n._isClass(f)
						if ('Object' === C) v = {}
						else {
							if ('Array' !== C) return f
							v = []
						}
						for (var b in f) {
							var _ = f[b]
							'Object' == n._isClass(_) ||
							'Array' == n._isClass(_)
								? (v[b] = e(_))
								: (v[b] = f[b])
						}
						return v
					}),
					(n._replacer = function (f, v) {
						if ('string' != typeof v || ('' !== v && null !== v))
							return v
					}),
					(n._guid = function () {
						return (
							n._s4n(3) +
							'-' +
							n._s4n(1) +
							'-' +
							n._s4n(1) +
							'-' +
							n._s4n(3)
						)
					}),
					(n._s4n = function (f) {
						for (var v = '', C = 0; C < f; C++)
							v += ((65536 * (1 + Math.random())) | 0)
								.toString(16)
								.substring(1)
						return v
					}),
					(n._AgentInfo = {
						deviceType: '',
						OSname: '',
						browserName: '',
						browserVer: '',
						adaptType: 0,
						_init: function () {
							try {
								n._AgentInfo.setDeviceAndOS(),
									n._AgentInfo.setBrowser()
							} catch (f) {
								console.log(f)
							}
						},
						setDeviceAndOS: function () {
							var f = 'unknown'
							if (window.wx) {
								var v = wx.getSystemInfoSync()
								return (
									(n._AgentInfo.OSname = v.system),
									void (n._AgentInfo.deviceType = 'mobile')
								)
							}
							if (
								(-1 !=
								window.navigator.userAgent.indexOf('Android')
									? (f = 'Android')
									: -1 !=
									  window.navigator.userAgent.indexOf(
											'iPhone'
									  )
									? (f = 'iPhone')
									: -1 !=
									  window.navigator.userAgent.indexOf(
											'SymbianOS'
									  )
									? (f = 'SymbianOS')
									: -1 !=
									  window.navigator.userAgent.indexOf(
											'Windows Phone'
									  )
									? (f = 'Windows Phone')
									: -1 !=
									  window.navigator.userAgent.indexOf('iPad')
									? (f = 'iPad')
									: -1 !=
											window.navigator.userAgent.indexOf(
												'iPod'
											) && (f = 'iPod'),
								'unknown' != f)
							)
								return (
									(n._AgentInfo.OSname = f),
									void (n._AgentInfo.deviceType = 'mobile')
								)
							;-1 !=
							window.navigator.userAgent.indexOf(
								'Windows NT 10.0'
							)
								? (f = 'Windows 10')
								: -1 !=
								  window.navigator.userAgent.indexOf(
										'Windows NT 6.2'
								  )
								? (f = 'Windows 8')
								: -1 !=
								  window.navigator.userAgent.indexOf(
										'Windows NT 6.1'
								  )
								? (f = 'Windows 7')
								: -1 !=
								  window.navigator.userAgent.indexOf(
										'Windows NT 6.0'
								  )
								? (f = 'Windows Vista')
								: -1 !=
								  window.navigator.userAgent.indexOf(
										'Windows NT 5.1'
								  )
								? (f = 'Windows XP')
								: -1 !=
								  window.navigator.userAgent.indexOf(
										'Windows NT 5.0'
								  )
								? (f = 'Windows 2000')
								: -1 !=
								  window.navigator.userAgent.indexOf('Mac')
								? (f = 'Mac/iOS')
								: -1 !=
								  window.navigator.userAgent.indexOf('X11')
								? (f = 'UNIX')
								: -1 !=
										window.navigator.userAgent.indexOf(
											'Linux'
										) && (f = 'Linux'),
								(n._AgentInfo.OSname = f),
								(n._AgentInfo.deviceType = 'pc')
						},
						setBrowser: function () {
							var f,
								v,
								C,
								b = navigator.userAgent,
								_ = navigator.appName,
								w = '' + parseFloat(navigator.appVersion),
								N = parseInt(navigator.appVersion, 10)
							;-1 != (v = b.indexOf('Opera'))
								? ((_ = 'Opera'),
								  (w = b.substring(v + 6)),
								  -1 != (v = b.indexOf('Version')) &&
										(w = b.substring(v + 8)))
								: -1 != b.indexOf('Trident')
								? (5 ==
										(w =
											-1 != (v = b.indexOf('MSIE'))
												? b.substring(v + 5)
												: '11.0') && (w = '11.0'),
								  (_ = 'IE'))
								: -1 != (v = b.indexOf('Chrome'))
								? ((_ = 'Chrome'), (w = b.substring(v + 7)))
								: -1 != (v = b.indexOf('Safari'))
								? ((_ = 'Safari'),
								  (w = b.substring(v + 7)),
								  -1 != (v = b.indexOf('Version')) &&
										(w = b.substring(v + 8)))
								: -1 != (v = b.indexOf('Firefox'))
								? ((_ = 'Firefox'), (w = b.substring(v + 8)))
								: (f = b.lastIndexOf(' ') + 1) <
										(v = b.lastIndexOf('/')) &&
								  ((_ = b.substring(f, v)),
								  (w = b.substring(v + 1)),
								  _.toLowerCase() == _.toUpperCase() &&
										(_ = navigator.appName)),
								-1 != (C = w.indexOf(';')) &&
									(w = w.substring(0, C)),
								-1 != (C = w.indexOf(' ')) &&
									(w = w.substring(0, C)),
								(N = parseInt('' + w, 10)),
								isNaN(N) &&
									((w =
										'' + parseFloat(navigator.appVersion)),
									(N = parseInt(navigator.appVersion, 10))),
								window.wx &&
									((_ = 'wx'),
									(w = wx.getSystemInfoSync().version)),
								(n._AgentInfo.browserName = _),
								(n._AgentInfo.browserVer = w)
						},
						isMobile: function () {
							return 'mobile' == n._AgentInfo.deviceType
						},
						setAdaptType: function () {
							screen.width <= 374
								? (n._AgentInfo.adaptType = 0)
								: screen.width <= 413
								? (n._AgentInfo.adaptType = 1)
								: (n._AgentInfo.adaptType = 2)
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		ShowAngel: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '9e011tM6wdMYrgUKkhjCEkR', 'ShowAngel')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					onLoad: function () {
						;(this.buffNode = this.node.getChildByName('buffNode')),
							(this.buffNode2 = this.node.getChildByName(
								'buffNode2'
							)),
							(this.gameComponent = cc
								.find('Canvas')
								.getComponent('Game')),
							this.gameComponent.setGamePause(!0),
							cc.myself.scaleToShow(this.node)
					},
					start: function () {
						var f = b.buffConf,
							v = []
						for (var C in f)
							if (f[C].angleWeight)
								if (f[C].isOnly) {
									if (-1 == cc.myself.addBuffList.indexOf(C))
										for (
											var _ = 0;
											_ < f[C].angleWeight / 10;
											_++
										)
											v.push(C)
								} else
									for (
										var w = 0;
										w < f[C].angleWeight / 10;
										w++
									)
										v.push(C)
						for (var N = []; N.length < 2; ) {
							for (
								var k = v[Math.floor(Math.random() * v.length)],
									L = !1,
									B = 0;
								B < N.length;
								B++
							)
								if (N[B] == k) {
									L = !0
									break
								}
							L || N.push(k)
						}
						console.log('chooseList', N),
							(this.buffNode
								.getChildByName('label')
								.getComponent(cc.Label).string = N[0]),
							(this.buffNode2
								.getChildByName('label')
								.getComponent(cc.Label).string = N[1]),
							cc.myself.asyncShowImage(
								this.buffNode
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								b.buffConf[N[0]].icon
							),
							cc.myself.asyncShowImage(
								this.buffNode2
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								b.buffConf[N[1]].icon
							),
							(this.chooseList = N)
					},
					chooseBuff: function (f, v) {
						var C = this.chooseList[v]
						cc.myself.addBuffList.push(C),
							cc.myself.checkAddBuff(),
							this.close(),
							'HpIncrease' == C
								? this.gameComponent
										.getPlayer()
										.getComponent('Player')
										.afterGetHpBuff(
											parseInt(
												(cc.myself.getPlayerBaseHp() *
													b.buffConf[C].num) /
													100
											)
										)
								: 'HpRecover' == C &&
								  this.gameComponent
										.getPlayer()
										.getComponent('Player')
										.afterGetHpAddBuff(
											parseInt(
												(cc.myself.getPlayerBaseHp() *
													b.buffConf[C].num) /
													100
											)
										),
							cc.myself.showPre('pre/buffGet', {
								jname: 'BuffGet',
								data: { type: C },
							})
					},
					close: function () {
						this.node.destroy(),
							this.gameComponent.setGamePause(!1),
							this.gameComponent.removeAngle()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		ShowDemon: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '3d0f7bdBU5JKoxIu07qfznA', 'ShowDemon')
				var b = (function (f) {
						return f && f.__esModule ? f : { default: f }
					})(f('./managers/AdsManager')),
					_ = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					onLoad: function () {
						;(this.buffNode = this.node.getChildByName('buffNode')),
							(this.gameComponent = cc
								.find('Canvas')
								.getComponent('Game')),
							this.gameComponent.setGamePause(!0),
							(this.featHp = 80),
							cc.myself.scaleToShow(this.node)
					},
					start: function () {
						var f = _.buffConf,
							v = []
						for (var C in f)
							if (f[C].demonWeight)
								if (f[C].isOnly) {
									if (-1 == cc.myself.addBuffList.indexOf(C))
										for (
											var b = 0;
											b < f[C].demonWeight / 10;
											b++
										)
											v.push(C)
								} else
									for (
										var w = 0;
										w < f[C].demonWeight / 10;
										w++
									)
										v.push(C)
						var N = v[Math.floor(Math.random() * v.length)]
						;(this.type = N),
							(this.buffNode
								.getChildByName('label')
								.getComponent(cc.Label).string = N),
							cc.myself.asyncShowImage(
								this.buffNode
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								_.buffConf[N].icon
							)
						var k = parseInt(0.25 * cc.myself.getPlayerBaseHp()),
							L = Lq.lang('概率失去生命上限', {
								data: { num: k },
							})
						this.node
							.getChildByName('rate')
							.getChildByName('losehp')
							.getComponent(cc.Label).string = L
					},
					video: function () {
						cc.myself.aldSendEvent('降低概率-拉起视频')
						var f = this
						b.default.showRewardedAd(function () {
							cc.myself.aldSendEvent('降低概率-成功观看视频'),
								(f.featHp = 0),
								(f.node
									.getChildByName('rate')
									.getChildByName('word_2')
									.getComponent(cc.Label).string =
									f.featHp + '%')
						})
					},
					chooseBuff: function (f, v) {
						cc.myself.aldSendEvent('点击魔鬼签约'),
							Math.random() < this.featHp / 100 &&
								this.gameComponent
									.getPlayer()
									.getComponent('Player')
									.afterDemonSubHp(
										parseInt(
											0.25 * -cc.myself.getPlayerBaseHp()
										)
									),
							cc.myself.addBuffList.push(this.type),
							cc.myself.checkAddBuff(),
							this.close(),
							'HpIncrease' == this.type
								? this.gameComponent
										.getPlayer()
										.getComponent('Player')
										.afterGetHpBuff(
											parseInt(
												(cc.myself.getPlayerBaseHp() *
													_.buffConf[this.type].num) /
													100
											)
										)
								: 'HpRecover' == this.type &&
								  this.gameComponent
										.getPlayer()
										.getComponent('Player')
										.afterGetHpAddBuff(
											parseInt(
												(cc.myself.getPlayerBaseHp() *
													_.buffConf[this.type].num) /
													100
											)
										),
							cc.myself.showPre('pre/buffGet', {
								jname: 'BuffGet',
								data: { type: this.type },
							})
					},
					close: function () {
						this.node.destroy(),
							this.gameComponent.setGamePause(!1),
							this.gameComponent.removeDemon()
					},
				}),
					cc._RF.pop()
			},
			{ './managers/AdsManager': 'AdsManager', Config: 'Config' },
		],
		ShowTurntable: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '394a9Le3EZH6qM++K+CSJei', 'ShowTurntable')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					onLoad: function () {
						;(this.gameComponent = cc
							.find('Canvas')
							.getComponent('Game')),
							this.gameComponent.setGamePause(!0),
							cc.myself.scaleToShow(this.node)
					},
					start: function () {},
					init: function (f) {
						this.type = f.type
						for (var v = 0; v < 6; v++) {
							var C = b.gameSetting.normalTurntable[v]
							this.node
								.getChildByName('normal')
								.getChildByName('r_' + (v + 1))
								.getChildByName('num')
								.getComponent(
									cc.Label
								).string = +Lq.lang('x分钟', {
								data: { num: C.type.split('_')[1] },
							})
						}
						for (var _ = 0; _ < 6; _++) {
							var w = b.gameSetting.bigTurntable[_]
							this.node
								.getChildByName('big')
								.getChildByName('r_' + (_ + 1))
								.getChildByName('num')
								.getComponent(cc.Label).string = w.type.split(
								'_'
							)[1]
						}
						this.node.getChildByName(this.type).active = !0
					},
					goLottery: function () {
						cc.myself.lottery()
					},
					lottery: function () {
						if (!this.isLottery) {
							var f
							f =
								'normal' == this.type
									? b.gameSetting.normalTurntable
									: b.gameSetting.bigTurntable
							for (var v = [], C = 0; C < 6; C++)
								for (var _ = 0; _ < f[C].num; _++)
									v.push(f[C].type)
							var w = Math.floor(Math.random() * v.length),
								N = 3600 + 60 * w + 30 * Math.random() - 15
							;(this.isLottery = !0),
								this.node
									.getChildByName('zhuanpan_1')
									.runAction(
										cc.sequence(
											cc
												.rotateBy(5, N)
												.easing(
													cc.easeCircleActionOut(3)
												),
											cc.delayTime(0.2),
											cc.callFunc(
												function () {
													var f = v[w].split('_'),
														C = f[0],
														_ = f[1]
													if ('gold' == C) {
														var N =
															b.tfConf[7]
																.default +
															(cc.myself
																.tfList[7] -
																1) *
																b.tfConf[7].add
														0 ==
															cc.myself
																.tfList[7] &&
															(N =
																b.tfConf[7]
																	.default)
														var k =
															((60 *
																parseInt(_)) /
																10) *
															N
														;(k = Math.floor(k)),
															(cc.myself.gameGold += k),
															cc.myself.tips(
																Lq.lang(
																	'金币+x',
																	{
																		data: {
																			num: k,
																		},
																	}
																)
															)
													} else if ('diamond' == C) {
														var L = parseInt(_)
														;(cc.myself.diamond += L),
															cc.myself.setLocalData(
																'diamond',
																cc.myself
																	.diamond
															),
															cc.myself.tips(
																Lq.lang(
																	'钻石+x',
																	{
																		data: {
																			num: L,
																		},
																	}
																)
															)
													} else
														console.error(
															'抽奖出错'
														)
													;(this.isLottery = !1),
														this.close()
												}.bind(this)
											)
										)
									)
						}
					},
					close: function () {
						'normal' == this.type &&
							cc.myself.showPre('pre/showTurntable', {
								jname: 'ShowTurntable',
								data: { type: 'big' },
							}),
							this.node.destroy(),
							this.gameComponent.setGamePause(!1),
							this.gameComponent.removeTurntable()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		StringFormat: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '85fe8Gc6h5Ava+JsdbBs8cR', 'StringFormat'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b = (function () {
					function e() {}
					return (
						(e.prototype.deal = function (f, v) {
							if ('' === v) return f
							var C,
								b = (v = v.toLowerCase().trim()).match(
									/^[a-z|A-Z]+/gi
								),
								_ = v.match(/\d+$/gi),
								w = '',
								N = ''
							if (
								(b && (w = b[0]),
								_ && (C = parseInt(_[0])),
								'number' == typeof f)
							)
								switch (w) {
									case 'int':
										N = this.int(f)
										break
									case 'fix':
										N = this.fix(f, C)
										break
									case 'kmbt':
										N = this.KMBT(f)
										break
									case 'per':
										N = this.per(f, C)
										break
									case 'sep':
										N = this.sep(f)
								}
							else {
								switch (w) {
									case 'limit':
										N = this.limit(f, C)
								}
								N = f
							}
							return N
						}),
						(e.prototype.sep = function (f) {
							return Math.round(f)
								.toString()
								.replace(
									new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'),
									'$1,'
								)
						}),
						(e.prototype.time_m = function (f) {}),
						(e.prototype.time_s = function (f) {}),
						(e.prototype.time_ms = function (f) {}),
						(e.prototype.timeStamp = function (f) {
							return new Date(f).toString()
						}),
						(e.prototype.per = function (f, v) {
							return Math.round(100 * f).toFixed(v)
						}),
						(e.prototype.int = function (f) {
							return Math.round(f)
						}),
						(e.prototype.fix = function (f, v) {
							return f.toFixed(v)
						}),
						(e.prototype.limit = function (f, v) {
							return f.substring(0, v)
						}),
						(e.prototype.KMBT = function (f, v) {
							return (
								void 0 === v && (v = 'en'),
								this.compressUnit(
									f,
									[1e3, 1e6, 1e9, 1e12],
									['', 'K', 'M', 'B', 'T'],
									2
								)
							)
						}),
						(e.prototype.compressUnit = function (f, v, C, b) {
							void 0 === b && (b = 2)
							var _,
								w,
								N = v,
								k = C
							for (w = 0; w < N.length; w++)
								if (f < N[w]) {
									_ =
										w > 0
											? (f / N[w - 1]).toFixed(b)
											: f.toFixed(0)
									break
								}
							return _ + k[w]
						}),
						e
					)
				})()
				;(C.StringFormatFunction = new b()), cc._RF.pop()
			},
			{},
		],
		SubPlayer: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'a807alqkMJM25UR3YLpLZwQ', 'SubPlayer')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						;(this.gameComponent = cc
							.find('Canvas')
							.getComponent('Game')),
							this.getPlayerPosList()
					},
					onEnable: function () {
						;(this.checkBulletTime = 0), (this.playerImgType = '')
					},
					init: function (f) {
						;(this.id = f.id),
							(this.guid = f.guid),
							(this.cubeX = f.x),
							(this.cubeY = f.y),
							(this.data = cc.myself.getWorkMateDataByGUID(
								this.guid
							)),
							(this.conf = b.workmateConf[this.data.id]),
							(this.atkPower = Math.floor(
								this.conf.atk * Math.pow(2, this.data.star - 1)
							)),
							cc.myself.tfList[8] > 0 &&
								(this.atkPower =
									this.atkPower *
									(1 +
										b.tfConf[8].default +
										b.tfConf[8].add *
											(cc.myself.tfList[8] - 1))),
							(this.atkSpe =
								this.conf.spe *
								Math.pow(1.2, this.data.star - 1)),
							cc.loader.loadRes(
								'spine/' +
									b.gameSetting.workmateSpineName[
										this.conf.type1
									],
								sp.SkeletonData,
								function (f, v) {
									;(this.node
										.getChildByName('icon')
										.getComponent(
											sp.Skeleton
										).skeletonData = v),
										this.node
											.getChildByName('icon')
											.getComponent(sp.Skeleton)
											.setAnimation(1, 'bei_stand', !0),
										this.node
											.getChildByName('icon')
											.getComponent(sp.Skeleton)
											.setSkin(
												this.data.star +
													'_' +
													b.gameSetting
														.workmateSpineName[
														this.conf.type2
													]
											)
								}.bind(this)
							)
					},
					getEnemyList: function () {
						return this.gameComponent.getEnemyList()
					},
					getPlayerPosList: function () {
						return this.gameComponent.getPlayerPosList()
					},
					getMyType1: function (f) {
						var v = (180 * Math.atan2(f.y, f.x)) / Math.PI
						v = 360 - v + 90
						var C,
							b = 0
						switch (
							((v %= 360) <= 45 || v > 315
								? (b = 0)
								: v > 45 && v <= 135
								? (b = 1)
								: v > 135 && v <= 225
								? (b = 2)
								: v > 225 && v <= 315 && (b = 3),
							b)
						) {
							case 0:
								C = 'bei'
								break
							case 1:
								C = 'you'
								break
							case 2:
								C = 'zheng'
								break
							case 3:
								C = 'zuo'
						}
						return C
					},
					setCubePos: function (f, v) {
						;(this.cubeX = f), (this.cubeY = v)
					},
					update: function (f) {
						if (
							!this.gameComponent.getGameIsOver() &&
							!this.gameComponent.getGamePause()
						) {
							this.node.zIndex = this.gameComponent.getZIndexByMapPos(
								this.cubeX,
								this.cubeY
							)
							var v,
								C = this.gameComponent.getBulletDp(this.node)
							v = C
								? this.node.getActionByTag(1)
									? 'gongji2'
									: 'gongji1'
								: this.node.getActionByTag(1)
								? 'zou'
								: 'stand'
							var _ = this.gameComponent.getPlayerPos(),
								w = cc
									.v2(_.x, _.y)
									.sub(cc.v2(this.node.x, this.node.y)),
								N = this.getMyType1(w)
							if (N && v) {
								var k = N + '_' + v
								this.playerImgType != k &&
									((this.playerImgType = k),
									this.node
										.getChildByName('icon')
										.getComponent('sp.Skeleton')
										.setAnimation(
											1,
											this.playerImgType,
											!0
										))
							}
							if (
								((this.checkBulletTime += f),
								this.checkBulletTime > 1 / this.atkSpe &&
									((this.checkBulletTime = 0),
									this.gameComponent.createBullet({
										pos: { x: this.node.x, y: this.node.y },
										icon:
											'weapon/shz_zd_' +
											b.gameSetting.workmateSpineName[
												this.conf.type1
											],
										dp: C,
										atkPower: this.atkPower,
										isSub: !0,
									})),
								!this.node.getActionByTag(1))
							) {
								var L = this.gameComponent.getPosById(this.id)
								if (L.x != this.cubeX || L.y != this.cubeY) {
									var B = this.gameComponent.getPosByMapPos(
											L.x + ',' + L.y
										),
										S = Math.floor(
											Math.sqrt(
												(L.x - this.cubeX) *
													(L.x - this.cubeX) +
													(L.y - this.cubeY) *
														(L.y - this.cubeY)
											)
										),
										M = cc.moveTo(0.16 * S, B)
									M.setTag(1),
										this.node.runAction(M),
										(this.cubeX = L.x),
										(this.cubeY = L.y)
								}
							}
						}
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		UtilManager: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '695aabTFOBEDpgfnGhihQbl', 'UtilManager'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('../platforms/pfLq')
				;(C.default = {
					gameLevelStart(f) {
						if (f)
							switch (b.default.pfName) {
								case 'stapp':
									b.default.stapp.callJsbMethod(
										'gameLevelStart',
										{ level: f }
									)
							}
					},
					gameLevelEnd(f) {
						if (f)
							switch (b.default.pfName) {
								case 'stapp':
									b.default.stapp.callJsbMethod(
										'gameLevelEnd',
										{ level: f }
									)
							}
					},
					showTips(f, v, C) {
						let _,
							w = (C = C || {}).timeout || 2,
							N = b.default.tipsNode
						if (N && N.isValid)
							N.cleanup(),
								(N.opacity = 255),
								(_ = N.getChildByName('tipsLabel').getComponent(
									cc.Label
								))
						else {
							;((N = new cc.Node()).name = 'tipsNode'),
								(N.zIndex = 999),
								(N.group = 'default'),
								N.on('updatebg', () => {
									N.active = !0
									let f = N.getChildByName('tipsBg'),
										v = N.getChildByName('tipsLabel'),
										C = Math.max(v.width + 100, 600),
										b = v.height + 20,
										_ = -C / 2,
										w = -b / 2,
										k = f.getComponent(cc.Graphics)
									k.clear(!0),
										k.rect(_, w, C, b),
										(k.fillColor = new cc.Color(
											0,
											0,
											0,
											178.5
										)),
										k.fill()
								})
							let f = new cc.Node()
							;(f.name = 'tipsBg'),
								f.addComponent(cc.Graphics),
								N.addChild(f)
							let v = new cc.Node()
							;(v.name = 'tipsLabel'),
								v.addComponent(cc.Label),
								N.addChild(v),
								((_ = v.getComponent(cc.Label)).fontSize =
									C.fontSize || 40),
								(_.lineHeight = C.lineHeight || 50),
								(_.horizontalAlign =
									cc.Label.HorizontalAlign.CENTER),
								(_.verticalAlign =
									cc.Label.VerticalAlign.CENTER),
								(_.cacheMode = cc.Label.CacheMode.NONE),
								(b.default.tipsNode = N)
						}
						;(N.y = C.y || 0),
							N.removeFromParent(!1),
							cc.director
								.getScene()
								.getChildByName('Canvas')
								.addChild(N),
							(_.string = f),
							N.emit('updatebg'),
							cc
								.tween(N)
								.delay(w)
								.to(1, { y: 100, opacity: 51 })
								.call(() => {
									;(N.active = !1), v && v()
								})
								.start()
					},
				}),
					cc._RF.pop()
			},
			{ '../platforms/pfLq': 'pfLq' },
		],
		VMBase: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '2f6f36IvUdPO7xynnVTPgzb', 'VMBase'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b = f('./ViewModel'),
					_ = cc._decorator,
					w = _.ccclass,
					N =
						(_.property,
						(function (f) {
							function t() {
								var v =
									(null !== f && f.apply(this, arguments)) ||
									this
								return (
									(v.watchPath = ''),
									(v.watchPathArr = []),
									(v.templateMode = !1),
									(v.templateValueArr = []),
									(v.VM = b.VM),
									v
								)
							}
							return (
								__extends(t, f),
								(t.prototype.onLoad = function () {
									for (
										var f = this,
											v = this.watchPath.split('.'),
											C = 1;
										C < v.length;
										C++
									)
										if ('*' == v[C]) {
											;(N = this.node
												.getParent()
												.children.findIndex(function (
													v
												) {
													return v === f.node
												})) <= 0 && (N = 0),
												(v[C] = N.toString())
											break
										}
									this.watchPath = v.join('.')
									var b = this.watchPathArr
									if (b.length >= 1)
										for (C = 0; C < b.length; C++) {
											for (
												var _ = b[C].split('.'), w = 1;
												w < _.length;
												w++
											)
												if ('*' == _[w]) {
													var N
													;(N = this.node
														.getParent()
														.children.findIndex(
															function (v) {
																return (
																	v === f.node
																)
															}
														)) <= 0 && (N = 0),
														(_[w] = N.toString())
													break
												}
											this.watchPathArr[C] = _.join('.')
										}
									'' == this.watchPath &&
										'' == this.watchPathArr.join('') &&
										cc.log(
											'可能未设置路径的节点:',
											this.node.getParent().name +
												'.' +
												this.node.name
										)
								}),
								(t.prototype.onEnable = function () {
									this.templateMode
										? this.setMultPathEvent(!0)
										: '' != this.watchPath &&
										  this.VM.bindPath(
												this.watchPath,
												this.onValueChanged,
												this
										  ),
										this.onValueInit()
								}),
								(t.prototype.onDisable = function () {
									this.templateMode
										? this.setMultPathEvent(!1)
										: '' != this.watchPath &&
										  this.VM.unbindPath(
												this.watchPath,
												this.onValueChanged,
												this
										  )
								}),
								(t.prototype.setMultPathEvent = function (f) {
									void 0 === f && (f = !0)
									for (
										var v = this.watchPathArr, C = 0;
										C < v.length;
										C++
									) {
										var b = v[C]
										f
											? this.VM.bindPath(
													b,
													this.onValueChanged,
													this
											  )
											: this.VM.unbindPath(
													b,
													this.onValueChanged,
													this
											  )
									}
								}),
								(t.prototype.onValueInit = function () {}),
								(t.prototype.onValueChanged = function (
									f,
									v,
									C
								) {}),
								__decorate([w], t)
							)
						})(cc.Component))
				;(C.default = N), cc._RF.pop()
			},
			{ './ViewModel': 'ViewModel' },
		],
		VMCompsEdit: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '2359eFXKF5HFYS74K7Y17/U', 'VMCompsEdit'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b,
					_ = cc._decorator,
					w = _.ccclass,
					N = _.property,
					k = _.executeInEditMode,
					L = _.menu
				!(function (f) {
					;(f[(f.SEARCH_COMPONENT = 0)] = 'SEARCH_COMPONENT'),
						(f[(f.ENABLE_COMPONENT = 1)] = 'ENABLE_COMPONENT'),
						(f[(f.REPLACE_WATCH_PATH = 2)] = 'REPLACE_WATCH_PATH'),
						(f[(f.DELETE_COMPONENT = 3)] = 'DELETE_COMPONENT')
				})(b || (b = {}))
				var B = (function (f) {
					function t() {
						var v = (null !== f && f.apply(this, arguments)) || this
						return (
							(v.findList = ['VMBase', 'VMParent']),
							(v.actionType = b.SEARCH_COMPONENT),
							(v.allowDelete = !1),
							(v.targetPath = 'game'),
							(v.replacePath = '*'),
							(v.canCollectNodes = !1),
							(v.collectNodes = []),
							v
						)
					}
					return (
						__extends(t, f),
						Object.defineProperty(t.prototype, 'findTrigger', {
							get: function () {
								return !1
							},
							set: function (f) {
								this.setComponents(0)
							},
							enumerable: !0,
							configurable: !0,
						}),
						Object.defineProperty(t.prototype, 'enableTrigger', {
							get: function () {
								return !1
							},
							set: function (f) {
								this.setComponents(1)
							},
							enumerable: !0,
							configurable: !0,
						}),
						Object.defineProperty(t.prototype, 'disableTrigger', {
							get: function () {
								return !1
							},
							set: function (f) {
								this.setComponents(2)
							},
							enumerable: !0,
							configurable: !0,
						}),
						Object.defineProperty(t.prototype, 'deleteTrigger', {
							get: function () {
								return !1
							},
							set: function (f) {
								this.setComponents(3)
							},
							enumerable: !0,
							configurable: !0,
						}),
						Object.defineProperty(t.prototype, 'replaceTrigger', {
							get: function () {
								return !1
							},
							set: function (f) {
								this.setComponents(4)
							},
							enumerable: !0,
							configurable: !0,
						}),
						(t.prototype.onLoad = function () {
							var f = this.getNodePath(this.node)
							console.error(
								'you forget delete MVEditFinder,[path]',
								f
							)
						}),
						(t.prototype.setComponents = function (f) {
							var v = this,
								C = this.findList,
								b = '搜索到当前节点下面的组件'
							switch (f) {
								case 0:
									b = '搜索到当前节点下面的组件'
									break
								case 1:
									b = '激活以下节点的组件'
									break
								case 2:
									b = '关闭以下节点的组件'
									break
								case 3:
									b = '删除以下节点的组件'
									break
								case 4:
									b = '替换以下节点的路径'
							}
							cc.log(b),
								cc.log('______________________'),
								C.forEach(function (C) {
									v.searchComponent(C, f)
								}),
								cc.log('______________________')
						}),
						(t.prototype.searchComponent = function (f, v) {
							var C = this
							void 0 === v && (v = 0), (this.collectNodes = [])
							var b = this.node.getComponentsInChildren(f)
							null == b ||
								b.length < 1 ||
								(cc.log('[' + f + ']:'),
								b.forEach(function (f) {
									var b = ''
									switch (
										(v <= 3 &&
											(b =
												!0 === f.templateMode
													? f.watchPathArr
														? ':[Path:' +
														  f.watchPathArr.join(
																'|'
														  ) +
														  ']'
														: ''
													: f.watchPath
													? ':[Path:' +
													  f.watchPath +
													  ']'
													: ''),
										cc.log(C.getNodePath(f.node) + b),
										v)
									) {
										case 0:
											C.canCollectNodes &&
												-1 ===
													C.collectNodes.indexOf(
														f.node
													) &&
												C.collectNodes.push(f.node)
											break
										case 1:
											f.enabled = !0
											break
										case 2:
											f.enabled = !1
											break
										case 3:
											f.node.removeComponent(f)
											break
										case 4:
											var _ = C.targetPath,
												w = C.replacePath
											if (!0 === f.templateMode)
												for (
													var N = 0;
													N < f.watchPathArr.length;
													N++
												) {
													var k = f.watchPathArr[N]
													f.watchPathArr[
														N
													] = C.replaceNodePath(
														k,
														_,
														w
													)
												}
											else
												f.watchPath = C.replaceNodePath(
													f.watchPath,
													_,
													w
												)
									}
								}))
						}),
						(t.prototype.replaceNodePath = function (f, v, C) {
							for (
								var b = f.split('.'),
									_ = v.split('.'),
									w = C.split('.'),
									N = !0,
									k = 0;
								k < _.length;
								k++
							)
								if (b[k] !== _[k]) {
									N = !1
									break
								}
							if (!0 === N) {
								for (k = 0; k < w.length; k++) b[k] = w[k]
								cc.log(' 路径更新:', f, '>>>', b.join('.'))
							}
							return b.join('.')
						}),
						(t.prototype.getNodePath = function (f) {
							for (var v = f, C = []; v; ) {
								var b = v.getParent()
								if (!b) break
								C.push(v.name), (v = b)
							}
							return C.reverse().join('/')
						}),
						__decorate(
							[N({ type: [cc.String] })],
							t.prototype,
							'findList',
							void 0
						),
						__decorate(
							[N({ type: cc.Enum(b) })],
							t.prototype,
							'actionType',
							void 0
						),
						__decorate(
							[
								N({
									tooltip:
										'勾选后,会自动查找 find list 中填写的组件',
									visible: function () {
										return (
											this.actionType ===
											b.SEARCH_COMPONENT
										)
									},
								}),
							],
							t.prototype,
							'findTrigger',
							null
						),
						__decorate(
							[
								N({
									tooltip:
										'勾选后,会批量激活 find list 中填写的组件',
									visible: function () {
										return (
											this.actionType ===
											b.ENABLE_COMPONENT
										)
									},
								}),
							],
							t.prototype,
							'enableTrigger',
							null
						),
						__decorate(
							[
								N({
									tooltip:
										'勾选后,会批量关闭 find list 中填写的组件',
									visible: function () {
										return (
											this.actionType ===
											b.ENABLE_COMPONENT
										)
									},
								}),
							],
							t.prototype,
							'disableTrigger',
							null
						),
						__decorate(
							[
								N({
									tooltip:
										'允许删除节点的组件,确定需要移除请勾选,防止误操作',
									visible: function () {
										return (
											this.actionType ===
											b.DELETE_COMPONENT
										)
									},
								}),
							],
							t.prototype,
							'allowDelete',
							void 0
						),
						__decorate(
							[
								N({
									tooltip:
										'勾选后,会批量删除 find list 中填写的组件',
									displayName: '[ X DELETE X ]',
									visible: function () {
										return (
											this.allowDelete &&
											this.actionType ===
												b.DELETE_COMPONENT
										)
									},
								}),
							],
							t.prototype,
							'deleteTrigger',
							null
						),
						__decorate(
							[
								N({
									tooltip: '勾选后,会批量替换掉指定的路径',
									visible: function () {
										return (
											this.actionType ===
											b.REPLACE_WATCH_PATH
										)
									},
								}),
							],
							t.prototype,
							'replaceTrigger',
							null
						),
						__decorate(
							[
								N({
									tooltip:
										'匹配的路径,匹配规则: 搜索开头为 game的路径',
									visible: function () {
										return (
											this.actionType ===
											b.REPLACE_WATCH_PATH
										)
									},
								}),
							],
							t.prototype,
							'targetPath',
							void 0
						),
						__decorate(
							[
								N({
									tooltip: '替换的路径,将匹配到的路径替换',
									visible: function () {
										return (
											this.actionType ===
											b.REPLACE_WATCH_PATH
										)
									},
								}),
							],
							t.prototype,
							'replacePath',
							void 0
						),
						__decorate(
							[
								N({
									tooltip: '是否搜集绑定VM组件的节点?',
									visible: function () {
										return (
											this.actionType ===
											b.SEARCH_COMPONENT
										)
									},
								}),
							],
							t.prototype,
							'canCollectNodes',
							void 0
						),
						__decorate(
							[
								N({
									type: [cc.Node],
									readonly: !0,
									tooltip:
										'收集到绑定了VM组件相关的节点，可以自己跳转过去',
									visible: function () {
										return (
											this.canCollectNodes &&
											this.actionType ===
												b.SEARCH_COMPONENT
										)
									},
								}),
							],
							t.prototype,
							'collectNodes',
							void 0
						),
						__decorate(
							[w, k, L('ModelViewer/Edit-Comps (快速组件操作)')],
							t
						)
					)
				})(cc.Component)
				;(C.default = B), cc._RF.pop()
			},
			{},
		],
		VMCustom: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'ce662fwsSVPLKpmHx+KocFu', 'VMCustom'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b = f('./VMBase'),
					_ = cc._decorator,
					w = _.ccclass,
					N = _.property,
					k = _.executeInEditMode,
					L = _.menu,
					B = (function (f) {
						function t() {
							var v =
								(null !== f && f.apply(this, arguments)) || this
							return (
								(v.controller = !1),
								(v.watchPath = ''),
								(v.componentName = ''),
								(v.componentProperty = ''),
								(v.refreshRate = 0.1),
								(v._timer = 0),
								(v._watchComponent = null),
								(v._canWatchComponent = !1),
								(v._oldValue = null),
								v
							)
						}
						return (
							__extends(t, f),
							(t.prototype.onLoad = function () {
								f.prototype.onLoad.call(this),
									this.checkEditorComponent(),
									(this._watchComponent = this.node.getComponent(
										this.componentName
									)),
									this.checkComponentState()
							}),
							(t.prototype.onRestore = function () {
								this.checkEditorComponent()
							}),
							(t.prototype.start = function () {
								this.onValueInit()
							}),
							(t.prototype.checkEditorComponent = function () {}),
							(t.prototype.checkComponentState = function () {
								;(this._canWatchComponent = !1),
									this._watchComponent
										? this.componentProperty
											? this.componentProperty in
													this._watchComponent !=
											  0
												? (this._canWatchComponent = !0)
												: console.error(
														'需要监听的组件的属性不存在'
												  )
											: console.error(
													'未设置需要监听的组件 的属性'
											  )
										: console.error('未设置需要监听的组件')
							}),
							(t.prototype.getComponentValue = function () {
								return this._watchComponent[
									this.componentProperty
								]
							}),
							(t.prototype.setComponentValue = function (f) {
								'cc.Toggle' == this.componentName
									? (1 == f &&
											this.node
												.getComponent(cc.Toggle)
												.check(),
									  0 == f &&
											this.node
												.getComponent(cc.Toggle)
												.uncheck())
									: (this._watchComponent[
											this.componentProperty
									  ] = f)
							}),
							(t.prototype.onValueInit = function () {
								this.setComponentValue(
									this.VM.getValue(this.watchPath)
								)
							}),
							(t.prototype.onValueController = function (f, v) {
								this.VM.setValue(this.watchPath, f)
							}),
							(t.prototype.onValueChanged = function (f, v, C) {
								this.setComponentValue(f)
							}),
							(t.prototype.update = function (f) {
								if (
									this.controller &&
									this._canWatchComponent &&
									!1 !== this._watchComponent.enabled &&
									((this._timer += f),
									!(this._timer < this.refreshRate))
								) {
									this._timer = 0
									var v = this._oldValue,
										C = this.getComponentValue()
									this._oldValue !== C &&
										((this._oldValue = this.getComponentValue()),
										this.onValueController(C, v))
								}
							}),
							__decorate(
								[
									N({
										tooltip:
											'激活controller,以开启双向绑定，否则只能接收消息',
									}),
								],
								t.prototype,
								'controller',
								void 0
							),
							__decorate([N], t.prototype, 'watchPath', void 0),
							__decorate(
								[N({ tooltip: '绑定组件的名字' })],
								t.prototype,
								'componentName',
								void 0
							),
							__decorate(
								[N({ tooltip: '组件上需要监听的属性' })],
								t.prototype,
								'componentProperty',
								void 0
							),
							__decorate(
								[
									N({
										tooltip:
											'刷新间隔频率(只影响脏检查的频率)',
										step: 0.01,
										range: [0, 1],
										visible: function () {
											return !0 === this.controller
										},
									}),
								],
								t.prototype,
								'refreshRate',
								void 0
							),
							__decorate(
								[w, k, L('ModelViewer/VM-Custom (自定义VM)')],
								t
							)
						)
					})(b.default)
				;(C.default = B), cc._RF.pop()
			},
			{ './VMBase': 'VMBase' },
		],
		VMEvent: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'a9ce7kf8XZJeLPlT2iWn2zD', 'VMEvent'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b,
					_ = f('./VMBase'),
					w = cc._decorator,
					N = w.ccclass,
					k = w.property,
					L = w.executeInEditMode,
					B = w.menu
				!(function (f) {
					;(f[(f.none = 0)] = 'none'),
						(f[(f['=='] = 1)] = '=='),
						(f[(f['!='] = 2)] = '!='),
						(f[(f['>'] = 3)] = '>'),
						(f[(f['>='] = 4)] = '>='),
						(f[(f['<'] = 5)] = '<'),
						(f[(f['<='] = 6)] = '<=')
				})(b || (b = {}))
				var S = (function (f) {
					function t() {
						var v = (null !== f && f.apply(this, arguments)) || this
						return (
							(v.templateMode = !1),
							(v.watchPath = ''),
							(v.triggerOnce = !1),
							(v.watchPathArr = []),
							(v.filterMode = b.none),
							(v.compareValue = ''),
							(v.changeEvents = []),
							v
						)
					}
					return (
						__extends(t, f),
						(t.prototype.onValueInit = function () {}),
						(t.prototype.onValueChanged = function (f, v, C) {
							this.conditionCheck(f, this.compareValue) &&
								(Array.isArray(this.changeEvents) &&
									this.changeEvents.forEach(function (b) {
										b.emit([f, v, C])
									}),
								!0 === this.triggerOnce && (this.enabled = !1))
						}),
						(t.prototype.conditionCheck = function (f, v) {
							var C = b
							switch (this.filterMode) {
								case C.none:
									return !0
								case C['==']:
									if (f == v) return !0
									break
								case C['!=']:
									if (f != v) return !0
									break
								case C['<']:
									if (f < v) return !0
									break
								case C['>']:
									if (f > v) return !0
									break
								case C['>=']:
									if (f >= v) return !0
									break
								case C['<']:
									if (f < v) return !0
									break
								case C['<=']:
									if (f <= v) return !0
							}
							return !1
						}),
						__decorate(
							[
								k({
									tooltip: '使用模板模式，可以使用多路径监听',
								}),
							],
							t.prototype,
							'templateMode',
							void 0
						),
						__decorate(
							[
								k({
									tooltip: '监听获取值的路径',
									visible: function () {
										return !1 === this.templateMode
									},
								}),
							],
							t.prototype,
							'watchPath',
							void 0
						),
						__decorate(
							[k({ tooltip: '触发一次后会自动关闭该事件' })],
							t.prototype,
							'triggerOnce',
							void 0
						),
						__decorate(
							[
								k({
									tooltip:
										'监听获取值的多条路径,这些值的改变都会通过这个函数回调,请使用 pathArr 区分获取的值 ',
									type: [cc.String],
									visible: function () {
										return !0 === this.templateMode
									},
								}),
							],
							t.prototype,
							'watchPathArr',
							void 0
						),
						__decorate(
							[
								k({
									tooltip:
										'过滤模式，会根据条件过滤掉时间的触发',
									type: cc.Enum(b),
								}),
							],
							t.prototype,
							'filterMode',
							void 0
						),
						__decorate(
							[
								k({
									visible: function () {
										return this.filterMode !== b.none
									},
								}),
							],
							t.prototype,
							'compareValue',
							void 0
						),
						__decorate(
							[k([cc.Component.EventHandler])],
							t.prototype,
							'changeEvents',
							void 0
						),
						__decorate(
							[N, L, B('ModelViewer/VM-EventCall(调用函数)')],
							t
						)
					)
				})(_.default)
				;(C.default = S), cc._RF.pop()
			},
			{ './VMBase': 'VMBase' },
		],
		VMLabel: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '545c05XsG9GDJispEGWKvYv', 'VMLabel'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b = f('./VMBase'),
					_ = f('./StringFormat'),
					w = cc._decorator,
					N = w.ccclass,
					k = w.property,
					L = w.menu,
					B = w.executeInEditMode,
					S = 'cc.Label',
					M = (function (f) {
						function t() {
							var v =
								(null !== f && f.apply(this, arguments)) || this
							return (
								(v.watchPath = ''),
								(v.labelType = S),
								(v.templateMode = !1),
								(v.watchPathArr = []),
								(v.templateValueArr = []),
								(v.templateFormatArr = []),
								(v.originText = null),
								v
							)
						}
						return (
							__extends(t, f),
							(t.prototype.onRestore = function () {
								this.checkLabel()
							}),
							(t.prototype.onLoad = function () {
								f.prototype.onLoad.call(this),
									this.checkLabel(),
									this.templateMode &&
										((this.originText = this.getLabelValue()),
										this.parseTemplate()),
									this.onValueInit()
							}),
							(t.prototype.parseTemplate = function () {
								var f = /\{\{(.+?)\}\}/,
									v = this.originText.match(/\{\{(.+?)\}\}/g)
								if (null != v)
									for (var C = 0; C < v.length; C++) {
										var b =
											v[C].match(f)[1].split(':')[1] || ''
										this.templateFormatArr[C] = b
									}
							}),
							(t.prototype.getReplaceText = function () {
								var f = /\{\{(.+?)\}\}/,
									v = this.originText.match(/\{\{(.+?)\}\}/g)
								if (null == v) return ''
								for (
									var C = this.originText, b = 0;
									b < v.length;
									b++
								) {
									var _,
										w = v[b],
										N = w.match(f),
										k = parseInt(N[1] || '0') || 0,
										L = this.templateFormatArr[b]
									;(_ = this.templateValueArr[k]),
										(C = C.replace(
											w,
											this.getValueFromFormat(_, L)
										))
								}
								return C
							}),
							(t.prototype.getValueFromFormat = function (f, v) {
								return _.StringFormatFunction.deal(f, v)
							}),
							(t.prototype.onValueInit = function () {
								if (!1 === this.templateMode)
									this.setLabelValue(
										this.VM.getValue(this.watchPath)
									)
								else {
									for (
										var f = this.watchPathArr.length, v = 0;
										v < f;
										v++
									)
										this.templateValueArr[
											v
										] = this.VM.getValue(
											this.watchPathArr[v],
											'?'
										)
									this.setLabelValue(this.getReplaceText())
								}
							}),
							(t.prototype.onValueChanged = function (f, v, C) {
								if (!1 === this.templateMode)
									this.setLabelValue(f)
								else {
									var b = C.join('.'),
										_ = this.watchPathArr.findIndex(
											function (f) {
												return f === b
											}
										)
									_ >= 0 &&
										((this.templateValueArr[_] = f),
										this.setLabelValue(
											this.getReplaceText()
										))
								}
							}),
							(t.prototype.setLabelValue = function (f) {
								this.getComponent(this.labelType).string =
									f + ''
							}),
							(t.prototype.getLabelValue = function () {
								return this.getComponent(this.labelType).string
							}),
							(t.prototype.checkLabel = function () {
								for (
									var f = [
											'cc.Label',
											'cc.RichText',
											'cc.EditBox',
										],
										v = 0;
									v < f.length;
									v++
								) {
									var C = f[v]
									if (this.node.getComponent(C))
										return (this.labelType = C), !0
								}
								return cc.error('没有挂载任何label组件'), !1
							}),
							__decorate(
								[
									k({
										visible: function () {
											return !1 === this.templateMode
										},
									}),
								],
								t.prototype,
								'watchPath',
								void 0
							),
							__decorate(
								[k({ readonly: !0 })],
								t.prototype,
								'labelType',
								void 0
							),
							__decorate(
								[
									k({
										tooltip:
											'是否启用模板代码,只能在运行时之前设置,\n将会动态解析模板语法 {{0}},并且自动设置监听的路径',
									}),
								],
								t.prototype,
								'templateMode',
								void 0
							),
							__decorate(
								[
									k({
										type: [cc.String],
										visible: function () {
											return !0 === this.templateMode
										},
									}),
								],
								t.prototype,
								'watchPathArr',
								void 0
							),
							__decorate(
								[N, B, L('ModelViewer/VM-Label(文本VM)')],
								t
							)
						)
					})(b.default)
				;(C.default = M), cc._RF.pop()
			},
			{ './StringFormat': 'StringFormat', './VMBase': 'VMBase' },
		],
		VMModify: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '7d2a4voaOJJGJZRWFPG6Bk7', 'VMModify'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b,
					_ = f('./VMBase'),
					w = cc._decorator,
					N = w.ccclass,
					k = w.property,
					L = w.menu
				!(function (f) {
					;(f[(f.MIN = 0)] = 'MIN'),
						(f[(f.MAX = 1)] = 'MAX'),
						(f[(f.MIN_MAX = 2)] = 'MIN_MAX')
				})(b || (b = {}))
				var B = (function (f) {
					function t() {
						var v = (null !== f && f.apply(this, arguments)) || this
						return (
							(v.watchPath = ''),
							(v.valueClamp = !1),
							(v.valueClampMode = b.MIN_MAX),
							(v.valueMin = 0),
							(v.valueMax = 1),
							v
						)
					}
					return (
						__extends(t, f),
						(t.prototype.start = function () {}),
						(t.prototype.clampValue = function (f) {
							var v = this.valueMin,
								C = this.valueMax
							if (0 == this.valueClamp) return f
							switch (this.valueClampMode) {
								case b.MIN_MAX:
									f > C && (f = C), f < v && (f = v)
									break
								case b.MIN:
									f < v && (f = v)
									break
								case b.MAX:
									f > C && (f = C)
							}
							return f
						}),
						(t.prototype.vAddInt = function (f, v) {
							this.vAdd(f, v, !0)
						}),
						(t.prototype.vSubInt = function (f, v) {
							this.vSub(f, v, !0)
						}),
						(t.prototype.vMulInt = function (f, v) {
							this.vMul(f, v, !0)
						}),
						(t.prototype.vDivInt = function (f, v) {
							this.vDiv(f, v, !0)
						}),
						(t.prototype.vAdd = function (f, v, C) {
							void 0 === C && (C = !1)
							var b = parseFloat(v),
								_ = this.VM.getValue(this.watchPath, 0) + b
							C && (_ = Math.round(_)),
								this.VM.setValue(
									this.watchPath,
									this.clampValue(_)
								)
						}),
						(t.prototype.vSub = function (f, v, C) {
							void 0 === C && (C = !1)
							var b = parseFloat(v),
								_ = this.VM.getValue(this.watchPath, 0) - b
							C && (_ = Math.round(_)),
								this.VM.setValue(
									this.watchPath,
									this.clampValue(_)
								)
						}),
						(t.prototype.vMul = function (f, v, C) {
							void 0 === C && (C = !1)
							var b = parseFloat(v),
								_ = this.VM.getValue(this.watchPath, 0) * b
							C && (_ = Math.round(_)),
								this.VM.setValue(
									this.watchPath,
									this.clampValue(_)
								)
						}),
						(t.prototype.vDiv = function (f, v, C) {
							void 0 === C && (C = !1)
							var b = parseFloat(v),
								_ = this.VM.getValue(this.watchPath, 0) / b
							C && (_ = Math.round(_)),
								this.VM.setValue(
									this.watchPath,
									this.clampValue(_)
								)
						}),
						(t.prototype.vString = function (f, v) {
							var C = v
							this.VM.setValue(this.watchPath, C)
						}),
						(t.prototype.vNumberInt = function (f, v) {
							this.vNumber(f, v, !0)
						}),
						(t.prototype.vNumber = function (f, v, C) {
							void 0 === C && (C = !1)
							var b = parseFloat(v)
							C && (b = Math.round(b)),
								this.VM.setValue(
									this.watchPath,
									this.clampValue(b)
								)
						}),
						__decorate([k], t.prototype, 'watchPath', void 0),
						__decorate([k()], t.prototype, 'valueClamp', void 0),
						__decorate(
							[
								k({
									type: cc.Enum(b),
									visible: function () {
										return !0 === this.valueClamp
									},
								}),
							],
							t.prototype,
							'valueClampMode',
							void 0
						),
						__decorate(
							[
								k({
									visible: function () {
										return (
											!0 === this.valueClamp &&
											this.valueClampMode !== b.MAX
										)
									},
								}),
							],
							t.prototype,
							'valueMin',
							void 0
						),
						__decorate(
							[
								k({
									visible: function () {
										return (
											!0 === this.valueClamp &&
											this.valueClampMode !== b.MIN
										)
									},
								}),
							],
							t.prototype,
							'valueMax',
							void 0
						),
						__decorate(
							[N, L('ModelViewer/VM-Modify(修改Model)')],
							t
						)
					)
				})(_.default)
				;(C.default = B), cc._RF.pop()
			},
			{ './VMBase': 'VMBase' },
		],
		VMParent: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '15ccciO+ZRH476sPKD/LvB7', 'VMParent'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b = f('./ViewModel'),
					_ = cc._decorator,
					w = _.ccclass,
					N =
						(_.property,
						(function (f) {
							function t() {
								var v =
									(null !== f && f.apply(this, arguments)) ||
									this
								return (
									(v.tag = '_temp'),
									(v.data = {}),
									(v.VM = b.VM),
									v
								)
							}
							return (
								__extends(t, f),
								(t.prototype.onLoad = function () {
									if (null != this.data) {
										;(this.tag =
											'_temp<' +
											this.node.uuid.replace('.', '') +
											'>'),
											b.VM.add(this.data, this.tag)
										for (
											var f = this.getVMComponents(),
												v = 0;
											v < f.length;
											v++
										) {
											var C = f[v]
											this.replaceVMPath(C, this.tag)
										}
										this.onBind()
									}
								}),
								(t.prototype.onBind = function () {}),
								(t.prototype.onUnBind = function () {}),
								(t.prototype.replaceVMPath = function (f, v) {
									var C = f.watchPath
									if (1 == f.templateMode) {
										var b = f.watchPathArr
										if (b)
											for (var _ = 0; _ < b.length; _++) {
												var w = b[_]
												b[_] = w.replace('*', v)
											}
									} else
										'*' === C.split('.')[0] &&
											(f.watchPath = C.replace('*', v))
								}),
								(t.prototype.getVMComponents = function () {
									var f = this,
										v = this.node.getComponentsInChildren(
											'VMBase'
										),
										C = []
									return (
										this.node
											.getComponentsInChildren('VMParent')
											.filter(function (v) {
												return v.uuid !== f.uuid
											})
											.forEach(function (f) {
												C = C.concat(
													f.getComponentsInChildren(
														'VMBase'
													)
												)
											}),
										v.filter(function (f) {
											return C.indexOf(f) < 0
										})
									)
								}),
								(t.prototype.onDestroy = function () {
									this.onUnBind(),
										b.VM.remove(this.tag),
										(this.data = null)
								}),
								__decorate([w], t)
							)
						})(cc.Component))
				;(C.default = N), cc._RF.pop()
			},
			{ './ViewModel': 'ViewModel' },
		],
		VMProgress: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '2a50eqI7JZNV5Sh0y/Qd9C6', 'VMProgress'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b = f('./VMCustom'),
					_ = f('./StringFormat'),
					w = cc._decorator,
					N = w.ccclass,
					k = w.property,
					L = w.menu,
					B = (function (f) {
						function t() {
							var v =
								(null !== f && f.apply(this, arguments)) || this
							return (
								(v.watchPath = ''),
								(v.watchPathArr = ['[min]', '[max]']),
								(v.templateMode = !0),
								(v.stringFormat = ''),
								v
							)
						}
						return (
							__extends(t, f),
							(t.prototype.onLoad = function () {
								;(this.watchPathArr.length < 2 ||
									'[min]' == this.watchPathArr[0] ||
									'[max]' == this.watchPathArr[1]) &&
									console.error(
										'VMProgress must have two values!'
									),
									f.prototype.onLoad.call(this)
							}),
							(t.prototype.start = function () {
								this.onValueInit()
							}),
							(t.prototype.onValueInit = function () {
								for (
									var f = this.watchPathArr.length, v = 0;
									v < f;
									v++
								)
									this.templateValueArr[v] = this.VM.getValue(
										this.watchPathArr[v]
									)
								var C =
									this.templateValueArr[0] /
									this.templateValueArr[1]
								this.setComponentValue(C)
							}),
							(t.prototype.setComponentValue = function (v) {
								if ('' !== this.stringFormat) {
									var C = _.StringFormatFunction.deal(
										v,
										this.stringFormat
									)
									f.prototype.setComponentValue.call(this, C)
								} else
									f.prototype.setComponentValue.call(this, v)
							}),
							(t.prototype.onValueController = function (f, v) {
								var C = Math.round(f * this.templateValueArr[1])
								Number.isNaN(C) && (C = 0),
									this.VM.setValue(this.watchPathArr[0], C)
							}),
							(t.prototype.onValueChanged = function (f, v, C) {
								if (!1 !== this.templateMode) {
									var b = C.join('.'),
										_ = this.watchPathArr.findIndex(
											function (f) {
												return f === b
											}
										)
									_ >= 0 && (this.templateValueArr[_] = f)
									var w =
										this.templateValueArr[0] /
										this.templateValueArr[1]
									w > 1 && (w = 1),
										(w < 0 || Number.isNaN(w)) && (w = 0),
										this.setComponentValue(w)
								}
							}),
							__decorate(
								[k({ visible: !1, override: !0 })],
								t.prototype,
								'watchPath',
								void 0
							),
							__decorate(
								[
									k({
										type: [cc.String],
										tooltip:
											'第一个值是min 值，第二个值 是 max 值，会计算出两者的比例',
									}),
								],
								t.prototype,
								'watchPathArr',
								void 0
							),
							__decorate(
								[
									k({
										visible: function () {
											return (
												'string' ===
												this.componentProperty
											)
										},
										tooltip:
											'字符串格式化，和 VMLabel 的字段一样，需要填入对应的格式化字符串',
									}),
								],
								t.prototype,
								'stringFormat',
								void 0
							),
							__decorate(
								[N, L('ModelViewer/VM-Progress (VM-进度条)')],
								t
							)
						)
					})(b.default)
				;(C.default = B), cc._RF.pop()
			},
			{ './StringFormat': 'StringFormat', './VMCustom': 'VMCustom' },
		],
		VMState: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '47052uw/Y5O1LXaLObj4ARx', 'VMState'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b,
					_,
					w,
					N = f('./ViewModel'),
					k = f('./VMBase'),
					L = cc._decorator,
					B = L.ccclass,
					S = L.property,
					M = L.menu
				;(function (f) {
					;(f[(f['=='] = 0)] = '=='),
						(f[(f['!='] = 1)] = '!='),
						(f[(f['>'] = 2)] = '>'),
						(f[(f['>='] = 3)] = '>='),
						(f[(f['<'] = 4)] = '<'),
						(f[(f['<='] = 5)] = '<='),
						(f[(f.range = 6)] = 'range')
				})(b || (b = {})),
					(function (f) {
						;(f[(f.NODE_ACTIVE = 0)] = 'NODE_ACTIVE'),
							(f[(f.NODE_VISIBLE = 1)] = 'NODE_VISIBLE'),
							(f[(f.NODE_OPACITY = 2)] = 'NODE_OPACITY'),
							(f[(f.NODE_COLOR = 3)] = 'NODE_COLOR'),
							(f[(f.COMPONENT_CUSTOM = 4)] = 'COMPONENT_CUSTOM')
					})(_ || (_ = {})),
					(function (f) {
						;(f[(f.NODE_INDEX = 0)] = 'NODE_INDEX'),
							(f[(f.NODE_NAME = 1)] = 'NODE_NAME')
					})(w || (w = {}))
				var I = (function (f) {
					function t() {
						var v = (null !== f && f.apply(this, arguments)) || this
						return (
							(v.watchPath = ''),
							(v.foreachChildMode = !1),
							(v.condition = b['==']),
							(v.foreachChildType = w.NODE_INDEX),
							(v.valueA = 0),
							(v.valueB = 0),
							(v.valueAction = _.NODE_ACTIVE),
							(v.valueActionOpacity = 0),
							(v.valueActionColor = cc.color(155, 155, 155)),
							(v.valueComponentName = ''),
							(v.valueComponentProperty = ''),
							(v.valueComponentDefaultValue = ''),
							(v.valueComponentActionValue = ''),
							(v.watchNodes = []),
							v
						)
					}
					return (
						__extends(t, f),
						(t.prototype.onLoad = function () {
							f.prototype.onLoad.call(this),
								0 == this.watchNodes.length &&
									(this.valueAction !== _.NODE_ACTIVE &&
										!1 === this.foreachChildMode &&
										this.watchNodes.push(this.node),
									(this.watchNodes = this.watchNodes.concat(
										this.node.children
									))),
								this.enabled && this.onValueInit()
						}),
						(t.prototype.start = function () {}),
						(t.prototype.onValueInit = function () {
							var f = N.VM.getValue(this.watchPath)
							this.checkNodeFromValue(f)
						}),
						(t.prototype.onValueChanged = function (f, v, C) {
							this.checkNodeFromValue(f)
						}),
						(t.prototype.checkNodeFromValue = function (f) {
							var v = this
							if (this.foreachChildMode)
								this.watchNodes.forEach(function (C, b) {
									var _ =
											v.foreachChildType === w.NODE_INDEX
												? b
												: C.name,
										N = v.conditionCheck(f, _)
									v.setNodeState(C, N)
								})
							else {
								var C = this.conditionCheck(
									f,
									this.valueA,
									this.valueB
								)
								this.setNodesStates(C)
							}
						}),
						(t.prototype.setNodesStates = function (f) {
							var v = this,
								C = f
							this.watchNodes.forEach(function (f) {
								v.setNodeState(f, C)
							})
						}),
						(t.prototype.setNodeState = function (f, v) {
							var C = this.valueAction,
								b = v,
								w = _
							switch (C) {
								case w.NODE_ACTIVE:
									f.active = !!b
									break
								case w.NODE_VISIBLE:
									f.opacity = b ? 255 : 0
									break
								case w.NODE_COLOR:
									f.color = b
										? this.valueActionColor
										: cc.color(255, 255, 255)
									break
								case w.NODE_OPACITY:
									f.opacity = b
										? this.valueActionOpacity
										: 255
									break
								case w.COMPONENT_CUSTOM:
									var N = f.getComponent(
										this.valueComponentName
									)
									if (null == N) return
									this.valueComponentProperty in N &&
										(N[this.valueComponentProperty] = b
											? this.valueComponentActionValue
											: this.valueComponentDefaultValue)
							}
						}),
						(t.prototype.conditionCheck = function (f, v, C) {
							var _ = b
							switch (this.condition) {
								case _['==']:
									if (f == v) return !0
									break
								case _['!=']:
									if (f != v) return !0
									break
								case _['<']:
									if (f < v) return !0
									break
								case _['>']:
									if (f > v) return !0
									break
								case _['>=']:
									if (f >= v) return !0
									break
								case _['<']:
									if (f < v) return !0
									break
								case _['<=']:
									if (f <= v) return !0
									break
								case _.range:
									if (f >= v && f <= C) return !0
							}
							return !1
						}),
						__decorate([S], t.prototype, 'watchPath', void 0),
						__decorate(
							[
								S({
									tooltip:
										'遍历子节点,根据子节点的名字或名字转换为值，判断值满足条件 来激活',
								}),
							],
							t.prototype,
							'foreachChildMode',
							void 0
						),
						__decorate(
							[S({ type: cc.Enum(b) })],
							t.prototype,
							'condition',
							void 0
						),
						__decorate(
							[
								S({
									type: cc.Enum(w),
									tooltip:
										'遍历子节点,根据子节点的名字转换为值，判断值满足条件 来激活',
									visible: function () {
										return !0 === this.foreachChildMode
									},
								}),
							],
							t.prototype,
							'foreachChildType',
							void 0
						),
						__decorate(
							[
								S({
									displayName: 'Value: a',
									visible: function () {
										return !1 === this.foreachChildMode
									},
								}),
							],
							t.prototype,
							'valueA',
							void 0
						),
						__decorate(
							[
								S({
									displayName: 'Value: b',
									visible: function () {
										return (
											!1 === this.foreachChildMode &&
											this.condition === b.range
										)
									},
								}),
							],
							t.prototype,
							'valueB',
							void 0
						),
						__decorate(
							[
								S({
									type: cc.Enum(_),
									tooltip: '一旦满足条件就对节点执行操作',
								}),
							],
							t.prototype,
							'valueAction',
							void 0
						),
						__decorate(
							[
								S({
									visible: function () {
										return (
											this.valueAction === _.NODE_OPACITY
										)
									},
									range: [0, 255],
									type: cc.Integer,
									displayName: 'Action Opacity',
								}),
							],
							t.prototype,
							'valueActionOpacity',
							void 0
						),
						__decorate(
							[
								S({
									visible: function () {
										return this.valueAction === _.NODE_COLOR
									},
									displayName: 'Action Color',
								}),
							],
							t.prototype,
							'valueActionColor',
							void 0
						),
						__decorate(
							[
								S({
									visible: function () {
										return (
											this.valueAction ===
											_.COMPONENT_CUSTOM
										)
									},
									displayName: 'Component Name',
								}),
							],
							t.prototype,
							'valueComponentName',
							void 0
						),
						__decorate(
							[
								S({
									visible: function () {
										return (
											this.valueAction ===
											_.COMPONENT_CUSTOM
										)
									},
									displayName: 'Component Property',
								}),
							],
							t.prototype,
							'valueComponentProperty',
							void 0
						),
						__decorate(
							[
								S({
									visible: function () {
										return (
											this.valueAction ===
											_.COMPONENT_CUSTOM
										)
									},
									displayName: 'Default Value',
								}),
							],
							t.prototype,
							'valueComponentDefaultValue',
							void 0
						),
						__decorate(
							[
								S({
									visible: function () {
										return (
											this.valueAction ===
											_.COMPONENT_CUSTOM
										)
									},
									displayName: 'Action Value',
								}),
							],
							t.prototype,
							'valueComponentActionValue',
							void 0
						),
						__decorate(
							[
								S({
									type: [cc.Node],
									tooltip:
										'需要执行条件的节点，如果不填写则默认会执行本节点以及本节点的所有子节点 的状态',
								}),
							],
							t.prototype,
							'watchNodes',
							void 0
						),
						__decorate(
							[B, M('ModelViewer/VM-State (VM状态控制)')],
							t
						)
					)
				})(k.default)
				;(C.default = I), cc._RF.pop()
			},
			{ './VMBase': 'VMBase', './ViewModel': 'ViewModel' },
		],
		ViewModel: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '54f75k4X+RP0qaXOzrfZysL', 'ViewModel'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				var b = f('./JsonOb'),
					_ = 'VC:'
				function o(f, v, C, b) {
					void 0 === b && (b = '')
					for (var _ = v.split('.'), w = 0; w < _.length; w++) {
						var N = _[w]
						if (N in f == 0) {
							console.error(
								'[' + N + '] not find in ' + b + '.' + v
							)
							break
						}
						w == _.length - 1 ? (f[N] = C) : (f = f[N])
					}
				}
				function l(f, v, C, b) {
					void 0 === b && (b = '')
					for (var _ = v.split('.'), w = 0; w < _.length; w++) {
						var N = _[w]
						if (N in f == 0)
							return (
								console.error(
									'[' + N + '] not find in ' + b + '.' + v
								),
								C
							)
						f = f[N]
					}
					return null != f || (f = C), f
				}
				var w = (function () {
						function e(f, v) {
							;(this._tag = null),
								(this.active = !0),
								(this.emitToRootPath = !1),
								new b.JsonOb(f, this._callback.bind(this)),
								(this.$data = f),
								(this._tag = v)
						}
						return (
							(e.prototype._callback = function (f, v, C) {
								if (1 == this.active) {
									var b = _ + this._tag + '.' + C.join('.')
									if (
										(cc.director.emit(
											b,
											f,
											v,
											[this._tag].concat(C)
										),
										this.emitToRootPath &&
											cc.director.emit(
												_ + this._tag,
												f,
												v,
												C
											),
										C.length >= 2)
									)
										for (var w = 0; w < C.length - 1; w++)
											C[w]
								}
							}),
							(e.prototype.setValue = function (f, v) {
								o(this.$data, f, v, this._tag)
							}),
							(e.prototype.getValue = function (f, v) {
								return l(this.$data, f, v, this._tag)
							}),
							e
						)
					})(),
					N = (function () {
						function e() {
							;(this._mvs = []),
								(this.EMIT_HEAD = _),
								(this.setObjValue = o),
								(this.getObjValue = l)
						}
						return (
							(e.prototype.add = function (f, v, C) {
								void 0 === v && (v = 'global'),
									void 0 === C && (C = !1)
								var b = new w(f, v),
									_ = this._mvs.find(function (f) {
										return f.tag === v
									})
								v.includes('.')
									? console.error('cant write . in tag:', v)
									: _
									? console.error('already set VM tag:' + v)
									: ((b.emitToRootPath = C),
									  this._mvs.push({ tag: v, vm: b }))
							}),
							(e.prototype.remove = function (f) {
								var v = this._mvs.findIndex(function (v) {
									return v.tag === f
								})
								v >= 0 && this._mvs.splice(v, 1)
							}),
							(e.prototype.get = function (f) {
								var v = this._mvs.find(function (v) {
									return v.tag === f
								})
								if (null != v) return v.vm
								console.error('cant find VM from:', f)
							}),
							(e.prototype.addValue = function (f, v) {
								var C = (f = f.trim()).split('.')
								C.length < 2 &&
									console.error('Cant find path:' + f)
								var b = this.get(C[0])
								if (b) {
									var _ = C.slice(1).join('.')
									b.setValue(_, b.getValue(_) + v)
								} else console.error('Cant Set VM:' + C[0])
							}),
							(e.prototype.getValue = function (f, v) {
								var C = (f = f.trim()).split('.')
								if (C.length < 2)
									console.error(
										'Get Value Cant find path:' + f
									)
								else {
									var b = this.get(C[0])
									if (b)
										return b.getValue(
											C.slice(1).join('.'),
											v
										)
									console.error('Cant Get VM:' + C[0])
								}
							}),
							(e.prototype.setValue = function (f, v) {
								var C = (f = f.trim()).split('.')
								if (C.length < 2)
									console.error(
										'Set Value Cant find path:' + f
									)
								else {
									var b = this.get(C[0])
									b
										? b.setValue(C.slice(1).join('.'), v)
										: console.error('Cant Set VM:' + C[0])
								}
							}),
							(e.prototype.bindPath = function (f, v, C, b) {
								'' != (f = f.trim())
									? '*' !== f.split('.')[0]
										? cc.director.on(_ + f, v, C, b)
										: console.error(
												f,
												'路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本'
										  )
									: console.error(
											C.node.name,
											'节点绑定的路径为空'
									  )
							}),
							(e.prototype.unbindPath = function (f, v, C) {
								'*' !== (f = f.trim()).split('.')[0]
									? cc.director.off(_ + f, v, C)
									: console.error(
											f,
											'路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本'
									  )
							}),
							(e.prototype.inactive = function () {
								this._mvs.forEach(function (f) {
									f.vm.active = !1
								})
							}),
							(e.prototype.active = function () {
								this._mvs.forEach(function (f) {
									f.vm.active = !0
								})
							}),
							e
						)
					})()
				;(C.VM = new N()), cc._RF.pop()
			},
			{ './JsonOb': 'JsonOb' },
		],
		WorkmateChange: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '3d92aFUqBlPqo0+LLZC14Mw', 'WorkmateChange')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {
						workmateItem: cc.Prefab,
						cpNode: cc.Prefab,
						discription: cc.Prefab,
					},
					onLoad: function () {
						;(this.content = this.node
							.getChildByName('di')
							.getChildByName('down_content')
							.getChildByName('scrollview')
							.getChildByName('content')),
							(this.upShow = this.node
								.getChildByName('di')
								.getChildByName('up_content')
								.getChildByName('icon_have'))
					},
					start: function () {
						this.resetUI(),
							this.node.getChildByName('bg').on(
								cc.Node.EventType.TOUCH_END,
								function (f) {
									f.stopPropagation(),
										this.disNode &&
											(this.disNode.destroy(),
											(this.disNode = null))
								},
								this
							)
					},
					resetUI: function () {
						var f = this
						this.content.removeAllChildren()
						for (
							var v = 0,
								i = function (C) {
									var _ = cc.myself.workmateList[C],
										w = b.workmateConf[_.id]
									if (_.wear) {
										v++
										var N = f.upShow.getChildByName(
											'workmate_' + v
										)
										;(N.getChildByName('star').active = !0),
											(N.getChildByName(
												'icon'
											).active = !0),
											(N.getChildByName(
												'spine'
											).active = !0)
										for (var k = 1; k < 4; k++)
											N.getChildByName(
												'star'
											).getChildByName(
												'star_' + k
											).active = _.star >= k
										cc.myself.asyncShowImage(
											N.getComponent(cc.Sprite),
											'ui/workmate/shouhuzhe_' +
												b.gameSetting
													.equipQualityIconColor[
													w.quality - 1
												]
										),
											cc.loader.loadRes(
												'spine/' +
													b.gameSetting
														.workmateSpineName[
														w.type1
													],
												sp.SkeletonData,
												function (f, v) {
													;(N.getChildByName(
														'spine'
													).getComponent(
														sp.Skeleton
													).skeletonData = v),
														N.getChildByName(
															'spine'
														)
															.getComponent(
																sp.Skeleton
															)
															.setAnimation(
																1,
																'zheng_stand',
																!0
															),
														N.getChildByName(
															'spine'
														)
															.getComponent(
																sp.Skeleton
															)
															.setSkin(
																_.star +
																	'_' +
																	b
																		.gameSetting
																		.workmateSpineName[
																		w.type2
																	]
															)
												}.bind(f)
											),
											(N.getComponent(
												cc.Button
											).clickEvents[0].customEventData =
												_.guid)
									} else {
										for (
											var L = cc.instantiate(
													f.workmateItem
												),
												B = 1;
											B < 4;
											B++
										)
											L.getChildByName(
												'star'
											).getChildByName(
												'star_' + B
											).active = _.star >= B
										cc.myself.asyncShowImage(
											L.getChildByName(
												'icon_di'
											).getComponent(cc.Sprite),
											'ui/workmate/shouhuzhe_' +
												b.gameSetting
													.equipQualityIconColor[
													w.quality - 1
												]
										),
											cc.loader.loadRes(
												'spine/' +
													b.gameSetting
														.workmateSpineName[
														w.type1
													],
												sp.SkeletonData,
												function (f, v) {
													;(L.getChildByName(
														'spine'
													).getComponent(
														sp.Skeleton
													).skeletonData = v),
														L.getChildByName(
															'spine'
														)
															.getComponent(
																sp.Skeleton
															)
															.setAnimation(
																1,
																'zheng_stand',
																!0
															),
														L.getChildByName(
															'spine'
														)
															.getComponent(
																sp.Skeleton
															)
															.setSkin(
																_.star +
																	'_' +
																	b
																		.gameSetting
																		.workmateSpineName[
																		w.type2
																	]
															)
												}.bind(f)
											)
										var S = L.getComponent(cc.Button)
											.clickEvents[0]
										;(S.target = f.node),
											(S.component = 'WorkmateChange'),
											(S.handler = 'wear'),
											(S.customEventData = _.guid),
											f.content.addChild(L)
									}
								},
								C = 0;
							C < cc.myself.workmateList.length;
							C++
						)
							i(C)
						this.wearNum = v
						for (var _ = this.wearNum + 1; _ < 6; _++) {
							var w = this.upShow.getChildByName('workmate_' + _)
							;(w.getChildByName('star').active = !1),
								(w.getChildByName('icon').active = !1),
								(w.getChildByName('spine').active = !1),
								cc.myself.asyncShowImage(
									w.getComponent(cc.Sprite),
									'ui/workmate/kongkuang'
								),
								cc.myself.asyncShowImage(
									w
										.getChildByName('icon')
										.getComponent(cc.Sprite),
									''
								),
								(w.getComponent(
									cc.Button
								).clickEvents[0].customEventData = 0)
						}
						this.resetCpUI()
					},
					resetCpUI: function () {
						var f = this.node
							.getChildByName('di')
							.getChildByName('up_content')
							.getChildByName('scrollview')
							.getChildByName('content')
						f.removeAllChildren()
						var v = cc.myself.getWorkmateCp()
						for (var C in v) {
							var _ = cc.instantiate(this.cpNode)
							cc.myself.asyncShowImage(
								_.getChildByName('cp_1')
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								b.trammelsConf[C].icon
							),
								v[C] < b.trammelsConf[C].data.need[0] &&
									(_.getChildByName('cp_1')
										.getChildByName('condition')
										.getChildByName('bar_1')
										.getChildByName('buff1').active = !1),
								v[C] >= b.trammelsConf[C].data.need[1] &&
									(_.getChildByName('cp_1')
										.getChildByName('condition')
										.getChildByName('bar_2')
										.getChildByName('buff2').active = !0),
								(_.getChildByName('cp_1')
									.getChildByName('condition')
									.getChildByName('word')
									.getComponent(cc.Label).string =
									v[C] + '/' + b.trammelsConf[C].data.need[1])
							var w = _.getComponent(cc.Button).clickEvents[0]
							;(w.target = this.node),
								(w.component = 'WorkmateChange'),
								(w.handler = 'showDis'),
								(w.customEventData = C),
								f.addChild(_)
						}
					},
					showDis: function (f, v) {
						this.disNode &&
							(this.disNode.destroy(), (this.disNode = null))
						var C = f.target.parent.parent.parent.parent.parent,
							_ = b.trammelsConf[v].ins,
							w = f.target.parent.convertToWorldSpaceAR(
								f.target.position
							)
						;(w.x -= cc.winSize.width / 2),
							(w.y -= cc.winSize.height / 2)
						var N = null
						w.x >= 0 && (N = !0)
						var k = cc.instantiate(this.discription)
						k.getComponent('Discription').init({ str: _, fan: N }),
							(k.position = cc.v2(w.x, w.y + 40)),
							C.addChild(k),
							(this.disNode = k)
					},
					wear: function (f, v) {
						if (this.wearNum >= 5)
							cc.myself.tips(Lq.lang('暂无空位，请移除后再试'))
						else {
							for (
								var C, b = 0;
								b < cc.myself.workmateList.length;
								b++
							)
								if (
									cc.myself.workmateList[b].guid ==
									parseInt(v)
								) {
									C = cc.myself.workmateList[b]
									break
								}
							C
								? ((C.wear = !0), this.resetUI())
								: console.error('没找到守护者数据')
						}
					},
					unwear: function (f, v) {
						if (0 != parseInt(v)) {
							for (
								var C, b = 0;
								b < cc.myself.workmateList.length;
								b++
							)
								if (
									cc.myself.workmateList[b].guid ==
									parseInt(v)
								) {
									C = cc.myself.workmateList[b]
									break
								}
							C
								? ((C.wear = !1), this.resetUI())
								: console.error('没找到守护者数据')
						}
					},
					close: function () {
						this.node.destroy(),
							cc
								.find('Canvas')
								.getComponent('Main')
								.resetWorkmateUI(),
							cc.myself.setLocalData(
								'workmateList',
								cc.myself.workmateList
							)
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		WorkmateIns: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '6eba2xh2lNLk5xQENT0oBiv', 'WorkmateIns')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: { discription: cc.Prefab },
					start: function () {
						;(this.showDataStar = this.data.star), this.resetUI()
					},
					init: function (f) {
						;(this.data = f),
							(this.conf = b.workmateConf[this.data.id])
					},
					resetUI: function () {
						for (
							var f = this.node.getChildByName('di'),
								v = f.getChildByName('thing'),
								C = f.getChildByName('content'),
								_ = v.getChildByName('icon_workmate'),
								w = v.getChildByName('cp'),
								N = C.getChildByName('property'),
								k = 1;
							k < 4;
							k++
						)
							_.getChildByName('star').getChildByName(
								'star_' + k
							).active = this.data.star >= k
						cc.myself.asyncShowImage(
							_.getChildByName('icon_di').getComponent(cc.Sprite),
							'ui/workmate/shouhuzhe_' +
								b.gameSetting.equipQualityIconColor[
									this.conf.quality - 1
								]
						),
							cc.myself.asyncShowImage(
								w
									.getChildByName('icon_cp1')
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								b.trammelsConf[this.conf.type1].icon
							),
							cc.myself.asyncShowImage(
								w
									.getChildByName('icon_cp2')
									.getChildByName('icon')
									.getComponent(cc.Sprite),
								b.trammelsConf[this.conf.type2].icon
							),
							cc.loader.loadRes(
								'spine/' +
									b.gameSetting.workmateSpineName[
										this.conf.type1
									],
								sp.SkeletonData,
								function (f, v) {
									;(_.getChildByName('spine').getComponent(
										sp.Skeleton
									).skeletonData = v),
										_.getChildByName('spine')
											.getComponent(sp.Skeleton)
											.setAnimation(1, 'zheng_stand', !0),
										_.getChildByName('spine')
											.getComponent(sp.Skeleton)
											.setSkin(
												this.data.star +
													'_' +
													b.gameSetting
														.workmateSpineName[
														this.conf.type2
													]
											)
								}.bind(this)
							),
							(v
								.getChildByName('name')
								.getChildByName('name_word').color = cc.color(
								[
									'#FFFFFF',
									'#6caf0a',
									'#08abff',
									'#c937ff',
									'#ff4200',
								][this.conf.quality - 1]
							)),
							(v
								.getChildByName('name')
								.getChildByName('name_word')
								.getComponent(
									cc.Label
								).string = this.conf.name),
							(N.getChildByName('attack')
								.getChildByName('num_attack')
								.getComponent(cc.Label).string = (
								this.conf.atk *
								Math.pow(2, this.showDataStar - 1) *
								(1 +
									b.tfConf[8].default +
									b.tfConf[8].add * (cc.myself.tfList[8] - 1))
							).toFixed(2)),
							(N.getChildByName('aspd')
								.getChildByName('num_aspd')
								.getComponent(cc.Label).string = (
								this.conf.spe *
								Math.pow(1.2, this.showDataStar - 1)
							).toFixed(2))
						for (var L = 1; L < 4; L++) {
							var B = C.getChildByName('taps').getChildByName(
								'tap' + L
							)
							;(B.getChildByName('choose').active =
								L == this.showDataStar),
								(B.getChildByName('no').active =
									L != this.showDataStar)
						}
					},
					changeData: function (f, v) {
						parseInt(v) != this.showDataStar &&
							((this.showDataStar = parseInt(v)), this.resetUI())
					},
					showWorkmateDis: function (f, v) {
						this.disNode &&
							(this.disNode.destroy(), (this.disNode = null))
						var C = b.trammelsConf[this.conf[v]].ins,
							_ = f.target.parent.convertToWorldSpaceAR(
								f.target.position
							)
						;(_.x -= cc.winSize.width / 2),
							(_.y -= cc.winSize.height / 2)
						var w = null
						_.x >= 0 && (w = !0)
						var N = cc.instantiate(this.discription)
						N.getComponent('Discription').init({ str: C, fan: w }),
							(N.position = cc.v2(_.x, _.y + 40)),
							this.node.addChild(N),
							(this.disNode = N)
					},
					close: function () {
						this.node.destroy()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		WorkmateMixSuccess: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '87a13Hm1HZMQ5hPKPXVW79M', 'WorkmateMixSuccess')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: {},
					start: function () {
						cc.myself.scaleToShow(this.node)
					},
					init: function (f) {
						var v = this
						this.data = f
						for (
							var i = function (C) {
									var _ = b.workmateConf[f[C].id],
										w = cc.instantiate(
											v.node.getChildByName('itemNode')
										)
									cc.myself.asyncShowImage(
										w
											.getChildByName('iconbg')
											.getComponent(cc.Sprite),
										'ui/equip/zhuangbei_' +
											b.gameSetting.equipQualityIconColor[
												_.quality - 1
											] +
											'1'
									),
										cc.loader.loadRes(
											'spine/' +
												b.gameSetting.workmateSpineName[
													_.type1
												],
											sp.SkeletonData,
											function (v, N) {
												;(w
													.getChildByName('spine')
													.getComponent(
														sp.Skeleton
													).skeletonData = N),
													w
														.getChildByName('spine')
														.getComponent(
															sp.Skeleton
														)
														.setAnimation(
															1,
															'zheng_stand',
															!0
														),
													w
														.getChildByName('spine')
														.getComponent(
															sp.Skeleton
														)
														.setSkin(
															f[C].star +
																'_' +
																b.gameSetting
																	.workmateSpineName[
																	_.type2
																]
														)
											}.bind(v)
										),
										(w
											.getChildByName('name')
											.getComponent(cc.Label).string =
											_.name)
									for (var N = 1; N < 4; N++)
										w
											.getChildByName('star')
											.getChildByName(
												'star_' + N
											).active = f[C].star >= N
									v.node
										.getChildByName('scrollview')
										.getChildByName('content')
										.addChild(w)
								},
								C = 0;
							C < f.length;
							C++
						)
							i(C)
					},
					close: function () {
						this.node.destroy(),
							(cc
								.find('Canvas')
								.getComponent('Main').createWorkmatePageNum = 0)
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		WorkmateMix: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '3494aiez55Gm62GlLbr8f5+', 'WorkmateMix')
				var b = f('Config')
				cc.Class({
					extends: cc.Component,
					properties: { workmateItem: cc.Prefab },
					start: function () {
						var f = this,
							v = this.node.getChildByName('di'),
							C = v.getChildByName('up_content'),
							b = v.getChildByName('down_content')
						;(this.content = b
							.getChildByName('scrollview')
							.getChildByName('content')),
							(this.coinLabel = C.getChildByName(
								'coin'
							).getChildByName('num')),
							(this.showIcon = C.getChildByName('icon')),
							(this.showList = []),
							this.resetUI(),
							(this.isMixing = !1),
							(this.mixSpine = C.getChildByName('spine')),
							this.mixSpine
								.getComponent('sp.Skeleton')
								.setCompleteListener(function (v, C) {
									f.mixSpine.active = !1
								})
					},
					checkInShowList: function (f) {
						for (var v = !1, C = 0; C < this.showList.length; C++)
							if (f == this.showList[C]) {
								v = !0
								break
							}
						return v
					},
					resetUI: function () {
						var f = this
						if (
							(this.content.removeAllChildren(),
							this.showList.length > 0)
						) {
							for (
								var v, C, _ = 0;
								_ < cc.myself.workmateList.length;
								_++
							)
								if (
									cc.myself.workmateList[_].guid ==
									this.showList[0]
								) {
									;(v = cc.myself.workmateList[_].id),
										(C = cc.myself.workmateList[_].star)
									break
								}
							if (!v)
								return void console.error(
									'没找到第一个选中的守护者的id'
								)
							for (
								var o = function (_) {
										var w = cc.myself.workmateList[_],
											N = b.workmateConf[w.id]
										if (
											w.star < 3 &&
											w.id == v &&
											w.star == C &&
											!f.checkInShowList(w.guid)
										) {
											for (
												var k = cc.instantiate(
														f.workmateItem
													),
													L = 1;
												L < 4;
												L++
											)
												k
													.getChildByName('star')
													.getChildByName(
														'star_' + L
													).active = w.star >= L
											cc.myself.asyncShowImage(
												k
													.getChildByName('icon_di')
													.getComponent(cc.Sprite),
												'ui/workmate/shouhuzhe_' +
													b.gameSetting
														.equipQualityIconColor[
														N.quality - 1
													]
											),
												cc.loader.loadRes(
													'spine/' +
														b.gameSetting
															.workmateSpineName[
															N.type1
														],
													sp.SkeletonData,
													function (f, v) {
														;(k
															.getChildByName(
																'spine'
															)
															.getComponent(
																sp.Skeleton
															).skeletonData = v),
															k
																.getChildByName(
																	'spine'
																)
																.getComponent(
																	sp.Skeleton
																)
																.setAnimation(
																	1,
																	'zheng_stand',
																	!0
																),
															k
																.getChildByName(
																	'spine'
																)
																.getComponent(
																	sp.Skeleton
																)
																.setSkin(
																	w.star +
																		'_' +
																		b
																			.gameSetting
																			.workmateSpineName[
																			N
																				.type2
																		]
																)
													}.bind(f)
												),
												f.content.addChild(k)
											var B = k.getComponent(cc.Button)
												.clickEvents[0]
											;(B.target = f.node),
												(B.component = 'WorkmateMix'),
												(B.handler = 'choose'),
												(B.customEventData = w.guid)
										}
									},
									w = 0;
								w < cc.myself.workmateList.length;
								w++
							)
								o(w)
						} else {
							for (
								var N = {}, k = 0;
								k < cc.myself.workmateList.length;
								k++
							) {
								var L = cc.myself.workmateList[k],
									B = L.id,
									S = L.star
								if (S < 3) {
									var M = B + '_' + S
									N[M] ? N[M]++ : (N[M] = 1)
								}
							}
							var I = []
							for (var x in N)
								if (N[x] >= 3)
									for (
										var q = 0;
										q < Math.floor(N[x] / 3);
										q++
									)
										I.push(x)
							this.mixList = I
							for (
								var y = function (v) {
										for (
											var C = I[v].split('_'),
												_ = parseInt(C[0]),
												w = parseInt(C[1]),
												N = b.workmateConf[_],
												k = cc.instantiate(
													f.workmateItem
												),
												L = 1;
											L < 4;
											L++
										)
											k
												.getChildByName('star')
												.getChildByName(
													'star_' + L
												).active = w >= L
										cc.myself.asyncShowImage(
											k
												.getChildByName('icon_di')
												.getComponent(cc.Sprite),
											'ui/workmate/shouhuzhe_' +
												b.gameSetting
													.equipQualityIconColor[
													N.quality - 1
												]
										),
											cc.loader.loadRes(
												'spine/' +
													b.gameSetting
														.workmateSpineName[
														N.type1
													],
												sp.SkeletonData,
												function (f, v) {
													;(k
														.getChildByName('spine')
														.getComponent(
															sp.Skeleton
														).skeletonData = v),
														k
															.getChildByName(
																'spine'
															)
															.getComponent(
																sp.Skeleton
															)
															.setAnimation(
																1,
																'zheng_stand',
																!0
															),
														k
															.getChildByName(
																'spine'
															)
															.getComponent(
																sp.Skeleton
															)
															.setSkin(
																w +
																	'_' +
																	b
																		.gameSetting
																		.workmateSpineName[
																		N.type2
																	]
															)
												}.bind(f)
											),
											f.content.addChild(k)
									},
									P = 0;
								P < I.length;
								P++
							)
								y(P)
						}
						for (var A = 1; A < 4; A++) {
							var T = this.showIcon.getChildByName(
								'kongicon_' + A
							)
							if (A > this.showList.length)
								cc.myself.asyncShowImage(
									T.getComponent(cc.Sprite),
									'ui/workmate/kongicon'
								),
									cc.myself.asyncShowImage(
										T.getChildByName('icon').getComponent(
											cc.Sprite
										),
										''
									)
							else {
								var D = cc.myself.getWorkMateDataByGUID(
										this.showList[A - 1]
									),
									R = b.workmateConf[D.id]
								cc.myself.asyncShowImage(
									T.getComponent(cc.Sprite),
									'ui/equip/zhuangbei_' +
										b.gameSetting.equipQualityIconColor[
											R.quality - 1
										] +
										'2'
								),
									cc.myself.asyncShowImage(
										T.getChildByName('icon').getComponent(
											cc.Sprite
										),
										R.icon
									)
							}
						}
					},
					choose: function (f, v) {
						this.showList.length >= 3
							? cc.myself.tips(Lq.lang('不能放超过3个守护者'))
							: (this.showList.push(parseInt(v)),
							  this.resetUI(),
							  (this.showIcon
									.getChildByName(
										'kongicon_' + this.showList.length
									)
									.getComponent(
										cc.Button
									).clickEvents[0].customEventData = this.showList[
									this.showList.length - 1
							  ]))
					},
					unChoose: function (f, v) {
						if (
							0 != parseInt(v) &&
							!this.isMixing &&
							0 != this.showList.length
						) {
							for (var C = this.showList.length - 1; C >= 0; C--)
								if (parseInt(v) == this.showList[C]) {
									this.showList.splice(C, 1)
									break
								}
							this.resetUI()
							for (var b = 1; b < 4; b++) {
								var _ = this.showIcon
									.getChildByName('kongicon_' + b)
									.getComponent(cc.Button).clickEvents[0]
								b > this.showList.length
									? (_.customEventData = 0)
									: (_.customEventData = this.showList[b - 1])
							}
						}
					},
					mixAction: function () {
						this.isMixing ||
							(0 != this.mixList.length
								? ((this.isMixing = !0),
								  (this.mixSpine.active = !0),
								  this.mixSpine
										.getComponent('sp.Skeleton')
										.setAnimation(
											1,
											'zhuangbeihecheng',
											!1
										),
								  this.node.runAction(
										cc.sequence(
											cc.delayTime(0.9),
											cc.callFunc(
												function () {
													this.mix()
												}.bind(this)
											)
										)
								  ))
								: cc.myself.tips(Lq.lang('没有可以合成的装备')))
					},
					mix: function () {
						for (var f = [], v = 0; v < this.mixList.length; v++) {
							for (
								var C = !1,
									b = this.mixList[v].split('_'),
									_ = parseInt(b[0]),
									w = parseInt(b[1]),
									N = 0;
								N < 3;
								N++
							)
								for (
									var k = cc.myself.workmateList.length - 1;
									k >= 0;
									k--
								) {
									var L = cc.myself.workmateList[k]
									if (L.id == _ && L.star == w) {
										L.wear && (C = !0),
											cc.myself.workmateList.splice(k, 1)
										break
									}
								}
							var B = {
								id: _,
								wear: C,
								star: w + 1,
								guid: cc.myself.workmateGUID + 1,
							}
							cc.myself.workmateList.push(B)
							var S = {
								id: _,
								wear: C,
								star: w + 1,
								guid: cc.myself.workmateGUID + 1,
							}
							f.push(S), (cc.myself.workmateGUID += 1)
						}
						this.showList = []
						for (var M = 1; M < 4; M++)
							this.showIcon
								.getChildByName('kongicon_' + M)
								.getComponent(
									cc.Button
								).clickEvents[0].customEventData = 0
						this.resetUI(),
							cc.myself.setLocalData(
								'workmateGUID',
								cc.myself.workmateGUID
							),
							cc.myself.setLocalData(
								'workmateList',
								cc.myself.workmateList
							),
							cc.myself.showPre('pre/workmateMixSuccess', {
								jname: 'WorkmateMixSuccess',
								data: f,
							}),
							(this.isMixing = !1)
					},
					close: function () {
						this.node.destroy(),
							(cc
								.find('Canvas')
								.getComponent(
									'Main'
								).createWorkmatePageNum = 0),
							cc
								.find('Canvas')
								.getComponent('Main')
								.resetWorkmateUI()
					},
				}),
					cc._RF.pop()
			},
			{ Config: 'Config' },
		],
		i18n_BuildScene: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'aba16KWBBhOFom+JNFVJCDv', 'i18n_BuildScene')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null)
					}
					onLoad() {
						_.default.lang(
							'导出',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'导入：',
								this.label_2.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '导出' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '导入：' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../platforms/pfLq': 'pfLq' },
		],
		i18n_GameScene: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'cdd21BPbvtCNJ4ysxMnGjhK', 'i18n_GameScene')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.label_6 = null),
							(this.label_7 = null),
							(this.label_8 = null),
							(this.label_9 = null),
							(this.label_10 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'返回主界面',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'点击任意区域继续',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'世界1',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'200层',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'超越了             的玩家',
								this.label_5.getComponent(cc.Label)
							),
							_.default.lang(
								'战利品',
								this.label_6.getComponent(cc.Label)
							),
							_.default.lang(
								'勇士！请继续前进吧！',
								this.label_7.getComponent(cc.Label)
							),
							_.default.lang(
								'继续',
								this.label_8.getComponent(cc.Label)
							),
							_.default.lang(
								'放弃',
								this.label_9.getComponent(cc.Label)
							),
							_.default.lang(
								'过场动画中...',
								this.label_10.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '返回主界面' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '点击任意区域继续' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '世界1' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '200层' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[
							N({
								type: cc.Node,
								tooltip: '超越了             的玩家',
							}),
						],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '战利品' })],
						k.prototype,
						'label_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '勇士！请继续前进吧！' })],
						k.prototype,
						'label_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '继续' })],
						k.prototype,
						'label_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '放弃' })],
						k.prototype,
						'label_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '过场动画中...' })],
						k.prototype,
						'label_10',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../platforms/pfLq': 'pfLq' },
		],
		i18n_LoadingScene: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'f2390zpeBxCSLQOJUwQPwa+', 'i18n_LoadingScene')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null)
					}
					onLoad() {
						_.default.lang(
							'游戏提示',
							this.label_1.getComponent(cc.Label)
						)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '游戏提示' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../platforms/pfLq': 'pfLq' },
		],
		i18n_MainScene: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '94a02wdXT5FqZbcMp3LUbNu', 'i18n_MainScene')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.label_6 = null),
							(this.label_7 = null),
							(this.label_8 = null),
							(this.label_9 = null),
							(this.label_10 = null),
							(this.label_11 = null),
							(this.label_12 = null),
							(this.label_13 = null),
							(this.label_14 = null),
							(this.label_15 = null),
							(this.label_16 = null),
							(this.label_17 = null),
							(this.label_18 = null),
							(this.label_19 = null),
							(this.label_20 = null),
							(this.label_21 = null),
							(this.label_22 = null),
							(this.label_23 = null),
							(this.label_24 = null),
							(this.label_25 = null),
							(this.label_26 = null),
							(this.label_27 = null),
							(this.label_28 = null),
							(this.label_29 = null),
							(this.label_30 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'免费宝箱',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'免费宝箱',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'领取',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'黄金宝箱',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'黄金宝箱',
								this.label_5.getComponent(cc.Label)
							),
							_.default.lang(
								'领取',
								this.label_6.getComponent(cc.Label)
							),
							_.default.lang(
								'地图1',
								this.label_7.getComponent(cc.Label)
							),
							_.default.lang(
								'最高层数：18/50',
								this.label_8.getComponent(cc.Label)
							),
							_.default.lang(
								'开始游戏',
								this.label_9.getComponent(cc.Label)
							),
							_.default.lang(
								'天赋可永久提升角色战斗力！',
								this.label_10.getComponent(cc.Label)
							),
							_.default.lang(
								'立即升级',
								this.label_11.getComponent(cc.Label)
							),
							_.default.lang(
								'达到35级后，可继续升级',
								this.label_12.getComponent(cc.Label)
							),
							_.default.lang(
								'健壮',
								this.label_13.getComponent(cc.Label)
							),
							_.default.lang(
								'力量',
								this.label_14.getComponent(cc.Label)
							),
							_.default.lang(
								'恢复',
								this.label_15.getComponent(cc.Label)
							),
							_.default.lang(
								'铁壁',
								this.label_16.getComponent(cc.Label)
							),
							_.default.lang(
								'敏捷',
								this.label_17.getComponent(cc.Label)
							),
							_.default.lang(
								'鼓舞',
								this.label_18.getComponent(cc.Label)
							),
							_.default.lang(
								'装备增强',
								this.label_19.getComponent(cc.Label)
							),
							_.default.lang(
								'时间收益',
								this.label_20.getComponent(cc.Label)
							),
							_.default.lang(
								'荣耀',
								this.label_21.getComponent(cc.Label)
							),
							_.default.lang(
								'合 成',
								this.label_22.getComponent(cc.Label)
							),
							_.default.lang(
								'熔 炼',
								this.label_23.getComponent(cc.Label)
							),
							_.default.lang(
								'攻击',
								this.label_24.getComponent(cc.Label)
							),
							_.default.lang(
								'生命',
								this.label_25.getComponent(cc.Label)
							),
							_.default.lang(
								'武器',
								this.label_26.getComponent(cc.Label)
							),
							_.default.lang(
								'卷轴',
								this.label_27.getComponent(cc.Label)
							),
							_.default.lang(
								'衣服',
								this.label_28.getComponent(cc.Label)
							),
							_.default.lang(
								'合成',
								this.label_29.getComponent(cc.Label)
							),
							_.default.lang(
								'更换',
								this.label_30.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '免费宝箱' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '免费宝箱' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '领取' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '黄金宝箱' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '黄金宝箱' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '领取' })],
						k.prototype,
						'label_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '地图1' })],
						k.prototype,
						'label_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '最高层数：18/50' })],
						k.prototype,
						'label_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '开始游戏' })],
						k.prototype,
						'label_9',
						void 0
					),
					b(
						[
							N({
								type: cc.Node,
								tooltip: '天赋可永久提升角色战斗力！',
							}),
						],
						k.prototype,
						'label_10',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '立即升级' })],
						k.prototype,
						'label_11',
						void 0
					),
					b(
						[
							N({
								type: cc.Node,
								tooltip: '达到35级后，可继续升级',
							}),
						],
						k.prototype,
						'label_12',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '健壮' })],
						k.prototype,
						'label_13',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '力量' })],
						k.prototype,
						'label_14',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '恢复' })],
						k.prototype,
						'label_15',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '铁壁' })],
						k.prototype,
						'label_16',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '敏捷' })],
						k.prototype,
						'label_17',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '鼓舞' })],
						k.prototype,
						'label_18',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '装备增强' })],
						k.prototype,
						'label_19',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '时间收益' })],
						k.prototype,
						'label_20',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '荣耀' })],
						k.prototype,
						'label_21',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '合 成' })],
						k.prototype,
						'label_22',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '熔 炼' })],
						k.prototype,
						'label_23',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '攻击' })],
						k.prototype,
						'label_24',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '生命' })],
						k.prototype,
						'label_25',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '武器' })],
						k.prototype,
						'label_26',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '卷轴' })],
						k.prototype,
						'label_27',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '衣服' })],
						k.prototype,
						'label_28',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '合成' })],
						k.prototype,
						'label_29',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '更换' })],
						k.prototype,
						'label_30',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../platforms/pfLq': 'pfLq' },
		],
		i18n_boxReward: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'ed67dVSwe5EMawYYqhCcz3t', 'i18n_boxReward')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(), (this.label_1 = null), (this.img_1 = null)
					}
					onLoad() {
						_.default.lang(
							'点击任意区域继续',
							this.label_1.getComponent(cc.Label)
						)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '点击任意区域继续' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_box: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '63e70JM2wJIOI7YmcOM3vQV', 'i18n_box')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'购买宝箱',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'获得',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'今日剩余次数',
								this.label_3.getComponent(cc.Label),
								{ data: { num: 3 } }
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '购买宝箱' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '获得' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '今日剩余次数：3' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_chooseBuff: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '602cdyjjSdDCpnDL5r7xePy', 'i18n_chooseBuff')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.label_6 = null),
							(this.label_7 = null),
							(this.label_8 = null),
							(this.label_9 = null),
							(this.label_10 = null),
							(this.label_11 = null),
							(this.label_12 = null),
							(this.label_13 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'冒险升级',
							this.label_1.getComponent(cc.Label),
							{ data: { num: 2 } }
						),
							_.default.lang(
								'请选择新的能力!',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'点击技能查看详细介绍',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'关闭',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'请等待',
								this.label_5.getComponent(cc.Label)
							),
							_.default.lang(
								'选我',
								this.label_6.getComponent(cc.Label)
							),
							_.default.lang(
								'请等待',
								this.label_7.getComponent(cc.Label)
							),
							_.default.lang(
								'选我',
								this.label_8.getComponent(cc.Label)
							),
							_.default.lang(
								'请等待',
								this.label_9.getComponent(cc.Label)
							),
							_.default.lang(
								'选我',
								this.label_10.getComponent(cc.Label)
							),
							_.default.lang(
								'请等待',
								this.label_11.getComponent(cc.Label)
							),
							_.default.lang(
								'选我',
								this.label_12.getComponent(cc.Label)
							),
							_.default.lang(
								'换一批',
								this.label_13.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '本次冒险升到2级！' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '请选择新的能力!' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '点击技能查看详细介绍' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '关闭' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '请等待' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '选我' })],
						k.prototype,
						'label_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '请等待' })],
						k.prototype,
						'label_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '选我' })],
						k.prototype,
						'label_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '请等待' })],
						k.prototype,
						'label_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '选我' })],
						k.prototype,
						'label_10',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '请等待' })],
						k.prototype,
						'label_11',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '选我' })],
						k.prototype,
						'label_12',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '换一批' })],
						k.prototype,
						'label_13',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_choutiAd: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '111ddWuDCJCHJyau/gGBE/+', 'i18n_choutiAd')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.label_6 = null),
							(this.label_7 = null),
							(this.label_8 = null),
							(this.label_9 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'返回',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'猜你喜欢',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'好友在玩',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'10个好友在玩',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'10个好友在玩',
								this.label_5.getComponent(cc.Label)
							),
							_.default.lang(
								'10个好友在玩',
								this.label_6.getComponent(cc.Label)
							),
							_.default.lang(
								'10个好友在玩',
								this.label_7.getComponent(cc.Label)
							),
							_.default.lang(
								'10个好友在玩',
								this.label_8.getComponent(cc.Label)
							),
							_.default.lang(
								'10个好友在玩',
								this.label_9.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '返回' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '猜你喜欢' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '好友在玩' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '10个好友在玩' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '10个好友在玩' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '10个好友在玩' })],
						k.prototype,
						'label_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '10个好友在玩' })],
						k.prototype,
						'label_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '10个好友在玩' })],
						k.prototype,
						'label_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '10个好友在玩' })],
						k.prototype,
						'label_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_continue: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '2aa4aeshF1PEKqbadaBc87t', 'i18n_continue')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null)
					}
					onLoad() {
						_.default.lang(
							'提示',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'地图未完成',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'继续游戏',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'重新开始',
								this.label_4.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '提示' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '地图未完成' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '继续游戏' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '重新开始' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_dailyGold: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '11145dWAndDDIniqrRdEbwY', 'i18n_dailyGold')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'日常金币',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'点击领取',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'3倍领取',
								this.label_3.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '日常金币' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '点击领取' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '3倍领取' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_equipContent: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '990fahtiOtLmreB8sJKq13b', 'i18n_equipContent')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.img_1 = null),
							(this.img_2 = null)
					}
					onLoad() {
						_.default.lang(
							'武器',
							this.label_1.getComponent(cc.Label)
						)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '武器' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_equipMixReward: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '113df0N7sRO2orzkM4vpFa1', 'i18n_equipMixReward')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'额外奖励',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'领 取',
								this.label_2.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '额外奖励' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '领 取' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_equipMixSuccess: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(
					v,
					'61004z1Dz1LX62d1qkgHJkc',
					'i18n_equipMixSuccess'
				)
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null)
					}
					onLoad() {
						_.default.lang(
							'确定',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'混沌之链',
								this.label_2.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '确定' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '混沌之链' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_equipSmeltSuccess: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(
					v,
					'163f7LAu3dDl6RtL42k1s6d',
					'i18n_equipSmeltSuccess'
				)
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.img_1 = null),
							(this.img_2 = null)
					}
					onLoad() {
						_.default.lang(
							'确定',
							this.label_1.getComponent(cc.Label)
						)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '确定' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_equip_content: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '57664UxnSVBDZ2lrqGyylP6', 'i18n_equip_content')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.label_6 = null),
							(this.label_7 = null),
							(this.label_8 = null),
							(this.label_9 = null),
							(this.label_10 = null),
							(this.label_11 = null),
							(this.label_12 = null),
							(this.label_13 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'装备',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'锤子提示',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'属性：',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'攻击',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'生命',
								this.label_5.getComponent(cc.Label)
							),
							_.default.lang(
								'暴击',
								this.label_6.getComponent(cc.Label)
							),
							_.default.lang(
								'闪避',
								this.label_7.getComponent(cc.Label)
							),
							_.default.lang(
								'下一等级：',
								this.label_8.getComponent(cc.Label)
							),
							_.default.lang(
								'闯关获取',
								this.label_9.getComponent(cc.Label)
							),
							_.default.lang(
								'升级卷轴10/15',
								this.label_10.getComponent(cc.Label)
							),
							_.default.lang(
								'闯关获取',
								this.label_11.getComponent(cc.Label)
							),
							_.default.lang(
								'穿戴',
								this.label_12.getComponent(cc.Label)
							),
							_.default.lang(
								'升级',
								this.label_13.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '装备' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '锤子提示' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '属性：' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '攻击' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '生命' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '暴击' })],
						k.prototype,
						'label_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '闪避' })],
						k.prototype,
						'label_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '下一等级：' })],
						k.prototype,
						'label_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '闯关获取' })],
						k.prototype,
						'label_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '升级卷轴10/15' })],
						k.prototype,
						'label_10',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '闯关获取' })],
						k.prototype,
						'label_11',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '装备' })],
						k.prototype,
						'label_12',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '升级' })],
						k.prototype,
						'label_13',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_equip_mix: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '2d332NJWotNLIyO2tOrPE+Z', 'i18n_equip_mix')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.label_6 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'装备合成',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'选择你想合成的装备',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'合装备提示',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'一键合成',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'只显示能合成的装备',
								this.label_5.getComponent(cc.Label)
							),
							_.default.lang(
								'装备合成',
								this.label_6.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '装备合成' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '选择你想合成的装备' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '合装备提示' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '一键合成' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '只显示能合成的装备' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '装备合成' })],
						k.prototype,
						'label_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_equip_scroll: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'ccb50ghv7VAYJUmCl6MUnlN', 'i18n_equip_scroll')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null)
					}
					onLoad() {
						_.default.lang(
							'卷轴详情',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'锤子提示',
								this.label_2.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '卷轴详情' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '锤子提示' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_equip_smelt: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'c971fxW/yhAzbBo1nR7A+gY', 'i18n_equip_smelt')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.label_6 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'装备熔炼',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'一键熔炼',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'一键添加',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'白色',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'绿色',
								this.label_5.getComponent(cc.Label)
							),
							_.default.lang(
								'蓝色',
								this.label_6.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '装备熔炼' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '一键熔炼' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '一键添加' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '白色' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '绿色' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '蓝色' })],
						k.prototype,
						'label_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_gamePause: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '7b8efCTBQpEEoe5va/8R+AL', 'i18n_gamePause')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null)
					}
					onLoad() {
						_.default.lang(
							'暂停',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'已学会的能力',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'小提示：回到主页不会丢失当前游戏进度',
								this.label_3.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '暂停' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '已学会的能力' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[
							N({
								type: cc.Node,
								tooltip: '小提示：回到主页不会丢失当前游戏进度',
							}),
						],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_gold_lack: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '10523IcIRZKdY9wqR4JVq00', 'i18n_gold_lack')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'购买金币',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'获得',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'今日剩余次数',
								this.label_3.getComponent(cc.Label),
								{ data: { num: 2 } }
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '购买金币' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '获得' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '今日剩余次数：2' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_health_lack: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '8488fTfCopMNoEZuC9OnVgC', 'i18n_health_lack')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'购买体力',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'获得',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'今日剩余次数',
								this.label_3.getComponent(cc.Label),
								{ data: { num: 2 } }
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '购买体力' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '获得' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '今日剩余次数：2' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_invite: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '3ec15wWXxFJKYeDepmNJ5pk', 'i18n_invite')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'邀请玩家领钻石',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'领取',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'已领取',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'未邀请',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'邀请玩家',
								this.label_5.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '邀请玩家领钻石' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '领取' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '已领取' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '未邀请' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '邀请玩家' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_ranking: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'f8c87Zwh8xAc63+kWwjtpyu', 'i18n_ranking')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.img_1 = null),
							(this.img_2 = null)
					}
					onLoad() {
						_.default.lang(
							'排行榜',
							this.label_1.getComponent(cc.Label)
						)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '排行榜' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_showAngel: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'a4b026LyhNOeLO9j4k0Rozb', 'i18n_showAngel')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null)
					}
					onLoad() {
						_.default.lang(
							'请选择一项天使的馈赠',
							this.label_1.getComponent(cc.Label)
						)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '请选择一项天使的馈赠' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_showDemon: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'bc95cYGHRRLr5FL/S730f/k', 'i18n_showDemon')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null)
					}
					onLoad() {
						_.default.lang(
							'签订契约可获得',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'概率失去            生命上限',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'不签',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'签约',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'降低概率',
								this.label_5.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '签订契约可获得' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[
							N({
								type: cc.Node,
								tooltip: '概率失去            生命上限',
							}),
						],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '不签' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '签约' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '降低概率' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_showTurntable: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '20fdaVTr1lN1L4qRE0pID/w', 'i18n_showTurntable')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.label_6 = null),
							(this.label_7 = null),
							(this.label_8 = null),
							(this.label_9 = null),
							(this.label_10 = null),
							(this.label_11 = null),
							(this.label_12 = null),
							(this.label_13 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'60分钟',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'60分钟',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_5.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_6.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_7.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_8.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_9.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_10.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_11.getComponent(cc.Label)
							),
							_.default.lang(
								'60分钟',
								this.label_12.getComponent(cc.Label)
							),
							_.default.lang(
								'免费抽奖',
								this.label_13.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '60分钟' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_10',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_11',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '60分钟' })],
						k.prototype,
						'label_12',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '免费抽奖' })],
						k.prototype,
						'label_13',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_signIn: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'c2f3aHrAutC/Y83uZ8aQkPo', 'i18n_signIn')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'7日签到奖励',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'双倍领取',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'领取',
								this.label_3.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '7日签到奖励' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '双倍领取' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '领取' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_workmateMixSuccess: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(
					v,
					'bffb71nb4xD96SiDhA89Sx2',
					'i18n_workmateMixSuccess'
				)
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null)
					}
					onLoad() {
						_.default.lang(
							'确定',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'混沌之链',
								this.label_2.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '确定' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '混沌之链' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_workmate_change: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(
					v,
					'e229227W/5OQ69YSi6ciQLw',
					'i18n_workmate_change'
				)
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'更换守护者',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'守护者',
								this.label_2.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '更换守护者' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '守护者' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_workmate_content: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(
					v,
					'd8269dFw/xGbbySHVBn/Hb7',
					'i18n_workmate_content'
				)
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'守护者详情',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'金思聪',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'攻击',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'攻速',
								this.label_4.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '守护者详情' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '金思聪' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '攻击' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '攻速' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		i18n_workmate_mix: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'f81c8EJgx9Jc6wDTsbFqpU+', 'i18n_workmate_mix')
				var b =
					(this && this.__decorate) ||
					function (f, v, C, b) {
						var _,
							w = arguments.length,
							N =
								w < 3
									? v
									: null === b
									? (b = Object.getOwnPropertyDescriptor(
											v,
											C
									  ))
									: b
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							N = Reflect.decorate(f, v, C, b)
						else
							for (var k = f.length - 1; k >= 0; k--)
								(_ = f[k]) &&
									(N =
										(w < 3
											? _(N)
											: w > 3
											? _(v, C, N)
											: _(v, C)) || N)
						return w > 3 && N && Object.defineProperty(v, C, N), N
					}
				Object.defineProperty(C, '__esModule', { value: !0 })
				const _ = f('../../../platforms/pfLq'),
					{ ccclass: w, property: N } = cc._decorator
				let k = class extends cc.Component {
					constructor() {
						super(),
							(this.label_1 = null),
							(this.label_2 = null),
							(this.label_3 = null),
							(this.label_4 = null),
							(this.label_5 = null),
							(this.img_1 = null),
							(this.img_2 = null),
							(this.img_3 = null),
							(this.img_4 = null),
							(this.img_5 = null),
							(this.img_6 = null),
							(this.img_7 = null),
							(this.img_8 = null),
							(this.img_9 = null),
							(this.img_10 = null)
					}
					onLoad() {
						_.default.lang(
							'守护者合成',
							this.label_1.getComponent(cc.Label)
						),
							_.default.lang(
								'选择你想合成的守护者',
								this.label_2.getComponent(cc.Label)
							),
							_.default.lang(
								'合守护者提示',
								this.label_3.getComponent(cc.Label)
							),
							_.default.lang(
								'一键合成',
								this.label_4.getComponent(cc.Label)
							),
							_.default.lang(
								'守护合成',
								this.label_5.getComponent(cc.Label)
							)
					}
				}
				b(
					[N({ type: cc.Node, tooltip: '守护者合成' })],
					k.prototype,
					'label_1',
					void 0
				),
					b(
						[N({ type: cc.Node, tooltip: '选择你想合成的守护者' })],
						k.prototype,
						'label_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '合守护者提示' })],
						k.prototype,
						'label_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '一键合成' })],
						k.prototype,
						'label_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '守护合成' })],
						k.prototype,
						'label_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_1',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_2',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_3',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_4',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_5',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_6',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_7',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_8',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_9',
						void 0
					),
					b(
						[N({ type: cc.Node, tooltip: '' })],
						k.prototype,
						'img_10',
						void 0
					),
					(k = b([w], k)),
					(C.default = k),
					cc._RF.pop()
			},
			{ '../../../platforms/pfLq': 'pfLq' },
		],
		magicAtk: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'fbf80zPF0xOBrmMxrx5PT9E', 'magicAtk'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {
							var f = this
							;(this.miaozhunTime = 0.65),
								(this.delayTime = 0.15),
								(this.showTime = 0.5),
								(this.time = 0),
								(this.isOver = !1),
								this.node
									.getChildByName('icon')
									.runAction(
										cc.sequence(
											cc.fadeOut(0.5),
											cc.fadeIn(0.5),
											cc.fadeOut(0.5)
										)
									)
							var v = this.node
								.getChildByName('line')
								.getComponent('sp.Skeleton')
							v.setCompleteListener(function (C, b) {
								var _ = C.animation ? C.animation.name : ''
								'6guai_huoqiu' == _
									? (v.setAnimation(1, '6guai_zha', !1),
									  (f.node.getChildByName(
											'box'
									  ).active = !0))
									: '6guai_zha' == _ && f.node.destroy()
							})
						},
						init: function (f) {
							;(this.id = f.id),
								(this.atkPower = f.atkPower || 150)
						},
						moveLine: function () {
							var f = this.mnode,
								v = this.tnode,
								C = cc.v2(v.x, v.y).sub(cc.v2(f.x, f.y)),
								b = (180 * Math.atan2(C.y, C.x)) / Math.PI
							;(b = 360 - b + 90), (this.node.angle = b)
						},
						getAtkPower: function () {
							return this.atkPower
						},
						update: function (f) {
							cc
								.find('Canvas')
								.getComponent('Game')
								.getGameIsOver() ||
								cc
									.find('Canvas')
									.getComponent('Game')
									.getGamePause() ||
								((this.time += f),
								this.time > this.miaozhunTime &&
									(this.node.getChildByName('icon').active,
									this.time >
										this.miaozhunTime + this.delayTime &&
										(this.isOver ||
											((this.node.getChildByName(
												'icon'
											).active = !1),
											(this.node.getChildByName(
												'line'
											).active = !0),
											this.node
												.getChildByName('line')
												.getComponent('sp.Skeleton')
												.setAnimation(
													1,
													'6guai_huoqiu',
													!1
												),
											(this.isOver = !0)))))
						},
					}),
					cc._RF.pop()
			},
			{},
		],
		pfBaseInfo: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '07cfdakM1pGYIKiMp9cY11G', 'pfBaseInfo'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('./utils/Lang'),
					_ = f('./utils/JsEnhance')
				let w
				;(C.default = class {
					constructor() {
						;(this.gameName = 'mycs'),
							(this.gameid = 999),
							(this.cdnUrl = ''),
							(this.preNetSpeed = 0),
							(this.langType = 'en'),
							(this.langTypeDefault = 'cn'),
							(this._assetI18nPrefix = null),
							(this.appType = 'h5'),
							(this.isDebug = !0),
							(this.logLevel = 3),
							(this.userInfo = { uid: '' }),
							(this.time = { startLoading: 0 }),
							(this.ui = {}),
							(this.language = {}),
							(this.sys = {
								localStorage: {
									setItem: (f, v) => {
										f &&
											((f = this.prefix + f),
											cc.sys.localStorage.setItem(f, v))
									},
									getItem: (f) => {
										if (f)
											return (
												(f = this.prefix + f),
												cc.sys.localStorage.getItem(f)
											)
									},
									removeItem: (f) => {
										if (f)
											return (
												(f = this.prefix + f),
												cc.sys.localStorage.removeItem(
													f
												)
											)
									},
									clear: () => cc.sys.localStorage.clear(),
								},
							}),
							(w = this),
							(this.util = _.default),
							(this.language = b.default),
							this.initDebug(),
							this.initStorage(),
							(this.preNetSpeed = window.loadingPreSpeed || 0)
					}
					get pfName() {
						return this._pfName
					}
					get prefix() {
						if (this._prefix) return this._prefix
						let f = ''
						return (
							this._pfName && (f = this._pfName + '_'),
							(f += this.gameName + '_'),
							(this._prefix = f),
							this._prefix
						)
					}
					request(f) {
						if (
							(((f = f || {}).api = f.api || ''),
							(f.url = f.url || ''),
							'' == f.api && '' == f.url)
						)
							return console.log('apiName is need')
						let v = this.apiHost + '/' + f.api
						'' != f.url && (v = f.url)
						let C = f.data || {}
						;(C.gameid = C.gameid || this.gameid),
							(C.pfName = this._pfName),
							(C = this.parseParams(C)),
							(f.header = f.header || [
								{
									'Content-Type':
										'application/x-www-form-urlencoded',
								},
							]),
							(f.method = f.method || 'post'),
							(f.responseType = f.responseType || 'json'),
							(f.async = !1 !== f.async)
						let b = cc.loader.getXMLHttpRequest()
						b.open(f.method, v, f.async),
							f.header.forEach((f) => {
								for (let v in f) b.setRequestHeader(v, f[v])
							}),
							(b.onreadystatechange = () => {
								if (4 == b.readyState)
									if (b.status >= 200 && b.status < 400) {
										var v = b.responseText
										f.success && f.success(v)
									} else f.fail && f.fail()
							}),
							b.send(C)
					}
					init() {}
					onLaunch() {
						document && (document.title = this.lang('游戏名称'))
					}
					hideLoading() {
						let f = document.getElementById('loading-box')
						f && (f.style.display = 'none')
					}
					getUIStatus(f, v) {
						return (
							!(!f || !v) &&
							!!this.ui[f] &&
							'undefined' !== this.ui[f][v] &&
							this.ui[f][v]
						)
					}
					getUserData() {
						return (
							[
								'usePeopleId',
								'peopleData',
								'totalGold',
								'shipData',
								'keyNum',
								'useShipId',
							].forEach((f) => {}),
							{}
						)
					}
					checkScene(f) {
						let v = f.split('/').pop().split('.')[0]
						return (w.ui[v] = w.ui[v] || {}), !1 !== w.ui[v].status
					}
					parseParams(f, v, C = !0) {
						if (null == f) return ''
						let b = '',
							_ = typeof f
						if ('string' == _ || 'number' == _ || 'boolean' == _)
							b +=
								'&' +
								v +
								'=' +
								(null == C || C ? encodeURIComponent(f) : f)
						else
							for (let _ in f) {
								let w =
									null == v
										? _
										: v +
										  (f instanceof Array
												? '[' + _ + ']'
												: '.' + _)
								b += this.parseParams(f[_], w, C)
							}
						return b
					}
					createUid() {
						return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
							/[xy]/g,
							function (f) {
								var v = (16 * Math.random()) | 0
								return ('x' == f ? v : (3 & v) | 8).toString(16)
							}
						)
					}
					initDebug() {
						var f = { log: 1, debug: 2, info: 3, warn: 4, error: 5 }
						if (!this.isDebug)
							for (let v in f) {
								if (f[v] > this.logLevel) break
								console[v] = () => {}
							}
					}
					replaceStr(f, v) {
						return f.replace(/\$\w+\$/gi, function (f) {
							var C = v[f.replace(/\$/g, '')]
							return C + '' == 'undefined' ? '' : C
						})
					}
					lang(f, v, C) {
						if (
							(v && !C && 'data' in v && ((C = v), (v = null)),
							(C = C || {}),
							!this.language[f] ||
								!this.language[f][this.langType])
						)
							return f
						let b = Object.assign(
							{},
							this.language[f][this.langType]
						)
						if (
							(C.data &&
								(b.value = this.replaceStr(b.value, C.data)),
							!v)
						)
							return b.value
						switch (!0) {
							case v instanceof cc.Label:
								v.string = b.value
						}
					}
					getAssetsI18nPrefix() {
						return (
							null !== this._assetI18nPrefix ||
								(this._assetI18nPrefix =
									this.langType != this.langTypeDefault
										? 'i18n/' + this.langType + '/'
										: ''),
							this._assetI18nPrefix
						)
					}
					initStorage() {
						let f = this,
							v = window.sogame || {}
						if (((window.sogame = v), v.initStorage)) return
						v.initStorage = !0
						let C = cc.sys.localStorage,
							b = C.setItem
						C.setItem = (v, _) => {
							if (!v) return
							if (void 0 === _)
								return console.error('val is need!')
							let w = f.prefix
							return (
								(v = -1 == v.indexOf(w) ? w + v : v),
								b.call(C, v, _)
							)
						}
						let _ = C.getItem
						C.getItem = (v) => {
							if (!v) return
							let b = f.prefix
							return (
								(v = -1 == v.indexOf(b) ? b + v : v),
								_.call(C, v)
							)
						}
						let w = C.removeItem
						C.removeItem = (v) => {
							if (!v) return
							let b = f.prefix
							return (
								(v = -1 == v.indexOf(b) ? b + v : v),
								w.call(C, v)
							)
						}
						let N = C.clear
						C.clear = () => N.call(C)
					}
					getPreLoadTime(f = 200, v = 3e3, C = 1e3) {
						if (!this.preNetSpeed)
							return (
								console.error(
									'测试模式下无法预估网速，默认预估加载时间为' +
										C +
										'ms'
								),
								C
							)
						let b = (v / this.preNetSpeed) * 1e3
						return b < C ? C : b
					}
					loadingOver() {
						cc.director.emit('loadingOver')
					}
					onLoading(f, v, C) {
						let b = (C = Object.assign(
								{
									loadSize: 200,
									totalSize: 3e3,
									interVal: 16,
									float: 0,
								},
								C
							)).interVal,
							_ =
								99 /
								(this.getPreLoadTime(C.loadSize, C.totalSize) /
									b),
							w = 0,
							N = 0,
							k = !1
						cc.director.once('loadingOver', () => {
							k = !0
						})
						let L = cc.director.getScheduler(),
							r = () => {
								w += !0 === k ? 5 : _
								let b = !0 === k ? 100 : 99
								w = w > b ? b : w
								let B = Math.floor(w)
								C.float && (B = w.toFixed(C.float)),
									B != N &&
										((N = B),
										100 == B && L.unschedule(r, this),
										f && v && v.call(f, N))
							}
						cc.director.getScheduler().enableForTarget(this),
							cc.director.getScheduler().schedule(r, this, 0)
					}
				}),
					cc._RF.pop()
			},
			{ './utils/JsEnhance': 'JsEnhance', './utils/Lang': 'Lang' },
		],
		pfChuanYin: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '189194a6UFF3ok6auy6W8hs', 'pfChuanYin'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('./pfBaseInfo')
				;(C.default = new (class extends b.default {
					constructor() {
						super(),
							(this._pfName = 'cy'),
							(this.langType = 'en'),
							(this.langTypeDefault = 'en'),
							(this.adConfig = {
								bannerid:
									'ca-app-pub-2476175026271293/4427636574',
								interid:
									'ca-app-pub-2476175026271293/6862228224',
								rewardid:
									'ca-app-pub-2476175026271293/7983738204',
								debugMode: !1,
								bannerLocation: 2,
								test_device_id: '',
							}),
							(this.adsCtrlConfig = {
								reward: {},
								screen: { lastTime: 0, interval: 30 },
								banner: {},
							}),
							this.initCy()
					}
					init() {
						super.init()
					}
					onLaunch() {
						super.onLaunch()
					}
					initCy() {
						;(this.cy = this.cy || {}),
							(this.cy.showAd = (f, v) => {
								window.adShow &&
									window.adShow({
										ad_type: f,
										success(f) {
											console.log('adShow success = ' + f)
											let C = '2'
											10002 == f && (C = '3'),
												v({ type: C })
										},
										fail(f) {
											console.log('adShow fail = ' + f),
												v({ type: '1' })
										},
									})
							}),
							(this.cy.showScreenAd = (f) => {
								let v = this.adsCtrlConfig.screen,
									C = new Date().getTime()
								C - v.lastTime <= 1e3 * v.interval
									? f &&
									  f({ type: '1', desc: '冷却时间未到' })
									: window.adShow &&
									  window.adShow({
											ad_type: 2,
											success(b) {
												console.log(
													'adShow success = ' + b
												),
													(v.lastTime = C),
													f({ type: 3 })
											},
											fail(v) {
												console.log(
													'adShow fail = ' + v
												),
													f({ type: '1' })
											},
									  })
							}),
							window.adInit &&
								window.adInit({
									banner_id: this.adConfig.bannerid,
									interstitial_id: this.adConfig.interid,
									reward_id: this.adConfig.rewardid,
									debug_mode: this.adConfig.debugMode,
									banner_location: this.adConfig
										.bannerLocation,
									success(f) {
										console.log('adInit success = ' + f)
									},
								})
					}
				})()),
					cc._RF.pop()
			},
			{ './pfBaseInfo': 'pfBaseInfo' },
		],
		pfGoogleApp: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '8911bU0Vf9Hw4W+4Z9xHZfj', 'pfGoogleApp'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('./pfBaseInfo')
				;(C.default = new (class extends b.default {
					constructor() {
						super(),
							(this._pfName = 'googleapp'),
							this.initUIState(),
							this.initGameData()
					}
					init() {
						super.init()
					}
					onLaunch() {
						super.onLaunch()
					}
					initUIState() {}
					initGameData() {}
				})()),
					cc._RF.pop()
			},
			{ './pfBaseInfo': 'pfBaseInfo' },
		],
		pfHuaweiApp: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '8508aCgX5pAHo2sJAWsfl2V', 'pfHuaweiApp'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('./pfBaseInfo')
				;(C.default = new (class extends b.default {
					constructor() {
						super(),
							(this._pfName = 'hwapp'),
							this.initUIState(),
							this.initGameData(),
							this.initHw()
					}
					init() {
						super.init()
					}
					onLaunch() {
						super.onLaunch()
					}
					initUIState() {}
					initGameData() {}
					initHw() {
						;(this.hw = this.hw || {}),
							(this.hw.showRewardAdResult = (f) => {
								console.log(
									'===========hwshowRewardAdResult============'
								),
									console.log(f)
							})
					}
				})()),
					cc._RF.pop()
			},
			{ './pfBaseInfo': 'pfBaseInfo' },
		],
		pfLq: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'cbe80iz1ShNObtnbeqRyObq', 'pfLq'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('./pfVigoo')
				;(window.Lq = b.default), (C.default = b.default), cc._RF.pop()
			},
			{ './pfVigoo': 'pfVigoo' },
		],
		pfOppo: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'f2314KpC/dGXqkKBboAUfD0', 'pfOppo'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('./pfBaseInfo')
				;(C.default = new (class extends b.default {
					constructor() {
						super(),
							(this._pfName = 'oppo'),
							(this.gameid = 999),
							(this.adUrls = { before: '', after: '' }),
							(this.dpr = 1),
							(this.event = {
								loadPage: {
									type: 'Load_page',
									maxUpTimes: 1,
									upTimes: 0,
								},
								loadSdk: {
									type: 'Click_page_pv',
									maxUpTimes: 1,
									upTimes: 0,
								},
								loadEngine: {
									type: 'Load_engine',
									maxUpTimes: 1,
									upTimes: 0,
								},
								gameLoading: {
									type: 'Load_game_loading',
									maxUpTimes: 1,
									upTimes: 0,
								},
								gameHome: {
									type: 'Load_game_site',
									maxUpTimes: 1,
									upTimes: 0,
								},
								clickGame: {
									type: 'Click_game',
									maxUpTimes: 0,
									upTimes: 0,
								},
							}),
							(this.adConfig = {
								screenAd: { lastTime: 0, interval: 30 },
								lastTime: { before: 0 },
								interval: 10,
							}),
							this.initUIState(),
							this.initGameData()
					}
					init() {
						super.init(), this.initOppo()
					}
					onLaunch() {
						super.onLaunch(), this.getUid()
						let f = document,
							v = f.createElement('div')
						;(v.id = 'adContainer'),
							(v.style.display = 'none'),
							(v.style.zIndex = '1'),
							(v.style.textAlign = 'left')
						let C = f.getElementById('content')
						f.body.insertBefore(v, C)
						let b = f.createElement('script')
						;(b.src =
							'https://imasdk.googleapis.com/js/sdkloader/ima3.js'),
							(b.onload = () => {
								this.initGoogleAds()
							}),
							f.body.appendChild(b),
							this.oppo.uploadEvent('loadEngine')
					}
					initUIState() {}
					initGameData() {}
					initOppo() {
						document,
							window.HeyFun ||
								(window.HeyFun = {
									getUuid: () => '',
									getEnv: () => '',
								}),
							(this.oppo = this.oppo || {}),
							(this.userInfo.openid =
								window.HeyFun.getUuid() || ''),
							(this.oppo.ShowExcitationVideoAdv = (
								f,
								v = 'before'
							) => {
                              
							}),
							(this.oppo.uploadEvent = (f) => {
								if (!this.event[f]) return
								let v = this.event[f]
								if (
									v.maxUpTimes > 0 &&
									v.upTimes >= v.maxUpTimes
								)
									return
								v.upTimes++,
									(f = v.type),
									console.debug(
										'=====upTips=====:' +
											f +
											',time:' +
											new Date().getTime()
									)
								let C = window.HeyFun.getEnv() || ''
								this.request({
									url: '',
									data: {
										game_id: this.gameid,
										uid: this.userInfo.uid,
										openid: this.userInfo.openid,
										type: f,
										env: C,
										clienttime: new Date().getTime(),
									},
									success: function () {
										console.debug(
											'=====upTips=====:' +
												f +
												':succ,time:' +
												new Date().getTime()
										)
									},
									fail: function () {
										v.upTimes--
									},
								})
							})
					}
					initGoogleAds() {
						let f, v, C
						this.google = google
						let b = { callback: null }
						this.dpr = window.devicePixelRatio || 1
						let _ = cc.view.getVisibleSize()
						;(this.adWidth = window.screen.width),
							(this.adHeight = Math.ceil(
								_.height / (_.width / this.adWidth)
							))
						let o = () => {
								;(this.adContainer = document.getElementById(
									'adContainer'
								)),
									(f = new this.google.ima.AdDisplayContainer(
										this.adContainer
									)),
									(v = new this.google.ima.AdsLoader(
										f
									)).addEventListener(
										this.google.ima.AdErrorEvent.Type
											.AD_ERROR,
										l,
										!1
									),
									v.addEventListener(
										this.google.ima.AdsManagerLoadedEvent
											.Type.ADS_MANAGER_LOADED,
										c,
										!1
									),
									f.initialize()
							},
							l = (f) => {
								;(this.adContainer.style.display = 'none'),
									C && C.destroy && C.destroy(),
									null !== b.callback &&
										b.callback({ type: '1' })
							},
							s = (f) => {
								switch ((f.getAd(), f.type)) {
									case this.google.ima.AdEvent.Type.LOADED:
										h(this.adWidth, this.adHeight)
										break
									case this.google.ima.AdEvent.Type.SKIPPED:
										;(this.adContainer.style.display =
											'none'),
											C && C.destroy && C.destroy(),
											null !== b.callback &&
												b.callback({ type: '2' })
										break
									case this.google.ima.AdEvent.Type.COMPLETE:
										;(this.adContainer.style.display =
											'none'),
											null !== b.callback &&
												b.callback({ type: '3' })
								}
							},
							c = (f, v) => {
								var b = new this.google.ima.AdsRenderingSettings()
								;(b.restoreCustomPlaybackStateOnAdBreakComplete = !0),
									(C = f.getAdsManager(b)).addEventListener(
										this.google.ima.AdErrorEvent.Type
											.AD_ERROR,
										l
									),
									C.addEventListener(
										this.google.ima.AdEvent.Type.LOADED,
										s
									),
									C.addEventListener(
										this.google.ima.AdEvent.Type.SKIPPED,
										s
									),
									C.addEventListener(
										this.google.ima.AdEvent.Type.COMPLETE,
										s
									)
								try {
									let f = this.adWidth * this.dpr,
										v = this.adHeight * this.dpr
									C.init(
										f,
										v,
										this.google.ima.ViewMode.NORMAL
									),
										C.start()
								} catch (f) {
									console.log('ads play fail'),
										(this.adContainer.style.display =
											'none'),
										C && C.destroy && C.destroy()
								}
							},
							r = (f) => {
								this.adContainer.style.display = ''
								let C = this.adWidth * this.dpr,
									b = this.adHeight * this.dpr,
									_ = new this.google.ima.AdsRequest()
								;(_.adTagUrl = f),
									(_.forceNonLinearFullSlot = !0),
									(_.nonLinearAdSlotWidth = C),
									(_.nonLinearAdSlotHeight = b),
									(_.linearAdSlotWidth = C),
									(_.linearAdSlotHeight = b),
									v.requestAds(_)
							},
							h = (f, v) => {
								let C = document.getElementById('adContainer')
								if ('none' == C.style.display) return
								let b = C.getElementsByTagName('iframe')
								;(b[0].width = f), (b[0].height = v)
							}
						;(() => {
							o(),
								(this.oppo = this.oppo || {}),
								(this.oppo.ShowExcitationVideoAdv = (
									f,
									v = 'before'
								) => {

                                    
								})
						})()
					}
					getUid() {
						let f = this.sys.localStorage.getItem('uid')
						;('null' != f && f) ||
							((f = this.createUid()),
							this.sys.localStorage.setItem('uid', f)),
							(this.userInfo.uid = f)
					}
					request(f) {
						if (
							(((f = f || {}).api = f.api || ''),
							(f.url = f.url || ''),
							'' == f.api && '' == f.url)
						)
							return console.log('apiName is need')
						let v = this.apiHost + '/' + f.api
						'' != f.url && (v = f.url)
						let C = f.data || {}
						;(C = this.parseParams(C)),
							(f.header = f.header || [
								{
									'Content-Type':
										'application/x-www-form-urlencoded',
								},
							]),
							(f.method = f.method || 'post'),
							(f.responseType = f.responseType || 'json'),
							(f.async = !1 !== f.async)
						let b = cc.loader.getXMLHttpRequest()
						b.open(f.method, v, f.async),
							f.header.forEach((f) => {
								for (let v in f) b.setRequestHeader(v, f[v])
							}),
							(b.onreadystatechange = () => {
								if (4 == b.readyState)
									if (b.status >= 200 && b.status < 400) {
										var v = b.responseText
										f.success && f.success(v)
									} else f.fail && f.fail()
							}),
							b.send(C)
					}
				})()),
					cc._RF.pop()
			},
			{ './pfBaseInfo': 'pfBaseInfo' },
		],
		pfShareitApp: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '1f0c4FLgC1Md5cYxYsNAqko', 'pfShareitApp'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('./pfBaseInfo')
				;(C.default = new (class extends b.default {
					constructor() {
						super(),
							(this._pfName = 'stapp'),
							this.initUIState(),
							this.initGameData(),
							this.initStApp()
					}
					init() {
						super.init()
					}
					onLaunch() {
						super.onLaunch()
					}
					initUIState() {}
					initGameData() {}
					initStApp() {
						;(this.stapp = this.stapp || {}),
							(this.stapp.callJsbMethod = (f, v) => {
								window.jsb &&
									((v = JSON.stringify(v)),
									jsb.reflection.callStaticMethod(
										'com/sogame/platforms/shareit/MainJSBridge',
										f,
										'(Ljava/lang/String;)V',
										v
									))
							}),
							(this.stapp.showRewardAdResult = (f) => {
								console.log(f)
							}),
							(this.stapp.showScreenAdResult = (f) => {
								console.log(f)
							})
					}
				})()),
					cc._RF.pop()
			},
			{ './pfBaseInfo': 'pfBaseInfo' },
		],
		pfSogame: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, 'b3feazglqpC+KcXgOO8roK4', 'pfSogame'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('./pfBaseInfo')
				;(C.default = new (class extends b.default {
					constructor() {
						super(...arguments),
							(this._pfName = 'sogame'),
							(this.langType = 'en'),
							(this.langTypeDefault = 'en')
					}
				})()),
					cc._RF.pop()
			},
			{ './pfBaseInfo': 'pfBaseInfo' },
		],
		pfVigoo: [
			function (f, v, C) {
				'use strict'
				cc._RF.push(v, '09afedBlR9EsoQfJBootkcH', 'pfVigoo'),
					Object.defineProperty(C, '__esModule', { value: !0 })
				const b = f('./pfBaseInfo'),
					_ = f('./utils/SeasunDcLogger.js')
				;(C.default = new (class extends b.default {
					constructor() {
						super(),
							(this._pfName = 'vigoo'),
							(this.appid = 'woodylegend'),
							(this.langType = 'en'),
							(this.langTypeDefault = 'en'),
							(this.userInfo = {
								image: '',
								name: '',
								openid: '',
								token: '',
								uid: '',
							}),
							this.initUIState(),
							this.initGameData()
					}
					init() {
						this.initSeasunDcLogger(), this.initVigoo()
					}
					onLaunch() {
						super.onLaunch()
					}
					initUIState() {}
					initSeasunDcLogger() {
						if (!this.appid) return
						this.SeasunDcLogger = _.SeasunDcLogger
						let f = {
							appId: this.appid,
							appVersion: '0.0.1',
							channel: 'vigoo',
						}
						this.SeasunDcLogger.config(f),
							this.SeasunDcLogger.start()
					}
					initGameData() {}
					initVigoo() {
						let f = document
						var v = f.createElement('script')
						;(v.src = ''),
							(v.async = !1),
							(v.onload = () => {
								;(this.vigoo = vigoo),
									this.vigoo.HideLoading(),
									this.vigoo.Login((f) => {
										if (
											(Object.assign(this.userInfo, f),
											this.SeasunDcLogger)
										) {
											let v = {
												msgType: 'role.login',
												accountId: f.openid,
											}
											this.SeasunDcLogger.push(v)
										}
									})
							}),
							f.body.appendChild(v)
					}
				})()),
					cc._RF.pop()
			},
			{
				'./pfBaseInfo': 'pfBaseInfo',
				'./utils/SeasunDcLogger.js': 'SeasunDcLogger',
			},
		],
		'use_v2.1-2.2.1_cc.Toggle_event': [
			function (f, v, C) {
				'use strict'
				cc._RF.push(
					v,
					'4e4ef300epCJLmiDCidOLQD',
					'use_v2.1-2.2.1_cc.Toggle_event'
				),
					cc.Toggle &&
						(cc.Toggle._triggerEventInScript_isChecked = !0),
					cc._RF.pop()
			},
			{},
		],
	},
	{},
	[
		'AStar',
		'AStarMoveType',
		'AStarStep',
		'BoxReward',
		'BuffGet',
		'BuildScene',
		'Bullet',
		'ChooseBuff',
		'ChoutiAd',
		'Config',
		'DailyGold',
		'Discription',
		'Discription2',
		'EquipIns',
		'EquipMix',
		'EquipMixReward',
		'EquipMixSuccess',
		'EquipScroll',
		'EquipSmelt',
		'EquipSmeltSuccess',
		'EventStop',
		'FreeBox',
		'Game',
		'GamePause',
		'GoldLack',
		'GuideLine',
		'HealthLack',
		'HitLabel',
		'HitWall',
		'Interlude',
		'Invite',
		'Loading',
		'Main',
		'Myself',
		'Over',
		'Player',
		'Rank',
		'RankView',
		'RestartGame',
		'Revive',
		'SIgnIn',
		'ShowAngel',
		'ShowDemon',
		'ShowTurntable',
		'SubPlayer',
		'WorkmateChange',
		'WorkmateIns',
		'WorkmateMix',
		'WorkmateMixSuccess',
		'BossDanmuAtk',
		'EarthQuakeAtk',
		'EnemyAtk',
		'Enemy_Guai',
		'Enemy_Normal',
		'FireAtk',
		'LaserAtk',
		'magicAtk',
		'i18n_BuildScene',
		'i18n_GameScene',
		'i18n_LoadingScene',
		'i18n_MainScene',
		'i18n_box',
		'i18n_boxReward',
		'i18n_chooseBuff',
		'i18n_choutiAd',
		'i18n_continue',
		'i18n_dailyGold',
		'i18n_equipContent',
		'i18n_equipMixReward',
		'i18n_equipMixSuccess',
		'i18n_equipSmeltSuccess',
		'i18n_equip_content',
		'i18n_equip_mix',
		'i18n_equip_scroll',
		'i18n_equip_smelt',
		'i18n_gamePause',
		'i18n_gold_lack',
		'i18n_health_lack',
		'i18n_invite',
		'i18n_ranking',
		'i18n_showAngel',
		'i18n_showDemon',
		'i18n_showTurntable',
		'i18n_signIn',
		'i18n_workmateMixSuccess',
		'i18n_workmate_change',
		'i18n_workmate_content',
		'i18n_workmate_mix',
		'AdsManager',
		'AudioManager',
		'UtilManager',
		'MapBox',
		'Obstacle3',
		'JsonOb',
		'StringFormat',
		'VMBase',
		'VMCompsEdit',
		'VMCustom',
		'VMEvent',
		'VMLabel',
		'VMModify',
		'VMParent',
		'VMProgress',
		'VMState',
		'ViewModel',
		'pfBaseInfo',
		'pfChuanYin',
		'pfGoogleApp',
		'pfHuaweiApp',
		'pfLq',
		'pfOppo',
		'pfShareitApp',
		'pfSogame',
		'pfVigoo',
		'JsEnhance',
		'Lang',
		'SeasunDcLogger',
		'use_v2.1-2.2.1_cc.Toggle_event',
	]
)
