import React, { ReactNode } from "react";

const Tab = ({
  index,
  activeTab,
  children,
}: {
  index: Number;
  activeTab: Number;
  children: ReactNode;
}) => {
  const isActive = index === activeTab;
  return (
    <div className={`btn  ${isActive ? "bg-black text-white" : "primary-btn"}`}>
      {children}
    </div>
  );
};

export default Tab;
