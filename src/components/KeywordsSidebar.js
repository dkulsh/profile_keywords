import {
  Sidebar,
  Menu,
  // SubMenu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
// import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
// import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
// import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
// import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
// import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
// import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
// import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
// import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
// import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
// import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
// import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Routes, Route, Link } from "react-router-dom";
import CenteredTabs from "./CenteredTabs";
import "./KeywordsSidebar.css";
import JavaWords from "../data/Java";
import PythonWords from "../data/Python";
import GolangWords from "../data/Golang";
import NodeJSWords from "../data/NodeJS";
import CPPWords from "../data/C++";
import CustomIcons from "../assets/Icons";
import FileUpload from './FileUpload';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


function KeywordsSidebar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            component={<Link to="/" className="link" />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {/* {" "} */}
            <h3>Technology</h3>
          </MenuItem>

          <MenuItem
            icon={<CustomIcons.JavaIcon />}
            component={<Link to="java" className="link" />}
          >
            Java
          </MenuItem>

          <MenuItem
            icon={<CustomIcons.PythonIcon />}
            component={<Link to="python" className="link" />}
          >
            Python
          </MenuItem>

          <MenuItem
            icon={<CustomIcons.GolangIcon />}
            component={<Link to="golang" className="link" />}
          >
            Golang
          </MenuItem>

          <MenuItem
            icon={<CustomIcons.NodeJSIcon />}
            component={<Link to="nodejs" className="link" />}
          >
            Node JS
          </MenuItem>

          <MenuItem
            icon={<CustomIcons.CPPIcon />}
            component={<Link to="cpp" className="link" />}
          >
            C++
          </MenuItem>

          <MenuItem
            icon={<QuestionMarkIcon fontSize="large"/>}
            component={<Link to="findYours" className="link" />}
          >
            Find Yours ...
          </MenuItem>


        </Menu>
      </Sidebar>

      <section style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="java" element={<Java />} />
          <Route path="python" element={<Python />} />
          <Route path="golang" element={<Golang />} />
          <Route path="nodejs" element={<NodeJS />} />
          <Route path="cpp" element={<CPP />} />
          <Route path="findYours" element={<YourKeywords />} />
        </Routes>
      </section>

      {/* <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main> */}
    </div>
  );

  // return (
  //   <div style={{ display: "flex", height: "100vh" }}>
  //     <Sidebar className="app">
  //       <Menu>
  //         <MenuItem component={<Link to="/" className="link" />}
  //                   className="menu1"
  //                   icon={<MenuRoundedIcon />}>
  //           <h2> QUICKPAY</h2>
  //         </MenuItem>

  //         <MenuItem component={<Link to="dashboard" className="link" />}
  //                   icon={<GridViewRoundedIcon />}> Dashboard </MenuItem>
  //         <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>

  //         <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
  //           <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
  //           <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
  //         </SubMenu>

  //         <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
  //           <MenuItem icon={<AccountBalanceRoundedIcon />}>
  //             Current Wallet
  //           </MenuItem>
  //           <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
  //         </SubMenu>

  //         <MenuItem component={<Link to="transactions" className="link" />}
  //                   icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>

  //         <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
  //           <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
  //           <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
  //           <MenuItem icon={<NotificationsRoundedIcon />}>
  //             Notifications
  //           </MenuItem>
  //         </SubMenu>

  //         <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
  //       </Menu>
  //     </Sidebar>
  //     {/* <h1>WELCOME TO QUICKPAY</h1> */}
  //     <section style={{ width: '100%' }}>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="dashboard" element={<Dashboard />} />
  //         <Route path="transactions" element={<Transactions />} />
  //       </Routes>
  //     </section>
  //   </div>
  // );
}

const Home = () => {
  return (
    <>
      <h1 className="header">Resume Keywords</h1>
      <h3>Top keywords for a job profile</h3>
      <p>
        Thousands of profiles have been fetched from multiple job sites.{" "}
        <br></br>
        <br></br>
        Profile data has then been analyzed by Machine Learning algorithms.
        And finally presented as a wordcloud.
      </p>

      <footer class="footer">
        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/YKUVbL0x4M2f/keyword">Keyword</a> icon by
        <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
      </footer>

    </>
  );
};

const Java = () => {
  return (
    <>
      {/* <h1 className="header"> DASHBOARD PAGE</h1> */}
      <h3>Java Profile Keywords</h3>
      <CenteredTabs
        techwords={JavaWords.TechKeywords}
        conceptwords={JavaWords.ConceptKeywords}
        softskillswords={JavaWords.SoftSkillsKeywords}
        miscwords={JavaWords.MiscKeywords}
      />
    </>
  );
};

const Python = () => {
  return (
    <>
      {/* <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1> */}
      <h3>Python profile keywords</h3>
      {/* <p>Lorem ipsum dolor sit amet...</p> */}
      <CenteredTabs
        techwords={PythonWords.TechKeywords}
        conceptwords={PythonWords.ConceptKeywords}
        softskillswords={PythonWords.SoftSkillsKeywords}
        miscwords={PythonWords.MiscKeywords}
      />
    </>
  );
};

const Golang = () => {
  return (
    <>
      {/* <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1> */}
      <h3>Golang profile keywords</h3>
      {/* <p>Lorem ipsum dolor sit amet...</p> */}
      <CenteredTabs
        techwords={GolangWords.TechKeywords}
        conceptwords={GolangWords.ConceptKeywords}
        softskillswords={GolangWords.SoftSkillsKeywords}
        miscwords={GolangWords.MiscKeywords}
      />
    </>
  );
};

const NodeJS = () => {
  return (
    <>
      {/* <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1> */}
      <h3>Node JS profile keywords</h3>
      <CenteredTabs
        techwords={NodeJSWords.TechKeywords}
        conceptwords={NodeJSWords.ConceptKeywords}
        softskillswords={NodeJSWords.SoftSkillsKeywords}
        miscwords={NodeJSWords.MiscKeywords}
      />
    </>
  );
};

const CPP = () => {
  return (
    <>
      {/* <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1> */}
      <h3>C++ profile keywords</h3>
      <CenteredTabs
        techwords={CPPWords.TechKeywords}
        conceptwords={CPPWords.ConceptKeywords}
        softskillswords={CPPWords.SoftSkillsKeywords}
        miscwords={CPPWords.MiscKeywords}
      />
    </>
  );
};

const YourKeywords = () => {
  return (
    <>
      {/* <h1 className="header">Find missing keywords from your resume ...</h1> */}
      <h2 className="header">Find missing keywords from your resume ...</h2>
      {/* <h3>What keywords is your resume missing ??</h3> */}
      <FileUpload />
    </>
  );
};

export default KeywordsSidebar;
