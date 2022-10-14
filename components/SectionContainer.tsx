import cn from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: Props) => {
  return (
    <section className={cn(`container mx-auto px-8 `, className)}>
      {children}
    </section>
  );
};
export default SectionContainer;
