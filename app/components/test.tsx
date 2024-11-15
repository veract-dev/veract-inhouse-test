// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import Tabs from './tab';
import TopnavBar from './topnavbar';

export default function Test() {
  const [contentComponent, setContentComponent] = useState(null);

  const loadPage = async (pageName: string) => {
    try {
      const pageModule = await import(`./${pageName}`);
      setContentComponent(pageModule.default);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Load the initial content when the page loads
    loadPage('Page1');
  }, []);

  return (
    <div>
    <TopnavBar />
    <div>Hi</div>
    </div>
  );
};
