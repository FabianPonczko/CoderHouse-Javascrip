
/* primera entrega
   
*/


//clientes pre-cargados
const clientesCargados = [
  {
    id:1,
    nombre: "juan",
    direccion: "colon 250",
    localidad: "cordoba",
    numeroCuenta: 22266,
    saldo: 1500
  },
  {
    id:2,
    nombre: "pedro",
    direccion: "alen 150",
    localidad: "salta",
    numeroCuenta: 35656,
    saldo: 2500
  },
  {
    id:3,
    nombre: "lucas",
    direccion: "san martin 520",
    localidad: "jujuy",
    numeroCuenta: 11134,
    saldo: 3500
  },
  {
    id:4,
    nombre: "maria",
    direccion: "mar del plata 685",
    localidad: "cordoba",
    numeroCuenta: 67434,
    saldo: 5500
  },
]
//fin clientes pre-cargados

class Cliente {
    constructor (id,nombre,direccion,localidad,numeroCuenta,saldo){
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.localidad = localidad
        this.numeroCuemta = numeroCuenta
        this.saldo = saldo
    }
    //Sumar saldo de cliente
    sumarSaldo (saldo){
        this.saldo += saldo
    }
    //Restar saldo de cliente
    restarSaldo (saldo){
        if (this.saldo>=saldo){
            this.saldo -= saldo
        }else{
            alert(`Saldo: ${this.saldo} imposible realizar la operacion`)
        }
    }
    
}
const clientes = clientesCargados.map(ele => new Cliente(
    ele.id,
    ele.nombre.toUpperCase(),
    ele.direccion,
    ele.localidad.toUpperCase(),
    ele.numeroCuenta,
    ele.saldo,
))

//Muestra en el DOM los Clientes
function mostrarClientes(clientes){
    document.getElementById("cliente").innerHTML = `` 
    document.getElementById("direccion").innerHTML = `` 
    document.getElementById("localidad").innerHTML = `` 
    document.getElementById("cuenta").innerHTML = `` 
    document.getElementById("saldo").innerHTML = `` 
        for (let ele=0; ele < clientes.length;ele++){
            document.getElementById("cliente").innerHTML += `${clientes[ele].nombre} <br>` 
            document.getElementById("direccion").innerHTML += `${clientes[ele].direccion} <br>` 
            document.getElementById("localidad").innerHTML += `${clientes[ele].localidad} <br>` 
            document.getElementById("cuenta").innerHTML += `${clientes[ele].numeroCuemta} <br>` 
            document.getElementById("saldo").innerHTML += `${clientes[ele].saldo} <br>` 
       }
}
mostrarClientes(clientes)


function cargaDatos(){        
        //Menu principal elecciones de comandos
        let menu = prompt(`            *** MENU *** 
        1- Nuevo Cliente
        2- Eliminar Cliente
        3- Mostrar Clientes en consola
        4- Sumar Saldo a cliente
        5- Restar Saldo a cliente
        6- Filtrar cliente por Localidad
        7- Salir`)
        
        switch(menu){
               //Carga de nuevos clientes
            case "1":
                    //obtiene nueva id 
                const idMax = clientes.reduce (function(acc,ele){
                    if (acc.id < ele.id){
                        return acc.id + 1
                    }else{
                        return ele.id + 1
                    }
                })
                let numeroAleatorio = Math.round(Math.random()*100000);
                const nuevoCliente = new Cliente (idMax ,prompt("Cliente?").toUpperCase(),prompt("Dirección?"),prompt("Localidad").toUpperCase(),numeroAleatorio,prompt("Saldo?"))
                clientes.push(nuevoCliente)
                mostrarClientes(clientes)
            break
            
                //Eliminacion de cliente
            case "2":
                let eliminar = prompt("Cliente?").toUpperCase()
                for (let ele = 0; ele<clientes.length ; ele++){
                    if (clientes[ele].nombre == eliminar){
                    alert(`se elimino cliente: ${clientes[ele].nombre}`)
                    clientes.splice(ele,1)
                    }
                }
                mostrarClientes(clientes)
            break
            
                //Mostrar clientes con consolaS
            case "3":
                console.table(clientes)
            break
            
                //Sumar saldo a cliente
            case "4":
                let saldosCliente = prompt("Ingrese Cliente?").toUpperCase()
                let saldosMonto = parseFloat(prompt("Saldo a sumar?"))
                for (let ele = 0; ele<clientes.length ; ele++){
                    if (clientes[ele].nombre == saldosCliente){
                        clientes[ele].sumarSaldo(saldosMonto)
                    }
                }
                mostrarClientes(clientes)
            break
            
                //Restar saldo a cliente
            case "5":
                let saldoRcliente = prompt("Ingrese Cliente?").toUpperCase()
                let saldoRMonto = parseFloat(prompt("Saldo a restar?"))
                for (let ele = 0; ele<clientes.length ; ele++){
                    if (clientes[ele].nombre == saldoRcliente){
                        clientes[ele].restarSaldo(saldoRMonto)
                    }
                }
                mostrarClientes(clientes)
            break
                
                //Filtra clientes por localidad y muestra resultado en el DOM
            case "6":
                let localidadBuscada = prompt("Localidad?", "todas").toUpperCase()
                let clientesXlocalidad = clientes.filter((ele)=>ele.localidad == localidadBuscada)
                if (localidadBuscada != "TODAS"){
                    mostrarClientes(clientesXlocalidad)
                }else{
                    mostrarClientes(clientes)
                }
                break
                
                //Salida de programa
            case "7":
                mostrarClientes()                
            break
        }
   
}
