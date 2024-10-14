 

const categories = async() => {
const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`);
const data = await res.json();
displayCategory(data.categories)

}

const showCategory =async(id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  const data =await res.json();
  document.getElementById('savana').innerHTML= ' '
  displayVideo(data.category)
  }


const displayCategory =(btn) => {
  const heroALom= document.getElementById('category');
btn.forEach(category => {
 const button = document.createElement('div');
  button.innerHTML=`
 <div class="flex">
  <button onclick="showCategory('${category.category_id}')" class="  px-5 py-2 bg-gray-300 rounded-md">${category.category} </button>
  </div>
  `
  heroALom.appendChild(button)

});
}




const  bal = async() =>{
const res  = await fetch ('https://openapi.programming-hero.com/api/phero-tube/videos');
const data = await res.json();
displayVideo(data.videos)

}

const displayVideo =(videos)=>{
 const sakibKhan = document.getElementById('savana')

videos.forEach((video)=>{
const card = document.createElement('div');
card.innerHTML=`

<div class="card card-compact bg-base-100  shadow-xl ">
  <figure>
    <img class="w-full h-[250px]"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
     <div class="flex  gap-3 items-center">
     <img class="rounded-md w-[30px] h-[30px]"  src= ${video.authors[0].profile_picture}
      alt="Shoes" /> 

    <h2 class="card-title"> ${video.title}</h2>
      </div>
   
      <div class="flex gap-3 ">
    <p class="text-base"> ${video.authors[0].profile_name}</p>
    <p> ${video.authors[0].verified}</p>
  </div>
    <p> ${video.others.views} Views</p>
    
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>

`
 sakibKhan.appendChild(card)

})
}


const src = async(search)=>{
  console.log(search)
const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`)
const data = await res.json()
document.getElementById('savana').innerHTML=' '
// console.log(data.videos)
displayVideo(data.videos)
}

  document.getElementById('search-info').addEventListener('keyup', (event)=> {
    src(event.target.value)
  })


categories()
bal()

















