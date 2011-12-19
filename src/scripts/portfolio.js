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
        scrolling: false,
        title: function() {
            return $(this).attr("type");
        }
    });
    $(".linksColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 480,
        innerHeight: 760,
        scrolling: false,
        title: function() {
            return $(this).attr("type");
        }
    });
    $(".resumeIframeColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 960,
        innerHeight: 3900,
        scrolling: false,
        title: function() {
            return $(this).attr("type");
        }
    });
    $(".aboutIframeColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 960,
        innerHeight: 672,
        scrolling: false,
        title: function() {
            return $(this).attr("type");
        }
    });
    $(".breakdownShowreel2010IframeColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 960,
        innerHeight: 1080,
        scrolling: false,
        title: function() {
            return $(this).attr("type");
        }
    });
    $(".pictureColorbox").colorbox(
    {
        maxHeight: "90%",
        maxWidth: "90%",
        title: function() {
            return $(this).attr("type");
        }
    });
    $(".informationsColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 480,
        innerHeight: 320,
        scrolling: false,
        title: function() {
            return $(this).attr("type");
        }
    });
    $(".video272pColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 640,
        innerHeight: 272,
        scrolling: false,
        title: function() {
            return $(this).attr("type");
        }
    });
    $(".video720pColorbox").colorbox(
    {
        iframe: true,
        innerWidth: 1280,
        innerHeight: 720,
        scrolling: false,
        title: function() {
            return $(this).attr("type");
        }
    });
});