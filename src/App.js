import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "Box 1",
      // "imageUrl": "https://i.ibb.co/cvpntL1/hats.png5"
    },
    {
      "id": 2,
      "title": "Box 2",
      // "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png5"
    },
    {
      "id": 3,
      "title": "Box 3",
      // "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png5"
    },
    {
      "id": 4,
      "title": "Box 4",
      // "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png5"
    },
    {
      "id": 5,
      "title": "Box 5",
      // "imageUrl": "https://i.ibb.co/R70vBrQ/men.png5"
    }
  ]

  return (
    <Directory categories={categories} />
  );
}

export default App;
