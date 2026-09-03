// const base = import.meta.env.BASE_URL;

// const img = (path) => `${base}images/photosPage/${path}`;

// const buildSrcSet = (filename, widths) =>
//   widths
//     .map(
//       (w) => `${img(`${w}/${filename.replace(".jpeg", `_${w}w.jpeg`)}`)} ${w}w`,
//     )
//     .join(", ");

const CLOUDINARY_BASE = "https://res.cloudinary.com/dpir0th3m/image/upload";

export const getCloudinaryUrl = (publicId, width) =>
  `${CLOUDINARY_BASE}/f_auto,q_auto,c_limit,w_${width}/${publicId}`;

export const getCloudinarySrcSet = (publicId) => {
  const widths = [320, 480, 768, 1024, 1400];

  return widths
    .map((width) => `${getCloudinaryUrl(publicId, width)} ${width}w`)
    .join(", ");
};

const Images = [
  {
    id: 1,
    publicId: "deer-park-olympic-national-park_rr3mmz",
    alt: "Deer Park, Olympic National Park",
  },
  {
    id: 2,
    publicId: "devils-tower-wyoming_hy7lvy",
    alt: "Devils Tower, WY",
  },
  {
    id: 3,
    publicId: "lake-angeles-olympic-national-park_iezfeu",
    alt: "Mystical island in the center of an Olympic National Park alpine lake",
  },
  {
    id: 4,
    publicId: "prison-cell-alcatraz_hlrp0n",
    alt: "Prison cell at Alctraz National Park",
  },
  {
    id: 5,
    publicId: "alcatraz-watch-tower_h4ohb3",
    alt: "Watch Tower at Alcatraz National Park",
  },
  {
    id: 6,
    publicId: "fern-canyon-trail-redwoods-national-park_ogvcq9",
    alt: "Fern Canyon in Redwood National Park",
  },
  {
    id: 7,
    publicId: "three-forks-trail-olympic-national-park_abupq1",
    alt: "Icemelt rushing through Olympic National Park",
  },
  {
    id: 8,
    publicId: "cameron-creek-olympic-national-park_nkxeey",
    alt: "Fast moving water in Olympic National Park",
  },
  {
    id: 9,
    publicId: "cascade-creek-gran-teton-national-park_jlli1a",
    alt: "Fast moving water in Grand Teton National Park",
  },
  {
    id: 10,
    publicId: "tree-molds-trail-craters-of-the-moon_dtvq3o",
    alt: "The remains of a tree seen at Craters of the moon National Monument and Preserve.",
  },
  {
    id: 11,
    publicId: "mount-rainier-washington_eclwhi",
    alt: "Mount Rainer National Park",
  },
  {
    id: 12,
    publicId: "grand-teton-teton-national-park_s4bucm",
    alt: "The Teton mountain range seen from the road in Grand Teton National Park.",
  },
  {
    id: 13,
    publicId: "the-tetons-grand-teton-national-park_zrkavp",
    alt: "Golden hour in Teton National Mountain Park. The Tetons seen from Jenny Lake Road.",
  },
  {
    id: 14,
    publicId: "deer-park-campgrounds_hpagob",
    alt: "Red Hook ESB and Altra Trail runners with the Olympic Mountain Range in the distance.",
  },
  {
    id: 15,
    publicId: "olympic-national-park-sunset_cy2lhr",
    alt: "Sunset in Olympic National Park",
  },
  {
    id: 16,
    publicId: "teton-national-park_ybpgn3",
    alt: "Fields of green outside of Teton National Park",
  },
  {
    id: 17,
    publicId: "pawnee-butte-trail-head-pawnee-national-grasslands_qfvszo",
    alt: "A rainbow shining through a rainstorm as the sun sets in the Colorado Grasslands.",
  },
  {
    id: 18,
    publicId:"the-sentinel-building-san-francisco_j3beai",
    alt:"The Sentinel Building in San Francisco on a cloudy day with the Transamerica Pyramid in the background."
  },
  
  {
    id: 19,
    publicId: "kelham-beach-point-reyes-national-seashore_fp1waf",
    alt: "Low tide at Point Reyes National Seashore",
  },
  {
    id: 20,
    publicId: "north-fork-cascade-canyon-trail-grand-teton_q9x5o6",
    alt: "Grand Teton National Park",
  },
    {
    id: 21,
    publicId: "stanislaus-national-forest-groveland-ca_wjhiij",
    alt: "Looking down at the Toulumne River in Stanislaus National Forest, Groveland, California, United States",
  },
    {
    id: 22,
    publicId: "brandywine-falls-cuyahoga-valley-national-park_qomhwv",
    alt: "Water rushing down Brandywine Falls in Cuyahoga National Park in Ohio.",
  },
  {
    id: 23,
    publicId: "alcatraz-island_pjbhwh",
    alt: "Alcatraz National Historic site seen from an incoming ferry.",
  },
  {
    id: 24,
    publicId: "alcatraz-prison-yard_mkg2pm",
    alt: "The prison yard at Alcatraz National Historic Site.",
  },
  {
    id: 25,
    publicId: "red-peak-pass-alpine-lakes-yosemite_mnwvhu",
    alt: "Alpine lakes in Yosemite National park seen from a high up ridge.",
  },
  {
    id: 26,
    publicId:"costal-redwood-tree_tfipqs",
    alt:"A giant redwood seen in the early morning hours inside of Redwood National and State Parks, near Trinidad, California."
  },
  {
    id: 27,
    publicId: "golden-gate-bridge_cuhjoh",
    alt: "The Golden Gate Bridge in San Francisco California",
  },
  {
    id: 28,
    publicId:"lake-michigan-indiana-dunes-national-park_wdkio6",
    alt:"The sun setting over the Lake Michigan, seen from the sandy beaches of Indiana Dunes National Park in the state iof Indiana."
  },
  {
    id: 29,
    publicId: "john-muir-trail-yosemite_lli9w5",
    alt: "Looking off into the distance from the John Muir Trail in Yosemite National Park",
  },
  {
    id: 30,
    publicId: "red-peak-pass-yosemite_gsj7ep",
    alt: "An isolated alpine lake in Yosemite National Park.",
  },
];

export default Images;
