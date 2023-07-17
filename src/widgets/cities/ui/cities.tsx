import { useState } from 'react';

import { PreviewOfferType } from '@/global/types';

import { SortPlaces } from '@/features/sortPlaces';
import { FavoriteButton } from '@/features/favoriteButton';
import { Map } from '@/features/map';
import { Card } from '@/entities/card';

type CitiesProps = {
  offers: PreviewOfferType[];
}

export function Cities({ offers }: CitiesProps) {
  const [hoveredCardId, setHoveredCardId] = useState('');

  const handleCardMouseEnter = (id: string) => setHoveredCardId(id);

  const handleCardMouseLeave = () => setHoveredCardId('');

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${offers.length} places to stay in Amsterdam`}</b>
          <SortPlaces />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <Card
                key={offer.id}
                offer={offer}
                sectionName="cities"
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
                actionSlot={<FavoriteButton sectionName="place-card" isFavorite={false} />}
              />
            ))}
          </div>
        </section>

        <div className="cities__right-section">
          <Map sectionName="cities" offerId={hoveredCardId} />
        </div>
      </div>
    </div>
  );
}
