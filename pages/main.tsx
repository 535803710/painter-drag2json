import Left from "./compontents/Left";
import { Right } from "./compontents/Right";
import { Content } from "./compontents/Content";

export const Index = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-128 ">
          <Left></Left>
        </div>
        <div className="w-28 flex justify-center">
          <Content></Content>
        </div>
      </div>
    </>
  );
};
