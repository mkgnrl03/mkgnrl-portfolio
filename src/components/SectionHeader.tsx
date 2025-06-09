type SectionHeaderProp = {
  heading: string;
  subHeading: string;
  children: React.ReactNode;
  className?: string;
  isLightMode?: boolean;
};

const SectionHeader = (props: SectionHeaderProp) => {
  return (
    <div className={`min-h-[40vh] w-full flex flex-col gap-12 ${props.className}`}>
      <div className="text-center text-sm px-6 sm:p-0 max-w-xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-2">
          {props.heading}
        </h2>
        <p
          className={`${
            props.isLightMode ? "text-primary/80" : "text-background/70"
          }`}>
          {props.subHeading}
        </p>
      </div>

      <div className="px-6">{props.children}</div>
    </div>
  );
};

export default SectionHeader;
