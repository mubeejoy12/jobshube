import DoneAllIcon from "@mui/icons-material/DoneAll";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
          <Stack>
            {[
              "Jobshub offers a meaningful number of Connections to talents.",
              "We are passionate about changing the Workforce Landscape.",
              "Jobshub is positioned as a dedicated Job Company",
            ].map((text, index) => (
              <Stack
                key={index}
                display={"flex"}
                sx={{ flexDirection: "row", alignItems: "center", mb: 1 }}
              >
                <DoneAllIcon
                  sx={{
                    color: "#47b2e4",
                    mr: 1,
                    fontSize: isMobile ? "1rem" : "1.5rem",
                  }}
                />
                <Typography
                  variant={isMobile ? "body2" : "subtitle1"}
                  color="initial"
                >
                  {text}
                </Typography>
              </Stack>
            ))}
          </Stack>
