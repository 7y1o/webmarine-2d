import { Vector1 } from "./core/vector/Vector1";
import { Vector2 } from "./core/vector/Vector2";
import { Observable } from "./core/observer/Observable";

import { Renderer } from "./render/Renderer";
import { RenderScene } from "./render/RenderScene";
import { RenderTarget } from "./render/RenderTarget";
import { RenderCamera } from "./render/RenderCamera";

// Exports
export default {
    Core: { Vector1, Vector2, Observable },
    Render: { Renderer, RenderScene, RenderTarget, RenderCamera }
};
