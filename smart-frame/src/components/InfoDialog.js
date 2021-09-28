import React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
  } from "@material-ui/core";


export default function InfoDialog({open, setOpen, data}) {
    return (
        <Dialog
            open = {open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        
        <DialogTitle id="alert-dialog-title">
            
            Additional information about this Art

        </DialogTitle>

        <DialogContent>
            <div style={{ display: "flex", gap:20}}>
            <div>
                <Title label="Title:" />
                <Title label="Credit:" />
                <Title label="Department:" />
                <Title label="Repository:" />
                <Title label="Dimensions:" />
                <Title label="Medium:" />
                <Title label="Location:" />
            </div>

            <div>
                <Data label={data?.title} />
                <Data label={data?.creditLine} />
                <Data label={data?.department} />
                <Data label={data?.repository} />
                <Data label={data?.dimensions} />
                <Data label={data?.medium} />
                <Data
                label={`${data?.subregion ? data?.subregion + ", " : ""} ${
                    data?.region ? data?.region + ", " : ""
                } ${data?.country}`}
                />
          </div>
        </div>

        </DialogContent>

        <DialogActions style={{ padding: "15px"}}>
            <Button onClick={() => setOpen(false)} style={{ color: "#f50057" }} id='back'>
            Back
            </Button>
            {/* <Button onClick={handleClose} autoFocus>
            Agree
            </Button> */}
        </DialogActions>
    </Dialog>
    );
}

const Title = ({ label }) => {
    return (
    <Typography
        variant="body1"
        display="block"
        gutterBottom
        style={{ color: "#8798AD" }}
    >
        {label}
    </Typography>
    );
};

const Data = ({ label }) => {
    return (
    <Typography
        variant="body1"
        display="block"
        gutterBottom
        style={{ fontWeight: 500, color: "#2E384D" }}
    >
        {label}
    </Typography>
    );
};
  

