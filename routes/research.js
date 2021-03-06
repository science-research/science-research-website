var fs = require('fs');
var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('research/index', { title: 'Research' });
});

router.get('/papers', function(req, res, next) {
  // var doc = fs.readFileSync('documents/uhaif76i32urhfliusch.research', 'utf8');
  const document_paper = {
    title: 'Einflüsse auf die Resilienz',
    authors: 'Luca Lewin',
    abstract: 'Abstract',
    keywords: 'Psychology, Biology, Resilience',
    publication: 'Publication',
    year: '2021',
    url: 'http://www.example.com',
    doi: '10.1234/5678',
    citation: 'Citation',
    citation_count: 'Citation Count',
    sections: [
      {
        title: '1.	Einleitung',
        level: 0,
        content: 'Das Konzept der Resilienz liegt der Beobachtung zugrunde, dass Kinder trotz schwieri-geren Umständen in der Kindheit zu leistungsfähigen Erwachsenen werden können. Dabei beschäftigt sich diese Hausarbeit mit der Frage, wie man diese Resilienz bei Kin-dern und Jugendlichen stärken, bzw. fördern kann. Zunächst werden für das weitere Verständnis der Hausarbeit wichtige Begriffe im Zu-sammenhang mit der Resilienz definiert. Darauf folgt ein Überblick auf die Resilienz-forschung und die Bereiche, in denen geforscht wird. Im nächsten Teil wird herausgear-beitet, welche Bedeutung Resilienz für die Entwicklung von Kindern und Jugendlichen trägt. Der letzte Teil dieser Hausarbeit beschäftigt sich mit der Frage, welche Möglichkeiten es gibt, um die Resilienz bei Kindern und Jugendlichen zu fördern. Abschließend wird ein Ausblick auf den aktuellen und zukünftigen Stand der Resilienzförderung gegeben.'
      },
      {
        title: '2.	Begriffsdefinitionen',
        level: 0,
        content: ''
      },
      {
        title: '2.1.	Resilienz',
        level: 1,
        content: 'Unter dem Begriff der Resilienz (von lat. resilire: abprallen, zurückspringen, nicht an-haften) versteht man im Allgemeinen die Widerstandsfähigkeit gegenüber Belastungen im Verlauf der Entwicklung eines Menschen. Resilienz wird verwendet, um die Fähig-keiten von Kindern und Jugendlichen (und auch Erwachsenen) zu umschreiben, welche ihnen ermöglichen mit den Folgen belastender Lebensumstände relativ unbeschadet um-zugehen und (daraus) Bewältigungskompetenzen zu entwickeln. Allerdings ist Resilienz nicht wie zu Anfang der Resilienzforschung gedacht angeboren, sondern wird im Laufe der Entwicklung eines Menschen durch Interaktionen mit der (sozialen) Umwelt erworben.  Dennoch ist die Resilienz nicht stabil, sondern ihre Stärke kann über Zeit und Situationen variieren, da sie von Mensch-Umwelt-Interaktionen be-einflusst werden kann.1,2 Das heißt, dass die erworbene Resilienz nicht lebenslang ist und man zu späteren Zeitpunkten verwundbarer sein kann, häufig in Entwicklungsüber-gängen, z. B. der Übergang vom Kindergarten in die Schule oder die Pubertät.2, Zum genaueren Verständnis über die Entstehung von Resilienz muss man die auf den Menschen einwirkenden Risiko- und Schutzfaktoren getrennt betrachten.1'
      },
      {
        title: '2.2.	Risikofaktoren',
        level: 1,
        content: 'Risikofaktoren sind entwicklungshemmende, krankheitsbegünstigende und risikoerhö-hende Merkmale, von denen potenziell eine Gefährdung auf die positive und gesunde Entwicklung eines Kindes ausgeht. Risikofaktoren lassen sich in zwei Bereiche untertei-len: individuelle Faktoren und umweltbezogene Faktoren. Zu den individuellen Risikofaktoren gehören unter anderen Frühgeburten, negatives mütterliches Ernährungsverhalten oder Substanzkonsum, aber auch psychologische Fak-toren wie ein negatives Selbstbild oder ein schwieriges Temperament zählen dazu.4 Umweltbezogen Risikofaktoren hingegen sind Faktoren aus dem sozialen Umfeld der Personen, zu denen schlechte Wohnverhältnisse, eine niedrige Sozialschicht, aber auch Gewalt und Misshandlung in der Familie und Erkrankungen von Familienmitgliedern.4'
      },
      {
        title: '2.3.	Schutzfaktoren',
        level: 1,
        content: 'Schutzfaktoren sind generell als Gegenbegriff zu Risikofaktoren zu sehen. Im Gegen-satz zu Risikofaktoren, welche das Auftreten von Stress, Belastungen oder Störungen wahrscheinlicher machen, sind Schutzfaktoren entwicklungsfördernd, protektiv und ri-sikovermindernd.4 Schutzfaktoren lassen sich wie Risikofaktoren in zwei Kategorien einteilen: Zum einen wieder individuelle Faktoren, wie ein positives Temperament, Selbstwirksamkeitsüber-zeugungen und ein positives Selbstbild und soziale Faktoren, zu denen gute familiäre Verhältnisse, wie eine positive Eltern-Kind-Beziehung und eine höhere soziale Schicht gehören.4,'
      },
      {
        title: '3.	Resilienzforschung',
        level: 0,
        content: 'Die Resilienzforschung entstand, nachdem vor etwa 65 Jahren im Rahmen von Studien zu Risikofaktoren die Resilienz als überraschende Nebenerkenntnis auftauchte.  Die Zie-le dieser neuen Forschungsrichtung sind Präventions- und Interventionsmaßnahmen im Hinblick auf die Resilienz.5 Vereinfacht gesagt heißt das, dass versucht wird Schutzfak-toren zu stärken, sowie Risikofaktoren zu vermindern, bzw. zu verhindern. Dabei wird besonders die Resilienzförderung auf individueller Ebene und Beziehungsebene er-forscht.5 Aber es wird auch die Entstehung von Resilienz im Gehirn erforscht. Dabei wird vermu-tet, dass sich eine höhere Widerstandsfähigkeit eines Menschen in seiner Gehirnstruktur zeigt. Um zu erkennen, wer resilient ist, verwenden Forscher häufig Fragebogen. Dr. OLIVER TÜSCHER, Professor für Klinische Resilienzforschung hat mit seinem Team die soge-nannte „Brief Resilience Scale“ (BRS) in Deutschland etabliert.7 Die BRS besteht aus sechs Fragen, mit denen die Resilienz von Menschen eingeschätzt werden kann.7,  Al-lerdings kann mit dieser Methode nicht die Länge und Stärke der Belastung ermittelt werden.7t'
      },
      {
        title: '4.	Bedeutung von Resilienz',
        level: 0,
        content: 'In der Kauai Langzeitstudie haben Forscher, unter der Leitung von EMMY E. WERNER und RUTH SMITH, den gesamten Geburtsjahrgang 1955 der Hawaiianischen Insel Kauai, 698 Kinder, über 40 Jahre lang begleitet. , , Bei ca. einem Drittel der Kinder ließen sich nach zwei Jahren mehrere Risikofaktoren feststellen, welche zu einem hohen Ent-wicklungsrisiko führen.9 Von diesen Kindern galten zwei Drittel als „Hochrisikokinder“ 9, die im weiteren Entwicklungsverlauf straffällig und früh schwanger wurden und Ver-haltensstörungen besaßen.9 Das andere Drittel hingegen entwickelte sich trotz dieser Ri-sikofaktoren zu gut entwickelten, selbstsicheren und leistungsstarken Erwachsenen.9,11 Bei ihnen ließen sich im Laufe der Jahre Eigenschaften feststellen, welche sie resilient gegenüber den Risikofaktoren gemacht haben. Zu diesen Eigenschaften zählen laut der Kauai Langzeitstudie unter anderen „positive Selbstkonzepte“, „Selbstbewusstsein“ und „Selbstvertrauen“, „höhere Sozialkompetenzen“, sowie „besser entwickelte Problemlöse- und Kommunikationsfähigkeiten“, „gut entwickelte Selbsthilfefertigkeiten“, aber auch die „Fähigkeit, Hilfe zu erbitten“.9,11 Die resilienten Kinder besaßen also Eigenschaften, welche wir heutzutage als Schutzfak-toren definieren, die ihnen geholfen haben, sich trotz schlechter Bedingungen positiv zu entwickeln. Daraus lässt sich schließen, dass Resilienzfaktoren eine wichtige Bedeutung für eine bessere und positive Entwicklung eines Kindes tragen und deshalb gefördert werden sollte.'
      },
      {
        title: '5.	Stärkung der Resilienz',
        level: 0,
        content: 'Resilienzförderung besteht hauptsächlich daraus, Risikofaktoren zu vermindern und da-bei Schutzfaktoren zu stärken. Hier lässt sich die Resilienzförderung wie Risiko- und Schutzfaktoren in die individuelle Ebene und in die Beziehungsebene unterteilen. Zur Resilienzförderung auf individueller Ebene gehört die Förderung von Problemlöse-fertigkeiten. Kinder sollten lernen, selbst die Probleme anzugehen und zu lösen. Dadurch wird auch die Eigenaktivität des Kindes gefördert. Bringt man Kindern bei selbst Verantwortung zu übernehmen, so stärkt sich auch die Selbstwirksamkeit und das Selbstwertgefühl des Kindes. Des Weiteren hat das Erlernen von effektiven Stressbe-wältigungsstrategien, wie z. B. Entspannungsstrategien einen positiven Einfluss auf die Prävention von Stresssituationen, welche nun leichter bewältigt werden können. Auf der Beziehungsebene sind die Eltern, im Hinblick auf die Stärkung der Resilienz des Kindes, besonders wichtig. Dafür sollten die Eltern als Vorbilder auftreten und kla-ren Regeln in der Erziehung folgen. Dazu gehören konstruktive Kommunikation, Kom-petenz und Konfliktlösestrategien, was dem Kind ermöglicht Verantwortung zu über-nehmen und von diesen Strategien zu lernen, wodurch ihre Resilienz gefördert wird.12'
      },
      {
        title: '6.	Fazit',
        level: 0,
        content: 'Wie sich herausgestellt hat, ist die Förderung der Resilienz besonders wichtig, damit man besser auf Stresssituationen vorbereitet ist oder diese ganz vermeiden kann. Dazu gibt es schon heute einige Methoden, wobei noch nicht alle Möglichkeiten genutzt wer-den. In der Zukunft könnte man überprüfen, ob und wie die Schule den Kindern und Ju-gendlichen helfen kann resilienter zu werden, wodurch man noch besser erfahren könn-te, wie den Schülern und Schülerinnen bei der Bewältigung, bzw. der Prävention von Schulstress geholfen werden kann.'
      }
    ]
  };
  res.locals.paper = document_paper;
  res.render('research/papers', { title: 'Research Papers' });
});

router.get('/articles', function(req, res, next) {
  res.render('research/articles', { title: 'Research Articles' });
});

router.get('/studies', function(req, res, next) {
  res.render('research/studies', { title: 'Research Studies' });
});

router.get('/software', function(req, res, next) {
  res.render('research/software', { title: 'Research Software' });
});

module.exports = router;
