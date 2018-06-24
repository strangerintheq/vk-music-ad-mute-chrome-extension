(function () {
    var audio = window.audioLayer;

    if (!audio)
        return;

    audio.toggle();
    audio.hide();

    var wasAd;
    var userVolumeValue;

    var initTaskId = setInterval(init, 10);

    function init() {
        if (!audio._page)
            return;
        clearInterval(initTaskId);
        setInterval(checkAd, 100);
    }

    function checkAd() {
        var isAd = audio._page._trackSlider._adState;
        wasAd && !isAd && mute(false);
        !wasAd && isAd && mute(true);
        wasAd = isAd;
    }

    function mute(b) {
        console.log('mute ' + b);
        if (b) {
            userVolumeValue = audio._page._volumeSlider._currValue;
            audio._page._volumeSlider.setValue(0.000001);
        } else {
            audio._page._volumeSlider.setValue(userVolumeValue);
        }
    }

})();