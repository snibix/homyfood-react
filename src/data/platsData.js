import firstImg from "../assets/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import fourImg from "../assets/images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg";
import secondImg from "../assets/images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg";
import thirdImg from "../assets/images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg";

const platsData = [
  {
    id: 1,
    title: "La palette du goût",
    image: firstImg,
    categories: [
      {
        title: "Entrées",
        items: [
          {
            name: "Fricassée d'escargots",
            description: "Au piments d'Espelette",
            price: "25€",
          },
          {
            name: "Foie gras de canard mi-cuit",
            description: "Et ses copeaux de truffe noire",
            price: "35€",
          },
          {
            name: "Œuf au plat",
            description: "Assaisonné à la truffe sur lit de caviar",
            price: "20€",
          },
        ],
      },
      {
        title: "Plats",
        items: [
          {
            name: "Filet de bœuf aux herbes",
            description: "Accompagné de sa ribambelle de légumes",
            price: "40€",
          },
          {
            name: "Parmentier de queue de bœuf",
            description: "À la truffe noire sur sa purée de panais",
            price: "35€",
          },
          {
            name: "Filet de turbot",
            description: "Aux agrumes",
            price: "44€",
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Paris-Brest",
            description: "Revisité",
            price: "18€",
          },
          {
            name: "Macaron au chocolat d'exception",
            description: "Et glace à la vanille de Madagascar",
            price: "22€",
          },
          {
            name: "Mousse au chocolat",
            description: "Au piment d'Espelette et à la truffe noire",
            price: "23€",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "La note enchantée",
    image: secondImg,
    categories: [
      {
        title: "Entrées",
        items: [
          {
            name: "Ravioles de foie gras",
            description: "Accompagnées de leur crème à la truffe",
            price: "25€",
          },
          {
            name: "Caviar osciètre",
            description: "Sur blini à la farine de blé noir",
            price: "35€",
          },
          {
            name: "Homard et espuma de potiron",
            description: "Marinés aux zestes d'orange",
            price: "20€",
          },
          {
            name: "Foie gras de canard cuit entier",
            description: "Confiture de figue et pain toasté",
            price: "35€",
          },
        ],
      },
      {
        title: "Plats",
        items: [
          {
            name: "Noix de coquilles Saint-Jacques",
            description: "Sur lit de purée de céleri-rave",
            price: "40€",
          },
          {
            name: "Langoustine poêlée",
            description: "Purée de patate douce",
            price: "35€",
          },
          {
            name: "Mijoté de queue de bœuf",
            description: "Et riz sauvage aux zestes de citron",
            price: "45€",
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Macaron noisette et chocolat",
            description: "Glace au caramel brun et sel de Guérande",
            price: "18€",
          },
          {
            name: "Baba au rhum revisité",
            description: "Avec son coulis de citron",
            price: "22€",
          },
          {
            name: "Tarte au citron meringuée",
            description: "Déstructurée",
            price: "23€",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "À la française",
    image: thirdImg,
    categories: [
      {
        title: "Entrées",
        items: [
          {
            name: "Tartare de poulpe acidulé",
            description: "Aux zestes d'orange",
            price: "25€",
          },
          {
            name: "Velouté de légumes d'antan",
            description: "Carotte, panais, topinambour",
            price: "35€",
          },
          {
            name: "Soupe à l'oignon",
            description: "Revisitée",
            price: "20€",
          },
        ],
      },
      {
        title: "Plats",
        items: [
          {
            name: "Coquilles Saint-Jacques",
            description: "Accompagnées d'une purée de panais",
            price: "40€",
          },
          {
            name: "Magret de canard",
            description: "Et parmentier de pommes de terre",
            price: "35€",
          },
          {
            name: "Pigeonneau d’Ille-et-Vilaine",
            description: "Sur son lit de gnocchis aux légumes",
            price: "44€",
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Pétales de violettes glacés",
            description: "Et purée de noisettes",
            price: "18€",
          },
          {
            name: "Fondant au chocolat",
            description: "Revisité",
            price: "22€",
          },
          {
            name: "Millefeuille croustillant",
            description: "Myrtilles et pâte d’amande",
            price: "23€",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Le délice des sens",
    cat: {
      Entrées: [
        {
          name: "Tartare de thon",
          description: "Assaisonné au yuzu",
          price: "25€",
        },
        {
          name: "Bouchée de homard croustillant",
          description: "Et sa farandole de petits légumes",
          price: "35€",
        },
        {
          name: "Poulet rôti aux herbes de Provence",
          description: "Et sa crème de truffe",
          price: "40€",
        },
      ],
    },
    image: fourImg,
    categories: [
      {
        title: "Entrées",
        items: [
          {
            name: "Tartare de thon",
            description: "Assaisonné au yuzu",
            price: "25€",
          },
          {
            name: "Bouchée de homard croustillant",
            description: "Et sa farandole de petits légumes",
            price: "35€",
          },
          {
            name: "Poulet rôti aux herbes de Provence",
            description: "Et sa crème de truffe",
            price: "40€",
          },
        ],
      },
      {
        title: "Plats",
        items: [
          {
            name: "Poulet rôti aux herbes de Provence",
            description: "Et sa crème de truffe",
            price: "40€",
          },
          {
            name: "Langouste rôtie",
            description: "Et ses légumes de saison",
            price: "35€",
          },
          {
            name: "Côte de bœuf Angus",
            description: "Et sa purée de panais",
            price: "44€",
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Farandole de desserts",
            description: "Du chef",
            price: "18€",
          },
          {
            name: "Crème brulée",
            description: "Revisitée",
            price: "22€",
          },
          {
            name: "Tiramisu",
            description: "À la noisette",
            price: "23€",
          },
        ],
      },
    ],
  },
];

export default platsData;
