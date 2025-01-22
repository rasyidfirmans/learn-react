/* eslint-disable react/prop-types */

// import React from "react";

// defining a component using class component concept
// class Button extends React.Component {
//   render() {
//     return (
//       <button
//       className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//       type="submit"
//       >
//         Buy now
//       </button>
//     );
//   }
// }

// defining a component using class component concept
function Button(props) {
  // giving default value using destructuring concept
  const { children = "Button", classname = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button;
