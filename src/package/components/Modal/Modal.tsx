import React from "react";
import { IconButton } from "../IconButton";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import styles from "./Modal.module.css"

import close from "../../assets/close.svg";
import chevronLeft from "../../assets/close.svg";

interface ModalProps {
  open: boolean;
  setOpen: (x: boolean) => void;
  title?: any;
  children?: any;
  setBack?: (x: any) => void;
}

export const Modal = ({
  open,
  setOpen,
  title,
  children,
  setBack
}: ModalProps) => {

  const handleClose = () => {
    setOpen(false);
  };

  const handleBack = () => {
    setBack(null);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    > 
      <IconButton
        icon={{
          src: close,
          alt: "close-icon"
        }}
        onClick={handleClose}
        orientation={"top-right"}
      />
      {setBack && (
        <IconButton
          icon={{
            src: chevronLeft,
            alt: "close-button"
          }}
          onClick={handleBack}
          orientation={"top-left"}
        >
          <Typography>
            {"  Back"}
          </Typography>
        </IconButton>
      )}
      <DialogTitle className={styles.title}>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}
