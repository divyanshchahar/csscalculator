import BrandingContainer from "../components/BrandingContainer";
import ExportCssButton from "../components/ExportCssButton";

/**
 * layout to render Top NAvigation Bar
 * @returns {HTML componenets}
 */

function TopNavBar() {
  return (
    <div className="top-nav-bar">
      <BrandingContainer />
      <ExportCssButton />
    </div>
  );
}

export default TopNavBar;
