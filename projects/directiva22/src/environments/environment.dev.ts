export const environment = {
    production: true,
    apimUrlBase: 'https://apim-transversales-dt-dev.azure-api.net/',
    apimUrlModulos: {
        enrolamiento: 'fx-enrolamiento-dt-dev/V1.0/',
        rolesperfilesrol: 'fx-rolesperfilesrol-dt-dev/V1.0/',
        usuarioInfo: 'fx-rolesperfiles-dt-dev/V1.0/',
        directiva22: 'fx-directiva22main-dt-dev/V1.0/',
        validacionPlena : 'fx-validprevia-genetoken-dt-dev/V1.0/',
        infoPersonaNatural: 'fx-getpersonanatural-dt-dev/V1.0/',
        infoPersonaJuridica: 'fx-getpersonajuridica-dt-dev/V1.0/',
        validacionPlenaMain: 'fx-validprevia-main-dt-dev/V1.0/',
        grupoServicios: 'fx-agendamgruposervicio-dt-dev/V1.0/',
        servicios: 'fx-agendamservicio-dt-dev/V1.0/',
        mallas: 'fx-agendammalla-dt-dev/V1.0/',
        sedes: 'fx-agendamsedes-dt-dev/V1.0/',
        getImagenUsuario : 'fx-getimgperfil-dt-dev/V1.0/',
        putImagenUsuario : 'fx-putimgperfil-dt-dev/V1.0/',
        putPerfilPersonaNatural: 'fx-putpersonanatural-dt-dev/V1.0/',
        putPerfilPersonaJuridica: 'fx-putpersonajuridica-dt-dev/V1.0/',
        agendamiento: 'fx-agendamiento-dt-dev/V1.0/'
    },
    apimUrlmdm : {
        tipoDocumentos: 'fx-mdmperstipodoc-dt-dev/V1.0/',
        generos: 'fx-mdmpergenerotipo-dt-dev/v1.0/',
        sexos: 'fx-mdmperssexo-dt-dev/V1.0/',
        paises: 'fx-mdmgeopaises-dt-dev/V1.0/',
        // (Municipio, Centro Poblado y Departamento)
        ciudadesExtranjeras: 'fx-mdmgeopaises-dt-dev/V1.0/',
        divisionPoblacional: 'fx-mdmgeodivipola-dt-dev/V1.0/',
        zonas: 'fx-mdmgeozona-dt-dev/V1.0/',
        // Barrios por localidad
        localidadesYBarrios: 'fx-mdmgeolocalidadbarrio-dt-dev/V1.0/',
        tiposVia: 'fx-mdmgeovia-dt-dev/V1.0/',
        letras: 'fx-mdmgeoletravia-dt-dev/V1.0/',
        cuadrantes: 'fx-mdmgeocuadrante-dt-dev/V1.0/',
        estratos: 'fx-mdmgeoestrato-dt-dev/V1.0/',
        nomenclaturas: 'fx-mdmgeonomenclatura-dt-dev/V1.0/',
        motivosActualizacion: 'fx-mdmregmotivodir22-dt-dev/V1.0/',
        tiporh: 'fx-mdmperstiporh-dt-dev/V1.0/',
        agendaDiasSemana: 'fx-agendamdescliterdiasem-dt-dev/V1.0/literalDias',
        agendaTiposPagos: 'fx-agendamfuncgettipopago-dt-dev/V1.0/tipoPago'
    },
    apimSubscriptionsKeys :{
        enrolamiento:'dc288e55f5c649d7b891dc4334602e4b',
        maestros:'40dc6eb5db294ba782b65638f421da7b',
        directiva22: '5faf589b005e48c3b3f48c70ac3da5e3',
        validacionPlena : 'f4b6f599dacb4ac4b416c1133d199a47',
        perfiles: 'dc288e55f5c649d7b891dc4334602e4b',
        agendamiento: '84bfb703a29548e1b651736c0bcb58aa',
        maestrosAgendamiento: '84bfb703a29548e1b651736c0bcb58aa',
    },
    b2cPolicies: {
        names: {
            signIn: 'B2C_1_iniciousertrvdev',
        },
        authorities: {
            signIn: {
                authority: 'https://b2ctrvdtdev.b2clogin.com/b2ctrvdtdev.onmicrosoft.com/B2C_1_iniciousertrvdev',
            },
        },
        authorityDomain: 'b2ctrvdtdev.b2clogin.com',
    },
    clientIdB2C: '41e23ea1-1c45-4970-b52c-18cbf9c5d9a2',
    msalConfig: {
        redirectUri: '/', // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
        postLogoutRedirectUri: 'https://stwebtransversaldtdev.z20.web.core.windows.net/',
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

