
export const Cross = () => {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 48 48"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 0h48v48h-48z" fill="#fff" fillOpacity=".01" />
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path d="m8 8 32 32" />
        <path d="m8 40 32-32" />
      </g>
    </svg>
  );
};
