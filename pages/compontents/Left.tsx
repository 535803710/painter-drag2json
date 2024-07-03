"use client";
import { Button, Input, Tabs } from "antd";
import { useState } from "react";
const Left = () => {
  const boxList = [
    {
      key: "box",
      label: "画板",
      value: "box",
    },
    {
      key: "rect",
      label: "矩形",
      value: "rect",
    },
    {
      key: "image",
      label: "图片",
      value: "image",
    },
    {
      key: "text",
      label: "文字",
      value: "text",
    },
    {
      key: "inlineText",
      label: "文字数组",
      value: "inlineText",
    },
    {
      key: "qrcode",
      label: "二维码",
      value: "qrcode",
    },
  ];
  const [boxInfo, setBoxInfo] = useState({
    width: "750",
    height: "1080",
  });

  const onChangeTabs = (e) => {
    console.log(e);
  };
  const changeBoxSize = (e, type) => {
    setBoxInfo({
      ...boxInfo,
      [type]: e.target.value,
    });

    console.log(boxInfo);
  };

  return (
    <>
      <div>选择添加的模块</div>
      <div className="block">
        <Tabs defaultActiveKey="box" items={boxList} onChange={onChangeTabs} />
        <div>
          <div>
            width:{" "}
            <Input
              placeholder="宽度"
              onChange={(e) => changeBoxSize(e, "width")}
            ></Input>
          </div>
          <div>
            height:{" "}
            <Input
              placeholder="高度"
              onChange={(e) => changeBoxSize(e, "height")}
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
