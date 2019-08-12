export const panelStyles = {
  default: {
    transition: 'margin 0.15s ease-in-out',
    margin: '0px 0px 1px',
    backgroundColor: 'white',
  },
  disabled: {
    transition: 'margin 0.15s ease-in-out',
    margin: '0px 0px 1px',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    color: 'rgba(0, 0, 0, 0.47)',
  },
  entered: { margin: '0px 0px 1px' },
  exited: { margin: '16px 0px 16px' },
};

export const buttonStyles = {
  default: {
    position: 'absolute',
    right: '16px',
    top: '8px',
    transition: 'transform 0.15s ease-in-out',
    transform: 'rotateX(0deg)',
  },
  entered: { transform: 'rotateX(0deg)' },
  exited: { transform: 'rotateX(180deg)' },
};

export const summaryStyles = {
  default: {
    transition: 'padding 0.15s ease-in-out',
    padding: '10px 10px',
    position: 'relative',
    cursor: 'pointer',
  },
  entered: { padding: '10px 16px' },
  exited: { padding: '26px 16px' },
};

export const detailsStyles = {
  default: {
    transition: 'all 0.15s ease-in-out',
    padding: '0px 16px',
    paddingBottom: '0px',
    overflow: 'hidden',
    height: '0px',
  },
  transition: height => ({
    entered: { height: '0px', paddingBottom: '0px' },
    exited: { height: `${height + 16}px`, paddingBottom: '16px' },
  }),
};
