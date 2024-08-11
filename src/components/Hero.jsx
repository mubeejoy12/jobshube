    <Box
      sx={{
        background: "#36517e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1320px",
          width: "100%",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            order: { xs: 1, md: 2 },
            alignItems: "center",
            width: "100%",
            maxWidth: { xs: "80%", sm: "70%", md: "100%" },
            margin: "0 auto",
          }}
        >
          <Box
            component="img"
            src={jobhubImg}
            alt="Jobshub Image"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: { xs: "100%", md: "95%" },
              animation:
                "upDown 2s ease-in-out infinite alternate-reverse both",
            }}
          />
        </Box>
      </Box>
