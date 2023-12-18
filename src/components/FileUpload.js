import { useDropzone } from "react-dropzone";
import React, { useState, useCallback } from "react";
import "./FileUpload.css";
import axios from "axios";
import OutlinedCard from "./OutlinedCard";
import CircularProgress from "@mui/material/CircularProgress";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";
import Snackbar from '@mui/material/Snackbar';
import CustomizedSnackbars from "./CustomizedSnackbars";
import { green, red } from '@mui/material/colors';


const FileUpload = () => {

  // Radio buttons change
  const [tech, setTech] = useState("Java");

  const handleChange = (event) => {
    setTech(event.target.value);

    setUploadedFiles([]);
    setKeywordsAvailable(false);
  };

  // Error message snackbar change
  const [openError, setOpenError] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const handleCloseInfo = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenInfo(false);
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [areKeywordsAvailable, setKeywordsAvailable] = useState(false);
  const [loading, setLoading] = useState(false);

  const [foundKeywords, setFoundKeywords] = useState([]);
  const [techMissingKeywords, setTechMissingKeywords] = useState([]);
  const [conceptsMissingKeywords, setConceptsMissingKeywords] = useState([]);
  const [softSkillsMissingKeywords, setSoftSkillsMissingKeywords] = useState(
    []
  );
  const [miscMissingKeywords, setMiscMissingKeywords] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);

      acceptedFiles.forEach((file) => {
        const formData = new FormData();
        formData.append("file", file);

        const queryParams = { tech: tech };

        setLoading(true);

        axios
          .post(
            "https://java-dot-profilekeywords.el.r.appspot.com/keywords_service/keywords/from_resume",
            // "http://localhost:8080/keywords_service/keywords/from_resume",
            formData,
            {
              params: queryParams,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            setFoundKeywords(response.data.foundKeywords);

            setTechMissingKeywords(response.data.missingKeywords.Tech);
            setConceptsMissingKeywords(response.data.missingKeywords.Concepts);
            setSoftSkillsMissingKeywords(
              response.data.missingKeywords.SoftSkills
            );
            setMiscMissingKeywords(response.data.missingKeywords.Misc);

            setKeywordsAvailable(true);
            setLoading(false);
            setOpenInfo(true);
          })
          .catch((error) => {
            setLoading(false);
            setOpenError(true)
            console.log(error);
          });
      });
    },
    [tech]
  );

  const pdfType = {
    "application/pdf": [".pdf"],
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: pdfType,
  });

  const foundColor = green[700];
  const missingTechColor = red[800];
  const missingConceptColor = red[700];
  const missingSoftSkillColor = red[600];
  const missingMiscColor = red[500];

  return (
    <div>
      <RowRadioButtonsGroup value={tech} handleChange={handleChange} />

      {/* <p>Selected Tech: {tech}</p> */}

      <section className="container">
        <div {...getRootProps()} className="fileUpload">
          <input {...getInputProps()} />
          <p>Drag n drop resume here or click to browse.</p>
          <em>(Only *.pdf files)</em>

          <ul>
            {uploadedFiles.map((file) => (
              <ul key={file.name}>{file.name}</ul>
            ))}
          </ul>
        </div>
      </section>

      {/* <SimpleSnackbar open={open} handleClose={handleClose}/> */}
      <CustomizedSnackbars open={openError} handleClose={handleClose} />

      <Snackbar
        open={openInfo}
        autoHideDuration={8000}
        onClose={handleCloseInfo}
        message="Want more functionality ? more tech domains ? ... plz comment on thread/ write back."
      />

      {loading ? (
        // Show loading icon when loading is true
        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // height: "100vh",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <></>
      )}

      {areKeywordsAvailable ? (
        <div className="cardsHolder">
          <OutlinedCard
            heading="Found Keywords"
            color={foundColor}
            keywords={foundKeywords.join(", ")}
          />
          {/* <OutlinedCard /> */}

          {/* <h2>Found Keywords</h2>
          <ul>
            {foundKeywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul> */}

          <OutlinedCard
            heading="Missing Tech Keywords"
            color={missingTechColor}
            keywords={techMissingKeywords.join(", ")}
          />
          {/* <h3>Missing Tech Keywords</h3>
          <ul>
            {techMissingKeywords.map((keyword, index) => (
              <ul key={index}>{keyword}</ul>
            ))}
          </ul> */}

          <OutlinedCard
            heading="Missing Concepts Keywords"
            color={missingConceptColor}
            keywords={conceptsMissingKeywords.join(", ")}
          />
          {/* <h3>Missing Concepts Keywords</h3>
          <ul>
            {conceptsMissingKeywords.map((keyword, index) => (
              <ul key={index}>{keyword}</ul>
            ))}
          </ul> */}

          <OutlinedCard
            heading="Missing SoftSkills Keywords"
            color={missingSoftSkillColor}
            keywords={softSkillsMissingKeywords.join(", ")}
          />
          {/* <h3>Missing SoftSkills Keywords</h3>
          <ul>
            {softSkillsMissingKeywords.map((keyword, index) => (
              <ul key={index}>{keyword}</ul>
            ))}
          </ul> */}

          <OutlinedCard
            heading="Missing Misc Keywords"
            color={missingMiscColor}
            keywords={miscMissingKeywords.join(", ")}
          />
          {/* <h3>Missing Misc Keywords</h3>
          <ul>
            {miscMissingKeywords.map((keyword, index) => (
              <ul key={index}>{keyword}</ul>
            ))}
          </ul> */}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileUpload;
