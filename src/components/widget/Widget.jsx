import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Widget = ({ type }) => {
  let data;

  //tempory
  let amount = 100;
  let diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "see all user",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(128, 0, 128, 0.366)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "veiw all orders",
        icon: <ShoppingCartIcon className="icon" style={{
            color: "goldenrod",
            backgroundColor: "rgba(128, 165, 32, 0.366)",
          }}/>,
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "view net earning",
        icon: <MonetizationOnIcon className="icon" style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.366)",
          }}/>,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "see detail",
        icon: <AccountBalanceIcon className="icon" style={{
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)",
          }}/>,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
