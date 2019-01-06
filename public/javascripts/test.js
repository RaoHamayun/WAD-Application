$(document).ready(function(){
    GetProducts()
})


function GetProducts(){
    $.ajax({
        url: "/product",
        method: "GET",
        data: null})
        .done(function(data){            
            var data = data.data;
            console.log(data);
        })
        .fail(function(xhr){
            console.log('error', xhr);
        });
}