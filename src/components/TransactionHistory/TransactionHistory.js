import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

class TransactionHistory extends Component {
  state = {
    items: this.props.items
  };

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      }).isRequired
    )
  };

  render() {
    const { items } = this.state;

    const listItem = items.map(item => 
      <tr key={item.id}>
        <th>{item.type}</th>
        <th>{item.amount}</th>
        <th>{item.currency}</th>
      </tr>
    );

    return (
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>{listItem}</tbody>
      </table>
    );
  }
}



export default TransactionHistory;
