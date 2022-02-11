const navbarBtn = document.querySelector(".nav-btn");
const sideBar = document.querySelector(".sidebar");
const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const content = document.querySelector(".content");

$(navbarBtn).click(function() {
    $( sideBar ).toggleClass( "active" )
    $( wrapper ).toggleClass( "active" )
    $( container ).toggleClass( "active" )
    $( content ).toggleClass( "active" )
    $( this ).toggleClass( "active" )
    })