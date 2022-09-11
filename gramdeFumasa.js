
function funcao(){
let texto = document.querySelector("#texto");
let baabeba = texto.value;
let penes = document.querySelector("#penes");
let nazi = document.querySelector("#nazi");
let result = document.querySelector(".result")
let form = document.querySelector(".container")
switch (baabeba){
    case "Y":
    case "y":
    form.style=" background-image: url(rock.jpg); width:650px; height:600px; " 
    result.style="visibility: visible; background-color: black" 
     nazi.style="visibility: hidden"  
     nazi.innerHTML=""
     penes.style="color:white"
    penes.innerHTML="AAH <br>AAH <br> AAHAAHHHHHHHH <br> I BELIEVE THEM BONES ARE ME <br> SOOOOOOOOOOOOOOOME SAYYYYYYYYYYYYYYYYYYYYYY WE'RE BORN INTO THE GRAVE <br> I FEEL SO ALONE GONNA END UP A BIG OL' PILE OF THEM BONES"
    break;
    case "N":
    case "n":
        form.style=" background-image: url(nazi.png); width:650px; height:600px; "    
    result.style="visibility: visible; background-color: rgb(255, 0, 0) "
        penes.style="color: rgb(70, 3, 3)"
    nazi.style="visibility: visible, color:rgb(70, 3, 3)"
    nazi.innerHTML="Ent é nazista. <br>";   
    penes.innerHTML=" RESPECT, WALK <br> WHAT DID YOU SAY? <br> RESPECT, WALK <br> ARE YOU TALKING TO ME? <br> ARE YOU TALKING TO ME? "

    break;
    case "M":
    case "m":
        form.style=" background-image: url(gay.png); width:650px; height:600px; "    
        result.style="visibility: visible; background-color: rgb(240, 81, 205) "
            penes.style="color: rgb(110, 0, 86)"
        nazi.style="visibility: visible; color:rgb(110, 0, 86)"
        nazi.innerHTML="Ent é boiola. <br>";   
        penes.innerHTML="BUT I'M A CREEP <br> I'M A WEIRDOOOOO <br> WHAT THE HELL AM I DOING HERE? <br> I DON'T BELONG HERE"   
}

}


