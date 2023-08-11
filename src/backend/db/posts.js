import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    username: "robertj123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "how someone can not fall in love with this guacamole salad💗",
    mediaURL:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691070700/scroll/posts/salad_w3jvl2.jpg",
    mediaAlt: "salad",
    likedBy: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "John",
        lastName: "Alter",
        username: "johnalter",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/johnalter_qrfboh.jpg",
      },
      {
        _id: "1T6Be1QpLm",
        firstName: "Rajesh",
        lastName: "Kuthrapalli",
        username: "rajeshk",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691067474/scroll/users/rajeshkuthrapalli_q3yxdj.webp",
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Robert",
        lastName: "Jane",
        username: "robertj123",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/robertjane_nlepsa.jpg",
      },
    ],
    comments: [
      {
        _id: "LCrc9f0Zl0",
        commentData: "looks delicious!😋",
        firstName: "John",
        lastName: "Alter",
        username: "johnalter",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/johnalter_qrfboh.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "1T6Be1QpLm",
        commentData: "mouthwatering!🤤",
        firstName: "Rajesh",
        lastName: "Kuthrapalli",
        username: "rajeshk",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691067474/scroll/users/rajeshkuthrapalli_q3yxdj.webp",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "t7cZfWIp-q",
        commentData: "you are a magician 👨‍🍳🪄",
        firstName: "Millie",
        lastName: "Brown",
        username: "milliebrown",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    username: "milliebrown",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "my new setup 💻",
    mediaURL:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691071409/scroll/posts/setup_t6prxi.jpg",
    mediaAlt: "workspace",
    likedBy: [
      {
        _id: "79Gksh9otl",
        firstName: "Sarah",
        lastName: "samson",
        username: "sarahsamsn",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/sarahsamson_f4mwza.jpg",
      },
      {
        _id: "LCrc9f0Zl0",
        firstName: "John",
        lastName: "Alter",
        username: "johnalter",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/johnalter_qrfboh.jpg",
      },
      {
        _id: "1T6Be1QpLm",
        firstName: "Rajesh",
        lastName: "Kuthrapalli",
        username: "rajeshk",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691067474/scroll/users/rajeshkuthrapalli_q3yxdj.webp",
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Robert",
        lastName: "Jane",
        username: "robertj123",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/robertjane_nlepsa.jpg",
      },
    ],
    comments: [
      {
        commentData: "faboulous!🤩",
        _id: "79Gksh9otl",
        firstName: "Sarah",
        lastName: "samson",
        username: "sarahsamsn",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/sarahsamson_f4mwza.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        commentData: "looks dope!👌",
        _id: "o5gzWjEeX_",
        firstName: "Robert",
        lastName: "Jane",
        password: "robert1234",
        username: "robertj123",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/robertjane_nlepsa.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        commentData: "coooool😍",
        _id: "qq8zWjEeXd",
        firstName: "Peter",
        lastName: "Parker",
        password: "peter12345",
        username: "notspiderman",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065155/scroll/users/peterparker_nwttth.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    username: "sarahsamsn",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "updated the cover photo",
    mediaURL:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066687/scroll/background/travel_om25zv.jpg",
    mediaAlt: "travelInMountains",
    likedBy: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "John",
        lastName: "Alter",
        username: "johnalter",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/johnalter_qrfboh.jpg",
      },
    ],
    comments: [
      {
        commentData: "nice!👌",
        _id: "M1NR81Bzlz",
        firstName: "Sheldon",
        lastName: "Matthew",
        username: "sheldonnotcooper",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/sheldonmatthew_f0a2ni.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        commentData: "looks cool!👌",
        _id: "o5gzWjEeX_",
        firstName: "Robert",
        lastName: "Jane",
        password: "robert1234",
        username: "robertj123",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/robertjane_nlepsa.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    username: "johnalter",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "Living life one concert at a time 🎸",
    mediaURL:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691074464/scroll/posts/concert_apih8c.jpg",
    mediaAlt: "liveconcert",
    likedBy: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Millie",
        lastName: "Brown",
        username: "milliebrown",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
      },
      {
        _id: "1T6Be1QpLm",
        firstName: "Rajesh",
        lastName: "Kuthrapalli",
        username: "rajeshk",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691067474/scroll/users/rajeshkuthrapalli_q3yxdj.webp",
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Robert",
        lastName: "Jane",
        username: "robertj123",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/robertjane_nlepsa.jpg",
      },
    ],
    comments: [
      {
        commentData: "nice!👌",
        _id: "M1NR81Bzlz",
        firstName: "Sheldon",
        lastName: "Matthew",
        username: "sheldonnotcooper",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/sheldonmatthew_f0a2ni.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        commentData: "Last night was crazy!👌",
        _id: "o5gzWjEeX_",
        firstName: "Robert",
        lastName: "Jane",
        password: "robert1234",
        username: "robertj123",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/robertjane_nlepsa.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    username: "sheldonnotcooper",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "In love with this new ps5 console.🎮",
    mediaURL:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691073099/scroll/posts/console_wfxexu.jpg",
    mediaAlt: "gamingConsole",
    likedBy: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "John",
        lastName: "Alter",
        username: "johnalter",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/johnalter_qrfboh.jpg",
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Millie",
        lastName: "Brown",
        username: "milliebrown",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
      },
    ],
    comments: [
      {
        commentData: "looks cool!👌",
        _id: "o5gzWjEeX_",
        firstName: "Robert",
        lastName: "Jane",
        password: "robert1234",
        username: "robertj123",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/robertjane_nlepsa.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    username: "avagreen",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "My everyday walking partner 🐕‍🦺",
    mediaURL:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691075725/scroll/posts/roamingwithdog_r8k9dv.jpg",
    mediaAlt: "walkingdog",
    likedBy: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "John",
        lastName: "Alter",
        username: "johnalter",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/johnalter_qrfboh.jpg",
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Millie",
        lastName: "Brown",
        username: "milliebrown",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
      },
    ],
    comments: [],
  },
];
