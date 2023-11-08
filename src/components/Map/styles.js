import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Use rgba color to set background with opacity
    '&:hover': {
      transform: 'scale(1.1)',
      zIndex: 2,
      backgroundColor: 'rgba(255, 255, 255, 1)', // Fully opaque white background on hover
    },
  },
  mapContainer: {
    height: '85vh',
    width: '100%',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
      transform: 'translate(-50%, -50%) scale(1.1)',
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(255, 255, 255, 1)', // Fully opaque white background on hover
    },
  },
  pointer: {
    cursor: 'pointer',
  },
}));
