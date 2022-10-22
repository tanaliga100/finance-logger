import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListOfTemplate } from './classes/listTemplate.js';
const formEl = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const clearEl = document.querySelector('#clear');
//list template instance
const ul = document.querySelector('ul');
const tbody = document.querySelector('.tbody');
const list = new ListOfTemplate(tbody);
clearEl.addEventListener('click', () => {
    type.value = '';
    toFrom.value = "";
    details.value = "";
    amount.value = '';
    return false;
});
formEl === null || formEl === void 0 ? void 0 : formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value.toUpperCase(), details.value.toUpperCase(), Number(amount.value.toLocaleString()));
    }
    else if (type.value === 'payment') {
        doc = new Payment(toFrom.value.toUpperCase(), details.value.toUpperCase(), Number(amount.value.toLocaleString()));
    }
    else {
        alert('Please select the type of transaction you want to...');
        return;
    }
    if (!type.value && !toFrom.value && !details.value && !amount.value) {
        alert('Please fill all the fields');
        return;
    }
    list.render(doc, type.value, 'end');
    type.value = '';
    toFrom.value = "";
    details.value = "";
    amount.value = '';
});
// const invoiceOne = new Invoice('Lara', 'work on the mario website', 2400)
// const invoiceTwo = new Invoice('Maris', 'work on the bank', 5000)
// let invoices: Invoice[] = []
// invoices.push(invoiceOne)
// invoices.push(invoiceTwo)
// // DOM CASTING
// // inputs
// const formEl = document.querySelector<HTMLFormElement>('.new-item-form')
// const type = document.querySelector('#type') as HTMLSelectElement;
// const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// formEl?.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const Details = {
//         type: type.value,
//         from: toFrom.value,
//         details: details.value,
//         amount: amount.valueAsNumber,
//         createdAt: new Date()
//     }
//     console.log('Details:', Details);
//     type.value = ''
//     toFrom.value = ""
//     details.value = ""
//     amount.value = ''
// })
// // function signatures
// //sample 1
// let greet: (a: string, b: string) => void
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
// //sample 2
// let calc: (a: number, b: number, c: string) => number
// calc = (num1: number, num2: number, action: string) => {
//     if (action === "ADD") {
//         return num1 + num2;
//     } else {
//         return num1 - num2
//     }
// }
// //sample 3 
// let logDetails: (obj: { name: string, age: number }) => void
// logDetails = (people: { name: string, age: number }) => {
//     console.log(`${people.name} is ${people.age} years old`);
// }
// logDetails({ name: 'John', age: 3 });
