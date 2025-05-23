import { useState } from "react";

export function useSmileyFace (initialVal) {
    const [state, setState] = useState(initialVal)

    function handleChange (val) {
        const emo = "\u{1F60A}"
        let result = val; result = result.replace(emo, "")
        setState(result + emo)
    }

    const inputProps = {
        value: state,
        onChange: handleChange
    };

  return inputProps;
}
