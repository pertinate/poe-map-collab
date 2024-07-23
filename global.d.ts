declare global {
  interface Window {
    electron: {
      getClientTxt: () => Promise<string>;
    };
  }
}

export {};
