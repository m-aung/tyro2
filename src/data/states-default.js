import objectAssign from 'object-assign';

const defaultFill = '#f2f2f2';

const statesDefaults = {
  // Alabama: { fillColor: defaultFill, value: '' },
  // Alaska: { fillColor: defaultFill, value: '' },
  // Arizona: { fillColor: defaultFill, value: '' },
  // Arkansas: { fillColor: defaultFill, value: '' },
  // California: { fillColor: defaultFill, value: '' },
  // Colorado: { fillColor: defaultFill, value: '' },
  // Connecticut: { fillColor: defaultFill, value: '' },
  // Delaware: { fillColor: defaultFill, value: '' },
  // 'District of Columbia': { fillColor: defaultFill, value: '' },
  // Florida: { fillColor: defaultFill, value: '' },
  // Georgia: { fillColor: defaultFill, value: '' },
  // Hawaii: { fillColor: defaultFill, value: '' },
  // Idaho: { fillColor: defaultFill, value: '' },
  // Illinois: { fillColor: defaultFill, value: '' },
  // Indiana: { fillColor: defaultFill, value: '' },
  // Iowa: { fillColor: defaultFill, value: '' },
  // Kansas: { fillColor: defaultFill, value: '' },
  // Kentucky: { fillColor: defaultFill, value: '' },
  // Louisiana: { fillColor: defaultFill, value: '' },
  // Maine: { fillColor: defaultFill, value: '' },
  // Maryland: { fillColor: defaultFill, value: '' },
  // Massachusetts: { fillColor: defaultFill, value: '' },
  // Michigan: { fillColor: defaultFill, value: '' },
  // Minnesota: { fillColor: defaultFill, value: '' },
  // Mississippi: { fillColor: defaultFill, value: '' },
  // Missouri: { fillColor: defaultFill, value: '' },
  // Montana: { fillColor: defaultFill, value: '' },
  // Nebraska: { fillColor: defaultFill, value: '' },
  // Nevada: { fillColor: defaultFill, value: '' },
  // 'New Hampshire': { fillColor: defaultFill, value: '' },
  // 'New Jersey': { fillColor: defaultFill, value: '' },
  // 'New Mexico': { fillColor: defaultFill, value: '' },
  // 'New York': { fillColor: defaultFill, value: '' },
  // 'North Carolina': { fillColor: defaultFill, value: '' },
  // 'North Dakoka': { fillColor: defaultFill, value: '' },
  // Ohio: { fillColor: defaultFill, value: '' },
  // Oklahoma: { fillColor: defaultFill, value: '' },
  // Oregon: { fillColor: defaultFill, value: '' },
  // Pennsylvania: { fillColor: defaultFill, value: '' },
  // 'Puerto Rico': { fillColor: defaultFill, value: '' },
  // 'Rhode Island': { fillColor: defaultFill, value: '' },
  // 'South Carolina': { fillColor: defaultFill, value: '' },
  // 'South Dakota': { fillColor: defaultFill, value: '' },
  // Tennessee: { fillColor: defaultFill, value: '' },
  // Texas: { fillColor: defaultFill, value: '' },
  // Utah: { fillColor: defaultFill, value: '' },
  // Vermont: { fillColor: defaultFill, value: '' },
  // Virginia: { fillColor: defaultFill, value: '' },
  // Washington: { fillColor: defaultFill, value: '' },
  // 'West Virginia': { fillColor: defaultFill, value: '' },
  // Wisconsin: { fillColor: defaultFill, value: '' },
  // Wyoming: { fillColor: defaultFill, value: '' },
  AL: { fillColor: defaultFill, value: '' },
  AK: { fillColor: defaultFill, value: '' },
  AZ: { fillColor: defaultFill, value: '' },
  AR: { fillColor: defaultFill, value: '' },
  CA: { fillColor: defaultFill, value: '' },
  CO: { fillColor: defaultFill, value: '' },
  CT: { fillColor: defaultFill, value: '' },
  DE: { fillColor: defaultFill, value: '' },
  DC: { fillColor: defaultFill, value: '' },
  FL: { fillColor: defaultFill, value: '' },
  GA: { fillColor: defaultFill, value: '' },
  HI: { fillColor: defaultFill, value: '' },
  ID: { fillColor: defaultFill, value: '' },
  IL: { fillColor: defaultFill, value: '' },
  IN: { fillColor: defaultFill, value: '' },
  IA: { fillColor: defaultFill, value: '' },
  KS: { fillColor: defaultFill, value: '' },
  KY: { fillColor: defaultFill, value: '' },
  LA: { fillColor: defaultFill, value: '' },
  ME: { fillColor: defaultFill, value: '' },
  MD: { fillColor: defaultFill, value: '' },
  MA: { fillColor: defaultFill, value: '' },
  MI: { fillColor: defaultFill, value: '' },
  MN: { fillColor: defaultFill, value: '' },
  MS: { fillColor: defaultFill, value: '' },
  MO: { fillColor: defaultFill, value: '' },
  MT: { fillColor: defaultFill, value: '' },
  NE: { fillColor: defaultFill, value: '' },
  NV: { fillColor: defaultFill, value: '' },
  NH: { fillColor: defaultFill, value: '' },
  NJ: { fillColor: defaultFill, value: '' },
  NM: { fillColor: defaultFill, value: '' },
  NY: { fillColor: defaultFill, value: '' },
  NC: { fillColor: defaultFill, value: '' },
  ND: { fillColor: defaultFill, value: '' },
  OH: { fillColor: defaultFill, value: '' },
  OK: { fillColor: defaultFill, value: '' },
  OR: { fillColor: defaultFill, value: '' },
  PA: { fillColor: defaultFill, value: '' },
  PR: { fillColor: defaultFill, value: '' },
  RI: { fillColor: defaultFill, value: '' },
  SC: { fillColor: defaultFill, value: '' },
  SD: { fillColor: defaultFill, value: '' },
  TN: { fillColor: defaultFill, value: '' },
  TX: { fillColor: defaultFill, value: '' },
  UT: { fillColor: defaultFill, value: '' },
  VT: { fillColor: defaultFill, value: '' },
  VA: { fillColor: defaultFill, value: '' },
  WA: { fillColor: defaultFill, value: '' },
  WV: { fillColor: defaultFill, value: '' },
  WI: { fillColor: defaultFill, value: '' },
  WY: { fillColor: defaultFill, value: '' },
};
// adding new properties into the statesDefault obj
Object.keys(statesDefaults).forEach((element) => {
  // console.log(statesDefaults[element]);
  statesDefaults[element]['salary'] = null;
  statesDefaults[element]['application'] = 0;
});
export default statesDefaults;
