function getCats(id) {
  return cats;
}

const cats = [
  {
    id: 0,
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    date: new Date('2015-12-17T03:24:00')
  },

  {
    id: 1,
    imageURL: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    imageDescription: 'A cute kitten',
    name: 'Kitty',
    sex: 'Female',
    age: 1,
    breed: 'Bengal',
    story: 'Found in a dumpster',
    date: new Date('2018-12-17T03:24:00')
  },

  {
    id: 2,
    imageURL: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg',
    imageDescription: 'Gray cat lying down',
    name: 'Betsy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Abused by former owners',
    date: new Date('2019-01-17T03:24:00')
  }
];

module.exports = getCats;
