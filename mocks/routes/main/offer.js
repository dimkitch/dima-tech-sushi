module.exports = [
  {
    id: "main-offer", // id of the route
    url: "/main/offer",
    method: "POST",
    variants: [
      {
        id: "success",
        response: {
          body: {
            message: 'OK',
            id: Math.floor(Math.random() * 1000)
          },
          status: 200,
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