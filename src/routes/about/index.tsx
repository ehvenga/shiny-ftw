import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import About from '~/components/about/about';

export default component$(() => {
  return (
    <>
      <About />
    </>
  );
});

export const head: DocumentHead = {
  title: 'About Shiny Contest',
  meta: [
    {
      name: 'Pokemon Shiny Contest',
      content: 'A contest to find the best pokemon shiny',
    },
  ],
};
