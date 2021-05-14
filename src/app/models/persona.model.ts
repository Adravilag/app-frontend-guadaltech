export class Persona {

    constructor(
        public nombre: string,
        public apellidos: string,
        public email: string,
        public password?: string,
        public img?: string,
        public role?: 'ADMIN_ROLE' | 'USER_ROLE',
        public becarios?: [],
        public _id?: string
    ) {};

}