function cards() {
    //Menu

    class Menu {
        constructor(name, description, prise, img, alt, parentSelector, ...classes) {
            this.name = name;
            this.description = description;
            this.prise = prise;
            this.img = img;
            this.alt = alt;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.prise = +this.prise * this.transfer;
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
            this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.name}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }

    }
new Menu('Меню "Бомжара"',
 'В Меню "Бомжара" так как вы являетесь бомжом вы получите пособие по безработице и место у одного из магазинов в городе',
  9,
   'img/slider/olive-oil.jpg',
    'CheapAss',
     '.menu .container',
     'menu__item',
     'big'
    ).render();
    new Menu('Меню "Бомжара"',
 'В Меню "Бомжара" так как вы являетесь бомжом вы получите пособие по безработице и место у одного из магазинов в городе',
  9,
   'img/slider/olive-oil.jpg',
    'CheapAss',
     '.menu .container',
     'menu__item',
     'big'
    ).render();
    new Menu('Меню "Бомжара"',
 'В Меню "Бомжара" так как вы являетесь бомжом вы получите пособие по безработице и место у одного из магазинов в городе',
  9,
   'img/slider/olive-oil.jpg',
    'CheapAss',
     '.menu .container',
     'menu__item',
     'big'
    ).render();
}
export default cards;