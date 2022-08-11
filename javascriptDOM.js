    
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
      nombre: "maria alejandra",
      direccion: "ayacucho 155",
      localidad: "cordoba",
      numeroCuenta: 67434,
      saldo: 5500
    },
    {
        id:5,
        nombre: "maria",
        direccion: "mar del plata 685",
        localidad: "cordoba",
        numeroCuenta: 67434,
        saldo: 5500
      },
      {
        id:6,
        nombre: "lucas",
        direccion: "puayrredon 200",
        localidad: "cordoba",
        numeroCuenta: 67434,
        saldo: 5500
      },
      {
        id:7,
        nombre: "fabian",
        direccion: "san luis 500",
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
          this.numeroCuenta = numeroCuenta
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
      
      //Accediendo a los elementos id
      const tbody = document.getElementById("tbody")        
      const inputText = document.getElementById("inputText")
      const btnVolver = document.getElementById("btnVolver")
      const ocultar  = document.getElementById("ocultar")
      const cargadatos = document.getElementById("cargadatos")
  
    //Muestra inicial clientes de base de datos
    mostrarClientes()
   
    //Funcion muestra clientes
    function mostrarClientes(){

        //ocultando/mostrando btn
        cargadatos.style.display=`none`
        inputText.style.display=`none`
        btnVolver.style.display=`none`
        ocultar.style.display = ``

        //creando tabla
        tbody.innerHTML = `
            <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            `
        //llenando tabla
        clientes.forEach((info)=>{
           tbody.innerHTML += `
           <tr>
           <th scope="row">${info.id}</th>
           <td>${info.nombre}</td>
           <td>${info.direccion}</td>
           <td>${info.localidad}</td>
           <td>${info.numeroCuenta}</td>
           <td>${info.saldo}</td>
           </tr>
           `
        })
      
    }
    
    //Funcion crea formulario de nuevo cliente
    function nuevoCliente(){

        ocultar.style.display=`none`        

        cargadatos.style.display=``        
        
        //creando formulario de carga de cliente
        cargadatos.innerHTML = (` 
        <div class="mt-4 mb-3 ms-3">
        <label for="formGroupExampleInput" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" placeholder="ingrese nombre">
        </div>
        <div class="mb-3 ms-3">
        <label for="formGroupExampleInput2" class="form-label">Dirección</label>
        <input type="text" class="form-control" id="direccion" placeholder="ingrese dirección">
        </div>
        <div class="mb-3 ms-3">
        <label for="formGroupExampleInput3" class="form-label">Localidad</label>
        <input type="text" class="form-control" id="localidad" placeholder="ingrese localidad">
        </div>
        <div class="mb-3 ms-3">
        <label for="formGroupExampleInput5" class="form-label">Saldo</label>
        <input type="text" class="form-control" id="saldo" placeholder="ingrese monto">
        </div>


        <button type="submit" class="btn btn-primary ms-3" onclick="cargaDatos()">Submit</button>
        <button type="cancel" class="btn btn-primary ms-3" onclick="mostrarClientes()">Cancelar</button>

        `)
    }

    //Funcion carga el nuevo cliente
    function cargaDatos(){
        
        const nombre = document.getElementById("nombre")
        const direccion = document.getElementById("direccion")
        const localidad = document.getElementById("localidad")
        const saldo = document.getElementById("saldo")
       
        const idMax = clientes.reduce (function(acc,ele){
            if (acc.id < ele.id){
                return acc.id + 1
            }else{
                return ele.id + 1
            }
        })
        let numeroAleatorio = Math.round(Math.random()*100000);
        const nuevoCliente = new Cliente (idMax ,nombre.value.toUpperCase(),direccion.value,localidad.value.toUpperCase(),numeroAleatorio,saldo.value)
        clientes.push(nuevoCliente)
        mostrarClientes()
    }

   
    //Funcion filtrar cliente por nombre
    function filtrarCliente(){
        
        inputText.value=``
        inputText.style.display=``
        btnVolver.style.display=``

        inputText.addEventListener("input",()=>{
            console.log(inputText.value)
            
            const encontrado = clientes.filter((ele)=>ele.nombre.includes(inputText.value.toUpperCase()))
            console.log(encontrado)
           
            
           tbody.innerHTML = ``
           //actualizando tabla
           encontrado.forEach((info)=>{
                
                tbody.innerHTML += `
                <tr>
                <th scope="row">${info.id}</th>
                <td>${info.nombre}</td>
                <td>${info.direccion}</td>
                <td>${info.localidad}</td>
                <td>${info.numeroCuenta}</td>
                <td>${info.saldo}</td>
                </tr>
                `
            })
           
        })
      
    }