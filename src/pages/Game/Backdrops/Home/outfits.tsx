import bigDripFront from '../../../../assets/big-drip-front.png';
import steadyFront from '../../../../assets/steady-front.png';
import originalFront from '../../../../assets/character.png';
import originalOption from '../../../../assets/no-change-option.png';
import bigDripOption from '../../../../assets/big-drip-option.png';
import steadyOption from '../../../../assets/steady-option.png';

export type OutfitType = {
  optionSrc: string;
  src: string;
  alt: string;
  health: number;
};

export const outfits: OutfitType[] = [
  {
    optionSrc: bigDripOption,
    src: bigDripFront,
    alt: 'drippy outfit',
    health: -3,
  },
  {
    optionSrc: steadyOption,
    src: steadyFront,
    alt: 'steady outfit',
    health: -1,
  },
  {
    optionSrc: originalOption,
    src: originalFront,
    alt: 'original outfit',
    health: 1,
  },
];
