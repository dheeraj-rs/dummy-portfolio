import "../../styles/components/section.scss";

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className="section" {...props}>
      {children}
    </div>
  );
};

export default Section;
