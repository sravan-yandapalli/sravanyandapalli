interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      
      {/* SMALL LABEL LINE */}
      <div className="w-16 h-1 bg-blue-500 mb-4 mx-auto lg:mx-0"
        style={{ marginLeft: center ? "auto" : "", marginRight: center ? "auto" : "" }}
      />

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto lg:mx-0">
          {subtitle}
        </p>
      )}
    </div>
  );
}
