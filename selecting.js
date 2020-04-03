var selectedArray = new Array;
var showArray = new Array;

function selecting(idName){
    if(selectedArray.length<4&&showArray.length<4){
        selectedArray.push(idName+selectedArray.length);
        showArray.push(idName);
        showSelected();
    }
};

function showSelected(){
    if(showArray.length>0){
        document.getElementById("show").innerHTML=showArray+" 선택했습니다.";
    }
    else{
        document.getElementById("show").innerHTML=""
    }
}

function resetButton(){
    while(showArray.length){
        showArray.pop();
        selectedArray.pop();
    }
    showSelected();
}

function resultButton(){
    if(showArray.length==4){
        var test=document.getElementById("test");
        test.style.display="none";
    }
}