import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function MeuMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        sx={{ color: "#195ca8" }}
        aria-controls="menu-simples"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon sx={{ fontSize: 40 }} />
      </IconButton>

      <Menu
        id="menu-simples"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Moradores</MenuItem>
        <MenuItem onClick={handleClose}>Servidor</MenuItem>
        <MenuItem onClick={handleClose}>Visitantes</MenuItem>
        <MenuItem sx={{ color: "blue", fontWeight: "bold" }}>
          Opção Personalizada
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MeuMenu;

// import React, { useState } from "react";
// import { Menu, MenuItem, IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// function MeuMenu() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setSubMenuAnchorEl(null);
//   };

//   const handleSubMenuClick = (event) => {
//     setSubMenuAnchorEl(event.currentTarget);
//   };

//   return (
//     <div>
//       <IconButton aria-controls="menu-simples" aria-haspopup="true" onClick={handleClick}>
//         <MenuIcon sx={{ fontSize: 40 }} />
//       </IconButton>

//       <Menu id="menu-simples" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//         <MenuItem onClick={handleSubMenuClick}>Opção 1</MenuItem>
//         <Menu id="submenu" anchorEl={subMenuAnchorEl} open={Boolean(subMenuAnchorEl)} onClose={handleClose}>
//           <MenuItem onClick={handleClose}>Subopção A</MenuItem>
//           <MenuItem onClick={handleClose}>Subopção B</MenuItem>
//           <MenuItem onClick={handleClose}>Subopção C</MenuItem>
//         </Menu>
//         <MenuItem onClick={handleClose}>Opção 2</MenuItem>
//         <MenuItem onClick={handleClose}>Opção 3</MenuItem>
//         <MenuItem sx={{ color: "blue", fontWeight: "bold" }}>Opção Personalizada</MenuItem>
//       </Menu>
//     </div>
//   );
// }

// export default MeuMenu;
