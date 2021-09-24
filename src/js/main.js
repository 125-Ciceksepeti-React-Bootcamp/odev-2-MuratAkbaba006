// import class
const Duck = require('./class/Duck');
const Dog = require('./class/Dog');
const Cat = require('./class/Cat');

// rastgele bir index değeri oluşturulup, farklı fotoğraflar döndüren bir metot oluşturuldu.
const randomImage = () => {
  const randomIndex = Math.floor(Math.random() * 200);
  return `https://picsum.photos/id/${randomIndex}/200/200`;
};
let image;
const getCatImage = async (data) => {
  console.log(data);
  image = await data;
};
const fetchRandomCatImage = async () => {
  await fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => getCatImage(data[0].url));
};
fetchRandomCatImage();
// ilk parametresi isim, ikinci parametresi resim, üçüncü parametresi ayak sayısı,
// dördüncü parametresi yaş
const duck = new Duck('Duck1', randomImage(), 2, 3);
// duck içerisinde bulunan createCard metodu çağrılarak kart oluşması sağlandı
duck.createCard();
const duck1 = new Duck('Duck2', randomImage(), 2, 4);
duck1.createCard();
const dog = new Dog('Dog1', randomImage(), 4, 3);
dog.createCard();
const duck2 = new Duck('Duck3', randomImage(), 2, 5);
duck2.createCard();
const dog1 = new Dog('Dog2', randomImage(), 4, 2);
dog1.createCard();
setTimeout(() => {
  const cat = new Cat('Cat1', image, 4, 2);
  cat.createCard();
}, 500);
