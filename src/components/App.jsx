import { Profile } from 'components/Profile/Profile.jsx';
import user from 'components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { FriendsList } from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { TransactionsHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};
