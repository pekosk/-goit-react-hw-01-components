import data from './data';
import styles from './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import Friends from './components/Friends';
import TransactionHistory from './components/Transactions';

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
      <Statistics stats={data.statistic} />
      <Friends friends={data.friends} />
      <TransactionHistory items={data.transactions} />;
      </div>
  );
}

export default App;
