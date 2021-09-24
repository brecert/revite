const e={special:{modals:{account:{change:{username:"Schimbă numele de utilizator",password:"Schimbă parola",email:"Schimbă adresa de email"},failed:"Schimbare nereușită!"},prompt:{confirm_leave:"Părăsești {{name}}?",confirm_leave_long:"Nu vei putea să reintri decât dacă ești reinvitat.",confirm_delete:"Ștergi {{name}}?",confirm_close_dm_long:"O poți redeschide ulterior dar va dispărea pe ambele părți.",confirm_close_dm:"Închizi conversația cu {{name}}?",confirm_delete_long:"Odată ce a fost șters, nu mai există cale de întoarcere.",confirm_delete_message_long:"Ești sigur că vrei să ștergi asta?",confirm_kick:"Ești sigur că vrei să dai afară pe {{name}}?",confirm_ban:"Ești pe cale să-i interzici accesul lui {{name}}",confirm_ban_reason:"Motivul Interdicției",create_invite_generate:"Se generează invitația…",create_invite_created:"Iată noul tău cod de invitație:",unfriend_user:"Elimini pe {{name}}?",block_user:"Blochezi pe {{name}}?",block_user_long:"Ești sigur(ă) că vrei să blochezi {{name}}? Acesta (Aceasta) va fi eliminat(ă) și din lista ta de prieteni.",unfriend_user_long:"Este posibil să nu mai poți vorbi cu el (ea) până când nu îl (o) adaugi din nou."},onboarding:{welcome:"Bun venit la",pick:"Alege un nume de utilizator cu care dorești ca oamenii să te poată găsi; acesta poate fi modificat ulterior în setări."},signed_out:"Ai fost deconectat!",error:"A apărut o eroare!",actions:{cancel:"Anulare",reload:"Reîncarcă Aplicația",continue:"Continuare",send_email:"Trimitere Email",preview:"Previzualizare",update:"Actualizare",close:"Închidere",save:"Salvare",ok:"Ok",kick:"Dă afară",ban:"Interzice accesul",delete:"Șterge",create:"Creează",block:"Blochează",leave:"Părăsește",remove:"Elimină",reveal:"Afișează",back:"Înapoi",hide:"Ascunde",edit:"Editare"},clipboard:{copy:"Copiere Manuală:",https:"Nu te afli în prezent într-un context HTTPS.",unavailable:"Clipboard-ul nu este disponibil!"},token_reveal:"Token-ul lui {{name}}",external_links:{title:"Link-urile externe pot fi periculoase!",trust_domain:"Oferă încredere acestui domeniu"}},status:{reconnecting:"Reconectare…",connecting:"Conectare…",disconnected:"Deconectat.",offline:"Offline."},friends:{blocked:"Blocat",nobody:"Nimeni aici încă!",outgoing:"Cerere de prietenie trimisă.",incoming:"Cerere de prietenie primită.",pending:"Cereri în așteptare",sent:"De ieșire",from:{single:"De la {{user}}",several:"De la {{userlist}} și {{count}} mai multe…",multiple:"De la {{userlist}} și {{user}}"}},requires_online:"Trebuie să fi online pentru a vedea acest lucru.",popovers:{user_profile:{badges:{translator:"Traducător/oare",supporter:"Susținător",early_adopter:"Adoptor Timpuriu",responsible_disclosure:"Bug (bug-uri) dezvăluit(e) în mod responsabil"},sub:{connections:"Conexiuni",information:"Informații",badges:"Insigne"},no_groups:"Niciun grup în comun!",no_users:"Niciun prieten în comun!",empty:"E cam pustiu aici…",mutual_groups:"Grupuri în comun",mutual_friends:"Prieteni în comun",profile:"Profil",no_servers:"Fără servere în comun!",mutual_servers:"Servere în comun"},user_picker:{select:"Selectează prietenii pe care vrei să-i adaugi."},create_bot:{failed:"Nu s-a putut crea un bot!",title:"Creează un bot nou"}},copy_username:"Dă click pentru a copia numele de utilizator",copy:"Click pentru a copia",invite:{invited_by:"Invitat(ă) de {{user}}",accept:"Acceptă Invitația",login:"Autentificare la Revolt",user_count:"{{member_count}} (de) utilizatori",invalid_desc:"Este posibil ca invitația să nu existe sau să nu ai permisiunea de a te alătura.",invalid:"Invitație invalidă!"}},settings:{pages:{logOut:"Deconectare",source_code:"Codul sursă",donate:{title:"Donează"},language:{title:"Limba",select:"Selectează limba ta",other:"Limbi alternative",const:"Limbi artificiale"},notifications:{enable_push:"Activeaza notificări push.",title:"Notificări",descriptions:{enable_outgoing_sound:"Activează redarea unui sunet atunci când trimiți un mesaj.",enable_sound:"Activează pentru sunetele mesajelor primite.",enable_push:"Activează pentru a primi notificări atunci când ești offline.",enable_desktop:"Acest lucru îți va oferi notificări în timp ce aplicația este deschisă."},enable_outgoing_sound:"Redă Sunetul de Trimitere.",enable_sound:"Redare Sunet la Mesaj.",enable_desktop:"Activează Notificările de pe Desktop.",push_notifications:"Notificări Push",sounds:"Sunete",sound:{message:"Mesaj primit",outbound:"Mesaj trimis",call_join:"Utilizatorul a intrat în apel",call_leave:"Utilizatorul a părăsit apelul"}},sessions:{created:"Creat acum {{time_ago}}",this_device:"Acest Dispozitiv",title:"Sesiuni",active_sessions:"Sesiuni Active",logout:"Deconectează-te de la toate celelalte sesiuni"},account:{change_field:"Schimbă",title:"Contul Meu",unique_id:"Acesta este un identificator de utilizator unic pentru contul tău.","2fa":{title:"Autentificare cu doi factori",description:"Adaugă un nivel suplimentar de securitate prin activarea 2FA în contul tău.",add_auth:"Adaugă un autentificator",remove_auth:"Dezactivează autentificatorul"},manage:{title:"Gestionare Cont",disable:"Dezactivează Contul",delete:"Șterge Contul",description:"Dezactivează sau șterge contul tău în orice moment. Această acțiune te va deconecta și îți va șterge complet contul, inclusiv istoricul de chat și prietenii."}},feedback:{send:"Trimite Feedback",describe:"Te rugăm să descrii problema.",other:"Altele",feature:"Solicitare de caracteristici",bug:"Bug tracker",report:"Ce vrei sa raportezi?",title:"Feedback",suggest_desc:"Propune caracteristici noi pentru Revolt în discuțiile de pe GitHub.",issue:"Creează un subiect nou",suggest:"Propune o nouă funcție",issue_desc:"Pentru a ne ajuta în trierea subiectelor, poți crea un subiect pe GitHub.",bug_desc:"Afișează rapoartele de erori active în prezent."},appearance:{sync:"Opțiuni de Sincronizare",custom_css:"CSS Personalizat",theme_data:"Date Tematice",import_theme:"Importare temă din string",import_manual:"Importare manuală",import_clipboard:"Importare din clipboard",export_clipboard:"Exportare în clipboard",reset_overrides:"Resetare suprascrieri",overrides:"Suprascriere Temă",advanced:"Setări Avansate",message_display:"Afișarea Mesajelor",accent_selector:"Culoare de accent",color:{dark:"întunecat",light:"luminos"},display:{compact_description:"Vechiul IRC.",default_description:"Frumos, elegant și modern.",compact:"Compact",default:"Implicit"},theme:"Temă",title:"Aspect",emoji_pack:"Pachet de Emoji",font:"Font",mono_font:"Selector de fonturi Monospace",ligatures:"Ligaturi de fonturi",ligatures_desc:"În cazul fonturilor acceptate, ligaturile combină caracterele între ele, de exemplu, transformând -> într-o săgeată. Comută pe Inter și încearcă comutarea acestei opțiuni.",import:"Importă o temă"},profile:{placeholder:"Scrie ceva despre tine…",fetching:"Se preia profilul tău…",info:"Informații",title:"Profil",profile_picture:"Poză de Profil",custom_background:"Fundal Personalizat",edit_background:"Editează Fundalul",edit_profile:"Editează profilul"},sync:{title:"Sincronizare",categories:"Sincronizează Categoriile",descriptions:{appearance:"Aceasta va sincroniza opțiunile precum pachetele de emoji și densitatea mesajelor.",theme:"Aceasta va sincroniza tema aleasă, culorile și orice CSS personalizat.",locale:"Aceasta va sincroniza limba aleasă în prezent."}},experiments:{title:"Experimente",titles:{servers:"Servere"},features:"Caracteristici Disponibile",descriptions:{servers:"Aceasta îți va permite să creezi servere cu canale, invitații, interdicții, moderare și mai multe."},not_available:"În acest moment nu este disponibil niciun experiment."},native:{title:"Setări Desktop"},bots:{title:"Boții mei",private_bot_tip:"Botul este privat. Numai tu îl poți invita.",public_bot_desc:"Dacă se permite altor utilizatori să invite acest bot.",reserved:"Notă: Acest câmp este rezervat pentru viitor.",create_bot:"Creează un Bot",copy_invite:"Copiază link-ul de invitație",add:"Adaugă un Bot",public_bot_tip:"Botul este public. Orcine îl poate invita.",public_bot:"Bot public",interactions_url:"URL de interacțiuni",token:"Token"},audio:{title:"Setări de voce",input_device:"Microfon",output_device:"Difuzor / Căști"}},categories:{user_settings:"Setări utilizator",client_settings:"Setări Client"},title:"Setări",tips:{sessions:{b:"protejează-ți contul prin schimbarea parolei și utilizarea 2FA.",a:"Dacă vezi o sesiune necunoscută pe listă,"},languages:{b:"Ajută la adăugarea a mai multor traduceri.",a:"Lipsește o limbă pe care o dorești?"},account:{b:"Mergi la setările profilului tău.",a:"Dorești să îți personalizezi profilul public?"}},channel_pages:{overview:{description:"Descrierea Canalului",name:"Numele Canalului",title:"Prezentare generală"},permissions:{title:"Permisiuni"}},actions:{remove:"Elimină",upload:"Încarcă",max_filesize:"(max {{filesize}})"},server_pages:{invites:{title:"Invitații",channel:"Canal",revoke:"Revocare",code:"Cod de invitație",invitor:"Invitator"},overview:{description:"Descrierea Canalului",title:"Prezentare generală",name:"Numele Serverului",system_messages:"Canale de mesaje de sistem"},members:{title:"Membri"},bans:{title:"Interdicții",user:"Utilizator",reason:"Motivul Interdicției",revoke:"Revocare",no_reason:"Nici un motiv de interdicție."},roles:{title:"Roluri"},categories:{title:"Categorii"}},permissions:{create_role:"Creează un rol nou",channel:"Permisiuni de canal",server:"Permisiuni ale serverului",default_role:"Implicit",role_name:"Nume Rol"}},main:{groups:{name:"Numele grupului",create:"Creează un grup",owner:"Deținătorul grupului",description:"Descrierea grupului"},channel:{bot:"bot",unknown_user:"<Utilizator Necunoscut>",system:{removed_by:"{{user}} a fost eliminat(ă) de către {{other_user}}",added_by:"{{user}} a fost adăugat(ă) de către {{other_user}}",user_left:"{{user}} a ieșit",user_joined:"{{user}} s-a alăturat",channel_renamed:"{{user}} a schimbat numele grupului în {{name}}",channel_description_changed:"{{user}} a schimbat descrierea canalului",channel_icon_changed:"{{user}} a schimbat pictograma grupului",user_kicked:"{{user}} a fost dat afară",user_banned:"I-a fost interzis accesul lui {{user}}"},typing:{several:"Mai multe persoane scriu…",multiple:"{{userlist}} și {{user}} scriu…",single:"{{user}} scrie…"},failed_upload:"Încărcare eșuată!",uploading_file:"Încărcare…",message_saved:"Salvează în notițele tale",edited:"(editat)",start:{group:"Acesta este începutul conversației tale."},attached_file:"{{filename}} atașat",message_who:"Trimite un mesaj către {{person}}",message_where:"Trimite un mesaj pe {{channel_name}}",voice:{connected:"Voce conectată",leave:"Părăsește",mute:"Dezactivează microfonul",unmute:"Activează microfonul"},misc:{viewing_old:"Acum vezi mesajele vechi",jump_present:"Sari la prezent",spoiler_attachment:"Spoiler",failed_load:"Nu s-a putut încărca mesajul.",no_sending:"Nu ai permisiunea de a trimite mesaje pe acest canal.",blocked_messages:"{{count}} mesaje blocate",blocked_user:"Utilizator Blocat",sent_file:"A trimis un atașament",sent_multiple_files:"A trimis mai multe atașamente"},notifications:{default:"Folosește implicit",all:"Toate mesajele",mention:"Numai mențiuni",none:"Nici unul (una)",muted:"Amuțit"},nsfw:{channel:{marked:"Acest canal este marcat ca fiind NSFW.",confirm:"Intră în canal"},confirm:"Confirm că am cel puțin 18 ani."},search:{title:"Căutare",sort:{relevance:"Relevanță",latest:"Ultimele",oldest:"Vechi"}}},categories:{members:"Membri",channels:"Canale",conversations:"Conversații",participants:"Participanți"},servers:{name:"Numele serverului",create:"Creează un server",channel_name:"Numele canalului",owner:"Deținătorul serverului",description:"Descrierea serverului",channel_description:"Descrierea canalului",custom_banner:"Afiș personalizat",voice_channel:"Canal de Voce",text_channel:"Canal de Text",channel_type:"Tipul canalului"}},navigation:{tabs:{saved:"Notițe salvate",unreads:"Necitite",friends:"Prieteni",dev:"Dezvoltator",home:"Acasă"}},status:{offline:"Deconectat",invisible:"Invizibil",busy:"Nu deranja",idle:"Inactiv",online:"Online"},context_menu:{open_channel_settings:"Setările canalului",set_custom_status:"Setează un status personalizat",clear_status:"Șterge status",custom_status:"Status personalizat",remove_friend:"Șterge prieten",cancel_friend:"Anulează cererea",add_friend:"Adaugă ca prieten",unblock_user:"Deblochează utilizatorul",block_user:"Blochează utilizatorul",open_link:"Deschide link-ul",copy_link:"Copiază link-ul",save_video:"Salvează videoclipul",open_video:"Deschide videoclipul",save_image:"Salvează imaginea",open_image:"Deschide imaginea",save_file:"Salvează fișierul",open_file:"Deschide fișierul",remove_member:"Elimină din grup",delete_message:"Șterge mesajul",edit_message:"Editează mesajul",quote_message:"Citează mesajul",cancel_message:"Anulează trimiterea",retry_message:"Reîncearcă trimiterea",mark_as_read:"Marchează ca citit",message_user:"Trimite un mesaj",mention:"Menționează",copy_mid:"Copiază ID-ul mesajului",copy_cid:"Copiază ID-ul canalului",copy_uid:"Copiază ID-ul de utilizator",copy_text:"Copiază textul",copy_id:"Copiază ID",copy_selection:"Copiază selecția",leave_group:"Părăsește grupul",leave_server:"Părăsește serverul",open_server_settings:"Setările serverului",open_group_settings:"Setările grupului",copy_sid:"Copiază ID-ul serverului",view_profile:"Vezi profilul",ban_member:"Interzice accesul membrului",kick_member:"Dă afară membrul",close_dm:"Închide DM",delete_server:"Șterge serverul",delete_channel:"Șterge canalul",create_channel:"Creează canal",create_invite:"Creează invitație",reply_message:"Răspunde",open_notification_options:"Setări de notificare",copy_message_link:"Copiază link-ul mesajului",edit_identity:"Editează identitatea",create_category:"Creează o categorie"},permissions:{required:"Sunt necesare permisiuni"}},i={error:{resend:"Retrimitere eșuată!",reset:"Resetare eșuată!",login:"Conectare eșuată!",create:"Înregistrare eșuată!"},successful_registration:"Înregistrat cu succes!",open_mail_provider:"Deschide {{provider}}",check_spam:"Te rugăm verifică folderul spam dacă nu îl poți găsi",check_mail:"Verifică-ți emailul.",cancel:"Anulează autentificarea.",resend:"Retrimite confirmarea.",missing_verification:"Fără email?",create:"Creează un cont nou.",existing:"Ai deja un cont?",new:"Prima oară pe Revolt?",remembered:"Întoarce-te la conectare.",set_password:"Setează o parolă nouă.",reset:"Resetează parola.",forgot:"Ți-ai uitat parola?",enter:{current_password:"Introdu parola actuală.",invite:"Introdu codul de invitație.",password:"Introdu parola.",email:"Introdu adresa de email.",username:"Introdu un nume de utilizator."},current_password:"Parola actuală",invite:"Cod de invitație",password:"Parolă",email:"Adresă de email",username:"Nume de utilizator",register:"Înregistrare",title:"Conectare",email_delay:"Te rugăm să acorzi până la 10 minute pentru sosirea acestuia."},a={image_by:"Imagine realizată de către",privacy:"Politica de confidențialitate",tos:"Termeni și condiții",about:"Despre",loading:"Se încarcă…",on:"Pornit",off:"Oprit",disabled:"Dezactivat",unavailable:"Indisponibil"},t={now_friends:"Acum ești prieten cu @{{person}}!",sent_request:"@{{person}} ți-a trimis o cerere de prietenie."},r={sameElse:"L",nextWeek:"dddd [la ora] {{time}}",lastWeek:"dddd [trecută] [la ora] {{time}}",nextDay:"[Mâine la ora] {{time}}",sameDay:"[Azi la ora] {{time}}",lastDay:"[Ieri la ora] {{time}}",defaults:{date_separator:"/",date_format:"traditional",twelvehour:"nu"}},n={members:{many:"{{count}} (de) Membri",one:"1 Membru"}},o={DeniedNotification:"Ai refuzat accesul la notificări, verifică setările paginii.",UnsupportedBrowser:"Browserul nu oferă suport pentru această funcție.",IoError:"Serverul a întâmpinat o eroare de I/O.",ProbeError:"Nu s-au putut obține metadatele fișierului.",MissingData:"Cererea nu conține date.",FailedToReceive:"Serverul nu a reușit să primească fișierul tău.",FileTooLarge:"Fișierul este prea mare.",Unavailable:"Indisponibil.",InvalidEmail:"Adresa de email invalidă",TooLong:"Prea lung",TooShort:"Prea scurt",RequiredField:"Obligatoriu",NoEffect:"Această solicitare nu a avut niciun efect.",BlockedOther:"Acest utilizator te-a blocat.",Blocked:"Ai blocat acest utilizator.",AlreadySentRequest:"Ai trimis deja o cerere de prietenie către acest utilizator.",AlreadyFriends:"Ești deja prieten cu acest utilizator.",UsernameTaken:"Numele de utilizator este luat.",AlreadyOnboarded:"Ai terminat deja configurarea.",InvalidInvite:"Cod Invalid",MissingInvite:"Lipsește codul de invitație în cerere.",InvalidToken:"Token Invalid",InvalidCredentials:"Adresa de e-mail sau parola este greșită.",EmailFailed:"Nu s-a reușit trimiterea e-mailului.",EmailInUse:"Email în uz.",UnknownUser:"Utilizator necunoscut.",UnverifiedAccount:"Cont Neverificat.",InvalidSession:"Sesiune Invalidă.",MissingHeaders:"Antete lipsă.",RenderFail:"Randarea șablonului a eșuat.",OperationFailed:"Operațiunea a eșuat.",UnknownError:"Vezi consola.",MissingPermission:"Lipsește permisiunea.",InternalError:"Eroare internă.",DatabaseError:"Eroare în baza de date.",FailedValidation:"Nu s-a reușit validarea câmpurilor.",Unlabelled:"Ceva s-a întâmplat.",Unauthorized:"Neautorizat.",NetworkError:"Eroare de rețea.",CompromisedPassword:"Această parolă a fost compromisă.",ReachedMaximumBots:"Ai atins numărul maxim de boți."},s={ctrlc:"Ctrl + C"},l={channel:{ManageMessages:{d:"Permite membrilor să șteargă mesajele trimise de alți membri.",t:"Gestionează Mesaje"},UploadFiles:{d:"Permite membrilor să încarce fișiere în canale de text.",t:"Încarcă fișiere"},EmbedLinks:{d:"Permite membrilor să afișeze conținut încorporat pe link-urile pe care le postează în canalele de text.",t:"Încorporează link-uri"},InviteOthers:{d:"Permite membrilor să invite alți utilizatori pe un canal.",t:"Schimbă porecla"},VoiceCall:{d:"Permite membrilor să se alăture canalelor de voce.",t:"Apel Vocal"},ManageChannel:{d:"Permite membrilor să editeze sau să șteargă un canal.",t:"Dă afară membri"},SendMessage:{d:"Permite membrilor să trimită mesaje în canale de text.",t:"Trimite Mesaje"},View:{d:"Permite membrilor să vizualizeze toate canalele pentru care au această permisiune.",t:"Vezi Canalul"}},server:{RemoveAvatars:{d:"Permite membrilor să elimine avatarele de server ale altor membri de pe acest server.",t:"Îndepărtează Avatare"},BanMembers:{d:"Permite membrilor să elimine permanent membri de pe acest server.",t:"Interzice Membri"},ManageServer:{d:"Permite membrilor să modifice numele, descrierea, pictograma și alte informații legate de acest server.",t:"Gestionează Serverul"},ManageChannels:{t:"Gestionează Canalele",d:"Permite membrilor să creeze, să editeze și să șteargă canale."},ManageRoles:{d:"Permite membrilor să creeze, să editeze și să șteargă roluri cu un rang mai mic decât al lor. De asemenea, le permite să modifice permisiunile rolurilor pe canale.",t:"Gestionează Roluri"},ChangeAvatar:{d:"Permite membrilor să își schimbe avatarul serverului pe acest server.",t:"Schimbă Avatar"},ManageNicknames:{d:"Permite membrilor să schimbe poreclele altor membri.",t:"Gestionează Porecle"},ChangeNickname:{d:"Permite membrilor să își schimbe porecla pe acest server.",t:"Schimbă Porecla"},KickMembers:{d:"Permite membrilor să elimine membri de pe acest server. Membrii dați afară se pot reîntoarce cu o invitație.",t:"Exclude Membrii"}}};var c={app:e,login:i,general:a,notifications:t,dayjs:r,quantities:n,error:o,shortcuts:s,permissions:l};export{e as app,r as dayjs,c as default,o as error,a as general,i as login,t as notifications,l as permissions,n as quantities,s as shortcuts};
//# sourceMappingURL=ro.f5358b63.js.map
