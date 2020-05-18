const SPACE_KEY = 32;
const RIGHT_ARROW_KEY = 39;
const DOWN_ARROW_KEY = 40;

export const keyDownUpdate = (cb) => {
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case SPACE_KEY:
      case RIGHT_ARROW_KEY:
      case DOWN_ARROW_KEY:
        cb();
        break;
      default:
        break;
    }
  };
  const effect = () => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  };

  return effect;
};
