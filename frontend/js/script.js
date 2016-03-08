$(document).ready(function() {
    function t() {
        var e=$(window).width(), t=1;
        if(e>1200) {
            t=4
        }
        else if(e>992&&e<1200) {
            t=4
        }
        else if(e>768&&e<992) {
            t=2
        }
        else if(e>662&&e<768) {
            t=2
        }
        else if(e<662||e<480) {
            t=1
        }
        return t
    }
    function n() {
        var n=$(window).width(), r=t(), i=Math.floor(n/r);
        e.find(".wrapper-portfolio li").each(function() {
            $(this).css( {
                width: i+"px"
            }
            )
        }
        )
    }
    function r() {
        n();
        e.isotope("reLayout")
    }
    $(window).scroll(function() {
        if($(window).scrollTop()>80) {
            $(".navbar").removeClass("navbar-transparent")
        }
        else {
            $(".navbar").addClass("navbar-transparent")
        }
    }
    );
    if($(window).scrollTop()>80) {
        $(".navbar").removeClass("navbar-transparent")
    }
    $("#header").parallax();
    $(window).bind("resize", function() {
        r()
    }
    );
    var i=$(".container-post");
    i.imagesLoaded(function() {
        i.masonry()
    }
    );
    $("#map").gmap3( {
        map: {
            options: {
                center: [-7.866315, 110.389574], zoom: 10, scrollwheel: false
            }
        }
        , marker: {
            latLng:[-7.866315, 110.389574], options: {
                icon: new google.maps.MarkerImage("https://dl.dropboxusercontent.com/u/29545616/Preview/location.png", new google.maps.Size(48, 48, "px", "px"))
            }
        }
    }
    )
}

)