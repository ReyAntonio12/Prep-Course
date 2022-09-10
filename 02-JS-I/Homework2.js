// Variables
//Una variable en Java script es un objeto al que el usuario le dara un valor. A como su nombre lo dice
// Una variable puede "variar" su valor dependiendo de la necesidad del codigo.

var c; // Usamos el comando var para declarar variables. En este caso la variable puede tomar cualquier valor
c = 1 + 2; // A c le hemos designado la suma de 1 + 2.
c;

let d; // Usamos esta palabra clave que es mut similar a var pero tiene un comportamiento diferente.

const A = "name"; // Const sera el comando utilizado para declarar las contantes. Valores que a lo largo del codigo
        // No van a cambiar. En el ejempo podemos ver que A siempre sera name.

    
/* Los String son bloques de texto que simplemente se definiran en tre comillas simples o dobles
   
A una variable se le puede asignar un string como valor, al igual que una constante

*/

//Ejemplo

var nombreDePerro = "Zeus"; //Esta variable se le asigno el streing Zeus


/*
   Las funciones son una parte muy importante de todo algoritmo. Se les llama objetos que se pueden invocar
   Su ojetivo es crear un algoritmo mas organizado y que no se requiera mucho espacion en el codigo.

   Las funciones se declaran con la palabra reservada FUNCTION, seguida del nombre que le daremos a esta misma.
   Luego se le asignan un par de parentesis y unas llaves donde ira el codigo que ejecura esta funcion.

   Argumentos:

   Un argumento es una variable que se utilizara solamente dentro de la funcion. El valor de la variable se inicia
   cuando se mande a llamar dentro del codigo.

   Algo muy importante es que se puede agregar varios argumentos en una sola funcion.

*/

//Ejemplo

function logHello (name)
{
    console.log('Hola, mi nombre es: '+nombre)
}
var myName = 'Reynaldo'

logHello(myName);

/* La declararion IF nos da la oportunidad de elegir si ejecutar una parte de un codigo si hay una
condicion que se cumpla o no. 

Quiere decir que si una condicion es verdadera, se cumplira ciertas lineas de codigo. En lo contrario,
Se efectuara otra accion.

*/

//Ejemplo

if (10 == 10)
{
    print ("10 en igual a 10");
}
else {
    print("10 no es igual a 10")
}

