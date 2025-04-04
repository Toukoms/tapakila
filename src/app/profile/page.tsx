import UserProfile from "./_components/UserProfile";
import RecentTicketsContainer from "./_containers/RecentTicketsContainer";

function ProfilePage() {
  return (
    <div>
      <UserProfile />
      <RecentTicketsContainer />
    </div>
  );
}

export default ProfilePage;
