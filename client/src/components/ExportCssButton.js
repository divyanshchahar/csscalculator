import fileIcon from "../assets/file_save_icon.svg";

function ExportCssButton() {
  return (
    <div className="image-button">
      <img src={fileIcon} alt="icon of a file" className="icon" />
    </div>
  );
}

export default ExportCssButton;
