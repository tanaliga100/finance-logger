// import interface 
import { IFormatter } from "../interfaces/interfaceOne"

export class Payment {
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a
    }
    client: string;
    details: string;
    amount: number

    // format() {
    //     return `${this.recipient} is owed  Php ${this.amount} from ${this.details}`
    // }
}

