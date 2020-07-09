'use-strict';
const { dialogflow, BasicCard, Image } = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({ debug: true });

const productsGoreng = [
  {
    name: "Indomie Goreng",
    type: "Goreng",
    imageUrl: "http://www.indomie.com/uploads/product/indomie-mi-goreng-special_thumb_094906798.png",
    description: "Produk terpopuler dari brand Indomie, Indomie Goreng pertama diluncurkan pada tahun 1982 dan telah merambah banyak negara termasuk Amerika Serikat, Australia, Inggris, Timur Tengah dan China. Jangan lewatkan berbagai pilihan rasa yang ditawarkan, Indomie Goreng memang yang paling komplit!"
  },
  {
    name: "indomie Goreng Cabe Ijo",
    type: "Goreng",
    imageUrl: "http://www.indomie.com/uploads/product/indomie-mi-goreng-cabe-ijo-flavour_thumb_145129182.png",
    description: "Produk terpopuler dari brand Indomie, Indomie Goreng pertama diluncurkan pada tahun 1982 dan telah merambah banyak negara termasuk Amerika Serikat, Australia, Inggris, Timur Tengah dan China. Jangan lewatkan berbagai pilihan rasa yang ditawarkan, Indomie Goreng memang yang paling komplit!"
  },
  {
    name: "Indomie Goreng Rendang",
    type: "Goreng",
    imageUrl: "http://www.indomie.com/uploads/product/indomie-mi-goreng-rendang-flavour_thumb_170333176.png",
    description: "Produk terpopuler dari brand Indomie, Indomie Goreng pertama diluncurkan pada tahun 1982 dan telah merambah banyak negara termasuk Amerika Serikat, Australia, Inggris, Timur Tengah dan China. Jangan lewatkan berbagai pilihan rasa yang ditawarkan, Indomie Goreng memang yang paling komplit!"
  },
  {
    name: "Indomie Goreng Ayam Geprek",
    type: "Goreng",
    imageUrl: "http://www.indomie.co.id/Content/Product/Category/hypeabis.jpg",
    description: "Produk terpopuler dari brand Indomie, Indomie Goreng pertama diluncurkan pada tahun 1982 dan telah merambah banyak negara termasuk Amerika Serikat, Australia, Inggris, Timur Tengah dan China. Jangan lewatkan berbagai pilihan rasa yang ditawarkan, Indomie Goreng memang yang paling komplit!"
  },
  {
    name: "Indomie Goreng Sambal Matah",
    type: "Goreng",
    imageUrl: "http://www.indomie.co.id/Content/Product/indomie-goreng-sambal-matah_big.png",
    description: "Produk terpopuler dari brand Indomie, Indomie Goreng pertama diluncurkan pada tahun 1982 dan telah merambah banyak negara termasuk Amerika Serikat, Australia, Inggris, Timur Tengah dan China. Jangan lewatkan berbagai pilihan rasa yang ditawarkan, Indomie Goreng memang yang paling komplit!"
  }
];

const productsKuah = [
  {
    name: "Indomie Soto",
    type: "Kuah",
    imageUrl: "http://www.indomie.co.id/Content/Product/indomie-rasa-soto-mie_big.png",
    description: "Indomie kuah merupakan salah satu varian yang rasanya khusus diambil dari bumbu-bumbu makanan khas Indonesia. Perpaduan antara mi, kuah dan bumbu otentik makanan khas Indonesia menjadikan Indomie kuah makanan yang sangat spesial apalagi bila disajikan dikala cuaca dingin atau hujan."
  },
  {
    name: "indomie Goreng Cabe Ijo",
    type: "Kuah",
    imageUrl: "http://www.indomie.com/uploads/product/indomie-chicken-flavor_thumb_172734259.png",    
    description: "Indomie kuah merupakan salah satu varian yang rasanya khusus diambil dari bumbu-bumbu makanan khas Indonesia. Perpaduan antara mi, kuah dan bumbu otentik makanan khas Indonesia menjadikan Indomie kuah makanan yang sangat spesial apalagi bila disajikan dikala cuaca dingin atau hujan."
  },
  {
    name: "Indomie Kari Ayam",
    type: "Kuah",
    imageUrl: "http://www.indomie.co.id/Content/Product/indomie-rasa-kari-ayam-dengan-bawang-goreng_big.png",
    description: "Indomie kuah merupakan salah satu varian yang rasanya khusus diambil dari bumbu-bumbu makanan khas Indonesia. Perpaduan antara mi, kuah dan bumbu otentik makanan khas Indonesia menjadikan Indomie kuah makanan yang sangat spesial apalagi bila disajikan dikala cuaca dingin atau hujan."
  },
  {
    name: "Indomie Kaldu Udang",
    type: "Kuah",
    imageUrl: "http://www.indomie.co.id/Content/Product/indomie-rasa-kaldu-udang_big.png",
    description: "Indomie kuah merupakan salah satu varian yang rasanya khusus diambil dari bumbu-bumbu makanan khas Indonesia. Perpaduan antara mi, kuah dan bumbu otentik makanan khas Indonesia menjadikan Indomie kuah makanan yang sangat spesial apalagi bila disajikan dikala cuaca dingin atau hujan."
  },
  {
    name: "Indomie Ayam Spesial",
    type: "Kuah",
    imageUrl: "http://www.indomie.co.id/Content/Product/indomie-rasa-ayam-spesial_big.png",
    description: "Indomie kuah merupakan salah satu varian yang rasanya khusus diambil dari bumbu-bumbu makanan khas Indonesia. Perpaduan antara mi, kuah dan bumbu otentik makanan khas Indonesia menjadikan Indomie kuah makanan yang sangat spesial apalagi bila disajikan dikala cuaca dingin atau hujan."
  }
];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.intent('Goreng', (conv) => {
  const random = randomInteger(0, 5);
  const product = productsGoreng[random];
  conv.ask(`Indomie Keberuntungan Kamu hari ini adalah ${product.name}`);
  conv.ask(new BasicCard({
    text: product.description,
    title: product.name,
    subtitle: product.type,
    image: new Image({
      url: product.imageUrl,
      alt: product.name
    })
  })); 
  conv.close();
});

app.intent('Kuah', (conv) => {
  const random = randomInteger(0, 5);
  const product = productsKuah[random];
  conv.ask(`Indomie Keberuntungan Kamu hari ini adalah ${product.name}`);
  conv.ask(new BasicCard({
    text: product.description,
    title: product.name,
    subtitle: product.type,
    image: new Image({
      url: product.imageUrl,
      alt: product.name
    })
  }));
  conv.close();
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);