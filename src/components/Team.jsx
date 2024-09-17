  const teamMembers = [
    {
      image: Team1,
      name: "Walter White",
      position: "Chief Executive Officer",
      description:
        "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    },
    {
      image: Team2,
      name: "Sarah Jhonson",
      position: "Product Manager",
      description:
        "Aut maiores voluptates amet et quis praesentium qui senda para",
    },
    {
      image: Team3,
      name: "William Anderson",
      position: "CTO",
      description:
        "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
    },
    {
      image: Team4,
      name: "Amanda Jepson",
      position: "Accountant",
      description:
        "Dolorum tempora officiis odit laborum officiis et et accusamus",
    },
    <Box
      sx={{
        background: "#f3f5fa",
        padding: { xs: "30px 0", sm: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Box sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Header text={"TEAM"} />
        <Dividers />

        <Typography
          variant={"body1"}
          color="initial"
          sx={{
            mb: { xs: 3, sm: 4, md: 6 },
            textAlign: "center",
            maxWidth: "1200px",
            margin: "0 auto 40px",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            lineHeight: 1.6,
          }}
        >
          Meet the Jobshub Team: A synergy of diverse talents, united by a
          common goal - connecting professionals with opportunities. Our dynamic
          team ensures seamless service delivery, personalized attention, and a
          commitment to your career success.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px 0", sm: "30px 0", md: "40px 0" },
        }}
      >
        <Grid
          container
          sx={{
            width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
            margin: "0 auto",
            gap: { xs: "20px", sm: "25px", md: "30px" },
            justifyContent: "center",
            px: { xs: 2, sm: 0 },
          }}
        >
          {teamMembers.map((member, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={5.5}
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 15px",
                padding: { xs: "15px", sm: "20px", md: "25px", lg: "30px" },
                borderRadius: 2,
                background: "rgb(255, 255, 255)",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  "& .title": {
                    color: "#47b2e4",
                  },
                },
              }}
            >
              <TeamMemberCard {...member} />
            </Grid>
          ))}
        </Grid>
      </Box>
