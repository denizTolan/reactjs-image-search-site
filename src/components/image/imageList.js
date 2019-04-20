import React from 'react';
import Image from './image';
import './imageList.css';

const ImageList = ({images}) => {
    const prepearedImageList = images.map((image)=>{
        return (
            <Image key={image.id} image={image} />
        )
    });

    return (
        <div className="image-list-container">
            {prepearedImageList}
        </div>
    )
}

export default ImageList;