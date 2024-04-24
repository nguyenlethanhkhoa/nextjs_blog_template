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
import { ThemeProvider } from "./theme-provider";
import Header from "./header";

type Props = {
    children: ReactNode
}

const RootLayout = ({ children }: Props) => {
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
            <StyledMain>
                <MetaConfig {...meta} />
                <StyledWrapper>
                    <div
                        className="lt"
                        style={{
                            height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                        }}
                    >
                        <TagList />
                    </div>
                    <div className="mid">
                        <MobileProfileCard />
                        
                        {/* <FeedHeader /> */}
                        {children}
                        <div className="footer">
                            <Footer />
                        </div>
                    </div>
                    <div
                        className="rt"
                        style={{
                            height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                        }}
                    >
                        <ProfileCard />
                        <PortfolioCard />
                        <ContactCard />
                        <div className="footer">
                            <Footer />
                        </div>
                    </div>
                </StyledWrapper>
            </StyledMain>
        </ThemeProvider>
    )
}

export default RootLayout

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 1rem;
`

const HEADER_HEIGHT = 73

const StyledWrapper = styled.div`
  grid-template-columns: repeat(12, minmax(0, 1fr));

  padding: 2rem 0;
  display: grid;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }

  > .lt {
    display: none;
    overflow: scroll;
    position: sticky;
    grid-column: span 2 / span 2;
    top: ${HEADER_HEIGHT - 10}px;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  > .mid {
    grid-column: span 12 / span 12;

    @media (min-width: 1024px) {
      grid-column: span 7 / span 7;
    }

    > .tags {
      display: block;

      @media (min-width: 1024px) {
        display: none;
      }
    }

    > .footer {
      padding-bottom: 2rem;
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  > .rt {
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: none;
    overflow: scroll;
    position: sticky;
    top: ${HEADER_HEIGHT - 10}px;

    @media (min-width: 1024px) {
      display: block;
      grid-column: span 3 / span 3;
    }

    .footer {
      padding-top: 1rem;
    }
  }
`