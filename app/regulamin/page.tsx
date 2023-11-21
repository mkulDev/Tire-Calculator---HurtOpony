import React from 'react'
import SitePath from '@/components/SitePath'
import Link from 'next/link'
const Regulamin = () => {
  return (
    <>
      <SitePath site='Regulamin' />
      <div className='px-[10%] bg-white text-[14px] pb-[15px]'>
        <h2 className='text-2xl font-[700] my-[20px]'>Regulamin oraz Polityka Prywatności sklepu Hurtopony.pl</h2>

        <h4 className='py-3'>
          <strong>§1 Słownik pojęc</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] space-y-1'>
          <li>
            Sprzedawca - HURTOPONY Sp. z o.o. z siedzibą w Sosnowcu, ul. Baczyńskiego 25A, 41-203 Sosnowiec NIP:
            629-249-67-25 REGON: 386030051 zarejestrowany w Krajowy Rejestrze Sądowym pod numerem KRS 0000840304 w SĄD
            REJONOWY KATOWICE-WSCHÓD W KATOWICACH VIII WYDZIAŁ GOSPODARCZY KRAJOWEGO REJESTRU SĄDOWEGO o kapitale
            zakładowym wynoszącym 140000PLN. nr. tel. 32 265 01 56, nr. faksu 32 265 01 56, adres e-mail:{' '}
            <Link href='mailto:sklep@hurtopony.pl'>
              <strong>sklep@hurtopony.pl</strong>
            </Link>
          </li>
          <li>
            Sklep - serwis internetowy należący do Sprzedawcy, dostępny pod domeną www.hurtopony.pl, za pośrednictwem
            którego Kupujący może składać zamówienia.{' '}
          </li>
          <li>
            Kupujący - każdy podmiot składający zamówienie w Sklepie (Konsument lub osoba nieposiadająca statusu
            Konsumenta).{' '}
          </li>
          <li>
            Konsument - Kupujący będący osobą fizyczną dokonującą czynności prawnej (umowy sprzedaży za pośrednictwem
            Sklepu) niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową (art. 221 Kodeksu cywilnego).{' '}
          </li>
          <li>Regulamin - niniejszy regulamin.</li>
          <li>Towar - rzecz ruchoma, dostępna w sprzedaży w Sklepie, w szczególności opony.</li>
          <li>
            Zamówienie - oświadczenie woli Kupującego zmierzające bezpośrednio do zawarcia umowy sprzedaży towarów na
            odległość za pośrednictwem Sklepu, określające co najmniej rodzaj i liczbę Towarów.
          </li>
        </ul>
        <h4 className='py-3'>
          <strong>§2 Postanowienia ogólne</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] space-y-1'>
          <li>
            Regulamin określa zasady zawarcia i wykonania umowy sprzedaży Towarów znajdujących się na stronie Sklepu.
          </li>
          <li>
            W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mieć będą odpowiednie przepisy Kodeksu
            Cywilnego, ustawy z dnia 02.03.2000 r. o ochronie niektórych praw konsumentów oraz odpowiedzialności za
            szkodę wyrządzoną przez produkt niebezpieczny.
          </li>
          <li>
            Do składania Zamówień w Sklepie niezbędne jest posiadanie urządzeń pozwalających na dostęp do Internetu,
            poczty e-mail oraz przeglądarki zasobów internetowych umożliwiającej wyświetlanie stron www.{' '}
          </li>
          <li>Przedmiotem sprzedaży są Towary prezentowane przez Sklep w chwili składania Zamówienia.</li>
          <li>Ceny uwidocznione obok Towarów podawane są w polskich złotych i zawierają podatek VAT.</li>
          <li>Oferta Sprzedawcy w Sklepie obowiązuje na terenie Polski.</li>
          <li>
            Informacje dotyczące poszczególnych Towarów nie stanowią oferty sprzedaży w rozumieniu przepisów prawa
            cywilnego. Zawartość Sklepu internetowego stanowi zaproszenie do zawarcia umowy w rozumieniu art. 71 Kodeksu
            Cywilnego.
          </li>
        </ul>
        <h4 className='py-3'>
          <strong>§3 Jakość Towarów</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] space-y-1'>
          <li>Opony sprzedawane przez Sklep pochodzą z bieżącej produkcji i są oponami pełnowartościowymi.</li>
          <li>
            Za opony pełnowartościowe uważa się zgodnie z Polską Normą PN-C-94300-7:1997 &quot;Ogumienie. Pakowanie,
            przechowywanie i transport&quot;, opony nie starsze niż 36 miesięcy od daty produkcji.{' '}
          </li>
          <li>
            Informacja wskazana w § 3 ust. 1 Regulaminu nie dotyczy opon, w których data produkcji jest wyraźnie opisana
            w karcie Towaru.
          </li>
          <li>
            Sprzedawca zapewnia, iż stosownie do obowiązujących przepisów prawa, obowiązany jest do zapewnienia
            zgodności Towarów z umową. Obowiązek powyższy oznacza konieczność dostarczenia Towarów bez wad fizycznych
            oraz prawnych.
          </li>
        </ul>
        <h4 className='py-3'>
          <strong>§4 Składanie Zamówień</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] space-y-1'>
          <li>
            Sprzedawca umożliwia składanie Zamówień w następujący sposób:
            <ul>
              <li>za pośrednictwem Sklepu wypełniając interaktywny formularz;</li>
              <li>przez telefon pod numerem: 32 265 01 56, 32 706 10 18</li>
              <li>faksem na numer: 32 265 01 56;</li>
              <li>pocztą elektroniczną (e-mail: sklep@hurtopony.pl).</li>
            </ul>
          </li>
          <li>Koszt połączeń telefonicznych jak i faksów jest zgodny z posiadaną przez Kupującego taryfą.</li>
        </ul>
        <h4 className='py-3'>
          <strong>§5 Warunki płatności</strong>
        </h4>
        <ul>
          <li className='mb-[14px]'>1. Sprzedawca udostępnia następujące sposoby płatności za zamówione Towary:</li>
          <ul className=' list-disc pl-[30px] space-y-1'>
            <li>
              gotówką do rąk pracownika firmy kurierskiej (tzw. za pobraniem). Transakcje za pobraniem o wartości
              przekraczającej 5000zł ustalane są indywidualnie (tzn. mogą wymagać wpłacenia zaliczki), w zależności od
              limitów kwoty pobrania firmy dostarczającej przesyłkę;
            </li>
            <li>przelew bankowy na konto Sprzedawcy (ING Bank S.A) na podstawie faktury pro-forma;</li>
            <li>płatność ratalna realizowana za pośrednictwem BNP PARIBAS Spółka Akcyjna.</li>
            <li>
              {' '}
              Płatności BLIK, karta płatnicza, przelew elektroniczny poprzez zewnętrzny system płatności imoje,
              obsługiwany przez firmę ING Bank Śląski S.A. z&nbsp;siedzibą w&nbsp;Katowicach.”
            </li>
          </ul>
          <li className='my-[14px]'>2. Termin płatności:</li>
          <ul className=' list-disc pl-[30px] space-y-1'>
            <li>w przypadku płatności gotówką za pobraniem - w dniu dostarczenia Towaru;</li>
            <li>w przypadku zapłaty przelewem bankowym - w terminie zapłaty widocznym na fakturze pro-forma</li>
            <li>
              w przypadku płatności ratalnej terminy płatności poszczególnych rat określone są w umowie z bankiem
              udzielającym kredytu.
            </li>
          </ul>
          <li className='my-[14px]'>3. Sprzedaż ratalna:</li>
          <ul className=' list-disc pl-[30px] space-y-1'>
            <li>Raty udzielane są przy zakupie powyżej 150zł.</li>
            <li>
              Końcowym etapem po złożeniu Zamówienia jest uzupełnienie wniosku ratalnego z danymi, które posłużą do
              weryfikacji zdolności kredytowej w banku. Ważne jest, aby podane przez Klienta dane były zgodne ze stanem
              rzeczywistym, gdyż będą one sprawdzane w dalszym procesie weryfikacji. W przypadku pozytywnej decyzji i
              spełnieniu wszystkich warunków następuje realizacja Zamówienia.
            </li>
            <li>
              W przypadku negatywnej weryfikacji, wniosek zostanie odrzucony przez bank. W tym momencie istnieje
              możliwość zmiany formy płatności za zamówiony Towar.
            </li>
            <li>
              Więcej na tamat sprzedaży ratalnej w Sklepie przeczytasz w zakładce:{' '}
              <a href='/kup-opony-na-raty.html'>opony na raty</a>
            </li>
          </ul>
        </ul>
        <h4 className='py-3'>
          <strong>§6 Koszty dostawy</strong>
        </h4>
        <ul className=' list-disc pl-[30px] space-y-1'>
          <li>
            Koszt dostawy Towaru (koszty przesyłki) pokrywa Sprzedawca w przypadku zamówień Towarów powyżej 1 szt. W
            przeciwnym wypadku koszt dostawy ustalany jest indywidualnie dla każdego Towaru. Koszt dostawy dla 1 szt.
            widoczny jest na karcie Towaru w zakładce &quot;Koszt dostawy&quot;.
          </li>
          <li>
            Koszty dostawy 1 szt zawierają się w kwocie od 19 zł do 109 zł i jest zależny od gabarytu przysyłki i czy
            przesyłka jest paletowa
          </li>
          <li>Sprzedawca nie realizuje wysyłek poza granice Polski.</li>
        </ul>
        <h4 className='py-3'>
          <strong>§7 Sprawdzenie przesyłki przez Kupującego</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] space-y-1'>
          <li>
            Odbierając dostarczony przez kuriera Towar Kupujący obowiązany jest zbadać przesyłkę (na podstawie art. 545
            § 2 Kodeksu cywilnego). W przypadku uszkodzenia przesyłki Sprzedawca zaleca sporządzenie protokołu szkody w
            obecności kuriera oraz niezwłoczne poinformowanie o tym Działu Obsługi Klienta Sprzedawcy. W przypadku
            trudności ze sprawdzeniem Towaru lub odmowy spisania protokołu szkody przez kuriera, Sprzedawca zaleca
            spisanie danych osobowych pracownika kuriera (imienia, nazwiska oraz numeru telefonu) i niezwłoczne
            przekazanie tej informacji do Działu Obsługi Klienta Sprzedawcy.{' '}
          </li>
        </ul>
        <h4 className='py-3'>
          <strong>§8 Odstąpienie od umowy (&quot;zwrot&quot; Towaru)</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] space-y-1'>
          <li>
            Kupujący ma prawo do pisemnego odstąpienia od zawieranej umowy bez podania przyczyny w terminie czternastu
            dni, od daty zawarcia umowy na podstawie ustawy z dnia 30 maja 2014 r. (Dz.U. 2014 r. poz. 827 ze zm.) W
            przypadku pisemnego odstąpienia od umowy Klient zobowiązany jest do zwrotu towaru w terminie czternastu dni.
            Uprawnienie, o którym mowa powyżej dotyczy również&nbsp;osoby fizycznej zawierającej umowę bezpośrednio
            związaną z jej działalnością gospodarczą, gdy z treści tej umowy wynika, że nie posiada ona dla tej osoby
            charakteru zawodowego, wynikającego w szczególności z przedmiotu wykonywanej przez nią działalności
            gospodarczej, udostępnionego na podstawie przepisów o Centralnej Ewidencji i Informacji o Działalności
            Gospodarczej.
          </li>
          <li>
            Do zachowania tego terminu wystarczy wysłanie oświadczenia przed jego upływem. Wzór oświadczenia o
            odstąpieniu od umowy przesyłany jest Kupującemu za pośrednictwem wiadomości e-mail.
          </li>
          <li>
            W razie odstąpienia Konsument zobowiązany jest do zwrotu Towaru w stanie niezmienionym. Jeśli Sprzedający
            stwierdzi, że Towar nosi ślady użytkowania (np. opony były montowane na felgę) Kupujący traci prawo
            odstąpienia od umowy.
          </li>
          <li>
            Konsument zobowiązany jest do zwrotu Towaru niezwłocznie, w terminie nie dłuższym niż 14 dni od dnia
            odstąpienia od umowy.{' '}
          </li>
          <li>Konsument, który odstąpił od umowy wysyła Towar do Sprzedawcy na własny koszt.</li>
          <li>W przypadku skorzystania z prawa do 14-dniowego odstąpienia koszt zwrotu towaru ponosi kupujący</li>
          <li>
            Wszystkie dokonane przez Kupującego będącego Konsumentem płatności, zostaną zwrócone przez Sprzedawcę w
            terminie 14 dni od dnia otrzymania oświadczenia o odstąpieniu od umowy.
          </li>
          <li>
            Kupujący nieposiadający statusu Konsumenta nie ma uprawnienia do odstąpienia od umowy. Wobec takich
            Kupujących zasady i terminy odstąpienia od umowy regulują przepisy Kodeksu cywilnego.{' '}
          </li>
        </ul>
        <h4 className='py-3'>
          <strong>§9 Reklamacja</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] space-y-1'>
          <li>Każdy sprzedawany Towar objęty jest gwarancją lub rękojmią producenta lub dystrybutora.</li>
          <li>
            Reklamacje z tytułu niezgodności Towaru z umową sprzedaży można składać pisemnie na adres Sprzedawcy lub za
            pośrednictwem poczty elektronicznej na adres: reklamacje@hurtopony.pl.
          </li>
          <li>
            Składającemu reklamację Sprzedawca zaleca podanie danych kontaktowych Kupującego, dokładne opisanie przyczyn
            reklamacji i żądań wobec Sprzedawcy w protokole reklamacyjnym, a także dołączenie dokumentu sprzedaży, bądź
            jego kserokopii.
          </li>
          <li>
            Jeżeli podane w reklamacji dane lub informacje wymagają uzupełnienia, przed rozpatrzeniem reklamacji
            Sprzedający zwraca się do składającego reklamację o jej uzupełnienie we wskazanym zakresie.
          </li>
          <li>
            Po zgłoszeniu reklamacji Kupujący zobowiązany jest dostarczyć reklamowany Towar na swój koszt na adres
            wskazany przez Sprzedawcę.
          </li>
          <li>
            Sprzedający rozpoznaje reklamację Klienta bądącego Kosumentem w terminie 14 dni od daty jej otrzymania w
            prawidłowej postaci. Gdyby to nie było możliwe, Sprzedający poinformuje w tym okresie Klienta będącego
            Konsumentem, kiedy reklamacja zostanie rozpatrzona.
          </li>
          <li>
            Odpowiedź na reklamację wysyłana jest na podany przez Kupującego adres e-mail bądź na adres poczty
            tradycyjnej.
          </li>
        </ul>
        <h4 className='py-3'>
          <strong>§10 Gwarancja</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] space-y-1'>
          <li>Każdy sprzedawany Towar objęty jest gwarancją lub rękojmią producenta lub dystrybutora.</li>
          <li>
            Towary sprzedawane przez Sprzedawcę są objęte gwarancją udzieloną przez odpowiedniego producenta bądź
            dystrybutora. Właściciel Sklepu nie jest producentem sprzedawanych produktów. Odpowiedzialność z tytułu wad
            sprzedanego towaru ponosi producent.
          </li>
          <li>
            Gwarancja nie obejmuje wad spowodowanych: uszkodzeniem mechanicznym (przebiciem, przecięciem), nieprawidłową
            eksploatacją, nieprawidłowym montażem, złym stanem technicznym pojazdu, nieprawidłowym przechowywaniem.
          </li>
          <li>
            W przypadku Umowy sprzedaży zawieranej z Klientem niebędącym jednocześnie Konsumentem osoba fizyczną, na
            podstawie art. 558 § 1 Kodeksu Cywilnego, odpowiedzialność Hurtopony z tytułu rękojmi za wady Towaru zostaje
            wyłączona.{' '}
          </li>
        </ul>
        <h4 className='py-3'>
          <strong>§11 Ochrona danych osobowych i prywatności</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] space-y-1'>
          <li>
            Składając Zamówienia (w szczególności wypełniając interaktywny formularz) Kupujący wyraża zgodę na
            przetwarzanie podanych przez niego danych osobowych w celu realizacji i obsługi zamówienia przez Sprzedawcę,
            który jest jednocześnie administratorem danych, zgodnie z przepisami ustawy z dnia 29 sierpnia 1997 r. o
            ochronie danych osobowych.
          </li>
          <li>
            Dane osobowe znajdujące się w bazie danych Sprzedawcy nie są przekazywane podmiotom nie uczestniczącym w
            realizacji umowy sprzedaży.
          </li>
          <li>
            Kupujący zgodnie z ustawą o ochronie danych osobowych ma prawo wglądu do swoich danych osobowych, możliwość
            ich poprawiania oraz usunięcia. Sprzedawca zapewnia każdemu Kupującemu prawo kontroli przetwarzania danych
            zgodnie z art. 32 ustawy o ochronie danych osobowych.{' '}
          </li>
          <li>
            Podanie danych osobowych jest dobrowolne, jednakże brak zgody określonej w §9 ust. 2 na przetwarzanie danych
            osobowych uniemożliwia zrealizowanie Zamówienia Kupującego.{' '}
          </li>
        </ul>
        <h4 className='py-3'>
          <strong>
            §12 Informacja administratora danych osobowych sporządzona na podstawie art. 13 ust. 1 i 2 ogólnego
            rozporządzenia o ochronie danych (RODO)
          </strong>
        </h4>
        <br />
        <p>
          Zgodnie z art. 13 ust. 1 i ust. 2 Ogólnego rozporządzenia o ochronie danych z dnia 27 kwietnia 2016 r.
          (Dz.U.UE.L.2016.119.1) (dalej „RODO”) informuję, iż: Administratorem Pani/Pana danych osobowych jest Hurtopony
          Sp z o.o. Baczyńskiego 25A, 41-203 Sosnowiec, Polska NIP: 629-249-67-25 (dalej „Administrator”);
        </p>
        <p className='pt-[14px]'>Zakres przetwarzanych danych osobowych obejmuje:</p>
        <ul className='list-decimal	pl-[30px] py-[14px] space-y-1'>
          <li>Imię i nazwisko,</li>
          <li>Adres poczty elektronicznej (email),</li>
          <li>Numer telefonu,</li>
          <li>Adres zamieszkania,</li>
          <li>Dane fakturowe firmy (nazwa,adres,numer NIP)</li>
        </ul>
        <p> Pani/Pana dane osobowe przetwarzane będą w celu:</p>
        <ul className='list-decimal	pl-[30px] py-[14px] space-y-1'>
          <li>
            realizacji usług świadczonych przez Administratora na podstawie art. 6 ust. 1 pkt b) RODO (w celu wykonania
            umowy, dostarczenia towaru),
          </li>
          <li>
            przesyłania wiadomości marketingowych produktów i usług własnych przez Administratora na podstawie art. 6
            ust. 1 pkt f) RODO (prawny interes Administratora),
          </li>
          <li>
            wysyłania informacji handlowych przez Administratora na podstawie art. 6 ust. 1 pkt a) RODO (zgoda udzielona
            Administratorowi przez osobę, której dane dotyczą),(jeżeli zgoda została wyrażona przez Panią/Pana),
          </li>
          <li>
            przekazania Pani/Pana danych osobowych do ING Banku Śląskiego S.A. („Bank”) w&nbsp;związku z:
            <ul className='list-decimal	pl-[30px] py-[14px] space-y-1'>
              <li>
                świadczeniem przez Bank na rzecz Administratora usługi udostępnienia infrastruktury do obsługi płatności
                przez Internet (podstawa prawna: art. 6 ust. 1 lit. f) RODO).
              </li>
              <li>
                obsługą i rozliczaniem przez Bank płatności dokonywanych przez klientów Administratora przez Internet
                przy użyciu instrumentów płatniczych (podstawa prawna: art. 6 ust. 1 lit. f) RODO).
              </li>
              <li>
                w celu weryfikacji przez Bank należytego wykonania umów zawartych z Administratorem, w szczególności
                zapewnienia ochrony interesów płatników w związku ze składanymi przez nich reklamacjami (podstawa
                prawna: art. 6 ust. 1 lit. f) RODO).
              </li>
            </ul>
          </li>
          <li>
            W sprawach nieuregulowanych regulaminem zastosowanie mają postanowienia Kodeksu cywilnego i odpowiednich
            ustaw prawa polskiego, a także prawa Unii Europejskiej, w szczególności RODO (Rozporządzenie Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE)
          </li>
        </ul>
        <p>
          Odbiorcą Pani/Pana danych osobowych będą podmioty zewnętrzne przetwarzające dane w imieniu Administratora na
          podstawie umów powierzenia.
        </p>
        <p>
          W związku z przetwarzaniem danych osobowych w celach określonych powyżej, Pani/Pana dane osobowe mogą zostać
          udostępnione przez Administratora innym odbiorcom lub kategoriom odbiorców danych osobowych, którymi mogą być:
        </p>
        <ul className='list-decimal	pl-[30px] py-[14px] space-y-1'>
          <li>ING Bank Śląski S.A.</li>
          <li>hostingodawca</li>
          <li>firma kurierska/spedycja dostarczająca towar</li>
        </ul>

        <p>
          Pani/Pana dane osobowe nie będą przekazywane do państwa trzeciego lub innej organizacji międzynarodowej;
          Pani/Pana dane osobowe będą przechowywane przez okres realizacji usług świadczonych przez Administratora oraz
          przez okres wynikający z przedawnienia roszczeń, praw konsumenta, prowadzenia księgowości czy innych uprawnień
          w tym zakresie;
        </p>
        <p>
          W przypadku, gdy podanie przez Panią/Pana danych osobowych następuje w celu zawarcia umowy z Administratorem,
          podanie przez Panią/Pana danych osobowych jest warunkiem zawarcia tej Umowy. Podanie danych osobowych w tej
          sytuacji jest dobrowolne, jednak konsekwencją niepodania tych danych będzie brak możliwości zawarcia umowy z
          Administratorem.
        </p>
        <p>
          W przypadku przekazania Pani/Pana danych osobowych do Banku w związku z obsługą i rozliczaniem płatności
          dokonywanych przez Panią/Pana płatności na rzecz Administratora przez Internet przy użyciu instrumentów
          płatniczych, podanie danych jest wymagane w celu realizacji płatności i przekazania potwierdzenia jej
          dokonania przez Bank na rzecz Administratora.
        </p>
        <p>
          W przypadku przekazania Pani/Pana danych osobowych do Banku w celu weryfikacji przez Bank należytego wykonania
          umów zawartych z Administratorem, w szczególności zapewnienia ochrony interesów płatników w związku ze
          składanymi przez nich reklamacjami podanie tych danych jest wymagane w celu umożliwienia realizacji umowy
          zawartej pomiędzy Administratorem a Bankiem.
        </p>
        <p>
          W związku z przetwarzaniem Pani/Pana danych osobowych przez Administratora, przysługują Pani/Panu określone
          uprawnienia:
        </p>
        <ul className='list-decimal	pl-[30px] py-[14px] space-y-1 '>
          <li>
            ma Pani/Pan prawo do informacji, jakie dane osobowe dotyczące Pani/Pana przetwarzane są przez Administratora
            oraz do otrzymania kopii tych danych{' '}
          </li>
          <li>
            jeżeli przetwarzane dane staną się nieaktualne lub niekompletne niepoprawne (lub w inny sposób niepoprawne)
            ma Pani/Pan prawo zażądać ich sprostowania;
          </li>
          <li>
            w pewnych sytuacjach może Pani/Pan zwrócić się do Administratora o usunięcie swoich danych osobowych, tj.
            kiedy dane przestaną być potrzebne Administratorowi do celów, o których Panią/Pana informował lub kiedy
            cofnie Pani/Pan zgodę na przetwarzanie danych (o ile Administrator nie ma prawa przetwarzać danych na innej
            podstawie prawnej); jeżeli do przetwarzania doszłoby niezgodnie z prawem; albo jeśli konieczność usunięcia
            danych wynika z obowiązku prawnego Administratora;
          </li>
          <li>
            Administrator przetwarza Pani/Pana dane osobowe m.in. w celu prowadzenia działań marketingowych dotyczących
            jego produktów i usług. Podstawą takiego przetwarzania jest tzw. „prawnie uzasadniony interes
            administratora”. W przypadku takiego przetwarzania ma Pani/Pan możliwość wyrażenia sprzeciwu. W konsekwencji
            Administrator przestanie przetwarzać Pani/Pana
          </li>
        </ul>
        <h4 className='py-3'>
          <strong>§13 Postanowienia końcowe</strong>
        </h4>
        <ul className='list-decimal	pl-[30px] py-[14px] space-y-1 justify-items-stretch'>
          <li>W sprawach nieuregulowanych Regulaminem obowiązują przepisy powszechnie obowiązującego prawa.</li>
          <li>
            Regulamin nie wyłącza oraz nie ogranicza żadnych uprawnień Kupującego będącego Konsumentem, które
            przysługują mu na mocy bezwzględnie obowiązujących przepisów prawa. W przypadku sprzeczności pomiędzy
            postanowieniami Regulaminu, a bezwzględnie obowiązującymi przepisami prawa, przyznającymi Konsumentom
            uprawnienia, pierwszeństwo mają te przepisy.
          </li>
        </ul>
      </div>
    </>
  )
}

export default Regulamin
