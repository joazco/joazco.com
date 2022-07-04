import { useCallback } from "react";

declare const AOS: {
  init: () => void;
};
declare const $: any;

const useScroll = () => {
  const initVars = useCallback(() => {
    const $menuLinks = $("#joazco--header-navbar-right-links li");
    const $header = $(".joazco--header");
    return { $menuLinks, $header };
  }, []);

  const scrollTo = useCallback((scrollTop) => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop,
      },
      1000
    );
  }, []);

  const init = useCallback(() => {
    const { $menuLinks, $header } = initVars();
    $menuLinks.click(function () {
      const target = $(this).data("target");
      scrollTo($(`#${target}`).offset().top - $header.height());
    });
    $(".joazco--header-navbar-left").click(() => {
      scrollTo(0);
    });
    AOS.init();
  }, []);

  return init;
};

export default useScroll;
