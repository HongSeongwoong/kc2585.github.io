var selectedArray = new Array;
function selecting(idName){
    if(selectedArray.length<4){
        selectedArray.push(idName+selectedArray.length);
        printCount(idName);
    }
    else{
        alert("가득찼어 임마");
        for(i=0;i<selectedArray.length;i++){
            alert(selectedArray[i]);
        }
    }
};
function printCount(idName){
    document.getElementById("count").innerHTML=idName+" 선택했오";
}