export class Persona {

    constructor(
        public nombre: string,
        public apellidos: string,
        public email: string,
        public puesto: string,
        public horario: string,
        public salario: number,
        public uid?: string
    ) {};

}