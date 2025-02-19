let inputText=document.getElementById("input")
function updateText(text){
    inputText.value=inputText.value.trim()+text;
}
function clearText(){
    inputText.value=''
}
function removeLast(){
    let str=inputText.value.trim();
    inputText.value=str.substring(0,str.length-1);
}
function calculate(){
    try{
        if(inputText.value.trim()==''){
            throw new error();
        }
        inputText.value=eval(inputText.value.trim())
    }
    catch(error){
        inputText.value="Error";
        setTimeout(() => {
            inputText.value = "";
        }, 2000); 
    }
}