type Props = {
  className?: string;
};
const PlayIcon = ({ className }: Props) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 3L19 12L5 21V3Z"
      fill=""
      stroke="#f84b07"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlayIcon;
