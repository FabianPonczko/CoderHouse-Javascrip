
/*  Arrays, Objetos
    Simulación carga de clientes de una financiera
    primeraEntrega
*/
function cargaDatos(){

    
    let menu
    let clientes = []
    
    class cliente {
        constructor (nombre,direccion,numeroCuenta,saldo){
            this.nombre = nombre
            this.direccion = direccion
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
    
    do{
        //Menu principal elecciones de comandos
        menu = prompt(`            *** MENU *** 
        1- Nuevo Cliente
        2- Eliminar Cliente
        3- Mostrar Clientes
        4- Sumar Saldo a cliente
        5- Restar Saldo a cliente
        6- Salir`)
        
        switch(menu){
            //Carga de nuevos clientes
            case "1":
                const nuevoCliente = new cliente (prompt("Cliente?").toUpperCase(),prompt("Dirección?"),parseInt(prompt("Cuenta?")),parseFloat(prompt("Saldo?")))
                clientes.push(nuevoCliente)
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
            break
            //Mostrar clientes con consola
            case "3":
                console.table(clientes)
            break
            //Sumar saldo a cliente
            case "4":
                let saldoScliente = prompt("Ingrese Cliente?")
                let saldoSMonto = parseFloat(prompt("Saldo a sumar?"))
                for (let ele = 0; ele<clientes.length ; ele++){
                    if (clientes[ele].nombre == saldoScliente){
                        clientes[ele].sumarSaldo(saldoSMonto)
                    }
                }
            break
            //Restar saldo a cliente
            case "5":
                let saldoRcliente = prompt("Ingrese Cliente?")
                let saldoRMonto = parseFloat(prompt("Saldo a restar?"))
                for (let ele = 0; ele<clientes.length ; ele++){
                    if (clientes[ele].nombre == saldoRcliente){
                        clientes[ele].restarSaldo(saldoRMonto)
                    }
                }
                break
            //Salida de programa
            case "6":
                for (let ele=0; ele < clientes.length;ele++){
                    document.getElementById("cliente").innerHTML += `${clientes[ele].nombre} <br>` 
                    document.getElementById("direccion").innerHTML += `${clientes[ele].direccion} <br>` 
                    document.getElementById("cuenta").innerHTML += `${clientes[ele].numeroCuemta} <br>` 
                    document.getElementById("saldo").innerHTML += `${clientes[ele].saldo} <br>` 
                }
                break
        }
    }while(menu !=6)
            
}
