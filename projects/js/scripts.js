function today() {
    var d = new Date();
    //alert(d.getFullYear() +'-' + d.getMonth()+ '-' + d.getDate());
    var year = d.getFullYear();
    var month = d.getMonth();
    if(month < 10){ month = '0'+month;}
    var day = d.getDate();
    if(day<10){day = '0' + day;}
    
    document.getElementById("record_date").value = year + '-' + month + '-' + day;
    var x = document.getElementsByClassName("form-control");
    for(i=0;i<x.length;i++){
        x[i].value=i;
    }
}

function plus1(elem_name){
    //alert('hello');
    var bb = parseInt(document.getElementById('production_record').elements[elem_name].value) + 1;
    document.getElementById('production_record').elements[elem_name].value =bb;
    //alert('hello'+bb);
}

function minus1(elem_name){
    //alert('hello');
    var bb = parseInt(document.getElementById('production_record').elements[elem_name].value) - 1;
    document.getElementById('production_record').elements[elem_name].value =bb;
    //alert('hello'+bb);
}