import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json"

ReactDOM.render(
  <>
    • Задание 1 - Профиль социальной сети
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    • Задание 2 - Секция статистики
    <Statistics title="Upload stats" stats={statisticalData} />
    • Задание 3 - Список друзей
    <FriendList friends={friends} />
    • Задание 4 - Список друзей<br/>
    <TransactionHistory items={transactions} />,
  </>,
  document.getElementById("root")
);
