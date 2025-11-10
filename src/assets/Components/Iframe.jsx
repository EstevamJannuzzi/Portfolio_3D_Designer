import React from 'react';

const Iframe = ({
  src,
  title = 'Video',
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen',
  referrerPolicy = 'strict-origin-when-cross-origin',
  allowFullScreen = true,
  wrapperClass = 'relative flex justify-center items-center w-full',
  width = 'w-full',
  height = 'h-[400px]',
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
