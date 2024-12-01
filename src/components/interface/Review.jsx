import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Header = () => (
  <div>
    <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl">What Our Clients are Saying</h2>
  </div>
);

function Card({ review, name, company }) {
  return (
    <div className="flex-none w-full md:w-1/3 p-4 h-[380px] sm:h-[300px] md:h-[480px] lg:h-[430px] xl:h-[380px]">
      <div className="bg-white rounded-lg p-6 flex flex-col justify-between gap-y-6 h-full">
        <div>
          <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.5636 24C21.9075 24 20.1367 23.1462 19.2513 21.4387C18.4292 19.668 18.1446 17.8024 18.3976 15.8419C18.6505 14.1976 19.1565 12.4901 19.9154 10.7194C20.6743 8.88537 21.6861 7.14624 22.9509 5.50197C24.279 3.85771 25.86 2.52964 27.694 1.51778C29.5913 0.505928 31.7731 0 34.2395 0C34.3027 0 34.2711 0.252965 34.1446 0.758895C34.0814 1.26482 33.9865 1.80237 33.86 2.37154C33.7968 2.87747 33.7652 3.13043 33.7652 3.13043C33.7652 3.13043 33.3857 3.25692 32.6268 3.50988C31.9312 3.69961 31.0774 4.11067 30.0656 4.74308C29.0537 5.31225 28.1051 6.13439 27.2197 7.20948C26.3976 8.28458 25.86 9.67589 25.6071 11.3834C25.7336 11.3202 25.8917 11.2885 26.0814 11.2885C26.2711 11.2885 26.4292 11.2885 26.5557 11.2885C28.3897 11.2885 29.781 11.8577 30.7296 12.996C31.7415 14.1344 32.0893 15.5889 31.7731 17.3597C31.5201 19.3202 30.698 20.9328 29.3067 22.1976C27.9786 23.3992 26.3976 24 24.5636 24ZM6.25529 24C3.59916 24 1.82841 23.1462 0.943036 21.4387C0.120902 19.668 -0.163683 17.8024 0.0892816 15.8419C0.342246 14.1976 0.848175 12.4901 1.60707 10.7194C2.36596 8.88537 3.37782 7.14624 4.64264 5.50197C5.9707 3.85771 7.55173 2.52964 9.38572 1.51778C11.283 0.505928 13.4648 0 15.9312 0C15.9944 0 15.9628 0.252965 15.8363 0.758895C15.7731 1.26482 15.6782 1.80237 15.5517 2.37154C15.4885 2.87747 15.4569 3.13043 15.4569 3.13043C15.4569 3.13043 15.0774 3.25692 14.3185 3.50988C13.6229 3.69961 12.7691 4.11067 11.7573 4.74308C10.7454 5.31225 9.79679 6.13439 8.91142 7.20948C8.08928 8.28458 7.55173 9.67589 7.29877 11.3834C7.42525 11.3202 7.58335 11.2885 7.77308 11.2885C7.9628 11.2885 8.1209 11.2885 8.24739 11.2885C10.0814 11.2885 11.4727 11.8577 12.4213 12.996C13.4332 14.1344 13.781 15.5889 13.4648 17.3597C13.2118 19.3202 12.3897 20.9328 10.9984 22.1976C9.67031 23.3992 8.08928 24 6.25529 24Z"
              fill="#AFC083"
            />
          </svg>
        </div>
        <p>{review}</p>
        <div>
          <div class="flex items-center ">
            <div class="border-t border-2 border-bugbug-150 flex-grow"></div>
            <span class="px-4 text-center sm:text-left flex-grow">{name}</span>
          </div>
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
}

function PrevButton() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="55" height="55" rx="7.5" stroke="#375845" />
      <path d="M34.9998 28H21.9998M26.9998 22L21.707 27.2929C21.3164 27.6834 21.3164 28.3166 21.707 28.7071L26.9998 34" stroke="#375845" stroke-linecap="round" />
    </svg>
  );
}

function NextButton() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="55" height="55" rx="7.5" stroke="#375845" />
      <path d="M21 28H34M29 22L34.2929 27.2929C34.6834 27.6834 34.6834 28.3166 34.2929 28.7071L29 34" stroke="#375845" stroke-linecap="round" />
    </svg>
  );
}

function Review() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const checkScrollState = useCallback(() => {
    if (!embla) return;
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", checkScrollState);
    embla.on("reInit", checkScrollState);
    checkScrollState();
  }, [embla, checkScrollState]);

  return (
    <div>
      <Header />
      <div className="flex items-center md:flex-row mt-4">
        <button className={`hidden mr-4 lg:block z-10 ${!canScrollPrev ? "opacity-50 cursor-default" : ""}`} onClick={() => embla && embla.scrollPrev()} disabled={!canScrollPrev}>
          <PrevButton />
        </button>
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            <Card
              review={"Bug Bug's AI solutions have transformed our pest management approach, reducing crop loss significantly. It’s technology that finally aligns with nature."}
              name={"PHOEBE B."}
              company={"ORGANIC FARM OWNER"}
            />
            <Card
              review={"Since using Bug Bug’s monitoring tools, we’ve seen a noticeable improvement in yield and sustainability. Simple, precise, and eco-friendly."}
              name={"CHAPPELL R."}
              company={"AGRICULTURAL CONSULTANT"}
            />
            <Card
              review={
                "Bug Bug Consulting's focus on eco-modern design has been a game-changer for our operation. Their tools not only deliver results but do so in a way that respects the environment."
              }
              name={"HAYLEY W."}
              company={"SUSTAINABLE AGRICULTURE ADVOCATE"}
            />
            <Card
              review={"Since using Bug Bug’s monitoring tools, we’ve seen a noticeable improvement in yield and sustainability. Simple, precise, and eco-friendly."}
              name={"CHAPPELL R."}
              company={"AGRICULTURAL CONSULTANT"}
            />
          </div>
        </div>
        <button className={`hidden ml-4 lg:block z-10 ${!canScrollNext ? "opacity-50 cursor-default" : ""}`} onClick={() => embla && embla.scrollNext()} disabled={!canScrollNext}>
          <NextButton />
        </button>
      </div>
      <div className="flex justify-center gap-x-4 mt-4 lg:hidden">
        <button className={`z-10 ${!canScrollPrev ? "opacity-50 cursor-default" : ""}`} onClick={() => embla && embla.scrollPrev()} disabled={!canScrollPrev}>
          <PrevButton />
        </button>
        <button className={`z-10 ${!canScrollNext ? "opacity-50 cursor-default" : ""}`} onClick={() => embla && embla.scrollNext()} disabled={!canScrollNext}>
          <NextButton />
        </button>
      </div>
    </div>
  );
}

export { Review };
