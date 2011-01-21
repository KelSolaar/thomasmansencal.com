/*** Portfolio Functions. ***/
$(document).ready( function() {
    // Layering Effect.
    $("div.layer").hover( function() {
        $(this).stop().animate(
        {
            "opacity": "0"
        }, "slow");
    }, function() {
        $(this).stop().animate(
        {
            "opacity": "1"
        }, "slow");
    });
    // Colorbox Setup.
    $(".newsColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 960,
        innerHeight: 340,
        scrolling: false
    });
    $(".linksColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 480,
        innerHeight: 760,
        scrolling: false
    });
    $(".resumeIframeColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 960,
        innerHeight: 3360,
        scrolling: false
    });
    $(".aboutIframeColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 960,
        innerHeight: 672,
        scrolling: false
    });
    $(".pictureColorbox").colorbox(
    {
        maxHeight: "90%",
        maxWidth: "90%"
    });
    $(".informationsColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 480,
        innerHeight: 320,
        scrolling: false
    });
    $(".video272pColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 640,
        innerHeight: 272,
        scrolling: false

    });
    $(".video720pColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 1280,
        innerHeight: 720,
        scrolling: false

    });
});