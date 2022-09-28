function p(){
    var c=document.getElementsByName("it");
    var n=0;
    for(var i=0;i<c.length;i++){
        if(c[i].validity.valid){
            n++;
        }
    }
    var x=document.getElementById("abc");
    x.value=(n)*25;
}