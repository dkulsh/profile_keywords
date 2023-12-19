import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
// import Tabs from '@mui/material/Tabs';
import Tab from "@mui/material/Tab";
import "./CenteredTabs.css";
import WordCloud from "./WordCloud";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import PsychologyIcon from "@mui/icons-material/Psychology";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { divideSizeBy } from "./Utils";

export default function CenteredTabs(props) {
  const {
    techwords,
    techReduceSizeBy = 1,
    conceptwords,
    conceptReduceSizeBy = 1,
    softskillswords,
    softSkillsReduceSizeBy = 1,
    miscwords,
    miscReduceSizeBy = 1,
    fontScale = 5,
  } = props;

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // return (
  //     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
  //         <Tabs value={value} onChange={handleChange} centered >

  //             <Tab label="Item One" className='tabButton' />
  //             <Tab label="Item Two" className='tabButton' />
  //             <Tab label="Item Three" className='tabButton' />

  //         </Tabs>
  //     </Box>
  // );

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} centered>
            <Tab
              label="Technology"
              value="1"
              className="tabButton"
              icon={<KeyboardIcon />}
            />
            <Tab
              label="Concepts"
              value="2"
              className="tabButton"
              icon={<PsychologyIcon />}
            />
            <Tab
              label="Soft skills"
              value="3"
              className="tabButton"
              icon={<RecordVoiceOverIcon />}
            />
            <Tab
              label="Other Misc"
              value="4"
              className="tabButton"
              icon={<MiscellaneousServicesIcon />}
            />
          </TabList>
        </Box>

        <TabPanel value="1">
          {/* <WordCloud text={TechKeywords} fontScale={5} /> */}
          {/* <h3>Larger a word, higher its frequency</h3> */}
          <WordCloud
            text={divideSizeBy(techwords, techReduceSizeBy)}
            fontScale={fontScale}
          />
        </TabPanel>

        <TabPanel value="2">
          {/* <WordCloud text={divideSizeBy(ConceptKeywords, 10)} fontScale={5} /> */}
          <WordCloud
            text={divideSizeBy(conceptwords, conceptReduceSizeBy)}
            fontScale={fontScale}
          />
        </TabPanel>

        <TabPanel value="3">
          {/* <WordCloud text={divideSizeBy(SoftSkillsKeywords, 6)} fontScale={5} /> */}
          <WordCloud
            text={divideSizeBy(softskillswords, softSkillsReduceSizeBy)}
            fontScale={fontScale}
          />
        </TabPanel>

        <TabPanel value="4">
          {/* <WordCloud text={divideSizeBy(MiscKeywords, 5)} fontScale={5} /> */}
          {/* <h3>Most words might have the similar frequencies</h3> */}
          <WordCloud
            text={divideSizeBy(miscwords, miscReduceSizeBy)}
            fontScale={fontScale}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
