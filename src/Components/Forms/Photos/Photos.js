// import React, { useState, useReducer, Fragment } from "react";
// import { Redirect } from "react-router-dom";
// import Photoss from "./PhotoContainer";

// renderRedirect = () => {
//   if (redirect) {
//     return <Redirect to="/photos" />;
//   }
// };
// const Photos = () => {
//   const [redirect, setRedirect] = useState(false, true);
//   const Reducer= (state,action) =>{switch(action){case'kit':return(value)}}
//   const [kit,dispatch] = useReducer(Reducer,state)
//   return (
//     <div>
//       <div className="images__upload">
//         <h3 className="label">Hostel Pics</h3>
//         {renderRedirect()}
//         <button className="btn__pics" onClick={setRedirect} target="_blank">
//           Add Hostel Pictures
//         </button>
//       </div>
//       <div className="images__upload">
//         {/* <label htmlFor="Kitchen Pics"><b>Kitchen Pics</b></label> */}
//         {/* <input style={{display:"none"}} type="file" onChange={this.fileHandler}
//                     ref={fileInput=>this.fileInput=fileInput} /> */}
//         <h3 className="label">Kitchen Pics</h3>
//         {renderRedirect()}
//         <button
//           className="btn__pics"
//           id="kitchen"
//           onClick={() =>
//             dispatch(
//               { type: "kitchen" },
//               {
//                 value: (
//                   <>
//                     <h3>Kitchen Pics</h3>,
//                     <Photoss />
//                   </>
//                 ),
//               }
//             )
//           }
//         >
//           {" "}
//           Add Kitchen Pictures{" "}
//         </button>
//       </div>
//       <div className="images__upload">
//         <h3 className="label">Menu Pics</h3>
//         {renderRedirect()}
//         <button className="btn__pics" onClick={setRedirect}>
//           Add Menu Pictures
//         </button>
//       </div>

//       <div>
//         <button className="btn_pics_submit">Save And Continue</button>
//       </div>
//     </div>
//   );
// };

// export default Photos;
