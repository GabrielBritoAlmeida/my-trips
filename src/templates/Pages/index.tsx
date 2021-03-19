import LinkWrapper from 'components/LinkWrapper'

import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

export function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <S.Wrapper>
      <LinkWrapper href="/">
        <CloseCircleOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Wrapper>
  )
}
