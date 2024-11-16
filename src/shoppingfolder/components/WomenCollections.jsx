import React from 'react'

const WomenCollections = (props) => {
    const {title,image1,image2,image3,image4,image5,image6} = props.ladiesFashion
  return (
    <div>
          <div className='collectionSection'>
        <h2>{title}</h2>
        <div className="bannerbox">
        <img src="Assets/bannergirlgif.gif" alt="image not found" />
        </div>
        
        <div className="menImages">
            <img src={image1} alt={title} />
            <img src={image2} alt={title} />
            <img src={image3} alt={title} />
            <img src={image4} alt={title} />
            <img src={image5} alt={title} />
            <img src={image6} alt={title} />
        </div>
    </div>
    </div>
  )
}

export default WomenCollections