import vinylRecords from "../assets/js/vinylRecords.json"
import { useParams } from "react-router-dom";



export default function AlbumDetail() {

    const { albumId } = useParams();
    const album = vinylRecords.find((item)=>item.$oid === albumId);

  return (
    <>
      <Helmet>
        <title>{`Steven Pritchard | ${album.albumName}`}</title>
        <meta name="description" content={""} />
        <meta property="og:title" content={album.albumName} />
        <meta property="og:description" content={""} />
      </Helmet>
    </>
  )
}
