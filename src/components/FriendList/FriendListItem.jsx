import css from './FriendList.module.css';

const FriendListItem = ({ image, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img
        className={css.friendListAvatar}
        src={image}
        alt="Avatar"
        width="48"
      />
      <p className={css.friendListName}>{name}</p>
      <p className={`${isOnline ? css.isOnline : css.isOffline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;