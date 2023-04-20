import combo from "../../assets/menuItems/combo.PNG";
import mushroom from "../../assets/menuItems/mushroom.PNG";
import italian from "../../assets/menuItems/italian.PNG";
import double from "../../assets/menuItems/double.PNG";
import vip from "../../assets/menuItems/vip.PNG";
import prime from "../../assets/menuItems/prime.PNG";
import roll from "../../assets/menuItems/roll.PNG";
import chickens from "../../assets/menuItems/chickens.PNG";
import original from "../../assets/menuItems/original.PNG";
import salad from "../../assets/menuItems/salad.PNG";
import fun from "../../assets/menuItems/fun.PNG";
import donut from "../../assets/menuItems/donut.PNG";
import water from "../../assets/menuItems/water.PNG";
import sauce from "../../assets/menuItems/sauce.PNG";

const menu = [
  {
    id: (Math.random() * 10).toFixed(5),
    category: "КОМБО",
    name: "КОМБО RED BULL",
    price: 3500,
    description:
      "КОМБО RED BULL - ЭТО ЛЮБОЙ БУРГЕР ИЗ ЛИНЕЙКИ ORIGINAL  НА ВЫБОР, ПОРЦИЯ СТАНДАРТНОГО КАРТОФЕЛЯ ФРИ ИЛИ КУРИНЫХ СТРИПСОВ 2 ШТ. НА ВЫБОР И ЭНЕРГЕТИЧЕСКИЙ НАПИТОК RED BULL.",
    img: combo,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "DOUBLE БУРГЕРЫ",
    name: "ИТАЛЬЯНСКИЙ DOUBLE",
    price: 3100,
    description: "",
    img: italian,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "DOUBLE БУРГЕРЫ",
    name: "ГРИБНОЙ DOUBLE",
    price: 3100,
    description: "",
    img: mushroom,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "DOUBLE БУРГЕРЫ",
    name: "САМЫЙ ВКУСНЫЙ DOUBLE",
    price: 3100,
    description: "",
    img: double,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "PRIME БУРГЕРЫ",
    name: "VIP 13",
    price: 4990,
    description:
      "ФИРМЕННАЯ ЧЕРНАЯ БУЛОЧКА, СОУС ГАВАЙЯ, ФИРМЕННЫЙ СОУС С ТРЮФЕЛЬНЫМ МАСЛОМ, СОУС РЕЛИШ, VIP СОУС (ФУАГРА С ФЕТОЙ), СМОРОДИНОВЫЙ ДЖЕМ, СЫР ЧЕДДЕР, ДОЛЬКИ КАРАМЕЛИЗИРОВАННОЙ ГРУШИ, СОЧНЫЕ КОТЛЕТЫ ИЗ МРАМОРНОЙ ГОВЯДИНЫ, ГРИБЫ, ЖАРЕННЫЕ С ЛУКОМ В СОУСЕ ДЕМИГЛАС, КОЛЬЦА КРАСНОГО ЛУКА, ДОЛЬКИ ПОМИДОРА.",
    img: vip,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "PRIME БУРГЕРЫ",
    name: "ГРИБНОЙ PRIME",
    price: 2800,
    description:
      "КОТЛЕТА ИЗ НАТУРАЛЬНОЙ ГОВЯДИНЫ В СОЧЕТАНИИ СО СВЕЖИМИ ОВОЩАМИ, МАРИНОВАННЫМИ ОГУРЦАМИ, СЫР МОЦАРЕЛЛА И ГРИБЫ В СОУСЕ ДЕМИГЛАС НА ФИРМЕННОЙ ЧЕРНОЙ БУЛОЧКЕ, ЗАПРАВЛЕННОЙ СОУСОМ 1000 ОСТРОВОВ.",
    img: prime,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "РОЛЛЫ",
    name: "АЗИАТСКИЙ РОЛЛ",
    price: 1900,
    description: "",
    img: roll,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "ЗАКУСКИ",
    name: "КУРИНЫЕ КРЫЛЬЯ 3 ШТ.",
    price: 1200,
    description: "СОЧНЫЕ КУРИНЫЕ КРЫЛЬЯ В ПАНИРОВКЕ.",
    img: chickens,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "ORIGINAL БУРГЕРЫ",
    name: "СОБЕРИ СВОЙ СОБСТВЕННЫЙ «ВЕГА-БУРГЕР»",
    price: 2000,
    description:
      "ДОМАШНЯЯ БУЛОЧКА, ЗАПРАВЛЕННАЯ СОУСАМИ ГАВАЙСКИЙ И БАБАГАНУШ С НАЧИНКОЙ НА ВЫБОР: СЫРНЫЕ ШАРИКИ/КОТЛЕТА ИЗ ФАЛАФЕЛЯ/ХЭШБРАУН, САЛАТ АЙСБЕРГ.",
    img: original,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "САЛАТЫ",
    name: "ЦЕЗАРЬ С КУРИЦЕЙ",
    price: 1400,
    description:
      "ГРЕНКИ, КУСОЧКИ СОЧНОЙ КУРИНОЙ ГРУДКИ, САЛАТ АЙСБЕРГ, ЛОМТИКИ ПОМИДОРА С ДОБАВЛЕНИЕМ СЫРА ПАРМЕЗАН, ЗАПРАВЛЕННЫЕ СПЕЦИАЛЬНЫМ СОУСОМ ЦЕЗАРЬ.",
    img: salad,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "FUN BOX",
    name: "FUN BOX",
    price: 2100,
    description: `ГАМБУРГЕР ИЛИ ЧИЗБУРГЕР СТАНДАРТ
    СТРИПСЫ 2 ШТ.
    НАПИТОК PIKO 0.2`,
    img: fun,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "ДЕСЕРТЫ",
    name: "ДОНАТ ШОКОЛАДНЫЙ",
    price: 800,
    description:
      "НЕЖНЫЙ ДОНАТ С НАЧИНКОЙ ИЗ ШОКОЛАДНОГО КРЕМА, ПОКРЫТЫЙ ШОКОЛАДНОЙ ГЛАЗУРЬЮ И ШОКОЛАДНОЙ СТРУЖКОЙ.",
    img: donut,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "НАПИТКИ",
    name: "МИНЕРАЛЬНАЯ ВОДА С/Г, Б/Г",
    price: 300,
    description: "",
    img: water,
    amount: 1,
  },
  {
    id: (Math.random() * 10).toFixed(5),
    category: "СОУСЫ",
    name: "СОУС СЫРНЫЙ",
    price: 200,
    description: "",
    img: sauce,
    amount: 1,
  },
];

export default menu;
