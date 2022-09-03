
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const nav = document.querySelectorAll('.burger-nav')
console.log(nav);
burger.addEventListener('click', () =>
{
    menu.classList.toggle('disp')
});
nav.forEach(el =>
{
    el.addEventListener('click', () =>
    {
        menu.classList.add('disp');
    })
})
const press = document.querySelector('.music');
const radio = document.querySelector('#audio');
var a = 1;
press.addEventListener('click', () =>
{
    a++;
    if (a % 2 == 0) {
        radio.play();
    }
    else {
        radio.pause();
    }

});


// fixed
$(function ()
{
    let header = $("#headerJs");
    let intro = $("#introJs");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function ()
    {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
        // introH 
       
    })
    
});

// scroll

$("[data-scroll]").on("click", function (event)
{
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
        scrollTop: elementOffset -60
    }, 500)
})