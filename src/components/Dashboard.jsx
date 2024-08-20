// src/components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Library Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Box textAlign="center" py={5} borderRadius="8px" className="dashboard-card">
              <Link to="/books" className="dashboard-link">
                <Typography variant="h6" color="primary">Manage Books</Typography>
              </Link>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Box textAlign="center" py={5} borderRadius="8px" className="dashboard-card">
              <Link to="/authors" className="dashboard-link">
                <Typography variant="h6" color="primary">Manage Authors</Typography>
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Dashboard;







// // src/components/Dashboard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Grid, Paper, Typography } from '@mui/material';

// const Dashboard = () => {
//   return (
//     <Container>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Library Admin Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
//             <Link to="/books">Manage Books</Link>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
//             <Link to="/authors">Manage Authors</Link>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;
