import React, { useState, useEffect } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import "./gallery.css"

const ImageGallery = ({ images, loading, fetchImages }) => {
  // Create gallery here
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => fetchImages(10)}
      hasMore={true}
      loader={
        <p style={{ textAlign: "center", marginTop: "1%" }}>
          More doggo incoming 🐕 🐕...
        </p>
      }
    >
      <div className="image-grid">
        {!loading
          ? images.map((image, index) => (
              <div className="image-item" key={index}>
                <img src={image.urls.regular} />
              </div>
            ))
          : ""}
      </div>
    </InfiniteScroll>
  )
}

const InfiniteImages = () => {
  // Hold state
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch images on component mount
  useEffect(() => {
    fetchImages()
  }, [])

  // Fetch Images
  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com"
    const accessKey =
      //   "a5a0aed7b2bc3fba7e79cdd18b934925ba51540a80a4aefd7d8e851d73235a22"
      "45257f5a9499990c70f7dfc8b11909d57f88b0c45cf88bf3331631c453bdcf90"
    // "8a4eb76e94d02735696730edac2a8e0fc8f6e4d8e6064fd4add3006183e6e372"

    const doggoEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${count}&collections='3816141,1154337,1254279'`

    axios.get(doggoEndpoint).then(res => {
      console.log(images.length)
      setImages([...images, ...res.data])
      setLoading(false)
    })
  }
  return (
    <ImageGallery images={images} loading={loading} fetchImages={fetchImages} />
  )
}

export default InfiniteImages
