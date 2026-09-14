const Iframe = ({
  src,
  wrapperClass = 'relative flex justify-center items-center w-full max-w-[380px] sm:max-w-[360px] lg:max-w-[420px] xl:max-w-[580px]',
  className = 'rounded-xl z-10',
}) => {
  return (
    <div className={`${wrapperClass} aspect-video`}>
      <video
        src={src}
        controls
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default Iframe;
