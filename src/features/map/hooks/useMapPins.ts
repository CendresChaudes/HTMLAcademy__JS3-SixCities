import { useEffect } from 'react';
import { Icon, Marker, layerGroup, Map, BaseIconOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { IconSetup } from '../const/const';

import { OpenedOfferType, PreviewOfferType } from '@/global/types';

export function useMapPins(
  map: Nullable<Map>,
  activeOffer: Nullable<OpenedOfferType | PreviewOfferType>,
  offers: PreviewOfferType[] | OpenedOfferType[]
) {
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeOffer?.id === offer.id
              ? new Icon(IconSetup.Active as BaseIconOptions)
              : new Icon(IconSetup.Default as BaseIconOptions)
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer]);
}