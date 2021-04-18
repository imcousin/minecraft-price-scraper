const fetch = require('node-fetch')
const cheerio = require('cheerio')

const url = 'https://www.minecraft.net/en-us/store/minecraft-java-edition';

const getMinecraftJavaPrice = async url => {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const $ = cheerio.load(data);
    const price = Number($('.pricebas1').text().replace(/[^\d.-]/g, ''));
    const minecraft = {
        price,
        date: (new Date()).toString()
    }
    if (minecraft.price < 35) {
      console.log(`Lower price than normal. Minecraft Price is ${JSON.stringify(minecraft)}.`)
    } else {
      console.log(`No discount. Minecraft Price is ${JSON.stringify(minecraft)}.`)
    }
  } catch (error) {
    console.log(error);
  }
};

getMinecraftJavaPrice(url);
