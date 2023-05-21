const url = 'https://purplescool.ru/course/javascript';
function getUrlParts(url){
    const [protocol, _, host, ...path] = url.split('/');
    console.log(protocol, _, host, path);
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${host}`);
    console.log(`Путь внутри сайта: /${path.join('/')}`);
}
getUrlParts(url)