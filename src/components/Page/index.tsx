/* React and React Native */
import * as React from 'react';
import { View } from 'react-native';

/* Styles */
import { HeaderContainer, SubtitleLabel, TitleContainer } from './styles';
import { MainContainer, MainTitle } from '~/styles';

interface PageProps {
  title?: string;
  subtitle?: string;
  /**
   * This component is only visible when title is visible as well
   */
  rightComponent?: React.ReactNode;
  children: React.ReactNode;
}

const Page = ({ title, subtitle, rightComponent, children }: PageProps): JSX.Element => {
  return (
    <MainContainer edges={['left', 'right', 'top']}>
      {title && (
        <HeaderContainer>
          <TitleContainer>
            <View>
              <MainTitle>{title}</MainTitle>
              <SubtitleLabel>{subtitle}</SubtitleLabel>
            </View>
            {rightComponent}
          </TitleContainer>
          {/* <Separator /> */}
        </HeaderContainer>
      )}
      {children}
    </MainContainer>
  );
};

export default Page;
