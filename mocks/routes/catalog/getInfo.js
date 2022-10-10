const DATA = {
  result: {
    catalogProducts: {
      title: "результаты поиска:",
      subtitle: "Выбранные теги:",
      tags: [
        { id: 1, title: "Игрушки оптом и в розницу" },
        { id: 2, title: "Оптовый магазин игрушек" },
        { id: 3, title: "Игрушки" },
        { id: 4, title: "Оптовый магазин игрушек" },
        { id: 5, title: "Игрушки" },
        { id: 6, title: "Оптовый магазин игрушек" },
        { id: 7, title: "от 6 лет" },
      ],
      cards: [
        {
          id: 1,
          title: "Наименование игрушки 1",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          image:
            "https://avatars.mds.yandex.net/i?id=bd3ae9e43639b26b45365d5954f54ac9-5233066-images-thumbs&n=13&exp=1",
        },
        {
          id: 2,
          title: "Наименование игрушки 2",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          image: "https://dengodel.com/wp-content/uploads/2019/07/1-60.jpg",
        },
        {
          id: 3,
          title: "Наименование игрушки 3",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          image:
            "https://rognowsky.ru/wp-content/uploads/2020/01/1099254284-_d0_9a_d0_b0_d0_ba_20_d0_bf_d1_80_d0_b0_d0_b2_d0_b8_d0_bb_d0_be_2c_20_d1_82_d0_be_20_d1_87_d1_82_d0_be_20_d0_bf_d1_80_d0_be_d0_b8_d0_b7_d0_b2_d0_be_d0_b4_d0_b8_d1_82_d1_8c_d1_81_-scaled.jpg",
        },
        {
          id: 4,
          title: "Наименование игрушки 4",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          image:
            "https://rognowsky.ru/wp-content/uploads/2020/01/1099254284-_d0_9a_d0_b0_d0_ba_20_d0_bf_d1_80_d0_b0_d0_b2_d0_b8_d0_bb_d0_be_2c_20_d1_82_d0_be_20_d1_87_d1_82_d0_be_20_d0_bf_d1_80_d0_be_d0_b8_d0_b7_d0_b2_d0_be_d0_b4_d0_b8_d1_82_d1_8c_d1_81_-scaled.jpg",
        },
        {
          id: 5,
          title: "Наименование игрушки 5",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          image:
            "https://rognowsky.ru/wp-content/uploads/2020/01/1099254284-_d0_9a_d0_b0_d0_ba_20_d0_bf_d1_80_d0_b0_d0_b2_d0_b8_d0_bb_d0_be_2c_20_d1_82_d0_be_20_d1_87_d1_82_d0_be_20_d0_bf_d1_80_d0_be_d0_b8_d0_b7_d0_b2_d0_be_d0_b4_d0_b8_d1_82_d1_8c_d1_81_-scaled.jpg",
        },
        {
          id: 6,
          title: "Наименование игрушки 6",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          image:
            "https://rognowsky.ru/wp-content/uploads/2020/01/1099254284-_d0_9a_d0_b0_d0_ba_20_d0_bf_d1_80_d0_b0_d0_b2_d0_b8_d0_bb_d0_be_2c_20_d1_82_d0_be_20_d1_87_d1_82_d0_be_20_d0_bf_d1_80_d0_be_d0_b8_d0_b7_d0_b2_d0_be_d0_b4_d0_b8_d1_82_d1_8c_d1_81_-scaled.jpg",
        },
        {
          id: 7,
          title: "Наименование игрушки 7",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          image:
            "https://rognowsky.ru/wp-content/uploads/2020/01/1099254284-_d0_9a_d0_b0_d0_ba_20_d0_bf_d1_80_d0_b0_d0_b2_d0_b8_d0_bb_d0_be_2c_20_d1_82_d0_be_20_d1_87_d1_82_d0_be_20_d0_bf_d1_80_d0_be_d0_b8_d0_b7_d0_b2_d0_be_d0_b4_d0_b8_d1_82_d1_8c_d1_81_-scaled.jpg",
        },
        {
          id: 8,
          title: "Наименование игрушки 8",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          image:
            "https://rognowsky.ru/wp-content/uploads/2020/01/1099254284-_d0_9a_d0_b0_d0_ba_20_d0_bf_d1_80_d0_b0_d0_b2_d0_b8_d0_bb_d0_be_2c_20_d1_82_d0_be_20_d1_87_d1_82_d0_be_20_d0_bf_d1_80_d0_be_d0_b8_d0_b7_d0_b2_d0_be_d0_b4_d0_b8_d1_82_d1_8c_d1_81_-scaled.jpg",
        },
        {
          id: 9,
          title: "Наименование игрушки 9",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          image:
            "https://rognowsky.ru/wp-content/uploads/2020/01/1099254284-_d0_9a_d0_b0_d0_ba_20_d0_bf_d1_80_d0_b0_d0_b2_d0_b8_d0_bb_d0_be_2c_20_d1_82_d0_be_20_d1_87_d1_82_d0_be_20_d0_bf_d1_80_d0_be_d0_b8_d0_b7_d0_b2_d0_be_d0_b4_d0_b8_d1_82_d1_8c_d1_81_-scaled.jpg",
        },
      ],
    },
  },
};

module.exports = [
  {
    id: "catalog-get-info", // id of the route
    url: "/catalog/getInfo",
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
