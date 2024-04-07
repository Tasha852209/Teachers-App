import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => (
  <MutatingDots
    height="100"
    width="100"
    color="#f4c550;
"
    secondaryColor="#ffdc86"
    radius="12.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '300px',
    }}
    wrapperClass=""
    visible={true}
  />
);
