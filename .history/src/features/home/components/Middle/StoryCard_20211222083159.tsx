import styled from 'styled-components';

const Container = styled.div`
  width: 110px;
  height: 200px;
`;

export const StoryCard = () => {
  return (
    <Container>
      <img
        src="https://scontent.fsin3-1.fna.fbcdn.net/v/t51.36329-10/p235x165/269671423_590601152242104_6744209888773137157_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=hMhNdAJbf7UAX8Tz3hP&_nc_ht=scontent.fsin3-1.fna&oh=00_AT-nXGgZEpDVKHTQigpDXU46ZtyLqp_ybdhbaQr_QaKdGw&oe=61C6C616"
        alt=""
      />
    </Container>
  );
};
