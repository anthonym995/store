const FeacturedCollections = [
  {
    id: 1,
    title: 'KUTHU VILAKKU',
    subtitle: 'Traditional brass lamps for timeless warmth.',
    src: '/collection/product_19-1.png',
    tag: 'TOP SELLING',
    // Occupies 2 columns horizontally, spans 2 vertical slots on desktop
    cardClass: 'md:col-span-2 md:row-span-2 h-[550px] md:h-[640px]',
    textClass: 'bottom-8 left-8 md:bottom-12 md:left-12 text-left',
    imgContainerClass: 'justify-center items-end pb-24 pt-10 px-6 h-full w-full',
    imgInnerClass: 'h-[85%] w-full',
  },
  {
    id: 2,
    title: 'ETERNAL GLOW',
    subtitle: 'Timeless light settings crafted for sacred spaces.',
    src: '/collection/product_23-1.png',
    tag: 'FESTIVE SPECIAL',
    // Splits the final row cleanly in half (2 out of 4 columns)
    cardClass: 'md:col-span-2 h-[280px] md:h-[310px]',
    textClass: 'bottom-8 left-8 text-left',
    imgContainerClass: 'justify-end items-center p-6 md:pl-[45%] md:pr-12 h-full w-full',
    imgInnerClass: 'h-[80%] w-full',
  },
  {
    id: 3,
    title: 'SACRED VESSELS',
    subtitle: 'Premium Kalash & Pooja decorative items.',
    src: '/collection/product_22-1.png',
    tag: 'POOJA ESSENTIALS',
    // Fills the remainder of row 2
    cardClass: 'md:col-span-2 h-[280px] md:h-[307px]',
    textClass: 'bottom-8 left-8 md:bottom-10 md:left-12 text-left',
    imgContainerClass: 'justify-end items-center p-6 md:pl-[45%] md:pr-16 h-full w-full',
    imgInnerClass: 'h-[85%] w-full',
  },
];

export default FeacturedCollections;
