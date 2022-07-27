import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
  return (
    <li className={styles.item}>
      <span className={friend.isOnline ? styles.isOnline : styles.isOffline}>
        {friend.isOnline}
      </span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
