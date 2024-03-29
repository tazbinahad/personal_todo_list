const Checked = (props: any) => {
  return (
    <svg
      {...props}
      height={32}
      viewBox="0 0 32 32"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m13 24-9-9 1.414-1.414 7.586 7.585 13.586-13.585 1.414 1.414z" />
      <path d="m0 0h32v32h-32z" fill="none" />
    </svg>
  );
};

export default Checked;
