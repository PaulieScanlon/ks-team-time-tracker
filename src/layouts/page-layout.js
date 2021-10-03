import React from 'react';

import Logo from '../components/logo';
import Octocat from '../components/octocat';

const PageLayout = ({ children }) => {
  return (
    <>
      <header className="fixed top-0 bg-white px-8 py-4 border-b-2 border-gray-200 w-screen">
        <div className="flex justify-between">
          <div className="grid grid-cols-auto1fr gap-4 items-center">
            <Logo />
            <h1 className="text-2xl leading-4 font-bold text-gray-600">
              Team Timezones
            </h1>
          </div>
          <a href="https://github.com/gatsbyjs/gatsby">
            <Octocat />
          </a>
        </div>
      </header>
      <main className="container min-h-full mx-auto px-4 py-32">
        {children}
      </main>
      <footer className="fixed bottom-0 bg-white px-8 py-4 border-t-2 border-gray-200 w-screen">
        <div className="flex justify-between">
          <a
            className="text-xs text-brand-primary underline font-bold"
            href="https://www.gatsbyjs.com"
          >
            Built with Gatsby
          </a>
          <a
            className="text-xs text-brand-primary underline font-bold"
            href="https://twitter.com/GatsbyJS"
          >
            @GatsbyJs
          </a>
        </div>
      </footer>
    </>
  );
};

export default PageLayout;
