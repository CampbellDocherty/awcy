import bigDripFront from '../../../../assets/big-drip-front.png';
import steadyFront from '../../../../assets/steady-front.png';

export type OutfitType = {
  src: string;
  alt: string;
  stats: {
    health: number;
    clout: number;
  };
};

export const outfits: OutfitType[] = [
  {
    src: bigDripFront,
    alt: 'drippy outfit',
    stats: {
      health: 20,
      clout: 100,
    },
  },
  {
    src: steadyFront,
    alt: 'steady outfit',
    stats: {
      health: 60,
      clout: 40,
    },
  },
];
