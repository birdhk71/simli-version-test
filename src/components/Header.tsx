import { memo } from 'react'
import {
  HEADER_HEIGHT,
  PRIMARY_ACHROMATIC_BACKGROUND_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  TABLET_MIN_WIDTH,
} from 'src/models/constants'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { FlexContainerAlignCenter } from 'src/styles/FlexContainer'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const FixedHeader = styled.header`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  height: ${HEADER_HEIGHT};
  box-shadow: 0 -2px 5px 0 rgba(142, 142, 142, 0.25);
  background-color: #ffffff;
`

const GridContainerAlignCenter = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;

  height: 100%;
`

const FlexContainerColumnCenterCenter = styled(FlexContainerAlignCenter)`
  flex-flow: column nowrap;
  justify-content: center;

  height: 100%;
`

const NoMarginH6 = styled.h5`
  margin: 0;
`

const SelectedIconStyle = { fontSize: 28, color: PRIMARY_BACKGROUND_COLOR }

const UnSelectedIconStyle = { fontSize: 28, color: PRIMARY_ACHROMATIC_BACKGROUND_COLOR }
const UnSelectedTextStyle = { color: PRIMARY_ACHROMATIC_BACKGROUND_COLOR }

function Header() {
  const { asPath } = useRouter()

  const homePageUrl = '/'
  const feedPageUrl = '/feed' //  성격테스트
  const favoritePageUrl = `/users/favorite-menus` //  중독테스트
  const userOrdersPageUrl = `/users/orders`
  const myPageUrl = `/users` // 게시판

  return (
    <FixedHeader>
      <GridContainerAlignCenter>
        <ClientSideLink href={homePageUrl}>
          <FlexContainerColumnCenterCenter>
            <NoMarginH6 style={asPath === homePageUrl ? undefined : UnSelectedTextStyle}>
              홈
            </NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href={feedPageUrl}>
          <FlexContainerColumnCenterCenter>
            <NoMarginH6 style={asPath === feedPageUrl ? undefined : UnSelectedTextStyle}>
              성격테스트
            </NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href={favoritePageUrl}>
          <FlexContainerColumnCenterCenter>
            <NoMarginH6 style={asPath === favoritePageUrl ? undefined : UnSelectedTextStyle}>
              중독테스트
            </NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href={userOrdersPageUrl}>
          <FlexContainerColumnCenterCenter>
            <NoMarginH6
              style={asPath === userOrdersPageUrl ? undefined : UnSelectedTextStyle}
            ></NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href={myPageUrl}>
          <FlexContainerColumnCenterCenter>
            <NoMarginH6 style={asPath === myPageUrl ? undefined : UnSelectedTextStyle}>
              게시판
            </NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
      </GridContainerAlignCenter>
    </FixedHeader>
  )
}

export default memo(Header)
