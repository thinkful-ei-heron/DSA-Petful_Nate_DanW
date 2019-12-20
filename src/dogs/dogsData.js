function getDogs(id) {
  return dogs;
}

const dogs = [
  {
    id: 0,
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    date: new Date('2016-08-17T03:24:00')
  },
  {
    id: 1,
    imageURL: 'https://www.allthingsdogs.com/wp-content/uploads/2018/08/Black-German-Shepherd-Dog.jpg',
    imageDescription: 'A black German shepherd playing',
    name: 'Speedy',
    sex: 'Male',
    age: 4,
    breed: 'German Shepherd',
    story: 'Speedy was found in a box next to a dumpster',
    date: new Date('2016-08-17T03:24:00')
  },
  {
    id: 2,
    imageURL: 'https://i.ytimg.com/vi/PcmCI722WMc/maxresdefault.jpg',
    imageDescription: 'A white husky laying in a park',
    name: 'Mimi',
    sex: 'Female',
    age: 1,
    breed: 'Husky',
    story: 'Mimi was saved from an illegal dog fighting ring',
    date: new Date('2016-08-17T03:24:00')
  },
  {
    id: 3,
    imageURL:
      'https://cdn.shopify.com/s/files/1/2395/7099/products/adult_shiba_inu_sitting_on_lawn_grass_close_up_photo-scopio-1516390023191.progressive.jpg?v=1557520237',
    imageDescription: 'A black shiba inu with a bandana',
    name: 'Klaus',
    sex: 'Male',
    age: 2,
    breed: 'Shiba Inu',
    story: 'Klaus was left outisde the dog shelter',
    date: new Date('2016-08-17T03:24:00')
  }
];

module.exports = getDogs;
