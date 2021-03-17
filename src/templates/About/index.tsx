import LinkWrapper from 'components/LinkWrapper'

import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'

import * as S from './styles'

export const AboutTemplate: React.FC = () => {
  return (
    <S.Wrapper>
      <LinkWrapper href="/">
        <CloseCircleOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum
          aliquam excepturi placeat dicta saepe! Sint, laborum sequi? Beatae
          necessitatibus placeat delectus quod alias maiores, officia
          exercitationem quia debitis saepe.
        </p>
      </S.Body>
    </S.Wrapper>
  )
}
