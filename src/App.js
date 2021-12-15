import "./App.css";
import Profile from "./components/User";
import data from "./data/user.json";

function App() {
  return (
    <Profile
      avatar={data.avatar}
      username={data.username}
      tag={data.tag}
      location={data.location}
      followers={data.stats.followers}
      views={data.stats.views}
      likes={data.stats.likes}
    />
  );
}

export default App;
