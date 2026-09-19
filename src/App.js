function App() {
  const styles = {
    page: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      background: "rgba(255,255,255,0.15)",
      backdropFilter: "blur(12px)",
      padding: "40px",
      borderRadius: "20px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      textAlign: "center",
      transition: "0.3s",
    },

    heading: {
      color: "white",
      fontSize: "40px",
      letterSpacing: "2px",
      marginBottom: "10px",
    },

    text: {
      color: "#f3f4f6",
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.page}>
      <div
        style={styles.card}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.05)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <h1 style={styles.heading}>React App</h1>
        <p style={styles.text}>Git Configuration ✨</p>
      </div>
    </div>
  );
}

export default App;