import React, { forwardRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './ag-theme-alpine-compat.css';
import './ag-theme-quartz-compat.css';
import './ag-theme-material-compat.css';
import 'ag-grid-enterprise';
import type { TebDataGridEnterpriseProps } from '../../utils/props';

export * from '../../utils/agGrid';
// AG Grid Enterprise License Key - Hardcoded
const AG_GRID_LICENSE_KEY = 'YOUR_AG_GRID_ENTERPRISE_LICENSE_KEY_HERE';
// Register modules at module level so they are ready before first render
ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey(AG_GRID_LICENSE_KEY);

const TebDataGridEnterprise = forwardRef<AgGridReact, TebDataGridEnterpriseProps>((props, ref) => {

  const { style = { height: 400, width: '100%' }, className = 'ag-theme-quartz', gridOptions, ...gridProps } = props;

  return (
    <div style={style} className={className}>
      <AgGridReact
        className={className}
        ref={ref}
        gridOptions={{ theme: 'legacy', ...gridOptions }}
        {...gridProps}
      />
    </div>
  );
});


export default TebDataGridEnterprise; 

