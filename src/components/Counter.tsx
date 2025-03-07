'use client'

import { useState } from 'react'
import { 
  Container, 
  Paper, 
  Typography, 
  Button, 
  Box,
  Stack
} from '@mui/material'

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          textAlign: 'center',
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)'
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Counter App
        </Typography>
        
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="div" sx={{ mb: 3 }}>
            {count}
          </Typography>
          
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              color="primary"
              size="large"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </Button>
            
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </Button>
            
            <Button 
              variant="outlined"
              size="large"
              onClick={() => setCount(0)}
            >
              Reset
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  )
} 