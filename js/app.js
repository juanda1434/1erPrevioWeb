'use strict'

const botones = [];

const generarVistaNoticia=(id)=>{
    const url= `http://demo6497253.mockable.io/noticias/${id}`;
    fetch(url)
    .then(r=>r.json())
    .then(noticia=>{
        const noticiaHtml=generarVista(noticia);
        document.getElementById("contenedor").innerHTML=noticiaHtml;        
    document.getElementById("btnTodas").onclick=null;
    document.getElementById("btnTodas").onclick=()=>{generarDefault()};
    }).catch(e=>{
console.log(e)
    });
    
}

const generarDefault = ()=>{
    const plantilla= `<img src="img/colegio.jpg" style="max-height: 300px;" class="img-fluid">
    <section class="mt-3 row" id="noticias">
        Cargando ...
    </section>`;
    document.getElementById("contenedor").innerHTML=plantilla;
    cargarNoticias("https://demo6497253.mockable.io/noticias");
}

const generarVista=(noticia)=>{
    return `<img src="${noticia.img}" style="max-height: 300px;" class="img-fluid">
    <section class="mt-3 row" id="noticias">
    <div class="card col-12 mt-2" >                        
    <div class="card-body">
      <h5 class="card-title">${noticia.titulo} - ${noticia.categoria} - ${noticia.fecha}</h5>
      <div class="card-text">
         <p>${noticia.descripcion}</p>
         ${noticia.detalle}
      </div>
      
    </div>
  </div>
    </section> <button id="btnTodas" class="btn btn-primary">Todas las noticias</button>`;   
}

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
  botones[id]=categoria+id;
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
        addAction();
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
            botones[titular.id]=`d${titular.id}`;
            }else{
                return false;
            }
           
        i++;
        });
        document.getElementById(categoria).innerHTML= todas;
        addAction();
    });
}

const addAction=()=>{
    botones.map((id,i)=>{
           document.getElementById(id).onclick= (e)=>{console.log(i);e.preventDefault(); generarVistaNoticia(i)}
    });
}

cargarCategoria("deportes","https://demo6497253.mockable.io/categoria/deporte");
cargarCategoria("tecnologia","https://demo6497253.mockable.io/categoria/tecnologia");
cargarNoticias("https://demo6497253.mockable.io/noticias");
//document.getElementById("Categorias-Noticias").innerHTML='Cargando...';

