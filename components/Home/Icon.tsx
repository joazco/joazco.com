const paths = {
  arrow: "M6 18 18 6M6 6h12v12",
  down: "m6 6 12 12M6 18h12V6",
  menu: "M4 8h16M4 16h16",
  close: "m6 6 12 12M6 18 18 6",
  copy: "M8 8h12v12H8zM16 8V4H4v12h4",
};

const Icon = ({ name }: { name: keyof typeof paths }) => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d={paths[name]} />
  </svg>
);

export default Icon;
