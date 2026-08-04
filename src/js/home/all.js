import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

export default function All({ tasks, onEdit, onToggle, onDelete }) {
  return (
    <>
      {tasks.map((d) => (
        <Card key={d.id} sx={{ marginTop: "20px", minWidth: 275, direction: "rtl", backgroundColor: d.tmm ? "#ffebee" : "white" }}>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{
                  color: d.tmm ? '#888' : '#000',
                  textDecoration: d.tmm ? 'line-through' : 'none',
                  margin: 0
                }}> {d.nam}</h3>
                <p style={{ margin: 0, color: d.tmm ? "green" : "#666" }}>
                  {d.tmm ? "تم الإنجاز" : "الإنجاز قبل نهاية الشهر"}
                </p>
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <IconButton onClick={() => onEdit(d)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onToggle(d)} color="success">
                  {d.tmm === false ? <CheckIcon /> : <ClearIcon />}
                </IconButton>
                <IconButton onClick={() => onDelete(d)} color="error">
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}