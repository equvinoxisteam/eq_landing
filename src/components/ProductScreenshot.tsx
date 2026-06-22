type ProductScreenshotProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  accentClass?: string;
};

export default function ProductScreenshot({
  src,
  alt,
  title,
  description,
  accentClass = 'from-blue-400 to-cyan-400',
}: ProductScreenshotProps) {
  return (
    <section className="py-16 border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See It{' '}
              <span className={`bg-gradient-to-r ${accentClass} bg-clip-text text-transparent`}>In Action</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />
            <img
              src={src}
              alt={alt}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">{title}</p>
        </div>
      </div>
    </section>
  );
}
