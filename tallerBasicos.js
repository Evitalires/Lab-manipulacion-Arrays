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