import { ReactNode, createContext, useState } from "react";
import styles from "./snackbar.module.css";

function Snackbar({
  message,
  onClick,
}: {
  message: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <div className={`inverse-surface ${styles.container}`} onClick={onClick}>
      <div className="inverse-primary-text label-large">{message}</div>
    </div>
  );
}

function SnackbarRoot({
  messages,
  onClick,
}: {
  messages: readonly string[];
  onClick: (message: string) => void;
}): JSX.Element {
  return (
    <div className={styles.region}>
      {messages.map((message) => (
        <Snackbar
          key={message}
          message={message}
          onClick={() => onClick(message)}
        />
      ))}
    </div>
  );
}

interface SnackbarController {
  push(message: string): void;
}

export const SnackbarContext = createContext<SnackbarController>({
  push: () => {},
});

export function SnackbarProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [queue, setQueue] = useState<string[]>([]);

  return (
    <SnackbarContext.Provider
      value={{
        push: (message) =>
          setQueue((currentQueue) => [...currentQueue, message]),
      }}
    >
      <SnackbarRoot
        messages={queue}
        onClick={(message) =>
          setQueue((currentQueue) => {
            const index = currentQueue.findIndex((value) => value === message);
            return currentQueue.toSpliced(index, 1);
          })
        }
      />
      {children}
    </SnackbarContext.Provider>
  );
}
