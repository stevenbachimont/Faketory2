import BanniereTest from "./BanniereTest";
import HoroscopeTest from "./HoroscopeTest";
import ImagesTest from "./ImagesTest";
import "./Banniere.css";

function Banniere() {
  return (
    <div className="banniere">
      <HoroscopeTest />
      <BanniereTest />
    </div>
  );
}

export default Banniere;
