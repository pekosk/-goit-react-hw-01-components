import data from './data';
import Profile from './components/Profile';

function App() {
  return (
     <div >
      <Profile
  username={data.user.username}
  tag={data.user.tag}
  location={data.user.location}
  avatar={data.user.avatar}
  stats={data.user.stats}
      />
      </div>
  );
}

export default App;
