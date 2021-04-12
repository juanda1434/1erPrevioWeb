'use strict'



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
cargarCategoria("deportes","http://demo6497253.mockable.io/categoria/deporte");
cargarCategoria("tecnologia","http://demo6497253.mockable.io/categoria/tecnologia");
//document.getElementById("Categorias-Noticias").innerHTML='Cargando...';

