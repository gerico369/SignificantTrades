const Exchange = require('../Exchange');
const WebSocket = require('ws');

class Huobi extends Exchange {

	constructor(options) {
		super(options);

    this.id = 'hitbtc';

		this.alts = {
			EBTCBTC: 'EBTCNEWBTC',
			EBTCETH: 'EBTCNEWETH',
			EBTCUSD: 'EBTCNEWUSD',
			BTXUSD: 'BTXUSDT',
			XRPUSD: 'XRPUSDT',
			SBTCUSD: 'SBTCUSDT',
			EMCUSD: 'EMCUSDT',
			DRTUSD: 'DRTUSDT',
			REPUSD: 'REPUSDT',
			AVHUSD: 'AVHUSDT',
			CLOUTUSD: 'CLOUTUSDT',
			EKOUSD: 'EKOUSDT',
			BCPTUSD: 'BCPTUSDT'
		}

    this.pairs = [
			'BCNBTC',
			'BTCUSD',
			'DASHBTC',
			'DOGEBTC',
			'DOGEUSD',
			'DSHBTC',
			'EMCBTC',
			'ETHBTC',
			'FCNBTC',
			'LSKBTC',
			'LTCBTC',
			'LTCUSD',
			'NXTBTC',
			'QCNBTC',
			'SBDBTC',
			'SCBTC',
			'STEEMBTC',
			'XDNBTC',
			'XEMBTC',
			'XMRBTC',
			'ARDRBTC',
			'ZECBTC',
			'WAVESBTC',
			'MAIDBTC',
			'AMPBTC',
			'BUSBTC',
			'DGDBTC',
			'ICNBTC',
			'SNGLSBTC',
			'1STBTC',
			'TRSTBTC',
			'TIMEBTC',
			'GNOBTC',
			'REPBTC',
			'XMRUSD',
			'DASHUSD',
			'ETHUSD',
			'NXTUSD',
			'ZRCBTC',
			'BOSBTC',
			'DCTBTC',
			'ANTBTC',
			'AEONBTC',
			'GUPBTC',
			'PLUBTC',
			'LUNBTC',
			'TAASBTC',
			'NXCBTC',
			'EDGBTC',
			'RLCBTC',
			'SWTBTC',
			'TKNBTC',
			'WINGSBTC',
			'XAURBTC',
			'AEBTC',
			'PTOYBTC',
			'ZECUSD',
			'XEMUSD',
			'BCNUSD',
			'XDNUSD',
			'MAIDUSD',
			'ETCBTC',
			'ETCUSD',
			'CFIBTC',
			'PLBTBTC',
			'BNTBTC',
			'XDNCOBTC',
			'FYNETH',
			'SNMBTC',
			'SNMETH',
			'SNTETH',
			'CVCUSD',
			'PAYETH',
			'OAXETH',
			'OMGETH',
			'BQXETH',
			'XTZBTC',
			'DICEBTC',
			'CFIETH',
			'PTOYETH',
			'1STETH',
			'XAURETH',
			'TAASETH',
			'TIMEETH',
			'DICEETH',
			'SWTETH',
			'XMRETH',
			'ETCETH',
			'DASHETH',
			'ZECETH',
			'PLUETH',
			'GNOETH',
			'XRPBTC',
			'NETETH',
			'STRATUSD',
			'STRATBTC',
			'SNCETH',
			'ADXETH',
			'BETETH',
			'EOSETH',
			'DENTETH',
			'SANETH',
			'EOSBTC',
			'EOSUSD',
			'MNEBTC',
			'MSPETH',
			'DDFETH',
			'XTZETH',
			'XTZUSD',
			'UETETH',
			'MYBETH',
			'SURETH',
			'IXTETH',
			'PLRETH',
			'TIXETH',
			'NDCETH',
			'PROETH',
			'AVTETH',
			'COSSETH',
			'EVXUSD',
			'DLTBTC',
			'BNTETH',
			'BNTUSD',
			'QAUBTC',
			'QAUETH',
			'MANAUSD',
			'DNTBTC',
			'FYPBTC',
			'OPTBTC',
			'TNTETH',
			'IFTBTC',
			'STXBTC',
			'STXETH',
			'STXUSD',
			'TNTUSD',
			'TNTBTC',
			'CATBTC',
			'CATETH',
			'CATUSD',
			'BCHBTC',
			'BCHETH',
			'BCHUSD',
			'ENGETH',
			'XUCUSD',
			'SNCBTC',
			'SNCUSD',
			'OAXUSD',
			'OAXBTC',
			'BASETH',
			'ZRXBTC',
			'ZRXETH',
			'ZRXUSD',
			'RVTBTC',
			'ICOSBTC',
			'ICOSETH',
			'ICOSUSD',
			'PPCBTC',
			'PPCUSD',
			'QTUMETH',
			'VERIBTC',
			'VERIETH',
			'VERIUSD',
			'IGNISETH',
			'PRGBTC',
			'PRGETH',
			'PRGUSD',
			'BMCBTC',
			'BMCETH',
			'BMCUSD',
			'CNDBTC',
			'CNDETH',
			'CNDUSD',
			'SKINBTC',
			'EMGOBTC',
			'EMGOUSD',
			'CDTETH',
			'CDTUSD',
			'FUNBTC',
			'FUNETH',
			'FUNUSD',
			'HVNBTC',
			'HVNETH',
			'FUELBTC',
			'FUELETH',
			'FUELUSD',
			'POEBTC',
			'POEETH',
			'MCAPBTC',
			'AIRBTC',
			'AIRETH',
			'AIRUSD',
			'AMBUSD',
			'AMBETH',
			'AMBBTC',
			'NTOBTC',
			'ICOBTC',
			'PINGBTC',
			'RKCETH',
			'GAMEBTC',
			'TKRETH',
			'HPCBTC',
			'PPTETH',
			'MTHBTC',
			'MTHETH',
			'WMGOBTC',
			'WMGOUSD',
			'LRCBTC',
			'LRCETH',
			'ICXBTC',
			'ICXETH',
			'NEOBTC',
			'NEOETH',
			'NEOUSD',
			'CSNOBTC',
			'ORMEBTC',
			'ICXUSD',
			'PIXBTC',
			'PIXETH',
			'INDETH',
			'KICKBTC',
			'YOYOWBTC',
			'MIPSBTC',
			'CDTBTC',
			'XVGBTC',
			'XVGETH',
			'XVGUSD',
			'DGBBTC',
			'DGBETH',
			'DGBUSD',
			'DCNBTC',
			'DCNETH',
			'DCNUSD',
			'LATBTC',
			'CCTETH',
			'EBETETH',
			'VIBEBTC',
			'VOISEBTC',
			'ENJBTC',
			'ENJETH',
			'ENJUSD',
			'ZSCBTC',
			'ZSCETH',
			'ZSCUSD',
			'ETBSBTC',
			'TRXBTC',
			'TRXETH',
			'TRXUSD',
			'VENBTC',
			'VENETH',
			'VENUSD',
			'ARTBTC',
			'EVXBTC',
			'EVXETH',
			'QVTETH',
			'EBTCOLDBTC',
			'EBTCOLDETH',
			'EBTCOLDUSD',
			'BKBBTC',
			'EXNBTC',
			'TGTBTC',
			'ATSETH',
			'CTRBTC',
			'CTRETH',
			'CTRUSD',
			'BMTBTC',
			'BMTETH',
			'SUBBTC',
			'SUBETH',
			'SUBUSD',
			'WTCBTC',
			'CNXBTC',
			'ATBBTC',
			'ATBETH',
			'ATBUSD',
			'ODNBTC',
			'BTMBTC',
			'BTMETH',
			'BTMUSD',
			'B2XBTC',
			'B2XETH',
			'B2XUSD',
			'ATMBTC',
			'ATMETH',
			'ATMUSD',
			'LIFEBTC',
			'VIBBTC',
			'VIBETH',
			'VIBUSD',
			'DRTETH',
			'STUUSD',
			'OMGBTC',
			'PAYBTC',
			'COSSBTC',
			'PPTBTC',
			'SNTBTC',
			'BTGBTC',
			'BTGETH',
			'BTGUSD',
			'SMARTBTC',
			'SMARTETH',
			'SMARTUSD',
			'XUCETH',
			'XUCBTC',
			'CLBTC',
			'CLETH',
			'CLUSD',
			'LAETH',
			'CLDBTC',
			'CLDETH',
			'CLDUSD',
			'ELMBTC',
			'EDOBTC',
			'EDOETH',
			'EDOUSD',
			'HGTETH',
			'POLLBTC',
			'IXTBTC',
			'ATSBTC',
			'SCLBTC',
			'ATLBTC',
			'EBTCNEWBTC',
			'EBTCNEWETH',
			'EBTCNEWUSD',
			'ETPBTC',
			'ETPETH',
			'ETPUSD',
			'OTXBTC',
			'CDXETH',
			'DRPUBTC',
			'NEBLBTC',
			'NEBLETH',
			'HACBTC',
			'CTXBTC',
			'CTXETH',
			'ELEBTC',
			'ARNBTC',
			'ARNETH',
			'SISABTC',
			'SISAETH',
			'STUBTC',
			'STUETH',
			'GVTETH',
			'INDIBTC',
			'BTXBTC',
			'BTXUSDT',
			'LTCETH',
			'BCNETH',
			'MAIDETH',
			'NXTETH',
			'STRATETH',
			'XDNETH',
			'XEMETH',
			'PLRBTC',
			'SURBTC',
			'BQXBTC',
			'DOGEETH',
			'ITSBTC',
			'AMMBTC',
			'AMMETH',
			'AMMUSD',
			'DBIXBTC',
			'PREBTC',
			'KBRBTC',
			'TBTBTC',
			'EROBTC',
			'SMSBTC',
			'SMSETH',
			'SMSUSD',
			'ZAPBTC',
			'DOVBTC',
			'DOVETH',
			'FRDBTC',
			'DRPUETH',
			'OTNBTC',
			'XRPETH',
			'XRPUSDT',
			'HSRBTC',
			'LENDBTC',
			'LENDETH',
			'SPFETH',
			'SBTCBTC',
			'SBTCETH',
			'BTCABTC',
			'BTCAETH',
			'BTCAUSD',
			'WRCBTC',
			'WRCETH',
			'WRCUSD',
			'LOCBTC',
			'LOCETH',
			'LOCUSD',
			'SWFTCBTC',
			'SWFTCETH',
			'SWFTCUSD',
			'STARETH',
			'SBTCUSDT',
			'STORMBTC',
			'DIMETH',
			'DIMUSD',
			'DIMBTC',
			'NGCBTC',
			'NGCETH',
			'NGCUSD',
			'EMCETH',
			'EMCUSDT',
			'MCOBTC',
			'MCOETH',
			'MCOUSD',
			'MANAETH',
			'MANABTC',
			'ECHBTC',
			'CPAYETH',
			'DATABTC',
			'DATAETH',
			'DATAUSD',
			'UTTBTC',
			'UTTETH',
			'UTTUSD',
			'KMDBTC',
			'KMDETH',
			'KMDUSD',
			'QTUMUSD',
			'QTUMBTC',
			'SNTUSD',
			'OMGUSD',
			'EKOBTC',
			'EKOETH',
			'ADXBTC',
			'ADXUSD',
			'LSKETH',
			'LSKUSD',
			'PLRUSD',
			'SURUSD',
			'BQXUSD',
			'DRTUSDT',
			'REPETH',
			'REPUSDT',
			'TIOBTC',
			'TIOETH',
			'TIOUSD',
			'WAXBTC',
			'WAXETH',
			'WAXUSD',
			'ULTCBTC',
			'EETBTC',
			'EETETH',
			'EETUSD',
			'C20BTC',
			'C20ETH',
			'IDHBTC',
			'IDHETH',
			'IPLBTC',
			'COVBTC',
			'COVETH',
			'SENTBTC',
			'SENTETH',
			'SENTUSD',
			'SMTBTC',
			'SMTETH',
			'SMTUSD',
			'CVHETH',
			'CVHUSD',
			'W3CBTC',
			'W3CETH',
			'CASBTC',
			'CASETH',
			'CASUSD',
			'CHATBTC',
			'CHATETH',
			'CHATUSD',
			'GRMDBTC',
			'AVHBTC',
			'TRACETH',
			'JNTETH',
			'PCLBTC',
			'PCLETH',
			'CLOUTBTC',
			'UTKBTC',
			'UTKETH',
			'UTKUSD',
			'GNXETH',
			'CHSBBTC',
			'CHSBETH',
			'AVHETH',
			'NEUBTC',
			'NEUETH',
			'NEUUSD',
			'AVHUSDT',
			'CLOUTETH',
			'CLOUTUSDT',
			'TAUBTC',
			'MEKBTC',
			'BARBTC',
			'BARETH',
			'BARUSD',
			'FLPBTC',
			'FLPETH',
			'FLPUSD',
			'RBTC',
			'RETH',
			'EKOUSDT',
			'BCPTETH',
			'BCPTUSDT',
			'PKTBTC',
			'PKTETH',
			'WLKBTC',
			'WLKETH',
			'WLKUSD',
			'EVNBTC',
			'CPGBTC',
			'CPGETH',
			'BPTNBTC',
			'BPTNETH',
			'BPTNUSD',
			'BETRBTC',
			'BETRETH',
			'ARCTBTC',
			'ARCTUSD',
			'DBETBTC',
			'DBETETH',
			'DBETUSD',
			'RNTBETH',
			'HANDETH',
			'HANDUSD',
			'BEZBTC',
			'BEZETH',
			'BEZUSD',
			'ACOETH',
			'CTEBTC',
			'CTEETH',
			'CTEUSD',
			'UTNPBTC',
			'UTNPETH',
			'UTNPUSD',
			'CPYBTC',
			'CPYETH',
			'CHPETH',
			'BCPTBTC',
			'ACTBTC',
			'ACTETH',
			'ACTUSD',
			'HIREETH',
			'ADABTC',
			'ADAETH',
			'ADAUSD',
			'SIGBTC',
			'RPMBTC',
			'RPMETH',
			'MTXBTC',
			'MTXETH',
			'MTXUSD',
			'BGGBTC',
			'BGGETH',
			'BGGUSD',
			'SETHETH',
			'WIZBTC',
			'WIZETH',
			'WIZUSD',
			'DADIBTC',
			'DADIETH',
			'BDGETH',
			'DATXBTC',
			'DATXETH',
			'TRUEBTC',
			'DRGBTC',
			'DRGETH',
			'BANCABTC',
			'BANCAETH',
			'ZAPETH',
			'ZAPUSD',
			'AUTOBTC',
			'NOAHBTC',
			'SOCBTC',
			'WILDBTC',
			'INSURBTC',
			'INSURETH',
			'OCNBTC',
			'OCNETH',
			'STQBTC',
			'STQETH',
			'XLMBTC',
			'XLMETH',
			'XLMUSD',
			'IOTABTC',
			'IOTAETH',
			'IOTAUSD',
			'DRTBTC',
			'BETRUSD',
			'CGCETH',
			'ERTBTC',
			'MESHBTC',
			'MESHETH',
			'MESHUSD',
			'CRPTUSD',
			'CRPTBTC',
			'HLWETH',
			'IHTBTC',
			'IHTUSD',
			'IHTETH',
			'SCCBTC',
			'YCCBTC',
			'DANBTC',
			'TELBTC',
			'TELETH',
			'BUBOBTC',
			'BUBOETH',
			'BUBOUSD',
			'CLRBTC',
			'VITBTC',
			'VITETH',
			'VITUSD'
    ];

    this.mapping = pair => {
			if (this.alts[pair]) {
				return this.alts[pair];
			}

      if (this.pairs.indexOf(pair) !== -1) {
        return pair;
      }

      return false;
    }

		this.options = Object.assign({
			url: 'wss://api.hitbtc.com/api/2/ws',
		}, this.options);
	}

	connect(pair) {
    if (!super.connect(pair))  
      return;

    this.server = new WebSocket(this.getUrl());

		this.server.on('message', event => this.emitData(this.format(event)));

		this.server.on('open', event => {
      this.server.send(JSON.stringify({
				method: 'subscribeTrades',
				params: {
					symbol: this.pair
				},
      }));

      this.emitOpen(event);
    });

		this.server.on('close', this.emitClose.bind(this));

    this.server.on('error', this.emitError.bind(this));
	}

	disconnect() {
    if (!super.disconnect()) {
      return;
		}

    if (this.server && this.server.readyState < 2) {
      this.server.close();
    } else {

			console.log('hitbtc server readystate', this.server.readyState);
		}
	}

	format(event) {
		const json = JSON.parse(event);

    if (!json) {
      return;
    }

		if (json.method === 'updateTrades' && json.params && json.params.data && json.params.data.length) {
			return json.params.data.map(trade => [
				trade.id,
				+new Date(trade.timestamp),
				+trade.price,
				+trade.quantity,
				trade.side === 'buy' ? 1 : 0
			]);
		}
	}

}

module.exports = Huobi;