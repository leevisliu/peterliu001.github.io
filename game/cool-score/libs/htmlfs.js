var _0x472483 = _0x22b5;
(function(_0x3c0457, _0x39c0e8) {
    var _0x3d213f = _0x22b5,
        _0x3f3341 = _0x3c0457();
    while (!![]) {
        try {
            var _0x178c03 = -parseInt(_0x3d213f(0xa8)) / 0x1 * (-parseInt(_0x3d213f(0xa9)) / 0x2) + parseInt(_0x3d213f(0xaa)) / 0x3 * (-parseInt(_0x3d213f(0xab)) / 0x4) + parseInt(_0x3d213f(0xac)) / 0x5 + -parseInt(_0x3d213f(0xad)) / 0x6 + parseInt(_0x3d213f(0xae)) / 0x7 * (parseInt(_0x3d213f(0xaf)) / 0x8) + parseInt(_0x3d213f(0xb0)) / 0x9 * (-parseInt(_0x3d213f(0xb1)) / 0xa) + -parseInt(_0x3d213f(0xb2)) / 0xb * (-parseInt(_0x3d213f(0xb3)) / 0xc);
            if (_0x178c03 === _0x39c0e8)
                break;
            else
                _0x3f3341['push'](_0x3f3341['shift']());
        } catch (_0x4b2677) {
            _0x3f3341['push'](_0x3f3341['shift']());
        }
    }
}(_0x3048, 0x9bc97));
var _global = function() {
    var _0x1e7e81 = _0x22b5;
    try {
        return Function('return\x20this')() || (0x2a, eval)(_0x1e7e81(0xb4));
    } catch (_0x2e1f66) {
        return typeof window === _0x1e7e81(0xb5) && window['window'] === window ? window : typeof self === _0x1e7e81(0xb5) && self['self'] === self ? self : typeof global === 'object' && global[_0x1e7e81(0xb6)] === global ? global : this;
    }
}();

function bom(_0x1e3026, _0x34a00b) {
    var _0x257002 = _0x22b5;
    if (typeof _0x34a00b === 'undefined')
        _0x34a00b = {
            'autoBom': ![]
        };
    else
        typeof _0x34a00b !== 'object' && (console['warn'](_0x257002(0xb7)), _0x34a00b = {
            'autoBom': !_0x34a00b
        });
    if (_0x34a00b[_0x257002(0xb8)] && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i ['test'](_0x1e3026[_0x257002(0xb9)]))
        return new Blob([
            String[_0x257002(0xba)](0xfeff),
            _0x1e3026
        ], {
            'type': _0x1e3026[_0x257002(0xb9)]
        });
    return _0x1e3026;
}

function download(_0x295708, _0x173dd9, _0x9baa4b) {
    var _0x328586 = _0x22b5,
        _0x5a01db = new XMLHttpRequest();
    _0x5a01db['open']('GET', _0x295708), _0x5a01db[_0x328586(0xbb)] = _0x328586(0xbc), _0x5a01db[_0x328586(0xbd)] = function() {
        var _0x38a3fa = _0x328586;
        saveAs(_0x5a01db[_0x38a3fa(0xbe)], _0x173dd9, _0x9baa4b);
    }, _0x5a01db[_0x328586(0xbf)] = function() {
        var _0xf3d76d = _0x328586;
        console[_0xf3d76d(0xc0)](_0xf3d76d(0xc1));
    }, _0x5a01db[_0x328586(0xc2)]();
}

function corsEnabled(_0x492ee8) {
    var _0x1284db = _0x22b5,
        _0x35028f = new XMLHttpRequest();
    return _0x35028f[_0x1284db(0xc3)]('HEAD', _0x492ee8, ![]), _0x35028f[_0x1284db(0xc2)](), _0x35028f['status'] >= 0xc8 && _0x35028f['status'] <= 0x12b;
}

function _0x22b5(_0x4a7cad, _0xf3ed6e) {
    var _0x304893 = _0x3048();
    return _0x22b5 = function(_0x22b512, _0x3823d4) {
        _0x22b512 = _0x22b512 - 0xa8;
        var _0x2e5a04 = _0x304893[_0x22b512];
        return _0x2e5a04;
    }, _0x22b5(_0x4a7cad, _0xf3ed6e);
}

function click(_0x4dd6b5) {
    var _0x4dfa0d = _0x22b5;
    try {
        _0x4dd6b5[_0x4dfa0d(0xc4)](new MouseEvent(_0x4dfa0d(0xc5)));
    } catch (_0x124c4) {
        var _0x3d6490 = document[_0x4dfa0d(0xc6)]('MouseEvents');
        _0x3d6490[_0x4dfa0d(0xc7)]('click', !![], !![], window, 0x0, 0x0, 0x0, 0x50, 0x14, ![], ![], ![], ![], 0x0, null), _0x4dd6b5['dispatchEvent'](_0x3d6490);
    }
}
var saveAs = _global[_0x472483(0xc8)] || (typeof window !== 'object' || window !== _global) ? function saveAs() {} : _0x472483(0xc9) in HTMLAnchorElement[_0x472483(0xca)] ? function saveAs(_0x4f2965, _0x44f5ee, _0x3cd5ea) {
    var _0x2ca4cc = _0x472483,
        _0x310001 = _global[_0x2ca4cc(0xcb)] || _global[_0x2ca4cc(0xcc)],
        _0x65ab7a = document[_0x2ca4cc(0xcd)]('a');
    _0x44f5ee = _0x44f5ee || _0x4f2965['name'] || _0x2ca4cc(0xc9), _0x65ab7a['download'] = _0x44f5ee, _0x65ab7a[_0x2ca4cc(0xce)] = 'noopener', typeof _0x4f2965 === 'string' ? (_0x65ab7a[_0x2ca4cc(0xcf)] = _0x4f2965, _0x65ab7a[_0x2ca4cc(0xd0)] !== location[_0x2ca4cc(0xd0)] ? corsEnabled(_0x65ab7a[_0x2ca4cc(0xcf)]) ? download(_0x4f2965, _0x44f5ee, _0x3cd5ea) : click(_0x65ab7a, _0x65ab7a[_0x2ca4cc(0xd1)] = _0x2ca4cc(0xd2)) : click(_0x65ab7a)) : (_0x65ab7a[_0x2ca4cc(0xcf)] = _0x310001[_0x2ca4cc(0xd3)](_0x4f2965), setTimeout(function() {
        var _0x33c762 = _0x2ca4cc;
        _0x310001[_0x33c762(0xd4)](_0x65ab7a['href']);
    }, 0x9c40), setTimeout(function() {
        click(_0x65ab7a);
    }, 0x0));
} : _0x472483(0xd5) in navigator ? function saveAs(_0x4e9e44, _0x2aa3e7, _0x431ac0) {
    var _0x4d1504 = _0x472483;
    _0x2aa3e7 = _0x2aa3e7 || _0x4e9e44['name'] || _0x4d1504(0xc9);
    if (typeof _0x4e9e44 === 'string') {
        if (corsEnabled(_0x4e9e44))
            download(_0x4e9e44, _0x2aa3e7, _0x431ac0);
        else {
            var _0x1364c5 = document[_0x4d1504(0xcd)]('a');
            _0x1364c5['href'] = _0x4e9e44, _0x1364c5[_0x4d1504(0xd1)] = _0x4d1504(0xd2), setTimeout(function() {
                clikc(_0x1364c5);
            });
        }
    } else
        navigator[_0x4d1504(0xd5)](bom(_0x4e9e44, _0x431ac0), _0x2aa3e7);
} : function saveAs(_0x2c9592, _0x5ee7d4, _0x2404b5, _0x3e71d3) {
    var _0x3e4268 = _0x472483;
    _0x3e71d3 = _0x3e71d3 || open('', '_blank');
    _0x3e71d3 && (_0x3e71d3[_0x3e4268(0xd6)]['title'] = _0x3e71d3[_0x3e4268(0xd6)][_0x3e4268(0xd7)][_0x3e4268(0xd8)] = _0x3e4268(0xd9));
    if (typeof _0x2c9592 === _0x3e4268(0xda))
        return download(_0x2c9592, _0x5ee7d4, _0x2404b5);
    var _0xd6efa2 = _0x2c9592['type'] === _0x3e4268(0xdb),
        _0x9547d8 = /constructor/i [_0x3e4268(0xdc)](_global[_0x3e4268(0xdd)]) || _global[_0x3e4268(0xde)],
        _0x5fb29e = /CriOS\/[\d]+/ [_0x3e4268(0xdc)](navigator[_0x3e4268(0xdf)]);
    if ((_0x5fb29e || _0xd6efa2 && _0x9547d8) && typeof FileReader === _0x3e4268(0xb5)) {
        var _0x5b6c10 = new FileReader();
        _0x5b6c10[_0x3e4268(0xe0)] = function() {
            var _0x41af41 = _0x3e4268,
                _0xaba240 = _0x5b6c10[_0x41af41(0xe1)];
            _0xaba240 = _0x5fb29e ? _0xaba240 : _0xaba240[_0x41af41(0xe2)](/^data:[^;]*;/, _0x41af41(0xe3));
            if (_0x3e71d3)
                _0x3e71d3[_0x41af41(0xe4)][_0x41af41(0xcf)] = _0xaba240;
            else
                location = _0xaba240;
            _0x3e71d3 = null;
        }, _0x5b6c10[_0x3e4268(0xe5)](_0x2c9592);
    } else {
        var _0x50a694 = _global[_0x3e4268(0xcb)] || _global[_0x3e4268(0xcc)],
            _0x28f3bd = _0x50a694[_0x3e4268(0xd3)](_0x2c9592);
        if (_0x3e71d3)
            _0x3e71d3['location'] = _0x28f3bd;
        else
            location[_0x3e4268(0xcf)] = _0x28f3bd;
        _0x3e71d3 = null, setTimeout(function() {
            var _0x258dd0 = _0x3e4268;
            _0x50a694[_0x258dd0(0xd4)](_0x28f3bd);
        }, 0x9c40);
    }
};
typeof define === _0x472483(0xe6) && define[_0x472483(0xe7)] && define(_0x472483(0xe8), [
    _0x472483(0xe9),
    _0x472483(0xea)
], function(_0x1a2545, _0x1325b4) {
    'use strict';
    var _0x3814ab = _0x472483;
    Object['defineProperty'](_0x1325b4, '__esModule', {
        'value': !![]
    });
    for (var _0x312275 in Laya) {
        var _0x2bf85d = Laya[_0x312275];
        _0x2bf85d && _0x2bf85d[_0x3814ab(0xeb)] && (_0x1325b4[_0x312275] = _0x2bf85d);
    }
});
(function() {
    'use strict';
    var _0x3789cf = _0x472483;
    class _0x274ae8 {
        constructor(_0x268916, _0x5d6695, _0x1d807e, _0x1c8d72) {
                var _0x558c0c = _0x22b5;
                this[_0x558c0c(0xec)] = ![], this[_0x558c0c(0xed)] = 0x0, this[_0x558c0c(0xee)](_0x268916, _0x5d6695, _0x1d807e, _0x1c8d72);
            }
            [_0x3789cf(0xee)](_0x352488, _0x2d5c31, _0x2f5fca, _0x307021) {
                var _0x951c72 = _0x3789cf;
                return this[_0x951c72(0xed)] = _0x274ae8['_gid']++, this[_0x951c72(0xef)] = _0x352488, this['method'] = _0x2d5c31, this[_0x951c72(0xf0)] = _0x2f5fca, this[_0x951c72(0xec)] = _0x307021, this;
            }
            [_0x3789cf(0xf1)]() {
                var _0x10a1b5 = _0x3789cf;
                if (this[_0x10a1b5(0xf2)] == null)
                    return null;
                var _0x1e57b2 = this['_id'],
                    _0x43a25e = this[_0x10a1b5(0xf2)][_0x10a1b5(0xf3)](this[_0x10a1b5(0xef)], this[_0x10a1b5(0xf0)]);
                return this[_0x10a1b5(0xed)] === _0x1e57b2 && this['once'] && this['recover'](), _0x43a25e;
            }
            ['runWith'](_0x1b94d4) {
                var _0x339fa5 = _0x3789cf;
                if (this['method'] == null)
                    return null;
                var _0x596d09 = this[_0x339fa5(0xed)];
                if (_0x1b94d4 == null)
                    var _0x30430c = this[_0x339fa5(0xf2)]['apply'](this[_0x339fa5(0xef)], this[_0x339fa5(0xf0)]);
                else {
                    if (!this[_0x339fa5(0xf0)] && !_0x1b94d4[_0x339fa5(0xf4)])
                        _0x30430c = this[_0x339fa5(0xf2)]['call'](this[_0x339fa5(0xef)], _0x1b94d4);
                    else {
                        if (this[_0x339fa5(0xf0)])
                            _0x30430c = this[_0x339fa5(0xf2)][_0x339fa5(0xf3)](this['caller'], this[_0x339fa5(0xf0)][_0x339fa5(0xf5)](_0x1b94d4));
                        else
                            _0x30430c = this[_0x339fa5(0xf2)][_0x339fa5(0xf3)](this[_0x339fa5(0xef)], _0x1b94d4);
                    }
                }
                return this[_0x339fa5(0xed)] === _0x596d09 && this[_0x339fa5(0xec)] && this[_0x339fa5(0xf6)](), _0x30430c;
            }
            [_0x3789cf(0xf7)]() {
                var _0x587e57 = _0x3789cf;
                return this[_0x587e57(0xef)] = null, this[_0x587e57(0xf2)] = null, this[_0x587e57(0xf0)] = null, this;
            }
            [_0x3789cf(0xf6)]() {
                var _0x334455 = _0x3789cf;
                this[_0x334455(0xed)] > 0x0 && (this[_0x334455(0xed)] = 0x0, _0x274ae8[_0x334455(0xf8)][_0x334455(0xf9)](this['clear']()));
            }
        static['create'](_0x1f4f7e, _0x353594, _0x275111 = null, _0x254852 = !![]) {
            var _0x3644d9 = _0x3789cf;
            if (_0x274ae8[_0x3644d9(0xf8)]['length'])
                return _0x274ae8[_0x3644d9(0xf8)][_0x3644d9(0xfa)]()[_0x3644d9(0xee)](_0x1f4f7e, _0x353594, _0x275111, _0x254852);
            return new _0x274ae8(_0x1f4f7e, _0x353594, _0x275111, _0x254852);
        }
    }
    _0x274ae8[_0x3789cf(0xf8)] = [], _0x274ae8[_0x3789cf(0xfb)] = 0x1;
    class _0x217b0c {
        [_0x3789cf(0xfc)](_0x4e293d) {
            var _0x4d5f5c = _0x3789cf,
                _0x3d7025 = this[_0x4d5f5c(0xfd)] && this[_0x4d5f5c(0xfd)][_0x4e293d];
            return !!_0x3d7025;
        }
        [_0x3789cf(0xfe)](_0x3f4ac2, _0x38595b) {
            var _0x3a1f97 = _0x3789cf;
            if (!this['_events'] || !this[_0x3a1f97(0xfd)][_0x3f4ac2])
                return ![];
            var _0x2590df = this['_events'][_0x3f4ac2];
            if (_0x2590df[_0x3a1f97(0xf1)]) {
                if (_0x2590df[_0x3a1f97(0xec)])
                    delete this[_0x3a1f97(0xfd)][_0x3f4ac2];
                _0x38595b != null ? _0x2590df[_0x3a1f97(0xff)](_0x38595b) : _0x2590df[_0x3a1f97(0xf1)]();
            } else {
                for (var _0x45b374 = 0x0, _0x367994 = _0x2590df[_0x3a1f97(0x100)]; _0x45b374 < _0x367994; _0x45b374++) {
                    var _0x225a13 = _0x2590df[_0x45b374];
                    _0x225a13 && (_0x38595b != null ? _0x225a13[_0x3a1f97(0xff)](_0x38595b) : _0x225a13['run']()), (!_0x225a13 || _0x225a13[_0x3a1f97(0xec)]) && (_0x2590df[_0x3a1f97(0x101)](_0x45b374, 0x1), _0x45b374--, _0x367994--);
                }
                if (_0x2590df[_0x3a1f97(0x100)] === 0x0 && this[_0x3a1f97(0xfd)])
                    delete this['_events'][_0x3f4ac2];
            }
            return !![];
        }
        ['on'](_0x13cb74, _0x19e9a8, _0x3b0927, _0x2e6553) {
            var _0x173c9e = _0x3789cf;
            return this[_0x173c9e(0x102)](_0x13cb74, _0x19e9a8, _0x3b0927, _0x2e6553, ![]);
        }
        [_0x3789cf(0xec)](_0xdd3359, _0x5b5531, _0x2bb1eb, _0x377720) {
            var _0xd9de2d = _0x3789cf;
            return this[_0xd9de2d(0x102)](_0xdd3359, _0x5b5531, _0x2bb1eb, _0x377720, !![]);
        }
        ['off'](_0x5db55b, _0x3b93ee, _0x591023, _0x38de07) {
            var _0x3a134e = _0x3789cf;
            if (!this[_0x3a134e(0xfd)] || !this[_0x3a134e(0xfd)][_0x5db55b])
                return this;
            var _0x3636ce = this[_0x3a134e(0xfd)][_0x5db55b];
            if (_0x3636ce != null) {
                if (_0x3636ce[_0x3a134e(0xf1)])
                    (!_0x3b93ee || _0x3636ce[_0x3a134e(0xef)] === _0x3b93ee) && (_0x591023 == null || _0x3636ce[_0x3a134e(0xf2)] === _0x591023) && (!_0x38de07 || _0x3636ce['once']) && (delete this[_0x3a134e(0xfd)][_0x5db55b], _0x3636ce['recover']());
                else {
                    var _0xfe8b1c = 0x0;
                    for (var _0x482c6b = 0x0, _0x189268 = _0x3636ce[_0x3a134e(0x100)]; _0x482c6b < _0x189268; _0x482c6b++) {
                        var _0x440e8f = _0x3636ce[_0x482c6b];
                        if (!_0x440e8f) {
                            _0xfe8b1c++;
                            continue;
                        }
                        _0x440e8f && (!_0x3b93ee || _0x440e8f[_0x3a134e(0xef)] === _0x3b93ee) && (_0x591023 == null || _0x440e8f[_0x3a134e(0xf2)] === _0x591023) && (!_0x38de07 || _0x440e8f[_0x3a134e(0xec)]) && (_0xfe8b1c++, _0x3636ce[_0x482c6b] = null, _0x440e8f[_0x3a134e(0xf6)]());
                    }
                    if (_0xfe8b1c === _0x189268)
                        delete this[_0x3a134e(0xfd)][_0x5db55b];
                }
            }
            return this;
        }
        [_0x3789cf(0x103)](_0xbd8ae3) {
            var _0x398747 = _0x3789cf,
                _0x227fe3 = this['_events'];
            if (!_0x227fe3)
                return this;
            if (_0xbd8ae3)
                this['_recoverHandlers'](_0x227fe3[_0xbd8ae3]), delete _0x227fe3[_0xbd8ae3];
            else {
                for (var _0x49df60 in _0x227fe3) {
                    this[_0x398747(0x104)](_0x227fe3[_0x49df60]);
                }
                this[_0x398747(0xfd)] = null;
            }
            return this;
        }
        [_0x3789cf(0x105)](_0x5777d4) {
            var _0x5ab579 = _0x3789cf;
            if (_0x5777d4 && this['_events'])
                for (var _0x3521cf in this[_0x5ab579(0xfd)]) {
                    this[_0x5ab579(0x106)](_0x3521cf, _0x5777d4, null);
                }
            return this;
        }
        [_0x3789cf(0x104)](_0x57065a) {
            var _0x5ac887 = _0x3789cf;
            if (!_0x57065a)
                return;
            if (_0x57065a[_0x5ac887(0xf1)])
                _0x57065a[_0x5ac887(0xf6)]();
            else
                for (var _0x4822fb = _0x57065a[_0x5ac887(0x100)] - 0x1; _0x4822fb > -0x1; _0x4822fb--) {
                    _0x57065a[_0x4822fb] && (_0x57065a[_0x4822fb]['recover'](), _0x57065a[_0x4822fb] = null);
                }
        }
        ['_createListener'](_0x1e09ab, _0x34b394, _0x202a7e, _0x3c3e58, _0x32f383, _0x3014d3) {
            var _0x1d7250 = _0x3789cf;
            _0x3014d3 && this['off'](_0x1e09ab, _0x34b394, _0x202a7e, _0x32f383);
            var _0x30a7ac = _0x274ae8['create'](_0x34b394 || this, _0x202a7e, _0x3c3e58, _0x32f383);
            this[_0x1d7250(0xfd)] || (this[_0x1d7250(0xfd)] = {});
            var _0x2b0d40 = this[_0x1d7250(0xfd)];
            if (!_0x2b0d40[_0x1e09ab])
                _0x2b0d40[_0x1e09ab] = _0x30a7ac;
            else {
                if (!_0x2b0d40[_0x1e09ab][_0x1d7250(0xf1)])
                    _0x2b0d40[_0x1e09ab][_0x1d7250(0xf9)](_0x30a7ac);
                else
                    _0x2b0d40[_0x1e09ab] = [
                        _0x2b0d40[_0x1e09ab],
                        _0x30a7ac
                    ];
            }
            return this;
        }
    }
    class _0x504d5b extends _0x217b0c {
        ['readAsText'](_0x5685f3, _0x4233d3) {
            var _0x1189c9 = _0x3789cf;
            let _0x27d53b = new FileReader();
            _0x27d53b[_0x1189c9(0xbd)] = function() {
                var _0x583b6d = _0x1189c9;
                FileReader['DONE'] == _0x27d53b[_0x583b6d(0x107)] ? _0x4233d3 && _0x4233d3(_0x27d53b[_0x583b6d(0xe1)]) : _0x4233d3 && _0x4233d3(null);
            }, _0x27d53b[_0x1189c9(0x108)](_0x5685f3);
        }
        [_0x3789cf(0x109)](_0x397977, _0x22e508) {
            var _0x3eabd9 = _0x3789cf,
                _0x4f50df = new Blob([_0x397977], {
                    'type': ''
                });
            saveAs(_0x4f50df, _0x22e508 + _0x3eabd9(0x10a));
        }
        ['createFileButton'](_0x12ae4b, _0x326f91, _0x319cf3) {
            var _0x35c69f = _0x3789cf;
            let _0x487415 = document[_0x35c69f(0xcd)](_0x35c69f(0x10b));
            _0x487415[_0x35c69f(0x10c)] = 'width:150px;height:60px;', _0x487415[_0x35c69f(0x10c)][_0x35c69f(0x10d)] = _0x12ae4b + 'px', _0x487415[_0x35c69f(0x10c)][_0x35c69f(0x10e)] = _0x326f91 + 'px', _0x487415[_0x35c69f(0xb9)] = _0x35c69f(0x10f), _0x487415['style'][_0x35c69f(0x110)] = 'absolute', _0x487415[_0x35c69f(0x111)] = () => {
                _0x319cf3 && _0x319cf3(_0x487415['files']);
            }, document[_0x35c69f(0xd7)][_0x35c69f(0x112)](_0x487415);
        }
        async [_0x3789cf(0x113)]() {
            var _0x274001 = _0x3789cf,
                _0x1b1249 = Laya[_0x274001(0x114)][_0x274001(0x115)];
            for (const _0x22ef27 in _0x1b1249) {
                const _0x34e33c = _0x1b1249[_0x22ef27];
                if (_0x34e33c && _0x34e33c[_0x274001(0x116)]) {
                    let _0x259d05 = _0x22ef27[_0x274001(0x117)]('.');
                    await new Promise(_0x54fc01 => {
                        setTimeout(_0x54fc01, 0x64);
                    }), this[_0x274001(0x109)](JSON[_0x274001(0x118)](_0x34e33c['uiView']), _0x259d05[_0x274001(0xfa)]());
                }
            }
        }
        async [_0x3789cf(0x119)]() {
            var _0x4b94a = _0x3789cf;
            await new Promise(_0x5bfc0a => {
                var _0x31ec24 = _0x22b5;
                Laya['loader']['load']([
                    'views/collectionViewUI.scene',
                    'views/loadingViewUI.scene',
                    'views/reliveDialogUI.scene',
                    'views/resultDialogUI.scene',
                    _0x31ec24(0x11a)
                ], Laya['Handler']['create'](this, _0x5bfc0a));
            });
            var _0x2ac50f = Laya[_0x4b94a(0x114)][_0x4b94a(0x115)];
            for (const _0x22b538 in _0x2ac50f) {
                const _0x553688 = _0x2ac50f[_0x22b538];
                if (_0x553688 && _0x553688['uiView']) {
                    let _0x5c1800 = _0x22b538[_0x4b94a(0x117)]('.')[_0x4b94a(0xfa)]();
                    _0x553688[_0x4b94a(0x116)] = Laya[_0x4b94a(0x11b)][_0x4b94a(0x11c)](_0x4b94a(0x11d) + _0x5c1800 + _0x4b94a(0x11e));
                }
            }
        }
    }
    window[_0x3789cf(0x11f)] = new _0x504d5b();
}());

function _0x3048() {
    var _0x26544c = [
        'this',
        'object',
        'global',
        'Depricated:\x20Expected\x20third\x20argument\x20to\x20be\x20a\x20object',
        'autoBom',
        'type',
        'fromCharCode',
        'responseType',
        'blob',
        'onload',
        'response',
        'onerror',
        'error',
        'could\x20not\x20download\x20file',
        'send',
        'open',
        'dispatchEvent',
        'click',
        'createEvent',
        'initMouseEvent',
        'saveAs',
        'download',
        'prototype',
        'URL',
        'webkitURL',
        'createElement',
        'rel',
        'href',
        'origin',
        'target',
        '_blank',
        'createObjectURL',
        'revokeObjectURL',
        'msSaveOrOpenBlob',
        'document',
        'body',
        'innerText',
        'downloading...',
        'string',
        'application/octet-stream',
        'test',
        'HTMLElement',
        'safari',
        'userAgent',
        'onloadend',
        'result',
        'replace',
        'data:attachment/file;',
        'location',
        'readAsDataURL',
        'function',
        'amd',
        'laya.core',
        'require',
        'exports',
        '__isclass',
        'once',
        '_id',
        'setTo',
        'caller',
        'args',
        'run',
        'method',
        'apply',
        'unshift',
        'concat',
        'recover',
        'clear',
        '_pool',
        'push',
        'pop',
        '_gid',
        'hasListener',
        '_events',
        'event',
        'runWith',
        'length',
        'splice',
        '_createListener',
        'offAll',
        '_recoverHandlers',
        'offAllCaller',
        'off',
        'readyState',
        'readAsText',
        'save',
        '.json',
        'input',
        'style',
        'top',
        'left',
        'file',
        'position',
        'onchange',
        'appendChild',
        'saveui',
        'ClassUtils',
        '_classMap',
        'uiView',
        'split',
        'stringify',
        'readui',
        'views/rewardDialogUI.scene',
        'loader',
        'getRes',
        'views/',
        '.scene',
        'htmlfs',
        '1bQlCua',
        '1388202CwTxEk',
        '5625DVfwfl',
        '1588JxPGdc',
        '6328400GOBPhq',
        '5893824wwBxds',
        '427aWaBIt',
        '1184pdKypJ',
        '9REMNUR',
        '116630gzLPoP',
        '11taJkRs',
        '4891632UxuPka'
    ];
    _0x3048 = function() {
        return _0x26544c;
    };
    return _0x3048();
}