import { all, createLowlight } from "lowlight";

import bash from "highlight.js/lib/languages/bash.js";
import yaml from "highlight.js/lib/languages/yaml.js";
import md from "highlight.js/lib/languages/markdown.js";

const lowlight = createLowlight(all);

//? languages 
lowlight.register("bash", bash);
lowlight.register("yaml", yaml);
lowlight.register("markdown", md);

//? aliases
lowlight.registerAlias({ bash: ["sh", "shell", "zsh", "fish"] });
lowlight.registerAlias({ yaml: ["yml"] });
lowlight.registerAlias({ markdown: ["md"] });

export { lowlight };
