function adddata(){
    var text = document.getElementById("txtarea").value;
    var list = document.getElementById("item");
    var creatli = document.createElement("option");
    var data = document.createTextNode(text);
    creatli.appendChild(data);
    list.insertBefore(creatli,list.firstChild);
    document.getElementById("txtarea").value = "";
}