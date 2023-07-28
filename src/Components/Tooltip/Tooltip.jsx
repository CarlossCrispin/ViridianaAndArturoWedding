
import PropTypes from 'prop-types';
import { useState } from 'react';

const Tooltip = ({ content, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative inline-block w-full">
      <div
        className="p-2 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isTooltipVisible && (
        <div className="absolute z-10 w-24 p-1 px-4 text-xs text-center text-white bg-black border rounded-full opacity-75 border-slate-200 left-4">
          {content}
        </div>
      )}
    </div>
  );
};

// Prop validation para el componente Tooltip
Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;