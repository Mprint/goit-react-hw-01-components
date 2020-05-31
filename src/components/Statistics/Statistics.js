import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function Statistics({ title, stats }) {
  const staticticTitle = (
    <>{title.length > 0 && <h2 className={styles.title}>{title}</h2>}</>
  );

  const statisticList = (
    <ul className={styles.statList}>
      {stats.map(item => (
        <li className={styles.item} key={item.id}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className={styles.statistics}>
      {staticticTitle}
      {statisticList}
    </section>
  );
}

Statistics.defaultProps = {
  stats: []
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }).isRequired
  )
};

export default Statistics;