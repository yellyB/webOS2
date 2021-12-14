import React from "react";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";

function MovieList() {
  const [menuItemKey, setMenuItemKey] = React.useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  return <React.Fragment>MovieList</React.Fragment>;
}

export default MovieList;
