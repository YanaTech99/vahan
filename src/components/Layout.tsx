import { Box, styled } from '@gluestack-ui/themed';

const Layout = styled(Box, { p: '$5', pb: '$10', _android: { pb: '$5' } });

// const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
//   return <Box p={20}>{children}</Box>;
// };

export default Layout;
