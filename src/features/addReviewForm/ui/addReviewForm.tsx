import { ChangeEvent, useState } from 'react';
import { Button, RatingFormStarItem } from '@/shared/ui';
import { ratings } from '../const/const';

export function AddReviewForm() {
  const [reviewData, setReviewData] = useState({
    review: '',
    rating: '0'
  });

  const handleReviewDataChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setReviewData({
    ...reviewData,
    [evt.target.name]: evt.target.value
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {ratings.map(({ value, status }) => (
          <RatingFormStarItem
            key={status}
            value={value}
            status={status}
            isChecked={value === reviewData.rating}
            onChange={handleReviewDataChange}
          />))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewData.review}
        onChange={handleReviewDataChange}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          {' '}and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <Button className="reviews__submit form__submit" type="submit" disabled>Submit</Button>
      </div>
    </form>
  );
}
