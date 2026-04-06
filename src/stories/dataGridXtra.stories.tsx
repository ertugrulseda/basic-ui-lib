import React, { useRef, useCallback } from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TebDataGridXtra2 } from '../components';
import type { GridApi } from '../components';

export default {
  title: "Components/TebDataGridXtra2",
  component: TebDataGridXtra2,
  argTypes: {
    rowData: {
      control: 'object',
      description: 'Tabloda gösterilecek satır verisi dizisi'
    },
    columnDefs: {
      control: 'object',
      description: 'Sütun tanımları dizisi'
    },
    pagination: {
      control: 'boolean',
      description: 'Sayfalama aktif/pasif'
    },
    paginationPageSize: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      description: 'Sayfa başına gösterilecek satır sayısı'
    },
    animateRows: {
      control: 'boolean',
      description: 'Satır animasyonlarını etkinleştir'
    },
    rowSelection: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Satır seçim modu'
    },
    suppressRowClickSelection: {
      control: 'boolean',
      description: 'Satıra tıklandığında seçimi engelle'
    },
    suppressCellFocus: {
      control: 'boolean',
      description: 'Hücre odaklanmasını devre dışı bırak'
    },
    domLayout: {
      control: 'select',
      options: ['normal', 'autoHeight', 'print'],
      description: 'Grid DOM yerleşim modu'
    },
    rowHeight: {
      control: { type: 'number', min: 20, max: 200, step: 1 },
      description: 'Satır yüksekliği (piksel)'
    },
    headerHeight: {
      control: { type: 'number', min: 20, max: 200, step: 1 },
      description: 'Başlık yüksekliği (piksel)'
    },
    defaultColDef: {
      control: 'object',
      description: 'Tüm sütunlara uygulanacak varsayılan sütun ayarları'
    },
    style: {
      control: 'object',
      description: 'Grid wrapper div inline stili'
    }
  }
} as ComponentMeta<typeof TebDataGridXtra2>;

export const BasicTebDataGridXtra2: ComponentStory<typeof TebDataGridXtra2> = (args: any) => <TebDataGridXtra2 {...args} />;

BasicTebDataGridXtra2.args = {
  rowData: [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ],
  columnDefs: [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ],
  pagination: false,
  paginationPageSize: 10,
  animateRows: false,
  rowSelection: 'single',
  suppressRowClickSelection: false,
  suppressCellFocus: false,
  domLayout: 'normal',
  rowHeight: 42,
  headerHeight: 48,
  defaultColDef: { sortable: true, resizable: true, flex: 1 },
  style: { height: 400, width: '100%' }
};

export const EnterpriseTebDataGridXtra2: ComponentStory<typeof TebDataGridXtra2> = (args: any) => <TebDataGridXtra2 {...args} />;

EnterpriseTebDataGridXtra2.args = {
  rowData: [
    { make: 'Toyota', model: 'Celica', price: 35000, country: 'Japan' },
    { make: 'Ford', model: 'Mondeo', price: 32000, country: 'USA' },
    { make: 'Porsche', model: 'Boxster', price: 72000, country: 'Germany' },
    { make: 'BMW', model: 'X5', price: 65000, country: 'Germany' },
    { make: 'Audi', model: 'A4', price: 45000, country: 'Germany' }
  ],
  columnDefs: [
    { field: 'make', filter: 'agTextColumnFilter' },
    { field: 'model', filter: 'agTextColumnFilter' },
    { field: 'price', filter: 'agNumberColumnFilter' },
    { field: 'country', filter: 'agSetColumnFilter' }
  ],
  animateRows: true,
  pagination: true,
  paginationPageSize: 10,
  rowSelection: 'multiple',
  suppressRowClickSelection: false,
  suppressCellFocus: false,
  domLayout: 'normal',
  rowHeight: 42,
  headerHeight: 48,
  defaultColDef: { sortable: true, resizable: true, flex: 1 },
  style: { height: 400, width: '100%' }
};

const treeRowData = [
  { id: 1,  orgHierarchy: ['Erica Rogers'],          jobTitle: 'CEO',                    employmentType: 'Permanent' },
  { id: 2,  orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],   jobTitle: 'Exec. Vice President', employmentType: 'Permanent' },
  { id: 3,  orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'IDris Martin'],  jobTitle: 'Engineer',  employmentType: 'Permanent' },
  { id: 4,  orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Leah Flowers'],  jobTitle: 'Parts Man', employmentType: 'Contract'  },
  { id: 5,  orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Tammy Sutton'],  jobTitle: 'Engineer',  employmentType: 'Permanent' },
  { id: 6,  orgHierarchy: ['Erica Rogers', 'Mila Ward'],         jobTitle: 'Vice President', employmentType: 'Permanent' },
  { id: 7,  orgHierarchy: ['Erica Rogers', 'Mila Ward', 'Evelyn Hughes'],  jobTitle: 'Data Analyst', employmentType: 'Permanent' },
  { id: 8,  orgHierarchy: ['Erica Rogers', 'Mila Ward', 'Todd Tyler'],    jobTitle: 'Mechanic',     employmentType: 'Contract'  },
];

const treeColumnDefs = [
  { field: 'jobTitle',        headerName: 'Job Title',         flex: 2 },
  { field: 'employmentType',  headerName: 'Employment Type',   flex: 1 },
];

const masterRowData = [
  {
    account: 'Ash', calls: 5, minutes: 1.35,
    callRecords: [
      { name: 'Susan', callId: 'C1', duration: 1, switchCode: 'SW1', direction: 'Out', number: '(415) 111-1111' },
      { name: 'Susan', callId: 'C2', duration: 0.25, switchCode: 'SW1', direction: 'Out', number: '(415) 111-1111' },
    ]
  },
  {
    account: 'Fry', calls: 4, minutes: 4.69,
    callRecords: [
      { name: 'Mela', callId: 'C3', duration: 3.5, switchCode: 'SW2', direction: 'In', number: '(416) 222-2222' },
      { name: 'Mela', callId: 'C4', duration: 1.19, switchCode: 'SW2', direction: 'In', number: '(416) 222-2222' },
    ]
  },
  {
    account: 'Cow', calls: 7, minutes: 18.25,
    callRecords: [
      { name: 'Bull', callId: 'C5', duration: 10, switchCode: 'SW3', direction: 'Out', number: '(417) 333-3333' },
      { name: 'Bull', callId: 'C6', duration: 8.25, switchCode: 'SW3', direction: 'In', number: '(417) 333-3333' },
    ]
  },
];

const masterColumnDefs = [
  { field: 'account', headerName: 'Hesap', flex: 1, cellRenderer: 'agGroupCellRenderer' },
  { field: 'calls', headerName: 'Çağrı Sayısı', flex: 1 },
  { field: 'minutes', headerName: 'Dakika', flex: 1, valueFormatter: (p: any) => p.value.toFixed(2) },
];

const detailColumnDefsWithCheckbox = [
  {
    headerName: '',
    width: 50,
    checkboxSelection: true,
    headerCheckboxSelection: false,
    suppressSizeToFit: true,
  },
  { field: 'callId', headerName: 'Çağrı ID', flex: 1 },
  { field: 'name', headerName: 'İsim', flex: 1 },
  { field: 'duration', headerName: 'Süre (dk)', flex: 1 },
  { field: 'switchCode', headerName: 'Santral', flex: 1 },
  { field: 'direction', headerName: 'Yön', flex: 1 },
  { field: 'number', headerName: 'Numara', flex: 1 },
];

export const MasterDetailDataGrid: ComponentStory<typeof TebDataGridXtra2> = () => {
  const onDetailSelectionChanged = useCallback((params: any) => {
    const selected = params.api.getSelectedRows();
    if (selected.length > 0) {
      const row = selected[0];
      alert(`İsim: ${row.name}\nYön: ${row.direction}\nNumara: ${row.number}`);
    }
  }, []);

  return (
    <TebDataGridXtra2
      masterDetail
      rowData={masterRowData}
      columnDefs={masterColumnDefs}
      detailCellRendererParams={{
        detailGridOptions: {
          columnDefs: detailColumnDefsWithCheckbox,
          rowSelection: 'single',
          defaultColDef: { sortable: true, resizable: true },
          onSelectionChanged: onDetailSelectionChanged,
        },
        getDetailRowData: (params: any) => params.successCallback(params.data.callRecords),
      }}
      defaultColDef={{ sortable: true, resizable: true }}
      animateRows
      style={{ height: 400, width: '100%' }}
    />
  );
};

export const TreeDataWithExport: ComponentStory<typeof TebDataGridXtra2> = () => {
  const gridApiRef = useRef<GridApi | null>(null);

  const onGridReady = useCallback((params: any) => {
    gridApiRef.current = params.api;
  }, []);

  const handleExcelExport = useCallback(() => {
    gridApiRef.current?.exportDataAsExcel({ fileName: 'org-chart.xlsx' });
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <button onClick={handleExcelExport} style={{ padding: '6px 16px', cursor: 'pointer' }}>
          Excel İndir
        </button>
      </div>
      <TebDataGridXtra2
        treeData
        rowData={treeRowData}
        columnDefs={treeColumnDefs}
        getDataPath={(row: any) => row.orgHierarchy}
        autoGroupColumnDef={{ headerName: 'İsim', minWidth: 220 }}
        groupDefaultExpanded={-1}
        defaultColDef={{ sortable: true, resizable: true }}
        animateRows
        onGridReady={onGridReady}
        style={{ height: 400, width: '100%' }}
      />
    </div>
  );
};
