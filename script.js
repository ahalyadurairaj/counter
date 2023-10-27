
let num=0;

document.getElementById("decrement").onclick=function(){
    num-=1;
    document.getElementById("count").innerHTML=num;
if(num<0){
    document.getElementById("count").style.color="red";
}
else if(num==0) {
    document.getElementById("count").style.color="black";


}
    

}

document.getElementById("increment").onclick=function(){
    num+=1;
    document.getElementById("count").innerHTML=num;
    if(num>0){
        document.getElementById("count").style.color="green";
    }
    else if(num==0) {
        document.getElementById("count").style.color="black";
    
    
    }
}

document.getElementById("reset").onclick=function(){
    num=0;
    document.getElementById("count").innerHTML=num;
    document.getElementById("count").style.color="black";
}











