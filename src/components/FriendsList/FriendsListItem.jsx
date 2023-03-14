import { Item, Status, Name } from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
