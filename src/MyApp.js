import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';

export default function SignIn() {
    <Card>
        <Box sx={{ p: 2, display: 'flex' }}>
            <Avatar variant="rounded" src="avatar1.jpg" />
            <Stack spacing={0.5}>
                <Typography fontWeight={700}>Michael Scott</Typography>
                <Typography variant="body2" color="text.secondary">
                    Scranton, PA
                </Typography>
            </Stack>
            <IconButton>
                test
            </IconButton>
        </Box>
        <Divider />
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
            <Chip>Active account</Chip>
            <Switch />
        </Stack>
    </Card>
}