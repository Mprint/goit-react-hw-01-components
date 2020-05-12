import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function Statistics(props) {
  const title = (
    <>
      {props.title.length > 0 && (
        <h2 className={styles.title}>{props.title}</h2>
      )}
    </>
  );
  const list = (
    <>
      {props.stats.map(item => (
        <li className={styles.item} key={item.id}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </>
  );
  return (
    <section className={styles.statistics}>
      {title}
      <ul className={styles.statList}> {list} </ul>
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

// const ListItem = ({ item }) => (
//     <>
//       <span className={styles.label}>{item.label}</span>
//       <span className={styles.percentage}>{item.percentage}%</span>
//     </>
//   );

//   const Statistics = ({ title, stats }) => {
//     return (
//       <section className={styles.statistics}>
//         {title.length > 0 && <h2 className={styles.title}>{title}</h2>}

//         <ul className={styles.statList}>
//           {stats.map(item => (
//             <li key={item.id} className={styles.item}>
//               <ListItem item={item} />
//             </li>
//           ))}
//         </ul>
//       </section>
//     );
//   };
