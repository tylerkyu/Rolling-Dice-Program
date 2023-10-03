const button=document.querySelector('button');

button.addEventListener("click", createParagraph);

function createParagraph() {
    const dice1=Math.floor(Math.random()*(6-1+1))+1;
    const dice2=Math.floor(Math.random()*(6-1+1))+1;
    const combined=dice1+dice2;
    const para1=document.createElement("p");
    const para2=document.createElement("p");
    const para3=document.createElement("p");
    para1.textContent="The first dice stopped on: "+dice1+"!";
    para2.textContent="The second dice stopped on: "+dice2+"!";
    para3.textContent="Your combined total is: "+combined+"!";
    document.body.appendChild(para1);
    document.body.appendChild(para2);
    document.body.appendChild(para3);
}