var uptap; !
function(n) 
{
	function getQueryVariable(variable)
	{
		
		var url='';
		try { 
			url = window.top.document.referrer ; 
		} catch(M) { 
			if (window.parent) { 
			  try { 
				url = window.parent.document.referrer;
			  } catch(L) { 
				url = "";
			  } 
			} 
		}
		try{
			if (url === "") { 
				url = document.referrer;
			}
			var query = url.substring(url.indexOf('?')+1);
			var vars = query.split("&");
			for (var i=0;i<vars.length;i++) {
			   var pair = vars[i].split("=");
			   if(pair[0] == variable){return pair[1];}
			}
		}catch(e){}
	   return "";
	}
	/************************************** Vconsole ***************************************/
	initVconsole = function()
	{
		window.vConsole = new window.VConsole({
		  onReady: function() {
			console.log('vConsole is ready.');
		  },
		  onClearLog: function() {
			console.log('on clearLog');
		  }
		});
	}
	var debug = getQueryVariable("debug");
	if(debug == 1)
	{
		var script1 = document.createElement('script');
		script1.type = 'text/javascript';
		script1.src = '//cdn.iwantalipstick.com/api/vconsole.min.js';
		document.head.appendChild(script1);
		if(script1.readyState)
		{
			if( script1.readyState == 'loaded' || script1.readyState == 'compvare' )
			{
				script1.onreadystatechange = null;
				initVconsole();
			}
		}
		else
		{
			script1.onload = function()
			{
				initVconsole();
			}
		}
	}
	/************************************** Vconsole ***************************************/

	var platform = getQueryVariable("platform");
	
	
	var isMi = platform.indexOf("mi") == -1?false:true;
	isMi = false;
	if(isMi)
	{
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
		script.setAttribute("data-ad-channel", "6681491711");
		script.setAttribute("data-ad-client", "ca-pub-9209477879340784");
		script.setAttribute("data-ad-frequency-hint", "20s");
		document.head.appendChild(script);
		if(script.readyState)
		{
			if( script.readyState == 'loaded' || script.readyState == 'compvare' )
			{
				script.onreadystatechange = null;
				initAdData();
			}
		}
		else
		{
			script.onload = function()
			{
				initAdData();
			}
		}
	}
	initAdData = function()
	{
		var script = document.createElement("script");
		script.type = "text/javascript";
		var html1 = 'window.adsbygoogle = window.adsbygoogle || []; var adBreak = adConfig = function(o) {adsbygoogle.push(o);}';
		script.innerHTML = html1;
		document.body.appendChild(script);
	}
	
    
	
    var d = null,
    i = null,
    t = null,
    a = null,
    w = null,
	z = null,
    ouligei = !1;
    function e() 
	{
        if (!ouligei) {
            function n(n) 
			{
                var o = n.data;
                if (o) 
				{
                    var e = o.cmd;
                   // "Login_out" === e ? d && d(o.data) : "ShowVideoAdv_out" === e ? i && i(o.data) : "ShowTitleAdv_out" === e ? t && t(o.data) : "ShowExcitationVideoAdv_out" === e ? a && a(o.data) : "ShowScreenVideo_out" === e && w && w(o.data)
					switch (e) 
					{
						case "Login_out":
							d && d(o.data)
							break;
						case "ShowVideoAdv_out":
							i && i(o.data)
							break;
						case "ShowTitleAdv_out":
							t && t(o.data)
							break;
						case "ShowExcitationVideoAdv_out":
							a && a(o.data)
							break;
						case "ShowScreenVideo_out"://鎻掑睆
							w && w(o.data)
							break;
						case "UpdataScore_out":
							z && z(o.data)
							break;
					}
				
                }
            }
            void 0 !== window.addEventListener ? window.addEventListener("message", n, !1) : void 0 !== window.attachEvent && window.attachEvent("message", n),
            ouligei = !0
        }
    }
    n.Register = e,
    n.Login = function(n) {
        e(),
        d = n,
        window.parent.postMessage({
            cmd: "Login"
        },
        "*")
    },
    n.HideLoading = function() {
        window.parent.postMessage({
            cmd: "HideLoading"
        },
        "*")
    },
    n.Share = function() {
        window.parent.postMessage({
            cmd: "Share"
        },
        "*")
    },
    n.ShowVideoAdv = function(n) {
        i = n,
        window.parent.postMessage({
            cmd: "ShowVideoAdv"
        },
        "*")
    },
    n.ShowBannerAdv = function(n) {
        var o = {
            cmd: "ShowBannerAdv",
            bannerAdvSize: n
        };
        window.parent.postMessage(o, "*")
    },
    n.HideBannerAdv = function() {
        window.parent.postMessage({
            cmd: "HideBannerAdv"
        },
        "*")
    },
    n.ShowTitleAdv = function(n) {
        t = n,
        window.parent.postMessage({
            cmd: "ShowTitleAdv"
        },
        "*")
    },
    n.ShowExcitationVideoAdv = function(n) {
        a = n;
		if(false)
		{
			clearTimeout(iTime);
			var iTime = setTimeout("countSecond()", 1200);
			adBreak({
				type: 'next',  // ad shows at start of next level
				name: 'next_stage',
				beforeBreak:function (){
					console.log("鏂扮増鎻掑睆AFG骞垮憡寮€濮嬫挱鏀撅紒");
					clearTimeout(iTime);
				},
				afterBreak: function (){
					console.log("鏂扮増鎻掑睆AFG骞垮憡鎾斁瀹屾瘯锛�");
					var outObj = {"cmd":"ShowExcitationVideoAdv_out","data":{"type":"3"}};
					window.postMessage(outObj, "*");
				}
			});
			countSecond = function()
			{
				 window.parent.postMessage({cmd: "ShowExcitationVideoAdv"},"*")
			}
		}
		else{
			 window.parent.postMessage({cmd: "ShowExcitationVideoAdv"},"*")
		}
       
    },
    n.ShowScreenVideo = function(n, o) {
        w = o;
        var e = {
            cmd: "ShowScreenVideo",
            nodeName: n
        };
		if(isMi)
		{
			clearTimeout(iTime);
			var iTime = setTimeout("countSecond()", 1000);
			adBreak({
				type: 'next',  // ad shows at start of next level
				name: 'next_stage',
				beforeBreak:function (){
					console.log("鏂扮増鎻掑睆AFG骞垮憡寮€濮嬫挱鏀撅紒");
					clearTimeout(iTime);
				},
				afterBreak: function (){
					console.log("鏂扮増鎻掑睆AFG骞垮憡鎾斁瀹屾瘯锛�");
					var outObj = {"cmd":"ShowScreenVideo_out","data":{"type":"3"}};
					window.postMessage(outObj, "*");
				}
			});
			countSecond = function()
			{
				window.parent.postMessage(e, "*")
			}
		}
		else{
			window.parent.postMessage(e, "*")
		}
    },
    n.UpdataScore = function(n, o) {
        z = o;
        var e = {
            cmd: "UpdataScore",
            score: n
        };
        window.parent.postMessage(e, "*")
    },
	
	n.GameEvent = function(n, o) {
        //z = o;
        var e = {
            cmd: "GameEvent",
            eventName: n,
			eventNum:0
        };
        window.parent.postMessage(e, "*")
    },
	//闀块渿鍔�
	n.VibrateShort = function(){
		var e = {
            cmd: "Vibrate",
			type:"short",
            times: 30
        }
		window.parent.postMessage(e, "*")
	},
	//鐭渿鍔�
	n.VibrateLong = function(){
		var e = {
            cmd: "Vibrate",
			type:"long",
            nodeName: 400
        }
		window.parent.postMessage(e, "*")
	}
	
} (uptap = uptap || {});