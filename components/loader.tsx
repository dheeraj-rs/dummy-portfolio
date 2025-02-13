import React, { useEffect } from "react";
import Logo from "../public/icons/logo";
import { introLogoAnimate } from "../utils/animations";

interface LoaderProps {
  finishLoading: () => void;
}

const Loader: React.FC<LoaderProps> = (props) => {
  useEffect(() => {
    introLogoAnimate(props.finishLoading);
  }, []);

  return (
    <div className="loader">
      <Logo className="loader__logo" />
    </div>
  );
};

export default Loader;
