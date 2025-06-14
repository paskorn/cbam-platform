import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

interface NavigationProps {
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    const pages = ['dashboard', 'form', 'reports', 'status', 'admin'];
    onPageChange(pages[newValue]);
  };

  return (
    <Box sx={{
      background: 'white',
      borderRadius: '15px',
      padding: '10px',
      marginBottom: '30px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
    }}>
      <Tabs 
        value={activeTab} 
        onChange={handleTabChange}
        sx={{
          '& .MuiTab-root': {
            flex: 1,
            padding: '15px 20px',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            fontWeight: 500,
            fontSize: '1rem',
            color: '#666'
          },
          '& .Mui-selected': {
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            color: 'white !important',
            boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)'
          }
        }}
        variant="fullWidth"
      >
        <Tab label="หน้าหลัก" />
        <Tab label="กรอกข้อมูล CBAM" />
        <Tab label="รายงานสรุป" />
        <Tab label="สถานะใบสมัคร" />
        <Tab label="ภาพรวมระบบ" />
      </Tabs>
    </Box>
  );
};

export default Navigation;