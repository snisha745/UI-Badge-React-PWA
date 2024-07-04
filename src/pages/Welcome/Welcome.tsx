import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { Typography } from '@mui/material';
import { messages } from '@/config';

function Welcome() {
  const isPortrait = useOrientation();

  const width = isPortrait ? '40%' : '30%';
  const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Typography variant="h4" sx={{ color: (theme) => theme.palette.info.main }}>
          {messages.welcome}
        </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
