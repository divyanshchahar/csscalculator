// IMPORTING FUNCTIONALITY
import HandleGenerateFile from "../utils/HandleGenerateFile";

// IMPORTING ASSETS``
import fileIcon from "../assets/file_save_icon.svg";

/**
 * Componenet to render export button
 * @returns {HTML}
 */

function ExportCssButton() {
  return (
    <div className="image-button" onClick={() => HandleGenerateFile()}>
      <img src={fileIcon} alt="icon of a file" className="icon" />
    </div>
  );
}

export default ExportCssButton;
