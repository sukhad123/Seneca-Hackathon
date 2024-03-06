import React, { useState } from 'react';

const MapWithMarker = () => {
  const [showModal, setShowModal] = useState(false);

  const handleMarkerClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Your map component with marker */}
      <div onClick={handleMarkerClick}>Map Content Here</div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Marker Details</h2>
            <p>Details about the marker...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapWithMarker;
