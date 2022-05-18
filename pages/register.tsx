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
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputAdornment,
  InputBase,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useUserStore, RegisterPayload } from "stores/user";
import next from "next";
import { gql, useQuery } from "@apollo/client";
import { Province, Regency, Roles, School } from "../generated";
const steps = ["Pilih", "Biodata", "Data Akun"];

const ROLES = [
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
];

const reverseMap = ROLES.reduce((acc, cur) => {
  return {
    ...acc,
    [cur.label]: cur.role as Roles,
  };
}, {} as Record<string, Roles>);

export default function Checkout() {
  const { push } = useRouter();

  const { register, validateEmail } = useUserStore();

  const [errorMessage, setErrorMessage] = useState("");

  const [selectedProvince, setSelectedProvince] = useState("");
  const [data, setData] = useState<RegisterPayload | null>(null);

  const { data: { findManyProvince } = {} } = useQuery<{
    findManyProvince: Province[];
  }>(gql`
    query Query {
      findManyProvince {
        id
        name
        regencies {
          id
          name
        }
      }
    }
  `);

  const { data: { findManySchool } = {} } = useQuery<{
    findManySchool: School[];
  }>(
    gql`
      query FindManySchool($take: Int, $where: SchoolWhereInput) {
        findManySchool(where: $where, take: $take) {
          id
          name
        }
      }
    `,
    {
      variables: {
        take: !data?.provinceId || !data?.regencyId ? 1 : undefined,
        where: {
          provinceId: {
            equals: data?.provinceId,
          },
          regencyId: {
            equals: data?.regencyId,
          },
        },
      },
    }
  );

  const provinceIdMap: Record<string, Regency[]> =
    findManyProvince?.reduce((acc, cur) => {
      return {
        ...acc,
        [cur.id]: cur.regencies,
      };
    }, {}) || {};

  const [asBimbel, setAsBimbel] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [registeredAs, setRegisteredAs] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleRegister = async (extra: Partial<RegisterPayload>) => {
    try {
      setErrorMessage("");
      if (!data) return;

      await register({
        ...data,
        ...extra,

        phoneNumber: `${data.phoneNumber}`,
        //@ts-ignore
        role: `${reverseMap[registeredAs] as Roles}`,
      });

      window.location.replace("/dashboard");
    } catch (error) {
      setErrorMessage(`${error}`);
    }
  };

  const handleNext = () => {
    if (activeStep == 1 || activeStep == 2) {
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
    const validationMap: Record<string, any> = {
      GURU: Yup.object({
        nrg: Yup.string().required("Harus di isi"),
        schoolId: Yup.string().required("Harus di isi"),
      }),
      SISWA: Yup.object({
        nisn: Yup.string().required("Harus di isi"),
        schoolId: Yup.string().required("Harus di isi"),
      }),
      "ORANG TUA": Yup.object({
        nisn: Yup.string().required("Harus di isi"),
      }),
    };

    switch (step) {
      case 0:
        return (
          <Box sx={{ display: "flex", gap: 3 }}>
            {ROLES.map((e) => (
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
              regencyId: "",
              provinceId: "",
              phoneNumber: "",
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
              regencyId: Yup.string().required("Harus di isi"),
              provinceId: Yup.string().required("Harus di isi"),
              phoneNumber: Yup.string()
                .required("Harus di isi")
                .min(10, "Min 10")
                .max(13, "Max 13"),
              address: Yup.string().required("Harus di isi"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                setErrorMessage("");
                await validateEmail(values);

                setData(values as unknown as RegisterPayload);
                setActiveStep(activeStep + 1);
              } catch (error) {
                setErrorMessage(`${error}`);
              }
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
              ...rest
            }) => (
              <Box component="form" ref={formRef} onSubmit={handleSubmit}>
                {errorMessage && (
                  <Typography variant="h6" color="error" textAlign={"center"}>
                    {errorMessage}
                  </Typography>
                )}
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
                      name="phoneNumber"
                      fullWidth
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                      error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
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
                  {findManyProvince && (
                    <Grid item xs={12} sm={6}>
                      <Autocomplete
                        disablePortal
                        options={findManyProvince.map((e) => ({
                          label: e.name,
                          value: e.id,
                        }))}
                        onChange={(_, v) => {
                          setFieldValue("provinceId", v?.value);
                          setFieldValue("regencyId", "");
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Provinsi"
                            variant="standard"
                            name="provinceId"
                            fullWidth
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.provinceId}
                            error={Boolean(
                              touched.provinceId && errors.provinceId
                            )}
                            helperText={touched.provinceId && errors.provinceId}
                          />
                        )}
                      />
                    </Grid>
                  )}

                  {provinceIdMap[values.provinceId] && (
                    <Grid item xs={12} sm={6}>
                      <Autocomplete
                        disablePortal
                        options={provinceIdMap[values.provinceId].map((e) => ({
                          label: e.name,
                          value: e.id,
                        }))}
                        onChange={(_, v) => {
                          setFieldValue("regencyId", v?.value);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Kota / Kabupaten"
                            variant="standard"
                            name="regencyId"
                            fullWidth
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.regencyId}
                            error={Boolean(
                              touched.regencyId && errors.regencyId
                            )}
                            helperText={touched.regencyId && errors.regencyId}
                          />
                        )}
                      />
                    </Grid>
                  )}
                </Grid>
              </Box>
            )}
          </Formik>
        );
      case 2:
        return (
          <Formik
            initialValues={{
              name: "",
              email: "",
              identityNumber: "",
              identityFile: "",
              schoolId: "",
              nrg: "",
              nisn: "",
            }}
            validationSchema={validationMap[registeredAs]}
            onSubmit={(values, { setSubmitting }) => {
              handleRegister(values);
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
                {errorMessage && (
                  <Typography variant="h6" color="error" textAlign={"center"}>
                    {errorMessage}
                  </Typography>
                )}
                <Grid container spacing={3}>
                  {["GURU", "SISWA"].includes(registeredAs) && findManySchool && (
                    <Grid item xs={12} sm={6}>
                      <Autocomplete
                        disablePortal
                        options={findManySchool.map((e) => ({
                          label: e.name,
                          value: e.id,
                        }))}
                        onChange={(_, v) => {
                          setFieldValue("schoolId", v?.value);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Sekolah"
                            variant="standard"
                            name="schoolId"
                            fullWidth
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.schoolId}
                            error={Boolean(errors.schoolId)}
                            helperText={errors.schoolId}
                          />
                        )}
                      />
                    </Grid>
                  )}

                  {registeredAs == "SISWA" && (
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Nomor Induk Siswa Nasioanl"
                        variant="standard"
                        fullWidth
                        required
                        name="nisn"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nisn}
                        error={Boolean(errors.nisn)}
                        helperText={errors.nisn}
                      />
                    </Grid>
                  )}

                  {registeredAs == "GURU" && (
                    <>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={asBimbel}
                              onChange={(e) => setAsBimbel(e.target.checked)}
                            />
                          }
                          label="Daftar sebagai guru bimbel"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Nomor Registrasi Guru"
                          variant="standard"
                          fullWidth
                          required
                          name="nrg"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.nrg}
                          error={Boolean(errors.nrg)}
                          helperText={errors.nrg}
                        />
                      </Grid>
                      {asBimbel && (
                        <>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Nomor KTP"
                              variant="standard"
                              fullWidth
                              required
                              name="identityNumber"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.identityNumber}
                              error={Boolean(
                                touched.identityNumber && errors.identityNumber
                              )}
                              helperText={
                                touched.identityNumber && errors.identityNumber
                              }
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Upload KTP"
                              variant="standard"
                              fullWidth
                              required
                              name="identityFile"
                              type="file"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.identityFile}
                              error={Boolean(
                                touched.identityFile && errors.identityFile
                              )}
                              helperText={
                                touched.identityFile && errors.identityFile
                              }
                            />
                          </Grid>
                        </>
                      )}
                    </>
                  )}
                </Grid>
              </Box>
            )}
          </Formik>
        );
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
                  {activeStep === steps.length - 1 ? "DAFTAR AKUN" : "Next"}
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
