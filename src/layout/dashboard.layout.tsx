import React, { ReactNode, useEffect } from "react"
import styled from "@emotion/styled"
import useScheme from "@/lib/hook/scheme.hook"
import Prism from "prismjs";
import { CONFIG } from "@/config";
import MetaConfig from "@/component/meta-config.component";
import TagList from "@/component/list/category.list";
import MobileProfileCard from "@/component/card/mobile-profile.card";
import Footer from "@/component/footer/default.footer";
import ProfileCard from "@/component/card/profile.card";
import PortfolioCard from "@/component/card/portfolio.card";
import ContactCard from "@/component/card/contact.card";
import Header from "./blog-layout/header";
import { ThemeProvider } from "./blog-layout/theme-provider";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SiMailchimp } from "react-icons/si";

type Props = {
    children: ReactNode
}

const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SiMailchimp />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SiMailchimp />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

const DashboardLayout = ({ children }: Props) => {
    const [scheme] = useScheme()
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const meta = {
        title: CONFIG.BLOG.TITLE,
        description: CONFIG.BLOG.DESCRIPTION,
        type: "website",
        url: "",
    }

    return (
        <ThemeProvider scheme={scheme}>
            <Header fullWidth={false} />
            <Drawer open={true}>
                {DrawerList}
            </Drawer>
        </ThemeProvider>
    )
}

export default DashboardLayout