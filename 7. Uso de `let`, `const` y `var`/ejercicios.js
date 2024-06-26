// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.
// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.

function miNombre(){
    /** Dentro del Bloque */
    let nombre = "Leo"
    console.log(nombre)
}
miNombre()
     // Se deja comentado porqur al imprimir la variable y no estar declarada fuera del bloque genera error.

    /** Fuera del Bloque */
    // console.log(nombre)

    const PI = '3.14159'
    // Se observa el error que muestra cuando se declara la misma variable usando Let, var o const
    // Se deja comentado
    // var PI = 100
    // let PI = 'Palabra'

    var mensaje = "Hola Mundo"
    console.log(mensaje)

    function miMensaje(){
        var mensaje = "Hola Pais"
        console.log(mensaje)
    }
    miMensaje()
