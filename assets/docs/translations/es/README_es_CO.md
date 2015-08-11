# AVARITIA #

Simulador de crédito para banca personal.

Traducciones:

+ [English](../../../../README.md)

## JUSTIFICACIÓN ##

Los reportes del Banco de la República cada año confirman que el endeudamiento de los colombianos es una de las variables más relevantes en el análisis de estabilidad financiera, y es que un gran porcentaje de hogares de clase media tienen apalancamiento financiero en los bancos comerciales. 

Los créditos de consumo y tarjetas de crédito son las deudas más comunes de los colombianos, no sólo por las facilidades que han implementado los bancos para otorgarlos, sino porque predomina el hecho de que adquirir deudas es normal sobre todo cuando hay bienes y servicios de alto valor a los que no se puede acceder fácilmente sin un crédito, como es el caso de una casa, un carro o educación. 

La idea de los créditos es facilitar la consecución de metas y no volverse un dolor de cabeza para quien los toma. Siendo así es importante que los colombianos controlen sus finanzas personales y se endeuden sólo hasta donde son capaces de pagar; hoy en día existen muchas aplicaciones de control de finanzas donde cada mes pueden registrar sus ingresos y sus gastos, como un control de su capacidad de pago, entonces a la hora de pedir un credito es muy importante conocer el monto que son capaces de pagar como cuota de crédito, pues esto dependiendo del monto solicitado esta ligado al plazo en que deberian tomar un crédito para no sobrepasar su capacidad de pago.

**AVARITIA** es una herramienta que provee datos a nivel informativo al calcular un aproximado de la cuota o el plazo de un crédito dependendiendo de la tasa de interes que ofrezca cada banco y el tipo de crédito deseado, y si estos datos son incluidos en las apliaciones existente de control de finanzas personales el usuario podra minimizar el riesgo que existe de comprometer la estabilidad económica por desconocer la importancia de capacidad y límite de endeudamiento.


## OBJETIVOS ##

1. Identificar el valor de la cuota aproximada que debe pagar cada mes, según el monto que desea prestar y el plazo que fije de acuerdo a la tasa de interes aplicable para cada tipo de crédito y dependiendo del banco.

2. Identificar cuál puede ser el plazo del crédito, basado en la cantidad que desea prestar y el monto que estaria en capacidad de destinar para el pago de la cuota periódica, siempre de acuerdo a la tasa de interes aplicable para cada tipo de crédito y dependiendo del banco.

3. Conocer cuál es el monto que puede solicitar, según la necesidad en cuanto a la cantidad de dinero que puedes asignar en el pago de la cuota periódica y el plazo de financiación que requiere de acuerdo a la tasa de interes aplicable para cada tipo de crédito y dependiendo del banco.

4. Comparar el valor de la cuota aproximada calculada de acuerdo a la tasa de interes aplicable para cada tipo de crédito en diferentes bancos.


## MARCO TEÓRICO ##

###Tipos de crédito de consumo###

En términos generales podemos diferenciar tres tipos de crédito de consumo bien definidos: el crédito de libre inversión, el crédito de libranza y el crédito de cupo rotativo. A continuación analizamos las características de cada uno de estos préstamos.[[2]](#referencias)

**Crédito de Libre Inversión.** Es un crédito que permite financiar cualquier necesidad, incluyendo bienes y servicios. Como su nombre lo indica, es un crédito de libre disponibilidad, ya que cada persona puede destinar el monto solicitado según sus deseos. Normalmente este tipo de crédito es utilizado para financiar viajes, adquirir productos para el hogar, cancelar servicios y financiar gastos vinculados con la salud o la educación. Una ventaja de los créditos de libre inversión es que suelen tener requisitos flexibles, especialmente cuando los montos solicitados son bajos.[[2]](#referencias)

**Crédito de Libranza.** Son la alternativa ideal para aquellos clientes que buscan un crédito seguro, cómodo y simple. La principal ventaja de este tipo de préstamos es que la cuota se abona mes a mes en forma automática por medio del salario del tomador. Así, mensualmente se descuenta el valor de la cuota del sueldo del cliente, dejando atrás preocupaciones vinculadas con los pagos y los vencimientos.[[2]](#referencias)

**Crédito de Cupo Rotativo** Este tipo de crédito de consumo es una excelente opción para aquellas personas que desean tener acceso a un cupo de dinero, que pueden retirar cuando lo deseen. El cupo puede ser retirado en forma total o parcial y el saldo se reprograma en varios meses. El cupo crece a medida que la persona realiza pagos y está en condiciones de hacer nuevos retiros.[[2]](#referencias)

###Otras modalidades de Crédito###

**Tarjetas de crédito.** Son útiles para adquisiciones a corto plazo. La principal ventaja de una tarjeta de crédito es la temporalidad, ya que permite disponer de dinero que no se tiene al momento pero que va a recibir en un futuro inmediato. [[3]](#referencias)

**Créditos específicos.** Muchas instituciones ofrecen financiamientos especializados, por ejemplo, hipotecarios, educativos y automotrices, entre otros. Esto significa que la cantidad que te ofrezcan podrá ser utilizada únicamente en un objetivo y se debe poder comprobar su final destinación. La ventaja de estos créditos es precisamente su especialización, ya que los montos y los planes de pago están diseñados de acuerdo al objetivo. [[3]](#referencias)

### Tasas de Interés ###

Es la expresión porcentual del interés aplicado sobre un capital. Las tasas de interés pueden estar expresadas en términos nominales o efectivos. Las nominales son aquellas en que el pago de intereses no se capitaliza, mientras que las efectivas corresponden a las tasas de intereses anuales equivalentes a la capitalización de los intereses periódicos, bien sea anticipadas o vencidas. La tasa de interés efectiva es el instrumento apropiado para medir y comparar el rendimiento de distintas alternativas de inversión. Las tasas nominales pueden tener periodicidad mensual, trimestral, semestral o cualquier otra que se establezca.[[4]](#referencias)

**Tasa de Interés Efectiva** Expresión anual del interés nominal dependiendo de la periodicidad con que éste último se pague. Implica reinversión o capitalización de intereses.[[4]](#referencias)

**Tasa de Interés Vencida** Tasa de interés que una vez acordada, se paga o se cobra al finalizar cada periodo.[[4]](#referencias)

### Tipos de Tasa de Financiamiento ###

**Tasa de Interés Fija** El financiamiento de tasa fija quiere decir que la tasa de interés de su préstamo no cambia durante la duración del préstamo. Con un tipo de interés fijo, usted puede predecir su pago mensual y el total que pagará durante la duración del préstamo. Es posible que prefiera tipos fijos, si está buscando un pago del préstamo que no fluctúe.[[5]](#referencias)

**Tasa de Interés Variable** El financiamiento con tasa variable es aquel en que la tasa de interés de su préstamo puede cambiar, en base a la tasa preferencial u otro tipo denominada “índice”. Con un préstamo de tasa variable, la tasa de interés del préstamo cambia a medida que la tasa de índice cambia, es decir que podría subir o bajar. Debido a que su tasa de interés puede subir, su pago mensual también puede subir. Cuanto más largo el plazo del préstamo, más arriesgado un préstamo de tasa variable puede ser para un prestatario, porque hay más tiempo para que aumenten las tasas.[[5]](#referencias)

En Colombia el índice variable esta determinado por la DTF, es la tasa de interés que en promedio se comprometieron a pagar a los ahorradores los bancos, las corporaciones de ahorro y vivienda, las corporaciones financieras y las compañías de financiamiento comercial por los certificados de depósito a término (CDT) con plazo de 90 días abiertos durante la última semana. El Banco de la República calcula la DTF el viernes de cada semana, con base en los CDT abiertos entre el viernes de la semana anterior y el jueves de la semana que está terminando. La vigencia de la DTF dada a conocer por el Banco de la República cada viernes va del lunes hasta el domingo siguientes. [[6]](#referencias)
 


## REFERENCIAS ##

1. [Créditos de consumo y tarjetas de crédito, las deudas más comunes de los colombianos](http://www.elpais.com.co/elpais/economia/noticias/creditos-libre-inversion-y-tarjetas-credito-deudas-comunes-hogares-colombianos)
    + Publicación [Diario El Pais](http://www.elpais.com.co), Noviembre 2014     

2. [Tipos de crédito de consumo]
(http://www.creditos.com.co/tipos-de-credito-de-consumo.html)
    + Publicación [creditos.com.co](http://www.creditos.com.co/), Marzo 2013
    
3. [Otras modalidades de Crédito](http://www.finanzaspracticas.com.co/finanzaspersonales/entienda/que_es/tipos.php)
    + Publicacion [finanzaspracticas.com.co](http://www.finanzaspracticas.com.co)
    
4. [Tasa de Interés](https://www.superfinanciera.gov.co/SFCant/Glosario/glosario-t.htm#TASA DE INTERÉS EFECTIVA)
    + Glosario [Superfinanciera](https://www.superfinanciera.gov.co)
    
5. [Tipos de Tasa de Financiamiento](http://www.consumerfinance.gov/es/obtener-respuestas/c/comprar-un-vehiculo/757/cual-es-la-diferencia-entre-financiamiento-de-tasa-fija-y-de-tasa-variable.html)
    + Respuestas Comunes [consumerfinance.gov](http://www.consumerfinance.gov/)

6. [Qué es la DTF](http://www.eltiempo.com/archivo/documento/MAM-541703)
    + Publicación [El Tiempo](http://www.eltiempo.com/), Abril 2001
