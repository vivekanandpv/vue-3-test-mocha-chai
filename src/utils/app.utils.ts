export const square = (n: number): number => {
  return n * n;
};

export const areOfCircle = (r: number): number => {
  if (r < 0) {
    throw new Error('negative radius is not allowed');
  }

  return 3.1415926535 * r * r;
};

export const getPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Good day!');
    }, 1000);
  });
};
