import { RefObject, useEffect, useRef, useMemo } from "react";
import { Platform, findNodeHandle } from "react-native";
import type { ScrollView } from "react-native";
import mergeRefs from "react-merge-refs";

type Props<Scrollable extends ScrollView = ScrollView> = {
  cursor?: string;
  outerRef?: RefObject<Scrollable>;
};

export function useDraggableScroll<Scrollable extends ScrollView = ScrollView>({
  outerRef,
  cursor = "grab",
}: Props<Scrollable> = {}) {
  const ref = useRef<Scrollable>(null);

  useEffect(
    function listeners() {
      if (Platform.OS !== "web" || !ref.current) {
        return;
      }
      const slider = findNodeHandle(ref.current) as unknown as HTMLDivElement;
      if (!slider) {
        return;
      }

      const wheel = (e: WheelEvent) => {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
        slider.style.cursor = "ew-resize";
      };
      slider.addEventListener("wheel", wheel);

      return () => {
        slider.removeEventListener("wheel", wheel);
      };
    },
    [cursor]
  );

  const refs = useMemo(
    () => mergeRefs(outerRef ? [ref, outerRef] : [ref]),
    [ref, outerRef]
  );

  return {
    refs,
  };
}
