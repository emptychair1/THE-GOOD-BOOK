# NUMERICAL PRESS TOOL — FROZEN

Status: APPROVED / DO NOT MODIFY

Canonical tool: `lab/numerical-press-tool.html`

Approved visible label: `PRESS TOOL · V2 · ace45175`

Frozen recipe:
- Canonical V4.1 geometry
- 45% substrate
- 3.5px Ultra Fine
- Pi digit glyph field
- Current source sampling, occupancy, weights, alpha, and rendering math
- Current single-frame preview registration fix
- Current local upload and flattened PNG save behavior

Approval basis: Josh visually approved the rendered apple/hand result on 2026-09-30 after the preview-layer registration fix.

## Rule

Do not alter the canonical renderer, renderer math, layout registration, sampling, glyph behavior, substrate opacity, cell size, save behavior, or visible version label unless Josh explicitly says to unfreeze or revise this renderer.

Any future experiment must be made in a separate file/version and must not overwrite `lab/numerical-press-tool.html`.

Frozen after repository commit `d988907a22706f638106f5d73ee3a6ee71255860`.