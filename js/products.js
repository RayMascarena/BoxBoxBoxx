export function getProduct(productId) {
    let matchingProduct;
    
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    return matchingProduct; 
}

export const products = [
{
    id: '1',
    image: 'images/products/landotee.JPG',
    name: 'Lando Norris <br> Tee',
    priceCents: 3899
},
{
    id: '2',
    image: 'images/products/hamiltontee.JPG',
    name: 'Lewis Hamilton <br> Tee',
    priceCents: 3899
},
{
    id: '3',
    image: 'images/products/sainztee.JPG',
    name: 'Carlos Sainz <br> Tee',
    priceCents: 3899
},
{
    id: '4',
    image: 'images/products/verstappentee.JPG',
    name: 'Max Verstappen <br> Tee',
    priceCents: 3899
},
{
    id: '5',
    image: 'images/products/dannytee.JPG',
    name: 'Daniel Ricciardo <br> Tee',
    priceCents: 3899
},
{
    id: '6',
    image: 'images/products/alonsotee.JPG',
    name: 'Fernando Alonso <br> Tee',
    priceCents: 3899
},
{
    id: '7',
    image: 'images/products/leclerctee.JPG',
    name: 'Charles Leclerc <br> Tee',
    priceCents: 3899
},
{
    id: '8',
    image: 'images/products/pereztee.JPG',
    name: 'Sergio Perez <br> Tee',
    priceCents: 3899
},
{
    id: '9',
    image: 'images/products/monacotee.JPG',
    name: 'Monaco <br> Tee',
    priceCents: 3899
},
{
    id: '10',
    image: 'images/products/monzatee.JPG',
    name: 'Monza <br> Tee',
    priceCents: 3899
},
{
    id: '11',
    image: 'images/products/boxboxboxxtee.JPG',
    name: 'BoxBoxBoxx <br> Tee',
    priceCents: 3899
},
{
    id: '12',
    image: 'images/products/smoothoperatortee.JPG',
    name: 'Smooth Operator <br> Tee',
    priceCents: 3899
},
{
    id: '13',
    image: 'images/products/oscartee.JPG',
    name: 'Oscar Piastri <br> Tee',
    priceCents: 3899
},
{
    id: '14',
    image: 'images/products/ballislifetee.JPG',
    name: 'Ball is Lando <br> Tee',
    priceCents: 3899
},
{
    id: '15',
    image: 'images/products/maxtee.JPG',
    name: 'Maxxx <br> Tee',
    priceCents: 3899
},
{
    id: '16',
    image: 'images/products/yukitee.JPG',
    name: 'Yuki Tsunoda <br> Tee',
    priceCents: 3899
},
{
    id: '17',
    image: 'images/products/monacohoodie.JPG',
    name: 'Monaco <br> Hoodie',
    priceCents: 5899
},
{
    id: '18',
    image: 'images/products/ballislifehoodie.JPG',
    name: 'Ball is Lando <br> Hoodie',
    priceCents: 5899
},
{
    id: '19',
    image: 'images/products/smoothoperatorhoodie.JPG',
    name: 'Smooth Operator <br> Hoodie',
    priceCents: 5899
},
{
    id: '20',
    image: 'images/products/leclerchoodie.JPG',
    name: 'Charles Leclerc <br> Hoodie',
    priceCents: 5899
},
{
    id: '21',
    image: 'images/products/boxboxboxxhoodie.JPG',
    name: 'BoxBoxBoxx <br> Hoodie',
    priceCents: 5899
},
{
    id: '22',
    image: 'images/products/verstappenhoodie.JPG',
    name: 'Max Verstappen <br> Hoodie',
    priceCents: 5899
},
{
    id: '23',
    image: 'images/products/alonsohoodie.JPG',
    name: 'Fernando Alonso <br> Hoodie',
    priceCents: 5899
},
{
    id: '24',
    image: 'images/products/dannyhoodie.JPG',
    name: 'Daniel Ricciardo <br> Hoodie',
    priceCents: 5899
},
{
    id: '25',
    image: 'images/products/hamiltonhoodie.JPG',
    name: 'Lewis Hamilton <br> Hoodie',
    priceCents: 5899
},
{
    id: '26',
    image: 'images/products/perezhoodie.JPG',
    name: 'Sergio Perez <br> Hoodie',
    priceCents: 5899
},
{
    id: '27',
    image: 'images/products/sainzhoodie.JPG',
    name: 'Carlos Sainz <br> Hoodie',
    priceCents: 5899
},
{
    id: '28',
    image: 'images/products/landohoodie.JPG',
    name: 'Lando Norris <br> Hoodie',
    priceCents: 5899
},
{
    id: '29',
    image: 'images/products/sennaposter.JPG',
    name: 'Ayrton Senna <br> Poster',
    priceCents: 2899
},
{
    id: '30',
    image: 'images/products/schumacherposter.JPG',
    name: 'Schumacher <br> Poster',
    priceCents: 2899
},
{
    id: '31',
    image: 'images/products/vettelposter.JPG',
    name: 'Sebastian Vettel <br> Poster',
    priceCents: 2899
},
{
    id: '32',
    image: 'images/products/hamiltonposter.JPG',
    name: 'Lewis Hamilton <br> Poster',
    priceCents: 2899
},
{
    id: '33',
    image: 'images/products/leclercposter.JPG',
    name: 'Charles Leclerc <br> Poster',
    priceCents: 2899
},
{
    id: '34',
    image: 'images/products/sainzposter.JPG',
    name: 'Carlos Sainz <br> Poster',
    priceCents: 2899
},
{
    id: '35',
    image: 'images/products/landoposter.JPG',
    name: 'Lando Norris <br> Poster',
    priceCents: 2899
},
{
    id: '36',
    image: 'images/products/alonsoposter.JPG',
    name: 'Fernando Alonso <br> Poster',
    priceCents: 2899
},
{
    id: '37',
    image: 'images/products/spaposter.JPG',
    name: 'Spa <br> Poster',
    priceCents: 2899
},
{
    id: '38',
    image: 'images/products/redbullringposter.JPG',
    name: 'Red Bull Ring <br> Poster',
    priceCents: 2899
},
{
    id: '39',
    image: 'images/products/silverstoneposter.JPG',
    name: 'Silverstone <br> Poster',
    priceCents: 2899
},
{
    id: '40',
    image: 'images/products/zandvoortposter.JPG',
    name: 'Zandvoort <br> Poster',
    priceCents: 2899
},
{
    id: '41',
    image: 'images/products/miamiposter.JPG',
    name: 'Miami <br> Poster',
    priceCents: 2899
},
{
    id: '42',
    image: 'images/products/suzukaposter.JPG',
    name: 'Suzuka <br> Poster',
    priceCents: 2899
},
{
    id: '43',
    image: 'images/products/abudhabiposter.JPG',
    name: 'Abu Dhabi <br> Poster',
    priceCents: 2899
},
{
    id: '44',
    image: 'images/products/monacoposter.JPG',
    name: 'Monaco <br> Poster',
    priceCents: 2899
},
];
