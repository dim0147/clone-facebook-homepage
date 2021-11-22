import Container from '@/components/Popover/Container';

interface MenuActionPopup {
  setHover: (value: React.SetStateAction<boolean>) => void;
}

const MenuActionPopup = ({ setHover }: MenuActionPopup) => {
  return (
    <Container
      style={{ background: 'red' }}
      // onMouseEnter={() => setHover(true)}
      zIndex={999}
    >
      <div>Mark as Read</div>
      <div>Open in message</div>
    </Container>
  );
};

export default MenuActionPopup;
