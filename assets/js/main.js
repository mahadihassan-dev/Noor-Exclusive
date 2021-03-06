$(document).ready(function() {
    // Banner Slider at Home
    $('.product_banner_slide_track').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Avaiable Product Slider at Home
    $('.available_product_card_track').slick({
        infinite: true,
        arrows: false,
        prevArrow: '<i class="bi av_pr_btn av_pr_prevbtn bi-chevron-left"></i>',
        nextArrow: '<i class="bi av_pr_btn av_pr_nextbtn bi-chevron-right"></i>',
        autoplay: true,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6
    });

    // Most Reviewd Products at Home
    $('.h_product_card_slide_track').slick({
        infinite: true,
        arrows: false,
        prevArrow: '<i class="bi av_pr_btn av_pr_prevbtn bi-chevron-left"></i>',
        nextArrow: '<i class="bi av_pr_btn av_pr_nextbtn bi-chevron-right"></i>',
        autoplay: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6
    });



    // Customer Reviews at Home
    $('.customer_review_track').slick({
        infinite: true,
        arrows: false,
        prevArrow: '<i class="bi av_pr_btn av_pr_prevbtn bi-chevron-left"></i>',
        nextArrow: '<i class="bi av_pr_btn av_pr_nextbtn bi-chevron-right"></i>',
        autoplay: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    // Single Product Image
    $('.spi_img_sm_nav_slide').slick({
        infinite: true,
        arrows: false,
        prevArrow: '<i class="bi av_pr_btn av_pr_prevbtn bi-chevron-left"></i>',
        nextArrow: '<i class="bi av_pr_btn av_pr_nextbtn bi-chevron-right"></i>',
        autoplay: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.spi_img_big_slide_tray',
    });

    $('.spi_img_big_slide_tray').slick({
        infinite: true,
        arrows: false,
        prevArrow: '<i class="bi av_pr_btn av_pr_prevbtn bi-chevron-left"></i>',
        nextArrow: '<i class="bi av_pr_btn av_pr_nextbtn bi-chevron-right"></i>',
        autoplay: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.spi_img_sm_nav_slide',
    });

});