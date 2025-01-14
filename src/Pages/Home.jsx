import { useState, useEffect } from "react";
import CardReco from "../components/CardRecomended/CardReco";
import ContainerCats from "../components/ContainerCategories/ContainerCats";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { LinearProgress, Box, Fade, Typography } from "@mui/material";

function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime; 
      const newProgress = Math.max(100 - (elapsed / 3000) * 100, 0); 
      setProgress(newProgress);

      if (newProgress === 0) {
        clearInterval(timer); 
      }
    }, 100);

    const endLoading = setTimeout(() => {
      setLoading(false);
      clearInterval(timer);
    }, 3500);

    return () => {
      clearInterval(timer);
      clearTimeout(endLoading);
    };
  }, []);

  return (
    <main style={{ backgroundColor: "#262626" }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" ,alignItems: "center", gap: 4  }}>
            <Typography variant="h3" fontWeight="bold" color="#FFF">
            Bienvenido a 
            </Typography>
            <img src="../../img/LogoMain.png" alt="Logo aluraflix" style={{ width: "300px" }}/>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              width: "60%",
              height: 10,
              borderRadius: 5,
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #2575fc, #f9d56e)',
              backgroundSize: '400% 400%',
              transform: 'rotate(180deg)',
              animation: 'gradientFlow 4s ease infinite',
              '& .MuiLinearProgress-bar': {
                background: 'rgba(255,255,255,0.7)',
                borderRadius: 5,
                boxShadow: '0 0 5px rgba(255,255,255,0.5)',
              },
              '@keyframes gradientFlow': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' }
              }
            }}
          />
        </Box>
      ) : (
        <Fade in={!loading} timeout={1000}>
          <div>
            <Header />
            <CardReco />
            <ContainerCats />
            <Footer />
          </div>
        </Fade>
      )}
    </main>
  );
}

export default Home;
