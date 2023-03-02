// import './topic-button.scss';
import styles from './topic-button.module.scss';
import classnames from 'classnames/bind';

/* eslint-disable-next-line */
export interface TopicButtonProps {}

export function TopicButton(props: TopicButtonProps) {
  const cx = classnames.bind(styles);
  return (
    <div>
      <h2>Styled Buttons with CSS Module</h2>
      <button className={cx('primary', {button: styles.button})}>Button Primary</button>
      <br/>
      <button className={cx('secondary', {button: styles.button})}>Button Secondary</button>
      <br/>
      <button className={cx({button: styles.button}, 'destructive')}>Button Destructive</button>

      <h2>Styled Buttons using Global Styling</h2> 
      <button className="button primary">Button primary</button>
      <br/>
      <button className="button secondary">Button secondary</button>
      <br/>
      <button className="button destructive">Button destructive</button>
    </div>
  );
}

export default TopicButton;
