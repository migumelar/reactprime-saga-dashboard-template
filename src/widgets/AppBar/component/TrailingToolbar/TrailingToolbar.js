import UserShortcut from "./component/UserShortcut";

const TrailingToolbar = ({ appBarRef, children }) => {
  return (
    <div>
      <UserShortcut appBarRef={appBarRef} />
    </div>
  );
};

export default TrailingToolbar;
