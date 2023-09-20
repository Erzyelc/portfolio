const caseStudies = {
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'subHeading',
      title: 'Subheading',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
  ],
};

export default caseStudies;
