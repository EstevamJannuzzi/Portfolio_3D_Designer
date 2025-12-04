import React from 'react';

const Iframe = ({
  src,
  title,
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen',
  referrerPolicy = 'strict-origin-when-cross-origin',
  allowFullScreen = true,
  wrapperClass = 'relative flex justify-center items-center w-full',
  width = 'w-[380px] sm:w-[230px] lg:w-[320px] xl:w-[360px]',
  height = 'h-[164px] sm:h-[124px] lg:h-[182px] xl:h-[180px]',
  className = 'rounded-xl z-10',
}) => {
  return (
    <div className={`${wrapperClass} ${width} ${height}`}>
      <iframe
        src={src}
        title={title}
        allow={allow}
        referrerPolicy={referrerPolicy}
        allowFullScreen={allowFullScreen}
        frameBorder="0"
        className={`w-full h-full ${className}`}
      />
    </div>
  );
};

export default Iframe;
