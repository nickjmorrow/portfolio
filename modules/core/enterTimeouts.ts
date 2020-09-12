const INITIAL = 200;
const DELAY = 100;

const raw = {
  about: 0,
  projects: 1,
  experiences: 2,
  contact: 3,
  resume: 4,
  name: 5
};

type T = typeof raw;

type Initial = { [P in keyof T]: number };

const enterTimeoutsBuilder = (): Initial => {
  const initial: Initial = { ...raw };
  Object.keys(initial).forEach(key => {
    initial[key] = INITIAL + DELAY * initial[key];
  });
  return initial as Initial;
};

export const enterTimeouts = enterTimeoutsBuilder();
