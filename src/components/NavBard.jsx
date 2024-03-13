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

const NavBard = () => {
  const [open, setOpen] = React.useState(false);

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
      bgcolor="#fff"
      height="3pc"
      paddingLeft="1pc"
    >
      <Box component="img" src={Logo} width="8pc" />
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          display: "flex",
          gap: "1pc",
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        {[1, 2, 3].map((value) => (
          <ListItem key={value} disableGutters>
            <ListItemText
              primary={`Line item ${value}`}
              sx={{
                fontWeight: "bold",
              }}
            />
          </ListItem>
        ))}
      </List>
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
