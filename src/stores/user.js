import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [
      {
        name: "test",
        email: "test@gmail.com",
        img: "https://cdn.pixabay.com/photo/2023/11/22/04/50/indian-8404713_1280.jpg",
        description:
          "Greeting: Hello, my name is test. I am a 6 studying cs at Western Michigan University.",
      },
      {
        name: "momo",
        email: "momo@gmail.com",
        img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        description:
          "Greeting: Hello, my name is test. I am a 6 studying cs at Western Michigan University.",
      },
      {
        name: "sawat",
        email: "sawat@gmail.com",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        description:
          "Greeting: Hello, my name is test. I am a 6 studying cs at Western Michigan University.",
      },
      {
        name: "mano",
        email: "mano@gmail.com",
        img: "https://png.pngtree.com/background/20230607/original/pngtree-someone-wearing-headphones-standing-in-a-neon-light-area-picture-image_2902840.jpg",
        description:
          "Greeting: Hello, my name is test. I am a 6 studying cs at Western Michigan University.",
      },
      {
        name: "mena",
        email: "mena@gmail.com",
        img: "https://media.istockphoto.com/id/1485052530/photo/portrait-fashion-and-braids-with-a-black-woman-on-an-orange-background-outdoor-for-style-or.webp?b=1&s=170667a&w=0&k=20&c=6icPOqvgqleyXDebHgqzQ_7u3wxqtN7A4obaL4Y5n_k=",
        description:
          "Greeting: Hello, my name is test. I am a 6 studying cs at Western Michigan University.",
      },
      {
        name: "kano",
        email: "kano@gmail.com",
        img: "https://t4.ftcdn.net/jpg/06/19/49/17/360_F_619491753_rDK4qNKSnpF2XANgGM2TwcsDQXNNVutc.jpg",
        description:
          "Greeting: Hello, my name is test. I am a 6 studying cs at Western Michigan University.",
      },
      {
        name: "somchai",
        email: "somcahi@gmail.com",
        img: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
        description:
          "Greeting: Hello, my name is test. I am a 6 studying cs at Western Michigan University.",
      },
    ],
    images: [
      {
        img: "https://cdn.pixabay.com/photo/2023/11/22/04/50/indian-8404713_1280.jpg",
      },
      {
        img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      },
      {
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
      },
      {
        img: "https://png.pngtree.com/background/20230607/original/pngtree-someone-wearing-headphones-standing-in-a-neon-light-area-picture-image_2902840.jpg",
      },
      {
        img: "https://media.istockphoto.com/id/1485052530/photo/portrait-fashion-and-braids-with-a-black-woman-on-an-orange-background-outdoor-for-style-or.webp?b=1&s=170667a&w=0&k=20&c=6icPOqvgqleyXDebHgqzQ_7u3wxqtN7A4obaL4Y5n_k=",
      },
      {
        img: "https://t4.ftcdn.net/jpg/06/19/49/17/360_F_619491753_rDK4qNKSnpF2XANgGM2TwcsDQXNNVutc.jpg",
      },
      {
        img: "https://t4.ftcdn.net/jpg/06/19/49/17/360_F_619491753_rDK4qNKSnpF2XANgGM2TwcsDQXNNVutc.jpg",
      },
      {
        img: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
      },
    ],
  }),
  actions: {
    addUser(user) {
      this.users.push(user);
    },
    updateUser(user, index) {
      this.users.splice(index, 1, user);
    },
    removeUser(index) {
      this.users.splice(index, 1);
    },
  },
});
