const til=document.getElementsByClassName("tilt")[0];
const answer=document.getElementsByClassName("answer")[0];
function answer_display(event) {
    console.log(event)
    if (answer.style.display==="none"){
        answer.style.cssText="display:block";
    }
    else
    {
        answer.style.cssText="display:none";
    }
}

til.addEventListener('click', answer_display);
var content= $("p").text()

