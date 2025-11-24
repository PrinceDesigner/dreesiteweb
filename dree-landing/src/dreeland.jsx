import React, { useState } from 'react';
import {
    ShoppingBag,
    Clock,
    Truck,
    MapPin,
    CheckCircle,
    Smartphone,
    Menu,
    X,
    Instagram,
    Twitter,
    Facebook,
    Shirt,
    Zap,
    Mail,
    Send,
    Store,
    TrendingUp,
    Users,
    AlertCircle // Nuova icona per l'avviso
} from 'lucide-react';

const DreeLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    // Stato per il modulo negozio
    const [storeName, setStoreName] = useState('');
    const [storeContact, setStoreContact] = useState('');
    const [storeSubmitted, setStoreSubmitted] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;
        setSubscribed(true);
        setTimeout(() => {
            setEmail('');
        }, 2000);
    };

    const handleStoreSubmit = (e) => {
        e.preventDefault();
        if (!storeName || !storeContact) return;
        setStoreSubmitted(true);
        setTimeout(() => {
            setStoreName('');
            setStoreContact('');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">

            /* Navigation */
            <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <img src="/logosvg.svg" className="w-30 h-40" />
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => scrollToSection('how-it-works')} className="text-slate-600 hover:text-[#2EA7A0] font-medium transition-colors">Come Funziona</button>
                        <button onClick={() => scrollToSection('coverage')} className="text-slate-600 hover:text-[#2EA7A0] font-medium transition-colors">Copertura</button>
                        <button onClick={() => scrollToSection('for-stores')} className="text-slate-600 hover:text-[#2EA7A0] font-medium transition-colors">Partner</button>
                        {/* <button onClick={() => scrollToSection('waitlist')} className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Lista d'attesa
                        </button> */}
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-slate-100 absolute w-full px-6 py-8 flex flex-col gap-6 shadow-xl animate-fade-in">
                        <button onClick={() => scrollToSection('how-it-works')} className="text-lg font-medium text-slate-700">Come Funziona</button>
                        <button onClick={() => scrollToSection('coverage')} className="text-lg font-medium text-slate-700">Copertura</button>
                        <button onClick={() => scrollToSection('for-stores')} className="text-lg font-medium text-slate-700">Area Negozi</button>
                        {/* <button onClick={() => scrollToSection('waitlist')} className="bg-[#2EA7A0] text-white py-3 rounded-xl font-bold">Iscriviti Ora</button> */}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden relative">
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-[#2EA7A0]/10 text-[#2EA7A0] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#2EA7A0]/20">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2EA7A0] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2EA7A0]"></span>
                                </span>
                                <span>Prossimamente a Napoli</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900">
                                Il tuo stile, consegnato in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA7A0] to-teal-400">
                                    meno di 60 minuti.
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Dree ti porta i tuoi brand preferiti dai negozi locali direttamente alla tua porta in meno di un'ora.
                            </p>

                            {/* Waitlist Form - Hero */}
                            {/* <div className="max-w-md mx-auto lg:mx-0">
                <p className="text-sm font-bold text-slate-800 mb-2">Entra nella lista d'attesa per l'accesso anticipato:</p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="email" 
                      placeholder="La tua email" 
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-[#2EA7A0] outline-none transition-colors"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="bg-slate-900 text-white px-6 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center">
                    {subscribed ? <CheckCircle /> : <div className="flex items-center gap-2">Unisciti <ArrowRight size={18} /></div>}
                  </button>
                </form>
                {subscribed && <p className="text-[#2EA7A0] text-sm mt-2 font-medium animate-pulse">Grazie! Ti avviseremo appena saremo attivi.</p>}
              </div> */}

                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm font-medium">
                                <span className="flex items-center gap-2"><CheckCircle size={16} className="text-[#2EA7A0]" /> Nessun costo nascosto</span>
                                <span className="flex items-center gap-2"><CheckCircle size={16} className="text-[#2EA7A0]" /> Tracciamento live</span>
                            </div>
                        </div>

                        {/* Hero Visual / App Preview */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#2EA7A0]/30 to-cyan-200/30 rounded-full blur-3xl -z-10"></div>

                            <div className="relative w-72 mx-auto lg:w-80 lg:mr-auto lg:ml-10 bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-800 rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>

                                <div className="bg-white w-full h-[550px] rounded-[2.2rem] overflow-hidden relative flex flex-col">
                                    {/* Mockup Header */}
                                    <div className="h-14 bg-white flex items-end justify-between px-6 pb-2 border-b border-slate-50">
                                        <span className="font-bold text-lg">Dree</span>
                                        <ShoppingBag size={20} />
                                    </div>

                                    {/* Mockup Body */}
                                    <div className="flex-1 bg-slate-50 relative flex flex-col items-center justify-center p-6 text-center">
                                        <div className="w-20 h-20 bg-[#2EA7A0]/10 rounded-full flex items-center justify-center text-[#2EA7A0] mb-6 animate-bounce">
                                            <MapPin size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">In Arrivo a Napoli</h3>
                                        <p className="text-slate-500 text-sm mb-6">Stiamo preparando i nostri runner per consegnare il meglio della moda partenopea.</p>

                                        <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-left mb-3">
                                            <div className="h-2 w-1/3 bg-slate-200 rounded mb-2"></div>
                                            <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                                        </div>
                                        <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-left opacity-70">
                                            <div className="h-2 w-1/4 bg-slate-200 rounded mb-2"></div>
                                            <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Come funzionerà Dree</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Abbiamo ottimizzato la logistica della moda per portarti il tuo stile prima ancora che tu decida quali scarpe abbinarci.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {[
                            {
                                icon: <Smartphone size={32} />,
                                title: "1. Ordina",
                                desc: "Sfoglia i tuoi negozi locali preferiti nell'app. Seleziona la taglia e vai al checkout.",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                icon: <ShoppingBag size={32} />,
                                title: "2. Lo Store Accetta",
                                desc: "Il negozio conferma la disponibilità all'istante. Il tuo articolo viene preparato.",
                                color: "bg-[#2EA7A0]/10 text-[#2EA7A0]"
                            },
                            {
                                icon: <Truck size={32} />,
                                title: "3. Ritiro Dree",
                                desc: "Un Runner Dree nelle vicinanze accetta l'incarico, ritira la tua bag e parte.",
                                color: "bg-teal-50 text-teal-600"
                            },
                            {
                                icon: <CheckCircle size={32} />,
                                title: "4. Consegnato",
                                desc: "Traccia in tempo reale. Ricevi il tuo nuovo outfit in meno di 60 minuti.",
                                color: "bg-emerald-50 text-emerald-600"
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="relative group flex items-center flex-col p-6 rounded-2xl border border-slate-100 hover:border-[#2EA7A0]/30 hover:shadow-xl transition-all bg-white">
                                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                                {idx !== 3 && (
                                    <div className="hidden lg:block absolute top-14 -right-4 w-8 border-t-2 border-dashed border-slate-200 z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Area Map Section */}
            <section id="coverage" className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Abstract Map Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* TEXT EXPLANATION */}
                        <div className="lg:w-1/2">
                            <span className="text-[#2EA7A0] font-bold uppercase tracking-widest text-xs mb-2 block">Iper-località</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Velocità garantita dalla prossimità.</h2>

                            <p className="text-slate-300 text-lg mb-6">
                                Per mantenere la promessa dei 60 minuti, operiamo con una logica rigorosa:
                            </p>

                            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 mb-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <AlertCircle className="text-[#2EA7A0] shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">La Regola della Zona</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Puoi ordinare solo se <strong>sia il tuo indirizzo di consegna che il negozio</strong> si trovano all'interno della nostra area attiva.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-700/50">
                                    <span>Tuo Indirizzo ∈ Zona</span>
                                    <span className="font-mono text-[#2EA7A0]">+</span>
                                    <span>Store ∈ Zona</span>
                                    <span className="font-mono text-[#2EA7A0]">=</span>
                                    <span className="text-[#2EA7A0] font-bold">Consegna in 1h</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <TrendingUp className="text-[#2EA7A0] shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-white text-sm">Espansione Progressiva</h4>
                                    <p className="text-slate-400 text-sm mt-1">
                                        Partiamo da una zona delimitata del centro per garantire l'eccellenza. Man mano che la flotta di runner cresce, espanderemo i confini quartiere per quartiere.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* MAP VISUALIZATION */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative w-full h-[500px] bg-slate-800 rounded-3xl p-2 border border-slate-700 shadow-2xl group">
                                <div className="relative w-full h-full bg-slate-700 rounded-2xl overflow-hidden">

                                    {/* Map Image */}
                                    {/* <img 
                    src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/14.2681,40.8518,12,0/1000x600?access_token=YOUR_ACCESS_TOKEN" 
                    alt="Mappa di Napoli" 
                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Napoli_montage.jpg/800px-Napoli_montage.jpg" 
                        e.target.className="w-full h-full object-cover opacity-30"
                    }}
                  /> */}

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                                    {/* Active Zone (Pulse) */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-64 lg:h-64 border-4 border-[#2EA7A0] bg-[#2EA7A0]/20 rounded-full flex items-center justify-center">
                                        {/* Pulse Animation Ring */}
                                        <div className="absolute w-full h-full rounded-full border-2 border-[#2EA7A0] animate-ping opacity-50"></div>

                                        {/* Center Point */}
                                        <div className="w-3 h-3 bg-[#2EA7A0] rounded-full shadow-[0_0_20px_rgba(46,167,160,1)] z-10"></div>
                                    </div>

                                    {/* Logic Visualization on Map */}
                                    {/* House Inside */}
                                    <div className="absolute top-[60%] left-[55%] flex flex-col items-center animate-bounce delay-700">
                                        <MapPin size={20} className="text-green-400 fill-current" />
                                        <span className="text-[10px] font-bold bg-green-900/80 px-1 rounded text-green-100 mt-1">Casa</span>
                                    </div>
                                    {/* Shop Inside */}
                                    <div className="absolute top-[52%] left-[45%] flex flex-col items-center animate-bounce">
                                        <Store size={20} className="text-green-400 fill-current" />
                                        <span className="text-[10px] font-bold bg-green-900/80 px-1 rounded text-green-100 mt-1">Negozio</span>
                                    </div>

                                    {/* House Outside (Example) */}
                                    <div className="absolute top-[20%] right-[20%] flex flex-col items-center opacity-50">
                                        <MapPin size={20} className="text-slate-500" />
                                        <span className="text-[10px] font-bold bg-slate-800/80 px-1 rounded text-slate-400 mt-1">Fuori Zona</span>
                                    </div>

                                    {/* Map Label Overlay */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full px-4">
                                        <span className="bg-slate-900/90 text-white px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md border border-slate-600 shadow-xl flex items-center justify-center gap-2 mx-auto w-fit">
                                            <CheckCircle size={12} className="text-[#2EA7A0]" />
                                            Zona Operativa Attiva
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Partners / Coming Soon Brands */}
            {/* <section id="brands" className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">Prossimamente in partnership con</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
             <h3 className="text-2xl font-bold text-slate-800">ZARA</h3>
             <h3 className="text-2xl font-bold text-slate-800">H&M</h3>
             <h3 className="text-2xl font-bold text-slate-800">UNIQLO</h3>
             <h3 className="text-2xl font-bold text-slate-800">Nike</h3>
             <h3 className="text-2xl font-bold text-slate-800">Supreme</h3>
          </div>
          <p className="mt-8 text-xs text-slate-400">*I marchi mostrati sono a scopo illustrativo.</p>
        </div>
      </section> */}

            {/* NEW SECTION: Store Application */}
            <section id="for-stores" className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        <div className="lg:w-1/2">
                            <span className="text-[#2EA7A0] font-bold uppercase tracking-widest text-xs mb-2 block">Dree Business</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Hai un negozio di moda a Napoli?</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Trasforma il tuo inventario in vendite immediate. Unisciti alla piattaforma Dree e raggiungi migliaia di nuovi clienti senza costi di logistica aggiuntivi.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#2EA7A0] shrink-0">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Nuovi Clienti</h4>
                                        <p className="text-slate-500 text-sm">Raggiungi i clienti digitali che non passano davanti alla tua vetrina fisica.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#2EA7A0] shrink-0">
                                        <Truck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Logistica Inclusa</h4>
                                        <p className="text-slate-500 text-sm">Non devi spedire nulla. I nostri runner vengono a ritirare l'ordine in negozio.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#2EA7A0] shrink-0">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Zero Costi Fissi</h4>
                                        <p className="text-slate-500 text-sm">Paghi solo una commissione sul venduto. Nessun costo di ingresso.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-2">Candida il tuo Store</h3>
                <p className="text-slate-500 mb-6 text-sm">Compila il modulo per essere contattato dal nostro team commerciale.</p>
                
                {storeSubmitted ? (
                  <div className="bg-green-50 text-green-700 p-6 rounded-2xl flex flex-col items-center text-center animate-fade-in">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                      <CheckCircle size={24} />
                    </div>
                    <h4 className="font-bold mb-1">Richiesta Inviata!</h4>
                    <p className="text-sm">Il nostro team valuterà il tuo negozio e ti contatterà entro 48 ore.</p>
                  </div>
                ) : (
                  <form onSubmit={handleStoreSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome del Negozio</label>
                      <div className="relative">
                        <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#2EA7A0] focus:ring-2 focus:ring-[#2EA7A0]/20 outline-none transition-all"
                          placeholder="Es. Boutique Napoli"
                          value={storeName}
                          onChange={(e) => setStoreName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email o Telefono</label>
                      <div className="relative">
                        <Send className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#2EA7A0] focus:ring-2 focus:ring-[#2EA7A0]/20 outline-none transition-all"
                          placeholder="contatti@negozio.it"
                          value={storeContact}
                          onChange={(e) => setStoreContact(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                        Invia Candidatura
                      </button>
                    </div>
                    <p className="text-xs text-center text-slate-400 mt-4">
                      Candidandoti accetti di essere contattato per scopi commerciali relativi a Dree.
                    </p>
                  </form>
                )}
              </div>
            </div> */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                            <h3 className="text-xl font-bold mb-2">Candida il tuo Store</h3>
                            <p className="text-slate-500 mb-6 text-sm">
                                Vuoi vendere su Dree? Contattaci direttamente su Instagram per collaborare con il nostro team commerciale.
                            </p>

                            <div className="flex flex-col items-center text-center py-6">
                                <div className="w-16 h-16 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4] rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg">
                                    <Instagram size={32} />
                                </div>

                                <p className="text-slate-600 text-sm mb-6 max-w-xs">
                                    Risponderemo entro 24–48 ore con tutte le informazioni necessarie.
                                </p>

                                <button
                                    onClick={() => window.open('https://www.instagram.com/dree.app/', '_blank')}
                                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                                >
                                    Contattaci su Instagram
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Waitlist Section */}
            {/* <section id="waitlist" className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    BRAND COLOR APPLIED HERE - Gradient Background
                    <div className="bg-gradient-to-r from-[#2EA7A0] to-teal-500 rounded-3xl p-10 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 relative z-10">Non perderti il lancio.</h2>
                        <p className="text-teal-50 text-lg mb-10 max-w-xl mx-auto relative z-10">
              I primi 500 iscritti riceveranno consegne gratuite per un mese intero al lancio.
            </p>

                        <div className="max-w-md mx-auto relative z-10">
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Inserisci la tua email"
                                    // BRAND COLOR APPLIED HERE - Focus Ring
                                    className="flex-1 px-6 py-4 rounded-xl text-slate-900 outline-none focus:ring-4 ring-[#2EA7A0]/50"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                    {subscribed ? 'Iscritto!' : 'Avvisami'}
                                </button>
                            </form>
                            <p className="text-teal-100 text-xs mt-4">
                                Promettiamo niente spam. Solo aggiornamenti importanti sul lancio.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Footer */}
            <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <div className="full-w flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-6">
                                { /* BRAND COLOR APPLIED HERE */}
                                <img src="/logosvg.svg" className="w-40 h-40" />

                            </div>
                            <p className="text-slate-500 max-w-sm mb-6">
                                Il futuro dello shopping di moda. Trasformiamo la città nel tuo magazzino personale, consegnando stile alla velocità della vita.
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => window.open('https://www.instagram.com/dree.app/', '_blank')}
                                    className="w-10 h-10 rounded-full bg-slate-50 shadow-sm flex items-center justify-center text-slate-600 hover:text-[#2EA7A0] transition-colors"><Instagram size={20} />
                                </button>
                            </div>
                        </div>

                        {/* <div>
                              <h4 className="font-bold text-slate-900 mb-6">Azienda</h4>
                              <ul className="space-y-4 text-slate-600">
                                <li className="hover:text-[#2EA7A0] cursor-pointer">Chi siamo</li>
                                <li className="hover:text-[#2EA7A0] cursor-pointer">Lavora con noi</li>
                                <li className="hover:text-[#2EA7A0] cursor-pointer">Diventa un Runner</li>
                                <li onClick={() => scrollToSection('for-stores')} className="hover:text-[#2EA7A0] cursor-pointer">Diventa Partner</li>
                              </ul>
                            </div> */}

                        {/* <div>
              <h4 className="font-bold text-slate-900 mb-6">Supporto</h4>
              <ul className="space-y-4 text-slate-600">
                <li className="hover:text-[#2EA7A0] cursor-pointer">FAQ</li>
                <li className="hover:text-[#2EA7A0] cursor-pointer">Termini di Servizio</li>
                <li className="hover:text-[#2EA7A0] cursor-pointer">Privacy Policy</li>
                <li className="hover:text-[#2EA7A0] cursor-pointer">Contattaci</li>
              </ul>
            </div> */}
                    </div>

                    <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <p>© 2025 Dree Technologies Inc. Tutti i diritti riservati.</p>
                        <p>Designed for the speed of fashion.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Componente ArrowRight mancante nell'import iniziale
const ArrowRight = ({ size = 24, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default DreeLanding;