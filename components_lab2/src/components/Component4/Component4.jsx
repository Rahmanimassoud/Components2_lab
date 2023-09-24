
import { useState } from 'react';
import './index.css'

const Component4 = () => {


    const [rating, setRating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false)


    const handelStarClick = (newRating) => {
        setRating(newRating)
    }


    const handelClick = () => {
        setIsSubmitted(true)
    }


    return (
        <div className='review'>
            <div className='star-rating'>
                {[1, 2, 3, 4, 5].map((star)=> {
                    return <span key={star} className={`star ${star <= rating ? 'active': ''}`} onClick={()=> handelStarClick(star)}>
                        &#9733;
                    </span>
                })}
            </div>
            <button onClick={handelClick}>Submit your rating</button>

            {isSubmitted && (
                <div className="thank-you-message">
                    Thank you for your feedback!
                </div>
            )}
        </div>






    )
};

export default Component4;
