// Ejercicio 1
function calculadoraPropinas(totalCuenta, porcentajePropina) {
    porcentajePropina = porcentajePropina / 100;
    return totalCuenta - (totalCuenta *= porcentajePropina);
}
console.log("Calculador de Propinas test: ", calculadoraPropinas(100000, 10));

// Ejercicio 2
const prompt = require("prompt-sync")();

function askPassword() {
    console.log("\nSu contraseña debe tener:");
    console.log("- Mínimo 8 caracteres");
    console.log("- Al menos 1 número");
    console.log("- Al menos 1 mayúscula");
    return prompt("Escriba su contraseña: ");
}

function validatePassword(password) {
    let passwordFormat = false;

    while (!passwordFormat) {
        const tieneMayuscula = password !== password.toLowerCase();
        const tieneNumero = /[0-9]/.test(password);
        const longitudDe8 = password.length >= 8;

        if (tieneMayuscula && tieneNumero && longitudDe8) {
            console.log("✅ Registro de contraseña exitoso.");
            passwordFormat = true;
        } else {
            console.log("\n❌ Contraseña inválida. Intente de nuevo.");
            if (!tieneMayuscula) console.log("- Debe incluir al menos una mayúscula.");
            if (!tieneNumero) console.log("- Debe incluir al menos un número.");
            if (!longitudDe8) console.log("- Debe tener al menos 8 caracteres.");
            password = askPassword();
        }
    }
}

let newPassword = askPassword();
validatePassword(newPassword);

//Ejercicio 3
// Sistema de gestion de inventario
const inventario = [
 { nombre: "Camisa", precio: 20 },
 { nombre: "Zapatos", precio: 50 }
];
function buscarProducto(nombre,inventario) {
    const existe = inventario.some(
        item => item.nombre.toLowerCase() === nombre.toLowerCase()
    )    
    if(existe) {
        console.log("El producto existe.");
    } else {
        return console.log(null);
    }
}
console.log(inventario);
console.log(inventario[0]);

buscarProducto("Teche", inventario);
buscarProducto("Zapatos", inventario);

//Ejercicio 4
function calcularPromedioNotas(notas) {
    //separar notas
    let notasPuras = notas
        .split("")
        .filter(char => !isNaN(parseInt(char)));
    console.log('Notas: ', notasPuras);
    
    let suma = 0;
    notasPuras.forEach(element => {
        suma += parseInt(element)
    });
    console.log("Suma:", suma);
    console.log(notasPuras.len);
    
    let promedio = suma / notasPuras.length;
    promedio = promedio.toFixed(2);
    console.log("El promedio de notas es: ", promedio);
    return promedio;
}
calcularPromedioNotas(prompt("Escriba las notas para calcular el promedio: "));

// Ejercicio 5: Filtrar Usuarios por Edad
// Red social.
let usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Jhon", edad: 34 },
    { nombre: "Ema", edad: 40 },
    { nombre: "Juan", edad: 19 } 
]

function filtrarUsuariosEdad(usuarios, edadMinima) {
    let usuariosFiltrados = [];
    usuarios.forEach(element => {
        console.log('Usuario', element);
        console.log('Edad', element.edad);
        if(element.edad >= edadMinima) usuariosFiltrados.push(element);
    });
    console.log("Usuarios filtrados: ",usuariosFiltrados);
}
filtrarUsuariosEdad(usuarios, 26)