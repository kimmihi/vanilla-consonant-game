let currentObserver;

export const observe = (cb) => {
  currentObserver = cb;
  cb();
  currentObserver = undefined;
};

export const observable = (state) => {
  const stateKeys = Object.keys(state);

  stateKeys.forEach((key) => {
    let value = state[key];
    const observers = new Set();

    Object.defineProperty(state, key, {
      get() {
        if (currentObserver) {
          observers.add(currentObserver);
        }
        return value;
      },
      set(newValue) {
        value = newValue;
        observers.forEach((observer) => observer());
      },
    });
  });

  return state;
};
