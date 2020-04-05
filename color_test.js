var selectedArray = new Array;
var showArray = new Array;
var slideIndex=0;

showSlide();

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
        var hide=document.getElementById("hide");
        test.style.display="none";
        hide.style.display="block";
        showResult();
    }
}

function showResult(){
    for(i=0;i<4;i++){
        var result_idx = document.getElementById(selectedArray[i]);
        result_idx.style.display="block";
    }
}

function showSlide(){
    var slides = document.getElementsByClassName("idx");
    for(i=0;i<4;i++){
        slides[i].style.display="none";
    }
    slideIndex= slideIndex%slides.length;
    slides[slideIndex].style.display = "block";
}

function showNextSlide(){
    slideIndex++;
    showSlide();
}

function showPrevSlide(){
    slideIndex--;
    if(slideIndex<0){
        slideIndex=3;
    }
    showSlide();
}