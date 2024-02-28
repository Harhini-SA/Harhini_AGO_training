let a=5;
let b=7;
let c=10;
let res;

function max(){
    if(a>b){
        res=a;
    }
    else if(b>c){
        res=b;
    }
    else{
        res=c;
    }
    let typ=document.getElementById('values');
    typ.innerHTML = res;
}

function min(){
    if(a<b){
        res=a;
    }
    else if(b<c){
        res=b;
    }
    else{
        res=c;
    }
    let typ=document.getElementById('values');
    typ.innerHTML = res;
}



