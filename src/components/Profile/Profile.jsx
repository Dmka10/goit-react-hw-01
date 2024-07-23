
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileItem}>
      <div className={css.profileDescription}>
        <img className={css.profileAvatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStat}>
        <li className={css.profileStatItem}>
          <span className={css.profileStatTitle}>Followers</span>
          <span className={css.profileStatNumbers}>{stats.followers}</span>
        </li>
        <li className={css.profileStatItem}>
          <span className={css.profileStatTitle}>Views</span>
          <span className={css.profileStatNumbers}>{stats.views}</span>
        </li>
        <li className={css.profileStatItem}>
          <span className={css.profileStatTitle}>Likes</span>
          <span className={css.profileStatNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
