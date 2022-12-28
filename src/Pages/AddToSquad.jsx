import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, Container, FormLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from "react-hook-form";
import firebase from '../Config/firebaseConfig'
import { useState } from 'react';
import { languages, maritalStatusValues, childsValues, positionValues, footValues, tecnicoValues, mentalValues, fisicoValues, gkValues, contractValues } from '../Utils/playersInfo';
import './AddToSquadStyle.css';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AlternateEmail, Instagram, Phone, Twitter, YouTube } from '@mui/icons-material';

function AddToSquad(){

    const [language, setLanguage] = useState('');
    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const [maritalStatus, setMaritalStatus] = useState('');
    const handleChange2 = (event) => {
        setMaritalStatus(event.target.value);
    };

    const [childs, setChilds] = useState('');
    const handleChange3 = (event) => {
        setChilds(event.target.value);
    };

    const [position, setPosition] = useState('');
    const handleChange4 = (event) => {
        setPosition(event.target.value);
    };

    const [foot, setFoot] = useState('');
    const handleChange5 = (event) => {
        setFoot(event.target.value);
    };

    const [contract, setContract] = useState('');
    const handleChange6 = (event) => {
        setContract(event.target.value);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try{
            const document = await firebase.firestore().collection("movies")
            .add(data)
            console.log(document)
        }
        catch(e){
            console.log(e)
        }
    };

    return(
        <Container sx={{mt:5}}>
            <div>{errors.name && <span>Movie title is required</span>}</div>
            <div>{errors.img && <span>Movie image is required</span>}</div>
            <div>{errors.director && <span>Movie director is required</span>}</div>
            <div>{errors.year && <span>Movie year is required</span>}</div>
            <div>{errors.genre && <span>Movie genre is required</span>}</div>
            <div>{errors.score && <span>Movie score is required</span>}</div>
            <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
            '& .MuiTextField-root': { mt: 5, mx: 1},
            }}
            noValidate
            autoComplete="on"
            >
                <div>
                    <h2>DATOS PERSONALES</h2>
                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label={"Nombre"}
                        {...register("name", { required: true })}
                    /> 

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Apellido"
                        defaultValue=""
                        {...register("lastName", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="IMG"
                        defaultValue=""
                        {...register("img", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Fecha de nacimiento"
                        defaultValue=""
                        {...register("dob", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Edad"
                        defaultValue=""
                        {...register("age", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Nacionalidad"
                        defaultValue=""
                        {...register("pob", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Segunda nacionalidad"
                        defaultValue=""
                        {...register("secondCitizenship", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Edad"
                        defaultValue=""
                        {...register("age", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-select-currency"
                        select
                        label="Idiomas"
                        {...register("languages", { required: true })}
                        value={language}
                        onChange={handleChange}
                    >
                    {languages.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-select-currency"
                        select
                        label="Estado civil"
                        {...register("maritalStatus", { required: true })}
                        value={maritalStatus}
                        onChange={handleChange2}
                    >
                    {maritalStatusValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-select-currency"
                        select
                        label="Hijos"
                        {...register("childs", { required: true })}
                        value={childs}
                        onChange={handleChange3}
                    >
                    {childsValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>

                    <div className='line'></div>

                    <h2>PERFIL FUTBOLÍSTICO</h2>

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-select-currency"
                        select
                        label="Posición natural"
                        {...register("naturalPosition")}
                        value={position}
                        onChange={handleChange4}
                    >
                    {positionValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-select-currency"
                        select
                        label="Posición secundaria"
                        {...register("secondPosition")}
                        value={position}
                        onChange={handleChange4}
                    >
                    {positionValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-select-currency"
                        select
                        label="Pierna hábil"
                        {...register("foot")}
                        value={foot}
                        onChange={handleChange5}
                    >
                    {footValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label="Altura"
                        defaultValue=""
                        {...register("height")}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label="Peso"
                        defaultValue=""
                        {...register("weight")}
                    />

                    <Grid className='attributes' container display="flex" wrap='wrap' justifyContent="center" textAlign='left' sx={{mt: 4}}>
                        <Grid xs={12} sx={{textAlign:'center'}}>
                            <h3>ATRIBUTOS</h3>
                        </Grid>

                        <Grid xs={3}>
                            <FormLabel sx={{mt: 2, pl:5}} component="legend">TÉCNICO</FormLabel>
                            <ul>    
                                {tecnicoValues.map((option) => (
                                    <li>
                                        <FormControlLabel
                                            value={option.value}
                                            control={<Checkbox />}
                                            label={option.value}
                                            {...register("about")}
                                            labelPlacement="right"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Grid>

                        <Grid xs={3}>
                            <FormLabel sx={{mt: 2, pl:5}} component="legend">MENTAL</FormLabel>
                            <ul>    
                                {mentalValues.map((option) => (
                                    <li>
                                        <FormControlLabel
                                            value={option.value}
                                            control={<Checkbox />}
                                            label={option.value}
                                            {...register("about")}
                                            labelPlacement="right"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Grid>

                        <Grid xs={3}>
                            <FormLabel sx={{mt: 2, pl:5}} component="legend">FÍSICO</FormLabel>
                            <ul>    
                                {fisicoValues.map((option) => (
                                    <li>
                                        <FormControlLabel
                                            value={option.value}
                                            control={<Checkbox />}
                                            label={option.value}
                                            {...register("about")}
                                            labelPlacement="right"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Grid>

                        <Grid xs={3}>
                            <FormLabel sx={{mt: 2, pl:5}} component="legend">PORTERO</FormLabel>
                            <ul>    
                                {gkValues.map((option) => (
                                    <li>
                                        <FormControlLabel
                                            value={option.value}
                                            control={<Checkbox />}
                                            label={option.value}
                                            {...register("about")}
                                            labelPlacement="right"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    </Grid>

                    <div>
                        <TextField
                            sx={{width: {xs:'30ch', sm:'65ch'}}}
                            id="outlined-multiline-static"
                            label="Características"
                            multiline
                            rows={6}
                            defaultValue=""
                            {...register("characteristics")}
                        />
                    </div>

                    <div className='line'></div>

                    <h2>CONTRATO</h2>

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label="Agente"
                        defaultValue=""
                        {...register("agent")}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-select-currency"
                        select
                        label="Situación contractual"
                        {...register("contract")}
                        value={contract}
                        onChange={handleChange6}
                    >
                    {contractValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label="Contratado por"
                        defaultValue=""
                        {...register("owner")}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label="Cedido a"
                        defaultValue=""
                        {...register("loanTo")}
                    />

                    <div className='line'></div>

                    <h2>CONTACTO Y LINKS</h2>

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label={<Phone />}
                        defaultValue=""
                        {...register("phone")}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label={<AlternateEmail />}
                        defaultValue=""
                        {...register("email")}
                    />

                    <FormLabel sx={{mt: 5}} component="legend">REDES SOCIALES</FormLabel>

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label={<FacebookIcon />}
                        defaultValue=""
                        {...register("facebook")}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label={<Instagram />}
                        defaultValue=""
                        {...register("instagram")}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label={<Twitter />}
                        defaultValue=""
                        {...register("twitter")}
                    />

                    <FormLabel sx={{mt: 5}} component="legend">LINKS</FormLabel>

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label="Transfermarkt"
                        defaultValue=""
                        {...register("transfermarkt")}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label="Besoccer"
                        defaultValue=""
                        {...register("besoccer")}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        id="outlined-required"
                        label={<YouTube />}
                        defaultValue=""
                        {...register("youtube")}
                    />

                    <div className='line'></div>

                    <h2>INCIDENCIAS</h2>

                    <div>
                        <TextField
                            sx={{width: {xs:'30ch', sm:'65ch'}}}
                            id="outlined-multiline-static"
                            label="Ingresar incidencias"
                            multiline
                            rows={6}
                            defaultValue=""
                            {...register("incidents", { required: true })}
                        />
                    </div>

                    <div>
                    <Button
                        type='submit'
                        sx={{mt: 5, mb:5}}
                        size="small"
                        color="secondary"
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        >
                        Save
                    </Button>
                    </div>

                </div>
            </Box>
      </Container>
    )
}

export default AddToSquad