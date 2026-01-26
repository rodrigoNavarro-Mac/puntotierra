import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
    title: "Aviso de Privacidad | Punto Tierra",
    description: "Aviso de Privacidad de CAPITAL PLUS BIENES RAÍCES SA DE CV (Punto Tierra).",
};

export default function AvisoPrivacidad() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header Section */}
            <section className="bg-primary pt-32 pb-16 px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">
                        Aviso de Privacidad
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="prose prose-lg max-w-none text-gray-600 text-justify">
                        <p className="mb-6">
                            De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás relacionadas,
                            los datos personales que pertenecen a Usted y que obren en poder de <strong>CAPITAL PLUS BIENES RAÍCES SA DE CV</strong>, sus empresas afiliadas,
                            asociadas o empleados, en adelante <strong>CAPITAL PLUS</strong>, se tratarán al tenor de la legislación en la materia, informándole lo siguiente:
                        </p>

                        <p className="mb-6">
                            <strong>CAPITAL PLUS</strong>, es responsable de recabar, tratar, y proteger sus datos personales, comprometiéndose a que estos datos serán tratados
                            bajo las más estrictas medidas de seguridad que garanticen su confidencialidad, atendiendo las obligaciones legales establecidas en la Ley Federal
                            de Protección de Datos Personales en Posesión de los Particulares y los principios de licitud, consentimiento, información, calidad, finalidad,
                            lealtad, proporcionalidad y responsabilidad que se encuentran en la misma. Los datos personales que podrán ser solicitados, de manera enunciativa
                            más no limitativa, son los siguientes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Nombre completo</li>
                            <li>Identificación</li>
                            <li>Domicilio personal</li>
                            <li>Teléfono fijo y celular</li>
                            <li>Correo electrónico</li>
                            <li>Clave Única de Registro de Población (CURP)</li>
                            <li>Registro Federal de Contribuyentes (RFC)</li>
                            <li>Entre otros necesarios para poder cumplir con los fines para los cuales será utilizada dicha información.</li>
                        </ul>

                        <p className="mb-6">
                            Los datos personales que recabamos de usted serán utilizados para concretar nuestra relación con Usted, así como para atender los servicios y/o
                            pedidos que solicite y brindarle información acerca de la oferta de nuestros productos, y para la gestión y optimización de diversas actividades
                            de mercadotecnia, publicidad y prospección comercial con respecto a los desarrollos inmobiliarios que ofertamos.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Datos Sensibles</h3>
                        <p className="mb-6">
                            En ningún caso le solicitaremos a Usted datos personales sensibles como pudieran ser aquellos que puedan revelar aspectos como origen racial o étnico,
                            estado de salud presente y futuro, información genética, creencias religiosas, filosóficas y morales, afiliación sindical, opiniones políticas o
                            preferencia sexual sin que Usted otorgue previamente el consentimiento expreso y por escrito para su tratamiento.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Uso de Cookies y Transferencia de Datos</h3>
                        <p className="mb-6">
                            Nuestra página web hace uso de cookies y píxel de Facebook para optimizar las actividades de mercadotecnia. Por otra parte, informamos a Usted,
                            que <strong>CAPITAL PLUS</strong> podrá, para las finalidades citadas, transferir sus datos a "Encargados" en términos de la Ley en la materia,
                            así como a sus empleados, subsidiarias, afiliadas y controladores.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Derechos ARCO</h3>
                        <p className="mb-6">
                            Usted tiene en todo momento el derecho a conocer qué datos personales pertenecientes a Usted se encuentran en nuestra posesión, con qué fines los
                            utilizamos y las condiciones del uso que les damos (Acceso). Así mismo, es su derecho solicitar la corrección de su información personal en caso
                            de que esté desactualizada, sea inexacta o incompleta (Rectificación); de igual manera, tiene derecho a que su información se elimine de nuestros
                            registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como también a oponerse al uso
                            de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
                        </p>

                        <p className="mb-4">
                            Para el ejercicio de cualquiera de los derechos ARCO, se deberá presentar la solicitud respectiva a través del siguiente correo electrónico:
                            <a href="mailto:contacto@puntotierra.mx" className="text-primary hover:underline font-medium"> contacto@puntotierra.mx</a>,
                            acompañada de la siguiente información y documentación:
                        </p>
                        <ol className="list-[upper-roman] pl-6 mb-6 space-y-2">
                            <li>Su nombre, domicilio y correo electrónico para poder comunicarle la respuesta a la Solicitud ARCO;</li>
                            <li>Los documentos que acrediten su identidad (copia de IFE, pasaporte o cualquier otra identificación oficial) o en su caso, los documentos que acrediten su representación legal;</li>
                            <li>Una descripción clara y precisa de los datos personales respecto de los cuales busca ejercer alguno de los Derechos ARCO;</li>
                            <li>Cualquier documento o información que facilite la localización de sus datos personales;</li>
                            <li>En caso de solicitar una rectificación de datos, deberá de indicar también, las modificaciones a realizarse y aportar la documentación que sustente su petición; y</li>
                            <li>La indicación del lugar donde podremos revisar los originales de la documentación que acompañe.</li>
                        </ol>

                        <p className="mb-6">
                            Su Solicitud ARCO será contestada mediante un correo electrónico por parte del Oficial de Privacidad en un plazo máximo de 20 (veinte) días hábiles
                            contados desde el día en que se haya recibido su Solicitud ARCO. En caso de que la Solicitud ARCO se conteste de manera afirmativa o procedente,
                            tales cambios se harán en un plazo máximo de 10 (diez) días hábiles. Los plazos referidos en este párrafo se podrán prorrogar por una vez por un
                            periodo igual en caso de ser necesario.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100">
                            <p className="mb-4 font-medium">
                                La respuesta a la solicitud se comunicará a través del correo electrónico al indicado en la solicitud recibida. Los datos de contacto del departamento
                                de <strong>CAPITAL PLUS</strong> encargado del tratamiento de sus Datos Personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><span className="font-bold">a) Nombre del responsable:</span> Coordinación de Ventas</li>
                                <li><span className="font-bold">b) Domicilio:</span> Paseo Sinfonía No.3 Oficina D-307, Lomas de Angelopolis II, San Andrés Cholula, Puebla.</li>
                                <li><span className="font-bold">c) Correo electrónico:</span> <a href="mailto:contacto@puntotierra.mx" className="text-primary hover:underline">contacto@puntotierra.mx</a></li>
                            </ul>
                        </div>

                        <p className="mb-4">
                            Es importante comunicarle que <strong>CAPITAL PLUS</strong> podrá negar el acceso (la “Negativa”) para que Usted ejerza sus Derechos ARCO en los siguientes supuestos:
                        </p>
                        <ol className="list-[upper-roman] pl-6 mb-6 space-y-2">
                            <li>Cuando Usted no sea el titular de los datos personales, o su representante legal no esté debidamente acreditado para ejercer por medio de él, sus Derechos ARCO;</li>
                            <li>Cuando en nuestra base de datos no se encuentren sus datos personales;</li>
                            <li>Cuando se lesionen los derechos de un tercero;</li>
                            <li>Cuando exista un impedimento legal o la resolución de una autoridad competente, que restrinja sus Derechos ARCO; y</li>
                            <li>Cuando la Cancelación u Oposición haya sido previamente realizada.</li>
                        </ol>

                        <p className="mb-6">
                            En relación con lo anterior, la Negativa podrá ser parcial, en cuyo caso <strong>CAPITAL PLUS</strong> efectuará el acceso, rectificación, cancelación u oposición
                            en la parte procedente.
                        </p>
                        <p className="mb-6">
                            <strong>CAPITAL PLUS</strong> siempre le informará el motivo de su decisión y se la comunicará a Usted o en su caso, a su representante legal, en los plazos
                            anteriormente establecidos, por correo electrónico, acompañando, en su caso, las pruebas que resulten pertinentes.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Costos y Revocación</h3>
                        <p className="mb-6">
                            El ejercicio de los Derechos ARCO será gratuito, previa acreditación de su identidad ante <strong>CAPITAL PLUS</strong>, pero si Usted reitera su solicitud en
                            un periodo menor a doce meses, tendrá el costo definido por Ley, a menos que existan modificaciones sustanciales al Aviso de Privacidad que motiven nuevas consultas.
                            En todos los casos, la entrega de los datos personales será gratuita, con la excepción de que Usted deberá de cubrir los gastos justificados de envío o el costo de
                            reproducción en copias u otros formatos, y en su caso, el costo de la certificación de documentos.
                        </p>
                        <p className="mb-6">
                            Cabe mencionar, que en cualquier momento Usted podrá revocar el consentimiento que ha otorgado a <strong>CAPITAL PLUS</strong> para el uso y tratamiento de los
                            datos personales que no sean indispensables para el cumplimiento de las obligaciones derivadas del vínculo jurídico que exista, a fin de que
                            <strong> CAPITAL PLUS</strong> deje de hacer uso de los mismos. Para ello, es necesario que Usted presente su petición en los términos antes mencionados.
                            Así mismo, Usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no podamos seguir prestando el servicio que nos solicitó,
                            o conllevará la conclusión de su relación con nosotros.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Modificaciones y Jurisdicción</h3>
                        <p className="mb-6">
                            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades
                            por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas, por lo cual,
                            nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, sin embargo, usted puede solicitar información sobre
                            si el mismo ha sufrido algún cambio a través del siguiente correo electrónico: <a href="mailto:contacto@puntotierra.mx" className="text-primary hover:underline">contacto@puntotierra.mx</a>
                        </p>
                        <p className="mb-6">
                            Para la interpretación y/o cumplimiento de los anteriores términos y condiciones de seguridad, privacidad y legalidad, tanto Usted como <strong>CAPITAL PLUS</strong> estarán
                            sujetos a lo dispuesto por la Ley Federal de Datos Personales en Posesión de los Particulares, su Reglamento así como a sus normas complementarias. En caso de
                            controversia aceptan sujetarse a la jurisdicción de los Tribunales competentes de la Ciudad de Puebla, renunciando desde ahora al fuero que pudiera corresponderles
                            en razón de sus domicilios presentes y/o futuros o por cualquier otra causa.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Enlaces Externos</h3>
                        <p>
                            Nuestra página de internet puede contener links o enlaces a páginas de internet externas y/o redes sociales que no corresponden a <strong>CAPITAL PLUS</strong> y,
                            por tanto, no guardan relación alguna con nosotros. Le recomendamos revisar y leer las políticas de privacidad, así como los términos de uso de dichos sitios web
                            externos antes de hacer uso de estos. No asumimos ninguna responsabilidad o riesgo con respecto a temas de privacidad u cualquier otro tema legal que esté relacionado
                            con cualquiera de sus servicios.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
