import React, { forwardRef, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from 'ag-grid-enterprise';
import 'ag-grid-enterprise';
import type { TebDataGridEnterpriseProps } from '../../utils/props';

export * from '../../utils/agGrid';
// AG Grid Enterprise License Key - Hardcoded
const AG_GRID_LICENSE_KEY = 'YOUR_AG_GRID_ENTERPRISE_LICENSE_KEY_HERE';
// Register modules at module level so they are ready before first render
ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey(AG_GRID_LICENSE_KEY);

const TebDataGridEnterprise = forwardRef<AgGridReact, TebDataGridEnterpriseProps>((props, ref) => {

  const { style = { height: 400, width: '100%' }, className,...gridProps } = props;
  const[theme,setTheme] = useState('');
  console.log("TebDataGridEnterprise");
  console.log(props);

  useEffect(() => {
    setTheme(className)
  }, []);

  useEffect(() => {
    setTheme(className)
  }, [className]);


  return (
    <div style={style} className={theme}>
      <AgGridReact
        className={theme}
        ref={ref}
        {...gridProps}
      />
    </div>
  );
});


export default TebDataGridEnterprise; 

