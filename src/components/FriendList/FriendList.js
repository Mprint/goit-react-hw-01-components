import React, { Component } from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

class FriendList extends Component {
  state = {
    friends: this.props.friends
  };

  static defaultProps = {
    friends: []
  };

  static propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
      }).isRequired
    )
  };

  render() {
    const { friends } = this.state;

    const listItem = friends.map(friend => (
      <FriendListItem friend={friend} key={friend.id} />
    ));

    return <ul className={styles.friendList}>{listItem}</ul>;
  }
}

export default FriendList;
