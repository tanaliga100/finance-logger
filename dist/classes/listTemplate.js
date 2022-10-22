export class ListOfTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        this.container.innerHTML += `
        <tr>
            <td>${heading.toUpperCase()}</td>
            <td>${item.client}</td>
            <td>${item.details}</td>
            <td>Php  ${item.amount.toLocaleString()}</td>
            <td class="actions">
            <button class="btn-action-edit">Edit</button>
            <button class="btn-action-del">Delete</button>
            </td>
        </tr>
        `;
        // const li = document.createElement('span');
        // const h4 = document.createElement('h4');
        // h4.innerText = heading
        // li.append(h4)
        // const p = document.createElement('p');
        // p.innerText = item.format()
        // li.append(p)
        // if (position === 'start') {
        //     this.container.prepend(li)
        // } else {
        //     this.container.append(li)
        // }
    }
}
