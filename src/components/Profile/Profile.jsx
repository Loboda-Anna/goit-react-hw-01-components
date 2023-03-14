import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Avatar,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsItems,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItems>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItems>
        <StatsItems>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItems>
        <StatsItems>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItems>
      </Stats>
    </ProfileContainer>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
