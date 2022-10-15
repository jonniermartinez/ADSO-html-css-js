window.onload = function() { //tras cargar la página ...

    visor1=document.getElementById("visor"); //referencia al visor
    mititulo=document.getElementById("titulo"); //referencia al pie de foto
}

function mifoto(num) { //cambiar la imagen
    
        const ruta = "img/"+"foto"+num+".jpg"; //ruta de la nueva imagen
        document.images["fotoVisor"].src = ruta; //cambiar imagen

        texto = document.images["fotos"+num].alt; //texto de pie de foto
        mititulo.innerHTML = texto; //cambiar pie de foto
}