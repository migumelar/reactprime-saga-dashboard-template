import { Tooltip as TooltipBase } from "primereact/tooltip";

// I do this because global tooltip options seems like doens't work
// github issue: https://github.com/primefaces/primereact/issues/1811
// if the target element is dynamically mounted and unmounted, use the tooltip hooks instead

function Tooltip(props) {
  return (
    <>
      {/* hover tooltip */}
      <TooltipBase target=".rightTooltipHover" position="right" event="hover" />
      <TooltipBase target=".leftTooltipHover" position="left" event="hover" />
      <TooltipBase target=".topTooltipHover" position="top" event="hover" />
      <TooltipBase
        target=".bottomTooltipHover"
        position="bottom"
        event="hover"
      />

      {/* focus tooltip */}
      <TooltipBase target=".rightTooltipFocus" position="right" event="focus" />
      <TooltipBase target=".leftTooltipfocus" position="left" event="focus" />
      <TooltipBase target=".topTooltipFocus" position="top" event="focus" />
      <TooltipBase
        target=".bottomTooltipFocus"
        position="bottom"
        event="focus"
      />
    </>
  );
}

export default Tooltip;
