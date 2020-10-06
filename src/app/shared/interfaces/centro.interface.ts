export interface Centro {
    uid?: string;
    centro?: string;
    codigo?: number;
    electores?: number;
    password?: number;
    location?: Location;
}

export interface Location {
    cuadrante?: number;
    municipio?: string;
    parroquia?: string;
}

export interface Psuv {
    cedula?: number;
    name?: string;
    phone?: number;
    password?: number;
}

export interface Poll {
    id?: string;
    data?: string;
    cne?: number;
    psuv?: number;
}