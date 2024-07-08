import { createContext, useCallback, useRef, useState } from "react";
import "./FlixModalProvider.css";
import { Cross1Icon } from "@radix-ui/react-icons";
import { FlixType } from "../Carousel/Carousel.model";
import ModalContent from "./ModalContent";
import useLanguageContext from "../LanguageSelector/hooks";

export type ModalProps = {
  children;
};
export type ContextType = {
  (shownItem: FlixType): void;
};

export const FlixModalContext = createContext<ContextType | undefined>(
  undefined,
);

function FlixModalProvider({ children }: ModalProps) {
  const [selectedFlix, setSelectedFlix] = useState<FlixType>();
  const { selectedLanguage } = useLanguageContext();

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleOnClose = (): void => {
    setSelectedFlix(undefined);
    dialogRef.current?.close();
  };

  const openDialog = useCallback((item: FlixType): void => {
    setSelectedFlix(item);
    dialogRef.current?.showModal();
  }, []);

  return (
    <FlixModalContext.Provider value={openDialog}>
      <dialog
        ref={dialogRef}
        onClick={handleOnClose}
        onKeyDown={handleOnClose}
        className="no-scrollbar"
        role="presentation"
      >
        <div className="dialog-container">
          <div className="dialog-container__button-wrapper">
            <button
              onClick={handleOnClose}
              type="button"
              data-testid="closeModalButton"
              aria-label="Close"
            >
              <Cross1Icon color="white" width="14" height="14" />
            </button>
          </div>

          {selectedFlix && (
            <ModalContent flix={selectedFlix} language={selectedLanguage} />
          )}
        </div>
      </dialog>

      {children}
    </FlixModalContext.Provider>
  );
}

export default FlixModalProvider;
