const DATA = {
  result: {
    sliderList: [
      {
        id: 1,
        title: "title",
        description: "description",
        images: [
          "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
      {
        id: 2,
        title: "title 2",
        description: "description 2",
        images: [
          "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
    ],
    aboutCompany: {
      title: "title",
      description: "descr",
      features: [
        {
          title: "6+",
          description: "лет работы",
        },
        {
          title: "6+",
          description: "лет работы",
        },
        {
          title: "6+",
          description: "лет работы",
        },
      ],
      image:
        "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    products: [
      {
        id: 1,
        title: "title",
        description: "descr",
        image:
          "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    ourAdvantages: [
      {
        id: 1,
        title: "title",
        description: "descr",
      },
    ],
    reviews: [
      {
        id: 1,
        title: "title",
        description: "descr",
        author: {
          image: "",
          name: "Ирина Ларионова",
          location: "Санкт-Петербург",
        },
      },
    ],
    blog: [
      {
        id: 1,
        title: "title",
        description: "descrt",
        image: "",
      },
    ],
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
