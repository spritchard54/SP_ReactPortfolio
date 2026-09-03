import Images, {
  getCloudinaryUrl,
  getCloudinarySrcSet,
} from "../assets/photoGrid/photosJS/photosIndex";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export default function Photos() {
  const resizeGridItem = (image) => {
    const gridItem = image.parentElement;

    const rowHeight = 1;
    const verticalGap = 12;

    const rowSpan = Math.ceil(
      (image.getBoundingClientRect().height + verticalGap) / rowHeight,
    );

    gridItem.style.gridRowEnd = `span ${rowSpan}`;
  };

  const handleImageLoad = (event) => {
    const image = event.currentTarget;

    requestAnimationFrame(() => {
      resizeGridItem(image);
      image.classList.add("loaded");
    });
  };

  useEffect(() => {
    const images = document.querySelectorAll(".photo-grid img");

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        resizeGridItem(entry.target);
      });
    });

    images.forEach((image) => {
      resizeObserver.observe(image);
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Steve Pritchard | Photos</title>

        <meta
          name="description"
          content="Images shot and produced by Steve Pritchard while traveling through numerous U.S. National Parks."
        />

        <meta property="og:title" content="Steve Pritchard | Photos" />

        <meta
          property="og:description"
          content="Images shot and produced by Steve Pritchard while traveling through numerous U.S. National Parks"
        />
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <h1 className="mt-3">Summer Roadtrip &apos;21</h1>
          <p>
            Not long ago I built this page using the code I found{" "}
            <a
              href="https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            on the{" "}
            <a
              href="https://www.w3schools.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              W3 School's
            </a>{" "}
            website. This worked great on a static website, and was easy enough
            to implement. Now that the site has been rebuilt using React, I had
            to take a slightly different approach.
          </p>
          <p>
            Essentially, I built a responsive masonry-style photo grid in React
            that automatically adjusts the number of columns based on screen
            size. I also moved the images to Cloudinary, allowing the browser to
            load appropriately sized and optimized versions of each photo while
            lazy loading images further down the page. It took a bit of time to
            figure it out, but ultimately resulted in far less code and code
            that was much easier to read.
          </p>
          <p>
            All of the images below were taken on a road trip I went on in the
            summer of 2021. As I was pulling this together, I couldn't help but
            think about how great that trip was, and how I hope to have the
            opportunity to go on a simlar trip some day in the future.
          </p>

          <div className="photo-grid">
            {Images.map((photo, index) => (
              <div className="photo-grid-item" key={photo.id}>
                <img
                  src={getCloudinaryUrl(photo.publicId, 768)}
                  srcSet={getCloudinarySrcSet(photo.publicId)}
                  sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw"
                  alt={photo.alt}
                  className="img-fluid w-100"
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  onLoad={handleImageLoad}
                />
                <div className="photo-caption">{photo.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
