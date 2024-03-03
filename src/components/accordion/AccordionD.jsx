
'use client';

import { Accordion } from 'flowbite-react';
import Container from '../wrappers/Container';

function AccordionD() {
  return (
    <div>
      <Container>

      

    <h1 className='text-center text-4xl  font-[700] text-[#a21a4c] uppercase'>Important information about lost</h1>
    <Accordion className='p-5 max-w-[80%] m-auto mt-5 mb-5'>
      <Accordion.Panel>
        <Accordion.Title className=' hover:bg-[#a21a4c] hover:text-[#fff]'>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-[#a21a4c] font-[500] dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className=" dark:text-gray-400 text-[#a21a4c] font-[500]">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=' hover:bg-[#a21a4c] hover:text-[#fff]'>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 dark:text-gray-400 text-[#a21a4c] font-[500]">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className=" dark:text-gray-400 text-[#a21a4c] font-[500]">
            Check out the&nbsp;
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system &nbsp;
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=' hover:bg-[#a21a4c] hover:text-[#fff]' >What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2  dark:text-gray-400 text-[#a21a4c] font-[500]">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2  dark:text-gray-400 text-[#a21a4c] font-[500]">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2  dark:text-gray-400 text-[#a21a4c] font-[500]">Learn more about these technologies: </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>

    </Container>
    </div>
  );
}

export default AccordionD;