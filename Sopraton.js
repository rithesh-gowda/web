function vowel(){
    var s="",i=0,pos=-1;
    var string=prompt("enter the string");
    var len=string.length;
    while(i<len){
        s=string[i];
        if((s=="a"||s=="A"||s=="e"||s=="E"||s=="i"||s=="I"||s=="o"||s=="O"||
        s=="u"||s=="U") && pos== -1)
        {
            pos=i;
            ch=s;
        }
        i++;
    }
    alert("position of first vowel ic"+ch+":"+pos);
}
// function rev(){
//     var rem=0,rev=0;
//     var number=parseInt(prompt("enter the number "));
   
//     while(number!=0){
//         rem=parseInt(number%10);
//         rev=rev*10+rem;
//         number=parseInt(number/10);
        
//     }
//     alert("reverse is:"+rev);
// }
function rev(){
  var  rem=0,rev=0;
    var number=parseInt(prompt("enter the number"));

    while(number!=0){
        rem=parseInt(number%10);
        rev=rev*10+rem;
        number=parseInt(number/10);
    }
    alert("revrse is"+rev);
}