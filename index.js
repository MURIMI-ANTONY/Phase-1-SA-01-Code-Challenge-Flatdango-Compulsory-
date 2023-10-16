//accessing first movie ul
const firstFilm= document.getElementById("firstFilm")
//to display first movie in frontend
fetch("http://localhost:3000/films/1")
.then((res)=>res.json())
.then((data)=>{
    
    for (const key in data) {
        const fli=document.createElement("li")
        fli.innerHTML=""
        fli.innerText= key + ": " + data[key]
        firstFilm.appendChild(fli)  
        }
    const tiko=document.createElement("li")
    tiko.innerHTML=""
    tiko.innerText= "Available tickets: " + (data.capacity - data.tickets_sold)
    firstFilm.appendChild(tiko) 
 }
   
)

// accessing ul#films
const films= document.getElementById("films")
// to display all films
fetch("http://localhost:3000/films")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
   data.forEach(element => {
    for (const key in element) {
        const li=document.createElement("li")
        li.innerHTML=""
        li.innerText= key + ": " + element[key]
        films.appendChild(li)  
        
        
        
        }
       

        
        const tiko=document.createElement("li")
        tiko.innerHTML=""
        tiko.setAttribute("class","ticket")
        tiko.innerText= "Available tickets: " + (element.capacity - element.tickets_sold)
        films.appendChild(tiko)

        const btn =document.createElement("button")
        btn.innerText="Buy Ticket"
        films.appendChild(btn)
        function event(){
            tiko.innerText= "Available tickets: " + (element.capacity - element.tickets_sold -1)
            console.log(tiko)
        }
        btn.addEventListener("click",event)
        
   });
   
})