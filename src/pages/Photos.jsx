import Images from "../assets/photoGrid/photosJS/photosIndex";
import { Link } from "react-router-dom";

export function Photos() {
  const imagesData = Images;

  // Ensure we have a list of 4 arrays each containing up to 7 image URLs
  const cols = Array.from({ length: 4 }, (_, colIndex) =>
    imagesData.slice(colIndex * 7, colIndex * 7 + 7),
  );

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h2 className="mt-3">Summer Roadtrip &apos;21</h2>
          <p>
            Not long long ago I built this page using the code I found <Link to="https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp" target='_blank' rel="noopener noreferrer">
              here
            </Link>{" "}
            on the <Link to="https://www.w3schools.com/" target='_blank' rel="noopener noreferrer">W3 School's</Link> website. This worked great on a static website, and was easy enough
            to implement. Now that the site has been rebuilt using React, I had
            to take a slightly different approach. Essentially, I wrote a
            function that created a 4 column layout, and then used the
            .map&#40;&#41; method on that function to load the photos into those
            columns. It took a bit of time to figure it out, but ultimately
            resulted in far less code and code that was much easier to read.
          </p>
          <p>
            All of the images below were taken on a road trip I went on in the
            summer of 2021. As I was pulling this together, I couldn't help but
            think about how great that trip was, and how I hope to have the
            opportunity to go on a simlar trip some day in the future.
          </p>
          {cols.map((imagesData, id) => (
            <div className="col-sm-12 col-md-6 col-lg-3 gx-2" key={id}>
              {imagesData.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.image}
                  srcSet={photo.srcset}
                  sizes={photo.sizes}
                  alt={photo.alt}
                  className="img-fluid mb-2 w-100"
                  // optional: style or wrapper to control height/cropping
                  // style={{ objectFit: "cover" }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
