export const environment = {
    production: true,
    apimUrlBase: 'https://apim-transversales-dt-qa.azure-api.net/',
    apimUrlModulos: {
        enrolamiento: 'fx-enrolamiento-dt-qa/V1.0/',
        rolesperfilesrol: 'fx-rolesperfilesrol-dt-qa/V1.0/',
        usuarioInfo: 'fx-rolesperfiles-dt-qa/V1.0/',
        directiva22: 'fx-directiva22main-dt-qa/V1.0/',
        validacionPlena : 'fx-validprevia-genetoken-dt-qa/V1.0/',
        infoPersonaNatural: 'fx-getpersonanatural-dt-qa/V1.0/',
        infoPersonaJuridica: 'fx-getpersonajuridica-dt-qa/V1.0/',
        validacionPlenaMain: 'fx-validprevia-main-dt-qa/V1.0/',
        grupoServicios: 'fx-agendamgruposervicio-dt-qa/V1.0/',
        servicios: 'fx-agendamservicio-dt-qa/V1.0/',
        mallas: 'fx-agendammalla-dt-qa/V1.0/',
        sedes: 'fx-agendamsedes-dt-qa/V1.0/',
        getImagenUsuario : 'fx-getimgperfil-dt-qa/V1.0/',
        putImagenUsuario : 'fx-putimgperfil-dt-qa/V1.0/',
        putPerfilPersonaNatural: 'fx-putpersonanatural-dt-qa/V1.0/',
        putPerfilPersonaJuridica: 'fx-putpersonajuridica-dt-qa/V1.0/',
        agendamiento: 'fx-agendamiento-dt-qa/V1.0/'
    },
    apimUrlmdm : {
        tipoDocumentos: 'fx-mdmperstipodoc-dt-qa/V1.0/',
        generos: 'fx-mdmpergenerotipo-dt-qa/v1.0/',
        sexos: 'fx-mdmperssexo-dt-qa/V1.0/',
        paises: 'fx-mdmgeopaises-dt-qa/V1.0/',
        // (Municipio, Centro Poblado y Departamento)
        divisionPoblacional: 'fx-mdmgeodivipola-dt-qa/V1.0/',
        zonas: 'fx-mdmgeozona-dt-qa/V1.0/',
        // Barrios por localidad
        localidadesYBarrios: 'fx-mdmgeolocalidadbarrio-dt-qa/V1.0/',
        tiposVia: 'fx-mdmgeovia-dt-qa/V1.0/',
        letras: 'fx-mdmgeoletravia-dt-qa/V1.0/',
        cuadrantes: 'fx-mdmgeocuadrante-dt-qa/V1.0/',
        estratos: 'fx-mdmgeoestrato-dt-qa/V1.0/',
        nomenclaturas: 'fx-mdmgeonomenclatura-dt-qa/V1.0/',
        motivosActualizacion: 'fx-mdmvusmotivoactualiza-dt-qa/V1.0/',
        tiporh: 'fx-mdmperstiporh-dt-qa/V1.0/',
        agendaDiasSemana: 'fx-agendamdescliterdiasem-dt-qa/V1.0/literalDias',
        agendaTiposPagos: 'fx-agendamfuncgettipopago-dt-qa/V1.0/tipoPago'
    },
    apimSubscriptionsKeys :{
        enrolamiento:'da1980f751874845bf562b194b8e2ecc',
        maestros: 'a785e6976e0040b69f210ec708afac82',
        directiva22: '5bfb3f05841b40f18b70c7a69be6ddb8',
        validacionPlena : '3519783b335b4c109ff7a6b0d242d77d',
        perfiles: 'da1980f751874845bf562b194b8e2ecc',
        agendamiento: 'e900c03d012e4ea88831b4eafca8ab8b',
        maestrosAgendamiento: 'e900c03d012e4ea88831b4eafca8ab8b',
    },

    b2cPolicies: {
        names: {
            signIn: 'B2C_1_iniciousertrvqa',
        },
        authorities: {
            signIn: {
                authority: 'https://b2ctrvdtqa.b2clogin.com/b2ctrvdtqa.onmicrosoft.com/B2C_1_iniciousertrvqa',
            },
        },
        authorityDomain: 'b2ctrvdtqa.b2clogin.com',
    },
    clientIdB2C: '9ccddf97-00e3-4679-a20a-6d49f72c7994',
    msalConfig: {
        redirectUri: '/', // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
        postLogoutRedirectUri:'https://stwebtransversaldtqa.z20.web.core.windows.net/',
    },
    encriptadorKey: 'E546C8DF278CD5931069B522E695D4F2',
    roles: {
        ciudadano: {
            nombre: 'Ciudadano',
            id: 1
        },
        empresa: {
            nombre: 'Empresa',
            id: 2
        },
        administrador: {
            nombre: 'Administrador',
            id: 3
        }
    },
    //google
    siteKeyReCaptcha: '6LcP4fwiAAAAAPhgw2q3sbEQw1Gjy0_w5XcjMGig'
};
