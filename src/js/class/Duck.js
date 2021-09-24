const Animal = require('./Animal');

// Animal sınıfından kalıtım alan Duck sınıfı
module.exports = class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }

  // card yapısını oluşturacak olan createCard metodu, grid içerisine
  // name, image, numberOfLegs ve age bilgileri ile bir kart oluşturur.
  createCard = () => {
    const grid = document.getElementById('grid');
    grid.innerHTML += `<div class="grid-item">
                        <div class="grid-image-area">
                            <img src="${this.image}"/>
                        </div>
                        <div class="grid-content-area">
                            <div class="info-area">
                                <div class="label">Name:</div>
                                <div class="info">${this.name}</div>
                            </div>
                            <div class="info-area">
                                <div class="label">NumberofLegs:</div>
                                <div class="info">${this.numberOfLegs}</div>
                            </div>
                            <div class="info-area">
                                <div class="label">Age:</div>
                                <div class="info">${this.age}</div>
                            </div>
                        </div>
                    </div>`;
  }
};
