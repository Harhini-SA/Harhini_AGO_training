// let typ = document.getElementById("text");

function entry(){
    let typ = document.getElementById("text");
    let test = document.createElement("div");
    test.innerHTML ="<p>welcome<p>";
    typ.appendChild(test);
    // append
    
    setTimeout(function(){
        test.remove();
    },1000);
}


















// let show = document.createElement("h2");
// show.innerHTML = "welcome";
// typ.append(show);















// set interval

// let str = "hello, this is a text";
// let typ = document.getElementById("text");
// let i=0;

// function writr(){    
//     // setInterval(function(){
//     typ.innerHTML = str.slice(0, i);
//     i++;   


// if(i > str.length){
//     i=0;   
// };
// }

// setInterval(writr,400);




