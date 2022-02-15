import React from 'react';
import { PivotViewComponent, GroupingBar, Inject } from '@syncfusion/ej2-react-pivotview';
import {pivotData} from './data';
import './App.css';

function App() {
 return (
    <div id="wrapper">
      <PivotViewComponent 
        showGroupingBar={true}
        showValuesButton={true}
        groupingBarSettings={{
          showFieldsPanel: true, showFilterIcon: true
          , showSortIcon: true, showRemoveIcon: true
          , allowDragAndDrop: true, showValueTypeIcon: true
        }}
        dataSourceSettings={{
          dataSource: pivotData,
          rows: [{ name: 'Country' }, {name: 'Products'}],
          columns: [{ name: 'Year' }],
          values: [
            { name: 'Sold', caption: 'Units Sold' }, 
            { name: 'Amount', caption: 'Sold Amount' }
          ],
          excludeFields: ['Products', 'Quarter']
        }}>
          <Inject services={[GroupingBar]}></Inject>
      </PivotViewComponent>
    </div>
  );
}

export default App;
