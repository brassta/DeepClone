/**
 * Web:  www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 25-Jan-21
 * Time: 14:09
 */

const data = JSON.parse('[\n' +
  '  {\n' +
  '    "_id": "600eb53ed21a4ec0eabfad5c",\n' +
  '    "index": 0,\n' +
  '    "guid": "c469a1db-cdef-483d-9ab8-8d1bcb186ce7",\n' +
  '    "isActive": true,\n' +
  '    "balance": "$1,539.86",\n' +
  '    "picture": "http://placehold.it/32x32",\n' +
  '    "age": 37,\n' +
  '    "eyeColor": "brown",\n' +
  '    "name": {\n' +
  '      "first": "Rose",\n' +
  '      "last": "Barber"\n' +
  '    },\n' +
  '    "company": "EXOSPEED",\n' +
  '    "email": "rose.barber@exospeed.tv",\n' +
  '    "phone": "+1 (885) 563-3530",\n' +
  '    "address": "429 Times Placez, Temperanceville, Georgia, 7391",\n' +
  '    "about": "Laboris velit tempor deserunt sint cupidatat commodo qui aliquip eiusmod excepteur ea est voluptate eu. Aliqua esse adipisicing nulla labore. Sint eu consequat ad id cillum exercitation enim veniam. Dolor laborum do ad quis nulla. Eiusmod do sit deserunt ullamco nostrud.",\n' +
  '    "registered": "Thursday, January 9, 2020 10:11 PM",\n' +
  '    "latitude": "-24.008577",\n' +
  '    "longitude": "-32.923371",\n' +
  '    "tags": [\n' +
  '      "ex",\n' +
  '      "in",\n' +
  '      "reprehenderit",\n' +
  '      "aliquip",\n' +
  '      "aliqua"\n' +
  '    ],\n' +
  '    "range": [\n' +
  '      0,\n' +
  '      1,\n' +
  '      2,\n' +
  '      3,\n' +
  '      4,\n' +
  '      5,\n' +
  '      6,\n' +
  '      7,\n' +
  '      8,\n' +
  '      9\n' +
  '    ],\n' +
  '    "friends": [\n' +
  '      {\n' +
  '        "id": 0,\n' +
  '        "name": "Trisha Bullock"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 1,\n' +
  '        "name": "Horton Hahn"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 2,\n' +
  '        "name": "Lauri Marquez"\n' +
  '      }\n' +
  '    ],\n' +
  '    "greeting": "Hello, Rose! You have 5 unread messages.",\n' +
  '    "favoriteFruit": "banana"\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": "600eb53ebdcf46f1a8055c19",\n' +
  '    "index": 1,\n' +
  '    "guid": "06113b52-9401-4442-8ea8-9e201cd6cddb",\n' +
  '    "isActive": false,\n' +
  '    "balance": "$3,564.58",\n' +
  '    "picture": "http://placehold.it/32x32",\n' +
  '    "age": 27,\n' +
  '    "eyeColor": "green",\n' +
  '    "name": {\n' +
  '      "first": "Beryl",\n' +
  '      "last": "Graham"\n' +
  '    },\n' +
  '    "company": "WAZZU",\n' +
  '    "email": "beryl.graham@wazzu.us",\n' +
  '    "phone": "+1 (856) 407-3208",\n' +
  '    "address": "218 Lois Avenue, Lisco, New York, 7652",\n' +
  '    "about": "Dolor ea do veniam elit proident pariatur aliquip consequat laborum ipsum. Aute ipsum cillum ipsum officia cillum aute deserunt labore eiusmod duis enim amet. Ad esse culpa est Lorem eu in culpa nostrud. Tempor exercitation ea duis qui ullamco non Lorem minim amet do tempor dolor. Laboris nulla ad tempor commodo eiusmod pariatur ex veniam proident minim consequat eiusmod proident qui.",\n' +
  '    "registered": "Tuesday, January 28, 2020 1:56 AM",\n' +
  '    "latitude": "-56.519829",\n' +
  '    "longitude": "-7.308958",\n' +
  '    "tags": [\n' +
  '      "anim",\n' +
  '      "adipisicing",\n' +
  '      "cupidatat",\n' +
  '      "proident",\n' +
  '      "id"\n' +
  '    ],\n' +
  '    "range": [\n' +
  '      0,\n' +
  '      1,\n' +
  '      2,\n' +
  '      3,\n' +
  '      4,\n' +
  '      5,\n' +
  '      6,\n' +
  '      7,\n' +
  '      8,\n' +
  '      9\n' +
  '    ],\n' +
  '    "friends": [\n' +
  '      {\n' +
  '        "id": 0,\n' +
  '        "name": "Carroll Moore"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 1,\n' +
  '        "name": "Steele Allen"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 2,\n' +
  '        "name": "Baxter Price"\n' +
  '      }\n' +
  '    ],\n' +
  '    "greeting": "Hello, Beryl! You have 9 unread messages.",\n' +
  '    "favoriteFruit": "banana"\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": "600eb53efcd93fe2c154d0d6",\n' +
  '    "index": 2,\n' +
  '    "guid": "cef66fa9-8405-4047-b7ec-583da238e842",\n' +
  '    "isActive": false,\n' +
  '    "balance": "$1,523.81",\n' +
  '    "picture": "http://placehold.it/32x32",\n' +
  '    "age": 36,\n' +
  '    "eyeColor": "brown",\n' +
  '    "name": {\n' +
  '      "first": "Meyer",\n' +
  '      "last": "Arnold"\n' +
  '    },\n' +
  '    "company": "ENQUILITY",\n' +
  '    "email": "meyer.arnold@enquility.co.uk",\n' +
  '    "phone": "+1 (830) 445-3125",\n' +
  '    "address": "463 Varanda Place, Tioga, Delaware, 2617",\n' +
  '    "about": "Cupidatat eu amet sunt tempor nulla. Proident veniam deserunt minim commodo aliqua pariatur aute laboris velit cillum sint in. Reprehenderit mollit adipisicing laboris ut ea enim magna ipsum adipisicing reprehenderit ullamco occaecat ad. Do occaecat sit exercitation nisi cupidatat do. Enim adipisicing est dolor ex aute culpa veniam velit qui.",\n' +
  '    "registered": "Friday, January 25, 2019 4:16 AM",\n' +
  '    "latitude": "-54.92368",\n' +
  '    "longitude": "43.128713",\n' +
  '    "tags": [\n' +
  '      "consequat",\n' +
  '      "veniam",\n' +
  '      "ut",\n' +
  '      "amet",\n' +
  '      "laboris"\n' +
  '    ],\n' +
  '    "range": [\n' +
  '      0,\n' +
  '      1,\n' +
  '      2,\n' +
  '      3,\n' +
  '      4,\n' +
  '      5,\n' +
  '      6,\n' +
  '      7,\n' +
  '      8,\n' +
  '      9\n' +
  '    ],\n' +
  '    "friends": [\n' +
  '      {\n' +
  '        "id": 0,\n' +
  '        "name": "Tanya Reynolds"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 1,\n' +
  '        "name": "Fleming Campbell"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 2,\n' +
  '        "name": "Park Nolan"\n' +
  '      }\n' +
  '    ],\n' +
  '    "greeting": "Hello, Meyer! You have 10 unread messages.",\n' +
  '    "favoriteFruit": "banana"\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": "600eb53e1ac7692eb3f2e421",\n' +
  '    "index": 3,\n' +
  '    "guid": "2be228fe-d6e1-49c2-9736-7cb68c2d4385",\n' +
  '    "isActive": true,\n' +
  '    "balance": "$2,496.66",\n' +
  '    "picture": "http://placehold.it/32x32",\n' +
  '    "age": 35,\n' +
  '    "eyeColor": "brown",\n' +
  '    "name": {\n' +
  '      "first": "Norris",\n' +
  '      "last": "Mack"\n' +
  '    },\n' +
  '    "company": "AUSTECH",\n' +
  '    "email": "norris.mack@austech.name",\n' +
  '    "phone": "+1 (864) 469-2515",\n' +
  '    "address": "356 Myrtle Avenue, Shasta, South Dakota, 5123",\n' +
  '    "about": "Do irure minim enim minim deserunt. Sint id aute dolore non enim non est laboris duis aliqua. Ipsum culpa officia dolor incididunt enim adipisicing sunt in Lorem aute Lorem exercitation. Duis minim officia culpa cillum ut ut sint sit aliqua. Nisi tempor pariatur commodo velit consectetur pariatur ex et. Incididunt adipisicing ad aute nostrud esse quis culpa anim et nulla ut aliqua. Nisi incididunt eiusmod non in minim reprehenderit aliquip sunt pariatur esse id fugiat id magna.",\n' +
  '    "registered": "Tuesday, July 12, 2016 11:05 AM",\n' +
  '    "latitude": "-19.333939",\n' +
  '    "longitude": "172.078733",\n' +
  '    "tags": [\n' +
  '      "non",\n' +
  '      "id",\n' +
  '      "nostrud",\n' +
  '      "reprehenderit",\n' +
  '      "qui"\n' +
  '    ],\n' +
  '    "range": [\n' +
  '      0,\n' +
  '      1,\n' +
  '      2,\n' +
  '      3,\n' +
  '      4,\n' +
  '      5,\n' +
  '      6,\n' +
  '      7,\n' +
  '      8,\n' +
  '      9\n' +
  '    ],\n' +
  '    "friends": [\n' +
  '      {\n' +
  '        "id": 0,\n' +
  '        "name": "Rasmussen Edwards"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 1,\n' +
  '        "name": "Noreen Howe"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 2,\n' +
  '        "name": "Aida Garner"\n' +
  '      }\n' +
  '    ],\n' +
  '    "greeting": "Hello, Norris! You have 5 unread messages.",\n' +
  '    "favoriteFruit": "banana"\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": "600eb53e58bdb7f565595908",\n' +
  '    "index": 4,\n' +
  '    "guid": "4c9f6cd6-1844-4cea-96af-123a075d2db8",\n' +
  '    "isActive": false,\n' +
  '    "balance": "$3,618.97",\n' +
  '    "picture": "http://placehold.it/32x32",\n' +
  '    "age": 23,\n' +
  '    "eyeColor": "brown",\n' +
  '    "name": {\n' +
  '      "first": "Johnston",\n' +
  '      "last": "Day"\n' +
  '    },\n' +
  '    "company": "EXERTA",\n' +
  '    "email": "johnston.day@exerta.org",\n' +
  '    "phone": "+1 (974) 470-2200",\n' +
  '    "address": "817 Rockaway Avenue, Cobbtown, Palau, 5310",\n' +
  '    "about": "Ut labore ipsum officia cupidatat laboris proident esse. Adipisicing non dolore veniam labore. Nulla culpa duis et nostrud ad ea proident dolor est adipisicing ut reprehenderit exercitation. Sint aliqua occaecat nisi enim quis et consectetur ut sunt deserunt. Officia velit irure dolore laborum sit aliquip excepteur laboris irure qui sint eiusmod labore duis. Labore laboris aute velit veniam eiusmod sint nisi culpa.",\n' +
  '    "registered": "Thursday, June 7, 2018 8:18 AM",\n' +
  '    "latitude": "41.978046",\n' +
  '    "longitude": "-179.759637",\n' +
  '    "tags": [\n' +
  '      "eu",\n' +
  '      "laboris",\n' +
  '      "ipsum",\n' +
  '      "duis",\n' +
  '      "ipsum"\n' +
  '    ],\n' +
  '    "range": [\n' +
  '      0,\n' +
  '      1,\n' +
  '      2,\n' +
  '      3,\n' +
  '      4,\n' +
  '      5,\n' +
  '      6,\n' +
  '      7,\n' +
  '      8,\n' +
  '      9\n' +
  '    ],\n' +
  '    "friends": [\n' +
  '      {\n' +
  '        "id": 0,\n' +
  '        "name": "Walsh Sawyer"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 1,\n' +
  '        "name": "Laura Hines"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 2,\n' +
  '        "name": "Howell Park"\n' +
  '      }\n' +
  '    ],\n' +
  '    "greeting": "Hello, Johnston! You have 6 unread messages.",\n' +
  '    "favoriteFruit": "strawberry"\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": "600eb53ec8c8d61f3e3d86dd",\n' +
  '    "index": 5,\n' +
  '    "guid": "7b9835a2-bf5a-47da-bc80-360797ba0324",\n' +
  '    "isActive": false,\n' +
  '    "balance": "$2,965.13",\n' +
  '    "picture": "http://placehold.it/32x32",\n' +
  '    "age": 39,\n' +
  '    "eyeColor": "blue",\n' +
  '    "name": {\n' +
  '      "first": "Meyers",\n' +
  '      "last": "Burks"\n' +
  '    },\n' +
  '    "company": "QUONK",\n' +
  '    "email": "meyers.burks@quonk.ca",\n' +
  '    "phone": "+1 (835) 539-3791",\n' +
  '    "address": "698 Thornton Street, Orin, Iowa, 4356",\n' +
  '    "about": "Est exercitation pariatur qui ullamco esse incididunt ex et. Dolore proident laborum in ad ipsum cupidatat reprehenderit. Irure non voluptate fugiat proident proident voluptate ex aliqua qui commodo voluptate. Sunt aliquip voluptate nisi tempor Lorem nulla laborum pariatur esse eu et.",\n' +
  '    "registered": "Tuesday, November 7, 2017 3:35 PM",\n' +
  '    "latitude": "41.670724",\n' +
  '    "longitude": "-148.152529",\n' +
  '    "tags": [\n' +
  '      "ea",\n' +
  '      "laboris",\n' +
  '      "cillum",\n' +
  '      "elit",\n' +
  '      "quis"\n' +
  '    ],\n' +
  '    "range": [\n' +
  '      0,\n' +
  '      1,\n' +
  '      2,\n' +
  '      3,\n' +
  '      4,\n' +
  '      5,\n' +
  '      6,\n' +
  '      7,\n' +
  '      8,\n' +
  '      9\n' +
  '    ],\n' +
  '    "friends": [\n' +
  '      {\n' +
  '        "id": 0,\n' +
  '        "name": "Briggs Swanson"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 1,\n' +
  '        "name": "Reyes Witt"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 2,\n' +
  '        "name": "Parker Wheeler"\n' +
  '      }\n' +
  '    ],\n' +
  '    "greeting": "Hello, Meyers! You have 7 unread messages.",\n' +
  '    "favoriteFruit": "apple"\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": "600eb53eb7adb641aadb984d",\n' +
  '    "index": 6,\n' +
  '    "guid": "a1230eee-3bfd-43d8-be29-3825c8be1bdf",\n' +
  '    "isActive": false,\n' +
  '    "balance": "$3,573.80",\n' +
  '    "picture": "http://placehold.it/32x32",\n' +
  '    "age": 26,\n' +
  '    "eyeColor": "green",\n' +
  '    "name": {\n' +
  '      "first": "Gibbs",\n' +
  '      "last": "Alvarez"\n' +
  '    },\n' +
  '    "company": "DIGITALUS",\n' +
  '    "email": "gibbs.alvarez@digitalus.info",\n' +
  '    "phone": "+1 (901) 576-3310",\n' +
  '    "address": "692 Sands Street, Clarence, Maine, 1118",\n' +
  '    "about": "Aliqua in ex qui magna magna proident. Non id in elit laborum laboris sit proident. Eu enim commodo consectetur veniam. Commodo ipsum tempor dolore laborum voluptate occaecat consectetur ad. Fugiat tempor dolore occaecat nisi nisi.",\n' +
  '    "registered": "Monday, January 13, 2020 6:03 AM",\n' +
  '    "latitude": "-22.785298",\n' +
  '    "longitude": "10.756558",\n' +
  '    "tags": [\n' +
  '      "ad",\n' +
  '      "cillum",\n' +
  '      "occaecat",\n' +
  '      "dolor",\n' +
  '      "ut"\n' +
  '    ],\n' +
  '    "range": [\n' +
  '      0,\n' +
  '      1,\n' +
  '      2,\n' +
  '      3,\n' +
  '      4,\n' +
  '      5,\n' +
  '      6,\n' +
  '      7,\n' +
  '      8,\n' +
  '      9\n' +
  '    ],\n' +
  '    "friends": [\n' +
  '      {\n' +
  '        "id": 0,\n' +
  '        "name": "Hendricks Joseph"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 1,\n' +
  '        "name": "Letha Holloway"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 2,\n' +
  '        "name": "Blankenship Hayden"\n' +
  '      }\n' +
  '    ],\n' +
  '    "greeting": "Hello, Gibbs! You have 9 unread messages.",\n' +
  '    "favoriteFruit": "apple"\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": "600eb53ea2307c5e5ffb68db",\n' +
  '    "index": 7,\n' +
  '    "guid": "c0cbf2ac-73a8-425a-8013-7f653184c1a2",\n' +
  '    "isActive": true,\n' +
  '    "balance": "$1,440.90",\n' +
  '    "picture": "http://placehold.it/32x32",\n' +
  '    "age": 31,\n' +
  '    "eyeColor": "blue",\n' +
  '    "name": {\n' +
  '      "first": "Nancy",\n' +
  '      "last": "Branch"\n' +
  '    },\n' +
  '    "company": "ISOLOGIA",\n' +
  '    "email": "nancy.branch@isologia.me",\n' +
  '    "phone": "+1 (946) 473-3636",\n' +
  '    "address": "455 Bowne Street, Crayne, Louisiana, 9369",\n' +
  '    "about": "Enim aliquip minim cillum ex consectetur est nulla. Anim reprehenderit mollit cillum exercitation in laborum et minim enim laboris exercitation ad et non. Nisi occaecat cupidatat est occaecat. Laboris enim commodo id labore consequat elit ex. Aliquip officia amet eu nostrud enim consequat veniam labore id irure.",\n' +
  '    "registered": "Wednesday, November 27, 2019 10:53 AM",\n' +
  '    "latitude": "-58.313293",\n' +
  '    "longitude": "-139.459151",\n' +
  '    "tags": [\n' +
  '      "amet",\n' +
  '      "excepteur",\n' +
  '      "adipisicing",\n' +
  '      "mollit",\n' +
  '      "aute"\n' +
  '    ],\n' +
  '    "range": [\n' +
  '      0,\n' +
  '      1,\n' +
  '      2,\n' +
  '      3,\n' +
  '      4,\n' +
  '      5,\n' +
  '      6,\n' +
  '      7,\n' +
  '      8,\n' +
  '      9\n' +
  '    ],\n' +
  '    "friends": [\n' +
  '      {\n' +
  '        "id": 0,\n' +
  '        "name": "Josephine Hopper"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 1,\n' +
  '        "name": "Melody Conner"\n' +
  '      },\n' +
  '      {\n' +
  '        "id": 2,\n' +
  '        "name": "Aurelia Combs"\n' +
  '      }\n' +
  '    ],\n' +
  '    "greeting": "Hello, Nancy! You have 7 unread messages.",\n' +
  '    "favoriteFruit": "banana"\n' +
  '  }\n' +
  ']')

function DeepCopy(obj) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || 'object' !== typeof obj) {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = DeepCopy(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = DeepCopy(obj[attr]);
      }
    }
    return copy;
  }

  throw new Error('Unable to copy obj! Its type isn\'t supported.');
}


