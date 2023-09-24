
import { useState } from 'react';
import './index.css'

const Component5 = () => {

    const [images, setImages] = useState(["https://images.pexels.com/photos/18193622/pexels-photo-18193622/free-photo-of-smiling-woman-sitting-on-floor-and-leaning-arm-on-stool.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13352373/pexels-photo-13352373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18423796/pexels-photo-18423796/free-photo-of-processed-with-vsco-with-hb2-preset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17852406/pexels-photo-17852406/free-photo-of-people-walking-on-wooden-footpath-on-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]);

    const [currentIndex, setCurrentIndex] = useState(0);


    const nextImage = ()=> {
        if(currentIndex < images.length -1){
            setCurrentIndex(currentIndex + 1)
        }
    }

    const previousImage = () => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }


    return (
        <div>
            <h2>Image Slider</h2>
            <div className='image-container'>
                <img src={images[currentIndex]} alt='image' />
            </div>
            <div className='button-container'>
                <button onClick={previousImage}>Previous</button>
                <button onClick={nextImage}>Nest</button>
            </div>
        </div>

    )
};

export default Component5;
