import { DEC, INC } from "../type/type";

const increaseNumber = () => {
  return { type: INC };
};

const decreaseNumber = () => {
  return { type: DEC };
};

export { increaseNumber, decreaseNumber };
