import { BarFiltersContainer, FormGroup, Input, Label, Select, Option } from "./styles";

const BarFilters = () => {
  return (
    <BarFiltersContainer>
      <FormGroup>
        <Label htmlFor="genres">Genres</Label>
        <Input type="text" id="genres"/>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="original_language">Genres</Label>
        <Input type="text" id="original_language"/>
      </FormGroup>

      <div>
        <Select>
          <Option disabled selected>Select option</Option>
          <Option>Less popularity</Option>
          <Option>More popularity</Option>
        </Select>
      </div>

    </BarFiltersContainer>
  )
}

export default BarFilters;