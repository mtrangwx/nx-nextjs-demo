import './topic.module.scss';
import TopicButton from '../components/topic-button/topic-button';
/* eslint-disable-next-line */
export interface TopicProps {}

export function Topic(props: TopicProps) {
  return (
    <div>
      <h1>Topic Button</h1>
      <TopicButton />
    </div>
  );
}

export default Topic;
