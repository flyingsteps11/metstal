$(document).ready(function () {

    const owl = $('#catalogue-carousel').owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        autoWidth: true,
        responsive: {
            0: {
                margin: 20,
                items: 1,
            },
            721: {
                margin: 40,
                items: 2,
            },
            1061: {
                margin: 30,
                items: 4,
            }
        },
    });

    $('.catalogue-carousel-next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.catalogue-carousel-prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().css('z-index', "-10").css('opacity', '0');
        } else {
            $('.select__head').removeClass('open');
            $('.select__list');
            $(this).addClass('open');
            $(this).next().css('z-index', "1").css('opacity', '1');
        }
    });
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().css('z-index', '-10').css('opacity', '0');
        $(this).parent().prev().css('color', 'black');
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').css('z-index', '-10').css('opacity', '0');
        }
    });
    $('.item1').click(function () {
        $('.item1').addClass('active-price');
        $('.table-1').removeClass('display-none');
        $('.item2').removeClass('active-price');
        $('.table-2').removeClass('display-tr');
        $('.item3').removeClass('active-price');
        $('.table-3').removeClass('display-tr');
        $('.item5').removeClass('active-price');
        $('.table-5').removeClass('display-tr');
        $('.item6').removeClass('active-price');
        $('.table-6').removeClass('display-tr');
        $('.item7').removeClass('active-price');
        $('.table-7').removeClass('display-tr');
        $('.item8').removeClass('active-price');
        $('.table-8').removeClass('display-tr');
        $('.item4').removeClass('active-price');
        $('.table-4').removeClass('display-tr');
    });
    $('.item2').click(function () {
        $('.item2').addClass('active-price');
        $('.table-2').addClass('display-tr');
        $('.item1').removeClass('active-price');
        $('.table-1').addClass('display-none');
        $('.item3').removeClass('active-price');
        $('.table-3').removeClass('display-tr');
        $('.item5').removeClass('active-price');
        $('.table-5').removeClass('display-tr');
        $('.item6').removeClass('active-price');
        $('.table-6').removeClass('display-tr');
        $('.item7').removeClass('active-price');
        $('.table-7').removeClass('display-tr');
        $('.item8').removeClass('active-price');
        $('.table-8').removeClass('display-tr');
        $('.item4').removeClass('active-price');
        $('.table-4').removeClass('display-tr');
    });
    $('.item3').click(function () {
        $('.item3').addClass('active-price');
        $('.table-3').addClass('display-tr');
        $('.item1').removeClass('active-price');
        $('.table-1').addClass('display-none');
        $('.item2').removeClass('active-price');
        $('.table-2').removeClass('display-tr');
        $('.item5').removeClass('active-price');
        $('.table-5').removeClass('display-tr');
        $('.item6').removeClass('active-price');
        $('.table-6').removeClass('display-tr');
        $('.item7').removeClass('active-price');
        $('.table-7').removeClass('display-tr');
        $('.item8').removeClass('active-price');
        $('.table-8').removeClass('display-tr');
        $('.item4').removeClass('active-price');
        $('.table-4').removeClass('display-tr');

    });
    $('.item4').click(function () {
        $('.item4').addClass('active-price');
        $('.table-4').addClass('display-tr');
        $('.item1').removeClass('active-price');
        $('.table-1').addClass('display-none');
        $('.item2').removeClass('active-price');
        $('.table-2').removeClass('display-tr');
        $('.item3').removeClass('active-price');
        $('.table-3').removeClass('display-tr');
        $('.item5').removeClass('active-price');
        $('.table-5').removeClass('display-tr');
        $('.item6').removeClass('active-price');
        $('.table-6').removeClass('display-tr');
        $('.item7').removeClass('active-price');
        $('.table-7').removeClass('display-tr');
        $('.item8').removeClass('active-price');
        $('.table-8').removeClass('display-tr');
    });
    $('.item5').click(function () {
        $('.item5').addClass('active-price');
        $('.table-5').addClass('display-tr');
        $('.item1').removeClass('active-price');
        $('.table-1').addClass('display-none');
        $('.item2').removeClass('active-price');
        $('.table-2').removeClass('display-tr');
        $('.item3').removeClass('active-price');
        $('.table-3').removeClass('display-tr');
        $('.item4').removeClass('active-price');
        $('.table-4').removeClass('display-tr');
        $('.item6').removeClass('active-price');
        $('.table-6').removeClass('display-tr');
        $('.item7').removeClass('active-price');
        $('.table-7').removeClass('display-tr');
        $('.item8').removeClass('active-price');
        $('.table-8').removeClass('display-tr');
    });
    $('.item6').click(function () {
        $('.item6').addClass('active-price');
        $('.table-6').addClass('display-tr');
        $('.item1').removeClass('active-price');
        $('.table-1').addClass('display-none');
        $('.item2').removeClass('active-price');
        $('.table-2').removeClass('display-tr');
        $('.item3').removeClass('active-price');
        $('.table-3').removeClass('display-tr');
        $('.item4').removeClass('active-price');
        $('.table-4').removeClass('display-tr');
        $('.item7').removeClass('active-price');
        $('.table-7').removeClass('display-tr');
        $('.item8').removeClass('active-price');
        $('.table-8').removeClass('display-tr');
        $('.item5').removeClass('active-price');
        $('.table-5').removeClass('display-tr');
    });
    $('.item7').click(function () {
        $('.item7').addClass('active-price');
        $('.table-7').addClass('display-tr');
        $('.item1').removeClass('active-price');
        $('.table-1').addClass('display-none');
        $('.item2').removeClass('active-price');
        $('.table-2').removeClass('display-tr');
        $('.item3').removeClass('active-price');
        $('.table-3').removeClass('display-tr');
        $('.item4').removeClass('active-price');
        $('.table-4').removeClass('display-tr');
        $('.item8').removeClass('active-price');
        $('.table-8').removeClass('display-tr');
        $('.item5').removeClass('active-price');
        $('.table-5').removeClass('display-tr');
        $('.item6').removeClass('active-price');
        $('.table-6').removeClass('display-tr');
    });
    $('.item8').click(function () {
        $('.item8').addClass('active-price');
        $('.table-8').addClass('display-tr');
        $('.item1').removeClass('active-price');
        $('.table-1').addClass('display-none');
        $('.item2').removeClass('active-price');
        $('.table-2').removeClass('display-tr');
        $('.item3').removeClass('active-price');
        $('.table-3').removeClass('display-tr');
        $('.item4').removeClass('active-price');
        $('.table-4').removeClass('display-tr');
        $('.item5').removeClass('active-price');
        $('.table-5').removeClass('display-tr');
        $('.item6').removeClass('active-price');
        $('.table-6').removeClass('display-tr');
        $('.item7').removeClass('active-price');
        $('.table-7').removeClass('display-tr');
    });
});