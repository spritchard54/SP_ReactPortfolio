import Images from "../assets/photoGrid/photosJS/photosIndex";

export function Photos() {
  const imagesData = Images;

  // Ensure we have a list of 4 arrays each containing up to 7 image URLs
  const cols = Array.from({ length: 4 }, (_, colIndex) =>
    imagesData.slice(colIndex * 7, colIndex * 7 + 7),
  );

  return (
    // <div className="container-fluid">
    //   <h1 className="my-3">Welcome to my photos page...</h1>

    //   <div className="row">
    //     {imagesData.map((photo) => (
    //       // Col component defines the column width for different screen sizes
    //       // xs={12}: 1 column on extra small screens
    //       // sm={6}: 2 columns on small screens
    //       // md={4}: 3 columns on medium screens
    //       // lg={3}: 4 columns on large screens

    //       <div className="col-md-3 my-1 mx-0 px-1" key={photo.id}>
    //         <img
    //           src={photo.image}
    //           alt={photo.alt}
    //           className="img-fluid" />
    //       </div>
    //     )
    //   )
    // }
    //   </div>
    // </div>

    <>
      <div className="container-fluid">
        <div className="row">
          {cols.map((imagesData, id) => (
            <div className="col-12 col-md-3" key={id}>
              {imagesData.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.image}
                  // alt={`col-${id}-img-${id}`}
                  className="img-fluid mb-2 w-100"
                  // optional: style or wrapper to control height/cropping
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
