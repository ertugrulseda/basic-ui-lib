export interface InputState {
  disabled: boolean;
  error: boolean;
  size?: InputSize;
}

export interface InputStyle {
  width: string | number;
  color: string;
  zIndex: number;
  margin?: string | number;
} 

export enum InputSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
} 

export type MuiSize = 'small' | 'medium' | undefined;

export type {
  // Grid core
  GridOptions,
  GridApi,
  GridState,
  GridReadyEvent,
  // Column definitions
  ColDef,
  ColGroupDef,
  ColTypeDef,
  ColTypeDefs,
  // Column state
  Column,
  ColumnGroup,
  ColumnState,
  ApplyColumnStateParams,
  // Row node
  IRowNode,
  RowPinnedType,
  // Events
  CellClickedEvent,
  CellValueChangedEvent,
  RowClickedEvent,
  RowDoubleClickedEvent,
  SelectionChangedEvent,
  FilterChangedEvent,
  SortChangedEvent,
  SortModelItem,
  // Value callbacks
  ValueGetterParams,
  ValueSetterParams,
  ValueFormatterParams,
  ValueParserParams,
  // Cell renderer / editor
  ICellRendererParams,
  ICellEditorParams,
  // Cell range (enterprise)
  CellRange,
  CellRangeParams,
  // Data transactions
  RowDataTransaction,
  RowNodeTransaction,
  ServerSideTransaction,
  ServerSideTransactionResult,
  // Datasources
  IDatasource,
  IGetRowsParams,
  IServerSideDatasource,
  IServerSideGetRowsParams,
  IServerSideGetRowsRequest,
  // Filter types
  IFilterParams,
  TextFilterModel,
  NumberFilterModel,
  DateFilterModel,
  // Cell editor params
  ILargeTextEditorParams,
  INumberCellEditorParams,
  ISelectCellEditorParams,
  ITextCellEditorParams,
  // UI definitions
  MenuItemDef,
  SideBarDef,
  ToolPanelDef,
  // Export
  CsvExportParams,
  ExcelExportParams,
} from 'ag-grid-community';

export type Variants = 'contained' | 'outlined'