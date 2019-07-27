export const panelStyles = {
  default: {
    transition: `margin 0.25s ease-in-out`,
    margin: '0px 0px',
    backgroundColor: 'white',
  },
  disabled: {
    transition: `margin 0.25s ease-in-out`,
    margin: '0px 0px',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    color: 'rgba(0, 0, 0, 0.47)',
  },
  entering: { margin: '0px 0px' },
  entered: { margin: '0px 0px' },
  exiting: { margin: '16px 0px' },
  exited: { margin: '16px 0px' },
};

export const buttonStyles = {
  default: {
    position: 'absolute',
    right: '16px',
    top: '8px',
    transition: `transform 0.25s ease-in-out`,
    transform: 'rotateX(0deg)'
  },
  entering: { transform: 'rotateX(0deg)' },
  entered: { transform: 'rotateX(0deg)' },
  exiting: { transform: 'rotateX(180deg)' },
  exited: { transform: 'rotateX(180deg)' },
};

export const summaryStyles = {
  default: {
    transition: `padding 0.25s ease-in-out`,
    padding: '10px 10px',
    position: 'relative',
  },
  entering: { padding: '10px 16px' },
  entered: { padding: '10px 16px' },
  exiting: { padding: '26px 16px' },
  exited: { padding: '26px 16px' },
};

export const detailsStyles = {
  default: {
    transition: `all 0.25s ease-in-out`,
    padding: '0px 16px',
    paddingBottom: '0px',
    overflow: 'hidden',
    height: '0px',
  },
  transition: (height) => ({
    entering: { height: '0px', paddingBottom: '0px' },
    entered: { height: '0px', paddingBottom: '0px' },
    exiting: { height: `${height + 16}px`, paddingBottom: '16px' },
    exited: { height: `${height + 16}px`, paddingBottom: '16px' },
  })
};