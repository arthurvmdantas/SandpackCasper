import { createRoot } from "react-dom/client";
import { Sandpack } from '@codesandbox/sandpack-react'

globalThis.renderEditor = function(selector, options) {
    const element = document.querySelector(selector);

    if(element) {
        const root = createRoot(element);
        const editor = <Sandpack {...options} />
        root.render(editor);
    }
}