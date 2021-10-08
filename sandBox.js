const icon=document.querySelectorAll('.fas');

icon.forEach(i=>{
  i.addEventListener('click',(e)=>{
    
    if(e.target.parentElement.classList[0]=='head-1'){
      if(e.target.parentElement.parentElement.lastElementChild.style.display=='block'){
        console.log(e.target.parentElement.parentElement.lastElementChild.style.display='none');
      }
      else{
        console.log(e.target.parentElement.parentElement.lastElementChild.style.display='block');
      }
        
    }
    if(e.target.parentElement.classList[0]=='head-2'){
      if(e.target.parentElement.parentElement.lastElementChild.style.display=='block'){
        console.log(e.target.parentElement.parentElement.lastElementChild.style.display='none');
      }
      else{
        console.log(e.target.parentElement.parentElement.lastElementChild.style.display='block');
      }
        
    }
    if(e.target.parentElement.classList[0]=='head-3'){
      if(e.target.parentElement.parentElement.lastElementChild.style.display=='block'){
        console.log(e.target.parentElement.parentElement.lastElementChild.style.display='none');
      }
      else{
        console.log(e.target.parentElement.parentElement.lastElementChild.style.display='block');
      }
        
    }
  })
})