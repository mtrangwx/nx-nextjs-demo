import './about.module.scss';
import PartyPopper from '../components/party-popper/party-popper';
/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div>
      <h1>You found the about page! <PartyPopper/></h1>
    </div>
  );
}

export default About;
