import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from "axios"
import "./gallery.css"

const ImageGallery = ({ images, loading }) => {
  // Create gallery here
  return (
    <div className="image-grid">
      {!loading
        ? images.map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image.urls.regular} />
            </div>
          ))
        : "🤤🤤..."}
    </div>
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
  const fetchImages = count => {
    const apiRoot = "https://api.unsplash.com"
    const accessKey =
      "1bf0ee2ba4572a36e6c0bb2ce87ab3f6bc7510fd8676791a0be3d7dbfd2c0acd"

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${10}`)
      .then(res => {
        setImages(res.data)
        setLoading(false)
      })
  }

  return (
    <Layout>
      <SEO title="Gallery" />
      <h1 className="is-size-3">Images from Unsplash...</h1>
      <p style={{ marginBottom: "5%" }}>
        Now this is the Law of the Jungle, as old and true as the sky... bleh
        bleh bleh
      </p>
      <ImageGallery images={images} loading={loading} />
    </Layout>
  )
}

export default Page
