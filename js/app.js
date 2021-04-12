'use strict'

let botones = [];

const generarNoticia=(id,titulo,descripcion,fecha,categoria)=>{
    let noticia= `<div class="card col-12 mt-2" >                        
    <div class="card-body">
      <h5 class="card-title">${titulo} - ${categoria} - ${fecha}</h5>
      <p class="card-text">
         ${descripcion}
      </p>
      <a href="#" id="${categoria}${id}" class="card-link">Ver mas...</a>
    </div>
  </div>`;
  botones[botones.length]={"id":id,"btn":categoria+id};
  return noticia;
}
const cargarNoticias= (url)=>{
    fetch(url)
    .then(r=>r.json())
    .then(noticias=>{    
        let todas= '';
        let i =0;        
        noticias.forEach(noticia => {
            
            if(i<3){
todas+= generarNoticia(noticia.id,noticia.titulo,noticia.descripcion,noticia.fecha,noticia.categoria);
            }else{
                return false;
            }
           
        i++;
        });
        document.getElementById("noticias").innerHTML= todas;
    });
}
const cargarCategoria= (categoria,url)=>{
    fetch(url)
    .then(r=>r.json())
    .then(deportes=>{    
        let todas= '';
        let i =0;
        
        deportes.forEach(titular => {
            if(i<3){
                todas+=`<li class="list-group-item" id="d${titular.id}">
                ${titular.titulo}
            </li>`;
            }else{
                return false;
            }
           
        i++;
        });
        document.getElementById(categoria).innerHTML= todas;
    });
}
cargarCategoria("deportes","https://demo6497253.mockable.io/categoria/deporte");
cargarCategoria("tecnologia","https://demo6497253.mockable.io/categoria/tecnologia");
cargarNoticias("https://demo6497253.mockable.io/noticias");
//document.getElementById("Categorias-Noticias").innerHTML='Cargando...';

