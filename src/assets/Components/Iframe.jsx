const Iframe = ({
  src,
  wrapperClass = 'relative flex justify-center items-center w-full',
  width = 'w-[380px] sm:w-[230px] lg:w-[320px] xl:w-[360px]',
  height = 'h-[164px] sm:h-[124px] lg:h-[182px] xl:h-[180px]',
  className = 'rounded-xl z-10',
}) => {
  return (
    <div className={`${wrapperClass} ${width} ${height}`}>
      <video
        src={src}
        controls
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default Iframe;
