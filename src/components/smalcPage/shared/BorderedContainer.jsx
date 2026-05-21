import React from 'react';
import SectionTitle from './SectionTitle';

const BorderedContainer = ({
  children,
  className = '',
  title,
  titlePosition = 'left', // 'left' | 'center'
  titleClassName = '',
  titleProps = {},
}) => {
  const positionClass = titlePosition === 'center'
    ? 'left-1/2 -translate-x-1/2'
    : 'left-6 md:left-8';
  const paddingTop = title ? 'pt-12 md:pt-14' : '';

  return (
    <div className="relative w-full">
      {title && (
        <div className={`absolute -top-8 md:-top-11 ${positionClass} z-10`}>
          <SectionTitle
            centered={titlePosition === 'center'}
            noMargin
            className={titleClassName}
            {...titleProps}
          >
            {title}
          </SectionTitle>
        </div>
      )}

      <div className={`border-4 border-[#2800AD]/60 rounded-3xl p-8 md:p-12 bg-[#01072E]/40 backdrop-blur-sm ${paddingTop} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default BorderedContainer;
