import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Header from './components/Header';

const theme = createTheme({
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
});

function App() {
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
          
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div>
              <h2>🎉 CBAM Platform Development Started!</h2>
              <p>Header Component สร้างเสร็จแล้ว! ขั้นต่อไปคือ Navigation และ Dashboard</p>
            </div>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;