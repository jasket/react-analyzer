import { memo, useContext } from "react";
import { AppContext } from "components/app/App";
import RenderComponent from "components/2_memo/RenderComponent";

const MemoRenderComponent = memo(RenderComponent);

const MemoPage = () => {
  // eslint-disable-next-line
  const seconds = useContext(AppContext);

  const someProps = ""; // string, number, boolean.

  return (
    <>
      <RenderComponent someProps={someProps} />
      <div className="border-amber-200 border-2 inline-block">
        <MemoRenderComponent someProps={someProps} />
      </div>
    </>
  );
};

export default MemoPage;
