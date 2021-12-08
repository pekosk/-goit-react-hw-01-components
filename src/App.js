import data from './data';
import styles from './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import Friends from './components/Friends';

function App() {
  return (
     <div className="container">
      <Profile
  username={data.user.username}
  tag={data.user.tag}
  location={data.user.location}
  avatar={data.user.avatar}
  stats={data.user.stats}
      />
      <Statistics title="Upload stats" stats={data.statistic} />
      <Friends />
      </div>
  );
}

export default App;
