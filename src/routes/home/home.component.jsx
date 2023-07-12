import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Box 1',
      // "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: 'Box 2',
      // "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: 'Box 3',
      // "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: 'Box 4',
      // "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: 'Box 5',
      // "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
