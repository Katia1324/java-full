export const createCalculator = () => {
    let num = 0;
  const add = (a) => {
    num = num + a;
  };
  const decrease = (b) => {
    num = num - b;
  };
  const reset = () => {
    num = 0;
  };
  const getMemo = () => {
    return num;
  };
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const mess1 = createCalculator();
mess1.add(5);
mess1.decrease(5);
mess1.reset(5);
mess1.getMemo(5);

