import fileIcon from "../assets/file_save_icon.svg";

function ExportCssButton() {
  return (
    <div className="small-image-button">
      <img src={fileIcon} alt="icon of a file" />
    </div>
  );
}

export default ExportCssButton;
