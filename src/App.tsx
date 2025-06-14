import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Navigation from './components/Navigation';

const theme = createTheme({
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
});

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    console.log('เปลี่ยนไปหน้า:', page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <div>
            <h2>📊 Dashboard - หน้าหลัก</h2>
            <p>แสดงสถิติภาพรวมของระบบ CBAM</p>
          </div>
        );
      case 'form':
        return (
          <div>
            <h2>📝 กรอกข้อมูล CBAM</h2>
            <p>ฟอร์มสำหรับกรอกข้อมูล Carbon Footprint</p>
          </div>
        );
      case 'reports':
        return (
          <div>
            <h2>📈 รายงานสรุป</h2>
            <p>รายงานการปล่อยก๊าซเรือนกระจก</p>
          </div>
        );
      case 'status':
        return (
          <div>
            <h2>📋 สถานะใบสมัคร</h2>
            <p>ตรวจสอบสถานะการอนุมัติ</p>
          </div>
        );
      case 'admin':
        return (
          <div>
            <h2>🔧 ภาพรวมระบบ</h2>
            <p>สำหรับผู้ดูแลระบบ TGO</p>
          </div>
        );
      default:
        return <div>หน้าไม่พบ</div>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        padding: '20px'
      }}>
        <Container maxWidth="xl">
          <Header 
            companyName="บริษัท เอบีซี จำกัด"
            userStatus="ยืนยันแล้ว"
          />
          
          <Navigation onPageChange={handlePageChange} />
          
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            minHeight: '400px'
          }}>
            {renderCurrentPage()}
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;