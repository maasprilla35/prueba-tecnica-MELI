const fetch = require('node-fetch');

module.exports.index = async function (req, res) {
    let search = req.query.q;

    var url = new URL(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`);
    const response = await fetch(url);
    const data = await response.json();

    let itemList = [];
    for (let index = 0; index < data.results.length; index++) {
        const element = data.results[index];
        itemList.push({
            id: element.id,
            title: element.title,
            price: {
                currency: element.currency_id, amount: element.price, decimals: 2
            },
            picture: element.thumbnail,
            condition: element.condition,
            free_shipping: element.shipping.free_shipping,
            state_name: element.address.state_name
        });
    }
    let searhResult = {
        author: {
            name: 'Miguel Angel',
            lastname: 'Asprilla Varela'
        },
        categories: ['General'],
        items: itemList
    };

    return res.status(200).send({
        status: 'success',
        code: 0,
        data: searhResult
    });
}

module.exports.show = async function (req, res) {
    let id = req.params.id;

    // https://api.mercadolibre.com/items/​:id https://api.mercadolibre.com/items/​:id​/description

    var url = new URL(`https://api.mercadolibre.com/items/${id}#json`);
    const response = await fetch(url);
    const data = await response.json();

    var urlDescription = new URL(`https://api.mercadolibre.com/items/${id}/description#json`);
    const responseDesc = await fetch(urlDescription);
    const dataDesc = await responseDesc.json();

    let picture;
    for (let index = 0; index < data.pictures.length; index++) {
        const element = data.pictures[index];
        picture = element.secure_url;
    }
    if (picture == null) {
        data.secure_thumbnail;
    }


    let searhResult = {
        author: {
            name: 'Miguel Angel',
            lastname: 'Asprilla Varela'
        },
        categories: ['General'],
        item: {
            id: data.id,
            title: data.title,
            price: {
                currency: data.currency_id, amount: data.price, decimals: 2
            },
            picture: picture,
            condition: data.condition == 'new' ? 'Nuevo' : 'Usado',
            free_shipping: data.shipping.free_shipping,
            state_name: data.seller_address.state.name,
            sold_quantity: data.sold_quantity,
            description: dataDesc.plain_text
        },
    };

    return res.status(200).send({
        status: 'success',
        code: 0,
        data: searhResult
    });
}

