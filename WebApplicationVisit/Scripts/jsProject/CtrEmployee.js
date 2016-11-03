/*
**********************************************
Create :DIEGO CASALLAS
Date :26/10/2016

*/
//Declarate Variable 
var sNameTitle = "";
var oObjectUser;
var dataJson= new Object();
var typeTatble = 0;
//Start DOM html jQuery
$(document).ready(function () {

    $('.button-collapse').sideNav();
    selectionItem("item_0");
    $('.modal-trigger').leanModal();
   
    //validateSession(document.URL);
    //Load list
    $('select').material_select();
    dataJson.bemp_state = true;
    dataJson.iBra_buis_id = 1;
    dataJson.bEmp_type_select = true;
    typeTatble = 0;
   // _getList(0);
    //_getListRol();
    //_getListPermission();
    
});

//Function select Item 
function selectionItem(item) {
    let titleSelection = $('#' + item + '').attr("title");
    sNameTitle = titleSelection;
    let items = item.replace("item", "subItem") + "_0";
    $('.collapsible - header').css('color', 'black');
    $("#" + item + "").css('color', '#29b6f6');
    selectionSubItems(items, "0_0", false, false);
    
}
//Function select sub Items
function selectionSubItems(subItem, Form, cont_search) {

    let items = "#" + subItem + "";

    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");
    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = sNameTitle+" "+$(items).text();
    $('#titleForm ').text(text);


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
    let titleSelection = $('#' + item + '').attr("title");
    sNameTitle = titleSelection;
    let items = item.replace("mItem","mSubItem")+"_0";
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
    let text = sNameTitle+" "+$(items).text();
    $('#titleForm ').text(text);

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
//Function  validate text box
function validateTextBox(e) {

    let bValidate = true;
    let listTextBox = new Array();
    let listSelect = new Array();
    let textInfoForm = $('#textInfoForm');
    textInfoForm.css('color', 'red');
    listTextBox[0] = $('#emp_name');
    listTextBox[1] = $('#emp_surname');
    listTextBox[2] = $('#emp_address');
    listTextBox[3] = $('#emp_document');

    let sMail = $('#emp_mail');
    let sMail2 = $('#emp_mail2');

    let sPassword = $('#emp_password');
    let sPassword2 = $('#emp_password_confirm');

    listSelect[0] = $('#listPermission');
    listSelect[1] = $('#listBraBusiness');
    listSelect[2] = $('#listRole');



    if ((!validateBoxText(listTextBox)) ) {
        bValidate = false;
        textInfoForm.text("Verifique los datos de los contenidos");
    } else if(!validateBoxEmail(sMail)) {

        textInfoForm.text("Verifique los datos de su cuenta de correo");
        bValidate = false
    }
    else if (sMail2.val().toLowerCase() === sMail.val().toLowerCase()) {
        textInfoForm.text("Los email deben ser diferentes");
        sMail2.addClass('invalid');
        sMail.addClass('invalid');
        bValidate = false;
    }
    else if(!validateBoxPassword(sPassword)) {
           textInfoForm.text('Tenga en cuenta :Mínimo 8 caracteres, máximo 15, al menos una letra mayúscula, al menos una letra minúscula, al menos un carácter, no espacios en blanco.');
           bValidate = false;
   } else if(!validateBoxPasswordConfirm(sPassword, sPassword2)){
            textInfoForm.text("Las constraseñas no coinciden ");
                bValidate = false;
       
    }else if (!validateSelectList(listSelect)) {
                textInfoForm.text("Seleccione una opción de las listas");
                    bValidate = false;
        } else {
            if (sMail2.val().toLowerCase().length > 1 || sMail2.val().toLowerCase() != "") {
                if (!validateBoxEmail(sMail2)) {
                    textInfoForm.text("Verifique los datos de su cuenta de correo");
                    bValidate = false
                }
                
            }
            if ((listSelect[0].val().length < 1) || (!bValidate)) {
                textInfoForm.text("Seleccione una opción de las listas");
                bValidate = false;
            } else {
                textInfoForm.text("");
                $('input').removeClass('invalid');
            }
           
                        /* sMail.removeClass('invalid');
                         sMail2.removeClass('invalid');
                         if (sMail2.val().length <= 0) {
                             textInfoForm.text("Verifique los datos de los contenidos");
                             bValidate = false;
                         } else {
                             if (!validateBoxEmail(sMail2)) {
                                 textInfoForm.text("Verifique los datos de su cuenta de correo");
                                 bValidate = false;
                             } else {
                                 textInfoForm.text("");
                             }
                         }
                        */
                       
    }
    
                        
                
   

    if (bValidate) {
        
            dataJson.iRol_id = parseInt(listSelect[2].val());
            dataJson.sEmp_name = listTextBox[0].val().toLowerCase();
            dataJson.sEmp_document = listTextBox[3].val().toLowerCase();
            dataJson.sEmp_surname = listTextBox[1].val().toLowerCase();
            dataJson.sEmp_phone = $('#emp_phone').val();
            dataJson.sEmp_phone2 = $('#emp_phone2').val();
            dataJson.sEmp_cell_phone = $('#emp_cel_phone').val();
            dataJson.sEmp_cell_phone2 = $('#emp_cel_phone2').val();
            dataJson.sEmp_addres = listTextBox[2].val().toLowerCase();
            dataJson.sEmp_mail = sMail.val().toLowerCase();
            dataJson.sEmp_mail2 = sMail2.val().toLowerCase();
            dataJson.sEmp_password = sPassword.val();
            dataJson.sEmp_photo = $('#emp_photo').val().toLowerCase();
            dataJson.sEmp_permission = listSelect[0].val();
            dataJson.iBra_buis_id = parseInt(listSelect[1].val());
            console.log(dataJson);

    }
    else {
        alert("Valida la información");

    }

    e.preventDefault();
    return false;
}



//Function database 
//Function get list user  
function _getList() {
    //debugger;   
    $.ajax({
        url: "/Employee/ListEmployee",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: dataJson,
        dataType: "json",
        success: function (result) {
            createTable(result);
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
//Function get role
function _getListRol() {
    //debugger;
    $.ajax({
        url: "/Employee/ListUserSelectRole",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            let select = $('#listRole');
            select.append('<option value="" disabled selected>Elija su opción</option>');
            $.each(result, function (val, item) {
                select.append('<option value="' + val + '">' + item.sRol_name + '</option>');
            });
            select.material_select();
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
//Function get Permission 
function _getListPermission() {
    //debugger;
    $.ajax({
        url: "/Employee/ListUserSelectPermission",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            let select = $('#listPermission');
            select.append('<option value="" disabled selected>Elija su opción</option>');
            $.each(result, function (val, item) {
                select.append('<option value="' + val + '">' + item.sPermission_name + '</option>');
            });
            select.material_select();
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
//Function  search employee
function searchEmployee(e) {
    
    let listSelection = $('#listSearchEmployee').val();
    let textSearch = $("#emp_search").val();
    typeTatble = 0;
    let bValidate = true;
    if ((expressionData.test(textSearch) || textSearch.length == 0) && (listSelection == null)) {
        dataJson.bEmp_type_select = true;
       
        _getList();
 
    } else {
        if ((expressionData.test(textSearch) || textSearch.length == 0) && (listSelection != null)) {
            bValidate = false;   
        }
        if ((!expressionData.test(textSearch) || textSearch.length != 0) && (listSelection == null)) {
            bValidate = false;
        }
        if(!bValidate) {
            alert("Vefirique la seleccion");           
        }else{
            dataJson.bEmp_type_select = false;
            switch (listSelection) {
                case 'sEmp_name':
                    dataJson.sEmp_name = textSearch;
      
                    break;
                case 'sEmp_surname':
                    dataJson.sEmp_surname = textSearch;
              
                    break;
                case 'sEmp_document':
                    dataJson.sEmp_document = textSearch;
                
                    break;
                case 'sEmp_mail':
                    dataJson.sEmp_mail = textSearch;
                  
                    break;
                case 'sRol_name':
                    dataJson.sEmp_mail = textSearch;
                    
                    break;   
            }
            _getList();
        }
    }
    e.preventDefault();
}
//Fuction search employeed delete 
function searchEmployeeDelete(e) {
    let listSelection = $('#listSearchEmployeeDelete').val();
    let textSearch = $("#emp_search_delete").val();
    typeTatble = 1;
    let bValidate = true;
    if ((expressionData.test(textSearch) || textSearch.length == 0) && (listSelection == null)) {
        dataJson.bEmp_type_select = true;
        _getList();
    } else {
        if ((expressionData.test(textSearch) || textSearch.length == 0) && (listSelection != null)) {
            bValidate = false;
        }
        if ((!expressionData.test(textSearch) || textSearch.length != 0) && (listSelection == null)) {
            bValidate = false;
        }
        if (!bValidate) {
            alert("Vefirique la seleccion");
        } else {
            dataJson.bEmp_type_select = false;
            switch (listSelection) {
                case 'sEmp_name':
                    dataJson.sEmp_name = textSearch;

                    break;
                case 'sEmp_surname':
                    dataJson.sEmp_surname = textSearch;

                    break;
                case 'sEmp_document':
                    dataJson.sEmp_document = textSearch;

                    break;
                case 'sEmp_mail':
                    dataJson.sEmp_mail = textSearch;

                    break;
                case 'sRol_name':
                    dataJson.sEmp_mail = textSearch;

                    break;
            }
            _getList();
        }
    }
    e.preventDefault();
}
//Function delete employeed 
function deleteEmployeed(id) {
    let value = confirm("Esta seguro de realizar esta acción");
    alert(id);
    /*if (value) {
        dataJson.iEmp_id = id;
        debugger;
        $.ajax({
            url: "/Employee/EmployeeDelete",
            cache: false,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            data: dataJson,
            dataType: "json",
            success: function (result) {
                console.log(result);
                if (result) {
                    searchEmployeeDelete(e);
                }
                else {
                    alert("Se presento un error al realizar esta  acción");
                }
            },
            error: function (errorMessage) {
                alert(errorMessage.responseText);
            }
        });
    } else {
  
    }*/
   
}



