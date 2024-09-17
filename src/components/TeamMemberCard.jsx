import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const TeamMemberCard = ({ image, name, position, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, sm: 3 },
        textAlign: isMobile ? "center" : "left",
      }}
    >
      <Box
        component="img"
        src={image}
        sx={{
          width: { xs: "120px", sm: "145px" },
          height: { xs: "120px", sm: "145px" },
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />
      <Box sx={{ gap: 2 }}>
        <Typography
          variant="h6"
          color="#36517e"
          sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          {position}
        </Typography>
        <Box
          component="hr"
          sx={{
            width: "30px",
            height: "1px",
            backgroundColor: "brown",
            border: "none",
            margin: isMobile ? "10px auto" : "10px 0",
          }}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginTop: "10px",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          {[XIcon, FacebookIcon, InstagramIcon, LinkedInIcon].map(
            (Icon, index) => (
              <Icon
                key={index}
                sx={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  border: "1px solid #36517e",
                  padding: { xs: "4px", sm: "5px" },
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  color: "#36517e",
                }}
              />
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMemberCard;
