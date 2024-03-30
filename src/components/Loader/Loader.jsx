import { Bars } from 'react-loader-spinner';

const Loader = () => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Bars
      height="60"
      width="60"
      color="#1976d2"
      ariaLabel="bars-loading"
      visible={true}
    />
  </div>
);

export default Loader;
