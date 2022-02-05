import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Pallet = ({ color }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (isCopied) setIsCopied(false);
    }, 2000);
  }, [isCopied]);
  return (
    <CopyToClipboard text={`#${color}`} onCopy={handleCopy}>
      <div className="pallet">
        <div className="color" style={{ backgroundColor: `#${color}` }}>
          {isCopied && <small>copied</small>}
        </div>
        <div className="color-code">{color.toUpperCase()}</div>
      </div>
    </CopyToClipboard>
  );
};

export default Pallet;
