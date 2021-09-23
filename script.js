/*const counters=document.querySelectorAll('#value');
counters.forEach(counter => {
    counter.innerHTML='10';
    const updateCounter=()=>{
        const c=+counter.innerHTML;
        if(c>=1)
        {
            counter.innerHTML=c-1;
            setTimeout(updateCounter, 1000);
            console.log(c)
        }
        else
        counter.innerHTML=1;
    }
    updateCounter();
});*/
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