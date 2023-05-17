import {url , shopId} from './constant.js' ;

//import data from './dataOfProducts';


const data = [{
    action: 'add-product',
    name : 'uppblåsbar familjpool' ,
    description:'det är bra valt för din familj under sommar mått rektangulär 300x180cm ',
    picture: "/image/uppblåsbar-pool.jpeg" ,
    price: 399,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'uppblåsbar lounge',
    description:' passar bra för en varm sommar tyget är solskydd 100x155cm',
    picture: "/image/uppblåsbar-lounge.jpeg" ,
    price: 1100,
    shopid: shopId,
},
/*{
    action: 'add-product',
    name : 'uppblåsbar fåtölje' ,
    description:'en fin och cool produkt för en skönt sommar tyget är solskydd 100x155cm',
    picture: "/image/uppblåsbar-fåtölje.jpeg" ,
    price: 599,
    shopid: shopId,    
},
{
    action: 'add-product',
    name : 'uppblåsbar bumperball' ,
    description:' Upplev den ultimata adrenalinkicken med Bumperball, det perfekta spelet för dig som älskar fotboll och roliga fysiska aktiviteter! ',
    picture: "/image/uppblåsbar-bumperball.jpeg" ,
    price: 890,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'klätterställning' ,
    description:' det är en rolig och hållbar lekstruktur med en metallram med flera horisontella stänger på olika höjder för barn att klättra, gunga och leka. ',
    picture: "/image/klätterställning.jpeg" ,
    price: 1490,
    shopid: shopId,  
},
{
    action: 'add-product',
    name : 'studsmatta' ,
    description:'Njut av oändligt studsande kul med vår högkvalitativa studsmatta, med en robust ram, studsmatta och säkerhetsnät för en säker hoppupplevelse. ',
    picture: "/image/studsmatta.jpeg" ,
    price: 3455,
    shopid: shopId,      
},
{
    action: 'add-product',
    name : 'såpbubblor' ,
    description:'Gör tiden roligare med vår såpbublor hink, en unik och interaktiv leksak som skapar ett bubblande vattenfall för barn att leka med och njuta av.',
    picture: "/image/såpbublor.jpeg" ,
    price: 250,
    shopid: shopId,  
},
{
    action: 'add-product',
    name : 'baseball tränningsset' ,
    description:'Introducera ditt barn till basebollspelet med vårt baseballset för småbarn, som innehåller ett mjukt skumträ och boll för en säker och rolig inlärningsupplevelse.',
    picture: "/image/baseball-träningsset.jpeg" ,
    price: 239,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'elvattenpistol' ,
    description:'Vattenpistolen Electric är det perfekta sommartillbehöret för barn, pojkar, flickor och till och med vuxna som vill njuta av utomhus under den varma årstiden',
    picture: "/image/elvattenpistol.jpeg" ,
    price: 420,
    shopid: shopId, 
},
{
    action: 'add-product',
    name : 'vattenpistol' ,
    description:'Vattenpistol X-Shot Micro Fast Fill innehåller en vattenpistol i vitt, orange, blått och grönt som enkelt kan fyllas genom att doppa ner pistolen i vatten.',
    picture: "/image/vattenpistol.jpeg" ,
    price: 130,
    shopid: shopId,   
},
{
    action: 'add-product',
    name : 'mini fotboll mål' ,
    description:'Perfekt för att lära dig grunderna i fotboll, samtidigt som du förbättrar motorik, koordination och sociala färdigheter. Tillverkad av tung metall.',
    picture: "/image/mini-fotboll-mål.jpeg" ,
    price: 390,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'fånga ball' ,
    description:'Ha kul med vänner och familj med vårt fångstbollsspel, med två mjuka och slitstarka kardborrevantar och en boll för timmar av utomhuslek.',
    picture: "/image/fånga-bollen.jpeg" ,
    price: 65,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'kastspel ringar' ,
    description:'Roligt kastspel för vuxna och familj: Detta ringkastningsspel är en rolig och engagerande aktivitet som kan hålla barn och vuxna aktiva och underhållna.',
    picture: "/image/kastspel-ring.jpeg" ,
    price: 65,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'twister splash vatten' ,
    description:'Lägg till lite kul till din nästa sammankomst med Twister Splash vatten - spelet som garanterat kommer att göra ett stänk och hålla dig sval!',
    picture: "/image/twister-splash-vatten.jpeg" ,
    price: 179,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'twister splash vatten' ,
    description:'Ta festen till nästa nivå med vårt uppblåsbara limbospel - det perfekta tillskottet för alla evenemang eller fester!',
    picture: "/image/uppblåsbar-limbo.jpeg" ,
    price: 179,
    shopid: shopId,  
},
{
    action: 'add-product',
    name : 'uppblåsbar limbo' ,
    description:'Ta festen till nästa nivå med vårt uppblåsbara limbospel - det perfekta tillskottet för alla evenemang eller fester!',
    picture: "/image/uppblåsbar-limbo.jpeg" ,
    price: 350,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'kornhål' ,
    description:"Gör dig redo för lite vänskaplig tävling med vårt klassiska majshålsspel - perfekt för grillning på bakgården, baklucka och mer!",
    picture: "/image/kornhål.jpeg" ,
    price: 1799,
    shopid: shopId,
},*/
]

async function addProduct(allproducts) {
    console.log('its adding 1..');
   
    const options = {
        method: 'POST',
        headers:{'Content-type' : 'application/json'},
        body: JSON.stringify(allproducts)
    }
    const response = await fetch(url,options)
    const statusObject = await response.json()
    console.log('response from api', statusObject);

}

async function addAllTheProducts() {
	// Detta är bara till för att skapa en array med produkter
	// Använd din egen data
	let products = data.map(item => (
    {action: 'add-product',
    name: item.name ,
    description : item.description,
    price : item.price,
    picture : item.picture,
    shopid: item.shopid }))
	//console.log(products)

	products.forEach(product => {
		addProduct(product)
	})
}


addAllTheProducts()

export default addAllTheProducts
