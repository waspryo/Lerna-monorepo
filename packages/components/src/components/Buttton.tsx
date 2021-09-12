import React from "react";

interface Props {
  onClick: () => void;
}

const Buttton: React.FC<Props> = (props) => {
  return <button {...props}>Click</button>;
};

export default Buttton;
