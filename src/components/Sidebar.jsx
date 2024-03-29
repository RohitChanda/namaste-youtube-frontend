import React from "react";
import { useSelector } from "react-redux";
import HomeIcon from "../utils/icons/HomeIcon";
import ShortsIcon from "../utils/icons/ShortsIcon";
import SubscriptionIcon from "../utils/icons/SubscriptionIcon";
import ChannelIcon from "../utils/icons/ChannelIcon";
import HistoryIcon from "../utils/icons/HistoryIcon";
import WatchLaterIcon from "../utils/icons/WatchLaterIcon";
import YourVideosIcon from "../utils/icons/YourVideosIcon";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  if (!isMenuOpen) return <></>;

  const mainMenus = [
    {
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      name: "Shorts",
      icon: <ShortsIcon />,
    },
    {
      name: "Subscription",
      icon: <SubscriptionIcon />,
    },
  ];

  const secMenusList = [
    {
      name: "Channel",
      icon: <ChannelIcon />,
    },
    {
      name: "History",
      icon: <HistoryIcon />,
    },
    {
      name: "Your Videos",
      icon: <YourVideosIcon />,
    },
    {
      name: "Watch Later",
      icon: <WatchLaterIcon />,
    },
  ];

  return (
    // <div className='p-5 shadow-lg w-96'>
    <div className="flex flex-col w-96 p-5">
      <ul>
        {mainMenus.map((menu, index) => (
          <li key={index} className="flex items-center m-2 menu-list">
            {menu.icon}
            <span>{menu.name}</span>
          </li>
        ))}
      </ul>

      <hr />

      <h1 className="font-bold">You {">"}</h1>
      <ul>
        {secMenusList.map((menu, index) => (
          <li key={index} className="flex items-center m-2 ">
            {menu.icon}
            <span>{menu.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
