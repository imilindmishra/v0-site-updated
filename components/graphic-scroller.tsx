/**
 * Wraps a wide diagram SVG so it never forces page-level horizontal scroll.
 * `minWidth` pins the graphic to a legible native-ish size; on narrow
 * viewports the outer div scrolls horizontally (contained, not page-wide),
 * on wider viewports the graphic already exceeds minWidth so nothing scrolls.
 * `data-lenis-prevent` keeps smooth scroll from swallowing horizontal gestures
 * made inside this container.
 */
export function GraphicScroller({ minWidth, children }: { minWidth: number; children: React.ReactNode }) {
  return (
    <div data-lenis-prevent className="overflow-x-auto overscroll-x-contain">
      <div style={{ minWidth }}>{children}</div>
    </div>
  )
}
