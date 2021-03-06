import propTypes from "prop-types";
import { Stats } from "./User.styled";
import { Name } from "./User.styled";

export default function Profile({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" width="280" />
        <Name>{username}</Name>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </Stats>
    </div>
  );
}

Profile.propTypes = {
  avatar: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};
