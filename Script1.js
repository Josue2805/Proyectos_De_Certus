function FUsoFor1()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal = vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
}  // fin de function

function FUsoForEach1()
{
  const vTextoClass = document.querySelectorAll(".classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  vTextoClass.forEach
  ( iter=> 
    {
      iter.style.border ="2px solid blue" ;
      vTextoTotal = vTextoTotal + iter.innerText+'-';

    } // fin de for 

  ) ;
} 

function FEliminarConcat()
{
vTextoClass = document.getElementsByClassName("classFOR1");
let rpta =prompt("Estas seguro de eliminar el texto concatenado?(S/N)",'');
if (rpta=="S"  ||  rpta=="s")
{ let rpta2 =prompt("Ingrese el numero de fila a eliminar",'');
  vTextoClass[rpta2].remove (); 
  alert("CONCATENCION ELIMINADA"); 
}
else 
{ if(rpta=="N"  ||  rpta=="n")
  { alert("NO SE ELIMINARA");
  }
  else
  { alert("OPCION INCORRECTA - INgresa nuevamente");
  }

}

}

function FCcaptureNombre(){

  const vTexto1 = document.getElementById("nombre");
  const vTexto2 = document.querySelectorAll("input.datosPersonales");
  const vTexto3 = document.getElementById("clave");

  vTexto1.style.color="red"; 

  var valor1 = vTexto1.value;
  var valor2 = "";
  vTexto3.value=valor1;

  vTexto2.forEach(input => {
   valor2 = valor2 + `${input.name}: ${input.value}: ${input.id} \n`; 
   input.style.border="2px solid orange";
  })


  vTexto2[1].style.backgroundcolor="green";
  document.getElementById('observacion').value = valor2
  console.log('El valor del nombre es:', valor1); 
} 