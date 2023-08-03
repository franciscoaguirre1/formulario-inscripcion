import { Component, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


//import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';


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

    // para agregar campos a los ya existentes

    representantes = [""]
    personas = [""]
    personasFisicas = [""]

        //  métdos para agregar nuevos campos del mismo tipo

        agregarNuevoRepresentanteSection7() {
            this.formularioEconomiaPopular.formularioSeccion7.push({
                apellidoSeccion7: '',
                nombreSeccion7: '',
                tipoDeDocumentoSeccion7: '',
                nroDocumentoSeccion7: '',
                tieneCiDiSeccion7: '',
                nivelCiDiSeccion7: ''                
                })
        }
        agregarNuevoResponsableSection9() {
            this.personas.push("")
        }
        agregarPersonaFisicaSection9b() {
            this.personasFisicas.push("")
        }
    

    // array del formulario de economía popular

    formularioEconomiaPopular: any = {
        // 1.- CARÁCTER DE LA UNIDAD PRODUCTIVA SOLICITANTE
    
     
            cooperativaConMatricula: '',
            asociacionCivilFundacionInscriptaIPJ: '',
            unidadProductivaAsociativaInformal: '',
            unidadProductivaFamiliar: '',
            cooperativaenFormacion: '',
            asociacionCivilFundaciónFormacion: '',
            asociaciónSolidariaAsociativaInformal: '',
            personaFisicaUnidadProductivaUnipersonal: '',
            caracterUnidadProductivaOtraSeccion1: '',
            caracterUnidadProductivaOtraInputSeccion1: '',
            
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
            marcasYSeñalesSeccion3: '',
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

            nombreResponsableSeccion9: '',
            dniSeccion9: '',
            cargoSeccion9: '',
            telefonoSeccion9: '',
            emailSeccion9: '',
        
        //9b Para las personas físicas

            apellidoSeccion9b: '',
            nombreSeccion9b: '',
            documentoSeccion9b: '',
            fechaNacSeccion9b: '',
            vinculoSeccion9b: '',
            escolaridadSeccion9b: '',
            estaCursandoSeccion9b: '',
            ocupacionSeccion9b: '',

        //9c Cursos de Capacitación laboral realizados por el titular
            cursosRealizadosSeccion9c: '',

        //9d Obra Social
            poseeObraSocialSeccion9d: '',
            cubreGrupoSeccion9d: '',
        //9e Situación habitacional
            posesionViviendaSeccion9e: '',
            bañoSeccion9e: '',
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
    this.inputSectionOneValue = !this.inputSectionOneValue

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



    // antiguos métodos para agregar nuevos campos del mismo tipo




// agregarNuevoRepresentanteSection7() {
//     const newRowDiv = document.createElement("div");
//     newRowDiv.classList.add("row");
  
//     const inputGroup = `
//     <hr>
//     <div class="col-4">
//         <div class="mb-3">
//             <label  class="form-label">Apellido</label>
//             <div class="input-group">                        
//                 <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//             </div>
//         </div>
//     </div>
//     <div class="col-4">
//         <div class="mb-3">
//             <label  class="form-label">Nombres</label>
//             <div class="input-group">                        
//                 <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//             </div>
//         </div>
//     </div>
//     <div class="col-4">
//         <div class="mb-3">
//             <label  class="form-label">Tipo de Documento</label>
//             <div class="input-group">                        
//                 <select class="form-select" aria-label="Default select example">
//                     <option selected>-</option>
//                     <option value="AGRUPACION">AGRUPACION</option>
//                     <option value="CEDULA DE IDENTIDAD">CEDULA DE IDENTIDAD</option>
//                     <option value="CERTIFICADO MIGRATORIO">CERTIFICADO MIGRATORIO</option>
//                     <option value="CUIL">CUIL</option>
//                     <option value="CUIT">CUIT</option>
//                     <option value="DOCUMENTO NACIONAL DE IDENTIDAD">DOCUMENTO NACIONAL DE IDENTIDAD</option>
//                     <option value="EXTRANJERO CON CERTIF. DE POLICIA">EXTRANJERO CON CERTIF. DE POLICIA</option>
//                     <option value="EXTRANJERO SIN DOCUMENTO">EXTRANJERO SIN DOCUMENTO</option>
//                     <option value="IDENTIFICACION EMPRESA M4">IDENTIFICACION EMPRESA M4</option>
//                     <option value="INDOCUMENTADO">INDOCUMENTADO</option>
//                     <option value="LIBRETA CIVICA">LIBRETA CIVICA</option>
//                     <option value="LIBRETA DE ENROLAMIENTO">LIBRETA DE ENROLAMIENTO</option>
//                     <option value="NRO. DNRP">NRO. DNRP</option>
//                     <option value="NUMEROS ESPECIALES">NUMEROS ESPECIALES</option>
//                     <option value="PASAPORTE">PASAPORTE</option>
//                     <option value="POLICIA FEDERAL">POLICIA FEDERAL</option>
//                 </select>
//             </div>
//         </div>
//     </div>
//     <div class="col-4">
//         <div class="mb-3">
//             <label  class="form-label">N° de Documento</label>
//             <div class="input-group">                        
//                 <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//             </div>
//         </div>
//     </div>
//     <div class="col-4">
//         <div class="mb-3">
//             <label class="form-label">¿Tiene CiDi?</label>
//             <div class="input-group">                        
//                 <div class="form-check mx-3">
//                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="tieneCiDiSi" value="Si" (click)="setTieneCiDi(true)">
//                     <label class="form-check-label" for="inlineRadio1">Si</label>
//                 </div>
//                 <div class="form-check mx-3">
//                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="tieneCiDiNo" value="No" (click)="setTieneCiDi(false)">
//                     <label class="form-check-label" for="inlineRadio2">No</label>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="col-4">
//         <div class="mb-3">
//             <label class="form-label">Nivel de CiDi</label>
//             <div class="input-group">                        
//                 <select [disabled]="!tieneCiDi" class="form-select" aria-label="Default select example">
//                     <option selected>-</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                 </select>
//             </div>
//         </div>
//     </div>
//     `;
  
//     newRowDiv.innerHTML = inputGroup;
//     const container = document.querySelector(".container-7");
//      // Check if the container element exists before appending the new row
//     if (container) {
//       container.appendChild(newRowDiv);
//     } else {
//       console.error("Container with class 'container-7' not found.");
//     }
//   }


  
//   agregarNuevoResponsableSection9() {
//       const newRowDiv = document.createElement("div");
//       newRowDiv.classList.add("row");      
//       const inputGroup = `
//       <hr>
//       <div class="col-4">
//           <div class="mb-3">
//               <label for="basic-url" class="form-label">Nombre del Responsable</label>
//               <div class="input-group">                        
//                   <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//               </div>                        
//           </div>
//       </div>
//       <div class="col-4">
//           <div class="mb-3">
//               <label for="basic-url" class="form-label">DNI</label>
//               <div class="input-group">                        
//                   <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//               </div>                        
//           </div>
//       </div>
//       <div class="col-4">
//           <div class="mb-3">
//               <label for="basic-url" class="form-label">Cargo</label>
//               <div class="input-group">                        
//                   <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//               </div>                        
//           </div>
//       </div>
//       <div class="col-4">
//           <div class="mb-3">
//               <label for="basic-url" class="form-label">Teléfono</label>
//               <div class="input-group">                        
//                   <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//               </div>                        
//           </div>
//       </div>
//       <div class="col-4">
//           <div class="mb-3">
//               <label for="basic-url" class="form-label">Correo para recibir notificaciones</label>
//               <div class="input-group">                        
//                   <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//               </div>                        
//           </div>
//       </div>
//       `;
    
//       newRowDiv.innerHTML = inputGroup;
//       const container = document.querySelector(".container-9");
//        // Check if the container element exists before appending the new row
//       if (container) {
//         container.appendChild(newRowDiv);
//       } else {
//         console.error("Container with class 'container-9' not found.");
//       }
//   }



//   agregarPersonaFisica9b() {
//     const newRowDiv = document.createElement("div");
//     newRowDiv.classList.add("row");
  
//     const inputGroup = `
//     <hr>
//     <div class="col-2">
//         <div class="mb-3">
//             <label for="basic-url" class="form-label">Apellido</label>
//             <div class="input-group">                        
//                 <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//             </div>                        
//         </div>
//     </div>
//     <div class="col-2">
//         <div class="mb-3">
//             <label for="basic-url" class="form-label">Nombre</label>
//             <div class="input-group">                        
//                 <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//             </div>                        
//         </div>
//     </div>
//     <div class="col-2">
//         <div class="mb-3">
//             <label for="basic-url" class="form-label">Documento</label>
//             <div class="input-group">                        
//                 <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//             </div>                        
//         </div>
//     </div>
//     <div class="col-2">
//         <div class="mb-3">
//             <label for="basic-url" class="form-label">Fecha de Nacimiento</label>
//             <div class="input-group">                        
//                 <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
//             </div>                        
//         </div>
//     </div>
//     <div class="col-2">
//         <div class="mb-3">
//             <label for="basic-url" class="form-label">Vínculo</label>
//             <div class="input-group">                        
//                 <select class="form-select" aria-label="Default select example">
//                     <option selected>-</option>
//                     <option value="ABUELO/A">ABUELO/A</option>
//                     <option value="ADHERENTE">ADHERENTE</option>
//                     <option value="ADOPCION">ADOPCION</option>
//                     <option value="CONVIVIENTE (CONCUBINO)">CONVIVIENTE (CONCUBINO)</option>
//                     <option value="CONYUGE">CONYUGE</option>
//                     <option value="DESCONOCIDO">DESCONOCIDO</option>
//                     <option value="HERMANO/A">HERMANO/A</option>
//                     <option value="HIJO DEL CONYUGE SOL.DE 21 A 25 A.EST.">HIJO DEL CONYUGE SOL.DE 21 A 25 A.EST.</option>
//                     <option value="HIJO DEL CONYUGE SOLTERO MENOR DE 21 A.">HIJO DEL CONYUGE SOLTERO MENOR DE 21 A.</option>
//                     <option value="HIJO/A">HIJO/A</option>
//                     <option value="JEFE/A FAMILIA">JEFE/A FAMILIA</option>
//                     <option value="MENOR BAJO GUARDA O TUTELA">MENOR BAJO GUARDA O TUTELA</option>
//                     <option value="NIETO/A">NIETO/A</option>
//                     <option value="OTROS FAMILIARES">OTROS FAMILIARES</option>
//                     <option value="OTROS NO FAMILIARES">OTROS NO FAMILIARES</option>
//                     <option value="PADRE/MADRE">PADRE/MADRE</option>
//                     <option value="PRENATAL">PRENATAL</option>
//                     <option value="SOBRINO/A">SOBRINO/A</option>
//                     <option value="TIO/A">TIO/A</option>
//                     <option value="TITULAR EXCLUSIVAMENTE">TITULAR EXCLUSIVAMENTE</option>
//                     <option value="TUTOR/A">TUTOR/A</option>
//                 </select>
//             </div>
//         </div>
//     </div>
//     <div class="col-2">
//         <div class="mb-3">
//             <label for="basic-url" class="form-label">Escolaridad</label>
//             <div class="input-group">                        
//                 <select class="form-select" aria-label="Default select example">
//                     <option selected>-</option>
//                     <option value="Inicial y Preescolar">Inicial y Preescolar</option>
//                     <option value="Primaria incompleta">Primaria incompleta</option>
//                     <option value="Primaria completa">Primaria completa</option>
//                     <option value="Secundaria incompleta">Secundaria incompleta</option>
//                     <option value="Secundaria completa">Secundaria completa</option>
//                     <option value="Terciaria incompleta">Terciaria incompleta</option>
//                     <option value="Terciaria completa">Terciaria completa</option>
//                     <option value="Universitaria incompleta">Universitaria incompleta</option>
//                     <option value="Universitaria completa">Universitaria completa</option>
//                 </select>
//             </div>                            
//         </div>
//     </div>
//     <div class="col-2">
//         <div class="mb-3">
//             <label class="form-label">Está cursando?</label>
//             <div class="input-group">                        
//                 <div class="form-check mx-3">
//                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
//                     <label class="form-check-label" for="inlineRadio1">Si</label>
//                 </div>
//                 <div class="form-check mx-3">
//                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
//                     <label class="form-check-label" for="inlineRadio2">No</label>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="col-2">
//         <div class="mb-3">
//             <label for="basic-url" class="form-label">Ocupación</label>
//             <div class="input-group">                        
//                 <select class="form-select" aria-label="Default select example">
//                     <option selected>-</option>
//                     <option value="Empleado">Empleado</option>
//                     <option value="Desocupado">Desocupado</option>
//                     <option value="Autoempleo (emprendimiento)">Autoempleo (emprendimiento)</option>
//                     <option value="Jubilado - Pensionado">Jubilado - Pensionado</option>
//                     <option value="No trabaja">No trabaja</option>
//                 </select>
//             </div>
//         </div>
//     </div>
//     `;
  
//     newRowDiv.innerHTML = inputGroup;
//     const container = document.querySelector(".container-9b");
//      // Check if the container element exists before appending the new row
//     if (container) {
//       container.appendChild(newRowDiv);
//     } else {
//       console.error("Container with class 'container-7' not found.");
//     }
//   }




