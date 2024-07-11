import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(fileUrl, {
        responseType: "blob",
      });
      fileDownload(response.data, fileName);
    } catch (error) {
      console.error("Error downloading the file", error);
    }
  };

  return (
    <div className="cv-button">
      <button id="buttonCV" onClick={handleDownload} className="download-btn">
        Télécharger mon CV
      </button>
    </div>
  );
};

export default DownloadButton;
