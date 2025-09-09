import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Play Again Online',
    //Svg: require('@site/static/img/undraw_play_online.svg').default,
    description: (
      <>
        DanceParty restores multiplayer and online services for games that no longer have official servers, letting you enjoy them once more with friends worldwide.
      </>
    ),
  },
  {
    title: 'Simple Setup',
    //Svg: require('@site/static/img/undraw_tutorial.svg').default,
    description: (
      <>
        Our step-by-step guides make it easy to connect your console or emulator. No advanced technical knowledge required — just follow along.
      </>
    ),
  },
  {
    title: 'Community Driven',
    //Svg: require('@site/static/img/undraw_community.svg').default,
    description: (
      <>
        Built and maintained by passionate fans, DanceParty grows with its community. Share feedback, contribute, and help shape the future of online play.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
