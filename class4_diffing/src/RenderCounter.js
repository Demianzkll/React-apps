import React, {useRef} from "react";

function useRenderCounter(){
    const renders = React.useRef(0);
    renders.current++;
    return renders.current;
}

export default useRenderCounter