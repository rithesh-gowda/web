function v(){
    var usn=document.getElementById("usn").value;
    if (usn.match(/[1-4][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{2}/)!=null)
    alert("usn is valid ");
    else
    alert("not valid ");
    
}
function s(){
    var usn=document.getElementById("sem").value;
    if(usn.match(/[1-6]/)!=null)
    alert("sem is valid ");
    else
    alert("not valid ");
    
}