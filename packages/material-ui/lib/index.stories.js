import React from 'react';

import { storiesOf } from '@storybook/react';
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from './index';

const data = [
  { id: 1, name: 'Test' }
];

storiesOf('MaterialUI', module)
.add('Simple table', () => (
  <Table data={data}>
      <TableHead onSort={function(){}} sortBy="ID">
          <TableHeader sortByKey="ID" width={100}>ID</TableHeader>
          <TableHeader>Name</TableHeader>
      </TableHead>
      <TableBody>
          {(item) => (
              <TableRow hover>
                  <TableData>{item.id}</TableData>
                  <TableData>{item.name}</TableData>
              </TableRow>
          )}
      </TableBody>
  </Table>
));

