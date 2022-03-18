const cardToggle =document.querySelector(' .card__toggle'),
 body = document.querySelector('.page');

 cardToggle.onclick = ()=> {
     body.classList.toggle('is-dark');
 }  