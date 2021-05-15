export class Becario {

    constructor(
        public nombre: string,
        public apellidos: string,
        public puesto: string,
        public horario: string,
        public fechaalta: string,
        public responsables: string[],
        public id?: string,
    ) {};

}