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
