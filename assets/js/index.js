const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://megaricos.com/wp-content/uploads/2020/09/mansion-en-Bel-Air_1.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
const boton = document.getElementById('boton');
const totalCasas = document.getElementById('total');
const caracteristicasCard = document.querySelector('.propiedades');

function cards (atributo) {
  return (`
              <div class="propiedad">  
                <div class="img" style="background-image: url(${atributo.src})"></div>
                <section>
                    <h5>${atributo.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${atributo.rooms}</p>
                        <p>Metros: ${atributo.m}</p>
                    </div>
                    <p class="my-3">${atributo.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
              </div>`  
  )
    ;
};

function resultado() {
  let html = "";
  for (let propiedad of propiedadesJSON) {
    html += cards(propiedad);
  }
  caracteristicasCard.innerHTML = html;
  totalCasas.innerHTML = "Total propiedades: "+propiedadesJSON.length;
}

function buscar() {
  let cuartos = document.getElementById('cuartos').value;
  let minimoMetros = document.getElementById('min').value;
  let maximoMetros = document.getElementById('max').value;
  let total = 0;
  let html = "";
  if (cuartos == 0 || minimoMetros == 0 || maximoMetros == 0) { 
    alert("Falta campos por rellenar");
    return;
  }
  for (const propiedad of propiedadesJSON) { 
    if (propiedad.rooms == cuartos && propiedad.m >= minimoMetros && propiedad.m <= maximoMetros) {
      html += cards(propiedad);
      total ++;
    }
  }

  if(total==0){ 
    alert("Ninguna de las propiedades cumple con las caracteristicas buscadas")
    return (resultado()); 
  }

  caracteristicasCard .innerHTML=html;
  totalCasas.innerHTML="Número de propiedades encontradas: "+total;
}

resultado();
boton.addEventListener('click', buscar);