import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('https://fruityvice.com/api/fruit/all')
      .then(({ data }) => setPosts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <h4 className="home-title">Sacolão</h4>
      <div className="home-cards-wrapper">
        {
          posts.length === 0 ? <Loading /> :  posts.map(post => (
            <div key={post.id} className="home-card" onClick={() => history.push(`/fruit/${post.id}`)}>
              <h2>{post.name}</h2>
              <p>{post.genus}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;