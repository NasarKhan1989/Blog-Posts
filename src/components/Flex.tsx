import styled from 'styled-components/macro';
import Box, { Props as BoxProps } from './Box';

interface Props extends BoxProps {}

const Flex = styled(Box)({ display: 'flex' });

export default Flex;
export type { Props };
