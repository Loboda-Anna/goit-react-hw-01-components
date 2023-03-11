import { List } from './FriendsList.styled';
import { FriendsListItem } from './FriendsListItem';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
    return <List> {friends.map(friend => 
        <FriendsListItem name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline}  key={friend.id} />)}
    </List>
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}
