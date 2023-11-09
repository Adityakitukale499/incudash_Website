import React, { useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import GetInTouch from "./ContactUs/GetInTouch";

export default function GetInTouchModal({open, setOpen}) {
  

  return (
    <>
      <Modal
        aria-labelledby="modal-roadmapTitle"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 600,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <GetInTouch/>
        </Sheet>
      </Modal>
    </>
  );
}
