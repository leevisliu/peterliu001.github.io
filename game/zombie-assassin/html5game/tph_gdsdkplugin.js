window["GD_OPTIONS"] = {
    "gameId": gml_Script_gmcallback_gd_id(),
    "onEvent": function(event) {
        switch (event.name) {
            case "SDK_GAME_START":
                gml_Script_gmcallback_gd_start();
                break;
            case "SDK_GAME_PAUSE":
                gml_Script_gmcallback_gd_pause();
                break;
            case "SDK_GDPR_TRACKING":
				gml_Script_gmcallback_gd_tracking();
                break;
            case "SDK_GDPR_TARGETING":
				gml_Script_gmcallback_gd_targeting();
                break;
			case "SDK_ERROR":
				console.log("Could not load the GameDistribution SDK!");
				break;
        }
    },
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = assets_path+'/js/main.min.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'gamedistribution-jssdk'));

function showAd(onSuccess, onError, ...args){
	var tmp = args[0]
    gml_Script_gmcallback_on_ad_response(null,null, onSuccess, true, ...tmp)
}

function showRewardedAd(onSuccess, onError, ...args){
	var tmp = args[0]
    console.log('showRewardedAd');
    gml_Script_gmcallback_on_ad_response(null,null, onSuccess, true, ...tmp)

}
