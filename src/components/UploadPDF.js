import React, { useState } from "react";
import { Button, Input, Typography } from "@mui/material";

const UploadPDF = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // Send the selected file to your server or API for processing.
    
    setIsLoading(false);
  };

  return (
    <div>
      <Typography variant="h6">Upload a PDF file</Typography>
      <Input type="file" accept="application/pdf" onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit} disabled={isLoading}>
        Upload
      </Button>
      {isLoading && <Typography variant="body1">Uploading...</Typography>}
    </div>
  );
};

export default UploadPDF;