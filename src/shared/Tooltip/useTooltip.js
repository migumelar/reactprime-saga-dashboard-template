import { Tooltip as TooltipBase } from "primereact/tooltip";


function generateClassName(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `tooltip_${result}`;
}

const useTooltip = ({ position, event }) => {
  let className = generateClassName(5);

  
  let Tooltip;

  if (event === "FocusAndHover") {
    Tooltip = (
      <>
        <TooltipBase
          target={`.${className}`}
          position={position}
          event="focus"
        />
        <TooltipBase
          target={`.${className}`}
          position={position}
          event="hover"
        />
      </>
    );
  } else {
    Tooltip = (
      <TooltipBase target={`.${className}`} position={position} event={event} />
    );
  }

  return [className, Tooltip];
};


export default useTooltip;