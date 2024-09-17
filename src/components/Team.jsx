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
