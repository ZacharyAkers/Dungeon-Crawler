import BackpackUpgrade from './other/backpack-upgrade';
import LeatherArmor    from './armor/leather-armor';
import LeatherBoots    from './armor/leather-boots';
import LeatherCap      from './armor/leather-cap';
import LeatherGloves   from './armor/leather-gloves';
import LeatherPants    from './armor/leather-pants';
import DiamondRing     from './rings/diamond-ring';
import AmethystRing    from './rings/amethyst-ring';
import OldRing         from './rings/old-ring';
import BroadSword      from './weapons/broad-sword';
import RustySword      from './weapons/rusty-sword';
import SteelSword      from './weapons/steel-sword';
import HpPotion        from './other/hp-potion';
import GreatHpPotion   from './other/great-hp-potion';

const items = {
  weapons: {
    BroadSword,
    RustySword,
    SteelSword
  },
  armor: {
    LeatherArmor,
    LeatherBoots,
    LeatherCap,
    LeatherGloves,
    LeatherPants
  },
  rings: {
    AmethystRing,
    DiamondRing,
    OldRing
  },
  other: {
    HpPotion,
    GreatHpPotion,
    BackpackUpgrade
  }
};

export const randomItemsT1 = [
  SteelSword,
  LeatherArmor,
  LeatherBoots,
  LeatherCap,
  LeatherGloves,
  LeatherPants,
  OldRing
];

export const randomItemsT2 = [
  ...randomItemsT1,
  BroadSword,
  AmethystRing,
  DiamondRing
];

export default items;