// import interface 
import { IFormatter } from "../interfaces/interfaceOne"


export class Invoice {
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a
    }
    client: string;
    details: string;
    amount: number

    // format() {
    //     return `${this.client} owes Php${this.amount} for ${this.details}`
    // }
}

