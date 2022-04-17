import "./Fiche2a.css";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
export default function Fiche2a() {
  // return(
  /* <div className="fiche2aa"> */
  return (
    <div className="fiche2aa">
      <Menu>
        <MenuButton as={Button}>Lorem ipsum text</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
              <MenuItem>
                <Checkbox defaultChecked>Checkbox</Checkbox>
              </MenuItem>
              <MenuItem>
                <MenuList>
                  <Stack spacing={[1, 5]} direction={["column", "row"]}>
                    <Checkbox size="sm" colorScheme="red">
                      Checkbox
                    </Checkbox>
                    <Checkbox size="md" colorScheme="green" defaultChecked>
                      Checkbox
                    </Checkbox>
                    <Checkbox size="lg" colorScheme="orange" defaultChecked>
                      Checkbox
                    </Checkbox>
                  </Stack>
                </MenuList>
              </MenuItem>
            </MenuList>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
