import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

//imagenesProductos

import comic1 from '../assets/img/productos/comic1.jpg';
import comic2 from '../assets/img/productos/comic2.jpg';
import comic3 from '../assets/img/productos/comic3.jpg';
import comic4 from '../assets/img/productos/comic4.jpg';
import comic5 from '../assets/img/productos/comic5.jpg';
import comic6 from '../assets/img/productos/comic6.jpg';
import comic7 from '../assets/img/productos/comic7.jpg';
import comic8 from '../assets/img/productos/comic8.jpg';
import comic9 from '../assets/img/productos/comic9.jpg';
import comic10 from '../assets/img/productos/comic10.jpg';
import comic11 from '../assets/img/productos/comic11.jpg';
import comic12 from '../assets/img/productos/comic12.jpg';
import comic13 from '../assets/img/productos/comic13.jpg';
import comic14 from '../assets/img/productos/comic14.jpg';
import comic15 from '../assets/img/productos/comic15.jpg';
import comic16 from '../assets/img/productos/comic16.jpg';
import comic17 from '../assets/img/productos/comic17.jpg';
import comic18 from '../assets/img/productos/comic18.jpg';
import comic19 from '../assets/img/productos/comic19.jpg';
import comic20 from '../assets/img/productos/comic20.jpg';

export const CartContext = React.createContext(); 

export const useCartContext = () => useContext(CartContext);

export const ContextoCarritoProductos = ({children}) => {

    //Arreglo con los productos de la página

    const listaProductos = [
        {
        imagen: comic1,
        titulo: "Al otro lado del Instituto",
        precio:"$645.00",
        stock:"0",
        descripcion: `Ir de acampada con tus padres suele ser divertido, pero para Parker, Annie y toda la familia Walden ¡se convierte en una pesadilla! Después de que un espeluznante y monstruoso pájaro ataque a su madre en el bosque, Parker y Annie se encuentran cara a cara con dos criaturas alienígenas que penetran en sus cerebros y toman el control de sus cuerpos. ¿Podrán recuperar la consciencia y convencer a su familia de lo que está ocurriendo... o perderán el control de sus vidas para siempre?`,
        serie: "Al otro lado del Instituto"
        ,tipo: "Comic"
        ,id: "0"},
        {
        imagen: comic2,
        titulo: "Halo, la Novela Gráfica",
        precio:"$1450.00",
        stock:"7",
        descripcion: "Este tomo incluye cuatro historias clásicas de Halo que amplían la profunda tradición de su universo, contadas por algunos de los mejores autores de la historia del cómic. El artista Simon Bisley (Batman, Juez Dredd) y el guionista Lee Hammock (Advent Rising) nos ofrecen el relato central titulado “El último viaje de la Infinite Succor”. El galardonado mangaka Tsutomu Nihei (Blame!) escribe y dibuja la historia del sargento Johnson, “Cuarentena rota”. Ed Lee, Andrew Robinson (El quinto Beatle) y Jay Faerber (Superman) aúnan fuerzas en una historia de tecnología en el s. XXVI con “Pruebas de armadura”. Por último, Brett Lewis (Winter Men) y el mundialmente famoso Jean Giraud, Moebius, completan esta experiencia única de Halo con una historia que nos muestra cómo era la vida antes de la invasión en “Segundo amanecer sobre Nueva Mombasa”."
        ,serie: "Halo"
        ,tipo: "Comic"
        ,id: "1"},
        {
        imagen: comic3,
        titulo: "Destinos Infinitos",
        precio:"$1800.00",
        stock:"3",
        descripcion: "¡Las Gemas del Infinito han regresado al Universo Marvel! ¿Quién conseguirá esta vez su increíble poder cósmico? ¡La búsqueda une a algunos de los autores más importantes de Marvel con sus personajes! Desde figuras icónicas como Iron Man, Capitán América, Thor y Spiderman hasta Miles Morales o La Gata Negra, pasando por Los Vengadores y Los Guardianes de la Galaxia. Mientras tanto, Nick Furia emprende su propia búsqueda de respuestas."
        ,serie: "Marvel"
        ,tipo: "Comic"
        ,id: "2"},
        {
        imagen: comic4,
        titulo: "El Asombroso Spiderman 03",
        precio:"$645.00",
        stock:"4",
        descripcion: "¿Está el mundo preparado para el nuevo trabajo de J. Jonah Jameson? El antiguo propietario del Daily Bugle se ha convertido en el primer defensor de Spiderman, y si la relación de éste con Jonah era complicada antes... ¡imagínate ahora, que el trepamuros tendrá que salvar su vida! Vale, lleva un tiempo del lado de Spidey, pero después de ponérselo muy difícil durante años. ¡Y son muchos los que se la tienen jurada!"
        ,serie: "Spiderman"
        ,tipo: "Comic"
        ,id: "3"},
        {
        imagen: comic5,
        titulo: "One Piece 01",
        precio:"$615.00",
        stock:"6",
        descripcion: "Sigue las aventuras de Monkey D. Luffy, un chico que sueña con ser el rey de los piratas y que se hace a la mar en un bote para buscar la tripulación que le pueda ayudar en ello."
        ,serie: "One Piece",
        id: "4"},
        {
        imagen: comic6,
        titulo: "Death Note 01",
        precio:"$579.00",
        stock:"2",
        descripcion: "Light Yagami, aplicado estudiante modelo, se aburre soberanamente. Pero cuando encuentra un misterioso cuaderno, ante él se abren infinidad de posibilidades: con el poder de la vida o la muerte de sus semejantes en sus manos, ¿qué camino escogerá? ¿Ayudar o crear un mundo en el que él sea el señor supremo? ¡El manga que revolucionó el género shonen en una edición con diseño exclusivo para NORMA Editorial!",
        serie: "Death Note",
        tipo: "Manga"
        ,id: "5"},
        {
        imagen: comic7,
        titulo: "Ataque a los Titanes 01",
        precio:"$549.00",
        stock:"9",
        descripcion:"La raza humana, antaño dueña del mundo, se enfrenta a la extinción a manos de los titanes, gigantescos monstruos de inteligencia limitada que cazan y devoran personas por diversión. Los supervivientes se hacinan e intentan sobrevivir en una pequeña ciudad… pero algunos ya están hartos: ¡van a atacar!",
        serie: "Attack on Titan",
        tipo: "Manga"
        ,id: "6"},
        {
        imagen: comic8,
        titulo: "Another 01",
        precio:"$549.00",
        stock:"7",
        descripcion:"En 1972, Misaki, un popular estudiante de la clase 3-3 de la Yomiyama North Middle School, murió repentinamente a mitad de curso. Impactados por la pérdida, sus compañeros y profesores siguieron actuando como si estuviera vivo. Tal es así que incluso pudo vislumbrarse una extraña presencia en la foto de graduación. En la primavera de 1998, un chico de 15 años llamado Koichi Sakakibara es trasladado a esa misma clase, ahí conoce a Mei Misaki, una chica bastante rara a la que tanto sus profesores como compañeros de clase ignoran. Inesperadamente una serie de asesinatos causa la desesperación entre los alumnos de la clase 3-3. Koichi y Mei descubren que esas muertes están relacionadas con la de Misaki en 1972 y se proponen descubrir qué las causa y cómo detenerlas antes de convertirse en las próximas víctimas.",
        serie: "Another",
        tipo: "Manga"
        ,id: "7"},
        {
        imagen: comic9,
        titulo: "One Piece 02",
        precio:"$549.00",
        stock:"12",
        serie: "One Piece",
        tipo: "Manga"
        ,id: "8"},
        {
        imagen: comic10,
        titulo: "One Piece 03",
        precio:"$549.00",
        stock:"16",
        serie: "One Piece",
        tipo: "Manga"
        ,id: "9"},
        {
        imagen: comic11,
        titulo: "One Piece 04",
        precio:"$549.00",
        stock:"20",
        serie: "One Piece",
        tipo: "Manga"
        ,id: "10"},
        {
        imagen: comic12,
        titulo: "One Piece 05",
        precio:"$549.00",
        stock:"22",
        serie: "One Piece",
        tipo: "Manga"
        ,id: "11"},
        {
        imagen: comic13,
        titulo: "Naruto",
        precio:"$549.00",
        stock:"22",
        serie: "Naruto",
        tipo: "Manga"
        ,id: "12"},
        {
        imagen: comic14,
        titulo: "LEYENDAS DE LA PATRULLA-X: LOBEZNO Y JÚBILO",
        precio:"$849.00",
        descripcion: "¡Conflicto internacional! La leyenda de los cómics LarryHama vuelve a la serie de Lobezno, con una nueva aventura ambientada en Japón con Dama Mortal y La Mano como adversarios y el inigualable BillyTan al dibujo.",
        stock:"5",
        serie: "Wolverine",
        tipo: "Comic"
        ,id: "13"},
        {
        imagen: comic15,
        titulo: "LOBEZNO: ORÍGENES SALVAJES",
        precio:"$1249.00",
        descripcion: "Descubierto como un salvaje en medio de la nada, reclutado como agente secreto, destinado a perseguir un sueño... Sé testigo del nacimiento de Lobezno tal y como lo conocemos, en la reveladora historia que cubre el tiempo transcurrido desde su encuentro contra el Wendigo hasta que fue reclutado por Charles Xavier para La Patrulla-X.",
        stock:"3",
        serie: "Wolverine",
        tipo: "Comic"
        ,id: "14"},
        {
        imagen: comic16,
        titulo: "EL LIBRO DE RECETAS OFICIAL DE HARRY POTTER: LA COCINA DE HOGWARTS",
        precio:"$949.00",
        descripcion: "Hasta ahora nadie había entrado en el Colegio Hogwarts de Magia y Hechicería por la cocina... y es una experiencia deliciosa! Gracias a las magní?cas fotografías y a la descripción detallada de los pasos a seguir, los pequeños de la casa podrán elaborar fácilmente las recetas preferidas de Harry Potter. Sin duda es un libro imprescindible en la biblioteca y la cocina de los fanes de la saga del niño mago. Este libro de cocina especializado en recetas al horno es apto para toda la familia, e incluye platos sin gluten, sin frutos secos y veganos, además de información nutricional y dietética.",
        stock:"17",
        serie: "Harry Potter",
        tipo: "Comic"
        ,id: "15"},
        {
        imagen: comic17,
        titulo: "BATMAN: EL IMPOSTOR (Edición integral)",
        precio:"$1549.00",
        descripcion: "La misión de Bruce Wayne como el Hombre Murciélago lleva muy poco tiempo en marcha, pero él ya tiene claro que está sirviendo de algo. Por desgracia, se ha ganado enemigos tremendamente poderosos. La élite financiera tradicional de Gotham se muestra hostil ante lo imprevisible que Batman ha traído a la ciudad... y al parecer entre sus integrantes alguien dispone de un plan para neutralizar al justiciero.",
        stock:"10",
        serie: "Batman",
        tipo: "Comic"
        ,id: "16"},
        {
        imagen: comic18,
        titulo: "BATMAN 05 / 118",
        precio:"$249.00",
        descripcion: "¡Pelea sin límites en el corazón de Gotham City! ¡Es Batman contra el Pacificador 01 del Magistrado! El plan maestro de Simon Saint se hace realidad. Y en la historia de complemento... ¡El instigador contra Ghostmaker!",
        stock:"25",
        serie: "Batman",
        tipo: "Comic"
        ,id: "17"},
        {
        imagen: comic19,
        titulo: "SUPERMAN 04 / 114",
        precio:"$549.00",
        descripcion: "Superman y Superboy han sido engañados. ¿Quién es el enemigo? La Estirpe Sombría hace su gran jugada... En Action Comics, la familia de Superman encuentra impactantes respuestas sobre la colonia perdida. Una guerra mundial se acerca. Incluye historias de complemento protagonizadas por Jimmy Olsen y Midnighter.",
        stock:"12",
        serie: "Superman",
        tipo: "Comic"
        ,id: "18"},
        {
        imagen: comic20,
        titulo: "SUPERMAN 01: EL HOMBRE DE ACERO (La saga de la unidad parte 1)",
        precio:"$1849.00",
        descripcion: "Ha llegado a la Tierra un monstruo de inmenso poder. Se llama Rogol Zaar y se ha propuesto terminar una misión que emprendió hace años. Y para eso, necesita matar tanto a Superman como a Supergirl, los últimos kryptonianos que quedan vivos. Este nuevo enemigo no podría llegar en peor momento, ya que el Hombre de Acero está inquieto por un asunto personal. Su padre, el científico Jor-El, dado por muerto durante décadas, regresó recientemente de entre los muertos. Y ahora, ha pedido a Superboy que lo acompañe a un viaje por el universo... y la respuesta del pequeño Jon no podría haber sido más entusiasta.",
        stock:"16",
        serie: "Superman",
        tipo: "Comic"
        ,id: "19"}
        ]

    //Los estados para agregar tanto los productos que luego van al carrito y el contador de cuantos agrego

    const [productosCarrito, setProductosCarrito] = useState([]);

    const [contadorCarrito, setContador] = useState(0);

    //Para agregar los productos y también sumar la cantidad total de productos que hay

    const agregarProductos = (producto, cantidad)=>{
        setProductosCarrito([...productosCarrito, [...producto, cantidad]]);
        setContador((actual) => actual + cantidad)
    }

    //Falta ->

    const quitarProductos = (producto, numero)=>{


        const filtroProductos = productosCarrito.filter((e) => e[0] !== producto);

        setProductosCarrito(filtroProductos);


    }

    const limpiarProductos = ()=>{
        setProductosCarrito([]);
    }

    return(<>

        <ThemeContext.Provider value={listaProductos}>
            <CartContext.Provider value={{contadorCarrito, productosCarrito, agregarProductos, limpiarProductos, quitarProductos}}>
                {children}
            </CartContext.Provider>
        </ThemeContext.Provider>

        </>)

}