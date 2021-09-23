
window.onload=function(){
let counter=10;
for(let i=1;i<=10;i++)
{
    setTimeout(() => {
        document.getElementById('value').innerText=counter--;
    }, 1000*i);
}
//console.log(document.querySelector('#value').innerHTML="hlw")
setTimeout(() => {
    document.getElementById('value').style.display="none";
    document.getElementById('head').style.display="block";
        
}, 11000);
}
