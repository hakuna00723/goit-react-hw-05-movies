import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <FallingLines
      color="darkslategrey"
      width="200"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
};

export default Loader;
