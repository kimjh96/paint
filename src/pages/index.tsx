import React from 'react';

// Organisms
import Toolbar from 'components/organisms/Toolbar';

// Templates
import GenericTemplate from 'components/templates/GenericTemplate';

function Index() {
  return (
    <GenericTemplate toolbar={<Toolbar color="neutral" />}>
      <canvas />
    </GenericTemplate>
  );
}

export default Index;
