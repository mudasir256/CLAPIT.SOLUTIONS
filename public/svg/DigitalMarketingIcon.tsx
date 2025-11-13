type Props = {
  className?: string;
};
const DigitalMarketingIcon = ({ className }: Props) => (
  <svg
    className={className}
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="80" fill="#f84b07" opacity="0.1" />

    <path
      d="M60 90 L110 60 L120 70 L80 100 Z"
      fill="#f84b07"
      stroke="#f84b07"
      strokeWidth="2"
    />
    <rect x="80" y="95" width="10" height="40" fill="#101012" />
    <circle cx="85" cy="135" r="7" fill="#f84b07" />

    <path
      d="M125 70 Q140 60, 155 70"
      stroke="#f84b07"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M130 80 Q145 70, 160 80"
      stroke="#f84b07"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M135 90 Q150 80, 165 90"
      stroke="#f84b07"
      strokeWidth="2"
      fill="none"
    />

    <polyline
      points="50,150 80,130 110,140 140,100 170,120"
      fill="none"
      stroke="#101012"
      strokeWidth="2"
    />
    <circle cx="50" cy="150" r="3" fill="#f84b07" />
    <circle cx="80" cy="130" r="3" fill="#f84b07" />
    <circle cx="110" cy="140" r="3" fill="#f84b07" />
    <circle cx="140" cy="100" r="3" fill="#f84b07" />
    <circle cx="170" cy="120" r="3" fill="#f84b07" />

    <circle cx="30" cy="50" r="10" fill="#f84b07" />
    <circle cx="50" cy="30" r="10" fill="#f84b07" />
    <circle cx="70" cy="50" r="10" fill="#f84b07" />
  </svg>
);

export default DigitalMarketingIcon;
