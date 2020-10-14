'use strict';
{
  // part1
  const number1=document.getElementById('number1');
  const number2=document.getElementById('number2');
  const number3=document.getElementById('number3');
  const number4=document.getElementById('number4');

  const up1=document.getElementById('up1');
  const up2=document.getElementById('up2');
  const up3=document.getElementById('up3');
  const up4=document.getElementById('up4');

  const down1=document.getElementById('down1');
  const down2=document.getElementById('down2');
  const down3=document.getElementById('down3');
  const down4=document.getElementById('down4');

  let num1=0;
  let num2=0;
  let num3=0;
  let num4=0;

  up1.addEventListener('click',()=>{
    if(decidebtn.classList.contains('inactive')){
      return;
    }else{
      if(num1 === 9){
        num1=-1;
        return;
      }else{
        num1++;
      }
      number1.textContent=num1;
    }
  });
  up2.addEventListener('click',()=>{
    if(decidebtn.classList.contains('inactive')){
      return;
    }else{
      if(num2 === 5){
        num2=-1;
        return;
      }
      num2++;
      number2.textContent=num2;
    }
  });
  up3.addEventListener('click',()=>{
    if(decidebtn.classList.contains('inactive')){
      return;
    }else{
      if(num3 === 9){
        num3=-1;
        return;
      }else{
        num3++;
      }
      number3.textContent=num3;
    }
  });
  up4.addEventListener('click',()=>{
    if(decidebtn.classList.contains('inactive')){
      return;
    }else{
      if(num4 === 9){
        num4=-1;
        return;
      }else{
       num4++;
      }
      number4.textContent=num4;
    }
  });
  
  down1.addEventListener('click',()=>{
    if(decidebtn.classList.contains('inactive')){
      return;
    }else{
      if(num1 === 0){
        return;
      }
      num1--;
      number1.textContent=num1;
    }
  });
  down2.addEventListener('click',()=>{
    if(decidebtn.classList.contains('inactive')){
      return;
    }else{
      if(num2 === 0){
        return;
      }
      num2--;
      number2.textContent=num2;
    }
  });
  down3.addEventListener('click',()=>{
    if(decidebtn.classList.contains('inactive')){
      return;
    }else{
      if(num3 === 0){
        return;
      }
      num3--;
      number3.textContent=num3;
    }
  });
  down4.addEventListener('click',()=>{
    if(decidebtn.classList.contains('inactive')){
      return;
    }else{
      if(num4 === 0){
        return;
      }
      num4--;
      number4.textContent=num4;
    }
  });
  
  // part3
  const decidebtn=document.getElementById('decidebtn');
  const time=document.getElementById('time');
  const start=document.getElementById('startbtn');
  const stop=document.getElementById('stopbtn');
  const ready=document.getElementById('readyingCount');
  
  let startTime;
  let timeoutId;

  function countUp(){
    let d=new Date(Date.now()-startTime);
    let m=String(d.getMinutes()).padStart(2,'0');
    let s=String(d.getSeconds()).padStart(2,'0');
    let ms=d.getMilliseconds()
    time.textContent=`${m}:${s}.${ms}`;
    timeoutId=setTimeout(()=>{
      countUp();
    },10)
  }

  function firstPhazeState(){
    decidebtn.classList.remove('inactive');
    start.classList.add('inactive');
    stop.classList.add('inactive');
  }

  function secondPhazeState(){
    decidebtn.classList.add('inactive');
    start.classList.remove('inactive');
    stop.classList.add('inactive');
  }

  function thirdPhazeState(){
    decidebtn.classList.add('inactive');
    start.classList.add('inactive');
    stop.classList.remove('inactive');
  }

  firstPhazeState();

  decidebtn.addEventListener('click',()=>{
    if(decidebtn.classList.contains('inactive')){
      return;
    }
    secondPhazeState();
  });

  start.addEventListener('click',()=>{
    if(start.classList.contains('inactive')){
      return;
    }
    thirdPhazeState();
    startTime=Date.now();
    countUp();
    ready.classList.add('playingCount');
  });

  stop.addEventListener('click',()=>{
    if(stop.classList.contains('inactive')){
      return;
    }
    clearTimeout(timeoutId);
    ready.classList.remove('playingCount');
  });
}