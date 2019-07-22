import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import "./gallery.css"

const ImageGallery = ({ images, loading, fetchImages }) => {
  // Create gallery here
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages(5)}
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

const Page = () => {
  // Hold state
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch images on page load
  useEffect(() => {
    fetchImages()
  }, [])

  // Fetch Images
  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com"
    const accessKey =
      // "a5a0aed7b2bc3fba7e79cdd18b934925ba51540a80a4aefd7d8e851d73235a22"
      // "1bf0ee2ba4572a36e6c0bb2ce87ab3f6bc7510fd8676791a0be3d7dbfd2c0acd"
      "8a4eb76e94d02735696730edac2a8e0fc8f6e4d8e6064fd4add3006183e6e372"

    const dogEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${count}&collections='3816141,1154337,1254279'`
    const normalEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`

    axios.get(dogEndpoint).then(res => {
      setImages([...images, ...res.data])
      setLoading(false)
    })
  }

  return (
    <Layout>
      <SEO title="Gallery" />
      <h1 className="is-size-3">Images from Unsplash...</h1>
      <p style={{ marginBottom: "5%" }}>
        Now this is the Law of the Jungle, as old and true as the sky, for as
        long as you keep scrolling, you shall find more doggo images 🐶 🐕.
      </p>
      <ImageGallery
        images={images}
        loading={loading}
        fetchImages={fetchImages}
      />
    </Layout>
  )
}

export default Page
