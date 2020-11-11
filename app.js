function search() {
     var xhttp = new XMLHttpRequest();
     var url = "superheroes.php";
     xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET","url", true);
    xhttp.send();
}
function button(){
    document.getElementById("result").innerHTML = search;
}
