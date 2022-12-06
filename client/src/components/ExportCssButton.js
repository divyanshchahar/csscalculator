import fileIcon from "../assets/file_save_icon.svg";
import HandleGenerateFile from "../utils/HandleGenerateFile";

/**
 * componenet to render export button
 * @returns {HTML Componenet}
 */

function ExportCssButton() {
  return (
    <div className="image-button" onClick={() => HandleGenerateFile()}>
      <img src={fileIcon} alt="icon of a file" className="icon" />
    </div>
  );
}

export default ExportCssButton;
