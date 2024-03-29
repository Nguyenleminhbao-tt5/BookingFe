import React from "react";
import { Alert, Flex, Spin } from "antd";

type Props = {
  size: "small" | "medium" | "large";
  tip?: string;
};

export const Loading = ({ size, tip }: Props) => {
  return (
    <>
      {size == "small" && (
        <Spin tip={tip} size="small">
          <div className="content" />
        </Spin>
      )}
      {size == "medium" && (
        <Spin tip="Loading">
          <div className="content" />
        </Spin>
      )}
      {size == "large" && (
        <Spin tip={tip} size="large">
          <div className="content" />
        </Spin>
      )}
    </>
  );
};


