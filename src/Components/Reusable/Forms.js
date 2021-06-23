import React, { Fragment, useState } from "react";
import "../../Styles/Forms.css";

const Forms = (props) => {
  const [value, setvalue] = useState("");

  return (
    <Fragment>
      <div className="each_div">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          id={props.id}
          type={props.type}
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        ></input>
      </div>
    </Fragment>
  );
};

export default Forms;

// import React, { Fragment, useState } from "react";

// const Forms = (props) => {
//   const [value, setvalue] = useState("");

//   return (
//     <Fragment>
//       <form>
//         <div >
//         <label htmlFor={props.id}>{props.label}</label>
//           <input
//             id={props.id}
//             type={props.type}
//             value={value}
//             onChange={(e) => setvalue(e.target.value)}
//           ></input>
//         </div>
//       </form>
//     </Fragment>
//   );
// };

// export default Forms;
