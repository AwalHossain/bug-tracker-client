import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";
import PlatForm from "../PlatForm/PlatForm";
import Support from "../Support/Support";
import TaskView from "../TaskView/TaskView";

function HomePage() {
  return (
    <div>
      <Banner />
      <Overview />
      <PlatForm />
      <TaskView />
      <Support />
      {/* <Facebook /> */}
      {/* <MessengerCustomerChat pageId="116518961036114" appId="511622123792735" /> */}
    </div>
  );
}

export default HomePage;
