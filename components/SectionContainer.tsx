import cn from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: Props) => {
  return (
    <div className={cn(`container mx-auto px-8 `, className)}>{children}</div>
  );
};
export default SectionContainer;
