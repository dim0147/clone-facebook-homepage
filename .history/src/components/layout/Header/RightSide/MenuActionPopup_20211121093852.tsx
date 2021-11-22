import Container from '@/components/Popover/Container';

interface MenuActionPopup {
  setHover: (value: React.SetStateAction<boolean>) => void;
}

const MenuActionPopup = () => {
  return (
    <Container zIndex={2}>
      <div>Mark as Read</div>
      <div>Open in message</div>
    </Container>
  );
};

export default MenuActionPopup;
