
/*
ARRAYS
    Simulación de venta de productos con descuentos dependiendo de orden de llegada
 

let nombre 
let precioProducto = 0
let desc30 = 30
let desc20 = 20
let desc10 = 10
let contador = 0
let acu1=0
let acu2=0
let acu3=0
let acu4=0
let salir

//Precio con descuento
const precioConDesc = (precio,desc) => precio - (precio * desc)/100 

//Suma de precio con descuento
const subTotal = (a,acu) => acu += a

//Total ventas
const total = (acu1,acu2,acu3,acu4) => acu1+acu2+acu3+acu4


//carga datos de factura
function cargaDatos(){
    do{
        //contador clientes
        contador +=1
        
        //Ingreso clientes y precio de producto
        do{
            nombre = prompt("Nombre del cliente?")
            precioProducto = parseFloat(prompt("Precio del producto?"))
            if (nombre ==null || nombre =="" || precioProducto ==null || precioProducto =="" || isNaN(precioProducto)){
                alert("Cliente ó precio incorrecto")
            }
        }while(!nombre || precioProducto < 1 || isNaN(precioProducto))

        
        //control de clientes para aplicar descuentos
        if (contador <= 2){
            document.getElementById("p1").innerHTML += `Factura Nº: ${contador}, Cliente: ${nombre.toUpperCase()}, precio del producto $${precioProducto}, descuento 30%, Total c/desc: $${parseFloat(precioConDesc(precioProducto,desc30)).toFixed(2)} <br/>` 
            acu1 = (subTotal(precioConDesc(precioProducto,desc30),acu1))
            console.log(acu1)
        }else if(contador > 2 && contador <= 4){
            document.getElementById("p2").innerHTML +=`Factura Nº: ${contador}, Cliente: ${nombre.toUpperCase()}, precio del producto $${precioProducto}, descuento 20%, Total c/desc: $${parseFloat(precioConDesc(precioProducto,desc20)).toFixed(2)} <br/>`
            acu2 = (subTotal(precioConDesc(precioProducto,desc20),acu2))
            console.log(acu2)
        }else if (contador > 4 && contador <= 6){
            document.getElementById("p3").innerHTML +=`Factura Nº: ${contador}, Cliente: ${nombre.toUpperCase()}, precio del producto $${precioProducto}, descuento 10%, Total c/desc: $${parseFloat(precioConDesc(precioProducto,desc10)).toFixed(2)} <br/>`
            acu3 = (subTotal(precioConDesc(precioProducto,desc10),acu3))
            console.log(acu3)
        }else{
            document.getElementById("p4").innerHTML +=`Factura Nº: ${contador}, Cliente: ${nombre.toUpperCase()}, precio del producto $${precioProducto}, sin descuento <br/>`
            acu4 += precioProducto
            console.log(acu4)
        }

        //Salir o continuar carga de datos
        do{
            salir = prompt("desea salir?").toLowerCase()
            if (salir != "si" && salir != "no"){
                alert(`Ingrese "si" para salir, "no" para continuar`)
            }
        }while(salir != "si" && salir != "no")
        
    }while(salir !="si")
    
    //creación de sub-totales
    if (document.getElementById("p1").textContent != ""){
        document.getElementById("p1").innerHTML +=` <br> Sub-Total: $${acu1.toFixed(2)}`    
    }else{
        document.getElementById("titulo1").hidden ="true"
    }
    if (document.getElementById("p2").textContent != ""){
        document.getElementById("p2").innerHTML +=` <br> Sub-Total: $${acu2.toFixed(2)}`    
    }else{
        document.getElementById("titulo2").hidden = "true"
    }
    if (document.getElementById("p3").textContent != ""){
        document.getElementById("p3").innerHTML +=` <br> Sub-Total: $${acu3.toFixed(2)}`    
    }else{
        document.getElementById("titulo3").hidden ="true"
    }
    if (document.getElementById("p4").textContent != ""){
        document.getElementById("p4").innerHTML +=` <br> Sub-Total: $${acu4.toFixed(2)}`    
    }else{
        document.getElementById("titulo4").hidden ="true"
    }
    
    //Oculto boton
    document.getElementById("btn").hidden = "true"

    //Total ventas
    document.getElementById("totalfactura").innerHTML +=` $${total(acu1,acu2,acu3,acu4).toFixed(2)}`

    
}
*/
let menu
let clientes = []

class cliente {
    constructor (nombre,direccion,numeroCuenta,saldo){
        this.nombre = nombre
        this.direccion = direccion
        this.numeroCuemta = numeroCuenta
        this.saldo = saldo
    }
    sumarSaldo (saldo){
        this.saldo += saldo
    }
    restarSaldo (saldo){
        this.saldo -= saldo
    }

}


do{

    menu = prompt(`            *** MENU *** 
    1- Nuevo Cliente
    2- Eliminar Cliente
    3- Mostrar Cliente
    4- Salir`)
    
    
    switch(menu){
        case "1":
            const cliente1 = new cliente (prompt("Cliente?"),prompt("Dirección?"),prompt("Cuenta?"),prompt("Saldo?"))
            clientes.push(cliente1)
                break
        case "2":
            let eliminar = prompt("Cliente?")
            for (let elemento of clientes){
                console.log(elemento)
                console.log(elemento.nombre)
                if (eliminar == elemento.nombre){
                    alert(`cliente a eliminar`)
                    clientes.splice(elemento,1)
                }
            }4
            break
        case "3":
            console.table(clientes)
            break
        case "4":
            break
                }
    }while(menu !=4)
                    