import Link from "next/link"
import styled from "@emotion/styled"
import { CONFIG } from "@/config"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.BLOG.TITLE}>
      {CONFIG.BLOG.TITLE}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)``
