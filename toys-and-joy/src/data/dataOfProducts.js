import { shopId } from "./constant.js";


const data = [{
    action: 'add-product',
    name : 'uppblåsbar familjpool' ,
    description:'det är bra valt för din familj under sommar mått rektangulär 300x180cm ',
    picture: "https://www.cabom.se/data/media/2022/05/Familjepool-stor.jpg" ,
    price: 399,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'uppblåsbar lounge',
    description:' passar bra för en varm sommar tyget är solskydd 100x155cm',
    picture: "https://m.media-amazon.com/images/I/61q2IpZEEeL._AC_SX679_.jpg" ,
    price: 1100,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'uppblåsbar fåtölje' ,
    description:'en fin och cool produkt för en skönt sommar tyget är solskydd 100x155cm',
    picture: "https://m.media-amazon.com/images/I/61YYRlacqqL._AC_UF1000,1000_QL80_.jpg" ,
    price: 599,
    shopid: shopId,    
},
{
    action: 'add-product',
    name : 'uppblåsbar bumperball' ,
    description:' Upplev den ultimata adrenalinkicken med Bumperball, det perfekta spelet för dig som älskar fotboll och roliga fysiska aktiviteter! ',
    picture: "https://cdn.cdon.com/media-dynamic/images/product/cloud/store/LanGames/000/125/721/005/125721005-254306399-11453-org.jpg?cache=133269979413471120&impolicy=product&width=600" ,
    price: 890,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'klätterställning' ,
    description:' det är en rolig och hållbar lekstruktur med en metallram med flera horisontella stänger på olika höjder för barn att klättra, gunga och leka. ',
    picture: "https://m.media-amazon.com/images/I/61BCQblt9UL._AC_UF1000,1000_QL80_.jpg" ,
    price: 1490,
    shopid: shopId,  
},
{
    action: 'add-product',
    name : 'studsmatta' ,
    description:'Njut av oändligt studsande kul med vår högkvalitativa studsmatta, med en robust ram, studsmatta och säkerhetsnät för en säker hoppupplevelse. ',
    picture: "https://www.elgiganten.se/image/dv_web_D180001005118788/329140/tectake-studsmatta-med-skyddsnat-427-cm--pdp_zoom-3000--pdp_main-540.jpg" ,
    price: 3455,
    shopid: shopId,      
},
{
    action: 'add-product',
    name : 'såpbubbelpistol' ,
    description:'Gör tiden roligare med vår såpbublor hink, en unik och interaktiv leksak som skapar ett bubblande vattenfall för barn att leka med och njuta av.',
    picture: "https://media.lekia.se/lekia/images/g-leki-52105951-bl-2021-08-30-161817195/555/555/2/mtbf-sapbubbelpistol.jpg" ,
    price: 250,
    shopid: shopId,  
},
{
    action: 'add-product',
    name : 'baseball tränningsset' ,
    description:'Introducera ditt barn till basebollspelet med vårt baseballset för småbarn, som innehåller ett mjukt skumträ och boll för en säker och rolig inlärningsupplevelse.',
    picture: "https://m.media-amazon.com/images/I/615w+yegZHL._AC_UF1000,1000_QL80_.jpg" ,
    price: 239,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'elvattenpistol' ,
    description:'Vattenpistolen Electric är det perfekta sommartillbehöret för barn, pojkar, flickor och till och med vuxna som vill njuta av utomhus under den varma årstiden',
    picture: "https://stuffstore.se/wp-content/uploads/2023/05/Batteridriven-Vattenpistol-sommarens-favoritleksak.jpg" ,
    price: 420,
    shopid: shopId, 
},
{
    action: 'add-product',
    name : 'vattenpistol' ,
    description:'Vattenpistol X-Shot Micro Fast Fill innehåller en vattenpistol i vitt, orange, blått och grönt som enkelt kan fyllas genom att doppa ner pistolen i vatten.',
    picture: "https://www.buttericks.se/cdn-cgi/image/width=884,height=884,quality=90,format=auto/https://www.buttericks.se/media/catalog/product/2/2/221129-vattenpistol-30-cm.jpg?width=884&height=884&store=se&image-type=image" ,
    price: 130,
    shopid: shopId,   
},
{
    action: 'add-product',
    name : 'mini fotboll mål' ,
    description:'Perfekt för att lära dig grunderna i fotboll, samtidigt som du förbättrar motorik, koordination och sociala färdigheter. Tillverkad av tung metall.',
    picture: "https://www.lekolar.se/globalassets/inriver/resources/116428_095031.jpg" ,
    price: 390,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'fånga ball' ,
    description:'Ha kul med vänner och familj med vårt fångstbollsspel, med två mjuka och slitstarka kardborrevantar och en boll för timmar av utomhuslek.',
    picture: "https://summerfun.se/149-large_default/fanga-boll.jpg" ,
    price: 65,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'kastspel ringar' ,
    description:'Roligt kastspel för vuxna och familj: Detta ringkastningsspel är en rolig och engagerande aktivitet som kan hålla barn och vuxna aktiva och underhållna.',
    picture: "https://www.coolpriser.se/images/thimble/6416739580319-0-p.jpg" ,
    price: 65,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'twister splash vatten' ,
    description:'Lägg till lite kul till din nästa sammankomst med Twister Splash vatten - spelet som garanterat kommer att göra ett stänk och hålla dig sval!',
    picture: "https://www.barnkalaset.se/pub_images/original/71010.jpg" ,
    price: 579,
    shopid: shopId,
},

{
    action: 'add-product',
    name : 'uppblåsbar limbo' ,
    description:'Ta festen till nästa nivå med vårt uppblåsbara limbospel - det perfekta tillskottet för alla evenemang eller fester!',
    picture: "https://www.kalaslagret.se/wp-content/uploads/sites/2/121762556-origpic-306214.jpg" ,
    price: 350,
    shopid: shopId,
},
{
    action: 'add-product',
    name : 'kornhål' ,
    description:"Gör dig redo för lite vänskaplig tävling med vårt klassiska majshålsspel - perfekt för grillning på bakgården, baklucka och mer!",
    picture: "https://m.media-amazon.com/images/I/81jlFtt7TbL._AC_UF1000,1000_QL80_.jpg" ,
    price: 1799,
    shopid: shopId,
},
{
    action: 'add-product',
    name: 'Beach Volleyball Set',
    Description: 'Gör stranden till din egen spelplats med vårt beach volleyboll set! Perfekt för roliga stunder i solen med vänner och familj.',
    Picture: "https://m.media-amazon.com/images/I/71oW8c2uQAL._AC_SX679_.jpg",
    Price: 5699,
    Shopid: shopId,
},
{
    action: 'add-product',
    name: 'frisbee',
    Description: 'Kasta iväg stressen och ha kul med vårt professionella frisbee set. Perfekt för sommarpicknicken eller parken',
    Picture: "https://m.media-amazon.com/images/I/81plXVp-nmL._AC_UF1000,1000_QL80_.jpg",
    Price: 299,
    Shopid: shopId,
},
{
    action: 'add-product',
    name: 'hängmatta för två',
    Description: 'Koppla av och njut av sommardagarna i vår bekväma hängmatta för två. Perfekt för avkoppling och romantik',
    Picture: "https://www.hangmattabutik.se/img/-y5izXDVTR3aHKHwDGdzN1ii6H8_6rs0A65rVwRy6Z0/resize:fit:675:493/aHR0cHM6Ly93d3cuaGFuZ21hdHRhYnV0aWsuc2UvbWVkaWEvY2F0YWxvZy9wcm9kdWN0L2gvYS9oYW1tb2NrLXJvcGUtYmxhY2stMy5qcGc_d2lkdGg9Njc1JmhlaWdodD00OTMmc3RvcmU9dGhlaGFtbW9ja19jb21fc2UmaW1hZ2UtdHlwZT1pbWFnZQ.jpg",
    Price: 1699,
    Shopid: shopId,
},
{
    action: 'add-product',
    name: 'Familjebrädspel trä',
    Description: 'Roligt för hela familjen! Molky är ett träspel som kombinerar skicklighet och strategi. Perfekt för trädgårdslekar och sommarkvällar',
    Picture: "https://images.fyndiq.se/images/f_auto/t_600x600/prod/2c05bcd874d740eb/b98fc0fdd9d4/1-set-familjebradspel-tra-memory-game-1",
    Price: 199,
    Shopid: shopId,
},
{
    action: 'add-product',
    name: 'Picknickfilt med Vattentät Baksida',
    Description: 'Skapa underbara picknickminnen med vår bekväma filt. Den vattentäta baksidan håller er torra och glada under sommarens utomhusaktiviteter',
    Picture: "https://m.media-amazon.com/images/I/51T2hSaHceL._SL500_.jpg",
    Price: 649,
    Shopid: shopId,
}
]

export default data;