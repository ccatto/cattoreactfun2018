import React, { Component } from 'react';


class FetchTax extends Component {

    constructor(props) {

        super(props);
        this.state = { taxes: "taxesInit" };
    }

    componentDidMount() {

        console.log("here inside componentDidMount() Get Vertex Tax");
        console.log("========= Start component Did Mount ==============  ==================" + Date.now());
        console.log("Thinking about passing objects so properties to be passed in are myCustomerCountry");
        console.log("Seller Country ");
        console.log("CustomerLocal object including 3 props ");

        ///////////////////////////////////////// /////////////////////////////////////////
        // Declare Varaibles & functions
        ///////////////////////////////////////// /////////////////////////////////////////
        var gatewayUrl = "https://jardencs.ondemand.vertexinc.com:443/vertex-ws/services/"
            , endpoint = "CalculateTax70"
            , documentDate = new Date().getUTCFullYear() + "-" + (new Date().getUTCMonth() + 1) + "-" + new Date().getUTCDate()
            , doubleQuote = "\"";

        var response = "StringResponse";
        var totalTaxObtainedGLOBAL = 0;

        var sellerCountry = "UNITED STATES";

        function sellerInfo(trustedId, companyId, sellerPostalCode, sellerCountry) {
            this.trustedId = trustedId;
            this.companyId = companyId;
            this.sellerPostalCode = sellerPostalCode;
            this.sellerCountry = sellerCountry;
        };

        let mySellerInfo;
        const myTrustedId = "$tr.G77avkCi";
        if (sellerCountry == "UNITED STATES") {
            console.log("calling mySellerInfo forUSA ! ");
            mySellerInfo = new sellerInfo(myTrustedId, "09300", "33431-8560", "UNITED STATES");
        } else if (sellerCountry == "CANADA") {
            console.log("Oh Canada ");
            // mySellerInfo = new sellerInfo( myTrustedId, "93CAD", "L6Y 0M1", "CANADA" );
        }

        function getCustomerAddressInfo(customerStreetAddress, customerCity, customerMainDivision, customerPostalCode, customerCountry, quantity, productId, unitPrice) {
            this.customerStreetAddress = customerStreetAddress;
            this.customerCity = customerCity;
            this.customerMainDivision = customerMainDivision;
            this.customerPostalCode = customerPostalCode;
            this.customerCountry = customerCountry;
        }

        function setVertexRequest(requestInfo) {
            // vertexRequst assebly from myRequestInfo ~= Static 
            var vertexRequest = "<SOAP-ENV:Envelope xmlns:SOAP-ENV=" + doubleQuote + "http://schemas.xmlsoap.org/soap/envelope/" + doubleQuote + "><SOAP-ENV:Body><VertexEnvelope xmlns=" + doubleQuote + "urn:vertexinc:o-series:tps:6:0" + doubleQuote + " xmlns:xsi=" + doubleQuote + "http://www.w3.org/2001/XMLSchema-instance" + doubleQuote + " xsi:schemaLocation=" + doubleQuote + "urn:vertexinc:o-series:tps:7:0 VertexInc_Envelope.xsd" + doubleQuote + "> <Login> <TrustedId> " + requestInfo.trustedId + " </TrustedId> </Login> <QuotationRequest documentDate=" + doubleQuote + documentDate + doubleQuote + " returnAssistedParametersIndicator=" + doubleQuote + "true" + doubleQuote + " transactionType=" + doubleQuote + "SALE" + doubleQuote + ">";
            vertexRequest += " <Seller> <Company> " + requestInfo.companyId + " </Company> <PhysicalOrigin> <PostalCode>" + requestInfo.sellerPostalCode + "</PostalCode>  <Country> " + requestInfo.sellerCountry + " </Country> </PhysicalOrigin> </Seller> <Customer> <Destination> <StreetAddress1>" + requestInfo.customerStreetAddress + "</StreetAddress1> <City> " + requestInfo.customerCity + " </City> <MainDivision> " + requestInfo.customerMainDivision + " </MainDivision> <PostalCode> " + requestInfo.customerPostalCode + " +</PostalCode> <Country> " + requestInfo.customerCountry + " </Country> </Destination> </Customer> ";
            for (lineItemCounter = 1; lineItemCounter <= totalItems; lineItemCounter++) {
                vertexRequest += " <LineItem lineItemNumber=" + doubleQuote + lineItemCounter + doubleQuote + "> <Product productClass=" + doubleQuote + "FPS" + doubleQuote + "> " + requestInfo.productId + " </Product> <Quantity> " + requestInfo.quantity + " </Quantity> <UnitPrice> " + requestInfo.unitPrice + " </UnitPrice> </LineItem> ";
            }
            vertexRequest += " </QuotationRequest></VertexEnvelope></SOAP-ENV:Body></SOAP-ENV:Envelope>";
            //console.log("The Vertex Request SOAP XML string == ",vertexRequest);
            return vertexRequest;
        }

        function requestInfo(trustedId, companyId, sellerPostalCode, sellerCountry, customerStreetAddress, customerCity, customerMainDivision, customerPostalCode, customerCountry, quantity, productId, unitPrice) {
            this.trustedId = trustedId;
            this.companyId = companyId;
            this.sellerPostalCode = sellerPostalCode;
            this.sellerCountry = sellerCountry;

            this.customerStreetAddress = customerStreetAddress;
            this.customerCity = customerCity;
            this.customerMainDivision = customerMainDivision;
            this.customerPostalCode = customerPostalCode;
            this.customerCountry = customerCountry;

            this.quantity = quantity;
            this.productId = productId;
            this.unitPrice = unitPrice;

        }


        let sellerCountryPassed = "UNITED STATES";
        // var sellerCountryPassed = "CANADA";
        // getSellerInfo(sellerCountryPassed);

        console.log("Seller  - sellerCountryPassed == ", sellerCountryPassed);

        ///////////////////////////////////////// /////////////////////////////////////////
        // Customer Location Data prettied up 
        ///////////////////////////////////////// /////////////////////////////////////////

        let providedCustomerStreetAddress = "2381 NW Executive Center Dr"
            , providedCustomerCity = "Boca Raton"
            , providedCustomerMainDivision = "FL"
            , providedCcustomerPostalCode = "33431-8560"
            , providedCustomerCountry = "UNITED STATES";



        let mycustomerAddressInfo = new getCustomerAddressInfo(providedCustomerStreetAddress, providedCustomerCity, providedCustomerMainDivision, providedCcustomerPostalCode, providedCustomerCountry);

        let myQuantity = 1
            , myProductId = "GBQ100-000"
            , myUnitPrice = 35.99;

        let lineItemCounter = 1;
        let totalItems = 0;

        // 4 th test  May 10th 
        /// ..................... .....................  .....................  .....................
        // May 10th 4th test 
        /// ..................... .....................  .....................  .....................

        function customerItemDetails(quantity, productId, unitPrice) {
            this.quantity = quantity;
            this.productId = productId;
            this.unitPrice = unitPrice;
        }

        var customerItemDetailsMapISH = {
            1: { quantity: 2, productId: "FSFSBF0534-P00", unitPrice: 25.19 },
            2: { quantity: 1, productId: "FSFSBF0534-P00", unitPrice: 25.19 },
            3: { quantity: 1, productId: "FSFSBF0534-P00", unitPrice: 25.19 }
        }

        customerItemDetails = new customerItemDetails(myQuantity, myProductId, myUnitPrice);

        //console.log("customerItemDetails4 == ", customerItemDetails4);
        totalItems = 2;

        ///////////////////////////////////////// /////////////////////////////////////////
        // Set myRequest Info 
        ///////////////////////////////////////// /////////////////////////////////////////
        // var myRequestInfo;
        let myRequestInfo = new requestInfo(mySellerInfo.trustedId, mySellerInfo.companyId, mySellerInfo.sellerPostalCode, mySellerInfo.sellerCountry, mycustomerAddressInfo.customerStreetAddress, mycustomerAddressInfo.customerCity, mycustomerAddressInfo.customerMainDivision, mycustomerAddressInfo.customerPostalCode, mycustomerAddressInfo.customerCountry, myQuantity, myProductId, myUnitPrice);

        ///////////////////////////////////////// /////////////////////////////////////////
        // Set vertexRequest from RequestInfo & POST to get tax Vertex API 
        ///////////////////////////////////////// /////////////////////////////////////////

        var vertexRequest = setVertexRequest(myRequestInfo);
        //taxPost(vertexRequest);

        function taxPostViaFetch(vertexRequest) {
            console.log("taxPostViaFetch Function get setState issue ");
        }
        taxPostViaFetch(vertexRequest);


        console.log("vertexRequest == ", vertexRequest);

        console.log("Above Vertex Fetch ");
        const vertexURL = "https://jardencs.ondemand.vertexinc.com:443/vertex-ws/services/CalculateTax70"
        fetch(vertexURL, {
            method: "post",
            headers: {
                "Content-type": "text/xml",
                "Accept": "text/xml",
                "Cache-Control": "no-cache",
                "Pragma": "no-cache"
            },
            body: vertexRequest
        })
            .then(response => response.text())
            .then(data => {
                let xmlDoc;
                if (window.DOMParser) {
                    console.log("inside the domParser");
                    let parser = new DOMParser();
                    xmlDoc = parser.parseFromString(data, "text/xml");
                } else { // Internet Explorer
                    console.log("here in else IE ");
                    //       xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    //     xmlDoc.async = false;
                    //     xmlDoc.loadXML(taxResponse);
                }
                let totalTaxFromXML = xmlDoc.getElementsByTagName("TotalTax")[0].childNodes[0].nodeValue;
                console.log("!!!! totalTaxFromXML == ", totalTaxFromXML);
                this.setState({ taxes: totalTaxFromXML });
                console.log("taxes from state right away in .then: ", this.state.taxes);
            })
            .catch(function (err) {
                console.log('Fetch Error : ', err);
            });

        console.log("========= END ========= =========== =========== =========== ");
        // console.log("========================================");
        ///////////// /////////// //// //// //////
        // END  of      Component Did Mount     //
        /////////////  ////////// /// ///// //////
        console.log("==== test END === " + + Date.now());


    }


    render() {
        return (
            <div>
                This is my Tax component.
      <br />
                <h2>
                    Total Tax:  {this.state.taxes} </h2>
            </div>
        );
    }
}

export default FetchTax;