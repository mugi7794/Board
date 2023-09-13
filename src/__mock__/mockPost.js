import { faker } from "@faker-js/faker";
import shortId from "shortid";

export const MockPosts = (count) =>
  Array(count)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      User: {
        id: shortId.generate(),
        nickName: faker.person.firstName(),
        profileImg: faker.image.url(),
      },
      Post_img: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => faker.image.url()),
      Comments: Array(Math.floor(Math.random() * 5) + 1)
        .fill()
        .map(() => {
          return {
            id: shortId.generate(),
            content: faker.lorem.sentence(),
            User: {
              id: shortId.generate(),
              nickName: faker.person.firstName(),
              profileImg: faker.image.url(),
            },
            myComment: false,
            createdAt: faker.date.between(
              "2023-01-01T00:00:00.000Z",
              "2023-01-31T00:00:00.000Z"
            ),
          };
        }),
      createdAt: faker.date.between(
        "2023-01-01T00:00:00.000Z",
        "2023-01-31T00:00:00.000Z"
      ),
      myPost: false,
    }));
