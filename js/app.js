window.addEventListener("load", function(){
    var botonUno = document.getElementById("cri");
    var conta = 1;
    botonUno.addEventListener("click", function(){
        if(conta == 1){
            document.getElementsByClassName("circle")[0].style.borderColor = "cyan";
            document.getElementById("input").placeholder = "Red";
            document.getElementsByClassName("circle")[1].style.borderColor = "black";
            document.getElementsByClassName("circle")[2].style.borderColor = "black";
        }
        if(conta == 2){
            document.getElementsByClassName("circle")[1].style.borderColor = "cyan";
            document.getElementById("input").placeholder = "Blue";
            document.getElementsByClassName("circle")[0].style.borderColor = "black";
            document.getElementsByClassName("circle")[2].style.borderColor = "black";
        }
        if(conta == 3){
            document.getElementsByClassName("circle")[2].style.borderColor = "cyan";
            document.getElementById("input").placeholder = "Green";
            document.getElementsByClassName("circle")[1].style.borderColor = "black";
            document.getElementsByClassName("circle")[0].style.borderColor = "black";
            conta = 0;
        }
        conta++;
    });
    var botonDos = document.getElementById("superCri");
    botonDos.addEventListener("click", function(){
        var color = document.getElementById("input").value;
        if(color == "Rojo"){
            document.getElementsByClassName("circle")[0].style.borderColor = "cyan";
            document.getElementsByClassName("circle")[1].style.borderColor = "black";
            document.getElementsByClassName("circle")[2].style.borderColor = "black";
        }
        else if(color == "Azul"){
            document.getElementsByClassName("circle")[1].style.borderColor = "cyan";
            document.getElementsByClassName("circle")[0].style.borderColor = "black";
            document.getElementsByClassName("circle")[2].style.borderColor = "black";
        }
        else if(color == "Amarillo"){
            document.getElementsByClassName("circle")[2].style.borderColor = "cyan";
            document.getElementsByClassName("circle")[1].style.borderColor = "black";
            document.getElementsByClassName("circle")[0].style.borderColor = "black";
        }
    });
});

