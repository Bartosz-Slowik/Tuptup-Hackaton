import BeerIcon from "../../assets/svg/beer.svg";
import SportIcon from "../../assets/svg/chop.svg";
import DefaultIcon from "../../assets/svg/pin.svg";

interface Props {
  type: string;
  className?: string;
}

export default function MapIcon({ type, className }: Props) {
  switch (type) {
    case "event":
      return <img src={DefaultIcon} alt="Icon" className={className} />;
    case "party":
      return <img src={BeerIcon} alt="Icon" className={className} />;
    default:
      return <img src={SportIcon} alt="Icon" className={className} />;
  }
}
