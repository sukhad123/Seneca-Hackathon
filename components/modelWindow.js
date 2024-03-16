import React from 'react';

// const Model = ({ onClose, children }) => {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
         
         
        
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Model;


 
export default function Model(props) {
  const onClose = props.onClose; // Retrieve onClose from props
  const title = props.title;//get the title
  const population = props.population;//get the population

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          
         <p className = "text-indigo-900">{title}</p>
         <p className = "text-indigo-900">Population Density: {population}</p>

        </div>
      </div>
    </>
  );
}

