const date = new Date();
/*Lo de la linea 4 es los mismo que lo de la linea 6 */

// Esta forma es con comillas simples e ir concatenando la informaciòn
 document.body.innerHTML = '<h1>La hora en este instante es de:' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '</h1>';

// Aqui unamos los templete literals que son como las comillas simples pero mas avanzadas, la contenacion es mas facil, los saltos de linea y otras cosas 
document.body.innerHTML = `<h1>La hora en este instante es de: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}</h1>`;
// la sintaxis ${} es para indicarle a los templete literals que ahi vamos a incluir variables o logica de javaScript y lo que no esta dentro de estas llaves simplete es texto plano