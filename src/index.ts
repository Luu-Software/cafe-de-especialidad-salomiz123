import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalPorPersona: number = 0;
let totaldelacuenta: number = Number(totalTexto);
let dividirlacuentaentre: number = Number(personasTexto);

if(esEstudiante ==="si") {
    totalPorPersona = totaldelacuenta * 0.9 / dividirlacuentaentre
}
    else {
        totalPorPersona = totaldelacuenta / dividirlacuentaentre
    }


console.log(`Total por persona: $${totalPorPersona}`);
    