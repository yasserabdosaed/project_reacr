import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

export default function Red({ tasks, onEdit, onToggle, onDelete }) {
  // تصفية المهام غير المنجزة فقط
  const nonCompletedTasks = tasks.filter((t) => t.tmm === false);

  return (
    <>
      {nonCompletedTasks.map((d) => (
        <Card key={d.id} sx={{ marginTop: "20px", minWidth: 275, direction: "rtl", backgroundColor: "white" }}>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ color: '#000', margin: 0 }}>{d.nam}</h3>
                <p style={{ margin: 0, color: "#666" }}>الإنجاز قبل نهاية الشهر</p>
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <IconButton onClick={() => onEdit(d)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onToggle(d)} color="success">
                  <CheckIcon />
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