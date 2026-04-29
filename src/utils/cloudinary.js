const CLOUD_NAME = "dpir0th3m";

/**
 * Generate a Cloudinary image URL
 */
export function getCloudinaryUrl(publicId, version, options = {}) {
  const {
    width,
    height,
    crop = "c_limit",
    quality = "q_auto",
    format = "f_auto",
  } = options;

  let transformations = [crop, quality, format];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations.join(",")}/${version}/${publicId}`;
}

/**
 * Generate srcSet for responsive images
 */
export function getCloudinarySrcSet(publicId, version) {
  const widths = [320, 480, 768, 1024, 1400];

  return widths
    .map(
      (w) =>
        `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_limit,w_${w}/${version}/${publicId} ${w}w`
    )
    .join(", ");
}