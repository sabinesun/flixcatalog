import { useContext } from "react";
import { ContextType, FlixModalContext } from "./FlixModalProvider";

const useFlixModalContext = (): ContextType => {
  const context = useContext(FlixModalContext);
  if (context === undefined) {
    throw new Error(
      "`useItemDialogContext` must be used within a `ItemDialogProvider`",
    );
  }
  return context;
};

export default useFlixModalContext;
