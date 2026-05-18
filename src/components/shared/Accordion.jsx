import { Accordion as NextAccordion, AccordionItem } from "@nextui-org/react";

const Accordion = ({
  info,
  height = '300px',
  AccordionToShow = 3,
  isHoverable = false,
  isPressable = true,
  objectFit = true,
  cssEase = '',
}) => {
  // Default content if no info is passed
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <NextAccordion variant="light">
      {/* Rendering Accordion Items dynamically based on the 'info' prop */}
      {info && info.length > 0
        ? info.slice(0, AccordionToShow).map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}`}
              title={<span style={{ color: 'white' }}>{item.title}</span>} // Title color set to white
            >
              {/* Custom content for each Accordion Item */}
              <div style={{ height: height, objectFit: objectFit ? 'cover' : 'contain' }}>
                {item.content || defaultContent}
              </div>
            </AccordionItem>
          ))
        : [...Array(AccordionToShow)].map((_, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}`}
              title={<span style={{ color: 'white' }}>{`Accordion ${index + 1}`}</span>} // Title color set to white
            >
              <div style={{ height: height, objectFit: objectFit ? 'cover' : 'contain' }}>
                {defaultContent}
              </div>
            </AccordionItem>
          ))}
    </NextAccordion>
  );
};

export default Accordion;
