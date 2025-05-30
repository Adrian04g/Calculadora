const realizarOperacion = (num1, num2, operacion) => {
    if (operacion == 1) {
        return (num1 + num2);
    } 
    else if (operacion == 2) {
        return (num1 - num2);
    }
    else if (operacion == 3) {
        return (num1 * num2);
    }
    else if (operacion == 4) {
        if (num2 == 0) {
            return "No es posible realizar una division por cero"
        }

        return (num1 / num2);
    }
    else {
        return "Esta operacion no es valida"
    }
}

let num1, num2, operacion;
let pregunta;

while(operacion != "salir") {
    num1 = prompt("\nIngrese el primer numero \n");
    num2 = prompt("Ingrese el segundo numero \n");
    
    operacion = prompt("Ingrese la operacion (1-suma, 2-resta, 3-multiplicacion, 4-division): \n");

    console.log("El resultado es: ")
    console.log(realizarOperacion(+num1, +num2, operacion))

    pregunta = prompt("\n\nDesea realizar otra operacion? \n")

    if (pregunta == "si") {
        continue
    } else {
        console.log("Gracias por usar la calculadora! Adios!!\n")
        break
    }
}
