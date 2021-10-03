import React from 'react';
import { Link } from 'gatsby';

import PageLayout from '../layouts/page-layout';

const NotFoundPage = () => {
  return (
    <PageLayout>
      <div className="grid gap-2">
        <h1 className="text-4xl text-center text-red-500 font-bold text-gray-600">
          404
        </h1>
        <p className="text-md text-center text-gray-800">
          The page you're looking for can't be found
        </p>
        <Link
          to="/"
          className="text-center text-brand-primary underline font-bold"
        >
          Home
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
