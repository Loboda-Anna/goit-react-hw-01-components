import { Profile } from "components/Profile/Profile.jsx";
import user from 'components/Profile/user.json';


export const App = () => {
  return (
     <Profile  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
  );
};
