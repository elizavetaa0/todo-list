import { useState } from "react";
import { TaskFiltersProps } from "./type";
import { Button, Typography } from "@mui/material";

export function TaskFilters ({ filter, setFilter }: TaskFiltersProps) {
  return (
    <div style={{ marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Фильтры
      </Typography>
      <Button
        variant={filter === 'all' ? 'contained' : 'outlined'}
        onClick={() => setFilter('all')}
      >
        Все
      </Button>
      <Button
        variant={filter === 'completed' ? 'contained' : 'outlined'}
        onClick={() => setFilter('completed')}
        style={{ marginLeft: '10px' }}
      >
        Completed
      </Button>
      <Button
        variant={filter === 'incomplete' ? 'contained' : 'outlined'}
        onClick={() => setFilter('incomplete')}
        style={{ marginLeft: '10px' }}
      >
        Incomplete
      </Button>
    </div>
  )

}