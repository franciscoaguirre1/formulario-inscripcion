import { Component, OnInit} from '@angular/core';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

    title = 'front';
    inputSectionOneValue:boolean = false
    tieneRegistroSection3: boolean = false
    domicilioPredioProductivoSection5: boolean = true
    esPersonaFisica : boolean = false
    esUnidadAsociativaProductiva: boolean = false
    esActividadAgropecuaria: boolean = false
    tieneCiDi: boolean = false
    tieneObraSocial: boolean = false
    arrayRadioButtonsSection1!: any
    contadorCampos: number = 0


        //  métdos para agregar y quitar nuevos campos

        agregarNuevoRepresentanteSection7() {
            this.formularioEconomiaPopular.formularioSeccion7.push({
                apellidoSeccion7: '',
                nombreSeccion7: '',
                tipoDeDocumentoSeccion7: '',
                nroDocumentoSeccion7: '',
                tieneCiDiSeccion7: '',
                nivelCiDiSeccion7: ''              
            });
        }
        agregarNuevoResponsableSection9() {
            this.formularioEconomiaPopular.formularioSeccion9.push({
                nombreResponsableSeccion9: '',
                dniSeccion9: '',
                cargoSeccion9: '',
                telefonoSeccion9: '',
                emailSeccion9: '',
            });
        }
        agregarPersonaFisicaSection9b() {
            this.formularioEconomiaPopular.formularioSeccion9b.push({
                apellidoSeccion9b: '',
                nombreSeccion9b: '',
                documentoSeccion9b: '',
                fechaNacSeccion9b: '',
                vinculoSeccion9b: '',
                escolaridadSeccion9b: '',
                estaCursandoSeccion9b: '',
                ocupacionSeccion9b: '',
            })
        }
        quitarNuevoRepresentanteSection7(i: number) {
            this.formularioEconomiaPopular.formularioSeccion7.splice(i,1)
        }
        quitarNuevoResponsableSection9(i: number) {
            this.formularioEconomiaPopular.formularioSeccion9.splice(i,1)
        }
        quitarPersonaFisicaSection9b(i: number) {
            this.formularioEconomiaPopular.formularioSeccion9b.splice(i,1)
        }
    

    
    
        // objeto del formulario de economía popular

    formularioEconomiaPopular: any = {
        // 1.- CARÁCTER DE LA UNIDAD PRODUCTIVA SOLICITANTE
    
    
            caracterUnidadProductivaSolicitante: '',
            caracterUnidadProductivaSolicitanteOtra: '',
            
            // 2.- DATOS DE IDENTIFICACIÓN
            // 2.1.- Unidad Productiva Unipersonal
    
        
            apellidoSeccion21: '',
            nombreSeccion21: '',
            tipoDocumentoSeccion21: '',
            nroDocumentoSeccion21: '',
            tieneCiDiSeccion21: '',
            nivelCiDiSeccion21: '',
            cuilSeccion21: '',
            emailSeccion21: '',
            telefonoSeccion21: '',
            asociacionCooperativaSeccion21: '',
        
    
            // 2.- DATOS DE IDENTIFICACIÓN
            // 2.2.- Unidades Asociativas Productivas (incluye las familiares)
        
            nombreInstitucionPersonaSeccion22: '',
            nombreFantasiaSeccion22: '',
            nroCuilCuitSeccion22: '',
            asociacionCooperativaSeccion22: ''            
        ,
        // 3.- INSCRIPCIONES LEGALES
        
            inscripcionesLegalesSeccion3: '',
            tieneRegistroSeccion3: '',
            nroInscripcionMatriculaSeccion3: '',
            reparticionSeccion3: '',
            esActividadAgropecuariaSeccion3: '',
            renspaNroSeccion3: '',
            marcasYSenalesSeccion3: '',
            renafSeccion3: '',
            otroCualSeccion3: ''
    
        ,
        // 4.- OBJETO SOCIAL
        
            actividadesProductivasSeccion4: ''
        ,
        //5.- DOMICILIO PERSONAL O DE LA ASOCIACIÓN FORMAL O INFORMAL
        
            calleSeccion5: '',
            numeroCalleSeccion5: '',
            cpSeccion5: '',
            barrioSeccion5: '',
            localidadSeccion5: '',
            departamentoSeccion5: '',
            emailSeccion5: '',
            confirmeEmailSeccion5: '',
            telefonoSeccion5: '',
            cantidadAsociadosSeccion5: '',
            domicilioPredioProductivoSeccion5: '',
            callePredioProductivoSeccion5: '',
            nroCallePredProdSeccion5: '',
            cpPredProdSeccion5: '',
            barrioPredProdSeccion5: '',
            localidadPredProdSeccion5: '',
            departamentoPredioProdSeccion5: '',
            emailPredProdSeccion5: '',
            telefonoPredProdSeccion5: '',
        
        //6.- CONDICIÓN FISCAL

            ivaSeccion6: '',
            ingresosBrutosSeccion6: '',
            tasaComercioSeccion6: '',

        // 7.- REPRESENTANTES DE LA ASOCIACIÓN FORMAL O INFORMAL

            formularioSeccion7: [{
            apellidoSeccion7: '',
            nombreSeccion7: '',
            tipoDeDocumentoSeccion7: '',
            nroDocumentoSeccion7: '',
            tieneCiDiSeccion7: '',
            nivelCiDiSeccion7: ''                
            }],

            //8.- INFORMACIÓN COMPLEMENTARIA

            textInputSeccion8: '',
        
        //9.- PERSONAS RESPONSABLES DE LA INSCRIPCIÓN
        formularioSeccion9: [{
            nombreResponsableSeccion9: '',
            dniSeccion9: '',
            cargoSeccion9: '',
            telefonoSeccion9: '',
            emailSeccion9: '',
        }],
        
        //9b Para las personas físicas

        formularioSeccion9b: [{
            apellidoSeccion9b: '',
            nombreSeccion9b: '',
            documentoSeccion9b: '',
            fechaNacSeccion9b: '',
            vinculoSeccion9b: '',
            escolaridadSeccion9b: '',
            estaCursandoSeccion9b: '',
            ocupacionSeccion9b: '',
        }],


        //9c Cursos de Capacitación laboral realizados por el titular
            cursosRealizadosSeccion9c: '',

        //9d Obra Social
            poseeObraSocialSeccion9d: '',
            cubreGrupoSeccion9d: '',
        //9e Situación habitacional
            posesionViviendaSeccion9e: '',
            banoSeccion9e: '',
            dormitoriosSeccion9e: '',
            techosSeccion9e: '',
            murosSeccion9e: '',
            pisosSeccion9e: '',
        //9f Acceso a servicios
            aguaSeccion9f: '',
            luzSeccion9f: '',
            gasSeccion9f: '',
        //9g Datos referidos al predio y actividad productiva (solo productos agropecuarios)
            totalHectareasSeccion9g: '',
            hectareasEnSecanoSeccion9g: '',
            hectareasConRiegoSeccion9g: '',
            hectareasAgricolaSeccion9g: '',
            hectareasMonteSeccion9g: '',
            hectareaschacraEnSecanoSeccion9g: '',
            hectareasPasturasNaturalesSeccion9g: '',
            hectareasPasturasImplantadasSeccion9g: '',
            hectareasGranjaMixtaSeccion9g: '',
            hectareasHortalizasSeccion9g: '',
            hectareasGranosSeccion9g: '',
            otraSeccion9g: '',
            otraHectareasSeccion9g: '',
        //9h Cantidad de Animales
            vacunosSeccion9h: '',
            caprinosSeccion9h: '',
            porcinosSeccion9h: '',
            ovinosSeccion9h: '',
            pollosParrillerosSeccion9h: '',
            gallinasPonedorasSeccion9h: '',
            apiculturaSeccion9h: '',
    };


        // validaciones del formulario

    validarFormularioCompleto(formularioEconomiaPopular: any) {
            // validar seccion 1

            if (formularioEconomiaPopular.caracterUnidadProductivaSolicitante == ""
                || formularioEconomiaPopular.caracterUnidadProductivaSolicitante == null) {
                    return false
                }

            // validar seccion 2.2
            if (formularioEconomiaPopular.caracterUnidadProductivaSolicitante == !'Persona Física (Unidad Productiva Unipersonal)' 
                && (formularioEconomiaPopular.nombreInstitucionPersonaSeccion22 == '' 
                || formularioEconomiaPopular.nombreFantasiaSeccion22 == '' 
                || formularioEconomiaPopular.nroCuilCuitSeccion22 == '' 
                || formularioEconomiaPopular.asociacionCooperativaSeccion22 == '')) {
                return false
            }

            // validar seccion 2.1

            if (formularioEconomiaPopular.caracterUnidadProductivaSolicitante == 'Persona Física (Unidad Productiva Unipersonal)' 
                && (formularioEconomiaPopular.apellidoSeccion21 == ''
                || formularioEconomiaPopular.nombreSeccion21 == ''
                || formularioEconomiaPopular.tipoDocumentoSeccion21 == ''
                || formularioEconomiaPopular.nroDocumentoSeccion21 == '' 
                || formularioEconomiaPopular.tieneCiDiSeccion21 == '' 
                || formularioEconomiaPopular.nivelCiDiSeccion21 == '' 
                || formularioEconomiaPopular.cuilSeccion21 == '' 
                || formularioEconomiaPopular.emailSeccion21 == '' 
                || formularioEconomiaPopular.telefonoSeccion21 == '' 
                || formularioEconomiaPopular.asociacionCooperativaSeccion21 == '')) {
                return false
            }
    
            // validar seccion 3
    
            if (formularioEconomiaPopular.tieneRegistroSeccion3 == 'True'
            && (formularioEconomiaPopular.nroInscripcionMatriculaSeccion3 == ''
            || formularioEconomiaPopular.reparticionSeccion3 == ''
            || formularioEconomiaPopular.esActividadAgropecuariaSeccion3 == '')) {
                if (formularioEconomiaPopular.esActividadAgropecuariaSeccion3 == 'True'
                && (formularioEconomiaPopular.renspaNroSeccion3 == ''
                ||formularioEconomiaPopular.marcasYSenalesSeccion3 == ''
                || formularioEconomiaPopular.renafSeccion3 == ''
                || formularioEconomiaPopular.otroCualSeccion3 == '')){
                    return false
                } if (formularioEconomiaPopular.esActividadAgropecuariaSeccion3 == 'False') {
                    return false
                } return false
            }

            // validar seccion 4

            if (formularioEconomiaPopular.actividadesProductivasSeccion4 == '') {
                return false
            }

            // validar seccion 5

            if (formularioEconomiaPopular.calleSeccion5  == ''
                || formularioEconomiaPopular.numeroCalleSeccion5 == ''
                || formularioEconomiaPopular.cpSeccion5 == ''
                || formularioEconomiaPopular.barrioSeccion5 == ''
                || formularioEconomiaPopular.localidadSeccion5 == ''
                || formularioEconomiaPopular.departamentoSeccion5 == ''
                || formularioEconomiaPopular.emailSeccion5 == ''
                || formularioEconomiaPopular.confirmeEmailSeccion5 == ''
                || formularioEconomiaPopular.telefonoSeccion5 == ''
                || formularioEconomiaPopular.departamentoSeccion5 == ''
                || formularioEconomiaPopular.domicilioPredioProductivoSeccion5 == '') {
                    if (formularioEconomiaPopular.domicilioPredioProductivoSeccion5 == 'False'
                    && (formularioEconomiaPopular.callePredioProductivoSeccion5 == ''
                    || formularioEconomiaPopular.nroCallePredProdSeccion5 == ''
                    || formularioEconomiaPopular.cpPredProdSeccion5 == ''
                    || formularioEconomiaPopular.barrioPredProdSeccion5 == ''
                    || formularioEconomiaPopular.localidadPredProdSeccion5 == ''
                    || formularioEconomiaPopular.departamentoPredioProdSeccion5 == ''
                    || formularioEconomiaPopular.emailPredProdSeccion5 == ''
                    || formularioEconomiaPopular.telefonoPredProdSeccion5 == '')) {
                        return false
                    } return false

                }
                    
                    
                    //seccion 6
                    
                    if (formularioEconomiaPopular.ivaSeccion6 == "" 
                    || formularioEconomiaPopular.ingresosBrutosSeccion6 == ""
                    || formularioEconomiaPopular.tasaComercioSeccion6 == "") {
                        return false
                    }
                    
                    //Seccion 7 que pueden ser múltiples arrays
                    for (let i = 0; i < this.formularioEconomiaPopular.formularioSeccion7.length; i++) {
                        
                        if (formularioEconomiaPopular.formularioSeccion7[i].apellidoSeccion7 == ''
                        || formularioEconomiaPopular.formularioSeccion7[i].nombreSeccion7 == ''
                        || formularioEconomiaPopular.formularioSeccion7[i].tipoDeDocumentoSeccion7 == ''
                        || formularioEconomiaPopular.formularioSeccion7[i].nroDocumentoSeccion7 == ''
                        || formularioEconomiaPopular.formularioSeccion7[i].tieneCiDiSeccion7 == '') {
                            if(formularioEconomiaPopular.formularioSeccion7[i].tieneCiDiSeccion7 != ''
                            && formularioEconomiaPopular.formularioSeccion7[i].nivelCiDiSeccion7 == '') {
                                return false
                            }
                            
                        }
                        
                    }


                    //Validación Seccion 9 que pueden ser múltiples arrays

                    for (let i = 0; i < formularioEconomiaPopular.formularioSeccion9.length; i++) {
                        
                        if(formularioEconomiaPopular.formularioSeccion9[i]
                            && (formularioEconomiaPopular.formularioSeccion9[i].nombreResponsableSeccion9 == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].dniSeccion9 == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].cargoSeccion9 == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].telefonoSeccion9 == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].emailSeccion9 == '')) {
                                return false    
                        }
                    }
                    //Validación Seccion 9b Para las personas físicas

                    for (let i = 0; i < formularioEconomiaPopular.formularioSeccion9b.length; i++) {
                        
                        if(formularioEconomiaPopular.formularioSeccion9b[i]
                            && (formularioEconomiaPopular.formularioSeccion9[i].apellidoSeccion9b == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].nombreSeccion9b == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].documentoSeccion9b == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].fechaNacSeccion9b == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].vinculoSeccion9b == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].escolaridadSeccion9b == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].estaCursandoSeccion9b == ''
                            || formularioEconomiaPopular.formularioSeccion9[i].ocupacionSeccion9b == '')) {
                                return false    
                        }
                    }



                    return true
                    
        }



                //9b Para las personas físicas

                // formularioSeccion9b: [{
                //     apellidoSeccion9b: '',
                //     nombreSeccion9b: '',
                //     documentoSeccion9b: '',
                //     fechaNacSeccion9b: '',
                //     vinculoSeccion9b: '',
                //     escolaridadSeccion9b: '',
                //     estaCursandoSeccion9b: '',
                //     ocupacionSeccion9b: '',
                // }],








    constructor() {

    }


    ngOnInit(): void {}


    // consologuear formulario

    consologuearFormulario() {
        console.log(this.formularioEconomiaPopular);
    }



    // métodos para que aparezcan y desaparezcan los elementos html dependiendo de las selecciones        

    cambioInscripcionesLegalesSi() {
    this.tieneRegistroSection3 = true
    }

    cambioInscripcionesLegalesNo() {
    this.tieneRegistroSection3 = false
    }

    tieneObraSocialSi() {
    this.tieneObraSocial = true
    }

    tieneObraSocialNo() {
    this.tieneObraSocial = false
    }

    cambioDomicilioPredioProductivoNo() {
    this.domicilioPredioProductivoSection5 = false
    }

    cambioDomicilioPredioProductivoSi() {
    this.domicilioPredioProductivoSection5 = true
    }

    cambioActividadAgropecuariaSi() {
        this.esActividadAgropecuaria = true
    }

    cambioActividadAgropecuariaNo() {
        this.esActividadAgropecuaria = false
    }
    setTieneCiDiSi() {
        this.tieneCiDi = true;
    }
    setTieneCiDiNo() {
        this.tieneCiDi = false;
    }

    
    changeInputsectionOne() {
    this.inputSectionOneValue = true

    }

    unidadProductivaUnipersonal() {

        this.esPersonaFisica = true
        this.esUnidadAsociativaProductiva = false    
        }
    
        UnidadesAsociativasProductivas() {
        this.esUnidadAsociativaProductiva = true
        this.esPersonaFisica = false    
        }




}




