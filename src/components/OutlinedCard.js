import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// const card = (
//   <React.Fragment>
    
//     <CardContent>
//       {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography> */}
//       <Typography variant="h5" component="div">
//         Found Keywords
//       </Typography>
//       {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography> */}
//       <Typography variant="body2">
//         First, Second and Third
//       </Typography>
//     </CardContent>

//   </React.Fragment>
// );

// const OutlinedCard = ({ heading, keywords }) => {
// // export default function OutlinedCard() {
//   return (
//     <Box sx={{ width: 1/2 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }

// export default OutlinedCard;

const OutlinedCard = ({ heading, color, keywords }) => {

    const card = (
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div" color={color}>
            {heading} {/* Render the heading dynamically */}
          </Typography>
          <Typography variant="body2">
            {keywords}
          </Typography>
        </CardContent>
      </React.Fragment>
    );
  
    return (
      <Box sx={{ width: '50%' }} className="bbb">
        <Card variant="outlined">{card}</Card>
      </Box>
    );
};
  
export default OutlinedCard;

