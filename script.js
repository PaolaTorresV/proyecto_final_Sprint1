//Escribir una lista de usuarios con: nombre, número de documento, contraseña y tipo de usuario
// Administrado 1, Usuario 2
const arrayDeUsuarios = [
    {
        "nombre": "Andrea",
        "numeroDeDocumento": "1234",
        "contrasena": "1234",
        "tipoDeUsuario": 1,
    },
    {
        "nombre": "Carol",
        "numeroDeDocumento": "5678",
        "contrasena": "5678",
        "tipoDeUsuario": 2,
    },
]

let arraydeBilletes = [
    {
        "denominacion": 5000,
        "cantidad": 0,
    },
    {
        "denominacion": 10000,
        "cantidad": 0,
    },
    {
        "denominacion": 20000,
        "cantidad": 0,
    },
    {
        "denominacion": 50000,
        "cantidad": 0,
    },
    {
        "denominacion": 100000,
        "cantidad": 0,
    },
]

let arrayDeBilletesUsuario = [
    {
        "denominacion": 5000,
        "cantidad": 0,
    },
    {
        "denominacion": 10000,
        "cantidad": 0,
    },
    {
        "denominacion": 20000,
        "cantidad": 0,
    },
    {
        "denominacion": 50000,
        "cantidad": 0,
    },
    {
        "denominacion": 100000,
        "cantidad": 0,
    },
]

let programaAbierto = prompt("¿Desea iniciar el cajero? (si o no)");
/// Utilizo while porque necesito que diferentes acciones se ejecuten más de una vez 
while (programaAbierto === "si") {
    // Solicite ingreso documento y contraseña 
    const documentoIngresado = prompt("Ingrese su documento");
    const contrasenaIngresada = prompt("Ingrese su contraseña");
    const verificacionUsuario = arrayDeUsuarios.find(item => item.numeroDeDocumento == documentoIngresado &&
        item.contrasena == contrasenaIngresada);
    ///el find me va a buscar en el array y me retorna el objeto si no encuentra me retorna indefinido
    console.log(verificacionUsuario);
    //Si el usuario no existe debe indicarlo 
    if (verificacionUsuario == undefined) {
        alert("Los datos ingresados no corresponden con ninguno de nuestros registros");
        ///se vuelve a preguntar el usuario y la clave
        const documentoIngresado = prompt("Ingrese su documento");
        const contrasenaIngresada = prompt("Ingrese su contraseña");
    }
    else {
        alert("Bienvenido");
        ///aqui estoy buscando dentro del objeto la propiedad de tipo de usuario 
        if (verificacionUsuario.tipoDeUsuario == 1) {
            //Si el usuario es administrador debe permitir cargar el cajero
            alert("Ingresó como administrador, ahora puede cargar el cajero");
            //Solicitar la cantidad de billetes a depositar 
            /// Number para que lo ingresado por el promt sea leido como numero
            const cantidadBilletes5 = Number(prompt("Ingrese la cantidad de billetes de 5.000"));
            const cantidadBilletes10 = Number(prompt("Ingrese la cantidad de billetes de 10.000"));
            const cantidadBilletes20 = Number(prompt("Ingrese la cantidad de billetes de 20.000"));
            const cantidadBilletes50 = Number(prompt("Ingrese la cantidad de billetes de 50.000"));
            const cantidadBilletes100 = Number(prompt("Ingrese la cantidad de billetes de 100.000"));
            /// Aqui estoy buscando la denominación que se va a cambiar 
            ///Que me retorne el objeto y agregar la cantidad que puso el usuario en el promt al arraydeBilletes
            arraydeBilletes.map(obj => {
                if (obj.denominacion === 5000) {
                    obj.cantidad += cantidadBilletes5;
                }
            });
            console.log(arraydeBilletes);
            /// Que me busque la denominacion de 5.000 para determinar el total en esa denominación
            let encontrarBilletes5 = arraydeBilletes.find(obj =>
                obj.denominacion === 5000);
            let totalEnBilletes5
            if (encontrarBilletes5.denominacion == 5000) {
                totalEnBilletes5 = encontrarBilletes5.cantidad * encontrarBilletes5.denominacion;
            }
            let nuevacantidadBilletes5 = arraydeBilletes[0].cantidad;
            console.log(nuevacantidadBilletes5);
            console.log(totalEnBilletes5);
            // Mostrar la suma de cada denominación 
            alert(`Ahora el cajero esta cargado con ${nuevacantidadBilletes5} billetes en denominación de 5.000`);
            ///que me retorne el objeto y agregar la cantidad que puso el usuario en el promt al arraydeBilletes
            arraydeBilletes.map(obj => {
                if (obj.denominacion === 10000) {
                    obj.cantidad += cantidadBilletes10;
                }
            });
            console.log(arraydeBilletes);
            /// que me busque la denominacion de 10.000 para determinar el total en esa denominación   
            let encontrarBilletes10 = arraydeBilletes.find(obj =>
                obj.denominacion === 10000);
            let totalEnBilletes10
            if (encontrarBilletes10.denominacion == 10000) {
                totalEnBilletes10 = encontrarBilletes10.cantidad * encontrarBilletes10.denominacion;
            }
            let nuevacantidadBilletes10 = arraydeBilletes[1].cantidad;
            console.log(nuevacantidadBilletes10);
            console.log(totalEnBilletes10);
            alert(`Ahora el cajero esta cargado con ${nuevacantidadBilletes10} billetes en denominación de 10.000`);
            ///que me retorne el objeto y agregar la cantidad que puso el usuario en el promt al arraydeBilletes
            arraydeBilletes.map(obj => {
                if (obj.denominacion === 20000) {
                    obj.cantidad += cantidadBilletes20;
                }
            });
            console.log(arraydeBilletes);
            /// que me busque la denominacion de 20.000 para determinar el total en esa denominación   
            let encontrarBilletes20 = arraydeBilletes.find(obj =>
                obj.denominacion === 20000);
            let totalEnBilletes20
            if (encontrarBilletes20.denominacion == 20000) {
                totalEnBilletes20 = encontrarBilletes20.cantidad * encontrarBilletes20.denominacion;
            }
            let nuevacantidadBilletes20 = arraydeBilletes[2].cantidad;
            console.log(nuevacantidadBilletes20);
            console.log(totalEnBilletes20);
            alert(`Ahora el cajero esta cargado con ${nuevacantidadBilletes20} billetes en denominación de 20.000`);
            ///que me retorne el objeto y agregar la cantidad que puso el usuario en el promt al arraydeBilletes
            arraydeBilletes.map(obj => {
                if (obj.denominacion === 50000) {
                    obj.cantidad += cantidadBilletes50;
                }
            });
            console.log(arraydeBilletes);
            /// que me busque la denominacion de 50.000 para determinar el total en esa denominación
            let encontrarBilletes50 = arraydeBilletes.find(obj =>
                obj.denominacion === 50000);
            let totalEnBilletes50
            if (encontrarBilletes50.denominacion == 50000) {
                totalEnBilletes50 = encontrarBilletes50.cantidad * encontrarBilletes50.denominacion;
            }
            let nuevacantidadBilletes50 = arraydeBilletes[3].cantidad;
            console.log(nuevacantidadBilletes50);
            console.log(totalEnBilletes50);
            alert(`Ahora el cajero esta cargado con ${nuevacantidadBilletes50} billetes en denominación de 50.000`);
            ///que me retorne el objeto y agregar la cantidad que puso el usuario en el promt al arraydeBilletes
            arraydeBilletes.map(obj => {
                if (obj.denominacion === 100000) {
                    obj.cantidad += cantidadBilletes100;
                }
            });
            console.log(arraydeBilletes);
            /// que me busque la denominacion de 100.000 para determinar el total en esa denominación
            let encontrarBilletes100 = arraydeBilletes.find(obj =>
                obj.denominacion === 100000);
            let totalEnBilletes100
            totalEnBilletes100 = encontrarBilletes100.cantidad * encontrarBilletes100.denominacion;
            let nuevacantidadBilletes100 = arraydeBilletes[4].cantidad;
            console.log(nuevacantidadBilletes100);
            console.log(totalEnBilletes100);

            alert(`Ahora el cajero esta cargado con ${nuevacantidadBilletes100} billetes en denominación de 100.000`);
            var totalDisponibleCajero = totalEnBilletes5 + totalEnBilletes10 + totalEnBilletes20 + totalEnBilletes50 + totalEnBilletes100;
            console.log(totalDisponibleCajero);
            console.log(arraydeBilletes);
            // Mostrar total general 
            alert(`Ahora el cajero esta cargado con un total de  ${totalDisponibleCajero}`);
            // Volver a solicitar usuario y contraseña
            let dejarDeEjecutar = prompt("¿Quiere cerrar el cajero? (si o no)");
            if (dejarDeEjecutar === "si") {
                programaAbierto = false
            };
        } else {
            alert("Ingresó como usuario, ahora puede retirar dinero")
            console.log(arraydeBilletes);
        }
        if (verificacionUsuario.tipoDeUsuario == 2) {
            //Preguntar al usuario la cantidad a retirar 
            var dineroSolicitado = Number(prompt("Ingrese la cantidad de dinero que solicita"));
            console.log(dineroSolicitado);
            // Si el cajero no tiene dinero debe avisar al usuario
            if (dineroSolicitado < 5000) { "Monto no disponible" }
            if (totalDisponibleCajero >= dineroSolicitado) {
                alert("Su solicitud será procesada")
            } else { 
                alert("Monto no disponible, el cajero se encuentra en mantenimiento") }
            // Cuanto puedo entregar 
            /// Recorrer el array para buscar si las cantidades y denominaciones me alcanzan para entregar a usuario
            arraydeBilletes.forEach((element) => {
                ///Math floor para aproximar el valor hacia abajo 
                let billetesSolicitados = Math.floor(dineroSolicitado / element.denominacion)
                /// Verificar si con la cantidad de billetes que tengo me alcanza para lo que neceasito
                if (billetesSolicitados <= element.cantidad) {
                    console.log(billetesSolicitados);
                    element.cantidad -= billetesSolicitados;
                    var longitudArray = arrayDeBilletesUsuario.push(element)
                    // actualizar el array de billetes de usuario con lo que pido 
                    arrayDeBilletesUsuario[longitudArray - 1].cantidad = billetesSolicitados
                    dineroSolicitado -= element.cantidad * element.denominacion
                    console.log(arraydeBilletes);
                    // Mostrar la cantidad entregada 
                    alert(`Se ha entregado  ${billetesSolicitados} en denominación de ${element.denominacion}`)
                } else {
                    if ((totalDisponibleCajero - (element.cantidad * element.denominacion)) <= dineroSolicitado) {
                        arrayDeBilletesUsuario.push(element)
                        element.cantidad = 0;
                        dineroSolicitado -= element.cantidad * element.denominacion
                    } 
                }
            });
            // CERRAR USUARIO
        }
        //let dejarDeEjecutar = prompt("¿Quiere cerrar el cajero? (si o no)");
        //if (dejarDeEjecutar === "si") {
        //  programaAbierto = false
        //};
        // CERRAR ELSE           
    }
    //CERRAR WHILE 
}
