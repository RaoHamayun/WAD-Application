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
            $('#FoodItems').empty();
            var rowCounter = 0
            var eend = 0;
            var childDiv = "<div class='row'>"
            for(i=0;i < data.length;i++)
            {
                if (eend == (data.length)-1)
                {
                    var aid = data[i].id 
                        var div = "<div class='single-dish col-lg-3'>"
                                +"<h5 class='text-uppercase'>"+data[i].ProductName+"</h5>"
                                +"<br>"
                                +"<div class='thumb'>"
                                +"<img class='img-fluid'  src="+data[i].ImagePath+" alt=''>"
                                +"</div>"
                                +"<div class='row'>"
                                +"<div class='col-lg-4'><button type='button' onclick='sayhello( "+ aid +");' class='btn btn-warning' id="+data[i].id+">Order Now</button></div>"
                                +"<div class='col-md-8'><label id=priceId"+data[i].id+" class='pull-right order'>Rs."+data[i].Price+"</label></div>"
                                +"</div>"
                                +"</div>";
                        childDiv = childDiv + div
                        childDiv = childDiv+"</div>"
                        $('#FoodItems').append(childDiv);
                }
                else
                {
                    
                    if(rowCounter == 4)
                    {
                        rowCounter = 0;
                        childDiv = childDiv+"</div>"
                        $('#FoodItems').append(childDiv);
                        childDiv = "<div class='row'>"
                        var div =       "<div class='single-dish col-lg-3'>"
                                +"<h5 class='text-uppercase'>"+data[i].ProductName+"</h5>"
                                +"<br>"
                                +"<div class='thumb'>"
                                +"<img class='img-fluid'  src="+data[i].ImagePath+" alt=''>"
                                +"</div>"
                                +"<div class='row'>"
                                +"<div class='col-lg-4'><button type='button' onclick='sayhello( "+ aid +");' class='btn btn-warning' id="+data[i].id+">Order Now</button></div>"
                                +"<div class='col-md-8'><label id=priceId"+data[i].id+" class='pull-right order'>Rs."+data[i].Price+"</label></div>"
                                +"</div>"
                                +"</div>";
                        childDiv = childDiv + div
                    }
                    else
                    {
                        var aid = data[i].id 
                        var div =       "<div class='single-dish col-lg-3'>"
                                +"<h5 class='text-uppercase'>"+data[i].ProductName+"</h5>"
                                +"<br>"
                                +"<div class='thumb'>"
                                +"<img class='img-fluid'  src="+data[i].ImagePath+" alt=''>"
                                +"</div>"
                                +"<div class='row'>"
                                +"<div class='col-lg-4'><button type='button' onclick='sayhello( "+ aid +");' class='btn btn-warning' id="+data[i].id+">Order Now</button></div>"
                                +"<div class='col-md-8'><label id=priceId"+data[i].id+" class='pull-right order'>Rs."+data[i].Price+"</label></div>"
                                +"</div>"
                                +"</div>";
                        childDiv = childDiv + div
                        rowCounter = rowCounter+1;
                    }
                    
                    eend++;
                }
                
                
            }
            
        })
        .fail(function(xhr){
            console.log('error', xhr);
        });
}