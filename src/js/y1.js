import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import All from './home/all';
import Red from './home/red';
import Green from './home/gren';

export default function Yas() {

  let dat = [{
    id: 1,
    nam: "يومي الاول",
    tmm: false
  }];

  const [allgt, allst] = useState(dat);
  const [ingt, inst] = useState("");
  const [allckgt, allckst] = useState(null);

  // دالة بدء التعديل
  const bttubdat = (tst) => {
    inst(tst.nam);
    allckst(tst.id);
  };

  // دالة الحذف
  const del = (dl) => {
    const dlll = allgt.filter((d) => d.id !== dl.id);
    allst(dlll);
  };

  // دالة الإنجاز
  const tmmm = (v) => {
    let tm1 = allgt.map((t) => {
      if (t.id === v.id) {
        return { ...t, tmm: !t.tmm };
      }
      return t;
    });

    tm1.sort((a, b) => Number(a.tmm) - Number(b.tmm));
    allst(tm1);
  };

  // دالة تنفيذ التعديل
  const ck = () => {
    const ub = allgt.map((r) => {
      if (r.id === allckgt) {
        return { ...r, nam: ingt };
      }
      return r;
    });

    allst(ub);
    inst("");
    allckst(null);
  };

  // دالة الإضافة
  const handleAdd = () => {
    if (ingt.trim() === "") return;

    const hed = [
      ...allgt,
      {
        id: Date.now(),
        nam: ingt,
        tmm: false
      }
    ];

    hed.sort((a, b) => Number(a.tmm) - Number(b.tmm));
    allst(hed);
    inst("");
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: '#dbe2e9',
            minHeight: '70vh',
            p: 3,
            borderRadius: 2,
            mt: 4,
            pb: '100px'
          }}
        >
          <Typography style={{ fontSize: "40px", textAlign: "center" }} variant="body1">
            مهامي
          </Typography>

          {/* أزرار التنقل بين الصفحات */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
              <Link to="/">
                <Button>الكل</Button>
              </Link>
              <Link to="/green">
                <Button>منجز</Button>
              </Link>
              <Link to="/red">
                <Button>غير منجز</Button>
              </Link>
            </ButtonGroup>
          </div>

          {/* عرض الصفحة المطلوبة داخل Box */}
          <Routes>
            <Route
              path="/"
              element={<All tasks={allgt} onEdit={bttubdat} onToggle={tmmm} onDelete={del} />}
            />
            <Route
              path="/green"
              element={<Green tasks={allgt} onEdit={bttubdat} onToggle={tmmm} onDelete={del} />}
            />
            <Route
              path="/red"
              element={<Red tasks={allgt} onEdit={bttubdat} onToggle={tmmm} onDelete={del} />}
            />
          </Routes>

        </Box>
      </Container>

      {/* شريط الإدخال الثابت */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'white',
          p: 2,
          boxShadow: '0px -2px 10px rgba(0,0,0,0.1)',
          zIndex: 1000
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              onClick={allckgt !== null ? ck : handleAdd}
              variant="contained"
              color="primary"
              sx={{ px: 3 }}
            >
              {allckgt !== null ? "تعديل" : "اضافه"}
            </Button>

            <TextField
              value={ingt}
              onChange={(o) => inst(o.target.value)}
              fullWidth
              placeholder="عنوان المهمة"
              variant="outlined"
              size="small"
              dir="rtl"
              autoFocus
              onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                  e.preventDefault();
                  if (allckgt !== null) {
        ck();
      } else {
        handleAdd();
      }
                }
                
              }}
            />
          </Box>
        </Container>
      </Box>

    </React.Fragment>
  );
}