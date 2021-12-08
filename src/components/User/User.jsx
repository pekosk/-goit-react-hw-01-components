import styles from "./User.module.css";

const User = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}></span>
        </li>
        <li>
          <span className={styles.labe}>Views</span>
          <span className={styles.quantity}></span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}></span>
        </li>
      </ul>
    </div>
  );
};

export default User;
