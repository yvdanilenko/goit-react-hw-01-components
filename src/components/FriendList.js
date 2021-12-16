import propTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li className="item" key={friend.id}>
          <span className="status">{friend.isOnline}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
};

// {
//   id: propTypes.number.isRequired,
//   isOnline: propTypes.bool.isRequired,
//   avatar: propTypes.string.isRequired,
//   name: propTypes.string.isRequired,
// }
