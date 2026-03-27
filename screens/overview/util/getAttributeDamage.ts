export const getAttributeDamage = (heroData) => {
  switch (heroData?.primary_attr) {
    case 'agi':
      return heroData?.base_agi;
    case 'str':
      return heroData?.base_str;
    case 'int':
      return heroData?.base_int;
    case 'all':
      return 0.45 * (heroData?.base_str + heroData?.base_agi + heroData?.base_int);
    default:
      return 0;
  }
};
