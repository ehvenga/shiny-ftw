import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Landing from '~/components/crucial/landing/landing';

export default component$(() => {
  return (
    <>
      <Landing />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Pokemon Shiny Contest',
  meta: [
    {
      name: 'Pokemon Shiny Contest',
      content: 'A contest to find the best pokemon shiny',
    },
  ],
};
