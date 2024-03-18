import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Stack } from "@mui/material";
import Logo from "../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";

const NavBard = () => {
  const [open, setOpen] = React.useState(false);
  const Navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      height="3pc"
      padding="0 1pc"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        width="100%"
      >
        <Box
          component="img"
          src={Logo}
          width="8pc"
          onClick={() => Navigate("/Home")}
        />
        <List
          sx={{
            display: "flex",
            gap: "0.6pc",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          {["Handbags", "Watches", "Skinacare", "Jewellery", "Apparels"].map(
            (value) => (
              <Button key={value} variant="text">
                {value}
              </Button>
            )
          )}
        </List>
      </Stack>
      <Button
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          marginRight: "1pc",
        }}
        onClick={toggleDrawer(true)}
      >
        Open drawer
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Stack>
  );
};

export default NavBard;
