import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import "./gallery.css"

const ImageGallery = ({ images, loading, fetchImages }) => {
  // Create gallery here
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => fetchImages()}
      hasMore={true}
      loader={
        <p style={{ textAlign: "center", marginTop: "1%" }}>
          More doggo incoming 🐕 🐕...
        </p>
      }
    >
      <div className="image-grid">
        {!loading
          ? images.map(image => (
              <div className="image-item" key={image.id}>
                <img src={image.urls.regular} alt={image.alt_description} />
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

  // Fetch Images from functions
  const fetchImages = () => {
    axios("/.netlify/functions/fetch").then(res => {
      setImages([...images, ...res.data.images])
      setLoading(false)
    })
  }
  return (
    <ImageGallery images={images} loading={loading} fetchImages={fetchImages} />
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  fetchImages: PropTypes.func,
}

export default InfiniteImages
