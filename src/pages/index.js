import React from 'react';

import PageLayout from '../layouts/page-layout';
import TeamCard from '../components/team-card';

import team from '../data/team.json';

const IndexPage = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {team.map((member, index) => {
          const { name, continent, locale, city } = member;

          return (
            <TeamCard
              key={index}
              name={name}
              continent={continent}
              locale={locale}
              city={city}
            />
          );
        })}
      </div>
    </PageLayout>
  );
};

export default IndexPage;
