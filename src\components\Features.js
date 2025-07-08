import React from 'react';
import Feature from './Feature';

function Features() {
  return (
    <section className="features">
      <Feature
        image="https://picsum.photos/200/301"
        title="Babar Azam"
        description="Captain of Pakistan Cricket Team"
      />
      <Feature
        image="https://picsum.photos/200/302"
        title="Mohammad Rizwan"
        description="Wicket-keeper Batsman"
      />
      <Feature
        image="https://picsum.photos/200/303"
        title="Shaheen Afridi"
        description="Fast Bowler"
      />
    </section>
  );
}

export default Features;