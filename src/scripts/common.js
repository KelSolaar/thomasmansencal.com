/*** Common Functions. ***/
function getFlowPlayerSettings() {
    flowPlayerSettings = {
        canvas:
        {
            backgroundGradient: "none",
            backgroundColor: "#202020",
        },
        clip:
        {
            autoPlay: true,
            autoBuffering: true,
            scaling: "fit"
        },
        play:
        {
            height: "64",
            wight: "64",
            opacity: 0,
            replayLabel: "Play Again !",
            fadeSpeed: 500,
            rotateSpeed: 50
        },
        plugins:
        {
            controls:
            {
                borderRadius: "0px",
                timeColor: "rgba(144, 144, 144, 1)",
                bufferGradient: "none",
                slowForward: true,
                backgroundColor: "rgba(32, 32, 32, 0.5)",
                volumeSliderGradient: "none",
                slowBackward: false,
                timeBorderRadius: 20,
                time: true,
                progressGradient: "none",
                height: 24,
                volumeColor: "rgba(160, 160, 160, 1)",
                tooltips:
                {
                    stop: "Stop",
                    slowMotionFBwd: "Fast backward",
                    previous: "Previous",
                    next: "Next",
                    play: "Play",
                    buttons: true,
                    slowMotionFwd: "Slow forward",
                    fullscreen: "Fullscreen",
                    pause: "Pause",
                    unmute: "Unmute",
                    marginBottom: 5,
                    slowMotionFFwd: "Fast forward",
                    fullscreenExit: "Exit fullscreen",
                    scrubber: true,
                    volume: true,
                    slowMotionBwd: "Slow backward",
                    mute: "Mute"
                },
                fastBackward: false,
                opacity: 1,
                timeFontSize: 12,
                volumeSliderColor: "rgba(48, 48, 48, 1)",
                border: "0px",
                bufferColor: "rgba(111, 71, 54, 1)",
                buttonColor: "rgba(48, 48, 48, 1)",
                mute: true,
                autoHide:
                {
                    enabled: true,
                    hideDelay: 1000,
                    mouseOutDelay: 1000,
                    hideStyle: "fade",
                    hideDuration: 1000,
                    fullscreenOnly: false
                },
                backgroundGradient: "none",
                width: "100pct",
                display: "block",
                sliderBorder: "none",
                buttonOverColor: "rgba(144, 144, 144, 1)",
                fullscreen: true,
                timeBgColor: "rgb(0, 0, 0, 0)",
                scrubberBarHeightRatio: 0.2,
                bottom: 0,
                stop: false,
                sliderColor: "rgba(48, 48, 48, 1)",
                zIndex: 1,
                scrubberHeightRatio: 0.6,
                tooltipTextColor: "rgba(128, 128, 128, 1)",
                spacing:
                {
                    time: 6,
                    volume: 8,
                    all: 2
                },
                sliderGradient: "none",
                timeBgHeightRatio: 0.8,
                volumeSliderHeightRatio: 0.6,
                name: "controls",
                timeSeparator: " ",
                volumeBarHeightRatio: 0.2,
                left: "50pct",
                tooltipColor: "rgba(0, 0, 0, 0)",
                playlist: false,
                durationColor: "rgba(160, 160, 160, 1)",
                play: true,
                fastForward: true,
                progressColor: "rgba(160, 160, 160, 1)",
                timeBorder: "none",
                scrubber: true,
                volume: true,
                builtIn: false,
                volumeBorder: "none",
                margins: [2, 6, 2, 12]
            },
        }
    }

    return flowPlayerSettings;
}

function getEmailAddress() {
    var email = "function f(x,y){var i,o=\"\",l=x.length;for(i=0;i<l;i++){y%=127;o+=St" +
    "ring.fromCharCode(x.charCodeAt(i)^(y++));}return o;}f(\"\\021\\r\\027\\031\\" +
    "017\\025\\022\\020 g*{-~pfz)c'c0,-<~~.l;zrv~ns0q#pL\\032UKMIC\\017P\\007ICM" +
    "_m@TTsG\\034Y\\031\\006\\013\\020\\033\\006\\t\\014\\027D43;8<n{?s%av v3,1%" +
    "1;|0\\177,%$<4.u7b\\014LSX\\r[[WS\\000GFE\\026\\001DM\\t\\\\\\020\\034\\024" +
    "\\0046\\014Q\\023RG\\000\\014euwqj%i){|hxx\\177&?<~~:/hp?:0/)0A<$n\\024\\02" +
    "2\\023xy\\021\\013\\020J\\005i\\034\\037\\036sl\\002\\000\\003hi\\006\\004\\" +
    "010efo\\t\\017\\016c\\034pps\\030\\031pux\\025\\026x\\177}\\022\\023bcb\\01" +
    "7\\010aadh\\005\\006hnm\\002\\003RSR?8SUW45\\00470X]_,-ACD)*\\005$%LKL!\\\"" +
    "D313XYr[TgVWxQR}LM\\\"!$IJJX$X(,-BCC\\031\\022\\014\\027\\010^RFuv\\023\\02" +
    "7\\035R\\022\\t\\037\\021\\031\\000\\004\\006kd\\036\\021\\021\\032a\\034c\\" +
    "034tifj)tf\\032\\030\\037\\003}}~\\023\\014\\004\\037\\007\\n\\002\\016aji\\" +
    "006\\0073joo<=569#\\024;4$]Y\\\\12_AA./EEF+$?18-0/U633XYRvsycsypR-8wo({5xem" +
    "m\\177ia&76\\013\\n[\\013z\\014O\\017\\\\hOOCn\\\\NXR\\034K\\034PRX{K[S\\17" +
    "7PQM&o%--72\\024ub%p{\\177\\177ru(iai\\177/~q qnnu`6H\\007\\013\\030MNM\\01" +
    "6S\\005V\\002W]S\\006X\\003\\035\\025O\\035\\002\\020\\026\\034\\026U\\004@" +
    "\\022,] _&8i+a)xjzv'v<i:u4{y~lztnz?7\",119)";
    while (email = eval(email));

    return email;
}

function getYear() {
    var year = new Date();
    year = year.getYear();
    if (year < 1900)
        year += 1900;

    return year;
}

function openExternalLinks() {
    if (!document.getElementsByTagName)
        return;
    var anchors = document.getElementsByTagName("a");
    for (var i=0; i<anchors.length; i++) {
        var anchor = anchors[i];
        if (anchor.getAttribute("href") &&
        anchor.getAttribute("rel") == "openExternalLink")
            anchor.target = "_blank";
    }
}

window.onload = openExternalLinks;