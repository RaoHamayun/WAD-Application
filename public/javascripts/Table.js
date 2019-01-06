$( document ).ready(function() {
    getCustomerCount()
    getSales()
    getOrders()
});

function getOrders(){
    $.ajax({
        url: "/order",
        method: "GET",
        data: null})
        .done(function(data){            
            var data = data.data;
            $('#OrderTblBdy').empty();
            for(i=0;i< data.length;i++){
                var status = data[i].status;
                if (status == 1)
                {
                    status = "<span class='badge-dot badge-brand mr-1'></span>InTransit "
                }
                else
                {
                    status = "<span class='badge-dot badge-success mr-1'></span>Delivered"
                }
                var row = "<tr>"
                                +"<td>"+data[i].id+"</td>"
                                +"<td>"+data[i].customerName+"</td>"
                                +"<td>"+data[i].ProductName+"</td>"
                                +"<td>"+data[i].Qty+"</td>"
                                +"<td>"+data[i].id+"</td>"
                                +"<td>"+status+"</td>"
                            +"<tr>"
                $('#OrderTblBdy').append(row);
            }
            
        })
        .fail(function(xhr){
            console.log('error', xhr);
        });
}
function getCustomerCount(){
   
    $.ajax({
        url: "/order/GetCustomerCount",
        method: "GET",
        data: null})
        .done(function(data){    
            $('#NewCustomer').text(data.customerCount[0].id);
        })
        .fail(function(xhr){
            console.log('error', xhr);
        });
}
function getSales(){
    
    $.ajax({
        url: "/order/GetSales",
        method: "GET",
        data: null})
        .done(function(data){    
            $('#salesTotal').text(data.GetSales[0].id);
        })
        .fail(function(xhr){
            console.log('error', xhr);
        });
}
