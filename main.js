let a=parseInt(prompt("Enter the value"));
let b=parseInt(prompt("Enter the value"));
let c;
function fruits(a,b){
    c=a;
    a=b;
    b=c;
    document.write("frist value"+a +"<br>")
    document.write("second value"+b)
}
fruits(a,b)
