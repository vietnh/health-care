import { Affix, AffixProps, Transition } from "@mantine/core";
import { Scroll } from "../Icons";
import { useWindowScroll } from "@mantine/hooks";

const ScrollToTop: React.FC<AffixProps> = (props) => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix {...props}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {() => (<Scroll onClick={() => scrollTo({ y: 0 })} />)}
      </Transition>
    </Affix>
  );
}

export default ScrollToTop;