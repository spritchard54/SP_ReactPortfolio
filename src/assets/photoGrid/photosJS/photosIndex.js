const base = import.meta.env.BASE_URL;

const img = (path) => `${base}images/photosPage/${path}`;

const buildSrcSet = (filename, widths) =>
  widths
    .map((w) => `${img(`${w}/${filename.replace(".jpeg", `_${w}w.jpeg`)}`)} ${w}w`)
    .join(", ");

const Images = [
 {
    id: 1,
    image: img("IMG_4036.jpeg"),
    alt: "Deer Park, Olympic National Park",
    srcset: buildSrcSet("IMG_4036.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes:
      "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 2,
    image: img("IMG_3568.jpeg"),
    alt: "Devils Tower, WY",
    srcset: buildSrcSet("IMG_3568.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes:
      "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 3,
    image: img("IMG_4086.jpeg"),
    alt: "Sunset in Olympic National Park",
    srcset: buildSrcSet("IMG_4086.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes:
      "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 4,
    image: img("IMG_4127.jpeg"),
    alt: "Icemelt rushing through Olympic National Park",
    srcset: buildSrcSet("IMG_4127.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes:
      "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 5,
    image: img("IMG_4137.jpeg"),
    alt: "Fast moving water in Olympic National Park",
    srcset: buildSrcSet("IMG_4137.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes:
      "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 6,
    image: img("IMG_5956.jpeg"),
    alt: "Prison cell at Alctraz National Park",
    srcset: buildSrcSet("IMG_5956.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 7,
    image: img("IMG_4761.jpeg"),
    alt: "Fast moving water in Grand Teton National Park",
    srcset: buildSrcSet("IMG_4761.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 8,
    image: img("IMG_4583.jpeg"),
    alt: "Mount Rainer National Park",
    srcset: buildSrcSet("IMG_4583.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 9,
    image: img("IMG_5975.jpeg"),
    alt: "Watch Tower at Alcatraz National Park",
    srcset: buildSrcSet("IMG_5975.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 10,
    image: img("IMG_3635.jpeg"),
    alt: "Mystical island in the center of an Olympic National Park alpine lake",
    srcset: buildSrcSet("IMG_3635.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 11,
    image: img("IMG_4059.jpeg"),
    alt: "Red Hook ESB and Altra Trail runners with the Olympic Mountain Range in the distance.",
    srcset: buildSrcSet("IMG_4059.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 12,
    image: img("IMG_4727.jpeg"),
    alt: "Fields of green outside of Teton National Park",
    srcset: buildSrcSet("IMG_4727.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 13,
    image: img("IMG_5749.jpeg"),
    alt: "Fern Canyon in Redwood National Park",
    srcset: buildSrcSet("IMG_5749.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
  id: 14,
  image: img("IMG_5382.jpeg"),
  alt: "A rainbow shining through a rainstorm as the sun sets in the Colorado Grasslands.",
  srcset: buildSrcSet("IMG_5382.jpeg", [292, 707, 876, 1056, 1300, 1500]),
  sizes:
    "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
},
  {
    id: 15,
    image: img("IMG_5582.jpeg"),
    alt: "The remains of a tree seen at Craters of the moon National Monument and Preserve.",
    srcset: buildSrcSet("IMG_5582.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 16,
    image: img("IMG_5903.jpeg"),
    alt: "Low tide at Point Reyes National Seashore",
    srcset: buildSrcSet("IMG_5903.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 17,
    image: img("IMG_5938.jpeg"),
    alt: "Alcatraz National Historic site seen from an incoming ferry.",
    srcset: buildSrcSet("IMG_5938.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 18,
    image: img("IMG_4729.jpeg"),
    alt: "The Teton mountain range seen from the road in Grand Teton National Park.",
    srcset: buildSrcSet("IMG_4729.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 19,
    image: img("IMG_5966.jpeg"),
    alt: "The prison yard at Alcatraz National Historic Site.",
    srcset: buildSrcSet("IMG_5966.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 20,
    image: img("IMG_6235.jpeg"),
    alt: "Alpine lakes in Yosemite National park seen from a high up ridge.",
    srcset: buildSrcSet("IMG_6235.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 21,
    image: img("IMG_4843.jpeg"),
    alt: "Grand Teton natipnal Park",
    srcset: buildSrcSet("IMG_4843.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 22,
    image: img("IMG_6118.jpeg"),
    alt: "Looking down at the Toulumne River in Stanislaus National Forest, Groveland, California, United States",
    srcset: buildSrcSet("IMG_6118.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 23,
    image: img("IMG_6114.jpeg"),
    alt: "The Golden Gate Bridge in San Francisco California",
    srcset: buildSrcSet("IMG_6114.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 24,
    image: img("IMG_6196.jpeg"),
    alt: "Looking off into the distance from the John Muir Trail in Yosemite National Park",
    srcset: buildSrcSet("IMG_6196.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 25,
    image: img("IMG_4766.jpeg"),
    alt: "Golden hour in Teton National Mountain Park. The Tetons seen from Jenny Lake Road.",
    srcset: buildSrcSet("IMG_4766.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, (min-width: 680px) 636px, 95.56vw",
  },
  {
    id: 26,
    image: img("IMG_6228.jpeg"),
    alt: "An isolated alpine lake in Yosemite National Park.",
    srcset: buildSrcSet("IMG_6228.jpeg", [292, 707, 876, 1056, 1300, 1500]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
  {
    id: 27,
    image: img("IMG_5219.jpeg"),
    alt: "Water rushing down Brandywine Falls in Cuyahoga National Park in Ohio.",
    srcset: buildSrcSet("IMG_5219.jpeg", [292, 584, 707, 876, 1056, 1220]),
    sizes: "(min-width: 1300px) 292px, (min-width: 1000px) calc(17.86vw + 63px), (min-width: 780px) 50vw, 100vw",
  },
];

export default Images;


