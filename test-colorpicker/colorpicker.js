// получаем список цветов (массив объектов)
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#9c27b0", rgb: "156,39,176" },
  { hex: "#673ab7", rgb: "103,58,183" },
  { hex: "#3f51b5", rgb: "63,81,181" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#00bcd4", rgb: "0,188,212" },
  { hex: "#009688", rgb: "0,150,136" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
  { hex: "#ff9800", rgb: "255,152,0" },
  { hex: "#795548", rgb: "121,85,72" },
  { hex: "#607d8b", rgb: "96,125,139" },
];

//получаем доступ к основному блоку, куда будем размещать цвета
const paletteContainer = document.querySelector(".js-palette");
//переменная для хранения HTML разметки новых созданных блоков
const cardsMarkup = createColorCardsMarkup(colors);

// вставляем HTML разметку перед окончанием основного блока
paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

//добавляем слушателя события "клик" на каждый конкретный блок
//принимаем параметр - функцию
paletteContainer.addEventListener("click", onPaletteContainerClick);

//переносим из HTML код для блоков сюда,
//т.к будем перебирать коллекцию и создавать новые элементы на основании этой разметки
function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      //деструктуризируем hex, rgb
      return `
  
    <div class="color-card"> 
     <div><div><div> <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `;
    })
    .join("");
}

//основная функция, прнимающая другие функции
//
function onPaletteContainerClick(evt) {
  //выбранный блок содержит класс color-swatch?
  const isColorSwatchEl = evt.target.classList.contains("color-swatch");

  //если нет (!true) - ничего не происходит
  if (!isColorSwatchEl) {
    return;
  }

  //если всё ОК - тогда:
  //переменная для хранения текущего элемента
  const swatchEl = evt.target;
  //переменная для хранения ближайшего родительского элемента с color-card
  const parentColorCard = swatchEl.closest(".color-card");

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

// устанавливаем цвет фона в зависимости от принятого цвета в параметре
function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

//функция, которая удаляет класс is-active с текущего блока
function removeActiveCardClass() {
  const currentActiveCard = document.querySelector(".color-card.is-active");

  if (currentActiveCard) {
    currentActiveCard.classList.remove("is-active");
  }
}

//добавляем к текещему новому блоку с классом color-card - доп.класс is-active
function addActiveCardClass(card) {
  card.classList.add("is-active");
}
