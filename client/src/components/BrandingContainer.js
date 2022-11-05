import brandImage from "../assets/calculator_brand_icon.svg";

function BrandingContainer() {
  return (
    <div className="branding">
      <img src={brandImage} alt="icon for branding" className="brand-image" />
      CSS Calculator
    </div>
  );
}

export default BrandingContainer;
