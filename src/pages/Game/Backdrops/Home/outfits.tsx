import bigDripFront from '../../../../assets/big-drip-front.png';
import steadyFront from '../../../../assets/steady-front.png';
import originalFront from '../../../../assets/character.png';

export type OutfitType = {
  src: string;
  alt: string;
  health: number;
};

export const outfits: OutfitType[] = [
  {
    src: bigDripFront,
    alt: 'drippy outfit',
    health: -3,
  },
  {
    src: steadyFront,
    alt: 'steady outfit',
    health: -1,
  },
  {
    src: originalFront,
    alt: 'original outfit',
    health: 1,
  },
];
