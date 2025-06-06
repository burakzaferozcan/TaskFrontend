/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';

import { fCurrency } from 'src/utils/format-number';
import { fTime, fDate } from 'src/utils/format-time';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

export function RenderCellPrice({ params }) {
  return <>{fCurrency(params.row.price)}</>;
}

RenderCellPrice.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderRemarkType({ params }) {
  return <>{fCurrency(params.row.price)}</>;
}

RenderRemarkType.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderRemarkProject({ params }) {
  return <>{fCurrency(params.row.category)}</>;
}

RenderRemarkProject.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderRemarkOwner({ params }) {
  return <>{fCurrency(params.row.price)}</>;
}

RenderRemarkOwner.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};
export function RenderRemarkWriter({ params }) {
  return <>{fCurrency(params.row.price)}</>;
}

RenderRemarkWriter.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderRemarkTitle({ params }) {
  return <>{fCurrency(params.row.price)}</>;
}

RenderRemarkTitle.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderCellPublish({ params }) {
  return (
    <Label
      variant="soft"
      color={
        // eslint-disable-next-line no-nested-ternary
        params.row.price === 83.74
          ? 'primary'
          : params.row.price === 97.14
            ? 'secondary'
            : params.row.price === 68.71
              ? 'info'
              : params.row.price === 85.21
                ? 'warning'
                : // eslint-disable-next-line no-nested-ternary
                  params.row.price === 52.17
                  ? 'error'
                  : params.row.price === 25.18
                    ? 'success'
                    : 'default'
      }
    >
      {params.row.publish}
    </Label>
  );
}

RenderCellPublish.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderCellCreatedAt({ params }) {
  return (
    <ListItemText
      primary={fDate(params.row.createdAt)}
      secondary={fTime(params.row.createdAt)}
      primaryTypographyProps={{ typography: 'body2', noWrap: true }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: 'span',
        typography: 'caption',
      }}
    />
  );
}

RenderCellCreatedAt.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderCellStock({ params }) {
  return (
    <Stack sx={{ typography: 'caption', color: 'text.secondary' }}>
      <LinearProgress
        value={(params.row.available * 100) / params.row.quantity}
        variant="determinate"
        color={
          (params.row.inventoryType === 'out of stock' && 'error') ||
          (params.row.inventoryType === 'low stock' && 'warning') ||
          'success'
        }
        sx={{ mb: 1, height: 6, maxWidth: 80 }}
      />
      {!!params.row.available && params.row.available} {params.row.inventoryType}
    </Stack>
  );
}

RenderCellStock.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderRemarkNumber({ params }) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      {/* <Avatar     TODO: Resim kısmı listede remark liste istenirse başka resim eklenebilir.
        alt={params.row.name}
        src={params.row.coverUrl}
        variant="rounded"
        sx={{ width: 64, height: 64, mr: 2 }}
      /> */}

      <ListItemText
        disableTypography
        primary={
          <Link
            noWrap
            color="inherit"
            variant="subtitle2"
            onClick={params.row.onViewRow}
            sx={{ cursor: 'pointer' }}
          >
            {params.row.name}
          </Link>
        }
        secondary={
          <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
            {params.row.category}
          </Box>
        }
        sx={{ display: 'flex', flexDirection: 'column' }}
      />
    </Stack>
  );
}

RenderRemarkNumber.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};
export function RenderCellDesing({ params }) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      {/* <Avatar     TODO: Resim kısmı listede remark liste istenirse başka resim eklenebilir.
        alt={params.row.name}
        src={params.row.coverUrl}
        variant="rounded"
        sx={{ width: 64, height: 64, mr: 2 }}
      /> */}

      <ListItemText
        disableTypography
        primary={
          <Link
            noWrap
            color="inherit"
            variant="subtitle2"
            onClick={params.row.onViewRow}
            sx={{ cursor: 'pointer' }}
          >
            {params.row.name}
          </Link>
        }
        secondary={
          <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
            {params.row.category}
          </Box>
        }
        sx={{ display: 'flex', flexDirection: 'column' }}
      />
    </Stack>
  );
}

RenderCellDesing.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};
