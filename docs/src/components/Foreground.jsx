import React, { useRef } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum this is the demo text for this project.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum this is the demo text for this project.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum this is the demo text for this project.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    
      <div ref={ref} className='fixed z-[3] top-0 left-0 h-[100vh] w-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card key={index} data={item} refrence={ref} />
        ))}
      </div>
  );
};

export default Foreground;
