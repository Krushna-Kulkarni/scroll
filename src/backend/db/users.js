import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Millie",
    lastName: "Brown",
    password: "milliebrown@gmail.com",
    username: "milliebrown",
    bio: "Software Engineer",
    website: "https://milliebrown.tech",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066041/scroll/background/developer_hleb1b.jpg",
    createdAt: "2019-02-02T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
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
      {
        _id: "79Gksh9otl",
        firstName: "Sarah",
        lastName: "samson",
        username: "sarahsamsn",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/sarahsamson_f4mwza.jpg",
      },
    ],
    followers: [
      {
        _id: "ab8zWjEeXd",
        firstName: "James",
        lastName: "matt",
        username: "james456",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/jamesmatt_nzrjn3.jpg",
      },
      {
        _id: "qq8zWjEeXd",
        firstName: "Peter",
        lastName: "Parker",
        username: "notspiderman",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065155/scroll/users/peterparker_nwttth.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "79Gksh9otl",
    firstName: "Sarah",
    lastName: "samson",
    password: "sarah123",
    username: "sarahsamsn",
    bio: "Travel the world!",
    website: "https://sarahsamson.com",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/sarahsamson_f4mwza.jpg",
    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066687/scroll/background/travel_om25zv.jpg",
    createdAt: "2018-06-12T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Rajesh",
        lastName: "Kuthrapalli",
        username: "rajeshk",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691067474/scroll/users/rajeshkuthrapalli_q3yxdj.webp",
      },
    ],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Millie",
        lastName: "Brown",
        username: "milliebrown",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Rajesh",
    lastName: "Kuthrapalli",
    password: "rahjeshk123",
    username: "rajeshk",
    bio: "An adventure-seeking explorer",
    website: "https://rajeshkuthrapalli.com",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691067474/scroll/users/rajeshkuthrapalli_q3yxdj.webp",
    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066039/scroll/background/adventure_euwyj5.jpg",
    createdAt: "2018-11-26T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "ab8zWjEeXd",
        firstName: "James",
        lastName: "matt",
        username: "james456",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/jamesmatt_nzrjn3.jpg",
      },
    ],
    followers: [
      {
        _id: "79Gksh9otl",
        firstName: "Sarah",
        lastName: "samson",
        username: "sarahsamsn",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/sarahsamson_f4mwza.jpg",
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
    bookmarks: [],
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "John",
    lastName: "Alter",
    password: "johna123",
    username: "johnalter",
    bio: "Composing musical journeys",
    website: "https://johnalter.com",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/johnalter_qrfboh.jpg",
    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066042/scroll/background/musician_hfvn4l.jpg",
    createdAt: "2017-05-15T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Millie",
        lastName: "Brown",
        username: "milliebrown",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "o5gzWjEeX_",
    firstName: "Robert",
    lastName: "Jane",
    password: "robert1234",
    username: "robertj123",
    bio: "I make soul filling food!",
    website: "https://robertjane.co",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/robertjane_nlepsa.jpg",
    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066035/scroll/background/chef_pzdzf6.jpg",
    createdAt: "2019-08-19T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Millie",
        lastName: "Brown",
        username: "milliebrown",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bzlz",
    firstName: "Sheldon",
    lastName: "Matthew",
    password: "sheldon789",
    username: "sheldonnotcooper",
    bio: "Games and Graphics",
    website: "https://sheldonmatthew.com",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/sheldonmatthew_f0a2ni.jpg",

    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066035/scroll/background/gamer_qqxmfz.jpg",

    createdAt: "2021-01-11T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "qq8zWjEeXd",
    firstName: "Peter",
    lastName: "Parker",
    password: "peter12345",
    username: "notspiderman",
    bio: "Voice over artist",
    website: "https://petervoice.com",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065155/scroll/users/peterparker_nwttth.jpg",
    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066036/scroll/background/cartoon_keyd4f.jpg",
    createdAt: "2020-01-22T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Millie",
        lastName: "Brown",
        username: "milliebrown",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
      },
    ],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "ab8zWjEeXd",
    firstName: "James",
    lastName: "matt",
    password: "james@123",
    username: "james456",
    bio: "NBA",
    website: "https://jamesd.com",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065153/scroll/users/jamesmatt_nzrjn3.jpg",
    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066037/scroll/background/sports_l9pmms.jpg",
    createdAt: "2018-05-02T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Millie",
        lastName: "Brown",
        username: "milliebrown",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065151/scroll/users/milliebrown_icaxdb.jpg",
      },
    ],
    followers: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Rajesh",
        lastName: "Kuthrapalli",
        username: "rajeshk",
        profileAvatar:
          "https://res.cloudinary.com/random-data-cloud/image/upload/v1691067474/scroll/users/rajeshkuthrapalli_q3yxdj.webp",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bert",
    firstName: "Ava",
    lastName: "Green",
    password: "ava@123",
    username: "avagreen",
    bio: "Live life to the fullest!",
    website: "https://greenava.com",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691065158/scroll/users/avagreen_j8jgaq.jpg",
    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066037/scroll/background/bussiness_w6bhz5.jpg",
    createdAt: "2020-10-10T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "1NR81Bzmuh",
    firstName: "Mark",
    lastName: "Johnson",
    password: "mjohn123",
    username: "johnm234",
    bio: "Cars, Coffee and Code",
    website: "https://markj.com",
    profileAvatar:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691068178/scroll/users/markjohnson_d3ia6a.jpg",
    backgroundImage:
      "https://res.cloudinary.com/random-data-cloud/image/upload/v1691066040/scroll/background/car_jarwvm.jpg",
    createdAt: "2019-04-15T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
];
