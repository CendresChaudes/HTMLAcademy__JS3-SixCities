import cn from 'classnames';

import { getWidthByStarsCount, getImageSize } from '../lib';
import { Badge } from '../../../shared/ui';

type CardProps = {
  sectionName: string;
  imgSrc: string;
  priceValue: number;
  starsCount: number;
  name: string;
  type: string;
  isFavorite?: boolean;
  isPremium?: boolean;
}

export function Card({
  sectionName,
  imgSrc,
  priceValue,
  starsCount,
  name,
  type,
  isFavorite,
  isPremium,
}: CardProps) {
  const imageSize = getImageSize(sectionName);

  return (
    <article className={cn(`${sectionName}__card`, 'place-card')}>
      {isPremium && (
        <Badge
          clss='place-card__mark'
          text='Premium'
        />
      )}

      <div className={cn(`${sectionName}__image-wrapper`, 'place-card__image-wrapper')}>
        <a href="#">
          <img className="place-card__image" src={imgSrc} width={String(imageSize.width)} height={String(imageSize.height)} alt="Place image" />
        </a>
      </div>
      <div
        className={cn(`${sectionName}__card-info`, 'place-card__info')}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn(
              'place-card__bookmark-button button',
              { 'place-card__bookmark-button--active': isFavorite }
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getWidthByStarsCount(starsCount) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
