$(document).ready(main);

var a = 2 ;

function main() {
    $('.menubar').click(function(){
        if(a == 2){
            $('nav').animate({
                    left: '0'
            },700);
            a = 1;
        } else {
            a = 2;
            $('nav').animate({
                    left: '-100%'
            },700);    }
    });
    $('section').click(function(){
    if(a == 1){
        a = 2;
            $('nav').animate({
                    left: '-100%'
        },700);}});}