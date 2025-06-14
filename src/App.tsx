import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Navigation from './components/Navigation';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  palette: {
    background: {
      default: '#f8f9fa'
    }
  }
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
            <h2 style={{ color: '#1a1a1a', fontWeight: '600', marginBottom: '16px' }}>
              📊 Dashboard - หน้าหลัก
            </h2>
            <p style={{ color: '#666666', fontSize: '1rem' }}>
              แสดงสถิติภาภรวมของระบบ CBAM
            </p>
          </div>
        );
      case 'form':
        return (
          <div>
            <h2 style={{ color: '#1a1a1a', fontWeight: '600', marginBottom: '16px' }}>
              📝 กรอกข้อมูล CBAM
            </h2>
            <p style={{ color: '#666666', fontSize: '1rem' }}>
              ฟอร์มสำหรับกรอกข้อมูล Carbon Footprint
            </p>
          </div>
        );
      case 'reports':
        return (
          <div>
            <h2 style={{ color: '#1a1a1a', fontWeight: '600', marginBottom: '16px' }}>
              📈 รายงานสรุป
            </h2>
            <p style={{ color: '#666666', fontSize: '1rem' }}>
              รายงานการปล่อยก๊าซเรือนกระจก
            </p>
          </div>
        );
      case 'status':
        return (
          <div>
            <h2 style={{ color: '#1a1a1a', fontWeight: '600', marginBottom: '16px' }}>
              📋 สถานะใบสมัคร
            </h2>
            <p style={{ color: '#666666', fontSize: '1rem' }}>
              ตรวจสอบสถานะการอนุมัติ
            </p>
          </div>
        );
      case 'admin':
        return (
          <div>
            <h2 style={{ color: '#1a1a1a', fontWeight: '600', marginBottom: '16px' }}>
              🔧 ภาพรวมระบบ
            </h2>
            <p style={{ color: '#666666', fontSize: '1rem' }}>
              สำหรับผู้ดูแลระบบ TGO
            </p>
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
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        padding: '24px'
      }}>
        <Container maxWidth="xl">
          <Header 
            companyName="บริษัท เอบีซี จำกัด"
            userStatus="ยืนยันแล้ว"
          />
          
          <Navigation onPageChange={handlePageChange} />
          
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '32px',
            minHeight: '400px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            {renderCurrentPage()}
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;