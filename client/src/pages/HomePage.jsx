import DropDown from "../components/Buttons/DropDown";
import Pomodoro from "../components/Buttons/Pomodoro";
import Telegram from "../components/Buttons/Telegram";
import Theme from "../components/Buttons/Theme";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";

const HomePage = () => {
  return (
    <div className="px-8 bg-white dark:bg-[#191d28]">
      <div className="py-4 flex md:flex-row gap-y-2 flex-col justify-between items-center">
        <div>
          <Header></Header>
        </div>
        <div className="flex gap-x-6 py-1.5">
          <DropDown>INR</DropDown>
          <DropDown>BTC</DropDown>
        </div>
        <div className="flex gap-x-6 items-center">
          <Pomodoro />
          <Telegram></Telegram>
          <Theme />
        </div>
      </div>

      <div className="py-4">
        <Table />
      </div>
    </div>
  );
};

export default HomePage;
