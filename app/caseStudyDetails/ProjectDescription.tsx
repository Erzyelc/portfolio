import React from 'react';

type Props = {
  description: string;
  description2?: string;
  description3?: string;
};

const ProjectDescription = ({
  description,
  description2,
  description3,
}: Props) => {
  return (
    <section className=' flex max-w-[878px] flex-col items-center justify-center gap-10 text-xl  font-normal leading-[30px] text-slate-500 dark:text-sky-50'>
      <p>{description}</p>
      <p>{description2}</p>
      <p>{description3}</p>
    </section>
  );
};

export default ProjectDescription;
