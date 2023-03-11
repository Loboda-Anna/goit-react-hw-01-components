import { Item, Status } from './FriendsListItem.styled';

export const FriendsListItem = ({avatar, name, isOnline, id} ) => {
    return <Item key={id}> 
  <Status status={isOnline} ></Status>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p> 
</Item>
}