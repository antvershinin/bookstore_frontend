import { SelectGenresStyled, SortingPanelStyled } from "./SortingPanel.styled";

const SortingPanel = () => {
  return (
    <SortingPanelStyled>
      <span className="panel_title">Catalog</span>
      <SelectGenresStyled></SelectGenresStyled>
    </SortingPanelStyled>
  );
};

export default SortingPanel;
