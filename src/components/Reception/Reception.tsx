import "./Reception.scss";

interface ReceptionProps {
  src: string;
}
export const Reception: React.FC<ReceptionProps> = ({ src }) => (
  <div className="pulkovo__reception reception">
    <img src={src} alt="reception" />
  </div>
);
