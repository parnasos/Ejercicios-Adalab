import React from "react";
import Club from "./Club";

const ClubList = (props) => {
  const clubItems = props.list.map((item, index) => {
    return (
      <li key={index}>
        <Club item={item} />
      </li>
    );
  });
  return (
    <div className="ClubList">
      <ul> {clubItems}</ul>
    </div>
  );
};

export default ClubList;
