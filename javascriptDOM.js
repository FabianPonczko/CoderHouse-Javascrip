    
    //clientes pre-cargados
let clientesCargados = [
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
          this.numeroCuenta = numeroCuenta
          this.saldo = saldo
      }
  
  }
  
  //recuperar clientes del localstorage y sino carga los pre-cargados
  const objetosRecuperados  = localStorage.getItem("storageClientes")
  
  if (objetosRecuperados){
      if (JSON.parse(objetosRecuperados)[0] !=undefined ){
          clientesCargados = JSON.parse(objetosRecuperados)
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
  
  //Variables
  const tbody = document.getElementById("tbody")
  const buscarClienteId = document.getElementById("buscarClienteId")
  const cargadatos = document.getElementById("cargadatos")
  const ocultarTabla  = document.getElementById("ocultarTabla")
  const inputText = document.getElementById("inputText")
  const selectId = document.getElementById("selectId")
  const btnBorrar = document.getElementById("btnBorrar")
  const btnVolver = document.getElementById("btnVolver")
  const inputSaldo = document.getElementById("inputSaldo")
  const btnSalvar = document.getElementById("btnSalvar")
  let btnEliminar = false
  let idValorElejido =``
  let idElejido =[]
    

    mostrarClientes()
   

    //Input principal del nombre de cliente a buscar
    inputText.addEventListener("input",()=>{
        const encontrado = clientes.filter((ele=>ele.nombre.includes(inputText.value.toUpperCase())))
        tbody.innerHTML = ``
        selectId.innerHTML = ``
        encontrado.forEach((ele)=>{
            tbody.innerHTML += `
                                <tr>
                                <th id="fila${ele.id}" scope="row">${ele.id}</th>
                                <td>${ele.nombre}</td>
                                <td>${ele.direccion}</td>
                                <td>${ele.localidad}</td>
                                <td>${ele.numeroCuenta}</td>
                                <td>${ele.saldo}</td>
                                </tr>
                                `
        selectId.innerHTML += `<option value="${ele.id}">${ele.id},${ele.nombre}</option>`
        idElejido = encontrado
        })
        
        idValorElejido = selectId.options[selectId.selectedIndex].value;
     
        //habilita selectid si encuentra clientes y muestra btnborrar si esta en funcion de borrar
        if (encontrado.length > 0){
            selectId.style.display=``
            if (btnEliminar){
                btnBorrar.style.display=``
                inputSaldo.style.display=`none`
            }   
        }else{
            selectId.style.display=`none`
            btnBorrar.style.display=`none`
            inputSaldo.style.display=`none`
        }
    })

        //select desplegable
        selectId.addEventListener("change",()=>{          
            tbody.innerHTML =``
            tbody.innerHTML = `
                            <tr>
                            <th id="fila${idElejido[selectId.selectedIndex].id}" scope="row">${idElejido[selectId.selectedIndex].id}</th>
                            <td>${idElejido[selectId.selectedIndex].nombre}</td>
                            <td>${idElejido[selectId.selectedIndex].direccion}</td>
                            <td>${idElejido[selectId.selectedIndex].localidad}</td>
                            <td>${idElejido[selectId.selectedIndex].numeroCuenta}</td>
                            <td>${idElejido[selectId.selectedIndex].saldo}</td>
                            </tr>
                            `
            idValorElejido = selectId.options[selectId.selectedIndex].value;
            
        })

    //boton volver sin cambios
    btnVolver.addEventListener("click",()=>{
        mostrarClientes()
    })

    
    //boton borrar cliente y actualiza localstorage
    btnBorrar.addEventListener("click",()=>{
       const indice = clientes.findIndex((ele)=>ele.id == idValorElejido)
       clientes.splice(indice,1)
       localStorage.setItem('storageClientes', JSON.stringify(clientes));
       mostrarClientes()
    })

    
    //muestra lista de clientes
    function mostrarClientes(){
        buscarClienteId.style.display=`none`
        cargadatos.style.display=`none`
        btnBorrar.style.display=`none`
        ocultarTabla.style.display = ``
        tbody.innerHTML =   ` <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr> `

        clientes.forEach((info)=>{   
            tbody.innerHTML += `<tr>
                                <th scope="row">${info.id}</th>
                                <td>${info.nombre}</td>
                                <td>${info.direccion}</td>
                                <td>${info.localidad}</td>
                                <td>${info.numeroCuenta}</td>
                                <td>${info.saldo}</td>
                                </tr>`
        })
      
    }
    
    //Crea formulario para nuevo cliente
    nuevoCliente.addEventListener("click",()=>{
        ocultarTabla.style.display=`none`        
        cargadatos.style.display=``        
        cargadatos.innerHTML = `<div class="mt-4 mb-3 ms-3">
                                <label for="formGroupExampleInput" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" placeholder="ingrese nombre">
                                </div>
                                <div class="mb-3 ms-3">
                                <label for="formGroupExampleInput2" class="form-label">Direccion</label>
                                <input type="text" class="form-control" id="direccion" placeholder="ingrese dirección">
                                </div>
                                <div class="mb-3 ms-3">
                                <label for="formGroupExampleInput3" class="form-label">Localidad</label>
                                <input type="text" class="form-control" id="localidad" placeholder="ingrese localidad">
                                </div>
                                <div class="mb-3 ms-3">
                                <label for="formGroupExampleInput5" class="form-label">saldo</label>
                                <input type="text" class="form-control" id="saldo" placeholder="ingrese localidad">
                                </div>
                                <button type="submit" class="btn btn-primary ms-3" onclick="cargaDatos()">Submit</button>
                                <button type="cancel" class="btn btn-primary ms-3" onclick="mostrarClientes()">Cancelar</button>`
    })

    
    //Crea nuevo cliente y guarda en storage
    function cargaDatos(){
        const nombre = document.getElementById("nombre")
        const direccion = document.getElementById("direccion")
        const localidad = document.getElementById("localidad")
        const saldo = document.getElementById("saldo")
    
        //Busco el id maximo y le sumo 1 para el nuevo cliente
        const idMax = clientes.reduce (function(acc,ele){
            if (acc.id < ele.id){
                return acc.id + 1
            }else{
                return ele.id + 1
            }
        },1)
    
        //Crea numero aleatorio para numero de cuenta
        let numeroAleatorio = Math.round(Math.random()*100000);
    
        const nuevoCliente = new Cliente (idMax ,nombre.value.toUpperCase(),direccion.value,localidad.value.toUpperCase(),numeroAleatorio,saldo.value)
        clientes.push(nuevoCliente)
        buscarClienteId.style.display=`none`
        localStorage.setItem('storageClientes', JSON.stringify(clientes));
        mostrarClientes()
    }
    
  
    
    //Actualiza la paguina con botones para eliminar el cliente
    clienteAeliminar.addEventListener("click",()=>{
        btnEliminar = true
        inputSaldo.style.display=`none`
        btnVolver.style.display=`none`
        btnSalvar.style.display=`none`
        mostrarClientes()
        buscarClienteId.style.display=``
        selectId.style.display=`none`
        inputText.value=``
        
            
          
    })
    
    //Prepara paguina para filtrado de cliente por nombre
    filtarCliente.addEventListener("click",()=>{
        btnEliminar = false
        inputSaldo.style.display=`none`
        mostrarClientes()
        buscarClienteId.style.display=``
        selectId.style.display=`none`
        btnBorrar.style.display=`none`
        btnSalvar.style.display=`none`
        btnVolver.style.display=``
        inputText.value=``
        
    })

    //Prepara paguina con botones para modificar saldo saldo 
    ingresoSaldo.addEventListener("click",()=>{
        btnEliminar = false
        mostrarClientes()
        inputText.value=""
        inputSaldo.value=""
        selectId.style.display=`none`
        btnBorrar.style.display=`none`
        btnVolver.style.display=`none`
        buscarClienteId.style.display=``
        inputSaldo.style.display=``
        btnSalvar.style.display=``
    })
    
    //Modifica saldo
    btnSalvar.addEventListener("click",()=>{
       const indice = clientes.findIndex((ele)=>ele.id == idValorElejido)
       const saldo = parseFloat(clientes[indice].saldo)
       const nuevosaldo = parseFloat(inputSaldo.value) + saldo
       clientes[indice].saldo = nuevosaldo
       localStorage.setItem('storageClientes', JSON.stringify(clientes));
       mostrarClientes()
    })