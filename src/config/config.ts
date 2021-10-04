
//global runtime configurations
export const CONFIG  = {
    APP_NAME: 'Akrck02.com',
    APP_VERSION: 'v1.0',
    HOST: '127.0.0.1/akrck02.com',
    PORT: 80,
    URL: '',
    ENVIROMENT : 'development',
    DEBUG : true,
    LOG_LEVEL : 'debug',
    LOG_FILE : 'app.log',
};

//paths on server
export const PATHS = {
    ROOT : '',
    RESOURCES : '',
    LOGS : '',
    FONTS : '',
    IMAGES : '',
    VIDEOS : '' ,
    AUDIOS : '',
    JSON : ''     
}


//api calls
export const API = {};  

//view URLs
export const VIEWS = {
    BASE_URL : '',
    CODE : '',
    GAMES : '',
    MEDIA : '',
    ABOUT : ''
};


//start settings
export function setUpConfigurations() : void {

    //global runtime configurations
    CONFIG['URL'] = 'http://' + CONFIG['HOST'] + "/";
    
    //Paths
    PATHS['ROOT'] = CONFIG['URL'];
    PATHS['LOGS'] = PATHS['ROOT'] + 'logs/';
    PATHS['RESOURCES'] = PATHS['ROOT'] + 'resources/';
    PATHS['FONTS'] = PATHS['RESOURCES'] + 'fonts/';
    PATHS['IMAGES'] = PATHS['RESOURCES'] + 'images/';
    PATHS['VIDEOS'] = PATHS['RESOURCES'] + 'videos/';
    PATHS['AUDIOS'] = PATHS['RESOURCES'] + 'audios/';
    PATHS['JSON'] = PATHS['RESOURCES'] + 'json/'; 

    //views 
    VIEWS['BASE_URL'] = CONFIG['URL'] + '/#/';
    VIEWS['CODE'] = VIEWS['BASE_URL'] + 'code/';
    VIEWS['GAMES'] = VIEWS['BASE_URL'] + 'games/';
    VIEWS['MEDIA'] = VIEWS['BASE_URL'] + 'media/';
    VIEWS['ABOUT'] = VIEWS['BASE_URL'] + 'about/';

}