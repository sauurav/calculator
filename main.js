
var display_area=document.getElementById("display_area");

// function to get value of a button on getting pressed
function print_value(value){
    display_area.innerText+=value;
}

// function to clear the display area
function to_clear(){
    display_area.innerText='';
}

// function to delete  digits one by one
function delete_single(){
    var text=display_area.innerText;
    display_area.innerText=text.substring(0,text.length-1);   
}

// function to perform atrhmetic oprations
function equalsto(){
    var text=display_area.innerText;
    var angle=Number(text.substring(3,text.length));
    if(text.substring(0,3)=="Cos"){
  
        var value=Math.cos(angle*(Math.PI/180));
        display_area.innerText=value;
    }
    else if(text.substring(0,3)=="Tan"){
  
        var value=Math.tan(angle*(Math.PI/180));
        display_area.innerText=value;
    }
    else if(text.substring(0,3)=="Sin"){
  
        var value=Math.sin(angle*(Math.PI/180));
        display_area.innerText=value;
    }
    else if(text.substring(0,6)=="square"){
        // console.log("button clicked");
        var value=Math.pow(Number(text.substring(6,text.length)),2);
        display_area.innerText=value;
    }
    else if(text.substring(0,4)=="sqrt"){
  
        var value=Math.sqrt(Number(text.substring(4,text.length)));
        display_area.innerText=value;
    }
    else if(text.substring(0,3)=="Log"){
  
        var value=Math.log10(Number(text.substring(3,text.length)));
        display_area.innerText=value;
    }
    else{
        try {
            display_area.innerText=eval(text);
        } catch (error) {
            display_area.innerText="Invalid Format";
        }
       
    }
}
// function to add event listner to buttons
document.addEventListener("keydown",hello);

function hello(e){
    if(e.key=="Backspace"){
        delete_single();
    }
}