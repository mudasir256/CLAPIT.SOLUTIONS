type Props = {
  className?: string;
};
const ArrowIcon = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="24"
    viewBox="0 0 14 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3431 13.5853C14.219 12.7095 14.219 11.2896 13.3431 10.4138L3.82843 0.899042C2.95262 0.0232362 1.53266 0.0232361 0.656854 0.899042C-0.218951 1.77485 -0.218951 3.19481 0.656854 4.07061L8.58579 11.9995L0.656854 19.9285C-0.218951 20.8043 -0.218951 22.2242 0.656854 23.1C1.53266 23.9759 2.95262 23.9759 3.82843 23.1L13.3431 13.5853Z"
      fill="#f84b07"
    ></path>
  </svg>
);

export default ArrowIcon;
