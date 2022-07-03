import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from 'theme'

import { Twitter, Medium, Telegram } from 'components/Icons'
import useTheme from 'hooks/useTheme'

const StyledSocialLinks = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
`

const StyledIcon = styled.div`
  margin-right: 12px;
`

const SocialLinks = (): JSX.Element => {
  const theme = useTheme()
  return (
    <StyledSocialLinks>
      <ExternalLink href="https://t.me/lillionorg">
        <StyledIcon>
          <Telegram size={16} color={theme.subText} />
        </StyledIcon>
      </ExternalLink>

      <ExternalLink href="https://twitter.com/lillionorg">
        <StyledIcon>
          <Twitter height={16} width={16} color={theme.subText} />
        </StyledIcon>
      </ExternalLink>

      <ExternalLink href="https://lillion.medium.com/">
        <StyledIcon>
          <Medium height={16} width={16} color={theme.subText} />
        </StyledIcon>
      </ExternalLink>
    </StyledSocialLinks>
  )
}

export default SocialLinks
