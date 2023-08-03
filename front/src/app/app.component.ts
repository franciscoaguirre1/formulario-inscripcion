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


        //  métdos para agregar nuevos campos

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
    setTieneCiDi(value: boolean) {
        this.tieneCiDi = value;
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




