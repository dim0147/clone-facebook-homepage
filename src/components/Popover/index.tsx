import React from 'react';
import {
  usePopoverState,
  Popover as BasePopover,
  PopoverDisclosure,
  PopoverArrow,
} from 'reakit/Popover';

interface PopoverProps {
  disclosure: JSX.Element;
  content: JSX.Element;
}

function PopoverContainer({ disclosure, ...props }: any) {
  const popover = usePopoverState();
  return (
    <>
      <PopoverDisclosure
        {...popover}
        ref={disclosure.ref}
        {...disclosure.props}
      >
        {(disclosureProps) => React.cloneElement(disclosure, disclosureProps)}
      </PopoverDisclosure>
      <BasePopover {...popover} {...props}>
        {props.children}
      </BasePopover>
    </>
  );
}

function Popover({ disclosure, content }: PopoverProps) {
  return (
    <PopoverContainer aria-label="Custom popover" disclosure={disclosure}>
      {content}
    </PopoverContainer>
  );
}

export default Popover;
