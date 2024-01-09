const DATA = {
  result: {
    menuData: {
      title: 'Меню',
      filters: [
        {
          id: 1,
          code: 'rolly',
          name: 'Роллы'
        },
        {
          id: 2,
          code: 'sushi-i-gunkany',
          name: 'Cуши и гунканы'
        },
        {
          id: 3,
          code: 'sety',
          name: 'Cеты'
        },
        {
          id: 4,
          code: 'lapsha-i-ris',
          name: 'Лапша и рис'
        },
        {
          id: 5,
          code: 'salaty',
          name: 'Салаты'
        },
        {
          id: 6,
          code: 'goryachie-blyuda',
          name: 'Горячие блюда'
        },
      ],
      cards: [
        {
          id: 1,
          title: 'Ролл ясай',
          image: '/menu/rollyasaj.png',
          code: 'rolly',
          weight: 185,
          description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
          price: 200
        },
        {
          id: 2,
          title: 'Мясные роллы',
          image: '/menu/myasnyerolly.png',
          code: 'sushi-i-gunkany',
          weight: 260,
          description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
          price: 240
        },
        {
          id: 3,
          title: 'Ролл лайт',
          image: '/menu/rolllajt.png',
          code: 'rolly',
          weight: 190,
          description: 'Листья салата, огурец, перец, помидор, сырный соус, чипсы',
          price: 165
        },
        {
          id: 4,
          title: 'ролл веган',
          image: '/menu/rollvegan.png',
          code: 'sushi-i-gunkany',
          weight: 230,
          description: 'Листья салата, авокадо, огурец, спаржа, сивид чука, кунжут',
          price: 200
        },
        {
          id: 5,
          title: 'ролл чиро',
          image: '/menu/rollchiro.png',
          code: 'rolly',
          weight: 210,
          description: 'Листья салата, копченая курица, болгарский перец, твердый сыр, чесночный соус',
          price: 210
        },
        {
          id: 6,
          title: 'ролл тайол',
          image: '/menu/rolltajol.png',
          code: 'sushi-i-gunkany',
          weight: 215,
          description: 'Огурец, помидор, сыр творожный, бекон, сыр маасдам',
          price: 215
        }, 
        {
          id: 7,
          title: 'ролл Батакон',
          image: '/menu/rollbatakon.png',
          code: 'rolly',
          weight: 220,
          description: 'Огурец, сыр творожный, бекон',
          price: 230
        },
        {
          id: 8,
          title: 'ролл калипсо',
          image: '/menu/rollkalipso.png',
          code: 'sushi-i-gunkany',
          weight: 195,
          description: 'Сыр творожный, огурец, мидии, стружка тунца',
          price: 185
        },
        {
          id: 9,
          title: 'ролл кавьяр',
          image: '/menu/rollkavyar.png',
          code: 'rolly',
          weight: 240,
          description: 'Сыр творожный, помидор, огурец, мидии, майонез',
          price: 200
        },
        {
          id: 10,
          title: 'ролл чипу',
          image: '/menu/rollchipu.png',
          code: 'sushi-i-gunkany',
          weight: 190,
          description: 'Сыр творожный, лосось, томаго, стружка тунца',
          price: 180
        },
        {
          id: 11,
          title: 'ролл катана',
          image: '/menu/rollkatana.png',
          code: 'rolly',
          weight: 240,
          description: 'Сыр творожный, краб, огурец, черный кунжут, лососевый тар-тар, спайси соус',
          price: 250
        },
        {
          id: 12,
          title: 'ролл мишику',
          image: '/menu/rollmishiku.png',
          code: 'sushi-i-gunkany',
          weight: 210,
          description: 'Угорь, краб, огурец, масаго, сыр творожный,  сырный соус, картофельные чипсы',
          price: 260
        },
        {
          id: 13,
          title: 'Ролл ясай',
          image: '/menu/rollyasaj.png',
          code: 'rolly',
          weight: 185,
          description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
          price: 200
        },
        {
          id: 14,
          title: 'Мясные роллы',
          image: '/menu/myasnyerolly.png',
          code: 'rolly',
          weight: 260,
          description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
          price: 240
        },
        {
          id: 15,
          title: 'Ролл лайт',
          image: '/menu/rolllajt.png',
          code: 'rolly',
          weight: 190,
          description: 'Листья салата, огурец, перец, помидор, сырный соус, чипсы',
          price: 165
        },
        {
          id: 16,
          title: 'ролл веган',
          image: '/menu/rollvegan.png',
          code: 'rolly',
          weight: 230,
          description: 'Листья салата, авокадо, огурец, спаржа, сивид чука, кунжут',
          price: 200
        },
        {
          id: 17,
          title: 'сет максимум',
          image: '/menu/set-sushi.jpg',
          code: 'sety',
          weight: 700,
          description: 'ролл веган, Ролл лайт, Мясные роллы, Ролл ясай',
          price: 1400
        },
        {
          id: 18,
          title: 'Рис/лапша',
          image: '/menu/lapsha-i-ris.jpg',
          code: 'lapsha-i-ris',
          weight: 230,
          description: 'Лапша, рис, соя',
          price: 400
        },
        {
          id: 19,
          title: 'Запеченные роллы',
          image: '/menu/myasnyerolly.png',
          code: 'goryachie-blyuda',
          weight: 340,
          description: 'мясо, сыр, рис',
          price: 530
        },
        {
          id: 20,
          title: 'Салат',
          image: '/menu/salat.jpg',
          code: 'salaty',
          weight: 100,
          description: 'Салат, помидор, сухарики, масло',
          price: 200
        },
      ]
    }
  },
};

module.exports = [
  {
    id: "main-get-info", // id of the route
    url: "/main/getInfo",
    method: "GET",
    variants: [
      {
        id: "success",
        response: {
          status: 200,
          body: DATA,
        },
      },
      {
        id: "error",
        response: {
          status: 400,
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
];