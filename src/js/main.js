$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsive:{
            0:{
                items:2
            },
            350:{
                items:3
            },
            450:{
                items:4
            },
            600:{
                items:5
            },
            800:{
                items:7
            },
            1000:{
                items:8
            },
            1200:{
                items:10
            },
            1500:{
                items:13
            }
        }
    });
});