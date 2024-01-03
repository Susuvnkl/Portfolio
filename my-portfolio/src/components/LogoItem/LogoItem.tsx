import styles from "./LogoItem.module.scss";
import CssIcon from "../../components/common/Icons/CssIcon/CssIcon";
import GitIcon from "../../components/common/Icons/GitIcon/GitIcon";
import BashIcon from "../../components/common/Icons/BashIcon/BashIcon";
import HtmlIcon from "../../components/common/Icons/HtmlIcon/HtmlIcon";
import JiraIcon from "../../components/common/Icons/JiraIcon/JiraIcon";
import SassIcon from "../../components/common/Icons/SassIcon/SassIcon";
import FigmaIcon from "../../components/common/Icons/FigmaIcon/FigmaIcon";
import ReactIcon from "../../components/common/Icons/ReactIcon/ReactIcon";
import ReduxIcon from "../../components/common/Icons/ReduxIcon/ReduxIcon";
import NodeJs1Icon from "../../components/common/Icons/NodeJs1Icon/NodeJs1Icon";
import FireBaseIcon from "../../components/common/Icons/FireBaseIcon/FireBaseIcon";
import LightroomIcon from "../../components/common/Icons/LightroomIcon/LightroomIcon";
import PhotoshopIcon from "../../components/common/Icons/PhotoshopIcon/PhotoshopIcon";
import TypeScriptIcon from "../../components/common/Icons/TypeScriptIcon/TypeScriptIcon";
import SQLIcon from "../common/Icons/SQLIcon/SQLIcon";
import NoSQLIcon from "../common/Icons/NoSQLIcon/NoSQLIcon";
import JSIcon from "../common/Icons/JSIcon/JSIcon";
import PremiereIcon from "../common/Icons/PremierIcon/PremiereIcon";

interface LogoItemProps {
  LogoName: string;
}

function LogoItem(props: LogoItemProps) {
  const { LogoName } = props;
  return (
    <div className={styles.LogoItem}>
      {LogoName === "Css" && <CssIcon />}
      {LogoName === "Git" && <GitIcon />}
      {LogoName === "Bash" && <BashIcon />}
      {LogoName === "Html" && <HtmlIcon />}
      {LogoName === "Jira" && <JiraIcon />}
      {LogoName === "Sass" && <SassIcon />}
      {LogoName === "Figma" && <FigmaIcon />}
      {LogoName === "React" && <ReactIcon />}
      {LogoName === "Redux" && <ReduxIcon />}
      {LogoName === "Node.Js" && <NodeJs1Icon />}
      {LogoName === "Premiere" && <PremiereIcon />}
      {LogoName === "FireBase" && <FireBaseIcon />}
      {LogoName === "Lightroom" && <LightroomIcon />}
      {LogoName === "Photoshop" && <PhotoshopIcon />}
      {LogoName === "TypeScript" && <TypeScriptIcon />}
      {LogoName === "SQL" && <SQLIcon />}
      {LogoName === "No-SQL" && <NoSQLIcon />}
      {LogoName === "JS" && <JSIcon />}

      <h1>{LogoName}</h1>
    </div>
  );
}

export default LogoItem;
