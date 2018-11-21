import React from 'react';

import FoundationLayout from '../layouts/Foundation';
import Live from '../docs/Live';
import { Reveal } from '../components';

const RevealExample = `
class Example extends React.Component {
  render() {
    return (
      <Reveal
        trigger={{
          label: 'Toggle content',
          props: {
            type: 'primary',
          }
        }}
      >
        <p>It's a T. It goes "tuh". Hey, whatcha watching? No! The kind with looting and maybe starting a few fires! Why did you bring us here? There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors!</p>
        <p>Then we'll go with that data file! Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar. I feel like I was mauled by Jesus. Is today's hectic lifestyle making you tense and impatient?</p>
        <p>Why, those are the Grunka-Lunkas! They work here in the Slurm factory. Well, then good news! It's a suppository. But existing is basically all I do! Aww, it's true. I've been hiding it for so long.</p>
      </Reveal>
    );
  }
}
`.trim();

const RevealScope = {
  React,
  Reveal,
};

const RevealPropDescriptions = {
  reveal: 'Show hidden content by default',
  trigger: 'Utilizes the <code>&lt;Button /&gt;</code> component',
};

const RevealDocs = () => (
  <FoundationLayout pageTitle="Reveal">
    <Live
      code={RevealExample}
      scope={RevealScope}
      component={Reveal}
      propDescriptions={RevealPropDescriptions}
    />
  </FoundationLayout>
);

export default RevealDocs;