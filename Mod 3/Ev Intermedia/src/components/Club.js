import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Club = (props) => {
  const renderMembers = () => {
    return props.item.members.map((member, index) => {
      return <li key={index}>{member}</li>;
    });
  };
  return (
    <li>
      <article className="title__name">{props.item.name}</article>
      <i className={props.item.fa}></i>
      <h4>Members:</h4>
      <ul>{renderMembers()}</ul>
    </li>
  );
};

export default Club;
