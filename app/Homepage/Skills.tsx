import SkillCard from '../../components/reusable/SkillCard';

const Skills = () => {
  return (
    <section className='mt-32 flex h-[500px] flex-col items-center justify-center gap-10 bg-white-900 dark:bg-gray-900'>
      <section className='flex justify-center'>
        <h2 className='relative w-fit text-gray-900 dark:text-white-900'>
          <div className='relative z-10'>My Skills</div>
          <div className='absolute bottom-0.5 z-0 h-3.5 w-full bg-accent' />
        </h2>
      </section>
      <section className='flex h-64 w-[1270px] flex-wrap items-center justify-center gap-10'>
        <SkillCard image='/icons/jsColored.svg' />
        <SkillCard image='/icons/react.svg' />
        <SkillCard image='/icons/reduxColored.svg' />
        <SkillCard image='/icons/nextColored.svg' />
        <SkillCard image='/icons/tsColored.svg' />
        <SkillCard image='/icons/htmlColored.svg' />
        <SkillCard image='/icons/cssColored.svg' />
        <SkillCard image='/icons/sassColored.svg' />
        <SkillCard image='/icons/muiColored.svg' />
        <SkillCard image='/icons/tailwindColored.svg' />
        <SkillCard image='/icons/motionColored.svg' />
        <SkillCard image='/icons/gitColored.svg' />
        <SkillCard image='/icons/githubColored.svg' />
        <SkillCard image='/icons/nodejsColored.svg' />
        <SkillCard image='/icons/exColored.svg' />
        <SkillCard image='/icons/mongodbColored.svg' />
      </section>
    </section>
  );
};

export default Skills;
