import { RouteComponentProps } from '@reach/router';
import React, { useState } from 'react';
import { Button } from '@app/components/ui/Button';
import { ManageDriverModal } from './ManageDriverModal';

interface Props extends RouteComponentProps {}

export const Drivers: React.FC<Props> = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full py-6 px-8">
      <div className="w-full flex justify-end">
        <Button onClick={() => { setModal(true); }}>+ Add driver</Button>
      </div>
      <div className="tabelka">Tabelka</div>
      {modal && (
        <ManageDriverModal
          handleClose={() => { setModal(false); }}
        />
      )}
    </div>
  );
};
