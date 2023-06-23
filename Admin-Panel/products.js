let form = document.querySelector('form');


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let price = document.querySelector('#price').value;
    let description = document.querySelector('#description').value;

    const response = await fetch(`https://source.unsplash.com/random/900×700/?${title}`)

    let products = {
        title,
        price,
        description,
        image: response.url
    }

    const result = await fetch(`https://apidashboard-a7f05-default-rtdb.firebaseio.com/products.json`, {
        method: 'POST',
        body: JSON.stringify(products)
    })

    getInfo();
    Swal.fire(
        'Success',
        'Product added',
        'success'
    )
})

async function Edit(id) {
    let response = await fetch(`https://apidashboard-a7f05-default-rtdb.firebaseio.com/products/${id}.json`);
    let product = await response.json();

    let title = prompt('Enter the new title:', product.title);
    let price = prompt('Enter the new price:', product.price);
    let description = prompt('Enter the new description:', product.description);

    let updatedProduct = {
        title,
        price,
        description,
        image: product.image
    };

    await fetch(`https://apidashboard-a7f05-default-rtdb.firebaseio.com/products/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(updatedProduct)
    });

    getInfo();
    Swal.fire(
        'Success',
        'Product updated',
        'success'
    );
}


onload = getInfo;



async function getInfo() {
    let response = await fetch(`https://apidashboard-a7f05-default-rtdb.firebaseio.com/products.json`)

    let data = await response.json();

    let products = [];
    for (let key in data) {
        data[key].id = key;
        products.push(data[key]);
    }

    let tr = '';
    products.forEach((item, index) => {
        tr += `
        <tr>
        <th scope="row">${index++}</th>
        <td>${item.title}</td>
        <td><img src="${item.image}" /></td>
        <td>${item.price}</td>
        <td>
            <button class="btn btn-sm btn-danger" onclick="Delete('${item.id}')">Delete</button>
            <button class="btn btn-sm btn-primary" onclick="Edit('${item.id}')">Edit</button>
        </td>
        </tr>`;
    });
    document.querySelector('.tbody').innerHTML = tr;

}




async function Delete(id) {
    let response = await fetch(`https://apidashboard-a7f05-default-rtdb.firebaseio.com/products/${id}.json`, {
        method: 'DELETE'
    })
    getInfo();
    Swal.fire(
        'Success',
        'Product deleted',
        'success'
    )
}


let btn = document.querySelector('.exitbtn');

btn.addEventListener('click', () => {
    location.replace(`/Users/mcloveen/Desktop/Form-cool/index.html`)
})