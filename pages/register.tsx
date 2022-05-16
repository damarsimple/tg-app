import { useState, Fragment, useRef, FormEventHandler } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import Copyright from "components/Copyright";
import {
  Autocomplete,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputBase,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
const steps = ["Pilih", "Biodata", "Data Akun"];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [registeredAs, setRegisteredAs] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleNext = () => {
    if (activeStep == 1) {
      formRef.current?.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
      );

      return;
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <Box sx={{ display: "flex", gap: 3 }}>
            {[
              {
                label: "GURU",
                role: "TEACHER",
              },
              {
                label: "SISWA",
                role: "STUDENT",
              },
              {
                label: "ORANG TUA",
                role: "PARENT",
              },
            ].map((e) => (
              <Button
                variant="contained"
                key={e.role}
                onClick={() => {
                  setRegisteredAs(registeredAs == e.label ? "" : e.label);
                }}
              >
                {e.label}
              </Button>
            ))}
          </Box>
        );
      case 1:
        return (
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmation_password: "",
              city: "",
              province: "",
              phone_number: "",
              address: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Harus di isi").max(15, "Max 15"),
              email: Yup.string()
                .required("Harus di isi")
                .email("Email tidak valid"),
              password: Yup.string().required("Harus di isi").min(8, "Min 8"),
              confirmation_password: Yup.string()
                .required("Harus di isi")
                .oneOf([Yup.ref("password"), null], "Password tidak sama"),
              city: Yup.string().required("Harus di isi"),
              province: Yup.string().required("Harus di isi"),
              phone_number: Yup.string()
                .required("Harus di isi")
                .min(10, "Min 10")
                .max(13, "Max 13"),
              address: Yup.string().required("Harus di isi"),
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <Box component="form" ref={formRef} onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nama Akun"
                      variant="standard"
                      fullWidth
                      required
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      type={"email"}
                      variant="standard"
                      fullWidth
                      required
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Password"
                      type={"password"}
                      variant="standard"
                      fullWidth
                      required
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Konfirmasi Password"
                      type={"password"}
                      variant="standard"
                      fullWidth
                      required
                      name="confirmation_password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmation_password}
                      error={Boolean(
                        touched.confirmation_password &&
                          errors.confirmation_password
                      )}
                      helperText={
                        touched.confirmation_password &&
                        errors.confirmation_password
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nomor Handphone"
                      id="filled-start-adornment"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+62</InputAdornment>
                        ),
                      }}
                      variant="standard"
                      required
                      name="phone_number"
                      fullWidth
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone_number}
                      error={Boolean(
                        touched.phone_number && errors.phone_number
                      )}
                      helperText={touched.phone_number && errors.phone_number}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Alamat"
                      variant="standard"
                      fullWidth
                      required
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      error={Boolean(touched.address && errors.address)}
                      helperText={touched.address && errors.address}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Autocomplete
                      disablePortal
                      options={[{ label: "Jakarta", id: 1994 }]}
                      onChange={(_, v) => {
                        setFieldValue("province", v?.id);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Provinsi"
                          variant="standard"
                          name="province"
                          fullWidth
                          onBlur={handleBlur}
                          value={values.province}
                          error={Boolean(touched.province && errors.province)}
                          helperText={touched.province && errors.province}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Autocomplete
                      disablePortal
                      options={[{ label: "Jakarta", id: 1994 }]}
                      onChange={(_, v) => {
                        setFieldValue("city", v?.id);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Kota / Kabupaten"
                          variant="standard"
                          name="city"
                          fullWidth
                          onBlur={handleBlur}
                          value={values.city}
                          error={Boolean(touched.city && errors.city)}
                          helperText={touched.city && errors.city}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        );
      case 2:
        return <></>;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Daftar {registeredAs.length != 0 && `sebagai ${registeredAs}`}
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Fragment>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </Fragment>
          ) : (
            <Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={activeStep == 0 && registeredAs.length == 0}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </Fragment>
          )}
        </Fragment>
      </Paper>
      <Copyright />
    </Container>
  );
}
