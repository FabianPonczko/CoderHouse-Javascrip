
let registros = prompt("Ingrese cantidad de registros")

while(Number(registros)){
    for (let x = 1 ; x<=registros;x++){
        let nombre = prompt('Registro Nº: '+  x + ') Ingrese nombre?')
        if (nombre == "" || nombre == null){
            x -=1
            continue;
        }
        else if (nombre == "salir"){
            alert("programa terminado")
            break;
        }
        console.log('Nombre: '  + nombre + ' ' + 'registro Nº: ' + x)
    }
    break;
}
switch (registros){
    case null:
        alert("Programa terminado")
        break;
    case "":
        alert("Dato incorrecto. Programa terminado")
        break;
    
}


