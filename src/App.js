import "./App.css";
import Profile from "./components/User";
import data from "./data/user.json";
import FriendList from "./components/FriendList";
import friendList from "./data/friendList.json";
import Statistics from "./components/Statistics";
import dataStatistics from "./data/dataStatistics.json";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./data/transactions.json";
import { Container } from "./components/App/App.styled";

function App() {
  return (
    <Container>
      <Profile
        avatar={data.avatar}
        username={data.username}
        tag={data.tag}
        location={data.location}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
      />

      <FriendList friends={friendList} />
      <Statistics title="Upload stats" stats={dataStatistics} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
