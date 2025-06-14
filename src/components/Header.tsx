import React from 'react';
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';

interface HeaderProps {
  companyName?: string;
  userStatus?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  companyName = "บริษัท เอบีซี จำกัด",
  userStatus = "ยืนยันแล้ว"
}) => {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <AppBar position="static" sx={{ 
      background: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      borderRadius: '15px',
      marginBottom: '30px'
    }}>
      <Toolbar sx={{ padding: '20px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Box sx={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, #4CAF50, #2E7D32)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px'
          }}>
            TGO
          </Box>
          <Box>
            <Typography variant="h4" sx={{ color: '#333', marginBottom: '5px', fontWeight: 'bold' }}>
              CBAM Carbon Footprint Platform
            </Typography>
            <Typography sx={{ color: '#666', fontSize: '0.9em' }}>
              องค์การบริหารจัดการก๊าซเรือนกระจก (องค์การมหาชน)
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Box sx={{ textAlign: 'right' }}>
            <Typography sx={{ fontWeight: 600, color: '#333' }}>
              {companyName}
            </Typography>
            <Typography sx={{ color: '#666', fontSize: '0.9em' }}>
              สถานะ: {userStatus}
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            onClick={handleLogout}
            sx={{
              background: 'linear-gradient(45deg, #78909c, #546e7a)',
              '&:hover': {
                background: 'linear-gradient(45deg, #546e7a, #455a64)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            ออกจากระบบ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;