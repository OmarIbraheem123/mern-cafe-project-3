require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Azerbaijan & Turkish Pastries', sortOrder: 10},
    {name: 'Cake / Custom Cakes', sortOrder: 20},
  
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Traditional Azerbaijan Baklava (Filled with Walnuts)', image: '/img/azerbaijanBaklava.png', category: categories[0], price: 3.50},
    {name: 'Shekerbura (Filled with Almonds)', image: '/img/Shekerbura.png', category: categories[0], price: 3.80},
    {name: 'Skeker Chorek (Crumble Cookie)', image: '/img/SkekerChorek.png', category: categories[0], price: 3.00},
    {name: 'Trubochki (Cream Horn) ', image: '/img/Tulpan.JPG', category: categories[0], price: 3.50},
    {name: 'Banani (Filled with cottage Cheese/Nuts) ', image: '/img/Banani.png', category: categories[0], price: 3.50},
    {name: 'Cream Puffs (Filled with Homemade Whipped Cream) ', image: '/img/CreamPuff.png', category: categories[0], price: 3.00},
    {name: 'Kyata / Gata (Filled with Walnuts) ', image: '/img/KyataGata.png', category: categories[0], price: 3.80},
    {name: 'Kyata / Gata (Filled with Vanilla) ', image: '/img/KyataGata.png', category: categories[0], price: 3.50},
    {name: 'Iravan Katasi  ', image: '/img/Iravan.JPG', category: categories[0], price: 3.00},
    {name: 'Mutaki (Walnut and Cardamon Biscuits) ', image: '/img/Mutaki.JPG', category: categories[0], price: 3.50},
    {name: 'Chudu (Shemakha kutabs) (Crispy Puff Stuffed with Halal Beef)', image: '/img/Chudu.png', category: categories[0], price: 3.50},
    {name: 'Qutab (Flatbread) (Stuffed with Halal Meat or Vegetable) ', image: '/img/Qutab.jpg', category: categories[0], price: 4.00},
    {name: 'Turkish Pogaca (Stuffed with Halal Meat, Feta Cheese, Potatoes, or Olives (per Customer Request))  ', image: '/img/TurkishPogaca.png', category: categories[0], price: 2.50},
    {name: 'Borek (Stuffed with Halal Meat, Cheese, Potatoes, or leafy greens (per Customer Request)) ', image: '/img/Borek.png', category: categories[0], price: 2.50},
    {name: 'Pita | Bread ', image: '/img/Pita-Bread.png', category: categories[0], price: 7.00},
    {name: 'Simit ', image: '/img/Simit.png', category: categories[0], price: 2.50},
    {name: 'Turkish Baklava  ', image: '/img/TurkishBaklava.JPG', category: categories[0], price: 3.00},
    {name: 'Gogal (Salty (shor) or Sweet (shirin))  ', image: '/img/Gogal.png', category: categories[0], price: 3.50},
    {name: 'Tulpan Ici Atli (Filled with Halal Beef)  ', image: '/img/Tulpan.JPG', category: categories[0], price: 4.00},


    {name: 'Medovik Cake (Honey Cake)', image: '/img/MedovikCake.jpg', category: categories[1], price: 25.00},
    {name: 'Puff Cake (Filled with Cream )', image: '/img/PuffCake.jpg', category: categories[1], price: 2.50},
    {name: 'Puff Cake', image: '/img/PuffCake.jpg', category: categories[1], price: 2.50},
    {name: 'Roll Cake (Filled with Cream, Fruit, Nuts (per Customer Request))', image: '/img/RollCake.jpg', category: categories[1], price: 35.00},
    {name: 'Trilece (Milk Cake)  ', image: '/img/Trilece.jpg', category: categories[1], price: 50.00},
    {name: 'Key Lime Pie (Whole)  ', image: '/img/KeyLimePie.png', category: categories[1], price: 23.00},
    {name: 'Apple Pie (Whole)  ', image: '/img/ApplePie.jpg', category: categories[1], price: 23.00},
    {name: 'Tvoroqlu Ve bizeli piroq (Cottage Cheese & Pea Pie)', image: '/img/TvoroqluVeBizeliPiroq.jpg', category: categories[1], price: 23.00},
    {name: 'Qozlu Piroq (Walnut Pie) ', image: '/img/QozluPiroq.JPG', category: categories[1], price: 20.00},
  ]);

  console.log(items)

  process.exit();

})();