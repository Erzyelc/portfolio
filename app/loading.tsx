'use client';

import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
  borderColor: '#35C9E280',
};

const LoadingPage = ({ loading }: { loading: boolean }) => {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <ClipLoader
        loading={loading}
        cssOverride={override}
        size={200}
        aria-label='Loading'
      />
    </div>
  );
};

export default LoadingPage;
