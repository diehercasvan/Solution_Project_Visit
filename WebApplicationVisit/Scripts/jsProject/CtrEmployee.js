/*
**********************************************
Create :DIEGO CASALLAS
Date :26/10/2016

*/
//Declarate Variable 
var sNameTitle="Empleado"
//Start DOM html jQuery
$(document).ready(function () {


    $('.button-collapse').sideNav();
    selectionItem("item_0");
    $('.modal-trigger').leanModal();
    $('select').material_select();
  //validateSession(document.URL);

});

//Function select Item 
function selectionItem(item) {
    let items = "#item_";
    for (var i = 0; i < 2; i++) {
        $(items+i).css('color', 'black');
    }
    $(items + item).css('color', '#29b6f6');
    selectionSubItems(item + "_0"," ", 0);
  
}
function selectionItem(item) {
    let items = item.replace("item", "subItem") + "_0";
    $('.collapsible - header').css('color', 'black');
    $('.collapsible - header').css('color', 'black');
    $("#" + item + "").css('color', '#29b6f6');
    selectionSubItems(items, "0_0", false, false)
}
//Function select sub Items
function selectionSubItems(subItem, Form, cont_search) {

    let items = "#" + subItem + "";

    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");

    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = $(items).text();
    $('#titleForm ' + sNameTitle).text(text);


    if (cont_search) {
        $('#cont_search_' + Form).css("display", "block");
        disableEnableInput(Form, 0)
    } else {
        $('#cont_search_' + Form).css("display", "none");
        disableEnableInput(Form, 1)
    }
    selectForm(Form);


}
//Function select Item mobile
function selectionMitem(item) {
    let items = item.replace("mItem","mSubItem")+"_0";
    $('.collapsible - header').css('color', 'black');
    $('.collapsible - header').css('color', 'black');
    $("#"+item+"").css('color', '#29b6f6');
    selectionMsubItems(items, "0_0", false, false)

    

}
//Function select sub Items Mobile
function selectionMsubItems(subItem, Form, cont_search, nav_mobile) {

    let items = "#" + subItem+"";

    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");

    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = $(items).text();
    $('#titleForm '+sNameTitle).text(text);
 
    if (nav_mobile) {
        if ($('.button-collapse').is(":visible")) {
            $('.button-collapse').sideNav('hide');
        }
    }
    
    if (cont_search) {
        $('#cont_search_' + Form).css("display", "block");
        disableEnableInput(Form, 0)
    } else {
        $('#cont_search_' + Form).css("display", "none");
        disableEnableInput(Form, 1)
    }
    selectForm(Form);

}
//Function select form  
function selectForm(dataForm) {
    $(".form_select").css("display", "none");
    let form = '#form' + dataForm;
    $(form).fadeIn("slow");
    clearInput(form);
}
//Function validate create
//Load data of form
function validateCreate(e) {

    //Get data input text 

    e.preventDefault();//not reload page
}
//Load data of form
function validateUpdate(e) {

    //Get data input text 

    e.preventDefault();//not reload page
}
//Load data of form
function validateDelete(e) {

    //Get data input text 

    e.preventDefault();//not reload page
}
//Load data of form
function validateSearch(e) {

    //Get data input text 

    e.preventDefault();//not reload page
}
