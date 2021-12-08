import styles from "./Friends.module.css";
import FriendsItem from "./FriendsItem";
import PropTypes from "prop-types";

const Friends = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendsItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

Friends.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Friends;
