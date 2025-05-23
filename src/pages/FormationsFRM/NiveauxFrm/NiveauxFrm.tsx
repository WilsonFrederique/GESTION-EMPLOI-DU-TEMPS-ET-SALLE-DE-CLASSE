import './NiveauxFrm.css'

import React from 'react'

import "react-lazy-load-image-component/src/effects/blur.css";


import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import { GoMoveToTop } from "react-icons/go";
import Button from '@mui/material/Button';


import { IoMdDownload } from "react-icons/io";
import { FaTimes } from "react-icons/fa";



const NiveauxFrm = () => {
    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor = 
            theme.palette.mode === 'light' 
            ? theme.palette.grey[100] 
            : theme.palette.grey[800];
        return{
            backgroundColor, 
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active':{
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12)
            }
        }
    });

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Ajout d’un niveau</h5>
                    <Breadcrumbs aria-label='breadcrumb' className='ms-auto breadcrumb_'>
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            component="a"
                            href="#"
                            label="Accueil"
                            icon={<HomeIcon fontSize='small' />}
                        />
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            label="List"
                            icon={<ExpandMoreIcon fontSize="small" />}
                        />
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            label="Ajout"
                            icon={<ExpandMoreIcon fontSize="small" />}
                        />
                    </Breadcrumbs>
                </div>



                <form className='form'>
                    {/* Input */}
                    <div className="row">
                        {/* <div className="col-sm-8"> */}
                        <div className="col-sm-12">
                            <div className="card p-4">
                                <h5 className='mb-4'>Données principales du niveau</h5>



                                <div className="form-group">
                                    <h6>ID Niveau</h6>
                                    <input type="text" />
                                </div>


                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>Niveau</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="row">
                        <div className="col-sm-15">
                            <div className="card p-4 mt-0">
                                <div className="grp-btns-save-annul">
                                    <div className="imagesUploadSec">
                                        <Button type='submit' className='btn-blue btn-lg btn-big w-100'><IoMdDownload /> &nbsp; ENREGISTRER</Button>
                                    </div>
                                    <div className="imagesUploadSec">
                                        <a href="/niveauxFrm"><Button type='submit' className='btn-dang btn-lg btn-big w-100'><FaTimes /> &nbsp; ANNULER</Button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

                <footer className="footer">
                    <div className="footer-text">
                        <p>&copy; 2025 par Planification Scolaire | Tous Droits Réservés.</p>
                    </div>

                    <div className="footer-iconTop">
                    <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <GoMoveToTop />
                    </a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default NiveauxFrm