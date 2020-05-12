import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  const status = [styles.status];

  if (friend.isOnline) {
    status.push(styles.online);
  } else status.push(styles.offline);

  return (
    <li className={styles.item}>
      <span className={status.join(" ")}>{friend.isOnline}</span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
