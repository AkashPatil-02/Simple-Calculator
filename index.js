
const disp=document.getElementById("display");

function append(input){
    disp.value+=input;
}

function cleardisp(){
    disp.value="";
}

function calculate(){
    try{
        disp.value = eval(disp.value);
    }
    catch(error){
        disp.value = "Error";
    }
}
function back(){
    disp.value=disp.value.slice(0,-1);
}