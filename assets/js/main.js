window.addEventListener("scroll",function(){
    var header = document.querySelector("#header-section");
    header.classList.toggle("sticky", window.scrollY > 0);
})

$('i.fa-bars').on('click', function(){
    $('.nav-section ul').toggleClass('active');
    $('.fa-bars').toggleClass('active');
    $('.fa-times').toggleClass('active');
})
$('i.fa-times').on('click',function(){
    $('.nav-section ul').removeClass('active');
    $('.fa-bars').removeClass('active');
    $('.fa-times').removeClass('active');
})
// Banner section js 
$('.banner-section.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    animateOut: 'fadeOut',
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// Welcome section js 
// $('.sidebar-slider .owl-carousel').owlCarousel({
//     loop:true,
//     margin:15,
//     nav:false,
//     dots: false,
//     mouseDrag: true,
//     autoplay: true,
//     autoplayTimeout: 1500,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })


// New slider section js 
$('.new-item-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    mouseDrag: true,
    autoplay: false,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// Testimonial slider section js 
// $('.testimonial-slider.owl-carousel').owlCarousel({
//     loop:true,
//     margin:15,
//     nav:false,
//     dots: true,
//     mouseDrag: true,
//     autoplay: false,
//     autoplayTimeout: 1500,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })



//Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } 
    else {
        scrollTop.addClass("active");
    }
});

//Click event to scroll to top
$('.scrollToTop').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});