const arrows=document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
 const itemNumber =  movieList[i].querySelectorAll("img").length;
 let counter=0;
 arrow.addEventListener("click",()=>
{
  counter++;
if(itemNumber-(4+counter)>=0)
  {
  movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value -300}px)`;
  }
  else
  {
    movieList[i].style.transform="translateX(0)";
    counter=0;
  }
})
})

const ball =document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".toggle,.toggle-ball,.left-menu-icon,.sidebar,.navbar-container,.movie-list-title,.container");
ball.addEventListener("click" , ()=>
{
  items.forEach(item=>
    {
      item.classList.toggle("active");
    }
  )
})