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
