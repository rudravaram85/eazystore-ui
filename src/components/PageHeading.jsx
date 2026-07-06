import PageTitle from './PageTitle';
import Footer from './footer/Footer';
import styled from 'styled-components';
import EazyButton from './EazyButton';
const H1 = styled.h1`
color: #5b21b6
text-align: center
`;

function PageHeading({ title, children }) {
  const isActive = Math.random() > 0.5;

  const heading = {
    textAlign: 'left',
    color: 'red',
  };
  return (
    <div className={` ${isActive ? 'primary-color' : 'secondary-color'}`}>
      <H1>Demo of css style elements</H1>
      <EazyButton>Button</EazyButton>
      <p style={isActive ? { color: 'black' } : heading}>
        Demo of css style elements
      </p>
      <PageTitle title={title} summary="hello" />
      <div className="page-heading-paragraph">{children}</div>
    </div>
  );
}

export default PageHeading;
