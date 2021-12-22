import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 110px;
  height: 200px;
  cursor: pointer;
  > img {
    border-radius: 15px;
    width: 100%;
    object-fit: cover;
  }
`;

const ProfileOverlap = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Profile image */
  > div {
    margin-top: 10px;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #1876f2;
    > img {
      width: 100%;
      border-radius: 50%;
    }
  }
  > p {
    color: white;
    font-weight: 600;
    font-size: 15px;
  }
`;

export const StoryCard = () => {
  return (
    <Container>
      <img
        src="https://scontent.fsin3-1.fna.fbcdn.net/v/t51.36329-10/p235x165/269671423_590601152242104_6744209888773137157_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=hMhNdAJbf7UAX8Tz3hP&_nc_ht=scontent.fsin3-1.fna&oh=00_AT-nXGgZEpDVKHTQigpDXU46ZtyLqp_ybdhbaQr_QaKdGw&oe=61C6C616"
        alt=""
      />
      <ProfileOverlap>
        <div>
          <img
            src="https://scontent.fsin3-1.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/265608211_1787079801481371_8947820800565650327_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=dlPK6qeDHdQAX8vI237&_nc_ht=scontent.fsin3-1.fna&oh=00_AT_XvJbZeJmW1PBcBDGu15gArSjWfYT8frbLtI7HUOR8Dw&oe=61C6AB6E"
            alt=""
          />
        </div>
        <p>Thái Ngọc Phương Linh</p>
      </ProfileOverlap>
    </Container>
  );
};
