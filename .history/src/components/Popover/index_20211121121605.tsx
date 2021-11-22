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
  basePopover?: React.CSSProperties;
}

function PopoverContainer({ disclosure, basePopover, ...props }: any) {
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
      <BasePopover style={basePopover} {...popover} {...props}>
        <p style={{}}></p>
        {props.children}
      </BasePopover>
    </>
  );
}

function Popover({ disclosure, content, basePopover }: PopoverProps) {
  return (
    <PopoverContainer disclosure={disclosure} basePopover={basePopover}>
      {content}
    </PopoverContainer>
  );
}

export default Popover;
