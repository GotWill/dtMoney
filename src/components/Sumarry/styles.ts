import styled, { css } from 'styled-components'

export const SumarryContent = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

type SumarryCardProps = {
  bg?: 'green'
}

export const SumarryCard = styled.div<SumarryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.bg === 'green' &&
    css`
      background-color: ${(props) => props.theme['green-700']};
    `}
`
