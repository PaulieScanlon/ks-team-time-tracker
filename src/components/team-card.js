import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { utcToZonedTime, format } from 'date-fns-tz';

import Loading from './loading';

const TeamCard = ({ name, continent, locale, city }) => {
  const [timeBase, setTimeBase] = useState(null);
  const [localeDate, setLocaleDate] = useState(null);
  const [localeTime, setLocaleTime] = useState(null);
  const [timeZone, setTimeZone] = useState(null);
  const [offset, setOffset] = useState(null);
  const [difference, setDifference] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeBase(utcToZonedTime(new Date(), `${continent}/${locale}`));

      if (timeBase) {
        setTimeZone(
          format(timeBase, 'zzzz', {
            timeZone: `${continent}/${locale}`
          })
        );
        setOffset(
          format(timeBase, 'OOO', {
            timeZone: `${continent}/${locale}`
          })
        );
        setDifference(
          format(timeBase, 'xxx', {
            timeZone: `${continent}/${locale}`
          })
        );
        setLocaleDate(timeBase.toLocaleDateString());
        setLocaleTime(timeBase.toLocaleTimeString());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeBase, continent, locale]);

  return (
    <div className="rounded-lg shadow-lg p-6 min-h-card border-brand-highlight border-solid border-2">
      {localeTime ? (
        <div className="grid gap-3">
          <div>
            <h4 className="text-xs text-gray-400">Name</h4>
            <h2 className="text-xl font-bold text-brand-primary">{name}</h2>
          </div>

          <div>
            <div>
              <h4 className="text-xs text-gray-400">Timezone</h4>
              <h3 className="text-sm font-bold text-gray-600">{timeZone}</h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <h4 className="text-xs text-gray-400">Continent</h4>
              <h3 className="text-sm font-bold text-gray-600">{continent}</h3>
            </div>
            <div>
              <h4 className="text-xs text-gray-400">City</h4>
              <h3 className="text-sm font-bold text-gray-600">{city}</h3>
            </div>
            <div>
              <h4 className="text-xs text-gray-400">Date</h4>
              <h3 className="text-sm font-bold text-gray-600">{localeDate}</h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <h4 className="text-xs text-gray-400">Offset</h4>
              <h3 className="text-sm font-bold text-gray-600">{offset}</h3>
            </div>
            <div>
              <h4 className="text-xs text-gray-400">Difference</h4>
              <h3 className="text-sm font-bold text-gray-600">{difference}</h3>
            </div>
            <div>
              <h4 className="text-xs text-gray-400">Time</h4>
              <h3 className="text-sm font-bold text-brand-secondary">
                <span className="mr-1" role="img" aria-label="Stopwatch">
                  ⏱️
                </span>
                {localeTime}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex place-items-center place-content-center min-h-full text-brand-primary">
          <Loading />
        </div>
      )}
    </div>
  );
};

TeamCard.propTypes = {
  /** The name of the team member */
  name: PropTypes.string.isRequired,
  /** The continent of the team member */
  continent: PropTypes.string.isRequired,
  /** The timezone  locale of the team member */
  locale: PropTypes.string.isRequired,
  /** The city of the team member */
  city: PropTypes.string.isRequired
};

export default TeamCard;
