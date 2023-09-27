// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailUrlItem, showThumbnailImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailUrlItem

  const getThumbnailImage = () => {
    showThumbnailImage(id)
  }

  const selectedButton = isActive ? `normal-button` : `opacity-button`

  return (
    <li className="each-thumbnail-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={getThumbnailImage}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={selectedButton}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
