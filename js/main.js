$(document).ready(function() {

    // Проверка на тип устройства
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {
        $('video').addClass('hidden');
    } else {}
});

// подсказки для форм (можноу удалить)

$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});

// Модальное окно

$(".popup-form").fancybox({
    "padding" : 0
});


//  слайдер

$('.reply').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.nav-prev').click(function(){
    $('.reply').slick('slickPrev');
});

$('.nav-next').click(function(){
    $('.reply').slick('slickNext');
});



$('.detail-link').click(function(){
    var prntHldr  = $(this).closest('li');
    if(prntHldr.hasClass('active')){
        prntHldr.find('.detail').fadeOut(function(){
            prntHldr.removeClass('active');
        });

    } else{
        $('li .detail').hide();
        prntHldr.addClass('active').siblings().removeClass('active');
        prntHldr.find('.detail').fadeIn();
    }
    return false;
});

$('li .icon-close').click(function(){
    var prntHldr  = $(this).closest('li');
    $(this).closest('.detail').fadeOut(function(){
        prntHldr.removeClass('active');
    })
    return false;
});



$('.address-nav').tabs();

// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
        center: [55.7502,49.1969], // Казань
        zoom: 16,
        controls: []
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: ''
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/placemark.png',
        // Размеры метки.
        iconImageSize: [50, 63],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -65]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);

    $('#map1').bind({
        click: function () {

            myMap.destroy();
            myMap = new ymaps.Map('map', {
                center: [55.7502,49.1969], // Москва
                zoom: 16,
                controls: []
            });

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark.png',
                iconImageSize: [50, 63],
                iconImageOffset: [-25, -65]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        }
    });

    $('#map2').bind({
        click: function () {

            myMap.destroy();
            myMap = new ymaps.Map('map', {
                center: [55.7220,37.5950], // Москва
                zoom: 16,
                controls: []
            });

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark.png',
                iconImageSize: [50, 63],
                iconImageOffset: [-25, -65]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        }
    });

    $('#map3').bind({
        click: function () {

            myMap.destroy();
            myMap = new ymaps.Map('map', {
                center: [48.7054,44.5202], // Волгоград
                zoom: 16,
                controls: []
            });

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark.png',
                iconImageSize: [50, 63],
                iconImageOffset: [-25, -65]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        }
    });

    $('#map4').bind({
        click: function () {

            myMap.destroy();
            myMap = new ymaps.Map('map', {
                center: [51.6615,39.2003], // Воронеж
                zoom: 16,
                controls: []
            });

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/placemark.png',
                iconImageSize: [50, 63],
                iconImageOffset: [-25, -65]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        }
    });

}