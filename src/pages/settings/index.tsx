import React from 'react';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import Settings from 'src/domains/settings/Settings';

const SettingsPage = () => {
  return (
    <DefaultLayout>
      <Settings />
    </DefaultLayout>
  );
};

export default SettingsPage;
