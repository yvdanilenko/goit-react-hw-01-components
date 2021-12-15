import propTypes from "prop-types";

export default function FriendList({ isOnline, avatar, name }) {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendList.propTypes = {};
