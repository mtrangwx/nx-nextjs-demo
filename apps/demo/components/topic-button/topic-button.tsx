// import './topic-button.scss';
import styles from './topic-button.module.scss';
import classnames from 'classnames/bind';


type ButtonType = 'primary' | 'tertiary' | 'secondary' | 'destructive';

/* eslint-disable-next-line */
export interface TopicButtonProps {
  buttonType?: ButtonType; 
}

const buttonClassHelper = (buttonType: ButtonType): string => {
  if (buttonType == 'tertiary') {
    return `${styles.button} ${styles.tertiary}`;
  } else if (buttonType == 'secondary') {
    return `${styles.button} ${styles.secondary}`;
  } else if (buttonType == 'destructive') {
    return `${styles.button} ${styles.destructive}`;
  } else {
    return `${styles.button}`;
  }
}

export function TopicButton(props: TopicButtonProps) {
  const cx = classnames.bind(styles);

  return (
    <div>

      <h2>Styled Buttons with CSS Module</h2>
      
      <h3>Helper</h3>
      <button className={buttonClassHelper(props.buttonType)}>Button {props.buttonType}</button>

      <h3>Cx</h3>
      <button className={cx({button: styles.button}, props.buttonType && props.buttonType)}>Button {props.buttonType}</button>

      {/* <button className={`${styles.button}`}>Button primary</button>
      <br/>
      <button className={`${styles.button} ${styles.secondary}`}>Button secondary</button>
      <br/>
      <button className={`${styles.button} ${styles.tertiary}`}>Button tertiary</button>
      <br/>
      <button className={`${styles.button} ${styles.destructive}`}>Button destructive</button> */}

      {/* <button className={cx('primary', {button: styles.button})}>Button Primary</button>
      <br/>
      <button className={cx('secondary', {button: styles.button})}>Button Secondary</button>
      <br/>
      <button className={cx('tertiary', {button: styles.button})}>Button Tertiary</button>
      <br/>
      <button className={cx({button: styles.button}, 'destructive')}>Button Destructive</button> */}

      {/* <p className={styles.highlight}>Text Bold</p> */}

      {/* <h2>Styled Buttons using Global Styling</h2> 
      <button className="button primary">Button primary</button>
      <br/>
      <button className="button secondary">Button secondary</button>
      <br/>
      <button className="button destructive">Button destructive</button> */}
    </div>
  );
}

export default TopicButton;
